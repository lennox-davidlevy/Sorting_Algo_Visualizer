import React from 'react';
import Bar from './Bar';

export default function Bars({ arr, colorStep }) {
  if (!arr) return null;

  //customize color of bars during sorting
  //0 - initial
  //1 - check
  //2 - sorted position
  //3 - final flourish
  const colorIdx = {
    0: 'whitesmoke',
    1: 'red',
    2: 'red',
    3: 'red',
  };

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
