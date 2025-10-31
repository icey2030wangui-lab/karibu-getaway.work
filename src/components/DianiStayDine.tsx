import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { dianiPackages } from "@/data/packages";
import { BookingDialog } from "@/components/BookingDialog";

const DianiStayDine = () => {
  // Filter only hotel packages (IDs 2, 4, 5, 6, 8, 9)
  const hotelPackages = dianiPackages.filter(pkg => [2, 4, 5, 6, 8, 9].includes(pkg.id));

  const PackageDetailModal = ({
    pkg
  }: {
    pkg: typeof dianiPackages[0];
  }) => <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
          {pkg.title}
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => 
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
              )}
            </div>
            <span className="text-sm font-bold text-accent">{pkg.rating}</span>
            <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
          </div>
        </DialogTitle>
      </DialogHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">About The Package</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                {pkg.roomType && <div className="bg-primary/10 p-4 rounded-lg mb-4">
                    <h4 className="font-bold mb-3 text-primary">Room Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Room Type</div>
                        <div className="font-semibold">{pkg.roomType}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Room Size</div>
                        <div className="font-semibold">{pkg.roomSize}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Bedding</div>
                        <div className="font-semibold">{pkg.bedding}</div>
                      </div>
                    </div>
                    
                    {pkg.roomAmenities && <div className="mt-4">
                        <div className="text-sm font-semibold mb-2">Room Amenities</div>
                        <div className="grid grid-cols-2 gap-2">
                          {pkg.roomAmenities.map((amenity, idx) => 
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                              <span className="text-sm">{amenity}</span>
                            </div>
                          )}
                        </div>
                      </div>}
                  </div>}
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-accent">Recommended Dining</h4>
                  <ul className="space-y-1">
                    {pkg.diningOptions?.map((option, idx) => 
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{option}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Package Pricing</h3>
                <div className="bg-card border rounded-lg p-6">
                   <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      {pkg.originalPrice && <span className="text-lg text-muted-foreground line-through ml-2">
                          {pkg.originalPrice}
                        </span>}
                    </div>
                    {pkg.originalPrice && <Badge className="bg-green-500 text-white">
                      Save ${Math.abs(parseInt(pkg.originalPrice.replace(/[^\d]/g, '')) - parseInt(pkg.price.replace(/[^\d]/g, '')))}
                    </Badge>}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Starting from • Per person sharing
                  </div>
                  <BookingDialog packageName={pkg.title} packagePrice={pkg.price} buttonText="BOOK NOW" buttonVariant="default" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inclusions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-600 mb-3">Inclusions</h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => 
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-red-600 mb-3">Exclusions</h4>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item, idx) => 
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-red-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.images.map((img, idx) => 
                    <div key={idx} className="relative overflow-hidden rounded-lg aspect-video">
                      <img src={img} alt={`${pkg.title} image ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800 text-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">TRIP INFORMATION</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm opacity-75">Location</div>
                  <div className="font-medium">{pkg.location}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm opacity-75">Days Count</div>
                  <div className="font-medium">{pkg.dayCount}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm opacity-75">Included</div>
                  <div className="font-medium">{pkg.freeSightseeing}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2">Starting From</div>
              <div className="text-3xl font-bold text-accent mb-4">{pkg.price}</div>
              <div className="mb-3">
                <BookingDialog packageName={pkg.title} packagePrice={pkg.price} buttonText="BOOK NOW" buttonVariant="default" />
              </div>
              <Button variant="outline" className="w-full">
                VIEW THIS PACKAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>;

  return (
    <section id="diani-stay-dine" className="py-4 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Diani Stay & Dine Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated collection of premium accommodations paired with memorable dining experiences at Kenya's premier beach destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {hotelPackages.map(pkg => 
            <Dialog key={pkg.id}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img src={pkg.images[0]} alt={pkg.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
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
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => 
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Location: {pkg.location}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && <span className="text-sm text-muted-foreground line-through">
                            {pkg.originalPrice}
                          </span>}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                      VIEW DETAILS
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <PackageDetailModal pkg={pkg} />
            </Dialog>
          )}
        </div>
      </div>
    </section>
  );
};

export default DianiStayDine;
