import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Class1 from "./components/Class1";
import State from "./components/State";
import Class2 from "./components/Class2";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello world............!!!!!!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet name="Deshmukh" />
      <Greet name="shreyansh" phone="998877" />
      <Welcome name=" completed" />
      <Class1></Class1> */}
      <State></State>
      <Class2 name="Shreyansh"></Class2>
    </div>
  );
}

export default App;
