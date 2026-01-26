import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, MoreVertical, UserPlus, Star, AlertCircle, BookOpen, Target, Activity, FileText, ChevronRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function HorseDetail() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(true);

  const horse = {
    name: 'Deeply Express',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop',
    status: 'Aktiv',
    gender: 'Valack',
    father: 'Readly Express',
    mother: 'Lady Eowyn',
    caretaker: 'Ronja Lamminen',
    owners: 'Alex, Johnson & Adam',
    races: 13,
    wins: 5,
    winRate: '38%'
  };

  const menuItems = [
    { icon: UserPlus, label: 'Bjud In Följare' },
    { icon: Star, label: 'Lägg Till Som Favorit' },
    { icon: AlertCircle, label: 'Rapportera Problem' }
  ];

  const features = [
    { icon: BookOpen, iconClass: 'blue', title: 'Om & Historik', subtitle: 'Stamtavla & Bakgrund' },
    { icon: Target, iconClass: 'orange', title: 'Planering', subtitle: 'Mål & Preferenser' },
    { icon: Activity, iconClass: 'purple', title: 'Träning', subtitle: 'Uppdateringar & Schema' },
    { icon: FileText, iconClass: 'teal', title: 'Admin', subtitle: 'Ekonomi & Dokument' }
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
              <div key={index} className="horse-menu-item">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card overview-card">
        <div className="overview-header">
          <h2>Översikt</h2>
          <span className="badge badge-active">Aktiv</span>
        </div>

        <div className="overview-grid">
          <div className="overview-item">
            <div className="label">Namn</div>
            <div className="value">{horse.name}</div>
          </div>
          <div className="overview-item">
            <div className="label">Kön</div>
            <div className="value">{horse.gender}</div>
          </div>
          <div className="overview-item">
            <div className="label">Far</div>
            <div className="value">{horse.father}</div>
          </div>
          <div className="overview-item">
            <div className="label">Mor</div>
            <div className="value">{horse.mother}</div>
          </div>
          <div className="overview-item">
            <div className="label">Skötare</div>
            <div className="value">{horse.caretaker}</div>
          </div>
          <div className="overview-item">
            <div className="label">Ägare</div>
            <div className="value">{horse.owners}</div>
          </div>
        </div>
      </div>

      <div className="card quick-stats" style={{ margin: '0 16px 16px' }}>
        <h3>Snabbstatistik</h3>
        <div className="quick-stats-grid">
          <div className="quick-stat">
            <div className="value">{horse.races}</div>
            <div className="label">Lopp</div>
          </div>
          <div className="quick-stat">
            <div className="value highlight">0{horse.wins}</div>
            <div className="label">Segrar</div>
          </div>
          <div className="quick-stat">
            <div className="value">{horse.winRate}</div>
            <div className="label">Vinstprocent</div>
          </div>
        </div>
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
