import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <span>© {currentYear} Oshri Tzagay. All rights reserved.</span>
          </p>

          {/* Built with */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.span>
            using React & TypeScript
          </p>

          {/* Version */}
          <p className="font-mono text-xs text-muted-foreground">
            v1.0.0
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
