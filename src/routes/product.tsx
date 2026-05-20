import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Minus, Plus, Package, Clock, Leaf, Award } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer, ProductCard } from "@/components/site/sections";
import { products } from "@/lib/products";
import { useCurrency } from "@/lib/CurrencyContext";
import { useCart } from "@/lib/CartContext";
import { toast } from "sonner";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("ingredients");
  
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-prose py-20 text-center">
          <h1 className="text-3xl font-display mb-4">Product not found</h1>
          <Link to="/shop" className="text-accent hover:underline">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Navbar />
      
      <div className="container-prose py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
 
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}
            <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-stone-200/50 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/60 shadow-2xs">
            <div>
              <h1 className="text-3xl md:text-4xl font-display mb-2 text-stone-900 leading-tight">{product.name}</h1>
              <p className="text-base text-accent font-medium mb-4">{product.tagline}</p>
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent animate-pulse-once"
                          : "text-stone-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                  {product.rating} / 5.0 rating
                </span>
                <span className="text-stone-300">|</span>
                <span className="text-xs text-stone-400">{product.reviews} customer reviews</span>
              </div>

              <div className="text-3xl font-display text-stone-900 font-bold mb-6">{formatPrice(product.price)}</div>

              {/* Quantity Selector */}
              <div className="mb-6 bg-stone-50/50 p-4 rounded-xl border border-stone-200/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-sm font-semibold text-stone-700">Select Quantity</span>
                <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-full p-1 shadow-2xs self-start sm:self-auto">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 rounded-full hover:bg-stone-100 flex items-center justify-center active:scale-90 transition-transform"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-base font-semibold w-8 text-center text-stone-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 rounded-full hover:bg-stone-100 flex items-center justify-center active:scale-90 transition-transform"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full h-13 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 text-sm"
              >
                <ShoppingBag className="h-4.5 w-4.5" />
                Add to Cart · {formatPrice(product.price * quantity)}
              </button>

              {/* Official FSSAI & Certification trust badges */}
              <div className="mt-5 p-4 rounded-xl bg-green-50/70 border border-green-100 flex items-center gap-3 shadow-3xs">
                <div className="h-10 w-10 shrink-0 bg-white border border-green-200/80 rounded-lg flex items-center justify-center font-bold text-[9px] text-green-700 tracking-wider">
                  FSSAI
                </div>
                <div className="text-xs leading-normal">
                  <p className="font-semibold text-green-800">Certified Handcrafted Safe & Preservative-Free</p>
                  <p className="text-green-600/90 font-medium">Registered FSSAI Unit: 22423588000124</p>
                </div>
              </div>

              {/* Premium Modular Details Tabs */}
              <div className="mt-8 border-b border-stone-200">
                <div className="flex gap-5 text-xs sm:text-sm overflow-x-auto pb-0">
                  {[
                    { id: "ingredients", label: "Ingredients & Allergen" },
                    { id: "storage", label: "Shelf Life & Storage" },
                    { id: "heritage", label: "Heritage & Process" }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2.5 font-bold transition-all whitespace-nowrap relative shrink-0 ${
                        activeTab === tab.id 
                          ? "text-accent" 
                          : "text-stone-400 hover:text-stone-600"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full animate-fade-in" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tab Contents Panel */}
              <div className="py-4 text-xs sm:text-sm leading-relaxed text-stone-650 min-h-[100px]">
                {activeTab === "ingredients" && (
                  <div className="space-y-2 bg-stone-50/40 p-4 rounded-xl border border-stone-200/30">
                    <p><strong className="text-stone-700 font-semibold">Primary Ingredients:</strong> {product.ingredients}</p>
                    <p className="text-xs text-stone-400 mt-1">Allergen advisory: Contains ghee/milk proteins and nuts. Processed in a traditional home kitchen handling seeds.</p>
                  </div>
                )}
                {activeTab === "storage" && (
                  <div className="space-y-2 bg-stone-50/40 p-4 rounded-xl border border-stone-200/30">
                    <p><strong className="text-stone-700 font-semibold">Shelf Life:</strong> Guaranteed fresh for {product.shelfLife} from delivery.</p>
                    <p><strong className="text-stone-700 font-semibold">Optimal Storage:</strong> Transfer to an airtight stainless-steel container. Do not refrigerate; keep dry.</p>
                  </div>
                )}
                {activeTab === "heritage" && (
                  <div className="space-y-2 bg-stone-50/40 p-4 rounded-xl border border-stone-200/30">
                    <p>Handcrafted daily by artisan cooks in Madurai, Tamil Nadu. Prepared using certified stone-ground grains, organic jaggery, and unadulterated grass-fed A2 ghee. No food colors or binders used.</p>
                  </div>
                )}
              </div>

            </div>

            {/* Quick trust checklist */}
            <div className="mt-6 pt-5 border-t border-stone-100">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  <span>100% Organic Flours</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  <span>Zero Preservatives</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  <span>Pure A2 Ghee Only</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
                  <Award className="h-3.5 w-3.5 text-accent" />
                  <span>Traditional Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand narrative block */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-display mb-4 text-stone-900">About Our Handcrafted Recipes</h2>
          <div className="prose prose-stone leading-relaxed text-sm sm:text-base text-stone-600 space-y-4">
            <p>
              {product.name} is an authentic culinary heritage sweet rolled by hand in Madurai. 
              Made with pure ingredients including {product.ingredients.toLowerCase()}, 
              every piece is rolled individually with care to ensure the ideal rich taste and crumbly texture.
            </p>
            <p>
              We take pride in our zero-compromise approach to clean eating. This product contains absolutely no chemical colors, commercial thickeners, or artificial sweeteners. Perfect for children, gifting during festivals, or as a high-nutrition wellness snack for the entire family.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Buy Bar on Mobile Viewports */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-4 flex items-center justify-between gap-3 shadow-lg animate-fade-in">
        <div>
          <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">Subtotal</span>
          <span className="text-lg font-bold text-stone-900">{formatPrice(product.price * quantity)}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Compact Qty Picker */}
          <div className="flex items-center bg-stone-50 border border-stone-200 rounded-full p-0.5">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))} 
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-stone-200 text-stone-600"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="text-sm font-semibold w-5 text-center text-stone-850">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)} 
              className="h-8 w-8 grid place-items-center rounded-full hover:bg-stone-200 text-stone-600"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="h-10 px-5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all text-xs flex items-center gap-1.5 shadow-sm active:scale-97"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-stone-200/50 bg-cream/30 py-16">
        <div className="container-prose">
          <h2 className="text-2xl sm:text-3xl font-display mb-8 text-stone-900">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} p={p} onAdd={addToCart} formatPrice={formatPrice} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
