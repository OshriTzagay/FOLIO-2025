import { motion } from 'framer-motion';
import { ChevronDown, Terminal, Code2, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating code elements */}
      <motion.div
        className="absolute top-1/4 left-[8%] hidden lg:block"
        animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="glass-strong p-5 rounded-2xl font-mono text-sm shadow-xl shadow-primary/10">
          <span className="text-primary">const</span>
          <span className="text-foreground"> developer</span>
          <span className="text-muted-foreground"> = </span>
          <span className="text-accent">"Oshri"</span>
          <span className="text-muted-foreground">;</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-[8%] hidden lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="glass-strong p-5 rounded-2xl font-mono text-sm shadow-xl shadow-accent/10">
          <span className="text-primary">{"<"}</span>
          <span className="text-accent">FullStack</span>
          <span className="text-primary">{" />"}</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-[15%] hidden xl:block"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className="glass-strong p-4 rounded-2xl">
          <Zap className="w-6 h-6 text-yellow-500" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Terminal-style intro */}
          <motion.div
            className="inline-flex items-center gap-3 glass-strong px-6 py-3 rounded-full mb-10 shadow-lg shadow-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">~/portfolio</span>
              <span className="text-foreground"> $ </span>
              whoami
            </span>
            <motion.span
              className="w-2 h-5 bg-primary"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Name with enhanced styling */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gradient glow-text">Oshri Tzagay</span>
          </motion.h1>

          {/* Title with decorations */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
              Full-Stack Developer
            </h2>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-14 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            Motivated Full-Stack Developer with extensive experience creating complex software solutions,
            excelling in various programming languages and frameworks for high-quality code
            and user-centric experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg rounded-2xl overflow-hidden shadow-xl shadow-primary/25"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px hsl(var(--primary) / 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <Sparkles className="w-5 h-5" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="relative px-10 py-5 font-bold text-lg rounded-2xl glass-strong gradient-border overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-foreground group-hover:text-primary transition-colors">
                Contact Me
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ y: 3 }}
          >
            <span className="text-sm font-mono group-hover:text-primary">scroll down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;