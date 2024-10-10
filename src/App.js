import HomePage from "./components/HomePage";
import Themes from "./components/Themes";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/themes" element={<Themes />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
