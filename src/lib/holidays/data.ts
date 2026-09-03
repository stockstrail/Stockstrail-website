export interface HolidayFAQ {
  id: string;
  question: string;
  answer: string;
}

export const HOLIDAY_FAQS_DATA: HolidayFAQ[] = [
  {
    id: 'faq-1',
    question: 'Is today a stock market holiday or a working day in India (NSE & BSE)?',
    answer:
      'The Indian stock exchanges—National Stock Exchange (NSE) and Bombay Stock Exchange (BSE)—operate from Monday to Friday between 09:15 AM and 03:30 PM IST. If today is a declared national festival holiday or a weekend (Saturday/Sunday), trading is closed. Check the real-time Live Market Status widget at the top of this page to verify today’s live trading status in real time.',
  },
  {
    id: 'faq-2',
    question: 'Is today a working day in share market for equity and derivatives?',
    answer:
      'The share market is open for trading on all standard weekdays (Monday to Friday) except for 15 official trading holidays in 2026. Regular trading hours are 09:15 AM to 03:30 PM IST for Equity and Futures & Options (F&O).',
  },
  {
    id: 'faq-3',
    question: 'Are stock markets in India open on Saturdays and Sundays?',
    answer:
      'No, regular stock market trading on NSE and BSE is strictly closed on Saturdays and Sundays. The only exception is the annual ceremonial 1-hour Muhurat Trading session conducted on Diwali evening (Laxmi Pujan), which falls on Sunday, November 08, 2026.',
  },
  {
    id: 'faq-4',
    question: 'What are the official stock market holidays in September 2026?',
    answer:
      'In September 2026, the official stock market holiday is Ganesh Chaturthi on September 14, 2026 (Monday). On this day, trading in Equities, F&O, and Currency segments will be completely closed on both NSE and BSE. The MCX Commodity Derivatives evening session will open at 5:00 PM IST. All other weekdays in September, including September 7, 2026, are normal working trading days.',
  },
  {
    id: 'faq-5',
    question: 'What is the full NSE & BSE trading holiday calendar list for 2026?',
    answer:
      'There are 15 official weekday trading holidays declared by NSE and BSE for 2026: Republic Day (Jan 26), Holi (Mar 3), Shri Ram Navami (Mar 26), Shri Mahavir Jayanti (Mar 31), Good Friday (Apr 3), Dr. Ambedkar Jayanti (Apr 14), Maharashtra Day (May 1), Bakri Id (May 28), Muharram (Jun 26), Ganesh Chaturthi (Sep 14), Mahatma Gandhi Jayanti (Oct 2), Dussehra (Oct 20), Diwali Balipratipada (Nov 10), Guru Nanak Jayanti (Nov 24), and Christmas (Dec 25).',
  },
  {
    id: 'faq-6',
    question: 'When is Diwali Muhurat Trading in 2026 and what are the session timings?',
    answer:
      'Diwali Muhurat Trading for the year 2026 will be held on Sunday, November 08, 2026 (Diwali Laxmi Pujan). This is an auspicious 1-hour special trading window held every Diwali evening to mark the start of the new Hindu financial year, Samvat 2083. Exact session timings (typically 6:00 PM to 7:15 PM IST) are notified by exchange circulars.',
  },
  {
    id: 'faq-7',
    question: 'Why is the stock market open when banks are closed on certain holidays?',
    answer:
      'Bank holidays in India are governed by individual state notifications under the Negotiable Instruments Act, 1881. Stock exchanges (NSE and BSE) operate under uniform nationwide SEBI regulations. On regional bank holidays or administrative closing dates, physical bank branches might be closed, but digital stock market trading, Demat operations, and UPI/NEFT fund transfers continue normally.',
  },
  {
    id: 'faq-8',
    question: 'How do stock market holidays affect Mutual Fund SIPs and NAV allotment?',
    answer:
      'If your Mutual Fund SIP deduction date coincides with an NSE/BSE holiday or weekend, your bank auto-debit may be processed, but mutual fund unit allotment is executed on the next business day using the closing Net Asset Value (NAV) of that next working day.',
  },
  {
    id: 'faq-9',
    question: 'What is the difference between a trading holiday and a clearing holiday?',
    answer:
      'A trading holiday means no buy or sell orders can be placed or executed on the exchange. A clearing holiday means trading is active, but banks and clearing corporations do not settle cash or securities on that day. Under the T+1 settlement cycle, settlements for trades placed before a clearing holiday shift to the next business day.',
  },
  {
    id: 'faq-10',
    question: 'What are the MCX commodity market trading timings on holidays?',
    answer:
      'The Multi Commodity Exchange (MCX) follows a split-session model: Morning Session (09:00 AM – 05:00 PM) and Evening Session (05:00 PM – 11:30 PM). On several festival holidays (e.g. Holi, Ram Navami, Ganesh Chaturthi, Dussehra), the morning session is closed while the evening session remains open to align with international commodity markets.',
  },
];
