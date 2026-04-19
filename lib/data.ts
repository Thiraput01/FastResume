export const fullVersionLink = "https://your-resume-preview.vercel.app";
export const sourceLink = "https://github.com/your-username/FastResume";

/* ──────────────── INTRO ──────────────── */
export const introData = {
  name: "John Doe",
  jobTitle: "Senior Software Engineer",
  phone: "+1 234-567-890",
  email: "john.doe@example.com",
  github: "johndoe",
  linkedin: "john-doe-professional",
  location: "San Francisco, CA",
  website: "johndoe.dev",
};

/* ──────────────── SKILLS ──────────────── */
export const technologies = [
  {
    section: "Languages",
    details: ["TypeScript", "JavaScript", "Python", "Go", "Rust", "Java"],
  },
  {
    section: "Frameworks",
    details: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Express",
      "TailwindCSS",
      "PyTorch",
      "LangChain",
    ],
  },
  {
    section: "Databases",
    details: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    section: "Tools",
    details: ["Git", "Docker", "Kubernetes", "AWS", "Google Cloud", "CI/CD"],
  },
];

export const educations = [
  {
    head: "Stanford University",
    details: "M.S. in Computer Science, 2018-2020 (GPA 4.0)",
  },
  {
    head: "University of California, Berkeley",
    details: "B.S. in Electrical Engineering & Computer Sciences, 2014-2018",
  },
];

export const experiences = [
  {
    position: "Senior Software Engineer",
    company: "Tech Giant Corp",
    date: "Jan 2021 – Present",
    details: [
      "Lead a team of 10 engineers in developing high-scale microservices, processing 1M+ requests per second with 99.9% availability.",
      "Architected and implemented a global data synchronization service using Go and Kafka, reducing latency by 40% across 5 regions.",
      "Mentored junior developers and established best practices for code reviews, testing, and deployment automation.",
    ],
    url: "https://example.com/company",
  },
  {
    position: "Software Engineer",
    company: "Fast-Growing Startup",
    date: "Jun 2018 – Dec 2020",
    details: [
      "Developed and launched a real-time analytics dashboard using React and WebSockets, increasing user engagement by 25%.",
      "Optimized database queries and implemented caching strategies, resulting in a 60% improvement in page load times.",
      "Collaborated with product managers and designers to deliver high-quality features in a fast-paced agile environment.",
    ],
    url: "https://example.com/startup",
  },
];

export const projects = [
  {
    name: "Open Source Library: FastAnalytics",
    date: "2023 – Present",
    details: [
      "Created a high-performance analytics library for React applications, currently used by 5,000+ developers.",
      "Implemented a custom diffing algorithm that optimizes UI updates, reducing memory consumption by 30%.",
      "Maintained documentation, responded to issues, and managed community contributions on GitHub.",
    ],
    url: "https://github.com/johndoe/fast-analytics",
  },
  {
    name: "Personal Project: AI-Powered Task Manager",
    date: "2022",
    details: [
      "Built a full-stack task management application using Next.js, OpenAI API, and PostgreSQL.",
      "Implemented intelligent task prioritization and scheduling using Large Language Models.",
      "Deployed the application on Vercel with automated CI/CD pipelines.",
    ],
    url: "https://ai-task-manager.dev",
  },
];

/* ──────────────── ACTIVITIES / ACHIEVEMENTS ──────────────── */
export const activities = [
  {
    name: "Global Hackathon Winner",
    date: "2023",
    details: [
      "Won 1st place among 500 teams by developing an AI-driven solution for sustainable energy management.",
      "Presented the solution to a panel of industry experts and received a $10,000 grant for further development.",
    ],
  },
  {
    name: "Conference Speaker: JSConf 2022",
    date: "2022",
    details: [
      "Delivered a keynote on 'The Future of Server-Side Rendering' to an audience of 1,500+ attendees.",
      "Published a follow-up technical article that reached 50,000+ views on Dev.to.",
    ],
  },
];
