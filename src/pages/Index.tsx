import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandStory from "@/components/BrandStory";
import Branches from "@/components/Branches";
import CustomCakeOrder from "@/components/CustomCakeOrder";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppBar from "@/components/WhatsAppBar";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <MenuSection />
      <WhyChooseUs />
      <BrandStory />
      <Branches />
      <CustomCakeOrder />
      <Gallery />
      <Testimonials />
      <Footer />
      <WhatsAppBar />
    </div>
  );
};

export default Index;
