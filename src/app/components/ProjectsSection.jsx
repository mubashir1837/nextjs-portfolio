"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce website",
    description: "This is an ecommerce website design with HTML. CSS and JavaScript",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ecommerce-m.vercel.app/",
  },
  {
    id: 2,
    title: "Food ordering website",
    description: "This project is about food ordering website.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubashir1837/Foodweb",
    previewUrl: "https://foodkivi.netlify.app/",
  },
  {
    id: 3,
    title: "TextCase Analyzer",
    description: "This is a text analyzer website, which convert uper to lower case letter and vice versa",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mubashir1837/TextAnalyzer",
    previewUrl: "https://texts-analyzerr.vercel.app/",
  },
  {
    id: 4,
    title: "Python Complete",
    description: "This is complete python series notes for beginner to advance",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mubashir1837/python2024",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Nextjs Portfolio",
    description: "This is a nextjs portfolio ",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mubashirali.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Road map for full stack web development",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
