import { useNavigate } from 'react-router-dom';
import { Settings, User, Bell, Shield, LogOut } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Avatar from '../components/Avatar';

export default function Profile() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: 'Redigera Profil' },
    { icon: Bell, label: 'Notifikationer' },
    { icon: Shield, label: 'Sekretess & Säkerhet' },
    { icon: Settings, label: 'Inställningar' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Profil"
        subtitle="Hantera ditt konto"
        showMenu
        showNotification
      />

      <div className="content">
        <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
          <Avatar initials="JM" style={{ width: '80px', height: '80px', fontSize: '28px', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '4px' }}>Johnson Mark</h3>
          <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '8px' }}>johnson.mark@email.com</p>
          <span className="badge badge-owner">Stallägare</span>
        </div>

        <div className="card" style={{ padding: '8px 0' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderBottom: index < menuItems.length - 1 ? '1px solid #E5E7EB' : 'none',
                cursor: 'pointer'
              }}
            >
              <item.icon size={20} style={{ color: '#6B7280' }} />
              <span style={{ flex: 1, fontSize: '14px' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '8px 0', marginTop: '12px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              cursor: 'pointer',
              color: '#EF4444'
            }}
            onClick={() => navigate('/')}
          >
            <LogOut size={20} />
            <span style={{ flex: 1, fontSize: '14px' }}>Logga Ut</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
