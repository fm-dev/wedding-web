interface CalendarDay {
    day: string;
    date: string;
    selected?: boolean;
    muted?: boolean;
}

interface WeddingEventDetail {
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
}

interface WeddingEventProps {
    month: string;
    calendarDays: CalendarDay[];
    events: WeddingEventDetail[];
    mapUrl?: string;
    mapEmbedUrl?: string;
}

export default function WeddingEvent({
    month,
    calendarDays,
    events,
    mapUrl,
    mapEmbedUrl,
}: WeddingEventProps) {
    return (
        <article className=" p-3 relative overflow-hidden  bg-[#fffaf6] ">

            {/* Decorative background */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#5b0000]/10" />

            <div className="pointer-events-none absolute -right-9 -top-9 h-24 w-24 rounded-full border border-[#5b0000]/10" />

            {/* Month */}
            <div className="relative text-center">
                <div className="mb-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-[#5b0000]/30" />

                    <p className="text-xs tracking-[0.35em] text-[#5b0000]/70">
                        SAVE THE DATE
                    </p>

                    <span className="h-px w-10 bg-[#5b0000]/30" />
                </div>

                <h2
                    className="text-3xl tracking-[0.15em] text-[#5b0000]"
                    style={{ fontFamily: "TheSeasonsRegular" }}
                >
                    {month}
                </h2>
            </div>

            {/* Calendar */}
            <div className="relative mx-auto mt-7 w-full max-w-[420px] text-[#760000]">
                {/* Month */}
                <div className="mb-5 text-center">
                    <h2
                        className="text-lg tracking-[0.28em]"
                        style={{ fontFamily: "TheSeasonsRegular" }}
                    >
                        {month}
                    </h2>
                </div>

                {/* Calendar table */}
                <div className="relative border-y border-[#1f2233]">
                    {/* Day names */}
                    <div className="grid grid-cols-3 border-b border-[#1f2233]">
                        {calendarDays.map((item, index) => (
                            <div
                                key={`${item.day}-${item.date}-day`}
                                className={`flex h-10 items-center justify-center px-1 text-[11px] tracking-[0.22em] sm:text-xs ${index !== calendarDays.length - 1
                                        ? "border-r border-[#1f2233]"
                                        : ""
                                    }`}
                            >
                                {item.day}
                            </div>
                        ))}
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-3">
                        {calendarDays.map((item, index) => (
                            <div
                                key={`${item.day}-${item.date}-date`}
                                className={`relative flex h-[124px] items-center justify-center ${index !== calendarDays.length - 1
                                        ? "border-r border-[#1f2233]"
                                        : ""
                                    }`}
                            >
                                {item.selected && (
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[138px] w-[138px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#cf3339]"
                                    />
                                )}

                                <span
                                    className={`relative z-10 text-[54px] leading-none sm:text-[60px] ${item.muted
                                            ? "text-[#760000]/30"
                                            : "text-[#760000]"
                                        }`}
                                    style={{
                                        fontFamily: "TheSeasonsRegular",
                                    }}
                                >
                                    {item.date}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Event details */}
            <div className="relative mt-8">
                {events.map((event, index) => (
                    <div key={`${event.title}-${event.date}-${event.time}`}>
                        {index > 0 && (
                            <div className="my-7 flex items-center justify-center gap-3">
                                <span className="h-px flex-1 bg-[#5b0000]/15" />

                                <span className="text-lg text-[#5b0000]/45">
                                    ✦
                                </span>

                                <span className="h-px flex-1 bg-[#5b0000]/15" />
                            </div>
                        )}

                        <div className="text-center">
                            <p className="mb-2 text-[10px] tracking-[0.3em] text-[#5b0000]/55">
                                THE WEDDING EVENT
                            </p>

                            <h3
                                className="text-3xl text-[#5b0000] sm:text-4xl"
                                style={{ fontFamily: "TheSeasonsRegular" }}
                            >
                                {event.title}
                            </h3>

                            <div className="mt-4 space-y-1.5">
                                <p className="text-base text-[#5b0000]/85">
                                    {event.date}
                                </p>

                                <p className="text-base font-medium text-[#5b0000]">
                                    {event.time}
                                </p>
                            </div>

                            <div className="mx-auto mt-5 max-w-xs rounded-2xl bg-[#5b0000]/[0.045] px-5 py-4">
                                <p className="text-base font-semibold text-[#5b0000]">
                                    {event.venue}
                                </p>

                                <p className="mt-2 text-sm leading-6 text-[#5b0000]/65">
                                    {event.address}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Location button */}
            {mapUrl && (
                <div className="relative mt-8 text-center">
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-w-48 items-center justify-center rounded-full bg-[#5b0000] px-7 py-3.5 text-xs tracking-[0.22em] text-white shadow-[0_10px_25px_rgba(91,0,0,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#750000]"
                    >
                        SEE LOCATION
                    </a>
                </div>
            )}

            {/* Optional map */}
            {/* {mapEmbedUrl && (
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#5b0000]/10">
                    <iframe
                        src={mapEmbedUrl}
                        width="100%"
                        height="280"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Lokasi acara ${month}`}
                        className="block grayscale-[20%]"
                    />
                </div>
            )} */}
        </article>
    );
}