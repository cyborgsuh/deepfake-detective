
import { cn } from "@/lib/utils";
import React from "react";

interface Hover3DCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Hover3DCard = ({
  children,
  className,
  title,
  subtitle,
}: Hover3DCardProps) => {
  return (
    <div className={cn("container relative w-full h-full min-h-[254px] transition-[200ms]", className)}>
      <div className="canvas perspective-[800px] inset-0 z-[200] absolute grid grid-cols-5 grid-rows-5 gap-0">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`tr-${i + 1} tracker`} />
        ))}
      </div>
      
      <div id="card" className="absolute inset-0 z-0 flex justify-center items-center rounded-[20px] transition-[700ms] bg-gradient-to-br from-primary via-accent to-primary-foreground p-6">
        {title && (
          <span className="title opacity-0 transition-[300ms] ease-in-out delay-100 absolute text-xl font-bold text-white">
            {title}
          </span>
        )}
        {subtitle && (
          <span className="subtitle transform translate-y-40 text-primary text-center w-full">
            {subtitle}
          </span>
        )}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
