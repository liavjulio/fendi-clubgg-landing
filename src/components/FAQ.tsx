'use client';

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "מה זה ClubGG?",
      answer: "רוצה לשחק פוקר מהבית על כסף אמיתי? אפליקציית ClubGG מציעה מועדוני פוקר אונליין עם משחקים כמו אומהה, טקסס וטורנירים. אנחנו ב-fendi ClubGG הנציגים הרשמיים של מועדון הפוקר המוביל בישראל."
    },
    {
      question: "האם אני יכול לשחק עבור כסף אמיתי ב-ClubGG?",
      answer: "ClubGG מבטיח חווית משחק חוקית ונטולת סיכונים על ידי היותה פלטפורמת פוקר חופשית למשחק נטולת הימור על כסף אמיתי או קבלה של הפקדות."
    },
    {
      question: "האם אני יכול לגשת אל ClubGG במכשירים ניידים?",
      answer: "כן אכן, ל- ClubGG יש פריסה אופטימלית לנייד שעוזרת למשתמשים ליהנות ממשחקי פוקר ללא רבב בטאבלטים, סמארטפונים ומכשירים אחרים."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-center">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6">
            <span className="gold-gradient bg-clip-text text-transparent">שאלות נפוצות</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            מענה לשאלות הנפוצות ביותר על ClubGG ומועדון הפוקר שלנו
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-right p-8 flex items-center justify-between hover:bg-gradient-to-r hover:from-yellow-500/5 hover:to-yellow-600/5 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center ml-6 text-black text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {faq.question}
                  </h3>
                </div>
                
                <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-black text-xl">
                    ▼
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-8">
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border-r-4 border-yellow-500">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500/10 via-yellow-400/10 to-yellow-500/10 rounded-3xl p-8 border-2 border-yellow-500/30 relative overflow-hidden max-w-4xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 text-yellow-400 text-6xl">❓</div>
              <div className="absolute top-8 right-8 text-yellow-400 text-4xl">💬</div>
              <div className="absolute bottom-4 left-8 text-yellow-400 text-5xl">📞</div>
              <div className="absolute bottom-8 right-4 text-yellow-400 text-7xl">💡</div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                יש לך שאלות נוספות?
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                הסוכנים שלנו זמינים 24/7 לכל שאלה או בעיה
              </p>
              <a
                href="https://wa.me/972553310581?text=היי יש לי שאלה על ClubGG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl"
              >
                <span className="text-2xl">💬</span>
                שאל את הסוכן
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;