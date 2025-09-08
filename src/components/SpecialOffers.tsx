import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Gift, Heart, Calendar, Users, GraduationCap } from "lucide-react";
import dianiBeach from "@/assets/diani-beach.jpg";
import masaiMara from "@/assets/masai-mara.jpg";
import mombasa from "@/assets/mombasa.jpg";
import samburu from "@/assets/samburu.jpg";

const specialOffers = [
  {
    id: 1,
    title: "Christmas Holiday Special",
    subtitle: "Magical Coastal Christmas",
    category: "Christmas Deals",
    image: dianiBeach,
    rating: 4.8,
    discount: "30% OFF",
    price: "From KSh 25,000",
    originalPrice: "KSh 35,000",
    description: "Celebrate Christmas by the beach with special holiday activities",
    icon: Gift,
    badge: "Limited Time"
  },
  {
    id: 2,
    title: "Romantic Holiday",
    subtitle: "Luxury Island Honeymoon",
    category: "Romantic Holiday",
    image: mombasa,
    rating: 4.9,
    discount: "25% OFF",
    price: "From KSh 45,000",
    originalPrice: "KSh 60,000",
    description: "Perfect romantic getaway for couples seeking luxury and privacy",
    icon: Heart,
    badge: "Most Popular"
  },
  {
    id: 3,
    title: "Birthday Package",
    subtitle: "Safari For Your Birthday",
    category: "Birthday Package",
    image: masaiMara,
    rating: 4.7,
    discount: "20% OFF",
    price: "From KSh 32,000",
    originalPrice: "KSh 40,000",
    description: "Make your birthday unforgettable with an exclusive safari adventure",
    icon: Calendar,
    badge: "Birthday Special"
  },
  {
    id: 4,
    title: "School Holiday Deals",
    subtitle: "Educational Safari Tours",
    category: "School Holiday Deals",
    image: samburu,
    rating: 4.6,
    discount: "35% OFF",
    price: "From KSh 18,000",
    originalPrice: "KSh 28,000",
    description: "Educational and fun safari experiences for students and families",
    icon: GraduationCap,
    badge: "Family Friendly"
  },
  {
    id: 5,
    title: "Corporate & Conference",
    subtitle: "Team Building Adventures",
    category: "Corporate And Conference",
    image: dianiBeach,
    rating: 4.5,
    discount: "15% OFF",
    price: "From KSh 22,000",
    originalPrice: "KSh 26,000",
    description: "Professional team building experiences in stunning locations",
    icon: Users,
    badge: "Corporate"
  },
  {
    id: 6,
    title: "New Year Special",
    subtitle: "Welcome 2025 in Paradise",
    category: "Christmas Deals",
    image: mombasa,
    rating: 4.8,
    discount: "40% OFF",
    price: "From KSh 35,000",
    originalPrice: "KSh 58,000",
    description: "Ring in the New Year with spectacular coastal celebrations",
    icon: Gift,
    badge: "New Year"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Special <span className="text-accent">Offers & Discount!</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Karibu Gateways is an award-winning team that offers round the clock support during your trip and 100% financial 
            protection so you know you are in safe hands. With us you can dream, book and travel carefree.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer) => {
            const IconComponent = offer.icon;
            return (
              <Card key={offer.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground font-bold text-sm px-3 py-1">
                      {offer.discount}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {offer.badge}
                    </Badge>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-accent/20 backdrop-blur-sm p-2 rounded-full">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-white border-white/50 bg-white/10">
                        {offer.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{offer.subtitle}</h3>
                    <p className="text-sm text-white/90 mb-3 line-clamp-2">{offer.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium">Rating:</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(offer.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1">({offer.rating})</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{offer.price}</span>
                        {offer.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {offer.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                      size="sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold"
          >
            View All Special Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;