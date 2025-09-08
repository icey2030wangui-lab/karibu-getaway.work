import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import masaiMara from "@/assets/masai-mara.jpg";
import dianiBeach from "@/assets/diani-beach.jpg";
import amboseli from "@/assets/amboseli.jpg";
import malindi from "@/assets/malindi.jpg";
import mombasa from "@/assets/mombasa.jpg";
import samburu from "@/assets/samburu.jpg";

const destinations = [
  {
    name: "Maasai Mara",
    image: masaiMara,
    packages: 24,
    description: "Witness the Great Migration and Big Five wildlife",
    price: "From KSh 35,000",
    badge: "Popular"
  },
  {
    name: "Diani Beach",
    image: dianiBeach,
    packages: 18,
    description: "Pristine white sand beaches and turquoise waters",
    price: "From KSh 15,000",
    badge: "Beach"
  },
  {
    name: "Amboseli National Park",
    image: amboseli,
    packages: 16,
    description: "Elephant herds with Mt. Kilimanjaro backdrop",
    price: "From KSh 28,000",
    badge: "Safari"
  },
  {
    name: "Malindi & Watamu",
    image: malindi,
    packages: 21,
    description: "Historic coastal town with marine parks",
    price: "From KSh 18,000",
    badge: "Coastal"
  },
  {
    name: "Mombasa",
    image: mombasa,
    packages: 32,
    description: "Cultural heritage and beautiful beaches",
    price: "From KSh 12,000",
    badge: "City Break"
  },
  {
    name: "Samburu Reserve",
    image: samburu,
    packages: 14,
    description: "Unique wildlife and Samburu culture",
    price: "From KSh 32,000",
    badge: "Adventure"
  }
];

const PopularDestinations = () => {
  const scrollToDianiPackages = () => {
    const dianiSection = document.getElementById('diani-packages');
    if (dianiSection) {
      dianiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Kenya's most breathtaking landscapes, from pristine beaches to magnificent wildlife safaris and rich cultural experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {destination.badge}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-foreground">
                    {destination.packages} packages
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {destination.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary">
                      {destination.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-1">
                      per person
                    </span>
                  </div>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={destination.name === "Diani Beach" ? scrollToDianiPackages : undefined}
                  >
                    View Packages
                  </Button>
                </div>
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
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;