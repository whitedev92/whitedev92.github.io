// Project details configuration for whitedev92
const portfolioData = {
  profile: {
    name: "whitedev92",
    tagline: "Software Engineer & Builder — crafting fintech solutions, risk engines, and product platforms.",
    bio: "Passionate developer focused on building robust full-stack applications, accounting software, risk analytics, and developer tools.",
    githubUsername: "whitedev92",
    email: "",
    socials: {
      github: "https://github.com/whitedev92",
      twitter: "",
      linkedin: ""
    }
  },
  skills: [
    { 
      category: "Languages & Frameworks", 
      items: ["JavaScript (ES6+)", "TypeScript", "Python", "React", "Node.js", "HTML5 & CSS3"] 
    },
    { 
      category: "Fintech & Analytics", 
      items: ["Risk Modeling", "Accounting Systems", "Financial Ledger", "Cashflow Analysis", "Data Visualization"] 
    },
    { 
      category: "Engineering & Workflow", 
      items: ["Git & GitHub Actions", "RESTful APIs", "Full-Stack Development", "UI/UX Engineering", "Cloud Deployment"] 
    }
  ],
  projects: [
    {
      id: "money-at-risk",
      title: "Money at Risk",
      category: "Financial Analytics & Risk",
      tagline: "Capital risk exposure modeling, portfolio volatility analysis, and drawdown assessment.",
      description: "An analytical platform designed to simulate drawdowns, measure exposure volatility, and quantify risk across portfolio positions and capital allocations.",
      highlights: [
        "Capital exposure modeling and scenario simulations",
        "Risk metrics visualization and loss thresholds",
        "Configurable analytical parameters and insights"
      ],
      tags: ["Fintech", "Risk Analytics", "Finance", "Data Modeling"],
      isPrivate: true,
      badge: "Risk Engine",
      accent: "purple"
    },
    {
      id: "hisabset",
      title: "HisabSet",
      category: "Fintech & Bookkeeping",
      tagline: "Streamlined financial accounting, balance reconciliation, and expense tracking.",
      description: "A financial management application designed for seamless transaction recording, account reconciliation, and clear visual ledger breakdowns.",
      highlights: [
        "Double-entry bookkeeping and daily ledger tracking",
        "Automated summary calculations & audit reports",
        "Clean, intuitive expense and income categories"
      ],
      tags: ["Fintech", "Accounting", "Bookkeeping", "Full-Stack"],
      isPrivate: true,
      badge: "Fintech",
      accent: "emerald"
    },
    {
      id: "on-it",
      title: "On-It",
      category: "Productivity & Execution",
      tagline: "Task orchestration and high-velocity workflow execution platform.",
      description: "A productivity and action management platform built to streamline task queues, enhance execution speed, and keep teams or individuals organized and focused.",
      highlights: [
        "Dynamic workflow organization & priority tracking",
        "Clean, low-friction user experience",
        "Real-time state and status tracking"
      ],
      tags: ["Productivity", "Workflow", "Task Management", "Web App"],
      isPrivate: true,
      badge: "Productivity",
      accent: "cyan"
    },
    {
      id: "poji",
      title: "Poji",
      category: "Product & Platform",
      tagline: "Interactive digital product engineered for intuitive user engagement.",
      description: "A modern web product engineered to provide seamless interaction, fast execution, and a responsive interface tailored for modern user workflows.",
      highlights: [
        "Interactive real-time user experience",
        "Modern glassmorphism architecture",
        "Optimized client-side performance and state management"
      ],
      tags: ["JavaScript", "UI/UX", "Modern Web", "Platform"],
      isPrivate: true,
      badge: "Featured Product",
      accent: "cyan"
    }
  ]
};
