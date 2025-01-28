export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-8">
          Ready to transform your business with automation? Let's talk about your needs.
        </p>
        <form className="max-w-md mx-auto space-y-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Your message"
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
    </section>
  );
};