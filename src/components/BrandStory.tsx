import { motion } from "framer-motion";
import bakeryInterior from "@/assets/bakery-interior.jpg";

const BrandStory = () => {
  return (
    <section id="about" className="section-spacing" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative rounded-[24px] overflow-hidden card-shadow"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={bakeryInterior}
              alt="Inside Dream Bakers"
              className="w-full h-[400px] lg:h-[520px] object-cover"
              loading="lazy"
              width={1280}
              height={960}
            />
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 max-w-[280px]">
              <p className="font-accent text-primary text-sm mb-1">Est. 2015</p>
              <p className="text-sm font-medium text-foreground">Proudly serving Parbhani for 8+ years</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-accent text-primary text-lg mb-2">our story</p>
            <h2 className="text-4xl md:text-5xl font-heading mb-6">A Dream Born From Passion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What started as a small corner bakery in Parbhani has grown into the city's most cherished
              destination for celebrations. Every cake, every pastry, and every cookie at Dream Bakers is
              made with the finest ingredients, traditional recipes, and a whole lot of heart.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe that great baking brings people together. From grand weddings to simple tea-time
              treats, our mission is to make every moment a little sweeter for the families of Parbhani.
            </p>

            {/* Founder quote */}
            <div className="relative border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground italic text-lg font-heading">
                "Every cake we bake carries a piece of our dream — to bring joy to every home in Parbhani."
              </p>
              <p className="text-muted-foreground text-sm mt-2 font-semibold">— Founder, Dream Bakers</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
