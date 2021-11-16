export const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};

export const fadeDown = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};

export const fadeLeft = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};

export const downloadAnimation = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
  tap: { scale: 0.9, transition: { duration: 0.2 } },
};
