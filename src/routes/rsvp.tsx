import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: "RSVP · Praveen & Surya" },
      { name: "description", content: "Kindly respond by 1 February 2027 for the wedding of Angu Praveen & Surya K." },
      { property: "og:title", content: "RSVP · Praveen & Surya" },
      { property: "og:description", content: "Please let us know if you'll be joining us." },
    ],
  }),
  component: RsvpPage,
});

function RsvpPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      // Append hidden fallback fields so your Formspree data records stay complete
      fd.append("meal_preference", "vegetarian");
      fd.append("events", attending === "yes" ? "sangeeth, wedding" : "none");

      // Post directly to your new Formspree endpoint
      const response = await fetch("https://formspree.io/f/xwvdzyqw", {
        method: "POST",
        body: fd,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setDone(true);
        toast.success("Your RSVP has been received. Thank you!");
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="bg-beige py-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">Kindly respond</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-primary">RSVP</h1>
        <div className="divider-motif mt-6" />
      </section>

      <section className="container-w py-16 max-w-2xl">
        {done ? (
          <div className="rounded-lg border border-accent/30 bg-card p-10 text-center">
            <h2 className="font-serif text-3xl text-primary">Thank you!</h2>
            <p className="mt-4 text-muted-foreground">
              Your response has been received. We can't wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6 rounded-lg border border-border bg-card p-6 sm:p-10 shadow-sm">
            <Field label="Full name" htmlFor="guest_name">
              <input id="guest_name" name="guest_name" required maxLength={120} className={input} />
            </Field>

            <Field label="Email" htmlFor="email">
              <input id="email" name="email" type="email" required maxLength={320} className={input} />
            </Field>

            <div>
              <label className="text-sm uppercase tracking-[0.2em] text-primary/70">Will you be attending?</label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {(["yes", "no"] as const).map((v) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => setAttending(v)}
                    className={
                      "rounded-md border px-4 py-3 font-serif text-lg transition-colors " +
                      (attending === v
                        ? "bg-accent border-accent text-cream"
                        : "bg-background border-border text-primary hover:bg-beige")
                    }
                  >
                    {v === "yes" ? "Joyfully accepts" : "Regretfully declines"}
                  </button>
                ))}
              </div>
              {/* Maps button state explicitly to a named text input for Formspree to parse */}
              <input type="hidden" name="attending" value={attending === "yes" ? "Joyfully accepts" : "Regretfully declines"} />
            </div>

            {attending === "yes" && (
              <Field label="Number of guests (incl. yourself)" htmlFor="guest_count">
                <input id="guest_count" name="guest_count" type="number" min={1} max={10} defaultValue={1} required className={input} />
              </Field>
            )}

            <Field label="A note for the couple (optional)" htmlFor="message">
              <textarea id="message" name="message" rows={3} maxLength={1000} className={input} />
            </Field>

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? "Sending..." : "Send RSVP"}
            </button>
          </form>
        )}
      </section>
    </>
  );
}

const input =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-base text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition";

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm uppercase tracking-[0.2em] text-primary/70 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}