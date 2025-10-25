import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import SearchResults from "@/components/SearchResults";
import karibuLogo from "@/assets/karibu-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-background via-card to-background border-b border-border/50 shadow-lg">
      <div className="py-3 px-4 md:py-4">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4">
            {/* Top row: Logo and Search */}
            <div className="flex items-center justify-between gap-6 md:gap-8">
              {/* Logo with subtle glow effect */}
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-adventure-gold opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
                  <img 
                    src={karibuLogo} 
                    alt="Karibu Gateways - Kenya's Premier Travel & Safari Company"
                    className="h-12 md:h-16 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Enhanced Search Bar */}
              <div className="flex items-center relative flex-1 max-w-xl">
                <div className="relative w-full group">
                  <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/10 to-adventure-gold/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Input
                    placeholder="Discover your next adventure..."
                    className="w-full pl-4 pr-12 h-10 md:h-12 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-sunset-orange/50 focus:border-sunset-orange transition-all duration-300 rounded-xl shadow-md text-sm md:text-base relative z-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                    <Search className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-sunset-orange transition-colors duration-300" />
                  </div>
                </div>
                <SearchResults />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center justify-center gap-6 md:gap-8 text-sm md:text-base pb-2 border-b border-border/30">
              <a 
                href="#destinations-section" 
                className="text-foreground/80 hover:text-sunset-orange transition-colors duration-300 font-medium hover:scale-105 transform"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Destinations
              </a>
              <a 
                href="#packages-section" 
                className="text-foreground/80 hover:text-sunset-orange transition-colors duration-300 font-medium hover:scale-105 transform"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Stay and Dine Selection
              </a>
              <Link 
                to="/team-building" 
                className="text-foreground/80 hover:text-sunset-orange transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Team Building
              </Link>
              <Link 
                to="/educational-tours" 
                className="text-foreground/80 hover:text-sunset-orange transition-colors duration-300 font-medium hover:scale-105 transform"
              >
                Educational Tours
              </Link>
              <a 
                href="#footer" 
                className="text-foreground/80 hover:text-sunset-orange transition-colors duration-300 font-medium hover:scale-105 transform"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;