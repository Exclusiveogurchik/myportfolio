export type Language = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      cases: "Кейсы",
      process: "Процесс",
      about: "Обо мне",
      faq: "FAQ",
      contact: "Контакты",
      start: "Начать проект"
    },
    hero: {
      title1: "Проектирую и разрабатываю",
      title2: "интерактивные сайты",
      subtitle: "Отвечаю за весь процесс: собираю требования, рисую интерфейс, пишу код и запускаю проект. Вы получаете рабочий инструмент, а не набор макетов.",
      btnPrimary: "Смотреть кейсы",
      btnOutline: "Написать в Telegram"
    },
    trust: {
      daysValue: "от 7",
      daysLabel: "Дней на разработку лендинга",
      supportValue: "1 мес",
      supportLabel: "Поддержки после релиза",
      mobileValue: "100%",
      mobileLabel: "Покрытие адаптива (Mobile-first)"
    },
    projects: {
      title: "Кейсы",
      role: "Роль",
      time: "Срок",
      metric: "Метрика",
      readMore: "Читать кейс →",
      items: [
        {
          slug: "black-estate",
          tag: "Real Estate",
          name: "Black Estate",
          task: "Сверстал лендинг. Настроил анимации секций. Сделал адаптив под 3 устройства.",
          result: "Рост заявок за счет минималистичного UI.",
          role: "Frontend",
          time: "14 дней",
          metric: "+30% заявок",
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
        }
      ]
    },
    about: {
      title: "Обо мне",
      greeting: "Привет, я Марк. Мне 19 лет.",
      p1: "Веб-разработчик и дизайнер интерфейсов. Создаю быстрые интерфейсы, которые работают на любых устройствах. Пишу код, настраиваю сложные анимации, продумываю логику.",
      p2: "Моя задача — сделать так, чтобы ваш сайт решал задачи бизнеса, а не просто висел в интернете."
    },
    process: {
      title: "Процесс",
      steps: [
        { num: "01", title: "Бриф", desc: "Вы ставите задачу. Я оцениваю сроки и бюджет." },
        { num: "02", title: "Дизайн", desc: "Рисую визуальную концепцию. Вы утверждаете прототип." },
        { num: "03", title: "Разработка", desc: "Верстаю интерфейс. Настраиваю анимации." },
        { num: "04", title: "Запуск", desc: "Публикую проект. Передаю доступы." }
      ]
    },
    faq: {
      title: "Частые вопросы",
      items: [
        { q: "С какими технологиями ты работаешь?", a: "Основа моего стека — React и Next.js. Для стилизации использую Tailwind CSS или модульный CSS, если нужен строгий контроль. За сложные анимации отвечает GSAP и Framer Motion, а для интеграции 3D-графики на сайт применяю Three.js (React Three Fiber). Работаю с TypeScript для надежности." },
        { q: "Сколько стоит проект?", a: "Цена зависит от сложности дизайна, количества страниц и необходимости сложных анимаций или 3D-объектов. Обычно разработка качественного лендинга стартует от $500 и занимает около 7-10 дней. Корпоративные сайты или сложные веб-приложения оцениваются индивидуально, начиная от $1500." },
        { q: "Ты делаешь дизайн или только верстаешь?", a: "Я могу взять проект полностью под ключ. Сначала мы обсуждаем бизнес-задачу, затем я проектирую структуру и собираю современный дизайн в Figma. После утверждения макета я переношу его в код. Если у вас уже есть готовый дизайн от другого специалиста — я с радостью его сверстаю." },
        { q: "Как строится процесс оплаты и работы?", a: "Работаю по прозрачной схеме: мы фиксируем ТЗ, вы вносите предоплату (обычно 50%), и я приступаю к работе. Оставшаяся часть оплачивается после финального релиза на вашем хостинге. Работаю как ИП/самозанятый, могу предоставить все закрывающие документы." }
      ]
    },
    contact: {
      title: "Давайте обсудим ваш проект",
      subtitle: "Есть идея, проект или просто вопрос? Напишите мне в Telegram — отвечаю лично.",
      tgBtn: "Написать в Telegram",
      emailBtn: "Написать на Email"
    },
    footer: {
      code: "Мой код"
    }
  },
  en: {
    nav: {
      cases: "Cases",
      process: "Process",
      about: "About Me",
      faq: "FAQ",
      contact: "Contact",
      start: "Start Project"
    },
    hero: {
      title1: "Designing and engineering",
      title2: "interactive websites",
      subtitle: "I handle the entire process: gathering requirements, designing UI, writing code, and launching the project. You get a working product, not just a set of mockups.",
      btnPrimary: "View Cases",
      btnOutline: "Message on Telegram"
    },
    trust: {
      daysValue: "from 7",
      daysLabel: "Days to develop a landing page",
      supportValue: "1 mo",
      supportLabel: "Post-release support",
      mobileValue: "100%",
      mobileLabel: "Mobile-first responsive design"
    },
    projects: {
      title: "Cases",
      role: "Role",
      time: "Timeline",
      metric: "Metric",
      readMore: "Read Case →",
      items: [
        {
          slug: "black-estate",
          tag: "Real Estate",
          name: "Black Estate",
          task: "Developed the landing page. Set up section animations. Ensured responsiveness across 3 breakpoints.",
          result: "Increased inquiries via minimalist UI.",
          role: "Frontend",
          time: "14 days",
          metric: "+30% leads",
        },
        {
          slug: "qzzdeals",
          tag: "Gaming Platform",
          name: "QZZ Deals",
          task: "Built a discount aggregator. Implemented online price tracking. Added multi-language support.",
          result: "Launched a hub for deal tracking.",
          role: "Frontend",
          time: "14 days",
          metric: "Live 24/7",
        },
        {
          slug: "velocity",
          tag: "Auto",
          name: "Velocity Rentals",
          task: "Designed the UI. Integrated a custom date-picker for bookings.",
          result: "Increased average order value.",
          role: "Full-stack",
          time: "10 days",
          metric: "x2 conversion",
        }
      ]
    },
    about: {
      title: "About Me",
      greeting: "Hi, I'm Mark. I'm 19.",
      p1: "Web developer and UI designer. I build fast interfaces that work flawlessly across all devices. I write clean code, configure complex animations, and think through the logic.",
      p2: "My goal is to ensure your website solves business tasks, rather than just existing on the internet."
    },
    process: {
      title: "Process",
      steps: [
        { num: "01", title: "Briefing", desc: "You set the task. I estimate the timeline and budget." },
        { num: "02", title: "Design", desc: "I create the visual concept. You approve the prototype." },
        { num: "03", title: "Development", desc: "I code the interface and configure animations." },
        { num: "04", title: "Launch", desc: "I deploy the project and hand over access." }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "What technologies do you use?", a: "My core stack is React and Next.js. For styling, I use Tailwind CSS or CSS Modules. Complex animations are powered by GSAP and Framer Motion, and 3D graphics by Three.js (React Three Fiber). I use TypeScript for reliability." },
        { q: "How much does a project cost?", a: "Pricing depends on design complexity, page count, and the need for complex animations/3D. High-quality landing pages typically start at $500 and take 7-10 days. Corporate sites and web apps are estimated individually, starting at $1500." },
        { q: "Do you design or just code?", a: "I can handle the project end-to. We discuss the business task, then I design the structure and UI in Figma. Once approved, I code it. If you already have a design from another specialist, I'll gladly build it." },
        { q: "How does payment and workflow look?", a: "I work transparently: we agree on the scope, you make a prepayment (usually 50%), and I begin. The rest is paid after the final release on your hosting. I work as an independent contractor and provide all necessary invoices." }
      ]
    },
    contact: {
      title: "Let's discuss your project",
      subtitle: "Have an idea, a project, or just a question? Message me on Telegram — I answer personally.",
      tgBtn: "Message on Telegram",
      emailBtn: "Email Me"
    },
    footer: {
      code: "My Code"
    }
  }
};
