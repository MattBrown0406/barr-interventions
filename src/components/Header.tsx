import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import barrLogo from "@/assets/barr-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "K9 Detection", path: "/k9-detection" },
  { label: "Coaching", path: "/coaching" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-card py-6 px-6 md:px-12 flex items-center justify-between relative z-50">
      <Link to="/" className="flex items-center">
        <img src={barrLogo} alt="Barr Interventions & Consulting" className="h-14 md:h-18 w-auto" />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
              location.pathname === link.path ? "text-primary" : "text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden text-foreground"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg md:hidden">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
