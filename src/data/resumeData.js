const resumeData = {
    profile: {
      name: process.env.NEXT_PUBLIC_NAME || "Gulvaiz Alam",
      email: process.env.NEXT_PUBLIC_EMAIL || "gulvaizalam12@gmail.com",
      phone: process.env.NEXT_PUBLIC_PHONE || "+91 9870750779",
      location: "Delhi, India",
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "linkedin.com/in/gulvaiz-alam",
      github: process.env.NEXT_PUBLIC_GITHUB || "github.com/Gulvaiz",
      summary: "Full-Stack Developer skilled in the MERN stack with proven experience building scalable web applications like Netflix-GPT and DevTinder. Proficient in secure user authentication, API integrations (OpenAI, TMDB), and responsive UI design. Passionate about writing clean code and solving complex problems. Actively seeking remote/international roles to contribute to innovative product teams."
    },
    education: [
      {
        degree: "Bachelor of Technology in Computer Science",
        institution: "Meerut Institute of Engineering and Technology, Meerut",
        duration: "2019-2023"
      },
      {
        degree: "12th",
        institution: "M.G. Public School, Muzaffarnagar",
        duration: "2018-2019"
      },
      {
        degree: "10th",
        institution: "M.G. Public School, Muzaffarnagar",
        duration: "2016-2017"
      }
    ],
    projects: [
      {
        title: "DevTinder",
        description: "Built a Tinder-inspired developer networking platform using React.js, Redux, Tailwind CSS, Node.js, Express, and MongoDB. Implemented secure JWT-based authentication, real-time connection requests, and a swipe-like matching system enabling developers to connect, send/accept requests, and view mutual connections. Focused on RESTful API design, modular architecture, and a responsive, user-centric UI.",
        technologies: "React JS, React Router, Redux Toolkit, Axios, Javascript, Tailwind CSS, HTML, CSS, Node JS, Mongo DB, Express Js, CORS, Cookie-parser, bcrypt, dotenv",
        links: {
          frontendGithub: "GitHub Frontend",
          backendGithub: "Backend GitHub",
          liveFrontend: "Live Frontend",
          liveBackend: "Live Backend"
        }
      },
      {
        title: "Netflix-GPT",
        description: "Built a Netflix GPT clone with React, Redux, Firebase, and Tailwind CSS. Integrated TMDB and OpenAI APIs for movie content, GPT-based search, and user authentication. Features include responsive design, autoplay trailers, and multi-language support for enhanced user experience.",
        technologies: "React Js, Redux, TailwindCSS, Firebase, TMDB",
        links: {
          webApp: "WebApp Link"
        }
      },
      {
        title: "My Portfolio Website",
        description: "I created a responsive personal portfolio website using React, JavaScript, Tailwind CSS, and Framer Motion to showcase my projects, education, skills, and contact information. It features a modern design, smooth animations, and a user-friendly layout. Key sections include Projects with links and details, About Me, Education, and a Contact Form. The site also offers downloadable resumes and certificates, with direct links to my GitHub, LinkedIn, and Gmail, serving as a professional platform for networking and opportunities.",
        technologies: "React JS, TailwindCSS, Netlify, Javascript, HTML, CSS",
        links: {
          webApp: "WebApp Link"
        }
      }
    ],
    skills: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "GSAP"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      tools: ["Git", "GitHub", "Postman", "Firebase", "Netlify", "Vercel", "Framer Motion"],
      languages: ["JavaScript", "Java"],
      others: ["Responsive Design", "API Integration", "Version Control"]
    },
    certifications: [
      {
        title: "MERN Full Stack Development Course",
        issuer: "AccioJob",
        date: "Nov, 2024"
      },
      {
        title: "Barclay's LifeSkills Programme",
        issuer: "",
        date: "Aug, 2022"
      }
    ],
    goals: [
      "To secure a good position in an organization where I can showcase my skills",
      "To continuously learn and acquire new skills in the tech industry",
      "To contribute to innovative and impactful projects",
      "To grow professionally in full-stack development"
    ],
    hobbies: [
      "Watching travel documentaries",
      "Photography",
      "Shooting",
      "Traveling"
    ]
  };
  
  export default resumeData;