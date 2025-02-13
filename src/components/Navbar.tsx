
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">AlphaCrypt</span>
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {isHomePage ? (
              <>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </>
            ) : null}
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
            <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md py-4">
            <div className="flex flex-col space-y-4 px-4">
              {isHomePage ? (
                <>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
                </>
              ) : null}
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">Blogs</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
