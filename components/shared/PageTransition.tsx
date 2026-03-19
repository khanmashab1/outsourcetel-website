"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Page transition wrapper
 * Provides smooth fade + slide animations between pages
 */
export function PageTransition({ children }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}