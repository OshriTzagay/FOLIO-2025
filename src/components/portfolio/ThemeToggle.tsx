import { motion } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl glass-strong group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100"
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Sparkles on hover */}
      <motion.div
        className="absolute -top-1 -right-1"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
      >
        <Sparkles className="w-3 h-3 text-accent" />
      </motion.div>

      {/* Icon container */}
      <div className="relative w-5 h-5">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;