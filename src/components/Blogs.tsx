import { Brain, Robot, Code } from "lucide-react";

export const Blogs = () => {
  const blogs = [
    {
      title: "The Future of AI in Business",
      description: "Explore how artificial intelligence is transforming modern business operations and decision-making processes.",
      icon: Brain,
      date: "Feb 1, 2024",
      readTime: "5 min read"
    },
    {
      title: "Machine Learning Best Practices",
      description: "A comprehensive guide to implementing machine learning solutions in your organization effectively.",
      icon: Robot,
      date: "Jan 28, 2024",
      readTime: "7 min read"
    },
    {
      title: "AI Development Trends 2024",
      description: "Stay ahead of the curve with the latest trends and innovations in AI development.",
      icon: Code,
      date: "Jan 25, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blogs" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Latest AI Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts and insights on artificial intelligence, machine learning, and technology trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg hover:transform hover:scale-105 transition-all duration-300 card-gradient"
            >
              <div className="flex items-center mb-4">
                <blog.icon className="w-8 h-8 text-primary mr-3" />
                <div className="text-sm text-gray-400">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {blog.description}
              </p>
              <a 
                href="#" 
                className="text-primary hover:text-primary/80 transition-colors inline-flex items-center"
              >
                Read More
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};