'use client';

const Security = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
            <span className="gold-gradient bg-clip-text text-transparent">אבטחה מתקדמת</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            מערכות אבטחת PCI מתקדמות שמצפינות את המידע של השחקנים ומבטיחות משחק הוגן
          </p>
        </div>

        {/* Security Features */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-yellow-500/20 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 gold-gradient rounded-full flex items-center justify-center text-6xl">
                🛡️
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🔒
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">הצפנה מתקדמת</h3>
                    <p className="text-gray-300 text-lg">כל המידע מוצפן בהצפנת SSL 256-bit המתקדמת ביותר</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🏦
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">תקני PCI</h3>
                    <p className="text-gray-300 text-lg">עמידה מלאה בתקני האבטחה הבנקאיים הגבוהים ביותר</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">משחק הוגן</h3>
                    <p className="text-gray-300 text-lg">מערכות בקרה מתקדמות המבטיחות הגינות מלאה במשחק</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">הגנת נתונים</h3>
                    <p className="text-gray-300 text-lg">הגנה מלאה על פרטיות השחקנים ומידע אישי</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;