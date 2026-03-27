import Products from "@/components/Products";
import Footer from "@/app/products/FooterofProduct";
import Navbar from "@/components/Navbar";

export default function ProductsPage() {
    return (
        <main>
            <Navbar />
            <Products />
            <Footer />
        </main>
    );
}