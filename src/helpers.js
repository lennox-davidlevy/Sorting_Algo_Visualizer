const setRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createArray = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(setRandomNumber(5, 1000));
  }
  return arr;
};

const playOrPause = (animations, stepPosition, steps) => {
  if (stepPosition === steps.length - 1 && steps.length !== 1) {
    return <i className="fa fa-undo" aria-hidden="true"></i>;
  } else
    return animations.length > 0 ? (
      <i className="fa fa-pause" aria-hidden="true"></i>
    ) : (
      <i className="fa fa-play" aria-hidden="true"></i>
    );
};

const sortingSpeed = {
  'Bubble Sort': {
    slow: 60,
    medium: 20,
    fast: 7,
  },
  'Merge Sort': {
    slow: 60,
    medium: 30,
    fast: 10,
  },
  'Selection Sort': {
    slow: 60,
    medium: 20,
    fast: 10,
  },
  'Insertion Sort': {
    slow: 60,
    medium: 50,
    fast: 20,
  },
};

const animationChoice = (
  algorithm,
  bubbleSortAnimation,
  mergeSortAnimation,
  selectionSortAnimation,
  insertionSortAnimation
) => {
  switch (algorithm) {
    case 'Bubble Sort':
      bubbleSortAnimation();
      break;
    case 'Merge Sort':
      mergeSortAnimation();
      break;
    case 'Selection Sort':
      selectionSortAnimation();
      break;
    case 'Insertion Sort':
      insertionSortAnimation();
      break;
    default:
      return;
  }
};
export {
  setRandomNumber,
  createArray,
  playOrPause,
  sortingSpeed,
  animationChoice,
};
