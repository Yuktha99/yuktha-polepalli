import { bachelors_transcript_link, masters_transcript_link } from "../../constants/constants";
import { BikeIcon, CarIcon, CycleIcon, WalkIcon } from "../../images";

export const educationData = [
  {
    title: "Master of Science - Computer Science",
    subtitle: "University of California, Riverside",
    grade: "3.96 / 4",
    year: "Sept 2023 - Dec 2024",
    transcript: masters_transcript_link,
    image: CarIcon
  },
  {
    title: "Bachelor of Engineering - Information Science",
    subtitle: "Visveswaraya Technological University, Belgavi, India",
    grade: "9.1 / 10",
    year: "Aug 2016 - Aug 2020",
    transcript: bachelors_transcript_link,
    others: "University First rank with 4 gold medals.",
    image: BikeIcon
  },
  {
    title: "Pre-University Education",
    subtitle: "PES PU College, Bengaluru, India",
    grade: "97%",
    year: "2014 - 2016",
    image: CycleIcon
  },
  {
    title: "School",
    subtitle: "Rayalaseema Children's Academy, Punganur, India",
    grade: "9.8/10",
    year: "2014",
    others: "Prathibha award winner",
    image: WalkIcon
  }
]