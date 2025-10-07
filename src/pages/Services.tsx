import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Ship, Truck, Package, CheckCircle, MapPin } from "lucide-react";
import servicesBanner from "@/assets/services-banner.jpg";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments across the globe.",
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large volume shipments worldwide.",
    },
    {
      icon: Truck,
      title: "Surface Transportation",
      description: "Efficient ground transportation services for domestic and regional deliveries.",
    },
    {
      icon: Package,
      title: "Warehousing",
      description: "Secure storage facilities with advanced cargo management systems.",
    },
    {
      icon: CheckCircle,
      title: "Order Management",
      description: "Comprehensive order tracking and management solutions for your business.",
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Real-time shipment tracking to keep you informed every step of the way.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBanner})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in">
            Our Services
          </h1>
          <p className="text-xl text-white/90 fade-in">
            Comprehensive logistics solutions for all your shipping needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="fade-in hover-scale">
                  <CardHeader>
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Service Activities
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-muted-foreground mb-6">
                Service activities for cargo/goods (outgoing and entering) through the airport, including 
                loading unloading, transfer from aircraft to storage (cargo warehouse).
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">Order Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">Asset Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">Live Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
