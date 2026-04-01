import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductSlideshow from "@/components/ProductSlideshow";
import Donate from "@/components/Donate";

import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services/>
      <ProductSlideshow />
      <Donate />
    </main>
  );
}
