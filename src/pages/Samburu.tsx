import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { MapPin, Users, Utensils, Bed } from "lucide-react";

const accommodations = [
  {
    name: "Samburu Intrepids Camp",
    category: "Luxury+",
    type: "TENTED CAMP",
    image: "/lovable-uploads/samburu-wildlife.jpg",
    description: "Luxurious tented camp on the banks of the Ewaso Nyiro River offering an intimate safari experience with stunning wildlife viewing and Samburu cultural encounters.",
    rooms: 28,
    location: "Samburu National Reserve",
    features: ["Full Board", "River Views", "Swimming Pool", "Cultural Visits"]
  },
  {
    name: "Sarova Shaba Game Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-lodge.jpg",
    description: "Set amidst indigenous trees overlooking a natural spring and waterhole. This lodge offers panoramic views of the Shaba Reserve and Mt. Kenya in the distance.",
    rooms: 85,
    location: "Shaba National Reserve",
    features: ["Full Board", "Natural Spring Views", "Game Drives", "Conference Facilities"]
  },
  {
    name: "Elephant Bedroom Camp",
    category: "Mid-range",
    type: "TENTED CAMP",
    image: "/lovable-uploads/samburu-elephant.jpeg",
    description: "An exclusive tented camp along the Ewaso Nyiro River, offering personal service and exceptional wildlife encounters including the unique Samburu Special Five.",
    rooms: 12,
    location: "Samburu National Reserve",
    features: ["Full Board", "Bush Walks", "Eco-friendly", "Riverside Dining"]
  },
  {
    name: "Samburu Sopa Lodge",
    category: "Mid-range",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-suite.webp",
    description: "Perched on a hill overlooking Samburu National Reserve, this lodge combines comfort with spectacular views and easy access to wildlife-rich plains.",
    rooms: 60,
    location: "Samburu National Reserve",
    features: ["Full Board", "Swimming Pool", "Cultural Performances", "Bar & Restaurant"]
  },
  {
    name: "Samburu Simba Lodge",
    category: "Budget",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/samburu-warriors.webp",
    description: "Affordable lodge offering comfortable accommodation and authentic safari experiences. Perfect for budget-conscious travelers seeking Samburu's unique wildlife.",
    rooms: 48,
    location: "Samburu National Reserve",
    features: ["Full Board", "Game Drives", "Guided Tours", "Cultural Shows"]
  }
];

const Samburu = () => {
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

                      <BookingDialog
                        packageName={`${accommodation.name} - Samburu Safari`}
                        packagePrice="$600"
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

        {/* What to Expect Section */}
        <section className="py-16 px-4 bg-background">
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
    </div>
  );
};

export default Samburu;
