import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "btn-gradient text-white focus:ring-[#FF7A00] shadow-primary hover:shadow-primary-lg",
    secondary:
      "bg-white text-[#FF7A00] border-2 border-[#FF7A00] hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FF9A33] hover:text-white hover:border-transparent focus:ring-[#FF7A00] shadow-md hover:shadow-lg transition-all duration-300",
    outline:
      "bg-transparent text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white focus:ring-[#1A1A1A] hover:shadow-lg transition-all duration-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
