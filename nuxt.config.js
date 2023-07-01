export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Imaginary Ones',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Imaginary Ones is a delightful 3D animated art collection with an initial drop of 8888 unique NFTs on the Ethereum network. The project believes in using art to spread love, positivity, and creativity.',
      },
      {
        hid: 'ogtitle',
        name: 'og:title',
        content: 'Imaginary Ones',
      },
      {
        hid: 'ogimage',
        name: 'og:image',
        content: 'https://imaginaryones.com/og/og-home.jpg',
      },
      {
        hid: 'ogimagealt',
        name: 'og:image:alt',
        content:
          'They key visual of the website for the the NFT collection, "Imaginary Ones". A banner that\'s whimsical and full of vibrancy, it represents the brand with bouncing and colourful balls.',
      },
      {
        hid: 'ogtype',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'twittercard',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twittersite',
        name: 'twitter:site',
        content: 'Imaginary_Ones',
      },
      {
        hid: 'twittertitle',
        name: 'twitter:title',
        content: 'Imaginary Ones',
      },
      {
        hid: 'twitterimage',
        name: 'twitter:image',
        content: 'https://imaginaryones.com/og/og-home.jpg',
      },
      {
        hid: 'twitterimagealt',
        name: 'twitter:image:alt',
        content:
          'They key visual of the website for the the NFT collection, "Imaginary Ones". A banner that\'s whimsical and full of vibrancy, it represents the brand with bouncing and colourful balls.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://imaginaryones.com/' },
    ],
  },
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      themes: {},
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
