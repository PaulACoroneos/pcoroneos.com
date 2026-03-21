function normalizeBase(base) {
  if (!base || base === "/") {
    return "/";
  }

  return `/${base.replace(/^\/+|\/+$/g, "")}/`;
}

function prefixUrl(url, base) {
  if (typeof url !== "string") {
    return url;
  }

  if (!url.startsWith("/") || url.startsWith("//")) {
    return url;
  }

  if (base === "/" || url.startsWith(base)) {
    return url;
  }

  return `${base}${url.slice(1)}`;
}

function prefixSrcset(srcset, base) {
  if (typeof srcset !== "string") {
    return srcset;
  }

  return srcset
    .split(",")
    .map((entry) => {
      const trimmed = entry.trim();
      if (!trimmed) {
        return trimmed;
      }

      const [url, descriptor] = trimmed.split(/\s+/, 2);
      const prefixedUrl = prefixUrl(url, base);
      return descriptor ? `${prefixedUrl} ${descriptor}` : prefixedUrl;
    })
    .join(", ");
}

function visit(node, cb) {
  cb(node);

  if (!node || !Array.isArray(node.children)) {
    return;
  }

  for (const child of node.children) {
    visit(child, cb);
  }
}

export default function rehypePrefixBaseUrl(options = {}) {
  const base = normalizeBase(options.base ?? "/");

  return function transform(tree) {
    visit(tree, (node) => {
      if (node?.type !== "element" || !node.properties) {
        return;
      }

      if (typeof node.properties.href === "string") {
        node.properties.href = prefixUrl(node.properties.href, base);
      }

      if (typeof node.properties.src === "string") {
        node.properties.src = prefixUrl(node.properties.src, base);
      }

      if (typeof node.properties.srcset === "string") {
        node.properties.srcset = prefixSrcset(node.properties.srcset, base);
      }
    });
  };
}
