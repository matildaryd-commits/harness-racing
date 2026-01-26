import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Key, Search, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

export default function Welcome() {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const browseStables = [
    {
      id: 1,
      name: 'Mark Racing',
      owner: 'Johnson Mark',
      initials: 'JM',
      location: 'Solvalla',
      horses: 15,
      wins: 10,
      winRate: '48%',
      fans: 194
    },
    {
      id: 2,
      name: 'Lindqvist Trav',
      owner: 'Erik Lindqvist',
      initials: 'EL',
      location: 'Åby',
      horses: 12,
      wins: 8,
      winRate: '42%',
      fans: 156
    },
    {
      id: 3,
      name: 'Björk Stables',
      owner: 'Anna Björk',
      initials: 'AB',
      location: 'Jägersro',
      horses: 18,
      wins: 14,
      winRate: '52%',
      fans: 230
    }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Välkommen!"
        subtitle="Kom igång genom att gå med i ett stall"
      />

      <div className="card access-code-card">
        <div className="key-icon">
          <Key size={24} />
        </div>
        <h3>Har Du En Åtkomstkod?</h3>
        <p>Ange din tränares kod för att få åtkomst</p>
        <input
          type="text"
          placeholder="Ange 6-siffrig kod"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          style={{ marginBottom: '12px' }}
        />
        <button className="btn btn-primary" onClick={() => navigate('/home')}>
          Gå Med I Stall
        </button>
      </div>

      <div className="content">
        <div className="divider">ELLER</div>

        <div className="browse-section">
          <h2>Bläddra Bland Stall</h2>
          <p>Följ stall eller begär ägaråtkomst</p>

          <div className="search-input-wrapper">
            <Search size={20} />
            <input
              type="search"
              placeholder="Sök efter tränare eller plats"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {browseStables.map((stable) => (
            <div key={stable.id} className="card browse-stable-card">
              <div className="browse-stable-header">
                <Avatar initials={stable.initials} />
                <div>
                  <h3>{stable.name}</h3>
                  <p className="owner-name">{stable.owner}</p>
                </div>
              </div>
              <div className="location">
                <MapPin size={14} /> {stable.location}
              </div>
              <div className="browse-stats">
                <div>
                  <div className="stat-value">{stable.horses}</div>
                  <div className="stat-label">Hästar</div>
                </div>
                <div>
                  <div className="stat-value highlight">{stable.wins}</div>
                  <div className="stat-label">Segrar</div>
                </div>
                <div>
                  <div className="stat-value highlight">{stable.winRate}</div>
                  <div className="stat-label">Vinstprocent</div>
                </div>
                <div>
                  <div className="stat-value">{stable.fans}</div>
                  <div className="stat-label">Följare</div>
                </div>
              </div>
              <div className="browse-card-buttons">
                <button className="btn btn-primary btn-small">Följ</button>
                <button className="btn btn-outline btn-small">Begär Åtkomst</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
