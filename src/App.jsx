import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <main className="bg-white px-10">
      <Navbar />
      <Home />
      <About />
    </main>
  );
}

export default App;
