"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FaqAccordion.module.css";

interface FaqProps {
  question: string;
  answer: string;
}

export default function FaqAccordion({ question, answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.faqHeader}>
        <h3 className={`display-font ${styles.faqQuestion}`}>{question}</h3>
        <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <div className={styles.horizontal}></div>
          <div className={styles.vertical}></div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className={styles.faqAnswer}>
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
