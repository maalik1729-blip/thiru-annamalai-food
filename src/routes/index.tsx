import { useState } from "react";
import { Star, ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/1930c90c-a271-4e38-aea3-71a382d67199.png";
import { Navbar } from "@/components/site/Navbar";
import { ProductsSection, StorySection, WhyUs, Shipping, Testimonials, Contact, Footer } from "@/components/site/sections";
import type { Product, CartItem } from "@/lib/products";
import { useCart } from "@/lib/CartContext";

export default function HomePage() {
  const { cart, cartOpen, setCartOpen, addToCart, updateQty, remove, cartCount } = useCart();

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-prose pt-12 lg:pt-20 pb-20 lg:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Handmade Natural Foods, <span className="text-accent italic">Healthy in Every Piece of Bite</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Authentic traditional recipes from Madurai, Tamil Nadu. Handmade laddus, peanut bars, 
              gingelly bars, and kamarkat crafted with natural ingredients, stone-ground flours, A2 ghee 
              and jaggery. No preservatives. Pure goodness in every bite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/shop" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:gap-3">
                Shop Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#story" className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-medium">
                Explore Our Story
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {["#d97706","#a16207","#65a30d","#ca8a04"].map((c, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-background" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                  <span className="text-sm font-medium ml-1">4.9</span>
                </div>
                <p className="text-xs text-muted-foreground">from happy customers across Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-accent/30 via-gold/20 to-transparent blur-3xl" />
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-warm">
              <img
                src={heroImg}
                alt="Premium handmade Indian laddus on a wooden plate with saffron and marigold"
                width={1536}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-soft hidden md:flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/15 grid place-items-center">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Today's batch</p>
                <p className="text-sm font-medium">Peanut Bar & Laddus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border bg-cream/40 py-5 overflow-hidden">
          <div className="container-prose flex flex-wrap items-center justify-around gap-x-10 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>FSSAI Certified</span><span className="text-accent">·</span>
            <span>No Preservatives</span><span className="text-accent">·</span>
            <span>A2 Ghee Only</span><span className="text-accent">·</span>
            <span>Fair Trade</span><span className="text-accent">·</span>
            <span>Ships in 24h</span>
          </div>
        </div>
      </section>


      <StorySection />
      <WhyUs />
      <Shipping />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
