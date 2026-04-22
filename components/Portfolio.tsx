import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Branding Suite",
    category: "Business Cards & Stationery",
    image: "https://picsum.photos/id/20/400/300",
    alt: "Corporate business cards and letterhead",
  },
  {
    id: 2,
    title: "Event Banner & Signage",
    category: "Large Format",
    image: "https://picsum.photos/id/106/400/300",
    alt: "Large format banner for event",
  },
  {
    id: 3,
    title: "Product Packaging",
    category: "Custom Packaging",
    image: "https://picsum.photos/id/30/400/300",
    alt: "Custom product packaging boxes",
  },
  {
    id: 4,
    title: "Brochure & Catalog",
    category: "Offset Printing",
    image: "https://picsum.photos/id/24/400/300",
    alt: "Professional brochure design",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Recent Work</h2>
          <p className="text-gray-600 text-lg">
            Showcasing our commitment to quality and creativity
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-secondary font-semibold mb-1">{item.category}</p>
                <h3 className="font-bold text-primary text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;