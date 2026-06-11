import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// Data mapping for projects
const projectsData: Record<string, any> = {
  "black-estate": {
    name: "Black Estate",
    subtitle: "Лендинг для агентства элитной недвижимости. Премиальный дизайн и безупречная верстка.",
    tag: "Real Estate",
    img: "/projects/black_estate_light.png",
    mobileImg: "/projects/black_estate_mobile.png",
    task: "Разработать лендинг, который передает ощущение эксклюзивности и роскоши. Необходимо было настроить плавные появления секций, сохранить 60 FPS при обилии тяжелых 4K-фотографий и сделать идеальный адаптив под все устройства.",
    implementation: "Для создания вау-эффекта я использовал библиотеку GSAP для сложных скролл-анимаций. Чтобы тяжелые фото не тормозили страницу, настроена ленивая загрузка и оптимизация через встроенные механизмы Next.js. Архитектура построена на компонентном подходе (CSS Modules) для легкого масштабирования в будущем.",
    result: "Конверсия выросла за счет правильных акцентов на фотографиях вилл и премиального минималистичного UI. Клиент получил современный сайт, который выглядит в разы дороже конкурентов.",
    role: "Frontend & Дизайн",
    roleDetails: ["Проектирование архитектуры", "Pixel-perfect верстка", "Адаптив (Desktop, Tablet, Mobile)", "Сложные scroll-анимации"],
    stack: ["Next.js", "React", "TypeScript", "GSAP", "CSS Modules"],
    time: "14 дней",
    metric: "Рост заявок на 30%",
    proofLink: "Код на GitHub",
    linkUrl: "https://github.com/Exclusiveogurchik"
  },
  "finflow": {
    name: "FinFlow",
    subtitle: "Аналитический дашборд. Работа с массивами данных и сложными интерфейсами.",
    tag: "Finance",
    img: "/projects/finflow_green.png",
    mobileImg: "/projects/finflow_mobile.png",
    task: "Спроектировать и разработать сложный дашборд с интерактивными графиками. Требовалось реализовать модальные окна, фильтрацию больших табличных данных и удобную систему навигации без потери производительности.",
    implementation: "Проект требовал отрисовки огромного массива финансовых данных без лагов. Я внедрил виртуализацию списков и строгую мемоизацию компонентов, что снизило время рендера в 3 раза. Интерактивные графики реализованы на Recharts с кастомными тултипами. Для управления глобальным стейтом фильтров выбран Zustand.",
    result: "Пользователи стали тратить на 60% меньше времени на поиск нужной информации благодаря чистой иерархии и мгновенному отклику интерфейса.",
    role: "Frontend разработчик",
    roleDetails: ["Архитектура дашборда", "Интеграция графиков", "Оптимизация рендеринга таблиц", "UI/UX компонентов"],
    stack: ["React", "Tailwind CSS", "Recharts", "Zustand"],
    time: "18 дней",
    metric: "Удобнее на 60%",
    proofLink: "Смотреть Demo",
    linkUrl: "https://github.com/Exclusiveogurchik"
  },
  "velocity": {
    name: "Velocity Rentals",
    subtitle: "Сервис аренды премиум авто. Полный цикл: от проектирования до backend-логики.",
    tag: "Auto",
    img: "/projects/velocity_mockup.png",
    mobileImg: "/projects/velocity_mobile.png",
    task: "Создать платформу бронирования элитных автомобилей. Помимо стильного темного интерфейса, нужно было спроектировать базу данных для учета бронирований и подготовить фундамент для приема платежей.",
    implementation: "Backend-часть реализована на Server Actions в Next.js. Для надежного хранения данных о бронированиях использовал PostgreSQL с ORM Prisma. На фронтенде особое внимание уделил 'дорогому' темному дизайну: настроил нестандартные курсоры, плавные переходы между страницами и красивые blur-эффекты.",
    result: "Сайт передает ощущение люксового сервиса, что позволило увеличить средний чек и конверсию в аренду в 2 раза.",
    role: "Full-stack разработчик",
    roleDetails: ["Full-stack архитектура", "Проектирование БД (PostgreSQL)", "Разработка UI/UX", "Интеграция логики бронирования"],
    stack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    time: "10 дней",
    metric: "x2 конверсия",
    proofLink: "Смотреть Demo",
    linkUrl: "https://github.com/Exclusiveogurchik"
  }
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${project.img})` }}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroTop}>
            <Link href="/#projects" className={styles.backLink}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Назад
            </Link>
          </div>
          
          <div className={styles.heroContent}>
            <span className={styles.tag}>{project.tag}</span>
            <h1 className={`display-font ${styles.title}`}>{project.name}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Metrics & Info Grid */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <h3 className={styles.cardTitle}>Моя роль</h3>
            <ul className={styles.roleList}>
              {project.roleDetails.map((role: string, i: number) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.metricCard}>
            <h3 className={styles.cardTitle}>Стек технологий</h3>
            <div className={styles.stackTags}>
              {project.stack.map((tech: string, i: number) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.metricCard}>
            <h3 className={styles.cardTitle}>Результат & Ссылки</h3>
            <div className={styles.resultBox}>
              <div className={styles.metricHighlight}>{project.metric}</div>
              <p className={styles.timeText}>Срок: {project.time}</p>
            </div>
            <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              {project.proofLink}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Case Study Content */}
        <div className={styles.caseStudy}>
          <div className={styles.textSection}>
            <h2 className="display-font">01. Задача</h2>
            <p>{project.task}</p>
          </div>
          
          <div className={styles.textSection}>
            <h2 className="display-font">02. Реализация</h2>
            <p>{project.implementation}</p>
          </div>

          <div className={styles.mediaBreak}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.mobileImg} alt={`${project.name} Mobile UI`} className={styles.mobileScreenshot} />
          </div>

          <div className={styles.textSection}>
            <h2 className="display-font">03. Результат</h2>
            <p>{project.result}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
