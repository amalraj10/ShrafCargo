import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";
import missionImage from "@/assets/mission-image.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
            About Sharaf Cargo
          </h1>
          <p className="text-xl fade-in">
            Your trusted partner in global logistics since 2007
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img 
                src={aboutImage} 
                alt="Sharaf Cargo Warehouse" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Experience Hassle-Free Happiness
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience since its inception in 2007, Sharaf Cargo has carved a 
                niche for itself in the growing logistics industry. We have established ourselves as a 
                reliable and efficient logistics partner for businesses across the GCC region and beyond.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Whether it is shipments by air, ocean, or surface transportation, we are at your service — 
                right from packing, conveyance, and shipping to on-time delivery at designated destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We represent a company with more than 25 years in the market and globally positioned 
                among the top companies in the logistics sector. Our mission is to connect businesses 
                and people across borders, delivering excellence with every shipment.
              </p>
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
            <div className="fade-in order-1 lg:order-2">
              <img 
                src={missionImage} 
                alt="Global Network" 
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center fade-in">
              Why Choose Sharaf Cargo?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Experience</h3>
                <p className="text-muted-foreground">
                  Over a decade of proven expertise in the logistics and freight forwarding industry.
                </p>
              </div>
              <div className="fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Global Reach</h3>
                <p className="text-muted-foreground">
                  Coverage across 14 countries with 6 national and international offices.
                </p>
              </div>
              <div className="fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  On-time delivery and secure handling of over 5.4 million packages.
                </p>
              </div>
              <div className="fade-in">
                <h3 className="text-xl font-semibold text-primary mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  120,000+ happy customers who trust us with their shipping needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
