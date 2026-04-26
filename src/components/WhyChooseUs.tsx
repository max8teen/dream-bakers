import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cake, Users, MapPin, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Happy Customers", emoji: "😊" },
  { icon: MapPin, value: 3, suffix: "", label: "Branches in Parbhani", emoji: "📍" },
  { icon: Cake, value: 100, suffix: "+", label: "Fresh Items Daily", emoji: "🎂" },
  { icon: Star, value: 8, suffix: "+", label: "Years of Trust", emoji: "⭐" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          let start = 0;
          const step = Math.ceil(target / 60);
          const interval = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(interval); }
            else setCount(start);
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading gradient-text">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

const WhyChooseUs = () => {
  return (
    <section className="section-spacing relative overflow-hidden" style={{
      background: "hsl(15,100%,97%)"
    }}>
      {/* Subtle floating dots bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle, hsl(356 85% 57%) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px"
      }} />

      <div className="container relative">
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-accent text-primary text-lg mb-2">why us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">Parbhani Loves Us</h2>
        </motion.div>

        {/* Stats — no boxes, just numbers with hover effects and continuous pulse animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative group flex flex-col items-center justify-center text-center px-6 py-8 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              {/* Hover background ripple */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "linear-gradient(135deg, hsl(356 85% 57% / 0.07), hsl(262 40% 39% / 0.07))" }}
              />

              {/* Always-running pulse ring on icon */}
              <div className="relative mb-4">
                <div
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: "linear-gradient(135deg, hsl(356 85% 57% / 0.25), hsl(262 40% 39% / 0.25))",
                    animationDuration: `${2 + i * 0.4}s`,
                  }}
                />
                <div
                  className="relative w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                  style={{ background: "linear-gradient(135deg, hsl(356 85% 57% / 0.12), hsl(262 40% 39% / 0.12))" }}
                >
                  <stat.icon
                    size={24}
                    className="transition-all duration-300 group-hover:scale-125"
                    style={{ color: "hsl(356, 85%, 57%)" }}
                  />
                </div>
              </div>

              <Counter target={stat.value} suffix={stat.suffix} />

              <p className="text-muted-foreground text-sm mt-2 font-medium group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </p>

              {/* Bottom line that grows on hover */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-16 transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(135deg, hsl(356 85% 57%), hsl(262 40% 39%))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
