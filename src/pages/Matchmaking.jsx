import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Matchmaking() {
  return (
    <div className="page-wrapper">
      <Header
        title="Matchmaking"
        subtitle="Find the perfect match"
        showMenu
        showNotification
      />

      <div className="content">
        <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏇</div>
          <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Coming Soon</h3>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Horse matchmaking features are currently in development.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
