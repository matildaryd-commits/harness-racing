import { ChevronLeft, Bell, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({
  title,
  showBack = false,
  stableName = null,
  section = null,
  children
}) {
  const navigate = useNavigate();

  return (
    <header className="header">
      {section && (
        <div className="header-section-context">
          <Sparkles size={12} />
          <span>{section}</span>
        </div>
      )}
      <div className="header-content">
        <div className="header-left">
          {showBack && (
            <button className="header-btn" onClick={() => navigate(-1)}>
              <ChevronLeft size={24} />
            </button>
          )}
          <h1>{title}</h1>
        </div>

        <div className="header-right">
          {stableName && (
            <div className="stable-indicator" onClick={() => navigate('/stable')} style={{ cursor: 'pointer' }}>
              <span className="stable-label">Stall</span>
              <span className="stable-name">{stableName}</span>
            </div>
          )}
          <button className="header-btn">
            <Bell size={20} />
          </button>
        </div>
      </div>

      {children}
    </header>
  );
}
