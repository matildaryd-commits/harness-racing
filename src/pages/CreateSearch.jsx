import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, Users, Search, Target, Euro,
  Percent, Flag, Check, Sparkles
} from 'lucide-react';

export default function CreateSearch() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    searchType: '',
    horseType: '',
    ageRange: '',
    pedigreePrefs: [],
    budgetMin: '',
    budgetMax: '',
    ownershipPercent: '',
    goals: [],
    timeline: '',
    additionalInfo: ''
  });

  const totalSteps = 5;

  const searchTypes = [
    {
      id: 'find-coowners',
      icon: '👥',
      title: 'Hitta delägare',
      description: 'Jag vill hitta andra som vill köpa häst tillsammans'
    },
    {
      id: 'find-horse',
      icon: '🐴',
      title: 'Hitta häst',
      description: 'Jag söker efter en specifik typ av häst'
    },
    {
      id: 'both',
      icon: '🎯',
      title: 'Båda',
      description: 'Jag vill hitta både delägare och rätt häst'
    }
  ];

  const horseTypes = [
    { id: 'yearling-auction', label: 'Ettåring på auktion', icon: '🎯' },
    { id: 'ready-to-race', label: 'Starthäst (tävlingsklar)', icon: '🏇' },
    { id: 'young-training', label: 'Unghäst i träning (2-3 år)', icon: '⭐' },
    { id: 'proven-racer', label: 'Bevisad tävlingshäst', icon: '🏆' },
    { id: 'breeding', label: 'Avelshäst', icon: '💫' },
    { id: 'any', label: 'Öppen för olika typer', icon: '🔄' }
  ];

  const ageRanges = [
    { id: '1', label: '1 år (föl/ettåring)' },
    { id: '2-3', label: '2-3 år (unghäst)' },
    { id: '3-5', label: '3-5 år (starthäst)' },
    { id: '5+', label: '5+ år (erfaren)' },
    { id: 'any', label: 'Spelar ingen roll' }
  ];

  const pedigreeOptions = [
    { id: 'swedish', label: 'Svensk avel' },
    { id: 'french', label: 'Fransk avel' },
    { id: 'american', label: 'Amerikansk avel' },
    { id: 'italian', label: 'Italiensk avel' },
    { id: 'any', label: 'Alla' }
  ];

  const goalOptions = [
    { id: 'racing', label: 'Tävling', icon: '🏆' },
    { id: 'investment', label: 'Investering', icon: '📈' },
    { id: 'hobby', label: 'Hobby & nöje', icon: '❤️' },
    { id: 'community', label: 'Gemenskap', icon: '👥' },
    { id: 'breeding', label: 'Avel', icon: '🌟' },
    { id: 'learning', label: 'Lära mig mer', icon: '📚' }
  ];

  const timelineOptions = [
    { id: 'asap', label: 'Så snart som möjligt' },
    { id: '1-3months', label: 'Inom 1-3 månader' },
    { id: '3-6months', label: 'Inom 3-6 månader' },
    { id: 'flexible', label: 'Flexibel' }
  ];

  const ownershipOptions = [
    { id: '10-25', label: '10-25%', description: 'Liten andel, mindre risk' },
    { id: '25-50', label: '25-50%', description: 'Medelstor andel' },
    { id: '50-75', label: '50-75%', description: 'Majoritetsandel' },
    { id: '75-100', label: '75-100%', description: 'Hel eller nästan hel häst' }
  ];

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate('/matchmaking');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/matchmaking');
    }
  };

  const toggleArrayValue = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.searchType !== '';
      case 2: return formData.horseType !== '';
      case 3: return formData.budgetMin !== '' && formData.ownershipPercent !== '';
      case 4: return formData.goals.length > 0;
      case 5: return true;
      default: return false;
    }
  };

  return (
    <div className="page-wrapper create-search-page">
      {/* Header */}
      <div className="create-search-header">
        <button className="back-btn-light" onClick={handleBack}>
          <ChevronLeft size={20} />
        </button>
        <div className="step-indicator">
          <span>Steg {step} av {totalSteps}</span>
        </div>
        <div style={{ width: '36px' }} />
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="create-search-content">
        {/* Step 1: Search Type */}
        {step === 1 && (
          <div className="step-content">
            <div className="step-header">
              <h2>Vad söker du?</h2>
              <p>Välj vad du primärt letar efter</p>
            </div>

            <div className="option-cards">
              {searchTypes.map((type) => (
                <div
                  key={type.id}
                  className={`option-card ${formData.searchType === type.id ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, searchType: type.id })}
                >
                  <span className="option-icon">{type.icon}</span>
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                  {formData.searchType === type.id && (
                    <div className="selected-check">
                      <Check size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Horse Type */}
        {step === 2 && (
          <div className="step-content">
            <div className="step-header">
              <h2>Vilken typ av häst?</h2>
              <p>Välj den hästtyp som passar dig bäst</p>
            </div>

            <div className="type-options">
              {horseTypes.map((type) => (
                <div
                  key={type.id}
                  className={`type-option ${formData.horseType === type.id ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, horseType: type.id })}
                >
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-label">{type.label}</span>
                  {formData.horseType === type.id && <Check size={18} />}
                </div>
              ))}
            </div>

            <div className="sub-section">
              <h4>Åldersintervall</h4>
              <div className="pill-options">
                {ageRanges.map((age) => (
                  <button
                    key={age.id}
                    className={`pill-option ${formData.ageRange === age.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, ageRange: age.id })}
                  >
                    {age.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sub-section">
              <h4>Avelsursprung (valfritt)</h4>
              <div className="pill-options">
                {pedigreeOptions.map((pedigree) => (
                  <button
                    key={pedigree.id}
                    className={`pill-option ${formData.pedigreePrefs.includes(pedigree.id) ? 'selected' : ''}`}
                    onClick={() => toggleArrayValue('pedigreePrefs', pedigree.id)}
                  >
                    {pedigree.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Budget & Ownership */}
        {step === 3 && (
          <div className="step-content">
            <div className="step-header">
              <h2>Budget & ägarandel</h2>
              <p>Ange din budget och önskad ägarandel</p>
            </div>

            <div className="form-section">
              <h4><Euro size={18} /> Budget</h4>
              <div className="budget-inputs">
                <div className="input-group">
                  <label>Minst</label>
                  <input
                    type="text"
                    placeholder="50 000"
                    value={formData.budgetMin}
                    onChange={(e) => setFormData({ ...formData, budgetMin: e.target.value })}
                  />
                  <span className="input-suffix">kr</span>
                </div>
                <span className="budget-separator">-</span>
                <div className="input-group">
                  <label>Max</label>
                  <input
                    type="text"
                    placeholder="200 000"
                    value={formData.budgetMax}
                    onChange={(e) => setFormData({ ...formData, budgetMax: e.target.value })}
                  />
                  <span className="input-suffix">kr</span>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h4><Percent size={18} /> Önskad ägarandel</h4>
              <div className="ownership-options">
                {ownershipOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`ownership-option ${formData.ownershipPercent === option.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, ownershipPercent: option.id })}
                  >
                    <span className="ownership-value">{option.label}</span>
                    <span className="ownership-desc">{option.description}</span>
                    {formData.ownershipPercent === option.id && <Check size={16} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Goals */}
        {step === 4 && (
          <div className="step-content">
            <div className="step-header">
              <h2>Dina mål</h2>
              <p>Välj vad som är viktigt för dig (flera val möjliga)</p>
            </div>

            <div className="goal-options">
              {goalOptions.map((goal) => (
                <div
                  key={goal.id}
                  className={`goal-option ${formData.goals.includes(goal.id) ? 'selected' : ''}`}
                  onClick={() => toggleArrayValue('goals', goal.id)}
                >
                  <span className="goal-icon">{goal.icon}</span>
                  <span className="goal-label">{goal.label}</span>
                  {formData.goals.includes(goal.id) && (
                    <div className="goal-check">
                      <Check size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="sub-section">
              <h4>Tidsram</h4>
              <div className="timeline-options">
                {timelineOptions.map((timeline) => (
                  <button
                    key={timeline.id}
                    className={`timeline-option ${formData.timeline === timeline.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, timeline: timeline.id })}
                  >
                    {timeline.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Review */}
        {step === 5 && (
          <div className="step-content">
            <div className="step-header">
              <h2>Granska din sökning</h2>
              <p>Kontrollera att allt ser rätt ut innan du publicerar</p>
            </div>

            <div className="review-card">
              <div className="review-section">
                <h4>Söktyp</h4>
                <p>{searchTypes.find(t => t.id === formData.searchType)?.title || '-'}</p>
              </div>

              <div className="review-section">
                <h4>Hästtyp</h4>
                <p>{horseTypes.find(t => t.id === formData.horseType)?.label || '-'}</p>
                {formData.ageRange && (
                  <span className="review-tag">{ageRanges.find(a => a.id === formData.ageRange)?.label}</span>
                )}
              </div>

              <div className="review-section">
                <h4>Budget</h4>
                <p>{formData.budgetMin} - {formData.budgetMax} kr</p>
              </div>

              <div className="review-section">
                <h4>Ägarandel</h4>
                <p>{ownershipOptions.find(o => o.id === formData.ownershipPercent)?.label || '-'}</p>
              </div>

              <div className="review-section">
                <h4>Mål</h4>
                <div className="review-tags">
                  {formData.goals.map((goal) => (
                    <span key={goal} className="review-tag">
                      {goalOptions.find(g => g.id === goal)?.label}
                    </span>
                  ))}
                </div>
              </div>

              {formData.timeline && (
                <div className="review-section">
                  <h4>Tidsram</h4>
                  <p>{timelineOptions.find(t => t.id === formData.timeline)?.label}</p>
                </div>
              )}
            </div>

            <div className="additional-info">
              <h4>Övrig information (valfritt)</h4>
              <textarea
                placeholder="Lägg till mer information om vad du söker..."
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              />
            </div>

            <div className="publish-info">
              <Sparkles size={20} />
              <p>När du publicerar kommer systemet automatiskt matcha dig med andra som har liknande intressen.</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="create-search-footer">
        <button
          className="btn btn-primary btn-large"
          onClick={handleNext}
          disabled={!canProceed()}
        >
          {step === totalSteps ? (
            <>
              <Sparkles size={20} />
              Publicera sökning
            </>
          ) : (
            <>
              Fortsätt
              <ChevronRight size={20} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
