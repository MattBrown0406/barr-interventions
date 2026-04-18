import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import barrLogoWhite from "@/assets/barr-logo-white.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <img src={barrLogoWhite} alt="Barr Interventions & Consulting" className="h-16 w-auto mb-4" />
        <p className="text-sm opacity-80 leading-relaxed">
          Devoted to helping individuals and families regain their lives amidst struggles with drugs and alcohol.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-sm tracking-widest mb-4">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/k9-detection" className="hover:opacity-100 transition-opacity">K9 Detection</Link>
          <Link to="/coaching" className="hover:opacity-100 transition-opacity">Coaching</Link>
          <Link to="/locations" className="hover:opacity-100 transition-opacity">Locations</Link>
          <Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </nav>
      </div>
      <div>
        <h4 className="font-heading text-sm tracking-widest mb-4">Get in Touch</h4>
        <a href="tel:8177391349" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
          <Phone size={16} />
          817.739.1349
        </a>
        <p className="text-sm opacity-60 mt-4">Serving clients nationwide</p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-50">
      © {new Date().getFullYear()} Barr Interventions & Consulting. All rights reserved.
    </div>
  </footer>
);

export default Footer;
