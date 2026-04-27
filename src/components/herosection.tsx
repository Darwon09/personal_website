import { Button } from "@/components/ui/button";
import headshotImg from "@/components/images/DSCF9565 (1) copy.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Software Engineer", "Data Engineer", "Full Stack Developer"];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Hello, I'm <span className="text-blue-600 dark:text-sky-400">Darren</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a <span className="text-blue-600 dark:text-sky-400 font-semibold">{currentText}</span>
              <span className="animate-pulse text-blue-600">|</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-medium border-2 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View My Work
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src={headshotImg}
                alt="Professional headshot of Darren" 
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-square"
              />
              <div className="absolute -z-10 top-8 left-8 w-72 h-72 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
