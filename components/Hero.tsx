import { FaPrint } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-primary">Naprint</span>
            <br />
            <span className="text-secondary">Tanzania</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
            High-quality printing solutions for businesses, events, and creative projects. 
            Fast turnaround, eco-friendly materials, and exceptional craftsmanship.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 inline-block shadow-md hover:shadow-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-secondary/10 rounded-full flex items-center justify-center animate-pulse">
            <FaPrint size={120} className="text-primary/30" />
            <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;