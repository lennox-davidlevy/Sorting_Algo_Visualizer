import React, { useState } from 'react';
import Buttons from './Buttons';
import DropDown from './DropDown';
import Radio from './Radio';

const Navbar = ({
  dropDownSelect,
  selectAlgo,
  radioSelect,
  speed,
  changeNumberOfBars,
  numberOfBars,
  algo,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="navbar">
      <div className="logo-div">Sorting Visualizer</div>
      <div>Choose Algorithm</div>
      <div>Bars</div>
      <div>Speed</div>
      <div>{algo}</div>
      <div className="dropdown">
        <button className="dropbtn">
          <span className="dropdown-title">Algorithm</span>
          <i className="fa fa-caret-down"></i>
        </button>
        <DropDown clickHandler={dropDownSelect} arr={selectAlgo} algo={algo} />
      </div>
      <Radio clickHandler={radioSelect} speed={speed} />

      <input
        id="bar-range"
        type="range"
        min="10"
        max="50"
        value={numberOfBars}
        step="10"
        onChange={changeNumberOfBars}
      />
    </div>
  );
};

export default Navbar;

{
  /* <div className="navbar-container">
      <ul>
        <li style={{ float: 'left' }} className="logo">
          Sorting Visualizer
        </li>
        <li>
          <DropDown clickHandler={dropDownSelect} arr={selectAlgo} />
        </li>
        <li>
          <label>
            <input
              id="bar-range"
              type="range"
              min="10"
              max="50"
              value={numberOfBars}
              step="10"
              onChange={changeNumberOfBars}
            />
            Bars: {numberOfBars}
          </label>
        </li>
        <li>
          <Radio clickHandler={radioSelect} speed={speed} />
        </li>
      </ul>
    </div> */
}
