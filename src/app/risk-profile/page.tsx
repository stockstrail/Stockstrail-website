import { redirect } from "next/navigation";
import type { Metadata } from "next";
import SimpleLayout from "@/components/layout/SimpleLayout";
import RiskQuestionnaire from "@/components/risk/RiskQuestionnaire";
import { getServerUser, getServerProfile } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Risk Profiling Questionnaire | Stockstrail",
  description:
    "Answer 11 questions to determine your risk tolerance, investment horizon, and get an indicative allocation profile aligned with Stockstrail's methodology.",
  alternates: {
    canonical: "https://www.stockstrail.in/risk-profile",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function RiskProfilePage() {
  const user = await getServerUser();

  // If user is not logged in, direct them to the free un-gated assessment
  if (!user) {
    redirect("/check-risk-profile");
  }

  // Check if phone number exists for logged-in user
  const profile = await getServerProfile(user.id);
  if (!profile?.phone_number) {
    redirect("/complete-profile");
  }

  return (
    <SimpleLayout>
      <RiskQuestionnaire />
    </SimpleLayout>
  );
}
