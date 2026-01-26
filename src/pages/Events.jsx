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
    title: 'Kommande Tävlingsdag',
    description: '4 hästar från stallet kommer att tävla',
    date: '3 dec - 14:00',
    location: 'Solvalla',
    horses: ['Kinematic', 'Pargas Sox', 'Deeply Express', 'Costa Cortina'],
    attendees: [
      { name: 'Johnson Mark', role: 'Ägare', initials: 'JM' },
      { name: 'Anna Lindqvist', role: 'Delägare', initials: 'AL' },
      { name: 'Erik Svensson', role: 'Följare', initials: 'ES' },
      { name: 'Maria Holm', role: 'Följare', initials: 'MH' }
    ]
  };

  const exclusiveInfo = {
    title: 'Speciell Tävlingsdagsinformation',
    author: 'Alex Mark',
    time: '2 tim sedan',
    content: 'Hästarna är i utmärkt form inför dagens lopp. Kinematic har tränat starkt hela veckan och Pargas Sox visade fin fart på morgonens uppvärmning. Vi har gott hopp om fina placeringar idag.'
  };

  const chatMessages = [
    { name: 'Johnson Mark', text: 'Ser fram emot dagens lopp!', time: '1 tim sedan', initials: 'JM' },
    { name: 'Anna Lindqvist', text: 'Kinematic kommer ta hem det idag!', time: '1 tim sedan', initials: 'AL' },
    { name: 'Erik Svensson', text: 'Vilken spännande dag det blir.', time: '1 tim sedan', initials: 'ES' },
    { name: 'Maria Holm', text: 'Lycka till alla våra hästar!', time: '1 tim sedan', initials: 'MH' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Event"
        subtitle="Kommande lopp"
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
          <h4>Vem Deltar?</h4>
          {event.attendees.map((attendee, index) => (
            <div key={index} className="attendee-item">
              <Avatar initials={attendee.initials} size="small" />
              <span className="attendee-name">{attendee.name}</span>
              <span className="attendee-role">{attendee.role}</span>
            </div>
          ))}
        </div>

        <button className="btn btn-primary">
          <Check size={18} /> Jag Deltar
        </button>
      </div>

      <div className="exclusive-info" style={{ margin: '0 16px' }}>
        <div className="section-title">Exklusiv Information</div>
        <h3>{exclusiveInfo.title}</h3>
        <div className="meta">Från {exclusiveInfo.author} • {exclusiveInfo.time}</div>
        <p>{exclusiveInfo.content}</p>
      </div>

      <div className="member-chat" style={{ margin: '16px' }}>
        <div className="member-chat-header">
          <h3>Medlemschatt</h3>
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
            placeholder="Skriv ett meddelande"
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
