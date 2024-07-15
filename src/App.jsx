import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ReqForm from "./components/ReqForm";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`bg-${theme} text-primary`}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <ReqForm />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
