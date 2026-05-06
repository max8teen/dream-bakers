import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import cakeChocolate from "@/assets/cake-chocolate.png";
import cakeRedvelvet from "@/assets/cake-redvelvet.png";
import cakeButterscotch from "@/assets/cake-butterscotch.png";
import cakeMango from "@/assets/cake-mango.png";
import cookiesAssorted from "@/assets/cookies-assorted.png";
import pastries from "@/assets/pastries.png";
import cupcakeFloat from "@/assets/cupcake-float.png";
import heroCake from "@/assets/hero-cake.png";

const WHATSAPP = "917972666151";

const ALL_ITEMS = [
  { name: "Chocolate Truffle",   price: "₹650", category: "Cakes",    image: cakeChocolate,   tall: true  },
  { name: "Red Velvet Dream",    price: "₹750", category: "Cakes",    image: cakeRedvelvet,   tall: false },
  { name: "Assorted Cookies",    price: "₹250", category: "Cookies",  image: cookiesAssorted, tall: false },
  { name: "Butterscotch Bliss",  price: "₹600", category: "Cakes",    image: cakeButterscotch,tall: true  },
  { name: "Cream Puff Eclairs",  price: "₹180", category: "Pastries", image: pastries,        tall: false },
  { name: "Mango Delight",       price: "₹700", category: "Cakes",    image: cakeMango,       tall: true  },
  { name: "Cupcake Float",       price: "₹120", category: "Pastries", image: cupcakeFloat,    tall: false },
  { name: "Signature Cake",      price: "₹900", category: "Cakes",    image: heroCake,        tall: true  },
];

const CATEGORIES = ["All", "Cakes", "Pastries", "Cookies"];

// distribute items into N columns: item 0→col0, item 1→col1, item 2→col2, item 3→col0 …
function toColumns<T>(items: T[], n: number): T[][] {
  const cols: T[][] = Array.from({ length: n }, () => []);
  items.forEach((item, i) => cols[i % n].push(item));
  return cols;
}

/* ─── Single card ─── */
function PinCard({ item, index }: { item: typeof ALL_ITEMS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const waText = encodeURIComponent(
    `Hi! I'd like to order ${item.name} (${item.price}) from Dream Bakers.`
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="relative overflow-hidden w-full cursor-pointer select-none"
      style={{
        aspectRatio: item.tall ? "3 / 4" : "1 / 1",
        // sharp edges — no border-radius
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setTimeout(() => setHovered(false), 1200)}
    >
      {/* Full-bleed image */}
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 500ms ease",
        }}
      />

      {/* Bottom gradient — always visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.25) 40%, transparent 70%)",
        }}
      />

      {/* Category badge — top left */}
      <div
        className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-semibold text-white/80 uppercase tracking-wider"
        style={{ background: "rgba(0,0,0,0.48)", backdropFilter: "blur(6px)" }}
      >
        {item.category}
      </div>

      {/* Bottom info row */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 gap-2">
        <div className="min-w-0">
          <p
            className="text-white leading-tight truncate"
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            {item.name}
          </p>
          <p
            className="mt-0.5 font-bold text-sm"
            style={{ color: "hsl(356,85%,72%)" }}
          >
            {item.price}
          </p>
        </div>

        {/* WhatsApp button — appears on hover */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0 w-9 h-9 flex items-center justify-center text-white transition-all duration-200"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1) translateY(0)" : "scale(0.7) translateY(4px)",
            background: "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,45%))",
          }}
        >
          <ShoppingBag size={15} />
        </a>
      </div>
    </motion.div>
  );
}

/* ─── Column renderer ─── */
function MasonryGrid({ items, cols, gap }: { items: typeof ALL_ITEMS; cols: number; gap: number }) {
  const columns = toColumns(items, cols);
  return (
    <div className="flex" style={{ gap }}>
      {columns.map((col, ci) => (
        <div key={ci} className="flex-1 flex flex-col" style={{ gap }}>
          <AnimatePresence mode="popLayout">
            {col.map((item, ii) => (
              <PinCard key={item.name} item={item} index={ci * cols + ii} />
            ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ─── Main section ─── */
export default function MenuSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-spacing" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-accent text-primary text-lg mb-2">delicious picks</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">Our Menu</h2>
        </motion.div>

        {/* Filter pills */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 text-sm font-semibold transition-all duration-300"
              style={
                active === cat
                  ? {
                      background: "linear-gradient(135deg, hsl(356,85%,57%), hsl(262,40%,39%))",
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
                    }
                  : {
                      background: "#fff",
                      color: "hsl(262,20%,40%)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid — desktop 3 col, mobile 2 col */}
        <div className="hidden md:block">
          <MasonryGrid items={filtered} cols={3} gap={20} />
        </div>
        <div className="md:hidden">
          <MasonryGrid items={filtered} cols={2} gap={12} />
        </div>
      </div>
    </section>
  );
                    }
