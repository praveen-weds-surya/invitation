import React from "react";
// Import your specific Canva exports
import lightsImg from "@/assets/logos/serial_lights.png";
import flowersImg from "@/assets/logos/flowers.png";
import partyballImg from "@/assets/logos/partyball.png";
import carpetImg from "@/assets/logos/carpet.png";
import elephantImg from "@/assets/logos/elephant.gif";
// IMPORT YOUR NEW TITLE IMAGE HERE:
import titleImg from "@/assets/logos/sangeeth_title.png"; 

// IMPORT YOUR 3 NEW LOGOS HERE:
import treeImg from "@/assets/logos/tree.png";
import tilesImg from "@/assets/logos/tile.png";
import foodImg from "@/assets/logos/food.png";

type Props = {
  bride?: string;
  groom?: string;
};

export default function CombinedInvite({
  bride = "Surya K",
  groom = "Angu Praveen",
}: Props) {
  return (
    <section className="relative mx-auto my-20 max-w-7xl overflow-hidden rounded-[40px] bg-[#092F33] shadow-2xl flex flex-col">

      {/* ============================================================== */}
      {/* 1. SANGEETH SECTION (EXACT ORIGINAL VALUES)                    */}
      {/* ============================================================== */}
      <div className="relative w-full">

        {/* ================= TOP (Graphics & Title) ================= */}
        <div className="relative h-[450px] w-full">

          {/* 1. SERIAL LIGHTS */}
          <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none z-0 w-[1900px]">
            <img 
              src={lightsImg} 
              alt="Decorative Lights" 
              className="w-[800px] max-w-full h-auto object-cover opacity-90 scale-100 -translate-y-20" 
            />
          </div>

          {/* 2. FLOWERS */}
          <div className="absolute left-0 top-24 pointer-events-none z-20 hidden md:block ">
            <img 
              src={flowersImg} 
              alt="Floral Decor" 
              className="w-[450px] h-auto object-contain opacity-90 scale-100 -translate-x-30 translate-y-170" 
            />
          </div>

          {/* 3. PARTYBALL (Hand & Disco) */}
          <div className="absolute right-0 top-20 pointer-events-none z-20 hidden md:block">
            <img 
              src={partyballImg} 
              alt="Hand holding disco ball" 
              className="w-[300px] h-auto object-contain opacity-90 scale-100 translate-x-0 translate-y-100" 
            />
          </div>

          {/* ================= TITLE AREA ================= */}
          <div className="absolute inset-x-0 top-24 z-10 mx-auto flex w-[92%] max-w-3xl flex-col items-center">
            
            {/* 4. CANVA TITLE IMAGE */}
            <img 
              src={titleImg} 
              alt="Sangeeth Night" 
              className="w-[670px] h-auto object-contain scale-100 -translate-x-60 -translate-y-20" 
            />

          </div>

        </div>

        {/* ================= CARD ================= */}
        
        <div className="relative z-00 -mt-[50px]">
          <InviteCard bride={bride} groom={groom} />
        </div>

        {/* ================= BOTTOM (Graphics) ================= */}

        <div className="relative h-[350px] w-full">

          {/* 5. CARPET */}
          <div className="absolute bottom-0 left-0 md:left-10 pointer-events-none z-40">
            <img 
              src={carpetImg} 
              alt="Carpet with Gramophone and Snacks" 
              className="w-[900px] h-auto object-contain opacity-90 origin-bottom-left scale-100 -translate-x-60 translate-y-0" 
            />
          </div>

          {/* 6. ELEPHANT */}
          <div className="absolute bottom-0 right-0 md:right-10 pointer-events-none z-50">
            <img 
              src={elephantImg} 
              alt="Elephant Decor" 
              className="w-[700px] h-auto object-contain opacity-90 origin-bottom-right scale-100 translate-x-20 translate-y-30" 
            />
          </div>

        </div>

      </div>

      {/* ============================================================== */}
      {/* 2. WEDDING SECTION (BURGUNDY RED ZONE)                         */}
      {/* ============================================================== */}
      <div className="relative z-20 w-full bg-[#980204] -mt-[100px] pt-[150px] pb-[250px]">
        
        <WeddingCard bride={bride} groom={groom} />

        {/* ================= 3 NEW LOGOS (INDIVIDUAL CONTROLS) ================= */}
        
        {/* 1. TREE */}
        <div className="absolute bottom-[60px] left-[25%] -translate-x-1/2 z-30">
          <img 
            src={treeImg} 
            alt="Tree" 
            className="-translate-x-[70px] translate-y-[50px]"
            style={{ width: "700px", height: "auto", objectFit: "contain" }} 
          />
        </div>

        {/* 2. TILES */}
        <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 z-10">
          <img 
            src={tilesImg} 
            alt="Tiles" 
            className="-translate-x-[380px] translate-y-[70px]"
            style={{ width: "250px", height: "auto", objectFit: "contain" }} 
          />
        </div>

        <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 z-10">
          <img 
            src={tilesImg} 
            alt="Tiles" 
            className="-translate-x-[130px] translate-y-[70px]"
            style={{ width: "250px", height: "auto", objectFit: "contain" }} 
          />
        </div>
        <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 z-10">
          <img 
            src={tilesImg} 
            alt="Tiles" 
            className="translate-x-[120px] translate-y-[70px]"
            style={{ width: "250px", height: "auto", objectFit: "contain" }} 
          />
        </div>
        <div className="absolute bottom-[60px] left-[50%] -translate-x-1/2 z-10">
          <img 
            src={tilesImg} 
            alt="Tiles" 
            className="translate-x-[370px] translate-y-[70px]"
            style={{ width: "250px", height: "auto", objectFit: "contain" }} 
          />
        </div>

        {/* 3. FOOD */}
        <div className="absolute bottom-[60px] left-[75%] -translate-x-1/2 z-30">
          <img 
            src={foodImg} 
            alt="Food" 
            className="translate-x-[20px] translate-y-[25px]"
            style={{ width: "300px", height: "auto", objectFit: "contain" }} 
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
    <div className="relative mx-auto w-[92%] max-w-4xl overflow-hidden rounded-[40px] bg-[#E4CBA9] shadow-2xl flex flex-col items-center justify-center py-20 px-6 md:px-12">
      
      {/* Heading */}
      <p className="text-center text-[10px] md:text-[12px] tracking-[0.3em] uppercase mb-10 text-[#AF5031] font-bold">
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
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">
          Invite you to celebrate
        </p>
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">
          an evening of
        </p>
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">
          music · dance · laughter
        </p>
      </div>
      
      {/* Date */}
      <div className="mb-14 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-bold text-[#AF5031]">
          Wednesday
        </p>
        <h1 
          className="text-7xl md:text-8xl lg:text-9xl text-[#092F33] my-4 leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          17
        </h1>
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold text-[#AF5031]">
          At 6.30 PM
        </p>
      </div>

      {/* Venue */}
      <div className="space-y-2 text-center mb-12">
        <p className="text-sm md:text-base tracking-[0.15em] font-bold text-[#092F33] uppercase">
          CLUB 6 CONVENTION CENTRE
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#092F33]/80 uppercase">
          KALLEPULLY ROAD RAMANATHAPURAM
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#092F33]/80 uppercase">
          PALAKKAD, KERALA 678001
        </p>
      </div>

      {/* CTA as a functional link */}
      <a
        href="#"
        className="
          mt-4 inline-block rounded-full bg-[#AF5031]
          px-10 py-4 text-center
          text-xs md:text-sm uppercase tracking-[0.3em] font-bold
          text-[#E4CBA9] transition-all duration-300
          hover:bg-[#092F33] hover:scale-105 active:scale-95
          relative z-50
        "
      >
        Let's Glam Up
      </a>
      
    </div>
  );
}

// ---------------- WEDDING CARD COMPONENT ----------------
function WeddingCard({ bride, groom }: InviteCardProps) {
  return (
    <div className="relative mx-auto w-[92%] max-w-4xl overflow-hidden rounded-[40px] bg-[#F5F1E6] shadow-2xl flex flex-col items-center justify-center py-20 px-6 md:px-12">
      
      {/* Heading */}
      <p className="text-center text-[10px] md:text-[12px] tracking-[0.3em] uppercase mb-10 text-[#8B4513] font-bold">
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
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">
          Invite you to
        </p>
        <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#092F33] font-medium">
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
          February 2027 · At 10.00 AM
        </p>
      </div>

      {/* Venue */}
      <div className="space-y-2 text-center mb-12">
        <p className="text-sm md:text-base tracking-[0.15em] font-bold text-[#092F33] uppercase">
          CLUB 6 CONVENTION CENTRE
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#092F33]/80 uppercase">
          KALLEPULLY ROAD RAMANATHAPURAM
        </p>
        <p className="text-[10px] md:text-[11px] tracking-[0.15em] text-[#092F33]/80 uppercase">
          PALAKKAD, KERALA 678001
        </p>
      </div>

      {/* Dotted Divider */}

      {/* CTA as a functional link with custom colors */}
      <a
        href="#"
        className="
          mt-4 inline-block rounded-full bg-[#8B4513]
          px-10 py-4 text-center
          text-xs md:text-sm uppercase tracking-[0.3em] font-bold
          text-[#F5F1E6] transition-all duration-300
          hover:bg-[#980204] hover:scale-105 active:scale-95
          relative z-50
        "
      >
        Let's Glam Up
      </a>
      
    </div>
  );
}