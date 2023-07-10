import React from "react";

function ListDemo() {
  const arr = ["Amith", "saurabh", "anurag"];
  const names = arr.map((name) => <li>{name}</li>);
  return <div>{names}</div>;
}
export default ListDemo;
