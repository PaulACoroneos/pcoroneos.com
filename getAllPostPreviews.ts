function importAll(r: __WebpackModuleApi.RequireContext) {
  return r
    .keys()
    .filter(
      (fileName) => !fileName.includes("pages") && !fileName.includes("./about")
    )
    .map((fileName) => ({
      link: fileName.replace(/\/index\.mdx$/, ""),
      module: r(fileName),
    }));
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

//filter out mdx files w/out date. these arent blogposts (other pages)
// eslint-disable-next-line no-extra-parens
const getAllPostPreviews = () =>
  importAll(require.context("./pages/?preview", true, /\.mdx$/, "sync"));

export default getAllPostPreviews;
