import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import SearchResults from "@/components/SearchResults";
import karibuLogo from "@/assets/karibu-logo.png";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-background via-card to-background border-b border-border/50 shadow-lg">
      <div className="py-5 px-4 md:py-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-6 md:gap-8">
            {/* Logo with subtle glow effect */}
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-adventure-gold opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
                <img 
                  src={karibuLogo} 
                  alt="Karibu Gateways - Kenya's Premier Travel & Safari Company"
                  className="h-14 md:h-20 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div className="flex items-center relative flex-1 max-w-xl">
              <div className="relative w-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/10 to-adventure-gold/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Input
                  placeholder="Discover your next adventure..."
                  className="w-full pl-4 pr-12 h-12 bg-background/50 backdrop-blur-sm border-2 border-border hover:border-sunset-orange/50 focus:border-sunset-orange transition-all duration-300 rounded-xl shadow-md text-base relative z-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
                  <Search className="w-5 h-5 text-muted-foreground group-hover:text-sunset-orange transition-colors duration-300" />
                </div>
              </div>
              <SearchResults />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;