export const HeartbeatIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12h4l2-4 4 8 2-4h6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrophyIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-2M6 3h12v8a6 6 0 01-12 0V3zM12 17v4M8 21h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HorseshoeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 4C5 4 4 8 4 12c0 4 2 8 8 8s8-4 8-8c0-4-1-8-1-8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6" cy="6" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
    <circle cx="5" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="19" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="5.5" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="18.5" cy="14" r="1.5" fill="currentColor"/>
  </svg>
);

export const HorseIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 6c0-1.5-1-3-3-3-1 0-2 .5-2.5 1.5L12 7l-2-1c-1-.5-2.5-.5-3.5.5S5 8.5 5 10c0 2 1.5 4 4 5l1 .5v3.5M16 10c1 0 2 .5 2.5 1.5.5 1 .5 2.5-.5 3.5s-2.5 1.5-4 1l-1-.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="9" r="1" fill="currentColor"/>
  </svg>
);

export const CalendarIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 10h18" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="7" y="14" width="3" height="3" rx="0.5" fill="currentColor"/>
    <rect x="14" y="14" width="3" height="3" rx="0.5" fill="currentColor"/>
  </svg>
);
