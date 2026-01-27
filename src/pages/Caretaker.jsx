import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Phone, Mail, Home } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Caretaker() {
  const navigate = useNavigate();

  const caretaker = {
    name: 'Ronja Lamminen',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
    role: 'Skötare',
    description: 'Ronja har arbetat med travhästar i över 10 år och är ansvarig för den dagliga skötseln av hästarna i stallet. Hon har en särskild förmåga att läsa av hästarnas välmående och ser till att varje häst får individuellt anpassad omvårdnad.',
    phone: '+46 70 123 45 67',
    email: 'ronja.lamminen@stallmarkus.se',
    horses: [
      { id: 1, name: 'Kinematic', status: 'I full träning', image: '/kinematic.png' },
      { id: 2, name: 'Pargas Sox', status: 'Konvalecent', image: '/pargas-sox.png' },
      { id: 3, name: 'Deeply Express', status: 'Anmäld till lopp', image: '/deeply-express.png' },
      { id: 4, name: 'Corsa Cortina', status: 'I full träning', image: '/costa-cortina.png' }
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
        <img src={caretaker.image} alt={caretaker.name} />
        <div className="caretaker-hero-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>

      <div className="card caretaker-card">
        <h2>{caretaker.name}</h2>
        <span className="badge badge-owner">{caretaker.role}</span>
        <p className="caretaker-description">{caretaker.description}</p>

        <div className="caretaker-contact">
          <a href={`tel:${caretaker.phone}`} className="contact-item">
            <Phone size={16} />
            <span>{caretaker.phone}</span>
          </a>
          <a href={`mailto:${caretaker.email}`} className="contact-item">
            <Mail size={16} />
            <span>{caretaker.email}</span>
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
        <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Hästar i träning</h3>
        {caretaker.horses.map((horse) => (
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
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
