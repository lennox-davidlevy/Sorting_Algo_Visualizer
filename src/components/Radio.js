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
      {arr.map((item, key) => {
        return (
          <label key={key} className="radio">
            <input
              type="radio"
              name="animationSpeed"
              value={item}
              checked={item === speed}
              onChange={clickHandler}
              key={key}
            />
            {obj[item]}
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
