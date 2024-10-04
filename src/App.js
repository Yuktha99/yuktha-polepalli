import "./App.css";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";  
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Achievements from "./components/achievements/Achievements";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
