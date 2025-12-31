import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Globe, Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "oshritzagay@gmail.com",
      action: () => copyToClipboard("oshritzagay@gmail.com", "email"),
      copied: copiedEmail,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "052-636-7723",
      action: () => copyToClipboard("+972526367723", "phone"),
      copied: copiedPhone,
      gradient: "from-green-500 to-teal-600",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
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
              {"// Contact"}
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gradient">Let's Connect</span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.p
              className="max-w-md mx-auto mt-6 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              Ready to collaborate on your next project? Feel free to reach out!
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.button
                  key={method.label}
                  onClick={method.action}
                  className="group glass rounded-xl p-6 text-left w-full hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.gradient}`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      className="p-2 rounded-lg bg-secondary text-secondary-foreground"
                      animate={method.copied ? { scale: [1, 1.2, 1] } : {}}
                    >
                      {method.copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </motion.div>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono mb-1">{method.label}</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">{method.value}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {method.copied ? "Copied!" : "Click to copy"}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Direct email link */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <a
                href="mailto:oshritzagay@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Me a Message
              </a>
            </motion.div>

            {/* Code signature */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              <div className="glass rounded-xl p-6 font-mono text-sm max-w-md mx-auto">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-muted-foreground">contact.sh</span>
                </div>
                <div className="text-muted-foreground space-y-1">
                  <p><span className="text-primary">$</span> echo "Thanks for visiting!"</p>
                  <p className="text-accent">→ Thanks for visiting!</p>
                  <p><span className="text-primary">$</span> git commit -m "Looking forward to connecting"</p>
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
