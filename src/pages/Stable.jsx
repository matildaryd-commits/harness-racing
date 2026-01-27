import { useNavigate } from 'react-router-dom';
import { MapPin, Trophy, Users, ChevronRight, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function Stable() {
  const navigate = useNavigate();

  const stable = {
    name: 'Stall Markus Svedberg',
    owner: 'Markus Svedberg',
    location: 'Solvalla, Stockholm',
    description: 'Stall Markus Svedberg är ett professionellt travstall med fokus på kvalitet framför kvantitet. Vi tränar och utvecklar hästar i alla åldrar med målet att nå deras fulla potential på banan.',
    stats: {
      horses: 4,
      wins: 24,
      winRate: '32%',
      earnings: '4 850 000 kr'
    }
  };

  const horses = [
    { id: 1, name: 'Kinematic', status: 'I full träning', image: '/kinematic.png' },
    { id: 2, name: 'Pargas Sox', status: 'Konvalecent', image: '/pargas-sox.png' },
    { id: 3, name: 'Deeply Express', status: 'Anmäld till lopp', image: '/deeply-express.png' },
    { id: 4, name: 'Corsa Cortina', status: 'I full träning', image: '/costa-cortina.png' }
  ];

  const staff = [
    {
      name: 'Ronja Lamminen',
      role: 'Skötare',
      initials: 'RL',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop'
    }
  ];

  const owners = [
    { name: 'Matilda Rydow', initials: 'MR' },
    { name: 'Anna Lindgren', initials: 'AL' },
    { name: 'Erik Johansson', initials: 'EJ' },
    { name: 'Sofia Berg', initials: 'SB' },
    { name: 'Johan Ström', initials: 'JS' }
  ];

  const fans = [
    { name: 'Emma Karlsson', initials: 'EK' },
    { name: 'Lars Bergström', initials: 'LB' },
    { name: 'Elin Nordin', initials: 'EN' },
    { name: 'Karin Holm', initials: 'KH' },
    { name: 'Oscar Lindqvist', initials: 'OL' },
    { name: 'Mikael Fors', initials: 'MF' },
    { name: 'Helena Vik', initials: 'HV' }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Anmäld till lopp': return 'badge-race';
      case 'I full träning': return 'badge-active';
      case 'Konvalecent': return 'badge-recovery';
      default: return 'badge-active';
    }
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Stall"
        showBack
        stableName="Markus Svedberg"
      />

      <div className="content">
        <div className="card">
          <div className="stable-header">
            <Avatar initials="MS" style={{ width: '56px', height: '56px', fontSize: '20px' }} />
            <div className="stable-header-info">
              <h2>{stable.name}</h2>
              <p className="stable-location">
                <MapPin size={14} />
                {stable.location}
              </p>
            </div>
          </div>

          <p className="stable-description">{stable.description}</p>

          <div className="stable-stats-grid">
            <div className="stable-stat-item">
              <span className="stat-value">{stable.stats.horses}</span>
              <span className="stat-label">Hästar</span>
            </div>
            <div className="stable-stat-item">
              <span className="stat-value">{stable.stats.wins}</span>
              <span className="stat-label">Segrar 2026</span>
            </div>
            <div className="stable-stat-item">
              <span className="stat-value">{stable.stats.winRate}</span>
              <span className="stat-label">Segerprocent 2026</span>
            </div>
            <div className="stable-stat-item full-width">
              <span className="stat-value">{stable.stats.earnings}</span>
              <span className="stat-label">Insprungna pengar 2026</span>
            </div>
          </div>

          <button className="change-stable-btn" onClick={() => navigate('/choose-stable')}>
            <RefreshCw size={16} />
            Byt stall
          </button>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Personal</h3>
          {staff.map((person, index) => (
            <div
              key={index}
              className="staff-item"
              onClick={() => navigate('/caretaker')}
            >
              <div className="staff-image">
                <img src={person.image} alt={person.name} />
              </div>
              <div className="staff-info">
                <span className="staff-name">{person.name}</span>
                <span className="staff-role">{person.role}</span>
              </div>
              <ChevronRight size={18} className="staff-arrow" />
            </div>
          ))}
        </div>

        <div className="card">
          <div className="owners-section" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
            <div className="label">Ägare ({owners.length})</div>
            <div className="owners-list">
              {owners.map((owner, index) => (
                <div
                  key={index}
                  className="owner-item"
                  onClick={() => navigate('/owner')}
                >
                  <Avatar initials={owner.initials} size="small" />
                  <span className="owner-name">{owner.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fans-section">
            <div className="label">Fans ({fans.length})</div>
            <div className="owners-list">
              {fans.map((fan, index) => (
                <div key={index} className="owner-item fan-item">
                  <Avatar initials={fan.initials} size="small" />
                  <span className="owner-name">{fan.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '100px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Hästar ({horses.length})</h3>
          {horses.map((horse) => (
            <div
              key={horse.id}
              className="caretaker-horse-item"
              onClick={() => navigate(`/horses/${horse.id}`)}
            >
              <div className="caretaker-horse-image">
                <img src={horse.image} alt={horse.name} />
              </div>
              <div className="caretaker-horse-info">
                <span className="horse-name">{horse.name}</span>
                <span className={`badge ${getStatusClass(horse.status)}`}>{horse.status}</span>
              </div>
              <ChevronRight size={18} style={{ color: '#9CA3AF' }} />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
