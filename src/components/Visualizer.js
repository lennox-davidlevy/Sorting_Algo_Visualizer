import React, { useEffect, useState, useRef } from 'react';
import {
  createArray,
  playOrPause,
  sortingSpeed,
  animationChoice,
} from '../helpers';
import { bubbleSort } from './bubbleSort';
import { mergeSort } from './mergeSort';
import selectionSort from './selectionSort';
import Buttons from './Buttons';
import Bars from './Bars';
import DropDown from './DropDown';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(40);
  const [steps, setSteps] = useState([]);
  const [stepPosition, setStepPosition] = useState(0);
  const [colors, setColors] = useState([]);
  const [animations, setAnimations] = useState([]);
  const [selectAlgo, setSelectAlgo] = useState([]);
  const [algo, setAlgo] = useState('');
  const stepRef = useRef(stepPosition);
  stepRef.current = stepPosition;

  useEffect(() => {
    resetArray(numberOfBars);
  }, [numberOfBars]);

  useEffect(() => {
    stepSet();
    colorSet();
  }, [arr]);

  useEffect(() => {
    setupAnimation(algo);
  }, [algo]);

  const colorSet = () => {
    const temp = new Array(arr.length).fill(0);
    setColors([temp]);
  };
  const stepSet = () => {
    const temp = [[...arr]];
    setSteps(temp);
  };

  const changeNumberOfBars = (e) => {
    setNumberOfBars(e.target.value);
  };

  const dropDownSelect = (e) => {
    stepSet();
    colorSet();
    setStepPosition(0);
    setAlgo(e.target.value);
  };

  const setupAnimation = (algorithm) => {
    animationChoice(
      algorithm,
      bubbleSortAnimation,
      mergeSortAnimation,
      selectionSortAnimation
    );
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
    const arr = createArray(n);
    setArr(arr);
    setStepPosition(0);
    setSelectAlgo(['Selection Sort', 'Bubble Sort', 'Merge Sort']);
    setAlgo('');
    const selector = document.getElementById('selector');
    selector.value = '';
  };

  const playOrPauseHandler = () => {
    animations.length > 0 ? clear() : startAnimation();
  };
  const selectionSortAnimation = () => {
    clear();
    let a = [...arr];
    selectionSort(a, steps, colors);
  };

  const bubbleSortAnimation = () => {
    clear();
    let a = [...arr];
    bubbleSort(a, steps, colors);
  };

  const mergeSortAnimation = () => {
    clear();
    let a = [...arr];
    mergeSort(a, 0, steps, colors);
  };

  const clear = () => {
    animations.forEach((animation) => clearTimeout(animation));
    setAnimations([]);
  };

  const startAnimation = (type) => {
    let speed = type === 'bubbleSort' ? 30 : 30;
    clear();
    const arr = [];
    for (let i = 0; i < steps.length - stepPosition - 1; i++) {
      let animation = setTimeout(() => {
        setStepPosition(stepRef.current + 1);
      }, i * speed);
      arr.push(animation);
    }
    setAnimations(arr);
  };

  return (
    <div className="container">
      <DropDown clickHandler={dropDownSelect} arr={selectAlgo} />

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
      <Buttons clickHandler={stepBack} title={<i className="arrow left"></i>} />
      <Buttons
        clickHandler={playOrPauseHandler}
        title={playOrPause(animations)}
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
