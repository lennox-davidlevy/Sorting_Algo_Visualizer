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
import Radio from './Radio';
import Navbar from './NavBar';
import './Visualizer.css';

const Visualizer = () => {
  const [arr, setArr] = useState([]);
  const [numberOfBars, setNumberOfBars] = useState(30);
  const [steps, setSteps] = useState([]);
  const [speed, setSpeed] = useState('medium');
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

  const dropDownSelect = (selectedOptionValue) => {
    // console.log(e.target);
    stepSet();
    colorSet();
    setStepPosition(0);
    setAlgo(selectedOptionValue);
  };

  const radioSelect = (e) => {
    clear();
    setSpeed(e.target.value);
  };

  const setupAnimation = (algorithm) => {
    animationChoice(
      algorithm,
      bubbleSortAnimation,
      mergeSortAnimation,
      selectionSortAnimation
    );
  };

  //controls

  const stepForward = () => {
    if (stepPosition >= steps.length - 1) return;
    clear();
    setStepPosition(stepPosition + 1);
  };
  const playOrPauseHandler = () => {
    if (stepPosition === steps.length - 1 && steps.length !== 1) {
      setStepPosition(0);
      startAnimation();
      return;
    }
    animations.length > 0 ? clear() : startAnimation();
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

  const startAnimation = () => {
    if (steps.length === 1) {
      setupAnimation(algo);
    }
    const animationSpeed = sortingSpeed[algo][speed] || 30;
    console.log(`animationSpeed: ${animationSpeed}`);
    clear();
    const arr = [];
    for (let i = 0; i < steps.length - stepPosition - 1; i++) {
      let animation = setTimeout(() => {
        setStepPosition(stepRef.current + 1);
      }, i * animationSpeed);
      arr.push(animation);
    }
    setAnimations(arr);
  };

  return (
    <div className="container">
      <Navbar
        dropDownSelect={dropDownSelect}
        selectAlgo={selectAlgo}
        radioSelect={radioSelect}
        speed={speed}
        changeNumberOfBars={changeNumberOfBars}
        numberOfBars={numberOfBars}
        algo={algo}
      />
      <div className="controls-container">
        <Buttons clickHandler={resetArray} title="Reset" item={numberOfBars} />
        <Buttons
          clickHandler={stepBack}
          title={<i className="fa fa-chevron-left"></i>}
        />
        <Buttons
          clickHandler={playOrPauseHandler}
          title={playOrPause(animations, stepPosition, steps)}
          item={algo}
          disabled={algo === ''}
        />
        <Buttons
          clickHandler={stepForward}
          title={<i className="fa fa-chevron-right"></i>}
        />
      </div>
      <Bars arr={steps[stepPosition]} colorStep={colors[stepPosition]} />
    </div>
  );
};

export default Visualizer;
