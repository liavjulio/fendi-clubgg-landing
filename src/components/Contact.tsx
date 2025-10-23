'use client';

const Contact = () => {

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Professional Poker Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-600/5"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/50 via-transparent to-gray-900/30"></div>
        
        {/* Simple 4 corner symbols only */}
        <div className="absolute top-12 left-12 text-yellow-500/10 text-4xl">♠</div>
        <div className="absolute top-12 right-12 text-red-400/10 text-4xl">♦</div>
        <div className="absolute bottom-12 left-12 text-yellow-400/10 text-4xl">♣</div>
        <div className="absolute bottom-12 right-12 text-red-500/10 text-4xl">♥</div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/1 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-yellow-400/2 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            בואו נתחיל לשחק
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 mb-12 leading-relaxed">
            מוכנים להתחיל את המסע שלכם בעולם הפוקר? צרו איתנו קשר עכשיו
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-gray-300 mb-12 text-2xl lg:text-3xl leading-relaxed">
              סוכן ב-ClubGG הוא נציג המסייע בין שחקנים לפלטפורמת הפוקר. תפקידו של הסוכן כולל טיפול בהפקדות ומשיכות כספים, ומתן תמיכה ושירותים אישיים לשחקנים.
            </p>

            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://wa.me/972553310581"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="https://www.instagram.com/fendi_claubgg?igsh=MXY4ZW14ejVzYzA0Mg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="mailto:fendigg2300@gmail.com"
                className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                aria-label="Email"
              >
                ✉️
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-b from-gray-800/80 to-black/60 backdrop-blur-sm rounded-3xl p-12 border border-yellow-400/20 shadow-2xl">
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
                התחל עכשיו
              </h3>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/972553310581?text=היי אני מעוניין להצטרף למועדון פוקר"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center gap-4 text-2xl lg:text-3xl shadow-2xl"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.405 3.288z"/>
                    </svg>
                  </div>
                  התחל לשחק עכשיו
                </a>
                
                <a
                  href="https://www.instagram.com/fendi_claubgg?igsh=MXY4ZW14ejVzYzA0Mg%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center gap-4 text-2xl lg:text-3xl shadow-2xl"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  עקוב באינסטגרם
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
