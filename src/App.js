import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compendium from "./pages/Compendium";
import Monster from "./pages/Monster";
import About from "./pages/About";

function App() {
  return (
    <Router>
      
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compendium" element={<Compendium />} />
        <Route path="/compendium/:id" element={<Monster />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      
    </Router>
  );
}

export default App;
