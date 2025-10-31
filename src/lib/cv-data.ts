export interface CVData {
  name: string;
  title: string;
  contact: {
    email: string;
    location: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
    ai: string[];
    automation: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    period: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  additional: {
    thesis: string;
    volunteering: string;
    interests: string[];
  };
}

export const cvData: CVData = {
  name: "Grant Marthinus",
  title:
    "Full-Stack Software Developer & Cloud Engineer | Mechatronics Engineer",
  contact: {
    email: "grantmarthinus@gmail.com",
    location: "Cape Town, South Africa",
    linkedin: "www.linkedin.com/in/grant-marthinus-5a7bb9135",
    github: "www.github.com/grantmart9",
  },
  summary:
    "Full-Stack Engineer with a strong foundation in Mechatronics and over 7 years of experience in software development, cloud architecture, and automation. Skilled in React, Next.js, Node.js, Python, and Supabase, with recent projects integrating AI-driven systems and scalable cloud infrastructures. Passionate about developing high-performance, user-focused web platforms that seamlessly connect software innovation with hardware automation.",
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
      "Framer Motion",
    ],
    backend: ["Node.js", "FLASK", "FastAPI"],
    database: ["Supabase", "PostgreSQL", "MySQL"],
    cloud: ["AWS", "GitHub Actions", "CI/CD"],
    ai: ["OpenAI API", "AI-driven UI Automation"],
    automation: [
      "web automation",
      "Business Automation",
      "IoT",
      "PLC Integration",
    ],
  },
  projects: [
    {
      title:
        "Intelli-Farm – South Africa's first AI-controlled fertigation system",
      description:
        "Developed the frontend and contributed to backend systems enabling precision agriculture through AI-driven irrigation control.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Material UI",
        "JavaScript",
        "Node.js",
        "PostgresSQL",
      ],
      link: "intelli-farm.net/",
    },
    {
      title: "WeCare Web App",
      description:
        "WeCare is a community-driven donation platform designed to connect donors with individuals and families in need.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8082/",
    },
    {
      title: "EcoMetrics Web App",
      description:
        "EcoMetrics empowers businesses to track and reduce their carbon footprint with intelligent analytics and automated reporting.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8083/",
    },

    {
      title: "FaithConnect Web App",
      description:
        "Eagle Ministries is a comprehensive church management application designed to streamline administrative tasks, facilitate community engagement, and handle financial contributions for religious organizations.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8084/",
    },
    {
      title: "AssetTrackr Web App",
      description:
        "AssetTrackr is an asset management platform that helps organizations efficiently track, manage, and maintain their physical and digital assets in real-time.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8085/",
    },
    {
      title: "Depression-Aid AI Platform",
      description:
        "Developed a privacy-first mental health support web app integrating LLMs for conversational and therapeutic tracking.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8086/",
    },
    {
      title: "Holiday Rentals Web App",
      description:
        "Holiday Rentals is a vacation property management platform that allows property owners to list their rentals and connect with potential guests for bookings and inquiries.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn",
        "TypeScript",
        "Node.js",
        "Supabase",
      ],
      link: "13.60.220.2:8087/",
    },
  ],
  experience: [
    {
      position: "Senior Software Developer",
      company: "Temo Consulting",
      period: "Jul 2024 – Present",
      description:
        "Lead developer for web and mobile apps using React/Next.js, Node.js,Supabase, and Flutter. Designed database and cloud architecture. Conducted R&D and mentored junior devs.",
    },
    {
      position: "Cloud Support Engineer",
      company: "Amazon Web Services",
      period: "Feb 2023 – Jun 2024",
      description:
        "Supported EC2 ,ELB ,Lambda ,API Gateway ,ECS ,EKS , RDS, and other core AWS services. Provided scalable cloud infrastructure support and automation troubleshooting.",
    },
    {
      position: "Automation Engineer",
      company: "Lodicon",
      period: "Apr 2021 – Feb 2023",
      description:
        "Built full-stack automation dashboards (React, Python, FLASK, Node.js, PostgresSQL). Integrated PLCs, HMIs, and SCADA systems into unified control platforms.",
    },
    {
      position: "Automation Engineer",
      company: "Sloth Electronics",
      period: "Aug 2019 – Apr 2021",
      description:
        "Developed PLC-based hospital automation systems (PLC, HMI, and SCADA). Developed a web application (Python, Flask, React) to monitor and control PLC systems.",
    },
    {
      position: "Automation Technician",
      company: "Centurion Systems",
      period: "Dec 2019 – Aug 2019",
      description:
        "Performed electronic repairs, fault analysis, and production support for security automation systems.",
    },
    {
      position: "Automation technician intern",
      company: "Electromechanica",
      period: "Dec 2018 – Aug 2019",
      description:
        "Performed electronic repairs, fault analysis, and production support for industrial automation systems.",
    },
  ],
  education: [
    {
      degree: "BTech Degree: Mechanical Engineering (Mechatronics)",
      institution: "CPUT",
      period: "2026",
    },
    {
      degree: "National Diploma: Mechanical Engineering (Mechatronics)",
      institution: "CPUT",
      period: "2018",
    },
    {
      degree: "Matriculated",
      institution: "Bredasdorp High School",
      period: "2012",
    },
  ],
  additional: {
    thesis: "Automatic pH Controller for Hydroponic Nutrient Solution",
    volunteering: "Arniston Community Development (2014–2018)",
    interests: [
      "AI systems integration",
      "sustainable automation",
      "hydroponics technology",
    ],
  },
};
