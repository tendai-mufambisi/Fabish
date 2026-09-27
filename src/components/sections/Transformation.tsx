import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Volume2, VolumeX } from "lucide-react";
import undercoat from "@/assets/fabish-norton-painting-undercoat.jpg";
import finishing from "@/assets/fabish-norton-painting-finishing.jpg";
import after from "@/assets/fabish-norton-painting-after.jpg";
import { Reveal } from "@/components/site/Reveal";

const BEFORE_VIDEO = "/videos/fabish-norton-before.mp4";
const BEFORE_POSTER = "/videos/fabish-norton-before.jpg";

const stages = [
  {
    label: "Before",
    title: "Faded, uneven walls",
    body: "The house as we found it: tired paint, patchy colour and walls that needed proper preparation, not just another coat.",
  },
  {
    label: "During",
    title: "Undercoat, then the final coat",
    body: "Every wall was prepared and undercoated first. It seals the surface so the top coat goes on evenly and lasts for years.",
  },
  {
    label: "After",
    title: "A warm, lasting finish",
    body: "Finished in a warm brown top coat, cut in cleanly around the windows, doors and face-brick pillars.",
  },
];

const badge =
  "rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-white uppercase shadow-soft";

/*
 * The Norton repaint told as a scroll story.
 *
 * Desktop: the section is three screens tall and its content is pinned; scroll
 * position picks the stage (before -> during -> after) and the visuals crossfade.
 * One passive scroll listener batched into requestAnimationFrame; React only
 * re-renders when the stage actually changes. The before video plays muted and
 * only while its stage is on screen.
 *
 * Phones: no pinning — the three stages stack as a simple vertical timeline.
 */
