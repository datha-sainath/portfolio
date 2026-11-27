// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Datha Sainath',
  fullName: 'Podalakuru Datha Sainath',
  headline: 'Building intelligent systems with code and curiosity.',
  roles: ['AI/ML Engineer', 'Backend Developer', 'Problem Solver'],
  location: 'Nellore, Andhra Pradesh, India',
  email: 'dathasainath20@gmail.com',
  phone: '+91 8340809394',
  linkedin: 'https://www.linkedin.com/in/datha-sainath',
  github: 'https://github.com/datha-sainath',
  about:
    'Computer Science and Engineering student at Vellore Institute of Technology, building AI-powered products and robust backends. I enjoy turning messy data and ideas into clean, useful software, from LLM pipelines to REST APIs.',
};

export const stats = [
  { value: '250+', label: 'LeetCode problems solved' },
  { value: '1470', label: 'LeetCode contest rating' },
  { value: '8.84', label: 'CGPA (out of 10)' },
  { value: '6696', label: 'AP EAMCET state rank' },
];

export const education = [
  {
    school: 'Vellore Institute of Technology, Andhra Pradesh',
    degree: 'B.Tech, Computer Science and Engineering',
    period: '2022 - 2026',
    detail: 'CGPA 8.84 / 10.0',
    coursework: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems'],
  },
  {
    school: 'Narayana IIT-JEE Campus, Nellore',
    degree: 'Class XII, PCM',
    period: '2020 - 2022',
    detail: '95.8%',
  },
  {
    school: 'Sri Sainadh High School, Nellore',
    degree: 'Class X',
    period: '2019 - 2020',
    detail: '98%',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Auth'] },
  { title: 'Databases', items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { title: 'AI / ML', items: ['NumPy', 'Pandas', 'LangChain', 'LangGraph', 'LLMs', 'RAG', 'Agentic AI', 'ChromaDB', 'MCP', 'CrewAI'] },
  { title: 'Cloud & Tools', items: ['AWS', 'Vercel', 'Render', 'Streamlit', 'Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA'] },
];

export const projects = [
  {
    title: 'Newslyst',
    subtitle: 'AI-powered news aggregator',
    description:
      'Collects 100+ AI articles and videos daily from YouTube and RSS feeds, then uses Gemini LLMs to summarize them into concise, personalized daily digests.',
    highlights: [
      'Gemini LLMs summarize raw content into short digests.',
      'LLM-based personalized ranking selects the top 10-15 stories per user.',
      'A 5-stage pipeline runs from scraping to email delivery on PostgreSQL and Render Cron Jobs.',
    ],
    tags: ['Gemini LLM', 'Python', 'PostgreSQL', 'Render'],
    link: null,
  },
  {
    title: 'ChatRAG',
    subtitle: 'Multi-agent AI travel assistant',
    description:
      'A multi-agent travel planner built on LangGraph, with a Supervisor agent that coordinates planning and tool-based workflows.',
    highlights: [
      'Custom weather MCP server gives agents real-time travel context.',
      'Input guardrails validate requests; human-in-the-loop approval reviews generated plans.',
      'FastAPI backend with async MCP integration and REST endpoints for planning, approval and threads.',
    ],
    tags: ['LangGraph', 'MCP', 'FastAPI', 'Groq', 'Python'],
    link: 'https://github.com/datha-sainath',
  },
];

export const achievements = [
  { title: '250+ LeetCode problems', detail: '400+ problems solved across LeetCode, GeeksforGeeks, Codeforces and CodeChef.' },
  { title: '1470 contest rating', detail: 'Consistent participation in LeetCode contests and algorithmic problem solving.' },
  { title: 'AP EAMCET state rank 6696', detail: 'Ranked in the state-level engineering entrance examination.' },
];

export const certifications = [
  { title: 'OCI 2025 Certified Generative AI Professional', issuer: 'Oracle', link: null },
  { title: 'AWS Academy Graduate - Cloud Architecting', issuer: 'AWS Academy', link: null },
  { title: 'AWS Academy Graduate - Cloud Foundations', issuer: 'AWS Academy', link: null },
];
