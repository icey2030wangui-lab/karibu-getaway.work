import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, Calendar, Info } from "lucide-react";
import { useState } from "react";
import { BookingDialog } from "./BookingDialog";
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

interface Hotel {
  name: string;
  image: string;
  rating: number | null;
  description: string;
  location: string;
  roomTypes?: string[];
  amenities?: string[];
  dining?: string[];
  gallery?: string[];
  priceRange?: string;
}

const MalindiPackages = () => {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  
  const hotels: Hotel[] = [
    {
      name: "Hemingways Watamu",
      image: hemingwaysWatamu,
      rating: 5,
      description: "Luxury beachfront resort with world-class amenities and stunning ocean views. Located on the pristine shores of Watamu, this exclusive resort offers an unforgettable coastal experience.",
      location: "Watamu Beach, 1.7 km from centre",
      priceRange: "From KES 44,574 per night",
      roomTypes: [
        "Double Room with Sea View - 1 extra-large double bed or 1 single bed",
        "Deluxe Double Room - 1 extra-large double bed",
        "Two-Bedroom Apartment - Bedroom 1: 1 extra-large double bed, Bedroom 2: 2 single beds",
        "One Bedroom Ocean View Suite - 1 single bed",
        "Deluxe Apartment - Bedroom 1: 1 single bed, Bedroom 2: 2 single beds",
        "Penthouse Apartment - 4 bedrooms with multiple bed configurations",
        "Twin Room with Sea View - 2 single beds"
      ],
      amenities: [
        "Beachfront location with private beach access",
        "Multiple swimming pools",
        "World-class spa and wellness center",
        "Fitness center",
        "Water sports facilities",
        "Free WiFi throughout",
        "Air conditioning in all rooms",
        "24-hour room service",
        "Sustainability certification"
      ],
      dining: [
        "Fine dining restaurant with ocean views",
        "Beach bar serving cocktails and light meals",
        "Breakfast included with most room types",
        "Private dining experiences available",
        "Fresh seafood and international cuisine"
      ],
      gallery: [
        "/lovable-uploads/hemingways-pool.webp",
        "/lovable-uploads/hemingways-ocean-view.webp",
        "/lovable-uploads/hemingways-suite.webp",
        "/lovable-uploads/hemingways-ground-room.webp",
        "/lovable-uploads/hemingways-twin-room.webp",
        "/lovable-uploads/hemingways-bathroom.webp",
        "/lovable-uploads/hemingways-dining.jpg",
        "/lovable-uploads/hemingways-terrace.jpg"
      ]
    },
    {
      name: "Sandies Tropical Village",
      image: sandiesTropical,
      rating: 4,
      description: "Charming tropical retreat with authentic Swahili architecture, lush gardens, and warm coastal hospitality. This intimate resort features traditional thatched roofs and elegant interiors with four-poster beds.",
      location: "Malindi Beach, 2.5 km from centre",
      priceRange: "From KES 12,000 per night",
      roomTypes: [
        "Deluxe Double or Twin Room - 1 extra-large double bed or 2 single beds",
        "Junior Suite - 1 extra-large double bed with separate living area",
        "Family Room - Multiple bed configurations available"
      ],
      amenities: [
        "Beachfront location with private beach access",
        "Swimming pool with sun terrace",
        "Traditional Swahili architecture",
        "Restaurant with local and international cuisine",
        "Bar and lounge area",
        "Free WiFi",
        "Air conditioning in all rooms",
        "Garden views",
        "Daily housekeeping"
      ],
      dining: [
        "Main restaurant with buffet and à la carte options",
        "Beach bar serving cocktails and snacks",
        "Traditional Swahili cuisine nights",
        "Fresh seafood specialties",
        "Breakfast, lunch, and dinner included"
      ],
      gallery: [
        "/lovable-uploads/sandies-tropical-1.webp",
        "/lovable-uploads/sandies-tropical-2.webp",
        "/lovable-uploads/sandies-tropical-3.jpg",
        "/lovable-uploads/sandies-tropical-4.jpg",
        "/lovable-uploads/sandies-tropical-5.webp",
        "/lovable-uploads/sandies-tropical-6.webp"
      ]
    },
    {
      name: "Sandies Malindi Dream Garden",
      image: sandiesMalindi,
      rating: 4,
      description: "Serene garden oasis featuring pristine swimming pools, elegant traditional architecture, and modern coastal comfort. This tranquil retreat offers spacious suites with garden views and a peaceful atmosphere.",
      location: "Malindi, 1.5 km from centre",
      priceRange: "From KES 10,000 per night",
      roomTypes: [
        "Suite - 2 sofa beds",
        "Deluxe Room - Room size: 20 m²/215 ft², 1 queen bed",
        "Suite Single Room",
        "Suite Double Bed",
        "Suite King Bed Sofa Bed",
        "Deluxe Double Room Double Bed"
      ],
      amenities: [
        "Beachfront location with private beach access",
        "Large swimming pool with sun loungers",
        "Tropical garden setting",
        "Fitness center and gym",
        "Full-service spa and massage",
        "Spa/sauna facilities",
        "Free WiFi in all rooms and public areas",
        "Air conditioning in all rooms",
        "Daily housekeeping",
        "24-hour front desk",
        "Elevator access",
        "Gift/souvenir shop",
        "Smoking area",
        "Airport transfer available",
        "On-site car park"
      ],
      dining: [
        "Main restaurant with buffet and à la carte options",
        "Open-air dining pavilion with traditional Swahili architecture",
        "Bar serving cocktails and refreshments",
        "International and local cuisine",
        "Fresh seafood specialties",
        "All-inclusive packages available"
      ],
      gallery: [
        "/lovable-uploads/sandies-malindi-1.jpg",
        "/lovable-uploads/sandies-malindi-2.webp",
        "/lovable-uploads/sandies-malindi-3.webp",
        "/lovable-uploads/sandies-malindi-4.webp",
        "/lovable-uploads/sandies-malindi-5.jpg"
      ]
    },
    {
      name: "Diamonds Dreams of Africa",
      image: diamondsDreams,
      rating: 4,
      description: "All-inclusive resort featuring unique architecture and extensive pool complex with luxurious suites and exceptional amenities",
      location: "Malindi Beach",
      priceRange: "Contact for rates",
      roomTypes: [
        "Diamonds Suite with Private Pool - Separate living room, rooms with hydromassage jacuzzi baths and private terrace with comfortable Balinese sun loungers",
        "Masai Superior Room - Built on two levels in a semicircular building with private balconies on the first floor and covered terraces for rooms on the ground floor, perfect fusion of English and Lamu design",
        "Pool Garden Deluxe Room - Built on two levels in a semicircular building with private balconies on the first floor and covered terraces for ground floor rooms, indo-arabic style",
        "Masai Deluxe Family Room - Built on the first floor in a semicircular building with private balconies, exclusive suites offering room-service breakfast"
      ],
      amenities: [
        "Beachfront location with private beach access",
        "Multiple swimming pools including infinity pool",
        "Unique architectural design",
        "Full-service spa and wellness center",
        "Fitness center",
        "Water sports facilities",
        "Free WiFi throughout",
        "Air conditioning in all rooms",
        "24-hour room service",
        "All-inclusive packages available"
      ],
      dining: [
        "Multiple restaurants with international cuisine",
        "Beach bar and pool bar",
        "All-inclusive meal plans",
        "Fresh seafood specialties",
        "Themed dinner nights"
      ],
      gallery: [
        "/lovable-uploads/sandies-malindi-6.jpg",
        "/lovable-uploads/sandies-malindi-7.jpg",
        "/lovable-uploads/sandies-malindi-8.jpg",
        "/lovable-uploads/sandies-malindi-9.jpg",
        "/lovable-uploads/sandies-malindi-10.webp",
        "/lovable-uploads/sandies-malindi-11.jpg"
      ]
    },
    {
      name: "Leopard Point Boutique Resort",
      image: leopardPoint,
      rating: 4,
      description: "The 5-star Kasa Malindi (Formerly Leopard Point Beach Resort) features 8 luxury rooms with views of the Indian Ocean. Located within a 6-km distance of Vasco da Gama Pillar, this exclusive boutique property offers an outdoor swimming pool and personalized service in a stunning coastal setting.",
      location: "Watamu, near Malindi Marine National Park (2.1 km)",
      priceRange: "Contact for rates",
      roomTypes: [
        "Deluxe Room - 269 sq ft, Sleeps 2, Soundproofed with flat-screen TV, premium bedding, separate bedroom, bidet, hair dryer, bathrobes, electric kettle",
        "Superior Room - 301 sq ft, 1 bedroom, Sleeps 2, Soundproofed with flat-screen TV, separate bedroom, premium bedding, bidet, hair dryer, bathrobes, electric kettle",
        "Suite Garden View - 269 sq ft, 1 bedroom, Sleeps 2, Soundproofed with flat-screen TV, separate bedroom, premium bedding, bidet, hair dryer, bathrobes, electric kettle",
        "Villa, 3 Bedrooms - 1076 sq ft, 3 bedrooms, Soundproofed with private pool, flat-screen TV, separate bedroom, premium bedding, hair dryer, bidet, bathrobes",
        "Villa, 4 Bedrooms - 1292 sq ft, 4 bedrooms, Sleeps 8, Soundproofed with private pool, flat-screen TV, separate bedroom, premium bedding, hair dryer, bidet, bathrobes",
        "Deluxe Villa - 3767 sq ft, Sleeps 8, Separate sitting area, soundproofed, air conditioning, flat-screen TV, premium bedding, separate bedroom, hair dryer, bidet",
        "Premium Villa - 3767 sq ft, Sleeps 6, 1 King Bed, Separate sitting area, soundproofed, air conditioning, flat-screen TV, premium bedding, separate bedroom, hair dryer, bidet",
        "Deluxe Suite - 484 sq ft, Sleeps 2, 1 King Bed, Soundproofed, air conditioning, flat-screen TV, premium bedding, separate bedroom, hair dryer, bidet, bathrobes",
        "Premium Suite - 484 sq ft, Sleeps 2, 2 Twin Beds, Separate sitting area, soundproofed, air conditioning, flat-screen TV, premium bedding, separate bedroom, hair dryer, bidet"
      ],
      amenities: [
        "Beachfront location with private beach access",
        "Outdoor swimming pool with ocean views",
        "Infinity pools",
        "Private pools in select villas",
        "Boutique personalized service with only 8 rooms",
        "Soundproofed rooms",
        "Premium bedding and linens",
        "Air conditioning in all rooms",
        "Flat-screen TV with mini-bar",
        "Free WiFi",
        "Spa services available",
        "Hair dryers, bathrobes, and dressing gowns",
        "Electric kettles, refrigerators, and glassware",
        "Balconies and dressing rooms in select rooms",
        "Roll-in shower and hot tub in bathrooms",
        "Pool views from rooms"
      ],
      dining: [
        "On-site restaurant with made-to-order breakfast",
        "Lounge bar",
        "Personalized dining experiences",
        "Fresh seafood specialties",
        "International and local cuisine"
      ],
      gallery: [
        "/lovable-uploads/leopard-point-1.jpg",
        "/lovable-uploads/leopard-point-2.webp",
        "/lovable-uploads/leopard-point-3.jpg",
        "/lovable-uploads/leopard-point-4.jpg",
        "/lovable-uploads/leopard-point-5.jpg",
        "/lovable-uploads/leopard-point-6.jpg",
        "/lovable-uploads/leopard-point-7.webp",
        "/lovable-uploads/leopard-point-8.jpeg"
      ]
    },
    {
      name: "Turtle Bay Watamu",
      image: turtleBay,
      rating: 4,
      description: "Beachfront paradise with traditional thatched cottages and romantic ambiance",
      location: "Watamu Beach",
      priceRange: "Contact for rates"
    },
    {
      name: "Medina Palms",
      image: medinaPalms,
      rating: 5,
      description: "Mediterranean-inspired luxury villas with private pools and gourmet dining",
      location: "Watamu",
      priceRange: "Contact for rates"
    },
    {
      name: "Ocean Beach Resort & Spa",
      image: oceanBeachResort,
      rating: null,
      description: "Tranquil spa retreat blending natural beauty with contemporary comfort",
      location: "Malindi",
      priceRange: "Contact for rates"
    },
    {
      name: "Cardamom House",
      image: cardamomHouse,
      rating: null,
      description: "Boutique coastal hideaway with Moroccan-inspired design and intimate atmosphere",
      location: "Watamu",
      priceRange: "Contact for rates"
    },
    {
      name: "Silver Palm Spa and Resort",
      image: silverPalmResort,
      rating: 4,
      description: "Romantic beachfront resort with spectacular sunsets and rejuvenating spa",
      location: "Watamu",
      priceRange: "Contact for rates"
    }
  ];

  const HotelDetailModal = ({ hotel, onClose }: { hotel: Hotel; onClose: () => void }) => (
    <Dialog open={!!hotel} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{hotel.name}</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="amenities">Amenities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-lg" />
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{hotel.location}</span>
              </div>
              {hotel.rating && (
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < hotel.rating!
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <p className="text-muted-foreground">{hotel.description}</p>
            
            {hotel.priceRange && (
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="font-semibold text-lg">{hotel.priceRange}</p>
              </div>
            )}
            
            {hotel.dining && hotel.dining.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Dining Options</h3>
                <ul className="space-y-1">
                  {hotel.dining.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="pt-4">
              <BookingDialog 
                packageName={hotel.name}
                packagePrice={hotel.priceRange || "Contact for rates"}
                buttonText="Book Now"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="rooms" className="space-y-4">
            {hotel.roomTypes && hotel.roomTypes.length > 0 ? (
              <div>
                <h3 className="font-semibold mb-3">Available Room Types</h3>
                <ul className="space-y-2">
                  {hotel.roomTypes.map((room, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground p-3 bg-muted rounded-lg">
                      {room}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-muted-foreground">Contact us for room type availability and details.</p>
            )}
          </TabsContent>
          
          <TabsContent value="amenities" className="space-y-4">
            {hotel.amenities && hotel.amenities.length > 0 ? (
              <div>
                <h3 className="font-semibold mb-3">Hotel Amenities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {hotel.amenities.map((amenity, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-muted-foreground">Contact us for full amenity details.</p>
            )}
          </TabsContent>
          
          <TabsContent value="gallery" className="space-y-4">
            {hotel.gallery && hotel.gallery.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {hotel.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${hotel.name} - ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            ) : (
              <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-lg" />
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="malindi-packages" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">Hand-Picked</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Malindi & Watamu Stay & Dine Selection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional coastal accommodations and dining experiences in Kenya's historic coastal paradise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {hotels.map((hotel, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedHotel(hotel)}
            >
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground text-center uppercase">
                  {hotel.name}
                </h3>
                
                {hotel.rating && (
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < hotel.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground mb-4 text-center line-clamp-3">
                  {hotel.description}
                </p>
                
                <div className="flex justify-center">
                  <Button className="rounded-full px-6">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedHotel && (
        <HotelDetailModal 
          hotel={selectedHotel} 
          onClose={() => setSelectedHotel(null)} 
        />
      )}
    </section>
  );
};

export default MalindiPackages;
