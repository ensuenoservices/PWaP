export type Beneficiary = {
  name: string;
  url?: string;
};

export type EventRecord = {
  id: string;
  title: string;
  dateLabel: string;
  locationLabel?: string;
  summary?: string;
  donationCents?: number;
  beneficiary?: Beneficiary;
  ticketUrl?: string;
  recapUrl?: string;
  photoUrl?: string;
  videoUrl?: string;
  videoLabel?: string;
};

export const previousEvents: EventRecord[] = [
  {
    id: "abcdefuckice-2026-04-04",
    title: "ABCDEFUCKICE",
    dateLabel: "April 4, 2026",
    locationLabel: "Town Hall Collaborative, Denver, CO",
    summary:
      "Community-centered production supporting immigrant justice in Colorado.",
    donationCents: 54000,
    photoUrl:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoLabel: "Event recap",
    beneficiary: {
      name: "Rocky Mountain Immigrant Advocacy Network (RMIAN)",
      url: "https://www.rmian.org/",
    },
  },
];

export const upcomingEvents: EventRecord[] = [
  {
    id: "example-sunday-funday",
    title: "Sunday Funday (Drinks + Vendors)",
    dateLabel: "TBD",
    locationLabel: "Denver, CO",
    summary: "Daytime hang with drinks, vendors, and music.",
    photoUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
];

