import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { destinations } from "@/data/destinations";
import { useNavigate } from "react-router-dom";
const PopularDestinations = () => {
  const navigate = useNavigate();
  const handleViewDetails = (destinationName: string) => {
    if (destinationName === "Diani Beach") {
      navigate("/diani-beach");
    } else if (destinationName === "Maasai Mara") {
      navigate("/masai-mara");
    } else if (destinationName === "Amboseli National Park") {
      navigate("/amboseli");
    } else if (destinationName === "Samburu Reserve") {
      navigate("/samburu");
    } else if (destinationName === "Mombasa") {
      navigate("/mombasa");
    } else if (destinationName === "Malindi & Watamu") {
      navigate("/malindi");
    }
  };
  return <section id="destinations-section" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🌍 Popular Destinations ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Kenya's most breathtaking landscapes, from pristine beaches 🏖️ to magnificent wildlife safaris 🦁 and rich cultural experiences 🎭
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-primary">
            <span className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">🏝️ Beach Paradise</span>
            <span className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">🦁 Wild Safari</span>
            <span className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">🏙️ City Breaks</span>
            <span className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">🎯 Adventure Awaits</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] bg-card animate-fade-in">
              <div className="relative overflow-hidden">
                <img src={destination.image} alt={destination.name} loading="lazy" decoding="async" className="w-full h-64 object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 animate-scale-in">
                  <Badge className="bg-accent text-accent-foreground text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                    {destination.badge}
                  </Badge>
                </div>
                
                <div className="absolute top-4 right-4 text-4xl animate-bounce">
                  {destination.emoji}
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-sm font-bold text-foreground">
                    🎯 {destination.packages} packages
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="absolute -top-6 left-6 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {destination.emoji}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2 group-hover:text-primary transition-colors duration-300">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-end">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-110 hover:shadow-lg transition-all duration-300 group/btn" onClick={() => handleViewDetails(destination.name)}>
                    <span className="group-hover/btn:mr-1 transition-all">View Details</span>
                    <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity">→</span>
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-12 animate-slide-up">
          
          <p className="text-sm text-muted-foreground mt-4">✨ 100+ destinations across Kenya • Expert local guides • Unforgettable experiences</p>
        </div>
      </div>
    </section>;
};
export default PopularDestinations;