import { DataType, ExperienceType } from "./type";

export const DataProfile = {
  name: "Fadli Rizaldy",
  passion: ["Software Engineer", "Data Analyst", "Electronics Enthusiasts"],
  about: `Bachelor of Physics at Diponegoro University. Have keen interest to explore in web development,
    machine learning, and IoT in real work environment. Have a strong sense of responsibility and caring personality. A
    tenacious person that really adaptable to work in team with big will to learn.`,
  age: 23,
  address: "Gading Serpong, Tangerang",
};

export const Skill = [
  {
    id: 0,
    name: "HTML",
    url: "/logo/html.png",
  },
  {
    id: 1,
    name: "CSS",
    url: "/logo/angular.png",
  },
  {
    id: 2,
    name: "Javascript",
    url: "/logo/js.png",
  },
  {
    id: 3,
    name: "React JS",
    url: "/logo/react.png",
  },
  {
    id: 4,
    name: "Next JS",
    url: "/logo/next.png",
  },
  {
    id: 5,
    name: "Express",
    url: "/logo/nest.svg",
  },
  {
    id: 6,
    name: "Mysql",
    url: "/logo/mysql.png",
  },
  {
    id: 7,
    name: "Golang",
    url: "/logo/go.png",
  },
  {
    id: 8,
    name: "Python",
    url: "/logo/python.png",
  },
  {
    id: 9,
    name: "Skicit-learn",
    url: "/logo/ts.png",
  },
  {
    id: 10,
    name: "Tableau",
    url: "/logo/tableau.png",
  },
  {
    id: 11,
    name: "Matlab",
    url: "/logo/matlab.png",
  },
];

