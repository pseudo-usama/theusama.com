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
  keyProjects: {
    name: string;
    description: string;
  }[];
  responsibilities: string[];
  skills: string[];
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
  header: {
    name: "Usama Iftikhar Butt",
    title: "Machine Learning Engineer",
    bio: "I am a Machine Learning professional with expertise in Generative Modeling, specializing in Natural Language and Computer Vision. I specialize in fine-tuning existing machine learning tools, including GPT-3, BERT, Stable Diffusion, transformers and YOLO.",
    socialLinks: [
      {
        icon: Globe,
        url: "https://theusama.com",
        label: "Website"
      },
      {
        icon: Github,
        url: "https://github.com/pseudo-usama",
        label: "GitHub",
        target: "_blank"
      },
      {
        icon: Linkedin,
        url: "https://linkedin.com/in/the-usama",
        label: "LinkedIn",
        target: "_blank"
      },
      {
        icon: Mail,
        url: "mailto:hello@theusama.com",
        label: "Email"
      },
      // {
      //   icon: FileText,
      //   url: "/usama-cv.pdf",
      //   label: "Resume"
      // }
    ]
  },

  projectsConfig: {
    featuredCount: 4
  },

  generalExperience: {
    summary: "I am a Senior Machine Learning Engineer with expertise in building advanced ML systems, including chatbots, Retrieval-Augmented Generation (RAG) models, and computer vision applications. I specialize in MLOps, system architecture, and deploying scalable solutions using AWS, Docker, and CI/CD pipelines. Additionally, I have strong experience in full-stack web development, using React.js and Node.js to create dynamic, user-centric applications.",
    highlights: [
      "Developed ML solutions like chatbots and RAG systems, enhancing user interaction and data retrieval accuracy.",
      "Expertise in leveraging Large Language Models for automation and improving data precision.",
      "Built cutting-edge computer vision systems for object detection, facial recognition, and virtual try-ons.",
      "Deployed ML models at scale with AWS, Docker, and CI/CD pipelines for efficient production workflows.",
      "Created dynamic applications using React.js and Node.js, with a focus on security and performance.",
      "Delivered impactful solutions for clients like SAP and Toyota, improving metrics like MRR and Hit Rate."
    ],
    yearsOfExperience: 3,
    currentCompany: "AI Dev Lab"
  },

  experience: [
    {
      "company": "AI Dev Lab",
      "role": "Senior Machine Learning Engineer",
      "period": "Nov 2023 - Present · 1 yr 2 mos",
      "description": "Leading the development of advanced chatbot solutions and machine learning systems, focusing on automating user interactions and improving information retrieval accuracy using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) systems. Responsible for overseeing MLOps, system design, architecture, and project management from inception to deployment, utilizing AWS and containerization technologies.",
      "achievements": [
        "Increased the Mean Reciprocal Rank (MRR) by over 30% and the Hit Rate by 50% in a Retrieval-Augmented Generation (RAG) system, significantly enhancing information retrieval accuracy.",
        "Improved client satisfaction by enhancing the precision of search functionalities.",
        "Successfully deployed open-source LLMs like Llama 2 using vLLM on AWS EC2, scaling the system to support hundreds of concurrent users while ensuring low latency and high throughput.",
        "Spearheaded the design and migration of a microservices architecture for RAG systems, ensuring scalability and reliability in the client's AWS environment."
      ],
      "keyProjects": [
        {
          "name": "Chatbot Solutions for SAP and Toyota",
          "description": "Led the development of advanced chatbot solutions for SAP and Toyota, automating and improving user interactions through LLMs, delivering customized AI-powered interfaces."
        },
        {
          "name": "Retrieval-Augmented Generation (RAG) System",
          "description": "Led the design and optimization of a RAG system to enhance information retrieval accuracy, increasing MRR by over 30% and Hit Rate by 50%."
        }
      ],
      "responsibilities": [
        "Led the development of advanced chatbot solutions for major clients, focusing on automation and improving user interactions with LLMs.",
        "Managed MLOps processes, improving efficiency and productivity within the machine learning team.",
        "Oversaw the design, architecture, and optimization of ML systems and products, implementing best practices and structured workflows.",
        "Managed the full lifecycle of ML projects, from planning and development to deployment and monitoring, utilizing AWS.",
        "Designed and implemented a microservices architecture for RAG systems on AWS, ensuring scalability and reliability.",
        "Deployed open-source LLMs and scaled them for hundreds of concurrent users while maintaining low latency and high throughput.",
        "Led the deployment of ML projects by containerizing with Docker, establishing CI/CD pipelines, automating infrastructure setup with Python and AWS CDK, and deploying on AWS."
      ],
      "skills": [
        "Machine Learning",
        "Natural Language Processing (NLP)",
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "MLOps",
        "AWS",
        "AWS EC2",
        "Docker",
        "CI/CD Pipelines",
        "GitHub Actions",
        "NGINX",
        "Python",
        "AWS CDK",
        "Microservices Architecture",
        "Infrastructure Automation"
      ]
    },
    {
      "company": "Vacon.ai",
      "role": "Machine Learning Engineer",
      "period": "Jul 2022 - Oct 2023 · 1 yr 4 mos",
      "description": "As a Machine Learning Engineer at Vacon.ai, I developed and deployed cutting-edge solutions in computer vision and NLP, using models like Stable Diffusion, SAM, YOLO, and AWS Rekognition. I worked on projects in virtual renovation, fashion retail, object detection, and document retrieval, enhancing user experiences, streamlining processes, and improving security. My focus was on integrating these models into production environments for scalability and real-world impact.",
      "achievements": [
        "Successfully developed and deployed multiple machine learning models in production environments, delivering tangible real-world results for clients.",
        "Enhanced customer engagement and satisfaction by creating a virtual try-on system that allowed users to see clothing items on themselves, contributing to improved conversion rates in retail.",
        "Streamlined the recruitment process through a machine learning-driven system for extracting relevant data from resumes, enabling faster candidate identification and decision-making.",
        "Developed a robust and reliable facial recognition system that improved security and access control with high accuracy, utilizing AWS Rekognition.",
        "Pioneered a zero-shot object detection system that identified objects without prior training, enabling efficient and scalable object recognition for various use cases.",
        "Led the development of a virtual renovation tool that allowed users to visualize house renovations accurately and creatively, enhancing design decision-making for architects and homeowners."
      ],
      "keyProjects": [
        {
          "name": "Virtual Renovation Project",
          "description": "Developed a virtual renovation system for visualizing house renovations using Stable Diffusion for realistic image generation, SAM for precise segmentation, and ControlNet for detailed control over the visual output. This tool provided architects, interior designers, and homeowners with an innovative way to accurately and creatively visualize various design options in a virtual space."
        },
        {
          "name": "Virtual Try-On System",
          "description": "Created a virtual try-on system for fashion and retail, powered by LORA for Stable Diffusion. This system allowed customers to see how different clothing items looked on them in an immersive, interactive manner. It was designed to enhance user engagement and satisfaction, contributing to improved shopping experiences and conversion rates for retail clients."
        },
        {
          "name": "Object Detection Systems",
          "description": "Developed a zero-shot object detection system using Grounding DINO and CLIP, enabling the identification of objects without prior training. Additionally, I implemented an object detection pipeline using YOLO, ensuring accurate feature localization and efficient real-time performance for object recognition applications."
        },
        {
          "name": "Facial Recognition System",
          "description": "Built a facial recognition system using AWS Rekognition, enhancing security and access control. This solution ensured reliable identification and authentication, with high accuracy for security applications in both private and public sectors."
        },
        {
          "name": "Document Retrieval System",
          "description": "Engineered a document retrieval system using the Haystack model, which facilitated the efficient retrieval of relevant documents from vast corpora in response to user queries. This solution significantly improved information accessibility and streamlined workflows for users in large-scale enterprise environments."
        },
        {
          "name": "Recruitment Streamlining",
          "description": "Developed a machine learning-based system to extract key information from resumes, such as education, job experience, and skills. This system helped recruiters identify top candidates more efficiently, streamlining the recruitment process and improving hiring outcomes for organizations."
        }
      ],
      "responsibilities": [
        "Design and implement machine learning models for computer vision and NLP projects.",
        "Conduct experiments and optimize machine learning algorithms to improve system performance.",
        "Integrate machine learning models into production environments, ensuring scalability and robustness.",
        "Collaborate with cross-functional teams (designers, architects, product managers) to understand project requirements and deliver innovative solutions.",
        "Test and validate machine learning solutions for efficiency, accuracy, and real-world applicability.",
        "Stay up-to-date with the latest trends, research, and technologies in machine learning and AI.",
        "Ensure the security and reliability of deployed systems, such as facial recognition and object detection.",
        "Provide mentorship and guidance to junior engineers in machine learning best practices."
      ],
      "skills": [
        "Stable Diffusion",
        "Midjourney",
        "LLM",
        "Virtual Renovation",
        "Virtual Try-On",
        "SAM",
        "ControlNet",
        "Grounding DINO",
        "CLIP",
        "YOLO",
        "AWS Rekognition",
        "Haystack"
      ]
    },
    {
      "company": "Cipher Coders",
      "role": "Full Stack Web Developer",
      "period": "Jun 2021 - Jun 2022 · 1 yr 1 mo",
      "description": "As a Full Stack Web Developer at Cipher Coders, I specialized in building dynamic, scalable applications using React.js for the front-end and Node.js with Express.js for the back-end. I developed end-to-end solutions, from creating intuitive UIs to building robust server-side logic, ensuring seamless user experiences and efficient data handling.",
      "achievements": [
        "Successfully launched a fully functional blog platform, increasing user engagement by 30% within the first month of release.",
        "Integrated Stripe payment gateway in the e-commerce platform, enabling secure transactions.",
      ],
      "keyProjects": [
        {
          "name": "Blog Platform with Admin Panel",
          "description": "I developed a full-featured blog platform where users could read, comment, and share posts. The admin panel allowed authenticated users to create, manage, and delete content. Using React.js for the front-end and Node.js/Express.js for the back-end, I integrated MongoDB for content storage and implemented features like authentication, input validation, and secure data handling."
        },
        {
          "name": "E-commerce Store with Product Management",
          "description": "I worked on an e-commerce platform for managing products, processing orders, and providing a seamless shopping experience. The front-end, built with React.js, allowed users to browse and purchase products, while the back-end in Node.js/Express.js handled user authentication, product inventory, and order processing. I integrated Stripe for secure payment handling. My responsibilities included managing ongoing development, adding new features, and optimizing the platform’s performance and user experience."
        }
      ],
      "responsibilities": [
        "Designed and developed scalable full-stack applications.",
        "Collaborated with cross-functional teams to deliver high-quality solutions.",
        "Maintained and enhanced existing applications, adding new features and functionalities.",
        "Ensured security, performance, and scalability in all aspects of the applications."
      ],
      "skills": [
        "Full Stack Development",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Authentication",
        "Secure Data Handling",
        "Stripe Payment Integration",
        "Web Development"
      ]
    }    
  ],

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
  ],

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
  ]
};

export default data;