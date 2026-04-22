import { FaPrint, FaPaintBrush, FaRegBuilding, FaRegImages, FaTshirt, FaEnvelope } from "react-icons/fa";

const services = [
  {
    icon: FaPrint,
    title: "Digital & Offset Printing",
    description: "High-quality digital and offset printing for business cards, brochures, flyers, and more with sharp details.",
  },
  {
    icon: FaPaintBrush,
    title: "Custom Design Services",
    description: "Professional graphic design tailored to your brand identity, from concept to final artwork.",
  },
  {
    icon: FaRegBuilding,
    title: "Large Format Printing",
    description: "Banners, posters, signage, and trade show displays that make a bold impression.",
  },
  {
    icon: FaRegImages,
    title: "Premium Finishing",
    description: "Lamination, embossing, foil stamping, and custom binding for a luxurious feel.",
  },
  {
    icon: FaTshirt,
    title: "Custom Apparel Printing",
    description: "Screen printing and DTG for t-shirts, hoodies, and promotional wear.",
  },
  {
    icon: FaEnvelope,
    title: "Direct Mail Services",
    description: "Integrated print and mail solutions for effective marketing campaigns.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Comprehensive printing solutions tailored to meet your unique needs
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/10 transition-colors">
                  <Icon className="text-3xl text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;