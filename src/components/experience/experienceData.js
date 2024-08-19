import {
  GraderIcon,
  InternshipIcon,
  NewInternIcon,
  SoftwareEngineer1Icon,
  SoftwareEngineer2Icon,
  SoftwareEngineerIcon,
  TeacherIcon,
} from "../../images";
import {
  CssLogo,
  DockerLogo,
  GoLogo,
  HtmlLogo,
  KubernetesLogo,
  PostmanLogo,
  ReactLogo,
  NodeLogo,
  RestAPILogo,
  FastAPILogo,
  FlaskLogo,
} from "../../images/skills/images";

export const experience_data = [
  {
    year: "June 2024 - Present",
    subheader: "Hewlett Packard Enterprise Company",
    header: "Software Engineer Intern",
    image: InternshipIcon,
    description:
      "Engineered backend services in Golang for HPE GreenLake, optimizing scalability and cost-efficiency. Developed an Apache Superset dashboard to visualize usage data and identify bottlenecks. Built React UI screens for data science workflows, collaborating with design and engineering teams.",
    techStack: [
      {
        image: GoLogo,
        text: "Go Lang",
      },
      {
        image: DockerLogo,
        text: "Docker",
      },
      {
        image: KubernetesLogo,
        text: "Kubernetes",
      },
      {
        image: PostmanLogo,
        text: "Postman",
      },
    ],
    explanation: `
    •Project: HPE GreenLake Web Application 
•	Engineered backend services in Golang, focusing on optimizing scalability and cost-efficiency for the HPE GreenLake Platform. Contributed to enhancing the platform's availability and performance in high-demand environments. Documented all the steps necessary to bring up the service needed for smooth onboarding.
•	Brought up a metrics dashboard using Apache Superset to visualize the usage of users and user groups without revealing any PII which helped us in understanding the scalability bottlenecks upfront. This helped us monitor the usage and run the service successfully.
•	Also worked on building UI screens with React for data science workflows on the analytics dashboard. Work closely with the Design and Service engineering teams to build out the interaction layer for these new workflows. 
•	Experienced in working with geographically distributed teams (US, India, Brazil) with strong communication skills and cross-functional team collaboration.
    `,
  },
  {
    year: "April - June 2024",
    subheader: "University of California Riverside",
    header: "Teaching Assistant",
    image: TeacherIcon,
    description:
      "Managed labs for 120 students in a course on distributed systems, covering web development, scalability, security, and both front-end (HTML, CSS, JavaScript, React, Redux) and back-end technologies (HTTP, URI, JSON).",
    techStack: [
      {
        image: ReactLogo,
        name: "ReactJS",
      },
      {
        image: HtmlLogo,
        name: "HTML5",
      },
      {
        image: CssLogo,
        name: "CSS3",
      },
      {
        image: NodeLogo,
        name: "Node JS",
      },
      {
        image: RestAPILogo,
        name: "Rest APIs",
      },
    ],
    explanation: `
    •Principles of web development 
    •Provides an introduction to distributed systems, with a focus on web development techniques and the considerations to application scalability, security, reliability, and redundancy. 
    •Provides a holistic investigation of technologies used for both back-end and front-end development. 
    •This course will delve into some of the core front-end languages and frameworks (HTML/CSS/JavaScript/React/Redux),as well as the underlying technologies that enable web applications (HTTP, URI, JSON).
    •Conducted, monitored and managed labs for 120 undergraduate students.
    `,
  },
  {
    year: "Jan - March 2024",
    subheader: "University of California Riverside",
    header: "Computer Science Grader",
    image: GraderIcon,
    description:
      "Graded for BigData Management Labs, course work, assignments, projects and provided valuable feedback for around 120 undergraduate students.",
  },
  {
    year: "Apr 2023 - Aug 2023",
    subheader: "Deloitte",
    header: "Software Engineer III",
    image: SoftwareEngineerIcon,
    description:
      "I played a key role in developing a large-scale web application, handling both frontend with ReactJS and backend with Python FastAPI. I managed complex state management using Redux and React Context API and independently implemented critical features, including an admin portal that improved customer satisfaction. I ensured responsive design across devices and optimized performance with progressive web loading and caching. I also developed and secured the UI Doorway backend service and contributed to CI/CD processes with Kubernetes and Jenkins. My efforts in troubleshooting, documentation, and UX collaboration further enhanced the project’s success.",
    techStack: [
      {
        image: ReactLogo,
        name: "ReactJS/ React Native",
      },
      {
        image: HtmlLogo,
        name: "HTML5",
      },
      {
        image: CssLogo,
        name: "CSS3",
      },
      {
        image: FastAPILogo,
        name: "Python FastAPI",
      },
      {
        image: DockerLogo,
        text: "Docker",
      },
      {
        image: KubernetesLogo,
        text: "Kubernetes",
      },
      {
        image: PostmanLogo,
        text: "Postman",
      },
    ],
    explanation: `
    •Project: HPE GreenLake Web Application 
    •	Worked on frontend with ReactJS, backend with Python FastAPI, Redux/Redux saga, React Context API, grommet and quickly adopted to the project with complex state management. 
•	Experienced in building large scale web applications. Took complete ownership from identifying, designing, and completing medium to large features independently without guidance. Experienced with progressive web loading, lazy loading, and caching.
•	Implemented admin portal individually which is used is extensively used by escalations team to resolve users’ issues, which in turn increased customer satisfaction. 
•	Ensured seamless user experience with responsive design and development across various devices and screen sizes. 
•	Worked on UI Doorway backend service (building REST APIs) as a gateway between frontend and backend service which is fast and reliable, and imposed security measures in it so there was no chance for vulnerabilities. Also have an experience and knowledge in CI/CD (Kubernetes, Jenkins) in a microservices environment. 
•	Used storybook architecture for frontend common components which ensured the whole project is using the same theme and minimized the UI styling issues/inconsistencies.  Ensured performance optimization.
•	Provided effective troubleshoot in case of customer found defects, worked on them, and documented all the learnings from these which helped the new joiners as a learning material. 
•	Followed proper agile methodologies and documented all the new feature discussions, meetings which created no confusion between the teams and improved our productivity without any bugs.  
•	Participated in UX meetings and gave valuable feedback 
    `,
  },
  {
    year: "July 2021 - March 2023",
    subheader: "Deloitte",
    header: "Software Engineer II",
    image: SoftwareEngineer2Icon,
    description:
      "I worked on the HPE GreenLake web application, a platform for managing cloud services, where I developed both the frontend using ReactJS and the backend with Python FastAPI. I independently owned and developed entire PODs within a multi-service architecture, collaborating closely with business analysts, users, and program managers to gather requirements and implement solutions. I utilized Redux/Redux Saga, React Context API for global state management, and Storybook architecture for UI development. Additionally, I contributed to on-premise solutions, advanced frontend flows, and POCs for the application.",
    techStack: [
      {
        image: ReactLogo,
        name: "ReactJS/ React Native",
      },
      {
        image: HtmlLogo,
        name: "HTML5",
      },
      {
        image: CssLogo,
        name: "CSS3",
      },
      {
        image: FastAPILogo,
        name: "Python FastAPI",
      },
      {
        image: DockerLogo,
        text: "Docker",
      },
      {
        image: KubernetesLogo,
        text: "Kubernetes",
      },
      {
        image: PostmanLogo,
        text: "Postman",
      },
    ],
    explanation: `
    • Project: HPE GreenLake Web Application 
    • Worked on HPE Greenlake web application for HPE client, which is a web application to maintain and manage common cloud services.
• Worked on frontend with ReactJS, backend with Python FastAPI.
• I was part of multiple PODs in the project, and individually owned the entire POD with developing
frontend and backend service in a multi-service architecture.
• Collaborate with business analysts, users, and program managers to collect requirements and
provide implementation
• Used Redux/Redux saga, React Context API for maintaining the global state, have an experience
with Storybook architecture for developing the UI.
• Worked on on-premise solutons, advanced frontend flows, POCs for frontend with ReactJS.
    `,
  },
  {
    year: "Nov 2020 - June 2020",
    subheader: "Deloitte",
    header: "Software Engineer I",
    image: SoftwareEngineer1Icon,
    description:
      "Developed a react native web application for maintaining the thermostat which involved complex UI functionalities. Implemented a complex slider, refresh mechanism for the app which gained many accolades from client side. ",
    techStack: [
      {
        image: ReactLogo,
        name: "React Native",
      },
      {
        image: HtmlLogo,
        name: "HTML5",
      },
      {
        image: CssLogo,
        name: "CSS3",
      },
    ],
    explanation: `
    •	 Project: Honeywell Global Thermostat Occupant App 
•	Developed a react native web application for maintaining the thermostat which involved complex UI functionalities. 
•	Implemented a complex slider, refresh mechanism for the app which gained many accolades from client side. 
    `,
  },
  {
    year: "Feb 2020 - Nov 2020",
    subheader: "HashedIn by Deloitte",
    header: "Software Engineer Intern",
    image: NewInternIcon,
    description:
      "Learned frontend technologies like HTML5, CSS, React JS and implemented a webpage. Worked on backend using Python Flask and Postgres SQL. Learned and worked on mobile application development using React-native and Android-Kotlin technologies. ",
    skills: [
      {
        image: ReactLogo,
        name: "ReactJS/ React Native",
      },
      {
        image: HtmlLogo,
        name: "HTML5",
      },
      {
        image: CssLogo,
        name: "CSS3",
      },
      {
        image: FlaskLogo,
        name: "Python Flask",
      },
    ],
    explanation: `
    •	Learned frontend technologies like HTML5, CSS, React JS and implemented a webpage.
•	Worked on backend using Python Flask and Postgres SQL. 
•	Learned and worked on mobile application development using React-native and Android-Kotlin technologies. 

    `,
  },
];
