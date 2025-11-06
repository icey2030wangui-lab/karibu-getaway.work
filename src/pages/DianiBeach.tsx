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

        {/* Activities & Packages Section */}
        <DianiPackages />
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
};

export default DianiBeach;
