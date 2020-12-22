import React from 'react';

export default function Buttons({ clickHandler, title, item, disabled }) {
  return (
    <button
      className="myButton"
      onClick={() => clickHandler(item)}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
