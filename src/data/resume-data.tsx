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
import style from "styled-jsx/style";

export const RESUME_DATA = {
  name: "Harsh Gupta",
  initials: "HG",
  location: "Jamshedpur, Jharkhand, India",
  locationLink: "https://maps.app.goo.gl/u77FuCPFmDPzUDDs8",
  about:
    "Experienced Full Stack Developer with a strong focus on backend development, DevOps, networking, and system design, committed to delivering high-quality, robust solutions.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch, with a focus on backend development, DevOps, networking, and system design. I work primarily with Golang, TypeScript, React, Node.js, and develop robust REST APIs. My experience comes from intensive personal projects, where I’ve honed my skills in building efficient, scalable, and secure systems.",
  avatarUrl: "profile.jpeg",
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
      degree: "Dual Degree in Mechanical Engineering - 8.15 CGPA",
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
    "TypeScript",
    "Next.js",
    "Node.js",
    "Docker",
    "MongoDB",
    "Linux",
    "Networking",
    "DBMS",
    "DevOps",
    "System Design"
  ],
  projects: [
    {
      title: "Monitor Server",
      techStack: [
        "Next.js",
        "Express.js",
        "bash",
        "Prisma ORM",
        "PostgreSQL",
        "Docker",
      ],
      description:
        "A real-time monitoring system designed to track distributed Virtual Machines (VMs).",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Harsh-cyber005/monitor-server",
      }
    },
    {
      title: "AI-Mental Health",
      techStack: [
        "Next.js",
        "FastAPI",
        "MongoDB",
        "gRPC",
        "Redis",
        "LangGraph",
        "Docker",
      ],
      description:
        "Microservices platform using Python, Next.js, and gRPC for scheduling meetings, chat, report generation, and async update management",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Harsh-cyber005/gc25",
      },
    },
    {
      title: "duobrain",
      techStack: [
        "Next.js",
        "Node.js",
        "MongoDB"
      ],
      description:
        'duobrain is your personal \"Second Brain\"—a central hub to store, organize, and retrieve everything that matters.',
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://second-brain-chi.vercel.app/",
      },
    },
    {
      title: "Pocketdock",
      techStack: [
        "Golang",
        "Linux Namespaces",
        "Cgroups v2",
        "OverlayFS",
        "ip-tables"
      ],
      description:
        "A tiny, educational container runtime in Go.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Harsh-cyber005/pocketdock/",
      },
    }
  ]
} as const;
