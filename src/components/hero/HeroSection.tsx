import { AnimatedLogo } from './AnimatedLogo';
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-[#4B5B34] flex flex-col items-center justify-center p-6">
      
      {/* Logo Container */}
      {/* - mx-auto: Centers the container horizontally.
         - -translate-x-[Xpx]: Change this value to nudge the logo left or right. 
      */}
      <div className="w-full flex justify-center items-center -translate-x-5">
        <AnimatedLogo />
      </div>

      {/* Let's Get Started */}
      <motion.div 
        className="mt-12 w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Link to="/story" className="group flex flex-col items-center text-[#E4CBA9]">
          <span className="font-serif text-2xl transition-all group-hover:tracking-[0.2em]">
            Let's Get Started
          </span>
          <span className="mt-4 animate-bounce">↓</span>
        </Link>
      </motion.div>
    </section>
  );
}