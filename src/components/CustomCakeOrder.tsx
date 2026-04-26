import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cake, Heart, MessageSquare, CalendarDays, Send, Star,
  Upload, User, Phone, ChevronRight, CheckCircle2,
} from "lucide-react";

const cakeSizes = ["0.5 kg", "1 kg", "1.5 kg", "2 kg", "3 kg", "5 kg"];
const flavors = ["Chocolate", "Vanilla", "Red Velvet", "Butterscotch", "Mango", "Strawberry", "Pineapple", "Black Forest"];

const steps = [
  { num: 1, icon: "📝", title: "Fill the Form", desc: "Tell us your requirements" },
  { num: 2, icon: "📞", title: "Get a Call", desc: "We'll confirm the details" },
  { num: 3, icon: "🎂", title: "Enjoy Your Cake", desc: "Fresh delivery on time!" },
];

const CustomCakeOrder = () => {
  const [form, setForm] = useState({
    name: "", phone: "", size: "", flavor: "", message: "", date: "",
  });

  const canSubmit = form.name && form.phone && form.size && form.flavor && form.date;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi! I'd like to order a custom cake:\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n🎂 Size: ${form.size}\n🍰 Flavor: ${form.flavor}\n💬 Message: ${form.message}\n📅 Date: ${form.date}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-soft-grey p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <section id="custom-cake" className="section-spacing" style={{ background: "hsl(15,100%,97%)" }}>
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-accent text-primary text-lg mb-2">custom orders</p>
          <h2 className="text-4xl md:text-5xl font-heading">Order Your Dream Cake</h2>
        </motion.div>

        {/* ── DESKTOP LAYOUT (lg+): side-by-side ── */}
        <motion.div
          className="hidden lg:grid lg:grid-cols-5 gap-0 rounded-[24px] overflow-hidden card-shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Left: How It Works */}
          <div className="lg:col-span-2 gradient-primary p-10 text-primary-foreground flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Star size={20} className="text-yellow-300" />
                <span className="text-sm font-semibold opacity-90">Quick & Easy</span>
              </div>
              <h3 className="font-accent text-4xl mb-8">How It Works</h3>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {s.num}
                    </div>
                    <div>
                      <p className="font-semibold text-base">{s.title}</p>
                      <p className="text-sm opacity-80">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 bg-primary-foreground/15 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} className="text-yellow-300" />
                <span className="font-semibold text-sm">Same Day Available</span>
              </div>
              <p className="text-sm opacity-80">Order before 2 PM for same-day delivery!</p>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card p-10">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                  <User size={14} className="text-muted-foreground" />
                  Your Name <span className="text-primary">*</span>
                </label>
                <input type="text" placeholder="Enter your name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass} required />
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                  <Phone size={14} className="text-muted-foreground" />
                  Phone Number <span className="text-primary">*</span>
                </label>
                <input type="tel" placeholder="Enter phone number" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass} required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                  <Cake size={14} className="text-muted-foreground" />
                  Cake Size <span className="text-primary">*</span>
                </label>
                <select value={form.size} onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className={inputClass + " appearance-none"} required>
                  <option value="">Select size</option>
                  {cakeSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                  <Heart size={14} className="text-muted-foreground" />
                  Flavor <span className="text-primary">*</span>
                </label>
                <select value={form.flavor} onChange={(e) => setForm({ ...form, flavor: e.target.value })}
                  className={inputClass + " appearance-none"} required>
                  <option value="">Select flavor</option>
                  {flavors.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                <MessageSquare size={14} className="text-muted-foreground" />
                Message on Cake
              </label>
              <input type="text" placeholder="e.g., Happy Birthday Sarah!" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass} />
            </div>
            <div className="mb-5">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                <CalendarDays size={14} className="text-muted-foreground" />
                Delivery Date <span className="text-primary">*</span>
              </label>
              <input type="date" value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={inputClass} required />
            </div>
            <div className="mb-6">
              <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                <Upload size={14} className="text-muted-foreground" />
                Reference Image (Optional)
              </label>
              <div className="w-full rounded-xl border-2 border-dashed border-border bg-soft-grey p-6 text-center cursor-pointer hover:border-primary/40 transition-colors">
                <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
              </div>
            </div>
            <button type="submit" disabled={!canSubmit}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold gradient-primary text-primary-foreground disabled:opacity-40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <Send size={16} />
              Send Order via WhatsApp
            </button>
          </form>
        </motion.div>

        {/* ── MOBILE / TABLET LAYOUT (below lg): stacked card design ── */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Steps banner */}
          <div className="gradient-primary rounded-[20px] p-6 mb-5 text-primary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Star size={18} className="text-yellow-300" />
              <span className="text-sm font-semibold opacity-90">Quick & Easy Ordering</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <p className="text-xs font-semibold leading-tight">{s.title}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-300 flex-shrink-0" />
              <p className="text-xs opacity-80">Order before 2 PM for same-day delivery!</p>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-card rounded-[20px] card-shadow overflow-hidden">
            <div className="px-5 pt-5 pb-2 border-b border-border">
              <h3 className="font-heading text-xl text-foreground">Fill Your Order Details</h3>
              <p className="text-sm text-muted-foreground mt-1">We'll call you to confirm</p>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
                    <User size={12} className="text-muted-foreground" />
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input type="text" placeholder="Enter your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-soft-grey px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required />
                </div>
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
                    <Phone size={12} className="text-muted-foreground" />
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input type="tel" placeholder="Enter phone number" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-soft-grey px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required />
                </div>
              </div>

              {/* Flavor pills */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-2">
                  <Heart size={12} className="text-muted-foreground" />
                  Choose Flavor <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {flavors.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setForm({ ...form, flavor: f })}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                        form.flavor === f
                          ? "gradient-primary text-white border-transparent shadow-sm"
                          : "bg-soft-grey border-border text-foreground/70 hover:border-primary/40"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size pills */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-2">
                  <Cake size={12} className="text-muted-foreground" />
                  Cake Size <span className="text-primary">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {cakeSizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm({ ...form, size: s })}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                        form.size === s
                          ? "gradient-primary text-white border-transparent shadow-sm"
                          : "bg-soft-grey border-border text-foreground/70 hover:border-primary/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
                  <MessageSquare size={12} className="text-muted-foreground" />
                  Message on Cake
                </label>
                <input type="text" placeholder="e.g., Happy Birthday Sarah!" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-soft-grey px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold text-foreground mb-1.5">
                  <CalendarDays size={12} className="text-muted-foreground" />
                  Delivery Date <span className="text-primary">*</span>
                </label>
                <input type="date" value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-xl border border-border bg-soft-grey px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold gradient-primary text-primary-foreground disabled:opacity-40 hover:shadow-lg transition-all duration-300 mt-2"
              >
                <Send size={16} />
                Send Order via WhatsApp
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomCakeOrder;
