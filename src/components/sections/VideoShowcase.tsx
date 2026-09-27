import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play, Video } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

/*
 * Real phone footage from Fabish sites, shown as vertical "reel" cards.
 * Files live in public/videos (served as-is, never bundled). Nothing downloads
 * until a visitor presses play: preload="none" and a small poster frame.
 */
const reels = [
  {
    src: "/videos/fabish-site-new-build.mp4",
    poster: "/videos/fabish-site-new-build.jpg",
    title: "New build walkthrough",
    detail: "Plastered and skimmed walls, inside and out",
    duration: "1:15",
  },
  {
    src: "/videos/fabish-site-visit.mp4",
    poster: "/videos/fabish-site-visit.jpg",
    title: "On-site visit",
    detail: "Our team walking a property on the job",
    duration: "0:21",
  },
];

function ReelCard({ reel }: { reel: (typeof reels)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-lift">
      <video
        ref={videoRef}
        data-reel
        src={reel.src}
        poster={reel.poster}
        preload="none"
        playsInline
        controls={playing}
        aria-label={reel.title}
        onPlay={(e) => {
          // Only one reel plays at a time.
          document.querySelectorAll<HTMLVideoElement>("video[data-reel]").forEach((v) => {
            if (v !== e.currentTarget) v.pause();
          });
          setPlaying(true);
        }}
        onEnded={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />

      {!playing && (
        <button
          type="button"
          onClick={() => void videoRef.current?.play()}
          aria-label={`Play video: ${reel.title}`}
          className="absolute inset-0 flex flex-col justify-between p-4 text-left"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-ink/95 via-brand-ink/10 to-brand-ink/30 transition-opacity duration-500 group-hover:opacity-80"
          />
          <span className="relative flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-white uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" aria-hidden />
              Real site
            </span>
            <span className="rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-bold text-white">
              {reel.duration}
            </span>
          </span>

          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-gradient text-white shadow-accent transition-transform duration-500 group-hover:scale-110">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-accent-gold"
              style={{ animation: "pulse-ring 2.4s ease-out infinite" }}
            />
            <Play className="relative ml-0.5 h-6 w-6 fill-current" />
          </span>

          <span className="relative">
            <span className="block font-display text-lg leading-tight font-semibold text-white">
              {reel.title}
            </span>
            <span className="mt-1 block text-xs leading-relaxed text-white/70">{reel.detail}</span>
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section id="videos" className="relative overflow-hidden bg-brand-ink py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand/40 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-accent-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.85fr_1.6fr] lg:px-8">
        <div>
          <Reveal>
            <span className="eyebrow text-accent-gold-soft">
              <span className="h-px w-8 bg-current" aria-hidden />
              On Site
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
              Watch us at work
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 leading-relaxed text-white/70">
              No studio, no stock footage. These are unedited phone videos filmed by our team on
              real Fabish jobs, so you can see the standard of our work and the people behind it
              before you hire us.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-7 space-y-3 text-sm text-white/75">
              {[
                "Filmed on real Fabish sites",
                "Walkthroughs by the team doing the work",
                "See the finish up close, not just in photos",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <Video className="h-4 w-4 shrink-0 text-accent-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260}>
            <Link
              to="/"
              hash="quote"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-4 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
            >
              Book a Free Site Visit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Phones: a swipeable row. Desktop: three staggered columns. */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {reels.map((reel, i) => (
            <Reveal
              key={reel.src}
              delay={i * 120}
              className={`w-[68%] shrink-0 snap-center sm:w-[42%] lg:w-auto lg:max-w-[20rem] ${i === 1 ? "lg:mt-20" : ""}`}
            >
              <ReelCard reel={reel} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
