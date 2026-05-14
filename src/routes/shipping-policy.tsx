import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";

export default function ShippingPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={0} onCartClick={() => {}} />
      
      <div className="container-prose py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display mb-4">Shipping Policy</h1>
        <p className="text-xl text-accent mb-8">Freshness Delivered with Care</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            At Thiru Annamalai Natural Foods, we are committed to ensuring that your premium handmade products 
            reach you in perfect condition. This Shipping Policy explains how we process orders, handle packaging, 
            and manage deliveries for both retail and wholesale customers.
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Order Processing Time</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are processed within 2–4 business days of payment confirmation.</li>
              <li>Orders placed on Sundays or public holidays will be processed on the next working day.</li>
              <li>Bulk/wholesale orders may require longer preparation time depending on quantity and product availability. Customers will be informed in advance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Shipping Destinations & Delivery Timelines</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Domestic Shipping (India)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Madurai City:</strong> Same day to 1 business day after dispatch</li>
              <li><strong>Tamil Nadu:</strong> 2–4 business days after dispatch</li>
              <li><strong>South India:</strong> 3–6 business days after dispatch</li>
              <li><strong>Metro Cities:</strong> 3–6 business days after dispatch</li>
              <li><strong>Non-Metro Cities & Semi-Urban Areas:</strong> 5–10 business days after dispatch</li>
              <li><strong>Remote/Rural Areas:</strong> 7–12 business days after dispatch</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">International Shipping</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>USA & Canada:</strong> 7–12 business days via DHL/FedEx Express</li>
              <li><strong>UK & Europe:</strong> 7–14 business days via DHL/FedEx Express</li>
              <li><strong>Middle East (UAE, Saudi Arabia, Qatar):</strong> 5–10 business days</li>
              <li><strong>Australia & New Zealand:</strong> 10–15 business days</li>
              <li><strong>Singapore, Malaysia, Hong Kong:</strong> 6–10 business days</li>
              <li><strong>Rest of World:</strong> 10–20 business days depending on location</li>
              <li>Timelines depend on the destination country, customs clearance, and shipping partner schedules.</li>
              <li>Tracking information provided for all international shipments.</li>
              <li>Customs duties and taxes may apply based on destination country regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Shipping Charges</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Charges are calculated based on order weight, packaging type, and delivery location.</li>
              <li>Shipping costs will be displayed clearly at checkout before payment.</li>
              <li><strong>India:</strong> Free shipping on orders above ₹500. Standard charges apply for orders below ₹500.</li>
              <li><strong>International:</strong> Shipping charges vary by destination and weight. Calculated at checkout.</li>
              <li>Express shipping options available for faster delivery worldwide.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Packaging & Handling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Products are packed in airtight, food-grade, tamper-proof packaging to ensure freshness.</li>
              <li>Laddus and bars are sealed to maintain shelf life and avoid contamination.</li>
              <li>Each product is packed in moisture-proof containers to preserve quality and taste.</li>
              <li>International orders are vacuum-sealed and double-wrapped for long-distance transit.</li>
              <li>Temperature-stable packaging used for international shipments to maintain freshness.</li>
              <li>Bulk/wholesale orders are carefully secured for safe long-distance transit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Tracking Your Order</h2>
            <p>Once dispatched, customers will receive:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A tracking ID via SMS/email</li>
              <li>A real-time tracking link to monitor shipment progress</li>
            </ul>
            <p className="mt-3">Please allow 24–48 hours for tracking details to update after dispatch.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Delays & Exceptions</h2>
            <p>While we strive for timely delivery, certain factors may cause delays, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Courier or logistics partner disruptions</li>
              <li>Extreme weather conditions</li>
              <li>Regional holidays or strikes</li>
              <li>Customs delays for international orders</li>
            </ul>
            <p className="mt-3">In such cases, our support team will provide updates and assistance.</p>
          </section>

          <section className="bg-secondary/50 p-6 rounded-2xl mt-8">
            <h2 className="text-2xl font-display text-foreground mb-4">Need Help?</h2>
            <p className="mb-3">For shipping-related questions or support, please contact:</p>
            <div className="space-y-2 text-sm">
              <p><strong>Thiru Annamalai Natural Foods</strong></p>
              <p>📍 Flat No - 1760, TNHB Colony, Mela Anuppanadi, Madurai, Tamil Nadu - 625009</p>
              <p>📞 Phone: <a href="tel:+918300377278" className="text-accent hover:underline">+91 83003 77278</a></p>
              <p>📧 Email: <a href="mailto:thiruannamalainaturalfoods90@gmail.com" className="text-accent hover:underline">thiruannamalainaturalfoods90@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
