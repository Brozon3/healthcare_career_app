import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
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
import axios from "axios";

function App() {

  useEffect(() => {
    // Schedule API call to happen twice a year (every six months)
    const scheduleApiCall = () => {
      // Calculate the date for the next API call
      const now = new Date();
      const currentMonth = now.getMonth(); // Get the current month (0-11)
      const currentYear = now.getFullYear(); // Get the current year

      // Set the target months for the API calls (e.g., January and July)
      const targetMonths = [0, 6];

      // Check if the current month is one of the target months
      if (targetMonths.includes(currentMonth)) {
        // Call the API to scrape and update the JSON file
        const onLoad = async () => {
          const response = await axios.post("/api/scrape", {
            link: "https://www.cna.nl.ca/program/primary-care-paramedicine"
          });
        }
        
      }

      // Calculate the date for the next API call (six months later)
      const nextApiCallMonth = targetMonths.find(month => month > currentMonth) || targetMonths[0]; // Get the next target month
      const nextApiCallYear = nextApiCallMonth > currentMonth ? currentYear : currentYear + 1; // Adjust the year if needed
      const nextApiCallDate = new Date(nextApiCallYear, nextApiCallMonth, 1); // Set the date for the next API call

      // Calculate the time difference until the next API call
      const timeUntilNextApiCall = nextApiCallDate - now;

      // Schedule the next API call
      setTimeout(scheduleApiCall, timeUntilNextApiCall);
    };

    // Start scheduling API calls
    scheduleApiCall();
  }, []);

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
