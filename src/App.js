import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactPage/ContactUs";
import Homepage from "./Components/Homepage/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="*" element={<h1>Error</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
