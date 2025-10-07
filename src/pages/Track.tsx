import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    toast.success("Tracking request submitted. You will receive an update shortly.");
    setTrackingNumber("");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in">
            Track Your Shipment
          </h1>
          <p className="text-xl fade-in">
            Enter your tracking number to get real-time updates
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Enter Tracking Number</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrack} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="text"
                      placeholder="Enter your tracking number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="flex-1 text-lg py-6"
                    />
                    <Button type="submit" size="lg" className="px-8">
                      <Search className="w-5 h-5 mr-2" />
                      Track
                    </Button>
                  </div>
                </form>

                <div className="mt-8 p-6 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">
                    How to track your shipment:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Enter your tracking number in the field above</li>
                    <li>Click the Track button</li>
                    <li>View real-time status updates of your shipment</li>
                    <li>Contact us if you need additional assistance</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-8 text-center fade-in">
              <p className="text-muted-foreground mb-2">
                Need help with tracking? Contact us:
              </p>
              <p className="text-primary font-semibold">
                +971 585053535 | sharafcargouae@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Track;
