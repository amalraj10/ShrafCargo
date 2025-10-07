import missionImage from "@/assets/mission-image.jpg";

const Mission = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Go Beyond Logistics, Make The World Go Round
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We represent Cargo, a company with more than 25 years in the market and globally positioned 
              among the top companies in the logistics sector.
            </p>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              This Is Our Inspiration
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to connect businesses and people across borders, delivering excellence with 
              every shipment and building lasting relationships based on trust and reliability.
            </p>
          </div>

          {/* Image */}
          <div className="fade-in order-1 lg:order-2">
            <img 
              src={missionImage} 
              alt="Global logistics network" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
