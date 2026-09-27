import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Images, MapPin, MessageCircle, ZoomIn } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Lightbox } from "@/components/site/Lightbox";
import { portfolioPhotos, projectFilters, projects, whatsappLink } from "@/lib/site-data";

const wallPhotos = portfolioPhotos.map((p) => p.src);

// Two large and two wide tiles; with 12 photos this fills the 4-column wall with no gaps.
const wallSpan = (i: number) => {
  if (i === 0 || i === 6) return "col-span-2 row-span-2";
  if (i === 5 || i === 11) return "col-span-2";
  return "";
};

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Completed" || filter === "Ongoing")
      return projects.filter((p) => p.status === filter);
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const openGallery = (images: string[], index = 0) => {
    setGallery(images);
    setLightbox(index);
  };

  return (
    <section id="projects" className="relative bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="See the work we have already done"
          subtitle="Every project below is a real Fabish home. Open any one to see the photos, the timeline, the materials we used and what the client had to say."
        />

        <Reveal>
          <div
            className="mt-12 flex flex-wrap justify-center gap-2.5"
            role="tablist"
            aria-label="Filter projects"
          >
            {projectFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === f
                    ? "border-transparent bg-brand-gradient text-white shadow-soft"
                    : "border-border bg-white text-brand-ink hover:border-accent-gold hover:text-accent-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {filtered.map((project, i) => {
            // The first project in the list is shown large, as the showcase piece.
            const featured = i === 0;
            return (
              <Reveal
                key={project.slug}
                delay={(i % 2) * 90}
                className={featured ? "lg:col-span-2" : ""}
              >
                <article
                  className={`group h-full overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift ${
                    featured ? "lg:grid lg:grid-cols-[1.5fr_1fr]" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => openGallery(project.gallery)}
                    aria-label={`Open the ${project.title} photo gallery`}
                    className="relative block w-full overflow-hidden text-left"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} by Fabish House Finishings in ${project.location}`}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110 ${
                        featured ? "lg:aspect-auto lg:h-[26rem]" : ""
                      }`}
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {featured ? (
                        <span className="rounded-full bg-accent-gradient px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                          Featured
                        </span>
                      ) : null}
                      <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wider text-brand uppercase">
                        {project.category}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase ${
                          project.status === "Completed" ? "bg-brand" : "bg-accent-gold"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-brand-ink">
                      <Images className="h-3.5 w-3.5" />
                      {project.gallery.length} photos
                    </span>
                  </button>

                  <div
                    className={`p-7 ${featured ? "lg:flex lg:flex-col lg:justify-center lg:p-10" : ""}`}
                  >
                    <h3
                      className={`font-semibold text-brand-ink ${featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"}`}
                    >
                      {project.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-accent-gold" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-accent-gold" />
                        {project.completion}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.short}
                    </p>

                    {featured && project.testimonial ? (
                      <blockquote className="mt-6 border-l-2 border-accent-gold pl-4 text-sm leading-relaxed text-brand-ink/85 italic">
                        “{project.testimonial.quote}”
                        <span className="mt-1 block text-xs font-semibold text-muted-foreground not-italic">
                          {project.testimonial.name}, {project.testimonial.role}
                        </span>
                      </blockquote>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      <button
                        onClick={() => openGallery(project.gallery)}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold text-brand-ink transition-colors duration-300 hover:border-accent-gold hover:text-accent-gold"
                      >
                        <Images className="h-4 w-4" />
                        Gallery
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-accent-gold">
                  <span className="h-px w-8 bg-current" aria-hidden />
                  Photo Wall
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-brand-ink sm:text-3xl">
                  More from our sites
                </h3>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Tap any photo to view it full screen.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-flow-row-dense auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-4 md:gap-4">
            {portfolioPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={(i % 4) * 70} className={wallSpan(i)}>
                <button
                  type="button"
                  onClick={() => openGallery(wallPhotos, i)}
                  aria-label={`View photo: ${photo.alt}`}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 grid place-items-center bg-brand-ink/0 text-white opacity-0 transition-all duration-500 group-hover:bg-brand-ink/40 group-hover:opacity-100"
                  >
                    <ZoomIn className="h-7 w-7" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-brand-gradient px-8 py-10 text-center shadow-lift md:flex-row md:text-left lg:px-12">
            <div>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Want your home to look like this?
              </p>
              <p className="mt-2 text-white/70">
                Send us photos or plans and we will come back with a free quotation.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                hash="quote"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3.5 text-sm font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white hover:text-brand-ink"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </section>
  );
}
