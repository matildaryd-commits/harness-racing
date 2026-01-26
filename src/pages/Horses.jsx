import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function Horses() {
  const navigate = useNavigate();

  const horses = [
    { id: 1, name: 'Deeply Express', status: 'Active', wins: 5, races: 13, initials: 'DE' },
    { id: 2, name: 'Storm Runner', status: 'Active', wins: 8, races: 20, initials: 'SR' },
    { id: 3, name: 'Night Shadow', status: 'Resting', wins: 3, races: 10, initials: 'NS' },
    { id: 4, name: 'Golden Star', status: 'Active', wins: 12, races: 25, initials: 'GS' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Horses"
        subtitle="Your stable's horses"
        showMenu
        showNotification
      />

      <div className="content">
        {horses.map((horse) => (
          <div
            key={horse.id}
            className="card card-clickable"
            onClick={() => navigate(`/horses/${horse.id}`)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Avatar initials={horse.initials} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{horse.name}</h3>
              <span className={`badge ${horse.status === 'Active' ? 'badge-active' : 'badge-owner'}`} style={{ marginBottom: 0 }}>
                {horse.status}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#0D7377' }}>{horse.wins}</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>wins / {horse.races} races</div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
