"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-background/90 backdrop-blur-md py-4 shadow-sm text-foreground" 
          : (pathname === "/" ? "bg-transparent py-6 text-white" : "bg-transparent py-6 text-foreground")
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <TransitionLink href="/" className="font-serif text-2xl tracking-tight font-semibold">
          Aurelia
        </TransitionLink>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <TransitionLink
              key={link.name}
              href={link.path}
              className="relative text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors group opacity-80 hover:opacity-100"
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </TransitionLink>
          ))}
        </div>
        
        {/* Mobile menu trigger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-[2px] bg-current" />
          <div className="w-6 h-[2px] bg-current" />
        </button>
      </div>
    </motion.nav>
  );
}
