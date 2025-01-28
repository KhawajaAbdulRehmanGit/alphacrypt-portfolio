import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Process Automation",
    description: "Automated workflow system for manufacturing company",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Automation", "Workflow", "Manufacturing"]
  },
  {
    title: "Data Integration",
    description: "Enterprise-level data integration platform",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Data", "Integration", "Enterprise"]
  },
  {
    title: "Custom Development",
    description: "Bespoke software solutions for unique business needs",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Development", "Software", "Custom"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Our Projects
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