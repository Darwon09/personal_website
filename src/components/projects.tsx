import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import articleImg from "@/components/images/article.png";
import appimg from "@/components/images/appimage.png";
import poly from "@/components/images/polymarket.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Article Semantic Comprehension",
      description: "Articles are often misleading, this Accessibility technology determines bias in language from articles as-well as ensure summarisation",
      image: articleImg,
      technologies: ["Taipy", "Together ai", "Hume ai", "Python"],
      demoUrl: "https://devpost.com/software/article-semantic-comprehension",
      githubUrl: null
    },
    {
      title: "BetAny",
      description: "BetAny is a mobile app that allows users to be able to make custom bets with their friends using coins that the app provides every 24 hours!",
      image: appimg,
      technologies: ["Xcode", "Swift"],
      demoUrl: null,
      githubUrl: "https://github.com/Darwon09/GamblingApp_Made"
    },
    {
      title: "Whale Tracker",
      description: "This is an app that allows user to track what the top polymarket bettors are placing live at any current given moment!",
      image: poly,
      technologies: ["Flask", "Python"],
      demoUrl: null,
      githubUrl: "https://github.com/Darwon09/Whale_watcher"
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">A selection of work I'm most proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.demoUrl as string, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.githubUrl as string, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
