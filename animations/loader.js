export const lockupAnimation = {
  visible: {
    transition: { delayChildren: 0.5, staggerChildren: 0.15 },
  },
  exit: {
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
};

export const titleAnimtion = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.6, 0.01, -0.05, 0.9] },
  },
};

export const svgAnimation = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const circleAnimation = {
  hidden: {
    opacity: 1,
    stroke: "#EFA434",
    strokeWidth: 15,
    pathLength: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    stroke: "#EFA434",
    strokeWidth: 15,
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
  exit: {
    opacity: 0,
    stroke: "#EFA434",
    strokeWidth: 15,
    pathLength: 1,
  },
};

export const backgroundAnimation = {
  hidden: {
    background: "#242424",
    height: "0vh",
    opacity: 1,
  },
  visible: {
    background: "#242424",
    height: "100vh",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    background: "#efa434",
    height: "100vw",
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
