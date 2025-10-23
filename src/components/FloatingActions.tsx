'use client';

const FloatingActions = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/972553310581"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/25"
        aria-label="WhatsApp"
      >
        <span className="text-2xl">💬</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          צור קשר בWhatsApp
        </div>
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/fendi_claubgg?igsh=MXY4ZW14ejVzYzA0Mg%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/25"
        aria-label="Instagram"
      >
        <span className="text-2xl">📷</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          עקבו באינסטגרם
        </div>
      </a>

      {/* Email Button */}
      <a
        href="mailto:fendigg2300@gmail.com"
        className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/25"
        aria-label="Email"
      >
        <span className="text-2xl">📧</span>
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          fendigg2300@gmail.com
        </div>
      </a>
    </div>
  );
};

export default FloatingActions;