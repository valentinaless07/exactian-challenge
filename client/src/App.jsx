import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link to="/">Exactian</Link>
              </li>
              <li>
                <Link to="/empleados">Empleados</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empleados" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
