import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

// Reusing your existing beautiful assets
import lightsImg from "@/assets/logos/serial_lights.png";
import partyballImg from "@/assets/logos/partyball.png";
import flowersImg from "@/assets/logos/flowers.png";

// 1. This is the TanStack Router magic that automatically registers the page
export const Route = createFileRoute('/glam-up')({
  component: GlamUpPage,
})

// 2. Your actual page component
function GlamUpPage() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden rounded-[40px] shadow-2xl flex flex-col bg-gradient-to-b from-[#092F33] via-[#041618] to-[#980204]">
      
      {/* ============================================================== */}
      {/* PAGE HEADER                                                    */}
      {/* ============================================================== */}
      <div className="relative w-full pt-20 pb-10 flex flex-col items-center justify-center z-40">
        {/* <img 
          src={lightsImg} 
          alt="Decorative Lights" 
          className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[120%] md:w-[80%] max-w-none h-auto object-cover opacity-70 z-0 mix-blend-screen pointer-events-none" 
        /> */}
        <h1 className="relative z-[100] text-5xl md:text-7xl text-[#F5F1E6] text-center drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Style Guide
        </h1>
        <p className="relative z-[100] text-center text-sm md:text-base tracking-[0.2em] uppercase mt-6 text-[#E4CBA9]/80 font-medium">
          A palette for our perfect days
        </p>
      </div>

      {/* ============================================================== */}
      {/* SANGEETH PALETTE SECTION                                       */}
      {/* ============================================================== */}
      <div className="relative w-full px-4 md:px-12 py-10 z-30">
        {/* <img 
          src={partyballImg} 
          alt="Disco Ball" 
          className="absolute top-[-10%] right-[-10%] md:right-[5%] w-[40%] md:w-[25%] h-auto object-contain opacity-60 z-10 drop-shadow-2xl pointer-events-none" 
        /> */}

        <div className="relative z-40 mx-auto w-full max-w-3xl overflow-hidden rounded-[30px] bg-[#E4CBA9] bg-opacity-95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/30 p-8 md:p-12">
          
          <div className="relative z-[100] text-center mb-8">
            <h2 className="text-3xl md:text-5xl text-[#092F33] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sangeeth Night</h2>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#AF5031] font-bold">Vibrant · Fun · Glamorous</p>
            <p className="mt-4 text-sm text-[#092F33]/80 leading-relaxed font-medium">
              Get ready to dance the night away! We invite you to wear vibrant, festive, and comfortable outfits that sparkle under the disco lights.
            </p>
          </div>

          <div className="relative z-[100] flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            <Swatch color="#092F33" name="Midnight Emerald" />
            <Swatch color="#AF5031" name="Warm Terracotta" />
            <Swatch color="#E4CBA9" name="Champagne Gold" />
            <Swatch color="#1E3A8A" name="Royal Navy" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* WEDDING PALETTE SECTION                                        */}
      {/* ============================================================== */}
      <div className="relative w-full px-4 md:px-12 py-10 mb-20 z-20">
        {/* <img 
          src={flowersImg} 
          alt="Flowers" 
          className="absolute bottom-[-10%] left-[-15%] md:left-[0%] w-[50%] md:w-[30%] h-auto object-contain opacity-70 z-10 drop-shadow-2xl pointer-events-none" 
        /> */}

        <div className="relative z-40 mx-auto w-full max-w-3xl overflow-hidden rounded-[30px] bg-[#F5F1E6] bg-opacity-95 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/40 p-8 md:p-12">
          
          <div className="relative z-[100] text-center mb-8">
            <h2 className="text-3xl md:text-5xl text-[#980204] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Wedding Ceremony</h2>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#8B4513] font-bold">Traditional · Elegant · Timeless</p>
            <p className="mt-4 text-sm text-[#092F33]/80 leading-relaxed font-medium">
              For our auspicious morning, we recommend classic, elegant traditional wear. Think rich, deep tones and serene neutrals that compliment the traditional Kerala setting.
            </p>
          </div>

          <div className="relative z-[100] flex flex-wrap justify-center gap-6 md:gap-10 mt-8">
            <Swatch color="#980204" name="Rich Burgundy" />
            <Swatch color="#F5F1E6" name="Classic Ivory" />
            <Swatch color="#8B4513" name="Earthy Bronze" />
            <Swatch color="#FBBF24" name="Auspicious Yellow" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BACK BUTTON                                                    */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* BACK BUTTON                                                    */}
      {/* ============================================================== */}
      <div className="relative w-full pb-16 flex justify-center z-50">
        <Link 
          to="/itinerary" /* <--- MUST BE /itinerary, NOT / */
          hash="itinerary" 
          className="inline-block rounded-full bg-transparent border-2 border-[#E4CBA9] px-10 py-4 text-center text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-[#E4CBA9] transition-all duration-300 hover:bg-[#E4CBA9] hover:text-[#092F33] hover:scale-105 active:scale-95 shadow-lg"
        >
          Return to Itinerary
        </Link>
      </div>

    </section>
  );
}

// Helper Swatch Component
function Swatch({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div 
        className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-2 border-white/50 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
      />
      <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-center max-w-[80px] text-[#092F33]">
        {name}
      </span>
    </div>
  );
}