import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CertificatePage from "./components/CertificatePage";
import DiplomaPage from "./components/DiplomaPage";
import PostDiplomaPage from "./components/PostDiplomaPage";
import DraftImage from "./components/DraftImage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<DraftImage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/diploma" element={<DiplomaPage />} />
        <Route path="/postdiploma" element={<PostDiplomaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
