import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { MapPin, Users, Utensils, Bed } from "lucide-react";

const accommodations = [
  {
    name: "Mara Serena Safari Lodge",
    category: "Luxury+",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/masai.jpeg",
    description: "Perched high on a bush-cloaked hill with panoramic views, Mara Serena Safari Lodge offers authentic safari elegance in the heart of the Masai Mara.",
    rooms: 74,
    location: "Masai Mara National Reserve",
    features: ["Full Board", "Game Drives", "Swimming Pool", "Bar & Restaurant"]
  },
  {
    name: "Mara Sopa Lodge",
    category: "Mid-range",
    type: "SAFARI LODGE",
    image: "/lovable-uploads/masai_2.jpeg",
    description: "Set on the slopes of the Oloolaimutia Hills, Mara Sopa Lodge provides stunning views over the rolling plains of the Masai Mara.",
    rooms: 100,
    location: "Masai Mara National Reserve",
    features: ["Full Board", "Game Drives", "Swimming Pool", "Cultural Visits"]
  },
  {
    name: "Mara Leisure Camp",
    category: "Budget",
    type: "TENTED CAMP",
    image: "/lovable-uploads/masai_11.jpeg",
    description: "An intimate tented camp offering comfortable accommodation and authentic safari experiences at affordable rates.",
    rooms: 20,
    location: "Masai Mara National Reserve",
    features: ["Full Board", "Game Drives", "Bush Dining", "Campfire Nights"]
  },
  {
    name: "Basecamp Masai Mara",
    category: "Mid-range",
    type: "TENTED CAMP",
    image: "/lovable-uploads/maasaai.jpeg",
    description: "Eco-friendly tented camp along the Talek River, combining sustainability with comfort and authentic Maasai cultural experiences.",
    rooms: 15,
    location: "Talek River, Masai Mara",
    features: ["Full Board", "Eco-friendly", "River Views", "Cultural Center"]
  }
];

const MasaiMara = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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

                      <BookingDialog
                        packageName={`${accommodation.name} - Masai Mara Safari`}
                        packagePrice="$654"
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
