/*
  EASY CUSTOMIZATION FILE
  -----------------------
  Add/edit your projects in the portfolioProjects array below.
  - Keep links empty ("") until you have a real, working link.
  - status should be "Live" or "In progress".
  - Never put passwords, API keys, private information, or financial records here.
*/
window.portfolioConfig = {
  name: "Etanshu Sangwan",
  email: "etanshusangwan011@gmail.com",
  github: "https://github.com/etanshusangwan",
  // Replace with your exact LinkedIn profile URL when ready.
  linkedin: "",
  photoPath: "assets/profile.jpg",
  skills: [
    { name: "Python", level: "Learning" },
    { name: "Streamlit", level: "Project use" },
    { name: "Pandas", level: "Project use" },
    { name: "HTML", level: "Learning" },
    { name: "CSS", level: "Learning" },
    { name: "JavaScript", level: "Learning" },
    { name: "C programming", level: "Learning" },
    { name: "Git & GitHub", level: "Practising" },
    { name: "Excel / data analysis", level: "Learning" }
  ]
};

window.portfolioProjects = [
  {
    title: "EMI Calculator Dashboard",
    category: "Finance tool",
    status: "Live",
    description: "An interactive loan EMI calculator with a repayment schedule, summary metrics and a chart. Built with Python, Streamlit and Pandas.",
    technologies: ["Python", "Streamlit", "Pandas", "Data visualization"],
    liveUrl: "https://emi-dashboard-calcultor-ku8pvzassz9x2ddixapnyx.streamlit.app/",
    githubUrl: "https://github.com/etanshusangwan/EMI-DASHBOARD-CALCULATOR",
    preview: "emi"
  },
  {
    title: "Smart Expense & Budget Manager",
    category: "Personal finance",
    status: "In progress",
    description: "A planned expense manager focused on adding transactions, tracking a budget and calculating spending. The working version is still being developed.",
    technologies: ["Python", "Streamlit", "Pandas"],
    liveUrl: "",
    githubUrl: "",
    preview: "expense"
  }
];
