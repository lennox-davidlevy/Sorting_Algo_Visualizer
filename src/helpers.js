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

const bubbleSortOrLoading = (algo, stepSize, stepPosition) => {
  if (algo === 'bubbleSort' && stepPosition !== stepSize - 1) {
    return <i class="fa fa-spinner fa-spin"></i>;
  } else {
    return 'Bubble Sort';
  }
};

const mergeSortOrLoading = (algo, stepSize, stepPosition) => {
  if (algo === 'mergeSort' && stepPosition !== stepSize - 1) {
    return <i class="fa fa-spinner fa-spin"></i>;
  } else {
    return 'Merge Sort';
  }
};

const playOrPause = (pause) => {
  return pause ? (
    <i className="fa fa-pause" aria-hidden="true"></i>
  ) : (
    <i className="fa fa-play" aria-hidden="true"></i>
  );
};
const algo_select = {
  'Bubble Sort': 'bubbleSort',
  'Selection Sort': 'selectionSort',
  'Merge Sort': 'mergeSort',
};

export {
  setRandomNumber,
  startOrRestart,
  createArray,
  algo_select,
  playOrPause,
};
