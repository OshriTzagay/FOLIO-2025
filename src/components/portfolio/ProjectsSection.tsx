import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, Building2 } from 'lucide-react';

interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Trado Marketplace",
    company: "Trado Solutions LTD.",
    period: "Jun 2022 - Present",
    description: "A complete end-to-end secure and anonymous Marketplace app for retailers and merchants buying wholesale goods.",
    tags: ["React Native", "Redux", "TypeScript", "Full-Stack"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Truckit",
    company: "Trado Solution & Beit-Alpha CO-OP",
    period: "2022 - 2023",
    description: "Comprehensive shipping application tailored for Beit Alfa Quarry, streamlining the delivery order process with dedicated screens for clients, delivery companies, and drivers.",
    tags: ["React", "Mobile", "Logistics", "Full-Stack"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "EIFL",
    company: "Ethiopian Israel Football League",
    period: "2023",
    description: "Comprehensive mobile application for the Ethiopian Israel Football League, serving as a central hub for game-related information, player details, team statistics, and live updates.",
    tags: ["React Native", "Sports", "Real-time", "Mobile"],
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Tech-Career",
    company: "Community Support Platform",
    period: "2023 - Present",
    description: "Community Social Support Platform for War-Affected Adults. Providing a vital link between war-affected adults and professionals, fostering community resilience and mental well-being.",
    tags: ["React", "Social Impact", "Community", "Full-Stack"],
    gradient: "from-orange-500 to-red-600",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative bg-dots">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.span
              className="font-mono text-primary text-sm mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// Projects"}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gradient">Featured Work</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                <div className="glass rounded-xl overflow-hidden h-full">
                  {/* Gradient header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-6">
                    {/* Project number */}
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-mono text-4xl font-bold text-muted-foreground/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} opacity-80`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>

                    {/* Company & Period */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {project.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-secondary rounded-full text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal decoration */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span>
              <span>git log --oneline | wc -l</span>
              <span className="text-accent">→ {projects.length} major projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
