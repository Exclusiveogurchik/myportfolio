"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import InteractiveBackground from "@/components/InteractiveBackground";
import MagneticButton from "@/components/MagneticButton";
import HackerText from "@/components/HackerText";

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

  const projects = [
    { 
      slug: "black-estate",
      tag: "Real Estate", 
      name: "Black Estate", 
      task: "Сверстал лендинг с нуля, настроил плавные анимации появления секций и сделал адаптив под 3 устройства.",
      result: "Конверсия выросла за счет правильных акцентов на фотографиях вилл и премиального минималистичного UI.",
      role: "Frontend разработка, Дизайн",
      time: "14 дней",
      metric: "Рост заявок на 30%",
      img: "/projects/black_estate_light.png" 
    },
    { 
      slug: "qzzdeals",
      tag: "Gaming Platform", 
      name: "QZZ Deals", 
      task: "Разработал агрегатор скидок на игры (Steam, Epic Games, GOG). Реализовал отслеживание цен онлайн, мультиязычность и плавные видео-переходы.",
      result: "Создан удобный хаб, где игроки экономят до 100% на покупках благодаря моментальным уведомлениям об акциях.",
      role: "Frontend разработка",
      time: "14 дней",
      metric: "Актуально 24/7",
      img: "/projects/qzzdeals.jpeg" 
    },
    { 
      slug: "velocity",
      tag: "Auto", 
      name: "Velocity Rentals", 
      task: "Спроектировал и сверстал интерфейс в глубоких тёмных тонах. Интегрировал форму выбора дат бронирования.",
      result: "Сайт передает ощущение люксового сервиса, что позволило увеличить средний чек и конверсию в аренду в 2 раза.",
      role: "Full-stack разработка",
      time: "10 дней",
      metric: "x2 конверсия",
      img: "/projects/velocity_mockup.png" 
    }
  ];

  return (
    <div ref={containerRef} className={styles.main}>
      <InteractiveBackground />
      {/* HEADER */}
      <header className={styles.header}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={styles.logo}
        >
          <HackerText text="Mark — Web Developer" />
        </motion.div>
        <motion.nav 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className={styles.nav}
        >
          <a href="#projects" className="hover-link">Кейсы</a>
          <a href="#process" className="hover-link">Как я работаю</a>
          <a href="#about" className="hover-link">Обо мне</a>
        </motion.nav>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={`${styles.btn} hover-link`}
        >
          Обсудить проект
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
            <HackerText triggerOnHover={false} text="Создаю премиальные" /> <br/>
            <span className={styles.accentText}>цифровые продукты</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Беру на себя полный цикл разработки: от архитектуры и дизайна до финального запуска. Помогаю бизнесу выделяться за счет чистого визуала и безупречного UX.
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <MagneticButton href="#projects" className={`${styles.btnPrimary} hover-link`}>Смотреть кейсы</MagneticButton>
            <MagneticButton href="#contact" className={`${styles.btnOutline} hover-link`}>Написать в Telegram</MagneticButton>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={styles.heroRightDev}
        >
          <div className={styles.devCard}>
            <div className={styles.devCardHeader}>
              <div className={styles.devAvatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/me.jpg" alt="Мое фото" className={styles.devAvatarImg} />
              </div>
              <div>
                <h3 className={styles.devName}>Коротко обо мне</h3>
                <p className={styles.devRole}>Full-stack Developer</p>
              </div>
            </div>
            
            <ul className={styles.devFacts}>
              <li>
                <span className={styles.factDot}></span>
                Создаю решения, которые подчеркивают статус бизнеса
              </li>
              <li>
                <span className={styles.factDot}></span>
                Фокус: производительность, чистый код, продуманный UX
              </li>
              <li>
                <span className={styles.factDot}></span>
                Строгий процесс работы, прозрачные сроки
              </li>
            </ul>

            <div className={styles.devStack}>
              <span className={styles.devStackTitle}>Стек технологий</span>
              <div className={styles.devStackGrid}>
                <span>React</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind</span>
                <span>GSAP</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* WHY ME & METRICS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "3rem" }}>Почему со мной удобно работать</motion.h2>
          
          <motion.div variants={fadeInUp} className={styles.whyMeGrid}>
            {[
              { icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>, title: "Современный подход", text: "Использую актуальные решения и уделяю внимание визуальному качеству." },
              { icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>, title: "Внимание к деталям", text: "Продумываю структуру, интерфейсы и пользовательский путь клиента." },
              { icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>, title: "Адаптация под мобильные", text: "Сайты безупречно выглядят и работают на любых устройствах." },
              { icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>, title: "Постоянное развитие", text: "Регулярно внедряю новые инструменты в веб-разработке и дизайне." }
            ].map((item, i) => (
              <div key={i} className={styles.whyMeCard}>
                <div className={styles.whyMeIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div className={styles.whyMeTitle}>{item.title}</div>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: "1.5" }}>{item.text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>от 7</div>
              <div className={styles.trustLabel}>Дней на разработку лендинга</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>1 мес</div>
              <div className={styles.trustLabel}>Бесплатной поддержки после сдачи</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>2</div>
              <div className={styles.trustLabel}>Поэтапная оплата (50% / 50%)</div>
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
            <div className={styles.eyebrow}>Кейсы</div>
            <h2 className={`display-font ${styles.sectionTitle}`}>Проекты в фокусе</h2>
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

                      <div className={styles.projectMetrics}>
                        <div className={styles.metricBox}>
                          <span className={styles.metricLabel}>Роль</span>
                          <span className={styles.metricValue} style={{ fontSize: "1rem" }}>{p.role}</span>
                        </div>
                        <div className={styles.metricBox}>
                          <span className={styles.metricLabel}>Бизнес-метрика</span>
                          <span className={styles.metricValue} style={{ fontSize: "1rem", color: "var(--foreground)" }}>{p.metric}</span>
                        </div>
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
      <section id="process" className={styles.section} style={{ paddingTop: 0 }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={styles.eyebrow}>Мой процесс</motion.div>
          <motion.h2 variants={fadeInUp} className={`display-font ${styles.sectionTitle}`}>С чего начинается работа</motion.h2>
          
          <div className={styles.processGrid}>
            {[
              { num: "01", title: "Бриф и оценка", desc: "Обсуждаем вашу задачу, я задаю вопросы и предлагаю оптимальное решение. Фиксируем сроки." },
              { num: "02", title: "Структура", desc: "Продумываю логику, тексты и пользовательский путь. Вы утверждаете прототип." },
              { num: "03", title: "Дизайн", desc: "Рисую визуальную концепцию, которая выделит вас на фоне конкурентов." },
              { num: "04", title: "Разработка", desc: "Верстаю и программирую сайт с идеальной адаптацией под мобильные телефоны." },
              { num: "05", title: "Запуск", desc: "Публикуем сайт в интернете. Я даю инструкцию и бесплатную поддержку на месяц." }
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




      {/* CONTACT (Warm Final Section) */}
      <section id="contact" className={styles.finalSection}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className={styles.finalContainer}
        >
          <motion.div variants={fadeInUp} className={styles.finalHeader}>
            <h2 className="display-font">Готовы обсудить проект?</h2>
            <p className={styles.finalPromise}>Отвечаю в течение рабочего дня. Оставьте заявку, и мы найдем лучшее решение для вашей задачи.</p>
          </motion.div>

          <div className={styles.contactWrapper}>
            <motion.div variants={fadeInUp} className={styles.contactFormSide}>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="Ваше имя" required />
                </div>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="Telegram или Email" required />
                </div>
                <div className={styles.inputGroup}>
                  <textarea placeholder="Коротко о проекте" rows={3}></textarea>
                </div>
                <button className={styles.btnForm}>Оставить заявку</button>
              </form>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.contactCardsSide}>
              <div className={styles.coffeeNote}>
                <span style={{ fontSize: "1.5rem" }}>✦</span>
                <p>Всегда открыт к интересным предложениям и готов погрузиться в новые задачи.</p>
              </div>

              <div className={styles.socialCardsGrid}>
                <a href="https://t.me/mark_dev" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </div>
                  <div>
                    <span className={styles.socialTitle}>Telegram</span>
                    <span className={styles.socialLink}>@mark_dev</span>
                  </div>
                </a>
                
                <a href="mailto:mark.dev@gmail.com" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <span className={styles.socialTitle}>Email</span>
                    <span className={styles.socialLink}>mark.dev@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://github.com/Exclusiveogurchik" className={styles.socialCard}>
                  <div className={styles.socialIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </div>
                  <div>
                    <span className={styles.socialTitle}>GitHub</span>
                    <span className={styles.socialLink}>Мой код</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <span style={{ color: "var(--light-gray)", fontSize: "0.95rem" }}>© {new Date().getFullYear()} Mark Web Developer</span>
        </div>
        <div className={styles.footerSocials}>
          <a href="https://github.com/Exclusiveogurchik" className="hover-link">GitHub</a>
          <a href="https://t.me/mark_dev" className="hover-link">Telegram</a>
        </div>
      </footer>
    </div>
);
}
