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
    title: "Automated Customer Service",
    description: "Deployed AI chatbot reducing response time by 90% and increasing customer satisfaction",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["AI Support", "Automation", "CRM"]
  },
  {
    title: "Personalized Marketing Engine",
    description: "Built custom AI marketing system achieving 200% increase in email engagement",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Marketing AI", "Shopify", "Automation"]
  },
  {
    title: "Revenue Optimization System",
    description: "Developed AI pricing strategy increasing average order value by 45%",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Revenue AI", "Pricing", "Analytics"]
  },
  {
    title: "Conversion Rate Optimization",
    description: "Implemented AI-driven A/B testing system boosting conversion rates by 85%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["CRO", "Shopify", "Testing"]
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