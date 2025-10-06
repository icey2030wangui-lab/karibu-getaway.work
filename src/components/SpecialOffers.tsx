import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { specialOffers } from "@/data/offers";
import { BookingDialog } from "@/components/BookingDialog";

const SpecialOffers = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🎉 Special <span className="text-accent">Offers & Discounts!</span> 🌴
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            ⭐ Award-winning team • 24/7 Support • 100% Financial Protection • Dream, Book & Travel Carefree! ✨
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm font-medium text-primary">
            <span className="flex items-center gap-1">🔥 Hot Deals</span>
            <span>•</span>
            <span className="flex items-center gap-1">⏰ Limited Time</span>
            <span>•</span>
            <span className="flex items-center gap-1">🏆 Best Prices Guaranteed</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <Card 
                key={offer.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 animate-scale-in">
                    <Badge className="bg-accent text-accent-foreground font-bold text-lg px-4 py-2 shadow-xl animate-pulse backdrop-blur-sm border-2 border-white/50">
                      {offer.discount}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground shadow-lg backdrop-blur-sm border border-white/30">
                      {offer.badge}
                    </Badge>
                  </div>

                  {/* Urgency Badge */}
                  {offer.urgency && (
                    <div className="absolute bottom-20 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                      ⚡ {offer.urgency}
                    </div>
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-accent/20 backdrop-blur-sm p-2 rounded-full group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-white border-white/50 bg-white/10">
                        {offer.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">{offer.subtitle}</h3>
                    <p className="text-sm text-white/90 mb-3 line-clamp-2">{offer.description}</p>
                    
                    {/* Rating with Reviews */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 transition-all duration-300 ${
                              i < Math.floor(offer.rating) 
                                ? 'fill-yellow-400 text-yellow-400 scale-110' 
                                : 'text-gray-400'
                            }`}
                          />
                        ))}
                        <span className="text-sm ml-1 font-bold">({offer.rating})</span>
                      </div>
                      <span className="text-xs opacity-75">• {offer.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary animate-pulse">{offer.price}</span>
                        {offer.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through opacity-75">
                            {offer.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">per person</span>
                    </div>
                    <BookingDialog
                      packageName={offer.subtitle}
                      packagePrice={offer.price}
                      buttonText="Book Now"
                      buttonVariant="default"
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 font-semibold hover:scale-110 hover:shadow-xl transition-all duration-300 group/btn"
          >
            <span className="group-hover/btn:mr-2 transition-all">View All Special Offers</span>
            <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">🎯</span>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">💰 Save up to 40% on selected packages • Limited availability!</p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;