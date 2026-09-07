export function ManualIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock face showing time being consumed */}
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Clock hands */}
      <line
        x1="32"
        y1="32"
        x2="32"
        y2="20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="32"
        x2="40"
        y2="32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Circular arrows showing repetitive cycle */}
      <path
        d="M 48 32 A 16 16 0 0 1 32 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 45 30 L 48 32 L 46 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      <path
        d="M 16 32 A 16 16 0 0 1 32 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 19 30 L 16 32 L 18 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      {/* Hand cursor icon indicating manual work */}
      <g transform="translate(44, 44)" opacity="0.5">
        <path
          d="M 0 0 L 0 10 L 3 8 L 5 12 L 7 11 L 5 7 L 8 7 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
