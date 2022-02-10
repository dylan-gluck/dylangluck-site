import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MouseContext } from "../../context/mouseContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";

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
          <motion.div
            variants={fadeDown}
            key="introP"
            className={styles.paragraph}
            onMouseEnter={() => cursorChangeHandler("difference")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <ReactMarkdown>
              **Ask Yourself:** Can we break away from the manupulative
              practices introduced by the 2010 tech companies and take ownership
              of more than our data? Read the [white paper](#).
            </ReactMarkdown>
          </motion.div>
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
            <span>Explore New Worlds</span>
            <FontAwesomeIcon icon={faTree} />
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
