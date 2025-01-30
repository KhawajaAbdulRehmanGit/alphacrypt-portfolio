import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "AlphaCrypt transformed our business processes completely. Their automation solutions helped us reduce operational costs by 40% while improving overall efficiency. The team's attention to detail was exceptional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director, InnovateCo",
    content: "The team at AlphaCrypt delivered beyond our expectations. Their custom solutions perfectly fit our unique business needs. Their responsive support team made the implementation process smooth.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, DataFlow Systems",
    content: "Working with AlphaCrypt was a game-changer for our company. Their expertise in automation and data integration is unmatched. We've seen a 60% improvement in our workflow efficiency.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "IT Manager, Global Solutions",
    content: "The cybersecurity solutions provided by AlphaCrypt have given us peace of mind. Their proactive approach to security threats and regular system updates keep our data safe and secure.",
    rating: 4
  },
  {
    name: "Lisa Zhang",
    role: "Product Manager, Innovation Hub",
    content: "AlphaCrypt's AI integration services have revolutionized our product development cycle. Their innovative solutions helped us launch our product three months ahead of schedule.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Founder, StartUp Dynamics",
    content: "As a startup, we needed cost-effective solutions that could scale. AlphaCrypt provided exactly that, plus excellent guidance on technology implementation. Highly recommended!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-gradient p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};