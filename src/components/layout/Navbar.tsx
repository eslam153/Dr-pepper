import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { name: "Flavors", path: "/flavors" },
  { name: "Culture Hub", path: "/culture" },
  { name: "About", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 pointer-events-none font-sans",
        isScrolled ? "bg-dp-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/10" : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between pointer-events-auto relative">
        {/* Desktop Nav (Left) */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-bold flex-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-dp-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo (Center) */}
        <Link to="/" className="flex items-center justify-center flex-1 md:absolute md:left-1/2 md:-translate-x-1/2 group">
          <h1 className="text-3xl lg:text-4xl font-display font-black tracking-tighter italic flex items-center">
            <span className="text-dp-red group-hover:text-dp-light transition-colors">Pepsi</span>
          </h1>
        </Link>

        {/* Actions (Right) */}
        <div className="hidden md:flex items-center justify-end space-x-6 flex-1">
          <Link
            to="/locator"
            className="border border-white/30 px-5 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors"
          >
            Store Locator
          </Link>
          <a
            href="#buy"
            className="bg-dp-red px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-dp-red-hover shadow-lg shadow-dp-red/20 text-white transition-all"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-dp-black shadow-2xl transition-all duration-300 overflow-hidden pointer-events-auto",
          mobileMenuOpen ? "max-h-screen border-b border-dp-red/20" : "max-h-0"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-display uppercase hover:text-dp-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/locator"
            className="flex items-center gap-2 text-xl font-display uppercase hover:text-dp-red transition-colors pt-4 border-t border-white/10"
          >
            <MapPin className="w-5 h-5" />
            Find Near You
          </Link>
        </div>
      </div>
    </header>
  );
}
