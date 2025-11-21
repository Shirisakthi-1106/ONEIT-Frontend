import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StudentDashboard from "./pages/StudentDashboard";
import CompaniesList from "./pages/CompaniesList";
import CompanyDetails from "./pages/CompanyDetails";
import ApplyPopup from "./pages/ApplyPopup";
import MyApplications from "./pages/MyApplications";
import OfferUpload from "./pages/OfferUpload";
import FeedbackPage from "./pages/FeedbackPage";
import PlacementCalendar from "./pages/PlacementCalendar";
import Announcements from "./pages/Announcements";
import StatisticsPage from "./pages/Statistics";
import CommitteeDashboard from "./pages/CommitteeDashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/companies" element={<CompaniesList />} />
      <Route path="/company/:id" element={<CompanyDetails />} />
      <Route path="/apply" element={<ApplyPopup />} />
      <Route path="/applications" element={<MyApplications />} />
      <Route path="/upload-offer" element={<OfferUpload />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/calendar" element={<PlacementCalendar />} />
      <Route path="/announcements" element={<Announcements/>} />

      <Route path="/statistics" element={<StatisticsPage />} />

      {/* Extra */}
      <Route path="/committee" element={<CommitteeDashboard />} />
      
    </Routes>
  );
}

export default App;
