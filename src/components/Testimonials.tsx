import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Deshmukh", text: "Best cakes in Parbhani! The red velvet cake was absolutely divine. Perfect for my daughter's birthday!" },
  { name: "Amit Patil", text: "Dream Bakers never disappoints. Fresh pastries every single day. My family's go-to bakery for years." },
  { name: "Sneha Kulkarni", text: "Ordered a 3-tier wedding cake and it was stunning! Everyone at the reception was impressed." },
  { name: "Rajesh Jadhav", text: "The chocolate truffle here is on another level. Clean bakery, friendly staff, fair prices." },
  { name: "Meera Shinde", text: "My kids love the cupcakes! We visit Dream Bakers every weekend. It's become our family tradition." },
  { name: "Vikram Rathod", text: "Excellent custom cakes for every occasion. The WhatsApp ordering makes it super convenient." },
];

const Testimonials = () => {
  const doubled = [...reviews, ...reviews];

  return (
    <section className="section-spacing overflow-hidden" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container mb-12">
        <div className="text-center">
          <p className="font-accent text-primary text-lg mb-2">testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">What People Say</h2>
          <div className="inline-flex items-center gap-2 mt-4 bg-card rounded-full px-5 py-2 card-shadow">
            <Star className="fill-primary text-primary" size={18} />
            <span className="text-sm font-semibold">4.8 on Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="flex animate-marquee">
        {doubled.map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] mx-3 bg-card rounded-[20px] p-6 card-shadow"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="fill-primary text-primary" size={14} />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
            <p className="font-heading text-base">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
