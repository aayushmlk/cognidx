import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProductSlideshow from "@/components/ProductSlideshow";
import BrandClient from "@/components/BrandClient";
import Donate from "@/components/Donate";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ProductSlideshow />
      <BrandClient />
      <Donate />
    </main>
  );
}
