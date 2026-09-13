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
      className={`inline-block drop-shadow-[0_4px_12px_rgba(185,138,47,0.4)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Krishna Flute with Curved Peacock Feather"
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

        {/* Flute golden glow */}
        <linearGradient id="fluteHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Feather outer bronze halo */}
        <radialGradient id="featherBronze" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#ca8a04" />
          <stop offset="65%" stopColor="#854d0e" />
          <stop offset="100%" stopColor="#451a03" />
        </radialGradient>

        {/* Peacock feather outer emerald ring */}
        <linearGradient id="peacockEmerald" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="40%" stopColor="#047857" />
          <stop offset="80%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>

        {/* Peacock feather vibrant turquoise ring with shimmer */}
        <linearGradient id="peacockTurquoise" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="35%" stopColor="#0d9488" />
          <stop offset="70%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#134e4a" />
        </linearGradient>

        {/* Peacock eye deep royal blue/indigo core */}
        <radialGradient id="peacockIndigo" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="30%" stopColor="#1d4ed8" />
          <stop offset="65%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#090524" />
        </radialGradient>

        {/* Tassel silk gradient */}
        <linearGradient id="tasselGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="60%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
      </defs>

      {/* ── REALISTIC CURVED PEACOCK FEATHER (MOR PANKH) ── */}
      <g id="curvedPeacockFeather">
        {/* Fine curved plumule barbs radiating along the stem */}
        <g stroke="#15803d" strokeWidth="0.7" opacity="0.8" strokeLinecap="round">
          {/* Left side sweeping wisps */}
          <path d="M 44 46 C 36 44 26 46 22 52" />
          <path d="M 42 40 C 32 38 23 40 18 45" />
          <path d="M 40 34 C 28 31 20 32 15 37" />
          <path d="M 38 28 C 25 24 17 24 12 28" />
          <path d="M 36 22 C 22 17 16 15 12 18" />
          <path d="M 34 16 C 22 11 18 8 15 10" />

          {/* Right side sweeping wisps */}
          <path d="M 46 45 C 56 43 64 47 68 53" />
          <path d="M 45 39 C 57 37 66 39 72 44" />
          <path d="M 43 33 C 58 30 68 31 74 35" />
          <path d="M 41 27 C 58 23 68 23 72 26" />
          <path d="M 39 21 C 56 16 64 14 66 17" />
          <path d="M 37 15 C 52 10 57 7 59 9" />
          <path d="M 34 9 C 44 4 48 2 49 4" />
        </g>

        {/* Golden outer aura wisps around top */}
        <g stroke="#ca8a04" strokeWidth="0.65" opacity="0.9" strokeLinecap="round">
          <path d="M 33 18 C 24 12 18 9 16 12" />
          <path d="M 31 14 C 23 8 19 4 19 7" />
          <path d="M 29 10 C 23 5 21 2 24 2" />
          <path d="M 31 6 C 28 2 30 0 34 1" />
          <path d="M 36 17 C 48 11 55 8 57 11" />
          <path d="M 38 12 C 48 7 53 3 53 6" />
        </g>

        {/* Curved Central Quill (Rachis) */}
        <path
          d="M 47 54 C 44 38 39 22 30 4"
          stroke="#78350f"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M 46.7 52 C 43.8 37 38.9 21.5 30.2 4.5"
          stroke="#fef08a"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* ── PEACOCK EYE (CURVED ASYMMETRICAL OCELLUS) ── */}
        {/* Layer 1: Bronze/Gold Outer Plume Contour */}
        <path
          d="M 30 6 C 21 8 18 16 20 23 C 22 29 28 33 37 35 C 46 33 53 28 54 21 C 55 14 49 7 39 5 C 34 4 32 5 30 6 Z"
          fill="url(#featherBronze)"
          opacity="0.92"
        />

        {/* Layer 2: Emerald Green curved lobe */}
        <path
          d="M 31 8 C 23 10 21 17 23 22.5 C 24.5 27 30 30.5 37 32 C 44 30.5 50 26.5 51 20.5 C 52 14.5 47 9 39 7.5 C 35 6.8 33 7.3 31 8 Z"
          fill="url(#peacockEmerald)"
        />

        {/* Layer 3: Vibrant Turquoise Inner Ring with distinct upper cleft/notch */}
        <path
          d="M 33 11 C 28 12.5 25 17 26.5 21 C 28 24.5 32 27 37 28 C 42 27 46 24 47 19.5 C 47.8 15 44 12 39 11 C 37 10.6 35.5 11.5 35 12 C 34.5 11.5 34 10.7 33 11 Z"
          fill="url(#peacockTurquoise)"
        />

        {/* Layer 4: Deep Royal Indigo / Sapphire Core Eye (Kidney/Heart curved shape) */}
        <path
          d="M 34.5 14 C 31 15 29 18 30 20.5 C 31 23 34 24.5 37 25 C 40 24.5 43 22.5 43.5 19.5 C 44 16.5 41.5 14.5 38.5 13.8 C 37.2 13.5 36.2 14.2 35.8 14.6 C 35.4 14.2 34.8 13.9 34.5 14 Z"
          fill="url(#peacockIndigo)"
        />

        {/* Specular Shimmer Arc & Reflection Dot */}
        <path
          d="M 32.5 17 C 33.5 16 35.5 15.5 37 15.8"
          stroke="#e0f2fe"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.9"
        />
        <circle cx="34" cy="18" r="1.3" fill="#ffffff" opacity="0.95" />
        <circle cx="39.5" cy="17.5" r="0.7" fill="#bae6fd" opacity="0.8" />
      </g>

      {/* ── BANSURI (SACRED GOLDEN FLUTE) ── */}
      {/* Tilted flute with enlarged proportions */}
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

        {/* Subtle upper light reflection tube */}
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
