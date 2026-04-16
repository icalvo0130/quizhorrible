import "./App.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
