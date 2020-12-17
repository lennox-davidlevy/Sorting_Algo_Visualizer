import React, { useEffect, useState } from 'react';
import { bubbleSortOrRestart, createArray } from '../helpers';
import { bubbleSort } from './bubbleSort';
import Buttons from './Buttons';
import Bars from './Bars';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(40);
  const [steps, setSteps] = useState([]);
  const [stepPosition, setStepPosition] = useState(0);
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
  };

  const bubbleSortAnimation = () => {
    if (algo === 'bubbleSort') {
      startAnimation();
    }
    setAlgo('bubbleSort');
    if (steps.length > 1) return;
    bubbleSort(arr, steps, colors);
    startAnimation();
  };

  const clear = () => {
    animations.forEach((animation) => clearTimeout(animation));
    setAnimations([]);
  };

  const startAnimation = () => {
    clear();
    const arr = [];
    for (let i = 0; i < steps.length; i++) {
      let animation = setTimeout(() => {
        setStepPosition(i);
      }, i * 7);
      arr.push(animation);
    }
    setAnimations(arr);
  };

  return (
    <div className="container">
      <Buttons clickHandler={resetArray} title="Reset" item={numberOfBars} />
      <Buttons
        clickHandler={bubbleSortAnimation}
        title={bubbleSortOrRestart(algo)}
      />
      <Buttons clickHandler={stepBack} title={<i className="arrow left"></i>} />
      <Buttons clickHandler={clear} title="Pause" />
      <Buttons
        clickHandler={stepForward}
        title={<i className="arrow right"></i>}
      />
      <Bars arr={steps[stepPosition]} colorStep={colors[stepPosition]} />
      <button onClick={() => startAnimation(stepPosition)}>test</button>
    </div>
  );
};

export default Visualizer;
