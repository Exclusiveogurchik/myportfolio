import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// Data mapping for projects
const projectsData: Record<string, any> = {
  "black-estate": {
    name: "Black Estate",
    tag: "Real Estate",
    img: "/projects/black_estate_mockup_1781178303072.png",
    task: "Создать современный премиальный интерфейс, который подчёркивает статус объектов недвижимости.",
    result: "Минималистичный дизайн с акцентом на визуальную подачу и удобную навигацию.",
    role: "UX/UI Дизайн, Frontend",
    time: "14 дней",
    metric: "Рост заявок на 30%"
  },
  "nova-ai": {
    name: "Nova AI",
    tag: "SaaS",
    img: "/projects/nova_ai_mockup_1781178337765.png",
    task: "Разработать современный интерфейс для технологического продукта.",
    result: "Чистый дизайн, удобная структура и акцент на пользовательском опыте.",
    role: "Дизайн интерфейса, Верстка",
    time: "21 день",
    metric: "+45% удержание"
  },
  "finflow": {
    name: "FinFlow",
    tag: "Finance",
    img: "/projects/finflow_mockup_1781178322804.png",
    task: "Создать интерфейс для работы с аналитикой и финансовыми данными.",
    result: "Информативный дизайн с понятной визуализацией ключевых показателей.",
    role: "UX Исследование, UI Дизайн",
    time: "18 дней",
    metric: "Удобнее на 60%"
  },
  "velocity": {
    name: "Velocity Rentals",
    tag: "Auto",
    img: "/projects/velocity_mockup.png",
    task: "Передать ощущение эксклюзивности и высокого уровня сервиса аренды суперкаров.",
    result: "Строгий премиальный интерфейс в глубоких тёмных тонах с золотыми акцентами.",
    role: "Дизайн, Next.js",
    time: "10 дней",
    metric: "x2 конверсия"
  }
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main>
      <header className={styles.projectHeader}>
        <Link href="/#projects" className={`${styles.backLink} hover-link`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Назад в портфолио
        </Link>
        <br />
        <span className={styles.tag}>{project.tag}</span>
        <h1 className={`display-font ${styles.title}`}>{project.name}</h1>
      </header>

      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.img} alt={project.name} />
      </div>

      <div className={styles.content}>
        <div className={styles.metricsBar}>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Моя роль</span>
            <span className={styles.metricValue}>{project.role}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Сроки</span>
            <span className={styles.metricValue}>{project.time}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Результат клиента</span>
            <span className={styles.metricValue}>{project.metric}</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className="display-font">Задача</h2>
          <p>{project.task}</p>
        </div>
        <div className={styles.section}>
          <h2 className="display-font">Решение</h2>
          <p>{project.result}</p>
        </div>
      </div>
    </main>
  );
}
