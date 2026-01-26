import { NavLink } from 'react-router-dom';
import { Home, Users, Sparkles, Calendar, User } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Hem</span>
      </NavLink>
      <NavLink to="/horses" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Users size={24} />
        <span>Hästar</span>
      </NavLink>
      <NavLink to="/matchmaking" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Sparkles size={24} />
        <span>Matchning</span>
      </NavLink>
      <NavLink to="/events" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Calendar size={24} />
        <span>Event</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <User size={24} />
        <span>Profil</span>
      </NavLink>
    </nav>
  );
}
