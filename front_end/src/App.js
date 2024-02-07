import DynamicImage from "./components/DynamicImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DynamicImageCNA from "./components/DynamicImageCNA";
import CertificatePage from "./components/CertificatePage";
import DiplomaPage from "./components/DiplomaPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<DynamicImage />} />
        <Route path="/cnaexample" element={<DynamicImageCNA />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/diploma" element={<DiplomaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
