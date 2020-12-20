import React from 'react';
const arr = ['slow', 'medium', 'fast'];
const Radio = ({ clickHandler, speed }) => {
  return (
    <div>
      {arr.map((item) => {
        return (
          <label>
            <input
              type="radio"
              name="animationSpeed"
              value={item}
              checked={item == speed}
              onChange={clickHandler}
              className="form-check-input"
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default Radio;
