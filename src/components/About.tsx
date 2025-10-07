import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in">
            <img 
              src={aboutImage} 
              alt="Modern logistics warehouse" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Experience Hassle-Free Happiness
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience since its inception in 2007, Sharaf Cargo has carved a 
              niche for itself in the growing logistics industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether it is shipments by air, ocean, or surface transportation, we are at your service — 
              right from packing, conveyance, and shipping to on-time delivery at designated destinations.
            </p>

            {/* Core Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground font-medium">Security of packages transported</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground font-medium">Provide our employees a great environment</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <p className="text-foreground font-medium">Deliver excellent customer service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
