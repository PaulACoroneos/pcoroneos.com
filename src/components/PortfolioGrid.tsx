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
    <span className="inline-block rounded-full border border-border bg-border px-3 py-1 text-xs font-medium capitalize text-text-muted">
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
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-4">
        <h2 className="font-display text-lg font-bold text-text-primary md:text-xl">
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
            className="inline-flex min-h-[44px] w-auto items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
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
              className="inline-flex min-h-[44px] w-auto items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
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
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase()),
        );

  return (
    <div className="mt-2 space-y-6">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by technology"
      >
        {["all", ...TECH_TAGS].map((tag) => {
          const active = activeFilter === tag;
          return (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              aria-pressed={active}
              className={`rounded-full border border-border px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                active
                  ? "bg-primary text-white hover:bg-primary-hover"
                  : "bg-surface text-text-muted hover:bg-primary hover:text-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <Card key={project.title} {...project} base={base} />
        ))}
      </div>
    </div>
  );
}
