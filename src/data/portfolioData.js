export const portfolioData = {
  personal: {
    fullName: "Chipurupalli Poojitha Ramya",
    shortName: "Poojitha Ramya",
    role: "ML Engineer & Developer",
    subtitle: "AI/ML Engineer | Full Stack Developer",
    email: "chpujitaramya@gmail.com",
    phone: "+91 7013103439",
    rawPhone: "7013103439",
    location: "Nathavaram, Andhra Pradesh, India",
    linkedin: "https://linkedin.com/in/pujita-ramya-ch",
    linkedinDisplay: "linkedin.com/in/pujita-ramya-ch",
    github: "https://github.com/Poojitha-Ramya",
    githubDisplay: "github.com/Poojitha-Ramya",
    leetcode: "https://leetcode.com/u/ChipurupalliPujithaRamya/",
    photo: "/images/poojitha_blend.png",
    photoOriginal: "/images/poojitha_photo.jpg",
    resumePdf: "/Poojitha_Ramya_Resume.pdf",
    stats: [
      { value: "9.50", label: "CGPA" },
      { value: "4+", label: "Featured Projects" },
      { value: "150+", label: "LeetCode Solved" }
    ],
    summary:
      "B.Tech Information Technology (Machine Learning Specialization) student at GMR Institute of Technology with strong foundations in Python, Java, SQL, Machine Learning, and Deep Learning. Eager to contribute technical and analytical skills in a software engineering role.",
    aboutStory:
      "I am Poojitha Ramya, a B.Tech Information Technology student with Machine Learning specialization at GMR Institute of Technology, Rajam. I have a CGPA of 9.50/10.0 and strong foundations in Python, Java, SQL, Machine Learning, and Deep Learning. I am passionate about building AI-powered solutions and contributing technical skills in software engineering."
  },

  services: [
    {
      id: "ml",
      title: "Machine Learning",
      icon: "Activity",
      description:
        "Building intelligent models using supervised & unsupervised learning, CNN, RNN for real-world applications.",
      skills: ["Supervised Learning", "Unsupervised Learning", "CNN", "RNN", "Python", "Model Optimization"]
    },
    {
      id: "web",
      title: "Web Development",
      icon: "Code2",
      description:
        "Developing responsive web applications using React.js with robust component-based architecture.",
      skills: ["React.js", "Component Architecture", "Local Storage", "JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "ai-auto",
      title: "AI & Automation",
      icon: "Cpu",
      description:
        "Creating AI-powered platforms with n8n workflow automations and Google Gemini AI integration.",
      skills: ["n8n Workflows", "Google Gemini AI", "LLM Prompting", "Supabase", "Railway", "Vercel"]
    }
  ],

  projects: [
    {
      id: "mini-researcher",
      title: "Mini Researcher",
      subtitle: "Autonomous Multi-Agent AI Research Assistant",
      year: "2025",
      category: "Agentic AI & RAG",
      featured: true,
      image: "/images/mini_researcher.jpg",
      tags: ["Agentic AI", "Multi-Agent System", "RAG", "Tavily", "Google Gemini", "ChromaDB", "React.js"],
      liveUrl: "https://main-project-khaki-rho.vercel.app/",
      description:
        "Built an agentic AI research assistant using a multi-agent architecture and Retrieval-Augmented Generation (RAG). Implemented web and document-based retrieval using Tavily, Gemini embeddings, and ChromaDB for semantic vector search. The system uses Manager, Research, Document, Curator, Writer, and Reviewer agents to plan research, retrieve and evaluate evidence, generate grounded reports, and iteratively review results.",
      longDescription: [
        "Built an agentic AI research assistant using a multi-agent architecture and Retrieval-Augmented Generation (RAG).",
        "Implemented web and document-based retrieval using Tavily, Gemini embeddings, and ChromaDB for semantic vector search.",
        "Orchestrated 6 specialized agents—Manager, Research, Document, Curator, Writer, and Reviewer—to plan research, retrieve and evaluate evidence, generate grounded reports, and iteratively review results.",
        "Designed real-time swarm execution pipeline visualization and deployed the production app on Vercel."
      ],
      metrics: [
        { label: "Swarm Agents", value: "6 Specialized" },
        { label: "Vector Search", value: "ChromaDB + Gemini" },
        { label: "Live Retrieval", value: "Tavily Web Search" }
      ]
    },
    {
      id: "jobflow-engine",
      title: "JobFlow Engine",
      subtitle: "AI-Powered Career Intelligence Platform",
      year: "2025",
      category: "AI/ML & Full Stack",
      featured: true,
      image: "/images/jobflow_engine.jpg",
      tags: ["React.js", "n8n", "Google Gemini AI", "Supabase", "Railway", "Vercel"],
      liveUrl: "https://ai-job-matcher-eight.vercel.app",
      description:
        "Developed an AI-powered career platform using Google Gemini AI and n8n for resume analysis, ATS scoring, and skill gap detection.",
      longDescription: [
        "Developed an AI-powered career platform using Google Gemini AI and n8n for resume analysis, ATS scoring, and skill gap detection.",
        "Built an AI-driven job matching engine to rank job listings based on candidate skills and compatibility.",
        "Deployed the application on Vercel and Railway with Supabase for scalable hosting and real-time data management."
      ],
      metrics: [
        { label: "ATS Analysis Accuracy", value: "89%+" },
        { label: "Workflow Engine", value: "n8n + Gemini" },
        { label: "Status", value: "Live on Vercel" }
      ]
    },
    {
      id: "driver-detection",
      title: "Distracted Driver Detection System",
      subtitle: "Computer Vision & Deep Learning Classifier",
      year: "2025",
      category: "Computer Vision",
      featured: true,
      image: "/images/driver_detection.jpg",
      tags: ["Python", "VGG16", "CNN", "Transfer Learning", "TensorFlow"],
      liveUrl: "https://driver-distraction-frontend.vercel.app",
      description:
        "Developed a real-time distracted driver detection system using VGG16, CNN, and Transfer Learning. Achieved 98% classification accuracy.",
      longDescription: [
        "Developed a real-time distracted driver detection system using VGG16, CNN, and Transfer Learning. Achieved 98% classification accuracy through feature extraction and model optimization.",
        "Applied TensorFlow image augmentation and hyperparameter tuning to improve model generalization."
      ],
      metrics: [
        { label: "Classification Accuracy", value: "98%" },
        { label: "Core Model", value: "Pre-trained VGG16" },
        { label: "Deployment", value: "Live on Vercel" }
      ]
    },
    {
      id: "campus-management",
      title: "Campus Management System",
      subtitle: "Full-Stack Single Page Architecture",
      year: "2025",
      category: "Full Stack",
      featured: true,
      image: "/images/campus_system.jpg",
      tags: ["React.js", "Local Storage", "SPA Architecture", "Component UI"],
      description:
        "Developed a React.js-based Campus Management System for student, course, and faculty management with local storage persistence.",
      longDescription: [
        "Developed a React.js-based Campus Management System for student, course, and faculty management.",
        "Implemented component-based architecture with local storage for efficient data persistence.",
        "Delivered during internship at BRVS Tech LLC and earned React JS Web Application Development Internship Certification."
      ],
      metrics: [
        { label: "Delivery Sprint", value: "4 Weeks" },
        { label: "Architecture", value: "SPA + LocalStorage" },
        { label: "Outcome", value: "Internship Certified" }
      ]
    }
  ],

  experience: [
    {
      id: "brvs-tech",
      role: "React JS Developer Intern",
      company: "BRVS Tech LLC",
      location: "Remote",
      period: "July 2025 | 1 Month",
      type: "Internship",
      description: [
        "Developed a React.js-based Campus Management System for student, course, and faculty management.",
        "Implemented component-based architecture with local storage for efficient data persistence.",
        "Earned the React JS Web Application Development Internship Certification."
      ],
      technologies: ["React.js", "Component Architecture", "Local Storage", "JavaScript"]
    }
  ],

  certifications: [
    {
      id: "gen-ai-springboard",
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      date: "May 2026",
      badge: "Generative AI",
      icon: "Sparkles"
    },
    {
      id: "ai-primer-springboard",
      title: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      date: "April 2026",
      badge: "Artificial Intelligence",
      icon: "Cpu"
    },
    {
      id: "react-internship-cert",
      title: "React JS Web Application Development",
      issuer: "BRVS Tech LLC",
      date: "2025",
      badge: "Frontend Engineering",
      icon: "Code2"
    },
    {
      id: "deep-learning-lnt",
      title: "Deep Learning Essentials",
      issuer: "L&T EduTech",
      date: "2024",
      badge: "Deep Learning",
      icon: "Activity"
    },
    {
      id: "sql-hackerrank",
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "2024",
      badge: "Database & Querying",
      icon: "Database"
    },
    {
      id: "java-gfg",
      title: "Java Skill UP",
      issuer: "GeeksforGeeks",
      date: "2024",
      badge: "Core Java",
      icon: "FileCode"
    }
  ],

  education: [
    {
      id: "btech",
      degree: "B.Tech in Information Technology (ML Specialization)",
      institution: "GMR Institute of Technology, Rajam, Andhra Pradesh",
      period: "2023 – Present",
      score: "CGPA: 9.50 / 10.0",
      status: "Final Year Student",
      highlights: [
        "Machine Learning Specialization with CGPA 9.50/10.0",
        "150+ LeetCode basic problems solved across DSA",
        "30+ day public DSA learning streak on LinkedIn"
      ]
    },
    {
      id: "intermediate",
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College, Visakhapatnam",
      period: "2021 – 2023",
      score: "92.2%",
      highlights: ["Mathematics, Physics, Chemistry stream with distinction"]
    },
    {
      id: "ssc",
      degree: "SSC (Secondary School Certificate)",
      institution: "Sun Shine English Medium School, Nathavaram",
      period: "2021",
      score: "99.3%",
      highlights: ["Top percentile academic performance with 99.3% aggregate"]
    }
  ]
};
