import Footer from "./components/Footer";
import Home from "./components/Home";
import Navebar from "./components/Navebar";
import SamzaraDisclaimer from "./components/SamzaraDisclaimer";
import SamzaraPrivacyPolicy from "./components/SamzaraPrivacyPolicy";
import ScrollButton from "./components/ScrollButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disclaimer" element={<SamzaraDisclaimer />} />
          <Route path="/privacy-policy" element={<SamzaraPrivacyPolicy />} />
        </Routes>
        <ScrollButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
