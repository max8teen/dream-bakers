import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronDown } from "lucide-react";
import cakeChocolate from "@/assets/cake-chocolate.png";
import cakeRedvelvet from "@/assets/cake-redvelvet.png";
import cakeButterscotch from "@/assets/cake-butterscotch.png";
import cakeMango from "@/assets/cake-mango.png";
import cookiesAssorted from "@/assets/cookies-assorted.png";
import pastries from "@/assets/pastries.png";

const categories = ["All", "Cakes", "Pastries", "Cookies"];

const menuItems = [
  { name: "Chocolate Truffle", price: "₹650", category: "Cakes", image: cakeChocolate },
  { name: "Red Velvet Dream", price: "₹750", category: "Cakes", image: cakeRedvelvet },
  { name: "Butterscotch Bliss", price: "₹600", category: "Cakes", image: cakeButterscotch },
  { name: "Mango Delight", price: "₹700", category: "Cakes", image: cakeMango },
  { name: "Assorted Cookies", price: "₹250", category: "Cookies", image: cookiesAssorted },
  { name: "Cream Puff Eclairs", price: "₹180", category: "Pastries", image: pastries },
];

// Layout: index 0 = big, 1&2 = two smalls, 3 = big, 4&5 = two smalls
const layoutPattern = [
  { col: "lg:col-span-2", aspect: "aspect-[4/3]", offset: "" },      // big
  { col: "lg:col-span-1", aspect: "aspect-square", offset: "" },      // small
  { col: "lg:col-span-1", aspect: "aspect-square", offset: "lg:mt-8" }, // small offset down
  { col: "lg:col-span-1", aspect: "aspect-square", offset: "" },      // small
  { col: "lg:col-span-1", aspect: "aspect-square", offset: "lg:mt-8" }, // small offset
  { col: "lg:col-span-2", aspect: "aspect-[4/3]", offset: "" },      // big
];

const MenuSection = () => {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "All" ? menuItems : menuItems.filter(i => i.category === active);
  const mobileItems = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="menu" className="section-spacing" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container">
        <motion.div className="text-center mb-10"
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
          <p className="font-accent text-primary text-lg mb-2">delicious picks</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">Our Menu</h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map(cat => (
            <button key={cat} onClick={() => { setActive(cat); setShowAll(false); }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "text-white shadow-md"
                  : "bg-white text-foreground/60 hover:text-foreground card-shadow"
              }`}
              style={active === cat ? { background: "linear-gradient(135deg,hsl(356,85%,57%),hsl(262,40%,39%))" } : {}}>
              {cat}
            </button>
          ))}
        </div>

        {/* DESKTOP: staggered bento grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 items-start">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => {
              const layout = layoutPattern[i % layoutPattern.length];
              return (
                <motion.div
                  key={item.name + active}
                  className={`group bg-white rounded-[20px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-400 cursor-pointer ${layout.col} ${layout.offset}`}
                  initial={{ opacity:0, y:40, scale:0.95 }}
                  animate={{ opacity:1, y:0, scale:1 }}
                  exit={{ opacity:0, scale:0.9 }}
                  transition={{ duration:0.4, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={`relative overflow-hidden ${layout.aspect}`}>
                    <img src={item.image} alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      style={{ background: "linear-gradient(135deg,hsl(356,85%,57%),hsl(262,40%,39%))" }}>
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-lg">{item.name}</h3>
                    <p className="font-semibold" style={{ color: "hsl(356,85%,57%)" }}>{item.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* MOBILE: show 3 items, then Show More button */}
        <div className="lg:hidden grid grid-cols-1 gap-5">
          <AnimatePresence>
            {mobileItems.map((item, i) => (
              <motion.div
                key={item.name + active}
                className="group bg-white rounded-[20px] overflow-hidden card-shadow flex gap-4 items-center p-3"
                initial={{ opacity:0, x:-20 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:20 }}
                transition={{ duration:0.3, delay: i * 0.06 }}
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base">{item.name}</h3>
                  <p className="font-semibold text-sm mt-1" style={{ color: "hsl(356,85%,57%)" }}>{item.price}</p>
                </div>
                <button className="w-9 h-9 rounded-full text-white flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,hsl(356,85%,57%),hsl(262,40%,39%))" }}>
                  <ShoppingBag size={14} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Show more / less */}
          {filtered.length > 3 && (
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg,hsl(356,85%,57%),hsl(262,40%,39%))" }}
              whileTap={{ scale: 0.97 }}
            >
              {showAll ? "Show Less" : `Show More (${filtered.length - 3} more)`}
              <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={16} />
              </motion.span>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
