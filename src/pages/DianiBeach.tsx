import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DianiPackages from "@/components/DianiPackages";
import ChatIcon from "@/components/ChatIcon";
import { Badge } from "@/components/ui/badge";
import dianiBeach from "@/assets/diani-beach.jpg";

const DianiBeach = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={dianiBeach}
            alt="Diani Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
                🏖️ Beach Paradise
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Diani Beach</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Kenya's premier beach destination with pristine white sands and crystal-clear waters
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Diani Beach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Diani Beach is consistently rated as one of Africa's finest beaches, featuring 17 kilometers of pristine white coral sand and warm turquoise waters. Located 30 km south of Mombasa on Kenya's Indian Ocean coast, this tropical paradise offers the perfect blend of relaxation and adventure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond sunbathing and swimming, Diani offers incredible marine experiences including swimming with dolphins, snorkeling in coral gardens, kite surfing, and exploring nearby islands. The beach is lined with luxury resorts, boutique hotels, and authentic Swahili restaurants, making it the ideal destination for beach lovers, water sports enthusiasts, and those seeking a tropical escape.
            </p>
          </div>
        </section>

        {/* Activities & Packages Section */}
        <DianiPackages />
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
};

export default DianiBeach;
