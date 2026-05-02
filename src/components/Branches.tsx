import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

const branches = [
  {
    name: "Main Branch — Station Road",
    address: "Near Railway Station, Parbhani 431401",
    timing: "8 AM – 10 PM",
    // ✅ Replace each src with the actual Google Maps embed URL for each branch
    // How to get it: Google Maps → search your location → Share → Embed a map → copy the src URL
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30075.18!2d76.7742!3d19.2704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd01a6b6b6b6b6b%3A0x0!2sParbhani+Railway+Station!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://maps.google.com/?q=Parbhani+Railway+Station,Parbhani,Maharashtra",
  },
  {
    name: "City Center Branch",
    address: "Jintur Road, Opposite SBI Bank, Parbhani",
    timing: "9 AM – 10 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30075.18!2d76.7842!3d19.2604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd01a6b6b6b6b6b%3A0x0!2sParbhani!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://maps.google.com/?q=Jintur+Road+SBI+Bank,Parbhani,Maharashtra",
  },
  {
    name: "New Branch — Vasmat Road",
    address: "Vasmat Naka, Parbhani 431401",
    timing: "9 AM – 9:30 PM",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30075.18!2d76.7642!3d19.2804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd01a6b6b6b6b6b%3A0x0!2sVasmat+Naka+Parbhani!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://maps.google.com/?q=Vasmat+Naka,Parbhani,Maharashtra",
  },
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
          <p className="text-muted-foreground mt-2 text-sm">3 locations across Parbhani</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.name}
              className="group bg-card rounded-[20px] overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* ✅ Google Maps embed instead of image */}
              <div className="relative h-48 overflow-hidden">
                <iframe
                  src={branch.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name}
                  className="w-full h-full"
                />
                {/* MapPin badge over the map */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md pointer-events-none">
                  <MapPin className="text-primary-foreground" size={18} />
                </div>
              </div>

              {/* Branch info */}
              <div className="p-5 md:p-6">
                <h3 className="font-heading text-lg mb-2">{branch.name}</h3>
                <p className="text-muted-foreground text-sm mb-1">{branch.address}</p>
                <div className="flex items-center gap-1.5 text-primary text-sm font-semibold mb-4">
                  <Clock size={14} />
                  {branch.timing}
                </div>
                <a
                  href={branch.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
