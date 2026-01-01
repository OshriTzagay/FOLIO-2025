import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, Code, Layers } from 'lucide-react';

interface Tech {
  name: string;
  icon?: string;
  color: string;
  glow: string;
}

const technologies: Tech[] = [
  // Frontend Core
  { name: 'TypeScript', color: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/50' },
  { name: 'JavaScript', color: 'from-yellow-400 to-amber-500', glow: 'shadow-yellow-500/50' },
  { name: 'React.js', color: 'from-cyan-400 to-cyan-600', glow: 'shadow-cyan-500/50' },
  { name: 'Next.js', color: 'from-gray-700 to-gray-900', glow: 'shadow-gray-500/50' },
  { name: 'React Native', color: 'from-cyan-500 to-teal-500', glow: 'shadow-teal-500/50' },
  // Backend
  { name: 'PHP', color: 'from-indigo-500 to-purple-600', glow: 'shadow-indigo-500/50' },
  // State Management
  { name: 'Redux', color: 'from-purple-500 to-purple-700', glow: 'shadow-purple-500/50' },
  { name: 'Redux Toolkit', color: 'from-violet-500 to-purple-600', glow: 'shadow-violet-500/50' },
  // Styling
  { name: 'HTML5', color: 'from-orange-500 to-red-500', glow: 'shadow-orange-500/50' },
  { name: 'CSS3', color: 'from-blue-500 to-indigo-500', glow: 'shadow-blue-500/50' },
  { name: 'SCSS', color: 'from-pink-500 to-rose-600', glow: 'shadow-pink-500/50' },
  { name: 'LESS', color: 'from-indigo-400 to-blue-500', glow: 'shadow-indigo-500/50' },
  { name: 'MUI', color: 'from-blue-500 to-blue-700', glow: 'shadow-blue-500/50' },
  // Databases
  { name: 'SQL', color: 'from-orange-400 to-orange-600', glow: 'shadow-orange-500/50' },
  { name: 'MongoDB', color: 'from-green-500 to-green-700', glow: 'shadow-green-500/50' },
  { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-700', glow: 'shadow-blue-500/50' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 200,
      damping: 15
    } 
  },
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-32 relative overflow-hidden bg-noise">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-6"
              variants={itemVariants}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">my_skills.tsx</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground max-w-md mx-auto"
              variants={itemVariants}
              dir="rtl"
            >
              הטכנולוגיות והכלים שאני עובד איתם יום-יום
            </motion.p>
            
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mt-8"
              variants={itemVariants}
            />
          </div>

          {/* Tech Grid - Hexagon style */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
              >
                <div className="relative">
                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  />
                  
                  {/* Card */}
                  <div className={`relative p-5 md:p-6 rounded-2xl glass-strong border border-border/50 group-hover:border-primary/50 transition-all duration-500 overflow-hidden`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                          animation: 'shimmer 2s ease-in-out infinite',
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      {/* Icon placeholder with gradient */}
                      <motion.div 
                        className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg ${tech.glow}`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </motion.div>
                      
                      {/* Name */}
                      <p className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                        {tech.name}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { icon: Code, label: 'Technologies', value: technologies.length.toString(), color: 'text-primary' },
              { icon: Layers, label: 'Years Experience', value: '3+', color: 'text-accent' },
              { icon: Zap, label: 'Projects', value: '10+', color: 'text-yellow-500' },
              { icon: Sparkles, label: 'Focus', value: 'Full-Stack', color: 'text-green-500' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center group hover-lift"
                variants={itemVariants}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal decoration */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <div className="glass-strong rounded-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                </div>
                <span className="text-muted-foreground flex-1 text-center">~/oshri/skills.json</span>
              </div>
              <div className="text-muted-foreground space-y-1">
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