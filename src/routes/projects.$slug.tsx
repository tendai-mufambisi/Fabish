import { useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MapPin, Star, Wallet } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import { BackToTop } from "@/components/site/BackToTop";
import { Reveal } from "@/components/site/Reveal";
import { Lightbox } from "@/components/site/Lightbox";
import { projects, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p
      ? `${p.title} | Fabish House Finishings Projects`
      : "Project | Fabish House Finishings";
    const description = p?.short ?? "A home finished by Fabish House Finishings.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

// Side by side rather than a drag slider: site photos are rarely taken from the
// exact same spot, and a slider only works when the two shots line up.
function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  video,
}: NonNullable<Project["beforeAfter"]> & { video?: Project["beforeVideo"] }) {
  return (
    <div className={`grid gap-3 sm:gap-4 ${video ? "grid-cols-3" : "grid-cols-2"}`}>
      {video ? (
        <figure className="relative overflow-hidden rounded-2xl bg-brand-ink shadow-lift">
          <video
            src={video.src}
            poster={video.poster}
            preload="none"
            controls
            playsInline
            aria-label="Video of the site before work started"
            className="aspect-[3/4] w-full object-cover"
          />
          <figcaption className="pointer-events-none absolute top-3 left-3 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
            Before
          </figcaption>
        </figure>
      ) : null}
      {[
        { src: before, label: beforeLabel, tone: "bg-brand-ink/80" },
        { src: after, label: afterLabel, tone: "bg-accent-gold" },
      ].map((s) => (
        <figure key={s.label} className="relative overflow-hidden rounded-2xl shadow-lift">
          <img
            src={s.src}
            alt={s.label}
            loading="lazy"
            width={810}
            height={1080}
            className="aspect-[3/4] w-full object-cover"
          />
          <figcaption
            className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase ${s.tone}`}
          >
            {s.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [lightbox, setLightbox] = useState<number | null>(null);
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[75vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span aria-hidden className="absolute inset-0 bg-brand-ink/75" />
          <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 lg:px-8">
            <Link
              to="/"
              hash="projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to projects
            </Link>
            <div className="flex gap-2">
              <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold tracking-wider text-brand uppercase">
                {project.category}
              </span>
              <span className="rounded-full bg-accent-gold px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase">
                {project.status}
              </span>
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/75">{project.short}</p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: MapPin, label: "Location", value: project.location },
                { icon: CalendarDays, label: "Completion", value: project.completion },
                { icon: Wallet, label: "Project Value", value: project.value },
                { icon: Clock, label: "Duration", value: project.duration },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl px-5 py-4">
                  <s.icon className="h-5 w-5 text-accent-gold-soft" />
                  <p className="mt-3 text-[11px] font-bold tracking-[0.16em] text-white/55 uppercase">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.4fr_1fr] lg:px-8">
            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">
                  Project Description
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                  {project.description.map((p: string) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </Reveal>

              {project.beforeAfter ? (
                <Reveal delay={120}>
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-brand-ink">Before & After</h3>
                    <div className="mt-5">
                      <BeforeAfter {...project.beforeAfter} video={project.beforeVideo} />
                    </div>
                  </div>
                </Reveal>
              ) : null}

              <Reveal delay={120}>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-brand-ink">Image Gallery</h3>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {project.gallery.map((img: string, i: number) => (
                      <button
                        key={i}
                        onClick={() => setLightbox(i)}
                        className="group overflow-hidden rounded-2xl"
                      >
                        <img
                          src={img}
                          alt={`${project.title} gallery image ${i + 1}`}
                          loading="lazy"
                          width={1280}
                          height={960}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              {project.testimonial ? (
                <Reveal delay={120}>
                  <figure className="mt-12 rounded-[2rem] bg-brand-gradient p-9 text-white shadow-lift">
                    <div className="flex gap-1 text-accent-gold-soft">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed">
                      “{project.testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-4">
                      {project.testimonial.photo ? (
                        <img
                          src={project.testimonial.photo}
                          alt={project.testimonial.name}
                          loading="lazy"
                          width={640}
                          height={640}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          aria-hidden
                          className="grid h-12 w-12 place-items-center rounded-full bg-white/15 font-display text-lg font-semibold"
                        >
                          {project.testimonial.name.charAt(0)}
                        </span>
                      )}
                      <span>
                        <span className="block font-semibold">{project.testimonial.name}</span>
                        <span className="block text-sm text-white/60">
                          {project.testimonial.role}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ) : null}
            </div>

            <aside className="space-y-8">
              <Reveal>
                <div className="rounded-3xl border border-border bg-surface p-7">
                  <h3 className="text-lg font-semibold text-brand-ink">Project Timeline</h3>
                  <ol className="mt-6 space-y-5">
                    {project.timeline.map((t: Project["timeline"][number]) => (
                      <li key={t.phase} className="relative border-l border-border pb-1 pl-6">
                        <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-accent-gradient" />
                        <p className="text-sm font-semibold text-brand-ink">{t.phase}</p>
                        <p className="text-xs text-muted-foreground">{t.detail}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="rounded-3xl border border-border bg-surface p-7">
                  <h3 className="text-lg font-semibold text-brand-ink">Materials Used</h3>
                  <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {project.materials.map((m: string) => (
                      <li key={m} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="overflow-hidden rounded-3xl border border-border">
                  <iframe
                    title={`Map of ${project.location}`}
                    src={`https://www.google.com/maps?q=${project.mapQuery}&output=embed`}
                    loading="lazy"
                    className="h-64 w-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <Link
                  to="/"
                  hash="quote"
                  className="block rounded-3xl bg-accent-gradient px-7 py-6 text-center font-bold text-white shadow-accent transition-transform duration-300 hover:-translate-y-1"
                >
                  Start a project like this
                </Link>
              </Reveal>
            </aside>
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-brand-ink sm:text-3xl">Related Projects</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="group block overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="p-6">
                      <p className="text-xs font-bold tracking-[0.16em] text-accent-gold uppercase">
                        {p.category}
                      </p>
                      <h3 className="mt-2 font-semibold text-brand-ink">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
      <BackToTop />
      <Lightbox
        images={project.gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </>
  );
}
