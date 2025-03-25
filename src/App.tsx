import "./App.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Things from "./components/Things";
import ThingDetail from "./components/ThingDetail";
import dishes from "./Dishes";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Startsida</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/things">Lista på maträtter</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/things" element={<Things dishes={dishes} />} />
          <Route path="/things/:id" element={<ThingDetail dishes={dishes} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
