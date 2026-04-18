import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import barrLogo from "@/assets/barr-logo.png";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "K9 Detection", path: "/k9-detection" },
  { label: "Coaching", path: "/coaching" },
  { label: "Assessment", path: "/assessment" },
  { label: "Locations", path: "/locations" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-border/70 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85">
      <div className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[11px] font-heading uppercase tracking-[0.24em] md:px-12">
          <span>Confidential support for families in crisis, available nationwide</span>
          <a href="tel:8177391349" className="whitespace-nowrap transition-opacity hover:opacity-80">
            Call 817.739.1349
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5 md:px-12">
      <Link to="/" className="flex items-center" aria-label="Barr Interventions home">
        <img src={barrLogo} alt="Barr Interventions & Consulting" className="h-14 md:h-18 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-8">
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
        <a
          href="tel:8177391349"
          className="rounded bg-primary px-4 py-2 font-heading text-xs tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
        >
          Call Now
        </a>
      </div>

      <button
        className="text-foreground md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
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
            <a
              href="tel:8177391349"
              className="mt-2 rounded bg-primary px-4 py-3 text-center font-heading text-xs tracking-[0.2em] text-primary-foreground uppercase"
            >
              Call 817.739.1349
            </a>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
