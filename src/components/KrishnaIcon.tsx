interface KrishnaIconProps {
  className?: string;
  size?: number;
}

export default function KrishnaIcon({ className = "w-16 h-16", size = 64 }: KrishnaIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`inline-block drop-shadow-[0_2px_8px_rgba(185,138,47,0.35)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Krishna Flute with Peacock Feather"
    >
      <defs>
        {/* Golden metallic gradient for the flute */}
        <linearGradient id="goldFlute" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#f7d070" />
          <stop offset="35%" stopColor="#d49e35" />
          <stop offset="65%" stopColor="#f3de8a" />
          <stop offset="100%" stopColor="#aa781c" />
        </linearGradient>

        {/* Peacock feather outer emerald ring */}
        <linearGradient id="peacockOuter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107e5b" />
          <stop offset="50%" stopColor="#0d5c43" />
          <stop offset="100%" stopColor="#083827" />
        </linearGradient>

        {/* Peacock feather turquoise ring */}
        <linearGradient id="peacockTurquoise" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="50%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>

        {/* Peacock eye deep royal blue/indigo */}
        <radialGradient id="peacockEye" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="30%" stopColor="#2563eb" />
          <stop offset="70%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>

        {/* Peacock feather golden halo */}
        <linearGradient id="featherGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="60%" stopColor="#ca8a04" />
          <stop offset="100%" stopColor="#854d0e" />
        </linearGradient>

        {/* Tassel gradient */}
        <linearGradient id="tasselGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#8c2323" />
        </linearGradient>
      </defs>

      {/* ── PEACOCK FEATHER (MOR PANKH) ── */}
      {/* Feather central quill / stem */}
      <path
        d="M50 48 Q47 32 44 14"
        stroke="#854d0e"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Feather delicate wisps / barbs */}
      <g stroke="#15803d" strokeWidth="0.8" opacity="0.85" strokeLinecap="round">
        <path d="M46 20 Q32 16 28 22" />
        <path d="M47 24 Q30 22 26 30" />
        <path d="M48 29 Q32 30 30 38" />
        <path d="M49 35 Q36 38 35 44" />
        <path d="M45 18 Q58 14 62 19" />
        <path d="M46 22 Q60 21 64 28" />
        <path d="M47 27 Q62 28 63 36" />
        <path d="M48 33 Q60 36 58 42" />
      </g>

      {/* Outer Feather Crown (Golden halo) */}
      <ellipse
        cx="44"
        cy="22"
        rx="16"
        ry="12"
        transform="rotate(-15 44 22)"
        fill="url(#featherGold)"
        opacity="0.9"
      />

      {/* Emerald Green Ring */}
      <ellipse
        cx="44"
        cy="22"
        rx="13"
        ry="9.5"
        transform="rotate(-15 44 22)"
        fill="url(#peacockOuter)"
      />

      {/* Turquoise / Teal Ring */}
      <ellipse
        cx="44"
        cy="22"
        rx="9.5"
        ry="7"
        transform="rotate(-15 44 22)"
        fill="url(#peacockTurquoise)"
      />

      {/* Royal Indigo / Navy Eye */}
      <ellipse
        cx="44"
        cy="22"
        rx="6"
        ry="4.5"
        transform="rotate(-15 44 22)"
        fill="url(#peacockEye)"
      />

      {/* Eye Shimmer highlight */}
      <circle cx="42.5" cy="20.5" r="1.3" fill="#ffffff" opacity="0.9" />

      {/* ── BANSURI (FLUTE) ── */}
      {/* Slightly tilted golden flute body */}
      <g transform="rotate(-12 50 62)">
        {/* Main Flute Cylinder */}
        <rect
          x="12"
          y="58"
          width="76"
          height="8.5"
          rx="4.25"
          fill="url(#goldFlute)"
          stroke="#78350f"
          strokeWidth="0.8"
        />

        {/* Flute Mouthpiece Band (left ring) */}
        <rect x="18" y="57.5" width="2" height="9.5" fill="#8c2323" rx="0.5" />
        <rect x="22" y="57.5" width="1.5" height="9.5" fill="#fef08a" rx="0.5" />

        {/* Mouth blow hole */}
        <ellipse cx="27" cy="62.25" rx="1.8" ry="2.2" fill="#581c87" stroke="#3b0764" strokeWidth="0.5" />

        {/* 6 Melodic Finger Holes */}
        <circle cx="44" cy="62.25" r="1.6" fill="#451a03" />
        <circle cx="51" cy="62.25" r="1.6" fill="#451a03" />
        <circle cx="58" cy="62.25" r="1.6" fill="#451a03" />
        <circle cx="65" cy="62.25" r="1.6" fill="#451a03" />
        <circle cx="72" cy="62.25" r="1.6" fill="#451a03" />
        <circle cx="79" cy="62.25" r="1.6" fill="#451a03" />

        {/* End Gold Ring Trim */}
        <rect x="84" y="57.5" width="2" height="9.5" fill="#8c2323" rx="0.5" />

        {/* Hanging Silk Tassels & Pearl Ghungroos */}
        <path d="M20 67 Q19 75 18 83" stroke="#b98a2f" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="18" cy="74" r="1.4" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.4" />
        <path d="M16 83 L20 83 L18 91 Z" fill="url(#tasselGold)" />

        <path d="M23 67 Q24 76 25 85" stroke="#b98a2f" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="24.5" cy="76" r="1.4" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.4" />
        <path d="M23 85 L27 85 L25 93 Z" fill="url(#tasselGold)" />
      </g>
    </svg>
  );
}
