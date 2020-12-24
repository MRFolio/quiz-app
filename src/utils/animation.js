const pageVariants = {
  initial: {
    opacity: 0,
    x: -150,
    scale: 0.01,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 200,
    scale: 1.2,
  },
};

const pageTransition = {
  transition: 'tween',
  ease: 'circOut',
  duration: 0.8,
};

export { pageVariants, pageTransition };
