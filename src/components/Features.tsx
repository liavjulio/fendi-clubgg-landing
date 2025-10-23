'use client';

const Features = () => {
  const games = [
    {
      icon: "♠",
      title: "אומהה 4-5-6",
      description: "שולחנות פוקר אומהה עם ידיים 4+, 5+, 6+ מכניסות קטנות ועד גדולות"
    },
    {
      icon: "🏆",
      title: "טורנירי פוקר",
      description: "טורנירים מרתקים עם פרסים ענקיים, כולל טורניר פרירול בכל סוף שבוע עם מתנה של 10,000 ש\"ח"
    },
    {
      icon: "♦",
      title: "טקסס הולדם",
      description: "שולחנות טקסס הולדם רצים מסביב לשעון עם עד 6 שחקנים על שולחן, האקשן לא מפסיק!"
    }
  ];

  const benefits = [
    "יותר מ-200,000$ בפרסים מחולקים כל חודש",
    "גישה בלתי מוגבלת לכל המשחקים",
    "חווית פוקר מטורפת על המובייל",
    "טורנירים באופן קבוע",
    "דמי כניסה החל מ-100 ש\"ח בלבד",
    "סוכנים זמינים 24/7 לתמיכה"
  ];



  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400/15 text-9xl animate-pulse" style={{animationDelay: '4s'}}>♠</div>
      </div>
      
            <div className="container mx-auto px-6 lg:px-8">
        {/* Games Section */}
        <div className="text-center mb-24">
          <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-slide-up">
            המשחקים שלנו
          </h2>
          <p className="text-3xl md:text-4xl text-gray-300 max-w-5xl mx-auto animate-fade-in leading-relaxed">
            חווי את הפוקר הטוב ביותר עם מגוון משחקים מרתקים
          </p>
        </div>

        {/* Games Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl">
            {games.map((game, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center">
                  {game.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {game.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {game.description}
              </p>
            </div>
          ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 lg:p-12 border border-yellow-500/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
                למה לבחור ב-Fendi ClubGG?
              </h3>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-green-400 flex-shrink-0 text-xl">✅</span>
                    <span className="text-gray-300 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-yellow-500/20">
              <div className="text-center">
                <div className="w-40 h-40 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-6xl">🏆</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">בונוסים מטורפים</h4>
                <p className="text-gray-300 mb-4 text-lg">את הבונוסים האלה תוכל למצוא רק במועדון המוביל בישראל</p>
                <a
                  href="https://wa.me/972553310581"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2 text-lg"
                >
                  קבל בונוס עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Features;