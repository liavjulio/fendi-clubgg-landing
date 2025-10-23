'use client';

import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'בית', href: '#home' },
    { name: 'אודות', href: '#about' },
    { name: 'הדרכה', href: '#tutorial' },
    { name: 'משחקים', href: '#features' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md shadow-2xl z-50 border-b border-yellow-500/30">
      <nav className="container-center">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-400 luxury-text-glow animate-glow">Fendi ClubGG</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="hidden md:flex space-x-3 rtl:space-x-reverse">
            <a
              href="http://apps.apple.com/il/app/clubgg-poker/id1529839330"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 border border-gray-600"
            >
              🍎 App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.nsus.clubgg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
            >
              📱 Google Play
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 text-2xl"
            >
              {isOpen ? <span>❌</span> : <span>☰</span>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 border-t border-yellow-500/20">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="http://apps.apple.com/il/app/clubgg-poker/id1529839330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-gray-800 to-black text-white font-bold py-3 px-4 rounded-lg text-center border border-gray-600"
                >
                  🍎 הורד מ-App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nsus.clubgg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3 px-4 rounded-lg text-center"
                >
                  📱 הורד מ-Google Play
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;