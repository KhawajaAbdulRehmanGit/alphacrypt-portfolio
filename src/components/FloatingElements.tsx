
import { Brain, MessageCircle, Cpu, Zap } from 'lucide-react';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating Brain */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Brain className="w-8 h-8 text-primary" />
      </div>
      
      {/* Floating Message */}
      <div className="absolute top-40 right-20 animate-float animation-delay-1000 opacity-15">
        <MessageCircle className="w-6 h-6 text-primary" />
      </div>
      
      {/* Floating CPU */}
      <div className="absolute bottom-40 left-20 animate-float animation-delay-2000 opacity-10">
        <Cpu className="w-10 h-10 text-primary" />
      </div>
      
      {/* Floating Zap */}
      <div className="absolute bottom-20 right-10 animate-float animation-delay-3000 opacity-25">
        <Zap className="w-7 h-7 text-primary" />
      </div>
      
      {/* Circuit-like connections */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 10,30 L 90,30 M 30,10 L 30,90 M 70,10 L 70,90" stroke="#9b87f5" strokeWidth="1" fill="none"/>
            <circle cx="30" cy="30" r="3" fill="#9b87f5"/>
            <circle cx="70" cy="30" r="3" fill="#9b87f5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)"/>
      </svg>
    </div>
  );
};
