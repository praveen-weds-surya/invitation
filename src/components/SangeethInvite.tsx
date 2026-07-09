import { Link } from "@tanstack/react-router";import React from "react";
import lightsImg from "@/assets/logos/serial_lights.png";
import flowersImg from "@/assets/logos/flowers.png";
import partyballImg from "@/assets/logos/partyball.png";
import carpetImg from "@/assets/logos/carpet.png";
import elephantImg from "@/assets/logos/elephant.gif";
import titleImg from "@/assets/logos/sangeeth_title.png"; 
import treeImg from "@/assets/logos/tree.png";
import tilesImg from "@/assets/logos/tile.png";
import foodImg from "@/assets/logos/food.png";
import lampImg from "@/assets/logos/lamp.png";
import fireImg from "@/assets/logos/fire.png";
import fruitsImg from "@/assets/logos/fruits.png";

type Props = {
  bride?: string;
  groom?: string;
};

export default function CombinedInvite({
  bride = "Surya K",
  groom = "Angu Praveen",
}: Props) {
  return (
    <section className="relative mx-auto -my-20 md:my-6 max-w-7xl overflow-hidden rounded-[40px] bg-[#092F33] shadow-2xl flex flex-col">

      {/* ============================================================== */}
      {/* 1. SANGEETH SECTION                                            */}
      {/* ============================================================== */}
      <div className="relative w-full">

        {/* ================= TOP (Graphics & Title) ================= */}
        {/* FIX: Removed z-10 from this wrapper so it doesn't force its contents to float above the card */}
        <div 
          className="relative w-full pointer-events-none mx-auto" 
          style={{ aspectRatio: "1440 / 450" }}
        >
          {/* FIX: Changed z-50 to z-0 so it naturally falls behind the beige card layer */}
          <img 
            src={lightsImg} 
            alt="Decorative Lights" 
            className="absolute top-[-50%] left-[85%] -translate-x-1/2 w-[80%] max-w-none h-auto object-cover opacity-90 z-0 mix-blend-screen" 
          />
          {/* Title keeps z-10 so it stays above the lights and card edges if they touch */}
          <img 
            src={titleImg} 
            alt="Sangeeth Night" 
            className="absolute top-[40%] left-[26.5%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-auto object-contain z-10 drop-shadow-lg" 
          />
        </div>

        {/* ================= SANGEETH CARD & OVERLAPPING GRAPHICS ================= */}
        {/* FIX: Removed z-20 from this wrapper to break the stacking context ceiling */}
        <div className="relative w-[92%] max-w-4xl mx-auto -mt-[8%] pointer-events-none">

          <img 
            src={partyballImg} 
            alt="Hand holding disco ball" 
            className="absolute top-[17%] right-[-15%] md:right-[-15%] w-[35%] md:w-[30%] h-auto object-contain opacity-90 z-30 drop-shadow-2xl" 
          />

          <div className="pointer-events-auto w-full">
            <InviteCard bride={bride} groom={groom} />
          </div>
        </div>

        {/* ================= BOTTOM SANGEETH (Graphics) ================= */}
        {/* FIX: Removed z-30 from this wrapper to break the stacking context ceiling */}
        <div 
          className="relative w-full pointer-events-none mx-auto -mt-[5%]" 
          style={{ aspectRatio: "1440 / 350" }}
        >
          <img 
            src={flowersImg} 
            alt="Floral Decor" 
            className="absolute top-[-120%] left-[-20%] md:left-[-6%] -translate-y-1/2 w-[50%] md:w-[25%] h-auto object-contain opacity-90 z-50 drop-shadow-2xl" 
          />

          <img 
            src={carpetImg} 
            alt="Carpet with Gramophone and Snacks" 
            className="absolute top-[50%] left-[18%] -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto object-contain opacity-95 z-60 drop-shadow-xl" 
          />
          <img 
            src={elephantImg} 
            alt="Elephant Decor" 
            className="absolute top-[46%] left-[78%] -translate-x-1/2 -translate-y-1/2 w-[53%] h-auto object-contain opacity-95 z-50 drop-shadow-2xl" 
          />
        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. WEDDING SECTION (BURGUNDY RED ZONE)                         */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full bg-[#980204] -mt-[2%] pt-[15%] pb-[15%] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        <WeddingCard bride={bride} groom={groom} />

        {/* ================= BOTTOM WEDDING (3 NEW LOGOS) ================= */}
        {/* FIX: Removed z-30 from this wrapper to break the stacking context ceiling */}
        <div 
          className="absolute bottom-0 left-0 w-full pointer-events-none mx-auto" 
          style={{ aspectRatio: "1440 / 200" }}
        >
          <img 
            src={treeImg} 
            alt="Tree" 
            className="absolute top-[-210%] left-[1%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-auto object-contain z-20 drop-shadow-2xl opacity-90"
          />
          <img 
            src={lampImg} 
            alt="Lamp" 
            className="absolute top-[-30%] left-[88%] -translate-x-1/2 -translate-y-1/2 w-[20%] h-auto object-contain z-30 drop-shadow-2xl"
          />
          <img 
            src={fireImg} 
            alt="Fire" 
            className="absolute top-[-10%] left-[9%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-auto object-contain z-30 drop-shadow-2xl"
          />
          <img 
            src={fruitsImg} 
            alt="Fruits" 
            className="absolute top-[20%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-auto object-contain z-20 drop-shadow-2xl"
          />

        <div 
          className="absolute top-[23%] left-0 w-full h-[81.5%] z-10 opacity-90"
          style={{ 
            backgroundImage: `url(${tilesImg})`, 
            backgroundRepeat: 'repeat-x', 
            backgroundSize: 'auto 100%', 
            backgroundPosition: 'left center' 
          }}
        />     
          <img 
            src={foodImg} 
            alt="Food" 
            className="absolute top-[50%] left-[68%] -translate-x-1/2 -translate-y-1/2 w-[25%] h-auto object-contain z-30 drop-shadow-xl"
          />
        </div>

      </div>

    </section>
  );
}

// ==============================================================
// SUB-COMPONENTS
// ==============================================================

type InviteCardProps = {
  bride: string;
  groom: string;
};

// ---------------- SANGEETH CARD COMPONENT ----------------
function InviteCard({ bride, groom }: InviteCardProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-[40px] bg-[#E4CBA9] shadow-2xl border border-white/20 flex flex-col items-center justify-center py-8 md:py-20 px-6 md:px-12">
      
      {/* FIX: Added relative z-[100] to text blocks to pop over images */}
      <p className="relative z-[100] text-center text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 md:mb-10 text-[#AF5031] font-bold">
        Together with our families
      </p>
      
      <div className="relative z-[100] mb-8 md:mb-12 text-center">
        <h2 className="text-4xl md:text-6xl text-[#092F33]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {groom}
        </h2>
        <p className="text-3xl md:text-4xl text-[#AF5031] my-2 md:my-4 drop-shadow-sm" style={{ fontFamily: "Meantime, cursive" }}>
          &amp;
        </p>
        <h2 className="text-4xl md:text-6xl text-[#092F33]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {bride}
        </h2>
      </div>

      <div className="relative z-[100] mb-8 md:mb-12 text-center flex flex-col">
        <p className="mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">Invite you to celebrate</p>
        <p className="mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">an evening of</p>
        <p className="mb-0 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">music · dance · laughter</p>
      </div>
      
      <div className="relative z-[100] mb-8 md:mb-14 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-bold text-[#AF5031]">Wednesday</p>
        <h1 className="text-7xl md:text-9xl text-[#092F33] my-2 md:my-4 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>17</h1>
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-[#AF5031]">February 2027 . At 6.30 PM</p>
      </div>

      <div className="relative z-[100] text-center mb-8 md:mb-12 flex flex-col">
        <p className="mb-1 md:mb-2 text-sm md:text-base tracking-[0.15em] font-bold text-[#092F33] uppercase">CLUB 6 CONVENTION CENTRE</p>
        <p className="mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.15em] text-[#092F33]/80 uppercase font-medium">KALLEPULLY ROAD RAMANATHAPURAM</p>
        <p className="mb-0 text-[10px] md:text-xs tracking-[0.15em] text-[#092F33]/80 uppercase font-medium">PALAKKAD, KERALA 678001</p>
      </div>

      <a href="/glam-up" className="relative z-[100] mt-4 inline-block rounded-full bg-[#AF5031] px-10 py-4 text-center text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-[#E4CBA9] transition-all duration-300 hover:bg-[#092F33] hover:scale-105 active:scale-95 shadow-lg shadow-[#AF5031]/30">
        Let's Glam Up
      </a>
    </div>
  );
}

// ---------------- WEDDING CARD COMPONENT ----------------
// ---------------- WEDDING CARD COMPONENT ----------------
function WeddingCard({ bride, groom }: InviteCardProps) {
  // FIX: Removed z-20 from this component's root to break the stacking context ceiling
  return (
    <div className="relative mx-auto w-[92%] max-w-4xl overflow-hidden rounded-[40px] bg-[#F5F1E6] shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/30 flex flex-col items-center justify-center py-8 md:py-20 px-6 md:px-12 pointer-events-auto">
      
      {/* FIX: Added relative z-[100] to text blocks to pop over images */}
      <p className="relative z-[100] text-center text-[10px] md:text-xs tracking-[0.3em] uppercase mb-6 md:mb-10 text-[#8B4513] font-bold">
        Together with our families
      </p>
      
      <div className="relative z-[100] mb-8 md:mb-12 text-center">
        <h2 className="text-4xl md:text-6xl text-[#092F33]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {groom}
        </h2>
        <p className="text-3xl md:text-4xl text-[#AF5031] my-2 md:my-4 drop-shadow-sm" style={{ fontFamily: "Meantime, cursive" }}>
          &amp;
        </p>
        <h2 className="text-4xl md:text-6xl text-[#092F33]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {bride}
        </h2>
      </div>

      <div className="relative z-[100] mb-8 md:mb-12 text-center flex flex-col">
        <p className="mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">Invite you to</p>
        <p className="mb-0 text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">Celebrate our marriage on</p>
      </div>
      
      <div className="relative z-[100] mb-8 md:mb-14 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-bold text-[#8B4513]">Thursday</p>
        <h1 className="text-7xl md:text-9xl text-[#092F33] my-2 md:my-4 leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>18</h1>
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-[#8B4513]">February 2027 · At 10.00 AM</p>
      </div>

      <div className="relative z-[100] text-center mb-8 md:mb-12 flex flex-col">
        <p className="mb-1 md:mb-2 text-sm md:text-base tracking-[0.15em] font-bold text-[#092F33] uppercase">CLUB 6 CONVENTION CENTRE</p>
        <p className="mb-1 md:mb-2 text-[10px] md:text-xs tracking-[0.15em] text-[#092F33]/80 uppercase font-medium">KALLEPULLY ROAD RAMANATHAPURAM</p>
        <p className="mb-0 text-[10px] md:text-xs tracking-[0.15em] text-[#092F33]/80 uppercase font-medium">PALAKKAD, KERALA 678001</p>
      </div>

      <a href="/glam-up" className="relative z-[100] mt-4 inline-block rounded-full bg-[#8B4513] px-10 py-4 text-center text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-[#F5F1E6] transition-all duration-300 hover:bg-[#980204] hover:scale-105 active:scale-95 shadow-lg shadow-[#8B4513]/40">
        Let's Glam Up
      </a>
    </div>
  );
}