
import { Bot, MessageSquare, ShoppingCart, BarChart3, Headphones, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: "AI Voice Agents",
    description: "Intelligent voice assistants that handle customer calls, appointments, and support 24/7",
    features: ["Natural conversation flow", "Multi-language support", "CRM integration", "Real-time analytics"],
    gradient: "from-blue-500/20 via-primary/20 to-purple-500/20",
    price: "Starting at $299/month"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    title: "Customer Support Bots",
    description: "Advanced chatbots that resolve 90% of customer inquiries instantly across all channels",
    features: ["Omnichannel deployment", "Smart escalation", "Knowledge base integration", "Sentiment analysis"],
    gradient: "from-green-500/20 via-primary/20 to-teal-500/20",
    price: "Starting at $199/month"
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: "E-commerce Automation",
    description: "Complete store automation from inventory management to personalized shopping experiences",
    features: ["Inventory optimization", "Dynamic pricing", "Personalized recommendations", "Order automation"],
    gradient: "from-orange-500/20 via-primary/20 to-red-500/20",
    price: "Starting at $499/month"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-primary" />,
    title: "AI Analytics Dashboard",
    description: "Real-time business intelligence powered by AI to make data-driven decisions",
    features: ["Predictive analytics", "Custom dashboards", "Automated reports", "ROI tracking"],
    gradient: "from-cyan-500/20 via-primary/20 to-blue-500/20",
    price: "Starting at $399/month"
  },
  {
    icon: <Headphones className="w-12 h-12 text-primary" />,
    title: "AI Call Center",
    description: "Scale your customer service with AI agents that sound and act like human representatives",
    features: ["Human-like conversations", "Call routing", "Quality monitoring", "Performance analytics"],
    gradient: "from-purple-500/20 via-primary/20 to-pink-500/20",
    price: "Starting at $699/month"
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Custom AI Solutions",
    description: "Tailored AI automations built specifically for your unique business processes",
    features: ["Custom development", "API integrations", "Scalable architecture", "Ongoing support"],
    gradient: "from-indigo-500/20 via-primary/20 to-purple-500/20",
    price: "Custom pricing"
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
            <span className="text-sm text-primary font-medium">AI-Powered Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge AI agents and automation systems designed for the future
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
