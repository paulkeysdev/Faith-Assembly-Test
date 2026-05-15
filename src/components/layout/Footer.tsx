import { Link } from "react-router-dom";
import { Facebook, Youtube, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Music } from "lucide-react";
import logo from "@/Imgs/logo.jpeg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-primary flex items-center justify-center">
                <img src={logo} alt="Faith Life Assembly logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <p className="font-heading text-xl font-bold text-foreground leading-tight">
                  Faith Life Assembly
                </p>
                <p className="text-xs text-accent font-medium uppercase tracking-wider">Church</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              A place where faith grows, community thrives, and everyone is welcome to experience God's love.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100084026224123"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="https://tiktok.com/@faith_assemblychurch"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-black" />
              </a>
              <a
                href="https://youtube.com/@faithlifeassemblychurch?si=gbuTe9MA1An5lAvZ"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-red-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Sermons", href: "/sermons" },
                { name: "Watch Live", href: "/watch-live" },
                { name: "Events", href: "/events" },
                { name: "Blog", href: "/blog" },
                { name: "Prayer", href: "/prayer" },
                { name: "Give", href: "/give" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Service Times</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday Services</p>
                  <p className="text-sm text-primary-foreground/70">10:00 AM To 1:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Wednesday Prayers</p>
                  <p className="text-sm text-primary-foreground/70">5:00 PM To 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Youth Night (Friday)</p>
                  <p className="text-sm text-primary-foreground/70">6:30 PM To 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                    Mutego, Gitaru Off Wangige Road
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+254799192029"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (+254) 799192029
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:faithassembly001@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  faithassembly001@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Links Bar */}
      <div className="border-t border-primary-foreground/10 bg-primary/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="mailto:faithassembly001@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Let's Connect
            </Link>
            <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Locations
            </Link>
            <Link to="/media" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Engage
            </Link>
            <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Reach Out
            </Link>
            <Link to="/give" className="text-primary-foreground/80 hover:text-accent transition-colors">
              Give
            </Link>
            <a href="tel:+254799192029" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>(+254) 799192029</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Faith Life Assembly Church. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
