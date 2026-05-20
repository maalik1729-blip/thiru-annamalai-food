import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CurrencySelector } from "./CurrencySelector";
import { useCart } from "@/lib/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/why", label: "Why Us" },
  { href: "/shipping", label: "Shipping" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { cartCount, setCartOpen } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pulse, setPulse] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll depth tracking for glassmorphism styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pulse animation trigger on cart item additions
  useEffect(() => {
    if (cartCount > 0) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== href) {
      e.preventDefault();
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md bg-stone-100/85 shadow-warm/10 py-1 border-b border-border/80" 
          : "bg-transparent border-b border-transparent py-3"
      }`}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="/" className="flex items-center relative w-40 md:w-48 h-12 md:h-14 shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          <img 
            src="/thiru_annamalai_logo.svg" 
            alt="Thiru Annamalai Natural Foods" 
            className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 w-[160px] md:w-[190px] max-w-none object-contain pointer-events-none" 
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const isActive = location.pathname === l.href;
            return (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={(e) => handleNavClick(e, l.href)}
                className={`relative font-medium transition-colors py-2 ${
                  isActive 
                    ? "text-accent" 
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="mr-2">
            <CurrencySelector />
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className={`relative inline-flex items-center justify-center h-11 w-11 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-350 active:scale-95 ${
              pulse ? "scale-110 shadow-md ring-2 ring-accent/30" : ""
            }`}
            aria-label="Cart"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            {cartCount > 0 && (
              <span className={`absolute -top-1 -right-1 h-5.5 w-5.5 rounded-full bg-accent text-accent-foreground text-[10px] grid place-items-center font-bold shadow-soft transition-transform duration-300 ${
                pulse ? "scale-120 animate-bounce" : ""
              }`}>
                {cartCount}
              </span>
            )}
          </button>

          <button 
            className="lg:hidden h-11 w-11 grid place-items-center rounded-full hover:bg-secondary active:scale-95 transition-transform" 
            onClick={() => setOpen(!open)} 
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md shadow-warm/5">
          <nav className="container-prose py-4 flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => {
              const isActive = location.pathname === l.href;
              return (
                <a 
                  key={l.href} 
                  href={l.href} 
                  onClick={(e) => handleNavClick(e, l.href)} 
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    isActive 
                      ? "bg-accent/10 text-accent font-semibold" 
                      : "hover:bg-secondary text-foreground/80"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
