import React from 'react';

export default function Bars({ arr }) {
  return (
    <div className="bar-container">
      {arr.map((num, index) => {
        const percentage = (num / 1000) * 100;
        return (
          <div
            className="bar-number"
            key={index}
            style={{ height: `${percentage}%` }}
          ></div>
        );
      })}
    </div>
  );
}
