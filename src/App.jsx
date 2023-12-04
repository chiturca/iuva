import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import AnnouncementPool from "./pages/AnnouncementPool/index";
import CreateAnnouncement from "./pages/CreateAnnouncement/index";
import Profile from "./pages/Profile/index";
import MyAnnouncements from "./pages/MyAnnouncements/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import PrivacyPolicy from "./pages/PrivacyPolicy/index";
import SignUp from "./pages/SignUp/index";
import LogIn from "./pages/LogIn/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/announcementpool" element={<AnnouncementPool />} />
        <Route path="/createannouncement" element={<CreateAnnouncement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myannouncements" element={<MyAnnouncements />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
