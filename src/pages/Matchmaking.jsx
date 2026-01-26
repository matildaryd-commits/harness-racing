import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Matchmaking() {
  return (
    <div className="page-wrapper">
      <Header
        title="Matchning"
        subtitle="Hitta den perfekta matchningen"
        showMenu
        showNotification
      />

      <div className="content">
        <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏇</div>
          <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Kommer Snart</h3>
          <p style={{ color: '#6B7280', fontSize: '14px' }}>
            Hästmatchningsfunktioner är för närvarande under utveckling.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
