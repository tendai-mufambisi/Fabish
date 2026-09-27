import * as Icons from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { whyUs } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section id="why-us" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Fabish"
          title="Seven reasons clients keep coming back"
          subtitle="We are not the cheapest quote in the pile. We are the finishers who deliver the standard we promised, on the day we promised it."
        />

        <div className="mt-16 space-y-6">
          {whyUs.map((item, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon];
            const flip = i % 2 === 1;
            return (
              <Reveal key={item.title} delay={i * 60}>
                <article
                  className={`group flex flex-col gap-6 rounded-3xl border border-border bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:items-center lg:gap-10 lg:p-9 ${
                    flip ? "sm:flex-row-reverse" : "sm:flex-row"
                  }`}
                >
                  <span className="relative grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                    {Icon ? <Icon className="h-9 w-9" /> : null}
                    <span className="absolute -right-1.5 -bottom-1.5 h-6 w-6 rounded-lg bg-accent-gradient" aria-hidden />
                  </span>
                  <div className={flip ? "sm:text-right" : ""}>
                    <h3 className="text-xl font-semibold text-brand-ink lg:text-2xl">{item.title}</h3>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                  <span
                    aria-hidden
                    className={`hidden font-display text-5xl font-semibold text-brand/10 lg:block ${flip ? "sm:mr-auto" : "sm:ml-auto"}`}
                  >
                    0{i + 1}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}