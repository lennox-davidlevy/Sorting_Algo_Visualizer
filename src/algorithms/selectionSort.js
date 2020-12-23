const selectionSort = (array, steps, color) => {
  let arr = array.slice();
  let len = arr.length;
  let colorState = color[color.length - 1].slice();
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      colorState[min] = 1;
      colorState[j] = 1;
      if (arr[min] > arr[j]) {
        colorState[min] = 0;
        min = j;
      }
      steps.push(arr.slice());
      color.push(colorState.slice());
      colorState[j] = 0;
    }

    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
    colorState[min] = 0;
    colorState[i] = 2;
    steps.push(arr.slice());
    if (i === arr.length - 1) {
      color.push(new Array(arr.length).fill(3));
    } else {
      color.push(colorState.slice());
    }
  }
  return arr;
};

export default selectionSort;
