import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft, MoreVertical, Users, Target, Euro, Percent,
  Clock, Edit2, Trash2, Pause, Play, MessageCircle, Heart,
  Check, X, ChevronRight, Star, Sparkles as SparklesIcon
} from 'lucide-react';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function SearchDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('matches');

  const searchData = {
    1: {
      title: 'Köp årsunghäst på auktion',
      type: 'auction-yearling',
      typeLabel: 'Auktionshäst',
      typeIcon: '🎯',
      status: 'active',
      criteria: {
        horseType: 'Ettåring på auktion',
        ageRange: '1 år',
        budget: '100 000 - 200 000 kr',
        ownershipWanted: '25%',
        goals: ['Tävling', 'Långsiktig investering'],
        timeline: 'Inom 1-3 månader',
        pedigree: ['Svensk avel', 'Fransk avel']
      },
      createdAt: '2 dagar sedan',
      matches: [
        {
          id: 'm1',
          user: { name: 'Erik Johansson', initials: 'EJ' },
          matchPercent: 92,
          message: 'Hej! Jag är också intresserad av att köpa på Derbyauktionen. Kanske vi kan gå ihop?',
          criteria: {
            budget: '150 000 - 250 000 kr',
            ownership: '50%',
            goals: ['Tävling', 'Gemenskap']
          },
          sentAt: '3 timmar sedan',
          status: 'pending'
        },
        {
          id: 'm2',
          user: { name: 'Sofia Berg', initials: 'SB' },
          matchPercent: 85,
          message: 'Har du kikat på Velocity Dream? Verkar intressant!',
          criteria: {
            budget: '100 000 - 200 000 kr',
            ownership: '25%',
            goals: ['Hobby', 'Investering']
          },
          sentAt: '1 dag sedan',
          status: 'pending'
        },
        {
          id: 'm3',
          user: { name: 'Johan Ström', initials: 'JS' },
          matchPercent: 78,
          criteria: {
            budget: '80 000 - 150 000 kr',
            ownership: '33%',
            goals: ['Tävling']
          },
          sentAt: '2 dagar sedan',
          status: 'pending'
        }
      ],
      suggestedHorses: [
        {
          id: 'h1',
          name: 'Velocity Dream',
          age: '1 år',
          sire: 'Readly Express',
          dam: 'Speed Queen',
          image: '/kinematic.png',
          price: '180 000 kr',
          source: 'Derbyauktionen 2025',
          trainerPick: true
        },
        {
          id: 'h2',
          name: 'Golden Spirit',
          age: '1 år',
          sire: 'Nuncio',
          dam: 'Golden Girl',
          image: '/pargas-sox.png',
          price: '120 000 kr',
          source: 'Menhammar Online Sales'
        }
      ]
    },
    2: {
      title: 'Hitta starthäst',
      type: 'ready-to-race',
      typeLabel: 'Starthäst',
      typeIcon: '🏇',
      status: 'active',
      criteria: {
        horseType: 'Starthäst (3-5 år)',
        ageRange: '3-5 år',
        budget: '150 000 - 300 000 kr',
        ownershipWanted: '50%',
        goals: ['Tävling', 'Snabb start'],
        timeline: 'Så snart som möjligt',
        pedigree: ['Alla']
      },
      createdAt: '1 vecka sedan',
      matches: [
        {
          id: 'm4',
          user: { name: 'Anna Lindgren', initials: 'AL' },
          matchPercent: 88,
          message: 'Jag letar också efter en starthäst! Ska vi prata mer?',
          criteria: {
            budget: '200 000 - 350 000 kr',
            ownership: '50%',
            goals: ['Tävling', 'Hobby']
          },
          sentAt: '5 timmar sedan',
          status: 'pending'
        },
        {
          id: 'm5',
          user: { name: 'Per Nilsson', initials: 'PN' },
          matchPercent: 82,
          criteria: {
            budget: '150 000 - 250 000 kr',
            ownership: '33%',
            goals: ['Snabb start']
          },
          sentAt: '1 dag sedan',
          status: 'pending'
        }
      ],
      suggestedHorses: [
        {
          id: 'h3',
          name: 'Quick Silver',
          age: '4 år',
          sire: 'Maharajah',
          dam: 'Silver Lady',
          image: '/deeply-express.png',
          price: '250 000 kr',
          source: 'Travera',
          record: '1.14,5',
          trainerPick: true
        }
      ]
    }
  };

  const search = searchData[id] || searchData[1];

  const menuItems = [
    { icon: Edit2, label: 'Redigera sökning' },
    { icon: search.status === 'active' ? Pause : Play, label: search.status === 'active' ? 'Pausa sökning' : 'Aktivera sökning' },
    { icon: Trash2, label: 'Ta bort sökning', danger: true }
  ];

  return (
    <div className="page-wrapper">
      {/* Header */}
      <div className="search-detail-header">
        <div className="header-section-context">
          <SparklesIcon size={12} />
          <span>Hitta häst</span>
        </div>
        <div className="search-detail-header-controls">
          <button className="back-btn-light" onClick={() => navigate('/matchmaking')}>
            <ChevronLeft size={20} />
          </button>
          <h1>Sökdetaljer</h1>
          <button className="menu-btn-light" onClick={() => setShowMenu(!showMenu)}>
            <MoreVertical size={20} />
          </button>
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`dropdown-item ${item.danger ? 'danger' : ''}`}
                onClick={() => setShowMenu(false)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="content">
        {/* Search Overview Card */}
        <div className="card search-overview-card">
          <div className="search-overview-header">
            <span className="search-type-icon large">{search.typeIcon}</span>
            <div>
              <h2>{search.title}</h2>
              <span className="search-type-label">{search.typeLabel}</span>
            </div>
            <div className={`status-badge ${search.status}`}>
              {search.status === 'active' ? 'Aktiv' : 'Pausad'}
            </div>
          </div>

          <div className="search-criteria-grid">
            <div className="criteria-cell">
              <Target size={16} />
              <div>
                <span className="label">Typ</span>
                <span className="value">{search.criteria.horseType}</span>
              </div>
            </div>
            <div className="criteria-cell">
              <Euro size={16} />
              <div>
                <span className="label">Budget</span>
                <span className="value">{search.criteria.budget}</span>
              </div>
            </div>
            <div className="criteria-cell">
              <Percent size={16} />
              <div>
                <span className="label">Ägarandel</span>
                <span className="value">{search.criteria.ownershipWanted}</span>
              </div>
            </div>
            <div className="criteria-cell">
              <Clock size={16} />
              <div>
                <span className="label">Tidsram</span>
                <span className="value">{search.criteria.timeline}</span>
              </div>
            </div>
          </div>

          <div className="search-goals">
            {search.criteria.goals.map((goal, idx) => (
              <span key={idx} className="goal-badge">{goal}</span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          <button
            className={`detail-tab ${activeTab === 'matches' ? 'active' : ''}`}
            onClick={() => setActiveTab('matches')}
          >
            <Users size={16} />
            Matchningar ({search.matches.length})
          </button>
          <button
            className={`detail-tab ${activeTab === 'horses' ? 'active' : ''}`}
            onClick={() => setActiveTab('horses')}
          >
            <Star size={16} />
            Föreslagna hästar ({search.suggestedHorses.length})
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'matches' && (
          <div className="matches-list">
            {search.matches.length === 0 ? (
              <div className="empty-matches">
                <Users size={48} />
                <h3>Inga matchningar ännu</h3>
                <p>Vi letar aktivt efter personer som matchar dina kriterier.</p>
              </div>
            ) : (
              search.matches.map((match) => (
                <div key={match.id} className="card match-card">
                  <div className="match-card-header">
                    <Avatar initials={match.user.initials} />
                    <div className="match-user-info">
                      <h3>{match.user.name}</h3>
                      <span className="match-time">{match.sentAt}</span>
                    </div>
                    <div className="match-percent">
                      <span className="percent-value">{match.matchPercent}%</span>
                      <span className="percent-label">match</span>
                    </div>
                  </div>

                  {match.message && (
                    <div className="match-message">
                      <MessageCircle size={14} />
                      <p>"{match.message}"</p>
                    </div>
                  )}

                  <div className="match-criteria">
                    <div className="match-criteria-item">
                      <span className="label">Budget:</span>
                      <span>{match.criteria.budget}</span>
                    </div>
                    <div className="match-criteria-item">
                      <span className="label">Andel:</span>
                      <span>{match.criteria.ownership}</span>
                    </div>
                  </div>

                  <div className="match-goals">
                    {match.criteria.goals.map((goal, idx) => (
                      <span key={idx} className="mini-goal-badge">{goal}</span>
                    ))}
                  </div>

                  <div className="match-actions">
                    <button className="match-action-btn decline">
                      <X size={18} />
                      Avböj
                    </button>
                    <button className="match-action-btn accept">
                      <Check size={18} />
                      Acceptera
                    </button>
                    <button className="match-action-btn message">
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'horses' && (
          <div className="suggested-horses-list">
            {search.suggestedHorses.map((horse) => (
              <div key={horse.id} className="card suggested-horse-card">
                {horse.trainerPick && (
                  <div className="trainer-pick-badge">
                    <Sparkles size={12} />
                    <span>Tränarens val</span>
                  </div>
                )}

                <div className="suggested-horse-content">
                  <div className="suggested-horse-image">
                    <img src={horse.image} alt={horse.name} />
                  </div>
                  <div className="suggested-horse-info">
                    <h3>{horse.name}</h3>
                    <p className="pedigree">{horse.age} • e. {horse.sire}</p>
                    <p className="dam">u. {horse.dam}</p>
                    {horse.record && (
                      <span className="record-badge">{horse.record}</span>
                    )}
                  </div>
                  <div className="suggested-horse-price">
                    <span className="price">{horse.price}</span>
                    <span className="source">{horse.source}</span>
                  </div>
                </div>

                <div className="suggested-horse-actions">
                  <button className="btn btn-outline btn-small">
                    <Heart size={16} />
                    Spara
                  </button>
                  <button className="btn btn-primary btn-small">
                    Hitta delägare
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
