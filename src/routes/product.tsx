import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Minus, Plus, Package, Clock, Leaf, Award } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";
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
  
  const product = products.find(p => p.id === id);

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-prose py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium uppercase tracking-wider">
                {product.badge}
              </span>
            )}
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-4xl md:text-5xl font-display mb-2">{product.name}</h1>
              <p className="text-lg text-accent mb-4">{product.tagline}</p>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="text-4xl font-display mb-8">{formatPrice(product.price)}</div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Weight</p>
                    <p className="text-sm text-muted-foreground">{product.weight}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Shelf Life</p>
                    <p className="text-sm text-muted-foreground">{product.shelfLife}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Ingredients</p>
                    <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 rounded-full border border-border hover:bg-secondary flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 rounded-full border border-border hover:bg-secondary flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full h-14 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart - {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-display text-xl mb-4">Why Choose This Product?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span>100% Natural</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span>No Preservatives</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Handmade</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-accent" />
                  <span>Traditional Recipe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-3xl font-display mb-6">About This Product</h2>
          <div className="prose prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              {product.name} is crafted using traditional methods passed down through generations. 
              Made with premium quality ingredients including {product.ingredients.toLowerCase()}, 
              each piece is carefully handmade to ensure authentic taste and texture.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our products contain no artificial preservatives, colors, or flavors. We use only 
              natural ingredients, A2 ghee, and jaggery to create healthy snacks that you can 
              enjoy guilt-free. Perfect for festivals, gifting, or as a daily nutritious snack.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
