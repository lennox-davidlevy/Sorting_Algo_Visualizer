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

const startOrRestart = (stepPosition) => {
  if (stepPosition > 0) {
    return 'Restart';
  } else {
    return 'Start';
  }
};

const bubbleSortOrRestart = (algo) => {
  if (algo === 'bubbleSort') {
    return 'Restart';
  } else {
    return 'Bubble Sort';
  }
};

export { setRandomNumber, startOrRestart, bubbleSortOrRestart, createArray };
