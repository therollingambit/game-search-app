export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};

export const logoAnim = {
  hidden: {
    opacity: 1
  },
  show: {
    scale: [1, 0.5, 0.5, 0.5, 1],
    rotate: [0, 160, 270, 360, 0],
    borderRadius: ["20%", "50%", "20%", "50%", "20%"],
    transition: { duration: 2 }
  },
};
