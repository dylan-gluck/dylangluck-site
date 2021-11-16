import Link from "next/link";
import { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { MouseContext } from "../context/mouseContext";
import styles from "../styles/components/Header.module.scss";
import {
  logoAnimation,
  navigationAnimation,
  linkAnimation,
} from "../animations/header";
import { links } from "../data/links";

const Header = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const headerAnimation = useAnimation();
  const showHeader = () => headerAnimation.start("animate");
  const hideHeader = () => headerAnimation.start("exit");

  useEffect(() => {
    headerAnimation.start("animate");

    let isScrolling, start, end, distance;

    const handleScroll = (event) => {
      if (!start) {
        start = window.pageYOffset;
      }
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Calculate distance
        end = window.pageYOffset;
        distance = end - start;
        if (distance <= 0) {
          // Scrolling Down
          showHeader();
        } else {
          // Scrolling Up
          hideHeader();
        }
        // Reset calculations
        start = null;
        end = null;
        distance = null;
      }, 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerAnimation]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.h1
          variants={logoAnimation}
          initial="initial"
          animate={headerAnimation}
          exit="exit"
          className={styles.h1}
        >
          Dylan Navajas Gluck
        </motion.h1>
        <motion.nav
          variants={navigationAnimation}
          initial="initial"
          animate={headerAnimation}
          exit="exit"
          className={styles.nav}
        >
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              <motion.a
                variants={linkAnimation}
                onMouseEnter={() => cursorChangeHandler("navigation")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                {link.name}
              </motion.a>
            </Link>
          ))}
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
