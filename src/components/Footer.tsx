import { MessageCircle, Instagram, Facebook, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/dream-bakers-logo.png";

const Footer = () => {
  return (
    <footer className="relative text-white pt-20 pb-8" style={{ background: "hsl(262, 40%, 39%)" }}>
      {/* Curve top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[59px]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 50 1440 30V60H0V30Z" fill="hsl(262, 40%, 39%)" />
        </svg>
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand with circular logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Circle logo */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                <img src={logoImg} alt="Dream Bakers" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <p className="font-heading text-lg text-white leading-tight">Dream Bakers</p>
                <p className="text-xs text-white/50">Parbhani</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Parbhani's favourite bakery, making celebrations sweeter since 2015.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/919999999999" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-green-500 transition-colors">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {["Home", "Menu", "About", "Branches", "Custom Cake", "Gallery"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-heading text-lg mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>📍 Station Road, Near Railway Station</li>
              <li>📍 Jintur Road, Opp. SBI Bank</li>
              <li>📍 Vasmat Naka, Parbhani</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Stay Connected</h4>
            <div className="space-y-3 text-sm text-white/60 mb-4">
              <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} /> +91 99999 99999
              </a>
              <a href="mailto:hello@dreambakers.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} /> hello@dreambakers.in
              </a>
            </div>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email"
                className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/40 border border-white/20" />
              <button className="gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Dream Bakers, Parbhani. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
