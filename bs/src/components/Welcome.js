import React from "react";
import "./Welcome.css";
import img from "./react.jpeg";

function click() {
  document.getElementById("text").innerHTML = "Hey, I am working";
}

function Welcome() {
  return (
    <div>
      <h1>welcome</h1>
      <h2>We are learning react</h2>
      <p id="para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing
      </p>
      <img src={img}></img>
      <div>
        <p id="text"></p>
        <button id="b1" onClick={click()}>
          Button
        </button>
      </div>
    </div>
  );
}
export default Welcome;
