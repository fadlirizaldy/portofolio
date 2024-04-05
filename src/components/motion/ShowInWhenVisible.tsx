"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: -200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
};

const ShowInWhenVisible = ({ children, duration = 0.5 }: { children: ReactNode; duration: Number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="enter"
      viewport={{ once: true }}
      transition={{ duration }}
      variants={{
        enter: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, y: -20, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ShowInWhenVisible;
