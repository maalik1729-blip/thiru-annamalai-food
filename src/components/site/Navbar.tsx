import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CurrencySelector } from "./CurrencySelector";
import { useCart } from "@/lib/CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/story", label: "Our Story" },
  { href: "/why", label: "Why Us" },
  { href: "/shipping", label: "Shipping" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { cartCount, setCartOpen } = useCart();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== href) {
      e.preventDefault();
      navigate(href);
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-prose flex h-20 md:h-24 items-center justify-between gap-4">
        <a href="/" className="flex items-center justify-center bg-white/95 rounded-xl shadow-soft w-40 md:w-48 h-14 md:h-16 overflow-hidden shrink-0">
          <img src="/thiru_annamalai_logo.svg" alt="Thiru Annamalai Natural Foods" className="w-full h-full object-cover" />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="mr-2">
            <CurrencySelector />
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-[10px] grid place-items-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>

          <button className="lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-secondary" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-prose py-4 grid gap-3 text-sm">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={(e) => handleNavClick(e, l.href)} 
                className="py-1"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
