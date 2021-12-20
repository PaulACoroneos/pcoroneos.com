const { createLoader } = require('simple-functional-loader')
const visit = require('unist-util-visit')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-images'), require('remark-emoji'), require('remark-prism')],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    modern: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.mdx$/,
      oneOf: [
        {
          resourceQuery: /preview/,
          use: [
            createLoader(function (src) {
              if (src.includes('<!--more-->')) {
                const [preview] = src.split('<!--more-->')
                return this.callback(null, preview)
              }

              const [preview] = src.split('<!--/excerpt-->')
              return this.callback(null, preview.replace('<!--excerpt-->', ''))
            }),
          ],
        },
        {
          use: [
            createLoader(function (src) {
              const content = [
                'import Post from "src/components/post"',
                'export { getStaticProps } from "src/getStaticProps"',
                `${src} \n`,
                'export default (props) => <Post meta={meta} {...props} />',
              ].join('\n')

              if (content.includes('<!--more-->')) {
                return this.callback(null, content.split('<!--more-->').join('\n'))
              }

              return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
            }),
          ],
        },
      ],
    })

    // if (!options.dev && options.isServer) {
    // const originalEntry = config.entry

    // config.entry = async () => {
    //   const entries = { ...await originalEntry() }
    //   entries['./scripts/build-rss.js'] = './scripts/build-rss.js'
    //   return entries
    // }
    // }

    return config
  },
})
