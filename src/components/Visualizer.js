import React, { useEffect, useState } from 'react';
import { setRandomNumber } from '../helpers';
import { mergeSort } from '../algorithms';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [min, setMin] = useState(5);
  const [max, setMax] = useState(1000);
  const [numberOfBars, setNumberOfBars] = useState(100);

  useEffect(() => {
    resetArray(numberOfBars);
  }, [numberOfBars]);

  const resetArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(setRandomNumber(min, max));
    }
    setArr(arr);
  };
  const mergeSortOnClick = () => {
    setArr(mergeSort(arr));
  };

  const changeNumberOfBars = (e) => {
    e.preventDefault();
    setNumberOfBars(e.target.value);
  };

  return (
    <div className="container">
      <button className="myButton" onClick={() => resetArray(numberOfBars)}>
        Reset
      </button>
      <button className="myButton" onClick={() => mergeSortOnClick()}>
        MergeSort
      </button>
      <label>
        Number of Bars
        <input
          type="range"
          min="50"
          max="500"
          value={numberOfBars}
          step="50"
          onChange={(e) => changeNumberOfBars(e)}
        />
      </label>
      <div className="bar-container">
        {arr.map((num, index) => {
          return (
            <div
              className="bar-number"
              key={index}
              style={{ height: `${num}px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
