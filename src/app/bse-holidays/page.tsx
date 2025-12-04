"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const BseHolidays = () => {
  return (
    <Layout>
      <SEO
        title="BSE Holiday List 2025 | Stockstrail"
        description="Complete list of official BSE trading holidays for 2025 including national, festival, and weekend holidays."
        url="/bse-holidays"
      />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-normal text-center mb-4 gradient-text font-product-sans uppercase">
            BSE Holiday List 2025
          </h1>

          <p className="text-white/80 mb-6 font-work-sans">
            The Bombay Stock Exchange (BSE) observes trading holidays on major national and
            state holidays. Below is the BSE holiday list for 2025 — use this as a reference.
            The exchange may publish updates via circulars.
          </p>

          {/* Main Holiday Table */}
          <div className="overflow-x-auto bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Holidays
                  </th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Date
                  </th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Day
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {[
                  ["Maha Shivratri", "February 26, 2025", "Wednesday"],
                  ["Holi", "March 14, 2025", "Friday"],
                  ["Id-ul-Fitr (Ramzan ID)", "March 31, 2025", "Monday"],
                  ["Mahavir Jayanti", "April 10, 2025", "Thursday"],
                  ["Dr. Baba Saheb Ambedkar Jayanti", "April 14, 2025", "Monday"],
                  ["Good Friday", "April 18, 2025", "Friday"],
                  ["Maharashtra Day", "May 1, 2025", "Thursday"],
                  ["Independence Day", "August 15, 2025", "Friday"],
                  ["Ganesh Chaturthi", "August 27, 2025", "Wednesday"],
                  ["Dusshera / Mahatma Gandhi Jayanti", "October 2, 2025", "Thursday"],
                  ["Diwali - Laxmi Pujan", "October 21, 2025", "Tuesday"],
                  ["Diwali - Balipratipada", "October 22, 2025", "Wednesday"],
                  ["Guru Nanak Jayanti", "November 5, 2025", "Wednesday"],
                  ["Christmas", "December 25, 2025", "Thursday"],
                ].map(([holiday, date, day]) => (
                  <tr key={holiday} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 text-white">{holiday}</td>
                    <td className="py-3 text-white/80">{date}</td>
                    <td className="py-3 text-white/80">{day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekend Holidays */}
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            BSE Holidays That Fall on Saturday or Sunday in 2025
          </h2>

          <div className="overflow-x-auto bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Holiday
                  </th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Date
                  </th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">
                    Day
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {[
                  ["Republic Day", "January 26, 2025", "Sunday"],
                  ["Ram Navami", "April 6, 2025", "Sunday"],
                  ["Eid-ul-Adha", "June 7, 2025", "Saturday"],
                  ["Muharram", "July 6, 2025", "Sunday"],
                ].map(([holiday, date, day]) => (
                  <tr key={holiday} className="hover:bg-white/3 transition-colors">
                    <td className="py-3 text-white">{holiday}</td>
                    <td className="py-3 text-white/80">{date}</td>
                    <td className="py-3 text-white/80">{day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Information */}
          <div className="mt-8 text-white/80">
            <p className="mb-4">
              The Bombay Stock Exchange (BSE) observes trading holidays on major national and
              state holidays. Similar to the NSE, the BSE releases a detailed holiday schedule
              at the start of each calendar year. This helps investors, brokers, agents, and
              other stakeholders plan their trading activities efficiently.
            </p>

            <p className="mb-4">The BSE holiday list for 2025 applies to the following segments:</p>

            <ul className="list-disc pl-5 text-white/80">
              <li>Equity Segment</li>
              <li>Equity Derivative Segment</li>
              <li>Securities Lending and Borrowing (SLB) Segment</li>
            </ul>

            <p className="mt-6 mb-2">
              In 2025, Muhurat Trading will be conducted on{" "}
              <strong>Tuesday, October 21, 2025</strong>. The exact timings for Muhurat
              Trading will be notified closer to the date.
            </p>

            <p className="mt-4">
              The exchange reserves the right to make changes to the holiday schedule if needed.
              Any updates or changes will be communicated through a separate circular in
              advance.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BseHolidays;
