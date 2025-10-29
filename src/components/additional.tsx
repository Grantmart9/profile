"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/lib/cv-data";

export function Additional() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardHeader className="border-b border-primary/10 bg-gradient-to-r from-primary/5 to-transparent">
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="text-primary">✨</span> Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-primary/5 dark:from-slate-800/80 dark:to-primary/10 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-primary dark:text-primary mb-3 flex items-center gap-2">
                <span className="text-primary text-lg">📝</span> Thesis
                <div className="h-px flex-1 bg-primary/20 ml-2"></div>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {cvData.additional.thesis}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-accent/5 dark:from-slate-800/80 dark:to-accent/10 p-4 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-accent dark:text-accent mb-3 flex items-center gap-2">
                <span className="text-accent text-lg">🤝</span> Volunteering
                <div className="h-px flex-1 bg-accent/20 ml-2"></div>
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {cvData.additional.volunteering}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-gradient-to-br from-white to-secondary/5 dark:from-slate-800/80 dark:to-secondary/10 p-4 rounded-lg border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-secondary-foreground dark:text-secondary mb-3 flex items-center gap-2">
                <span className="text-secondary-foreground dark:text-secondary text-lg">
                  🌟
                </span>{" "}
                Interests
                <div className="h-px flex-1 bg-secondary/20 ml-2"></div>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cvData.additional.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                  >
                    <Badge
                      key={interest}
                      variant="outline"
                      className="bg-white dark:bg-slate-800 border-secondary/20 text-secondary-foreground/90 dark:text-secondary/90 hover:bg-secondary hover:text-white transition-colors duration-300"
                    >
                      {interest}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
