'use client';

import { usePathname } from 'next/navigation';

export default function FloatingWhatsAppButton() {
  const pathname = usePathname();

  // Hide on admin routes
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  const phoneNumber = '919736304663';
  const message = 'Hi Stockstrail, I\'d like to know more about your services!';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#128C7E] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-white relative z-10"
      >
        <path d="M12.031 0C5.385 0 0 5.384 0 12.029c0 2.12.553 4.186 1.603 6L.044 24l6.115-1.604A11.96 11.96 0 0012.031 24c6.643 0 12.028-5.385 12.028-12.029S18.674 0 12.031 0zm0 22.016a9.972 9.972 0 01-5.1-1.393l-.365-.217-3.791.993.992-3.73-.238-.377A9.957 9.957 0 012.001 12.03C2.001 6.502 6.503 2 12.031 2 17.558 2 22.06 6.502 22.06 12.03s-4.502 10.03-10.029 10.03zm5.503-7.514c-.302-.151-1.785-.88-2.061-.98-.276-.101-.478-.151-.678.151-.201.302-.779.981-.955 1.182-.176.201-.353.226-.654.075-1.849-.893-3.08-1.784-4.249-3.794-.176-.302.176-.279.471-.863.076-.151.038-.276-.001-.427-.038-.151-.678-1.631-.93-2.233-.243-.585-.491-.506-.678-.515-.176-.01-.377-.01-.579-.01-.201 0-.528.075-.805.377-.276.302-1.055 1.03-1.055 2.512 0 1.482 1.08 2.915 1.231 3.116.151.201 2.124 3.242 5.143 4.544 1.701.733 2.502.83 3.447.747 1.026-.09 3.093-1.264 3.533-2.485.44-1.22.44-2.268.309-2.485-.126-.217-.478-.342-.779-.493z" />
      </svg>
      
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping -z-10"></span>
    </a>
  );
}
