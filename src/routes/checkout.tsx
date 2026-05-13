import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, CreditCard, Wallet, Banknote } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";
import type { CartItem } from "@/lib/products";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    notes: "",
    paymentMethod: "cod", // cod, card, upi
  });

  // Get cart from localStorage
  const [cart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingCost = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save order details to localStorage
    const orderDetails = {
      ...formData,
      items: cart,
      subtotal,
      shipping: shippingCost,
      total,
      orderDate: new Date().toISOString(),
    };
    
    localStorage.setItem("lastOrder", JSON.stringify(orderDetails));
    
    // Clear cart
    localStorage.removeItem("cart");
    
    // Redirect to order confirmation
    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar cartCount={0} onCartClick={() => {}} />
        <div className="container-prose py-20 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-3xl font-display mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some products to your cart before checking out.</p>
          <Link to="/" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cart.length} onCartClick={() => {}} />
      
      <div className="container-prose py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <h1 className="text-4xl md:text-5xl font-display mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <section>
              <h2 className="text-2xl font-display mb-4">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">First Name *</span>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">Last Name *</span>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">Email *</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">Phone *</span>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">Delivery Address</h2>
              <label className="block mb-4">
                <span className="text-sm font-medium mb-2 block">Street Address *</span>
                <input
                  required
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">City *</span>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">State *</span>
                  <input
                    required
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">Pincode *</span>
                  <input
                    required
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium mb-2 block">Country *</span>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="UAE">UAE</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Other">Other</option>
                  </select>
                </label>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-accent cursor-pointer transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent"
                  />
                  <Banknote className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <p className="font-medium">Cash on Delivery (COD)</p>
                    <p className="text-xs text-muted-foreground">Pay when you receive your order</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-accent cursor-pointer transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent"
                  />
                  <CreditCard className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-xs text-muted-foreground">Visa, Mastercard, Rupay accepted</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-lg border-2 border-border hover:border-accent cursor-pointer transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent"
                  />
                  <Wallet className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <p className="font-medium">UPI Payment</p>
                    <p className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm, etc.</p>
                  </div>
                </label>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">Additional Notes</h2>
              <label className="block">
                <span className="text-sm font-medium mb-2 block">Order Notes (Optional)</span>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any special instructions for your order..."
                  className="w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </label>
            </section>
          </form>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-display mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.qty} × ₹{item.price}</p>
                      <p className="text-sm font-medium mt-1">₹{item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">{shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
                </div>
                {subtotal >= 500 && (
                  <p className="text-xs text-accent">🎉 You got free shipping!</p>
                )}
                <div className="flex justify-between text-lg font-display pt-2 border-t border-border">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                onClick={(e) => {
                  const form = document.querySelector('form');
                  if (form) {
                    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                  }
                }}
                className="w-full h-12 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors mt-6"
              >
                Place Order via WhatsApp
              </button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                You'll be redirected to WhatsApp to confirm your order
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
