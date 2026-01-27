import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, MapPin, Calendar, Users, Send, ExternalLink, ChevronDown, ChevronUp, Check, Star, MessageSquare, Filter, X } from 'lucide-react';
import { HeartbeatIcon, TrophyIcon, HorseshoeIcon, HorseIcon, CalendarIcon } from '../components/Icons';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const navigate = useNavigate();

  const likedByUsers = [
    { name: 'Anna Lindgren', initials: 'AL' },
    { name: 'Erik Johansson', initials: 'EJ' },
    { name: 'Sofia Berg', initials: 'SB' },
    { name: 'Johan Ström', initials: 'JS' },
    { name: 'Maria Karlsson', initials: 'MK' },
    { name: 'Per Nilsson', initials: 'PN' },
    { name: 'Lisa Ek', initials: 'LE' },
    { name: 'Karin Holm', initials: 'KH' },
    { name: 'Anders Lund', initials: 'AL' },
    { name: 'Eva Strand', initials: 'ES' },
    { name: 'Mikael Fors', initials: 'MF' },
    { name: 'Helena Vik', initials: 'HV' },
    { name: 'Ola Gren', initials: 'OG' },
    { name: 'Ingrid Svensson', initials: 'IS' },
    { name: 'Lars Pettersson', initials: 'LP' },
    { name: 'Gunilla Björk', initials: 'GB' },
    { name: 'Bengt Åkesson', initials: 'BÅ' }
  ];

  const initialFeedItems = [
    {
      id: 1,
      type: 'training',
      horseName: 'Kinematic',
      trainerName: 'Ronja Lamminen',
      title: 'Träning avslutad',
      trainingType: 'Sandarbete',
      details: '4x1.35',
      comment: '"Energisk och ser fantastisk ut"',
            likedBy: likedByUsers.slice(0, 17),
      commentsList: [
        { id: 1, author: 'Anna Lindgren', initials: 'AL', text: 'Vilken fin häst!', time: '2 tim sedan' },
        { id: 2, author: 'Erik Johansson', initials: 'EJ', text: 'Ser ut att vara i toppform!', time: '1 tim sedan' }
      ]
    },
    {
      id: 2,
      type: 'race',
      horseName: 'Pargas Sox',
      raceName: 'V75 Lopp 4',
      title: 'Anmäld till lopp',
      date: '3 dec - 14:00',
      location: 'Solvalla',
      locationUrl: 'https://maps.google.com/?q=Solvalla+Travbana+Stockholm',
      distance: '1 Mil',
      trainerComment: 'Bra första lopp för henne, nöjd med spåret',
      startlistUrl: '#',
      likedBy: likedByUsers.slice(2, 19),
      commentsList: [
        { id: 1, author: 'Sofia Berg', initials: 'SB', text: 'Lycka till!', time: '3 tim sedan' },
        { id: 2, author: 'Johan Ström', initials: 'JS', text: 'Kommer att heja på er!', time: '2 tim sedan' }
      ]
    },
    {
      id: 3,
      type: 'stable',
      stableName: 'Markus Svedberg',
      reportType: 'Månadsrapport januari',
      title: 'Full pott på travgalan',
      description: 'En helt magisk kväll på Travgalan där stallet fick ta emot hela tre utmärkelser.',
      fullReport: 'En helt magisk kväll på Travgalan där stallet fick ta emot hela tre utmärkelser. Kinematic utsågs till Årets häst efter en fantastisk säsong med 12 segrar på 15 starter. Dessutom fick vi priser för Årets uppfödare och Årets genombrott med vår talang Nova Express.\n\nDet här är resultatet av hårt arbete från hela teamet - tränare, skötare, kuskar och inte minst våra fantastiska hästägare som tror på det vi gör. Ett stort tack till alla som har stöttat oss under året.\n\nNu laddar vi om inför 2026 med nya mål och drömmar. Vi har flera spännande hästar i stallet som vi tror mycket på för den kommande säsongen.',
      image: '/travgalan.png',
      timestamp: '1 dag sedan',
      likedBy: likedByUsers.slice(4, 21),
      commentsList: [
        { id: 1, author: 'Maria Karlsson', initials: 'MK', text: 'Fantastiska resultat!', time: '1 dag sedan' },
        { id: 2, author: 'Per Nilsson', initials: 'PN', text: 'Bra jobbat hela teamet!', time: '20 tim sedan' }
      ]
    },
    {
      id: 4,
      type: 'update',
      horseName: 'Deeply Express',
      reportType: 'Månadsrapport januari',
      title: 'Letar lopp',
      description: 'Åter i träning efter halsinfektion i senaste loppet. Känns fin.',
      fullReport: 'Åter i träning efter halsinfektion i senaste loppet. Känns fin och pigg igen efter några veckors vila.\n\nVi har tagit det försiktigt med uppbyggnaden och hon har svarat bra på träningen. Veterinären är nöjd med hur läkningen har gått och vi har fått grönt ljus att börja leta efter passande lopp.\n\nPlanen är att hitta ett lugnare lopp i början av februari för att komma igång igen. Hon behöver inte bevisa något utan det handlar om att få tillbaka rutinen och självförtroendet.',
      image: '/deeply-express.png',
      timestamp: '1 dag sedan',
      likedBy: likedByUsers.slice(0, 17),
      commentsList: [
        { id: 1, author: 'Lisa Ek', initials: 'LE', text: 'Så glad att höra!', time: '1 dag sedan' },
        { id: 2, author: 'Karin Holm', initials: 'KH', text: 'Underbar häst!', time: '18 tim sedan' }
      ]
    },
    {
      id: 5,
      type: 'event',
      eventType: 'Event',
      title: 'Hästägarfest',
      description: 'Välkommen till vår årliga hästägarfest! Mat, dryck och mingel med andra delägare.',
      date: '3 dec - 18:00',
      location: 'Sundbyberg',
      attending: 22,
      timestamp: '2 tim sedan',
      likedBy: likedByUsers.slice(3, 20),
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
      id: 6,
      type: 'race-event',
      eventType: 'Event',
      title: 'Kommande tävlingsdag',
      description: '3 hästar från stallet är anmälda till start',
      date: '3 dec - 18:30',
      location: 'Solvalla',
      horses: ['Kinematic', 'Pargas Sox', 'Deeply Express'],
      attending: 18,
      likedBy: likedByUsers.slice(1, 18),
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

  const [feedItems, setFeedItems] = useState(
    initialFeedItems.map(item => ({ ...item, liked: false, showComments: false, showLikes: false, expanded: false, isAttending: false, newComment: '', activeTab: null, newChatMessage: '' }))
  );

  const [showFilters, setShowFilters] = useState(false);
  const [activeTypeFilter, setActiveTypeFilter] = useState(null);
  const [activeHorseFilter, setActiveHorseFilter] = useState(null);

  const typeFilters = [
    { id: 'training', label: 'Träningsrapport', types: ['training'] },
    { id: 'race', label: 'Anmäld till start', types: ['race'] },
    { id: 'stable', label: 'Stallrapport', types: ['stable'] },
    { id: 'update', label: 'Hästrapport', types: ['update'] },
    { id: 'event', label: 'Event', types: ['event', 'race-event'] }
  ];

  const horses = ['Kinematic', 'Pargas Sox', 'Deeply Express', 'Corsa Cortina'];

  const getItemHorses = (item) => {
    if (item.horseName) return [item.horseName];
    if (item.horses) return item.horses;
    return [];
  };

  const filteredFeedItems = feedItems.filter(item => {
    const typeMatch = !activeTypeFilter || typeFilters.find(f => f.id === activeTypeFilter)?.types.includes(item.type);
    const horseMatch = !activeHorseFilter || getItemHorses(item).includes(activeHorseFilter);
    return typeMatch && horseMatch;
  });

  const clearFilters = () => {
    setActiveTypeFilter(null);
    setActiveHorseFilter(null);
  };

  const hasActiveFilters = activeTypeFilter || activeHorseFilter;

  const handleToggleExpand = (id, e) => {
    e.stopPropagation();
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, expanded: !item.expanded } : item
      )
    );
  };

  const handleToggleAttend = (id, e) => {
    e.stopPropagation();
    setFeedItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, isAttending: !item.isAttending, attending: item.isAttending ? item.attending - 1 : item.attending + 1 }
          : item
      )
    );
  };

  const handleSetActiveTab = (id, tab, e) => {
    e.stopPropagation();
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, activeTab: item.activeTab === tab ? null : tab } : item
      )
    );
  };

  const handleChatMessageChange = (id, value) => {
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, newChatMessage: value } : item
      )
    );
  };

  const handleSubmitChatMessage = (id, e) => {
    e.stopPropagation();
    setFeedItems(items =>
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
    setFeedItems(items =>
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
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, showLikes: !item.showLikes, showComments: false } : item
      )
    );
  };

  const handleToggleComments = (id, e) => {
    e.stopPropagation();
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, showComments: !item.showComments, showLikes: false } : item
      )
    );
  };

  const handleCommentChange = (id, value) => {
    setFeedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, newComment: value } : item
      )
    );
  };

  const handleSubmitComment = (id, e) => {
    e.stopPropagation();
    setFeedItems(items =>
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

  const renderFeedItem = (item) => {
    switch (item.type) {
      case 'training':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon green">
                <HeartbeatIcon size={20} />
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
            {renderFeedActions(item)}
          </div>
        );

      case 'race':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon blue">
                <TrophyIcon size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.date}</p>
              </div>
            </div>
            <h3>{item.title}</h3>
            <div className="race-meta">
              <a
                href={item.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="meta-link"
                onClick={(e) => e.stopPropagation()}
              >
                <MapPin size={14} />
                <span>{item.location}</span>
              </a>
            </div>
            <div className="race-meta">
              <a
                href={item.startlistUrl}
                className="meta-link"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                <span>Startlista</span>
              </a>
            </div>
            <div className="info-box comment-box">
              <div className="label">Tränarkommentar:</div>
              <div className="value">"{item.trainerComment}"</div>
            </div>
            {renderFeedActions(item)}
          </div>
        );

      case 'stable':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon orange">
                <HorseshoeIcon size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.stableName}</h4>
                <p>{item.reportType}</p>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <img src={item.image} alt="Stallrapport" className="feed-image" />
            {item.fullReport && (
              <>
                {item.expanded && (
                  <div className="full-report">
                    {item.fullReport.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                <button
                  className="expand-button"
                  onClick={(e) => handleToggleExpand(item.id, e)}
                >
                  {item.expanded ? (
                    <>Visa mindre <ChevronUp size={16} /></>
                  ) : (
                    <>Läs hela rapporten <ChevronDown size={16} /></>
                  )}
                </button>
              </>
            )}
            {renderFeedActions(item)}
          </div>
        );

      case 'update':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon orange">
                <HorseIcon size={20} />
              </div>
              <div className="feed-card-header-text">
                <h4>{item.horseName}</h4>
                <p>{item.reportType}</p>
              </div>
              <span className="timestamp">{item.timestamp}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="subtitle">{item.description}</p>
            <img src={item.image} alt="Hästuppdatering" className="feed-image" />
            {item.fullReport && (
              <>
                {item.expanded && (
                  <div className="full-report">
                    {item.fullReport.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                )}
                <button
                  className="expand-button"
                  onClick={(e) => handleToggleExpand(item.id, e)}
                >
                  {item.expanded ? (
                    <>Visa mindre <ChevronUp size={16} /></>
                  ) : (
                    <>Läs mer <ChevronDown size={16} /></>
                  )}
                </button>
              </>
            )}
            {renderFeedActions(item)}
          </div>
        );

      case 'event':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon pink">
                <CalendarIcon size={20} />
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

      case 'race-event':
        return (
          <div key={item.id} className="card feed-card">
            <div className="feed-card-header">
              <div className="feed-card-icon pink">
                <CalendarIcon size={20} />
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

      default:
        return null;
    }
  };

  return (
    <div className="page-wrapper">
      <Header
        title="Hem"
        stableName="Markus Svedberg"
      />

      <div className="content">
        <div className="filter-section">
          <button
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            Filter
            {hasActiveFilters && <span className="filter-badge">{(activeTypeFilter ? 1 : 0) + (activeHorseFilter ? 1 : 0)}</span>}
          </button>
          {hasActiveFilters && (
            <button className="clear-filters" onClick={clearFilters}>
              <X size={14} /> Rensa
            </button>
          )}
        </div>

        {showFilters && (
          <div className="filter-panel">
            <div className="filter-group">
              <h4>Typ</h4>
              <div className="filter-chips">
                {typeFilters.map(filter => (
                  <button
                    key={filter.id}
                    className={`filter-chip ${activeTypeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveTypeFilter(activeTypeFilter === filter.id ? null : filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <h4>Häst</h4>
              <div className="filter-chips">
                {horses.map(horse => (
                  <button
                    key={horse}
                    className={`filter-chip ${activeHorseFilter === horse ? 'active' : ''}`}
                    onClick={() => setActiveHorseFilter(activeHorseFilter === horse ? null : horse)}
                  >
                    {horse}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {filteredFeedItems.length === 0 ? (
          <div className="no-results">
            <p>Inga inlägg matchar dina filter</p>
            <button className="clear-filters-link" onClick={clearFilters}>Rensa filter</button>
          </div>
        ) : (
          filteredFeedItems.map(renderFeedItem)
        )}
      </div>

      <BottomNav />
    </div>
  );
}