export function Transformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stage, setStage] = useState(0);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const video = videoRef.current;
      if (!desktop.matches) {
        video?.pause();
        return;
      }
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / travel));
      const next = p < 0.34 ? 0 : p < 0.67 ? 1 : 2;
      if (barRef.current) barRef.current.style.transform = `scaleY(${p.toFixed(3)})`;
      setStage(next);

      const onScreen =
        rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
      if (video) {
        if (next === 0 && onScreen) {
          if (video.paused) void video.play().catch(() => {});
        } else if (!video.paused) video.pause();
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    desktop.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Clicking a stage scrolls to the middle of that stage's stretch of the section.
  const jumpTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + travel * (i * 0.33 + 0.16), behavior: "smooth" });
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !muted;
    setMuted(!muted);
    if (video.paused) void video.play().catch(() => {});
  };

  const layer = (i: number) =>
    `absolute inset-0 transition-all duration-700 ease-out ${
      stage === i ? "opacity-100 scale-100" : "pointer-events-none scale-[1.04] opacity-0"
    }`;

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="relative overflow-x-clip bg-surface lg:h-[300vh]"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-0">
          {/* Story */}
          <div>
            <Reveal>
              <span className="eyebrow text-accent-gold">
                <span className="h-px w-8 bg-current" aria-hidden />
                Transformation
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-3xl leading-[1.1] font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
                From faded to finished, in three stages
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent-gold" />
                Exterior repaint · Norton · 2026
              </p>
            </Reveal>

            {/* Desktop: stage list with a progress rail that fills as you scroll. */}
            <ol className="relative mt-10 hidden space-y-2 pl-10 lg:block">
              <span
                aria-hidden
                className="absolute top-3 bottom-3 left-[13px] w-0.5 rounded bg-border"
              />
              <span
                ref={barRef}
                aria-hidden
                className="absolute top-3 bottom-3 left-[13px] w-0.5 origin-top scale-y-0 rounded bg-accent-gradient"
              />
              {stages.map((s, i) => (
                <li key={s.label}>
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-current={stage === i ? "step" : undefined}
                    className="group relative block w-full rounded-2xl p-4 text-left transition-colors duration-500 hover:bg-white"
                  >
                    <span
                      aria-hidden
                      className={`absolute top-5 -left-10 grid h-7 w-7 place-items-center rounded-full border-2 text-[11px] font-bold transition-all duration-500 ${
                        stage >= i
                          ? "border-transparent bg-accent-gradient text-white shadow-accent"
                          : "border-border bg-white text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-500 ${
                        stage === i ? "text-accent-gold" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`mt-1 block text-xl font-semibold transition-colors duration-500 ${
                        stage === i ? "text-brand-ink" : "text-brand-ink/40"
                      }`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`grid transition-all duration-500 ${
                        stage === i
                          ? "mt-2 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <Reveal delay={200}>
              <Link
                to="/projects/$slug"
                params={{ slug: "norton-exterior-painting" }}
                className="group mt-8 hidden items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5 lg:inline-flex"
              >
                See the full project
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* Desktop: one frame, three crossfading layers. */}
          <div className="relative mx-auto hidden aspect-[4/5] h-[72vh] max-h-[44rem] lg:block">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-brand-ink shadow-lift">
              <div className={layer(0)}>
                <video
                  ref={videoRef}
                  src={BEFORE_VIDEO}
                  poster={BEFORE_POSTER}
                  preload="none"
                  muted
                  loop
                  playsInline
                  aria-label="Video of the Norton house before the repaint"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-sm font-semibold text-white">
                  As we found it
                </p>
              </div>

              <div className={layer(1)}>
                <img
                  src={undercoat}
                  alt="Painter undercoating the Norton house"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-[45%] text-sm font-semibold text-white">
                  Undercoat going on, wall by wall
                </p>
              </div>

              <div className={layer(2)}>
                <img
                  src={after}
                  alt="The Norton house finished in a warm brown top coat"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-sm font-semibold text-white">
                  Completed · warm brown top coat
                </p>
              </div>
            </div>

            {/* Floating extras that sit outside the frame edge. */}
            <div
              className={`absolute -right-10 -bottom-8 w-[42%] rotate-3 rounded-2xl border-[6px] border-white bg-white shadow-lift transition-all duration-700 ${
                stage === 1
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-6 opacity-0"
              }`}
            >
              <img
                src={finishing}
                alt="Final coat being applied at the Norton house"
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <p className="px-1 pt-2 pb-1 text-xs font-bold text-brand-ink">Then the final coat</p>
            </div>

            <div
              className={`absolute -top-6 -right-8 w-[30%] -rotate-3 rounded-2xl border-[6px] border-white bg-white shadow-lift transition-all duration-700 ${
                stage === 2
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-6 opacity-0"
              }`}
            >
              <img
                src={BEFORE_POSTER}
                alt="The same house before"
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <p className="px-1 pt-2 pb-1 text-xs font-bold text-brand-ink">Before</p>
            </div>

            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span
                className={`${badge} transition-colors duration-500 ${
                  stage === 0 ? "bg-brand-ink/80" : stage === 1 ? "bg-accent-gold" : "bg-brand"
                }`}
              >
                {stages[stage]?.label}
              </span>
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-ink">
                {stage + 1} / 3
              </span>
            </div>

            {stage === 0 ? (
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Turn sound on" : "Turn sound off"}
                className="absolute right-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-brand-ink shadow-soft transition hover:bg-white"
              >
                {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                {muted ? "Sound off" : "Sound on"}
              </button>
            ) : null}
          </div>

          {/* Phones: a vertical timeline, one stage after another. */}
          <ol className="relative space-y-12 border-l-2 border-border pl-7 lg:hidden">
            {stages.map((s, i) => (
              <li key={s.label} className="relative">
                <span className="absolute top-0 -left-[43px] grid h-7 w-7 place-items-center rounded-full bg-accent-gradient text-[11px] font-bold text-white shadow-accent">
                  {i + 1}
                </span>
                <Reveal>
                  <span className="text-xs font-bold tracking-[0.18em] text-accent-gold uppercase">
                    {s.label}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-brand-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-5 overflow-hidden rounded-3xl shadow-lift">
                    {i === 0 ? (
                      <video
                        src={BEFORE_VIDEO}
                        poster={BEFORE_POSTER}
                        preload="none"
                        controls
                        playsInline
                        aria-label="Video of the Norton house before the repaint"
                        className="aspect-[4/5] w-full bg-brand-ink object-cover"
                      />
                    ) : i === 1 ? (
                      <div className="grid grid-cols-2 gap-1 bg-white">
                        <img
                          src={undercoat}
                          alt="Painter undercoating the Norton house"
                          loading="lazy"
                          className="aspect-[3/4] w-full object-cover"
                        />
                        <img
                          src={finishing}
                          alt="Final coat being applied at the Norton house"
                          loading="lazy"
                          className="aspect-[3/4] w-full object-cover"
                        />
                      </div>
                    ) : (
                      <img
                        src={after}
                        alt="The Norton house finished in a warm brown top coat"
                        loading="lazy"
                        className="aspect-[4/5] w-full object-cover"
                      />
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
            <li>
              <Link
                to="/projects/$slug"
                params={{ slug: "norton-exterior-painting" }}
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white"
              >
                See the full project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
