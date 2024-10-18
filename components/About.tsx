"use client";

import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

export default function About() {
  const { ref } = useSectionInView("Présentation");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[42rem] text-center leading-8 sm:mb-48 scroll-mt-56"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Présentation</SectionHeading>
      <p className="mb-5 text-xl">
        J&apos;ai entamé une formation d&apos;un an à l&apos;école 42. Passionné
        par la programmation, j&apos;ai choisi de me spécialiser davantage dans
        le domaine du développement web, plus précisément en JavaScript. Pour
        approfondir mes compétences, j&apos;ai décidé de poursuivre ma formation
        en m&apos;inscrivant au programme de développeur full-stack dispensé par
        l&apos;école O&apos;clock.{" "}
        <span className="italic">
          Ce qui me passionne le plus dans la programmation
        </span>{" "}
        est l&apos;aspect résolution de problèmes. J&apos;
        <span className="underline">adore</span> la satisfaction de trouver la
        solution à un défi complexe. Ma stack technologique de base comprend{" "}
        <span className="font-medium">React, Next.js et Node.js</span>
      </p>

      <p className="text-xl">
        <span className="italic">En dehors du codage</span>, j&apos;aime jouer à
        des jeux vidéo, regarder des films. De plus, pendant ma recherche
        d&apos;emploi, je reste actif en travaillant sur de nouveaux projets
        notamment avec TypeScript et NextJS en approfondissant mes
        connaissances.
      </p>
    </motion.section>
  );
}
