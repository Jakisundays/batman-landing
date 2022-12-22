"use client";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import { GiBatMask } from "react-icons/gi";
const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div
      className="absolute 
    w-[50%] 
    inset-0 
    gradient-01"
    />

    <div
      className={`${styles.innerWidth} 
      mx-auto 
      flex 
      justify-between
      gap-8`}
    >
      <GiBatMask
        className="
        w-[44px] 
        h-[44px] 
        object-contain"
      />
      <h2
        className="
      font-extrabold 
      text-[24] 
      leading-[30px] 
      text-white"
      >
        Gotham
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24] h-[24] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
