import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Images } from "lucide-react";
import lounge from "@/assets/fabish-lounge-ceiling.jpg";
import bathroom from "@/assets/fabish-bathroom-tiling.jpg";
import rhinoboard from "@/assets/fabish-rhinoboard-ceiling.jpg";
import brickCrew from "@/assets/fabish-brick-crew.jpg";
import skimming from "@/assets/fabish-wall-skimming.jpg";
import nortonPainter from "@/assets/fabish-norton-painting-undercoat.jpg";
import { Counter, Reveal } from "@/components/site/Reveal";
import { counters, trustBadges } from "@/lib/site-data";

// Finished rooms alternate with the crews doing the work. The crew photos are
// portrait, so `position` keeps the people in frame on wide screens.
const slides = [
  {
    src: lounge,
    alt: "A lounge finished by Fabish with a circular bulkhead ceiling, chandelier and feature wall",
    position: "50% 50%",
  },
  { src: brickCrew, alt: "Fabish builders laying block walls on a new build", position: "50% 45%" },
  {
    src: bathroom,
    alt: "A black and white master bathroom tiled by Fabish House Finishings",
    position: "50% 50%",
  },
  { src: skimming, alt: "Two Fabish plasterers skimming an interior wall", position: "50% 50%" },
  {
    src: rhinoboard,
    alt: "A living room with a Fabish rhinoboard ceiling, cornices and chandelier",
    position: "50% 50%",
  },
  {
    src: nortonPainter,
    alt: "A Fabish painter on a ladder undercoating a house exterior in Norton",
    position: "50% 30%",
  },
];

const SLIDE_MS = 5000;

export function Hero() {
  const layerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Parallax on desktop only: the transform is written straight to the layer
  // inside requestAnimationFrame, so scrolling never re-renders the hero.
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const desktop = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = desktop.matches ? Math.min(window.scrollY, 900) * 0.2 : 0;
      layer.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame && window.scrollY < 1200) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    desktop.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div ref={layerRef} className="absolute inset-0 lg:will-change-transform">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            style={{ objectPosition: slide.position }}
            className={`absolute inset-0 h-[115vh] w-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
              i === active ? "kenburns-slide opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* Mobile stacks the copy full-width, so it needs a flat scrim; from lg the
          directional gradient takes over and keeps the right of the photo clear. */}
      <div className="absolute inset-0 bg-brand-ink/60 lg:bg-brand-ink/15" />
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{ background: "var(--gradient-overlay)" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-24 lg:px-8">
        <Reveal>
          <span className="eyebrow text-accent-gold-soft">
            <span className="h-px w-8 bg-current" aria-hidden />
            Premium Home Finishing in Zimbabwe
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl">
            Transforming Houses
            <span className="block text-accent-gold-soft">Into Masterpieces.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Slick, professional home finishes you'll love. From plastering and painting to tiling,
            ceilings and paving, Fabish House Finishings perfects every detail so your home looks
            beautiful and stands the test of time. Trusted by homeowners, property developers and
            contractors across Zimbabwe.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/"
              hash="quote"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-4 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/"
              hash="projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-colors duration-300 hover:bg-white hover:text-brand-ink"
            >
              <Images className="h-4 w-4" />
              View Our Projects
            </Link>
          </div>
        </Reveal>

        <Reveal delay={380}>
          <p className="mt-12 font-display text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            <span className="text-gradient-brand hidden" aria-hidden />
            <span className="bg-gradient-to-r from-accent-gold-soft to-white bg-clip-text text-transparent">
              Quality Craftsmanship. Modern Design.
            </span>
          </p>
        </Reveal>

        <Reveal delay={440}>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-semibold text-white/85"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-gold">
                  <Check className="h-3 w-3 text-white" />
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={520}>
          <div className="glass mt-14 grid grid-cols-2 gap-y-8 rounded-3xl px-6 py-8 lg:grid-cols-4">
            {counters.map((c) => (
              <div
                key={c.label}
                className="text-center lg:border-r lg:border-white/10 lg:last:border-none"
              >
                <p className="font-display text-3xl font-semibold text-white sm:text-5xl">
                  <Counter value={c.value} suffix={c.suffix} />
                </p>
                <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-white/60 uppercase">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Link
        to="/"
        hash="about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/60 transition hover:text-white lg:block"
      >
        <ChevronDown className="floaty h-7 w-7" />
      </Link>
    </section>
  );
}
