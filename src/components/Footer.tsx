import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-xl tracking-wider mb-4">Barr Interventions & Consulting</h3>
        <p className="text-sm opacity-80 leading-relaxed">
          Devoted to helping individuals and families regain their lives amidst struggles with drugs and alcohol.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-sm tracking-widest mb-4">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/coaching" className="hover:opacity-100 transition-opacity">Coaching</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </nav>
      </div>
      <div>
        <h4 className="font-heading text-sm tracking-widest mb-4">Get in Touch</h4>
        <a href="tel:5124025991" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
          <Phone size={16} />
          512.402.5991
        </a>
        <p className="text-sm opacity-60 mt-4">Serving Texas, Oklahoma & Louisiana</p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs opacity-50">
      © {new Date().getFullYear()} Barr Interventions & Consulting. All rights reserved.
    </div>
  </footer>
);

export default Footer;
