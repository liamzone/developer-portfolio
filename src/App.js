import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/general/Section";
import CurriculumVitae from "./components/CurriculumVitae";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <CurriculumVitae />

      <Section header="Portfolio" section={<Portfolio />} />

      <Section header="Contact" section={<Contact />} />

      <Footer />
    </div>
  );
}

export default App;
