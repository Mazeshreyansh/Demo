import React, { useState } from "react";
function State() {
  let [actor, setActor] = useState("Tom Cruise");
  return (
    <div>
      <h1>My favourite actor: {actor}</h1>
      <button onClick={() => setActor("Shahruk Khan")}>Shaharuk Khan</button>
      <button onClick={() => setActor("Kartik")}>Kartik</button>
      <button onClick={() => setActor("Jhony")}>Jhony</button>
      <button onClick={() => setActor("Tom Cruise")}>Reload</button>
    </div>
  );
}
export default State;
