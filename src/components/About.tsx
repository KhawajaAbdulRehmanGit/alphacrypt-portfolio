
import { ArrowRight, CheckCircle } from 'lucide-react';

const achievements = [
  "500+ Successful Automations Deployed",
  "99.9% System Uptime Maintained",
  "50+ Enterprise Clients Served",
  "24/7 AI-Powered Support"
];

const About = () => {
  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pioneering the <span className="gradient-text">Future</span> of Business Automation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We are dedicated to transforming businesses through innovative AI-powered automation solutions. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With our advanced automation strategies and future-ready solutions, we help organizations achieve unprecedented efficiency and stay ahead in an ever-evolving digital landscape.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleContactUs}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 rounded-full text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">AI-First</div>
                  <div className="text-gray-400 text-sm">Approach to every solution</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">Cloud-Native</div>
                  <div className="text-gray-400 text-sm">Scalable infrastructure</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">Real-Time</div>
                  <div className="text-gray-400 text-sm">Processing & analytics</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-2xl border border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-2">Secure</div>
                  <div className="text-gray-400 text-sm">Enterprise-grade protection</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
