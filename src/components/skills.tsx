"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/lib/cv-data";

export function Skills() {
  const skillCategories = [
    { title: "Frontend", skills: cvData.skills.frontend },
    { title: "Backend", skills: cvData.skills.backend },
    { title: "Database", skills: cvData.skills.database },
    { title: "Cloud & DevOps", skills: cvData.skills.cloud },
    { title: "AI Integration", skills: cvData.skills.ai },
    { title: "Automation & IoT", skills: cvData.skills.automation },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">⚡</span> Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-4 rounded-lg bg-secondary/10 border border-secondary/20"
              >
                <h3 className="font-semibold mb-3 text-primary dark:text-primary flex items-center gap-2">
                  {category.title}
                  <div className="h-px flex-1 bg-primary/20"></div>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05 * skillIndex + 0.2 * index,
                      }}
                    >
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white dark:bg-slate-800 border border-primary/20 text-primary/90 hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
