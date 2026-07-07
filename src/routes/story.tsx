import { createFileRoute, Link } from "@tanstack/react-router";
import storyAsset from "@/assets/ps-story.png.asset.json";
import storyImage from "@/assets/images/gallery/ps.jpg";
import rangoliCorner from "@/assets/logos/rangoli.png";
import inviteButton from "@/assets/logos/youre_invited.png";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story · Praveen & Surya" },
      {
        name: "description",
        content: "The story of Angu Praveen and Surya K — written in laughter, patience, and countless little moments.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-[#E4CBA9] py-14 text-center font-cotoris">
        <p className="text-xs uppercase tracking-[0.4em] text-[#AF5031]">Praveen &amp; Surya</p>
        <h1 className="mt-4 text-4xl sm:text-5xl text-[#092F33]">Our Story</h1>
      </section>

      {/* Narrative Section - Terracotta Background */}
      <section className="bg-[#AF5031] text-[#E4CBA9] py-16 sm:py-24 font-cotoris relative overflow-hidden">
        
        {/* Decorative Rangoli Corners */}
        <div className="absolute -bottom-[0px] -left-[120px] w-64 opacity-40 pointer-events-none">
          <img src={rangoliCorner} alt="" />
        </div>
        
        <div className="absolute -top-[0px] -right-[120px] w-64 opacity-40 rotate-180 pointer-events-none">
          <img src={rangoliCorner} alt="" />
        </div>

        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 items-center max-w-5xl relative z-10">
          <div className="space-y-6 leading-relaxed">
            <p className="text-lg italic text-[#E4CBA9]/90">Dear Family &amp; Friends,</p>
            <p className="text-lg">
              Every story has its own rhythm. Ours was written in laughter,
              patience, late-night conversations, and countless little moments
              that slowly became everything.
            </p>
            <p className="text-lg">
              Thank you for being part of our journey. We can't wait to celebrate
              the next chapter with all of you.
            </p>
            <p className="text-xl pt-4 italic">
              Love, P &amp; S
            </p>
          </div>
          
          {/* Photo Container */}
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-[#E4CBA9]/30 rounded-sm -rotate-2" aria-hidden />
            <img
              src={storyImage}
              alt="Praveen and Surya"
              className="relative w-full rounded-sm shadow-xl shadow-black/20 aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* You are Invited - Now matching the Terracotta background */}
      <section className="bg-[#AF5031] py-16 text-center font-cotoris flex justify-center pb-24">
        {/* CHANGED: Route target updated from "/invitation" to "/itinerary" */}
        <Link 
          to="/itinerary" 
          className="group relative block transition-transform hover:scale-105 active:scale-95"
        >
          <img 
            src={inviteButton} 
            alt="You are invited" 
            className="h-24 w-auto object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center text-[#E4CBA9] font-cotoris text-2xl pointer-events-none">
            You are invited!
          </span>
        </Link>
      </section>
    </>
  );
}