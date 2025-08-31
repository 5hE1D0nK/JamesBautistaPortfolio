import rice from "../assets/projects/rice.ico";
import SafeAndSound from "../assets/projects/SafeandSound.png";
import FormCheckAI from "../assets/projects/FCAI.png";
import PriorityQueue from "../assets/projects/PriorityQueue.png";
import calendar from "../assets/projects/calendar.png";
import scheduleplanner from "..projects/scheduleplanner.png"

export const HERO_CONTENT = `I am a third-year Software Engineering student at Concordia University with hands-on experience in developing software solutions and applying Agile methodologies. My technical expertise spans programming languages like Python, Java, and JavaScript, as well as frameworks and tools such as React, Node.js, and OpenCV. I have worked on diverse projects, including a Peer Assessment Application, a fitness tracker (FormCheck AI), and a noise monitoring tool ("Safe and Sound"), highlighting my ability to tackle real-world challenges through innovative technology.`;

export const ABOUT_TEXT = `I am a motivated third-year Software Engineering student at Concordia University, passionate about solving problems and building impactful applications. With proficiency in Python, Java, and JavaScript, I specialize in full-stack development using frameworks like React and Node.js. My project experience includes a Peer Assessment Application and tools for fitness tracking and noise analysis, showcasing a blend of technical and creative problem-solving. Beyond academics, I have honed precision and adaptability as a Contractor Apprentice, completing detailed renovations. I thrive in collaborative settings, contributing effectively to team-driven projects, hackathons, and Agile workflows. Fluent in English and French, with a working knowledge of Tagalog, I enjoy music, gaming, fitness, and exploring new challenges.`;

export const EXPERIENCES = [
  {
    year: "2018 - Present",
    role: "Contractor Apprentice",
    company: "Jimmy Bautista, Jr.",
    description: `Renovated kitchens, bathrooms, and other interior spaces, developing skills in plastering, painting, and flooring.`,
    technologies: ["Adaptability", "Attention to detail", "High client satisfaction"],
  }
];

export const PROJECTS = [
  {
    title: "Google Calendar Coding Hours Tracker",
    image: calendar,
    description:
      "Developed a Python command-line tool to track coding hours using Google Calendar API integration. Implemented functionality to add events, calculate daily/weekly totals, and generate productivity statistics. Built comprehensive time management system with OAuth2 authentication and time zone handling.",
    technologies: ["Python", "Google Calendar API", "OAuth2", "datetime manipulation"],
  },
  {
    title: "Smart Course & Schedule Planner",
    image: scheduleplanner,
    description:
      "Created a schedule generator that balances class times, study breaks, and preferences using backend filters. Implemented dynamic constraint handling with MongoDB query logic for optimized scheduling.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Peer Assessment Application",
    image: rice,
    description:
      "Developed a full-stack application for students to evaluate team contributions using rating dimensions. Delivered four iterations over 10 weeks using Agile methodology, version-controlled via GitHub.",
    technologies: ["Node.js", "React", "MongoDB"],
  },
  // {
  //   title: "FormCheck AI ",
  //   image: FormCheckAI,
  //   description:
  //     "Built a fitness application to help users check their exercise form and count repetitions for ConUHacks VIII. Designed for beginner gym-goers, the program analyzes body movements through a camera, providing feedback on rep quality.",
  //   technologies: ["Python", "OpenCV", "MediaPipe", "HTML", "CSS", "JavaScript (Front-End)"],
  // },
  // {
  //   title: "Smarter Priority Queue (SPQ) Implementation",
  //   image: PriorityQueue,
  //   description:
  //     "Created an adaptable priority queue in Java, utilizing both min- and max-heap structures with a dynamically extendable array. Implemented efficient algorithms for all operations, optimizing time complexity, and delivered detailed pseudocode and complexity analysis alongside a fully tested Java implementation.",
  //   technologies: ["Java"],
  // },
];

export const CONTACT = {
  address: "13389 Bois-des-Trottiers, QC, Montreal ",
  phoneNo: "+438 878 3515 ",
  email: "jamessheldona@gmail.com",
};
