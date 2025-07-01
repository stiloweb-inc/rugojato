"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 112;

      const scrollPosition = window.scrollY;
      let newActiveSection = "";

      for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const targetId = item.href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const { offsetTop, offsetHeight } = targetElement;
          const sectionTop = offsetTop - headerOffset;
          const sectionBottom = offsetTop + offsetHeight - headerOffset;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSection = item.href;

            if (
              i === menuItems.length - 1 &&
              window.innerHeight + window.scrollY >= document.body.offsetHeight
            ) {
              newActiveSection = item.href;
            }
          }
        }
      }

      if (!newActiveSection && menuItems.length > 0) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          newActiveSection = menuItems[menuItems.length - 1].href;
        } else {
          newActiveSection = menuItems[0].href;
        }
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  return (
    <div className={cn("flex uppercase text-sm font-semibold", className)}>
      {menuItems.map((item, index) => {
        const isActive = activeSection === item.href;

        return (
          <Link
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "py-2 px-4 relative",
              "text-secondary dark:text-zinc-50",
              isActive && hovered === null
                ? "text-blue-600 dark:text-blue-400"
                : ""
            )}
            key={`${item.label}-${index}`}
            href={item.href}
          >
            {(hovered === index || (isActive && hovered === null)) && (
              <motion.div
                layoutId="fluid-indicator"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={cn(
                  "absolute inset-0 rounded-full bg-secondary/10",
                  isActive && hovered === null
                    ? "bg-blue-100 dark:bg-blue-900/50"
                    : "",
                  indicatorClassName
                )}
              />
            )}
            <span className="font-semibold text-sm z-20 relative">
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};
