import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import dianiBeach from "@/assets/diani-beach.jpg";

const dianiPackages = [
  {
    title: "Diani 5 Days 4 Nights Babymoon & Gender Reveal",
    location: "Diani/Ukunda",
    price: "Ksh39,700",
    originalPrice: "Ksh45,100",
    duration: "5 Days 4 Nights",
    badge: "Babymoon Special"
  },
  {
    title: "Diani 3 Days 2 Nights Babymoon & Gender Reveal",
    location: "Diani/Ukunda", 
    price: "Ksh23,600",
    originalPrice: null,
    duration: "3 Days 2 Nights",
    badge: "Quick Getaway"
  },
  {
    title: "5 Days Diani Packages",
    location: "Diani/Ukunda",
    price: "Ksh44,600",
    originalPrice: "Ksh45,100",
    duration: "5 Days",
    badge: "Popular"
  },
  {
    title: "3 Days Diani Package",
    location: "Diani/Ukunda",
    price: "Ksh17,600",
    originalPrice: "Ksh26,300",
    duration: "3 Days",
    badge: "Best Deal"
  },
  {
    title: "Diani Beach Honeymoon Package",
    location: "Diani/Ukunda",
    price: "Ksh55,000",
    originalPrice: "Ksh65,000",
    duration: "6 Days 5 Nights",
    badge: "Romantic"
  },
  {
    title: "Diani Family Fun Package",
    location: "Diani/Ukunda",
    price: "Ksh32,500",
    originalPrice: null,
    duration: "4 Days 3 Nights",
    badge: "Family"
  }
];

const DianiPackages = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diani Beach Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover pristine white sand beaches and crystal-clear turquoise waters at Kenya's premier coastal destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dianiPackages.map((pkg, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={dianiBeach}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {pkg.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1 line-clamp-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm opacity-90">{pkg.duration}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    Location: {pkg.location}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {pkg.price}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {pkg.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  PACKAGE DETAILS
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View More Diani Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DianiPackages;