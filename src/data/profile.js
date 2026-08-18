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
    googleScholar: 'https://scholar.google.com/citations?user=vn4gLBoAAAAJ&hl=en',
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
        period: 'Jan 2026 – Apr 2026',
        highlights: [
          'Innovated an ImageKit wrapper for shisha.com (AIR Global) to efficiently cache user-generated images during ETL processes.',
          'Built scalable backend workflows by integrating WordPress with serverless AWS functions and UI/UX updates.',
          'Streamlined the shisha.com data extraction and management pipeline for consistency and reliability.',
        ],
      },
      {
        title: 'Software Development Engineer I',
        period: 'Jul 2025 – Jan 2026',
        highlights: [
          'Designed and developed a sustainable Azure-based ETL pipeline for shisha.com with Python.',
          'Built full-stack features in Next.js, contributing to end-to-end development across frontend and backend systems.',
        ],
      },
    ],
  },
  {
    company: 'Nokia',
    location: 'Bangalore (On-site)',
    roles: [
      {
        title: 'SWE Trainee',
        period: 'Sep 2024 – Jun 2025',
        highlights: [
          'SLNBI-MantaRay NM testing and performance checks using Robots, NAPET, Python, Shell scripting, and Jenkins.',
          'Integrated Graylog for log monitoring and resolved SONARQube violations for QA purposes.',
        ],
      },
    ],
  },
  {
    company: 'HyperVerge',
    location: 'Chennai (On-site)',
    roles: [
      {
        title: "Nexus Spring '24 ML Trainee",
        period: 'Feb 2024 – Jun 2024',
        highlights: [
          'Worked on planning and designing a pipeline for fine-tuning the Llama 2-7B model, specialising in Python problem solving using PEFT methods.',
        ],
      },
    ],
  },
  {
    company: 'Bornbhukkad',
    location: 'Remote',
    roles: [
      {
        title: 'Machine Learning Engineer',
        period: 'Sep 2023 – Apr 2024',
        highlights: [
          'Implemented food engineering principles to analyse scraped restaurant reviews using transformer-based models.',
        ],
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
    link: 'https://github.com/Annarhysa/protego',
    image: `${baseUrl}images/1.png`,
  },
  {
    name: 'MoodMate',
    description:
      'A buddy to talk and guide you. Uses prompt tuning to understand your feelings and get you the right help.',
    stack: ['Python', 'LLMs', 'NLP'],
    link: 'https://github.com/Annarhysa/MoodMate',
    image: `${baseUrl}images/2.png`,
  },
  {
    name: 'Stock Market Advisor',
    description:
      'Machine learning application for stock trend prediction and investment insights.',
    stack: ['Python', 'TensorFlow', 'Data Science'],
    link: 'https://github.com/Annarhysa/Stock-Market-Advisor',
    image: `${baseUrl}images/3.png`,
  },
  {
    name: 'CareerWise',
    description: 'Built to assist secondary-level students with career choices.',
    stack: ['Dart', 'Python', 'ML'],
    link: 'https://github.com/Annarhysa/CareerWise',
    image: `${baseUrl}images/4.png`,
  },
  {
    name: 'Rare Word Summarizing',
    description: 'Identifying only rare words in a text to create a summary.',
    stack: ['NLTK', 'TF-IDF', 'NLP'],
    link: 'https://github.com/Annarhysa/Rare-Word-Handling-NLP',
    image: `${baseUrl}images/5.png`,
  },
  {
    name: 'Fine-tuning LLMs',
    description: 'For Python problem-solving by fine-tuning Llama 2-7B model.',
    stack: ['LLMs', 'PEFT', 'NLTK'],
    link: 'https://github.com/Annarhysa/Fine-tuning-LLMs',
    image: `${baseUrl}images/6.png`,
  },
];

export const accomplishments = [
  {
    text: "Microsoft Code; Without Barriers '24 Winner",
    image: `${baseUrl}images/CWB.jpg`,
    link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_hackathonjourney-codewithoutbarriers-mentalhealthtech-ugcPost-7237328187347632128-cFP_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
  },
  {
    text: "Qualified for the third round of Smart India Hackathon (SIH) '23",
    image: `${baseUrl}images/SIH.jpg`,
    link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_linkedin-machinelearning-hackathon-ugcPost-7113371109508464640-SDBb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
  },
  {
    text: 'Published: Crime Awareness Dashboard with Contextual AI Tuning Engine — Protego',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003773801-2/crime-awareness-dashboard-contextual-ai-tuning-engine%E2%80%94protego-annarhysa-albert-prithvi-raja-shah-raguvaran',
  },
  {
    text: 'Published: Mental Health Support Chatbot',
    link: 'https://ieeexplore.ieee.org/abstract/document/10780017',
  },
];

export const featuredAccomplishment = {
  text: 'Speaker at AI FORGE: Build, Innovate, Evolve, hosted by GDSC SRM Ghaziabad',
  image: `${baseUrl}images/AI.jpg`,
  link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_aiforge-ai-ml-ugcPost-7334458134737969152-AOFJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
};

export const activities = [
  'Supporting AYCD: Ubuntu Mondo in international student engagement, social media management, event coordination, and website migration initiatives.',
  'Served as a helping hand to Don Bosco, SHP, Pune youth through posters, Informatica, and fundraising events.',
  'Mentored a tech-driven community — GitHub Community SRM.',
  'Volunteered as an ML researcher at Maiti Labs to build sustainable models.',
  "Open-source contributor in Social Winter of Code (SWOC) '24 and Social Summer of Code (SSOC) '24.",
  'Supported underprivileged education efforts as a Crowdfunding Intern at Muskurahat Foundation.',
];

export const hobbies = [
  {
    name: 'Chess',
    description: 'Strategic thinking and problem-solving through the game of kings',
    icon: '♟️'
  },
  {
    name: 'Sports',
    description: 'Active lifestyle with various sports and physical activities',
    icon: '🏃'
  },
  {
    name: 'Music',
    description: 'Curated playlist for focus and inspiration',
    icon: '🎵',
    link: 'https://open.spotify.com/playlist/6VhDTq51xfhG9MBBopKdHt?si=O103JKmzSPSTUUfwXviaCg&utm_source=whatsapp&pi=l0Iol3m9QauyA'
  }
];

export const blogs = [
  {
    title: 'Building Trust in Location Data: Designing a Scoring System for Reliable Venue Listings',
    abstract: 'How a trust-scoring system can filter out unreliable venue listings and improve location data quality.',
    url: 'https://medium.com/@annarhysa13/building-trust-in-location-data-designing-a-scoring-system-for-reliable-venue-listings-29aa8aad87eb',
    date: '2024',
    category: 'Data Engineering'
  },
  {
    title: 'Revolutionizing Finance with Artificial Intelligence: Trends and Opportunities in 2024',
    abstract: 'A look at how AI-driven trends are reshaping financial services and where the biggest opportunities lie.',
    url: 'https://medium.com/@annarhysa13/revolutionizing-finance-with-artificial-intelligence-trends-and-opportunities-in-2024-5e76fc75de98',
    date: '2024',
    category: 'AI & Finance'
  },
  {
    title: 'Crypto Analysis',
    abstract: 'A data-driven look at cryptocurrency market trends and what they signal for investors.',
    url: 'https://medium.com/@annarhysa13/crypto-analysis-87a273ac676f',
    date: '2024',
    category: 'Cryptocurrency'
  },
  {
    title: 'Comparative Analysis of Rare Word Handling Strategies in Text Summarization Models',
    abstract: 'Comparing strategies for handling rare vocabulary to improve text summarization quality.',
    url: 'https://medium.com/@annarhysa13/comparative-analysis-of-rare-word-handling-strategies-in-text-summarization-models-f7b23354c7cb',
    date: '2024',
    category: 'NLP Research'
  }
];

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Expertise' },
  { href: '#projects', label: 'Projects' },
  { href: '#accomplishments', label: 'Recognition' },
  { href: '#activities', label: 'Community' },
  { href: '#hobbies', label: 'Personal' },
  { href: '#blogs', label: 'Writing' },
  { href: '#contact', label: 'Get in Touch' },
];
