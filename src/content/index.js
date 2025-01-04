import project1 from "./projectImage/Project1.webp"
import project2 from "./projectImage/Project2.webp"
import project3 from "./projectImage/Project3.webp"


export const HERO_CONTENT = `I’m a Full Stack Developer proficient in the MERN stack, passionate about building scalable and efficient web applications. I’m actively learning System Design and have a strong interest in Data Structures & Algorithms. I’m always excited to grow, explore new technologies, and tackle real-world challenges through code.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "This project is an e-commerce website that allows users to browse products, add them to their cart, and complete purchases. It also features an admin panel for managing store items and updating order statuses, such as dispatch and delivery.",
    technologies: ["React" , "Tailwind" , "Express.js" , "MongoDB"],
  },
  
  {
    title: "Authentication-App",
    image: project2,
    description:
      "This project is an authentication web application that ensures secure user access through features like login, registration, and email verification. It includes an email OTP functionality for an added layer of security during account creation and verification.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Hospital Managment System",
    image: project3,
    description:
      "This project is a hospital management system that handles patient appointments, medical records, and payments. It includes an admin panel for managing doctor profiles, removing doctors, and canceling appointments, along with a personal doctor profile panel where doctors can update their details, view total earnings, and track patient history.",
    technologies: ["React" , "Tailwind" , "Express.js" , "MongoDB"],
  },
];

export const CONTACT = {
  phoneNo: "+91 94297 89201 ",
  email: "vasuaghera33@gmail.com",
};
