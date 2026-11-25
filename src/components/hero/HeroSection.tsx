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

      {/* Let's Get Started Call to Action Button */}
      <motion.div 
        className="mt-6 sm:mt-8 w-full flex justify-center z-30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <Link 
          to="/story" 
          className="group inline-flex items-center justify-center rounded-full bg-[#E4CBA9] px-7 sm:px-8 py-2.5 sm:py-3 text-center font-serif text-sm sm:text-base font-medium text-[#2F3E1C] shadow-lg shadow-black/20 border border-white/40 transition-all duration-300 hover:bg-[#F5F1E6] hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer"
        >
          Let's Get Started
        </Link>
      </motion.div>

    </section>
  );
}