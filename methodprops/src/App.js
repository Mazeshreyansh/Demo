import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Useeffect from "./components/Useeffect";
import ListDemo from "./components/ListDemo";
import DataFetch from "./components/DataFetch";
import FragmentsDemo from "./components/FragmentsDemo";
import PurComponents from "./components/PurComponents";
import RegularComponent from "./components/RegularComponent";
import Parent from "./Parent";
import Userinput from "./components/Userinput";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ParentComponent />
      <Useeffect></Useeffect>
      <ListDemo></ListDemo>
      <DataFetch></DataFetch> */}
      {/* <FragmentsDemo></FragmentsDemo> */}
      {/* <PurComponents></PurComponents>
      <RegularComponent></RegularComponent>
       */}
      {/* <Parent></Parent> */}
      <Userinput />
    </div>
  );
}

export default App;
