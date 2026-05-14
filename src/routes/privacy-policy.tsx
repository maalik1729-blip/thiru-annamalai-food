import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/sections";

export default function PrivacyPolicyPage() {
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

        <h1 className="text-4xl md:text-5xl font-display mb-4">Privacy Policy</h1>
        <p className="text-xl text-accent mb-8">Your Privacy is Our Priority</p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            At Thiru Annamalai Natural Foods, we value the trust you place in us when choosing our premium handmade products. 
            Protecting your personal information is as important to us as ensuring the quality and authenticity of the products 
            we deliver. This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and your 
            rights when engaging with our business—whether in-store, wholesale, or online.
          </p>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Information We Collect</h2>
            <p>When you interact with us, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Email Address & Phone Number</li>
              <li>Billing & Shipping Address</li>
              <li>Order History & Purchase Preferences</li>
              <li>Payment Details (via secure third-party gateways; we do not store card details)</li>
              <li>Business/Wholesale Information (for B2B clients)</li>
              <li>Device & Browser Data (for website use and analytics)</li>
              <li>Cookies & Tracking Data (for performance improvement)</li>
            </ul>
            <p className="mt-3">We collect only the information necessary to provide you with safe, reliable, and efficient service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Why We Collect Your Information</h2>
            <p>We use your data solely for legitimate business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and fulfilling orders</li>
              <li>Managing deliveries and providing shipment updates</li>
              <li>Offering customer service and support</li>
              <li>Sending optional promotional updates (only if you opt in)</li>
              <li>Improving our product offerings and customer experience</li>
              <li>Wholesale/B2B account management</li>
              <li>Meeting legal, regulatory, and tax compliance requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">How We Protect Your Information</h2>
            <p>We implement strict measures to ensure your data is secure and confidential:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL Encryption for all online interactions</li>
              <li>Secure Payment Processing via PCI-compliant gateways</li>
              <li>Firewall & Access Controls on servers and systems</li>
              <li>Restricted Staff Access to sensitive data</li>
              <li>Regular Reviews of security and privacy practices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Your Rights & Choices</h2>
            <p>As our valued customer, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or updates to your information</li>
              <li>Ask for deletion of your data (subject to legal requirements)</li>
              <li>Withdraw consent from promotional communication at any time</li>
              <li>Raise concerns about data misuse or handling</li>
            </ul>
            <p className="mt-3">We aim to process all verified requests within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Third-Party Sharing</h2>
            <p>We do not sell or rent your personal information. Data may be shared only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Logistics partners (for delivery of orders)</li>
              <li>Payment processors (for secure transactions)</li>
              <li>Government or regulatory authorities (when legally required)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-foreground mt-8 mb-4">Policy Updates</h2>
            <p>
              This Privacy Policy may be updated periodically to reflect changes in law, technology, or business practices. 
              Updates will always be posted on our website with a revised "Last Updated" date.
            </p>
          </section>

          <section className="bg-secondary/50 p-6 rounded-2xl mt-8">
            <h2 className="text-2xl font-display text-foreground mb-4">Contact Us</h2>
            <p className="mb-3">For questions, privacy requests, or concerns, please contact:</p>
            <div className="space-y-2 text-sm">
              <p><strong>Thiru Annamalai Natural Foods</strong></p>
              <p>📍 Flat No - 1760, TNHB Colony, Mela Anuppanadi, Madurai, Tamil Nadu - 625009</p>
              <p>📞 Phone: <a href="tel:+918300377278" className="text-accent hover:underline">+91 83003 77278</a></p>
              <p>📧 Email: <a href="mailto:thiruannamalainaturalfoods90@gmail.com" className="text-accent hover:underline">thiruannamalainaturalfoods90@gmail.com</a></p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Last Updated: January 2025</p>
            <p className="text-xs text-muted-foreground">© 2025 Thiru Annamalai Natural Foods. All Rights Reserved.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
