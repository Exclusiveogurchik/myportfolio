"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Accordion from "@/components/Accordion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const faqItems = [
    { question: "Сколько занимает разработка сайта?", answer: "Обычно от нескольких дней до нескольких недель в зависимости от сложности проекта. Точные сроки обсуждаются после постановки задачи." },
    { question: "Работаете ли вы с готовым дизайном?", answer: "Да, я могу сверстать сайт по вашему готовому дизайн-макету из Figma, сохраняя идеальную точность (Pixel Perfect)." },
    { question: "Можно ли внести правки после запуска?", answer: "Да, базовая поддержка после запуска включена. Дополнительные масштабные правки или поддержка обсуждаются индивидуально." }
  ];

  const projects = [
    { 
      slug: "black-estate",
      tag: "Real Estate", 
      name: "Black Estate", 
      task: "Создать современный и премиальный образ бренда агентства недвижимости.",
      result: "Минималистичный дизайн с акцентом на объекты недвижимости и удобный каталог.",
      img: "/projects/black_estate_mockup_1781178303072.png" 
    },
    { 
      slug: "nova-ai",
      tag: "SaaS", 
      name: "Nova AI", 
      task: "Разработать интерфейс для платформы автоматизации бизнес-процессов с ИИ.",
      result: "Удобный и интуитивно понятный дашборд с футуристичным, но строгим дизайном.",
      img: "/projects/nova_ai_mockup_1781178337765.png" 
    },
    { 
      slug: "finflow",
      tag: "Finance", 
      name: "FinFlow", 
      task: "Спроектировать финансовый дашборд с удобной визуализацией данных.",
      result: "Сложные данные превратились в понятные графики с приятным пользовательским опытом.",
      img: "/projects/finflow_mockup_1781178322804.png" 
    },
    { 
      slug: "luxdrive",
      tag: "Auto", 
      name: "LuxDrive", 
      task: "Сделать сайт аренды авто, передающий эмоцию роскоши и скорости.",
      result: "Премиальный темный дизайн с крупными фотографиями автомобилей и быстрым бронированием.",
      img: "/projects/luxdrive_mockup_1781178347105.png" 
    }
  ];

  return (
    <div ref={containerRef} className={styles.main}>
      {/* HEADER */}
      <header className={styles.header}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={styles.logo}
        >
          Mark.
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.nav}
        >
          <a href="#about" className="hover-link">Обо мне</a>
          <a href="#projects" className="hover-link">Проекты</a>
          <a href="#faq" className="hover-link">FAQ</a>
          <a href="#contact" className="hover-link">Контакты</a>
        </motion.nav>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={`${styles.btn} hover-link`}
        >
          Связаться со мной
        </motion.a>
      </header>

      {/* HERO */}
      <motion.section 
        className={styles.hero}
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={styles.heroLeft}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>
            Привет, я Mark
          </motion.div>
          <motion.h1 variants={fadeInUp} className={`${styles.heroTitle} display-font`}>
            Создаю современные сайты <span className={styles.accentText}>для бизнеса</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Не жду идеальный момент. Исследую рынки, нахожу возможности и превращаю идеи в работающие продукты.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <a href="#projects" className={`${styles.btnPrimary} hover-link`}>Смотреть проекты ↗</a>
            <a href="#contact" className={`${styles.btnOutline} hover-link`}>Обсудить проект</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.heroImageWrapper}
        >
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, #1e1e24, #15151a)' }}></div>
          <div className={styles.heroBadge}>
            <div className={styles.badgeIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div className={styles.badgeText}>
              Делаю сайты, которые работают на ваш бизнес
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* WHY ME */}
      <section className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>Преимущества</motion.div>
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "2rem" }}>Почему со мной удобно работать</motion.h2>
          
          <motion.div variants={fadeInUp} className={styles.whyMeGrid}>
            {[
              { icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, text: "Быстрая коммуникация" },
              { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>, text: "Современный дизайн" },
              { icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>, text: "Адаптация под мобильные устройства" },
              { icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>, text: "Внимание к деталям" },
              { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, text: "Поддержка после запуска" }
            ].map((item, i) => (
              <div key={i} className={styles.whyMeCard}>
                <div className={styles.whyMeIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div className={styles.whyMeTitle}>{item.text}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* STACK & LEARNING */}
      <section id="about" className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.stackGrid}
        >
          <motion.div variants={fadeInUp} className={styles.stackBox}>
            <h3 className="display-font">Текущий стек</h3>
            <p>Использую современные инструменты для создания быстрых, производительных и удобных сайтов. Пишу чистый код и собираю надежную архитектуру.</p>
            <div className={styles.techTags}>
              {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma', 'Git', 'Vercel'].map(tech => (
                <span key={tech} className={styles.tag}>{tech}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className={styles.stackBox}>
            <h3 className="display-font">Что я сейчас изучаю</h3>
            <p>Я постоянно развиваюсь и углубляю свои знания, чтобы создавать еще более сложные и крутые цифровые продукты.</p>
            <div className={styles.techTags}>
              {['Next.js', 'UX/UI дизайн', 'Веб-анимации', 'Оптимизация производительности', 'Создание SaaS-продуктов'].map(tech => (
                <span key={tech} className={`${styles.tag} ${styles.highlight}`}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className={styles.eyebrow}>Мои работы</div>
            <h2 className={`display-font ${styles.sectionTitle}`}>Кейсы и концепты</h2>
          </motion.div>
          
          <div className={styles.projectsGrid}>
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Link href={`/projects/${p.slug}`} className={`${styles.projectCardLarge} hover-link`}>
                  <div className={styles.projectContentLarge}>
                    <div>
                      <span className={styles.projectTag}>{p.tag}</span>
                      <h3 className={`display-font ${styles.projectTitle}`}>{p.name}</h3>
                      
                      <div className={styles.projectDetail}>
                        <span>Задача:</span>
                        <p>{p.task}</p>
                      </div>
                      
                      <div className={styles.projectDetail}>
                        <span>Результат:</span>
                        <p>{p.result}</p>
                      </div>
                    </div>
                    
                    <div className={styles.projectLink}>Смотреть проект →</div>
                  </div>
                  <div className={styles.projectImgWrapLarge}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>FAQ</motion.div>
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`}>Частые вопросы</motion.h2>
          
          <motion.div variants={fadeInUp}>
            <Accordion items={faqItems} />
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className={styles.contactCard}
        >
          <div className={styles.contactLeft}>
            <h2 className="display-font">Готовы обсудить ваш проект?</h2>
            <p>Напишите мне, и я подготовлю для вас бесплатную консультацию и предложение по вашему проекту.</p>
            <button className={`${styles.btnDark} hover-link`}>
              Связаться со мной
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <span>Telegram</span>
                <p>@mark_dev</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <span>Email</span>
                <p>mark.dev@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.logo}>Mark.</div>
        <div className={styles.footerNav}>
          <a href="#about" className="hover-link">Обо мне</a>
          <a href="#projects" className="hover-link">Проекты</a>
          <a href="#contact" className="hover-link">Контакты</a>
        </div>
        <div className={styles.footerSocials}>
          <a href="#" className="hover-link">GitHub</a>
          <a href="#" className="hover-link">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
