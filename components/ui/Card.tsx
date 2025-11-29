import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover ? { y: -8, scale: 1.02, transition: { duration: 0.3 } } : {}
      }
      className={`card hover-lift ${className}`}
    >
      {children}
    </motion.div>
  );
}
