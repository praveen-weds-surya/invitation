import { createFileRoute, Link } from "@tanstack/react-router";
import { Countdown } from "@/components/countdown";
import SangeethInvite from "@/components/SangeethInvite";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/itinerary")({
  head: () => ({
    meta: [
      {
        title: "Itinerary · Praveen & Surya",
      },
      {
        name: "description",
        content:
          "Sangeeth Night and Wedding Day for Angu Praveen & Surya K",
      },
    ],
  }),
  component: Itinerary,
});

function Itinerary() {
  return (
    <>
      {/* Header */}
      {/* Added id="itinerary" right here to the main header section! */}
      <section id="itinerary" className="bg-beige py-16 text-center">
        {/* Changed text style to track your custom layout font rules */}
        <p className="text-xs uppercase tracking-[0.12em] font-semibold text-accent">
          Two Days of Celebration
        </p>

        {/* Formatted header font back to your chosen classic font-serif style */}
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-primary">
          The Itinerary
        </h1>
      </section>

      {/* Invitation Section */}
      <section className="bg-beige py-20">
        <div className="container-w">

          {/* Sangeeth Invitation */}
          <SangeethInvite
            bride="Surya K"
            groom="Angu Praveen"
          />

        </div>
      </section>

      {/* Countdown */}
      <section className="bg-beige pt-20 pb-10">
        <div className="container-w">
          <Countdown />
        </div>
      </section>

      {/* Action Buttons: RSVP, What to Wear & Details */}
      <section className="bg-beige pb-24">
        <div className="container-w flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 flex-wrap">
          <Link 
            to="/rsvp" 
            className="w-full sm:w-auto min-w-[170px] inline-block rounded-full bg-[#AF5031] px-8 sm:px-10 py-4 sm:py-4.5 text-center text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#F5F1E6] transition-all duration-300 hover:bg-[#8f3f24] hover:scale-105 active:scale-95 shadow-xl shadow-black/20 border-2 border-[#AF5031]"
          >
            RSVP
          </Link>
          <Link 
            to="/glam-up" 
            className="w-full sm:w-auto min-w-[170px] inline-block rounded-full bg-[#092F33] px-8 sm:px-10 py-4 sm:py-4.5 text-center text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#E4CBA9] transition-all duration-300 hover:bg-[#041618] hover:scale-105 active:scale-95 shadow-xl shadow-black/20 border-2 border-[#092F33]"
          >
            What to Wear
          </Link>
          <Link 
            to="/details" 
            className="w-full sm:w-auto min-w-[170px] inline-block rounded-full bg-[#2F3E1C] px-8 sm:px-10 py-4 sm:py-4.5 text-center text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#E4CBA9] transition-all duration-300 hover:bg-[#1f2a13] hover:scale-105 active:scale-95 shadow-xl shadow-black/20 border-2 border-[#2F3E1C]"
          >
            Details
          </Link>
        </div>
      </section>

      {/* Site Footer - Local to Itinerary Page Only */}
      <SiteFooter />
    </>
  );
}