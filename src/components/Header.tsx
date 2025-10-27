import karibuLogo from "@/assets/karibu-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
              KARIBU
            </span>
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">
              GETAWAYS
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-base md:text-lg">
            <a 
              href="#destinations-section" 
              className="text-white hover:text-accent transition-colors duration-300 font-normal"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Destinations
            </a>
            <a 
              href="#packages-section" 
              className="text-white hover:text-accent transition-colors duration-300 font-normal"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Experiences
            </a>
            <a 
              href="#footer" 
              className="text-white hover:text-accent transition-colors duration-300 font-normal"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;