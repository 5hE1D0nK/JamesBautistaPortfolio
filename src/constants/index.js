import rice from "../assets/projects/rice.ico";
import SafeAndSound from "../assets/projects/SafeandSound.png";
import FormCheckAI from "../assets/projects/FCAI.png";
import PriorityQueue from "../assets/projects/PriorityQueue.png";

export const HERO_CONTENT = `I am a second-year Software Engineering student at Concordia University with hands-on experience in developing software solutions and applying Agile methodologies. My technical expertise spans programming languages like Python, Java, and JavaScript, as well as frameworks and tools such as React, Node.js, and OpenCV. I have worked on diverse projects, including a Peer Assessment Application, a fitness tracker (FormCheck AI), and a noise monitoring tool ("Safe and Sound"), highlighting my ability to tackle real-world challenges through innovative technology.`;

export const ABOUT_TEXT = `I am a motivated second-year Software Engineering student at Concordia University, passionate about solving problems and building impactful applications. With proficiency in Python, Java, and JavaScript, I specialize in full-stack development using frameworks like React and Node.js. My project experience includes a Peer Assessment Application and tools for fitness tracking and noise analysis, showcasing a blend of technical and creative problem-solving. Beyond academics, I have honed precision and adaptability as a Contractor Apprentice, completing detailed renovations. I thrive in collaborative settings, contributing effectively to team-driven projects, hackathons, and Agile workflows. Fluent in English and French, with a working knowledge of Tagalog, I enjoy music, gaming, fitness, and exploring new challenges.`;

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
    title: "Peer Assessment Application (Full-Stack)",
    image: rice,
    description:
      "Developed a peer assessment application that facilitates student evaluations of team contributions based on dimensions such as cooperation, conceptual contribution, practical contribution, and work ethic. This project follows the Agile development approach, utilizing GitHub for version control and task management over a 10-week period, delivering four incremental prototypes.",
    technologies: ["NodeJS", "React", "MongoDB"],
  },
  {
    title: "Safe and Sound (Back-End)",
    image: SafeAndSound,
    description:
      "Developed a noise monitoring program using Python, designed to help cities track noise pollution patterns. Created at PolyHacks 2024, the project involved using Matplotlib for visualizations and expanded our understanding of sound analysis.",
    technologies: ["Python"],
  },
  {
    title: "FormCheck AI ",
    image: FormCheckAI,
    description:
      "Built a fitness application to help users check their exercise form and count repetitions for ConUHacks VIII. Designed for beginner gym-goers, the program analyzes body movements through a camera, providing feedback on rep quality.",
    technologies: ["Python", "OpenCV", "MediaPipe", "HTML", "CSS", "JavaScript (Front-End)"],
  },
  {
    title: "Smarter Priority Queue (SPQ) Implementation",
    image: PriorityQueue,
    description:
      "Created an adaptable priority queue in Java, utilizing both min- and max-heap structures with a dynamically extendable array. Implemented efficient algorithms for all operations, optimizing time complexity, and delivered detailed pseudocode and complexity analysis alongside a fully tested Java implementation.",
    technologies: ["Java"],
  },
];

export const CONTACT = {
  address: "13389 Bois-des-Trottiers, QC, Montreal ",
  phoneNo: "+438 878 3515 ",
  email: "jamessheldona@gmail.com",
};
