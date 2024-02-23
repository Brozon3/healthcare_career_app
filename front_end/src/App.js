import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import CertificatePage from "./pages/CertificatePage";
import DiplomaPage from "./pages/DiplomaPage";
import PostDiplomaPage from "./pages/PostDiplomaPage";
import EducationPage from "./pages/EducationPage";
import DraftImage from "./components/DraftImage";
import HSImage from "./components/HSImage";
import EntryPage from "./pages/EntryPage";
import DirectEntryPage from "./pages/DirectEntryPage";
import CompetitivePage from "./pages/CompetitivePage";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<EducationPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/diploma" element={<DiplomaPage />} />
        <Route path="/postdiploma" element={<PostDiplomaPage />} />
        <Route path="/postsecondary" element={<DraftImage />} />
        <Route path="/highschool" element={<HSImage />} />
        <Route path="/entry" element={<EntryPage/>} />
        <Route path="/direct" element={<DirectEntryPage/>}/>
        <Route path="/competitive" element={<CompetitivePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
