import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { MediaGallery } from "@/components/MediaGallery";
import { previousEvents, upcomingEvents } from "@/content/events";
import { eventsPageContent } from "@/content/siteContent";

export default function EventsPage() {
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
        <section className="rounded-3xl border border-white/20 bg-[#4c4c4c] p-10 shadow-sm sm:p-14">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {eventsPageContent.hero.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-100">
            {eventsPageContent.hero.description}
          </p>
        </section>

        <section className="mt-14" id="upcoming">
          <h2 className="text-2xl font-semibold tracking-tight">
            {eventsPageContent.upcoming.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
            {eventsPageContent.upcoming.subheading}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="upcoming" />
            ))}
          </div>
        </section>

        <section className="mt-14" id="previous">
          <h2 className="text-2xl font-semibold tracking-tight">
            {eventsPageContent.previous.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
            {eventsPageContent.previous.subheading}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {previousEvents.map((event) => (
              <EventCard key={event.id} event={event} variant="previous" />
            ))}
          </div>
        </section>

        <MediaGallery
          events={previousEvents}
          heading={eventsPageContent.gallery.heading}
          subheading={eventsPageContent.gallery.subheading}
          maxItems={eventsPageContent.gallery.maxItems}
        />
      </main>
    </div>
  );
}

