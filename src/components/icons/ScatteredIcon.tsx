export function ScatteredIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Disconnected nodes representing scattered tools/platforms */}
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="52" cy="16" r="5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="32" cy="32" r="7" stroke="currentColor" strokeWidth="2" opacity="0.7" />
      <circle cx="16" cy="48" r="5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="48" cy="52" r="6" stroke="currentColor" strokeWidth="2" opacity="0.6" />

      {/* Broken/dashed connection lines showing disconnection */}
      <line
        x1="18" y1="12"
        x2="28" y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />
      <line
        x1="46" y1="20"
        x2="38" y2="28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />
      <line
        x1="28" y1="38"
        x2="20" y2="44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />
      <line
        x1="38" y1="36"
        x2="44" y2="46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      {/* Small scattered dots for additional chaos effect */}
      <circle cx="28" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="42" cy="36" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="58" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
