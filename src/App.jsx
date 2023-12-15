import { useContext } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <main
        className={`${
          theme === "light" ? "bg-white" : "bg-secondary"
        } max-w-full p-4`}
      >
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
