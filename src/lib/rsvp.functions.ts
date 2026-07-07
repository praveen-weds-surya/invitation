import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const rsvpSchema = z.object({
  guest_name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(320),
  attending: z.boolean(),
  guest_count: z.number().int().min(1).max(10),
  meal_preference: z.string().trim().max(60).optional().nullable(),
  dietary_notes: z.string().trim().max(500).optional().nullable(),
  events: z.array(z.enum(["sangeeth", "wedding"])).default([]),
  message: z.string().trim().max(1000).optional().nullable(),
});

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => rsvpSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("rsvps").insert({
      guest_name: data.guest_name,
      email: data.email,
      attending: data.attending,
      guest_count: data.guest_count,
      meal_preference: data.meal_preference ?? null,
      dietary_notes: data.dietary_notes ?? null,
      events: data.events,
      message: data.message ?? null,
    });
    if (error) {
      console.error("RSVP insert failed", error);
      throw new Error("Could not save your RSVP. Please try again.");
    }
    return { ok: true };
  });
