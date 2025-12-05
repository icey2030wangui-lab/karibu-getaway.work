import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const handleScrollToSection = (sectionId: string) => {
    // If already on home page, scroll directly
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll after a short delay
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gradient-to-br from-footer-dark via-ocean-blue to-footer-dark text-footer-text py-10 px-4 font-['Poppins',sans-serif]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          
          {/* About Section */}
          <div className="min-w-[250px]">
            <h2 className="text-footer-accent text-xl font-semibold mb-3">KARIBU GETAWAYS</h2>
            <p className="leading-relaxed text-sm">
              {t('footer.aboutText')}
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="min-w-[250px]">
            <h3 className="text-footer-accent text-lg font-semibold mb-3">{t('footer.contactUs')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+254742128101" className="hover:text-footer-accent transition-colors">
                  +254 742 128 101
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@karibugetaway.com" className="hover:text-footer-accent transition-colors">
                  info@karibugetaway.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a 
                  href="https://www.karibugetaway.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-footer-accent transition-colors"
                >
                  www.karibugetaway.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="min-w-[200px]">
            <h3 className="text-footer-accent text-lg font-semibold mb-3">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-footer-accent transition-colors cursor-pointer">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('destinations-section')} 
                  className="hover:text-footer-accent transition-colors cursor-pointer text-left"
                >
                  {t('nav.destinations')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('destinations-section')} 
                  className="hover:text-footer-accent transition-colors cursor-pointer text-left"
                >
                  {t('nav.safariPackages')}
                </button>
              </li>
              <li>
                <Link to="/faq" className="hover:text-footer-accent transition-colors cursor-pointer">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-footer-accent transition-colors cursor-pointer">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social / Trust */}
          <div className="min-w-[200px]">
            <h3 className="text-footer-accent text-lg font-semibold mb-3">{t('footer.followUs')}</h3>
            <div className="space-y-2 text-sm mb-4">
              <div>
                <a 
                  href="https://www.tiktok.com/@karibu_2_getaways" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-footer-accent transition-colors"
                >
                  🎶 TikTok: @karibu_2_getaways
                </a>
              </div>
              <div>
                <a 
                  href="https://www.instagram.com/karibu2getaways?igsh=MWhkaXZuMm5teXpqcA%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-footer-accent transition-colors"
                >
                  📸 Instagram: @karibu2getaways
                </a>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footer.licensedBy')}<br />
              {t('footer.memberOf')} • Bonded & Insured
            </p>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-footer-text/20 text-sm text-footer-text/70">
          <p>
            © 2025 Karibu Getaways. {t('footer.allRightsReserved')} | {" "}
            <Link to="/privacy" className="hover:text-footer-accent transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            {" "} | {" "}
            <Link to="/terms" className="hover:text-footer-accent transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;