'use client';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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
      
      <div className="container-center section-padding relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex justify-center">
              <img 
                src="/images/fendi/Fendi_Club_Logo.png" 
                alt="לוגו Fendi ClubGG"
                className="h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 object-contain rounded-3xl shadow-2xl border-4 border-yellow-500/50 hover:border-yellow-400 transition-all duration-300 hover:scale-105 ring-4 ring-yellow-500/30"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-yellow-400 ring-4 ring-yellow-500/50';
                  fallback.innerHTML = '<span class="text-black font-bold text-6xl">F</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12">
            <div className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 bg-yellow-500/10 text-yellow-300 rounded-full text-xl lg:text-2xl font-bold border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="text-3xl lg:text-4xl ml-3">⭐</span>
              בונוסים מטורפים
            </div>
            <div className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 bg-green-500/10 text-green-300 rounded-full text-xl lg:text-2xl font-bold border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="text-3xl lg:text-4xl ml-3">👥</span>
              סוכנים זמינים 24/7
            </div>
            <div className="inline-flex items-center px-8 py-4 lg:px-10 lg:py-5 bg-blue-500/10 text-blue-300 rounded-full text-xl lg:text-2xl font-bold border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="text-3xl lg:text-4xl ml-3">🏆</span>
              שולחנות פועלים 24/7
            </div>
          </div>

          {/* Main Heading - כותרת בלבד בלי שם */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-12 animate-slide-up leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              מועדון הפוקר המוביל בישראל
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-16 max-w-7xl mx-auto animate-slide-up leading-relaxed font-medium">
            <span className="text-yellow-400 font-bold">5000+</span> שחקנים פעילים יומיים במועדון הרשמי של ClubGG בישראל &quot;Fendi ClubGG&quot;
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl">
            הצטרף היום דרך סוכן רשמי שיעזור לך עם הפקדות, משיכות, פתיחת משתמש והצטרפות למועדון.
            </span>
          </p>

          {/* CTA Buttons - עכשיו WhatsApp ואינסטגרם */}
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mb-20 animate-slide-up">
            <a
              href="https://wa.me/972553310581?text=היי אני מעוניין להצטרף למועדון פוקר"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-8 px-16 rounded-3xl transition-all duration-300 transform hover:scale-110 flex items-center gap-6 text-3xl lg:text-4xl shadow-2xl hover:shadow-green-500/30 min-w-[400px] justify-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.405 3.288z"/>
                </svg>
              </div>
              צור קשר בוואטסאפ
            </a>
            <a
              href="https://www.instagram.com/fendi_claubgg?igsh=MXY4ZW14ejVzYzA0Mg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-8 px-16 rounded-3xl transition-all duration-300 transform hover:scale-110 flex items-center gap-6 text-3xl lg:text-4xl shadow-2xl hover:shadow-purple-500/30 min-w-[400px] justify-center"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              עקוב באינסטגרם
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5000+</div>
              <div className="text-gray-300 text-sm">שחקנים פעילים יומיים</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">תמיכה וסוכנים</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100₪</div>
              <div className="text-gray-300 text-sm">דמי כניסה מינימליים</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$200K</div>
              <div className="text-gray-300 text-sm">פרסים חודשיים</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
