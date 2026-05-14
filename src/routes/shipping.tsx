import { Navbar } from "@/components/site/Navbar";
import { Footer, Shipping } from "@/components/site/sections";
import { useEffect } from "react";

export default function ShippingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-10">
        <Shipping />
      </div>
      <Footer />
    </div>
  );
}
