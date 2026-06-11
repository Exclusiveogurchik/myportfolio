"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CornerFaces() {
  const [faceIndex, setFaceIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Background positions to extract the 4 individual faces from the 2x2 grid
  const positions = [
    "0% 0%",
    "100% 0%",
    "0% 100%",
    "100% 100%"
  ];

  const handleNextFace = () => {
    setFaceIndex((prev) => (prev + 1) % 4);
  };

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
              background: "rgba(20, 20, 25, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid var(--border)",
              padding: "1rem",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px"
            }}
          >
            <p style={{ 
              fontSize: "0.85rem", 
              color: "var(--light-gray)", 
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: 600
            }}>
              Кликни на фото
            </p>
            <motion.div
              onClick={handleNextFace}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "16px",
                backgroundImage: "url('/faces.png')",
                backgroundSize: "200% 200%",
                backgroundPosition: positions[faceIndex],
                cursor: "pointer",
                border: "2px solid var(--accent)",
                boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
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
