"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CornerFaces() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [wobble, setWobble] = useState(0);

  // Background positions to extract the 4 individual faces from the 2x2 grid
  const positions = [
    "0% 0%",
    "100% 0%",
    "0% 100%",
    "100% 100%"
  ];

  // Auto-switch face every 2 seconds
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setFaceIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Stop-motion paper wobble effect (sharp, no animation)
  useEffect(() => {
    if (!isOpen) return;
    const wobbleInterval = setInterval(() => {
      const angles = [-6, -3, 0, 3, 6];
      setWobble(angles[Math.floor(Math.random() * angles.length)]);
    }, 150);
    return () => clearInterval(wobbleInterval);
  }, [isOpen]);

  return (
    <div style={{ 
      position: "fixed", 
      bottom: "30px", 
      right: "30px", 
      zIndex: 100, 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "flex-end", 
      gap: "10px" 
    }}>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            style={{
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px"
            }}
          >
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "16px",
                backgroundImage: "url('/faces.png')",
                backgroundSize: "200% 200%",
                backgroundPosition: positions[faceIndex],
                border: "4px solid white",
                boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
                transform: `rotate(${wobble}deg)`,
                transition: "none" // Crucial for the stop-motion paper effect
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 20px var(--accent-glow)",
          pointerEvents: "auto",
          outline: "none"
        }}
      >
        {isOpen ? "✕" : "😎"}
      </motion.button>

    </div>
  );
}
