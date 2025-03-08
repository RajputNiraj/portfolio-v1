"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    /*
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
    */

    <motion.div
      className="my-24 h-16 hidden sm:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="h-8 w-5 rounded-full border-2 border-gray-400 dark:border-gray-600">
        <motion.div
          className="mx-auto mt-1 h-2 w-1 rounded-full bg-gray-400 dark:bg-gray-600"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
