import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    navigate('/contact');
    toast.success("Let's get started with your automation journey!");
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    toast.info("Explore our services and solutions");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="gradient-text">Automation</span> Solutions<br />
          for Modern Business
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Streamline your business processes with cutting-edge automation technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleGetStarted}
            className="bg-primary px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
          <button 
            onClick={handleLearnMore}
            className="border border-primary px-8 py-3 rounded-full text-white font-semibold hover:bg-primary/10 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] opacity-30 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
    </section>
  );
};