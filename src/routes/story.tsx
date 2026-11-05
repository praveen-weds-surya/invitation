import { createFileRoute, Link } from "@tanstack/react-router";
import storyAsset from "@/assets/ps-story.png.asset.json";
import storyImage from "@/assets/images/gallery/ps.jpg";
import rangoliCorner from "@/assets/logos/rangoli.png";
import inviteButton from "@/assets/logos/youre_invited.png";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "No Backstory, Just Vibes · Praveen & Surya" },
      {
        name: "description",
        content: "Two people, two families, a whole lot of planning and one very big celebration. Praveen & Surya.",
      },
    ],
  }),
  component: Story,
});

function Story() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-[#E4CBA9] py-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-[#AF5031]">Praveen &amp; Surya</p>
        <h1 className="mt-4 text-4xl sm:text-5xl text-[#092F33] font-serif">No Backstory, Just Vibes</h1>
      </section>

      {/* Narrative Section - Terracotta Background */}
      <section className="bg-[#AF5031] text-[#E4CBA9] py-16 sm:py-24 relative overflow-hidden">
        
        {/* Decorative Rangoli Corners */}
        <div className="absolute -bottom-[0px] -left-[120px] w-64 opacity-40 pointer-events-none">
          <img src={rangoliCorner} alt="" />
        </div>
        
        <div className="absolute -top-[0px] -right-[120px] w-64 opacity-40 rotate-180 pointer-events-none">
          <img src={rangoliCorner} alt="" />
        </div>

        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 items-center max-w-5xl relative z-10">
          <div className="space-y-6 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif italic text-[#E4CBA9]">Well, here we are!</h2>
            <p className="text-lg">
              Two people, two families, a whole lot of planning and one very big celebration.
            </p>
            <p className="text-lg">
              We're skipping the long love story and getting straight to the part we're most excited about, having all our favourite people together in one place.
            </p>
            <p className="text-lg">
              There'll be celebrations, good food, happy chaos and, hopefully, a few stories we'll be talking about for years to come.
            </p>
            <p className="text-lg">
              We can't think of a better way to begin this next chapter than with all of you around.
            </p>
            <p className="text-lg font-medium">
              Here's to a lovely celebration. We can't wait to see you!
            </p>
            <p className="text-xl pt-4 italic">
              With love, <br />
              Praveen &amp; Surya
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

      {/* You are Invited */}
      <section className="bg-[#AF5031] py-16 text-center flex justify-center pb-24">
        <Link 
          to="/itinerary" 
          className="group relative block transition-transform hover:scale-105 active:scale-95"
        >
          <img 
            src={inviteButton} 
            alt="You are invited" 
            className="h-24 w-auto object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center text-[#E4CBA9] font-serif text-2xl pointer-events-none">
            You are invited!
          </span>
        </Link>
      </section>
    </>
  );
}
