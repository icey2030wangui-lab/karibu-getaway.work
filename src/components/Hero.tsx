import { Button } from "@/components/ui/button";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBeach})`,
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Kenya's{" "}
            <span className="text-accent">Hidden Treasures</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-95 font-light max-w-2xl">
            From pristine beaches to majestic wildlife safaris, experience unforgettable adventures with Kenya's most trusted travel partner
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Your Adventure
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white bg-white text-foreground hover:bg-white/90 px-10 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;