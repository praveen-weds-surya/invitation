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

      {/* Action Buttons: RSVP, What to Wear & Travel & Explore */}
      <section className="bg-beige pb-24">
        <div className="container-w flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
          <Link 
            to="/rsvp" 
            className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center rounded-full bg-[#AF5031] px-8 sm:px-9 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-serif font-medium uppercase tracking-[0.12em] text-[#FFFDF9] shadow-lg shadow-[#AF5031]/25 border border-[#E4CBA9]/50 transition-all duration-300 hover:bg-[#923E22] hover:scale-105 hover:shadow-xl hover:shadow-[#AF5031]/35 active:scale-95 cursor-pointer"
          >
            RSVP
          </Link>
          <Link 
            to="/glam-up" 
            className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center rounded-full bg-[#092F33] px-8 sm:px-9 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-serif font-medium uppercase tracking-[0.12em] text-[#FFFDF9] shadow-lg shadow-[#092F33]/25 border border-[#E4CBA9]/50 transition-all duration-300 hover:bg-[#062023] hover:scale-105 hover:shadow-xl hover:shadow-[#092F33]/35 active:scale-95 cursor-pointer"
          >
            What to Wear
          </Link>
          <Link 
            to="/details" 
            className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center rounded-full bg-[#2F3E1C] px-8 sm:px-9 py-3.5 sm:py-4 text-center text-xs sm:text-sm font-serif font-medium uppercase tracking-[0.12em] text-[#FFFDF9] shadow-lg shadow-[#2F3E1C]/25 border border-[#E4CBA9]/50 transition-all duration-300 hover:bg-[#222E14] hover:scale-105 hover:shadow-xl hover:shadow-[#2F3E1C]/35 active:scale-95 cursor-pointer"
          >
            Travel &amp; Explore
          </Link>
        </div>
      </section>

      {/* Site Footer - Local to Itinerary Page Only */}
      <SiteFooter />
    </>
  );
}