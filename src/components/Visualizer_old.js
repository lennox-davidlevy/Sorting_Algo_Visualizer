import React, { useEffect, useState } from 'react';
import { setRandomNumber } from '../helpers';
import { mergeSort, bubbleSort } from '../algorithms';
import {
  animateMergeSortOnClick,
  animateBubbleSortOnClick,
} from './algoAnimation';
import Buttons from './Buttons';
import Bars from './Bars';
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

  return (
    <div className="container">
      <Buttons clickHandler={resetOnClick} title="Reset" />
      {/* <Buttons clickHandler={mergeSortOnClick} title="MergeSort" /> */}
      <Buttons
        clickHandler={animateMergeSortOnClick}
        title="AnimateMergeSort"
        props={arr}
      />
      <Buttons
        clickHandler={animateBubbleSortOnClick}
        title="BubbleSort"
        props={arr}
      />

      {/* <label>
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
      </label> */}
      <Bars arr={arr} />
    </div>
  );
};

export default Visualizer;
