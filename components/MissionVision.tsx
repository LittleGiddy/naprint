import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Guiding Principles</h2>
          <p className="text-gray-600 text-lg">
            Driven by purpose, inspired by excellence
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <FaBullseye className="text-3xl text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Empower businesses and individuals with exceptional print quality, sustainable practices, 
              and creative expertise, delivering on time every time while fostering long-term partnerships 
              built on trust and innovation.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-secondary/5 to-white rounded-2xl p-8 border border-secondary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FaEye className="text-3xl text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To redefine the printing industry through technological innovation, design excellence, 
              and a commitment to environmentally responsible solutions, becoming the most trusted 
              printing partner for businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;