export const Works: DataType[] = [
  {
    id: "quran-hub",
    title: "Quran Hub",
    image: "/img/quranhub.png",
    description:
      "Quran Hub is your essential online Quran companion, providing access to the holy text anytime, anywhere. With Quran Hub, users can seamlessly navigate through the verses of the Quran, offering a digital platform that ensures accessibility and convenience. Whether at home, on the go, or during travels, Quran Hub empowers individuals to engage with the sacred teachings of Islam effortlessly. This app aims to foster spiritual growth and connection through its user-friendly interface, making the Quran accessible to all, whenever they seek solace, guidance, or reflection.",
    links: {
      github: "https://github.com/fadlirizaldy/quran-hub",
      live: "https://quran-hub-tau.vercel.app/",
    },
    tech_stack: ["Next js", "Tailwind CSS"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "kiwa-sandals",
    title: "Kiwa Sandals",
    image: "/img/kiwa-sandal.png",
    description:
      "A product-focused landing page for Kiwa Sandals, developed to highlight branding, catalog, and product appeal. Built with Next.js, TypeScript, and Tailwind CSS using DaisyUI for consistent component design.",
    links: {
      github: "https://github.com/fadlirizaldy/kiwasandals-fe",
      live: "https://kiwasandals-fe.vercel.app/",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS"],
    year: 2025,
    type: "Frontend Development",
  },
  {
    id: "kaizen-billiard",
    title: "Kaizen Billiard",
    image: "/img/kaizen-billiard.png",
    description:
      "A product-focused landing page for Kaizen Billiard, designed to showcase premium pool tables with an emphasis on craftsmanship, innovation, and performance. Built using Next.js, TypeScript, and Tailwind CSS for a clean, responsive, and modern user experience.",
    links: {
      github: "https://github.com/zhaardhia/kaizen-billiard",
      live: "https://kaizen-billiard.vercel.app/",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS"],
    year: 2025,
    type: "Frontend Development",
  },
  {
    id: "varmasea-app",
    title: "Varmasea App",
    image: "/img/varmasea.png",
    description:
      "Varmasea is a cutting-edge healthcare application designed to seamlessly integrate health and wellness into your lifestyle. With Varmasea, users can easily browse and purchase healthcare products through a convenient shopping cart feature, ensuring access to essential items with just a few clicks. Additionally, the app offers a revolutionary telemedicine experience, allowing users to engage in real-time chats with healthcare professionals.",
    links: {
      github: "https://github.com/fadlirizaldy/varmasea",
      live: "",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS", "Daisy UI"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "jotter-app",
    title: "Jotter App",
    image: "/img/jotter.png",
    description:
      'Jotter is an intuitive note app designed to keep all your important reminders in one easily accessible space. With the tagline "Your virtual reminder space," it ensures you never miss a beat.',
    links: {
      github: "https://github.com/fadlirizaldy/jotter-app",
      live: "https://jotter-app-mu.vercel.app/",
    },
    tech_stack: ["React js", "Tailwind CSS"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "pixel-news",
    title: "Pixel News",
    image: "/img/pixel-news.png",
    description:
      "Introducing Pixel News, your go-to destination for the latest and most exciting developments in the gaming world. Dive into the immersive universe of gaming with Pixel News, where users can stay informed about the hottest trends, releases, and industry insights through a visually engaging newspaper-style format. Unlock a premium experience by subscribing to our newspaper, gaining exclusive access to in-depth articles.",
    links: {
      github: "https://github.com/fadlirizaldy/Next-assignment-sealab",
      live: "https://next-assignment-fadli.vercel.app/",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "tripease",
    title: "Tripease",
    image: "/img/tripease.png",
    description:
      "Tripease is a comprehensive mobile-based travel booking application that simplifies and enhances the travel planning experience with its user-friendly interface and diverse range of options.",
    links: {
      github: "https://github.com/fadlirizaldy/tripease-admin",
      live: "https://tripease.my.id/",
    },
    tech_stack: ["React js", "Tailwind CSS", "Cloudinary", "Jotai", "SWR"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "siakad",
    title: "SIAKAD",
    image: "/img/siakad.png",
    description:
      "SIAKAD is a dummy integrated academic information system platform for students, offering efficient and transparent access to academic data, class schedules, and course information.",
    links: {
      github: "https://github.com/fadlirizaldy/varmasea",
      live: "https://siakad-v1.vercel.app/",
    },
    tech_stack: ["React js", "Tailwind CSS", "Graphql", "Redux"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "cinemy",
    title: "Cinemy",
    image: "/img/cinemy.png",
    description:
      "Cinemy caters to every cinematic taste. Whether you're in search of the hottest blockbusters or hidden gems, Cinemy provides easy access to an extensive library of entertainment. Experience the thrill of discovering new favorites and staying updated with the most recent releases.",
    links: {
      github: "https://github.com/fadlirizaldy/cinemy-next",
      live: "https://cinemy-next.vercel.app/",
    },
    tech_stack: ["Next js", "Tailwind CSS"],
    year: 2022,
    type: "Frontend Development",
  },
  {
    id: "echo-app",
    title: "Echo",
    image: "/img/echo.png",
    description:
      "Echo is your brand new social media app designed for dynamic and engaging discussions. With Echo, you can effortlessly create threads on any topic, making it easy to start conversations and connect with others. Whether you're sharing ideas, debating current events, or just chatting with friends, Echo provides a seamless and intuitive platform to keep the conversation going. Join Echo today and experience a social media space where every voice is heard and every discussion thrives.",
    links: {
      github: "https://github.com/fadlirizaldy/echo-app",
      live: "https://echo-app-nine.vercel.app/",
    },
    tech_stack: ["React js", "Tailwind CSS", "Redux"],
    year: 2024,
    type: "Frontend Development",
  },
];

export const Experience: ExperienceType[] = [
  {
    id: 6,
    title: "Frontend Engineer",
    company: "Prudential Indonesia",
    duration: "Mei 2026 - Now",
  },
  {
    id: 5,
    title: "Frontend Engineer",
    company: "PT Astra International Tbk",
    duration: "Apr 2024 - Apr 2026",
  },
  {
    id: 4,
    title: "Frontend Engineer Internship",
    company: "Ajaib",
    duration: "Feb 2024 - May 2024",
  },
  {
    id: 3,
    title: "Frontend Engineer Trainee",
    company: "Shopee",
    duration: "Oct 2023 - Feb 2024",
  },
  {
    id: 2,
    title: "Frontend Engineer Mentee",
    company: "Alterra Academy",
    duration: "Feb 2023 - Jun 2023",
  },
  {
    id: 1,
    title: "Data Scientist Internship",
    company: "Bisa AI Academy",
    duration: "Feb 2022 - Jul 2022",
  },
  {
    id: 0,
    title: "Data Admin Internship",
    company: "Telunjuk.com",
    duration: "Nov 2021 - Des 2021",
  },
];

export const CompanyWorks: DataType[] = [
  {
    id: "airsys",
    title: "Airsys",
    image: "/img/career-project/airsys-1.png",
    description:
      "Airsys is a web-based application developed to streamline and centralize the recruitment processes within Astra International. Designed as the core CMS (Content Management System) for Astra Career, Airsys enables HR teams, recruiters, and hiring managers to efficiently manage candidate pipelines, job postings, interview workflows, and internal approvals.",
    links: {
      github: "-",
      live: "https://airsysdev.astra.co.id/",
    },
    tech_stack: ["Next js", "ANTD", "Redux", "Styled Component"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: "ganra-ganessa",
    title: "Ganra Ganessa",
    image: "/img/career-project/ganessa-1.png",
    description:
      "Ganessa Chat AI is an intelligent conversational platform designed to support the daily operations of GANRA (Group Audit and Advisory Astra). Built to act as a smart assistant, Ganessa allows team members to quickly access insights, guidance, and information related to audit, risk management, advisory processes, and GANRA-specific methodologies.",
    links: {
      github: "-",
      live: "https://ganra-ganessadev.astra.co.id/",
    },
    tech_stack: ["Next js", "Tailwind CSS", "Tanstack Query"],
    year: 2025,
    type: "Frontend Development",
  },
  {
    id: "invitee",
    title: "Invitee",
    image: "/img/career-project/invitee-3.png",
    description:
      "InVITEE is a web-based AI interview platform designed to modernize and streamline the recruitment process. It enables candidates to participate in fully autonomous AI-driven interviews, allowing companies to efficiently assess talent at scale without requiring real-time interviewer availability. Using advanced conversational AI, InVITEE conducts interviews, evaluates responses, and provides structured insights to recruiters helping organizations accelerate screening, maintain assessment consistency, and enhance the overall candidate experience. As a key part of Astra's recruitment technology ecosystem, InVITEE brings automation, fairness, and efficiency to the early stages of hiring.",
    links: {
      github: "-",
      live: "https://ai-interview-dev.astra.co.id/",
    },
    tech_stack: ["Next js", "Tailwind CSS", "Axios"],
    year: 2025,
    type: "Frontend Development",
  },
  {
    id: "atriss",
    title: "Atriss",
    image: "/img/career-project/atriss-1.png",
    description:
      "ATRISS (Astra Treasury Integrated & Solution System) is a web-based platform designed to enhance and streamline Astra's financial and treasury management processes. Built for operational accuracy and strategic oversight, ATRISS helps treasury teams manage cash flow, financial transactions, funding activities, and risk monitoring in a centralized and integrated environment.",
    links: {
      github: "-",
      live: "https://atrissdev.astra.co.id/login",
    },
    tech_stack: ["Next js", "Tailwind CSS", "Axios"],
    year: 2025,
    type: "Frontend Development",
  },
];
