import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cpp,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    sql,
    git,
    simulink,
    matlab,
    ehsaas,
    suavy,
    slashmark,
    finance,
    bbusiness,
    todo,
    jsclock,
    python,
    link
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "leetcode",
      title: "LeetCode"
    },
    {
      id: "codeforces",
      title: "CodeForces"
    },
    {
      id: "resume",
      title: "My Resume"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Problem Solver",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C/C++",
      icon: cpp,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: sql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "simulink",
      icon: simulink,
    },
    {
      name: "matlab",
      icon: matlab,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Suavy Tecnologies Pvt. Ltd.",
      icon: suavy,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Developing and maintaining web application using JavaScript and other related technologies for the startup of our college.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Slash Mark IT Startup",
      icon: slashmark,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2022",
      points: [
        "Completed a certification internship in JavaScript, covering HTML, CSS, and JavaScript.",
        "Developed projects ranging from basic to advanced levels, demonstrating JavaScript proficiency.",
        "Implemented front-end projects, focusing on responsive design and dynamic content.",
        "Earned certification by consistently delivering high-quality project work.",
      ],
    },
    {
      title: "Executive Board Member",
      company_name: "Finance Club, BIT Mesra",
      icon: finance,
      iconBg: "#383E56",
      date: "Aug 2022 - Sept 2023",
      points: [
        "Led initiatives in the Finance Club, guiding juniors in financial concepts and improving overall financial literacy among students.",
        "Designed and promoted event materials, enhancing engagement and participation in finance-related activities.",
        "Organized and conducted successful finance events, demonstrating strong planning and execution skills.",
        // "Played a key role in event planning and promotion, contributing to the successful implementation of numerous finance initiatives within the campus.",
      ],
    },
    {
      title: "Design and Publicity Head",
      company_name: "Ehsaas: Dramatics Society, BIT Mesra",
      icon: ehsaas,
      iconBg: "#E6DEDD",
      date: "Jul 2022 - Dec 2023",
      points: [
        "Led the design department in the club, overseeing the creation and finalization of promotional materials.",
        "Directed publicity efforts, effectively promoting events on social media and increasing audience engagement.",
        "Coordinated with team members to plan and execute successful promotional strategies for campus events.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was very difficult to code optimally always, but Anish proved me wrong.",
      name: "Ankit Gupta",
      designation: "Web Developer Intern",
      company: "1 Vendor Platform",
      image: "https://media.licdn.com/dms/image/D4D03AQEpjyVmJyhDUA/profile-displayphoto-shrink_800_800/0/1714933180768?e=1727308800&v=beta&t=FOwwr4DIfvQCkHoUL8YFLCt7peJcUF-mO34mGHl9Ta0",
    },
    {
      testimonial:
        "Writing codes and working on projects with Anish is really fun! We as a team are great.",
      name: "Anish Kr Barnwal",
      designation: "React Intern",
      company: "Slash Mark IT Startup",
      image: "https://media.licdn.com/dms/image/D4D35AQFFxAx9q75Fww/profile-framedphoto-shrink_800_800/0/1714547998234?e=1722290400&v=beta&t=3gCKfl8BCdf_I_hkh5y8aeyq2qf2SNwJS57iKzfI4OE",
    },
    {
      testimonial:
        "The ideas which comes to our brains, while we sit together on some important topics are really amazing ones.",
      name: "Saurav Kr Dwivedi",
      designation: "AIML intern",
      company: "TATA Steel",
      image: "https://media.licdn.com/dms/image/D4D03AQEYKCAst_lK5g/profile-displayphoto-shrink_800_800/0/1715426958490?e=1727308800&v=beta&t=E-ZB0gKJnphWELcLEpfD-KuXNBw76b2eGHEQTtrcLkw",
    },
  ];
  
  const projects = [
    {
      name: "Bharat Business",
      description:
        "Web-based platform that allows small and medium businesses to find investment, pitch to individual investors, providing an efficient solution to prosper small businesses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bbusiness,
      source_repo_link: "https://github.com/ANISH10655/BharatBusiness.github.io",
      source_code_link: "https://bharat-business-github-bje5q1s76-anish10655.vercel.app"
    },
    {
      name: "ToDo App",
      description:
        "Developed a ToDo App using React and Redux Toolkit, featuring task creation, editing, deletion, and filtering for streamlined task management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_repo_link: "https://github.com/anish-k-mishra/React-JS/tree/main/10_ToDo_LocalStorage",
      source_code_link: "https://github.com/anish-k-mishra/React-JS/tree/main/10_ToDo_LocalStorage"
    },
    {
      name: "JS Clock",
      description:
        "A comprehensive and eye pleasing analog as well as digital clock just using HTML, CSS, JavaScript. This resembles the command in basic building blocks of JS.",
      tags: [
        {
          name: "html5",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jsclock,
      source_repo_link: "https://github.com/anish-k-mishra/JS-Clock",
      source_code_link: "https://anish-js-clock.netlify.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };