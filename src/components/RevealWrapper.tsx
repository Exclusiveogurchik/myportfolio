"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    // Initial state
    gsap.set(el, {
      opacity: 0,
      y: 100,
      scale: 0.9,
      filter: "blur(20px)",
      rotationX: 10
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%", // Trigger when top of element hits 85% of viewport
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          overwrite: "auto"
        });
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ transformPerspective: "1000px" }}>
      {children}
    </div>
  );
}
