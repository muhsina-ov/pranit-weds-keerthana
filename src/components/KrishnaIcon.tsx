interface KrishnaIconProps {
  className?: string;
  size?: number;
}

export default function KrishnaIcon({ className = "w-20 h-20", size = 80 }: KrishnaIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`inline-block drop-shadow-[0_4px_14px_rgba(185,138,47,0.45)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Krishna Flute with Auspicious Peacock Feather"
    >
      <defs>
        {/* Golden metallic gradient for the flute */}
        <linearGradient id="goldFlute" x1="5%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#d49e35" />
          <stop offset="50%" stopColor="#fffbeb" />
          <stop offset="75%" stopColor="#b47818" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>

        {/* Flute golden tube highlight */}
        <linearGradient id="fluteHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Feather outer bronze halo */}
        <radialGradient id="featherBronze" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="45%" stopColor="#a16207" />
          <stop offset="80%" stopColor="#713f12" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>

        {/* Peacock feather rich emerald layer */}
        <linearGradient id="peacockEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="35%" stopColor="#047857" />
          <stop offset="75%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>

        {/* Peacock feather vibrant turquoise / teal band */}
        <linearGradient id="peacockTurquoise" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="30%" stopColor="#06b6d4" />
          <stop offset="70%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#115e59" />
        </linearGradient>

        {/* Peacock eye deep royal sapphire / midnight indigo core */}
        <radialGradient id="peacockIndigo" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="25%" stopColor="#1d4ed8" />
          <stop offset="60%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#090524" />
        </radialGradient>

        {/* Silk tassel gradient */}
        <linearGradient id="tasselGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>

      {/* ── REALISTIC AUSPICIOUS PEACOCK FEATHER (MOR PANKH) ── */}
      {/* Elegantly placed with gentle tilt to harmonize with Krishna's flute */}
      <g id="morPankh" transform="translate(42, 22) rotate(-10)">
        {/* Delicate sweeping emerald barbs (upward & outward) */}
        <g stroke="#047857" strokeWidth="0.75" opacity="0.85" strokeLinecap="round">
          {/* Left side barbs */}
          <path d="M 0 30 C -8 28, -17 22, -22 12" />
          <path d="M 0 24 C -9 22, -19 16, -25 4" />
          <path d="M 0 18 C -11 16, -21 9, -27 -5" />
          <path d="M 0 12 C -12 9, -23 0, -28 -14" />
          <path d="M 0 6 C -13 3, -23 -8, -27 -23" />
          <path d="M 0 0 C -12 -5, -21 -16, -23 -29" />

          {/* Right side barbs */}
          <path d="M 0 30 C 8 28, 17 22, 22 12" />
          <path d="M 0 24 C 9 22, 19 16, 25 4" />
          <path d="M 0 18 C 11 16, 21 9, 27 -5" />
          <path d="M 0 12 C 12 9, 23 0, 28 -14" />
          <path d="M 0 6 C 13 3, 23 -8, 27 -23" />
          <path d="M 0 0 C 12 -5, 21 -16, 23 -29" />
        </g>

        {/* Radiant golden crown wisps & outer aura tips */}
        <g stroke="#ca8a04" strokeWidth="0.7" opacity="0.9" strokeLinecap="round">
          <path d="M 0 -8 C -10 -15, -17 -26, -17 -34" />
          <path d="M 0 -12 C -6 -23, -9 -33, -9 -39" />
          <path d="M 0 -15 C -2 -25, -3 -35, -2 -41" />
          <path d="M 0 -18 L 0 -42" />
          <path d="M 0 -15 C 2 -25, 3 -35, 2 -41" />
          <path d="M 0 -12 C 6 -23, 9 -33, 9 -39" />
          <path d="M 0 -8 C 10 -15, 17 -26, 17 -34" />
        </g>

        {/* ── PEACOCK EYE (CONCENTRIC OCELLUS) ── */}
        {/* Layer 1: Bronze/Gold Outer Plume Contour */}
        <path
          d="M 0 -17 C 9 -17, 16 -8, 16 2 C 16 11, 8 15, 0 15.5 C -8 15, -16 11, -16 2 C -16 -8, -9 -17, 0 -17 Z"
          fill="url(#featherBronze)"
          opacity="0.95"
        />

        {/* Layer 2: Rich Emerald Green lobe */}
        <path
          d="M 0 -14 C 7.5 -14, 13 -6.5, 13 1.5 C 13 8.5, 6.5 12, 0 12.5 C -6.5 12, -13 8.5, -13 1.5 C -13 -6.5, -7.5 -14, 0 -14 Z"
          fill="url(#peacockEmerald)"
        />

        {/* Layer 3: Vibrant Peacock Turquoise Band with upper cleft notch */}
        <path
          d="M 0 -6.5 C 2 -9.5, 6.5 -9.5, 9.5 -5 C 11 -1, 9.5 5.5, 6 8.5 C 3 10, 0 10.2, 0 10.2 C 0 10.2, -3 10, -6 8.5 C -9.5 5.5, -11 -1, -9.5 -5 C -6.5 -9.5, -2 -9.5, 0 -6.5 Z"
          fill="url(#peacockTurquoise)"
        />

        {/* Layer 4: Deep Royal Sapphire / Indigo Core Pupil (Heart/Kidney curve) */}
        <path
          d="M 0 -3.5 C 1.8 -5.8, 5 -5.8, 6.8 -2.5 C 8 0.5, 6.5 4.5, 4 6.2 C 2 7.2, 0 7.4, 0 7.4 C 0 7.4, -2 7.2, -4 6.2 C -6.5 4.5, -8 0.5, -6.8 -2.5 C -5 -5.8, -1.8 -5.8, 0 -3.5 Z"
          fill="url(#peacockIndigo)"
        />

        {/* Specular Shimmer Arc & Divine Sparkle Highlight */}
        <path
          d="M -4.2 -1.5 C -3 -3.5, -0.6 -4, 0.2 -3.4"
          stroke="#bae6fd"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="-1.8" cy="-2.2" r="1.3" fill="#ffffff" opacity="0.95" />
        <circle cx="2.2" cy="-1.4" r="0.75" fill="#e0f2fe" opacity="0.85" />

        {/* Central Golden Quill (Rachis) passing cleanly through the feather stem */}
        <path
          d="M 0 35 L 0 -22"
          stroke="#78350f"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M 0 33 L 0 -20"
          stroke="#fef08a"
          strokeWidth="0.6"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>

      {/* ── BANSURI (SACRED GOLDEN FLUTE) ── */}
      <g id="bansuriFlute" transform="rotate(-10 50 63)">
        {/* Main Flute Body */}
        <rect
          x="7"
          y="58"
          width="86"
          height="10"
          rx="5"
          fill="url(#goldFlute)"
          stroke="#78350f"
          strokeWidth="0.9"
        />

        {/* Flute light reflection tube */}
        <rect
          x="9"
          y="59"
          width="82"
          height="2"
          rx="1"
          fill="url(#fluteHighlight)"
          opacity="0.75"
        />

        {/* Left Mouthpiece Decorative Bands */}
        <rect x="14" y="57.5" width="2.5" height="11" fill="#8c2323" rx="0.6" stroke="#5a1010" strokeWidth="0.3" />
        <rect x="18" y="57.5" width="2" height="11" fill="#fef08a" rx="0.5" />
        <rect x="21.5" y="57.5" width="1.5" height="11" fill="#8c2323" rx="0.5" />

        {/* Blow Mouth Hole */}
        <ellipse cx="27" cy="63" rx="2.2" ry="2.6" fill="#3b0764" stroke="#1e1b4b" strokeWidth="0.6" />

        {/* 6 Melodic Finger Holes */}
        <circle cx="44" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />
        <circle cx="52" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />
        <circle cx="60" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />
        <circle cx="68" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />
        <circle cx="76" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />
        <circle cx="84" cy="63" r="1.9" fill="#3b1502" stroke="#78350f" strokeWidth="0.4" />

        {/* Right End Golden Trim */}
        <rect x="88.5" y="57.5" width="2.5" height="11" fill="#8c2323" rx="0.6" stroke="#5a1010" strokeWidth="0.3" />

        {/* Hanging Silk Tassels & Pearl Ghungroos */}
        <g id="fluteTassels">
          {/* Tassel 1 */}
          <path d="M 16 68.5 Q 14.5 78 13.5 86" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="14" cy="76" r="1.6" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
          <path d="M 11 86 L 16 86 L 13.5 95 Z" fill="url(#tasselGradient)" />

          {/* Tassel 2 */}
          <path d="M 20 68.5 Q 21 78 22.5 88" stroke="#b45309" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="21.5" cy="78" r="1.6" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.5" />
          <path d="M 20 88 L 25 88 L 22.5 97 Z" fill="url(#tasselGradient)" />
        </g>
      </g>
    </svg>
  );
}
