import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { 
      label: 'Annual Report', 
      href: '#',
      dropdown: [
        { label: '2024 Report', href: '#' },
        { label: '2023 Report', href: '#' },
        { label: 'Archive', href: '#' }
      ]
    },
    { label: 'Blogs', href: '#' },
    { label: 'Ideathon6.0', href: 'events' },
    { label: 'Team', href: 'team' },
    { label: 'Contact Us', href: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 flex items-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              EN
              <div className="relative">
                <span className="opacity-0">I</span>
                <div className="absolute inset-0 flex flex-col items-center">
                  <div className="h-3 w-3 bg-yellow-400 rounded-full shadow-lg animate-pulse mb-0.5" 
                       style={{
                         boxShadow: '0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24'
                       }}></div>
                  <span className="bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] bg-clip-text text-transparent">I</span>
                </div>
              </div>
              GMA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-gray-700 hover:text-[#542b2c] px-3 py-2 rounded-lg transition-all duration-300 flex items-center group"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg border border-gray-100 rounded-xl shadow-xl py-2">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropItem.href}
                              className="block px-4 py-2 text-gray-700 hover:text-[#8b5a5b] hover:bg-gray-50 transition-all duration-200"
                            >
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-700 hover:text-[#542b2c] px-3 py-2 rounded-lg transition-all duration-300 relative group"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#542b2c] to-[#8b5a5b] group-hover:w-full transition-all duration-300"></span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#542b2c] p-2 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border border-gray-100 rounded-xl shadow-xl mt-4 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-gray-700 hover:text-[#542b2c] block px-3 py-2 rounded-lg w-full text-left transition-colors duration-200 flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <a
                              key={dropIndex}
                              href={dropItem.href}
                              className="text-gray-600 hover:text-[#8b5a5b] block px-3 py-2 rounded-lg transition-colors duration-200"
                            >
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-700 hover:text-[#542b2c] block px-3 py-2 rounded-lg w-full text-left transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;