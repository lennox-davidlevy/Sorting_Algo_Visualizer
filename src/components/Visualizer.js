import React, { useEffect, useState } from 'react';
import { setRandomNumber } from '../helpers';
import { bubbleSort } from './bubbleSort';
import Buttons from './Buttons';
import Bars from './Bars';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(50);
  // const [speed, setSpeed] = useState(2);
  const [steps, setSteps] = useState([]);
  const [stepPosition, setStepPosition] = useState(0);
  const [colors, setColors] = useState([]);
  const [animations, setAnimations] = useState([]);

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
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(setRandomNumber(5, 1000));
    }
    setArr(arr);
    setStepPosition(0);
  };

  const bubbleSortSteps = () => {
    if (steps.length > 1) return;
    bubbleSort(arr, steps, colors);
    startAnimation();
  };

  const clear = () => {
    animations.forEach((animation) => clearTimeout(animation));
    setAnimations([]);
  };

  const startAnimation = (n) => {
    clear();
    const test = [];
    for (let i = 0; i < steps.length; i++) {
      let animation = setTimeout(() => {
        setStepPosition(i);
      }, i * 10);
      test.push(animation);
    }
    setAnimations(test);
  };

  const startOrRestart = () => {
    if (stepPosition > 0) {
      return 'Restart';
    } else {
      return 'Start';
    }
  };
  return (
    <div className="container">
      <Buttons clickHandler={resetArray} title="Reset" item={numberOfBars} />
      <Buttons clickHandler={bubbleSortSteps} title="bubblesorttest" />
      <Buttons clickHandler={stepBack} title={<i className="arrow left"></i>} />
      <Buttons
        clickHandler={stepForward}
        title={<i className="arrow right"></i>}
      />
      <Buttons
        clickHandler={startAnimation}
        title={startOrRestart()}
        item={stepPosition}
      />
      <Bars arr={steps[stepPosition]} colorStep={colors[stepPosition]} />
    </div>
  );
};

export default Visualizer;
