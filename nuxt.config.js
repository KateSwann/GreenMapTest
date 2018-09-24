module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'greenmaptest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic-ext' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;subset=cyrillic-ext' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans&amp;subset=cyrillic-ext' },

    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~/assets/styles/variables.scss',
    '~/assets/styles/mixins.scss',
    '~/assets/styles/main.scss'
  ],
  plugins: [
    { src: '~/plugins/slick-carousel.js', ssr: false },
    { src: '~/plugins/buefy.js' }
  ],
}

