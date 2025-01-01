import React from 'react';

const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="m-8 flex items-center justify-center gap-4">
      <div className="w-full fixed top-4 left-0 right-0 flex justify-center px-4">
        <nav className="bg-[#27272a]/80 backdrop-blur-lg rounded-full px-8 z-50 border border-gray-700/20">
          <div className="flex items-center justify-start h-12 gap-8">
            <button 
              onClick={() => handleScroll('home')} 
              className="relative text-white group">
              <span className="hover:text-gray-300 transition-colors">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleScroll('projects')} 
              className="relative text-white group">
              <span className="hover:text-gray-300 transition-colors">Projects</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleScroll('Technology')} 
              className="relative text-white group">
              <span className="hover:text-gray-300 transition-colors">Technology</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => handleScroll('contact')} 
              className="relative text-white group">
              <span className="hover:text-gray-300 transition-colors">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
