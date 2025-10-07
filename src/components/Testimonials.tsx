import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "Import Manager",
      content: "Sharaf Cargo has been our trusted logistics partner for over 3 years. Their attention to detail and timely deliveries are exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "E-commerce Business Owner",
      content: "Outstanding service! They handle our international shipments with care and professionalism. Highly recommended for any business needs.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      role: "Supply Chain Director",
      content: "Reliable, efficient, and customer-focused. Sharaf Cargo makes global shipping simple and stress-free for our company.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from businesses that trust us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="fade-in hover-scale">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
