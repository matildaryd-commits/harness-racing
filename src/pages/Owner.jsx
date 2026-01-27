import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Phone, Mail, Home } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Owner() {
  const navigate = useNavigate();

  const owner = {
    name: 'Matilda Rydow',
    image: '/matilda-profile.png',
    role: 'Ägare',
    description: 'Matilda är en passionerad hästägare med fokus på travsporten. Hon har varit delägare i flera framgångsrika hästar och brinner för att följa hästarnas utveckling från nära håll.',
    phone: '+46 70 234 56 78',
    email: 'matilda.rydow@email.com',
    horses: [
      { id: 1, name: 'Kinematic', status: 'I full träning', image: '/kinematic.png', ownership: '100%' },
      { id: 2, name: 'Pargas Sox', status: 'Konvalecent', image: '/pargas-sox.png', ownership: '33%' },
      { id: 3, name: 'Deeply Express', status: 'Anmäld till lopp', image: '/deeply-express.png', ownership: '25%' },
      { id: 4, name: 'Corsa Cortina', status: 'I full träning', image: '/costa-cortina.png', ownership: '25%' }
    ]
  };

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
      <div className="caretaker-hero">
        <img src={owner.image} alt={owner.name} />
        <div className="caretaker-hero-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>

      <div className="card caretaker-card">
        <h2>{owner.name}</h2>
        <span className="badge badge-owner">{owner.role}</span>
        <p className="caretaker-description">{owner.description}</p>

        <div className="caretaker-contact">
          <a href={`tel:${owner.phone}`} className="contact-item">
            <Phone size={16} />
            <span>{owner.phone}</span>
          </a>
          <a href={`mailto:${owner.email}`} className="contact-item">
            <Mail size={16} />
            <span>{owner.email}</span>
          </a>
        </div>
      </div>

      <div className="card" style={{ margin: '0 16px 16px' }}>
        <div
          className="stable-link-item"
          onClick={() => navigate('/stable')}
        >
          <div className="stable-link-icon">
            <Home size={20} />
          </div>
          <div className="stable-link-info">
            <span className="stable-link-name">Stall Markus Svedberg</span>
            <span className="stable-link-label">Visa stall</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ margin: '0 16px 100px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Ägarandelar</h3>
        {owner.horses.map((horse) => (
          <div
            key={horse.id}
            className="caretaker-horse-item"
            onClick={() => navigate(`/horses/${horse.id}`)}
            style={{ justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="caretaker-horse-image">
                <img src={horse.image} alt={horse.name} />
              </div>
              <div className="caretaker-horse-info">
                <span className="horse-name">{horse.name}</span>
                <span className={`badge ${getStatusClass(horse.status)}`}>{horse.status}</span>
              </div>
            </div>
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#0D7377' }}>{horse.ownership}</span>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
