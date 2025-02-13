
import { Blogs as BlogsSection } from '../components/Blogs';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <BlogsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
