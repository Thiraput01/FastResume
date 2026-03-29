import app from "./main";

export const fullVersionLink = "https://resume.narze.live";
export const sourceLink = "https://github.com/Thiraput01";

/* ──────────────── INTRO ──────────────── */
export const introData = {
  name: "Thiraput Khongmuak",
  jobTitle: "",
  phone: "+66 98-830-9441",
  email: "thiraputball@gmail.com",
  github: "Thiraput01",
  linkedin: "thiraput-khongmuak-a5a378308",
  location: "Bangkok, Thailand",
  website: "",
};

/* ──────────────── SKILLS ──────────────── */
export const technologies = [
  {
    section: "Languages",
    details: ["Python", "SQL", "JavaScript", "Go", "C++", "Java"],
  },
  {
    section: "Frameworks",
    details: [
      "PyTorch",
      "HuggingFace",
      "LangChain",
      "LangGraph",
      "Ollama",
      "FastAPI",
      "React",
      "Next.js",
      "Node.js",
      "TailwindCSS",
    ],
  },
  {
    section: "Databases",
    details: ["MongoDB", "PostgreSQL", "BigQuery", "Qdrant", "Redis"],
  },
  {
    section: "Tools",
    details: [
      "Git",
      "Docker",
      "Amazon Web Services (AWS)",
      "Google Cloud Platform (GCP)",
      "Google Kubernetes Engine (GKE)",
    ],
  },
];

export const educations = [
  {
    head: "Chulalongkorn University",
    details: "B.Eng. Computer Engineering, 2022-2026 (GPAX 3.59)",
  },
];

export const experiences = [
  {
    position: "Data Scientist Intern",
    company: "TMBThanachart Bank Public Company Limited",
    date: "January 2026 – Present",
    details: [
      "Support ttb's Retail Customer Intelligence (RCI) team in driving sales through data-driven marketing, utilizing Databricks, Python, SQL, and Microsoft Power Platform for personalized content delivery.",
      "Developed a real-time performance tracking dashboard using Databricks, Power BI, and Power Automate, enabling the team to monitor campaign KPIs and act immediately.",
    ],
    url: "",
    github: "",
  },
  {
    position: "Research Assistant Intern",
    company: "National Electronics and Computer Technology Center (NECTEC)",
    date: "May 2025 – July 2025",
    details: [
      "Developed a Thai-language voice assistant using the Gemini Live API with Tools calling (web search, memory management, function execution), integrated into a robotic platform.",
      "Conducted literature review on LLMs for healthcare to inform the design of an AI-driven robotic assistant.",
    ],
    url: "",
    github: "",
  },
  {
    position: "Teaching Assistant on Software Development Practice (Backend)",
    company: "Chulalongkorn University",
    date: "January 2025 - April 2025",
    details: [
      "Supported backend development coursework (Node.js, MongoDB, Postman), graded assignments, and provided constructive feedback to students.",
    ],
    url: "",
    github: "",
  },
  {
    position: "Larngear Festival 2024 Website, Core Team Developer",
    company: "Chulalongkorn University",
    date: "September 2024",
    details: [
      "Collaborated with a team of developers to create a user-friendly website for the Larngear Festival 2024 using Next.js + Typescript.",
      "Implemented responsive design principles to ensure optimal viewing experiences across various devices and screen sizes.",
    ],
    url: "",
    github: "",
  },
];

