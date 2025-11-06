import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { ImageLightbox } from "@/components/ImageLightbox";
import { AccommodationDetailsDialog } from "@/components/AccommodationDetailsDialog";
import { MapPin, Users, Utensils, Bed, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import safariMasaiMara from "@/assets/safari-masai-mara.jpg";
import safariLuxuryCamp from "@/assets/safari-luxury-camp.jpg";
import safariBudgetTour from "@/assets/safari-budget-tour.jpg";

const accommodations = [
  {
    name: "Mara Serena Safari Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/mara-serena-room.jpeg",
    description: "The Lodge is located within the mara triangle which gives it one of the best views of the mara especially during the wilderbeest migration. The lodge has 75 rooms including 8 sets interconnecting rooms, 1 suite, 28 rooms with king size beds and 38 twin rooms and 8 triple rooms (on request basis) all influenced by the Maasai heritage. Strategically located for amazing views of the Savannah and the river. The suite is the presidential, honeymoon or VIP venue - very spacious with uninterrupted views of the mara River. All rooms have free internet, ceiling fans, telephones, valet, laundry and shoe shine with 24hr room service.",
    rooms: 75,
    location: "Mara Triangle, Masai Mara National Reserve",
    features: ["Full Board", "Free WiFi", "24hr Room Service", "King & Twin Rooms", "Presidential Suite", "River Views"],
    pricing: {
      perPerson: "$749 per person per night"
    }
  },
  {
    name: "Mara Sopa Lodge",
    category: "Mid-range",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/mara-sopa-1.webp",
    description: "Set on the slopes of the Oloolaimutia Hills, Mara Sopa Lodge provides stunning views over the rolling plains of the Masai Mara.",
    rooms: 100,
    location: "Masai Mara National Reserve",
    features: ["Full Board", "Game Drives", "Swimming Pool", "Cultural Visits"],
    pricing: {
      perPerson: "$300 per person per night (2 people sharing)"
    },
    gallery: [
      { url: "/lovable-uploads/mara-sopa-1.webp", caption: "Welcome to Mara Sopa Lodge" },
      { url: "/lovable-uploads/mara-sopa-2.webp", caption: "Swimming Pool Area" },
      { url: "/lovable-uploads/mara-sopa-3.webp", caption: "Pool Access" },
      { url: "/lovable-uploads/mara-sopa-4.webp", caption: "Lodge Exterior" },
      { url: "/lovable-uploads/mara-sopa-5.webp", caption: "Pool View" },
      { url: "/lovable-uploads/mara-sopa-room.webp", caption: "Room Interior" },
      { url: "/lovable-uploads/mara-sopa-giraffes.webp", caption: "Giraffes in the Reserve" },
      { url: "/lovable-uploads/mara-sopa-buffalo.webp", caption: "Buffalo Herd" }
    ]
  },
  {
    name: "Mara Leisure Camp",
    category: "Budget",
    type: "TENTED CAMP",
    image: "/lovable-uploads/masai_11.jpeg",
    description: "An intimate tented camp offering comfortable accommodation and authentic safari experiences at affordable rates.",
    rooms: 20,
    location: "Masai Mara National Reserve",
    features: ["Full Board", "Game Drives", "Bush Dining", "Campfire Nights"],
    pricing: {
      perPerson: "$200 per person per night (2 people sharing)"
    }
  },
  {
    name: "Basecamp Masai Mara",
    category: "Mid-range",
    type: "TENTED CAMP",
    image: "/lovable-uploads/maasaai.jpeg",
    description: "Eco-friendly tented camp along the Talek River, combining sustainability with comfort and authentic Maasai cultural experiences.",
    rooms: 15,
    location: "Talek River, Masai Mara",
    features: ["Full Board", "Eco-friendly", "River Views", "Cultural Center"],
    pricing: {
      perPerson: "$400 per person per night (2 people sharing)"
    }
  }
];

const safariPackages = [
  {
    title: "6-Day Maasai Mara-Nakuru-Amboseli Budget Safari",
    price: "$1,100 per person",
    duration: "6 Days",
    type: "Shared Tour (max 7 people)",
    category: "Budget, Tented Camp & Hotel",
    image: safariBudgetTour,
    description: "Experience Kenya's most iconic parks on this budget-friendly safari. Visit Masai Mara for the Big Five, Lake Nakuru for flamingos and rhinos, and Amboseli for elephants with Mt. Kilimanjaro views.",
    inclusions: [
      "Park fees (For non-residents)",
      "All activities (Unless labeled as optional)",
      "All accommodation (Unless listed as upgrade)",
      "A professional driver/guide",
      "All transportation (Unless labeled as optional)",
      "All Taxes/VAT",
      "Meals",
      "Drinks"
    ],
    exclusions: [
      "International flights",
      "Roundtrip airport transfer",
      "Tips (Tipping guideline US$10.00 pp per day)",
      "Personal items",
      "Government imposed increase of taxes and/or park fees"
    ]
  },
  {
    title: "4-Day Masai Mara & Lake Nakuru High End Safari",
    price: "$3,500 per person",
    duration: "4 Days",
    type: "Private Tour",
    category: "Mid-range, Lodge",
    image: safariMasaiMara,
    description: "Luxurious safari experience combining the legendary Masai Mara with the scenic Lake Nakuru. Stay in comfortable lodges and enjoy extensive game drives with expert guides.",
    inclusions: [
      "Park fees",
      "All activities",
      "All accommodation",
      "Professional driver/guide",
      "All transportation",
      "All Taxes/VAT",
      "Roundtrip airport transfer",
      "Meals",
      "Drinks"
    ],
    exclusions: [
      "International flights",
      "Tips",
      "Personal items",
      "Government imposed increase of taxes"
    ]
  },
  {
    title: "3-Day Masai Mara Wildlife Safari & Sundowners",
    price: "$2,000 per person",
    duration: "3 Days",
    type: "Private Tour",
    category: "Mid-range, Tented Camp",
    image: safariMasaiMara,
    description: "Short but immersive Masai Mara experience with sunset sundowner experiences. Perfect for those with limited time wanting to witness the Great Migration and Big Five.",
    inclusions: [
      "Park fees",
      "All activities",
      "Tented camp accommodation",
      "Professional driver/guide",
      "All transportation",
      "Meals & Drinks",
      "Sundowner experiences"
    ],
    exclusions: [
      "International flights",
      "Airport transfers",
      "Tips",
      "Personal items"
    ]
  },
  {
    title: "8-Day Exceptional Luxury Safari",
    price: "$4,050 to $4,319",
    duration: "8 Days",
    type: "Private Tour",
    category: "Luxury, Lodge & Tented Camp",
    image: safariLuxuryCamp,
    description: "Ultimate luxury safari experience covering Kenya's premier wildlife destinations. Stay in exclusive lodges and camps with world-class service and amenities.",
    inclusions: [
      "Park fees",
      "All activities",
      "Luxury accommodation",
      "Professional driver/guide",
      "All transportation",
      "All Taxes/VAT",
      "Meals & Premium drinks",
      "Spa services",
      "Cultural visits"
    ],
    exclusions: [
      "International flights",
      "Tips",
      "Personal items",
      "Premium beverages"
    ]
  },
  {
    title: "4-Day Masai Mara & Lake Nakuru Budget Joining",
    price: "$1,500 per person",
    duration: "4 Days",
    type: "Shared Tour (max 8 people)",
    category: "Budget, Tented Camp & Hotel",
    image: safariBudgetTour,
    description: "Affordable joining safari to Masai Mara and Lake Nakuru. Share the experience with other travelers while keeping costs low. Great for solo travelers and budget-conscious adventurers.",
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
      "Airport transfers",
      "Tips",
      "Drinks",
      "Personal items"
    ]
  }
];

