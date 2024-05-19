import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Index";
import About from "./Components/Pages/About/Index";
import MyNavbar from "./Components/Navbar/Index";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* Define other routes here */}
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
