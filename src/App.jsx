import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <main className="bg-white">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
