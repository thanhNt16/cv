import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Thanh Nguyen Trung",
  initials: "",
  location: "Hanoi, Vietnam",
  locationLink: "https://maps.app.goo.gl/AwbrtXLRuymfdE2n6",
  personalWebsiteUrl: 'https://thanhnt16.github.io/',
  about:
    "Data engineer with highly experience in designing, implementing, optimizing large-scale data pipelines, data stores, ETL/ELT solutions and ML/AI solution",
  summary:
    "An experienced and motivated data and software engineer who can design and implement effective process improvement solutions that align with business goals. Applies a rational and systematic problem-solving process using various methods and tools. Demonstrates strong leadership and communication abilities, able to perform well under pressure and collaborate with clients, internal stakeholders, and data team members (DA/BA/DS) to deliver business outcomes.",
  avatarUrl: "https://avatars.githubusercontent.com/u/50815789?s=400&u=7a0f5715c97c218d44f48b0e5515a2ae662e44e3&v=4",
  contact: {
    email: "thanhnt6198@gmail.com",
    tel: "+84362970011",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/thanhNt16",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thanh-nguyen-9a238a16a/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hanoi University of Science and Technology",
      degree: "Engineer in Information technology",
      start: "2016",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Opentechiz",
      link: "https://www.opentechiz.com/",
      badges: ["Onsite"],
      title: "Senior Data Engineer",
      logo: ParabolLogo,
      start: "6/2021",
      end: "Now",
      description:
        "Implemented data analytic solution and AI solutions, generating insights, apply data mining to help business growth. Technologies: Python, Golang, SQL, Airflow, Pandas/Polars, Spark, Docker, Kubernetes, RabbitMQ, Tensorflow, FastAPI, MongoDB, MySQL, ElasticSearch, Redis,  OpenAI, GCP, AWS",
    },
    {
      company: "Viettel Big Data Analytics Center",
      link: "https://www.linkedin.com/company/dac-viettel",
      badges: ["Onsite"],
      title: "Junior AI Engineer",
      logo: ClevertechLogo,
      start: "4/2020",
      end: "5/2021",
      description:
        "Collect, clean, and preprocess data, build and deploy ML/DL models, colloborate with team members and maintain data pipelines. Technologies: Python, SQL, Tensorflow, Pytorch, Bash, Scikit-learn",
    },
    {
      company: "Cellock",
      link: "https://www.cellock.com/",
      badges: ["Remote"],
      title: "Fresher -> Fullstack Developer",
      logo: JojoMobileLogo,
      start: "6/2018",
      end: "4/2020",
      description:
        "Built websites and applications about Health tech, Retail, Telecom, ... for modern companies. Technologies: React / React Native, Node.js, RESTAPI / GraphQL, MongoDB, MSSQL, PostgreSQL, Docker",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Golang",
    "Airflow",
    "Pandas / Polars",
    "Spark",
    "Docker",
    "Kubernetes",
    "RabbitMQ",
    "Kafka",
    "Tensorflow",
    "Pytorch",
    "FastAPI",
    "OpenAI",
    "GCP",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "MSSQL",
    "MySQL",
    "Elasticsearch",
    "Redis",
    "RESTAPI / GraphQL",
    "GRPC",
    "React / React Native",
    "Node.js",
    "Bash",
  ],
  projects: [
    {
      title: "Data Platform",
      techStack: [
        "Airflow",
        "Pandas / Polars",
        "Spark",
        "RESTAPI",
        "Docker",
        "Kubernetes",
      ],
      description: "A data platform to collect and transfer data from various sources to data warehouse, apply transformation and generate insights to grow business and support decision making",
    },
    {
      title: "Photo Moderation",
      techStack: ["Golang", "JavaScript", "Tensorflow", "AWS", "OpenAI" ,"Docker", "Kubernetes"],
      description:
        "Photo moderation system to detect and remove inappropriate content for Muslim dating site: Mektoube",
      link: {
        label: "Mektoube",
        href: "https://mektoube.fr/",
      },
    },
    {
      title: "Liveness Detection",
      techStack: ["Python", "FastAPI", "Tensorflow", "Pytorch", "Docker", "Kubernetes"],
      description:
        "Liveness detection system provide a soluton to prevent fraud using face recognition system. It helps to verify the identity of the user in dating site, serving for automation moderation process",
    },
    {
      title: "Data collector",
      techStack: ["Python", "RESTAPI", "Bash", "Puppeteer", "Youtube DL"],
      description:
        "Collect and preprocess data from public sources to build dataset for training ML/DL models in Viettel Big Data Analytics Center",
    },
    {
      title: "Motus",
      techStack: ["React", "Node.js", "RESTAPI", "MSSQL", "Docker"],
      description:
        "Enable brands to connect with people in a unique array of platforms and gain invaluable insights via patent-pending Consumer Travel Graph and human-driven data analytics.",
      logo: BarepapersLogo,
      link: {
        label: "Motus",
        href: "https://motus.ai/",
      },
    },
    {
      title: "Supmed",
      techStack: ["React", "Node.js", "MongoDB", "Docker"],
      description: "Internal project to provide formulation, analytic about SUPMED project: <<Reducing the Consumption and Disposal of Single-use Plastics in the Tourism Industry in Cyprus, Greece and Malta>>",
      link: {
        label: "Supmed",
        href: "https://www.supmed.eu/en/",
      },
    },
  ],
} as const;
