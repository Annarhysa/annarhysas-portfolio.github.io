const baseUrl = import.meta.env.BASE_URL;

export const profile = {
  name: 'Annarhysa Albert',
  title: 'Studentin der KI-Ingenieurwissenschaften & Softwareentwicklerin',
  tagline: 'Entwicklung skalierbarer Systeme an der Schnittstelle von KI, Cloud und Full-Stack-Entwicklung.',
  location: 'Passau, Deutschland',
  phone: '+49 160 92144145',
  email: 'annarhysa13@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/annarhysa-albert-92550918b/',
    github: 'https://github.com/Annarhysa',
    portfolio: 'https://annarhysas-portfolio.github.io',
    googleScholar: 'https://scholar.google.com/citations?user=vn4gLBoAAAAJ&hl=en',
  },
  about:
    'Studiert MSc Artificial Intelligence Engineering an der Universität Passau. Software Development Engineer mit Erfahrung in AWS, Azure und Full-Stack-Entwicklung — spezialisiert auf skalierbare Backend-Workflows, ETL-Pipelines und KI/ML-Lösungen, vom Fine-Tuning von LLMs bis zu produktionsreifen Datensystemen.',
  stats: [
    { value: '4', label: 'Unternehmen' },
    { value: '6', label: 'Projekte' },
    { value: '9.62', label: 'CGPA' },
    { value: '3', label: 'Gesprochene Sprachen' },
  ],
};

