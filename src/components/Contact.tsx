import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business with automation? Let's talk about your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">contact@axeautomation.co</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Business Street<br />Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};