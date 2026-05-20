import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CartItem } from "@/lib/products";
import { useCurrency } from "@/lib/CurrencyContext";

export function CartDrawer({
  open,
  onClose,
  items, 
  updateQty,
  remove,
}: {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  updateQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
}) {
  const { currency, formatPrice } = useCurrency();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Save cart to localStorage whenever items change
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  // Shipping calculator parameters
  const shippingThreshold = 500;
  const progressPercent = Math.min((subtotal / shippingThreshold) * 100, 100);
  const isINR = currency.code === "INR";
  const amountLeft = shippingThreshold - subtotal;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-60 bg-cocoa/40 backdrop-blur-xs transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      
      {/* Drawer Container */}
      <aside
        className={`fixed top-0 right-0 z-70 h-full w-full sm:w-[440px] bg-stone-50 border-l border-border shadow-2xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-stone-100/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-accent" />
            <h3 className="font-display text-xl">Your Basket</h3>
            {items.length > 0 && (
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent/15 text-accent">
                {items.reduce((s, i) => s + i.qty, 0)}
              </span>
            )}
          </div>
          <button 
            onClick={onClose} 
            className="h-9 w-9 grid place-items-center rounded-full hover:bg-stone-200 transition-colors active:scale-95"
            aria-label="Close cart"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Dynamic Shipping Calculator Indicator */}
        {items.length > 0 && isINR && (
          <div className="p-4 bg-amber-50/70 border-b border-amber-100 space-y-2">
            <div className="flex justify-between text-xs font-medium">
              {subtotal >= shippingThreshold ? (
                <span className="text-green-700 font-semibold">🎉 You've unlocked FREE shipping in India!</span>
              ) : (
                <span className="text-stone-600">
                  Add <strong className="text-accent">{formatPrice(amountLeft)}</strong> more for <strong>FREE Shipping</strong> (India)
                </span>
              )}
              <span className="text-stone-400">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 rounded-full ${
                  subtotal >= shippingThreshold ? "bg-green-600" : "bg-accent"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Item Grid Scroll area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-5">
              <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200/50 shadow-sm">
                <ShoppingBag className="h-6 w-6 text-stone-400" />
              </div>
              <div>
                <p className="font-semibold text-stone-700 text-base">Your basket is empty</p>
                <p className="text-xs text-muted-foreground mt-1.5 max-w-[280px] mx-auto">
                  Explore our selection of premium handmade laddus, peanut bars, and traditional treats crafted in Madurai.
                </p>
              </div>
              <button 
                onClick={onClose}
                className="inline-flex items-center gap-2 h-10 px-6 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/95 transition-all hover:gap-3"
              >
                Start Shopping <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            items.map((i) => (
              <div 
                key={i.id} 
                className="flex gap-4 p-4 rounded-2xl bg-white border border-stone-200/60 shadow-xs hover:shadow-sm transition-all duration-300 relative group"
              >
                <img 
                  src={i.image} 
                  alt={i.name} 
                  className="h-18 w-18 rounded-xl object-cover border border-stone-200/40 bg-stone-50" 
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <p className="font-medium text-sm text-stone-900 truncate leading-tight">{i.name}</p>
                      <button 
                        onClick={() => remove(i.id)} 
                        className="text-stone-400 hover:text-red-500 transition-colors self-start ml-2 opacity-60 hover:opacity-100"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{i.weight} · {formatPrice(i.price)}</p>
                  </div>
                  
                  <div className="mt-2.5 flex items-center justify-between">
                    {/* Inline Counter */}
                    <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-full p-0.5">
                      <button 
                        onClick={() => updateQty(i.id, Math.max(1, i.qty - 1))} 
                        className="h-6 w-6 grid place-items-center rounded-full hover:bg-stone-200 transition-colors active:scale-90"
                      >
                        <Minus className="h-2.5 w-2.5" />
                      </button>
                      <span className="text-xs font-semibold w-5 text-center text-stone-800">{i.qty}</span>
                      <button 
                        onClick={() => updateQty(i.id, i.qty + 1)} 
                        className="h-6 w-6 grid place-items-center rounded-full hover:bg-stone-200 transition-colors active:scale-90"
                      >
                        <Plus className="h-2.5 w-2.5" />
                      </button>
                    </div>
                    
                    {/* Item Total */}
                    <span className="text-sm font-semibold text-stone-900">{formatPrice(i.price * i.qty)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Area */}
        {items.length > 0 && (
          <div className="p-5 border-t border-border bg-stone-100/50 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-xs text-stone-400 uppercase tracking-wider font-semibold block">Subtotal</span>
                <span className="text-xs text-muted-foreground">Taxes included</span>
              </div>
              <span className="text-2xl font-display font-semibold text-stone-900">
                {formatPrice(subtotal)} <span className="text-sm font-sans font-normal text-stone-500">{currency.code}</span>
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground leading-normal">
              {isINR 
                ? "Delivery: FREE on orders over ₹500. Otherwise standard ₹50 applies." 
                : "International shipping charges calculated based on delivery country at checkout."}
            </p>
            
            <Link
              to="/checkout"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full h-13 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all hover:gap-3 shadow-md hover:shadow-lg active:scale-98 text-center text-sm"
            >
              Secure Checkout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
