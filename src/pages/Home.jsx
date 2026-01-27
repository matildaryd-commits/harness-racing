import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, MapPin, Calendar, Sparkles, Users } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const navigate = useNavigate();

  const feedItems = [
    {
      id: 1,
      type: 'training',
      horseName: 'Kinematic',
      trainerName: 'Ronja Lamminen',
      title: 'Träning Avslutad',
      trainingType: 'Sandarbete',
      details: '4x1.35',
      comment: '"Energisk och ser fantastisk ut"',
      likes: 17,
      comments: 2,
      views: '26 visningar'
    },
    {
      id: 2,
      type: 'race',
      horseName: 'Pargas Sox',
      raceName: 'V75 Lopp 4',
      title: 'Anmäld Till Lopp',
      date: '3 dec - 14:00',
      location: 'Solvalla',
      distance: '1 Mil',
      likes: 17,
      comments: 2,
      views: '15 visningar'
    },
    {
      id: 3,
      type: 'stable',
      stableName: 'Svedberg Trav',
      title: 'Månadsrapport - November',
      description: 'Fantastisk månad med 7 segrar och flera fina placeringar. Vi har fokuserat på att förbereda hästarna inför vårsäsongen.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      likes: 17,
      comments: 2,
      views: '13 visningar',
      timestamp: '1 dag sedan'
    },
    {
      id: 4,
      type: 'update',
      horseName: 'Deeply Express',
      role: 'Skötare',
      title: 'Uppdatering från stallet',
      description: 'Hästen mår utmärkt och är i toppform.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop',
      likes: 17,
      comments: 2,
      views: '22 visningar',
      timestamp: '1 dag sedan'
    },
    {
      id: 5,
      type: 'event',
      eventType: 'Event',
      title: 'Hästägarfest',
      description: 'Välkommen till vår årliga hästägarfest! Mat, dryck och mingel med andra delägare.',
      date: '3 dec - 14:00',
      location: 'Solvalla',
      attending: 22,
      likes: 17,
      comments: 2,
      views: '13 visningar',
      timestamp: '2 tim sedan'
    },
    {
      id: 6,
      type: 'race-event',
      eventType: 'Event',
      title: 'Kommande Tävlingsdag',
      description: '4 hästar från stallet kommer att tävla',
      date: '3 dec - 14:00',
      location: 'Solvalla',
      horses: ['Kinematic', 'Pargas Sox', 'Deeply Express', 'Costa Cortina'],
      likes: 17,
      comments: 3,
      views: '13 visningar'
    }
  ];

  const renderFeedItem = (item) => {
    switch (item.type) {
      case 'training':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon purple">
                <Sparkles size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.trainerName}</p>
              </div>
            </div>
            <h3>{item.title}</h3>
            <div className="info-box">
              <div className="label">Typ</div>
              <div className="value">{item.trainingType}</div>
            </div>
            <div className="info-box">
              <div className="label">Detaljer</div>
              <div className="value">{item.details}</div>
            </div>
            <div className="info-box comment-box">
              <div className="label">Kommentar:</div>
              <div className="value">{item.comment}</div>
            </div>
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      case 'race':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon teal">
                <MapPin size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.raceName}</p>
              </div>
            </div>
            <h3>{item.title}</h3>
            <div className="meta">
              <span><Calendar size={14} /> {item.date}</span>
              <span><MapPin size={14} /> {item.location}</span>
            </div>
            <span className="badge badge-mile">{item.distance}</span>
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      case 'stable':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon teal">
                <Users size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.stableName}</h4>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <img src={item.image} alt="Stallrapport" className="feed-image" />
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      case 'update':
        return (
          <div key={item.id} className="card feed-card" onClick={() => navigate('/horses/1')}>
            <div className="feed-card-header">
              <Avatar initials="MS" size="small" />
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.role}</p>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <img src={item.image} alt="Hästuppdatering" className="feed-image" />
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      case 'event':
        return (
          <div key={item.id} className="card feed-card" onClick={() => navigate('/events/1')}>
            <div className="feed-card-header">
              <div className="feed-card-icon pink">
                <Calendar size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.eventType}</h4>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <div className="meta">
              <span><Calendar size={14} /> {item.date}</span>
              <span><MapPin size={14} /> {item.location}</span>
            </div>
            <div className="attending-count">
              <Users size={14} /> {item.attending} deltar
            </div>
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      case 'race-event':
        return (
          <div key={item.id} className="card feed-card" onClick={() => navigate('/events/1')}>
            <div className="feed-card-header">
              <div className="feed-card-icon pink">
                <Calendar size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.eventType}</h4>
              </div>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <div className="meta">
              <span><Calendar size={14} /> {item.date}</span>
              <span><MapPin size={14} /> {item.location}</span>
            </div>
            <div className="horse-tags">
              {item.horses.map((horse, index) => (
                <span key={index} className="horse-tag">{horse}</span>
              ))}
            </div>
            <div className="feed-actions">
              <div className="feed-actions-left">
                <button className="feed-action"><Heart size={16} /> {item.likes}</button>
                <button className="feed-action"><MessageCircle size={16} /> {item.comments}</button>
              </div>
              <span className="feed-views">{item.views}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Hem"
        subtitle="Håll dig uppdaterad om dina hästar!"
        showMenu
        showNotification
        stableName="Markus Svedberg"
      />

      <div className="content">
        {feedItems.map(renderFeedItem)}
      </div>

      <BottomNav />
    </div>
  );
}
