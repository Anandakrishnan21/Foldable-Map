import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import React, { useState } from "react";
import Direction from "./Direction";

function FoldablePaper() {
  const xDrag = useMotionValue(0);
  const [isFolded, setIsFolded] = useState(true);
  const leftTranslate = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const rightTranslate = useTransform(xDrag, [0, 300], ["-99.9%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);

  useMotionValueEvent(xDrag, "change", (currentX) => {
    if (currentX > 260) {
      setIsFolded(false);
    } else {
      setIsFolded(true);
    }
  });

  return (
    <>
      <motion.div
        initial="folded"
        animate={isFolded ? "folded" : "open"}
        variants={{
          open: { scale: 1 },
          folded: { scale: 0.9 },
        }}
        whileHover={{
          rotate: isFolded ? "2deg" : "0deg",
          duration: 0.5,
        }}
        className="outerDiv"
      >
        <div className="innerDiv">
          <motion.div
            style={{
              x: leftTranslate,
              skewY: "-1deg",
            }}
            className="mapImage origin-bottom-right shadow-2xl"
          />
          <motion.div
            style={{
              scaleX: centerScale,
            }}
            className="mapImage brightness-[0.75]"
          />
          <motion.div
            style={{
              x: rightTranslate,
              skewY: "1deg",
            }}
            className="mapImage origin-bottom-left shadow-2xl"
          />
        </div>
        <motion.div
          drag="x"
          _dragX={xDrag}
          dragConstraints={{
            left: 0,
            right: 300,
          }}
          className="dragDiv"
        />
      </motion.div>
      <Direction xDrag={xDrag} />
    </>
  );
}

export default FoldablePaper;
