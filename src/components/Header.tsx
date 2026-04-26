import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import logoImg from "@/assets/dream-bakers-logo.png";

const navLinks = ["Home", "Menu", "About", "Branches", "Custom Cake", "Gallery"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      // Hide when scrolling DOWN past 100px, show when scrolling UP
      if (currentY > 100) {
        setHidden(currentY > lastY);
      } else {
        setHidden(false);
      }
      setScrolled(currentY > 60);
      setLastY(currentY);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lastY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "hsl(262,40%,39%)" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="px-4 md:px-8 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 flex-shrink-0">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
            <img src={logoImg} alt="Dream Bakers" className="w-11 h-11 object-contain" />
          </div>
          <span className="text-white font-heading text-base md:text-lg hidden sm:block">Dream Bakers</span>
        </button>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className="relative text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 px-3 py-2 group">
              <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "linear-gradient(90deg, hsl(356,85%,65%), hsl(262,40%,65%))" }} />
              {link}
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <div className="flex items-center gap-3">
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-white/20"
            style={{ background: "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#25D366";
              (e.currentTarget as HTMLElement).style.borderColor = "#25D366";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}>
            <MessageCircle size={15} />
            Order on WhatsApp
          </a>
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "hsl(262,40%,28%)" }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-left text-sm font-medium text-white/70 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/10 transition-all">
                  {link}
                </button>
              ))}
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
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
