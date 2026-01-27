import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Horses() {
  const navigate = useNavigate();

  const horses = [
    { id: 1, name: 'Kinematic', status: 'I full träning', image: '/kinematic.png', ownerType: 'Ägare', ownership: 100 },
    { id: 2, name: 'Pargas Sox', status: 'Konvalecent', image: '/pargas-sox.png', ownerType: 'Delägare', ownership: 33 },
    { id: 3, name: 'Deeply Express', status: 'Anmäld till lopp', image: '/deeply-express.png', ownerType: 'Delägare', ownership: 25 },
    { id: 4, name: 'Corsa Cortina', status: 'I full träning', image: '/costa-cortina.png', ownerType: 'Delägare', ownership: 25 }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Anmäld till lopp':
        return 'badge-race';
      case 'I full träning':
        return 'badge-active';
      case 'Vintervila':
        return 'badge-rest';
      case 'Konvalecent':
        return 'badge-recovery';
      default:
        return 'badge-active';
    }
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Hästar"
        stableName="Markus Svedberg"
      />

      <div className="content">
        {horses.map((horse) => (
          <div
            key={horse.id}
            className="card card-clickable horse-list-card"
            onClick={() => navigate(`/horses/${horse.id}`)}
          >
            <div className="horse-list-image">
              <img src={horse.image} alt={horse.name} />
            </div>
            <div className="horse-list-info">
              <h3>{horse.name}</h3>
              <span className={`badge ${getStatusClass(horse.status)}`}>
                {horse.status}
              </span>
            </div>
            <div className="horse-ownership">
              <span className="ownership-type">{horse.ownerType}</span>
              <span className="ownership-percent">{horse.ownership}%</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
