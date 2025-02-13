
import { Hero } from '../components/Hero';
import About from '../components/About';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add ElevenLabs widget script with error handling
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous"; // Add CORS header
    
    // Add error handling
    script.onerror = (error) => {
      console.error('Error loading ElevenLabs widget:', error);
    };

    // Only add the script if it hasn't been added before
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
      <elevenlabs-convai agent-id="hN76B3FuVsr7vevAfXTS"></elevenlabs-convai>
    </div>
  );
};

export default Index;
