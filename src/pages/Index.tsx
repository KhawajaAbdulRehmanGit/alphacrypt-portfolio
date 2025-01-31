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
    // Add ElevenLabs widget script
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
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