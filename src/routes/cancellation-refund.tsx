import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";

export const Route = createFileRoute("/cancellation-refund")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy - Thiru Annamalai Natural Foods" },
      { name: "description", content: "Learn about our cancellation and refund policy for orders." },
    ],
  }),
  component: CancellationRefundPage,
});

function CancellationRefundPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={0} onCartClick={() => {}} />
      
      <div className="container-prose py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-display mb-4">Cancellation & Refund Policy</h1>
        <p className="text-xl text-accent mb-8">Simple, Fair & Transparent</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            At Thiru Annamalai Natural Foods, we take pride in providing high-quality handmade products crafted with care. 
            While we strive to ensure that every order reaches you fresh and intact, we understand that cancellations or 
            issues may occasionally arise. This policy outlines how we handle cancellations, returns, and refunds.
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Order Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cancellation Window:</strong> Orders may be cancelled within 2 hours of purchase, provided they have not yet been packed or dispatched.</li>
              <li>Once an order is processed or handed over to the courier, cancellations are no longer possible due to the nature of food products.</li>
              <li>Customers must share their Order ID when requesting cancellation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Returns & Replacements</h2>
            <p>Returns are accepted only in the following cases:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Products are damaged or tampered during delivery.</li>
              <li>The wrong product was delivered.</li>
              <li>There is a verified quality or packaging defect.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Conditions:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Return requests must be raised within 48 hours of delivery.</li>
              <li>The product must remain sealed, unused, and in original packaging.</li>
              <li>Customers must share clear photos/videos of the issue for verification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Non-Returnable Items</h2>
            <p>For reasons of food safety and hygiene, we cannot accept returns for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opened or partially consumed products (laddus, bars, kamarkat, etc.).</li>
              <li>Products damaged due to improper storage after delivery.</li>
              <li>Items returned without authorization.</li>
              <li>Bulk/wholesale orders, unless a verified defect is confirmed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once a claim is verified and approved, refunds are initiated within 3–5 business days.</li>
              <li>Refunds are processed via the original payment method (UPI, card, bank transfer, etc.).</li>
              <li>Depending on the payment provider, refunds may take 5–10 business days to reflect in your account.</li>
              <li>Customers may also choose store credit or product replacement instead of a refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Exceptions</h2>
            <p>Refunds and cancellations will not apply in cases where:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery is delayed due to courier or logistics issues beyond our control.</li>
              <li>Incorrect or incomplete delivery details were provided by the customer.</li>
              <li>Natural variations in taste, color, or size occur (as products are natural and handmade).</li>
            </ul>
          </section>

          <section className="bg-secondary/50 p-6 rounded-2xl mt-8">
            <h2 className="text-2xl font-display text-foreground mb-4">Need Help?</h2>
            <p className="mb-3">For cancellation or refund support, please contact:</p>
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
