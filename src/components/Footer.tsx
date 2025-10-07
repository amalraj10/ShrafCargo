import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Associates", path: "/associates" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GCC Offices */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sharaf Cargo - GCC Offices</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  Sharaf Cargo Forwarding Imports and Exports<br />
                  P.O. Box: 125231, Al Mulla 2 Building,<br />
                  Behind Ansar Gallery, Karama, Dubai-UAE
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+971585053535" className="hover:text-accent transition-colors">
                  +971 585053535
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:sharafcargouae@gmail.com" className="hover:text-accent transition-colors">
                  sharafcargouae@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:dubai@sharafcargo.in" className="hover:text-accent transition-colors">
                  dubai@sharafcargo.in
                </a>
              </div>
            </div>
          </div>

          {/* Other Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Other Locations</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>DEIRA: +971 43273131</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>SHARJAH: +971 525453838</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>AJMAN: +971 526463838</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Sharaf Cargo Forwarding. All Rights Reserved.</p>
          <p className="mt-2">Powered By Corporate Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
