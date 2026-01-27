import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Mail, Send } from 'lucide-react';

export default function InviteFans() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const horsesData = {
    1: { name: 'Kinematic' },
    2: { name: 'Pargas Sox' },
    3: { name: 'Deeply Express' },
    4: { name: 'Corsa Cortina' }
  };

  const horse = horsesData[id] || horsesData[1];

  const handleSendInvite = () => {
    if (email) {
      navigate(-1);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="invite-header">
        <button className="back-btn-light" onClick={() => navigate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <h1>Bjud in följare</h1>
        <div style={{ width: '36px' }} />
      </div>

      <div className="content">
        <div className="card invite-card">
          <div className="invite-icon">
            <Mail size={28} />
          </div>
          <h3>Bjud in fans till {horse.name}</h3>
          <p>Skicka en inbjudan via e-post så kan de följa hästen och få uppdateringar.</p>
        </div>

        <div className="card">
          <div className="form-group">
            <label>E-postadress</label>
            <input
              type="email"
              placeholder="namn@exempel.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Personligt meddelande (valfritt)</label>
            <textarea
              placeholder="Skriv ett personligt meddelande till mottagaren..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleSendInvite}
            disabled={!email}
          >
            <Send size={18} />
            Skicka inbjudan
          </button>
        </div>

        <p className="invite-note">
          Mottagaren kommer att få ett e-postmeddelande med en länk för att följa {horse.name} i appen.
        </p>
      </div>
    </div>
  );
}
