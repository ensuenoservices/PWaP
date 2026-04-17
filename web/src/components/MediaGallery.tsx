import Image from "next/image";
import Link from "next/link";
import type { EventRecord } from "@/content/events";
import { homeGalleryContent } from "@/content/siteContent";

export function MediaGallery({
  events,
  heading = homeGalleryContent.heading,
  subheading = homeGalleryContent.subheading,
  maxItems = homeGalleryContent.maxItems,
}: {
  events: EventRecord[];
  heading?: string;
  subheading?: string;
  maxItems?: number;
}) {
  const mediaEvents = events
    .filter((event) => event.photoUrl || event.videoUrl)
    .slice(0, maxItems);

  if (!mediaEvents.length) {
    return (
      <section className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
              {subheading}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-200">
          {homeGalleryContent.emptyMessage}
        </p>
      </section>
    );
  }

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-200">
            {subheading}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {mediaEvents.map((event) => (
          <article
            key={`${event.id}-media`}
            className="overflow-hidden rounded-2xl border border-white/20 bg-[#4c4c4c] shadow-sm"
          >
            {event.photoUrl ? (
              <Image
                src={event.photoUrl}
                alt={`${event.title} media`}
                className="h-52 w-full object-cover"
                width={1200}
                height={700}
              />
            ) : (
              <div className="h-52 w-full bg-[#4c4c4c]" />
            )}
            <div className="p-4">
              <h3 className="text-base font-semibold tracking-tight">{event.title}</h3>
              <p className="mt-1 text-sm text-zinc-200">
                {event.dateLabel}
              </p>
              {event.videoUrl ? (
                <Link
                  href={event.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link mt-3 inline-flex text-sm font-medium underline underline-offset-4"
                >
                  {event.videoLabel ?? "Watch video"}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

