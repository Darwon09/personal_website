import { useState } from "react";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  companyLogo?: string;
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<string>("exp1");

  const experiences: Experience[] = [
    {
      id: "exp1",
      company: "Fanduel",
      position: "Software Engineer",
      duration: "May 2025 - August 2025",
      location: "Atlanta, GA",
      description: "Developing scalable web applications and leading frontend initiatives for a fast-growing startup.",
      responsibilities: [
        "Engineered and deployed a containerized, machine learning–powered alert prioritization service, achieving an 89% F1 Score and integrating modular feature analysis components into security operations platforms.",
        "Developed scalable, fault-tolerant ETL pipelines in Python using the Jira API, Terraform, AWS Lambda, and S3 to automate ingestion, preprocessing, and normalization of log data, enabling continuous model retraining and real-time analytics.",
        "Designed and implemented feature engineering modules leveraging Pandas, NumPy, and custom metadata enrichment pipelines to process heterogeneous security signal types, producing optimized input vectors for high-throughput training.",
        "Collaborated on developing a risk modeling tool to quantify projected revenue loss under various cyberattack scenarios, integrating real-time threat data and probabilistic analysis."
      ],
      technologies: ["Pandas", "Jira API", "Python", "AWS"],
      achievements: [
        "Created a succesful working Machine Learning Model",
        "Updated and deployed data pipelines",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      companyLogo: "data:image/png;base64,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"
    },
    {
      id: "exp2",
      company: "Inductive Robotics",
      position: "Software Engineer",
      duration: "May 2024 - August 2024",
      location: "Remote",
      description: "Designed and implemented data pipelines and analytics systems for enterprise clients.",
      responsibilities: [
        "Pioneered the development of a full stack development project creating an interactive dashboard used by clients, enabling users to efficiently access and analyze key information, and collaborated with a dynamic team to design and develop a new, user-friendly website.",
        "Created their first mobile application to enhance user interaction, by a 100%, with robotic products, implementing key features using Java and React Native.",
        "Designed and implemented a robust database with the use of Firebase to track and manage essential data, ensuring data integrity and accessibility.",
      ],
      technologies: ["Python", "Apache Spark", "Kafka", "Snowflake", "Docker"],
      achievements: [
        "Reduced data processing time from hours to minutes",
        "Built automated data quality monitoring system",
        "Saved company $100k annually through infrastructure optimization"
      ],
      companyLogo: "data:image/jpeg;base64,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"
    },
    {
      id: "exp3",
      company: "Web Dev at Berkeley",
      position: "Full Stack Developer",
      duration: "Febuary 2025 - May 2025",
      location: "Berkeley, CA",
      description: "Full-stack development for multiple client projects and internal tools.",
      responsibilities: [
        "Developed end-to-end web applications",
        "Managed database design and optimization",
        "Integrated third-party APIs and services",
        "Participated in client meetings and requirement gathering"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Firebase", "Stripe API"],
      achievements: [
        "Delivered 5+ client projects on time and under budget",
        "Built reusable component library used across projects",
        "Increased client satisfaction scores by 25%"
      ],
      companyLogo: "data:image/jpeg;base64,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"
    },
    {
        id: "exp4",
        company: "Web Dev at Berkeley",
        position: "VP of Education",
        duration: "Present",
        location: "Berkeley, CA",
        description: "Teach a 100+ students about full stack development",
        responsibilities: [
          "Create lecture slides and demos to present to students",
          "Teach concepts like HTML, CSS, Databases, and APIs",
          "Hold live demos for students to better understand concepts",
          "Grade and create homework for students that allow them to build understanding for course concepts"
        ],
        technologies: ["React", "Nextjs", "MongoDB", "Firebase", "SQL"],
        achievements: ["Students were able to complete 3 full stack development projects", 
            "Achieved high student satisfaction ratings through end-of-term course evaluations",
            "Fostered a collaborative classroom environment, resulting in higher peer-to-peer engagement and teamwork.",
            "Supported diverse learners through one-on-one tutoring, office hours, and inclusive teaching practices."
        ],
        companyLogo: "data:image/jpeg;base64,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"
      }
  ];

  const currentExperience = experiences.find(exp => exp.id === selectedExperience) || experiences[0];

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">Where I worked and the achievements</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {experiences.map((exp) => (
                <motion.button
                  key={exp.id}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedExperience === exp.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                      : 'border-border bg-card hover:border-blue-300 hover:bg-blue-25 dark:hover:bg-blue-900/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-semibold ${
                      selectedExperience === exp.id ? 'text-blue-700 dark:text-blue-300' : 'text-foreground'
                    }`}>
                      {exp.position}
                    </h3>
                    <span className="text-sm text-muted-foreground">{exp.duration.split(' - ')[1] || exp.duration.split(' - ')[0]}</span>
                  </div>
                  <p className={`text-sm ${
                    selectedExperience === exp.id ? 'text-blue-600 dark:text-blue-400' : 'text-muted-foreground'
                  }`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{currentExperience.position}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{currentExperience.company}</span>
                      <span className="text-muted-foreground">{currentExperience.duration}</span>
                      <span className="text-muted-foreground">{currentExperience.location}</span>
                    </div>
                  </div>
                  {currentExperience.companyLogo && (
                    <div className="ml-6 flex-shrink-0">
                      <img 
                        src={currentExperience.companyLogo} 
                        alt={`${currentExperience.company} logo`}
                        className="h-20 w-auto object-contain bg-white rounded-lg p-2 shadow-sm border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {currentExperience.responsibilities.map((responsibility, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {currentExperience.achievements && currentExperience.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {currentExperience.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="text-green-500 mt-1">✓</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
