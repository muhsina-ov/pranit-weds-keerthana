import Reveal from "@/components/Reveal";
import { wedding } from "@/config";

function Divider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="hairline-gold w-16" />
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#b98a2f]" fill="currentColor" aria-hidden>
        <path d="M12 2c1.5 3.2 4.5 4.9 8 5-3.5.1-6.5 1.8-8 5-1.5-3.2-4.5-4.9-8-5 3.5-.1 6.5-1.8 8-5Z" />
        <circle cx="12" cy="17" r="2.2" />
      </svg>
      <span className="hairline-gold w-16" />
    </div>
  );
}

export default function Invitation() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <img
        src="/assets/texture-bg.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      <div className="relative mx-auto max-w-md text-center">
        <Reveal>
          <p className="text-[13.5px] uppercase tracking-[0.45em] font-medium text-[#9a6b1f]">
            Wedding Invitation
          </p>
          <h2 className="font-script mt-2 text-5xl sm:text-6xl text-[#7b1e1e]">The Invitation</h2>
          <Divider />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[17px] sm:text-[18px] leading-relaxed tracking-wide text-[#5a4632]">
            {wedding.inviteLine1}
          </p>

          <p className="font-display mt-5 text-2xl sm:text-3xl leading-snug font-medium text-[#3d2b1f] tracking-wide">
            {wedding.invitingParents}
          </p>

          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed tracking-wide text-[#5a4632]">
            {wedding.inviteLine2}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex justify-center">
          <div className="hairline-gold w-36 opacity-80" />
        </Reveal>
      </div>
    </section>
  );
}
