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
        <p className="text-xs uppercase tracking-[0.4em] text-accent font-sans">
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

      {/* RSVP Section */}
      <section className="bg-beige pb-24 flex justify-center">
        <div className="container-w flex justify-center">
          <Link 
            to="/rsvp" 
            className="inline-block rounded-full bg-accent px-12 py-5 text-center text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-[#F5F1E6] transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl border border-white/20"
          >
            RSVP
          </Link>
        </div>
      </section>

      {/* Site Footer - Local to Itinerary Page Only */}
      <SiteFooter />
    </>
  );
}