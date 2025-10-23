'use client';

const Bonuses = () => {
  const bonuses = [
    {
      icon: "🎁",
      title: "הגרלות על כסף ופרסים מידי שבוע",
      description: "הגרלות שבועיות עם פרסים כספיים ופרסים מיוחדים למשתתפים"
    },
    {
      icon: "⭐",
      title: "שולחנות פועלים 24/7",
      description: "משחקים רצים מסביב לשעון - תמיד תמצאו פעילות ושחקנים"
    },
    {
      icon: "👥",
      title: "סוכנים זמינים 24/7",
      description: "צוות תמיכה מקצועי זמין בכל שעה לעזרה ותמיכה מלאה"
    },
    {
      icon: "💰",
      title: "בונוסים מטורפים",
      description: "בונוסי הפקדה, בונוסי חזרה ומבצעים מיוחדים לכל השחקנים"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            <span className="gold-gradient bg-clip-text text-transparent">בונוסים והטבות</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            מגוון הטבות ובונוסים בלעדיים לחברי המועדון שלנו
          </p>
        </div>

        {/* Main Bonuses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                {bonus.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
              <p className="text-gray-300 text-lg">{bonus.description}</p>
            </div>
          ))}
        </div>

        {/* Special Bonus Highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 rounded-3xl p-8 border-2 border-yellow-500/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-yellow-400 text-6xl">⭐</div>
              <div className="absolute top-8 right-8 text-yellow-400 text-4xl">💎</div>
              <div className="absolute bottom-4 left-8 text-yellow-400 text-5xl">🏆</div>
              <div className="absolute bottom-8 right-4 text-yellow-400 text-7xl">💰</div>
            </div>
            
            <div className="text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 gold-gradient rounded-full flex items-center justify-center text-6xl animate-bounce">
                  🎉
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                בונוס <span className="gold-gradient bg-clip-text text-transparent">30%</span> להפקדה ראשונה!
              </h3>
              
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                קבל בונוס של 30% על ההפקדה הראשונה שלך
              </p>
              
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl">
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-4 border border-green-500/30">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="text-xl font-bold text-white mb-2">בונוס 10%</h4>
                    <p className="text-gray-300">קבוע בכל הפקדה</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                    <div className="text-3xl mb-2">💎</div>
                    <h4 className="text-xl font-bold text-white mb-2">בונוס 30%</h4>
                    <p className="text-gray-300">להפקדה ראשונה</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                    <div className="text-3xl mb-2">🤝</div>
                    <h4 className="text-xl font-bold text-white mb-2">בונוס חבר מביא חבר</h4>
                    <p className="text-gray-300">הזמן חבר וקבל בונוס</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/972553310581?text=היי אני רוצה לקבל את הבונוס של 30%"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl"
              >
                <span className="text-2xl">💬</span>
                הירשם אצל סוכן
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;