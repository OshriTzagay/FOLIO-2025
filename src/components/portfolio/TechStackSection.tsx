import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Tech {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

const technologies: Tech[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', color: 'from-orange-500 to-orange-600' },
  { name: 'CSS3', category: 'frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'LESS', category: 'frontend', color: 'from-indigo-400 to-indigo-500' },
  { name: 'SCSS', category: 'frontend', color: 'from-pink-500 to-pink-600' },
  { name: 'JavaScript', category: 'frontend', color: 'from-yellow-400 to-yellow-500' },
  { name: 'ES6', category: 'frontend', color: 'from-yellow-500 to-amber-500' },
  { name: 'TypeScript', category: 'frontend', color: 'from-blue-600 to-blue-700' },
  { name: 'React.js', category: 'frontend', color: 'from-cyan-400 to-cyan-500' },
  { name: 'React Native', category: 'frontend', color: 'from-cyan-500 to-teal-500' },
  { name: 'React Hooks', category: 'frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'Redux', category: 'frontend', color: 'from-purple-500 to-purple-600' },
  { name: 'Redux Toolkit', category: 'frontend', color: 'from-purple-600 to-violet-600' },
  { name: 'Bootstrap', category: 'frontend', color: 'from-violet-500 to-purple-600' },
  { name: 'MUI', category: 'frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'Jest', category: 'tools', color: 'from-red-500 to-red-600' },
];

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '⚛️' },
  { key: 'tools', label: 'Testing & Tools', icon: '🛠️' },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.span
              className="font-mono text-primary text-sm mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {"// Tech Stack"}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gradient">Skills & Technologies</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Categories */}
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(t => t.category === category.key);
            if (categoryTechs.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + categoryIndex * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {categoryTechs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + categoryIndex * 0.2 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="relative px-4 py-2 glass rounded-lg font-medium text-sm cursor-default overflow-hidden">
                        {/* Gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        
                        {/* Tag syntax decoration */}
                        <span className="relative z-10 flex items-center gap-1">
                          <span className="text-primary group-hover:text-white/70 transition-colors">{"<"}</span>
                          <span className="group-hover:text-white transition-colors">{tech.name}</span>
                          <span className="text-primary group-hover:text-white/70 transition-colors">{" />"}</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Code snippet decoration */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="glass rounded-xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-muted-foreground">skills.json</span>
              </div>
              <div className="text-muted-foreground overflow-x-auto">
                <p>{"{"}</p>
                <p className="pl-4"><span className="text-primary">"totalTechnologies"</span>: <span className="text-accent">{technologies.length}</span>,</p>
                <p className="pl-4"><span className="text-primary">"primaryFocus"</span>: <span className="text-green-400">"Full-Stack Development"</span>,</p>
                <p className="pl-4"><span className="text-primary">"favoriteStack"</span>: <span className="text-green-400">"React + TypeScript"</span>,</p>
                <p className="pl-4"><span className="text-primary">"alwaysLearning"</span>: <span className="text-accent">true</span></p>
                <p>{"}"}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
