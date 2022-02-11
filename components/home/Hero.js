import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { motion } from "framer-motion";
import { MouseContext } from "../../context/mouseContext";
import { heroContent } from "../../data/heroContent";

import styles from "../../styles/components/home/Hero.module.scss";
import {
  fadeUp,
  fadeDown,
  fadeLeft,
  downloadAnimation,
} from "../../animations/hero";

function ExposeMeaning(props) {
  const titles = props.titles.map((title, i) => (
    <span key={i} className={i < 1 ? styles.titleVisible : styles.titleHidden}>
      {title}
    </span>
  ));
  return titles;
}

function Hero() {
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
            onMouseEnter={() => cursorChangeHandler("expose")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            {heroContent.title1}
          </motion.h2>
          <motion.h2
            variants={fadeLeft}
            key="title2"
            className={styles.titleSecond}
            onMouseEnter={() => cursorChangeHandler("expose")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <ExposeMeaning titles={heroContent.title2} />
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            key="title3"
            className={styles.titleThird}
            onMouseEnter={() => cursorChangeHandler("expose")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            {heroContent.title3}
          </motion.h2>
          <motion.div
            variants={fadeDown}
            key="introP"
            className={styles.paragraph}
            onMouseEnter={() => cursorChangeHandler("default")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <ReactMarkdown>{heroContent.deck}</ReactMarkdown>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
