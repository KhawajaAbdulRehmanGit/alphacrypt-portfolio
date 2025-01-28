export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Transforming Business Through Automation
            </h2>
            <p className="text-gray-400">
              We specialize in creating custom automation solutions that help businesses 
              streamline their operations and increase efficiency. Our team of experts 
              works closely with you to understand your needs and deliver tailored solutions.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Custom Development Solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Process Automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Data Integration & Analytics
              </li>
            </ul>
          </div>
          <div className="card-gradient p-8 rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="About Us" 
              className="rounded-xl w-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};