"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cvData } from "@/lib/cv-data";

export function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">🎓</span> Education
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cvData.education.map((edu, index) => (
              <motion.div
                key={`${edu.degree}-${edu.institution}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-white to-secondary/5 dark:from-slate-800/80 dark:to-primary/5 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <h3 className="text-lg font-semibold text-primary dark:text-primary">
                    {edu.degree}
                  </h3>
                </div>

                <div className="flex justify-between items-center mb-2 ml-4">
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