const MasaiMara = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedAccommodation, setSelectedAccommodation] = useState<number | null>(null);
  const maraSopaGallery = accommodations[1].gallery || [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openAccommodationDetails = (index: number) => {
    setSelectedAccommodation(index);
  };

  const closeAccommodationDetails = () => {
    setSelectedAccommodation(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Lightbox Modal */}
      <ImageLightbox
        images={maraSopaGallery}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Accommodation Details Dialog */}
      {selectedAccommodation !== null && (
        <AccommodationDetailsDialog
          {...accommodations[selectedAccommodation]}
          isOpen={true}
          onClose={closeAccommodationDetails}
        />
      )}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="/lovable-uploads/masai.jpeg"
            alt="Masai Mara"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
                🔥 Most Popular Safari
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Masai Mara</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Witness the legendary Great Migration and encounter the Big Five
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Masai Mara</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The Masai Mara National Reserve is Kenya's most celebrated game reserve. It offers breathtaking panoramas, abundant wildlife and endless plains. The park is famous for the Great Migration, when thousands of wildebeest, zebra, and gazelle move to and from the Serengeti.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Home to the Big Five (lion, leopard, elephant, buffalo, and rhino), the Mara provides some of the most spectacular game viewing opportunities in Africa. The reserve's rolling grasslands and acacia forests create the perfect backdrop for wildlife photography and unforgettable safari experiences.
            </p>
          </div>
        </section>

        {/* Useful Information Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Useful Information on Maasai Mara
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Park Fees */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Park Fees</h3>
                <p className="text-muted-foreground mb-4">
                  Maasai Mara park fee are paid to where you stay; if you are staying in the Mara Triangle and are driving through Sekenani Gate on the Narok side, do not pay park fee until you enter the Triangle at Purungat Bridge.
                </p>
                <p className="text-muted-foreground">
                  All tickets can be purchased from KAPS online with a visa card, in Nairobi upon arrival in the Mara Triangle from the authorized KAPS employee stationed at either Purungat Bridge, Oloololo Gate or Serena Airstrip. Visa credit and debit cards are accepted at all Mara Triangle entry points.
                </p>
              </Card>

              {/* Getting There */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Getting There</h3>
                <h4 className="font-semibold text-foreground mb-2">By Road</h4>
                <p className="text-muted-foreground mb-4">
                  Driving will take you about 5-6 hours. Nairobi to Narok will take you about 2 - 2.5 hours, the road is absolutely beautiful and smooth.
                </p>
                <p className="text-muted-foreground">
                  In Narok there is a fuel station just across the river which is a great stop for food, toilet and snacks. Leaving Narok to Sekenani Gate will take you about 2-3.5 hours depending on the vehicle you are travelling with. The road is also very good.
                </p>
              </Card>

              {/* Best Time to Visit */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Best Time To Visit</h3>
                <p className="text-muted-foreground mb-4">
                  With the wildebeest migration in <span className="font-semibold">JULY - OCTOBER</span>, this is the best time to see this incredible movement of animals. Although it is not guaranteed that the wildebeest get to Maasai Mara, it has yet to let us down. Also, December to February are great times as it is dryer and good for the Big Cats.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  NOTE: The Maasai Mara is an all year-round destination with the big cats, and all the big game still in the Maasai Mara Ecosystem.
                </p>
              </Card>

              {/* Vaccinations */}
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Vaccinations</h3>
                <p className="text-muted-foreground mb-4">
                  Please check with your travel agent on the latest information on the COVID recommendations and protocols.
                </p>
                <p className="text-muted-foreground">
                  It is recommended that all visitors see their doctor 4-8 weeks prior to departure for advice on medication and vaccinations. Hepatitis A and B, typhoid and polio are usually recommended vaccinations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Accommodations Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Accommodation in Masai Mara National Reserve ({accommodations.length})
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our selection of handpicked lodges and camps, from luxury lodges to authentic tented camps
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

                      {accommodation.pricing && (
                        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm font-semibold text-foreground mb-1">Pricing:</p>
                          <p className="text-sm text-muted-foreground">{accommodation.pricing.perPerson}</p>
                        </div>
                      )}

                      <Button 
                        onClick={() => openAccommodationDetails(index)}
                        className="w-full"
                      >
                        View Details & Photos
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mara Sopa Lodge Photo Gallery - Keep for direct access */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mara Sopa Lodge Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the beauty and comfort of Mara Sopa Lodge through these stunning images
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {accommodations[1].gallery?.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-sm p-4 font-medium">{photo.caption}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Safari Packages Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Masai Mara Safari Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our carefully curated safari packages, from budget-friendly group tours to exclusive luxury experiences
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
                  Wildlife Viewing
                </h3>
                <p className="text-muted-foreground">
                  Daily game drives with expert guides to spot the Big Five, cheetahs, hippos, and hundreds of bird species. July to October offers the best migration viewing.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  Dining Experience
                </h3>
                <p className="text-muted-foreground">
                  Enjoy full board meals with international and local cuisine. Many camps offer bush breakfasts and sundowner experiences in the wilderness.
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

export default MasaiMara;
