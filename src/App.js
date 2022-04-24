import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactPage/ContactUs";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Homepage/>}></Route>
        {/* <Route path="/#home" element={<Home />}></Route> */}
        {/* <Route path="/About" element={<About/>}></Route> */}
        {/* <Route path="/#recruit" element={<Homepage/>}></Route> */}

        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="*" element={<h1>Error</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
