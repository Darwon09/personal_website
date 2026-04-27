import { motion } from "framer-motion";
import aboutImg from "@/components/images/IMG_0062.jpg";

export default function AboutSection() {
  const skills = [
    "React", "Node.js", "Python", "AWS", "TypeScript", "PostgreSQL", "Docker", "GraphQL"
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn more about me below!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-foreground">
              I'm a student at the University of California, Berkeley, pursuing a B.A. in Computer Science and Data Science. 
              I'm interested in working in many fields wether it be in software engineering, data science, or machine learning.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              I enjoy learning new things everyday, creating new projects, and always looking for new challenges.
              On my free time I love to play basketball, tennis, hang out with friends, playing poker,and eat a lot of food. 
            </p>
            
            <p className="text-blue-600 text-2xl leading-relaxed text-center font-bold">
                Some of my skills include:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="bg-muted p-4 rounded-xl text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-sm text-foreground">{skill}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={aboutImg} 
              alt="Modern minimalist workspace with MacBook and monitor" 
              className="rounded-2xl shadow-xl w-3/4 mx-auto object-contain max-h-150"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
