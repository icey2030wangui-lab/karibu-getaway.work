import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingDialog } from "@/components/BookingDialog";
import { Clock, Users, MapPin, Waves } from "lucide-react";

const activities = [
  {
    name: "Fort Jesus Museum",
    category: "Cultural & Historical",
    type: "HISTORY MUSEUMS",
    image: "/lovable-uploads/mombasa-fort-jesus.jpg",
    description: "Fort Jesus is Mombasa's most popular tourist attraction. The fort, located along the coastline near the Old Town, is a monumental piece of architecture that was built in the 16th century by the Portuguese. This UNESCO World Heritage Site offers fascinating insights into the coastal history and strategic importance of Mombasa.",
    duration: "2-3 hours",
    rating: 4.1,
    reviews: 1019,
    features: ["Guided Tours", "Museum Exhibits", "Historical Architecture", "Photography"],
    price: "From $50"
  },
  {
    name: "Old Town Mombasa",
    category: "Cultural & Historical",
    type: "NEIGHBORHOOD TOURS",
    image: "/lovable-uploads/mombasa-old-town.jpeg",
    description: "Explore the narrow winding streets of Old Town with its distinctive Swahili architecture, ornate balconies, and carved doors. This historical area showcases centuries of cultural fusion between Arab, Asian, and African influences. Visit local markets, mosques, and experience authentic coastal culture.",
    duration: "3-4 hours",
    rating: 4.3,
    reviews: 856,
    features: ["Walking Tours", "Cultural Heritage", "Local Markets", "Architecture"],
    price: "From $35"
  },
  {
    name: "Haller Park",
    category: "Nature & Wildlife",
    type: "NATURE & WILDLIFE AREAS",
    image: "/lovable-uploads/haller-park.webp",
    description: "Three hippos, few ageing crocodiles, butterflies, cute giant tortoises and the six giraffes in the park. A nature park transformed from limestone quarry into an ecological paradise. Home to various wildlife including giraffes, hippos, crocodiles, and numerous bird species. Perfect for family visits and nature walks.",
    duration: "2-3 hours",
    rating: 4.1,
    reviews: 1244,
    features: ["Wildlife Viewing", "Nature Walks", "Feeding Sessions", "Bird Watching"],
    price: "From $30"
  },
  {
    name: "Mamba Village",
    category: "Nature & Wildlife",
    type: "CROCODILE FARM",
    image: "/lovable-uploads/mamba-village.jpeg",
    description: "East Africa's largest crocodile farm featuring hundreds of Nile crocodiles. Watch feeding demonstrations, learn about crocodile conservation, and enjoy the botanical gardens. The facility also includes a restaurant and aquarium.",
    duration: "2-3 hours",
    rating: 4.0,
    reviews: 678,
    features: ["Crocodile Feeding", "Botanical Gardens", "Aquarium", "Educational Tours"],
    price: "From $40"
  },
  {
    name: "Wild Waters",
    category: "Adventure & Recreation",
    type: "WATER PARK",
    image: "/lovable-uploads/mombasa-tusks.jpg",
    description: "Kenya's premier water park featuring thrilling water slides, wave pools, and family-friendly attractions. Perfect for a fun day out with exciting rides and water activities for all ages.",
    duration: "Full Day",
    rating: 4.2,
    reviews: 523,
    features: ["Water Slides", "Wave Pool", "Kids Area", "Restaurant"],
    price: "From $45"
  },
  {
    name: "Mombasa Marine Park",
    category: "Marine Activities",
    type: "MARINE RESERVE",
    image: "/lovable-uploads/neptune-3.jpg",
    description: "Protected marine reserve offering pristine coral reefs, diverse marine life, and crystal-clear waters. Perfect for snorkeling, diving, and glass-bottom boat tours. Experience the vibrant underwater ecosystem of the Indian Ocean.",
    duration: "4-6 hours",
    rating: 4.5,
    reviews: 892,
    features: ["Snorkeling", "Diving", "Glass Bottom Boats", "Marine Wildlife"],
    price: "From $60"
  },
  {
    name: "Jet Ski Adventure",
    category: "Water Sports",
    type: "JET SKI RENTAL",
    image: "/lovable-uploads/neptune-5.jpg",
    description: "Experience the thrill of riding jet skis along Mombasa's stunning coastline. Feel the adrenaline as you speed across the turquoise waters of the Indian Ocean with professional instructors and safety equipment provided.",
    duration: "30 min - 1 hour",
    rating: 4.6,
    reviews: 445,
    features: ["Professional Instructors", "Safety Equipment", "Coastal Views", "Photo Opportunities"],
    price: "From $80"
  },
  {
    name: "Kite Surfing",
    category: "Water Sports",
    type: "KITE SURFING LESSONS",
    image: "/lovable-uploads/neptune-7.jpg",
    description: "Learn kite surfing or improve your skills with certified instructors on Mombasa's beautiful beaches. The consistent coastal winds and shallow waters make this an ideal location for both beginners and experienced kite surfers.",
    duration: "2-3 hours",
    rating: 4.7,
    reviews: 312,
    features: ["Certified Instructors", "Equipment Included", "Beginner Friendly", "Advanced Training"],
    price: "From $100"
  },
  {
    name: "Snorkeling Excursion",
    category: "Marine Activities",
    type: "SNORKELING TOUR",
    image: "/lovable-uploads/neptune-8.jpg",
    description: "Discover the colorful underwater world of Mombasa's coral reefs. Swim alongside tropical fish, spot sea turtles, and explore vibrant coral gardens. All equipment and guidance provided for a safe and memorable experience.",
    duration: "3-4 hours",
    rating: 4.5,
    reviews: 768,
    features: ["Equipment Provided", "Marine Life", "Coral Reefs", "Professional Guide"],
    price: "From $45"
  },
  {
    name: "Paddle Boat Experience",
    category: "Water Sports",
    type: "PADDLE BOAT RENTAL",
    image: "/lovable-uploads/neptune-10.jpg",
    description: "Enjoy a leisurely paddle boat ride along the calm waters of Mombasa's beaches. Perfect for families and couples seeking a relaxed water activity with scenic coastal views.",
    duration: "1 hour",
    rating: 4.2,
    reviews: 289,
    features: ["Family Friendly", "Scenic Views", "Easy to Use", "Life Jackets Included"],
    price: "From $25"
  }
];

