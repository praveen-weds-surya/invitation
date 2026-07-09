import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Plane } from "lucide-react";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "Travel & Details · Praveen & Surya" },
      { name: "description", content: "Venue and travel details for the wedding of Angu Praveen & Surya K." },
      { property: "og:title", content: "Travel & Details · Praveen & Surya" },
      { property: "og:description", content: "Getting there and celebrating together." },
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
        <h3 className="text-2xl text-primary">{title}</h3>
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
        <h1 className="mt-4 text-4xl sm:text-5xl text-primary">Travel &amp; Details</h1>
        
      </section>

      <section className="container-w py-16 grid gap-6 md:grid-cols-2">
        <Card icon={MapPin} title="The Venue">
          <p className="text-lg text-primary">Club 6 Convention Centre</p>
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
      </section>
    </>
  );
}