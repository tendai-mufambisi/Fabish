import { Download, FileText } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";

export function CompanyProfile() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full bg-accent-gold/25 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="eyebrow text-accent-gold-soft">
              <span className="h-px w-8 bg-current" aria-hidden />
              Company Profile
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-3xl leading-tight font-semibold text-white sm:text-4xl lg:text-5xl">
              Download Our Company Profile
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 max-w-xl leading-relaxed text-white/70">
              Learn more about our finishing services, capabilities and completed homes.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <button
              onClick={() => toast.info("Upload your company profile PDF and this button will download it.")}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent-gradient px-8 py-4 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
            >
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Company Profile (PDF)
            </button>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-x-8 top-6 h-full rounded-3xl bg-white/10" aria-hidden />
            <div className="absolute inset-x-4 top-3 h-full rounded-3xl bg-white/20" aria-hidden />
            <div className="relative rounded-3xl bg-white p-7 shadow-lift">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="font-display text-lg font-semibold text-brand-ink">Fabish House Finishings</p>
                  <p className="text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
                    Company Profile 2026
                  </p>
                </div>
                <FileText className="h-9 w-9 text-brand" />
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Company overview & registration",
                  "Services & capabilities",
                  "Completed project portfolio",
                  "Materials & quality standards",
                  "Team structure & references",
                ].map((line, i) => (
                  <div key={line} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-secondary text-[11px] font-bold text-brand">
                      {i + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{line}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 space-y-2" aria-hidden>
                <span className="block h-2 w-full rounded-full bg-secondary" />
                <span className="block h-2 w-4/5 rounded-full bg-secondary" />
                <span className="block h-2 w-2/3 rounded-full bg-secondary" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}