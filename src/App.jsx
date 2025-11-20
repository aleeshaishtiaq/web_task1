import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Correct page imports
import Home from "./pages/Home.jsx";
import TrendsPage from "./pages/TrendsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import Interactive from "./pages/InteractivePage.jsx";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trends" element={<TrendsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/interactive" element={<Interactive />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
