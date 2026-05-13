import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Thiru Annamalai Natural Foods" },
      { name: "description", content: "Read our terms and conditions for using our services." },
    ],
  }),
  component: TermsConditionsPage,
});

function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={0} onCartClick={() => {}} />
      
      <div className="container-prose py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display mb-4">Terms & Conditions</h1>
        <p className="text-xl text-accent mb-8">Please read these terms carefully before using our services</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            Welcome to Thiru Annamalai Natural Foods. By accessing our website, making a purchase, or engaging with our services, 
            you agree to comply with and be bound by the following Terms & Conditions. These terms govern all orders, sales, and 
            interactions with Thiru Annamalai Natural Foods. If you do not agree with these terms, we request you to discontinue 
            using our services.
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">1. General Use of Website & Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>By shopping with us, you confirm that you are at least 18 years old, or using our services under the supervision of a parent/guardian.</li>
              <li>You agree to provide accurate and complete details when placing orders.</li>
              <li>Any misuse, fraudulent activity, or violation of these terms may result in suspension of service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">2. Products & Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We specialize in premium handmade laddus, peanut bars, gingelly bars, kamarkat, and natural food products.</li>
              <li>All product descriptions are provided as accurately as possible, but minor variations in color, taste, or texture may occur since products are natural and handmade.</li>
              <li>Prices are listed in Indian Rupees (INR ₹) and may change due to seasonal availability, market fluctuations, or business policy.</li>
              <li>We reserve the right to correct any errors in product listings, descriptions, or pricing, and may cancel affected orders with refunds where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">3. Orders & Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are confirmed only after successful payment.</li>
              <li>We accept UPI, debit/credit cards, net banking, and wallets via secure, PCI-compliant gateways.</li>
              <li>Thiru Annamalai Natural Foods does not store your payment details.</li>
              <li>In the event of duplicate charges or transaction errors, customers should contact our support team immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are shipped within India and internationally via trusted courier/logistics partners.</li>
              <li>We ship worldwide to USA, Canada, UK, Europe, Middle East, Australia, and many other countries.</li>
              <li>Delivery timelines vary based on location and will be shared at checkout.</li>
              <li>Tracking details are provided once the order is dispatched.</li>
              <li>International orders may be subject to customs duties and taxes based on destination country.</li>
              <li>We are not liable for courier delays, customs clearance delays, force majeure events, or customer unavailability during delivery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">5. Cancellations & Returns</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders may be cancelled within 2 hours of purchase, provided they have not been packed or shipped.</li>
              <li>Returns are accepted only in cases of:
                <ul className="list-circle pl-6 mt-2 space-y-1">
                  <li>Damaged or tampered products on delivery</li>
                  <li>Wrong items shipped</li>
                  <li>Verified quality concerns</li>
                </ul>
              </li>
              <li>For details, please refer to our <Link to="/cancellation-refund" className="text-accent hover:underline">Cancellation & Refund Policy</Link>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">6. Customer Responsibilities</h2>
            <p>By engaging with us, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide false or incomplete order/delivery details</li>
              <li>Resell our products without prior written approval</li>
              <li>Misuse our brand name or content</li>
              <li>Raise fraudulent claims or chargebacks</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">7. Intellectual Property</h2>
            <p>
              All product images, content, designs, and branding are the intellectual property of Thiru Annamalai Natural Foods. 
              Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
            <p>Thiru Annamalai Natural Foods shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Natural variations in taste, texture, or appearance of products</li>
              <li>Delays caused by courier or logistics providers</li>
              <li>Indirect or incidental damages arising from product use beyond its intended purpose</li>
            </ul>
            <p className="mt-3">Our liability is limited strictly to the value of the product purchased.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions are governed by the laws of India. Any disputes shall fall under the jurisdiction of 
              the courts in Madurai, Tamil Nadu.
            </p>
          </section>

          <section className="bg-secondary/50 p-6 rounded-2xl mt-8">
            <h2 className="text-2xl font-display text-foreground mb-4">10. Contact Us</h2>
            <p className="mb-3">For assistance or queries, please contact:</p>
            <div className="space-y-2 text-sm">
              <p><strong>Thiru Annamalai Natural Foods</strong></p>
              <p>📍 Flat No - 1760, TNHB Colony, Mela Anuppanadi, Madurai, Tamil Nadu - 625009</p>
              <p>📞 Phone: <a href="tel:+917708443362" className="text-accent hover:underline">+91 77084 43362</a></p>
              <p>📧 Email: <a href="mailto:thiruannamalainaturalfoods90@gmail.com" className="text-accent hover:underline">thiruannamalainaturalfoods90@gmail.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
