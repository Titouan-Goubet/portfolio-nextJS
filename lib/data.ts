import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Au sujet de moi",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "O'poll",
    description:
      "Une application web pour créer des sondages. J'étais le développeur front-end. Elle permet la création de sondages, le vote, et le partage.",
    tags: ["React", "Typescript", "MaterialUI" , "MySQL" , "Sequelize"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-commerce",
    description:
      "Une application web e-commerce dédiée aux passionnés du TCG Pokémon. En cours de construction.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Puissance 4",
    description:
      "Une application web pour jouer au puissance 4. Elle offre des fonctionnalités telles que le jeu contre l'ordinateur. En cours de construction",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MaterialUI",
  "Bootstrap",
  "Framer Motion",
  "Prisma",
  "Redux",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "Postman",
] as const;
