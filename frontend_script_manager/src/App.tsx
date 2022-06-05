import Navbar from "./Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <body>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/home" element="" />
          </Routes>
        </Router>
        <Navbar />
      </body>
    </div>
  );
}

export default App;
