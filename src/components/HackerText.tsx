"use client";

import { useState, useEffect } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface HackerTextProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
}

export default function HackerText({ text, className = "", triggerOnHover = true }: HackerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // If not triggering on hover, trigger once on mount
    if (!triggerOnHover && !isHovering) {
      setIsHovering(true);
    }
  }, [triggerOnHover, isHovering]);

  useEffect(() => {
    if (!isHovering && triggerOnHover) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            // Preserve spaces
            if (letter === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Speed of reveal
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering, text, triggerOnHover]);

  return (
    <span 
      className={className} 
      onMouseEnter={() => triggerOnHover && setIsHovering(true)}
      onMouseLeave={() => triggerOnHover && setIsHovering(false)}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
}
