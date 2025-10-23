'use client';

const About = () => {
  const stats = [
    {
      icon: "🃏",
      number: "5000+",
      label: "שחקנים פעילים יומיים"
    },
    {
      icon: "♠",
      number: "24/7",
      label: "תמיכה וסוכנים"
    },
    {
      icon: "💰",
      number: "$200K+",
      label: "פרסים חודשיים"
    },
    {
      icon: "🎰",
      number: "100%",
      label: "אבטחה ובטיחות"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
        
        {/* Center sides - very subtle */}
        <div className="absolute top-1/2 left-8 text-yellow-500/4 text-2xl animate-bounce delay-2000">🏆</div>
        <div className="absolute top-1/2 right-8 text-yellow-400/4 text-2xl animate-bounce delay-1500">♠</div>
        
        {/* Subtle glow effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-500/1 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-yellow-400/2 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            למה לבחור בנו?
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            הסיבות למה אנחנו המועדון המוביל בישראל
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-10 bg-gradient-to-b from-gray-800/80 to-gray-900/60 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-4xl lg:text-5xl shadow-lg shadow-yellow-500/30">
                  {stat.icon}
                </div>
              </div>
              <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">{stat.number}</div>
              <div className="text-gray-300 font-medium text-xl lg:text-2xl">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Steps Section */}
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-32">
          <div>
            <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-10">
              שלבי ההצטרפות
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 rtl:space-x-reverse p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-black font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">הורד והירשם לאפליקציית ClubGG</h4>
                  <p className="text-gray-300 text-xl leading-relaxed">הירשם באתר על ידי מילוי פרטים בסיסיים כמו אימייל וסיסמה</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 rtl:space-x-reverse p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-black font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">הצטרפות למועדון</h4>
                  <p className="text-gray-300 text-xl leading-relaxed">חפש את מועדון Fendi ClubGG בסרגל החיפוש והכנס את ה-ID של המועדון</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 rtl:space-x-reverse p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-black font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">צור קשר עם סוכן</h4>
                  <p className="text-gray-300 text-xl leading-relaxed">פנה לסוכן כדי שיאשר אותך למועדון ואז תוכל להתחיל לשחק</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500/10 via-yellow-600/5 to-yellow-700/10 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-500/30">
                <span className="text-black text-7xl">💬</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">מוכן להתחיל?</h4>
              <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                צור קשר עם הסוכן שלנו עכשיו לקבלת עזרה מלאה בהצטרפות למועדון
              </p>
              <a
                href="https://wa.me/972553310581"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 text-xl shadow-2xl"
              >
                <span className="text-2xl">💬</span>
                שלח הודעה עכשיו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
