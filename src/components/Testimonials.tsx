
import { MessageSquare, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechFlow Inc",
    content: "AlphaCrypt transformed our e-commerce operations completely. Their AI automation reduced our operational costs by 45% while increasing sales by 180%. The ROI was immediate and substantial.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c107",
    company: "TechFlow Inc"
  },
  {
    name: "Dr. Michael Chen",
    role: "Hospital Director, MedCenter",
    content: "The healthcare AI solutions from AlphaCrypt revolutionized our patient management system. We reduced wait times by 75% and improved patient satisfaction scores significantly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    company: "MedCenter Healthcare"
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, SkyLine Airlines",
    content: "Working with AlphaCrypt was a game-changer for our customer service operations. Their AI chatbots now handle 90% of customer inquiries with incredible accuracy and speed.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    company: "SkyLine Airlines"
  },
  {
    name: "David Thompson",
    role: "Operations Manager, AutoMate Manufacturing",
    content: "The predictive maintenance AI system has been phenomenal. We've reduced equipment downtime by 85% and saved millions in unexpected repair costs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    company: "AutoMate Manufacturing"
  },
  {
    name: "Lisa Zhang",
    role: "Founder, PropTech Solutions",
    content: "AlphaCrypt's real estate AI doubled our qualified leads and automated 80% of our initial client interactions. Their technology is truly cutting-edge.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    company: "PropTech Solutions"
  },
  {
    name: "James Wilson",
    role: "Principal, EduTech Academy",
    content: "The personalized learning AI platform improved our student performance by 95%. It's incredible how technology can enhance education when implemented correctly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    company: "EduTech Academy"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 backdrop-blur-sm mb-6">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Client Success</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real feedback from industry leaders who've transformed their businesses with our AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary/40 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/60 mb-4" />
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              {/* Client info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary/80">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
