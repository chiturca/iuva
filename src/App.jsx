import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/index";
import AnnoucementPool from "./pages/AnnouncementPool/index";
import CreateAnnouncement from "./pages/CreateAnnouncement/index";
import Profile from "./pages/Profile/index";
import MyAnnouncements from "./pages/MyAnnouncements/index";
import Footer from "./components/Footer";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import PrivacyPolicy from "./pages/PrivacyPolicy/index";
import SignUp from "./pages/SignUp/index";
import LogIn from "./pages/LogIn/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/annoucementpool" element={<AnnoucementPool />} />
        <Route path="/createannouncement" element={<CreateAnnouncement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myannouncements" element={<MyAnnouncements />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
