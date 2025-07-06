
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 border-b border-primary/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <span className="text-2xl font-bold gradient-text">AlphaCrypt</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">About</a>
                <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Services</a>
              </>
            ) : null}
            <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Success Stories</Link>
            <Link to="/blogs" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">AI Blog</Link>
            <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Contact</Link>
            <ThemeToggle />
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-medium hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass backdrop-blur-md py-4 border-b border-primary/20">
            <div className="flex flex-col space-y-4 px-4">
              {isHomePage ? (
                <>
                  <a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">About</a>
                  <a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Services</a>
                </>
              ) : null}
              <Link to="/projects" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Success Stories</Link>
              <Link to="/blogs" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">AI Blog</Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium">Contact</Link>
              <div className="flex items-center justify-between pt-4">
                <ThemeToggle />
                <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
