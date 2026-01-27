import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Target, Check, Users, MessageSquare } from 'lucide-react';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function HorsePlanning() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('my-preferences');
  const [myPreferences, setMyPreferences] = useState({
    priority1: '',
    priority2: '',
    priority3: '',
    freeText: ''
  });
  const [saved, setSaved] = useState(false);

  const horsesData = {
    1: { name: 'Kinematic', owners: [
      { name: 'Matilda Rydow', initials: 'MR', isCurrentUser: true }
    ]},
    2: { name: 'Pargas Sox', owners: [
      { name: 'Matilda Rydow', initials: 'MR', isCurrentUser: true },
      { name: 'Anna Lindgren', initials: 'AL' },
      { name: 'Erik Johansson', initials: 'EJ' }
    ]},
    3: { name: 'Deeply Express', owners: [
      { name: 'Matilda Rydow', initials: 'MR', isCurrentUser: true },
      { name: 'Sofia Berg', initials: 'SB' },
      { name: 'Johan Ström', initials: 'JS' },
      { name: 'Per Nilsson', initials: 'PN' }
    ]},
    4: { name: 'Corsa Cortina', owners: [
      { name: 'Matilda Rydow', initials: 'MR', isCurrentUser: true },
      { name: 'Maria Karlsson', initials: 'MK' },
      { name: 'Lisa Ek', initials: 'LE' },
      { name: 'Anders Lund', initials: 'AL' }
    ]}
  };

  const horse = horsesData[id] || horsesData[1];

  // Simulated owner responses for the compiled view
  const ownerResponses = {
    2: [
      { owner: 'Anna Lindgren', initials: 'AL', priority1: 'win-races', priority2: 'race-often', priority3: 'long-term', freeText: 'Vill gärna vara med på lopp när det är möjligt.' },
      { owner: 'Erik Johansson', initials: 'EJ', priority1: 'earn-money', priority2: 'win-races', priority3: 'short-term', freeText: 'Fokus på avkastning.' }
    ],
    3: [
      { owner: 'Sofia Berg', initials: 'SB', priority1: 'win-races', priority2: 'win-big', priority3: 'long-term', freeText: 'Drömmer om en Elitloppsseger!' },
      { owner: 'Johan Ström', initials: 'JS', priority1: 'earn-money', priority2: 'race-often', priority3: 'short-term', freeText: '' },
      { owner: 'Per Nilsson', initials: 'PN', priority1: 'win-races', priority2: 'race-often', priority3: 'long-term', freeText: 'Kul att följa hästen på nära håll.' }
    ],
    4: [
      { owner: 'Maria Karlsson', initials: 'MK', priority1: 'win-races', priority2: 'win-big', priority3: 'long-term', freeText: 'Satsar på framtiden med denna häst.' },
      { owner: 'Lisa Ek', initials: 'LE', priority1: 'earn-money', priority2: 'race-often', priority3: 'short-term', freeText: '' },
      { owner: 'Anders Lund', initials: 'AL', priority1: 'win-races', priority2: 'race-often', priority3: 'long-term', freeText: 'Vill se hästen utvecklas.' }
    ]
  };

  const questions = [
    {
      id: 'priority1',
      question: 'Vad är viktigast för dig?',
      options: [
        { value: 'win-races', label: 'Vinna många lopp' },
        { value: 'earn-money', label: 'Tjäna mycket pengar' }
      ]
    },
    {
      id: 'priority2',
      question: 'Hur vill du att hästen ska tävla?',
      options: [
        { value: 'race-often', label: 'Starta ofta' },
        { value: 'win-big', label: 'Satsa på stora lopp' }
      ]
    },
    {
      id: 'priority3',
      question: 'Tidsperspektiv?',
      options: [
        { value: 'short-term', label: 'Kortsiktigt resultat' },
        { value: 'long-term', label: 'Långsiktig utveckling' }
      ]
    }
  ];

  const getOptionLabel = (questionId, value) => {
    const question = questions.find(q => q.id === questionId);
    const option = question?.options.find(o => o.value === value);
    return option?.label || '';
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const responses = ownerResponses[id] || [];

  // Calculate summary statistics
  const calculateSummary = () => {
    const allResponses = [...responses];
    if (myPreferences.priority1) {
      allResponses.push({
        priority1: myPreferences.priority1,
        priority2: myPreferences.priority2,
        priority3: myPreferences.priority3
      });
    }

    const summary = {};
    questions.forEach(q => {
      summary[q.id] = {};
      q.options.forEach(opt => {
        summary[q.id][opt.value] = allResponses.filter(r => r[q.id] === opt.value).length;
      });
    });
    return summary;
  };

  const summary = calculateSummary();

  return (
    <div className="page-wrapper">
      <div className="subpage-header">
        <button className="back-btn-light" onClick={() => navigate(`/horses/${id}`)}>
          <ChevronLeft size={20} />
        </button>
        <div className="subpage-header-content">
          <h1>Planering</h1>
          <span className="subpage-horse-name">{horse.name}</span>
        </div>
        <div style={{ width: '36px' }} />
      </div>

      <div className="content">
        {/* Tabs */}
        <div className="planning-tabs">
          <button
            className={`planning-tab ${activeTab === 'my-preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-preferences')}
          >
            <Target size={16} />
            Mina preferenser
          </button>
          <button
            className={`planning-tab ${activeTab === 'all-owners' ? 'active' : ''}`}
            onClick={() => setActiveTab('all-owners')}
          >
            <Users size={16} />
            Alla ägare ({horse.owners.length})
          </button>
        </div>

        {activeTab === 'my-preferences' && (
          <div className="preferences-content">
            <p className="preferences-intro">
              Fyll i dina preferenser för {horse.name}. Dina svar sammanställs med övriga delägares för att hjälpa tränaren planera.
            </p>

            {questions.map((q) => (
              <div key={q.id} className="card preference-question">
                <h3>{q.question}</h3>
                <div className="radio-options">
                  {q.options.map((option) => (
                    <label
                      key={option.value}
                      className={`radio-option ${myPreferences[q.id] === option.value ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={option.value}
                        checked={myPreferences[q.id] === option.value}
                        onChange={(e) => setMyPreferences({ ...myPreferences, [q.id]: e.target.value })}
                      />
                      <span className="radio-circle">
                        {myPreferences[q.id] === option.value && <Check size={14} />}
                      </span>
                      <span className="radio-label">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="card">
              <h3 className="free-text-label">
                <MessageSquare size={18} />
                Övriga önskemål eller kommentarer
              </h3>
              <textarea
                className="free-text-input"
                placeholder="Skriv eventuella tankar, önskemål eller frågor till tränaren..."
                value={myPreferences.freeText}
                onChange={(e) => setMyPreferences({ ...myPreferences, freeText: e.target.value })}
                rows={4}
              />
            </div>

            <button className="btn btn-primary save-preferences-btn" onClick={handleSave}>
              {saved ? (
                <>
                  <Check size={18} />
                  Sparat!
                </>
              ) : (
                'Spara preferenser'
              )}
            </button>
          </div>
        )}

        {activeTab === 'all-owners' && (
          <div className="all-owners-content">
            {/* Summary Section */}
            <div className="card summary-card">
              <h3>Sammanställning</h3>
              <p className="summary-intro">Så här har ägarna svarat:</p>

              {questions.map((q) => (
                <div key={q.id} className="summary-question">
                  <h4>{q.question}</h4>
                  <div className="summary-bars">
                    {q.options.map((option) => {
                      const count = summary[q.id][option.value] || 0;
                      const total = responses.length + (myPreferences.priority1 ? 1 : 0);
                      const percentage = total > 0 ? (count / total) * 100 : 0;
                      return (
                        <div key={option.value} className="summary-bar-item">
                          <div className="summary-bar-header">
                            <span>{option.label}</span>
                            <span>{count} av {total}</span>
                          </div>
                          <div className="summary-bar-track">
                            <div
                              className="summary-bar-fill"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Individual Responses */}
            <h3 className="responses-header">Individuella svar</h3>

            {/* Current user's response */}
            {myPreferences.priority1 && (
              <div className="card owner-response-card current-user">
                <div className="owner-response-header">
                  <Avatar initials="MR" size="small" />
                  <div className="owner-response-name">
                    <span>Matilda Rydow</span>
                    <span className="you-badge">Du</span>
                  </div>
                </div>
                <div className="owner-response-answers">
                  {questions.map((q) => myPreferences[q.id] && (
                    <div key={q.id} className="response-item">
                      <span className="response-question">{q.question}</span>
                      <span className="response-answer">{getOptionLabel(q.id, myPreferences[q.id])}</span>
                    </div>
                  ))}
                </div>
                {myPreferences.freeText && (
                  <div className="owner-response-comment">
                    <MessageSquare size={14} />
                    <p>"{myPreferences.freeText}"</p>
                  </div>
                )}
              </div>
            )}

            {/* Other owners' responses */}
            {responses.map((response, index) => (
              <div key={index} className="card owner-response-card">
                <div className="owner-response-header">
                  <Avatar initials={response.initials} size="small" />
                  <span className="owner-response-name">{response.owner}</span>
                </div>
                <div className="owner-response-answers">
                  {questions.map((q) => response[q.id] && (
                    <div key={q.id} className="response-item">
                      <span className="response-question">{q.question}</span>
                      <span className="response-answer">{getOptionLabel(q.id, response[q.id])}</span>
                    </div>
                  ))}
                </div>
                {response.freeText && (
                  <div className="owner-response-comment">
                    <MessageSquare size={14} />
                    <p>"{response.freeText}"</p>
                  </div>
                )}
              </div>
            ))}

            {responses.length === 0 && !myPreferences.priority1 && (
              <div className="empty-responses">
                <Users size={40} />
                <p>Inga svar har registrerats ännu.</p>
                <p>Fyll i dina preferenser för att starta!</p>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
