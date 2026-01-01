import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Languages, Briefcase, Calendar } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const infoItems = [
    { icon: Mail, label: "Email", value: "Oshritzagay@gmail.com", href: "mailto:Oshritzagay@gmail.com" },
    { icon: Phone, label: "Phone", value: "0526367723", href: "tel:+972526367723" },
    { icon: Languages, label: "Languages", value: "Hebrew (Native), English (Advanced)" },
    { icon: Briefcase, label: "Experience", value: "3+ Years" },
    { icon: Calendar, label: "Available", value: "Open to Opportunities" },
  ];

  return (
    <section id="about" className="py-24 relative bg-dots">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-mono text-primary text-sm mb-4 block">{"// About Me"}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Who Am I?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Code block style */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-muted-foreground">about.ts</span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="text-primary">interface</span> <span className="text-accent">Developer</span> {"{"}</p>
                  <p className="pl-4"><span className="text-foreground">name</span>: <span className="text-green-400">"Oshri Tzagay"</span>;</p>
                  <p className="pl-4"><span className="text-foreground">role</span>: <span className="text-green-400">"Full-Stack Developer"</span>;</p>
                  <p className="pl-4"><span className="text-foreground">location</span>: <span className="text-green-400">"Israel"</span>;</p>
                  <p className="pl-4"><span className="text-foreground">passion</span>: <span className="text-green-400">"Building innovative solutions"</span>;</p>
                  <p className="pl-4"><span className="text-foreground">coffee</span>: <span className="text-accent">true</span>;</p>
                  <p>{"}"}</p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Info cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Adept communicator, fostering collaboration and positive team dynamics. 
                Eager to establish a prominent presence in the industry, leveraging skills 
                for innovative and impactful contributions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="glass p-4 rounded-lg group hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
