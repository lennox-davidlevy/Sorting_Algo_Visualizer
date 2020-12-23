const insertionSort = (array, steps, colors) => {
  let arr = array.slice();
  let colorState = colors[colors.length - 1].slice();
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let num = arr[i];
    let j = i - 1;
    colorState[j] = 1;
    colorState[i] = 1;
    colors.push(colorState.slice());
    steps.push(arr.slice());
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      colorState[j + 1] = 0;
      colorState[j] = 1;
      if (j !== 0) {
        colorState[j - 1] = 1;
      }
      colors.push(colorState.slice());
      steps.push(arr.slice());
      j--;
    }
    arr[j + 1] = num;
    colorState[j] = 0;
    colorState[j + 1] = 0;
    colors.push(colorState.slice());
    steps.push(arr.slice());
  }
  for (let i = array.length - 1; i >= 0; i--) {
    colorState[i] = 1;
    colors.push(colorState.slice());
    steps.push(arr.slice());
  }
  return arr;
};

export default insertionSort;
