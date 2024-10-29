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
  name: "Calin Ciurariu",
  initials: "CC",
  location: "Iasi, Romania, GMT+2",
  locationLink: "https://www.google.com/maps/place/Iasi",
  about:
    "Mobile-oriented Full Stack Developer",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. Currently, I work mostly with Xamarin Forms, .NET MAUI, React and Node.js. I have over 6 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQG0y5pmS0WyZw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691652629304?e=1735171200&v=beta&t=zWZEc-_LJtvGBAoe1LRN96K6IO_MXq8klCL7Lwwq-Ow",
  contact: {
    email: "calin.ciurariu@gmail.com",
    tel: "+40729216567",
    social: [
 
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/c%C4%83lin-ciurariu-31574a153/",
        icon: LinkedInIcon,
      },
   
    ],
  },
  education: [
    {
      school: "Faculty of Computer Science Iasi",
      start: "2017",
      end: "2020",
      link:"https://www.info.uaic.ro/",
      degree:""
    },
  ],
  work: [
    {
      company: "Freelance work",
      link: "",
      badges: ["Remote"],
      title: "Lead Web Developer",
      logo: ClevertechLogo,
      date:"2024",  position:"Senior",
      description:
       "Created a dashboard for an online multiplayer game using React and Node.js, managing player accounts and the online shop. Leveraged frameworks like Framer Motion, Tailwind, Leaflet, Material UI, React-Hook-Form, and more to enhance user experience and functionality." },
    {
      company: "Beenear",
      link: "https://www.beenear.com/",
      badges: ["Hybrid"],
      title: "Lead Mobile Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2021",
      
      date: null, position:"Mid → Senior",
      description:"Developed an end-to-end suite of 11 Xamarin-Forms mobile applications for warehouse and retail supply chain management using React, Node.js, and MDM tools, and began porting to .NET MAUI. Designed an in-house framework for these apps and personally managed the porting of another suite of apps from Win-CE to Xamarin.Forms, reducing the technical debt and completing the project with added unit testing."
            },
    {
      company: "BSS-ONE",
      link: "https://www.bss-one.ro/",
      badges: ["Hybrid"],
      title: "Xamarin Forms Developer", 
      logo: JojoMobileLogo,
      start: "2019",
      end: "2021", date: null,position:"Junior → Mid",
      description:
        "Delivered a mobile application from MVP to full release for monitoring electricity consumption, billing and price to clients.",
    },
    {
      company: "Innovative-IT",
      link: "",
      badges: [],
      title: "Xamarin Forms Developer",
      logo: NSNLogo,
      start: "summer 2018",
      end: "2019", date: null, position:"Entry-Level Developer",
      description: "Developed and tested an insurance policy management app using Xamarin Forms.",
    },
  ],
  skills: [
    "Xamarin.Forms",
    ".NET MAUI",
    "Swift",
    "C#",
    "Blazor",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "SQL",
    "MongoDB",
    "Git/TFS",
    "Soft Skills",
  ],
  languages: [
    "Romanian - Native",
    "English - C2",
    "French - B1",
    "Italian - A1",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    }
  ],
} as const;
