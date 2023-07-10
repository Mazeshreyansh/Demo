import logo from "./logo.svg";
import "./App.css";
import FunctionClick from "./components/FunctionClick";
import Class3 from "./components/Class3";
import State1 from "./components/State1";
import Toggle from "./components/Toggle";
function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      <Class3></Class3>
      {/* <State1></State1> */}
      <Toggle></Toggle>
    </div>
  );
}

export default App;
