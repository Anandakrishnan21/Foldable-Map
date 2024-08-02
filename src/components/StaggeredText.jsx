import React from "react";
import { motion } from "framer-motion";

function StaggeredText() {
  const text = "FOLDABLE MAP";
  const defaultAnimation = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.1,
      }}
    >
      {text.split(" ").map((word, index) => (
        <span className="inline-block" key={index}>
          {index > 0 && <span>&nbsp;</span>}
          {word.split("").map((char, wordIndex) => (
            <motion.span
              variants={defaultAnimation}
              key={wordIndex}
              className="inline-block font-semibold text-lg md:text-2xl"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}

export default StaggeredText;
