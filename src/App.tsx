import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RetirementCalculator from "./pages/RetirementCalculator";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora-jubilacion" element={<RetirementCalculator />} />
      </Routes>
      <Footer />
    </div>
  );
}
