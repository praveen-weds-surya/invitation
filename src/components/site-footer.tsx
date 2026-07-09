// Make sure to adjust this import path depending on exactly where ps_spice.png is saved
import psSpiceLogo from "@/assets/logos/ps_spice2.png"; 

export function SiteFooter() {
  return (
    /* CHANGED: Removed mt-24 so the footer tightly snaps to the content above it 
       without exposing the beige background underneath. */
    <footer className="border-t border-border/60 bg-olive-deep text-cream">
      {/* Reduced py-14 to py-8 to shrink the top and bottom empty space */}
      <div className="container-w py-10 text-center">
        
        {/* Reduced mb-6 to mb-4 to pull the text closer to the logo */}
        <div className="mb-0 flex justify-center">
          {/* Reduced h-60 to h-28 (with md:h-32 for desktop) so it doesn't take up the whole screen */}
          <img 
            src={psSpiceLogo} 
            alt="Praveen & Surya" 
            className="h-28 md:h-32 w-auto object-contain" 
          />
        </div>

        <p className="font-serif text-xl">Praveen &amp; Surya</p>
        <p className="mt-2 text-sm tracking-[0.2em] uppercase text-cream/70">
          18 Feb 2027
        </p>
        {/* Reduced mt-8 to mt-4 to pull the final line closer */}
        <p className="mt-4 text-xs text-cream/50">
          Made with love for our family &amp; friends.
        </p>
      </div>
    </footer>
  );
}