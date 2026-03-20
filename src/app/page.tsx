import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductSlideshow from "@/components/ProductSlideshow";
import Products from "@/components/Products";
import Donate from "@/components/Donate";
import GenzBanner from "@/components/GenzBanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/CTA Button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FloatingCTA/>
      <Hero />
      <About />
      <ProductSlideshow />
      <Donate />
      <GenzBanner />
      <Footer />
    </main>
  );
}
