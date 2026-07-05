import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Education from "./components/section/Education";
import Home from "./components/section/Home";
import Project from "./components/section/Project";
import Skills from "./components/section/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        {/* Hero */}
        <Home />

        {/* About */}
        <About />

        {/* Education */}
        <Education />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Project />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
