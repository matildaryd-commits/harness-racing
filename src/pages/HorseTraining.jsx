import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Activity, Calendar, Clock, TrendingUp, Heart, MessageCircle } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function HorseTraining() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [expandedUpdate, setExpandedUpdate] = useState(null);

  const horsesData = {
    1: { name: 'Kinematic', status: 'I full träning' },
    2: { name: 'Pargas Sox', status: 'Konvalecent' },
    3: { name: 'Deeply Express', status: 'Anmäld till lopp' },
    4: { name: 'Corsa Cortina', status: 'I full träning' }
  };

  const horse = horsesData[id] || horsesData[1];

  const trainingUpdates = [
    {
      id: 1,
      date: '27 jan 2026',
      type: 'interval',
      title: 'Intervallträning',
      summary: 'Bra träning idag. Hästen kändes pigg och villig.',
      details: 'Körde 3x1000m intervaller med bra tider. Hästen återhämtade sig snabbt mellan intervallerna. Inga tecken på stelhet eller obehag.',
      metrics: {
        distance: '6 km',
        duration: '45 min',
        intensity: 'Medel-hög'
      },
      trainer: 'Markus Svedberg',
      likes: 5,
      comments: 2
    },
    {
      id: 2,
      date: '25 jan 2026',
      type: 'jog',
      title: 'Lättare joggingpass',
      summary: 'Återhämtningspass efter helgens lopp.',
      details: 'Lugnt tempo för att låta hästen återhämta sig. Kontrollerade ben och hovar - allt ser bra ut.',
      metrics: {
        distance: '4 km',
        duration: '30 min',
        intensity: 'Låg'
      },
      trainer: 'Ronja Lamminen',
      likes: 3,
      comments: 0
    },
    {
      id: 3,
      date: '22 jan 2026',
      type: 'speed',
      title: 'Snabbhetsträning',
      summary: 'Fokus på acceleration och toppfart.',
      details: 'Körde flera spurter på 200m med mycket bra respons. Hästen visade fin vilja att öka tempot. Noterade en ny personlig rekordtid på 500m-sträckan.',
      metrics: {
        distance: '5 km',
        duration: '35 min',
        intensity: 'Hög'
      },
      trainer: 'Markus Svedberg',
      likes: 8,
      comments: 4
    },
    {
      id: 4,
      date: '20 jan 2026',
      type: 'long',
      title: 'Distanspass',
      summary: 'Längre pass för att bygga uthållighet.',
      details: 'Lugnt och jämnt tempo under hela passet. Hästen höll fin rytm och andades bra även mot slutet.',
      metrics: {
        distance: '10 km',
        duration: '60 min',
        intensity: 'Medel'
      },
      trainer: 'Markus Svedberg',
      likes: 4,
      comments: 1
    },
    {
      id: 5,
      date: '18 jan 2026',
      type: 'rest',
      title: 'Vilodag',
      summary: 'Planerad vila och beteshage.',
      details: 'Hästen fick tillbringa dagen i hagen. Kontrollerade allmäntillstånd - allt ser bra ut.',
      metrics: {
        distance: '-',
        duration: '-',
        intensity: 'Vila'
      },
      trainer: 'Ronja Lamminen',
      likes: 2,
      comments: 0
    }
  ];

  const upcomingSchedule = [
    { date: '28 jan', type: 'interval', title: 'Intervallträning' },
    { date: '29 jan', type: 'jog', title: 'Lätt jogging' },
    { date: '30 jan', type: 'rest', title: 'Vilodag' },
    { date: '31 jan', type: 'speed', title: 'Snabbhetspass' },
    { date: '1 feb', type: 'race', title: 'Lopp - Solvalla V75' }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'interval': return 'orange';
      case 'speed': return 'red';
      case 'jog': return 'blue';
      case 'long': return 'purple';
      case 'rest': return 'green';
      case 'race': return 'teal';
      default: return 'gray';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'interval': return '⚡';
      case 'speed': return '🚀';
      case 'jog': return '🏃';
      case 'long': return '🛤️';
      case 'rest': return '😴';
      case 'race': return '🏆';
      default: return '🐴';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="subpage-header">
        <button className="back-btn-light" onClick={() => navigate(`/horses/${id}`)}>
          <ChevronLeft size={20} />
        </button>
        <div className="subpage-header-content">
          <h1>Träning</h1>
          <span className="subpage-horse-name">{horse.name}</span>
        </div>
        <div style={{ width: '36px' }} />
      </div>

      <div className="content">
        {/* Status Card */}
        <div className="card training-status-card">
          <div className="training-status-header">
            <Activity size={20} />
            <span>Träningsstatus</span>
          </div>
          <div className="training-status-value">{horse.status}</div>
          <div className="training-stats-row">
            <div className="training-stat">
              <span className="stat-value">12</span>
              <span className="stat-label">Pass denna månad</span>
            </div>
            <div className="training-stat">
              <span className="stat-value">68 km</span>
              <span className="stat-label">Total distans</span>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="card">
          <h3 className="section-title">
            <Calendar size={18} />
            Kommande schema
          </h3>
          <div className="schedule-list">
            {upcomingSchedule.map((item, index) => (
              <div key={index} className={`schedule-item ${item.type === 'race' ? 'race' : ''}`}>
                <div className="schedule-date">{item.date}</div>
                <span className={`schedule-icon ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                </span>
                <span className="schedule-title">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Training Updates */}
        <h3 className="section-title standalone">
          <TrendingUp size={18} />
          Träningsuppdateringar
        </h3>

        {trainingUpdates.map((update) => (
          <div
            key={update.id}
            className={`card training-update-card ${expandedUpdate === update.id ? 'expanded' : ''}`}
            onClick={() => setExpandedUpdate(expandedUpdate === update.id ? null : update.id)}
          >
            <div className="training-update-header">
              <span className={`training-type-badge ${getTypeColor(update.type)}`}>
                {getTypeIcon(update.type)}
              </span>
              <div className="training-update-info">
                <h4>{update.title}</h4>
                <span className="training-date">{update.date} • {update.trainer}</span>
              </div>
            </div>

            <p className="training-summary">{update.summary}</p>

            {expandedUpdate === update.id && (
              <div className="training-details">
                <p className="training-detail-text">{update.details}</p>

                <div className="training-metrics">
                  <div className="metric">
                    <span className="metric-label">Distans</span>
                    <span className="metric-value">{update.metrics.distance}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Tid</span>
                    <span className="metric-value">{update.metrics.duration}</span>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Intensitet</span>
                    <span className="metric-value">{update.metrics.intensity}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="training-update-footer">
              <div className="training-actions">
                <span className="training-action">
                  <Heart size={14} />
                  {update.likes}
                </span>
                <span className="training-action">
                  <MessageCircle size={14} />
                  {update.comments}
                </span>
              </div>
              <span className="expand-hint">
                {expandedUpdate === update.id ? 'Mindre' : 'Mer info'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
