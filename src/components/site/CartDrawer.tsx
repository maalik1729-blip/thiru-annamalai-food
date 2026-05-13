import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { CartItem } from "@/lib/products";

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
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Save cart to localStorage whenever items change
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-cocoa/40 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-background border-l border-border shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-display text-xl">Your basket</h3>
          <button onClick={onClose} className="h-9 w-9 grid place-items-center rounded-full hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 h-[calc(100%-13rem)]">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-12">
              Your basket is empty. Start with our handmade laddus, bars, or kamarkat.
            </p>
          )}
          {items.map((i) => (
            <div key={i.id} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
              <img src={i.image} alt={i.name} className="h-16 w-16 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{i.name}</p>
                <p className="text-xs text-muted-foreground">₹{i.price} · {i.weight}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button onClick={() => updateQty(i.id, Math.max(1, i.qty - 1))} className="h-6 w-6 grid place-items-center rounded border border-border">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm w-6 text-center">{i.qty}</span>
                  <button onClick={() => updateQty(i.id, i.qty + 1)} className="h-6 w-6 grid place-items-center rounded border border-border">
                    <Plus className="h-3 w-3" />
                  </button>
                  <button onClick={() => remove(i.id)} className="ml-auto text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border bg-background space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">₹{subtotal} INR</span>
          </div>
          <p className="text-xs text-muted-foreground">Delivery charges calculated at checkout.</p>
          <Link
            to="/checkout"
            onClick={onClose}
            className="block w-full h-12 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 text-center leading-[3rem]"
          >
            Secure Checkout →
          </Link>
        </div>
      </aside>
    </>
  );
}
