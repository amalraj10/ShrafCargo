import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Logistics Innovation Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Dubai World Trade Centre",
      description: "Join industry leaders to discuss the future of logistics and supply chain innovation.",
    },
    {
      title: "GCC Freight Expo",
      date: "April 22, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Abu Dhabi Convention Center",
      description: "Explore the latest trends in freight forwarding and cargo management.",
    },
    {
      title: "Customer Appreciation Day",
      date: "May 10, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Sharaf Cargo Head Office, Dubai",
      description: "Celebrate our partnership with special offers and networking opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
            Events
          </h1>
          <p className="text-xl fade-in">
            Stay connected with our upcoming events and industry gatherings
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {events.map((event, index) => (
              <Card key={index} className="fade-in hover-scale">
                <CardHeader>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-foreground mt-4">{event.description}</p>
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

export default Events;
