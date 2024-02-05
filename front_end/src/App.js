import DynamicImage from "./components/DynamicImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DynamicImageCNA from "./components/DynamicImageCNA";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<DynamicImage />} />
        <Route path="/cnaexample" element={<DynamicImageCNA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
