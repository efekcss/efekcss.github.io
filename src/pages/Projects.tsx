import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Platform",
      description: "A comprehensive dashboard for tracking sales, user behavior, and inventory. Built with React, Next.js, and Tailwind CSS. Integrates with a custom Python backend for data processing.",
      tags: ["React", "Next.js", "Python", "Data Visualization"],
      github: "https://github.com/efekcss",
      demo: "#",
      image: "https://picsum.photos/seed/proj1/800/600",
      year: "2023"
    },
    {
      id: 2,
      title: "Machine Learning Pipeline",
      description: "An automated pipeline for data cleaning, feature engineering, and model training. Designed to handle large datasets efficiently using PySpark and scikit-learn.",
      tags: ["Python", "PySpark", "Machine Learning", "Docker"],
      github: "https://github.com/efekcss",
      demo: "",
      image: "https://picsum.photos/seed/proj2/800/600",
      year: "2023"
    },
    {
      id: 3,
      title: "Statistical Analysis Tool",
      description: "A web-based tool for performing common statistical tests and generating reports. Aimed at researchers and students who need quick, reliable analysis without complex software.",
      tags: ["R", "Shiny", "Statistics", "Web App"],
      github: "https://github.com/efekcss",
      demo: "#",
      image: "https://picsum.photos/seed/proj3/800/600",
      year: "2022"
    },
    {
      id: 4,
      title: "Portfolio Website v1",
      description: "My previous personal website, built with vanilla HTML, CSS, and JavaScript. Focuses on performance and accessibility.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
      github: "https://github.com/efekcss",
      demo: "#",
      image: "https://picsum.photos/seed/proj4/800/600",
      year: "2021"
    }
  ];

  return (
    <div className="space-y-16">
      <header className="max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-neutral-400 leading-relaxed"
        >
          A selection of my recent work, ranging from web development to data science and machine learning pipelines.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group flex flex-col bg-neutral-900/40 rounded-3xl overflow-hidden border border-neutral-800/50 hover:border-neutral-700 transition-colors"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white">
                {project.year}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-full border border-neutral-700/50">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-800/50">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors ml-auto"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
