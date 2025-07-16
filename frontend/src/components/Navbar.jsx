// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      // Synchronise l'état avec la classe du body au montage
      setIsDark(document.body.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
      if (isDark) {
        document.body.classList.remove('dark');
        setIsDark(false);
      } else {
        document.body.classList.add('dark');
        setIsDark(true);
      }
    };

  return (
     <header className="fixed w-full top-0 z-50 bg-white dark:bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20 transition-colors duration-500">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div>
              <img src={logo} alt="Prosystem Logo" className="h-16 w-auto object-contain" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Accueil</a>
            <a href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Services</a>
            <a href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Produits</a>
            <a href="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Certifications</a>
            <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
          </nav>

          {/* Light/Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full border border-blue-400/30 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-200 text-yellow-400 dark:text-yellow-300 flex items-center justify-center"
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/20 bg-white dark:bg-slate-900 transition-colors duration-500">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Accueil</a>
              <a href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Services</a>
              <a href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Produits</a>
              <a href="/certifications" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Certifications</a>
              <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;