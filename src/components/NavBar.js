import React, { useState } from 'react';
import Select from 'react-select';
import DropDown from './DropDown';
import Radio from './Radio';

const options = [
  { value: 'Selection Sort', label: 'Selection Sort' },
  { value: 'Bubble Sort', label: 'Bubble Sort' },
  { value: 'Merge Sort', label: 'Merge Sort' },
];

const NavBar = ({
  dropDownSelect,
  selectAlgo,
  radioSelect,
  speed,
  changeNumberOfBars,
  numberOfBars,
  algo,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectOnChange = (selectedOption) => {
    console.log(selectedOption);
    setSelectedOption(selectedOption);
    dropDownSelect(selectedOption.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '2px solid whitesmoke',
      color: state.isSelected ? 'black' : 'black',
      padding: 20,
      backgroundColor: 'whitesmoke',
      fontSize: 15,
    }),
    control: (provided) => ({
      width: 150,
      background: 'whitesmoke',
      borderRadius: 3,
      color: 'black',
      height: 30,
      fontSize: 15,
    }),
    singleValue: (provided, state) => {
      const opacity = 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      <div className="navbar">
        <div className="logoWrapper">
          <span className="stylish">Visual</span>
          <span className="logo">Sorting</span>
        </div>
        <div className="dropdown-nav">
          <Select
            options={options}
            value={selectedOption}
            onChange={selectOnChange}
            styles={customStyles}
            placeholder="Algorithm"
          />
        </div>
        <div className="num-bar-nav">
          # of Bars
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
        <div className="speed-nav">
          Speed
          <Radio clickHandler={radioSelect} speed={speed} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
