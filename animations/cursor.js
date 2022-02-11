export const ringVariants = {
  default: {
    width: "2rem",
    height: "2rem",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#efa434",
  },
  navigation: {
    width: "5rem",
    height: "5rem",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#2a2a2a",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  expose: {
    width: "12rem",
    height: "12rem",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "transparent",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  difference: {
    width: "12rem",
    height: "12rem",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "transparent",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const dotVariants = {
  default: {
    width: 4,
    height: 4,
    background: "#efa434",
  },
  navigation: {
    width: 4,
    height: 4,
    background: "transparent",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  expose: {
    zIndex: 0,
    width: "11.5rem",
    height: "11.5rem",
    background: "#000",
    mixBlendMode: "normal",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  difference: {
    width: "11.5rem",
    height: "11.5rem",
    background: "#fff",
    mixBlendMode: "difference",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
