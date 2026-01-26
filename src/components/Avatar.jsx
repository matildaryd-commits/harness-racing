export default function Avatar({ initials, size = 'normal', round = false, className = '' }) {
  const sizeClass = size === 'small' ? 'avatar-small' : '';
  const roundClass = round ? 'avatar-round' : '';

  return (
    <div className={`avatar avatar-teal ${sizeClass} ${roundClass} ${className}`}>
      {initials}
    </div>
  );
}
