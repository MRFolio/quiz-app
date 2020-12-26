// page animation
const pageVariants = {
  initial: {
    opacity: 0,
    x: -250,
    y: -150,
    scale: 0.3,
  },
  in: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  },
};

const pageTransition = {
  transition: 'tween',
  ease: 'easeOut',
  duration: 0.6,
};

// question & answers animation
const questionVariant = {
  initial: {
    opacity: 0,
    y: -50,
    x: -150,
    scale: 0.6,
  },
  in: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -100,
    x: 150,
    scale: 1.4,
  },
};

const questionTransition = {
  transition: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const answerVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: 200,
    opacity: 0,
  },
};

const answerTransition = {
  transition: 'tween',
  ease: 'backOut',
  duration: 0.4,
};

export {
  pageVariants,
  pageTransition,
  questionVariant,
  questionTransition,
  answerVariants,
  answerTransition,
};
