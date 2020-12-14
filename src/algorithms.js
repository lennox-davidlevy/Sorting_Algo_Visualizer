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

export { mergeSort };
