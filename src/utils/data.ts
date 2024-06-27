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
    url: "/logo/css.png",
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
    url: "/logo/express.png",
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
    url: "/logo/sklearn.png",
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
    id: 0,
    title: "Varmasea App",
    image: "/img/varmasea.png",
    description:
      "Varmasea is a cutting-edge healthcare application designed to seamlessly integrate health and wellness into your lifestyle. With Varmasea, users can easily browse and purchase healthcare products through a convenient shopping cart feature, ensuring access to essential items with just a few clicks. Additionally, the app offers a revolutionary telemedicine experience, allowing users to engage in real-time chats with healthcare professionals",
    links: {
      github: "https://github.com/fadlirizaldy/varmasea",
      live: "-",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS", "Daisy UI", "Golang", "PostgreSql"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: 1,
    title: "Pixel News",
    image: "/img/pixel-news.png",
    description:
      "Introducing Pixel News, your go-to destination for the latest and most exciting developments in the gaming world. Dive into the immersive universe of gaming with Pixel News, where users can stay informed about the hottest trends, releases, and industry insights through a visually engaging newspaper-style format. Unlock a premium experience by subscribing to our newspaper, gaining exclusive access to in-depth articles.",
    links: {
      github: "https://github.com/fadlirizaldy/varmasea",
      live: "https://next-assignment-fadli.vercel.app/",
    },
    tech_stack: ["Next js", "Typescript", "Tailwind CSS"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: 2,
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
    id: 3,
    title: "SIAKAD",
    image: "/img/siakad.png",
    description:
      "SIAKAD is an integrated academic information system platform for students, offering efficient and transparent access to academic data, class schedules, and course information.",
    links: {
      github: "https://github.com/fadlirizaldy/varmasea",
      live: "-",
    },
    tech_stack: ["React js", "Tailwind CSS", "Graphql", "Redux"],
    year: 2024,
    type: "Frontend Development",
  },
  {
    id: 4,
    title: "Cinemy",
    image: "/img/cinemy.png",
    description:
      "Cinemy caters to every cinematic taste. Whether you're in search of the hottest blockbusters or hidden gems, Cinemy provides easy access to an extensive library of entertainment. Experience the thrill of discovering new favorites and staying updated with the most recent releases",
    links: {
      github: "https://github.com/fadlirizaldy/cinemy-next",
      live: "https://cinemy-next.vercel.app/",
    },
    tech_stack: ["Next js", "Tailwind CSS"],
    year: 2022,
    type: "Frontend Development",
  },
];

export const Experience: ExperienceType[] = [
  {
    id: 5,
    title: "Frontend Engineer",
    company: "Astra Graphia Information Technology",
    duration: "Apr 2024 - Now",
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
