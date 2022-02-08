import Link from "next/link";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MouseContext } from "../../context/mouseContext";
import styles from "../../styles/components/home/Hero.module.scss";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  downloadAnimation,
} from "../../animations/hero";

const Hero = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{
            delayChildren: 1,
            staggerChildren: 0.15,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className={styles.lockup}
        >
          <motion.h2
            variants={fadeUp}
            key="title1"
            className={styles.titleFirst}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            I Create
          </motion.h2>
          <motion.h2
            variants={fadeLeft}
            key="title2"
            className={styles.titleSecond}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Meaningful
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            key="title3"
            className={styles.titleThird}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            User Experiences
          </motion.h2>
          <motion.p
            variants={fadeDown}
            key="introP"
            className={styles.paragraph}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Bridging the gap between design and usability. Currently:
            Engineering Team Lead @ Unqork
          </motion.p>
        </motion.div>
        <Link href="/downloads/dylangluck-resume.pdf" passHref>
          <motion.a
            variants={downloadAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            className={styles.download}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <span>Download Resume</span>
            <i className="fa-solid fa-arrow-down"></i>
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
