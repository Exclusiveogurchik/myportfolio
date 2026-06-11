"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for raw mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for super smooth tracking
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, input, textarea, .hover-link');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{ left: cursorXSpring, top: cursorYSpring }}
    />
  );
}
