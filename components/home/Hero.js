import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../../styles/components/home/Hero.module.scss";

import {
  fadeUp,
  fadeDown,
  fadeLeft,
  downloadAnimation,
} from "../../animations/hero";

const Hero = () => {
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
          >
            I Create
          </motion.h2>
          <motion.h2
            variants={fadeLeft}
            key="title2"
            className={styles.titleSecond}
          >
            Meaningful
          </motion.h2>
          <motion.h2
            variants={fadeUp}
            key="title3"
            className={styles.titleThird}
          >
            User Exleriences
          </motion.h2>
          <motion.p
            variants={fadeDown}
            key="introP"
            className={styles.paragraph}
          >
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Nulla vitae elit libero, a pharetra augue.
          </motion.p>
        </motion.div>
        <Link href="/downloads/dylangluck-resume.pdf">
          <motion.a
            variants={downloadAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            whileHover="hover"
            whileTap="tap"
            className={styles.download}
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