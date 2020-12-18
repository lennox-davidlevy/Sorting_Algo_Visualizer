const bubbleSort = (array, steps, colors) => {
  let arr = array.slice();
  let colorState = colors[colors.length - 1].slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1);
      }
      steps.push(arr.slice());
      colorState[j] = 1;
      colorState[j + 1] = 1;
      colors.push(colorState.slice());
      colorState[j] = 0;
      colorState[j + 1] = 0;
    }
    colorState[arr.length - 1 - i] = 2;
    steps.push(arr.slice());
    colors.push(colorState.slice());
  }
  colors[colors.length - 1] = new Array(arr.length).fill(3);
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

export { bubbleSort };
