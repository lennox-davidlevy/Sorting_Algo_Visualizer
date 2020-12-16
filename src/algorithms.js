//REFERENCE MERGE SORT

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  if (!arr || arr.length === 0) return [];
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};

const merge = (left, right) => {
  const result = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  const end = [].concat(left.slice(l)).concat(right.slice(r));
  return [...result, ...end];
};

const returnAnimationArray = (arr) => {
  const result = [];
  if (arr.length <= 1) return arr;
  const tempArr = [...arr],
    start = 0,
    end = arr.length - 1;
  // const start = 0
  // const end = arr.length - 1;
  mergeAnimationHelper(arr, start, end, tempArr, result);
  return result;
};

const mergeAnimationHelper = (arr, start, end, tempArr, result) => {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeAnimationHelper(tempArr, start, mid, arr, result);
  mergeAnimationHelper(tempArr, mid + 1, end, arr, result);
  mergeAnimation(arr, start, mid, end, tempArr, result);
};

const mergeAnimation = (arr, start, mid, end, tempArr, result) => {
  let i = start,
    k = start,
    j = mid + 1;
  while (i <= mid && j <= end) {
    result.push([i, j], [i, j]);
    if (tempArr[i] <= tempArr[j]) {
      result.push([k, tempArr[i]]);
      arr[k++] = tempArr[i++];
    } else {
      result.push([k, tempArr[j]]);
      arr[k++] = tempArr[j++];
    }
  }
  while (i <= mid) {
    result.push([i, i], [i, i]);
    result.push([k, tempArr[i]]);
    arr[k++] = tempArr[i++];
  }
  while (j <= end) {
    result.push([j, j], [j, j]);
    result.push([k, tempArr[j]]);
    arr[k++] = tempArr[j++];
  }
};

const bubbleSort = (arr) => {
  const animation = [];
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      const a = result[j];
      const b = result[j + 1];
      animation.push([j, j + 1]);
      if (a > b) {
        swap(result, j, j + 1);
        animation[animation.length - 1].push(true);
      } else {
        animation[animation.length - 1].push(false);
      }
    }
  }
  return animation;
};

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

export { mergeSort, returnAnimationArray, bubbleSort };
