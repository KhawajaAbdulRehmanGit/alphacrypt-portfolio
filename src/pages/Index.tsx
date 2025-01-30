import { Hero } from '../components/Hero';
import About from '../components/About';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import { Testimonials } from '../components/Testimonials';
import { Blogs } from '../components/Blogs';
import { AssistantButton } from '../components/AssistantButton';

const Index = () => {
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
      <AssistantButton />
    </div>
  );
};

export default Index;