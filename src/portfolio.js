/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohamed Aziz Skhiri",
  title: "Hi all, I'm Mohamed Aziz",
  subTitle: emoji(
"A Data Science and AI Enthusiast 🚀 with hands-on experience in Machine Learning, data-driven applications, and intelligent systems. Skilled in Python, statistical modeling, and ML frameworks, I leverage my background as a Full Stack Developer (React.js, Flask, MongoDB, PHP, C#) to build end-to-end solutions that combine robust software engineering with advanced data science techniques."  ),
  resumeLink:
    "https://drive.google.com/file/d/1HBgrXcMUjtPy8hVcfmv2PY25mib9OINN/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Skhiri23",
  linkedin: "https://www.linkedin.com/in/mohamed-aziz-skhiri-498627254/",
  gmail: "azizskhiri107@gmail.com",
  whatsapp: "https://wa.me/21652237532?text=Hello%20Aziz%2C%20I%20saw%20your%20portfolio!",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER & DATA SCIENCE ENTHUSIAST 🚀 passionate about building data-driven applications",
  skills: [
    emoji(
      "⚡ Develop interactive and responsive Frontend/User Interfaces with React.js, HTML, CSS, and JavaScript"
    ),
    emoji("⚡ Build robust Backend services using Flask (Python), PHP, and C#"),
    emoji("⚡ Work with relational and NoSQL databases (MySQL, MongoDB)"),
    emoji(
      "⚡ Apply Data Science techniques and Machine Learning with Python (Pandas, NumPy, Scikit-learn) and R for statistical analysis"
    ),
    emoji("⚡ Experience with object-oriented programming in Java and Kotlin")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

 softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask" // Flask icon (needs solid flask icon)
  },
  {
    skillName: "PHP",
    fontAwesomeClassname: "fab fa-php"
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fas fa-code" // generic code icon
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Kotlin",
    fontAwesomeClassname: "fas fa-mobile-alt" // Kotlin icon is missing in FA, using mobile
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf" // not in FA officially, leaf as placeholder
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "R",
    fontAwesomeClassname: "fas fa-chart-line" // no FA icon for R, using chart-line as placeholder
  },
  {
    skillName: "Bash",
    fontAwesomeClassname: "fas fa-terminal" // terminal icon for shell scripting
  }
],
display: true // Set false to hide this section, defaults to true
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FSM - Faculty of Sciences of Monastir",
      logo: require("./assets/images/fsmLogo.png"), // remplace avec le vrai logo si tu veux
      subHeader: "Master in Data Science",
      duration: "September 2024 - Present",
      desc: "Currently pursuing a Master’s degree in Data Science, focusing on data-driven applications and intelligent systems.",
      descBullets: [
        "Studying advanced topics in Data Science, Machine Learning, and Big Data",
        "Working on academic projects combining Full Stack development and data analysis"
      ]
    },
    {
      schoolName: "FSM - Faculty of Sciences of Monastir",
      logo: require("./assets/images/fsmLogo.png"), // même remarque pour le logo
      subHeader:
        "Bachelor’s in Computer Science – Software Engineering and Information Systems",
      duration: "September 2021 - May 2024",
      desc: "Graduated with a strong foundation in computer science and software engineering.",
      descBullets: [
        "Final Year Project: Developed a Human Resource Management System (HRMS) using Python, MySQL, and PHP",
        "Completed courses in Web Development, Databases, Operating Systems, and Software Engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
     {
      Stack: "Data Science & Databases (Python, MySQL, MongoDB, ML basics)",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend (React.js, HTML, CSS, JavaScript)",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend (Flask, PHP, C#, Java)",
      progressPercentage: "70%"
    }
   
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Elite Council Consulting",
      companylogo: require("./assets/images/eliteCouncilLogo.jpg"), // remplace par le vrai logo si dispo
      date: "May 2025 – August 2025",
      desc: "Contributed to the development of an intelligent school register system.",
      descBullets: [
        "Built web interfaces using React.js and backend services with Flask (Python)",
        "Managed data with MongoDB",
        "Collaborated in an Agile team to deliver a complete digital attendance solution"
      ]
    },
    {
      role: "Python Programming Instructor (Part-time)",
      company: "CEFI - Centre de Formation Informatique",
      companylogo: require("./assets/images/cefiLogo.png"), // logo facultatif
      date: "Feb 2024 – Jun 2024",
      desc: "Taught Python programming concepts to beginners through theory and practice.",
      descBullets: [
        "Covered variables, control flow, functions, and file handling",
        "Guided students in hands-on coding sessions and mini-projects"
      ]
    },
    {
      role: "Final Year Project – Human Resource Management System",
      company: "FSM - Faculty of Sciences of Monastir",
      companylogo: require("./assets/images/fsmLogo.png"),
      date: "Mar 2024 – May 2024",
      desc: "Designed and developed a complete HR management system tailored for the IT sector.",
      descBullets: [
        "Implemented core modules: employee profiles, time tracking, payroll, recruitment, training",
        "Technologies used: Python, MySQL, HTML/CSS/JS, PHP"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY PROJECTS AND INTERNSHIPS I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/grh.png"), // ajoute un logo ou une icône RH
      projectName: "Human Resource Management System (HRMS)",
      projectDesc:
        "A complete HR management platform tailored for the IT sector, including employee profiles, payroll, recruitment, and training modules.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Skhiri23/GRH.git" // mets ton repo si tu l’as en ligne
        },
        {
          name: "Rapport",
          url: "https://drive.google.com/file/d/1TfaKIrWlq96v_w0mYabslPRybkO1SP5B/view?usp=sharing" // mets ton rapport (PDF / Google Drive)
        }
      ]
    },
    {
      image: require("./assets/images/eliteCouncilLogo.jpg"), // logo placeholder
      projectName: "Intelligent School Register System",
      projectDesc:
        "Developed during my internship at Elite Council Consulting. A full-stack solution for digital school attendance using React.js, Flask (Python), and MongoDB.",
      footerLink: [
        {
          name: "Company LinkedIn",
          url: "https://www.linkedin.com/company/elite-council-consulting/posts/?feedView=all"
        },
        {
          name: "Specification",
          url: "https://drive.google.com/file/d/115d1Irb6TwRO-WySca5AYmP3cBlMCgOq/view?usp=sharing" // lien vers cahier des charges / specs si dispo
        },
        {
          name: "Github",
          url: "https://github.com/Skhiri23/registre-intelligent.git" // lien vers cahier des charges / specs si dispo
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Trainings that highlight my technical expertise.",

  achievementsCards: [
    {
      title: "Python for Data Science, AI & Development",
      subtitle:
        "Completed certification by IBM, focusing on Python for AI, data analysis, and development.",
      image: require("./assets/images/ibm.png"), // ajoute un logo Python/IBM
      imageAlt: "IBM Python Data Science",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://coursera.org/share/2fc9b29a86589aeead48bc0889eac714" // mets le lien si dispo
        }
      ]
    },
    {
      title: "Python Level 1",
      subtitle:
        "Certified by JNL Center, covering programming fundamentals and problem solving with Python.",
      image: require("./assets/images/jnl.jpg"),
      imageAlt: "Python Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Wt9hWwZdTSbF2nsVeyturRzRXNJlEeJH/view?usp=sharing" // ajoute ton lien si tu l’as
        }
      ]
    },
    {
      title: "Full-Stack Web Development",
      subtitle:
        "Training completed at Elite Council Consulting: React.js, Flask (Python), and MongoDB.",
      image: require("./assets/images/eliteCouncilLogo.jpg"), // ajoute un logo fullstack
      imageAlt: "Full Stack Certification",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1IPiaggO_OLlg8GkOPjvpV9fFfbj_Ly5s/view?usp=sharing" 
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // If your component supports a link, add it like this:
  resumeLink: "https://drive.google.com/file/d/1HBgrXcMUjtPy8hVcfmv2PY25mib9OINN/view",
  display: true // Set false to hide this section, defaults to true
};

// Contact Section
const contactInfo = {
  title: "Reach Out to me!",
  subtitle: "Let’s discuss a project, a collaboration, or just say hello!",
  phone: "+216 52 237 532", // renamed
  email_address: "azizskhiri107@gmail.com",
  display: true
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  socialMediaLinks,
  isHireable,
  resumeSection
};
