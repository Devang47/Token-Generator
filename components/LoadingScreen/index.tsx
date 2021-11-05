import React from "react";
import { motion } from "framer-motion";

function Index() {
  return (
    <motion.section
      animate={{
        opacity: 0,
        pointerEvents: "none",
        transition: { delay: 2.3, duration: 0.5 },
      }}
      className="bg-dark fixed inset-0 flex items-center justify-center z-50"
    >
      <motion.div
        animate={{
          opacity: 0,
          transition: { delay: 2, duration: 0.5 },
        }}
        className="loader"
      >
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </motion.div>
    </motion.section>
  );
}

export default Index;
