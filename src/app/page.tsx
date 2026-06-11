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
    { question: "Вы работаете с готовым дизайном?", answer: "Да, могу реализовать проект по готовому макету или помочь с созданием собственного решения." },
    { question: "Адаптированы ли сайты для мобильных устройств?", answer: "Да, все проекты разрабатываются с учётом корректной работы на разных устройствах." },
    { question: "Можно ли доработать существующий сайт?", answer: "Да, в зависимости от задачи можно улучшить дизайн, функциональность или структуру текущего проекта." },
    { question: "Как связаться с вами?", answer: "Через форму обратной связи или указанные контакты." }
  ];

  const projects = [
    { 
      slug: "black-estate",
      tag: "Real Estate", 
      name: "Black Estate", 
      task: "Создать современный премиальный интерфейс, который подчёркивает статус объектов недвижимости.",
      result: "Минималистичный дизайн с акцентом на визуальную подачу и удобную навигацию.",
      img: "/projects/black_estate_mockup_1781178303072.png" 
    },
    { 
      slug: "nova-ai",
      tag: "SaaS", 
      name: "Nova AI", 
      task: "Разработать современный интерфейс для технологического продукта.",
      result: "Чистый дизайн, удобная структура и акцент на пользовательском опыте.",
      img: "/projects/nova_ai_mockup_1781178337765.png" 
    },
    { 
      slug: "finflow",
      tag: "Finance", 
      name: "FinFlow", 
      task: "Создать интерфейс для работы с аналитикой и финансовыми данными.",
      result: "Информативный дизайн с понятной визуализацией ключевых показателей.",
      img: "/projects/finflow_mockup_1781178322804.png" 
    },
    { 
      slug: "luxdrive",
      tag: "Auto", 
      name: "LuxDrive", 
      task: "Передать ощущение эксклюзивности и высокого уровня сервиса.",
      result: "Стильный интерфейс с акцентом на визуальную составляющую бренда.",
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
          Mark — Web Developer
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.nav}
        >
          <a href="#about" className="hover-link">Обо мне</a>
          <a href="#projects" className="hover-link">Проекты</a>
          <a href="#process" className="hover-link">Процесс</a>
          <a href="#faq" className="hover-link">FAQ</a>
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
          <motion.h1 variants={fadeInUp} className={`${styles.heroTitle} display-font`}>
            Создаю современные сайты и <span className={styles.accentText}>цифровые продукты</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Помогаю превращать идеи в удобные, быстрые и визуально привлекательные веб-проекты.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <a href="#projects" className={`${styles.btnPrimary} hover-link`}>Смотреть проекты</a>
            <a href="#contact" className={`${styles.btnOutline} hover-link`}>Связаться со мной</a>
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

      {/* ABOUT */}
      <section id="about" className={styles.section} style={{ paddingTop: 0, paddingBottom: "4rem" }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>Обо мне</motion.div>
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "2rem" }}>
            Меня зовут Mark.
          </motion.h2>
          <motion.div variants={fadeInUp} style={{ maxWidth: "800px", color: "var(--light-gray)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "4rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>Я занимаюсь созданием современных сайтов и интерфейсов, уделяя особое внимание визуалу, удобству и деталям.</p>
            <p style={{ marginBottom: "1.5rem" }}>Постоянно изучаю новые технологии, экспериментирую с проектами и совершенствую свои навыки на практике. Мне нравится превращать идеи в понятные и эстетичные цифровые продукты, которыми удобно пользоваться.</p>
            <p>Для меня важны аккуратность, ответственность и стремление делать работу качественно независимо от масштаба проекта.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY ME */}
      <section className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "3rem" }}>Почему со мной удобно работать</motion.h2>
          
          <motion.div variants={fadeInUp} className={styles.whyMeGrid}>
            {[
              { icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, title: "Современный подход", text: "Использую актуальные решения и уделяю внимание визуальному качеству каждого проекта." },
              { icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>, title: "Внимание к деталям", text: "Продумываю структуру, интерфейсы и пользовательский опыт до мелочей." },
              { icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>, title: "Адаптация под любые устройства", text: "Сайты одинаково хорошо выглядят на компьютерах, планшетах и смартфонах." },
              { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>, title: "Постоянное развитие", text: "Регулярно изучаю новые инструменты и подходы в веб-разработке и дизайне." }
            ].map((item, i) => (
              <div key={i} className={styles.whyMeCard} style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                <div className={styles.whyMeIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div className={styles.whyMeTitle} style={{ fontSize: "1.2rem", color: "var(--foreground)" }}>{item.title}</div>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: "1.5" }}>{item.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* STACK */}
      <section className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} style={{ background: "var(--dark-gray)", borderRadius: "24px", padding: "4rem", border: "1px solid var(--border)", textAlign: "center" }}>
            <h2 className="display-font" style={{ marginBottom: "2rem", fontSize: "2rem" }}>Мой стек</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Figma', 'Vercel'].map(tech => (
                <span key={tech} className={styles.tag} style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>{tech}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.section} style={{ paddingTop: 0 }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <div className={styles.eyebrow}>Проекты</div>
            <h2 className={`display-font ${styles.sectionTitle}`}>Мои работы</h2>
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

      {/* PROCESS */}
      <section id="process" className={styles.section}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>Мой процесс</motion.div>
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`}>Как я работаю</motion.h2>
          
          <div className={styles.processGrid}>
            {[
              { num: "01", title: "Исследование", desc: "Изучаю задачу, цели проекта и собираю референсы." },
              { num: "02", title: "Планирование", desc: "Продумываю структуру и пользовательский путь." },
              { num: "03", title: "Дизайн", desc: "Создаю визуальную концепцию будущего продукта." },
              { num: "04", title: "Разработка", desc: "Собираю рабочую версию сайта и адаптирую её под разные устройства." },
              { num: "05", title: "Улучшение", desc: "Дорабатываю детали и оптимизирую результат." }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeInUp} className={styles.processStep}>
                <div className={styles.stepNum}>{s.num}</div>
                <h3 className="display-font">{s.title}</h3>
                <p>{s.desc}</p>
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
            <h2 className="display-font">Давайте обсудим ваш проект</h2>
            <p>Если у вас есть идея, концепция или задача, которую нужно реализовать, буду рад обсудить детали.<br/><br/>Открыт для новых проектов и сотрудничества.</p>
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
        <div className={styles.logo}>Mark — Web Developer</div>
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
