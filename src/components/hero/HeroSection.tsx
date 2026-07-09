import { AnimatedLogo } from './AnimatedLogo';
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    /* min-h-[100dvh] ensures the section never squashes when the mobile browser menu appears */
    <section className="min-h-[100dvh] bg-[#4B5B34] flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      {/* Logo Container - Strictly Centered */}
      <div className="w-full flex justify-center items-center">
        {/* We wrap the logo in a container that handles the width scaling gracefully */}
        <div className="w-[90%] sm:w-[80%] max-w-[700px]">
          <AnimatedLogo />
        </div>
      </div>

      {/* Let's Get Started Call to Action */}
      <motion.div 
        className="mt-8 sm:mt-12 w-full flex justify-center z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link to="/story" className="group flex flex-col items-center text-[#E4CBA9] select-none">
          <span className="font-serif text-xl sm:text-2xl transition-all tracking-normal group-hover:tracking-[0.2em] duration-300">
            Let's Get Started
          </span>
          <span className="mt-3 sm:mt-4 text-lg sm:text-xl animate-bounce">↓</span>
        </Link>
      </motion.div>

    </section>
  );
}