"use client";

import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const NseHolidays = () => {
  return (
    <Layout>
      <SEO
        title="NSE Holiday List 2025 | Stockstrail"
        description="Official NSE trading holidays for the year 2025 including national, regional holidays and weekends."
        url="/nse-holidays"
      />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-normal text-center mb-6 gradient-text font-product-sans uppercase">
            NSE Holiday List 2025
          </h1>

          <p className="text-white/80 mb-6 font-work-sans">
            The National Stock Exchange (NSE) observes trading holidays on key national and
            state holidays. Below is the official list for 2025.
          </p>

          {/* Main Holiday Table */}
          <div className="overflow-x-auto bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Holidays</th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Date</th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Day</th>
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
                  ["Christmas", "December 25, 2025", "Thursday"]
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
            NSE Holidays That Fall on Saturday or Sunday in 2025
          </h2>

          <div className="overflow-x-auto bg-stockstrail-bg-light/20 rounded-lg border border-white/5 p-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Holiday</th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Date</th>
                  <th className="text-white font-montserrat text-sm uppercase pb-3">Day</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {[
                  ["Republic Day", "January 26, 2025", "Sunday"],
                  ["Ram Navami", "April 6, 2025", "Sunday"],
                  ["Eid-ul-Adha", "June 7, 2025", "Saturday"],
                  ["Muharram", "July 6, 2025", "Sunday"]
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

          {/* Notes */}
          <div className="mt-8 text-white/80">
            <p className="mb-4">
              NOTE: Muhurat Trading will be conducted on Tuesday, October 21, 2025.
              The exact timings for Muhurat Trading will be notified closer to the date.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4 mb-2">NSE Market Timings</h3>

            <div className="bg-stockstrail-bg-light/10 p-4 rounded-md border border-white/5">
              <ul className="text-white/80 list-disc pl-5 space-y-2">
                <li>
                  <strong>Pre-Open Session:</strong>  
                  Order entry: 9:00 AM — 9:08 AM
                </li>
                <li>
                  <strong>Regular Trading Session:</strong>  
                  9:00 AM to 3:30 PM
                </li>
                <li>
                  <strong>Closing Session:</strong>  
                  3:40 PM to 4:00 PM
                </li>
                <li>
                  <strong>Block Deal Session:</strong>  
                  Morning: 8:45 AM – 9:00 AM, Afternoon: 2:05 PM – 2:20 PM
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default NseHolidays;
