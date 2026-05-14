import { Star, Leaf, Hand, ShieldCheck, Plane, CreditCard, Package, MessageCircle, Mail, Instagram, Facebook, Youtube, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products, type Product } from "@/lib/products";
import { useCurrency } from "@/lib/CurrencyContext";
import aboutImg from "@/assets/about-tamil-man.png";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i <= Math.round(rating) ? "fill-accent text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export function ProductsSection({ onAdd }: { onAdd: (p: Product) => void }) {
  const { formatPrice } = useCurrency();
  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-background to-cream/40">
      <div className="container-prose">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-2">The Collection</p>
            <h2 className="text-4xl md:text-5xl font-display max-w-xl">Premium laddus, bars & healthy snacks, handmade daily.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Made fresh daily in our Madurai kitchen. Each product crafted with traditional recipes and natural ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-warm transition-all duration-500 flex flex-col">
              <Link to={`/product/${p.id}`} className="relative aspect-square overflow-hidden bg-secondary block">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={896}
                  height={896}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold text-primary">
                    {p.badge}
                  </span>
                )}
              </Link>
              <div className="p-5 space-y-3 flex-1 flex flex-col">
                <div>
                  <Link to={`/product/${p.id}`}>
                    <h3 className="font-display text-xl hover:text-accent transition-colors">{p.name}</h3>
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">{p.tagline}</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Stars rating={p.rating} />
                  <span className="text-muted-foreground">{p.rating} · {p.reviews}</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1 pt-2 border-t border-border flex-1">
                  <li><span className="text-foreground/70">Weight:</span> {p.weight}</li>
                  <li><span className="text-foreground/70">Shelf life:</span> {p.shelfLife}</li>
                  <li className="line-clamp-2"><span className="text-foreground/70">Made with:</span> {p.ingredients}</li>
                </ul>
                <div className="flex items-center justify-between pt-2 mt-auto">
                  <span className="font-display text-2xl">{formatPrice(p.price)}</span>
                  <button
                    onClick={() => onAdd(p)}
                    className="px-4 h-9 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors active:scale-95"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section id="story" className="py-24">
      <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Rural Tamil man hand-making laddus in a traditional village kitchen in Madurai"
            loading="lazy"
            width={1280}
            height={896}
            className="rounded-3xl shadow-soft w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl p-5 shadow-warm max-w-[200px]">
            <p className="font-display text-3xl text-primary">100%</p>
            <p className="text-xs text-muted-foreground mt-1">Natural ingredients, handcrafted in Madurai, Tamil Nadu</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
            Traditional recipes, crafted with care in Madurai.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Thiru Annamalai Natural Foods began with a passion for preserving traditional
              recipes and bringing authentic, healthy foods to families. Based in Madurai,
              Tamil Nadu, we craft every product by hand using time-honored methods.
            </p>
            <p>
              From our signature ghee laddus to crunchy peanut bars, gingelly bars, and traditional 
              kamarkat, we use only the finest natural ingredients — stone-ground flours, A2 ghee from
              local sources, pure jaggery, and premium nuts. No preservatives. No shortcuts. No machines.
              Just authentic taste and nutrition in every bite.
            </p>
            <p>
              Our commitment is to deliver healthy, delicious products that bring joy to your
              family while maintaining the highest standards of quality and hygiene.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-secondary text-xs font-medium">100% Handmade</span>
            <span className="px-4 py-2 rounded-full bg-secondary text-xs font-medium">No Preservatives</span>
            <span className="px-4 py-2 rounded-full bg-secondary text-xs font-medium">Fair Trade</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: Hand, title: "Handmade Daily", text: "Every laddu rolled by hand in small batches." },
  { icon: Leaf, title: "Natural Ingredients", text: "Stone-ground flours, A2 ghee, jaggery — nothing else." },
  { icon: Package, title: "Hygienic Packaging", text: "Carefully packaged with food-grade materials." },
  { icon: Plane, title: "Fast Delivery", text: "Delivered fresh across Tamil Nadu and South India." },
  { icon: ShieldCheck, title: "Quality Guaranteed", text: "FSSAI certified. 100% freshness promise." },
  { icon: CreditCard, title: "Secure Payments", text: "Multiple payment options including UPI, cards, and cash on delivery." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 bg-primary text-primary-foreground">
      <div className="container-prose">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-display max-w-2xl mx-auto">
            Tradition you can taste. Standards you can trust.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden">
          {features.map((f) => (
            <div key={f.title} className="bg-primary p-8 hover:bg-primary-foreground/5 transition-colors">
              <div className="h-12 w-12 rounded-full bg-accent/20 grid place-items-center mb-5">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const shipping = [
  { country: "Madurai City", flag: "🏙️", days: "Same day" },
  { country: "Tamil Nadu", flag: "🇮🇳", days: "2-3 days" },
  { country: "India", flag: "🇮🇳", days: "3-7 days" },
  { country: "USA & Canada", flag: "🇺🇸", days: "7-12 days" },
  { country: "UK & Europe", flag: "🇬🇧", days: "7-14 days" },
  { country: "Middle East", flag: "🇦🇪", days: "5-10 days" },
  { country: "Australia", flag: "🇦🇺", days: "10-15 days" },
  { country: "Rest of World", flag: "🌍", days: "10-20 days" },
];

export function Shipping() {
  const { formatPrice } = useCurrency();
  return (
    <section id="shipping" className="py-24">
      <div className="container-prose">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Worldwide Delivery</p>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-5">
              From our kitchen in Madurai to anywhere in the world.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Carefully packaged and delivered fresh worldwide. Every order is prepared with care and
              shipped via trusted international couriers to ensure your products arrive in perfect condition.
            </p>
            <div className="p-5 rounded-2xl bg-secondary/60 border border-border">
              <p className="text-sm font-medium mb-1">Free delivery on orders over {formatPrice(500)} (India)</p>
              <p className="text-xs text-muted-foreground">International shipping available. Contact us for bulk orders and special delivery arrangements worldwide.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {shipping.map((s) => (
              <div key={s.country} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.flag}</span>
                  <span className="font-medium text-sm">{s.country}</span>
                </div>
                <span className="text-xs text-muted-foreground">{s.days}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Priya R.", location: "Madurai, Tamil Nadu", text: "These products taste exactly like my grandmother used to make! The laddus are exceptional and the peanut bars are so crunchy. Highly recommended!", rating: 5 },
  { name: "Rajesh K.", location: "Chennai, Tamil Nadu", text: "Ordered for a family function and everyone loved them. Fresh, authentic taste with no artificial sweetness. The gingelly bars are my favorite!", rating: 5 },
  { name: "Lakshmi S.", location: "Coimbatore, Tamil Nadu", text: "Finally found healthy snacks that are both delicious and nutritious! The variety is amazing. Great for gifting too.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream/50">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Customer Reviews</p>
          <h2 className="text-4xl md:text-5xl font-display">Loved by families across Tamil Nadu.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card p-7 rounded-2xl border border-border">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed text-[15px] mb-5">
                "{t.text}"
              </blockquote>
              <figcaption>
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "What products do you offer?", a: "We offer a variety of handmade products including 10 types of ghee laddus (Green Dhal, Multigrain, Multi Millet, Black Urad Dal, Peanut, Gingelly, Rye, Ragi, Thinnai, Wheat), Peanut Bars, Gingelly Bars, and traditional Kamarkat. All made with natural ingredients and no preservatives." },
  { q: "How long do the products stay fresh?", a: "Our products stay fresh for 21–60 days depending on the variety, when stored in a cool dry place. Laddus typically last 30-45 days, while bars can last up to 60 days. Each box lists exact shelf life on the seal." },
  { q: "Do you ship internationally?", a: "Yes! We ship worldwide to USA, Canada, UK, Europe, Middle East, Australia, and many other countries. International delivery takes 5-20 business days depending on destination. All international orders are vacuum-sealed and shipped via DHL/FedEx Express with tracking." },
  { q: "Are your ingredients certified?", a: "Yes — we are FSSAI certified and use only A2 ghee, organic jaggery, and stone-ground flours. Every batch maintains the highest quality standards." },
  { q: "Do you offer bulk and wedding orders?", a: "Absolutely. We provide custom orders for weddings, festivals, and corporate gifting worldwide. Email thiruannamalainaturalfoods90@gmail.com or WhatsApp +91 83003 77278 for a quote." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24">
      <div className="container-prose max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Questions</p>
          <h2 className="text-4xl md:text-5xl font-display">Everything you wanted to know.</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-2xl bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                {open === i ? <Minus className="h-4 w-4 shrink-0 text-accent" /> : <Plus className="h-4 w-4 shrink-0 text-muted-foreground" />}
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream/50">
      <div className="container-prose grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-3">Talk to us</p>
          <h2 className="text-4xl md:text-5xl font-display leading-tight mb-5">
            Got a question? We're here to help.
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you're planning a wedding order or curious about our ingredients — we'd love to hear from you.
          </p>
          <div className="space-y-3">
            <a href="https://wa.me/918300377278" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-[oklch(0.7_0.15_145)] text-white"><MessageCircle className="h-4 w-4" /></span>
              <div>
                <p className="font-medium text-sm">WhatsApp us</p>
                <p className="text-xs text-muted-foreground">+91 83003 77278 · 9am–9pm IST</p>
              </div>
            </a>
            <a href="mailto:thiruannamalainaturalfoods90@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
              <span className="h-10 w-10 grid place-items-center rounded-full bg-primary text-primary-foreground"><Mail className="h-4 w-4" /></span>
              <div>
                <p className="font-medium text-sm">thiruannamalainaturalfoods90@gmail.com</p>
                <p className="text-xs text-muted-foreground">Email replies within 24 hours</p>
              </div>
            </a>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll get back to you shortly."); }} className="bg-card p-8 rounded-2xl border border-border space-y-4 self-start">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">First name</span>
              <input required className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Last name</span>
              <input required className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Email</span>
            <input required type="email" className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Country</span>
            <input className="mt-1 w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Message</span>
            <textarea required rows={4} className="mt-1 w-full rounded-lg border border-input bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </label>
          <button type="submit" className="w-full h-12 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-cocoa text-cream/90 pt-20 pb-8" style={{ backgroundColor: "var(--cocoa)" }}>
      <div className="container-prose">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block bg-white/95 p-4 rounded-2xl shadow-soft">
              <img src="/logo.svg" alt="Thiru Annamalai Natural Foods" className="h-20 sm:h-24 w-auto object-contain origin-left" />
            </div>
            <p className="text-sm text-cream/70 max-w-sm leading-relaxed mb-5">
              Handmade laddus, peanut bars, gingelly bars, and kamarkat from Madurai, Tamil Nadu. Healthy in Every Piece of Bite.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 max-w-sm">
              <input type="email" placeholder="Your email" className="flex-1 h-11 rounded-full bg-cream/10 border border-cream/15 px-4 text-sm placeholder:text-cream/40 focus:outline-none focus:border-accent" />
              <button className="h-11 px-5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90">Subscribe</button>
            </form>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#shop" className="hover:text-accent">All products</a></li>
              <li><a href="#shop" className="hover:text-accent">Laddus</a></li>
              <li><a href="#shop" className="hover:text-accent">Bars & Snacks</a></li>
              <li><a href="#shop" className="hover:text-accent">Gift boxes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="#story" className="hover:text-accent">Our story</a></li>
              <li><a href="#shipping" className="hover:text-accent">Shipping</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
              <li><a href="#" className="hover:text-accent">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cream mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><a href="/shipping-policy" className="hover:text-accent">Shipping Policy</a></li>
              <li><a href="/cancellation-refund" className="hover:text-accent">Cancellation & Refund</a></li>
              <li><a href="/privacy-policy" className="hover:text-accent">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="hover:text-accent">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© 2019 Thiru Annamalai Natural Foods. Flat No - 1760, TNHB Colony, Mela Anuppanadi, Madurai, Tamil Nadu - 625009. Owner: Vijaya Kumar R</p>
          <div className="flex items-center gap-3">
            <span>We accept</span>
            <div className="flex gap-2">
              {["Visa", "Mastercard", "Amex", "PayPal", "UPI"].map((p) => (
                <span key={p} className="px-2 py-1 rounded bg-cream/10 text-cream/80 text-[10px] font-medium">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
