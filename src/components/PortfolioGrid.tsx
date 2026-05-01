import { useState } from "react";
import { TECH_TAGS } from "../lib/constants";
import { withBase } from "../lib/with-base";

interface Project {
  title: string;
  githubLink: string;
  deployedLink?: string;
  tags: string[];
}

interface Props {
  projects: Project[];
  base: string;
}

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="border-border bg-border text-text-muted inline-block rounded-full border px-3 py-1 text-xs font-medium capitalize">
      {tag}
    </span>
  );
}

function Card({
  title,
  githubLink,
  deployedLink,
  tags,
  base,
}: Project & { base: string }) {
  return (
    <div className="border-border bg-surface rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-text text-lg font-bold md:text-xl">
          {title}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <TagBadge tag={tag} />
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 gap-2">
          <a
            className="bg-primary hover:bg-primary-hover inline-flex min-h-[44px] w-auto items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
            title={`GitHub link for ${title}`}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="size-5 shrink-0"
              src={withBase(base, "/github.png")}
              alt=""
            />
            <span>GitHub</span>
          </a>
          {deployedLink ? (
            <a
              className="bg-primary hover:bg-primary-hover inline-flex min-h-[44px] w-auto items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
              title={`Deployed link for ${title}`}
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="size-5 shrink-0"
                src={withBase(base, "/deploy.png")}
                alt=""
              />
              <span>Deploy</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGrid({ projects, base }: Props) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const filtered =
    activeFilters.size === 0
      ? projects
      : projects.filter((p) => p.tags.some((t) => activeFilters.has(t)));

  function toggleFilter(tag: string) {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="space-y-2">
        <p
          id="filter-label"
          className="text-text-muted text-sm font-semibold tracking-wide uppercase"
        >
          Filter by technology used
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-labelledby="filter-label"
        >
          {TECH_TAGS.map((tag) => {
            const active = activeFilters.has(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                aria-pressed={active}
                className={`border-border rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                  active
                    ? "bg-primary hover:bg-primary-hover text-white"
                    : "bg-surface text-text-muted hover:bg-primary hover:text-white"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <Card key={project.title} {...project} base={base} />
        ))}
      </div>
    </div>
  );
}
