const baseUrl = import.meta.env.BASE_URL;

export const profile = {
  name: 'Annarhysa Albert',
  title: 'AI Engineering Student & Software Developer',
  tagline: 'Building scalable systems at the intersection of AI, cloud, and full-stack development.',
  location: 'Passau, Germany',
  phone: '+49 160 92144145',
  email: 'annarhysa13@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/annarhysa-albert-92550918b/',
    github: 'https://github.com/Annarhysa',
    portfolio: 'https://annarhysas-portfolio.github.io',
  },
  about:
    'Pursuing an MSc in Artificial Intelligence Engineering at Universität Passau, Germany. Software Development Engineer with experience across AWS, Azure, and full-stack development — specializing in scalable backend workflows, ETL pipelines, and AI/ML solutions from fine-tuning LLMs to production-grade data systems.',
  stats: [
    { value: '4', label: 'Companies' },
    { value: '6', label: 'Projects' },
    { value: '9.62', label: 'CGPA' },
    { value: '3', label: 'Languages Spoken' },
  ],
};

export const experience = [
  {
    company: 'Codewalla',
    location: 'Pune (On-site)',
    roles: [
      {
        title: 'Software Development Engineer II',
        shortTitle: 'SDE II',
        period: 'Jan 2026 – Apr 2026',
        categories: ['Full-Stack Engineering', 'ETL Pipelines', 'Serverless AWS'],
        highlights: [
          'Built scalable backend workflows by integrating WordPress with serverless AWS functions and UI/UX updates. Streamlined the shisha.com data extraction and management pipeline for consistency and reliability.',
          'Innovated an ImageKit wrapper for shisha.com (AIR Global) to efficiently cache user-generated images during ETL processes.',
        ],
        skills: ['Next.js', 'AWS Lambda', 'AWS', 'Python', 'WordPress', 'ETL'],
      },
      {
        title: 'Software Development Engineer I',
        shortTitle: 'SDE I',
        period: 'Jul 2025 – Jan 2026',
        categories: ['Azure ETL', 'Next.js Full-Stack', 'Data Pipelines'],
        highlights: [
          'Designed and developed a sustainable Azure-based ETL pipeline for shisha.com with Python.',
          'Built full-stack features in Next.js, contributing to end-to-end development across frontend and backend systems.',
        ],
        skills: ['Azure', 'Python', 'ETL', 'Next.js'],
      },
    ],
  },
  {
    company: 'Nokia',
    location: 'Bangalore (On-site)',
    roles: [
      {
        title: 'SWE Trainee',
        shortTitle: 'SWE Trainee',
        period: 'Sep 2024 – Jun 2025',
        categories: ['Network Testing', 'Automation', 'QA & Log Monitoring'],
        highlights: [
          'SLNBI-MantaRay NM testing and performance checks using Robots, NAPET, Python, Shell scripting, and Jenkins.',
          'Integrated Graylog for log monitoring and resolved SONARQube violations for QA purposes.',
        ],
        skills: ['Python', 'Shell', 'Jenkins', 'Graylog', 'SonarQube', 'NAPET'],
      },
    ],
  },
  {
    company: 'HyperVerge',
    location: 'Chennai (On-site)',
    roles: [
      {
        title: "Nexus Spring '24 ML Trainee",
        shortTitle: "Nexus Spring '24 ML Trainee",
        period: 'Feb 2024 – Jun 2024',
        categories: ['LLM Fine-Tuning', 'PEFT', 'Python Problem Solving'],
        highlights: [
          'Worked on planning and designing a pipeline for fine-tuning the Llama 2-7B model, specialising in Python problem solving using PEFT methods.',
        ],
        skills: ['Llama 2-7B', 'PEFT', 'Llama', 'Python', 'Problem Solving'],
      },
    ],
  },
  {
    company: 'Bornbhukkad',
    location: 'Remote',
    roles: [
      {
        title: 'Machine Learning Engineer',
        shortTitle: 'Machine Learning Engineer',
        period: 'Sep 2023 – Apr 2024',
        categories: ['Transformers', 'NLP', 'Food Data Analysis'],
        highlights: [
          'Implemented food engineering principles to analyse scraped restaurant reviews using transformer-based models.',
        ],
        skills: ['Transformers', 'NLP', 'Python', 'Web scraping'],
      },
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science: Artificial Intelligence Engineering',
    school: 'Universität Passau, Passau, Germany',
    cgpa: null,
    achievements: [],
    courses: [
      'DL for Natural Language', 'Network Science', 'Digitisation with AI',
      'DL in Finance', 'Reproducibility Engg.',
    ],
  },
  {
    degree: 'Bachelor of Technology: Artificial Intelligence',
    school: 'SRM Institute of Science and Technology, Kattankulathur, India',
    cgpa: '9.62/10',
    achievements: [
      'Won Merit-Based Scholarship (AY: 2022-23, 2023-24 and 2024-25).',
    ],
    courses: [
      'OOPs', 'DSA', 'DL Techniques', 'ML', 'Computer Networks',
      'GenAI and LLMs', 'Node.js and React.js',
    ],
  },
];

export const skills = {
  programming: [
    'Python', 'Java', 'C/C++', 'GoLang', 'TypeScript', 'Shell',
    'MATLAB', 'XML', 'JSON', 'Excel',
  ],
  aiMl: [
    'Machine Learning', 'Deep Learning', 'SQL', 'NoSQL',
    'Data Processing', 'Intelligent Automation',
  ],
  toolsDevOps: [
    'Git/GitHub/Gerrit', 'Azure', 'AWS', 'Docker', 'Jenkins', 'JIRA',
    'Next.js', 'React.js', 'Node.js', 'Vue.js', 'Spring',
  ],
  soft: [
    'Collaborative Leadership', 'Strategic Organization',
    'Efficient Scheduling', 'Analytical Insight',
  ],
  languages: ['English', 'German', 'Hindi'],
};

export const projects = [
  {
    name: 'Protego',
    description:
      'A crime-awareness dashboard with contextually tuned engines for victim support recommendations along with crime rate analysis.',
    stack: ['Python', 'NLP', 'Fine-tuning', 'Time-series', 'LLMs', 'Transformers'],
    link: 'https://github.com/Annarhysa',
    image: `${baseUrl}images/project-1.png`,
  },
  {
    name: 'MoodMate',
    description:
      'A buddy to talk and guide you. Uses prompt tuning to understand your feelings and get you the right help.',
    stack: ['Python', 'LLMs', 'NLP'],
    link: 'https://github.com/Annarhysa',
    image: `${baseUrl}images/project-2.jpg`,
  },
  {
    name: 'Stock Market Advisor',
    description:
      'Machine learning application for stock trend prediction and investment insights.',
    stack: ['Python', 'TensorFlow', 'Data Science'],
    link: 'https://github.com/Annarhysa/Stock-Market-Advisor',
    image: `${baseUrl}images/project-5.jpeg`,
  },
  {
    name: 'CareerWise',
    description: 'Built to assist secondary-level students with career choices.',
    stack: ['Dart', 'Python', 'ML'],
    link: 'https://github.com/Annarhysa/CareerWise',
    image: `${baseUrl}images/project-4.jpg`,
  },
  {
    name: 'Rare Word Summarizing',
    description: 'Identifying only rare words in a text to create a summary.',
    stack: ['NLTK', 'TF-IDF', 'NLP'],
    link: 'https://github.com/Annarhysa/Rare-Word-Handling-NLP',
    image: `${baseUrl}images/project-6.jpg`,
  },
  {
    name: 'Fine-tuning LLMs',
    description: 'For Python problem-solving by fine-tuning Llama 2-7B model.',
    stack: ['LLMs', 'PEFT', 'NLTK'],
    link: 'https://github.com/Annarhysa',
    image: `${baseUrl}images/project-3.png`,
  },
];

export const accomplishments = [
  "Microsoft Code; Without Barriers '24 Winner",
  "Qualified for the third round of Smart India Hackathon (SIH) '23",
  'Published: Crime Awareness Dashboard with Contextual AI Tuning Engine — Protego',
  'Published: Mental Health Support Chatbot',
];

export const activities = [
  'Supporting AYCD: Ubuntu Mondo in international student engagement, social media management, event coordination, and website migration initiatives.',
  'Served as a helping hand to Don Bosco, SHP, Pune youth through posters, Informatica, and fundraising events.',
  'Mentored a tech-driven community — GitHub Community SRM.',
  'Volunteered as an ML researcher at Maiti Labs to build sustainable models.',
  "Open-source contributor in Social Winter of Code (SWOC) '24 and Social Summer of Code (SSOC) '24.",
  'Supported underprivileged education efforts as a Crowdfunding Intern at Muskurahat Foundation.',
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];
