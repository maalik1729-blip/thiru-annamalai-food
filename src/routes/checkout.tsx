import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag, CreditCard, Wallet, Banknote, HelpCircle, CheckCircle, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";
import type { CartItem } from "@/lib/products";
import { useCurrency } from "@/lib/CurrencyContext";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { currency, formatPrice } = useCurrency();
  const { cart, cartOpen, setCartOpen } = useCart();
  const [showModal, setShowModal] = useState(false);
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shippingCost = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
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
    
    // Format descriptive WhatsApp message for kitchen receipt
    const itemStrings = cart.map(i => `- ${i.name} (${i.weight}) x${i.qty} = ${formatPrice(i.price * i.qty)}`).join("\n");
    const message = `Hello Thiru Annamalai Natural Foods! 🌟\n\nI would like to place an order from your kitchen:\n\n*Customer Details:*\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDelivery Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}, ${formData.country}\n\n*Order Items:*\n${itemStrings}\n\n*Subtotal:* ${formatPrice(subtotal)}\n*Shipping:* ${shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}\n*Total:* ${formatPrice(total)} ${currency.code}\n\n*Payment Choice:* ${formData.paymentMethod.toUpperCase()}\n*Order Notes:* ${formData.notes || "None"}\n\nPlease confirm my dispatch dates and secure payment instructions! Thank you.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918300377278?text=${encodedMessage}`;
    
    setShowModal(false);
    
    // Open WhatsApp in a separate tab
    window.open(whatsappUrl, "_blank");
    
    // Navigate to confirmation page locally
    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-prose py-20 text-center space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center border border-stone-200/50 shadow-xs">
            <ShoppingBag className="h-6 w-6 text-stone-400" />
          </div>
          <div>
            <h1 className="text-3xl font-display text-stone-900 mb-2">Your basket is empty</h1>
            <p className="text-muted-foreground text-sm max-w-[280px] mx-auto">Add some handmade traditional snacks to your cart before proceeding.</p>
          </div>
          <Link to="/" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-sm">
            Browse Popular Treats
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-prose py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-accent mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 text-stone-900 leading-tight">Checkout Details</h1>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Checkout Form */}
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/60 shadow-2xs">
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display text-stone-900 pb-2 border-b border-stone-100">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">First Name *</span>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Last Name *</span>
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Email Address *</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Mobile Phone *</span>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display text-stone-900 pb-2 border-b border-stone-100">Delivery Address</h2>
              <label className="block">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Street Address *</span>
                <input
                  required
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                />
              </label>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">City / Town *</span>
                  <input
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">State / Region *</span>
                  <input
                    required
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Pincode / ZIP Code *</span>
                  <input
                    required
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Country *</span>
                  <select
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full h-11 rounded-lg border border-stone-250 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs"
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

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display text-stone-900 pb-2 border-b border-stone-100">Payment Option</h2>
              <div className="space-y-3">
                <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === "cod" 
                    ? "border-accent bg-accent/5 ring-1 ring-accent/10" 
                    : "border-stone-200 hover:border-stone-300"
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent mt-1"
                  />
                  <Banknote className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1 text-left leading-normal">
                    <p className="font-semibold text-sm text-stone-900">Cash on Delivery (COD)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Pay standard cash when courier delivers fresh box to your doorstep</p>
                  </div>
                </label>

                <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === "upi" 
                    ? "border-accent bg-accent/5 ring-1 ring-accent/10" 
                    : "border-stone-200 hover:border-stone-300"
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === "upi"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent mt-1"
                  />
                  <Wallet className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1 text-left leading-normal">
                    <p className="font-semibold text-sm text-stone-900">UPI Payment (GPay, PhonePe, Paytm)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Kitchen staff will send a direct secure QR/link over WhatsApp</p>
                  </div>
                </label>

                <label className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === "card" 
                    ? "border-accent bg-accent/5 ring-1 ring-accent/10" 
                    : "border-stone-200 hover:border-stone-300"
                }`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="h-4 w-4 text-accent mt-1"
                  />
                  <CreditCard className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1 text-left leading-normal">
                    <p className="font-semibold text-sm text-stone-900">International Credit / Debit Card</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Visa, Mastercard, RuPay payments processed via secure invoice link</p>
                  </div>
                </label>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-display text-stone-900 pb-2 border-b border-stone-100">Additional Instructions</h2>
              <label className="block">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2 block">Order Notes (Optional)</span>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us if this is a gift box, customized sweets, or specify details..."
                  className="w-full rounded-lg border border-stone-250 bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/25 focus:border-accent transition-all duration-300 shadow-2xs resize-none"
                />
              </label>
            </section>
          </form>

          {/* Order Summary card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-2xs">
              <h2 className="text-xl font-display text-stone-900 mb-4 pb-2 border-b border-stone-100">Order Summary</h2>
              
              <div className="space-y-3.5 mb-6 max-h-[260px] overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="h-14 w-14 rounded-lg object-cover border border-stone-200/50" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs text-stone-900 truncate leading-tight">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Qty: {item.qty} × {formatPrice(item.price)}</p>
                      <p className="text-xs font-bold text-stone-800 mt-1">{formatPrice(item.price * item.qty)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-2.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-stone-500 font-medium">Subtotal</span>
                  <span className="font-semibold text-stone-800">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-stone-500 font-medium">Courier Shipping</span>
                  <span className="font-semibold text-stone-850">
                    {shippingCost === 0 ? <span className="text-green-600 font-bold">FREE</span> : formatPrice(shippingCost)}
                  </span>
                </div>
                {subtotal >= 500 && (
                  <div className="p-2.5 bg-green-55/40 rounded-lg border border-green-100 text-[10px] text-green-700 font-semibold leading-normal">
                    🎉 Happy Cooking! You unlocked FREE shipping in India on your order!
                  </div>
                )}
                <div className="flex justify-between text-lg font-display pt-3 border-t border-stone-100 items-end">
                  <span className="text-stone-850 font-bold">Total sum</span>
                  <span className="text-xl font-bold text-accent">{formatPrice(total)} <span className="text-xs font-sans font-normal text-stone-400">{currency.code}</span></span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all shadow-md hover:shadow-lg active:scale-98 text-sm mt-6 flex items-center justify-center gap-2"
              >
                Place Order via WhatsApp
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-[10px] text-stone-400">
                <HelpCircle className="h-3 w-3 shrink-0" />
                <span>Conversational checkout confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Transitional Dialog Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/40 backdrop-blur-xs p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full border border-stone-200 shadow-2xl flex flex-col items-center text-center space-y-6 animate-scale-up">
            <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center border border-green-200">
              <MessageSquare className="h-7 w-7 text-green-650 animate-bounce" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display text-2xl text-stone-950 leading-tight">Redirecting to Kitchen Support</h3>
              <p className="text-xs text-muted-foreground leading-relaxed px-2">
                We confirm orders directly on WhatsApp to guarantee recipe fresh dispatching and custom box assortments.
              </p>
            </div>
            
            <div className="w-full text-left space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200/50 text-xs text-stone-600">
              <div className="flex gap-2.5 items-start">
                <span className="h-5 w-5 rounded-full bg-accent/15 text-accent font-bold text-[10px] grid place-items-center shrink-0 mt-0.5">1</span>
                <p>We will launch WhatsApp web/app with your completed order list and addresses pre-typed.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="h-5 w-5 rounded-full bg-accent/15 text-accent font-bold text-[10px] grid place-items-center shrink-0 mt-0.5">2</span>
                <p>Simply hit send to ping our kitchen staff. We will confirm delivery slots instantly.</p>
              </div>
              <div className="flex gap-2.5 items-start">
                <span className="h-5 w-5 rounded-full bg-accent/15 text-accent font-bold text-[10px] grid place-items-center shrink-0 mt-0.5">3</span>
                <p>We will forward you a secure payment link (UPI, QR, or Card invoice) or verify COD.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 h-11 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-xs font-semibold text-stone-600 active:scale-97 transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirmOrder}
                className="flex-1 h-11 rounded-full bg-green-650 hover:bg-green-700 text-xs font-semibold text-white active:scale-97 transition-all flex items-center justify-center gap-1.5 shadow-sm"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
