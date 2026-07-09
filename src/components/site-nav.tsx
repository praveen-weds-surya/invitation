import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
// Import your logo
import logoImage from "@/assets/logos/ps_spice.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Our Story" },
  { to: "/itinerary", label: "Itinerary" },
  { to: "/details", label: "Details" },
  { to: "/rsvp", label: "RSVP" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/90 backdrop-blur">
      <div className="container-w flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-serif text-lg text-primary">
          <img 
            src={logoImage} 
            alt="Praveen & Surya Logo" 
            className="h-9 w-9 object-contain" 
          />
          <span className="hidden sm:inline text-sm uppercase tracking-[0.28em]">Praveen &amp; Surya</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs uppercase tracking-[0.24em] transition-colors hover:text-accent ${
                l.to === "/rsvp" 
                  ? "btn-primary !py-2 !px-5 text-[0.7rem]" 
                  : "text-primary/80"
              }`}
              activeProps={{ className: l.to === "/rsvp" ? "" : "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-cream">
          <div className="container-w flex flex-col py-4 gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.24em] text-primary/80 py-2"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}