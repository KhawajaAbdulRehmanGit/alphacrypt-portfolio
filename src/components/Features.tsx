
import { Code, Cpu, LineChart, Workflow, Database, Shield, Brain, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI Solutions",
    description: "Custom AI-powered solutions to automate and enhance your business processes",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Micro SaaS",
    description: "Scalable, focused software solutions for specific business needs",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your business needs",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Process Automation",
    description: "Streamline repetitive tasks and improve efficiency",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Analytics Integration",
    description: "Data-driven insights to optimize your operations",
    gradient: "from-teal-500/20 to-blue-500/20"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Security Solutions",
    description: "Protect your automation systems with robust security",
    gradient: "from-indigo-500/20 to-purple-500/20"
  }
];

export const Features = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-secondary via-secondary to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Revolutionary</span> Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge automation solutions designed for the future of business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
