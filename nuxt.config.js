import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - price',
    title: 'price',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuetify/dist/vuetify.min.css',
    'vuetify-rtl-style/dist/css/vuetify-rtl-style.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/vuetify'],

  // Modules
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  axios: {},

  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          price_iron: 'Price Iron',
          price_arz: 'Price Arz',
          price_gold: 'Price Gold',
          price_online: 'Price Online',
          home: 'Home',
          lang_fa: 'persian',
          lang_en: 'English',
          type: 'type',
          price_sell: 'price sell',
          price_buy: 'price buy',
          Last_modified: 'Last modified'
        },
        fa: {
          price_iron: 'قیمت آهن',
          price_arz: 'قیمت ارز',
          price_gold: 'قیمت طلا',
          price_online: 'قیمت آنلاین',
          home: 'خانه',
          lang_fa: 'فارسی',
          lang_en: 'انگلیسی',
          type: 'نوع',
          price_sell: 'قیمت فروش',
          price_buy: 'قیمت خرید',
          Last_modified: 'آخرین بروزرسانی'
        },
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
