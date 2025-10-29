export interface CVData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    linkedin: string;
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
  title: "Full-Stack Software Engineer",
  contact: {
    phone: "+27 61 417 0615",
    email: "grantmarthinus@gmail.com",
    location: "Cape Town, South Africa",
    linkedin: "www.linkedin.com/in/grant-marthinus-5a7bb9135",
  },
  summary:
    "Full-stack engineer with a strong background in Mechatronics and 7+ years of hands-on experience in software development, cloud architecture, and automation. Proficient in React, Next.js, Node.js, Python, and Supabase, with recent work integrating AI-driven systems and scalable cloud solutions. Known for building efficient, user-centric web platforms that bridge the gap between software and hardware automation.",
  skills: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "Framer Motion",
    ],
    backend: ["Node.js", "Express", "Python", "FastAPI"],
    database: ["Supabase", "PostgreSQL", "MySQL"],
    cloud: ["AWS", "GitHub Actions", "Docker", "CI/CD"],
    ai: ["OpenAI API", "LangChain", "AI-driven UI Automation"],
    automation: ["PLCs", "HMI", "SCADA", "MQTT", "IoT Integration"],
  },
  projects: [
    {
      title:
        "Intelli-Farm – South Africa's first AI-controlled fertigation system",
      description:
        "Developed the frontend and contributed to backend systems enabling precision agriculture through AI-driven irrigation control.",
      technologies: ["React", "Node.js", "Supabase"],
    },
    {
      title: "Maintenance Streamlining Web App",
      description:
        "Developed a digital workflow to replace manual paper-based maintenance sheets, reducing data processing time by 70%.",
      technologies: [],
    },
    {
      title: "Hospital Critical Gas Monitoring System",
      description:
        "Created a GSM-to-PLC communication system (RS485) for critical gas alarms, now implemented in private hospitals nationwide.",
      technologies: [],
    },
    {
      title: "Depression-Aid AI Platform",
      description:
        "Developed a privacy-first mental health support web app integrating LLMs for conversational and therapeutic tracking.",
      technologies: [],
    },
  ],
  experience: [
    {
      position: "Senior Software Developer",
      company: "Temo Consulting",
      period: "Jul 2024 – Present",
      description:
        "Lead developer for web and mobile apps using React, Next.js, and Flutter. Designed database and cloud architecture. Conducted R&D and mentored junior devs.",
    },
    {
      position: "Cloud Support Engineer",
      company: "Amazon Web Services",
      period: "Feb 2023 – Jun 2024",
      description:
        "Supported EC2, EKS, RDS, and other core AWS services. Provided scalable cloud infrastructure support and automation troubleshooting.",
    },
    {
      position: "Automation Engineer",
      company: "Lodicon",
      period: "Apr 2021 – Feb 2023",
      description:
        "Built full-stack automation dashboards (React, Python, Node.js). Integrated PLCs, HMIs, and SCADA systems into unified control platforms.",
    },
    {
      position: "Automation Engineer",
      company: "Sloth Electronics SA",
      period: "Aug 2019 – Apr 2021",
      description:
        "Developed PLC-based hospital automation systems (SCADA, MQTT, C++). Deployed monitoring systems across private hospitals.",
    },
    {
      position: "Technician",
      company: "Centurion Systems",
      period: "Dec 2018 – Aug 2019",
      description:
        "Performed electronic repairs, fault analysis, and production support.",
    },
  ],
  education: [
    {
      degree: "BTech Degree: Mechanical Engineering (Mechatronics)",
      institution: "CPUT",
      period: "In Progress (2 subjects remaining)",
    },
    {
      degree: "National Diploma: Mechanical Engineering (Mechatronics)",
      institution: "CPUT",
      period: "2014–2018",
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
