import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Plane, BedDouble, Gift } from "lucide-react";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "Travel & Details · Praveen & Surya" },
      { name: "description", content: "Venue, travel, accommodation and gift registry details for the wedding of Angu Praveen & Surya K." },
      { property: "og:title", content: "Travel & Details · Praveen & Surya" },
      { property: "og:description", content: "Getting there, staying comfortably, and celebrating together." },
    ],
  }),
  component: Details,
});

function Card({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
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

function Details() {
  return (
    <>
      <section className="bg-beige py-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Everything you need</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-primary">Travel &amp; Details</h1>
        <div className="divider-motif mt-6" />
      </section>

      <section className="container-w py-16 grid gap-6 md:grid-cols-2">
        <Card icon={MapPin} title="The Venue">
          <p className="font-serif text-lg text-primary">Club 6 Convention Centre</p>
          <p>Kallepully Road, Ramanathapuram,<br />Palakkad, Kerala – 678001</p>
          <a
            className="inline-block text-accent hover:underline text-sm mt-2"
            href="https://maps.google.com/?q=Club+6+Convention+Centre+Kallepully+Road+Palakkad"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps →
          </a>
        </Card>

        <Card icon={Plane} title="Getting to Palakkad">
          <p><strong className="text-primary">By air:</strong> Coimbatore International Airport (CJB) — 55 km. Cochin International (COK) — 150 km.</p>
          <p><strong className="text-primary">By rail:</strong> Palakkad Junction (PGT) — 4 km from the venue.</p>
          <p><strong className="text-primary">By road:</strong> Palakkad is well-connected on NH-544.</p>
        </Card>

        <Card icon={BedDouble} title="Accommodation">
          <p>We've reserved a room block at partner hotels near the venue.</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Hotel Sreesakthi Continental — 2 km</li>
            <li>The Residency Kovai (nearby) — 3 km</li>
            <li>Indraprastha Resorts — 6 km</li>
          </ul>
          <p className="text-sm">Please mention "Praveen &amp; Surya wedding" when booking to access the group rate.</p>
        </Card>

        <Card icon={Gift} title="Gift Registry">
          <p>
            Your presence is our greatest gift. If you'd like to bless us with
            something more, we're saving toward our new home and honeymoon travels.
          </p>
          <p className="text-sm">Please reach out to any family member for account details, or contribute on the day of the celebration.</p>
        </Card>
      </section>
    </>
  );
}
