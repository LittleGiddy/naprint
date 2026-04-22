import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ModoPrint</h3>
            <p className="text-gray-300">
              Delivering exceptional print quality with innovative solutions for businesses and individuals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-secondary transition">Portfolio</a></li>
              <li><a href="#mission-vision" className="text-gray-300 hover:text-secondary transition">Mission & Vision</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2"><FaEnvelope /> naprinttz@gmail.com</p>
              <p className="flex items-center gap-2"><FaPhoneAlt /> +255769999902</p>
              <p className="flex items-center gap-2"><FaMapMarkerAlt /> Rufiji Street, Dar es salaam</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Naprint Tz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;