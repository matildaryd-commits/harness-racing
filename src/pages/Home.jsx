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
      horseName: 'Horse Name',
      trainerName: "Trainer's name",
      title: 'Training Completed',
      trainingType: 'Sand Work',
      details: '4x1.35',
      comment: '"Energetic and looking great"',
      likes: 17,
      comments: 2,
      views: '26 views'
    },
    {
      id: 2,
      type: 'race',
      horseName: 'Horse Name',
      raceName: 'Race name',
      title: 'Entered in Race',
      date: 'Dec 03 - 2PM',
      location: 'Place here',
      distance: '1 Mile',
      likes: 17,
      comments: 2,
      views: '15 views'
    },
    {
      id: 3,
      type: 'stable',
      stableName: 'Stable',
      title: 'Monthly Report - November',
      description: "Fantastic month with 7 wins and several great placements. We've been focused on preparing the horses for the spring season.",
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
      likes: 17,
      comments: 2,
      views: '13 views',
      timestamp: '1 day ago'
    },
    {
      id: 4,
      type: 'update',
      horseName: 'Horse Name',
      role: 'Caretaker',
      title: 'Update from the stable',
      description: 'This horse is doing great.',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&auto=format&fit=crop',
      likes: 17,
      comments: 2,
      views: '22 views',
      timestamp: '1 day ago'
    },
    {
      id: 5,
      type: 'event',
      eventType: 'Event',
      title: 'Horse Owners Party',
      description: 'Welcome to our annual horse owners party! Food, drinks and mingling with other owners.',
      date: 'Dec 03 - 2PM',
      location: 'Place here',
      attending: 22,
      likes: 17,
      comments: 2,
      views: '13 views',
      timestamp: '2h ago'
    },
    {
      id: 6,
      type: 'race-event',
      eventType: 'Event',
      title: 'Upcoming Race Day',
      description: '4 horses from the stable will compete',
      date: 'Dec 03 - 2PM',
      location: 'Place here',
      horses: ['Horse name 1', 'Horse name 2', 'Horse name 3', 'Horse name 4'],
      likes: 17,
      comments: 3,
      views: '13 views'
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
              <div className="label">Type</div>
              <div className="value">{item.trainingType}</div>
            </div>
            <div className="info-box">
              <div className="label">Details</div>
              <div className="value">{item.details}</div>
            </div>
            <div className="info-box comment-box">
              <div className="label">Comment:</div>
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
            <img src={item.image} alt="Stable report" className="feed-image" />
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
              <Avatar initials="JM" size="small" />
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.role}</p>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <img src={item.image} alt="Horse update" className="feed-image" />
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
              <Users size={14} /> {item.attending} attending
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
        title="Home"
        subtitle="Stay updated with your horses!"
        showMenu
        showNotification
        stableName="Mark John"
      />

      <div className="content">
        {feedItems.map(renderFeedItem)}
      </div>

      <BottomNav />
    </div>
  );
}
