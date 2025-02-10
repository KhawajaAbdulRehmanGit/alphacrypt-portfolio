
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Fashion Boutique AI Optimization",
    description: "Increased sales by 150% through AI-powered product recommendations and dynamic pricing strategies",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Shopify", "AI Analytics", "E-commerce"]
  },
  {
    title: "Smart Inventory Management",
    description: "Implemented AI forecasting system reducing stockouts by 80% and improving inventory turnover",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tags: ["Inventory AI", "Shopify Plus", "Analytics"]
  },
  {
    title: "Healthcare Patient Scheduling",
    description: "Reduced wait times by 70% using AI-powered scheduling and resource allocation system",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
    tags: ["Healthcare", "AI Scheduling", "Automation"]
  },
  {
    title: "Real Estate Market Analysis",
    description: "AI-driven property valuation system achieving 95% accuracy in price predictions",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    tags: ["Real Estate", "AI Analytics", "Prediction"]
  },
  {
    title: "Medical Image Analysis",
    description: "Developed AI system for early disease detection with 99% accuracy rate",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tags: ["Healthcare", "AI Imaging", "Diagnosis"]
  },
  {
    title: "Property Management Automation",
    description: "Automated 85% of property management tasks using AI workflows",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1",
    tags: ["Real Estate", "Automation", "Management"]
  },
  {
    title: "Revenue Optimization System",
    description: "Developed AI pricing strategy increasing average order value by 45%",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Revenue AI", "Pricing", "Analytics"]
  },
  {
    title: "Healthcare Resource Optimization",
    description: "Optimized hospital resource allocation reducing operational costs by 40%",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    tags: ["Healthcare", "AI Operations", "Optimization"]
  },
  {
    title: "Real Estate Lead Generation",
    description: "AI-powered lead qualification system increasing conversion rates by 120%",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11",
    tags: ["Real Estate", "AI Marketing", "Leads"]
  },
  {
    title: "AI-Powered Learning Platform",
    description: "Personalized tutoring system achieving 95% student improvement rate through adaptive learning",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["EdTech", "AI Tutoring", "Personalization"]
  },
  {
    title: "NFT Trading Analytics Platform",
    description: "Built AI-driven NFT valuation system with 90% price prediction accuracy using Moralis API",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["NFT", "Blockchain", "AI Analytics"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Our Success Stories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-secondary border-none overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
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
