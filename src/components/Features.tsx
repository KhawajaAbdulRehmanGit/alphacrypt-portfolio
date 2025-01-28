import { Code, Cpu, LineChart } from 'lucide-react';

const features = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your business needs"
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Process Automation",
    description: "Streamline repetitive tasks and improve efficiency"
  },
  {
    icon: <LineChart className="w-8 h-8 text-primary" />,
    title: "Analytics Integration",
    description: "Data-driven insights to optimize your operations"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-gradient p-8 rounded-2xl hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};