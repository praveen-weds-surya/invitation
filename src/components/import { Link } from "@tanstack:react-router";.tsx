import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import psLogo from "@/assets/logos/ps-logo.gif";

export function HeroSection() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Adjust this to match your GIF duration.
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#4B5B34]">

      {/* Animated Logo */}
      <img
        src={psLogo}
        alt="Praveen & Surya"
        className="w-[340px] max-w-[80vw] select-none"
        draggable={false}
      />

      {/* Bottom CTA */}
      <div
        className={`absolute bottom-16 flex flex-col items-center transition-all duration-1000 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <Link
          to="/story"
          className="group flex flex-col items-center"
        >
          <span
            className="
            font-serif
            text-3xl
            text-[#E4CBA9]
            transition-all
            duration-300
            group-hover:tracking-wider
          "
          >
            Let's Get Started
          </span>

          <span
            className="
            mt-5
            text-4xl
            text-[#E4CBA9]
            animate-bounce
            transition-all
            duration-300
            group-hover:translate-y-2
          "
          >
            ↓
          </span>
        </Link>
      </div>
    </section>
  );
}