import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { AccommodationDetailsDialog } from "@/components/AccommodationDetailsDialog";
import { MapPin, Users, Utensils, Bed, Check, X, Plane } from "lucide-react";
import safariSamburuImg from "@/assets/safari-samburu.jpg";
import samburuFlyingImg from "@/assets/samburu-flying-safari.jpg";
import samburuLuxuryImg from "@/assets/samburu-luxury-camp.jpg";

const accommodations = [
  {
    name: "Samburu Intrepids Camp",
    category: "Luxury+",
    type: "TENTED CAMP",
    image: "/lovable-uploads/samburu-wildlife.jpg",
    description: "Luxurious tented camp on the banks of the Ewaso Nyiro River offering an intimate safari experience with stunning wildlife viewing and Samburu cultural encounters.",
    rooms: 28,
    location: "Samburu National Reserve",
    features: ["Full Board", "River Views", "Swimming Pool", "Cultural Visits"],
    pricing: "$840 full board per person per night",
    gallery: [
      { url: "/lovable-uploads/samburu-intrepids-giraffe.jpeg", caption: "Game drive with giraffe encounter" },
      { url: "/lovable-uploads/samburu-intrepids-culture.jpg", caption: "Samburu cultural performance" },
      { url: "/lovable-uploads/samburu-intrepids-elephant.webp", caption: "Elephant viewing from camp deck" },
      { url: "/lovable-uploads/samburu-intrepids-pool.jpeg", caption: "Pool area at night" },
      { url: "/lovable-uploads/samburu-intrepids-tent.jpeg", caption: "Luxury tent interior" },
      { url: "/lovable-uploads/samburu-intrepids-interior.webp", caption: "Spacious tented suite" },
      { url: "/lovable-uploads/samburu-intrepids-view.webp", caption: "Tent deck with stunning views" }
    ]
  },
  {
    name: "Sarova Shaba Game Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-lodge.jpg",
    description: "Set amidst indigenous trees overlooking a natural spring and waterhole. This lodge offers panoramic views of the Shaba Reserve and Mt. Kenya in the distance.",
    rooms: 85,
    location: "Shaba National Reserve",
    features: ["Full Board", "Natural Spring Views", "Game Drives", "Conference Facilities"],
    pricing: "$423 full board per person sharing",
    gallery: [
      { url: "/lovable-uploads/sarova-shaba-entrance.webp", caption: "Sarova Shaba Game Lodge entrance sign" },
      { url: "/lovable-uploads/sarova-shaba-river.webp", caption: "Natural spring and waterhole views" },
      { url: "/lovable-uploads/sarova-shaba-exterior.webp", caption: "Lodge exterior with lush gardens" },
      { url: "/lovable-uploads/sarova-shaba-pool.webp", caption: "Main swimming pool area" },
      { url: "/lovable-uploads/sarova-shaba-pool-evening.webp", caption: "Pool at dusk with atmospheric lighting" },
      { url: "/lovable-uploads/sarova-shaba-pool-guests.webp", caption: "Guests enjoying the pool" },
      { url: "/lovable-uploads/sarova-shaba-jacuzzi.webp", caption: "Born Free Suite private jacuzzi" },
      { url: "/lovable-uploads/sarova-shaba-kids-pool.webp", caption: "Children's pool area" },
      { url: "/lovable-uploads/sarova-shaba-pool-panorama.webp", caption: "Panoramic view of pool and grounds" }
    ]
  },
  {
    name: "Elephant Bedroom Camp",
    category: "Mid-range",
    type: "TENTED CAMP",
    image: "/lovable-uploads/samburu-elephant.jpeg",
    description: "An exclusive tented camp along the Ewaso Nyiro River, offering personal service and exceptional wildlife encounters including the unique Samburu Special Five.",
    rooms: 12,
    location: "Samburu National Reserve",
    features: ["Full Board", "Bush Walks", "Eco-friendly", "Riverside Dining"],
    pricing: "$850 per person per night sharing",
    gallery: [
      { url: "/lovable-uploads/elephant-bedroom-welcome.webp", caption: "Elephant Bedroom Camp welcome sign" },
      { url: "/lovable-uploads/elephant-bedroom-deck-evening.webp", caption: "Evening deck with river views" },
      { url: "/lovable-uploads/elephant-bedroom-plunge-pool.webp", caption: "Private deck plunge pool overlooking Ewaso Nyiro" },
      { url: "/lovable-uploads/elephant-bedroom-pool-closeup.jpg", caption: "Relaxing plunge pool" },
      { url: "/lovable-uploads/elephant-bedroom-tent-interior.webp", caption: "Luxury tented bedroom with canopy bed" },
      { url: "/lovable-uploads/elephant-bedroom-lounge.webp", caption: "Main deck lounge area" },
      { url: "/lovable-uploads/elephant-bedroom-elephants.webp", caption: "Elephant herd near the camp" },
      { url: "/lovable-uploads/elephant-bedroom-exterior.webp", caption: "Tented camp exterior" },
      { url: "/lovable-uploads/elephant-bedroom-bathroom.webp", caption: "Spacious bathroom with double vanity" },
      { url: "/lovable-uploads/elephant-bedroom-sunset-deck.webp", caption: "Sunset views from main deck" }
    ]
  },
  {
    name: "Samburu Sopa Lodge",
    category: "Mid-range",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-suite.webp",
    description: "Perched on a hill overlooking Samburu National Reserve, this lodge combines comfort with spectacular views and easy access to wildlife-rich plains.",
    rooms: 60,
    location: "Samburu National Reserve",
    features: ["Full Board", "Swimming Pool", "Cultural Performances", "Bar & Restaurant"],
    pricing: "$395 per person per night sharing",
    gallery: [
      { url: "/lovable-uploads/samburu-sopa-pool.webp", caption: "Stunning infinity pool with savannah views" },
      { url: "/lovable-uploads/samburu-sopa-celebration.webp", caption: "Special celebration setup by the pool" },
      { url: "/lovable-uploads/samburu-sopa-safari-vehicle.webp", caption: "Game drive at golden hour" },
      { url: "/lovable-uploads/samburu-sopa-giraffes.webp", caption: "Reticulated giraffes in Samburu" },
      { url: "/lovable-uploads/samburu-sopa-interior-arch.webp", caption: "Traditional architecture with pool views" },
      { url: "/lovable-uploads/samburu-sopa-dining.webp", caption: "Outdoor dining with scenic overlook" },
      { url: "/lovable-uploads/samburu-sopa-elephants.webp", caption: "Elephant family in the reserve" },
      { url: "/lovable-uploads/samburu-sopa-rooms.webp", caption: "Comfortable twin bedroom accommodation" },
      { url: "/lovable-uploads/samburu-sopa-exterior.webp", caption: "Lodge exterior blending with nature" }
    ]
  },
  {
    name: "Samburu Simba Lodge",
    category: "Budget",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-warriors.webp",
    description: "Affordable lodge offering comfortable accommodation and authentic safari experiences. Perfect for budget-conscious travelers seeking Samburu's unique wildlife.",
    rooms: 48,
    location: "Samburu National Reserve",
    features: ["Full Board", "Game Drives", "Guided Tours", "Cultural Shows"],
    pricing: "$200 per person per night",
    gallery: [
      { url: "/lovable-uploads/samburu-warriors.webp", caption: "Samburu warriors welcome" },
      { url: "/lovable-uploads/samburu-wildlife.jpg", caption: "Wildlife viewing opportunities" },
      { url: "/lovable-uploads/samburu-lodge.jpg", caption: "Lodge facilities" },
      { url: "/lovable-uploads/samburu-intrepids-culture.jpg", caption: "Traditional cultural performances" },
      { url: "/lovable-uploads/samburu-elephant.jpeg", caption: "Elephant encounters" }
    ]
  }
];

