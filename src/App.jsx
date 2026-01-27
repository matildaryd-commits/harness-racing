import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import ChooseStable from './pages/ChooseStable';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Horses from './pages/Horses';
import HorseDetail from './pages/HorseDetail';
import Pedigree from './pages/Pedigree';
import Caretaker from './pages/Caretaker';
import Owner from './pages/Owner';
import Stable from './pages/Stable';
import Events from './pages/Events';
import Matchmaking from './pages/Matchmaking';
import Profile from './pages/Profile';
import InviteFans from './pages/InviteFans';
import CreateSearch from './pages/CreateSearch';
import SearchDetail from './pages/SearchDetail';
import HorsePlanning from './pages/HorsePlanning';
import HorseTraining from './pages/HorseTraining';
import HorseAdmin from './pages/HorseAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChooseStable />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/horses" element={<Horses />} />
        <Route path="/horses/:id" element={<HorseDetail />} />
        <Route path="/horses/:id/pedigree" element={<Pedigree />} />
        <Route path="/horses/:id/invite" element={<InviteFans />} />
        <Route path="/horses/:id/planning" element={<HorsePlanning />} />
        <Route path="/horses/:id/training" element={<HorseTraining />} />
        <Route path="/horses/:id/admin" element={<HorseAdmin />} />
        <Route path="/caretaker" element={<Caretaker />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/stable" element={<Stable />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Events />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/matchmaking/create" element={<CreateSearch />} />
        <Route path="/matchmaking/search/:id" element={<SearchDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
