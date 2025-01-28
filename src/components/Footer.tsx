import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Axe Automation</h3>
            <p className="text-gray-400">
              Transforming businesses through innovative automation solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Process Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Integration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Axe Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};