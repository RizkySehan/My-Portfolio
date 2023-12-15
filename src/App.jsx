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
      <main
        className={`${
          theme === "light" ? "bg-white" : "bg-secondary"
        } w-screen mx-auto`}
      >
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
