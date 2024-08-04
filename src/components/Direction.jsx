import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Direction({ xDrag }) {
  const [isHide, setIsHide] = useState(false);
  const [xValue, setXValue] = useState([0, 28, 0]);

  const updateXValue = () => {
    if (window.innerWidth >= 576) {
      setXValue([0, 290, 0]);
    } else {
      setXValue([0, 114, 0]);
    }
  };

  useEffect(() => {
    updateXValue();
    window.addEventListener("resize", updateXValue);
    return () => {
      window.removeEventListener("resize", updateXValue);
    };
  }, []);

  useEffect(() => {
    const open = xDrag.on((currentX) => {
      if (currentX != 0) {
        setIsHide(true);
        open();
      }
    });
  }, [xDrag]);

  return (
    !isHide && (
      <div className="dirPosition">
        <motion.span
          initial={{
            x: 0,
          }}
          animate={{
            x: xValue,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: 1,
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.span>
        <div className="w-28 md:w-72 border-t-2 border-dashed border-gray-400" />
        <span>
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </div>
    )
  );
}

export default Direction;
