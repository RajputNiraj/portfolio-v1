"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchiveNotice() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[9998]"
          />

          {/* Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Popup Content */}
            <div
              className="relative w-full max-w-sm rounded-lg bg-white p-6 text-center shadow-xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 shadow-md transition-all hover:bg-gray-100 hover:text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                aria-label="Close notice"
              >
                ✕
              </button>
              <p className="text-gray-900 dark:text-gray-100">
                This portfolio is no longer maintained. A new version is coming
                soon!
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
