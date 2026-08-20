import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ForWho from "./components/ForWho";
import Solutions from "./components/Solutions";
import Backing from "./components/Backing";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <AboutMe />
      <ForWho />
      <Solutions />
      <Backing />
      <Calculator />
      <Contact />
      <Footer />
    </div>
  );
}
