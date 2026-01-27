import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, MoreVertical, UserPlus, Star, AlertCircle, BookOpen, Target, Activity, FileText, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function HorseDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);

  const horsesData = {
    1: {
      name: 'Kinematic',
      image: '/kinematic.png',
      status: 'I full träning',
      statusClass: 'badge-active',
      age: 6,
      gender: 'Sto',
      father: 'Nuncio',
      mother: 'Mystical Ann',
      grandfather: 'Kadabra',
      caretaker: 'Ronja Lamminen',
      owners: [
        { name: 'Matilda Rydow', initials: 'MR' }
      ],
      fans: [
        { name: 'Emma Karlsson', initials: 'EK' },
        { name: 'Lars Bergström', initials: 'LB' },
        { name: 'Elin Nordin', initials: 'EN' }
      ]
    },
    2: {
      name: 'Pargas Sox',
      image: '/pargas-sox.png',
      status: 'Konvalecent',
      statusClass: 'badge-recovery',
      age: 3,
      gender: 'Sto',
      father: 'Maharajah',
      mother: 'Halka de Vandel',
      grandfather: 'Viking Kronos',
      caretaker: 'Ronja Lamminen',
      owners: [
        { name: 'Matilda Rydow', initials: 'MR' },
        { name: 'Anna Lindgren', initials: 'AL' },
        { name: 'Erik Johansson', initials: 'EJ' }
      ],
      fans: [
        { name: 'Karin Holm', initials: 'KH' },
        { name: 'Oscar Lindqvist', initials: 'OL' }
      ]
    },
    3: {
      name: 'Deeply Express',
      image: '/deeply-express.png',
      status: 'Anmäld till lopp',
      statusClass: 'badge-race',
      age: 7,
      gender: 'Valack',
      father: 'Readly Express',
      mother: 'Lady Eowyn',
      grandfather: 'Magnetic Power',
      caretaker: 'Ronja Lamminen',
      owners: [
        { name: 'Matilda Rydow', initials: 'MR' },
        { name: 'Sofia Berg', initials: 'SB' },
        { name: 'Johan Ström', initials: 'JS' },
        { name: 'Per Nilsson', initials: 'PN' }
      ],
      fans: [
        { name: 'Mikael Fors', initials: 'MF' },
        { name: 'Helena Vik', initials: 'HV' },
        { name: 'Gustav Svensson', initials: 'GS' },
        { name: 'Ida Persson', initials: 'IP' }
      ]
    },
    4: {
      name: 'Corsa Cortina',
      image: '/costa-cortina.png',
      status: 'I full träning',
      statusClass: 'badge-active',
      age: 2,
      gender: 'Sto',
      father: 'Calgary Games',
      mother: 'Make Approach',
      grandfather: 'Viking Kronos',
      caretaker: 'Ronja Lamminen',
      owners: [
        { name: 'Matilda Rydow', initials: 'MR' },
        { name: 'Maria Karlsson', initials: 'MK' },
        { name: 'Lisa Ek', initials: 'LE' },
        { name: 'Anders Lund', initials: 'AL' }
      ],
      fans: [
        { name: 'Nina Ekström', initials: 'NE' }
      ]
    }
  };

  const horse = horsesData[id] || horsesData[1];

  const menuItems = [
    { icon: UserPlus, label: 'Bjud in följare', action: () => navigate(`/horses/${id}/invite`) },
    { icon: Star, label: 'Lägg till som favorit', action: () => {} },
    { icon: AlertCircle, label: 'Rapportera problem', action: () => {} }
  ];

  const features = [
    { icon: BookOpen, iconClass: 'blue', title: 'Om & historik', subtitle: 'Stamtavla & bakgrund' },
    { icon: Target, iconClass: 'orange', title: 'Planering', subtitle: 'Mål & preferenser' },
    { icon: Activity, iconClass: 'purple', title: 'Träning', subtitle: 'Uppdateringar & schema' },
    { icon: FileText, iconClass: 'teal', title: 'Admin', subtitle: 'Ekonomi & dokument' }
  ];

  return (
    <div className="page-wrapper">
      <div className="horse-hero">
        <img src={horse.image} alt={horse.name} />
        <div className="horse-hero-nav">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ChevronLeft size={20} />
          </button>
          <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <MoreVertical size={20} />
          </button>
        </div>

        {showMenu && (
          <div className="horse-menu">
            {menuItems.map((item, index) => (
              <div key={index} className="horse-menu-item" onClick={() => { setShowMenu(false); item.action(); }}>
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card overview-card">
        <div className="overview-header">
          <h2>{horse.name}</h2>
          <span className={`badge ${horse.statusClass}`}>{horse.status}</span>
        </div>

        <div className="overview-grid">
          <div className="overview-item">
            <div className="label">Ålder</div>
            <div className="value">{horse.age} år</div>
          </div>
          <div className="overview-item">
            <div className="label">Kön</div>
            <div className="value">{horse.gender}</div>
          </div>
          <div className="overview-item">
            <div className="label">Far</div>
            <div className="value clickable-value" onClick={() => navigate(`/horses/${id}/pedigree`)}>{horse.father}</div>
          </div>
          <div className="overview-item">
            <div className="label">Mor</div>
            <div className="value clickable-value" onClick={() => navigate(`/horses/${id}/pedigree`)}>{horse.mother}</div>
          </div>
          <div className="overview-item">
            <div className="label">Morfar</div>
            <div className="value clickable-value" onClick={() => navigate(`/horses/${id}/pedigree`)}>{horse.grandfather}</div>
          </div>
          <div className="overview-item">
            <div className="label">Skötare</div>
            <div className="value clickable-value" onClick={() => navigate('/caretaker')}>{horse.caretaker}</div>
          </div>
        </div>

        <div className="owners-section">
          <div className="label">Ägare</div>
          <div className="owners-list">
            {horse.owners.map((owner, index) => (
              <div key={index} className="owner-item">
                <Avatar initials={owner.initials} size="small" />
                <span className="owner-name">{owner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {horse.fans && horse.fans.length > 0 && (
          <div className="fans-section">
            <div className="label">Fans ({horse.fans.length})</div>
            <div className="owners-list">
              {horse.fans.map((fan, index) => (
                <div key={index} className="owner-item fan-item">
                  <Avatar initials={fan.initials} size="small" />
                  <span className="owner-name">{fan.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className={`feature-card-icon ${feature.iconClass}`}>
              <feature.icon size={20} />
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.subtitle}</p>
            <ChevronRight size={16} className="arrow" />
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
