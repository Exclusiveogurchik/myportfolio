import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// Data mapping for projects
const projectsData: Record<string, any> = {
  "black-estate": {
    name: "Black Estate",
    subtitle: "Лендинг для агентства элитной недвижимости. Разработка с нуля: дизайн + верстка + адаптив + анимации.",
    tag: "Real Estate",
    img: "/projects/black_estate_light.png",
    mobileImg: "/projects/black_estate_mobile.png",
    task: "Сверстал лендинг с нуля, настроил плавные анимации появления секций и сделал адаптив под 3 устройства (Desktop, Tablet, Mobile).",
    result: "Конверсия выросла за счет правильных акцентов на фотографиях вилл и премиального минималистичного UI.",
    role: "Frontend разработка, Дизайн",
    time: "14 дней",
    metric: "Рост заявок на 30%",
    proofLink: "Ссылка на GitHub"
  },
  "finflow": {
    name: "FinFlow",
    subtitle: "Дашборд финансовой аналитики. Разработка интерфейса для SaaS: графики, таблицы, модалки.",
    tag: "Finance",
    img: "/projects/finflow_green.png",
    mobileImg: "/projects/finflow_mobile.png",
    task: "Разработал сложный дашборд с интерактивными графиками. Реализовал модальные окна, фильтрацию табличных данных и удобную навигацию.",
    result: "Пользователи стали тратить на 60% меньше времени на поиск нужной информации благодаря чистой иерархии.",
    role: "Frontend разработка, UI Дизайн",
    time: "18 дней",
    metric: "Удобнее на 60%",
    proofLink: "Коммерческий проект"
  },
  "velocity": {
    name: "Velocity Rentals",
    subtitle: "Сайт аренды премиум авто. Проектирование + верстка + формы бронирования.",
    tag: "Auto",
    img: "/projects/velocity_mockup.png",
    mobileImg: "/projects/velocity_mobile.png",
    task: "Спроектировал и сверстал интерфейс в глубоких тёмных тонах. Интегрировал форму выбора дат бронирования и кастомный курсор.",
    result: "Сайт передает ощущение люксового сервиса, что позволило увеличить средний чек и конверсию в аренду в 2 раза.",
    role: "Full-stack разработка",
    time: "10 дней",
    metric: "x2 конверсия",
    proofLink: "Live Demo"
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
    <main>
      <header className={styles.projectHeader}>
        <Link href="/#projects" className={`${styles.backLink} hover-link`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Назад в портфолио
        </Link>
        <br />
        <span className={styles.tag}>{project.tag}</span>
        <h1 className={`display-font ${styles.title}`}>{project.name}</h1>
        <p>{project.subtitle}</p>
      </header>

      <div className={styles.imagesGrid}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.img} alt={`${project.name} Desktop`} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.mobileImg} alt={`${project.name} Mobile`} />
      </div>

      <div className={styles.content}>
        <div className={styles.metricsBar}>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Моя роль</span>
            <span className={styles.metricValue}>{project.role}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Статус</span>
            <span className={styles.metricValue}>{project.proofLink}</span>
          </div>
          <div className={styles.metricBox}>
            <span className={styles.metricLabel}>Результат</span>
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
