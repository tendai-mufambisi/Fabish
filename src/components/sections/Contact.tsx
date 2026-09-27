import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { company, whatsappLink } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(140),
  message: z.string().trim().min(10, "Please write a short message").max(1500),
});

const field =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-brand-ink transition-colors placeholder:text-muted-foreground/70 focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20";

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's talk about your project"
          subtitle="Phone, WhatsApp or email — whichever suits you. We answer quickly and we answer honestly."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] bg-brand-gradient p-9 text-white shadow-lift lg:p-11">
              <h3 className="font-display text-2xl font-semibold">{company.name}</h3>
              <p className="mt-2 text-sm text-white/65">Premium home finishing services in Zimbabwe</p>

              <ul className="mt-9 space-y-6 text-sm">
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Phone className="h-5 w-5 text-accent-gold-soft" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.16em] text-white/50 uppercase">Phone</span>
                    <a href={`tel:${company.phone}`} className="mt-1 block font-semibold hover:text-accent-gold-soft">
                      {company.phoneDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.16em] text-white/50 uppercase">WhatsApp</span>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-1 block font-semibold hover:text-accent-gold-soft">
                      Chat with us now
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-accent-gold-soft" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.16em] text-white/50 uppercase">Email</span>
                    <a href={`mailto:${company.email}`} className="mt-1 block font-semibold break-all hover:text-accent-gold-soft">
                      {company.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-accent-gold-soft" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.16em] text-white/50 uppercase">Location</span>
                    <span className="mt-1 block font-semibold">{company.address}</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10">
                    <Clock className="h-5 w-5 text-accent-gold-soft" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.16em] text-white/50 uppercase">Business Hours</span>
                    <span className="mt-1 block space-y-1">
                      {company.hours.map((h) => (
                        <span key={h.day} className="flex justify-between gap-6 font-semibold">
                          <span>{h.day}</span>
                          <span className="text-white/70">{h.time}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-9 border-t border-white/10 pt-7">
                <span className="text-xs font-bold tracking-[0.16em] text-white/50 uppercase">Social Media</span>
                <div className="mt-4 flex gap-3">
                  {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social media profile"
                      className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:-translate-y-0.5 hover:bg-accent-gold"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="h-full rounded-[2rem] border border-border bg-white p-9 shadow-soft lg:p-11"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const parsed = schema.safeParse(Object.fromEntries(new FormData(form).entries()));
                if (!parsed.success) {
                  toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
                  return;
                }
                form.reset();
                toast.success("Message sent. We'll be in touch shortly.");
              }}
            >
              <h3 className="font-display text-2xl font-semibold text-brand-ink">Send us a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every enquiry within one business day.
              </p>
              <div className="mt-8 space-y-5">
                <input name="name" required maxLength={100} placeholder="Full name" aria-label="Full name" className={field} />
                <input name="email" type="email" required maxLength={255} placeholder="Email address" aria-label="Email address" className={field} />
                <input name="subject" required maxLength={140} placeholder="Subject" aria-label="Subject" className={field} />
                <textarea name="message" required rows={6} maxLength={1500} placeholder="How can we help?" aria-label="Message" className={`${field} resize-none`} />
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex items-center gap-3 rounded-full bg-accent-gradient px-7 py-4 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border shadow-soft">
            <iframe
              title="Fabish House Finishings location"
              src="https://www.google.com/maps?q=Harare,+Zimbabwe&output=embed"
              loading="lazy"
              className="h-[400px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}