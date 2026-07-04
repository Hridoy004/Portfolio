import "./App.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ContactSection from "./components/section/Contact";
import Home from "./components/section/home";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        {/* Hero */}
        <Home />

        {/* About */}

        {/* Skills */}

        {/* Projects */}

        {/* Projects */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
