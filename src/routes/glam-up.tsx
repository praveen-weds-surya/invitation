import React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/glam-up")({
  head: () => ({
    meta: [
      { title: "Guest Color Palette Guide · Praveen & Surya" },
      {
        name: "description",
        content:
          "Wedding guest color palette guide for Sangeeth (Evening Glam) and Wedding Ceremony (Daytime Traditional) for Angu Praveen & Surya K.",
      },
    ],
  }),
  component: GlamUpPage,
});

function GlamUpPage() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden rounded-[40px] shadow-2xl flex flex-col bg-gradient-to-b from-[#092F33] via-[#041618] to-[#980204]">
      {/* ============================================================== */}
      {/* PAGE HEADER                                                    */}
      {/* ============================================================== */}
      <div className="relative w-full pt-16 md:pt-20 pb-8 flex flex-col items-center justify-center z-40 px-4">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E4CBA9] font-semibold mb-3">
          Wedding Guest
        </p>
        <h1 className="relative z-[100] text-4xl sm:text-5xl md:text-7xl text-[#F5F1E6] text-center drop-shadow-lg font-serif">
          Color Palette Guide
        </h1>
        <p className="relative z-[100] text-center text-xs md:text-sm tracking-[0.2em] uppercase mt-4 text-[#E4CBA9]/85 font-medium max-w-md">
          Curated tones to complement our celebration
        </p>
      </div>

      {/* ============================================================== */}
      {/* EVENT 1: SANGEETH PALETTE SECTION                             */}
      {/* ============================================================== */}
      <div className="relative w-full px-4 md:px-12 py-6 md:py-8 z-30">
        <div className="relative z-40 mx-auto w-full max-w-4xl overflow-hidden rounded-[30px] bg-[#E4CBA9] bg-opacity-95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/30 p-6 sm:p-10 md:p-12">
          <div className="relative z-[100] text-center mb-6">
            <span className="inline-block text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#AF5031] font-bold pb-2">
              Event 1 · Wednesday, 17 February
            </span>
            <h2 className="text-3xl md:text-5xl text-[#092F33] mb-2 font-serif">
              Sangeeth (Evening Glam)
            </h2>
          </div>

          <div className="relative z-[100] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
            <Swatch color="#F1E5C1" name="Metallic Champagne" />
            <Swatch color="#C0C0C0" name="Silver Grey" />
            <Swatch color="#006400" name="Emerald Green" />
            <Swatch color="#008080" name="Deep Teal" />
            <Swatch color="#BFA047" name="Antique Gold" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* EVENT 2: WEDDING PALETTE SECTION                              */}
      {/* ============================================================== */}
      <div className="relative w-full px-4 md:px-12 py-6 md:py-8 z-20">
        <div className="relative z-40 mx-auto w-full max-w-4xl overflow-hidden rounded-[30px] bg-[#F5F1E6] bg-opacity-95 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/40 p-6 sm:p-10 md:p-12">
          <div className="relative z-[100] text-center mb-6">
            <span className="inline-block text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#8B4513] font-bold pb-2">
              Event 2 · Thursday, 18 February
            </span>
            <h2 className="text-3xl md:text-5xl text-[#980204] mb-2 font-serif">
              Wedding Ceremony (Daytime Traditional)
            </h2>
          </div>

          <div className="relative z-[100] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
            <Swatch color="#FFDB58" name="Mustard Yellow" />
            <Swatch color="#9DC183" name="Sage Green" />
            <Swatch color="#B7410E" name="Rust" />
            <Swatch color="#FFDAB9" name="Peach" />
            <Swatch color="#808000" name="Olive Green" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* BACK BUTTON                                                    */}
      {/* ============================================================== */}
      <div className="relative w-full py-12 flex justify-center z-50">
        <Link
          to="/itinerary"
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
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.25)] border-2 border-white/60 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
      />
      <span className="text-[10px] md:text-xs font-bold tracking-[0.08em] uppercase text-center max-w-[95px] text-[#092F33] leading-tight">
        {name}
      </span>
      <span className="text-[9px] md:text-[10px] font-mono tracking-wider text-[#092F33]/70 font-semibold">
        {color.toUpperCase()}
      </span>
    </div>
  );
}
