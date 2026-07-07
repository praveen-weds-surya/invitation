import { motion } from "framer-motion";
import psLogo1 from "@/assets/logos/ps-logo1.svg"; // PS Initials
import psLogo2 from "@/assets/logos/ps-logo2.svg"; // The Frame

export const AnimatedLogo = () => {
  return (
    /* 
       - Added '-translate-x-10': This shifts the entire container to the left.
       - You can change it to '-translate-x-5' (less left) or '-translate-x-20' (further left).
    */
    <div className="relative grid place-items-center w-[90vw] max-w-[700px] aspect-square mx-auto -translate-x-2.5">
      
      {/* 1. The Frame */}
      <motion.img 
        src={psLogo2}
        alt="Decorative Frame"
        className="col-start-1 row-start-1 w-[80%] h-auto object-contain"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      
      {/* 2. The PS Initials */}
      <motion.img 
        src={psLogo1}
        alt="PS Initials"
        className="col-start-1 row-start-1 w-[50%] translate-x-[40px] translate-y-[30px] h-auto object-contain"
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