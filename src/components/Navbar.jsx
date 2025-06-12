import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiHome, FiCode, FiLayers, FiMail, FiAward, FiBook } from 'react-icons/fi';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position with offset
      const sections = ['home', 'education', 'certifications', 'projects', 'contact'];
      const navbarHeight = 80; // Height of the navbar
      
      let newActiveSection = 'home'; // Default to home

      // Iterate through sections to find the one currently in view
      for (let i = 0; i < sections.length; i++) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // A section is considered active if its top is within the visible viewport
          // adjusted for navbar height, and it's not entirely below the viewport.
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            newActiveSection = sectionId;
            break; // Found the active section, no need to check further
          }
        }
      }
      
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };
    
    // Add smooth scroll behavior to the html element
    // document.documentElement.style.scrollBehavior = 'smooth';
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset'; // Ensure scroll is re-enabled
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);
      handleCloseMobileMenu(); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome },
    { id: 'education', label: 'Education', icon: FiBook },
    { id: 'certifications', label: 'Certifications', icon: FiAward },
    { id: 'coding-profiles', label: 'Coding Profiles', icon: FiCode },
    { id: 'projects', label: 'Projects', icon: FiLayers },
    { id: 'contact', label: 'Contact', icon: FiMail },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white text-lg md:text-xl font-bold">VA</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Vasu Aghera</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer flex items-center space-x-2 group ${
                  activeSection === item.id ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
              >
                <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                  activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''
                }`} />
                <span className={`font-medium transition-colors duration-300 ${
                  activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''
                }`}>{item.label}</span>
              </div>
            ))}
            
            {/* Theme Toggle Button */}
            <div
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:rotate-12"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:rotate-12"
            >
              {isDarkMode ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </div>
            <div
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={handleCloseMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                activeSection === item.id ? 'bg-gray-100 dark:bg-gray-800' : ''
              }`}
            >
              <item.icon className={`w-5 h-5 ${
                activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''
              }`} />
              <span className={`font-medium ${
                activeSection === item.id ? 'text-blue-600 dark:text-blue-400' : ''
              }`}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
