"use client";

import { useState } from "react";
import styles from "./Mascot.module.css";

export default function Mascot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <div 
      className={styles.mascotContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`${styles.speechBubble} ${(isHovered || isClicked) ? styles.showBubble : ""}`}>
        {isClicked ? "Мяу! 🐾" : "Привет! Я тут слежу за багами."}
      </div>
      
      <div className={`${styles.blob} ${isClicked ? styles.happy : ""}`}>
        <div className={styles.eyes}>
          <div className={`${styles.eye} ${isHovered ? styles.eyeHover : ""}`}></div>
          <div className={`${styles.eye} ${isHovered ? styles.eyeHover : ""}`}></div>
        </div>
        <div className={styles.mouth}></div>
      </div>
    </div>
  );
}
