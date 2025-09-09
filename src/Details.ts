// Enter all your detials in this file
// Logo images
// import logogradient from "./assets/logo.svg";
const logogradient = require("./assets/logo.svg");
const logo = require("./assets/3d guy.png");
// Profile Image
const profile = require("./assets/latestProfile.jpeg");
// Tech stack images
const html = require("./assets/techstack/html.png");
const css = require("./assets/techstack/css.png");
const sass = require("./assets/techstack/sass.png");
const js = require("./assets/techstack/js.png");
const react = require("./assets/techstack/react.png");
const redux = require("./assets/techstack/redux.png");
const tailwind = require("./assets/techstack/tailwind.png");
const bootstrap = require("./assets/techstack/bootstrap.png");
const vscode = require("./assets/techstack/vscode.png");
const github = require("./assets/techstack/github.png");
const git = require("./assets/techstack/git.png");
const npm = require("./assets/techstack/npm.png");
const postman = require("./assets/techstack/postman.png");
const figma = require("./assets/techstack/figma.png");
const typescript = require("./assets/techstack/typescript.png");
// Porject Images
const projectImage1 = require("./assets/projects/project1-image.png");
const projectTicTacToe = require("./assets/projects/TicTacToe.png");
const projectMemoroy = require("./assets/projects/memoryGameImage.png");
const projectImage2 = require("./assets/projects/project2-image.png");
const projectImage3 = require("./assets/projects/project3-image.png");
const projectImage4 = require("./assets/projects/CMS_Image.png");
const nodejs = require("./assets/nodejs.webp");
const express = require("./assets/ExpressJs.webp");
const sql = require("./assets/sql.png");
const mongoDb = require("./assets/mongoDb.png");
const websockets = require("./assets/websockets.webp");
const projectImage6 = require("./assets/projects/Portfolio_Image.png");
const projectGif1 = require("./assets/projects/CriptoHunter.png");
const ResumeBuilder = require("./assets/projects/ResumeBuilder.png");
const ChatbotImage = require("./assets/projects/Chatbot_Image.png");
const chatwithpdf = require("./assets/projects/Chatwithpdf.jpeg");

type Logos = {
  logogradient: string;
  logo?: string;
};
export const logos: Logos = {
  logogradient: logogradient,
  logo: logo,
};

type Details = {
  name: string;
  tagline: string;
  img: string;
  about: string;
};
export const personalDetails: Details = {
  name: "Bhagavan Mokshith",
  tagline: "I build things for web",
  img: profile,
  about: `With over a 2 years and 10 months of experience as a Application developer, I have honed my expertise in a range of essential technologies, including ReactJS, JavaScript, TypeScript, CSS, Bootstrap, NodeJS, Tailwind CSS, SQL, MongoDB and HTML. I am well-versed in version control using GitHub, and proficient in project management tools such as Jira. In addition, I have experience working with performance monitoring tools like New Relic, and have even developed custom visualizations, also worked on backend where i have implemented RBAC , Microservices for the products.
Currently contributing my skills at Cloudeq, I am entrusted with the frontend and backend responsibilities for a high-profile FinOps project. Through this experience, I have gained valuable insights into advanced concepts like Redux, context management, and the utilization of React Form Hooks, RBAC, developing API's. My dedication to creating seamless user interfaces drives me to excel in the UI developer role and also as an backend developer, bringing innovation and efficiency to your team.`,
};

type URLS = {
  linkdein: string;
  github: string;
  twitter?: string;
  resume: string;
};
export const socialMediaUrl: URLS = {
  linkdein: "https://www.linkedin.com/in/bhagavan-mokshith-703301199",
  github: "https://github.com/Mokshithabhi",
  // twitter: "https://twitter.com/rahulyadavda",
  resume:
    "https://drive.google.com/drive/folders/1h0uaW-ywkW2Fa4Wfck5HzHTBjhxC_lcD",
};

type WorkDetails = {
  Position: string;
  Company: string;
  Location: string;
  Type: string;
  Duration: string;
};

export const workDetails: WorkDetails[] = [
  {
    Position: "Software Engineer I",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Jan 24- Aug 2024",
  },
  {
    Position: "Junior Software Engineer",
    Company: `CloudEQ`,
    Location: "Chandigarh",
    Type: "Full Time",
    Duration: "Sept 2022 - Jan 24",
  },
  {
    Position: "Training",
    Company: `Prepbytes`,
    Location: "Online",
    Type: "Full Time",
    Duration: "Feb 2022 - Aug 22",
  },
  {
    Position: "Intenship",
    Company: `TCS Digital`,
    Location: "Online",
    Type: "Full Time",
    Duration: "MAY 2020 - Aug 20",
  },
];

export const eduDetails: WorkDetails[] = [
  {
    Position: "Bachelor in Electronics and Communication",
    Company: `SiddaGanga Institute of Technology`,
    Location: "Tumkuru",
    Type: "Full Time",
    Duration: "August 2016 - Aug 2020",
  },
  {
    Position: "Intermediate",
    Company: `Sri Chantanya Secondary Education`,
    Location: "Vijawada",
    Type: "Full Time",
    Duration: "June 2014 - Jun 2016",
  },
];

