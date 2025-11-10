import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-footer-dark text-footer-text py-10 px-4 font-['Poppins',sans-serif]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          
          {/* About Section */}
          <div className="min-w-[250px]">
            <h2 className="text-sunset-orange text-xl font-semibold mb-3">KARIBU GETAWAYS</h2>
            <p className="leading-relaxed text-sm">
              Your next unforgettable adventure starts here — explore Kenya with us.
              Kenya's leading tour and travel company with over 15 years of experience.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="min-w-[250px]">
            <h3 className="text-sunset-orange text-lg font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+254742128101" className="hover:text-sunset-orange transition-colors">
                  +254 742 128 101
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@karibugetaway.com" className="hover:text-sunset-orange transition-colors">
                  info@karibugetaway.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://www.karibugetaway.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sunset-orange transition-colors"
                >
                  www.karibugetaway.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="min-w-[200px]">
            <h3 className="text-sunset-orange text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-sunset-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('destinations-section')}
                  className="hover:text-sunset-orange transition-colors text-left"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('destinations-section')}
                  className="hover:text-sunset-orange transition-colors text-left"
                >
                  Safari Packages
                </button>
              </li>
              <li>
                <Link to="/faq" className="hover:text-sunset-orange transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sunset-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social / Trust */}
          <div className="min-w-[200px]">
            <h3 className="text-sunset-orange text-lg font-semibold mb-3">Follow Us</h3>
            <p className="text-sm mb-4">
              <a 
                href="https://www.tiktok.com/@karibugetaways" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-sunset-orange transition-colors"
              >
                🎶 TikTok: @karibugetaways
              </a>
            </p>
            <p className="text-sm leading-relaxed">
              Licensed by Kenya Tourism Board<br />
              KATO Member • Bonded & Insured
            </p>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-footer-text/20 text-sm text-footer-text/70">
          <p>
            © 2025 Karibu Getaways. All Rights Reserved. | {" "}
            <Link to="/privacy" className="hover:text-sunset-orange transition-colors">
              Privacy Policy
            </Link>
            {" "} | {" "}
            <Link to="/terms" className="hover:text-sunset-orange transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;