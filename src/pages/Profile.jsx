import { useNavigate } from 'react-router-dom';
import { Settings, User, Bell, Shield, LogOut } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  const navigate = useNavigate();

  const roles = [
    { horse: 'Kinematic', role: 'Ägare', ownership: '100%' },
    { horse: 'Pargas Sox', role: 'Delägare', ownership: '33%' },
    { horse: 'Deeply Express', role: 'Delägare', ownership: '25%' },
    { horse: 'Corsa Cortina', role: 'Delägare', ownership: '25%' }
  ];

  const menuItems = [
    { icon: User, label: 'Redigera profil' },
    { icon: Bell, label: 'Notifikationer' },
    { icon: Shield, label: 'Sekretess & säkerhet' },
    { icon: Settings, label: 'Inställningar' }
  ];

  return (
    <div className="page-wrapper">
      <Header
        title="Profil"
        stableName="Markus Svedberg"
      />

      <div className="content">
        <div className="card profile-card">
          <div className="profile-image">
            <img src="/matilda-profile.png" alt="Matilda Rydow" />
          </div>
          <h3 className="profile-name">Matilda Rydow</h3>
          <p className="profile-email">matilda.rydow@email.com</p>
          <div className="profile-roles">
            <span className="badge badge-owner">Ägare</span>
            <span className="badge badge-co-owner">Delägare</span>
          </div>
        </div>

        <div className="card">
          <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#6B7280' }}>Mina roller i Stall Markus Svedberg</h4>
          {roles.map((item, index) => (
            <div
              key={index}
              className="role-item"
              onClick={() => navigate(`/horses/${index + 1}`)}
            >
              <span className="role-horse">{item.horse}</span>
              <div className="role-info">
                <span className={`badge ${item.role === 'Ägare' ? 'badge-owner' : 'badge-co-owner'}`}>{item.role}</span>
                <span className="role-ownership">{item.ownership}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '8px 0' }}>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item"
              style={{
                borderBottom: index < menuItems.length - 1 ? '1px solid #E5E7EB' : 'none'
              }}
            >
              <item.icon size={20} style={{ color: '#6B7280' }} />
              <span style={{ flex: 1, fontSize: '14px' }}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '8px 0', marginTop: '12px', marginBottom: '100px' }}>
          <div
            className="menu-item logout"
            onClick={() => navigate('/')}
          >
            <LogOut size={20} />
            <span style={{ flex: 1, fontSize: '14px' }}>Logga ut</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
