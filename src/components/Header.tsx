import karibuLogo from "@/assets/karibu-logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { 
      label: "Destinations", 
      id: "destinations-section",
      onClick: () => {
        document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    },
    { 
      label: "Stay and Dine Selection", 
      id: "diani-stay-dine",
      onClick: () => {
        document.getElementById('diani-stay-dine')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    },
    { 
      label: "About", 
      id: "footer",
      onClick: () => {
        document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={karibuLogo} 
              alt="Karibu Getaways Logo" 
              className="h-16 md:h-20 w-auto"
              loading="eager"
              decoding="sync"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-base md:text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className="text-white hover:text-accent transition-colors duration-300 font-normal"
                onClick={(e) => {
                  e.preventDefault();
                  link.onClick();
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu */}
          {isMobile && (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button 
                  className="text-white p-2 hover:text-accent transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="bg-primary/95 backdrop-blur-sm border-accent/20">
                <DrawerHeader className="flex justify-between items-center border-b border-accent/20 pb-4">
                  <DrawerTitle className="text-white text-xl">Menu</DrawerTitle>
                  <DrawerClose asChild>
                    <button 
                      className="text-white hover:text-accent transition-colors p-2"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </DrawerClose>
                </DrawerHeader>
                <nav className="flex flex-col p-6 gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={link.onClick}
                      className="text-white hover:text-accent transition-colors duration-300 text-lg font-normal text-left py-3 border-b border-accent/10"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;