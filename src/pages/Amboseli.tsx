import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { MapPin, Users, Utensils, Bed, CheckCircle2 } from "lucide-react";
import safariAmboseli from "@/assets/safari-amboseli.jpg";
import safariMasaiMara from "@/assets/safari-masai-mara.jpg";
import safariBudgetTour from "@/assets/safari-budget-tour.jpg";

const accommodations = [
  {
    name: "Ol Tukai Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/amboseli-elephants.jpg",
    description: "Located in the heart of Amboseli with breathtaking views of Mt. Kilimanjaro. The lodge offers elegant accommodation and exceptional wildlife viewing opportunities.",
    rooms: 80,
    location: "Amboseli National Park",
    features: ["Full Board", "Kilimanjaro Views", "Swimming Pool", "Spa Services"],
    pricing: "$500 per person sharing per night"
  },
  {
    name: "Amboseli Serena Safari Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/amboseli1.jpeg",
    description: "Maasai-inspired architecture with sweeping views of Africa's highest mountain. Offers world-class amenities and unforgettable safari experiences.",
    rooms: 96,
    location: "Amboseli National Park",
    features: ["Full Board", "Game Drives", "Cultural Visits", "Bar & Lounge"],
    pricing: "$580 per person per night"
  },
  {
    name: "Kibo Safari Camp",
    category: "Mid-range",
    type: "TENTED CAMP",
    image: "/lovable-uploads/amboooose.jpg",
    description: "Comfortable tented accommodation in the Amboseli ecosystem, offering authentic bush experiences with stunning mountain backdrops.",
    rooms: 73,
    location: "Amboseli National Park",
    features: ["Full Board", "Tented Suites", "Bush Dining", "Wildlife Viewing"],
    pricing: "$460 per person sharing per night"
  },
  {
    name: "Sentrim Amboseli Lodge",
    category: "Mid-range",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/amboseli_11.jpg",
    description: "Well-appointed lodge offering comfortable rooms and excellent service. Perfect base for exploring Amboseli's elephant herds and diverse wildlife.",
    rooms: 54,
    location: "Amboseli National Park",
    features: ["Full Board", "Swimming Pool", "Game Drives", "Conference Facilities"],
    pricing: "$370 per person sharing per night"
  }
];

const safariPackages = [
  {
    title: "6-Day Amboseli, Lake Naivasha & Mara - Mid-Range",
    price: "$1,790 per person",
    duration: "6 Days",
    type: "Private Tour",
    category: "Mid-range, Lodge & Hotel",
    image: safariAmboseli,
    description: "Comprehensive safari covering Amboseli's elephants with Kilimanjaro backdrop, Lake Naivasha's water birds, and Masai Mara's Big Five. Perfect balance of comfort and adventure.",
    inclusions: [
      "Park fees (For non-residents)",
      "All activities",
      "All accommodation",
      "Professional driver/guide",
      "All transportation",
      "All Taxes/VAT",
      "Meals",
      "Drinks"
    ],
    exclusions: [
      "International flights",
      "Roundtrip airport transfer",
      "Tips",
      "Personal items",
      "Government imposed taxes increase"
    ]
  },
  {
    title: "6-Day Big Five Tour: Mara, Nakuru, Amboseli",
    price: "$1,800 per person",
    duration: "6 Days",
    type: "Shared Tour (max 7 people)",
    category: "Mid-range, Lodge",
    image: safariMasaiMara,
    description: "Ultimate Big Five safari experience combining three of Kenya's premier national parks. Witness the Great Migration, spot rhinos at Lake Nakuru, and photograph elephants against Mt. Kilimanjaro.",
    inclusions: [
      "Park fees",
      "All activities",
      "Accommodation in lodges",
      "Professional driver/guide",
      "All transportation",
      "Meals & Drinks"
    ],
    exclusions: [
      "International flights",
      "Airport transfers",
      "Tips",
      "Personal items"
    ]
  },
  {
    title: "8-Day Mara-Nakuru-Naivasha-Amboseli Budget Safari",
    price: "$2,083 per person",
    duration: "8 Days",
    type: "Shared Tour (max 8 people)",
    category: "Budget, Tented Camp & Hotel",
    image: safariBudgetTour,
    description: "Extended budget safari covering Kenya's top wildlife destinations. Great value for money with comprehensive game viewing opportunities across multiple ecosystems.",
    inclusions: [
      "Park fees",
      "All activities",
      "Budget accommodation",
      "Professional driver/guide",
      "All transportation",
      "Meals"
    ],
    exclusions: [
      "International flights",
      "Roundtrip airport transfer",
      "Tips",
      "Drinks",
      "Personal items"
    ]
  },
  {
    title: "7-Day Comfort Kenya Safari with Sopa Lodges",
    price: "$2,500 per person",
    duration: "7 Days",
    type: "Private Tour",
    category: "Mid-range, Lodge",
    image: safariAmboseli,
    description: "Comfortable safari staying at renowned Sopa Lodges across Kenya's best parks. Includes Amboseli, Lake Nakuru, and Masai Mara with excellent amenities and service.",
    inclusions: [
      "Park fees",
      "All activities",
      "Sopa Lodge accommodation",
      "Professional driver/guide",
      "All transportation",
      "All Taxes/VAT",
      "Meals & Selected drinks",
      "Swimming pool access"
    ],
    exclusions: [
      "International flights",
      "Tips",
      "Personal items",
      "Premium beverages"
    ]
  }
];

