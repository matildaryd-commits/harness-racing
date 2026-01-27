import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function Pedigree() {
  const navigate = useNavigate();
  const { id } = useParams();

  const pedigreeData = {
    1: {
      name: 'Kinematic',
      pedigree: {
        father: { name: 'Nuncio', link: '#' },
        mother: { name: 'Mystical Ann', link: '#' },
        fathersFather: { name: 'Andover Hall', link: '#' },
        fathersMother: { name: 'Nicole Isabelle', link: '#' },
        mothersFather: { name: 'Kadabra', link: '#' },
        mothersMother: { name: 'Mystic Valley', link: '#' }
      },
      siblings: [
        { name: 'Kinetic Energy', record: '1.10,5', earnings: '2 450 000 kr', link: '#' },
        { name: 'Mystic Nuncio', record: '1.11,2', earnings: '1 890 000 kr', link: '#' },
        { name: 'Dream Catcher', record: '1.12,0', earnings: '980 000 kr', link: '#' }
      ]
    },
    2: {
      name: 'Pargas Sox',
      pedigree: {
        father: { name: 'Maharajah', link: '#' },
        mother: { name: 'Halka de Vandel', link: '#' },
        fathersFather: { name: 'Royalty For Life', link: '#' },
        fathersMother: { name: 'Paprika Norga', link: '#' },
        mothersFather: { name: 'Viking Kronos', link: '#' },
        mothersMother: { name: 'Halka Hull', link: '#' }
      },
      siblings: [
        { name: 'Vandel King', record: '1.11,8', earnings: '1 650 000 kr', link: '#' },
        { name: 'Sox Appeal', record: '1.12,5', earnings: '890 000 kr', link: '#' }
      ]
    },
    3: {
      name: 'Deeply Express',
      pedigree: {
        father: { name: 'Readly Express', link: '#' },
        mother: { name: 'Lady Eowyn', link: '#' },
        fathersFather: { name: 'Ready Cash', link: '#' },
        fathersMother: { name: 'Express Duo', link: '#' },
        mothersFather: { name: 'Magnetic Power', link: '#' },
        mothersMother: { name: 'Lady Laurel', link: '#' }
      },
      siblings: [
        { name: 'Express Lady', record: '1.10,8', earnings: '3 200 000 kr', link: '#' },
        { name: 'Power Express', record: '1.11,0', earnings: '2 100 000 kr', link: '#' },
        { name: 'Deep Power', record: '1.12,3', earnings: '1 450 000 kr', link: '#' }
      ]
    },
    4: {
      name: 'Corsa Cortina',
      pedigree: {
        father: { name: 'Calgary Games', link: '#' },
        mother: { name: 'Make Approach', link: '#' },
        fathersFather: { name: 'Ready Cash', link: '#' },
        fathersMother: { name: 'Calgary Hall', link: '#' },
        mothersFather: { name: 'Viking Kronos', link: '#' },
        mothersMother: { name: 'Make Believe', link: '#' }
      },
      siblings: [
        { name: 'Cortina Star', record: '1.12,0', earnings: '750 000 kr', link: '#' }
      ]
    }
  };

  const data = pedigreeData[id] || pedigreeData[1];

  return (
    <div className="page-wrapper">
      <Header
        title="Stamtavla"
        showBack
        stableName="Markus Svedberg"
      />

      <div className="content">
        <div className="card">
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>{data.name}</h2>

          <div className="pedigree-tree">
            <div className="pedigree-row">
              <div className="pedigree-label">Far</div>
              <a href={data.pedigree.father.link} className="pedigree-link">
                {data.pedigree.father.name}
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="pedigree-sub-row">
              <div className="pedigree-row">
                <div className="pedigree-label">Farfar</div>
                <a href={data.pedigree.fathersFather.link} className="pedigree-link small">
                  {data.pedigree.fathersFather.name}
                  <ChevronRight size={14} />
                </a>
              </div>
              <div className="pedigree-row">
                <div className="pedigree-label">Farmor</div>
                <a href={data.pedigree.fathersMother.link} className="pedigree-link small">
                  {data.pedigree.fathersMother.name}
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>

            <div className="pedigree-divider" />

            <div className="pedigree-row">
              <div className="pedigree-label">Mor</div>
              <a href={data.pedigree.mother.link} className="pedigree-link">
                {data.pedigree.mother.name}
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="pedigree-sub-row">
              <div className="pedigree-row">
                <div className="pedigree-label">Morfar</div>
                <a href={data.pedigree.mothersFather.link} className="pedigree-link small">
                  {data.pedigree.mothersFather.name}
                  <ChevronRight size={14} />
                </a>
              </div>
              <div className="pedigree-row">
                <div className="pedigree-label">Mormor</div>
                <a href={data.pedigree.mothersMother.link} className="pedigree-link small">
                  {data.pedigree.mothersMother.name}
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="siblings-header">
            <Trophy size={18} style={{ color: '#F97316' }} />
            <h3>Bäst presterande syskon</h3>
          </div>

          <div className="siblings-list">
            {data.siblings.map((sibling, index) => (
              <a key={index} href={sibling.link} className="sibling-item">
                <div className="sibling-info">
                  <span className="sibling-name">{sibling.name}</span>
                  <span className="sibling-record">{sibling.record}</span>
                </div>
                <div className="sibling-earnings">{sibling.earnings}</div>
                <ChevronRight size={16} className="sibling-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
