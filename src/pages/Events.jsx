import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Check, Send, Star, MessageSquare, Heart, MessageCircle } from 'lucide-react';
import { CalendarIcon } from '../components/Icons';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function Events() {
  const navigate = useNavigate();

  const likedByUsers = [
    { name: 'Anna Lindgren', initials: 'AL' },
    { name: 'Erik Johansson', initials: 'EJ' },
    { name: 'Sofia Berg', initials: 'SB' },
    { name: 'Johan Ström', initials: 'JS' },
    { name: 'Maria Karlsson', initials: 'MK' },
    { name: 'Per Nilsson', initials: 'PN' }
  ];

  const initialEvents = [
    {
      id: 1,
      type: 'event',
      eventType: 'Event',
      title: 'Hästägarfest',
      description: 'Välkommen till vår årliga hästägarfest! Mat, dryck och mingel med andra delägare.',
      date: '3 dec - 18:00',
      location: 'Sundbyberg',
      attending: 22,
      timestamp: '2 tim sedan',
      likedBy: likedByUsers.slice(0, 6),
      commentsList: [
        { id: 1, author: 'Anders Lund', initials: 'AL', text: 'Vi kommer!', time: '1 tim sedan' },
        { id: 2, author: 'Eva Strand', initials: 'ES', text: 'Ser fram emot det!', time: '30 min sedan' }
      ],
      attendeesList: [
        { name: 'Anna Lindgren', initials: 'AL', role: 'Delägare' },
        { name: 'Erik Johansson', initials: 'EJ', role: 'Ägare' },
        { name: 'Sofia Berg', initials: 'SB', role: 'Delägare' },
        { name: 'Johan Ström', initials: 'JS', role: 'Följare' },
        { name: 'Maria Karlsson', initials: 'MK', role: 'Delägare' },
        { name: 'Per Nilsson', initials: 'PN', role: 'Ägare' }
      ],
      exclusiveInfo: {
        title: 'Information från tränaren',
        text: 'Vi ses i entrén kl 17:45. Dresscode: Smart casual. Glöm inte att RSVP senast 1 dec!'
      },
      chatMessages: [
        { id: 1, author: 'Erik Johansson', initials: 'EJ', text: 'Någon som vill samåka från Stockholm?', time: '3 tim sedan' },
        { id: 2, author: 'Sofia Berg', initials: 'SB', text: 'Ja! Vi kan plocka upp om det passar.', time: '2 tim sedan' }
      ]
    },
    {
      id: 2,
      type: 'race-event',
      eventType: 'Event',
      title: 'Kommande tävlingsdag',
      description: '3 hästar från stallet är anmälda till start',
      date: '3 dec - 18:30',
      location: 'Solvalla',
      horses: ['Kinematic', 'Pargas Sox', 'Deeply Express'],
      attending: 18,
      likedBy: likedByUsers.slice(1, 6),
      commentsList: [
        { id: 1, author: 'Mikael Fors', initials: 'MF', text: 'Spännande lineup!', time: '4 tim sedan' },
        { id: 2, author: 'Helena Vik', initials: 'HV', text: 'Blir en bra dag!', time: '3 tim sedan' },
        { id: 3, author: 'Ola Gren', initials: 'OG', text: 'Ska försöka komma dit!', time: '2 tim sedan' }
      ],
      attendeesList: [
        { name: 'Karin Holm', initials: 'KH', role: 'Delägare' },
        { name: 'Anders Lund', initials: 'AL', role: 'Ägare' },
        { name: 'Eva Strand', initials: 'ES', role: 'Följare' },
        { name: 'Mikael Fors', initials: 'MF', role: 'Delägare' },
        { name: 'Helena Vik', initials: 'HV', role: 'Ägare' }
      ],
      exclusiveInfo: {
        title: 'Markus kommentarer',
        text: 'Kinematic har bra chans på spets, och därifrån kan hon blir svårslagen. Övriga mest plastchans.'
      },
      chatMessages: [
        { id: 1, author: 'Mikael Fors', initials: 'MF', text: 'Ska vi träffas vid restaurangen efter lopp 3?', time: '4 tim sedan' },
        { id: 2, author: 'Anders Lund', initials: 'AL', text: 'Bra idé! Boka bord kanske?', time: '3 tim sedan' },
        { id: 3, author: 'Helena Vik', initials: 'HV', text: 'Jag fixar det!', time: '2 tim sedan' }
      ]
    }
  ];

  const [events, setEvents] = useState(
    initialEvents.map(item => ({
      ...item,
      liked: false,
      showComments: false,
      showLikes: false,
      isAttending: false,
      newComment: '',
      activeTab: null,
      newChatMessage: ''
    }))
  );

  const handleToggleAttend = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item =>
        item.id === id
          ? { ...item, isAttending: !item.isAttending, attending: item.isAttending ? item.attending - 1 : item.attending + 1 }
          : item
      )
    );
  };

  const handleSetActiveTab = (id, tab, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item =>
        item.id === id ? { ...item, activeTab: item.activeTab === tab ? null : tab } : item
      )
    );
  };

  const handleChatMessageChange = (id, value) => {
    setEvents(items =>
      items.map(item =>
        item.id === id ? { ...item, newChatMessage: value } : item
      )
    );
  };

  const handleSubmitChatMessage = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item => {
        if (item.id === id && item.newChatMessage.trim()) {
          const newMessage = {
            id: Date.now(),
            author: 'Markus Svedberg',
            initials: 'MS',
            text: item.newChatMessage.trim(),
            time: 'Nu'
          };
          return {
            ...item,
            chatMessages: [...item.chatMessages, newMessage],
            newChatMessage: ''
          };
        }
        return item;
      })
    );
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item => {
        if (item.id === id) {
          const newLikedBy = item.liked
            ? item.likedBy.filter(u => u.name !== 'Markus Svedberg')
            : [...item.likedBy, { name: 'Markus Svedberg', initials: 'MS' }];
          return { ...item, liked: !item.liked, likedBy: newLikedBy };
        }
        return item;
      })
    );
  };

  const handleToggleLikes = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item =>
        item.id === id ? { ...item, showLikes: !item.showLikes, showComments: false } : item
      )
    );
  };

  const handleToggleComments = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item =>
        item.id === id ? { ...item, showComments: !item.showComments, showLikes: false } : item
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setEvents(items =>
      items.map(item =>
        item.id === id ? { ...item, newComment: value } : item
      )
    );
  };

  const handleSubmitComment = (id, e) => {
    e.stopPropagation();
    setEvents(items =>
      items.map(item => {
        if (item.id === id && item.newComment.trim()) {
          const newCommentObj = {
            id: Date.now(),
            author: 'Markus Svedberg',
            initials: 'MS',
            text: item.newComment.trim(),
            time: 'Nu'
          };
          return {
            ...item,
            commentsList: [...item.commentsList, newCommentObj],
            newComment: ''
          };
        }
        return item;
      })
    );
  };

  const renderEventInteractions = (item) => (
    <div className="event-interactions" onClick={(e) => e.stopPropagation()}>
      <div className="interaction-tabs">
        <button
          className={`interaction-tab ${item.activeTab === 'attendees' ? 'active' : ''}`}
          onClick={(e) => handleSetActiveTab(item.id, 'attendees', e)}
        >
          <Users size={14} /> Deltagare ({item.attendeesList?.length || 0})
        </button>
        <button
          className={`interaction-tab ${item.activeTab === 'exclusive' ? 'active' : ''}`}
          onClick={(e) => handleSetActiveTab(item.id, 'exclusive', e)}
        >
          <Star size={14} /> Exklusivt
        </button>
        <button
          className={`interaction-tab ${item.activeTab === 'chat' ? 'active' : ''}`}
          onClick={(e) => handleSetActiveTab(item.id, 'chat', e)}
        >
          <MessageSquare size={14} /> Chatt
        </button>
      </div>

      {item.activeTab === 'attendees' && item.attendeesList && (
        <div className="interaction-content">
          <h4>Vem deltar?</h4>
          <div className="feed-attendees-list">
            {item.attendeesList.map((attendee, index) => (
              <div key={index} className="feed-attendee-item">
                <Avatar initials={attendee.initials} size="small" />
                <span className="feed-attendee-name">{attendee.name}</span>
                <span className="feed-attendee-role">{attendee.role}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {item.activeTab === 'exclusive' && item.exclusiveInfo && (
        <div className="interaction-content">
          <div className="feed-exclusive-info">
            <div className="info-label">EXKLUSIV INFO</div>
            <div className="info-title">{item.exclusiveInfo.title}</div>
            <div className="info-text">{item.exclusiveInfo.text}</div>
          </div>
        </div>
      )}

      {item.activeTab === 'chat' && item.chatMessages && (
        <div className="interaction-content">
          <h4>Medlemschatt</h4>
          <div className="feed-chat-list">
            {item.chatMessages.map(msg => (
              <div key={msg.id} className="feed-chat-item">
                <Avatar initials={msg.initials} size="small" />
                <div className="feed-chat-content">
                  <div className="feed-chat-header">
                    <span className="feed-chat-name">{msg.author}</span>
                    <span className="feed-chat-time">{msg.time}</span>
                  </div>
                  <p className="feed-chat-text">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="feed-chat-input">
            <Avatar initials="MS" size="small" />
            <input
              type="text"
              placeholder="Skriv ett meddelande..."
              value={item.newChatMessage}
              onChange={(e) => handleChatMessageChange(item.id, e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitChatMessage(item.id, e)}
            />
            <button onClick={(e) => handleSubmitChatMessage(item.id, e)}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderFeedActions = (item) => (
    <>
      <div className="feed-actions">
        <div className="feed-actions-left">
          <button
            className={`feed-action like-button ${item.liked ? 'liked' : ''}`}
            onClick={(e) => handleLike(item.id, e)}
          >
            <Heart size={16} fill={item.liked ? 'currentColor' : 'none'} />
            <span
              className={`likes-count ${item.showLikes ? 'active' : ''}`}
              onClick={(e) => { e.stopPropagation(); handleToggleLikes(item.id, e); }}
            >
              {item.likedBy.length} gillar
            </span>
          </button>
          <button
            className={`feed-action ${item.showComments ? 'active' : ''}`}
            onClick={(e) => handleToggleComments(item.id, e)}
          >
            <MessageCircle size={16} /> {item.commentsList.length}
          </button>
        </div>
      </div>
      {item.showLikes && (
        <div className="likes-section" onClick={(e) => e.stopPropagation()}>
          <div className="likes-header">
            <Heart size={16} fill="#EF4444" color="#EF4444" />
            <span>{item.likedBy.length} personer gillar detta</span>
          </div>
          <div className="likes-list">
            {item.likedBy.map((user, index) => (
              <div key={index} className="likes-item">
                <Avatar initials={user.initials} size="small" />
                <span className="likes-name">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {item.showComments && (
        <div className="comments-section" onClick={(e) => e.stopPropagation()}>
          <div className="comments-list">
            {item.commentsList.map(comment => (
              <div key={comment.id} className="comment-item">
                <Avatar initials={comment.initials} size="small" />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.author}</span>
                    <span className="comment-time">{comment.time}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="comment-input-section">
            <Avatar initials="MS" size="small" />
            <input
              type="text"
              placeholder="Skriv en kommentar..."
              value={item.newComment}
              onChange={(e) => handleCommentChange(item.id, e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmitComment(item.id, e)}
            />
            <button onClick={(e) => handleSubmitComment(item.id, e)}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );

  const renderEventCard = (item) => {
    const isRaceEvent = item.type === 'race-event';

    return (
      <div key={item.id} className="card feed-card">
        <div className="feed-card-header">
          <div className="feed-card-icon pink">
            <CalendarIcon size={20} />
          </div>
          <div className="feed-card-header-text">
            <h4>{item.eventType}</h4>
          </div>
          {item.timestamp && <span className="timestamp">{item.timestamp}</span>}
        </div>
        <h3>{item.title}</h3>
        <p className="subtitle">{item.description}</p>
        <div className="meta">
          <span><Calendar size={14} /> {item.date}</span>
          <span><MapPin size={14} /> {item.location}</span>
        </div>
        {isRaceEvent && item.horses && (
          <div className="horse-tags">
            {item.horses.map((horse, index) => (
              <span key={index} className="horse-tag">{horse}</span>
            ))}
          </div>
        )}
        <div className="attending-count">
          <Users size={14} /> {item.attending} deltar
        </div>
        <button
          className={`attend-button ${item.isAttending ? 'attending' : ''}`}
          onClick={(e) => handleToggleAttend(item.id, e)}
        >
          {item.isAttending ? <Check size={16} /> : <Calendar size={16} />}
          {item.isAttending ? 'Du deltar' : 'Anmäl dig'}
        </button>
        {item.isAttending && renderEventInteractions(item)}
        {renderFeedActions(item)}
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Event"
        stableName="Markus Svedberg"
      />

      <div className="content">
        {events.map(renderEventCard)}
      </div>

      <BottomNav />
    </div>
  );
}
