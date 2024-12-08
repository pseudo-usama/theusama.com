import { Brain, Briefcase, GraduationCap, Globe, Github, Linkedin, Mail, FileText } from "lucide-react";

export interface SocialLink {
  icon: typeof Brain;
  url: string;
  label: string;
}

export interface HeaderData {
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  courses: string[];
  gpa?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  content: ProjectSection[];
}

export interface ProjectsConfig {
  featuredCount: number;
}

export interface GeneralExperience {
  summary: string;
  highlights: string[];
  yearsOfExperience: number;
  currentCompany: string;
}

const data = {
  projectsConfig: {
    featuredCount: 4
  } as ProjectsConfig,

  generalExperience: {
    summary: "Experienced Machine Learning Engineer with expertise in computer vision and natural language processing. Specialized in developing and deploying production-ready AI solutions.",
    highlights: [
      "Expertise in PyTorch and TensorFlow frameworks",
      "Strong background in computer vision and NLP",
      "Experience with deployment and scaling of ML models",
      "Proven track record of successful project delivery"
    ],
    yearsOfExperience: 2,
    currentCompany: "Axcelerate.ai"
  } as GeneralExperience,

  header: {
    name: "Usama Iftikhar Butt",
    title: "Machine Learning Engineer",
    bio: "I am a Machine Learning professional with expertise in Generative Modeling, specializing in Natural Language and Computer Vision. I specialize in fine-tuning existing machine learning tools, including GPT-3, BERT, Stable Diffusion, transformers and YOLO.",
    socialLinks: [
      {
        icon: Globe,
        url: "https://usama.bio",
        label: "Website"
      },
      {
        icon: Github,
        url: "https://github.com/pseudo-usama",
        label: "GitHub"
      },
      {
        icon: Linkedin,
        url: "https://linkedin.com/in/usama-butt",
        label: "LinkedIn"
      },
      {
        icon: Mail,
        url: "mailto:pseudo.usama@gmail.com",
        label: "Email"
      },
      {
        icon: FileText,
        url: "/usama-cv.pdf",
        label: "Resume"
      }
    ]
  } as HeaderData,

  experience: [
    {
      company: "Axcelerate.ai",
      role: "Machine Learning Engineer",
      period: "May 2023 - Present",
      description: "Responsible for implementing cutting-edge ML models and ensuring their seamless integration into production environments.",
      achievements: [
        "Virtual renovation project using Stable Diffusion, SAM and ControlNet",
        "Virtual try-ons using LORA for stable diffusion",
        "Zero-shot object detection using Grounding DINO and CLIP",
        "Object detection and feature localization using YOLO"
      ]
    },
    {
      company: "Vacon.ai",
      role: "Machine Learning Engineer",
      period: "July 2022 - May 2023",
      description: "Led ML engineering and frontend integration projects using React.js",
      achievements: [
        "Created a multi-model chatbot using RAG with support for website data, YouTube content and documents",
        "Developed document retrieval system using Haystack model"
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "MPhil Data Science",
      school: "PUCIT",
      period: "2021 - 2023",
      gpa: "4.00",
      courses: [
        "Machine Learning",
        "Natural Language Processing",
        "Cloud Computing",
        "Deep Learning",
        "Digital Image Processing"
      ]
    },
    {
      degree: "BS Computer Science",
      school: "University of Gujrat",
      period: "2017 - 2021",
      gpa: "3.20",
      courses: [
        "Artificial Intelligence",
        "Data Structures",
        "Web Systems & Technology",
        "Data Mining",
        "Database Systems",
        "Object Oriented Programming"
      ]
    }
  ] as EducationItem[],

  projects: [
    {
      slug: "license-plate-sr",
      title: "License Plate Super Resolution",
      description: "MPhil thesis project utilizing advanced techniques such as diffusion models to achieve super-resolution of blurry license plate images.",
      technologies: ["Python", "PyTorch", "Diffusion Models", "Computer Vision"],
      githubUrl: "https://github.com/pseudo-usama/license-plate-super-resolution",
      content: [
        {
          title: "Overview",
          content: "This project addresses the challenge of enhancing low-resolution license plate images using state-of-the-art diffusion models. The system is designed to improve the readability of blurry or low-quality license plate images captured by surveillance cameras.",
        },
        {
          title: "Technical Implementation",
          content: "The solution leverages advanced deep learning techniques:",
          bulletPoints: [
            "Implemented custom diffusion models for image super-resolution",
            "Developed specialized data preprocessing pipeline for license plate images",
            "Utilized PyTorch for model development and training",
            "Implemented custom loss functions for optimal image enhancement"
          ]
        },
        {
          title: "Results",
          content: "The system achieved significant improvements in image quality:",
          bulletPoints: [
            "4x resolution enhancement while maintaining text legibility",
            "Improved PSNR (Peak Signal-to-Noise Ratio) by 3.5dB compared to baseline",
            "Real-time processing capabilities for surveillance applications"
          ]
        }
      ]
    },
    {
      slug: "youtube-recommender",
      title: "YouTube Recommender System",
      description: "Built a video recommender system using YouTube datasets and cosine similarity for personalized recommendations.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      githubUrl: "https://github.com/pseudo-usama/youtube-recommender",
      content: [
        {
          title: "Overview",
          content: "A sophisticated recommendation system that analyzes user viewing patterns and video content to provide personalized video suggestions.",
        },
        {
          title: "Implementation Details",
          content: "The system uses various data science techniques:",
          bulletPoints: [
            "Content-based filtering using video metadata",
            "Collaborative filtering based on user interactions",
            "Cosine similarity for finding related content",
            "Efficient data processing using Pandas and NumPy"
          ]
        }
      ]
    },
    {
      slug: "plant-disease-detection",
      title: "Disease Identifier in Plants",
      description: "Developed a CNN-based machine learning model to accurately detect diseases in Potato plants.",
      technologies: ["Python", "TensorFlow", "CNN", "Image Classification"],
      githubUrl: "https://github.com/pseudo-usama/plant-disease-detection",
      content: [
        {
          title: "Overview",
          content: "An automated system for early detection of diseases in potato plants using computer vision and deep learning.",
        },
        {
          title: "Technical Details",
          content: "The project utilizes advanced CNN architectures:",
          bulletPoints: [
            "Custom CNN architecture for plant disease classification",
            "Transfer learning using pre-trained models",
            "Data augmentation for improved model generalization",
            "Real-time inference capabilities for mobile applications"
          ]
        }
      ]
    },
    {
      slug: "library-management",
      title: "Library Management System",
      description: "Full-stack library management system built using the MERN stack.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/pseudo-usama/library-management",
      content: [
        {
          title: "Overview",
          content: "A comprehensive library management system with features for book tracking, user management, and borrowing operations.",
        },
        {
          title: "Features",
          content: "The system includes various functionalities:",
          bulletPoints: [
            "User authentication and authorization",
            "Book catalog management",
            "Borrowing and return tracking",
            "Fine calculation system",
            "Search and filter capabilities"
          ]
        }
      ]
    }
  ] as Project[]
};

export default data;