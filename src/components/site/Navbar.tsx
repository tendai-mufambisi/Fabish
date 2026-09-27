import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/fabish-logo.jpg";
import { company } from "@/lib/site-data";

const links = [
  { label: "Home", hash: "home" },
  { label: "About", hash: "about" },
  { label: "Services", hash: "services" },
  { label: "Portfolio", hash: "projects" },
  { label: "Videos", hash: "videos" },
  { label: "Team", hash: "team" },
  { label: "FAQ", hash: "faq" },
  { label: "Contact", hash: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-border/70 bg-white/90 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" hash="home" className="flex items-center gap-3" aria-label="Fabish House Finishings home">
            <span
              className={`grid place-items-center overflow-hidden rounded-xl transition-shadow duration-500 ${
                scrolled ? "shadow-none" : "shadow-soft ring-1 ring-white/20"
              }`}
            >
              <img src={logo} alt={company.name} width={780} height={493} className="h-12 w-auto" />
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors after:absolute after:bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-accent-gradient after:transition-all after:duration-300 hover:after:w-6 ${
                  scrolled ? "text-brand-ink hover:text-brand" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${company.phone}`}
              className={`hidden items-center gap-2 text-sm font-semibold transition-colors md:flex ${
                scrolled ? "text-brand-ink hover:text-brand" : "text-white/85 hover:text-white"
              }`}
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <Link
              to="/"
              hash="quote"
              className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Get a Free Quote
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className={`rounded-xl border p-2.5 transition lg:hidden ${
                scrolled ? "border-border text-brand-ink" : "border-white/30 text-white"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-brand-ink/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white p-6 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <img src={logo} alt={company.name} width={780} height={493} className="h-12 w-auto rounded-lg" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-xl border border-border p-2.5">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 text-lg font-semibold text-brand-ink transition-colors hover:text-accent-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/"
            hash="quote"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-full bg-accent-gradient px-6 py-3.5 text-center font-bold text-white shadow-accent"
          >
            Get a Free Quote
          </Link>
          <p className="mt-6 text-center text-xs font-bold tracking-[0.28em] text-brand uppercase">
            {company.tagline}
          </p>
        </div>
      </div>
    </>
  );
}