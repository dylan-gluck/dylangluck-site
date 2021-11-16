export const logoAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  exit: { y: -50, opacity: 0 },
};

export const navigationAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0 },
};

export const linkAnimation = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: { y: -50, opacity: 0 },
};
