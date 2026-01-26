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
      location: 'Place here',
      horses: 15,
      wins: 10,
      winRate: '48%',
      fans: 194
    },
    {
      id: 2,
      name: 'Mark Racing',
      owner: 'Johnson Mark',
      initials: 'JM',
      location: 'Place here',
      horses: 15,
      wins: 10,
      winRate: '48%',
      fans: 194
    },
    {
      id: 3,
      name: 'Mark Racing',
      owner: 'Johnson Mark',
      initials: 'JM',
      location: 'Place here',
      horses: 15,
      wins: 10,
      winRate: '48%',
      fans: 194
    }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Welcome!"
        subtitle="Get started by joining a stable"
      />

      <div className="card access-code-card">
        <div className="key-icon">
          <Key size={24} />
        </div>
        <h3>Have An Access Code?</h3>
        <p>Enter your trainer's code to get access</p>
        <input
          type="text"
          placeholder="Enter 6-digit code"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          style={{ marginBottom: '12px' }}
        />
        <button className="btn btn-primary" onClick={() => navigate('/home')}>
          Join Stable
        </button>
      </div>

      <div className="content">
        <div className="divider">OR</div>

        <div className="browse-section">
          <h2>Browse Stables</h2>
          <p>Follow stables or request owner access</p>

          <div className="search-input-wrapper">
            <Search size={20} />
            <input
              type="search"
              placeholder="Search by trainer or location"
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
                  <div className="stat-label">Horses</div>
                </div>
                <div>
                  <div className="stat-value highlight">{stable.wins}</div>
                  <div className="stat-label">Wins</div>
                </div>
                <div>
                  <div className="stat-value highlight">{stable.winRate}</div>
                  <div className="stat-label">Win Rate</div>
                </div>
                <div>
                  <div className="stat-value">{stable.fans}</div>
                  <div className="stat-label">Fans</div>
                </div>
              </div>
              <div className="browse-card-buttons">
                <button className="btn btn-primary btn-small">Follow</button>
                <button className="btn btn-outline btn-small">Request Access</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
