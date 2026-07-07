export const siteConfig = {
  name: "Siddharth Singh",
  title: "Full Stack Engineer",
  description:
    "Software engineer with full-stack & backend experience architecting secure, role-based enterprise systems using React, Java, Spring Boot, and Node.js.",
  url: "https://siddharthsingh.dev",
  email: "singhsiddharth9238@gmail.com",
  location: "Cuttack, Odisha, India",
  links: {
    github: "https://github.com/siddharth9238", // Replace with your actual GitHub handle
    linkedin: "https://www.linkedin.com/in/siddharth-singh-3241b8241",
    linktree: "https://linktr.ee/siddharthsingh9238", // Replace or remove if unused
  },
};

export const heroData = {
  greeting: "Hi, I'm",
  name: "Siddharth Singh",
  tagline: "I architect secure, role-based enterprise systems.",
  subtitle: "Open to opportunities",
  description:
    "Full Stack Engineer specializing in React, Java, Node.js, and Spring Boot. I build robust REST APIs, automate enterprise workflows, and translate complex backend logic into seamless front-end experiences.",
  cta: {
    primary: { label: "Get in Touch", href: "#contact" },
    secondary: {
      label: "Download Resume",
      href: "/Siddharth_Singh_Resume_FullStack.pdf",
    },
  },
};

export const aboutData = {
  summary: [
    "I build scalable, full-stack web applications using Java, Spring Boot, React, Next.js, TypeScript, and Node.js, developing secure RESTful APIs and responsive user interfaces with clean, maintainable architecture.",

    "I specialize in backend engineering by designing enterprise-grade systems with JWT authentication, Spring Security, Role-Based Access Control (RBAC), SQL/NoSQL databases, API integration, caching, and cloud-ready deployment using modern DevOps practices.",

    "I am a Master of Computer Applications (MCA) graduate from Adamas University with hands-on experience in full-stack development, microservices, AI-powered applications, and DevOps tools, while continuously strengthening my problem-solving skills through Data Structures & Algorithms and real-world projects.",
  ],
  stats: [
    { label: "LeetCode Solved", value: "150+" },
    { label: "Full-Stack Projects", value: "6+" },
    { label: "Cloud Certifications", value: "2" },
    { label: "MCA CGPA", value: "8.1/10" },
  ],
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export const experienceData: Experience[] = [
  {
    company: "Nvisagecomp solutions LLP",
    role: "Trainee",
    period: "Nov 2025 - Apr 2026",
    location: "Bengaluru, Karnataka, India · On-site",
    type: "Internship",
    highlights: [
      "Shipped full-stack features for an enterprise client, utilizing AJAX to asynchronously connect a React frontend with a Java/Spring Boot backend.",
      "Formulated and deployed endpoints managing core business logic, including database-backed CRUD operations and structured error handling.",
      "Ensured enterprise-grade code quality by identifying and rectifying server-side bugs and vulnerabilities flagged by SonarQube."
    ],
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "AJAX",
      "SonarQube"
    ],
  },
  {
    company: "YHills",
    role: "Full Stack Web Developer Intern",
    period: "Jul 2025 - Oct 2025",
    location: "Noida, Uttarpradesh, India · Hybrid",
    type: "Internship",
    highlights: [
      "Programmed scalable modules, integrating Web Services by constructing Java backends and consuming data asynchronously from a React frontend using AJAX[cite: 23, 24].",
      "Increased overall application rendering efficiency by 70%[cite: 23, 24].",
      "Diagnosed and resolved frontend-backend integration bottlenecks by standardizing error response formats and improving backend input validation, reducing API error rates by 80%[cite: 23, 24]."
    ],
    tech: [
      "Java",
      "React",
      "AJAX",
      "Web Services",
      "REST APIs"
    ],
  },
  {
    company: "SaiKet Systems",
    role: "Software & Full-stack Developer",
    period: "Jul 2025 - Aug 2025",
    location: "Pune, Maharashtra, India · Hybrid",
    type: "Internship",
    highlights: [
      "Developed full-stack web applications utilizing React.js and Node.js.",
      "Designed backend APIs and optimized database queries to enhance overall system performance and load times."
    ],
    tech: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Database Optimization"
    ],
  },
  {
    company: "YHills",
    role: "AI & Machine Learning Intern",
    period: "Aug 2023 - Nov 2023",
    location: "Noida, Uttarpradesh, India · Hybrid",
    type: "Internship",
    highlights: [
      "Built and deployed machine learning models for advanced predictive analysis.",
      "Achieved 85% model accuracy utilizing supervised learning techniques."
    ],
    tech: [
      "Machine Learning",
      "Artificial Intelligence",
      "Predictive Analysis",
      "Supervised Learning"
    ],
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "Java (Core & Advanced)",
      "JavaScript (ES6+)",
      "TypeScript",
      "Vite",
      "Golang",
      "SQL",
      "Python",
      "C/C++",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "NestJS",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap 5",
      "Flutter",
      "Responsive UI Development",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "Express.js",
      "JPA/Hibernate",
      "JDBC",
      "Servlets",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    title: "APIs & Architecture",
    skills: [
      "REST APIs",
      "JWT Authentication",
      "OAuth 2.0",
      "Role-Based Access Control (RBAC)",
      "MVC Architecture",
      "AJAX (Fetch/Axios)",
      "Enterprise Workflows",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Docker",
      "Grafana",
      "Prometheus",
      "Git",
      "GitHub",
      "Linux",
      "Maven",
      "CI/CD",
    ],
  },
  {
    title: "Testing & Code Quality",
    skills: [
      "Postman",
      "SonarQube",
      "ESLint",
      "Prettier",
      "Debugging",
      "Performance Optimization",
    ],
  },
  {
    title: "Concepts",
    skills: [
      "Data Structures & Algorithms (150+ LeetCode)",
      "OOP",
      "Object-Oriented JavaScript (OOJS)",
      "Multithreading",
      "SDLC",
      "Agile Methodologies",
    ],
  },
  {
    title: "Tools",
    skills: [
      "VS Code",
      "IntelliJ IDEA",
      "Visual Studio",
      "Babel",
      "Vite",
      "Yarn",
      "npm",
      "Vercel",
      "Render",
      "Git Bash",
      "Copilot",
      "Claude Code",
      "Replit",
    ],
  },
];

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export const achievementsData: Achievement[] = [
  {
    title: "LeetCode Data Structures & Algorithms",
    description: "150+ problems solved focusing on advanced Data Structures & Algorithms and optimal space-time complexities.",
    year: "Ongoing",
  },
  {
    title: "Academic Excellence (MCA)",
    description: "Maintaining a top-tier 8.1/10 CGPA in Master of Computer Applications at Adamas University.",
    year: "2024-2026",
  },
  {
    title: "Academic Excellence (BCA)",
    description: "Graduated with a strong 7.0/10 CGPA in Bachelor of Computer Applications from Utkal University.",
    year: "2021-2024",
  },
];

