import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cargo.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
          We Make Connections
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in">
          Our Best Services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8"
            asChild
          >
            <Link to="/services">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            asChild
          >
            <Link to="/about">Know More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
