import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setShowButtons(scrollY > 200);
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          {/* Scroll Up Button */}
          <motion.button
            onClick={() => scrollTo('up')}
            className="group relative p-4 rounded-2xl glass-strong glow overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronUp className="w-6 h-6 text-primary relative z-10" />
            </motion.div>
          </motion.button>

          {/* Scroll Down Button */}
          {!isAtBottom && (
            <motion.button
              onClick={() => scrollTo('down')}
              className="group relative p-4 rounded-2xl glass-strong overflow-hidden"
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px hsl(var(--accent) / 0.3)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to bottom"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-accent/30 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ y: [2, -2, 2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6 text-accent relative z-10" />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButtons;