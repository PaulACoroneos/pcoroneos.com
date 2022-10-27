import getAllPostPreviews from './getAllPostPreviews'

export async function getStaticProps() {

  const posts = getAllPostPreviews();

  return {
    props: {
      posts: posts?.map(post => ({
        title: post?.module?.meta?.title ?? '',
        link: post?.link ?? '',
      })),
    },
  }
}
