import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Plus, Users, Search, Sparkles, ShoppingBag, ChevronRight,
  Heart, Target, TrendingUp, Clock, MapPin, Euro, Percent,
  Star, MessageCircle, UserPlus, Filter, ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function Matchmaking() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my-searches');
  const [showInterestModal, setShowInterestModal] = useState(null);

  const tabs = [
    { id: 'my-searches', label: 'Mina sökningar', icon: Search },
    { id: 'explore', label: 'Utforska', icon: Users },
    { id: 'suggestions', label: 'Förslag', icon: Sparkles },
    { id: 'marketplace', label: 'Marknad', icon: ShoppingBag }
  ];

  const mySearches = [
    {
      id: 1,
      title: 'Köp årsunghäst på auktion',
      type: 'auction-yearling',
      status: 'active',
      matchCount: 3,
      criteria: {
        horseType: 'Ettåring',
        budget: '100 000 - 200 000 kr',
        ownershipWanted: '25%',
        goals: ['Tävling', 'Långsiktig investering']
      },
      createdAt: '2 dagar sedan'
    },
    {
      id: 2,
      title: 'Hitta starthäst',
      type: 'ready-to-race',
      status: 'active',
      matchCount: 5,
      criteria: {
        horseType: 'Starthäst (3-5 år)',
        budget: '150 000 - 300 000 kr',
        ownershipWanted: '50%',
        goals: ['Tävling', 'Snabb start']
      },
      createdAt: '1 vecka sedan'
    }
  ];

  const exploreSearches = [
    {
      id: 101,
      user: { name: 'Erik Johansson', initials: 'EJ' },
      title: 'Söker delägare till auktionshäst',
      type: 'auction-yearling',
      matchPercent: 92,
      criteria: {
        horseType: 'Ettåring på Derbyauktionen',
        budget: '150 000 - 250 000 kr',
        ownershipOffered: '25-50%',
        goals: ['Tävling', 'Gemenskap']
      },
      interestedCount: 4,
      createdAt: '3 timmar sedan'
    },
    {
      id: 102,
      user: { name: 'Sofia Berg', initials: 'SB' },
      title: 'Vill köpa starthäst tillsammans',
      type: 'ready-to-race',
      matchPercent: 85,
      criteria: {
        horseType: 'Starthäst med rekord',
        budget: '200 000 - 400 000 kr',
        ownershipOffered: '33%',
        goals: ['Tävling', 'Hobby']
      },
      interestedCount: 2,
      createdAt: '1 dag sedan'
    },
    {
      id: 103,
      user: { name: 'Anna Lindgren', initials: 'AL' },
      title: 'Letar efter avelshäst',
      type: 'breeding',
      matchPercent: 68,
      criteria: {
        horseType: 'Sto för avel',
        budget: '50 000 - 150 000 kr',
        ownershipOffered: '50%',
        goals: ['Avel', 'Långsiktig']
      },
      interestedCount: 1,
      createdAt: '2 dagar sedan'
    }
  ];

  const trainerSuggestions = [
    {
      id: 201,
      type: 'trainer-pick',
      horse: {
        name: 'Velocity Dream',
        age: '1 år',
        sire: 'Readly Express',
        dam: 'Speed Queen',
        image: '/kinematic.png'
      },
      source: 'Derbyauktionen 2025',
      price: '180 000 kr (utrop)',
      trainerComment: 'Mycket fin häst med bra stamtavla. Passar perfekt för er som söker auktionshäst.',
      matchedSearches: ['Köp årsunghäst på auktion']
    },
    {
      id: 202,
      type: 'trainer-pick',
      horse: {
        name: 'Quick Silver',
        age: '4 år',
        sire: 'Maharajah',
        dam: 'Silver Lady',
        image: '/deeply-express.png'
      },
      source: 'Travera',
      price: '250 000 kr',
      trainerComment: 'Starthäst med 3 segrar. Bra temperament och utvecklingspotential.',
      matchedSearches: ['Hitta starthäst']
    }
  ];

  const marketplaceListings = [
    {
      id: 301,
      source: 'Menhammar Online Sales',
      sourceIcon: '🏛️',
      horse: {
        name: 'Golden Spirit',
        age: '1 år',
        sire: 'Nuncio',
        dam: 'Golden Girl'
      },
      price: '120 000 kr',
      auctionEnd: '15 mars 2025',
      link: 'https://menhammaronlinesales.se'
    },
    {
      id: 302,
      source: 'Derbyauktionen',
      sourceIcon: '🎯',
      horse: {
        name: 'Thunder Strike',
        age: '1 år',
        sire: 'Bold Eagle',
        dam: 'Storm Chaser'
      },
      price: '200 000 kr (utrop)',
      auctionEnd: '22 mars 2025',
      link: 'https://menhammaronlinesales.se/en/auction/derbyauktionen-2025/'
    },
    {
      id: 303,
      source: 'Travera',
      sourceIcon: '🐴',
      horse: {
        name: 'Midnight Runner',
        age: '3 år',
        sire: 'Googoo Gaagaa',
        dam: 'Night Dancer'
      },
      price: '175 000 kr',
      record: '1.15,2',
      link: 'https://www.travera.nu/'
    },
    {
      id: 304,
      source: 'EasyKB Marknadsplats',
      sourceIcon: '💼',
      horse: {
        name: 'Royal Ace',
        age: '5 år',
        sire: 'Ready Cash',
        dam: 'Royal Princess'
      },
      price: '320 000 kr',
      record: '1.12,8',
      link: 'https://easykb.se/marknadsplats/'
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'auction-yearling': return '🎯';
      case 'ready-to-race': return '🏇';
      case 'breeding': return '🌟';
      default: return '🐴';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'auction-yearling': return 'Auktionshäst';
      case 'ready-to-race': return 'Starthäst';
      case 'breeding': return 'Avelshäst';
      default: return 'Häst';
    }
  };

  const handleShowInterest = (search) => {
    setShowInterestModal(search);
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Matchning"
        stableName="Markus Svedberg"
      />

      <div className="content">
        {/* Quick Stats */}
        <div className="match-stats-row">
          <div className="match-stat">
            <span className="stat-number">2</span>
            <span className="stat-label">Aktiva sökningar</span>
          </div>
          <div className="match-stat">
            <span className="stat-number">8</span>
            <span className="stat-label">Möjliga matchningar</span>
          </div>
          <div className="match-stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Nya förslag</span>
          </div>
        </div>

        {/* Create New Search Button */}
        <button
          className="create-search-btn"
          onClick={() => navigate('/matchmaking/create')}
        >
          <div className="create-search-icon">
            <Plus size={24} />
          </div>
          <div className="create-search-text">
            <span className="create-search-title">Skapa ny sökning</span>
            <span className="create-search-subtitle">Hitta delägare eller häst</span>
          </div>
          <ChevronRight size={20} />
        </button>

        {/* Tabs */}
        <div className="match-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`match-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'my-searches' && (
          <div className="tab-content">
            {mySearches.length === 0 ? (
              <div className="empty-state">
                <Search size={48} />
                <h3>Inga aktiva sökningar</h3>
                <p>Skapa din första sökning för att hitta delägare eller hästar.</p>
              </div>
            ) : (
              mySearches.map((search) => (
                <div
                  key={search.id}
                  className="card search-card"
                  onClick={() => navigate(`/matchmaking/search/${search.id}`)}
                >
                  <div className="search-card-header">
                    <span className="search-type-icon">{getTypeIcon(search.type)}</span>
                    <div className="search-card-title">
                      <h3>{search.title}</h3>
                      <span className="search-type-label">{getTypeLabel(search.type)}</span>
                    </div>
                    {search.matchCount > 0 && (
                      <div className="match-badge">
                        <Users size={12} />
                        <span>{search.matchCount}</span>
                      </div>
                    )}
                  </div>

                  <div className="search-criteria">
                    <div className="criteria-item">
                      <Target size={14} />
                      <span>{search.criteria.horseType}</span>
                    </div>
                    <div className="criteria-item">
                      <Euro size={14} />
                      <span>{search.criteria.budget}</span>
                    </div>
                    <div className="criteria-item">
                      <Percent size={14} />
                      <span>{search.criteria.ownershipWanted} ägarandel</span>
                    </div>
                  </div>

                  <div className="search-card-footer">
                    <span className="search-date">
                      <Clock size={12} />
                      {search.createdAt}
                    </span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="tab-content">
            <div className="explore-header">
              <h3>Sökningar som matchar dig</h3>
              <button className="filter-btn">
                <Filter size={16} />
              </button>
            </div>

            {exploreSearches.map((search) => (
              <div key={search.id} className="card explore-card">
                <div className="explore-card-header">
                  <Avatar initials={search.user.initials} size="small" />
                  <div className="explore-user-info">
                    <span className="explore-user-name">{search.user.name}</span>
                    <span className="explore-time">{search.createdAt}</span>
                  </div>
                  <div className="match-percent-badge">
                    <span>{search.matchPercent}%</span>
                    <span className="match-label">match</span>
                  </div>
                </div>

                <h3 className="explore-title">{search.title}</h3>

                <div className="explore-criteria">
                  <div className="criteria-tag">
                    <span>{search.criteria.horseType}</span>
                  </div>
                  <div className="criteria-tag">
                    <span>{search.criteria.budget}</span>
                  </div>
                  <div className="criteria-tag highlight">
                    <span>{search.criteria.ownershipOffered}</span>
                  </div>
                </div>

                <div className="explore-goals">
                  {search.criteria.goals.map((goal, idx) => (
                    <span key={idx} className="goal-tag">{goal}</span>
                  ))}
                </div>

                <div className="explore-card-footer">
                  <span className="interested-count">
                    <Heart size={14} />
                    {search.interestedCount} intresserade
                  </span>
                  <button
                    className="interest-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShowInterest(search);
                    }}
                  >
                    <UserPlus size={16} />
                    Visa intresse
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="tab-content">
            <div className="suggestions-intro">
              <Sparkles size={20} />
              <span>Förslag baserade på dina sökningar</span>
            </div>

            {trainerSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="card suggestion-card">
                <div className="suggestion-badge">
                  <Star size={12} />
                  <span>Tränarens val</span>
                </div>

                <div className="suggestion-horse">
                  <div className="suggestion-horse-image">
                    <img src={suggestion.horse.image} alt={suggestion.horse.name} />
                  </div>
                  <div className="suggestion-horse-info">
                    <h3>{suggestion.horse.name}</h3>
                    <p>{suggestion.horse.age} • e. {suggestion.horse.sire}</p>
                    <p className="dam">u. {suggestion.horse.dam}</p>
                  </div>
                  <div className="suggestion-price">
                    <span className="price">{suggestion.price}</span>
                    <span className="source">{suggestion.source}</span>
                  </div>
                </div>

                <div className="trainer-comment">
                  <MessageCircle size={14} />
                  <p>"{suggestion.trainerComment}"</p>
                </div>

                <div className="suggestion-match">
                  <span>Matchar:</span>
                  {suggestion.matchedSearches.map((search, idx) => (
                    <span key={idx} className="matched-search">{search}</span>
                  ))}
                </div>

                <div className="suggestion-actions">
                  <button className="btn btn-primary btn-small">
                    <Heart size={16} />
                    Spara
                  </button>
                  <button className="btn btn-outline btn-small">
                    Visa detaljer
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div className="tab-content">
            <div className="marketplace-filters">
              <button className="marketplace-filter active">Alla</button>
              <button className="marketplace-filter">Auktioner</button>
              <button className="marketplace-filter">Direktköp</button>
            </div>

            {marketplaceListings.map((listing) => (
              <div key={listing.id} className="card marketplace-card">
                <div className="marketplace-source">
                  <span className="source-icon">{listing.sourceIcon}</span>
                  <span className="source-name">{listing.source}</span>
                  <a href={listing.link} target="_blank" rel="noopener noreferrer" className="source-link">
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="marketplace-horse">
                  <div className="marketplace-horse-info">
                    <h3>{listing.horse.name}</h3>
                    <p>{listing.horse.age} • e. {listing.horse.sire}</p>
                    <p className="dam">u. {listing.horse.dam}</p>
                    {listing.record && (
                      <span className="record-badge">{listing.record}</span>
                    )}
                  </div>
                  <div className="marketplace-price-info">
                    <span className="marketplace-price">{listing.price}</span>
                    {listing.auctionEnd && (
                      <span className="auction-end">
                        <Clock size={12} />
                        {listing.auctionEnd}
                      </span>
                    )}
                  </div>
                </div>

                <div className="marketplace-actions">
                  <button className="btn btn-outline btn-small">
                    <Heart size={16} />
                    Bevaka
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

      {/* Interest Modal */}
      {showInterestModal && (
        <div className="modal-overlay" onClick={() => setShowInterestModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Visa intresse</h3>
            <p>Du visar intresse för "{showInterestModal.title}" av {showInterestModal.user.name}.</p>

            <div className="modal-info">
              <div className="modal-info-item">
                <span className="label">Söker:</span>
                <span>{showInterestModal.criteria.horseType}</span>
              </div>
              <div className="modal-info-item">
                <span className="label">Budget:</span>
                <span>{showInterestModal.criteria.budget}</span>
              </div>
              <div className="modal-info-item">
                <span className="label">Erbjuder:</span>
                <span>{showInterestModal.criteria.ownershipOffered}</span>
              </div>
            </div>

            <textarea
              placeholder="Lägg till ett meddelande (valfritt)..."
              className="interest-message"
            />

            <div className="modal-actions">
              <button
                className="btn btn-outline"
                onClick={() => setShowInterestModal(null)}
              >
                Avbryt
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowInterestModal(null);
                }}
              >
                Skicka intresse
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
