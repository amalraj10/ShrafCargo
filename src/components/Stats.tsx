import { Globe, Package, Users, Building2 } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Globe,
      value: "14",
      label: "Countries Covered",
    },
    {
      icon: Package,
      value: "5,432,000",
      label: "Packages Received",
    },
    {
      icon: Users,
      value: "120,000",
      label: "Happy Customers",
    },
    {
      icon: Building2,
      value: "6",
      label: "National and International Offices",
    },
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center fade-in hover-scale"
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
