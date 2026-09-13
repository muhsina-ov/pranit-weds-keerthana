import { wedding } from "@/config";

/**
 * Signature footer — "living wedding card".
 * Texture + marquee + giant names scroll UP behind a static
 * transparent mandap PNG pinned to the viewport bottom,
 * with the couple standing in front of it (like the card).
 */
export default function Footer() {
  return (
    <footer className="relative min-h-[175svh]">
      {/* ── Layer 0: texture behind everything ── */}
      <div className="absolute inset-0">
        <img
          src="/assets/texture-bg.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7efdb] via-transparent to-[#e8d5ac]/60" />
      </div>

      {/* ── Layer 1: text that scrolls behind the static mandap ── */}
      <div className="relative z-10 flex min-h-[175svh] flex-col">
        {/* marquee strip */}
        <div className="mt-10 overflow-hidden border-y border-[#b98a2f]/40 bg-[#fdf8ea]/75 py-3.5 backdrop-blur-[2px]">
          <div className="flex w-max whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
            {[0, 1].map((n) => (
              <span
                key={n}
                className="font-display px-5 text-[14px] uppercase tracking-[0.4em] font-medium text-[#9a6b1f]"
              >
                {Array(5).fill(`${wedding.hashtag} ✦ ${wedding.secondaryHashtag} ✦ ${wedding.dateLabel} ✦ `).join("")}
              </span>
            ))}
          </div>
        </div>

        {/* giant outlined names — stacked vertically so it never gets cut off horizontally */}
        <div className="pointer-events-none mt-12 flex flex-col items-center select-none justify-center px-4 text-center">
          <span className="text-outline-gold font-display text-[11.5vw] sm:text-7xl font-semibold uppercase leading-none tracking-wider opacity-75">
            {wedding.brideFirst}
          </span>
          <span className="text-[#b98a2f] text-3xl sm:text-4xl my-2 opacity-80">
            ♥
          </span>
          <span className="text-outline-gold font-display text-[11.5vw] sm:text-7xl font-semibold uppercase leading-none tracking-wider opacity-75">
            {wedding.groomFirst}
          </span>
        </div>

        {/* closing message — placed with ample safe clearance above the mandap to avoid any overlap */}
        <div className="mx-auto mb-[56svh] mt-auto flex max-w-sm flex-col items-center gap-3 px-6 text-center">
          <p className="text-[15px] sm:text-[16px] tracking-[0.22em] font-medium text-[#8c2323]">
            {wedding.blessing}
          </p>
          <p className="font-script text-[2.8rem] sm:text-5xl leading-[1.15] text-[#7b1e1e]">
            We can't wait to celebrate with you
          </p>
          <div className="hairline-gold mt-1 w-32" />

          {/* Families card — clean, structured, and immune to text overlap */}
          <div className="my-2 flex w-full flex-col items-center gap-1.5 rounded-xl border border-[#b98a2f]/30 bg-[#fdf8ea]/85 px-6 py-4 backdrop-blur-sm shadow-[0_4px_16px_rgba(185,138,47,0.08)]">
            <span className="text-[10.5px] uppercase tracking-[0.35em] font-semibold text-[#9a6b1f]">
              With Love & Blessings
            </span>
            <p className="font-display text-[14px] sm:text-[15px] uppercase tracking-[0.22em] font-semibold text-[#3d2b1f]">
              {wedding.brideFamily}
            </p>
            <span className="text-[11px] text-[#b98a2f]">✦</span>
            <p className="font-display text-[14px] sm:text-[15px] uppercase tracking-[0.22em] font-semibold text-[#3d2b1f]">
              {wedding.groomFamily}
            </p>
          </div>

          <p className="mt-1 text-[12px] sm:text-[13px] tracking-[0.26em] font-semibold text-[#9a6b1f]">
            {wedding.hashtag} &nbsp;✦&nbsp; {wedding.secondaryHashtag}
          </p>
        </div>
      </div>

      {/* ── Layer 2: static mandap overlay, pinned to viewport bottom ── */}
      <div className="pointer-events-none sticky bottom-0 z-20 -mt-[100svh] flex h-[100svh] items-end justify-center">
        {/* soft ground shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#e0c58f]/70 to-transparent" />

        {/* mandap — static transparent PNG */}
        <img
          src="https://media.invitestory.in/kalyana-mandapam/assets/mandap-footer.webp"
          alt=""
          className="absolute bottom-0 left-1/2 w-[128%] max-w-none -translate-x-1/2 select-none object-contain object-bottom sm:w-[105%]"
        />

        {/* couple standing in front of the mandap */}
        <img
          src="/assets/couple.webp"
          alt={`${wedding.bride} and ${wedding.groom}`}
          className="anim-float relative bottom-0 z-10 w-[68%] max-w-[330px] select-none object-contain drop-shadow-[0_12px_24px_rgba(61,43,31,0.25)]"
        />
      </div>

      {/* ── Layer 3: credit line above everything ── */}
      <p className="absolute bottom-4 left-0 right-0 z-30 text-center text-[10px] uppercase tracking-[0.3em] text-[#6b543a]/75">
        Crafted with ♥ · InviteStory
      </p>
      <a
        href="https://www.instagram.com/invitestory.in/"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-1.5 left-0 right-0 z-30 text-center text-[10px] uppercase tracking-[0.3em] text-[#9a6b1f]/85 transition-colors hover:text-[#9a6b1f]"
      >
        @invitestory.in on Instagram
      </a>
    </footer>
  );
}
