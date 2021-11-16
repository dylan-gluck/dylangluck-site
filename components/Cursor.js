import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseContext } from "../context/mouseContext";
import { ringVariants, dotVariants } from "../animations/cursor";

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor">
      <motion.div
        variants={ringVariants}
        initial="default"
        animate={cursorType}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        className="ring"
      ></motion.div>
      <motion.div
        variants={dotVariants}
        initial="default"
        animate={cursorType}
        style={{
          left: cursorX,
          top: cursorY,
        }}
        className={"dot " + cursorType}
      ></motion.div>
    </div>
  );
};

export default Cursor;
