import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/hero/HeroSection";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <HeroSection />;
}