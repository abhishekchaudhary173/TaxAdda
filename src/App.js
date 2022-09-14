import "./App.css";
import Home from "./Component/Home";
import Data from "./Component/Data";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </div>
  );
}

export default App;
