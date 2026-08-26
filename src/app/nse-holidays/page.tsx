import type { Metadata } from 'next';
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: 'NSE Holiday List 2026 | Stockstrail',
  description:
    'Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.',
  alternates: {
    canonical: 'https://www.stockstrail.in/nse-holidays',
  },
  openGraph: {
    title: 'NSE Holiday List 2026 | Stockstrail',
    description:
      'Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.',
    url: 'https://www.stockstrail.in/nse-holidays',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NseHolidays() {
  return (
    <Layout>
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-white font-work-sans">
          
          <h1 className="text-4xl sm:text-5xl font-normal text-center mb-8 gradient-text font-product-sans uppercase">
            NSE Holiday List 2026 | Stockstrail - India&apos;s Trusted Investment Platform
          </h1>
          <p className="text-white/80 mb-5 leading-relaxed">
            <strong>NSE Holiday List 2026 on Stockstrail</strong> is your definitive, up-to-date reference for every trading holiday observed by the National Stock Exchange (NSE) this year. Whether you are managing <strong>Mutual Funds</strong>, exploring <strong>Loans</strong>, booking a <strong>Fixed Deposit (FD)</strong>, assessing your <strong>Risk Profile</strong>, renewing <strong>Insurance</strong>, or ready to <strong>open a Demat Account</strong>, understanding NSE market closures is essential for smart financial planning throughout 2026.
          </p>
          <p className="text-white/80 mb-5 leading-relaxed">
            The <em>NSE Holiday List 2026 curated by Stockstrail</em> covers all key market segments - Equity, Equity Derivatives, SLB, and Commodity Derivatives - so investors and traders across India, especially in <strong>Himachal Pradesh, Chandigarh Tricity, Delhi, Haryana, Uttar Pradesh</strong>, and <strong>Uttarakhand</strong>, can plan every investment move with confidence and accuracy.
          </p>
          <p className="text-white/80 mb-5 leading-relaxed">
            Save this page - NSE Holiday List 2026 | Stockstrail - and share it with your fellow investors. At Stockstrail, we bring you not just market holiday calendars but a complete financial ecosystem covering <strong>Mutual Fund advisory</strong>, <strong>Loan comparisons</strong>, <strong>FD rate tracking</strong>, <strong>Risk Profile assessment</strong>, <strong>Insurance plans</strong>, and seamless <strong>Demat Account opening</strong> - all in one place, serving investors pan India.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            Stockstrail NSE Holiday List 2026 - Equity, Equity Derivatives & SLB Segments
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            The National Stock Exchange (NSE) observes <strong>15 official trading holidays</strong> in 2026 for its Equity, Equity Derivatives, and Securities Lending & Borrowing (SLB) segments. Use this Stockstrail reference to plan your <strong>Mutual Fund SIP dates</strong>, <strong>Loan repayment schedules</strong>, <strong>FD maturity tracking</strong>, <strong>Insurance renewal dates</strong>, and all portfolio activities so nothing falls on an NSE closed day.
          </p>

          <div className="rounded-lg border border-white/20 p-4 overflow-x-auto mb-8 bg-white/5 shadow-lg">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Holiday</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Date</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Republic Day", "January 26, 2026", "Monday"],
                  ["Holi", "March 03, 2026", "Tuesday"],
                  ["Shri Ram Navami", "March 26, 2026", "Thursday"],
                  ["Shri Mahavir Jayanti", "March 31, 2026", "Tuesday"],
                  ["Good Friday", "April 03, 2026", "Friday"],
                  ["Dr. Baba Saheb Ambedkar Jayanti", "April 14, 2026", "Tuesday"],
                  ["Maharashtra Day", "May 01, 2026", "Friday"],
                  ["Bakri Id", "May 28, 2026", "Thursday"],
                  ["Muharram", "June 26, 2026", "Friday"],
                  ["Ganesh Chaturthi", "September 14, 2026", "Monday"],
                  ["Mahatma Gandhi Jayanti", "October 02, 2026", "Friday"],
                  ["Dussehra", "October 20, 2026", "Tuesday"],
                  ["Diwali - Balipratipada", "November 10, 2026", "Tuesday"],
                  ["Prakash Gurpurb Sri Guru Nanak Dev", "November 24, 2026", "Tuesday"],
                  ["Christmas", "December 25, 2026", "Friday"],
                ].map(([holiday, date, day]) => (
                  <tr key={holiday} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 px-4 text-white font-medium whitespace-normal">{holiday}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{date}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/80 mb-5 leading-relaxed">
            Planning to <strong>open a Demat Account</strong> and start trading? Or checking your <strong>Risk Profile</strong> before entering equities? Always verify this <strong>NSE Holiday List 2026</strong> from Stockstrail before placing trades - your orders will not execute on NSE-closed days, and NAV for <strong>Mutual Funds</strong> will be applied on the next business day.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            Stockstrail - NSE Holidays 2026 That Fall on Saturday or Sunday
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            Several significant national holidays in 2026 fall on weekends, meaning the NSE is already closed and <strong>no additional weekday holiday is granted</strong>. Stockstrail lists these below to eliminate confusion while planning <strong>Mutual Fund transactions</strong>, <strong>FD bookings</strong>, <strong>Loan disbursals</strong>, and <strong>Insurance renewals</strong>.
          </p>

          <div className="rounded-lg border border-white/20 p-4 overflow-x-auto mb-8 bg-white/5 shadow-lg">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Holiday</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Date</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Mahashivratri", "February 15, 2026", "Sunday"],
                  ["Id-Ul-Fitr (Ramadan Eid)", "March 21, 2026", "Saturday"],
                  ["Independence Day", "August 15, 2026", "Saturday"],
                  ["Diwali Laxmi Pujan*", "November 08, 2026", "Sunday"],
                ].map(([holiday, date, day]) => (
                  <tr key={holiday} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 px-4 text-white font-medium whitespace-normal">{holiday}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{date}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-amber-400/90 mb-5 font-work-sans leading-relaxed bg-amber-400/10 p-3 rounded border border-amber-400/20">
            <strong>⚠ Muhurat Trading Note:</strong> NSE will conduct special <strong>Muhurat Trading on Sunday, November 08, 2026</strong> (Diwali Laxmi Pujan). This is an auspicious symbolic trading session held each Diwali. The exact session timings will be announced by NSE closer to the date. Stockstrail will notify all users immediately once timings are published.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            NSE Market Timings 2026 - Complete Session Guide by Stockstrail
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            Understanding <strong>NSE market session timings</strong> helps you place orders correctly, execute <strong>Mutual Fund switches</strong>, check <strong>Demat Account statements</strong>, plan <strong>Loan disbursals linked to market rates</strong>, and time your <strong>FD bookings</strong> relative to market movements. Here is Stockstrail's complete NSE 2026 session guide.
          </p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">Pre-Open Session</h3>
          <p className="text-white/80 mb-5 leading-relaxed"><strong>Order Entry & Modification:</strong> 09:00 AM to 09:08 AM (with random closure during the last minute).<br />Order Matching begins immediately after the Pre-Open session closes.</p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">Regular Trading Session</h3>
          <p className="text-white/80 mb-5 leading-relaxed"><strong>Market Open: 09:15 AM</strong> | <strong>Market Close: 03:30 PM</strong></p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">Closing Session</h3>
          <p className="text-white/80 mb-5 leading-relaxed"><strong>03:40 PM to 04:00 PM</strong></p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">Block Deal Sessions</h3>
          <p className="text-white/80 mb-5 leading-relaxed"><strong>Morning Window:</strong> 08:45 AM to 09:00 AM<br /><strong>Afternoon Window:</strong> 02:05 PM to 02:20 PM</p>

          <h3 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">Commodity Derivatives Session</h3>
          <p className="text-white/80 mb-5 leading-relaxed"><strong>Market Open: 09:00 AM</strong> | <strong>Market Close: 11:30 PM</strong></p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            NSE Holidays 2026 - Commodity Derivatives Segment | Stockstrail
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            The NSE Commodity Derivatives segment follows a split-session model - <strong>Morning Session (9:00 AM - 5:00 PM)</strong> and <strong>Evening Session (5:00 PM - 11:30 PM)</strong>. On several holidays, only one session is closed while the other remains open. This is particularly important for investors holding <strong>Commodity-linked Mutual Funds</strong>, <strong>Gold ETFs</strong>, or <strong>agricultural commodity positions</strong>. Stockstrail provides the complete split-session holiday breakdown below.
          </p>

          <div className="rounded-lg border border-white/20 p-4 overflow-x-auto mb-8 bg-white/5 shadow-lg">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Date</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Day</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Description</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Morning (9 - 5)</th>
                  <th className="text-white font-montserrat text-xs lg:text-sm uppercase pb-3 px-4 border-b border-white/20">Evening (5 - 11:30/11:55)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["January 01, 2026", "Thursday", "New Year's Day", "Open", "Closed"],
                  ["January 26, 2026", "Monday", "Republic Day", "Closed", "Closed"],
                  ["March 03, 2026", "Tuesday", "Holi", "Closed", "Open"],
                  ["March 26, 2026", "Thursday", "Shri Ram Navami", "Closed", "Open"],
                  ["March 31, 2026", "Tuesday", "Shri Mahavir Jayanti", "Closed", "Open"],
                  ["April 03, 2026", "Friday", "Good Friday", "Closed", "Closed"],
                  ["April 14, 2026", "Tuesday", "Dr. Baba Saheb Ambedkar Jayanti", "Closed", "Open"],
                  ["May 01, 2026", "Friday", "Maharashtra Day", "Closed", "Open"],
                  ["May 28, 2026", "Thursday", "Bakri Id", "Closed", "Open"],
                  ["June 26, 2026", "Friday", "Muharram", "Closed", "Open"],
                  ["September 14, 2026", "Monday", "Ganesh Chaturthi", "Closed", "Open"],
                  ["October 02, 2026", "Friday", "Mahatma Gandhi Jayanti", "Closed", "Closed"],
                  ["October 20, 2026", "Tuesday", "Dussehra", "Closed", "Open"],
                  ["November 10, 2026", "Tuesday", "Diwali - Balipratipada", "Closed", "Open"],
                  ["November 24, 2026", "Tuesday", "Prakash Gurpurb Sri Guru Nanak Dev", "Closed", "Open"],
                ].map(([date, day, desc, morn, eve]) => (
                  <tr key={date} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{date}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{day}</td>
                    <td className="py-3 px-4 text-white font-medium whitespace-normal">{desc}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{morn}</td>
                    <td className="py-3 px-4 text-white/80 whitespace-normal">{eve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/80 mb-5 leading-relaxed">
            Note that <strong>New Year's Day (January 01, 2026)</strong> keeps the Morning session Open but closes the Evening session - a unique exception among NSE 2026 holidays. Similarly, <strong>Republic Day and Good Friday</strong> close <strong>both sessions</strong>, while most other holidays only close the morning session. Cross-reference this with your commodity portfolio on Stockstrail for smarter planning.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            Stockstrail in Himachal Pradesh - NSE Holiday 2026 Guide for All 12 Districts
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            Stockstrail proudly serves investors across all <strong>12 districts of Himachal Pradesh</strong> - bringing the complete <strong>NSE Holiday List 2026</strong> along with expert <strong>Mutual Fund advisory</strong>, <strong>Loan guidance</strong>, <strong>FD comparisons</strong>, <strong>Risk Profile tools</strong>, <strong>Insurance plans</strong>, and seamless <strong>Demat Account opening</strong> - all digitally, without needing to visit a city branch.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            Stockstrail - Pan India NSE Holiday 2026 Platform & Investment Services
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            While Stockstrail has deep regional roots in North India, we serve investors <strong>pan India</strong> - from Kashmir to Kanyakumari, Mumbai to Kolkata, Ahmedabad to Chennai. The <strong>NSE Holiday List 2026</strong> is equally important for investors in every state and union territory of India.
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-white/80">
            <li>Complete NSE Holiday 2026 Schedule - Equity, Derivatives, SLB, and Commodity segments</li>
            <li>Mutual Fund Investment Advisory - SIP planning, lump sum strategies, fund comparisons, ELSS</li>
            <li>Loan Services - Home Loans, Personal Loans, Business Loans, Education Loans, LAP</li>
            <li>Fixed Deposit (FD) Comparisons - Best FD interest rates across banks and NBFCs</li>
            <li>Risk Profile Assessment - Free online tool to classify your investor risk appetite</li>
            <li>Insurance Advisory - Term Life, Health Insurance, Motor Insurance, ULIP, Critical Illness</li>
            <li>Open a Demat Account - 100% online Demat Account opening with digital KYC - quick and paperless</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            Frequently Asked Questions - NSE Holiday 2026 & Stockstrail Services
          </h2>
          
          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Q1. How many NSE trading holidays are there in 2026?</h3>
          <p className="text-white/80 mb-5 leading-relaxed">
            There are <strong>15 official NSE trading holidays</strong> in 2026 for the Equity, Equity Derivatives, and SLB segments - from <strong>Republic Day on January 26</strong> to <strong>Christmas on December 25</strong>. Stockstrail provides the complete list above, updated from official NSE announcements.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8 mb-4">Q2. Is NSE open on Holi 2026?</h3>
          <p className="text-white/80 mb-5 leading-relaxed">
            No. The NSE will be <strong>closed on Holi, March 03, 2026 (Tuesday)</strong>. This holiday applies to the Equity, Equity Derivatives, and SLB segments. For the Commodity Derivatives segment, the morning session is closed but the evening session remains open on Holi 2026.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-5 border-b border-white/10 pb-2">
            NSE Holiday List 2026 - Plan Smarter, Invest Better with Stockstrail
          </h2>
          <p className="text-white/80 mb-5 leading-relaxed">
            The <strong>NSE Holiday List 2026</strong> is your annual investment planning companion. Knowing every market closure - from <strong>Republic Day in January</strong> to <strong>Christmas in December</strong> - helps you optimise <strong>SIP dates</strong>, <strong>FD bookings</strong>, <strong>Loan repayments</strong>, <strong>Insurance renewals</strong>, and <strong>equity transactions</strong> throughout the year.
          </p>

          <p className="text-white/80 mb-5 leading-relaxed">
            <strong>Bookmark www.stockstrail.in/nse-holidays</strong> for the most current NSE Holiday 2026 updates. Your smart investing journey with Stockstrail starts here.
          </p>

          <blockquote className="border-l-4 border-white/20 pl-4 my-6 text-white/70 italic bg-white/5 p-4 rounded-r-lg">
            <strong>Disclaimer:</strong> The NSE Holiday List 2026 provided on this page is based on official NSE announcements and is subject to change without notice. Investors are strongly advised to verify the holiday schedule on the official NSE website (www.nseindia.com) before executing critical transactions. Stockstrail does not assume liability for any investment decisions made solely on the basis of information provided here. Mutual Fund investments are subject to market risks; please read all scheme-related documents carefully before investing. Loan and FD rates are indicative and may vary based on lender policies and applicant profiles. Insurance premium comparisons are indicative; final premium is subject to insurer underwriting.
          </blockquote>

        </div>
      </div>
    </Layout>
  );
}

