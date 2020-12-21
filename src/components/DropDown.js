import React from 'react';

const DropDown = ({ arr, clickHandler, algo }) => {
  if (!arr) return null;
  return (
    <ul className="subnavigation">
      {arr.map((item, key) => {
        return (
          <li className="link" id={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default DropDown;

{
  /* <div className="dropdown-container">
  <select id="selector" onChange={clickHandler}>
    <option value="">Choose Algorithm</option>
    {arr.map((item, key) => {
      return (
        <option value={item} key={key}>
          {item}
        </option>
      );
    })}
  </select>
</div>;

<div className="dropdown-content">
  {arr.map((item, key) => {
    if (item == algo) {
      return (
        <div className="selected" key={key} onClick={clickHandler} id={item}>
          {item}
        </div>
      );
    } else {
      return (
        <div key={key} onClick={clickHandler} id={item}>
          {item}
        </div>
      );
    }
  })}
</div>; */
}

//  <div className="dropdown-container">
//     <select id="selector" onChange={clickHandler}>
//       <option value="">Choose Algorithm</option>
//       {arr.map((item, key) => {
//         return (
//           <option value={item} key={key}>
//             {item}
//           </option>
//         );
//       })}
//     </select>
//   </div>
