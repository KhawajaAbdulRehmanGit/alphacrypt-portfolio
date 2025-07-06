
import { Bot, MessageSquare, ShoppingCart, BarChart3, Headphones, Zap, ArrowRight, CheckCircle, Heart, Plane, Building2, Factory, Truck, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: "E-commerce Automation",
    description: "Complete store automation from inventory management to personalized shopping experiences and dynamic pricing",
    features: ["Inventory optimization", "Dynamic pricing", "Personalized recommendations", "Order automation"],
    gradient: "from-orange-500/20 via-primary/20 to-red-500/20",
    price: "Starting at $499/month"
  },
  {
    icon: <Heart className="w-12 h-12 text-primary" />,
    title: "Healthcare AI Solutions",
    description: "Advanced AI systems for patient management, appointment scheduling, and medical data analysis",
    features: ["Patient scheduling", "Medical chatbots", "Data analytics", "Compliance monitoring"],
    gradient: "from-green-500/20 via-primary/20 to-teal-500/20",
    price: "Starting at $799/month"
  },
  {
    icon: <Plane className="w-12 h-12 text-primary" />,
    title: "Airlines & Travel Automation",
    description: "Streamline booking processes, customer service, and operational efficiency for travel industry",
    features: ["Booking automation", "Flight notifications", "Customer support", "Loyalty programs"],
    gradient: "from-blue-500/20 via-primary/20 to-cyan-500/20",
    price: "Starting at $899/month"
  },
  {
    icon: <Building2 className="w-12 h-12 text-primary" />,
    title: "Real Estate Automation",
    description: "Property management, lead generation, and client communication automation for real estate professionals",
    features: ["Lead qualification", "Property matching", "Virtual tours", "Contract automation"],
    gradient: "from-purple-500/20 via-primary/20 to-pink-500/20",
    price: "Starting at $599/month"
  },
  {
    icon: <Factory className="w-12 h-12 text-primary" />,
    title: "Manufacturing Intelligence",
    description: "Smart factory solutions with predictive maintenance, quality control, and supply chain optimization",
    features: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Production planning"],
    gradient: "from-indigo-500/20 via-primary/20 to-blue-500/20",
    price: "Starting at $1,299/month"
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    title: "Education Technology",
    description: "AI-powered learning platforms, student management, and personalized education experiences",
    features: ["Personalized learning", "Student analytics", "Automated grading", "Virtual tutoring"],
    gradient: "from-cyan-500/20 via-primary/20 to-teal-500/20",
    price: "Starting at $399/month"
  }
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Industry-Specific
            </span>
            <br />
            <span className="gradient-text">AI Automation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your industry with our specialized AI solutions designed for specific business verticals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer`}
              onClick={() => setSelectedService(index)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/20 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-6">Book a free consultation and see how our AI solutions can revolutionize your operations</p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
