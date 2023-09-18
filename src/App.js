import Footer from "./pages/components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Navbar from "./pages/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      {/* <NotFound /> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
