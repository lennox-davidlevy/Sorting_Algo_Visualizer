import React, { useState } from 'react';
import Select from 'react-select';
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
    setSelectedOption(selectedOption);
    dropDownSelect(selectedOption.value);
  };

  const customStyles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: 'white',
      };
    },
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid black',
      color: state.isSelected ? 'black' : 'whitesmoke',
      padding: 20,
      backgroundColor: state.isSelected ? 'whitesmoke' : 'black',
      fontSize: 15,
    }),
    control: (provided) => ({
      ...provided,
      width: 155,
      background: 'black',
      border: '1px solid whitesmoke',
      borderRadius: 3,
      color: 'white',
      height: 30,
      fontSize: 15,
    }),
    singleValue: (provided, state) => {
      const color = 'white';
      const opacity = 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition, color };
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
