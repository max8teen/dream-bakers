import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroCake from "@/assets/hero-cake.png";
import cupcakeFloat from "@/assets/cupcake-float.png";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden"
    style={{ background: "hsl(15,100%,97%)" }}>
    <div className="absolute inset-0" style={{ background: "hsl(15,100%,97%)" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, hsl(356 85% 57% / 0.08), transparent 70%)" }} />

    <motion.img src={cupcakeFloat} alt="" className="absolute top-24 right-[8%] w-20 md:w-28 opacity-60 pointer-events-none"
      animate={{ y: [0,-12,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
    <motion.img src={cupcakeFloat} alt="" className="absolute bottom-32 left-[5%] w-16 md:w-20 opacity-40 pointer-events-none rotate-12"
      animate={{ y: [0,-8,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} />

    {/* Cake behind text on mobile — bigger, centered */}
    <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ top: "60px" }}>
      <motion.img src={heroCake} alt=""
        className="w-[600px] sm:w-[1000px] object-contain"
        style={{ opacity: 0.18 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }} />
    </div>

    <div className="container relative z-10 pt-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <motion.p className="font-accent text-primary text-lg md:text-xl mb-4"
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}>
            since 2015
          </motion.p>
          <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading leading-[1.05] mb-6"
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.7 }}>
            Happiness{" "}<span className="gradient-text">Baked</span>{" "}Fresh Everyday
          </motion.h1>
          <motion.p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8"
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}>
            From birthday celebrations to everyday sweetness — Parbhani's most loved bakery crafts every bite with love, fresh ingredients, and a sprinkle of joy.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7 }}>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              <MessageCircle size={18} />
              Order Now
            </a>
            <button onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior:"smooth" })}
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-8 py-4 rounded-full text-base font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
              Explore Menu
            </button>
          </motion.div>
        </div>

        {/* Cake — desktop only */}
        <motion.div className="hidden lg:flex relative justify-end"
          initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.4, duration:0.8, ease:"easeOut" }}>
          <motion.img src={heroCake} alt="Dream Bakers signature celebration cake"
            className="w-[320px] sm:w-[400px] md:w-[480px] lg:w-[520px] drop-shadow-2xl cursor-pointer"
            width={800} height={960}
            whileHover={{ scale:1.08, filter:"drop-shadow(0 30px 60px rgba(200,50,70,0.35))", transition:{ duration:0.4 } }} />
        </motion.div>
      </div>
    </div>

    <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}>
      <ChevronDown size={28} className="text-muted-foreground" />
    </motion.div>
  </section>
);

export default Hero;
