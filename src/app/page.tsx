import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollFade from "@/components/ScrollFade";
import About from "@/components/About";
import ProductSlideshow from "@/components/ProductSlideshow";
import Products from "@/components/Products";
import Donate from "@/components/Donate";
import GenzBanner from "@/components/GenzBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollFade />
      <About />
      <ProductSlideshow />
      <Products />
      <Donate />
      <GenzBanner />
      <Footer />
    </main>
  );
}
