import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import branch1 from "@/assets/branch-1.jpg";
import branch2 from "@/assets/branch-2.jpg";
import branch3 from "@/assets/branch-3.jpg";

const branches = [
  { name: "Main Branch — Station Road", address: "Near Railway Station, Parbhani 431401", timing: "8 AM – 10 PM", image: branch1 },
  { name: "City Center Branch", address: "Jintur Road, Opposite SBI Bank, Parbhani", timing: "9 AM – 10 PM", image: branch2 },
  { name: "New Branch — Vasmat Road", address: "Vasmat Naka, Parbhani 431401", timing: "9 AM – 9:30 PM", image: branch3 },
];

const Branches = () => {
  return (
    <section id="branches" className="section-spacing" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent text-primary text-lg mb-2">visit us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">Our Branches</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              className="group bg-card rounded-[20px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={18} />
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-lg mb-2">{branch.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{branch.address}</p>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mb-4">
                  <Clock size={14} />
                  {branch.timing}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold gradient-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
