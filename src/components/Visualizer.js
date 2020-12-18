import React, { useEffect, useState } from 'react';
import {
  bubbleSortOrLoading,
  mergeSortOrLoading,
  createArray,
} from '../helpers';
import { bubbleSort } from './bubbleSort';
import { mergeSort } from './mergeSort';
import Buttons from './Buttons';
import Bars from './Bars';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(40);
  const [steps, setSteps] = useState([]);
  const [stepPosition, setStepPosition] = useState(0);
  const [stepSize, setStepSize] = useState(1);
  const [colors, setColors] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [algo, setAlgo] = useState('');

  useEffect(() => {
    resetArray(numberOfBars);
  }, [numberOfBars]);

  useEffect(() => {
    const temp = [[...arr]];
    setSteps(temp);
  }, [arr]);

  useEffect(() => {
    const temp = new Array(arr.length).fill(0);
    setColors([temp]);
  }, [arr]);

  const changeNumberOfBars = (e) => {
    e.preventDefault();
    setNumberOfBars(e.target.value);
  };

  const stepForward = () => {
    if (stepPosition >= steps.length - 1) return;
    clear();
    setStepPosition(stepPosition + 1);
  };
  const stepBack = () => {
    if (stepPosition <= 0) return;
    clear();
    setStepPosition(stepPosition - 1);
  };

  const resetArray = (n) => {
    clear();
    setAlgo('');
    const arr = createArray(n);
    setArr(arr);
    setStepPosition(0);
    setStepSize(1);
  };

  const bubbleSortAnimation = () => {
    if (steps.length > 1) return;
    clear();
    setAlgo('bubbleSort');
    bubbleSort(arr, steps, colors);
    setStepSize(steps.length);
    startAnimation();
  };

  const mergeSortAnimation = () => {
    if (steps.length > 1) return;
    clear();
    setAlgo('mergeSort');
    mergeSort(arr, 0, steps, colors);
    setStepSize(steps.length);
    startAnimation('mergeSort');
  };

  const clear = () => {
    animations.forEach((animation) => clearTimeout(animation));
    setAnimations([]);
  };

  const startAnimation = (type) => {
    let speed = type === 'mergeSort' ? 30 : 10;
    clear();
    const arr = [];
    for (let i = 0; i < steps.length; i++) {
      let animation = setTimeout(() => {
        setStepPosition(i);
      }, i * speed);
      arr.push(animation);
    }
    setAnimations(arr);
  };

  return (
    <div className="container">
      <label>
        Bars: {numberOfBars}
        <input
          type="range"
          min="10"
          max="50"
          value={numberOfBars}
          step="10"
          onChange={(e) => changeNumberOfBars(e)}
        />
      </label>
      <Buttons clickHandler={resetArray} title="Reset" item={numberOfBars} />
      <Buttons
        clickHandler={bubbleSortAnimation}
        title={bubbleSortOrLoading(algo, stepSize, stepPosition)}
      />
      <Buttons
        clickHandler={mergeSortAnimation}
        title={mergeSortOrLoading(algo, stepSize, stepPosition)}
      ></Buttons>
      <Buttons clickHandler={stepBack} title={<i className="arrow left"></i>} />
      <Buttons
        clickHandler={startAnimation}
        title={<i className="fa fa-undo"></i>}
        item={algo}
      />
      <Buttons
        clickHandler={stepForward}
        title={<i className="arrow right"></i>}
      />
      <Bars arr={steps[stepPosition]} colorStep={colors[stepPosition]} />
    </div>
  );
};

export default Visualizer;
