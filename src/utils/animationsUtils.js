// page animations
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

// introduction animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item1 = {
  hidden: { opacity: 0, x: 125 },
  show: { opacity: 1, x: 0 },
};

const item2 = {
  hidden: { opacity: 0, x: -125 },
  show: { opacity: 1, x: 0 },
};

const item3 = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const transitionItems = {
  transition: 'tween',
  ease: 'backOut',
  duration: 0.9,
};

const transitionItems2 = {
  transition: 'tween',
  ease: 'backInOut',
  duration: 1.35,
};

// question animations
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

// answers animations
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
  container,
  item3,
  item2,
  item1,
  transitionItems,
  transitionItems2,
};
