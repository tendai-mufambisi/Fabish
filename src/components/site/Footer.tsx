import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/fabish-logo.jpg";
import { company, services } from "@/lib/site-data";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-accent-gold/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <span className="inline-block overflow-hidden rounded-2xl border border-white/10 shadow-soft">
              <img src={logo} alt={company.name} width={780} height={493} loading="lazy" className="h-20 w-auto" />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Transforming houses into masterpieces with professional finishing services across
              Zimbabwe. Quality craftsmanship for modern African homes.
            </p>
            <p className="mt-5 font-display text-xl font-semibold text-accent-gold-soft">
              Quality Craftsmanship. Modern Design.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media profile"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-0.5 hover:border-accent-gold hover:bg-accent-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {["home", "about", "services", "projects", "team", "faq", "contact"].map((h) => (
                <li key={h}>
                  <Link to="/" hash={h} className="capitalize transition-colors hover:text-accent-gold-soft">
                    {h === "faq" ? "FAQ" : h}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {services.slice(0, 7).map((s) => (
                <li key={s.title}>
                  <Link to="/" hash="services" className="transition-colors hover:text-accent-gold-soft">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                <a href={`tel:${company.phone}`} className="hover:text-white">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                <span>{company.address}</span>
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.trim())) {
                  toast.error("Please enter a valid email address.");
                  return;
                }
                toast.success("Subscribed. Look out for our latest finishes.");
                setEmail("");
              }}
            >
              <label htmlFor="newsletter" className="text-xs font-bold tracking-[0.2em] text-white/50 uppercase">
                Newsletter
              </label>
              <div className="mt-3 flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-accent-gold">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  maxLength={255}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="grid w-12 place-items-center bg-accent-gradient text-white"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Transforming Zimbabwean houses into masterpieces.</p>
        </div>
      </div>
    </footer>
  );
}