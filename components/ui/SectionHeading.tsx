"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn({ "text-center": centered }, className)}
    >
      <h2 className="font-serif text-3xl mobile:text-4xl tablet:text-5xl text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-sans text-warm-gray text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mb-8 mx-auto w-16 h-0.5 bg-rose-gold" />
    </motion.div>
  );
}