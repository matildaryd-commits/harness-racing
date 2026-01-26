import { ChevronLeft, Menu, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({
  title,
  subtitle,
  showBack = false,
  showMenu = false,
  showNotification = false,
  stableName = null,
  children
}) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="status-bar">
        <span>10:06</span>
        <span></span>
      </div>

      {showBack || showMenu || showNotification || stableName ? (
        <div className="header-with-nav">
          <div className="header-left">
            {showBack && (
              <button className="back-button" onClick={() => navigate(-1)}>
                <ChevronLeft size={24} />
              </button>
            )}
            {showMenu && (
              <button className="back-button">
                <Menu size={24} />
              </button>
            )}
            <div>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>

          <div className="header-right">
            {showNotification && (
              <button className="back-button">
                <Bell size={20} />
              </button>
            )}
            {stableName && (
              <div>
                <span>Your stable</span>
                <div className="stable-name">{stableName}</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </>
      )}

      {children}
    </header>
  );
}