const safariPackages = [
  {
    name: "3 Days Samburu Safari ~ Mid-Range",
    image: safariSamburuImg,
    duration: "3 Days / 2 Nights",
    priceFrom: "$1,150",
    priceTo: "$1,150",
    description: "Experience the unique wildlife of Samburu with comfortable mid-range accommodation. Enjoy game drives to spot the Samburu Special Five and cultural visits.",
    inclusions: [
      "2 nights accommodation",
      "All meals during safari",
      "Game drives in 4x4 safari vehicle",
      "Park entrance fees",
      "Professional safari guide",
      "Bottled water during drives"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ]
  },
  {
    name: "3 Days Samburu Safari ~ Luxury",
    image: samburuLuxuryImg,
    duration: "3 Days / 2 Nights",
    priceFrom: "$1,900",
    priceTo: "$1,900",
    description: "Indulge in luxury while exploring Samburu's wilderness. Stay in premium lodges with exceptional service and enjoy exclusive wildlife encounters.",
    inclusions: [
      "2 nights luxury accommodation",
      "Premium meals & sundowners",
      "Private game drives",
      "Park entrance fees",
      "Expert safari guide",
      "All beverages included",
      "Cultural village visit"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  },
  {
    name: "4 Days Samburu Safari ~ Luxury",
    image: samburuLuxuryImg,
    duration: "4 Days / 3 Nights",
    priceFrom: "$3,450",
    priceTo: "$3,450",
    description: "Extended luxury safari in Samburu with more time to explore and relax. Perfect for wildlife enthusiasts seeking an immersive experience.",
    inclusions: [
      "3 nights luxury accommodation",
      "All meals & premium drinks",
      "Multiple game drives",
      "Park entrance fees",
      "Expert safari guide",
      "Bush breakfast experience",
      "Samburu cultural immersion",
      "Night game drive"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  },
  {
    name: "2 Days Samburu Fly-In Safari",
    image: samburuFlyingImg,
    duration: "2 Days / 1 Night",
    priceFrom: "$1,200",
    priceTo: "$1,200",
    description: "Skip the long drive and fly directly to Samburu! Arrive at Wilson Airport in Nairobi and reach the reserve within 1.5 hours for an exclusive safari experience.",
    inclusions: [
      "Round-trip flights from Nairobi",
      "1 night accommodation",
      "All meals at lodge",
      "Game drives in 4x4 vehicle",
      "Park entrance fees",
      "Airport transfers",
      "Professional guide"
    ],
    exclusions: [
      "International flights to Nairobi",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  },
  {
    name: "3 Days Samburu Fly-In Safari",
    image: samburuFlyingImg,
    duration: "3 Days / 2 Nights",
    priceFrom: "$1,750",
    priceTo: "$1,750",
    description: "Convenient flying safari with more time to explore Samburu's unique ecosystem. Perfect for those seeking comfort and efficiency.",
    inclusions: [
      "Round-trip flights from Nairobi",
      "2 nights accommodation",
      "Full board meals",
      "Multiple game drives",
      "Park entrance fees",
      "Airport transfers",
      "Expert safari guide",
      "Cultural village visit"
    ],
    exclusions: [
      "International flights to Nairobi",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  },
  {
    name: "4 Days Fly-In Safari",
    image: samburuFlyingImg,
    duration: "4 Days / 3 Nights",
    priceFrom: "$3,600",
    priceTo: "$3,600",
    description: "Extended flying safari offering the ultimate convenience and wildlife experience. Maximize your time in the reserve with comfortable aerial transfers.",
    inclusions: [
      "Round-trip flights from Nairobi",
      "3 nights accommodation",
      "All meals included",
      "Extensive game drives",
      "Park entrance fees",
      "Airport transfers",
      "Professional guide",
      "Bush dinner experience",
      "Night game drive"
    ],
    exclusions: [
      "International flights to Nairobi",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  }
];

const Samburu = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState<typeof accommodations[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="/lovable-uploads/samburu-wildlife.jpg"
            alt="Samburu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
                🎯 Exclusive
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Samburu Reserve</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Kenya's untamed north with rare wildlife and authentic culture
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Samburu National Reserve</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Samburu National Reserve is one of Kenya's premier wildlife destinations, located in the arid northern region. The reserve is home to rare species found nowhere else in Kenya, collectively known as the "Samburu Special Five": Grevy's zebra, Somali ostrich, reticulated giraffe, gerenuk, and Beisa oryx.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Ewaso Nyiro River, which flows through the reserve, provides a lifeline for wildlife in this semi-arid landscape. Beyond exceptional wildlife viewing, Samburu offers authentic cultural experiences with the Samburu people, traditional pastoralists known for their distinctive customs and colorful attire. The reserve's rugged beauty and remote location create an exclusive safari atmosphere.
            </p>
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Accommodation in Samburu National Reserve ({accommodations.length})
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From luxury riverside camps to comfortable lodges, experience authentic northern Kenya hospitality
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {accommodations.map((accommodation, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <img
                        src={accommodation.image}
                        alt={accommodation.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {accommodation.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="md:w-2/3 p-6">
                      <div className="mb-3">
                        <Badge variant="outline" className="text-xs mb-2">
                          {accommodation.type}
                        </Badge>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {accommodation.name}
                        </h3>
                      </div>

                      <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{accommodation.location}</span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {accommodation.description}
                      </p>

                      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                        <Bed className="w-4 h-4" />
                        <span>This property has {accommodation.rooms} rooms</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {accommodation.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        onClick={() => setSelectedAccommodation(accommodation)}
                        className="w-full"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safari Packages Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Samburu Safari Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the unique wildlife of Samburu with our carefully curated safari packages
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {safariPackages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {pkg.duration}
                      </Badge>
                    </div>
                    {pkg.name.includes("Fly-In") && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                          <Plane className="w-3 h-3" />
                          Flying Safari
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">{pkg.priceFrom}</span>
                      <span className="text-muted-foreground">to</span>
                      <span className="text-2xl font-bold text-primary">{pkg.priceTo}</span>
                      <span className="text-sm text-muted-foreground">per person</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          Inclusions
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                          {pkg.inclusions.slice(0, 4).map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                          <X className="w-4 h-4 text-red-600" />
                          Exclusions
                        </h4>
                        <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                          {pkg.exclusions.slice(0, 3).map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <BookingDialog
                      packageName={pkg.name}
                      packagePrice={`${pkg.priceFrom} - ${pkg.priceTo}`}
                      buttonText="Book Safari"
                      buttonVariant="default"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Unique Wildlife
                </h3>
                <p className="text-muted-foreground">
                  Encounter the Samburu Special Five and other rare species. Daily game drives reveal elephants, lions, leopards, and over 450 bird species in this pristine wilderness.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  Cultural Immersion
                </h3>
                <p className="text-muted-foreground">
                  Experience authentic Samburu culture through village visits and traditional ceremonies. Enjoy bush dinners under star-filled skies and local cuisine prepared with care.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {selectedAccommodation && (
        <AccommodationDetailsDialog
          name={selectedAccommodation.name}
          category={selectedAccommodation.category}
          type={selectedAccommodation.type}
          image={selectedAccommodation.image}
          description={selectedAccommodation.description}
          rooms={selectedAccommodation.rooms}
          location={selectedAccommodation.location}
          features={selectedAccommodation.features}
          pricing={{ perPerson: selectedAccommodation.pricing }}
          gallery={selectedAccommodation.gallery}
          isOpen={!!selectedAccommodation}
          onClose={() => setSelectedAccommodation(null)}
        />
      )}
    </div>
  );
};

export default Samburu;
