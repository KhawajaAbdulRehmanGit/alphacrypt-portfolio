import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Global E-commerce Platform AI",
    description: "Increased sales by 180% through AI-powered product recommendations and dynamic pricing for a leading fashion retailer",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    tags: ["E-commerce", "AI Recommendations", "Dynamic Pricing"],
    metrics: "180% Sales Increase"
  },
  {
    title: "Healthcare Patient Management System",
    description: "Reduced patient wait times by 75% using AI-powered scheduling and resource allocation for a major hospital network",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tags: ["Healthcare", "AI Scheduling", "Patient Care"],
    metrics: "75% Wait Time Reduction"
  },
  {
    title: "Airlines Customer Service Automation",
    description: "Automated 90% of customer inquiries with AI chatbots, improving response time and customer satisfaction",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    tags: ["Airlines", "AI Chatbots", "Customer Service"],
    metrics: "90% Automation Rate"
  },
  {
    title: "Smart Manufacturing Analytics",
    description: "Reduced equipment downtime by 85% through predictive maintenance AI for automotive manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Manufacturing", "Predictive AI", "Maintenance"],
    metrics: "85% Downtime Reduction"
  },
  {
    title: "Real Estate Lead Generation AI",
    description: "Increased qualified leads by 200% using AI-powered lead scoring and automated follow-up systems",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    tags: ["Real Estate", "Lead Generation", "AI Scoring"],
    metrics: "200% Lead Increase"
  },
  {
    title: "EdTech Personalized Learning",
    description: "Improved student performance by 95% through AI-driven personalized learning paths and adaptive assessments",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tags: ["Education", "Personalized AI", "Learning Analytics"],
    metrics: "95% Performance Boost"
  },
  {
    title: "Financial Trading AI System",
    description: "Generated 340% ROI through AI-powered algorithmic trading and risk management for investment firm",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    tags: ["Finance", "Trading AI", "Risk Management"],
    metrics: "340% ROI Generated"
  },
  {
    title: "Logistics Route Optimization",
    description: "Reduced delivery costs by 60% using AI-powered route optimization and fleet management systems",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    tags: ["Logistics", "Route AI", "Fleet Management"],
    metrics: "60% Cost Reduction"
  },
  {
    title: "Smart City Traffic Management",
    description: "Improved traffic flow by 70% through AI-powered traffic light optimization and congestion prediction",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    tags: ["Smart City", "Traffic AI", "Urban Planning"],
    metrics: "70% Flow Improvement"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30"></div>
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 backdrop-blur-sm mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Proven Results</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real transformations achieved through our AI automation solutions across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-gradient-to-br from-secondary/80 to-secondary/40 border border-white/10 hover:border-primary/30 overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-white w-fit">
                    {project.metrics}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