const Mombasa = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src="/lovable-uploads/mombasa-port.webp"
            alt="Mombasa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
                🌊 Coastal Paradise
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Mombasa</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Experience history, culture, and adventure on Kenya's stunning coast
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Mombasa</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mombasa is Kenya's second-largest city and the gateway to the country's magnificent coastline. Rich in history and culture, this vibrant coastal metropolis offers a perfect blend of ancient Swahili heritage, Portuguese colonial architecture, and modern beach resort amenities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From exploring historic Fort Jesus and the winding streets of Old Town to enjoying pristine beaches and thrilling water sports, Mombasa provides endless opportunities for adventure, relaxation, and cultural immersion. The city's warm tropical climate and stunning Indian Ocean setting make it an ideal year-round destination.
            </p>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Activities & Excursions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {activity.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/90">
                        ⭐ {activity.rating} ({activity.reviews})
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs mb-2">
                        {activity.type}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {activity.name}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {activity.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{activity.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {activity.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="text-xl font-bold text-primary">{activity.price}</p>
                      </div>
                      <BookingDialog
                        packageName={activity.name}
                        packagePrice={activity.price}
                        buttonText="Book Now"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Travel Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Best Time to Visit</h3>
                <p className="text-muted-foreground">
                  Mombasa enjoys warm weather year-round. The best time to visit is during the dry seasons from December to March and July to October. Water sports are best during the windy season (May to September).
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Getting Around</h3>
                <p className="text-muted-foreground">
                  Taxis, ride-sharing apps, and tuk-tuks are readily available. Many hotels offer shuttle services to popular attractions. Consider hiring a driver for full-day excursions to multiple sites.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">What to Pack</h3>
                <p className="text-muted-foreground">
                  Light, breathable clothing, swimwear, sunscreen, hat, sunglasses, and comfortable walking shoes. Bring a light jacket for cooler evenings and modest clothing for visiting religious sites.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Safety & Health</h3>
                <p className="text-muted-foreground">
                  Mombasa is generally safe for tourists. Stay hydrated, use sun protection, and follow water safety guidelines for marine activities. Consult your doctor about recommended vaccinations before travel.
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

export default Mombasa;
