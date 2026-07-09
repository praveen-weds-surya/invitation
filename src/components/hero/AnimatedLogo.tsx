import { motion } from "framer-motion";
import psLogo1 from "@/assets/logos/ps-logo1.svg"; // PS Initials
import psLogo2 from "@/assets/logos/ps-logo2.svg"; // The Frame

export const AnimatedLogo = () => {
  return (
    /* 1. THE UNBREAKABLE SQUARE:
      w-full and aspect-square forces this box to always be a perfect 1:1 square.
      It will max out at 700px on PC, and shrink down perfectly on mobile.
      Because it's a perfect square, nothing inside it will ever stretch or elongate.
    */
    <div className="relative w-full max-w-[700px] aspect-square mx-auto">
      
      {/* 2. THE FRAME */}
      {/* Anchored exactly to the dead center (50% / 50%) */}
      <motion.img 
        src={psLogo2}
        alt="Decorative Frame"
        className="absolute top-[50%] left-[45.6%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto object-contain z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      {/* 3. THE INITIALS */}
      {/* Anchored slightly off-center (55.7% Left / 54.3% Top). 
          This perfectly replicates your 40px/30px nudge, but locks it as a percentage 
          so it scales identically on a massive monitor or a tiny phone screen. 
      */}
      <motion.img 
        src={psLogo1}
        alt="PS Initials"
        className="absolute top-[54.3%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-auto object-contain z-20"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          delay: 1.5, 
          type: "spring", 
          stiffness: 60, 
          damping: 20 
        }}
      />
      
    </div>
  );
};