import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Footer from './components/Footer';
import Likes from './Pages/Likes';
import Messages from './Pages/Messages';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<Likes />} />
          <Route path="/likes" element={<Messages />} />
          <Route path="/matches" element={<Messages />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
