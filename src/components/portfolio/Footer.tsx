import { motion } from 'framer-motion';
import { Heart, Code2, Github, Linkedin, Mail, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/oshri-el-tzagay-873482226/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Oshritzagay@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden bg-noise">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with logo and back to top */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <motion.div 
              className="p-3 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25"
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <div>
              <h3 className="font-bold text-2xl text-gradient-static">Oshri.dev</h3>
              <p className="text-sm text-muted-foreground font-mono">Full-Stack Developer</p>
            </div>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-6 py-3 glass-strong rounded-2xl hover-lift"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              Back to top
            </span>
            <motion.div
              animate={{ y: [2, -2, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4 text-primary" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex flex-col items-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-muted-foreground">Let's connect</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group p-4 glass-strong rounded-2xl hover:neon-border transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>© {currentYear} Oshri Tzagay.</span>
          </p>

          {/* Divider */}
          <span className="hidden md:block text-border">•</span>

          {/* Built with */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            using React & TypeScript
          </p>

          {/* Divider */}
          <span className="hidden md:block text-border">•</span>

          {/* Version */}
          <p className="font-mono text-xs text-muted-foreground glass px-3 py-1 rounded-full">
            v1.0.0
          </p>
        </motion.div>

        {/* Terminal decoration */}
        <motion.div
          className="mt-12 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass rounded-xl p-4 font-mono text-xs text-center">
            <span className="text-primary">$</span>
            <span className="text-muted-foreground"> echo </span>
            <span className="text-green-400">"Thanks for visiting!"</span>
            <motion.span
              className="inline-block w-1.5 h-3 bg-primary ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;