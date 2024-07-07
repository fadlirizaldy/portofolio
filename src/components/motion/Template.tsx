"use client";
import { motion } from "framer-motion";

const variants = {
  enter: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delay: 0.3,
    },
  },
  hidden: {
    x: 0,
    y:30,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  // hidden: { opacity: 0, y: 30, x: 0 },
  // enter: { opacity: 1, y: 0, x: 0 },
};

export default function ShowFromBottom({ children, className }: { children: React.ReactNode, className?:string }) {
  return (
    <motion.div variants={variants} initial="hidden" whileInView="enter" transition={{ type: "linear", duration: 0.8, staggerChildren: 0.5 }} className={className}>
      {children}
    </motion.div>
  );
}
