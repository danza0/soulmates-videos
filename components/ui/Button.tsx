"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-rose-gold text-white hover:bg-champagne": variant === "primary",
            "border-2 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white":
              variant === "secondary",
            "text-rose-gold hover:text-champagne": variant === "ghost",
          },
          {
            "h-9 px-4 text-sm min-w-[44px]": size === "sm",
            "h-11 px-6 text-base min-w-[44px]": size === "md",
            "h-14 px-8 text-lg min-w-[44px]": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;