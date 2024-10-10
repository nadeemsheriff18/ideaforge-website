import HomePage from "./components/HomePage";
import Themes from "./components/Themes";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/themes" element={<Themes />} />
          
        </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
