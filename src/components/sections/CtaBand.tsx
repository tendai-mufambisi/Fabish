import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import tools from "@/assets/fabish-bg-tools.jpg";
import { ParallaxBg } from "@/components/site/ParallaxBg";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site-data";

// Full-bleed call to action between the proof (portfolio, testimonials) and the detail sections.
export function CtaBand() {
  return (
    <section aria-label="Start your project" className="relative overflow-hidden bg-brand-ink">
      <ParallaxBg src={tools} speed={0.4} position="50% 5%" />
      <div
        aria-hidden
        className="absolute inset-0 bg-brand-ink/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-ink/95 lg:via-brand-ink/70 lg:to-brand-ink/10"
      />

      <div className="relative mx-auto flex min-h-[32rem] max-w-7xl items-center px-5 py-24 lg:min-h-[38rem] lg:px-8">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow text-accent-gold-soft">
              <span className="h-px w-8 bg-current" aria-hidden />
              Building & Finishing
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-white sm:text-5xl lg:text-6xl">
              From Foundation
              <span className="block text-accent-gold-soft">To Completion.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              One accountable team from the first block to the final coat of paint. Tell us about
              your project and we will visit, measure and quote for free.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="quote"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-4 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-brand-ink"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
