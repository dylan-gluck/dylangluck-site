export const fadeUp = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};

export const fadeDown = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { delay: 0.25, duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};

export const fadeLeft = {
  hidden: { x: 50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { y: -50, opacity: 0 },
};
