"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type MenuItem = {
  label: string;
  href: string;
};

interface MenuFluidProps {
  menuItems: MenuItem[];
  className?: string;
  indicatorClassName?: string;
}

export const MenuFluid = ({
  menuItems,
  className,
  indicatorClassName,
}: MenuFluidProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className={cn("uppercase text-sm font-semibold", className)}>
      {menuItems.map((item, index) => (
        <Link
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="py-2 px-4 relative text-secondary dark:text-zinc-50"
          key={`${item.label}-${index}`}
          href={item.href}
        >
          {hovered === index && (
            <motion.div
              layoutId="fluid"
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className={cn(
                "absolute inset-0 rounded-full bg-secondary/10",
                indicatorClassName
              )}
            />
          )}
          <span className="font-semibold text-sm z-20 relative">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};
