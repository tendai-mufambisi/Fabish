import { Quote } from "lucide-react";
import founder from "@/assets/fabish-founder-feature-wall.jpg";
import { company } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export function Founder() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent-gold/10 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div className="relative">
            <span aria-hidden className="absolute -top-5 -left-5 h-32 w-32 rounded-3xl border-2 border-accent-gold/40" />
            <img
              src={founder}
              alt="The founder of Fabish House Finishings in front of a finished feature wall and fireplace"
              loading="lazy"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute right-4 -bottom-6 rounded-2xl bg-white px-6 py-4 shadow-lift">
              <p className="font-display text-lg font-semibold text-brand-ink">{company.shortName}</p>
              <p className="text-xs font-semibold tracking-[0.16em] text-accent-gold uppercase">
                Founder & CEO
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow text-accent-gold">
              <span className="h-px w-8 bg-current" aria-hidden />
              Leadership
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
              Meet Our Founder
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <blockquote className="relative mt-8 rounded-3xl border border-border bg-white p-8 shadow-soft lg:p-10">
              <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-xl bg-accent-gradient p-2 text-white" />
              <p className="text-lg leading-relaxed text-brand-ink/90 lg:text-xl">
                “A house becomes a home in the finishing. The ceiling you look up at, the tiles under your
                feet, the walls your family lives between every day. At Fabish House Finishings, we treat
                every room as if it were our own, and we only hand over work we are proud to put our name
                on.”
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <p
                  className="text-3xl text-brand"
                  style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
                >
                  Fabish
                </p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  Founder · Fabish House Finishings
                </p>
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 font-display text-2xl font-semibold text-brand sm:text-3xl">
              Transforming Houses Into Masterpieces.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}