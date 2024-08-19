import { InternshipIcon, TeacherIcon } from "../../images";
import {
  CssLogo,
  DockerLogo,
  GoLogo,
  HtmlLogo,
  KubernetesLogo,
  PostmanLogo,
  ReactLogo,
  NodeLogo,
  RestAPILogo
} from "../../images/skills/images";

export const experience_data = [
  {
    year: "June 2024 - Present",
    header: "Hewlett Packard Enterprise Company",
    subheader: "Software Engineer Intern",
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
    header: "University of California Riverside",
    subheader: "Teaching Assistant",
    image: TeacherIcon,
    description:
      "Managed labs for 120 students in a course on distributed systems, covering web development, scalability, security, and both front-end (HTML, CSS, JavaScript, React, Redux) and back-end technologies (HTTP, URI, JSON).",
    techStack: [
      {
        image: ReactLogo,
        name: 'ReactJS'
      },
      {
        image: HtmlLogo,
        name: 'HTML5'
      },
      {
        image: CssLogo,
        name: 'CSS3'
      },
      {
        image: NodeLogo,
        name: 'Node JS'
      },
      {
        image: RestAPILogo,
        name: 'Rest APIs'
      }
    ],
    explanation: `
    •Principles of web development 
    •Provides an introduction to distributed systems, with a focus on web development techniques and the considerations to application scalability, security, reliability, and redundancy. 
    •Provides a holistic investigation of technologies used for both back-end and front-end development. 
    •This course will delve into some of the core front-end languages and frameworks (HTML/CSS/JavaScript/React/Redux),as well as the underlying technologies that enable web applications (HTTP, URI, JSON).
    •Conducted, monitored and managed labs for 120 undergraduate students.
    `
  },
];
