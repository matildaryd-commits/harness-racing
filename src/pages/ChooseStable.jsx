import { useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, Users, Trophy, Plus } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

export default function ChooseStable() {
  const navigate = useNavigate();

  const stables = [
    {
      id: 1,
      name: 'Mark Racing',
      owner: 'Johnson Mark',
      initials: 'JM',
      role: 'Ägare',
      location: 'Solvalla',
      horses: 10,
      wins: 6
    },
    {
      id: 2,
      name: 'Adam Stables',
      owner: 'Adam Smith',
      initials: 'AS',
      role: 'Delägare',
      location: 'Åby',
      horses: 10,
      wins: 6
    }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Välj Ditt Stall"
        subtitle="Välj ett stall för att se uppdateringar"
      />

      <div className="content">
        {stables.map((stable) => (
          <div
            key={stable.id}
            className="card card-clickable stable-card"
            onClick={() => navigate('/home')}
          >
            <Avatar initials={stable.initials} />
            <div className="stable-card-content">
              <h3>{stable.name}</h3>
              <p className="owner-name">{stable.owner}</p>
              <span className={`badge ${stable.role === 'Ägare' ? 'badge-owner' : 'badge-co-owner'}`}>
                {stable.role}
              </span>
              <div className="stable-stats">
                <span><MapPin size={14} /> {stable.location}</span>
                <span><Users size={14} /> {stable.horses} hästar</span>
                <span><Trophy size={14} /> {stable.wins} segrar</span>
              </div>
            </div>
            <ChevronRight className="arrow" size={20} />
          </div>
        ))}

        <div className="card card-clickable add-stable-card" onClick={() => navigate('/welcome')}>
          <div className="plus-icon">
            <Plus size={24} />
          </div>
          <div>
            <h3>Lägg Till Nytt Stall</h3>
            <p>Ange kod eller bläddra</p>
          </div>
        </div>
      </div>
    </div>
  );
}
