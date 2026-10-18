export const profile = {
  name: "Dennis",
  title: "後端工程師 / 軟體工程師",
  education: [
    "國立成功大學資訊管理研究所 — 碩士生",
    "輔仁大學資訊管理學系 — 學士",
  ],
  summary:
    "具備 Spring Boot 後端開發與雲端部署經驗，曾參與產學合作專案，負責 API 開發、資料庫設計與 AI 功能整合。喜歡把複雜的系統拆解成清楚的服務，也樂於嘗試用 AI 技術解決實際問題。",
  githubUser: "dennislzy",
  email: "a0976278215@gmail.com",
};

export type SkillCategory = {
  id: string;
  name: string;
  icon: "backend" | "frontend" | "ai" | "database" | "devops";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "後端",
    icon: "backend",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Java"],
  },
  {
    id: "frontend",
    name: "前端",
    icon: "frontend",
    items: ["Next.js", "TypeScript", "MUI", "React"],
  },
  {
    id: "ai-data",
    name: "AI / 資料",
    icon: "ai",
    items: ["Python", "FastAPI", "LangChain", "OpenAI", "Whisper AI", "Data Analysis"],
  },
  {
    id: "database",
    name: "資料庫",
    icon: "database",
    items: ["MySQL"],
  },
  {
    id: "devops",
    name: "DevOps / 測試",
    icon: "devops",
    items: ["Docker", "Docker Compose", "Nginx", "AWS EC2", "GitHub Actions", "Selenium", "Postman"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    company: "eGroupAI",
    role: "Software Engineering Intern",
    period: "2024.03 – 2025.03",
    bullets: [
      "依據 BDD 開發規範,使用 Cucumber + Gherkin 語法搭配 Selenium WebDriver,撰寫公司內部系統的自動化測試案例",
      "撰寫 Postman 腳本進行 API 測試與驗證",
    ],
  },
];

export type ProjectItem = {
  name: string;
  subtitle: string;
  description: string;
  role: string[];
  tags: string[];
  highlight: string;
  // TODO: 換成實際的 GitHub repo 連結
  githubUrl: string;
};

export const projectItems: ProjectItem[] = [
  {
    name: "FinAid",
    subtitle: "社工智能個案管理系統",
    description:
      "輔仁大學資訊管理學系產學合作專題，協助財務社工更有效率地服務弱勢個案，整合語音轉文字與 AI 補助搜尋。",
    role: ["後端 API 開發（Spring Boot）", "AWS 部署", "資料庫設計", "AI 功能整合"],
    tags: ["Next.js", "Spring Boot", "FastAPI", "Whisper AI", "Docker", "AWS EC2"],
    highlight: "比較三種語音轉文字方案後選用 Whisper AI，準確度最高、成本最低（WER 8.6%）",
    githubUrl: "https://github.com/dennislzy/FinAid",
  },
  {
    name: "Smart CamPilot",
    subtitle: "智能營隊推薦與管理平台",
    description:
      "團隊採微服務架構打造營隊推薦管理平台（共 7 個獨立服務），整合 AI 推薦與數據分析功能。",
    role: [
      "後端核心邏輯開發（Spring Boot）",
      "Data Analysis 服務：使用 LangChain + FastAPI 建構 Text-to-SQL 查詢功能，將使用者的自然語言問題轉換成 SQL 查詢語句撈取資料，再將結果餵給 LLM 生成分析結果",
      "自行撰寫 Data Analysis 服務的 Dockerfile 與 docker-compose 設定",
    ],
    tags: ["Spring Boot", "Python", "FastAPI", "LangChain", "OpenAI", "SQL", "Docker"],
    highlight: "Text-to-SQL 流程：自然語言問題 → 產生 SQL 撈取資料 → LLM 生成分析結果",
    githubUrl: "https://github.com/CamPilottt/CamPilot",
  },
];
