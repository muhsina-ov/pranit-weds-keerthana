// ─────────────────────────────────────────────────────────────
// TEMPLATE CONTRACT — Kalyana Mandapam (South Indian, single event)
// Pranit Hemant weds Keerthanaa N
// ─────────────────────────────────────────────────────────────

export interface WeddingEvent {
  id: string;
  title: string;
  category: string;
  telugu?: string; // deprecated, kept for backwards compatibility
  dateLabel: string;
  timeLabel: string;
  startISO: string; // with +05:30 offset
  endISO: string;
  note?: string;
  icon: "flower" | "hands" | "fire" | "sparkles";
}

export const wedding = {
  bride: "Keerthanaa N",
  groom: "Pranit Hemant",
  brideFirst: "Keerthanaa",
  groomFirst: "Pranit",
  hashtag: "#PranitWedsKeerthana",
  blessing: "॥ Jai Shri Krishna ॥",
  occasionEnglish: "Auspicious Beginning",
  occasionTelugu: "Auspicious Beginning",
  occasionLabel: "Wedding Muhurtham",

  weekdayLabel: "Sunday",
  dateLabel: "November 15th, 2026",
  muhurthamTimeLabel: "Muhurtham at 11:48 AM",
  muhurthamISO: "2026-11-15T11:48:00+05:30",

  venueName: "TMA Pai Convention Centre",
  venueLine1: "MG Road, Kodailbail",
  venueLine2: "Mangalore, Karnataka – 575003",
  venueAddress: "MG Road, Kodailbail, Mangaluru, Karnataka 575003",
  mapsQuery: "TMA Pai Convention Centre MG Road Kodailbail Mangaluru Karnataka 575003",
  mapsDirectUrl: "https://maps.app.goo.gl/fQHmSSZPkq2doa6o9?g_st=ic",
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=74.8201%2C12.8626%2C74.8601%2C12.8866&layer=mapnik&marker=12.8746%2C74.8401",

  invitingParents: "Kantha & Nagamani",
  brideFamily: "Nagamani & family",
  groomFamily: "Hemant & family",
  inviteLine1: "With the divine blessings of Jai Shri Krishna and our elders,",
  inviteLine2:
    "joyfully invite you and your family to the wedding muhurtham of our beloved daughter. Your presence is the greatest gift — please join us, bless the couple, and celebrate this beautiful beginning with us.",
  blessingPresenceHeader: "Bless us with your presence",
  blessingPresenceMessage:
    "As we begin this beautiful journey together, we seek your love, blessings, and good wishes.",
} as const;

// One event only — the Wedding Muhurtham for the day.
export const events: WeddingEvent[] = [
  {
    id: "muhurtham",
    title: "Wedding Muhurtham",
    category: "Sacred Ceremony",
    telugu: "Sacred Ceremony",
    dateLabel: "Sunday, 15th November 2026",
    timeLabel: "Muhurtham at 11:48 AM",
    startISO: "2026-11-15T11:48:00+05:30",
    endISO: "2026-11-15T14:00:00+05:30",
    note: "Guests to gather at the venue by 9:00 AM.",
    icon: "fire",
  },
];

export const mainEvent: WeddingEvent = events[0];