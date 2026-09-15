import { Flower2, HandHeart, Flame, Sparkles, CalendarPlus, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { events, type WeddingEvent } from "@/config";
import { googleCalendarUrl, downloadIcs } from "@/lib/calendar";

const icons = {
  flower: Flower2,
  hands: HandHeart,
  fire: Flame,
  sparkles: Sparkles,
} as const;

function EventCard({ ev, index }: { ev: WeddingEvent; index: number }) {
  const Icon = icons[ev.icon];
  const highlight = ev.id === "muhurtham";
  return (
    <Reveal delay={index * 0.08}>
      <div
        className={`card-frame relative overflow-hidden rounded-2xl px-6 py-7 ${
          highlight ? "ring-1 ring-[#8c2323]/40" : ""
        }`}
      >
        {highlight && (
          <span className="absolute right-0 top-0 rounded-bl-xl bg-[#8c2323] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f3e3c3]">
            Main Ceremony
          </span>
        )}
        <div className="flex items-start gap-4">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#8c2323] to-[#6d1717] text-[#f3e3c3] shadow-md p-3">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1 text-left">
            <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.25em] font-medium text-[#9a6b1f]">
              {ev.category}
            </p>
            <h3 className="font-display text-2xl text-[#3d2b1f] font-semibold mt-0.5">{ev.title}</h3>
            <p className="mt-2 text-[15px] font-semibold text-[#8c2323]">{ev.dateLabel}</p>
            <p className="text-[14px] font-medium tracking-wide text-[#6b543a]">{ev.timeLabel}</p>
            {ev.note && (
              <div className="mt-3 rounded-lg bg-[#b98a2f]/10 px-3 py-2 border-l-2 border-[#b98a2f]">
                <p className="text-[14px] font-medium leading-relaxed text-[#5a4632]">
                  {ev.note}
                </p>
              </div>
            )}
          </div>
        </div>

        {ev.id !== "reception-lunch" && (
          <div className="mt-6 flex gap-3">
            <a
              href={googleCalendarUrl(ev)}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#b98a2f]/60 bg-[#fdf8ea]/80 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9a6b1f] shadow-sm transition-transform active:scale-95 hover:bg-[#fdf8ea]"
            >
              <CalendarPlus className="h-4 w-4" />
              Google
            </a>
            <button
              onClick={() => downloadIcs(ev)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-[#b98a2f]/60 bg-[#fdf8ea]/80 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#9a6b1f] shadow-sm transition-transform active:scale-95 hover:bg-[#fdf8ea]"
            >
              <Download className="h-4 w-4" />
              Apple / ICS
            </button>
          </div>
        )}
      </div>
    </Reveal>
  );
}

export default function Events() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7efdb] via-[#f1e2c2] to-[#f7efdb] px-6 py-20">
      <div className="relative mx-auto max-w-md">
        <Reveal className="text-center">
          <p className="text-[13.5px] uppercase tracking-[0.45em] font-medium text-[#9a6b1f]">
            Ceremonies
          </p>
          <h2 className="font-script mt-2 text-5xl sm:text-6xl text-[#7b1e1e]">The Celebrations</h2>
          <div className="hairline-gold mx-auto mt-5 w-32" />
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {events.map((ev, i) => (
            <EventCard key={ev.id} ev={ev} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
