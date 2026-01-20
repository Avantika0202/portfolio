import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {subtitle && (
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
        {title}
      </h2>
      <div className={cn("h-1 w-16 bg-accent", centered && "mx-auto")} />
    </div>
  );
}
