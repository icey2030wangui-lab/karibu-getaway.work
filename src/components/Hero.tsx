import { Button } from "@/components/ui/button";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Sunset Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{
          backgroundImage: `url(${heroBeach})`,
        }}
      >
        {/* Sunset gradient overlay - golden orange to deep blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/30 via-purple-900/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif">
          Welcome to 2026 Paradise
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-light">
          Begin your year with breathtaking adventures — from safaris in Amboseli to coastal escapes in Malindi
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Holiday
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold backdrop-blur-sm shadow-lg hover:shadow-white/50 transition-all duration-300 hover:scale-105"
            onClick={() => {
              document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Kenya
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