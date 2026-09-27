import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  projectType: z.string().trim().min(1, "Please select a project type"),
  location: z.string().trim().min(2, "Please enter the project location").max(120),
  budget: z.string().trim().max(60).optional(),
  startDate: z.string().trim().max(30).optional(),
  description: z.string().trim().min(10, "Please tell us a little about the project").max(1500),
});

const field =
  "w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-brand-ink transition-colors placeholder:text-muted-foreground/70 focus:border-accent-gold focus:outline-none focus:ring-2 focus:ring-accent-gold/20";
const labelCls = "text-xs font-bold tracking-[0.14em] text-brand-ink uppercase";

export function QuoteForm() {
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setFileName("");
      toast.success("Quote request received. We will respond within one business day.");
    }, 700);
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Request A Quote"
          title="Get a free, itemised quotation"
          subtitle="Tell us what you want finished. We respond within one business day and arrange a free site visit where needed."
        />

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-border bg-white p-7 shadow-lift sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">Full Name *</label>
                <input id="name" name="name" required maxLength={100} placeholder="Your full name" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone" required maxLength={20} inputMode="tel" placeholder="+263 77 123 4567" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={labelCls} htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required maxLength={255} placeholder="you@email.com" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={labelCls} htmlFor="projectType">Project Type *</label>
                <select id="projectType" name="projectType" required defaultValue="" className={`mt-2 ${field}`}>
                  <option value="" disabled>Select a project type</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="location">Project Location *</label>
                <input id="location" name="location" required maxLength={120} placeholder="Suburb, city or province" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={labelCls} htmlFor="budget">Estimated Budget</label>
                <select id="budget" name="budget" defaultValue="" className={`mt-2 ${field}`}>
                  <option value="">Select a budget range</option>
                  <option>Under US$ 1 000</option>
                  <option>US$ 1 000 – US$ 5 000</option>
                  <option>US$ 5 000 – US$ 15 000</option>
                  <option>US$ 15 000 – US$ 40 000</option>
                  <option>Over US$ 40 000</option>
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="startDate">Expected Start Date</label>
                <input id="startDate" name="startDate" type="date" className={`mt-2 ${field}`} />
              </div>
              <div>
                <label className={labelCls} htmlFor="plans">Upload Photos or Plans</label>
                <label
                  htmlFor="plans"
                  className="mt-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-surface px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:border-accent-gold hover:text-accent-gold"
                >
                  <Upload className="h-4 w-4" />
                  <span className="truncate">{fileName || "PDF, JPG or PNG (max 10MB)"}</span>
                </label>
                <input
                  id="plans"
                  name="plans"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="sr-only"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  maxLength={1500}
                  placeholder="Describe the work you need: rooms, sizes, finishes, tiles, colours, timelines…"
                  className={`mt-2 ${field} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-9 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent-gradient px-8 py-4.5 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1 disabled:opacity-70 sm:w-auto"
            >
              {submitting ? "Sending…" : "Request My Free Quote"}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              Free quotations. No obligation. Your details are never shared.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}