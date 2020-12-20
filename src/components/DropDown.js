import React from 'react';

const DropDown = ({ arr, clickHandler }) => {
  if (!arr) return null;
  return (
    <div>
      <select id="selector" onChange={(e) => clickHandler(e)}>
        <option value="">Choose Algorithm</option>
        {arr.map((item, key) => {
          return (
            <option value={item} key={key}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
