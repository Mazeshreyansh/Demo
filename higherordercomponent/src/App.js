import logo from "./logo.svg";
import "./App.css";
import Hoc from "./component/Hoc";
import Hovercounter from "./component/Hovercounter";
import UpdatedComp from "./component/Counterhoc";

function App() {
  return (
    <div className="App">
      <Hoc></Hoc>
      <Hovercounter></Hovercounter>
      <UpdatedComp />
    </div>
  );
}

export default App;
