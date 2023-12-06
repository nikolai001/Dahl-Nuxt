export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  env: {
    baseUrl: 'http://localhost:1337'
  },

  publicRuntimeConfig: {
    baseUrl: 'http://localhost:1337'
  },

  head: {
    title: 'Dahl Lolland Aps',
    htmlAttrs: {
      lang: 'da'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dahl Lolland Aps er din lokale ekspert i elektrikerarbejde i Nakskov. Vores erfarne team af elektrikere er dedikeret til at levere pålidelig og professionel service til både private og virksomheder. Uanset om det er installation, reparation eller vedligeholdelse af elektriske systemer, kan du regne med os. Kontakt os i dag på +45 54 92 19 99 og få løst dine el behov med ekspertise og lokalkendskab.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      {rel:'stylesheet', href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"},
      {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900;1,700&display=swap"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
