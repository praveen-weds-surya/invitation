import React from "react";

type Props = {
  bride?: string;
  groom?: string;
};

export default function WeddingInvite({
  bride = "Surya K",
  groom = "Angu Praveen",
}: Props) {
  return (
    <section className="relative mx-auto mt-24 max-w-4xl overflow-hidden rounded-[40px] bg-[#F5F1E6] shadow-2xl flex flex-col items-center justify-center py-20 px-6 md:px-12">
      
      {/* Heading */}
      <p className="text-center text-[10px] md:text-[12px] tracking-[0.3em] uppercase mb-10 text-[#8B4513]">
        Together with our families
      </p>
      
      {/* Couple */}
      <div className="mb-12 text-center">
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#092F33]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {groom}
        </h2>
        
        <p 
          className="text-3xl md:text-4xl text-[#AF5031] my-4"
          style={{ fontFamily: "Meantime, cursive" }}
        >
          &amp;
        </p>
        
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl text-[#092F33]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {bride}
        </h2>
      </div>

      {/* Invitation Text */}
      <div className="space-y-2 mb-12 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#2D2926]">
          Invite you to
        </p>
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#2D2926]">
          Celebrate our marriage on
        </p>
      </div>
      
      {/* Date */}
      <div className="mb-14 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-bold text-[#8B4513]">
          Thursday
        </p>
        <h1 
          className="text-7xl md:text-8xl lg:text-9xl text-[#092F33] my-4 leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          18
        </h1>
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-[#8B4513]">
          At 10.00 AM
        </p>
      </div>

      {/* Venue */}
      <div className="space-y-2 text-center mb-12">
        <p className="text-sm md:text-base tracking-[0.15em] font-bold text-[#092F33] uppercase">
          CLUB 6 CONVENTION CENTRE
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#2D2926]/80 uppercase">
          KALLEPULLY ROAD RAMANATHAPURAM
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#2D2926]/80 uppercase">
          PALAKKAD, KERALA 678001
        </p>
      </div>

      {/* Dotted Divider */}
      <div className="text-[#092F33] text-2xl tracking-[0.25em] opacity-40">
        ..........
      </div>
      
    </section>
  );
}