import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Plus, Check, Send, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function Events() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const event = {
    title: 'Upcoming Race Day',
    description: '4 horses from the stable will compete',
    date: 'Dec 03 - 2PM',
    location: 'Place here',
    horses: ['Horse name 1', 'Horse name 2', 'Horse name 3', 'Horse name 4'],
    attendees: [
      { name: 'Johnson Mark', role: 'Owner', initials: 'JM' },
      { name: 'Johnson Mark', role: 'Co-Owner', initials: 'JM' },
      { name: 'Johnson Mark', role: 'Fan', initials: 'JM' },
      { name: 'Johnson Mark', role: 'Fan', initials: 'JM' }
    ]
  };

  const exclusiveInfo = {
    title: 'Special Race Day Welcome',
    author: 'Alex Mark',
    time: '2 hrs ago',
    content: 'Lorem ipsum dolor sit amet consectetur. Sed feugiat habitant aliquet est vel justo nulla. Vel egestas aliquam eget urna. Adipiscing turpis turpis convallis euismod. Amet eget risus neque morbi lacus mauris sed magna enim.'
  };

  const chatMessages = [
    { name: 'Johnson Mark', text: 'Lorem ipsum dolor sit amet consectetur.', time: '1 hr ago', initials: 'JM' },
    { name: 'Johnson Mark', text: 'Lorem ipsum dolor sit amet consectetur.', time: '1 hr ago', initials: 'JM' },
    { name: 'Johnson Mark', text: 'Lorem ipsum dolor sit amet consectetur.', time: '1 hr ago', initials: 'JM' },
    { name: 'Johnson Mark', text: 'Lorem ipsum dolor sit amet consectetur.', time: '1 hr ago', initials: 'JM' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Events"
        subtitle="Upcoming races"
        showBack
      />

      <div className="card event-detail-card">
        <div className="event-header">
          <div className="event-type">
            <Calendar size={18} />
            <span>Event</span>
          </div>
          <Plus size={20} style={{ color: '#EC4899' }} />
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{event.title}</h3>
        <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '12px' }}>{event.description}</p>

        <div className="meta" style={{ marginBottom: '12px' }}>
          <span><Calendar size={14} /> {event.date}</span>
          <span><MapPin size={14} /> {event.location}</span>
        </div>

        <div className="horse-tags">
          {event.horses.map((horse, index) => (
            <span key={index} className="horse-tag">{horse}</span>
          ))}
        </div>

        <div className="attendees-list">
          <h4>Who's Attending?</h4>
          {event.attendees.map((attendee, index) => (
            <div key={index} className="attendee-item">
              <Avatar initials={attendee.initials} size="small" />
              <span className="attendee-name">{attendee.name}</span>
              <span className="attendee-role">{attendee.role}</span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary">
          <Check size={18} /> I am Attending
        </button>
      </div>

      <div className="exclusive-info" style={{ margin: '0 16px' }}>
        <div className="section-title">Exclusive Information</div>
        <h3>{exclusiveInfo.title}</h3>
        <div className="meta">From {exclusiveInfo.author} • {exclusiveInfo.time}</div>
        <p>{exclusiveInfo.content}</p>
      </div>

      <div className="member-chat" style={{ margin: '16px' }}>
        <div className="member-chat-header">
          <h3>Member Chat</h3>
          <MessageCircle size={20} style={{ color: '#9CA3AF' }} />
        </div>

        {chatMessages.map((msg, index) => (
          <div key={index} className="chat-message">
            <Avatar initials={msg.initials} size="small" />
            <div className="chat-message-content">
              <div className="name">{msg.name}</div>
              <div className="text">{msg.text}</div>
            </div>
            <span className="time">{msg.time}</span>
          </div>
        ))}

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>
            <Send size={20} />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
