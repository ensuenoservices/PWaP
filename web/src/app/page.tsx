import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { MediaGallery } from "@/components/MediaGallery";
import { previousEvents } from "@/content/events";
import {
  homeDonateStripContent,
  homeGalleryContent,
  homeHeroContent,
  homeMissionCards,
  homePreviousEventsContent,
} from "@/content/siteContent";

export default function Home() {
  const previousPreview = previousEvents.slice(0, 3);
  const ctaClassByVariant = {
    primary:
      "accent-bg inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium text-white hover:brightness-110",
    accent:
      "accent-bg inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium text-white hover:brightness-110",
    outline:
      "inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-sm font-medium text-white hover:bg-white/10",
  };

  return (
    <div className="min-h-full bg-[#4c4c4c] font-sans text-zinc-50">
      <header className="mx-auto w-full max-w-6xl px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            PWaP Productions
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/events"
              className="text-zinc-200 hover:text-[var(--accent)]"
            >
              Events
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section
          className="relative overflow-hidden rounded-3xl border border-black/10 shadow-sm dark:border-white/15"
          style={{
            backgroundImage: `url(${homeHeroContent.backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative p-10 text-white sm:p-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-200">
              {homeHeroContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {homeHeroContent.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-100">
              {homeHeroContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {homeHeroContent.ctas.map((cta) => (
                <Link
                  key={`${cta.href}-${cta.label}`}
                  href={cta.href}
                  className={
                    ctaClassByVariant[cta.variant ?? "primary"] ??
                    ctaClassByVariant.primary
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {homeMissionCards.map((card) => (
            <article
              key={card.heading}
              className="rounded-2xl border border-white/20 bg-[#4c4c4c] p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-tight">
                {card.heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-100">
                {card.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                {homePreviousEventsContent.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
                {homePreviousEventsContent.subheading}
              </p>
            </div>
            <Link
              href={homePreviousEventsContent.viewAllHref}
              className="hidden text-sm font-medium text-zinc-100 hover:text-[var(--accent)] sm:inline"
            >
              {homePreviousEventsContent.viewAllLabel}
            </Link>
          </div>

          <div
            id="previous-events"
            className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {previousPreview.map((event) => (
              <EventCard key={event.id} event={event} variant="previous" />
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link
              href={homePreviousEventsContent.viewAllHref}
              className="text-sm font-medium text-zinc-100 hover:text-[var(--accent)]"
            >
              {homePreviousEventsContent.viewAllLabel}
            </Link>
          </div>
        </section>

        <MediaGallery
          events={previousEvents}
          heading={homeGalleryContent.heading}
          subheading={homeGalleryContent.subheading}
          maxItems={homeGalleryContent.maxItems}
        />

        <section
          id="donate"
          className="mt-14 rounded-3xl border border-white/20 bg-[#4c4c4c] p-8 shadow-sm sm:p-10"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            {homeDonateStripContent.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-100">
            {homeDonateStripContent.description}
          </p>
          <div className="mt-6">
            <Link
              href={homeDonateStripContent.ctaHref}
              className="accent-bg inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-white hover:brightness-110"
            >
              {homeDonateStripContent.ctaLabel}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
