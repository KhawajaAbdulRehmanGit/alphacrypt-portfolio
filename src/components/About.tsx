export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              About Our Solutions
            </h2>
            <p className="text-gray-400">
              We specialize in creating custom automation solutions that help businesses 
              streamline their operations and increase efficiency. Our team of experts 
              works closely with you to understand your needs and deliver tailored solutions.
            </p>
          </div>
          <div className="card-gradient p-8 rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
              alt="Automation" 
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};