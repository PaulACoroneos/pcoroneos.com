type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  discussion?: string;
};

export type PostModule = {
  default: unknown;
  meta: PostMeta;
};

export type PostEntry = {
  link: string;
  module: PostModule;
  excerpt: string;
};

export const normalizePostLink = (sourcePath: string) => {
  const withoutPrefix = sourcePath.replace("../../app", "");
  const withoutPageFile = withoutPrefix.replace(/\/page\.mdx$/, "");
  return withoutPageFile.startsWith("/")
    ? withoutPageFile
    : `/${withoutPageFile}`;
};

export const stripFrontmatter = (source: string) => {
  if (!source.startsWith("---")) {
    return source;
  }

  const frontmatterEnd = source.indexOf("\n---", 3);
  if (frontmatterEnd === -1) {
    return source;
  }

  return source.slice(frontmatterEnd + 4);
};

export const extractExcerpt = (source: string, fallback: string) => {
  const withoutFrontmatter = stripFrontmatter(source);
  const withoutMetaExport = withoutFrontmatter.replace(
    /export\s+const\s+meta\s*=\s*\{[\s\S]*?\};?/,
    "",
  );

  const withoutTopLevelCode = withoutMetaExport
    .split("\n")
    .filter((line) => !line.trim().startsWith("import "))
    .join("\n");

  const withoutMarkers = withoutTopLevelCode
    .replaceAll("{/* excerpt */}", "")
    .replaceAll("{/* /excerpt */}", "");

  let previewSource = withoutMarkers;

  if (previewSource.includes("{/* more */}")) {
    previewSource = previewSource.split("{/* more */}")[0].trim();
  }

  if (previewSource.includes("<!--excerpt-->")) {
    previewSource = previewSource.split("<!--excerpt-->")[0].trim();
  }

  const firstParagraph = previewSource
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .find(
      (part) =>
        Boolean(part) &&
        !part.startsWith("#") &&
        !part.startsWith("```") &&
        !part.startsWith("<"),
    );

  const normalized = (firstParagraph ?? previewSource)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#-]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (normalized) {
    return normalized;
  }

  return fallback;
};

// Turns glob results (keyed by source path) into dated posts, newest first.
export const buildPostEntries = (
  modules: Record<string, PostModule>,
  rawModules: Record<string, string>,
): PostEntry[] => {
  return Object.entries(modules)
    .filter(([, module]) => Boolean(module.meta?.date))
    .map(([sourcePath, module]) => ({
      link: normalizePostLink(sourcePath),
      module,
      excerpt: extractExcerpt(
        rawModules[sourcePath] ?? "",
        module.meta?.description ?? "",
      ),
    }))
    .sort(
      (a, b) =>
        new Date(b.module.meta.date).getTime() -
        new Date(a.module.meta.date).getTime(),
    );
};
