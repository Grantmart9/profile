"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cvData } from "@/lib/cv-data";

export function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">💼</span> Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <div className="space-y-8 relative">
              {cvData.experience.map((exp, index) => (
                <motion.div
                  key={`${exp.position}-${exp.company}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="pl-6 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-4px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-slate-800"></div>

                  <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-lg font-semibold text-primary dark:text-primary">
                        {exp.position}
                      </h3>
                      <span className="text-sm bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full mt-1 sm:mt-0 inline-flex items-center">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-accent"></span>
                      {exp.company}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 ml-2 border-l-2 border-primary/10 pl-3">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
