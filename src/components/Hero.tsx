
import { useEffect, useState } from 'react';
import { toast } from "sonner";
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    const emailAddress = 'alphacrypt55@gmail.com';
    const subject = 'Inquiry about Automation Solutions';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
    toast.success("Opening email client...", {
      description: "We'll get back to you within 24 hours"
    });
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      toast.info("Explore our services and solutions", {
        description: "Discover how we can transform your business"
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(155,135,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(155,135,245,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className={`text-center transform transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">AI-Powered Automation</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-pulse">
            Future-Ready
          </span>
          <br />
          <span className="gradient-text">Automation</span> Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Transform your business with cutting-edge AI automation that adapts to tomorrow's challenges
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={handleLearnMore}
            className="group px-8 py-4 border-2 border-primary/50 rounded-full text-white font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Stats or features preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-400 text-sm">Processes Automated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-400 text-sm">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
