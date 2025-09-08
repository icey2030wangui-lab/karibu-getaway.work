import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main footer content */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                KARIBU GATEWAYS
              </h3>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Kenya's leading tour and travel company with over 15 years of experience. 
                We've successfully served 30,000+ travelers with unforgettable experiences 
                across Kenya and East Africa. Your adventure begins with us.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>info@karibugateway.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+254 700 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "All Destinations", 
                  "Safari Packages",
                  "Beach Holidays",
                  "Local Packages",
                  "Contact Us"
                ].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">
                Top Destinations
              </h4>
              <ul className="space-y-2">
                {[
                  "Maasai Mara",
                  "Diani Beach",
                  "Amboseli",
                  "Mombasa",
                  "Samburu",
                  "Mount Kenya"
                ].map((destination) => (
                  <li key={destination}>
                    <a 
                      href="#" 
                      className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200"
                    >
                      {destination}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-accent">Follow Our Adventures</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <p className="text-sm text-secondary-foreground/60">
                  Licensed by Kenya Tourism Board
                </p>
                <p className="text-sm text-secondary-foreground/60 mt-1">
                  KATO Member • Bonded & Insured
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-secondary/80 py-4 px-4 border-t border-secondary-foreground/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/60">
            <p>
              © 2024 Karibu Gateways. All rights reserved.
            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;