function importAll(r) {
  return r
    .keys()
    .filter(fileName => !fileName.substr(1).startsWith('rc/'))
    .map(fileName => ({
      link: fileName.substr(1).replace(/\/index\.mdx$/, ''),
      module: r(fileName),
    }))
}

function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

//filter out mdx files w/out date. these arent blogposts (other pages)
// eslint-disable-next-line no-extra-parens
const getAllPostPreviews = () => importAll((require as any).context('./pages/?preview', true, /\.mdx$/)).sort((a, b) =>
  dateSortDesc(a.module.meta.date, b.module.meta.date)
);

export default getAllPostPreviews