export const mentoringData = {
  title: "Technical Collaboration & Code Quality",
  description:
    "Championed enterprise-grade code quality standards by resolving over 60 server-side bugs and CI/CD vulnerabilities via SonarQube, ensuring robust and secure software delivery.",
  period: "2025 - 2026",
};

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Adamas University",
    cgpa: "8.1/10",
    location: "Kolkata, India",
    period: "2024 - 2026",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Utkal University",
    cgpa: "7.0/10",
    location: "Bhubaneswar, India",
    period: "2021 - 2024",
  }
];

export const certificationsData = [
  "SAP ABAP Backend Developer (Certified Professional)",
  "SAP Fiori App Developer (Certified Professional)",
  "SAP BTP Solution Architect (Certified Professional)",
  "Oracle Cloud Infrastructure (Certified Professional)",
  "Oracle APEX Developer (Certified Professional)",
  "Oracle Cloud DevOps Developer (Certified Professional)",
  "Oracle Cloud Certfied Developer (Certified Professional)"
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  context: string;
}

export const projectsData: Project[] = [
  {
    title: "Smart Door Lock IoT System Dashboard",
    description:
      "Engineered a responsive dashboard processing 60+ real-time device metrics per minute. Constructed an MVC Node.js backend, achieving a 75% reduction in hardware latency with ESP32-CAM and applying OOJS for biometric MFA.",
    tech: ["Node.js", "Express", "React", "JavaScript", "Arduino", "Tailwind CSS"],
    context: "IoT Full Stack & Flutter",
  },
  {
    title: "WebFix-CMS Website Builder",
    description:
      "Produced a web platform featuring a drag-and-drop visual builder and 65+ custom templates. Built a robust RESTful backend using Node.js and Express to incorporate secure JWT authentication for 80+ simultaneous user sessions.",
    tech: ["Node.js", "Express", "MySQL", "JavaScript", "Flutter"],
    context: "Full Stack & Flutter",
  },
  {
    title: "AccessIQ Role-Based Workflow",
    description:
      "Architected a multi-role backend with JWT authentication and RBAC, owning the infrastructure end-to-end and successfully automating 60+ workflow-driven approval chains while decreasing 401 error rates by 80%.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "REST APIs"],
    context: "Enterprise Backend",
  },
  {
    title: "Vendor Compliance & Risk System",
    description:
      "Structured a backend system to onboard vendors and enforce compliance workflows, dynamically evaluating over 70 risk score parameters. Executed role-based access controls with an automated audit log tracking system.",
    tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "RBAC"],
    context: "Enterprise Backend & Risk Management API",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];