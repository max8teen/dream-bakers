import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import logoImg from "@/assets/dream-bakers-logo.png";

const WHATSAPP = "917972666151";

const navLinks = [
  { label: "Home",        id: "home" },
  { label: "Menu",        id: "menu" },
  { label: "About",       id: "about" },
  { label: "Branches",    id: "branches" },
  { label: "Custom Cake", id: "custom-cake" },
  { label: "Gallery",     id: "gallery" },
];

const scrollTo = (id: string, closeMobile?: () => void) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
  closeMobile?.();
};

const Header = () => {
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      setHidden(currentY > 100 && currentY > lastY);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lastY]);

  useEffect(() => {
    if (mobileOpen) {
      const close = () => setMobileOpen(false);
      window.addEventListener("scroll", close, { once: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [mobileOpen]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "hsl(262,40%,39%)" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 md:px-8 flex items-center justify-between h-16 md:h-20">

        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
            <img src={logoImg} alt="Dream Bakers" className="w-11 h-11 object-contain" />
          </div>
          <span className="text-white font-heading text-base md:text-lg hidden sm:block">Dream Bakers</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 px-3 py-2 group">
              <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "linear-gradient(90deg, hsl(356,85%,65%), hsl(262,40%,65%))" }} />
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-white/20 hover:bg-green-500 hover:border-green-500"
            style={{ background: "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))" }}>
            <MessageCircle size={15} />
            Order on WhatsApp
          </a>
          <button
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Fixed: opacity/y animation instead of height — height:0 was clipping buttons */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ background: "hsl(262,40%,28%)" }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.id}
                  onClick={() => scrollTo(link.id, () => setMobileOpen(false))}
                  className="text-left text-sm font-medium text-white/70 hover:text-white py-3 px-3 rounded-lg hover:bg-white/10 transition-all active:bg-white/20">
                  {link.label}
                </button>
              ))}
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white px-5 py-3 rounded-full text-sm font-semibold mt-2"
                style={{ background: "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))" }}>
                <MessageCircle size={16} /> Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
