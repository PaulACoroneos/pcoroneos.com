function importAll(r: __WebpackModuleApi.RequireContext) {
  return r
    .keys()
    .filter(
      (fileName) => !fileName.includes("app") && !fileName.includes("./about")
    )
    .map((fileName) => ({
      link: fileName.replace(/\/page\.mdx$/, ""),
      module: r(fileName),
    }));
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

const getAllPostPreviews = () => {
  return importAll(require.context("../app/?preview", true, /\.mdx$/, "sync"));
};

export default getAllPostPreviews;
