import React from 'react';

export default function Bar({ height, color, index }) {
  const style = { height: `${height}%`, backgroundColor: color };
  return <div className="bar-number" key={index} style={style}></div>;
}
