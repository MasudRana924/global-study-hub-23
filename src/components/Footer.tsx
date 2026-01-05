import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Find Institutions", href: "/institutions" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const destinations = [
    { name: "Study in USA", href: "/institutions?country=usa" },
    { name: "Study in UK", href: "/institutions?country=uk" },
    { name: "Study in Canada", href: "/institutions?country=canada" },
    { name: "Study in Australia", href: "/institutions?country=australia" },
    { name: "Study in Germany", href: "/institutions?country=germany" },
  ];

  const resources = [
    { name: "Visa Guide", href: "/resources/visa" },
    { name: "IELTS Preparation", href: "/resources/ielts" },
    { name: "Scholarships", href: "/resources/scholarships" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/70">
                Subscribe to get the latest news on universities, scholarships, and events
              </p>
            </div>
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40"
              />
              <Button className="rounded-l-none bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">
                Edu<span className="text-accent">Global</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted partner for international education. Helping Bangladeshi students achieve their dreams of studying abroad since 2009.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent" />
                <span>House 45, Road 12, Gulshan 1, Dhaka 1212</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@eduglobal.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 EduGlobal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
