import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Associates = () => {
  const associates = [
    { name: "DHL", region: "Global Partner" },
    { name: "FedEx", region: "International Shipping" },
    { name: "Maersk", region: "Ocean Freight" },
    { name: "Emirates SkyCargo", region: "Air Freight" },
    { name: "DB Schenker", region: "Logistics Solutions" },
    { name: "Kuehne + Nagel", region: "Supply Chain" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
            Go Far Together
          </h1>
          <p className="text-xl mb-2 fade-in">Meet Our Associates</p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto fade-in">
            We collaborate with industry-leading partners to provide you with comprehensive 
            logistics solutions worldwide.
          </p>
        </div>
      </section>

      {/* Associates Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {associates.map((associate, index) => (
              <Card key={index} className="fade-in hover-scale">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {associate.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {associate.name}
                    </h3>
                    <p className="text-muted-foreground">{associate.region}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Associates;
