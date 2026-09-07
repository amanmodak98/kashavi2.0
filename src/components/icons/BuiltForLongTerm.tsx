export function BuiltForLongTermIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="40"
        width="40"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="16"
        y="28"
        width="32"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="20"
        y="16"
        width="24"
        height="12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="28"
        y="8"
        width="8"
        height="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
      />
      <path
        d="M8 58 L56 58"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 48 L28 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M36 48 L44 48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
