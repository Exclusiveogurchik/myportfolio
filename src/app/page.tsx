"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import GradientBackground from "@/components/GradientBackground";
import MagneticButton from "@/components/MagneticButton";
import HackerText from "@/components/HackerText";
import Hero3D from "@/components/Hero3D";
import CustomCursor from "@/components/CustomCursor";
import RevealWrapper from "@/components/RevealWrapper";
import FaqAccordion from "@/components/FaqAccordion";

export default function Home() {
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

  const projects = [
    { 
      slug: "black-estate",
      tag: "Real Estate", 
      name: "Black Estate", 
      task: "Сверстал лендинг. Настроил анимации секций. Сделал адаптив под 3 устройства.",
      result: "Рост заявок за счет минималистичного UI.",
      role: "Frontend",
      time: "14 дней",
      metric: "+30% заявок",
      img: "/projects/black_estate_light.png",
      device: "laptop"
    },
    { 
      slug: "qzzdeals",
      tag: "Gaming Platform", 
      name: "QZZ Deals", 
      task: "Разработал агрегатор скидок. Настроил онлайн-трекинг цен. Реализовал мультиязычность.",
      result: "Запустил хаб для отслеживания акций.",
      role: "Frontend",
      time: "14 дней",
      metric: "Live 24/7",
      img: "/projects/qzzdeals.jpeg",
      device: "laptop"
    },
    { 
      slug: "velocity",
      tag: "Auto", 
      name: "Velocity Rentals", 
      task: "Спроектировал интерфейс. Интегрировал форму выбора дат бронирования.",
      result: "Увеличил средний чек.",
      role: "Full-stack",
      time: "10 дней",
      metric: "x2 конверсия",
      img: "/projects/velocity_mockup.png",
      device: "laptop"
    }
  ];

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
          <a href="#projects" className="hover-link">Кейсы</a>
          <a href="#process" className="hover-link">Процесс</a>
          <a href="#contact" className="hover-link">Контакты</a>
        </motion.nav>
        <motion.a 
          href="#contact"
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={`${styles.btn} hover-link`}
        >
          Начать проект
        </motion.a>
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
            Проектирую и разрабатываю<br/>
            <span className={styles.accentText}>интерактивные сайты</span>
          </motion.h1>
          <motion.p 
            style={{ x: btnX, y: btnY }}
            className={styles.heroSubtitle}
          >
            Отвечаю за весь процесс: собираю требования, рисую интерфейс, пишу код и запускаю проект. Вы получаете рабочий инструмент, а не набор макетов.
          </motion.p>
          <motion.div 
            style={{ x: btnX, y: btnY }}
            className={styles.heroActions}
          >
            <MagneticButton href="#projects" className={`${styles.btnPrimary} hover-link`}>Смотреть кейсы</MagneticButton>
            <MagneticButton href="#contact" className={`${styles.btnOutline} hover-link`}>Написать в Telegram</MagneticButton>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* TRUST METRICS */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <div className={styles.trustBar}>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>от 7</div>
              <div className={styles.trustLabel}>Дней на разработку лендинга</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>1 мес</div>
              <div className={styles.trustLabel}>Поддержки после релиза</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustValue}>100%</div>
              <div className={styles.trustLabel}>Покрытие адаптива (Mobile-first)</div>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* PROJECTS - EDITORIAL LAYOUT */}
      <section id="projects" className={styles.section} style={{ paddingTop: 0 }}>
        <RevealWrapper>
          <h2 className={`display-font ${styles.sectionTitle}`}>Кейсы</h2>
        </RevealWrapper>
        
        <div className={styles.editorialProjects}>
          {projects.map((p, i) => (
            <RevealWrapper key={i}>
              <div className={styles.editorialRow}>
                <div className={styles.editorialMeta}>
                  <span className={styles.editorialTag}>{p.tag}</span>
                  <h3 className={`display-font ${styles.editorialTitle}`}>{p.name}</h3>
                  <div className={styles.editorialStats}>
                    <p><strong>Роль:</strong> {p.role}</p>
                    <p><strong>Срок:</strong> {p.time}</p>
                    <p><strong>Метрика:</strong> {p.metric}</p>
                  </div>
                  <div className={styles.editorialDesc}>
                    <p>{p.task}</p>
                    <p>{p.result}</p>
                  </div>
                  <Link href={`/projects/${p.slug}`} className={`${styles.editorialLink} hover-link`}>
                    Читать кейс →
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
              <h2 className={`display-font ${styles.sectionTitle}`} style={{ marginBottom: "2rem" }}>Обо мне</h2>
            </div>
            <div className={styles.aboutContent}>
              <h3 className="display-font" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Привет, я Марк. Мне 19 лет.</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--light-gray)", marginBottom: "1rem" }}>
                Веб-разработчик и дизайнер интерфейсов. Создаю быстрые интерфейсы, которые работают на любых устройствах. Пишу код, настраиваю сложные анимации, продумываю логику.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "var(--light-gray)" }}>
                Моя задача — сделать так, чтобы ваш сайт решал задачи бизнеса, а не просто висел в интернете.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </section>

      {/* PROCESS */}
      <section id="process" className={styles.section}>
        <RevealWrapper>
          <h2 className={`display-font ${styles.sectionTitle}`}>Процесс</h2>
        </RevealWrapper>
        
        <div className={styles.editorialProcess}>
          {[
            { num: "01", title: "Бриф", desc: "Вы ставите задачу. Я оцениваю сроки и бюджет." },
            { num: "02", title: "Дизайн", desc: "Рисую визуальную концепцию. Вы утверждаете прототип." },
            { num: "03", title: "Разработка", desc: "Верстаю интерфейс. Настраиваю анимации." },
            { num: "04", title: "Запуск", desc: "Публикую проект. Передаю доступы." }
          ].map((s, i) => (
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
          <h2 className={`display-font ${styles.sectionTitle}`}>Частые вопросы</h2>
        </RevealWrapper>
        
        <div className={styles.faqList}>
          {[
            { 
              q: "С какими технологиями ты работаешь?", 
              a: "Основа моего стека — React и Next.js. Для стилизации использую Tailwind CSS или модульный CSS, если нужен строгий контроль. За сложные анимации отвечает GSAP и Framer Motion, а для интеграции 3D-графики на сайт применяю Three.js (React Three Fiber). Работаю с TypeScript для надежности." 
            },
            { 
              q: "Сколько стоит проект?", 
              a: "Цена зависит от сложности дизайна, количества страниц и необходимости сложных анимаций или 3D-объектов. Обычно разработка качественного лендинга стартует от $500 и занимает около 7-10 дней. Корпоративные сайты или сложные веб-приложения оцениваются индивидуально, начиная от $1500." 
            },
            { 
              q: "Ты делаешь дизайн или только верстаешь?", 
              a: "Я могу взять проект полностью под ключ. Сначала мы обсуждаем бизнес-задачу, затем я проектирую структуру и собираю современный дизайн в Figma. После утверждения макета я переношу его в код. Если у вас уже есть готовый дизайн от другого специалиста — я с радостью его сверстаю." 
            },
            { 
              q: "Как строится процесс оплаты и работы?", 
              a: "Работаю по прозрачной схеме: мы фиксируем ТЗ, вы вносите предоплату (обычно 50%), и я приступаю к работе. Оставшаяся часть оплачивается после финального релиза на вашем хостинге. Работаю как ИП/самозанятый, могу предоставить все закрывающие документы." 
            }
          ].map((item, i) => (
            <RevealWrapper key={i}>
              <FaqAccordion question={item.q} answer={item.a} />
            </RevealWrapper>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.finalSection}>
        <RevealWrapper>
          <div className={styles.finalContainer}>
            <div className={styles.finalHeader}>
              <h2 className="display-font">Давайте работать.</h2>
              <p className={styles.finalPromise}>Оставьте заявку. Я отвечу в течение часа.</p>
            </div>

            <div className={styles.contactWrapper}>
              <div className={styles.contactFormSide}>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Имя" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Telegram / Email" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea placeholder="Задача" rows={3}></textarea>
                  </div>
                  <button className={`${styles.btnForm} hover-link`}>Отправить</button>
                </form>
              </div>

              <div className={styles.contactCardsSide}>
                <div className={styles.socialCardsGrid}>
                  <a href="https://t.me/mark_dev" className={`${styles.socialCard} hover-link`}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </div>
                    <div>
                      <span className={styles.socialTitle}>Telegram</span>
                      <span className={styles.socialLink}>@mark_dev</span>
                    </div>
                  </a>
                  
                  <a href="mailto:mark.dev@gmail.com" className={`${styles.socialCard} hover-link`}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <span className={styles.socialTitle}>Email</span>
                      <span className={styles.socialLink}>mark.dev@gmail.com</span>
                    </div>
                  </a>
                  
                  <a href="https://github.com/Exclusiveogurchik" className={`${styles.socialCard} hover-link`}>
                    <div className={styles.socialIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    </div>
                    <div>
                      <span className={styles.socialTitle}>GitHub</span>
                      <span className={styles.socialLink}>Мой код</span>
                    </div>
                  </a>
                </div>
              </div>
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
          <a href="https://t.me/mark_dev" className="hover-link">Telegram</a>
        </div>
      </footer>
    </div>
  );
}
