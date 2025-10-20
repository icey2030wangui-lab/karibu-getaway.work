import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import hemingwaysWatamu from "@/assets/hemingways-watamu.jpg";
import sandiesTropical from "@/assets/sandies-tropical.jpg";
import sandiesMalindi from "@/assets/sandies-malindi.jpg";
import diamondsDreams from "@/assets/diamonds-dreams.jpg";
import leopardPoint from "@/assets/leopard-point.jpg";
import turtleBay from "@/assets/turtle-bay.jpg";
import medinaPalms from "@/assets/medina-palms.jpg";
import oceanBeachResort from "@/assets/ocean-beach-resort.jpg";
import cardamomHouse from "@/assets/cardamom-house.jpg";
import silverPalmResort from "@/assets/silver-palm-resort.jpg";
const MalindiPackages = () => {
  const hotels = [{
    name: "Hemingways Watamu",
    image: hemingwaysWatamu,
    rating: 5,
    description: "Luxury beachfront resort with world-class amenities and stunning ocean views"
  }, {
    name: "Sandies Tropical Village",
    image: sandiesTropical,
    rating: 3,
    description: "Charming tropical retreat with lush gardens and authentic coastal hospitality"
  }, {
    name: "Sandies Malindi Dream Garden",
    image: sandiesMalindi,
    rating: null,
    description: "Serene garden oasis with pristine pools and modern coastal elegance"
  }, {
    name: "Diamonds Dreams of Africa",
    image: diamondsDreams,
    rating: 4,
    description: "All-inclusive resort featuring unique architecture and extensive pool complex"
  }, {
    name: "Leopard Point Boutique Resort",
    image: leopardPoint,
    rating: 4,
    description: "Exclusive boutique property with infinity pools and personalized service"
  }, {
    name: "Turtle Bay Watamu",
    image: turtleBay,
    rating: 4,
    description: "Beachfront paradise with traditional thatched cottages and romantic ambiance"
  }, {
    name: "Medina Palms",
    image: medinaPalms,
    rating: 5,
    description: "Mediterranean-inspired luxury villas with private pools and gourmet dining"
  }, {
    name: "Ocean Beach Resort & Spa",
    image: oceanBeachResort,
    rating: null,
    description: "Tranquil spa retreat blending natural beauty with contemporary comfort"
  }, {
    name: "Cardamom House",
    image: cardamomHouse,
    rating: null,
    description: "Boutique coastal hideaway with Moroccan-inspired design and intimate atmosphere"
  }, {
    name: "Silver Palm Spa and Resort",
    image: silverPalmResort,
    rating: 4,
    description: "Romantic beachfront resort with spectacular sunsets and rejuvenating spa"
  }];
  return <section id="malindi-packages" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Malindi & Watamu Stay & Dine Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional coastal accommodations and dining experiences in Kenya's historic coastal paradise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {hotels.map((hotel, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground text-center uppercase">
                  {hotel.name}
                </h3>
                
                {hotel.rating && <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < hotel.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`} />)}
                  </div>}
                
                <p className="text-sm text-muted-foreground mb-4 text-center line-clamp-3">
                  {hotel.description}
                </p>
                
                <div className="flex justify-center">
                  <Button className="rounded-full px-6">
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default MalindiPackages;