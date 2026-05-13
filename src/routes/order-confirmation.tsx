import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, Package, MapPin, CreditCard, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";
import { useCurrency } from "@/lib/CurrencyContext";

export default function OrderConfirmationPage() {
  const [searchParams] = useSearchParams();
  const { currency, formatPrice } = useCurrency();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Get order details from localStorage
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-prose py-20 text-center">
          <h1 className="text-3xl font-display mb-4">No order found</h1>
          <Link to="/" className="text-accent hover:underline">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container-prose py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display mb-4">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Thank you for your order, {orderDetails.firstName}!
          </p>
          <p className="text-sm text-muted-foreground">
            Order Number: <span className="font-mono font-medium text-foreground">{orderNumber}</span>
          </p>
        </div>

        {/* Order Details */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Delivery Information */}
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-accent mt-1" />
              <div>
                <h3 className="font-display text-lg mb-2">Delivery Address</h3>
                <p className="text-sm text-muted-foreground">
                  {orderDetails.firstName} {orderDetails.lastName}<br />
                  {orderDetails.address}<br />
                  {orderDetails.city}, {orderDetails.state} - {orderDetails.pincode}<br />
                  {orderDetails.country}<br />
                  Phone: {orderDetails.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-accent mt-1" />
              <div>
                <h3 className="font-display text-lg mb-2">Payment Method</h3>
                <p className="text-sm text-muted-foreground">
                  {orderDetails.paymentMethod === "cod" && "Cash on Delivery (COD)"}
                  {orderDetails.paymentMethod === "card" && "Credit/Debit Card"}
                  {orderDetails.paymentMethod === "upi" && "UPI Payment"}
                </p>
                {orderDetails.paymentMethod === "cod" && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Please keep exact change ready for delivery
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <div className="flex items-start gap-3 mb-4">
              <Package className="h-5 w-5 text-accent mt-1" />
              <div className="flex-1">
                <h3 className="font-display text-lg mb-4">Order Items</h3>
                <div className="space-y-3">
                  {orderDetails.items.map((item: any) => (
                    <div key={item.id} className="flex gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.qty} × {formatPrice(item.price)}
                        </p>
                        <p className="text-sm font-medium mt-1">{formatPrice(item.price * item.qty)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <h3 className="font-display text-lg mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(orderDetails.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">
                  {orderDetails.shipping === 0 ? "FREE" : formatPrice(orderDetails.shipping)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-display pt-2 border-t border-border">
                <span>Total</span>
                <span>{formatPrice(orderDetails.total)} {currency.code}</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
            <h3 className="font-display text-lg mb-3">What happens next?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">1.</span>
                <span>We'll send you an order confirmation email shortly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">2.</span>
                <span>Your order will be prepared and packed within 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">3.</span>
                <span>You'll receive tracking information once shipped</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">4.</span>
                <span>Delivery within 3-5 business days</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              to="/"
              className="flex-1 h-12 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 h-12 rounded-full border border-border bg-background hover:bg-secondary transition-colors font-medium"
            >
              Print Order Details
            </button>
          </div>

          {/* Contact Support */}
          <div className="text-center pt-6 text-sm text-muted-foreground">
            <p>
              Need help? Contact us at{" "}
              <a href="tel:+917708443362" className="text-accent hover:underline">
                +91 77084 43362
              </a>{" "}
              or{" "}
              <a href="mailto:info@thiruannamalai.com" className="text-accent hover:underline">
                info@thiruannamalai.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
