"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import GradientBackground from "@/components/GradientBackground";
import MagneticButton from "@/components/MagneticButton";
import HackerText from "@/components/HackerText";
import Hero3D from "@/components/Hero3D";
import CustomCursor from "@/components/CustomCursor";
import RevealWrapper from "@/components/RevealWrapper";
import FaqAccordion from "@/components/FaqAccordion";
import { translations, Language } from "@/locales/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("ru");
  const t = translations[lang];

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Mouse Parallax for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const titleX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const titleY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);
  
  const btnX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const btnY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const projectsData = t.projects.items.map((p, i) => {
    const media = [
      { img: "/projects/black_estate_light.png", device: "laptop" },
      { img: "/projects/qzzdeals.jpeg", device: "laptop" },
      { img: "/projects/velocity_mockup.png", device: "laptop" }
    ];
    return { ...p, ...media[i] };
  });

  return (
    <div ref={containerRef} className={styles.main}>
      <CustomCursor />
      <GradientBackground />
      
      {/* HEADER */}
      <header className={styles.header}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={styles.logo}
        >
          <HackerText text="Mark — Frontend" />
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.nav}
        >
          <a href="#projects" className="hover-link">{t.nav.cases}</a>
          <a href="#process" className="hover-link">{t.nav.process}</a>
          <a href="#contact" className="hover-link">{t.nav.contact}</a>
        </motion.nav>
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        >
          <button 
            onClick={() => setLang(lang === "ru" ? "en" : "ru")} 
            className="hover-link" 
            style={{ background: "transparent", border: "none", color: "var(--light-gray)", cursor: "pointer", fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase" }}
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
          <a href="#contact" className={`${styles.btn} hover-link`}>
            {t.nav.start}
          </a>
        </motion.div>
      </header>

      {/* HERO */}
      <motion.section 
        className={styles.hero}
        style={{ opacity: heroOpacity }}
      >
        <Hero3D />
        <motion.div className={styles.heroCenter}>
          <motion.h1 
            style={{ x: titleX, y: titleY }}
            className={`${styles.heroTitle} display-font`}
          >
            {t.hero.title1}<br/>
            <span className={styles.accentText}>{t.hero.title2}</span>
          </motion.h1>
          <motion.p 
            style={{ x: btnX, y: btnY }}
            className={styles.heroSubtitle}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div 
            style={{ x: btnX, y: btnY }}
            className={styles.heroActions}
          >
            <MagneticButton href="#projects" className={`${styles.btnPrimary} hover-link`}>{t.hero.btnPrimary}</MagneticButton>
            <MagneticButton href="#contact" className={`${styles.btnOutline} hover-link`}>{t.hero.btnOutline}</MagneticButton>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* TRUST METRICS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>{t.trust.daysValue}</div>
              <div className={styles.trustLabel}>{t.trust.daysLabel}</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>{t.trust.supportValue}</div>
              <div className={styles.trustLabel}>{t.trust.supportLabel}</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>{t.trust.mobileValue}</div>
              <div className={styles.trustLabel}>{t.trust.mobileLabel}</div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* PROJECTS - EDITORIAL LAYOUT */}
      <section id="projects" className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <h2 className={`display-font ${styles.sectionTitle}`}>{t.projects.title}</h2>
        </RevealWrapper>
        
        <div className={styles.editorialProjects}>
          {projectsData.map((p, i) => (
            <RevealWrapper key={i}>
              <div className={styles.editorialRow}>
                <div className={styles.editorialMeta}>
                  <span className={styles.editorialTag}>{p.tag}</span>
                  <h3 className={`display-font ${styles.editorialTitle}`}>{p.name}</h3>
                  <div className={styles.editorialStats}>
                    <p><strong>{t.projects.role}:</strong> {p.role}</p>
                    <p><strong>{t.projects.time}:</strong> {p.time}</p>
                    <p><strong>{t.projects.metric}:</strong> {p.metric}</p>
                  </div>
                  <div className={styles.editorialDesc}>
                    <p>{p.task}</p>
                    <p>{p.result}</p>
                  </div>
                  <Link href={`/projects/${p.slug}`} className={`${styles.editorialLink} hover-link`}>
                    {t.projects.readMore}
                  </Link>
                </div>
                
                {/* DEVICE MOCKUP */}
                <Link href={`/projects/${p.slug}`} className="hover-link">
                  <div className={`device-mockup device-${p.device}`}>
                    <div className="device-screen">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </Link>
                
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutHeader}>
              <h2 className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "2rem" }}>{t.about.title}</h2>
            </div>
            <div className={styles.aboutContent}>
              <h3 className="display-font" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>{t.about.greeting}</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--light-gray)", marginBottom: "1rem" }}>
                {t.about.p1}
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--light-gray)" }}>
                {t.about.p2}
              </p>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* PROCESS */}
      <section id="process" className={styles.section}>
        <RevealWrapper>
          <h2 className={`display-font ${styles.sectionTitle}`}>{t.process.title}</h2>
        </RevealWrapper>
        
        <div className={styles.editorialProcess}>
          {t.process.steps.map((s, i) => (
            <RevealWrapper key={i}>
              <div className={styles.editorialStep}>
                <div className={styles.stepNumLarge}>{s.num}</div>
                <div className={styles.stepContent}>
                  <h3 className="display-font">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <h2 className={`display-font ${styles.sectionTitle}`}>{t.faq.title}</h2>
        </RevealWrapper>
        
        <div className={styles.faqList}>
          {t.faq.items.map((item, i) => (
            <RevealWrapper key={i}>
              <FaqAccordion question={item.q} answer={item.a} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.finalSection}>
        <RevealWrapper>
          <div className={styles.finalContainer} style={{ gridTemplateColumns: "1fr", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className={styles.finalHeader} style={{ marginBottom: "4rem" }}>
              <h2 className="display-font" style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>{t.contact.title}</h2>
              <p className={styles.finalPromise} style={{ marginTop: "1.5rem" }}>{t.contact.subtitle}</p>
            </div>

            <div className={styles.heroActions} style={{ justifyContent: "center", gap: "2rem" }}>
              <MagneticButton href="https://t.me/wiberthx" className={`${styles.btnPrimary} hover-link`} style={{ fontSize: "1.1rem", padding: "1.2rem 2.5rem" }}>
                {t.contact.tgBtn}
              </MagneticButton>
              <MagneticButton href="mailto:mark.dev.web32@gmail.com" className={`${styles.btnOutline} hover-link`} style={{ fontSize: "1.1rem", padding: "1.2rem 2.5rem" }}>
                {t.contact.emailBtn}
              </MagneticButton>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <span style={{ color: "var(--light-gray)", fontSize: "0.95rem" }}>© {new Date().getFullYear()} Mark</span>
        </div>
        <div className={styles.footerSocials}>
          <a href="https://github.com/Exclusiveogurchik" className="hover-link">GitHub</a>
          <a href="https://t.me/wiberthx" className="hover-link">Telegram</a>
        </div>
      </footer>
    </div>
  );
}
