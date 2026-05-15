import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/Imgs/logo.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about" },
      { name: "Leadership", href: "/about#leadership" },
      { name: "What We Believe", href: "/about#beliefs" },
    ],
  },
  {
    name: "Ministries",
    href: "/ministries/worship",
    children: [
      { name: "Worship", href: "/ministries/worship" },
      { name: "Youth", href: "/ministries/youth" },
      { name: "Children's", href: "/ministries/childrens" },
      { name: "Community Outreach", href: "/ministries/community-outreach" },
    ],
  },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Watch Live", href: "/watch-live" },
  { name: "Blog", href: "/blog" },
  { name: "Prayer", href: "/prayer" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6">
              <a href="mailto:faithassembly001@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
              <a href="tel:+254799192029" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>(+254) 799192029</span>
              </a>
              <a href="/contact" className="flex items-center gap-2 hover:text-accent transition-colors">
                <span>Reach Out</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/70">Sunday Services: 10:00 AM & 1:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background shadow-lg"
            : "bg-background/95 backdrop-blur-sm"
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary flex items-center justify-center">
                <img src={logo} alt="Faith Life Assembly logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <p className="font-heading text-xl font-bold text-foreground leading-tight">
                  Faith Life Assembly
                </p>
                <p className="text-xs text-accent font-medium uppercase tracking-wider">Church</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                      location.pathname === link.href
                        ? "text-accent"
                        : "text-foreground hover:text-accent"
                    )}
                  >
                    {link.name}
                    {link.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/give">Give Online</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-md text-sm font-medium transition-colors",
                        location.pathname === link.href
                          ? "text-accent bg-accent/10"
                          : "text-foreground hover:text-accent hover:bg-muted"
                      )}
                    >
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="pl-6 space-y-1 mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-accent transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/give">Give Online</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
