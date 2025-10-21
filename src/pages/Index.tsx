import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularDestinations from "@/components/PopularDestinations";
import SpecialOffers from "@/components/SpecialOffers";
import DianiPackages from "@/components/DianiPackages";
import DianiStayDine from "@/components/DianiStayDine";
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
        <div id="packages-section">
          <DianiPackages />
        </div>
        <DianiStayDine />
        <MombasaPackages />
        <MalindiPackages />
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
};

export default Index;