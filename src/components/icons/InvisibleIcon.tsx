export function InvisibleIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Magnifying glass looking for something that's not there */}
      <circle
        cx="24"
        cy="24"
        r="14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="34"
        y1="34"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Fading/invisible business icon inside the magnifying glass */}
      <g opacity="0.3">
        <rect
          x="18"
          y="20"
          width="12"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />
        <path
          d="M 18 20 L 24 16 L 30 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          fill="none"
        />
      </g>

      {/* Question marks suggesting inability to find/discover */}
      <text
        x="50"
        y="20"
        fontSize="10"
        fill="currentColor"
        opacity="0.4"
        fontWeight="bold"
      >
        ?
      </text>
      <text
        x="54"
        y="28"
        fontSize="8"
        fill="currentColor"
        opacity="0.3"
        fontWeight="bold"
      >
        ?
      </text>
    </svg>
  );
}
