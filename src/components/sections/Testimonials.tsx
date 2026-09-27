import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What our clients say"
          subtitle="Homeowners, developers and contractors who trusted us to finish their homes."
        />

        <Reveal>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-9 shadow-soft lg:p-12">
              {testimonials.map((t, i) => (
                <figure
                  key={t.name}
                  aria-hidden={i !== active}
                  className={`transition-all duration-700 ${
                    i === active ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="flex gap-1 text-accent-gold">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-brand-ink/90 lg:text-xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      aria-hidden
                      className="grid h-14 w-14 place-items-center rounded-full border-2 border-accent-gold/40 bg-brand-gradient font-display text-lg font-semibold text-white"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-ink">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                aria-label="Previous testimonial"
                onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-brand-ink transition hover:border-accent-gold hover:text-accent-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-accent-gradient" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                aria-label="Next testimonial"
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white text-brand-ink transition hover:border-accent-gold hover:text-accent-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}