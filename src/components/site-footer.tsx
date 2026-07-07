export function SiteFooter() {
  return (
    /* CHANGED: Removed mt-24 so the footer tightly snaps to the content above it 
       without exposing the beige background underneath. */
    <footer className="border-t border-border/60 bg-olive-deep text-cream">
      <div className="container-w py-14 text-center">
        <div className="divider-motif mb-6">
          <span className="font-serif text-2xl">P<span className="text-gold">&amp;</span>S</span>
        </div>
        <p className="font-serif text-xl">Angu Praveen &amp; Surya K</p>
        <p className="mt-2 text-sm tracking-[0.2em] uppercase text-cream/70">
          18 February 2027 · Palakkad, Kerala
        </p>
        <p className="mt-8 text-xs text-cream/50">
          Made with love for our family &amp; friends.
        </p>
      </div>
    </footer>
  );
}