const Amboseli = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="/lovable-uploads/amboseli-elephants.jpg"
            alt="Amboseli"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
                📸 Insta-Worthy
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Amboseli National Park</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Majestic elephants against the backdrop of Mt. Kilimanjaro
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Amboseli National Park</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Amboseli National Park is famous for being the best place in Africa to get close to free-ranging elephants. The park offers spectacular views of Mount Kilimanjaro, the highest free-standing mountain in the world, creating one of the most iconic backdrops for wildlife photography.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond elephants, Amboseli hosts a variety of wildlife including lions, cheetahs, buffaloes, giraffes, and over 600 bird species. The park's diverse habitats range from the dried-up bed of Lake Amboseli to wetlands with sulphur springs, savannah, and woodlands, offering varied landscapes and excellent game viewing year-round.
            </p>
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Accommodation in Amboseli National Park ({accommodations.length})
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience luxury lodges and authentic tented camps with stunning views of Africa's highest peak
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

                      <BookingDialog
                        packageName={`${accommodation.name} - Amboseli Safari`}
                        packagePrice={accommodation.pricing || "$554"}
                        buttonText="Book Now"
                        buttonVariant="default"
                      />
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
                Amboseli Safari Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore safari packages featuring Amboseli National Park, combined with other premier Kenyan destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safariPackages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      {pkg.category.split(',')[0]}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{pkg.title}</h3>
                      <p className="text-sm">{pkg.duration}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2 text-xs">{pkg.type}</Badge>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {pkg.description}
                      </p>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-xs text-muted-foreground">pp (USD)</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-xs font-semibold text-green-600 mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {pkg.inclusions.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                              <CheckCircle2 className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <BookingDialog
                      packageName={pkg.title}
                      packagePrice={pkg.price}
                      buttonText="Get Quote"
                      buttonVariant="default"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What to Expect</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Elephant Encounters
                </h3>
                <p className="text-muted-foreground">
                  Get up close with large elephant herds roaming freely. The park is renowned for offering the best elephant viewing in Africa, with opportunities to photograph these gentle giants against Kilimanjaro.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  Authentic Dining
                </h3>
                <p className="text-muted-foreground">
                  Savor delicious meals with panoramic views of Mt. Kilimanjaro. Many lodges offer outdoor dining experiences and traditional Maasai cultural performances.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Amboseli;
