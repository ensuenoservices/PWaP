import Image from "next/image";
import Link from "next/link";
import type { EventRecord } from "@/content/events";

function formatUsdFromCents(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function EventCard({
  event,
  variant = "previous",
}: {
  event: EventRecord;
  variant?: "previous" | "upcoming";
}) {
  const hasDonation =
    variant === "previous" && typeof event.donationCents === "number";

  return (
    <div className="rounded-2xl border border-white/20 bg-[#4c4c4c] p-6 shadow-sm">
      {event.photoUrl ? (
        <div className="mb-4 overflow-hidden rounded-xl">
          <Image
            src={event.photoUrl}
            alt={`${event.title} event visual`}
            className="h-52 w-full object-cover"
            width={1200}
            height={700}
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            {event.title}
          </h3>
          <p className="text-sm font-medium text-zinc-200">
            {event.dateLabel}
          </p>
        </div>

        {event.locationLabel ? (
          <p className="text-sm text-zinc-200">
            {event.locationLabel}
          </p>
        ) : null}

        {event.summary ? (
          <p className="text-sm leading-6 text-zinc-100">
            {event.summary}
          </p>
        ) : null}

        {event.beneficiary ? (
          <div className="mt-2 text-sm text-zinc-100">
            <span className="font-medium">Beneficiary:</span>{" "}
            {event.beneficiary.url ? (
              <Link
                href={event.beneficiary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link underline underline-offset-4"
              >
                {event.beneficiary.name}
              </Link>
            ) : (
              <span>{event.beneficiary.name}</span>
            )}
          </div>
        ) : null}

        {hasDonation ? (
          <div className="mt-1 text-sm text-zinc-100">
            <span className="font-medium">Donated:</span>{" "}
            {formatUsdFromCents(event.donationCents ?? 0)}
          </div>
        ) : null}

        {(event.ticketUrl || event.recapUrl || event.videoUrl) && (
          <div className="mt-4 flex flex-wrap gap-3">
            {event.ticketUrl ? (
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-bg inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium text-white hover:brightness-110"
              >
                Get tickets
              </Link>
            ) : null}
            {event.recapUrl ? (
              <Link
                href={event.recapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-border inline-flex h-10 items-center justify-center rounded-full border bg-[#4c4c4c] px-5 text-sm font-medium text-zinc-50 hover:bg-[#5a5a5a]"
              >
                View recap
              </Link>
            ) : null}
            {event.videoUrl ? (
              <Link
                href={event.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="accent-border inline-flex h-10 items-center justify-center rounded-full border bg-[#4c4c4c] px-5 text-sm font-medium text-zinc-50 hover:bg-[#5a5a5a]"
              >
                {event.videoLabel ?? "Watch video"}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

