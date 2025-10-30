"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/lib/cv-data";

export function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">🚀</span> Key Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cvData.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.2 }}
                className="bg-white dark:bg-slate-800/50 rounded-lg p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
              >
                <div className="flex items-start mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 ml-4 border-l-2 border-primary/20 pl-3">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05 * techIndex + 0.2 * index,
                        }}
                      >
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-secondary/20 border-primary/20 text-primary/90 hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                    {project.link && (
                      <a
                        href={`http://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Badge
                          variant="outline"
                          className="bg-gradient-to-r from-purple-500 to-purple-700 border-purple-400 text-purple-100 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 cursor-pointer"
                        >
                          {project.link}
                        </Badge>
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
