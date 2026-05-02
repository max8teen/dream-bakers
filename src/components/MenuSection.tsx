import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import cakeChocolate from "@/assets/cake-chocolate.png";
import cakeRedvelvet from "@/assets/cake-redvelvet.png";
import cakeButterscotch from "@/assets/cake-butterscotch.png";
import cakeMango from "@/assets/cake-mango.png";
import cookiesAssorted from "@/assets/cookies-assorted.png";
import pastries from "@/assets/pastries.png";

const categories = ["All", "Cakes", "Pastries", "Cookies"];

const menuItems = [
  { name: "Chocolate Truffle", price: "₹650", category: "Cakes", image: cakeChocolate, tall: true },
  { name: "Red Velvet Dream", price: "₹750", category: "Cakes", image: cakeRedvelvet, tall: false },
  { name: "Butterscotch Bliss", price: "₹600", category: "Cakes", image: cakeButterscotch, tall: false },
  { name: "Mango Delight", price: "₹700", category: "Cakes", image: cakeMango, tall: true },
  { name: "Assorted Cookies", price: "₹250", category: "Cookies", image: cookiesAssorted, tall: false },
  { name: "Cream Puff Eclairs", price: "₹180", category: "Pastries", image: pastries, tall: true },
];

// Splits items into N columns for masonry layout
function buildColumns(items: typeof menuItems, count: number) {
  const cols: (typeof menuItems)[] = Array.from({ length: count }, () => []);
  items.forEach((item, i) => cols[i % count].push(item));
  return cols;
}

const PinCard = ({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="relative overflow-hidden rounded-2xl cursor-pointer group w-full"
      style={{
        aspectRatio: item.tall ? "3/4" : "1/1",
        background: "#111",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Food image */}
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
      />

      {/* Dark overlay always visible at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 45%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-heading text-base leading-tight">{item.name}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span
            className="text-sm font-bold"
            style={{ color: "hsl(356,85%,70%)" }}
          >
            {item.price}
          </span>

          {/* WhatsApp order button — appears on hover */}
          <motion.a
            href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi! I'd like to order ${item.name} (${item.price})`)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingBag size={15} />
          </motion.a>
        </div>
      </div>

      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/80 backdrop-blur-sm"
        style={{ background: "rgba(0,0,0,0.45)" }}
      >
        {item.category}
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  // 3 cols on desktop, 2 cols on mobile (handled via separate renders)
  const desktopCols = buildColumns(filtered, 3);
  const mobileCols = buildColumns(filtered, 2);

  return (
    <section
      id="menu"
      className="section-spacing"
      style={{ background: "hsl(15,100%,97%)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent text-primary text-lg mb-2">delicious picks</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">Our Menu</h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat
                  ? "text-white shadow-md"
                  : "bg-white text-foreground/60 hover:text-foreground card-shadow"
              }`}
              style={
                active === cat
                  ? {
                      background:
                        "linear-gradient(135deg,hsl(356,85%,57%),hsl(262,40%,39%))",
                    }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DESKTOP — 3 column masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-desktop"}
            className="hidden md:flex gap-4 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {desktopCols.map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-4">
                {col.map((item, ii) => (
                  <PinCard
                    key={item.name + active}
                    item={item}
                    index={ci * 3 + ii}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* MOBILE — 2 column masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-mobile"}
            className="flex md:hidden gap-3 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {mobileCols.map((col, ci) => (
              <div key={ci} className="flex-1 flex flex-col gap-3">
                {col.map((item, ii) => (
                  <PinCard
                    key={item.name + active}
                    item={item}
                    index={ci * 2 + ii}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
