export type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "accent" | "outline";
};

export const homeHeroContent = {
  eyebrow: "Party with a Purpose • Denver, Colorado",
  title: "Intentional productions that make space for community—and give back locally.",
  description:
    "PWaP Productions curates events with DJs, vendors, movement, and more—designed with intention. A portion of proceeds supports a rotating Denver-area nonprofit partner for each production.",
  backgroundImageUrl:
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2200&q=80",
  ctas: [
    { label: "Upcoming events", href: "/events", variant: "primary" },
    { label: "Donate", href: "#donate", variant: "accent" },
    { label: "Past impact", href: "#previous-events", variant: "outline" },
  ] as HeroCta[],
};

export const homeGalleryContent = {
  heading: "Gallery",
  subheading: "Photos and videos from previous PWaP productions.",
  emptyMessage: "Add photoUrl or videoUrl to previous events to populate this section.",
  maxItems: 6,
};

export const homeMissionCards = [
  {
    heading: "Why PWaP is different",
    description:
      "We are intentional about curation, energy, and community. Each event is built to be more than a party: it is a shared experience with a purpose and a measurable local impact.",
  },
  {
    heading: "How donations work",
    description:
      "A portion of proceeds from every production goes to a featured Denver-area nonprofit. On each past event, we publish the beneficiary and the donated amount.",
  },
];

export const homePreviousEventsContent = {
  heading: "Previous events",
  subheading:
    "Past productions, who we supported, and what we were able to donate.",
  viewAllLabel: "View all →",
  viewAllHref: "/events#previous",
};

export const homeDonateStripContent = {
  heading: "Support the mission",
  description:
    "Help us keep intentional partying alive in Denver while supporting local nonprofits. Donation and ticket links are listed on each event.",
  ctaLabel: "View event impact",
  ctaHref: "/events#previous",
};

export const eventsPageContent = {
  hero: {
    heading: "Events",
    description:
      "Productions with intention—music, vendors, movement, and community. Each event supports a Denver-area nonprofit partner.",
  },
  upcoming: {
    heading: "Upcoming events",
    subheading: "What’s next—ticket links live here when announced.",
  },
  previous: {
    heading: "Previous events",
    subheading:
      "Past productions, their beneficiary nonprofit partner, and what we donated.",
  },
  gallery: {
    heading: "Event media",
    subheading: "Photos and videos from recent PWaP productions.",
    maxItems: 12,
  },
};

