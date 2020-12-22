const mergeSort = (array, position, steps, colors) => {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  let arrayLeft = mergeSort(left, position, steps, colors);
  let arrayRight = mergeSort(right, position + mid, steps, colors);
  let result = mergeHelper(arrayLeft, arrayRight, position, steps, colors);
  steps.push(steps[steps.length - 1].slice());
  colors.push(
    colors[colors.length - 1].fill(result.length === steps[0].length ? 3 : 0)
  );
  return result;
};

const mergeHelper = (arrayLeft, arrayRight, position, steps, colors) => {
  let result = [];
  let i = 0,
    j = 0;

  while (arrayLeft.length > 0 && arrayRight.length > 0) {
    if (arrayLeft[i] < arrayRight[j]) {
      result.push(arrayLeft.shift());
      createSteps(result, position, steps);
    } else {
      result.push(arrayRight.shift());
      createSteps(result, position, steps);
    }
    updateColor(position, colors, result.length - 1, [], []);
  }
  if (arrayLeft.length !== 0 || arrayRight.length !== 0) {
    updateColor(position, colors, result.length, arrayLeft, arrayRight);
    result = [...result, ...arrayLeft];
    result = [...result, ...arrayRight];
    createSteps(result, position, steps);
  }
  return result;
};

const updateColor = (position, colors, start, arrayLeft, arrayRight) => {
  let colorState = colors[colors.length - 1].slice();
  let end = position + start + arrayLeft.length + arrayRight.length;
  start = start + position;
  end === start
    ? colorState.fill(1, start, end + 1)
    : colorState.fill(1, start, end);
  colors.push(colorState);
};

const createSteps = (result, position, steps) => {
  let step = steps[steps.length - 1].slice();
  step.splice(position, result.length, ...result);
  steps.push(step);
};

export default mergeSort;
