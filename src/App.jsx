"use client";
import React from "react";
import StaggeredText from "./components/StaggeredText";
import FoldablePaper from "./components/FoldablePaper";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="h-screen flex flex-col gap-2 bg-black text-white p-4">
      <StaggeredText />
      <div className="noiseDiv">
        <FoldablePaper />
      </div>
      <a href="https://ad-p.vercel.app/" className="justify-center flex gap-2">
        Portfolio
        <motion.span
          whileHover={{
            x: 10,
            duration: 0.5,
          }}
          initial={{
            x: 1,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </motion.span>
      </a>
    </div>
  );
}

export default App;
