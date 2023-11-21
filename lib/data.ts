import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { FaReact } from "react-icons/fa";
import { Si42 } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "Présentation",
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
    name: "Expérience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "The_Hacking_Project",
    location: "Paris, France",
    description:
      "J'ai suivi une formation de trois mois et effectué mes premiers pas dans la programmation avec le langage Ruby et le framework Rails",
    icon: React.createElement(SiRuby),
    date: "oct 2019 - jan 2020",
  },
  {
    title: "Ecole 42",
    location: "Paris, France",
    description:
      "J'ai poursuivi mon parcours en passant le concours d'entrée de la piscine 42 puis j'ai rejoint l'école pour une durée d'un peu moins d'un an ou j'ai découvert la programmation en C et les algorithmes.",
    icon: React.createElement(Si42),
    date: "jan 2021 - nov 2021",
  },
  {
    title: "O'clock",
    location: "Paris, France",
    description:
      "J'ai suivi une formation de six mois et effectué mes premiers pas dans la programmation avec le langage JavaScript et le framework React. Puis j'ai poursuivi ma formation en autodidacte tout en passant un examen pour obtenir un titre professionnel de développeur web et web mobile.",
    icon: React.createElement(FaReact),
    date: "fev 2023 - aout 2023",
  },
  {
    title: "Auto-didacte",
    location: "Paris, France",
    description:
      "Je poursuis mon apprentissage en autodidacte tout en passant un examen pour obtenir un titre professionnel de développeur web et web mobile. Actuellement je travaille sur un projet de e-commerce avec Next.js et Prisma en TypeScript.",
    icon: React.createElement(SiTypescript),
    date: "aout 2023 - maintenant",
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
