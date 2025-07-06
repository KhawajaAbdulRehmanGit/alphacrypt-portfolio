
import { Hero } from '../components/Hero';
import About from '../components/About';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { ThemeProvider } from '../components/ThemeProvider';
import { FloatingElements } from '../components/FloatingElements';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Add ElevenLabs widget script with error handling
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    script.crossOrigin = "anonymous";
    
    script.onerror = (error) => {
      console.error('Error loading ElevenLabs widget:', error);
    };

    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background relative">
        <FloatingElements />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blogs />
        <Testimonials />
        <Contact />
        <Footer />
        <elevenlabs-convai agent-id="hN76B3FuVsr7vevAfXTS"></elevenlabs-convai>
      </div>
    </ThemeProvider>
  );
};

export default Index;