type TechStack = {
  html: string;
  css: string;
  js: string;
  react: string;
  redux: string;
  sass: string;
  tailwind: string;
  bootstrap: string;
  vscode: string;
  postman: string;
  node: string;
  express: string;
  npm: string;
  git: string;
  github: string;
  figma: string;
  sql: string;
  mongoDb: string;
  typescript: string;
  websockets: string;
};
export const techStackDetails: TechStack = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  typescript: typescript,
  node: nodejs,
  express: express,
  sql: sql,
  mongoDb: mongoDb,
  websockets: websockets,
};

// Enter your Project Details here
type ProjectDetails = {
  id: string;
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string;
  githubLink: string;
};
export const projectDetails: ProjectDetails[] = [
  {
    id: "1",
    title: "Chat with Pdf",
    image: chatwithpdf,
    description: `A Next.js application that lets users upload PDFs to Vercel Blob, processes them with LangChain + OpenAI embeddings, and enables interactive Q&A chat with the document using retrieval-augmented generation (RAG)`,
    techstack:
      "HTML/CSS, TailwindCSS,Next js,Typescript,ShadCN,OpenAI, Vercel Blob, LangChain",
    previewLink: "https://chatwithpdf-nu.vercel.app/",
    githubLink: "https://github.com/Mokshithabhi/chatpdf",
  },
  {
    id: "2",
    title: "Contract Management System",
    image: projectImage4,
    description: `This is a editor application which enables users to edit and draft the file in an editor on the web and then share it with another user, the admin will be having the eligible to share the file and give them the read and write access,The user will have the option to comment on the file and parallely the user can modify the file.`,
    techstack:
      "HTML/CSS, React,Typescript, TailwindCSS, React-Router-Dom, TinyMCE Editor,ShadCN, Clerk,Liveblocks",
    previewLink: "https://basic-cms-sigma.vercel.app/",
    githubLink: "https://github.com/Mokshithabhi/Basic_CMS",
  },
  {
    id: "3",
    title: "Resume Builder",
    image: ResumeBuilder,
    description: `The AI Resume Builder is an intuitive, feature-rich web application designed to help users create professional, modern resumes effortlessly. Whether you're a fresh graduate or a seasoned professional, this tool enables you to craft personalized resumes that reflect your unique strengths, experience, and style.`,
    techstack:
      "HTML/CSS, Next js,Express js,Typescript, TailwindCSS,ShadCN, Clerk,stripe",
    previewLink: "https://resume-builder-five-steel-28.vercel.app/",
    githubLink: "https://github.com/Mokshithabhi/Resume-Builder",
  },

  {
    id: "4",
    title: "Digital Clock",
    image: projectImage3,
    description: `The project is made mostly to show my CSS skills and I have build the logics with JS`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://mokshithabhi.github.io/Digital-clock/",
    githubLink: "https://github.com/Mokshithabhi/Digital-clock",
  },
  {
    id: "9",
    title: "Cripto Dashboad ",
    image: projectGif1,
    description: `A Crypto Dashboard is a web application designed to provide users with real-time insights into the cryptocurrency market. It serves as a central hub for tracking cryptocurrency prices, market trends, and portfolio performance, catering to both novice investors and experienced traders.`,
    techstack: "HTML/CSS, JavaScript, React,Material UI,  React-Router-Dom",
    previewLink: "https://cryptocurrency-123.netlify.app",
    githubLink: "https://github.com/Mokshithabhi/newcrypto",
  },
  {
    id: "10",
    title: "TO DO Application",
    image: projectImage2,
    description: `IT is a todo app created by just using html, css, javascript, it includes the functionality of creating a todo, adding deleting a todo`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://mokshithabhi.github.io/todoprojectjs",
    githubLink: "https://github.com/Mokshithabhi/todoprojectjs",
  },
  {
    id: "5",
    title: "React Blog App",
    image: projectImage1,
    description: `A blog app is a web application that allows users to create, manage, and share blog posts. It serves as a platform for writers, enthusiasts, and businesses to publish content, engage with readers, and build a community around shared interests.`,
    techstack: "HTML/CSS, JavaScript, React, react-router-dom",
    previewLink: "https://cheerful-react-project.netlify.app",
    githubLink: "https://github.com/Mokshithabhi",
  },
  {
    id: "6",
    title: "Memory Game",
    image: projectMemoroy,
    description: `This is the memory game where it helps to improve your memory`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://mokshithabhi.github.io/Memory/",
    githubLink: "https://github.com/Mokshithabhi/Memory",
  },
  {
    id: "7",
    title: "TIC_TAC_TOE",
    image: projectTicTacToe,
    description: `This is a TIC_TAC_TOE game `,
    techstack: "Typescript,React,CSS",
    previewLink: "https://tic-tac-toe-blush-six.vercel.app/",
    githubLink: "https://github.com/Mokshithabhi/TicTacToe",
  },
  {
    id: "8",
    title: "Personal Portfolio",
    image: projectImage6,
    description: `The current one you're looking at`,
    techstack: "HTML/CSS, TypeScript, React, React-Router-Dom, TailwindCSS",
    previewLink: "https://portfolio-mokshiths-projects-d089286e.vercel.app/",
    githubLink: "https://github.com/Mokshithabhi/Portfolio",
  },
];

type ContactType = {
  email: string;
  phone: string;
};
export const contactDetails: ContactType = {
  email: "mokshithabhi123@gmail.com",
  phone: "+918296402316",
};
