// All site text lives here. Edit freely; components read from this file only.

export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "in-progress" | "completed";
  github?: string;
  live?: string; // dashboard / live demo link
  image?: string; // path under /public, e.g. "/projects/retail.jpg"
};

export const profile = {
  name: "Akhil Bhardwaz",
  title: "Business Intelligence Analyst | Data Analyst",
  tagline: "I turn messy retail and banking data into dashboards people actually use.",
  location: "London, UK",
  note: "No visa sponsorship required",
  photo: "/profile-480.jpg",
  photoAlt: "Portrait of Akhil Bhardwaz",
};

export const links = {
  email: "bhardwazakhil86@gmail.com",
  linkedin: "https://www.linkedin.com/in/bhardwazakhil",
  github: "https://github.com/Bhardwazakhil",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  heading: "Analytics grounded in how the business really runs",
  paragraphs: [
    "I'm a Business Intelligence Analyst with an MSc in Business Analytics and 4+ years across UK retail and retail banking. I build the SQL, Power BI and Python reporting that store, regional and service teams rely on, covering KPIs, forecasting, ETL and data cleaning.",
    "What sets my work apart is that I've worked the processes the data describes: shop floors, stock files, promotions and customer service desks. That means my numbers hold up to scrutiny and my recommendations are ones teams can act on.",
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "BI & Visualisation", items: ["Power BI", "DAX", "Tableau", "Google Looker", "Advanced Excel", "Power Query"] },
  {
    group: "Programming & Data",
    items: ["SQL (MySQL)", "CTEs", "Window functions", "Python", "Pandas", "NumPy", "Scikit-learn", "ETL", "Data Modelling"],
  },
  { group: "Cloud", items: ["Azure Data Factory", "Databricks", "Microsoft Fabric"] },
  {
    group: "Business",
    items: ["Requirements Gathering", "KPI Reporting", "Forecasting", "Root-Cause Analysis", "Stakeholder Communication"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Jira", "Salesforce", "HubSpot"] },
];

export const education = [
  { degree: "MSc Business Analytics", school: "University of the West London, UK", period: "2022 – 2023" },
  { degree: "B.Tech Computer Science Engineering", school: "DIT University, India", period: "2014 – 2018" },
];

export const experience = [
  {
    role: "Customer Associate Analyst (Retail Operations & Reporting)",
    company: "Tesco PLC",
    location: "London",
    period: "Apr 2023 – Present",
    points: [
      "Built and maintained Power BI, SQL and Python reporting on sales, availability, customer service and compliance for store and regional teams.",
      "Analysed on-shelf availability, stock-file accuracy and date-code data to reduce waste and shrinkage.",
      "Validated pricing, promotions and planogram compliance across ambient, fresh and seasonal ranges during peak trading.",
      "Identified recurring customer service issues and recommended fixes to improve satisfaction.",
    ],
  },
  {
    role: "Customer Service Manager",
    company: "Axis Bank Ltd",
    location: "India",
    period: "Sep 2019 – Apr 2021",
    points: [
      "Automated service and pipeline reporting with Excel and SQL, improving forecasting efficiency by 30%.",
      "Segmented customers with CRM analytics for cross-sell and upsell, contributing to a 15% rise in quarterly revenue.",
      "Led digital banking adoption, raising self-service usage by 20%.",
      "Strengthened AML/KYC compliance through structured reporting and automation.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Retail Stock Availability & Waste Analytics",
    description:
      "37,000-row synthetic dataset across 12 stores. MySQL KPI views for availability, waste, stock accuracy and lost sales feed a 3-page Power BI dashboard that ranks stores and categories by risk.",
    tech: ["SQL", "Power BI", "DAX", "Python"],
    status: "in-progress",
  },
  {
    title: "Customer Segmentation & Cross-sell Analytics",
    description:
      "RFM segmentation of 3,000 banking customers and 117,000 transactions, with a cross-sell target list filtered for consent and KYC, and a Power BI dashboard on segments, digital adoption and retention.",
    tech: ["SQL", "Power BI", "DAX", "Python"],
    status: "in-progress",
  },
];

export const contact = {
  heading: "Let's talk data",
  text: "Open to Business Intelligence and Data Analyst roles. The quickest way to reach me is email.",
};
