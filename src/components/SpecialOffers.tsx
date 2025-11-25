import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Check, Eye } from "lucide-react";
import { specialOffers } from "@/data/offers";
import { BookingDialog } from "@/components/BookingDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const SpecialOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState<any>(null);

  return <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
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
          return <Card key={offer.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] bg-card animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative overflow-hidden">
                  <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700" />
                  
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
                  {offer.urgency && <div className="absolute top-16 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⚡ {offer.urgency}
                    </div>}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-accent/20 backdrop-blur-sm p-2 rounded-full group-hover:scale-110 transition-transform">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <Badge variant="outline" className="text-white border-white/50 bg-white/10 text-xs">
                        {offer.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-1">{offer.subtitle}</h3>
                    <p className="text-xs text-white/90 mb-2 line-clamp-2">{offer.description}</p>
                    
                    {/* Rating with Reviews */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {Array.from({
                      length: 5
                    }).map((_, i) => <Star key={i} className={`w-3 h-3 transition-all duration-300 ${i < Math.floor(offer.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />)}
                        <span className="text-xs ml-1 font-bold">({offer.rating})</span>
                      </div>
                      <span className="text-xs opacity-75">• {offer.reviews} reviews</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-center">
                    {offer.inclusions ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" onClick={() => setSelectedOffer(offer)}>
                            <Eye className="w-4 h-4 mr-2 text-sunset-orange" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold">{offer.subtitle}</DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            {/* Header Image */}
                            <div className="relative h-64 rounded-lg overflow-hidden">
                              <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-accent text-accent-foreground font-bold text-lg px-4 py-2">
                                  {offer.discount}
                                </Badge>
                              </div>
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div className="space-y-1">
                                <Calendar className="w-5 h-5 mx-auto text-primary" />
                                <p className="text-sm font-semibold">{offer.duration}</p>
                              </div>
                              <div className="space-y-1">
                                <MapPin className="w-5 h-5 mx-auto text-primary" />
                                <p className="text-sm font-semibold">{offer.location}</p>
                              </div>
                              <div className="space-y-1">
                                <Star className="w-5 h-5 mx-auto text-yellow-400 fill-yellow-400" />
                                <p className="text-sm font-semibold">{offer.rating} ({offer.reviews} reviews)</p>
                              </div>
                            </div>

                            {/* Tabs */}
                            <Tabs defaultValue="overview" className="w-full">
                              <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="inclusions">What's Included</TabsTrigger>
                                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                              </TabsList>

                              <TabsContent value="overview" className="space-y-4">
                                <div>
                                  <h3 className="font-semibold text-lg mb-2">About This Package</h3>
                                  <p className="text-muted-foreground">{offer.detailedDescription}</p>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-lg mb-3">Package Highlights</h3>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {offer.highlights.map((highlight: string, idx: number) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm">{highlight}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="inclusions" className="space-y-3">
                                <h3 className="font-semibold text-lg mb-3">What's Included in Your Package</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {offer.inclusions.map((inclusion: string, idx: number) => (
                                    <div key={idx} className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                      <span className="text-sm">{inclusion}</span>
                                    </div>
                                  ))}
                                </div>
                              </TabsContent>

                              <TabsContent value="itinerary" className="space-y-4">
                                <h3 className="font-semibold text-lg mb-3">3-Day Activity Program</h3>
                                {offer.itinerary.map((day: any, idx: number) => (
                                  <div key={idx} className="border rounded-lg p-4 space-y-2">
                                    <div className="flex items-center gap-2">
                                      <Badge variant="outline">{day.day}</Badge>
                                      <h4 className="font-semibold">{day.title}</h4>
                                    </div>
                                    <ul className="space-y-2 ml-4">
                                      {day.activities.map((activity: string, actIdx: number) => (
                                        <li key={actIdx} className="flex items-start gap-2 text-sm">
                                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                          <span>{activity}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </TabsContent>
                            </Tabs>

                            {/* Pricing & Booking */}
                            <div className="border-t pt-6 flex items-center justify-between">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-3xl font-bold text-primary">{offer.price}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">per person • {offer.duration}</span>
                              </div>
                              <BookingDialog
                                packageName={offer.subtitle} 
                                packagePrice={offer.price} 
                                buttonText="Book Now" 
                                buttonVariant="default" 
                              />
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <BookingDialog packageName={offer.subtitle} packagePrice={offer.price} buttonText="Book Now" buttonVariant="default" />
                    )}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center mt-12">
          
          <p className="text-sm text-muted-foreground mt-4">💰 Save up to 40% on selected packages • Limited availability!</p>
        </div>
      </div>
    </section>;
};
export default SpecialOffers;