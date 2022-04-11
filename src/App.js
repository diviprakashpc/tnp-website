import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Recruit from './Components/Recruit/Recruit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Recruit />
    </div>
  );
}

export default App;
