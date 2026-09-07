export function AIWhereItMattersIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="24"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="16"
        cy="44"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="48"
        cy="44"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M28 30 L20 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 30 L44 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="24" r="3" fill="currentColor" />
      <circle cx="16" cy="44" r="2" fill="currentColor" />
      <circle cx="48" cy="44" r="2" fill="currentColor" />
      <path
        d="M32 8 L32 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M20 14 L24 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M44 14 L40 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
