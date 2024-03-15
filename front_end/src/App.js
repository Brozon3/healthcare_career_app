import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import EducationPage from "./pages/EducationPage";
import EntryPage from "./pages/EntryPage";
import DirectEntryPage from "./pages/DirectEntryPage";
import CompetitivePage from "./pages/CompetitivePage";
import HSPathsImage from "./components/HSPathsImage";
import HSDiplomaPathsImage from "./components/HSDiplomaPathsImage";
import Diploma3YearProgramsImage from "./components/Diploma3YearProgramsImage";
import DiplomaLessThan3YearProgramsImage from "./components/DiplomaLessThan3YearProgramsImage";
import HSCertProgramsImage from "./components/HSCertProgramsImage";
import DegreeProgramsImage from "./components/DegreeProgramsImage";
import CircularImagePage from "./pages/CircularImagePage";
import DegreeImage from "./components/DegreeImage";
import DirectDiplomaImage from "./components/DirectDiplomaImage";
import DirectCertificateImage from "./components/DirectCertificateImage";
import CompetitiveDiplomaImage from "./components/CompetitiveDiplopmaImage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<EducationPage />} />
        <Route path="/postsecondary" element={<CircularImagePage />} />
        <Route path="/highschool" element={<HSPathsImage />} />
        <Route path="/hsdiploma" element={<HSDiplomaPathsImage />} />
        <Route path="/diploma3yearprograms" element={<Diploma3YearProgramsImage />} />
        <Route path="/diplomalessthan3yearprograms" element={<DiplomaLessThan3YearProgramsImage />} />
        <Route path="/certprograms" element={<HSCertProgramsImage />} />
        <Route path="/degreeprograms" element={<DegreeProgramsImage />} />
        <Route path="/entry" element={<EntryPage/>} />
        <Route path="/direct" element={<DirectEntryPage/>}/>
        <Route path="/competitive" element={<CompetitivePage />}/>
        <Route path="/compDiploma" element={<CompetitiveDiplomaImage />}/>
        <Route path="/directCert" element={<DirectCertificateImage />}/>
        <Route path="/directDiploma" element={<DirectDiplomaImage />}/>
        <Route path="/degree" element={<DegreeImage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
