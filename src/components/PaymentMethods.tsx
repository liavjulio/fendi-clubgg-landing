'use client';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: "₿",
      title: "העברה בקריפטו",
      subtitle: "מטבעות קריפטו",
      description: "הפקדה ומשיכה דרך מטבעות קריפטו – USDT, BTC, ETH",
      features: ["עמלות נמוכות", "העברה מהירה", "אבטחה מקסימלית"],
      popular: true
    },
    {
      icon: "💳",
      title: "הפקדה באשראי",
      subtitle: "כרטיס אשראי",
      description: "הפקדה מהירה ובטוחה בכרטיס אשראי",
      features: ["מיידי", "נוח", "בטוח"],
      popular: false
    },
    {
      icon: "📱",
      title: "ארנק דיגיטלי",
      subtitle: "פייבוקס | ביט",
      description: "הפקדה ומשיכה דרך אפליקציית פייבוקס, ביט",
      features: ["פשוט ומהיר", "זמין 24/7", "ללא עמלות נוספות"],
      popular: false
    },
    {
      icon: "🚚",
      title: "משלוח",
      subtitle: "נביא אליך לכתובת",
      description: "שירות משלוח צ'יפס עד הבית",
      features: ["שירות אישי", "בטיחות מלאה", "נוחות מקסימלית"],
      popular: false
    },
    {
      icon: "🏦",
      title: "העברה בנקאית",
      subtitle: "כל הבנקים",
      description: "העברה בנקאית רגילה דרך כל הבנקים בישראל",
      features: ["מוכר ומהימן", "כל הבנקים", "סכומים גדולים"],
      popular: false
    },
    {
      icon: "👑",
      title: "שירות VIP דרך סוכן",
      subtitle: "שירות אישי מלא",
      description: "שירות אישי מלא עם סוכן ייעודי זמין 24/7",
      features: ["סוכן אישי", "זמינות 24/7", "שירות מעולה"],
      popular: true
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            שיטות הפקדה ומשיכת כספים
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            מגוון שיטות תשלום מתקדמות ובטוחות לנוחיותכם המלאה
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paymentMethods.map((method) => (
            <div 
              key={method.title}
              className={`relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                method.popular 
                  ? 'bg-gradient-to-b from-yellow-900/30 to-yellow-800/20 border-yellow-400/50 shadow-yellow-400/20' 
                  : 'bg-gradient-to-b from-gray-900/80 to-black/60 border-gray-700/50 hover:border-yellow-400/30'
              }`}
            >
              {method.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-2 rounded-full text-sm">
                    פופולרי
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-lg text-yellow-400 font-semibold">{method.subtitle}</p>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed text-center">
                {method.description}
              </p>

              <div className="space-y-3">
                {method.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>


            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-800/30 border border-yellow-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">הירשם אצל סוכן</h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              קבל שירות אישי מלא עם סוכן ייעודי שיעזור לך בכל צעד
            </p>
            <a
              href="https://wa.me/972553310581?text=היי אני מעוניין להירשם אצל סוכן VIP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105"
            >
              <span className="text-2xl font-bold">👑</span>
              <span>הירשם לשירות VIP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;