import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import SpecialOffers from "@/components/SpecialOffers";
import MombasaPackages from "@/components/MombasaPackages";
import MalindiPackages from "@/components/MalindiPackages";
import Footer from "@/components/Footer";
import ChatIcon from "@/components/ChatIcon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PopularDestinations />
        <SpecialOffers />
        <MombasaPackages />
        <MalindiPackages />
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
};

export default Index;