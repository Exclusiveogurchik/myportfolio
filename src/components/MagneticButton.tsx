"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({ children, className = "", onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Magnetic pull strength (20% of distance from center)
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    setIsHovering(true);
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const { x, y } = position;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y, scale: isHovering ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={className}
      onClick={onClick}
      style={{ display: "inline-flex", cursor: "none" }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} style={{ display: "inline-block" }}>
        {content}
      </a>
    );
  }

  return content;
}
