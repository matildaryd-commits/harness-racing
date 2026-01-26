import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import ChooseStable from './pages/ChooseStable';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Horses from './pages/Horses';
import HorseDetail from './pages/HorseDetail';
import Events from './pages/Events';
import Matchmaking from './pages/Matchmaking';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseStable />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/horses" element={<Horses />} />
        <Route path="/horses/:id" element={<HorseDetail />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Events />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
