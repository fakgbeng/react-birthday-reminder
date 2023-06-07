import React from "react";
const List = (props) => {
  const list = props.data.map((data) => {
    return (
      <li className="person" key={data.id}>
        <img src={data.image}></img>
        <div>
          <h4>{data.name}</h4>
          <p>{data.age} years</p>
        </div>
      </li>
    );
  });
  return (
    <ul className="container">
      <h3>{props.data.length} Birthdays Today</h3>
      {list}
      <button onClick={props.onRemove}>Clear All</button>
      <button onClick={props.onRetrieve}>Retrieve All</button>
    </ul>
  );
};

export default List;
