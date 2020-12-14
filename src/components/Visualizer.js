import React, { useEffect, useState } from 'react';
import { setRandomNumber } from '../helpers';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [min, setMin] = useState(5);
  const [max, setMax] = useState(1000);
  const [numberOfBars, setNumberOfBars] = useState(100);

  useEffect(() => {
    resetArray(numberOfBars);
  }, []);

  const resetArray = (n) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(setRandomNumber(min, max));
    }
    setArr(arr);
  };

  return (
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
  );
};

export default Visualizer;
