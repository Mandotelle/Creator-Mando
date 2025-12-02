import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-mando-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-mando-red rounded-sm rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center">
            <span className="text-white font-black text-xl">C</span>
          </div>
          <span className="font-bold text-white tracking-tight text-xl">
            MANDO<span className="text-mando-yellow">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('audience')} className="text-gray-300 hover:text-white font-medium transition-colors">Voor wie?</button>
          <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-white font-medium transition-colors">Werkwijze</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white font-medium transition-colors">Voorbeelden</button>
          <button onClick={() => scrollToSection('contact')} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-mando-black border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          <button onClick={() => scrollToSection('audience')} className="text-left text-gray-300 hover:text-white font-medium py-2">Voor wie?</button>
          <button onClick={() => scrollToSection('process')} className="text-left text-gray-300 hover:text-white font-medium py-2">Werkwijze</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-300 hover:text-white font-medium py-2">Voorbeelden</button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-mando-red text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2"
          >
            Start Nu <ArrowRight size={18} />
          </button>
        </div>
      )}
    </header>
  );
};