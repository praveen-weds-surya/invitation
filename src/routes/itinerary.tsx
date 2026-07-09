import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/countdown";
import SangeethInvite from "@/components/SangeethInvite";
import WeddingInvite from "@/components/WeddingInvite";
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
      <section className="bg-beige py-16 text-center">
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
      <section className="bg-beige py-20">
        <div className="container-w">
          <Countdown />
        </div>
      </section>

      {/* Site Footer - Local to Itinerary Page Only */}
      <SiteFooter />
    </>
  );
}