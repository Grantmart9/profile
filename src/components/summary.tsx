"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cvData } from "@/lib/cv-data";

export function Summary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border-primary/10 shadow-lg shadow-primary/5">
        <CardContent className="p-6 relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-xl"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-primary flex items-center gap-2">
              <span className="text-primary">👨‍💻</span> Professional Summary
              <div className="h-px flex-1 bg-primary/20 ml-2"></div>
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-700 dark:text-gray-300 leading-relaxed p-4 bg-secondary/5 border-l-4 border-primary/40 rounded"
            >
              {cvData.summary}
            </motion.p>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
