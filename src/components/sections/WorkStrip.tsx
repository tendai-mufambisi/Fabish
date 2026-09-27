import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { portfolioPhotos } from "@/lib/site-data";

// A moving strip of finished work straight under the hero, so visitors see real
// projects within the first scroll.
export function WorkStrip() {
  const loop = [...portfolioPhotos, ...portfolioPhotos];

  return (
    <section
      aria-label="Recent work"
      className="relative overflow-hidden bg-brand-ink py-10 lg:py-14"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-4 px-5 lg:px-8">
        <div>
          <span className="eyebrow text-accent-gold-soft">
            <span className="h-px w-8 bg-current" aria-hidden />
            Recent Work
          </span>
          <p className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            Real homes we have finished across Zimbabwe.
          </p>
        </div>
        <Link
          to="/"
          hash="projects"
          className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-0.5"
        >
          View Our Portfolio
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-8 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {loop.map((photo, i) => (
            <Link
              key={i}
              to="/"
              hash="projects"
              aria-hidden={i >= portfolioPhotos.length}
              tabIndex={i >= portfolioPhotos.length ? -1 : 0}
              className="group block shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={1280}
                height={960}
                className="h-44 w-60 object-cover transition-transform duration-700 group-hover:scale-110 sm:h-56 sm:w-80"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
