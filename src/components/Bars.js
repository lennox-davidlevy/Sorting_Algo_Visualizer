import React from 'react';
import Bar from './Bar';

export default function Bars({ arr, colorStep }) {
  if (!arr) return null;
  const colorIdx = { 0: 'whitesmoke', 1: 'red', 2: 'lightblue', 3: 'yellow' };

  return (
    <div className="bar-container">
      {arr.map((num, index) => {
        const height = (num / 1000) * 100;
        const colorBar = colorIdx[colorStep[index]];
        return (
          <Bar key={index} height={height} color={colorBar} index={index} />
        );
      })}
    </div>
  );
}
