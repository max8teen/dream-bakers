import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

// ✅ Fixed: proper imports instead of /src/assets/ paths which break in production
import cakeChocolate from "@/assets/cake-chocolate.png";
import cakeRedvelvet from "@/assets/cake-redvelvet.png";
import cupcakeFloat from "@/assets/cupcake-float.png";
import cakeMango from "@/assets/cake-mango.png";
import cookiesAssorted from "@/assets/cookies-assorted.png";
import cakeButterscotch from "@/assets/cake-butterscotch.png";
import pastries from "@/assets/pastries.png";
import heroCake from "@/assets/hero-cake.png";
import bakeryInterior from "@/assets/bakery-interior.jpg";
import branch1 from "@/assets/branch-1.jpg";
import branch2 from "@/assets/branch-2.jpg";
import branch3 from "@/assets/branch-3.jpg";

const galleryItems = [
  { id: 1, src: cakeChocolate, name: "Dark Chocolate Dream" },
  { id: 2, src: cakeRedvelvet, name: "Red Velvet Romance" },
  { id: 3, src: cupcakeFloat, name: "Cupcake Float" },
  { id: 4, src: cakeMango, name: "Mango Bliss Cake" },
  { id: 5, src: cookiesAssorted, name: "Assorted Cookies" },
  { id: 6, src: cakeButterscotch, name: "Butterscotch Layer" },
  { id: 7, src: pastries, name: "Fresh Pastries" },
  { id: 8, src: heroCake, name: "Signature Celebration" },
  { id: 9, src: bakeryInterior, name: "Our Bakery" },
  { id: 10, src: branch1, name: "Station Road Branch" },
  { id: 11, src: branch2, name: "Jintur Road Branch" },
  { id: 12, src: branch3, name: "Vasmat Naka Branch" },
];

const row1 = [...galleryItems.slice(0, 6), ...galleryItems.slice(0, 6), ...galleryItems.slice(0, 6)];
const row2 = [...galleryItems.slice(6, 12), ...galleryItems.slice(6, 12), ...galleryItems.slice(6, 12)];

const CARD_W = 240;
const GAP = 20;
const UNIT = CARD_W + GAP;
const TOTAL = UNIT * 6;

const GalleryCard = ({ item }: { item: typeof galleryItems[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-2xl flex-shrink-0 cursor-pointer"
      style={{
        width: `${CARD_W}px`, height: "300px",
        boxShadow: hovered ? "0 20px 50px -8px rgba(0,0,0,0.25)" : "0 4px 20px -4px rgba(0,0,0,0.10)",
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.src} alt={item.name} className="w-full h-full object-cover" style={{
        transform: hovered ? "scale(1.12)" : "scale(1)",
        transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
      }} />
      <div className="absolute inset-0 flex flex-col justify-end" style={{
        background: hovered
          ? "linear-gradient(to top, rgba(80,20,100,0.85) 0%, rgba(200,50,70,0.3) 55%, transparent 100%)"
          : "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 60%)",
        transition: "background 0.4s ease",
      }}>
        <div className="p-4" style={{
          transform: hovered ? "translateY(0)" : "translateY(14px)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.35s ease, opacity 0.35s ease",
        }}>
          <p className="text-white font-heading text-base leading-tight drop-shadow">{item.name}</p>
          <p className="text-white/60 text-xs mt-0.5 uppercase tracking-wide">Dream Bakers</p>
        </div>
      </div>
      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-sm" style={{
        opacity: hovered ? 1 : 0,
        transform: hovered ? "scale(1)" : "scale(0.5)",
        transition: "all 0.3s ease",
      }}>🎂</div>
    </div>
  );
};

const ScrollRow = ({ items, direction }: { items: typeof row1; direction: "left" | "right" }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(direction === "right" ? -TOTAL : 0);
  const autoRef = useRef<number>(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startPos = useRef(0);
  const SPEED = 0.6;

  const clamp = useCallback((pos: number) => {
    if (direction === "left") {
      if (pos <= -TOTAL) return pos + TOTAL;
      if (pos > 0) return pos - TOTAL;
    } else {
      if (pos >= 0) return pos - TOTAL;
      if (pos < -TOTAL) return pos + TOTAL;
    }
    return pos;
  }, [direction]);

  const applyTransform = useCallback(() => {
    if (rowRef.current) rowRef.current.style.transform = `translateX(${posRef.current}px)`;
  }, []);

  const startAuto = useCallback(() => {
    const tick = () => {
      if (!isDragging.current) {
        posRef.current += direction === "left" ? -SPEED : SPEED;
        posRef.current = clamp(posRef.current);
        applyTransform();
      }
      autoRef.current = requestAnimationFrame(tick);
    };
    autoRef.current = requestAnimationFrame(tick);
  }, [direction, clamp, applyTransform]);

  useEffect(() => {
    startAuto();
    return () => cancelAnimationFrame(autoRef.current);
  }, [startAuto]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startPos.current = posRef.current;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    posRef.current = clamp(startPos.current + delta);
    applyTransform();
  };
  const onMouseUp = () => { isDragging.current = false; };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startPos.current = posRef.current;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const delta = e.touches[0].clientX - startX.current;
    posRef.current = clamp(startPos.current + delta);
    applyTransform();
  };
  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div ref={rowRef} className="flex" style={{ gap: `${GAP}px`, willChange: "transform" }}>
        {items.map((item, i) => <GalleryCard key={`${item.id}-${i}`} item={item} />)}
      </div>
    </div>
  );
};

const Gallery = () => (
  <section id="gallery" className="section-spacing overflow-hidden" style={{
    background: "hsl(15,100%,97%)"
  }}>
    <div className="mb-10 container">
      <motion.div className="text-center"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-accent text-primary text-lg mb-2">our creations</p>
        <h2 className="text-4xl md:text-5xl font-heading">Sweet Gallery</h2>
        <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
          Drag to explore • auto-scrolling • hover to pause
        </p>
      </motion.div>
    </div>
    <div className="mb-5"><ScrollRow items={row1} direction="left" /></div>
    <ScrollRow items={row2} direction="right" />
  </section>
);

export default Gallery;
