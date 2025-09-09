import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Star, MapPin, Calendar, Users, CheckCircle2, Building, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { mombasaPackages } from "@/data/packages";

const MombasaPackages = () => {
  const [bookingDetails, setBookingDetails] = useState({
    adults: 2,
    children: 0,
    checkIn: '',
    checkOut: ''
  });

  const EnhancedBookingModal = ({ pkg }: { pkg: typeof mombasaPackages[0] }) => (
    <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center justify-between">
          <div>
            {pkg.title}
            <div className="text-sm text-muted-foreground font-normal mt-1">
              {pkg.accommodation} • {pkg.location}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(pkg.rating) 
                      ? 'fill-yellow-400 text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-accent">{pkg.rating}</span>
            <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
          </div>
        </DialogTitle>
      </DialogHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="mb-6">
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <div className="flex transition-transform duration-300 ease-in-out" 
                   style={{ transform: `translateX(-${(pkg.images.findIndex((_, i) => i === 0) || 0) * 100}%)` }}>
                {pkg.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${pkg.accommodation} - View ${index + 1}`}
                    className="w-full h-64 object-cover flex-shrink-0"
                  />
                ))}
              </div>
              {pkg.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {pkg.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === 0 ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {pkg.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${pkg.accommodation} thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="special-notes">Special Notes</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="rates">Available Rates</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">About The Package</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                <div className="bg-accent/10 p-4 rounded-lg mb-6">
                  <h4 className="font-bold mb-2 text-accent flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    Package Highlights
                  </h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Inclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-red-500" />
                      Exclusions
                    </h4>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-red-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="itinerary" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Detailed Day Wise Itinerary</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Day 1: Arrival in Mombasa</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Departure from Nairobi via SGR</li>
                      <li>• Arrival at Mombasa SGR Station</li>
                      <li>• Transfer to {pkg.accommodation}</li>
                      <li>• Check-in and leisure time</li>
                      <li>• Welcome dinner at the hotel</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Day 2: Beach & Cultural Exploration</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Breakfast at the hotel</li>
                      <li>• Beach activities and relaxation</li>
                      <li>• Visit to Fort Jesus (Optional)</li>
                      <li>• Old Town Mombasa tour</li>
                      <li>• Evening at leisure</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Day 3-4: Beach Activities & Relaxation</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Daily breakfast at the hotel</li>
                      <li>• Water sports activities</li>
                      <li>• Spa and wellness treatments</li>
                      <li>• Beach games and entertainment</li>
                      <li>• Cultural shows and performances</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold text-primary mb-2">Day 5: Departure</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Final breakfast at the hotel</li>
                      <li>• Check-out and departure</li>
                      <li>• Transfer to SGR Station</li>
                      <li>• Return journey to Nairobi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Package Pricing Details</h3>
                <div className="bg-card border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through ml-2">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <Badge className="bg-green-500 text-white">
                      {pkg.originalPrice && `Save Ksh${parseInt(pkg.originalPrice.replace(/[^\d]/g, '')) - parseInt(pkg.price.replace(/[^\d]/g, ''))}`}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Per person sharing • {pkg.accommodation}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base Package Price:</span>
                      <span>{pkg.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single Room Supplement:</span>
                      <span>+Ksh15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Child (3-11 years):</span>
                      <span>50% discount</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Infant (0-2 years):</span>
                      <span>Free</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="special-notes" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Special Notes & Terms</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Important Information</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Valid passport required for all guests</li>
                      <li>• Check-in time: 2:00 PM | Check-out time: 11:00 AM</li>
                      <li>• Breakfast timing: 6:30 AM - 10:00 AM</li>
                      <li>• Pool operating hours: 6:00 AM - 10:00 PM</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-2">Booking Terms</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 50% deposit required upon booking</li>
                      <li>• Full payment due 14 days before travel</li>
                      <li>• Cancellation charges apply as per policy</li>
                      <li>• Travel insurance highly recommended</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Guest Reviews</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="font-bold">Sarah M.</span>
                      <span className="text-sm text-muted-foreground">• 2 weeks ago</span>
                    </div>
                    <p className="text-sm">"Amazing experience at {pkg.accommodation}! The staff was incredibly friendly and the beach access was perfect for our family vacation."</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                      <span className="font-bold">John K.</span>
                      <span className="text-sm text-muted-foreground">• 1 month ago</span>
                    </div>
                    <p className="text-sm">"Great value for money. The SGR transfer was smooth and the hotel facilities exceeded our expectations. Will definitely book again!"</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="rates" className="space-y-6">
              <div>
                <div className="bg-slate-800 text-white p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-bold">Available Rates</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-bold mb-2">{pkg.accommodation}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{pkg.price}</div>
                    <Button className="w-full bg-accent hover:bg-accent/90">BOOK</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-800 text-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">BOOKING INFORMATION</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm opacity-75">Hotel</div>
                  <div className="font-medium">{pkg.accommodation}</div>
                </div>
              </div>
              
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
                  <div className="text-sm opacity-75">Duration</div>
                  <div className="font-medium">{pkg.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm opacity-75">Contact</div>
                  <div className="font-medium">+254719542780</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
            <div className="text-center">
              <Badge className="mb-3 bg-green-500 text-white">
                {pkg.originalPrice && `Save Ksh${parseInt(pkg.originalPrice.replace(/[^\d]/g, '')) - parseInt(pkg.price.replace(/[^\d]/g, ''))}`}
              </Badge>
              <div className="text-sm text-muted-foreground mb-2">Starting From</div>
              <div className="text-3xl font-bold text-accent mb-2">{pkg.price}</div>
              <div className="text-xs text-muted-foreground mb-4">per person sharing</div>
              
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mb-3">
                <Phone className="w-4 h-4 mr-2" />
                BOOK NOW
              </Button>
              <Button variant="outline" className="w-full mb-3">
                <Mail className="w-4 h-4 mr-2" />
                REQUEST QUOTE
              </Button>
              <Button variant="ghost" className="w-full text-xs">
                <Clock className="w-3 h-3 mr-1" />
                Check Availability
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Need Help?</h4>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
              Our travel experts are here to help you plan the perfect Mombasa getaway.
            </p>
            <Button size="sm" className="w-full">
              Chat with Expert
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <section id="mombasa-packages" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mombasa Beach Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Kenya's coastal gem with our comprehensive Mombasa packages featuring premium beachfront accommodations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mombasaPackages.map((pkg) => (
            <Dialog key={pkg.id}>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={pkg.images[0]}
                      alt={pkg.accommodation}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-accent text-accent-foreground text-xs">
                        {pkg.badge}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="text-sm font-bold mb-1 line-clamp-2">
                        {pkg.accommodation}
                      </h3>
                      <p className="text-xs opacity-90">{pkg.location}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(pkg.rating) 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm py-2"
                    >
                      BOOK
                    </Button>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <EnhancedBookingModal pkg={pkg} />
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
          >
            View More Mombasa Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MombasaPackages;