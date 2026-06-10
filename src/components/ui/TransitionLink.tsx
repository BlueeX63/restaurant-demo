"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    // Trigger the staircase to cover the screen
    window.dispatchEvent(new Event("trigger-transition-in"));
    
    // Wait for the animation to finish
    await sleep(600); 
    
    // Navigate to the new page
    router.push(href.toString());
  };

  return (
    <Link {...props} href={href} onClick={handleTransition} className={className}>
      {children}
    </Link>
  );
}
