import Link from "next/link";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "../../styles/components/home/Intro.module.scss";

import {
  cubeAnimation,
  pyramidAnimation,
  fadeUp,
} from "../../animations/intro";

const Intro = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1000], [-100, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [-200, 0]);

  const [cubeRef, cubeInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const [contentRef, contentInView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wireframes}>
          <motion.img
            ref={cubeRef}
            variants={cubeAnimation}
            initial="hidden"
            animate={cubeInView ? "visible" : "hidden"}
            style={{ y: y1 }}
            className={styles.cube}
            src="/images/cube.png"
            alt="Cube Wireframe"
            key="cube"
          />
          <motion.img
            variants={pyramidAnimation}
            initial="hidden"
            animate={cubeInView ? "visible" : "hidden"}
            style={{ y: y2 }}
            className={styles.pyramid}
            src="/images/pyramid.png"
            alt="Pyramid Wireframe"
            key="pyramid"
          />
        </div>
        <motion.div
          ref={contentRef}
          animate={contentInView ? "visible" : "hidden"}
          transition={{ delayChildren: 0.5, staggerChildren: 0.15 }}
          className={styles.lockup}
        >
          <motion.h5 key="0" variants={fadeUp}>
            Who is Dylan?
          </motion.h5>
          <motion.h2 key="1" variants={fadeUp}>
            UX Designer and Engineer based in <strong>California</strong>
          </motion.h2>
          <Link href="/about">
            <motion.a key="2" variants={fadeUp} className={styles.basicLink}>
              Learn More About Me
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
