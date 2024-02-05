import DynamicImage from "./components/DynamicImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<DynamicImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
