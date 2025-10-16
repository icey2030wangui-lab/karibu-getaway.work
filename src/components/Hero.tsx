import { Button } from "@/components/ui/button";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBeach})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover Kenya's
          <span className="block text-accent"> Hidden Treasures</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          From pristine beaches to majestic wildlife safaris, experience unforgettable adventures 
          with Kenya's most trusted travel partner
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={() => {
              document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Adventure
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-adventure-gold text-adventure-gold hover:bg-adventure-gold hover:text-foreground px-8 py-4 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-adventure-gold/50 transition-all duration-300"
            onClick={() => {
              document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Destinations
          </Button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">30,000+</div>
            <div className="text-sm md:text-base opacity-80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">50+</div>
            <div className="text-sm md:text-base opacity-80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
            <div className="text-sm md:text-base opacity-80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;