const bubbleSort = (arr, steps, color) => {
  const colorKey = [...color[color.length - 1]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const a = arr[j];
      const b = arr[j + 1];
      if (a > b) {
        swap(arr, j, j + 1);
      }
      steps.push([...arr]);
      colorKey[j] = 1;
      colorKey[j + 1] = 1;
      color.push([...colorKey]);
      colorKey[j] = 0;
      colorKey[j + 1] = 0;
    }
    colorKey[arr.length - 1 - i] = 2;
    steps.push(arr.slice());
    color.push(colorKey.slice());
  }
  return;
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return;
};

export { bubbleSort };
