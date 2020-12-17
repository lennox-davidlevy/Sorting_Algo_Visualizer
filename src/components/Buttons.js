import React from 'react';

export default function Buttons({ clickHandler, title, item }) {
  return (
    <button className="myButton" onClick={() => clickHandler(item)}>
      {title}
    </button>
  );
}
