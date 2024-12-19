import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Harsh Gupta",
  initials: "HG",
  location: "Jamshedpur, Jharkhand, India",
  locationLink: "https://maps.app.goo.gl/u77FuCPFmDPzUDDs8",
  about:
    "Experienced Full Stack Developer with a strong focus on backend development, DevOps, networking, and system design, committed to delivering high-quality, robust solutions.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch, with a focus on backend development, DevOps, networking, and system design. I work primarily with TypeScript, React, Node.js, and develop robust REST APIs. My experience comes from intensive personal projects, where I’ve honed my skills in building efficient, scalable, and secure systems.",
  avatarUrl: ".",
  personalWebsiteUrl: "https://harshmax.vercel.app/",
  contact: {
    email: "harshxgupta931@gmail.com",
    tel: "+91XXXXXXXXXX",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harsh-cyber005",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harshmax-dev/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/harshmax_dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Technology Kharagpur",
      degree: "Dual Degree in Mechanical Engineering - 8.16 CGPA",
      start: "2022",
      end: "2027",
    },
  ],
  work: [
    // {
    //   company: "Film.io",
    //   link: "https://film.io",
    //   badges: ["Remote"],
    //   title: "Software Architect",
    //   logo: ConsultlyLogo,
    //   start: "2024",
    //   end: null,
    //   description:
    //     "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
    // },
  ],
  skills: [
    "Golang",
    "C++",
    "Python",
    "JavaScript",
    "React.js",
    "Node.js",
    "Docker",
    "MongoDB",
    "Linux"
  ],
  projects: [
    {
      title: "Movix Prime",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "REST API",
        "Docker",
      ],
      description:
        "A movie and web series streaming platform to watch movies and web series online.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://movix-client-react.vercel.app/",
      },
    },
    {
      title: "Godowns App",
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "REST API",
        "Docker",
      ],
      description:
        "An app to store, manage and locate stocks of various products in Godowns around the city",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://godowns-pi.vercel.app/",
      },
    },
  ]
} as const;
