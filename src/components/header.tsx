"use client";

import { motion } from "framer-motion";
import { cvData } from "@/lib/cv-data";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-12 relative"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent mb-4"
      >
        {cvData.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
      >
        {cvData.title}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6"
      >
        <span className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            📞
          </span>
          {cvData.contact.phone}
        </span>
        <span className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            ✉
          </span>
          {cvData.contact.email}
        </span>
        <span className="flex items-center gap-2 hover:text-primary transition-colors">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            📍
          </span>
          {cvData.contact.location}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-4"
      >
        <a
          href={`https://${cvData.contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <span className="text-lg">🔗</span>
          <span>LinkedIn</span>
        </a>
      </motion.div>
    </motion.header>
  );
}
