
import { useEffect, useState } from 'react';
import { toast } from "sonner";
import { ArrowRight, Sparkles, Play, Bot, Zap, Brain } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demoContent = [
    {
      title: "AI Voice Agents",
      description: "24/7 intelligent customer support",
      icon: <Bot className="w-8 h-8 text-primary" />
    },
    {
      title: "Smart Automation",
      description: "Streamline your entire workflow",
      icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
      title: "AI Analytics",
      description: "Data-driven business insights",
      icon: <Brain className="w-8 h-8 text-primary" />
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDemo(prev => (prev + 1) % demoContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    const emailAddress = 'alphacrypt55@gmail.com';
    const subject = 'Let\'s Build the Future with AI - Demo Request';
    const body = 'Hi AlphaCrypt team,\n\nI\'m interested in learning more about your AI automation solutions. Please schedule a demo call to discuss how you can transform my business.\n\nBest regards';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    toast.success("Opening email client...", {
      description: "Let's discuss your AI transformation journey"
    });
  };

  const handleWatchDemo = () => {
    toast.info("Demo coming soon!", {
      description: "Our interactive AI demo is being prepared"
    });
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-float"></div>
        
        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#9b87f5"/>
                <circle cx="150" cy="50" r="2" fill="#9b87f5"/>
                <circle cx="100" cy="150" r="2" fill="#9b87f5"/>
                <line x1="50" y1="50" x2="150" y2="50" stroke="#9b87f5" strokeWidth="1" opacity="0.3"/>
                <line x1="50" y1="50" x2="100" y2="150" stroke="#9b87f5" strokeWidth="1" opacity="0.3"/>
                <line x1="150" y1="50" x2="100" y2="150" stroke="#9b87f5" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural)"/>
          </svg>
        </div>
      </div>

      <div className={`text-center transform transition-all duration-1000 relative z-20 max-w-6xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 backdrop-blur-md mb-8 animate-fade-in hover:scale-105 transition-transform duration-300">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Next-Gen AI Automation Agency
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Transform Your Business
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-pulse">
            with AI Agents
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          We build intelligent AI systems that work 24/7 - from voice agents to complete automation workflows
        </p>

        {/* Interactive demo showcase */}
        <div className="glass rounded-2xl p-8 mb-12 max-w-2xl mx-auto border border-primary/20 backdrop-blur-md">
          <div className="flex items-center justify-center gap-4 mb-6">
            {demoContent[currentDemo].icon}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white">{demoContent[currentDemo].title}</h3>
              <p className="text-gray-400">{demoContent[currentDemo].description}</p>
            </div>
          </div>
          
          {/* Demo indicators */}
          <div className="flex justify-center gap-2">
            {demoContent.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentDemo ? 'bg-primary w-6' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-gradient-to-r from-primary via-primary to-primary/80 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center justify-center gap-2">
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={handleWatchDemo}
            className="group flex items-center gap-3 px-8 py-4 glass border border-primary/30 rounded-full text-white font-semibold hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-md min-w-[180px] justify-center"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </button>
        </div>

        {/* Enhanced stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "500+", label: "AI Agents Deployed", suffix: "" },
            { value: "99.9", label: "Uptime Guarantee", suffix: "%" },
            { value: "24", label: "AI Support Available", suffix: "/7" }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 group">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
