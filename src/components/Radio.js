import React from 'react';
const arr = ['slow', 'medium', 'fast'];
const obj = {
  slow: '>',
  medium: '>>',
  fast: '>>>',
};
const Radio = ({ clickHandler, speed }) => {
  return (
    <div className="radio-container">
      {arr.map((item) => {
        return (
          <label className="radio">
            {obj[item]}
            <input
              type="radio"
              name="animationSpeed"
              value={item}
              checked={item == speed}
              onChange={clickHandler}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
