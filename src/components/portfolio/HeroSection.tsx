import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating code elements */}
      <motion.div
        className="absolute top-1/4 left-[10%] hidden md:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="glass p-4 rounded-lg font-mono text-sm text-muted-foreground">
          <span className="text-primary">const</span> developer = <span className="text-accent">"Oshri"</span>;
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-[10%] hidden md:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <div className="glass p-4 rounded-lg font-mono text-sm text-muted-foreground">
          <span className="text-primary">{"<"}</span>
          <span className="text-accent">FullStack</span>
          <span className="text-primary">{" />"}</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style intro */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">~/portfolio</span> $ whoami
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gradient">Oshri Tzagay</span>
          </motion.h1>

          {/* Title with typing effect */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Code2 className="w-6 h-6 text-primary" />
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/80">
              Full-Stack Developer
            </h2>
            <Code2 className="w-6 h-6 text-accent" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Motivated Full-Stack Developer with extensive experience creating complex software solutions,
            excelling in various programming languages and frameworks for high-quality code
            and user-centric experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass font-semibold rounded-lg transition-all duration-300 hover:bg-secondary gradient-border"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-mono">scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
