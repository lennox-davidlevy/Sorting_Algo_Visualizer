import { returnAnimationArray, bubbleSort } from '../algorithms';

const animateMergeSortOnClick = (arr) => {
  const animations = returnAnimationArray(arr);
  for (let i = 0; i < animations.length; i++) {
    const numBars = document.getElementsByClassName('bar-number');
    const changeColor = i % 3 !== 2;
    if (changeColor) {
      const [firstBar, secondBar] = animations[i];

      const firstBarStyle = numBars[firstBar].style;
      const secondBarStyle = numBars[secondBar].style;
      const color = i % 3 === 0 ? 'red' : 'whitesmoke';
      setTimeout(() => {
        firstBarStyle.backgroundColor = color;
        secondBarStyle.backgroundColor = color;
      }, i * 30);
    } else {
      setTimeout(() => {
        let [firstBar, newHeight] = animations[i];
        const firstBarStyle = numBars[firstBar].style;
        newHeight = (newHeight / 1000) * 100;
        firstBarStyle.height = `${newHeight}%`;
      }, i * 30);
    }
  }
};

const animateBubbleSortOnClick = (arr) => {
  const animations = bubbleSort(arr);
  console.log(animations);
  for (let i = 0; i < animations.length; i++) {
    const numBars = document.getElementsByClassName('bar-number');
    const [firstBar, secondBar, change] = animations[i];
    const firstBarStyle = numBars[firstBar].style;
    const secondBarStyle = numBars[secondBar].style;
    if (change) {
      setTimeout(() => {
        const temp = firstBarStyle.height;
        firstBarStyle.height = secondBarStyle.height;
        secondBarStyle.height = temp;
      }, i * 30);
    }
  }
};

export { animateMergeSortOnClick, animateBubbleSortOnClick };