export const experience = [
  {
    company: 'Codewalla',
    location: 'Pune (Vor Ort)',
    roles: [
      {
        title: 'Software Development Engineer II',
        period: 'Jan 2026 – Apr 2026',
        highlights: [
          'Entwicklung eines ImageKit-Wrappers für shisha.com (AIR Global) zum effizienten Zwischenspeichern nutzergenerierter Bilder während ETL-Prozessen.',
          'Aufbau skalierbarer Backend-Workflows durch Integration von WordPress mit serverlosen AWS-Funktionen sowie UI/UX-Updates.',
          'Optimierung der Datenextraktions- und -verwaltungspipeline von shisha.com für mehr Konsistenz und Zuverlässigkeit.',
        ],
      },
      {
        title: 'Software Development Engineer I',
        period: 'Jul 2025 – Jan 2026',
        highlights: [
          'Konzeption und Entwicklung einer nachhaltigen, Azure-basierten ETL-Pipeline für shisha.com mit Python.',
          'Entwicklung von Full-Stack-Funktionen in Next.js mit Beiträgen zur End-to-End-Entwicklung von Frontend und Backend.',
        ],
      },
    ],
  },
  {
    company: 'Nokia',
    location: 'Bangalore (Vor Ort)',
    roles: [
      {
        title: 'SWE Trainee',
        period: 'Sep 2024 – Jun 2025',
        highlights: [
          'SLNBI-MantaRay-NM-Tests und Performance-Checks mit Robot Framework, NAPET, Python und Shell-Scripting sowie Jenkins.',
          'Integration von Graylog für das Log-Monitoring und Behebung von SONARQube-Verstößen im Rahmen der Qualitätssicherung.',
        ],
      },
    ],
  },
  {
    company: 'HyperVerge',
    location: 'Chennai (Vor Ort)',
    roles: [
      {
        title: "Nexus Spring '24 ML Trainee",
        period: 'Feb 2024 – Jun 2024',
        highlights: [
          'Planung und Konzeption einer Pipeline für das Fine-Tuning des Llama-2-7B-Modells mit Spezialisierung auf Python-Problemlösung mittels PEFT-Methoden.',
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
          'Anwendung lebensmitteltechnischer Prinzipien zur Analyse gescrapter Restaurantbewertungen mittels transformerbasierter Modelle.',
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: 'Master of Science: Artificial Intelligence Engineering',
    school: 'Universität Passau, Passau, Deutschland',
    cgpa: null,
    achievements: [],
    courses: [
      'DL für natürliche Sprache', 'Netzwerkwissenschaft', 'Digitalisierung mit KI',
      'DL im Finanzwesen', 'Reproducibility Engineering',
    ],
  },
  {
    degree: 'Bachelor of Technology: Artificial Intelligence',
    school: 'SRM Institute of Science and Technology, Kattankulathur, Indien',
    cgpa: '9.62/10',
    achievements: [
      'Leistungsstipendium erhalten (Studienjahre 2022–23, 2023–24 und 2024–25).',
    ],
    courses: [
      'OOP', 'Algorithmen & Datenstrukturen', 'DL-Techniken', 'ML', 'Computernetzwerke',
      'GenAI und LLMs', 'Node.js und React.js',
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
    'Datenverarbeitung', 'Intelligente Automatisierung',
  ],
  toolsDevOps: [
    'Git/GitHub/Gerrit', 'Azure', 'AWS', 'Docker', 'Jenkins', 'JIRA',
    'Next.js', 'React.js', 'Node.js', 'Vue.js', 'Spring',
  ],
  soft: [
    'Kooperative Führung', 'Strategische Organisation',
    'Effizientes Zeitmanagement', 'Analytisches Denken',
  ],
  languages: ['Englisch', 'Deutsch', 'Hindi'],
};

export const projects = [
  {
    name: 'Protego',
    description:
      'Ein Dashboard zur Kriminalitätswahrnehmung mit kontextuell abgestimmten Engines für Opferhilfe-Empfehlungen sowie Kriminalitätsanalysen.',
    stack: ['Python', 'NLP', 'Fine-tuning', 'Time-series', 'LLMs', 'Transformers'],
    link: 'https://github.com/Annarhysa/protego',
    image: `${baseUrl}images/1.png`,
  },
  {
    name: 'MoodMate',
    description:
      'Ein Begleiter zum Reden und Anleiten. Nutzt Prompt-Tuning, um Gefühle zu verstehen und passende Hilfe zu vermitteln.',
    stack: ['Python', 'LLMs', 'NLP'],
    link: 'https://github.com/Annarhysa/MoodMate',
    image: `${baseUrl}images/2.png`,
  },
  {
    name: 'Stock Market Advisor',
    description:
      'Machine-Learning-Anwendung zur Vorhersage von Börsentrends und für Investment-Einblicke.',
    stack: ['Python', 'TensorFlow', 'Data Science'],
    link: 'https://github.com/Annarhysa/Stock-Market-Advisor',
    image: `${baseUrl}images/3.png`,
  },
  {
    name: 'CareerWise',
    description: 'Entwickelt, um Schülerinnen und Schülern bei der Berufswahl zu unterstützen.',
    stack: ['Dart', 'Python', 'ML'],
    link: 'https://github.com/Annarhysa/CareerWise',
    image: `${baseUrl}images/4.png`,
  },
  {
    name: 'Rare Word Summarizing',
    description: 'Erkennung seltener Wörter in einem Text zur Erstellung einer Zusammenfassung.',
    stack: ['NLTK', 'TF-IDF', 'NLP'],
    link: 'https://github.com/Annarhysa/Rare-Word-Handling-NLP',
    image: `${baseUrl}images/5.png`,
  },
  {
    name: 'Fine-tuning LLMs',
    description: 'Für Python-Problemlösungen durch Fine-Tuning des Llama-2-7B-Modells.',
    stack: ['LLMs', 'PEFT', 'NLTK'],
    link: 'https://github.com/Annarhysa/Fine-tuning-LLMs',
    image: `${baseUrl}images/6.png`,
  },
];

export const accomplishments = [
  {
    text: "Microsoft Code; Without Barriers '24 Gewinnerin",
    image: `${baseUrl}images/CWB.jpg`,
    link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_hackathonjourney-codewithoutbarriers-mentalhealthtech-ugcPost-7237328187347632128-cFP_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
  },
  {
    text: "Dritte Runde des Smart India Hackathon (SIH) '23 erreicht",
    image: `${baseUrl}images/SIH.jpg`,
    link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_linkedin-machinelearning-hackathon-ugcPost-7113371109508464640-SDBb/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
  },
  {
    text: 'Veröffentlicht: Crime Awareness Dashboard with Contextual AI Tuning Engine — Protego',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003773801-2/crime-awareness-dashboard-contextual-ai-tuning-engine%E2%80%94protego-annarhysa-albert-prithvi-raja-shah-raguvaran',
  },
  {
    text: 'Veröffentlicht: Mental Health Support Chatbot',
    link: 'https://ieeexplore.ieee.org/abstract/document/10780017',
  },
];

export const featuredAccomplishment = {
  text: 'Rednerin bei AI FORGE: Build, Innovate, Evolve, veranstaltet von GDSC SRM Ghaziabad',
  image: `${baseUrl}images/AI.jpg`,
  link: 'https://www.linkedin.com/posts/annarhysa-albert-92550918b_aiforge-ai-ml-ugcPost-7334458134737969152-AOFJ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACy_be0B6U4BtqDk32QOd6GdXjBohazqesk',
};

export const activities = [
  'Unterstützung von AYCD: Ubuntu Mondo im internationalen Studierendenaustausch, Social-Media-Management, Eventkoordination und Website-Migration.',
  'Ehrenamtliche Unterstützung für Don Bosco, SHP, Pune-Jugend durch Plakate, Informatica und Spendenaktionen.',
  'Mentorin für eine technikorientierte Community — GitHub Community SRM.',
  'Ehrenamtliche ML-Forscherin bei Maiti Labs zur Entwicklung nachhaltiger Modelle.',
  "Open-Source-Beitragende im Social Winter of Code (SWOC) '24 und Social Summer of Code (SSOC) '24.",
  'Unterstützung von Bildungsprojekten für benachteiligte Kinder als Crowdfunding-Praktikantin bei der Muskurahat Foundation.',
];

export const hobbies = [
  {
    name: 'Schach',
    description: 'Strategisches Denken und Problemlösung durch das Spiel der Könige',
    icon: '♟️'
  },
  {
    name: 'Sport',
    description: 'Aktiver Lebensstil mit verschiedenen Sport- und Fitnessaktivitäten',
    icon: '🏃'
  },
  {
    name: 'Musik',
    description: 'Kuratierte Playlist für Fokus und Inspiration',
    icon: '🎵',
    link: 'https://open.spotify.com/playlist/6VhDTq51xfhG9MBBopKdHt?si=O103JKmzSPSTUUfwXviaCg&utm_source=whatsapp&pi=l0Iol3m9QauyA'
  }
];

export const blogs = [
  {
    title: 'Building Trust in Location Data: Designing a Scoring System for Reliable Venue Listings',
    abstract: 'Wie ein Trust-Scoring-System unzuverlässige Standort-Einträge herausfiltern und die Datenqualität verbessern kann.',
    url: 'https://medium.com/@annarhysa13/building-trust-in-location-data-designing-a-scoring-system-for-reliable-venue-listings-29aa8aad87eb',
    date: '2024',
    category: 'Data Engineering'
  },
  {
    title: 'Revolutionizing Finance with Artificial Intelligence: Trends and Opportunities in 2024',
    abstract: 'Ein Blick darauf, wie KI-Trends die Finanzbranche verändern und wo die größten Chancen liegen.',
    url: 'https://medium.com/@annarhysa13/revolutionizing-finance-with-artificial-intelligence-trends-and-opportunities-in-2024-5e76fc75de98',
    date: '2024',
    category: 'KI & Finanzen'
  },
  {
    title: 'Crypto Analysis',
    abstract: 'Ein datengetriebener Blick auf Kryptomarkt-Trends und was sie für Anleger bedeuten.',
    url: 'https://medium.com/@annarhysa13/crypto-analysis-87a273ac676f',
    date: '2024',
    category: 'Kryptowährungen'
  },
  {
    title: 'Comparative Analysis of Rare Word Handling Strategies in Text Summarization Models',
    abstract: 'Vergleich von Strategien im Umgang mit seltenem Vokabular zur Verbesserung der Textzusammenfassung.',
    url: 'https://medium.com/@annarhysa13/comparative-analysis-of-rare-word-handling-strategies-in-text-summarization-models-f7b23354c7cb',
    date: '2024',
    category: 'NLP-Forschung'
  }
];

export const navLinks = [
  { href: '#home', label: 'Start' },
  { href: '#about', label: 'Über mich' },
  { href: '#experience', label: 'Erfahrung' },
  { href: '#education', label: 'Ausbildung' },
  { href: '#skills', label: 'Kompetenzen' },
  { href: '#projects', label: 'Projekte' },
  { href: '#accomplishments', label: 'Auszeichnungen' },
  { href: '#activities', label: 'Engagement' },
  { href: '#hobbies', label: 'Persönliches' },
  { href: '#blogs', label: 'Beiträge' },
  { href: '#contact', label: 'Kontakt' },
];
