import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import SearchResults from "@/components/SearchResults";
import karibuLogo from "@/assets/karibu-logo.png";

const Header = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={karibuLogo} 
                alt="Karibu Gateways - Kenya's Premier Travel & Safari Company"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Search Bar */}
            <div className="flex items-center relative flex-1 max-w-md">
              <Input
                placeholder="Search destinations, packages..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 absolute right-3 text-muted-foreground pointer-events-none" />
              <SearchResults />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;