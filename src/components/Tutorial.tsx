'use client';

const Tutorial = () => {
  const steps = [
    {
      icon: "📱",
      title: "הורדת האפליקציה",
      description: "הורד את ClubGG מה-App Store או Google Play"
    },
    {
      icon: "🃏",
      title: "יצירת חשבון",
      description: "צור חשבון חדש או התחבר עם חשבון קיים"
    },
    {
      icon: "♠",
      title: "הכנס קוד קלאב",
      description: "הכנס את קוד הקלאב שלנו: 315387 כדי להצטרף למועדון"
    },
    {
      icon: "♦",
      title: "הפקדה ראשונה",
      description: "בצע הפקדה דרך הסוכן שלנו בבטחה מלאה"
    },
    {
      icon: "🎰",
      title: "התחל לשחק",
      description: "הצטרף לשולחנות ותתחיל את המסע שלך"
    }
  ];

  return (
    <section id="tutorial" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          איך מתחילים?
        </h2>
        <p className="text-3xl md:text-4xl text-gray-300 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
          5 צעדים פשוטים להצטרפות למועדון הפוקר המוביל
        </p>

        {/* App Download Buttons */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
          <a
            href="http://apps.apple.com/il/app/clubgg-poker/id1529839330"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 text-2xl lg:text-3xl border-2 border-gray-600 hover:border-yellow-500/50 shadow-2xl hover:shadow-yellow-500/20 min-w-[350px] justify-center"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            הורד מ-App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.nsus.clubgg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-6 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 text-2xl lg:text-3xl shadow-2xl hover:shadow-green-500/30 min-w-[350px] justify-center"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
            </div>
            הורד מ-Google Play
          </a>
        </div>
        
        <div className="mb-20 flex justify-center">
          <div className="w-full max-w-6xl">
            <video 
              controls 
              className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-2xl shadow-2xl object-contain bg-black"
              poster="/api/placeholder/800/450"
            >
              <source src="/images/fendi/instructions.mp4" type="video/mp4" />
              הדפדפן שלך לא תומך בתצוגת וידאו
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center p-8 bg-gradient-to-b from-gray-900 to-black border border-yellow-400/20 rounded-2xl hover:border-yellow-400/40 transition-all duration-300 hover:scale-105">
              <div className="text-6xl mb-6">{step.icon}</div>
              <div className="bg-yellow-400 text-black text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4">{step.title}</h3>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 border border-yellow-400/30 rounded-2xl p-10 max-w-4xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-6">קוד הקלאב שלנו</h3>
            <div className="text-6xl lg:text-7xl font-bold text-yellow-300 mb-6 font-mono bg-black/50 py-8 px-12 rounded-2xl border border-yellow-400/20">
              315387
            </div>
            <p className="text-gray-300 text-2xl lg:text-3xl leading-relaxed">הקלד את הקוד הזה בעת ההרשמה כדי להצטרף למועדון שלנו</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
