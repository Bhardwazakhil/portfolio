import { CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/content";
import { GitHubIcon } from "./BrandIcons";
import { Reveal, Section } from "./Reveal";

function Status({ status }: { status: Project["status"] }) {
  const done = status === "completed";
  const Icon = done ? CheckCircle2 : Clock;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs font-medium ${
        done ? "bg-primary/10 text-primary" : "bg-amber-bg text-amber-fg"
      }`}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {done ? "Completed" : "In progress"}
    </span>
  );
}

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-primary";

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg motion-reduce:transform-none">
      {p.image && (
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <Status status={p.status} />
        <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-muted">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.tech.map((t) => (
            <li key={t} className="rounded-md bg-bg px-2 py-1 font-mono text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>
        {(p.github || p.live) && (
          <div className="mt-5 flex gap-5 border-t border-line pt-4">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <GitHubIcon className="size-4" /> Code
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <ExternalLink className="size-4" aria-hidden="true" /> Live dashboard
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03. Projects" title="Selected work">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <ProjectCard p={p} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
