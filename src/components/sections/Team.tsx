import { Mail, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { team, whatsappLink } from "@/lib/site-data";

export function Team() {
  return (
    <section id="team" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The craftsmen behind every finish"
          subtitle="Specialist teams for every trade, so each finish is done by people who do it every day."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={`${member.name} at work: ${member.position}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-ink/85 via-brand-ink/10 to-transparent"
                  />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="font-display text-xl font-semibold text-white">{member.name}</p>
                    <p className="text-xs font-bold tracking-[0.18em] text-accent-gold-soft uppercase">
                      {member.position}
                    </p>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li>
                      <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-brand-ink transition-colors hover:text-accent-gold">
                        <Phone className="h-4 w-4 text-accent-gold" />
                        {member.phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${member.email}`} className="flex items-center gap-3 break-all text-brand-ink transition-colors hover:text-accent-gold">
                        <Mail className="h-4 w-4 text-accent-gold" />
                        {member.email}
                      </a>
                    </li>
                    <li>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-brand-ink transition-colors hover:text-accent-gold">
                        <MessageCircle className="h-4 w-4 text-accent-gold" />
                        Chat on WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}