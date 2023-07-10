// import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<C1 />} />
        <Route path="/home" element={<C1 />} />
        <Route path="/about" element={<C2 />} />
        <Route path="/contact" element={<C3 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
