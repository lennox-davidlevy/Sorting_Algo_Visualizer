import React, { useEffect, useState } from 'react';
import { setRandomNumber } from '../helpers';
import { mergeSort, returnAnimationArray } from '../algorithms';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(50);
  const [speed, setSpeed] = useState(2);

  useEffect(() => {
    resetArray(numberOfBars);
  }, [numberOfBars]);

  useEffect(() => {
    const bars = document.getElementsByClassName('bar-number');
    for (let i = 0; i < bars.length; i++) {
      const barStyle = bars[i].style;
      barStyle.backgroundColor = 'white';
    }
  }, [arr]);

  const resetArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(setRandomNumber(5, 1000));
    }
    setArr(arr);
  };

  const resetOnClick = () => {
    window.location.reload(false);
  };

  const mergeSortOnClick = () => {
    setArr(mergeSort(arr));
  };

  const changeNumberOfBars = (e) => {
    e.preventDefault();
    setNumberOfBars(e.target.value);
  };

  const changeSpeed = (e) => {
    e.preventDefault();
    setSpeed(e.target.value);
  };

  const animateMergeSortOnClick = () => {
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
        }, i * 10);
      } else {
        setTimeout(() => {
          let [firstBar, newHeight] = animations[i];
          const firstBarStyle = numBars[firstBar].style;
          newHeight = (newHeight / 1000) * 100;
          firstBarStyle.height = `${newHeight}%`;
        }, i * 10);
      }
    }
  };

  return (
    <div className="container">
      <button className="myButton" onClick={() => resetOnClick(numberOfBars)}>
        Reset
      </button>
      <button className="myButton" onClick={() => mergeSortOnClick()}>
        MergeSort
      </button>
      <button className="myButton" onClick={() => animateMergeSortOnClick()}>
        Animate MergeSort
      </button>
      <label>
        Bars: {numberOfBars}
        <input
          type="range"
          min="50"
          max="350"
          value={numberOfBars}
          step="50"
          onChange={(e) => changeNumberOfBars(e)}
        />
      </label>
      <label>
        Sorting Speed: {speed}
        <input
          type="range"
          min="1"
          max="3"
          value={speed}
          step="1"
          onChange={(e) => changeSpeed(e)}
        />
      </label>
      <div className="bar-container">
        {arr.map((num, index) => {
          const percentage = (num / 1000) * 100;

          return (
            <div
              className="bar-number"
              key={index}
              style={{ height: `${percentage}%` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
