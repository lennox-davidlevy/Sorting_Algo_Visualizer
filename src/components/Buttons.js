import React from 'react';

export default function Buttons({ clickHandler, title, props }) {
  return (
    <button className="myButton" onClick={() => clickHandler(props)}>
      {title}
    </button>
  );
}
