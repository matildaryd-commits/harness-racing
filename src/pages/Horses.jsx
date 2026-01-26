import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function Horses() {
  const navigate = useNavigate();

  const horses = [
    { id: 1, name: 'Kinematic', status: 'Aktiv', wins: 8, races: 15, initials: 'KI' },
    { id: 2, name: 'Pargas Sox', status: 'Aktiv', wins: 6, races: 12, initials: 'PS' },
    { id: 3, name: 'Deeply Express', status: 'Aktiv', wins: 5, races: 13, initials: 'DE' },
    { id: 4, name: 'Costa Cortina', status: 'Vila', wins: 4, races: 10, initials: 'CC' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Hästar"
        subtitle="Dina stallhästar"
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
              <span className={`badge ${horse.status === 'Aktiv' ? 'badge-active' : 'badge-owner'}`} style={{ marginBottom: 0 }}>
                {horse.status}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#0D7377' }}>{horse.wins}</div>
              <div style={{ fontSize: '11px', color: '#6B7280' }}>segrar / {horse.races} lopp</div>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
