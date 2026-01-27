import { useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, Users, Plus } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

export default function ChooseStable() {
  const navigate = useNavigate();

  const stables = [
    {
      id: 1,
      name: 'Stall Markus Svedberg',
      owner: 'Markus Svedberg',
      initials: 'MS',
      roles: ['Ägare', 'Delägare'],
      location: 'Eskilstuna',
      horses: 4
    },
    {
      id: 2,
      name: 'Stall Björn Goop',
      owner: 'Björn Goop',
      initials: 'BG',
      roles: ['Delägare'],
      location: 'Färjestad',
      horses: 12
    }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Välj stall"
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
              <div className="stable-roles">
                {stable.roles.map((role, idx) => (
                  <span key={idx} className={`badge ${role === 'Ägare' ? 'badge-owner' : 'badge-co-owner'}`}>
                    {role}
                  </span>
                ))}
              </div>
              <div className="stable-stats">
                <span><MapPin size={14} /> {stable.location}</span>
                <span><Users size={14} /> {stable.horses} hästar</span>
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
            <h3>Lägg till nytt stall</h3>
            <p>Ange kod eller bläddra</p>
          </div>
        </div>
      </div>
    </div>
  );
}
