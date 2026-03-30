import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductSlideshow from "@/components/ProductSlideshow";
import Products from "@/components/Products";
import Donate from "@/components/Donate";
import GenzBanner from "@/components/GenzBanner";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import {Contact} from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <ProductSlideshow />
      <Donate />
      <Contact />
      <Footer />
    </main>
  );
}