export const projects = [
  {
    name: "Drills.pro, Low-code platform for training and deploying machine learning model",
    date: "August 2025 – Present",
    details: [
      "Led development of Drills.pro, a low-code platform enabling users with minimal coding experience to train and deploy ML models.",
      "Engineered a training pipeline using Python, Celery, and RabbitMQ for async deep learning jobs, optimizing training performance by 55.5% via PyTorch Compiler and mixed-precision training.",
      "Deployed NVIDIA Triton Inference Server with TensorRT and dynamic batching (+43% throughput), with automated model export to ONNX/PyTorch formats stored in GCS.",
      "Architected a Go microservices ecosystem with an API Gateway handling JWT auth, request routing, and protocol translation for 4+ downstream services.",
      "Implemented gRPC/Protobuf inter-service communication and an Event-Driven Architecture via RabbitMQ to decouple orchestration from training workers.",
      "Built a server-side rendered Next.js 15 app with TypeScript and Tailwind CSS, integrating TanStack Query for real-time training status monitoring with optimistic caching.",
    ],
    url: "https://drills.pro",
    github: "",
  },
  {
    name: "Traffy-Caesar",
    date: "April 2025 - May 2025",
    details: [
      "Built a system to auto-classify and route public complaints from Traffy Fondue to appropriate organizations.",
      "Developed a daily ETL pipeline with Apache Airflow, PySpark on Dataproc, and GCS, then trained a K-Means clustering model on combined text and image embeddings (BigQueryML) optimized via silhouette scores.",
      "Built a Streamlit/Plotly/Pydeck dashboard displaying clustering results, PCA plots, geospatial insights, and Gemini-generated cluster summaries.",
    ],
    url: "https://www.youtube.com/watch?v=Fb3qgDOR-NY",
    github: "",
  },
  {
    name: "PicMePls",
    date: "January 2025 - April 2025",
    details: [
      "Developed a matchmaking platform designed to connect customers with professional photographers for weddings, graduations, and other important events.",
      "Built with Next.js + Typescript for the frontend and a Golang backend using the Fiber framework, following a Scrum methodology to ensure agile development and high code quality.",
    ],
    url: "https://github.com/CP-RektMart/pic-me-pls-backend",
    github: "",
  },
  {
    name: "CP-GENIE",
    date: "April 2025 - May 2025",
    details: [
      "Built a CU Computer Engineering-specialized chatbot with conversational memory using LangChain and FastAPI, with a hybrid-search RAG system ingesting faculty pages, student handbooks, and departmental PDFs.",
      "Implemented and benchmarked Agentic, Contextual, and Corrective RAG variants using LLM-as-a-Judge, each served through dedicated FastAPI endpoints (/agentic, /contextual, /corrective) for direct comparison.",
    ],
    url: "https://github.com/CP-RektMart/CP-GENIE",
    github: "",
  },
  {
    name: "Traffy Fondue Multilabel Classification",
    date: "March 2025",
    details: [
      "Developed and fine-tuned a multilabel classification model using WangchanBERTa and PhayathaiBERT, applying text preprocessing, data augmentation, and iterative stratification to handle class imbalance in the Traffy Fondue dataset.",
      "Achieved a macro F1-score of 0.5058 on Kaggle, ranking 6th place, and experimented with multiple modeling techniques to enhance performance.",
    ],
    url: "",
    github: "",
  },
  {
    name: "CIBMTR – Equity in post-HCT Survival Predictions",
    date: "December 2024 – January 2025",
    details: [
      "Developed LightGBM, CatBoost, and XGBoost survival prediction models for allogeneic HCT patients, achieving avg CV score of 0.68 using a custom Stratified C-Index metric.",
    ],
    url: "https://github.com/Thiraput01/CIBMTR-Equity-in-post-HCT-Survival-Predictions",

    github: "",
  },
  {
    name: "Chess to PGN Project",
    date: "December 2024",
    details: [
      "Built a complete pipeline to convert chess match video to PGN format.",
      "Trained YOLO11m on a custom chess piece dataset (mAP50: 0.993), benchmarked against Faster-RCNN and DETR for model selection.",
      "Labeled a custom chess board dataset using RoboFlow.",
    ],
    url: "",
    github: "",
  },
  {
    name: "Courspora Notifier Project",
    date: "October 2024 - November 2024",
    details: [
      "Developed a Discord bot (Discord.js) with a daily Python Selenium scraping pipeline to deliver real-time updates from Courspora.com to users.",
      "Deployed the application using Docker Containers and Google Kubernetes Engine (GKE).",
    ],
    url: "https://github.com/Thiraput01/Courspora-notifier",
    github: "",
  },
  {
    name: "TEEYAI",
    date: "August 2024 - September 2024",
    details: [
      "Designed and built a web-based ordering system with RESTful CRUD APIs using Golang and MongoDB, including database schema design and backend architecture.",
    ],
    url: "https://github.com/TEEYAI",
    github: "",
  },
];

/* ──────────────── ACTIVITIES / ACHIEVEMENTS ──────────────── */
export const activities = [
  {
    name: "YES Camp - MITR PHOL Young Entrepreneur Strengthsfinding Camp – ",
    date: "September 2025",
    details: [
      'Winner of the "GenAI for Sugar Industry Knowledge & Best Practice Hub" batch by developing an AI-powered Knowledge Hub using AWS services.',
      "Implemented hybrid search with hierarchical chunking and OCR integration, benchmarking RAG variants (query decomposition, Graph-based RAG) on inference speed and performance trade-offs.",
      "Conducted an ROI analysis, resulting in ~800 hours/day of time savings and THB 3.1M/month in productivity gains.",
    ],
  },
  {
    name: "SCBX x AIAT: Ethical Finance Hackathon 2025 - Financial Analysis Agent – 2nd Runner-Up",
    date: "June 2025",
    details: [
      "Developed a modular, multi-agent financial analysis system using LangGraph for intent classification, specialized agent routing, and dynamic reasoning for market trend predictions and financial Q&A.",
      "Integrated a self-correcting agent loop powered by Qwen2.5-7B-Instruct and Typhoon2.1-Gemma3-4B, enhancing response accuracy and reliability.",
    ],
  },
  {
    name: "Super AI Engineer Season 5",
    date: "June 2025",
    details: [
      "Placed Top 3 across all 4 hackathons: 1st Runner-Up (Liver Fibrosis), 2nd Runner-Up (GSMaP Bias Correction, Cognitive Profiling, Financial Analysis), applying ML across healthcare, climate science, cognitive science, and finance.",
    ],
  },

  {
    name: "I-Squared Hackathon – 2nd Runner-Up",
    date: "February 2025",
    details: [
      "Achieved 1st place on Kaggle leaderboard (score: 0.99707) for motorcycle rider type classification from CCTV images.",
      "Applied data augmentation, K-fold CV, and ensemble methods, evaluating ResNet18/50, EfficientNets, and ViT — selected EfficientNetB1 for superior performance on smaller datasets.",
    ],
  },
  {
    name: "depa × AWS depa Growth Lab – GenAI Hackathon",
    date: "October 2024",
    details: [
      "Proposed an AI-powered Virtual Personal Shopper using generative AI with personalized recommendations, automated promotion management, and custom AI personalities.",
    ],
  },
  {
    name: "ChaiyoGCP Season 4",
    date: "May – June 2024",
    details: [
      "Achieved Tier 1 rewards in GCP Season 4, building proficiency in sentiment analysis, speech/image processing, BigQuery-ML, TensorFlow, and Vertex AI for production ML and generative models.",
    ],
  },
];

/* ──────────────── INTERESTS (Not used) ──────────────── */
// export const interests = [
//   { name: "Coding", details: "Algorithmic puzzles & clean system design." },
//   { name: "Mathematics", details: "Applying advanced maths to ML research." },
//   {
//     name: "Productivity / Life-hacks",
//     details: "Continuous optimisation of workflows.",
//   },
// ];
