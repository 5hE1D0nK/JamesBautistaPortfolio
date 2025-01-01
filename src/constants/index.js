import rice from "../assets/projects/rice.ico";
import SafeAndSound from "../assets/projects/SafeandSound.png";
import FormCheckAI from "../assets/projects/FCAI.png";
import PriorityQueue from "../assets/projects/PriorityQueue.png";

export const HERO_CONTENT = `I am a second-year Software Engineering student at Concordia University with practical experience in software/agile development and strong foundation in teamwork, problem-solving, and communication. I have developed various technical projects, including a Peer Assessment Application, a noise monitoring program ("Safe and Sound"), and a fitness application (FormCheck AI), showcasing my expertise in programming languages such as Python, Java, and JavaScript, along with tools like OpenCV, Node.js, and React.`;

export const ABOUT_TEXT = `I am a second-year Software Engineering student at Concordia University, driven by a passion for problem-solving and creating impactful software solutions. With a strong foundation in programming and hands-on experience in full-stack development, I have contributed to projects ranging from a Peer Assessment Application to fitness and noise monitoring applications. My technical skills include proficiency in Python, Java, JavaScript, and frameworks like React and Node.js. 
            Outside of academics, I bring adaptability and attention to detail from my experience as a Contractor Apprentice, where I worked on renovations requiring precision and creativity. I thrive in collaborative environments, as demonstrated by my participation in hackathons and teamwork-driven software projects. Fluent in English and French, with a working knowledge of Tagalog, I enjoy music, gaming, cooking, and fitness. 
            I'm always eager to tackle new challenges and expand my technical and personal horizons.`;

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
