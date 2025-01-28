import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "AlphaCrypt transformed our business processes completely. Their automation solutions helped us reduce operational costs by 40%.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director, InnovateCo",
    content: "The team at AlphaCrypt delivered beyond our expectations. Their custom solutions perfectly fit our unique business needs.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, DataFlow Systems",
    content: "Working with AlphaCrypt was a game-changer for our company. Their expertise in automation and data integration is unmatched.",
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