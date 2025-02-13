
import { Projects as ProjectsSection } from '../components/Projects';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
