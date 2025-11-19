import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookingDialog } from "@/components/BookingDialog";
import vascoPillar from "@/assets/vasco-pillar.jpg";
import malindiMuseum from "@/assets/malindi-museum.jpg";
import portugueseChapel from "@/assets/portuguese-chapel.jpg";
import gediRuins from "@/assets/gedi-ruins.jpg";
import malindiMarine from "@/assets/malindi-marine.jpg";
import midaCreek from "@/assets/mida-creek.jpg";
import hellsKitchen from "@/assets/hells-kitchen.jpg";
import mambruiDunes from "@/assets/mambrui-dunes.jpg";
import falconryKenya from "@/assets/falconry-kenya.jpg";
import malindiSurfing from "@/assets/malindi-surfing.jpg";
import watamuSnorkeling from "@/assets/watamu-snorkeling.jpg";
import beachHorseRiding from "@/assets/beach-horse-riding.jpg";
import watamuMalindiBeach from "@/assets/watamu-malindi-beach.jpg";

const Malindi = () => {
  const packages = [
    {
      name: "Vasco da Gama Pillar",
      image: vascoPillar,
      price: 25,
      description: "Visit the historic Portuguese monument erected in 1498, offering stunning coastal views and a glimpse into maritime history.",
      duration: "2 hours",
      includes: ["Entrance fee", "Guided tour", "Historical insights"]
    },
    {
      name: "Malindi Museum",
      image: malindiMuseum,
      price: 20,
      description: "Explore Swahili heritage, Portuguese artifacts, and cultural exhibits showcasing Malindi's rich history.",
      duration: "1.5 hours",
      includes: ["Museum entrance", "Cultural displays", "Educational tour"]
    },
    {
      name: "Portuguese Chapel",
      image: portugueseChapel,
      price: 15,
      description: "Discover one of the oldest surviving Portuguese buildings in Kenya, a testament to colonial architecture.",
      duration: "1 hour",
      includes: ["Chapel visit", "Historical context", "Photo opportunities"]
    },
    {
      name: "Gedi Ruins",
      image: gediRuins,
      price: 35,
      description: "Explore the mysterious 13th-century Swahili ruins hidden in the forest, with ancient mosques and houses.",
      duration: "3 hours",
      includes: ["Site entrance", "Professional guide", "Nature walk"]
    },
    {
      name: "Malindi Marine National Park",
      image: malindiMarine,
      price: 65,
      description: "Experience pristine coral reefs, colorful marine life, and crystal-clear waters in Kenya's oldest marine park.",
      duration: "Half day",
      includes: ["Park fees", "Boat ride", "Snorkeling gear", "Guide"]
    },
    {
      name: "Mida Creek",
      image: midaCreek,
      price: 45,
      description: "Explore mangrove forests, spot diverse birdlife, and enjoy a peaceful kayak or dhow cruise through tidal creeks.",
      duration: "3 hours",
      includes: ["Transport", "Boat/kayak", "Bird watching guide"]
    },
    {
      name: "Marafa Hell's Kitchen",
      image: hellsKitchen,
      price: 55,
      description: "Witness dramatic red sandstone canyons and gorges, especially spectacular at sunset with golden lighting.",
      duration: "Half day",
      includes: ["Transport", "Entrance fee", "Local guide", "Sunset viewing"]
    },
    {
      name: "Mambrui Sand Dunes",
      image: mambruiDunes,
      price: 40,
      description: "Explore vast white sand dunes meeting the Indian Ocean, perfect for photography and desert-like adventures.",
      duration: "2 hours",
      includes: ["Transport", "Guided walk", "Photo stops"]
    },
    {
      name: "Falconry of Kenya",
      image: falconryKenya,
      price: 50,
      description: "Interactive bird of prey experience with hawks, falcons, and owls. Learn about falconry traditions.",
      duration: "2 hours",
      includes: ["Entry fee", "Bird demonstration", "Handler interaction"]
    },
    {
      name: "Surfing",
      image: malindiSurfing,
      price: 60,
      description: "Catch waves at Malindi's best surf spots with professional instructors, suitable for all skill levels.",
      duration: "2 hours",
      includes: ["Surfboard rental", "Instructor", "Safety gear"]
    },
    {
      name: "Snorkeling",
      image: watamuSnorkeling,
      price: 55,
      description: "Discover vibrant coral gardens and tropical fish in Watamu's protected marine areas.",
      duration: "3 hours",
      includes: ["Snorkeling gear", "Boat transport", "Marine guide"]
    },
    {
      name: "Horse Riding",
      image: beachHorseRiding,
      price: 70,
      description: "Ride along pristine beaches at sunrise or sunset, experiencing the coast from a unique perspective.",
      duration: "1.5 hours",
      includes: ["Horse rental", "Guide", "Safety equipment", "Beach access"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={watamuMalindiBeach}
              alt="Malindi & Watamu"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Malindi & Watamu
            </h1>
            <p className="text-xl md:text-2xl mb-6 animate-slide-up">
              🌊 Historic Coastal Towns & Marine Paradise 🐠
            </p>
            <p className="text-lg max-w-2xl mx-auto animate-slide-up">
              Discover ancient ruins, pristine marine parks, and thrilling water sports in Kenya's most charming coastal destinations
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              About Malindi & Watamu
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-4">
                Malindi and Watamu are twin coastal gems offering a perfect blend of history, culture, and natural beauty. 
                Malindi's rich Portuguese heritage is visible in historic monuments, while Watamu boasts some of Kenya's 
                most pristine beaches and marine parks.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                From exploring ancient Swahili ruins and Portuguese landmarks to snorkeling in crystal-clear waters 
                teeming with marine life, these destinations offer unforgettable experiences for history buffs, 
                nature lovers, and adventure seekers alike.
              </p>
              <p className="text-lg leading-relaxed">
                The Malindi Marine National Park and Watamu Marine National Park are home to vibrant coral reefs, 
                sea turtles, dolphins, and countless tropical fish species, making them world-class diving and 
                snorkeling destinations.
              </p>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Popular Packages & Activities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                      ${pkg.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">
                        ⏱️ Duration: {pkg.duration}
                      </p>
                      <p className="text-sm font-semibold text-foreground mb-2">
                        Includes:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {pkg.includes.map((item, i) => (
                          <li key={i}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <BookingDialog
                      packageName={pkg.name}
                      packagePrice={pkg.price.toString()}
                      buttonText="Book Now"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Malindi;