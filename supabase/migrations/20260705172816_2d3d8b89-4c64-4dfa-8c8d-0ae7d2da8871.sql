
DROP POLICY IF EXISTS "Anyone can submit an RSVP" ON public.rsvps;

CREATE POLICY "Anyone can submit a valid RSVP"
  ON public.rsvps FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(guest_name) BETWEEN 1 AND 120
    AND char_length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND guest_count BETWEEN 1 AND 10
  );
