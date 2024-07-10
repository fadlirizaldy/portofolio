"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function ShowFromBottom({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="enter"
      transition={{ type: "spring", staggerChildren: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
