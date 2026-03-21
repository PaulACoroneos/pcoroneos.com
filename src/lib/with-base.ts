export const withBase = (base: string, path: string): string => {
  const normalizedBase =
    base.endsWith("/") && base !== "/" ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (normalizedBase === "/") {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
};
