import "./App.css";
import Home from "./pages/Home";
import AnimeDetails from "./components/AnimeDetails";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/animeDetails" element={<AnimeDetails />}></Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </div>
  );
}

export default App;
