import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import SearchResults from "@/components/SearchResults";
import karibuLogo from "@/assets/karibu-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const navLinks = [
    "Home",
    "Destinations", 
    "Safari Packages",
    "Themed Holidays",
    "Corporates",
    "Local Packages",
    "Blog",
    "Contact Us"
  ];

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+254719542780</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-4 h-4" />
              <Twitter className="w-4 h-4" />
              <Instagram className="w-4 h-4" />
            </div>
          </div>
          <div className="hidden md:flex">
            <span>Kenya's Leading Tour & Travel Company</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-4 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={karibuLogo} 
                alt="Karibu Gateways - Kenya's Premier Travel & Safari Company"
                className="h-12 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center relative">
              <Input
                placeholder="Search destinations, packages..."
                className="w-80 pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 absolute right-3 text-muted-foreground pointer-events-none" />
              <SearchResults />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Input 
                placeholder="Search destinations, packages..." 
                className="pr-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <SearchResults />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;