import { Navbar } from "@/components/site/Navbar";
import { Footer, ProductsSection } from "@/components/site/sections";
import { useCart } from "@/lib/CartContext";
import { useEffect } from "react";

export default function ShopPage() {
  const { addToCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-10">
        <ProductsSection onAdd={addToCart} />
      </div>
      <Footer />
    </div>
  );
}
