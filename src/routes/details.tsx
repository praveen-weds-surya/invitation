import { createFileRoute } from "@tanstack/react-router";
import { 
  MapPin, 
  Plane, 
  Compass, 
  Palmtree, 
  Mountain, 
  Waves, 
  Trees, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "Travel & Explore · Praveen & Surya" },
      { name: "description", content: "Venue, travel logistics, and places to explore around Palakkad, Alleppey, Kochi, Athirappilly, and Valparai." },
      { property: "og:title", content: "Travel & Explore · Praveen & Surya" },
      { property: "og:description", content: "Getting there and extended vacation ideas around Kerala." },
    ],
  }),
  component: Details,
});

function Card({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
          <Icon size={18} />
        </span>
        <h3 className="font-serif text-2xl text-primary">{title}</h3>
      </div>
      <div className="mt-5 text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

interface PlaceCardProps {
  name: string;
  distance: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: typeof MapPin;
}

function PlaceCard({ name, distance, tag, description, highlights, icon: Icon }: PlaceCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/40">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
            <Icon size={20} />
          </span>
          <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
            {distance}
          </span>
        </div>

        <h3 className="font-serif text-2xl text-primary font-semibold leading-tight mb-1.5">
          {name}
        </h3>

        <p className="text-xs uppercase tracking-[0.1em] font-semibold text-primary/60 mb-3">
          {tag}
        </p>

        <p className="text-sm text-foreground/80 leading-relaxed mb-5">
          {description}
        </p>
      </div>

      <div className="border-t border-border/60 pt-4 mt-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2.5">Must See &amp; Do:</p>
        <ul className="space-y-1.5 text-xs text-muted-foreground">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-1" />
              <span className="leading-tight">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Page Header */}
      <section className="bg-beige py-14 text-center border-b border-border/40">
        <p className="text-xs uppercase tracking-[0.12em] font-semibold text-accent">Getting There &amp; Beyond</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-primary">Travel &amp; Explore</h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto px-4">
          Key logistics for reaching the celebration, plus hand-picked destinations to make an unforgettable Kerala vacation out of your trip.
        </p>
      </section>

      {/* Logistics Cards: Venue & Travel */}
      <section className="container-w py-14 grid gap-6 md:grid-cols-2">
        <Card icon={MapPin} title="The Venue">
          <p className="text-lg font-medium text-primary">Club 6 Convention Centre</p>
          <p>Kallepully Road, Ramanathapuram,<br />Palakkad, Kerala – 678001</p>
          <a
            className="inline-flex items-center gap-1.5 text-accent hover:underline text-sm mt-3 font-medium"
            href="https://maps.google.com/?q=Club+6+Convention+Centre+Kallepully+Road+Palakkad"
            target="_blank"
            rel="noreferrer"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={14} />
          </a>
        </Card>

        <Card icon={Plane} title="Getting to Palakkad">
          <p><strong className="text-primary font-semibold">By air:</strong> Coimbatore International Airport (CJB) is the nearest airport, located just 55 km (approx. 1 hour drive) away. Cochin International Airport (COK) is ~135 km (approx. 2.5–3 hours).</p>
          <p><strong className="text-primary font-semibold">By rail:</strong> Palakkad Junction (PGT) is a major South Indian railway hub, situated just 4 km from the venue.</p>
          <p><strong className="text-primary font-semibold">By road:</strong> Palakkad is directly connected via National Highway 544 (Salem–Kochi Highway), with frequent taxis and bus connections.</p>
        </Card>
      </section>

      {/* Section Divider */}
      <div className="container-w">
        <div className="divider-motif my-4" />
      </div>

      {/* Part 1: Things to Do in & around Palakkad */}
      <section className="container-w pt-12 pb-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-semibold text-accent mb-2">
            <Compass size={14} />
            Local Gems
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Around Palakkad (Day Trips)
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Have a free morning or afternoon? Explore these local favorites right around the corner from the wedding venue.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PlaceCard
            name="Malampuzha Dam & Gardens"
            distance="~12 km · 25 mins"
            tag="Scenic Dam & Ropeway"
            description="Perched against the Western Ghats, Malampuzha features lush terraced gardens, an aerial passenger ropeway soaring across the reservoir, pedal boating, and an artistic Rock Garden crafted from broken bangles and tiles."
            highlights={[
              "Aerial cable car passenger ropeway",
              "Iconic Yakshi sculpture by Kanayi Kunhiraman",
              "Nek Chand Rock Garden & reservoir boating"
            ]}
            icon={Waves}
          />

          <PlaceCard
            name="Palakkad Fort & Kalpathy"
            distance="~4 km · 10 mins"
            tag="History & Heritage"
            description="Explore the historic 18th-century granite fort built by Hyder Ali & Tipu Sultan, surrounded by an expansive moat. Just minutes away lies Kalpathy, one of Kerala's oldest Brahmin agraharams with traditional heritage streets."
            highlights={[
              "Stroll through the verdant fort grounds & ramparts",
              "Walk along traditional heritage agraharam streets",
              "Savor authentic South Indian filter coffee & snacks"
            ]}
            icon={Compass}
          />

          <PlaceCard
            name="Nelliyampathy Hills"
            distance="~60 km · 1.5 hrs"
            tag="Misty Hill Station"
            description="Known affectionately as the 'Poor Man's Ooty', this winding drive passes the Pothundy Dam into cool cloud-capped peaks, rolling tea, coffee and orange orchards, and dramatic cliff viewpoints."
            highlights={[
              "Kesavampara & Seetharkundu cliff viewpoints",
              "Pothundy Dam catchment area stops",
              "Fresh organic tea & orange farm produce"
            ]}
            icon={Mountain}
          />
        </div>
      </section>

      {/* Part 2: Extended Vacation across Kerala & Western Ghats */}
      <section className="container-w pt-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] font-semibold text-accent mb-2">
            <Sparkles size={14} />
            Make a Holiday of It
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Extended Vacation Getaways
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            February is the absolute best time of year to visit Kerala—crisp breezes, clear skies, and lush green hills. Here are our favorite places to spend 2 to 4 days before or after the wedding!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <PlaceCard
            name="Athirappilly & Vazhachal"
            distance="~100 km · 2.5 hrs"
            tag="The Niagara of India"
            description="Kerala's most majestic 80-foot waterfall cascading through dense Sholayar rainforests (famously seen in Baahubali and Dil Se). A dramatic and refreshing nature escape."
            highlights={[
              "Hike down to the roaring base of Athirappilly Falls",
              "Visit neighboring Vazhachal & Charpa falls",
              "Scenic rainforest highway drive with hornbill sightings"
            ]}
            icon={Trees}
          />

          <PlaceCard
            name="Valparai & Anamalai"
            distance="~110 km · 3 hrs"
            tag="Tea Estates & 40 Hairpins"
            description="An exhilarating road trip ascending 40 hairpin curves from Pollachi into tea estates and evergreen shola forests. Famous for cool weather, Lion-tailed macaques, and tranquility."
            highlights={[
              "Scenic 40-hairpin bend mountain drive",
              "Sholayar Dam & scenic tea estate viewpoints",
              "Lush, tranquil boutique bungalow stays"
            ]}
            icon={Mountain}
          />

          <PlaceCard
            name="Kochi & Fort Kochi"
            distance="~145 km · 3.5 hrs"
            tag="Art, History & Seaside"
            description="A coastal paradise where Portuguese, Dutch, and British history meets Kerala's spice culture. Wander past iconic Chinese fishing nets, boutique art galleries, and waterfront cafes."
            highlights={[
              "Sunset at Fort Kochi Chinese fishing nets",
              "Jew Town spice markets, antiques & Synagogue",
              "Hip cafes, heritage bistros & Mattancherry Palace"
            ]}
            icon={Palmtree}
          />

          <PlaceCard
            name="Alleppey (Alappuzha)"
            distance="~195 km · 4.5 hrs"
            tag="World-Famous Backwaters"
            description="The 'Venice of the East'. Step aboard a traditional thatched houseboat (Kettuvallam) and drift along calm emerald lagoons, paddy fields, and peaceful village shores."
            highlights={[
              "Overnight cruise on a private traditional houseboat",
              "Authentic Karimeen pollichathu & Kerala meals on board",
              "Canoe rides through intimate village canals"
            ]}
            icon={Waves}
          />
        </div>

        {/* Travel Tip Banner */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl text-primary font-medium mb-2">
            Tip for Our Guests Traveling from Afar
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            February is peak travel season in Kerala thanks to its dry, pleasant weather. If you plan to rent a houseboat in Alleppey, stay in Valparai tea bungalows, or book boutique hotels in Fort Kochi, we suggest booking your stays a few weeks in advance!
          </p>
        </div>
      </section>
    </div>
  );
}
