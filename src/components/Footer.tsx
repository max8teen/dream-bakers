import { MessageCircle, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/dream-bakers-logo.png";

// ✅ Replace with real WhatsApp number
const WHATSAPP_NUMBER = "919999999999";

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

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
              {/* ✅ Replace # with real Instagram/Facebook URLs */}
              <a href="https://www.instagram.com/dreambakersparbhani" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/dreambakersparbhani" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Facebook size={16} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-green-500 transition-colors">
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
                  <a
                    href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-heading text-lg mb-4">Visit Us</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-white/40" />
                Station Road, Near Railway Station
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-white/40" />
                Jintur Road, Opp. SBI Bank
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5 text-white/40" />
                Vasmat Naka, Parbhani
              </li>
            </ul>
          </div>

          {/* Contact — ✅ Removed broken newsletter input, replaced with clean contact block */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/60">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} className="flex-shrink-0" />
                +91 99999 99999
              </a>
              <a href="mailto:hello@dreambakers.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                hello@dreambakers.in
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-green-500 text-white text-xs font-semibold hover:bg-green-400 transition-colors w-fit">
                <MessageCircle size={14} />
                Order on WhatsApp
              </a>
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
