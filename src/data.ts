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
    details: ["Python", "JavaScript", "Go", "C++", "Java", "SQL"],
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
      "GitHub",
      "Docker",
      "Google Cloud Platform (GCP)",
      "Google Kubernetes Engine (GKE)",
      "Vertex AI",
      "RoboFlow",
    ],
  },
];

export const educations = [
  {
    head: "Chulalongkorn University",
    details: "B.Eng. Computer Engineering, 2022-2026 (GPAX 3.54)",
  },
];

export const projects = [
  {
    name: "NECTEC Internship",
    date: "May 2025 – July 2025",
    details: [
      "Developed a Thai-language voice assistant using the Gemini Live API, integrating conversational capabilities into a robotic platform.",
      "Implemented Gemini Tools calling for web search, memory management, and function-specific execution.",
      "Searched for relevant research papers on LLMs for healthcare applications in a robotic assistant project.",
    ],
    url: "",
    github: "",
  },
  {
    name: "Traffy-Caesar",
    date: "April 2025 - May 2025",
    details: [
      "Built a data visualization dashboard using Streamlit, Plotly, and Pydeck, displaying clustering results, PCA plots, geospatial insights, and cluster summaries generated via Gemini LLM.",
      "Collaborated with data scientists to develop a K-Means clustering model incorporating both text and image embeddings, trained with BigQueryML and optimized using silhouette scores.",
      "Deployed an end-to-end data pipeline with GCP services: Cloud Storage, BigQuery, Dataproc, and Cloud Composer to support real-time updates.",
    ],
    url: "https://www.youtube.com/watch?v=Fb3qgDOR-NY",
    github: "",
  },
  {
    name: "Teaching Assistant on Software Development Practice (Backend)",
    date: "January 2025 - April 2025",
    details: [
      "Assisted students with backend development concepts that use Node.js and MongoDB.",
      "Conducted review sessions and provided one-on-one tutoring to students struggling with course content.",
      "Graded assignments and exams, providing constructive feedback to help students improve.",
    ],
    url: "",
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
      "Built a chatbot with memory that specialized in the Department of Computer Engineering at Chulalongkorn University, using LangChain and FastAPI.",
      "Implemented a RAG system with hybrid search, ingesting content from faculty pages, student handbooks, and departmental PDFs.",
      "Researched and implemented multiple RAG variants: Agentic RAG, Contextual RAG, and Corrective RAG to test and compare their performance using LLM-as-a-Judge.",
      "Served the system via FastAPI, enabling users to interact with and compare different RAG versions through dedicated endpoints (e.g., /agentic, /contextual, /corrective).",
    ],
    url: "https://github.com/CP-RektMart/CP-GENIE",
    github: "",
  },
  {
    name: "Traffy Fondue Multilabel Classification",
    date: "March 2025",
    details: [
      "Developed and fine-tuned a multilabel classification model using WangchanBERTa and PhayathaiBERT, applying text preprocessing, data augmentation, and iterative stratification to handle class imbalance in the Traffy Fondue dataset.",
      "Achieved a macro F1-score of 0.5058 on Kaggle, ranking 6th place, and experimented with ensemble models (3-fold WangchanBERTa, 4-fold PhayathaiBERT) to enhance performance.",
    ],
    url: "",
    github: "",
  },
  {
    name: "CIBMTR – Equity in post-HCT Survival Predictions",
    date: "December 2024 – January 2025",
    details: [
      "Designed predictive models to predict survival rate for allogeneic Hematopoietic Cell Transplantation patients.",
      "Developed multiple models, including LightGBM, CatBoost, and XGBoost, achieving an average cross-validation score of 0.68 using the Stratified Concordance Index (C-Index) as a custom evaluation metric.",
    ],
    url: "https://github.com/Thiraput01/CIBMTR-Equity-in-post-HCT-Survival-Predictions",

    github: "",
  },
  {
    name: "Chess to PGN Project",
    date: "December 2024",
    details: [
      "Designed and developed a complete pipeline to convert raw chess match video input into PGN format.",
      "Trained a YOLO11m model on a custom chess piece dataset, achieving an average mAP50 of 0.993.",
      "Researched and used various image processing and machine learning models like Faster-RCNN, DETR, and YOLO11m to compare their results.",
      "Labeled a custom chess board dataset using RoboFlow, gathering data from provided sources.",
    ],
    url: "",
    github: "",
  },
  {
    name: "Courspora Notifier Project",
    date: "October 2024 - November 2024",
    details: [
      "Developed a Discord bot with Discord.js, resulting in automated and timely user updates.",
      "Processed updates daily by building a data pipeline with Python Selenium, enabling real-time web scraping from the website “Courspora.com” and immediate information delivery to the users.",
      "Deployed the application Using Docker Containers and Google Kubernetes Engine (GKE).",
    ],
    url: "",
    github: "",
  },
  {
    name: "Larngear Festival 2024 Website, Core Team Developer",
    date: "September 2024",
    details: [
      "Collaborated with a team of developers to create a user-friendly website for the Larngear Festival 2024 using Next.js + Typescript.",
      "Implemented responsive design principles to ensure optimal viewing experiences across various devices and screen sizes.",
    ],
    url: "https://larngear-festival-2024.github.io/larngear-festival-2024/",
    github: "",
  },
  {
    name: "TEEYAI",
    date: "August 2024 - September 2024",
    details: [
      "Designed an efficient web-based ordering system, enhancing user satisfaction and operational efficiency.",
      "Developed CRUD operation for RESTful API using Golang and MongoDB.",
      "Designed a database schema and modeled the backend architecture.",
    ],
    url: "https://github.com/TEEYAI",
    github: "",
  },
];

/* ──────────────── ACTIVITIES / ACHIEVEMENTS ──────────────── */
export const activities = [
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
      "Placed in Top 3 across all 4 hackathons: 1st Runner-Up (Liver Fibrosis), 2nd Runner-Up (GSMaP Bias Correction, Cognitive Profiling, Financial Analysis).",
      "Gained hands-on experience applying advanced ML and data analysis techniques across domains including healthcare, climate science, cognitive science, and finance.",
    ],
  },

  {
    name: "I-Squared Hackathon – 2nd Runner-Up",
    date: "February 2025",
    details: [
      "Achieved 1st place on the final leaderboard for model performance in a motorcycle rider type classification task based on CCTV image inputs on Kaggle, with a score of 0.99707.",
      "Applied various techniques such as Data augmentation, K-fold cross-validation, ensemble methods, and model selection to enhance model generalization and performance.",
      "Explored multiple CNN architectures, including ResNet18, ResNet50, EfficientNets, and Vision Transformer, selecting EfficientNetB1 for its performance on smaller datasets and greater efficiency compared to others.",
    ],
  },
  {
    name: "depa × AWS depa Growth Lab – GenAI Hackathon",
    date: "October 2024",
    details: [
      "Proposed an AI-powered Virtual Personal Shopper (VPS) using generative AI, resulting in personalized product recommendations across multiple channels.",
      "Improved user experience by designing automated promotion management and custom AI personalities.",
    ],
  },
  {
    name: "ChaiyoGCP Season 4",
    date: "May – June 2024",
    details: [
      "Achieved Tier 1 rewards by completing Google Cloud Platform (GCP) Season 4, gaining proficiency in GCP tools for AI/ML applications.",
      "Built expertise in Google Cloud AI/ML, applying sentiment analysis, speech and image processing, BigQuery-ML, TensorFlow, and Vertex AI for production-ready generative models and machine learning systems.",
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
