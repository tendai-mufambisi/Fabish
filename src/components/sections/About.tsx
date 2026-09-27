import { Compass, Eye, ShieldCheck, Target } from "lucide-react";
import interior from "@/assets/fabish-bedroom-ceiling.jpg";
import founder from "@/assets/fabish-founder-feature-wall.jpg";
import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To transform houses into masterpieces with finishes that are slick, durable and delivered on time, at an honest price.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be the first name Zimbabwean homeowners, developers and contractors think of when they want a home finished properly.",
  },
  {
    icon: ShieldCheck,
    title: "Core Values",
    body: "Quality, integrity, precision, reliability and respect — for our clients, our craftsmen and every home we work in.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <Reveal>
              <img
                src={founder}
                alt="The founder of Fabish House Finishings on site in front of a finished feature wall and fireplace"
                loading="lazy"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-lift"
              />
            </Reveal>
            <Reveal delay={200}>
              <img
                src={interior}
                alt="A bedroom with a Fabish tray ceiling, LED cove lighting and painted walls"
                loading="lazy"
                width={1280}
                height={960}
                className="absolute -right-2 -bottom-10 hidden w-56 rounded-2xl border-4 border-white object-cover shadow-lift sm:block lg:w-64"
              />
            </Reveal>
            <Reveal delay={300}>
              <div className="absolute -bottom-8 left-0 rounded-2xl bg-brand-gradient px-6 py-5 text-white shadow-lift sm:left-6">
                <p className="font-display text-3xl font-semibold">8+</p>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase">Years finishing homes</p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow text-accent-gold">
                <span className="h-px w-8 bg-current" aria-hidden />
                About Fabish House Finishings
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-3xl leading-tight font-semibold text-brand-ink sm:text-4xl lg:text-5xl">
                Our Story
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  At Fabish House Finishings, we believe your home should reflect your personality and stand
                  the test of time. With years of experience serving homeowners, property developers and
                  contractors across Zimbabwe, we have perfected the art of transforming houses into
                  masterpieces.
                </p>
                <p>
                  Our team of skilled craftsmen combines traditional techniques with modern innovations to
                  deliver exceptional results. We understand the architectural styles and climate of African
                  homes, so every finish is both beautiful and durable.
                </p>
                <p>
                  From plastering to painting, tiling to ceilings, we perfect every detail — whether it is a
                  single bathroom or a complete new home.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 font-display text-2xl font-semibold text-brand sm:text-3xl">
                Transforming Houses Into Masterpieces.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-lift">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white transition-transform duration-500 group-hover:scale-105">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-brand-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex items-center justify-center gap-3 text-sm font-semibold text-muted-foreground">
            <Compass className="h-4 w-4 text-accent-gold" />
            Serving homeowners across Harare and Zimbabwe
          </div>
        </Reveal>
      </div>
    </section>
  );
}