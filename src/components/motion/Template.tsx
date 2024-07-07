"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

export default function ShowFromBottom({ children, className, onClick, key }: { children: React.ReactNode, className?:string,onClick?:()=>void, key:any }) {
  return (
    <motion.div key={key} variants={variants} initial="hidden" whileInView="enter" transition={{ type: "linear", duration: 0.8, staggerChildren: 0.5 }} className={className} onClick={onClick}>
      {children}
    </motion.div>
  );
}
