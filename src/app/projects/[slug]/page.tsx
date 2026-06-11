import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// Data mapping for projects
const projectsData: Record<string, any> = {
  "black-estate": {
    name: "Black Estate",
    tag: "Real Estate",
    img: "/projects/black_estate_mockup_1781178303072.png",
    task: "Создать современный и премиальный образ бренда агентства недвижимости.",
    result: "Минималистичный дизайн с акцентом на объекты недвижимости. Использованы глубокие темные тона с легкими акцентами, чтобы подчеркнуть эксклюзивность объектов. Удобная система фильтрации и карточки объектов с крупными фотографиями.",
  },
  "nova-ai": {
    name: "Nova AI",
    tag: "SaaS",
    img: "/projects/nova_ai_mockup_1781178337765.png",
    task: "Разработать интерфейс для платформы автоматизации бизнес-процессов с ИИ.",
    result: "Удобный и интуитивно понятный дашборд. Мы создали футуристичный, но строгий дизайн с использованием неоновых фиолетовых акцентов. Интерфейс чата и настройки рабочих процессов (workflows) спроектированы так, чтобы снизить когнитивную нагрузку на пользователя.",
  },
  "finflow": {
    name: "FinFlow",
    tag: "Finance",
    img: "/projects/finflow_mockup_1781178322804.png",
    task: "Спроектировать финансовый дашборд с удобной визуализацией данных.",
    result: "Сложные финансовые данные превратились в понятные и красивые графики. Разработана темная тема для снижения усталости глаз при долгой работе. Особое внимание уделено таблицам транзакций и сводным отчетам.",
  },
  "luxdrive": {
    name: "LuxDrive",
    tag: "Auto",
    img: "/projects/luxdrive_mockup_1781178347105.png",
    task: "Сделать сайт аренды авто, передающий эмоцию роскоши и скорости.",
    result: "Премиальный дизайн с крупными, качественными фотографиями спорткаров. Оптимизированный процесс бронирования в 3 клика. Интерфейс вызывает доверие и желание воспользоваться услугами компании.",
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
        <span className={styles.tag}>{project.tag}</span>
        <h1 className={`display-font ${styles.title}`}>{project.name}</h1>
      </header>

      <div className={styles.imageWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.img} alt={project.name} />
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2 className="display-font">Задача</h2>
          <p>{project.task}</p>
        </div>
        <div className={styles.section}>
          <h2 className="display-font">Результат</h2>
          <p>{project.result}</p>
        </div>
      </div>
    </main>
  );
}
