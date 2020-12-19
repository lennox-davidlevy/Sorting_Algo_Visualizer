const insertionSort = (array, steps, colors) => {
  let arr = array.slice();
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const num = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = num;
  }
  return arr;
};
