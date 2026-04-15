import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  variant?: "cream" | "ivory";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = "cream",
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 mobile:py-20 tablet:py-24",
        {
          "bg-cream": variant === "cream",
          "bg-ivory": variant === "ivory",
        },
        className
      )}
    >
      {children}
    </section>
  );
}