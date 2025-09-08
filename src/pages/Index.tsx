import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import SpecialOffers from "@/components/SpecialOffers";
import DianiPackages from "@/components/DianiPackages";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularDestinations />
        <SpecialOffers />
        <DianiPackages />
      </main>
      <Footer />
    </div>
  );
};

export default Index;