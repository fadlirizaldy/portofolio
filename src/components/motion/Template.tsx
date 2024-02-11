"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={variants} initial="hidden" whileInView="enter" transition={{ type: "linear" }}>
      {children}
    </motion.div>
  );
}
