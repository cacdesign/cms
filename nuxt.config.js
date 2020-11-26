let env = require('dotenv').config()
export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
      title: 'demo.combimultisport.com',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
      ],
      link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  '~assets/style/app.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  '~plugins/modal.js',
  '~plugins/chart.js',
  { src: '~plugins/apexCharts.js', ssr: false},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth'
        ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
   baseUrl : env.parsed.API_URL
 },
 
  // Auth module 
  auth : {
    strategies : {
      local : {
        endpoints : {
          login : {
            url : 'auth/login', 
            method : 'post',
            propertyName : 'data.token'
          },
          user : {
            url : 'auth/me', 
            method : 'get',
            propertyName : 'data'
          },
          logout : {
            url : 'auth/logout', 
            method : 'post',
          },
        }
      }
    }
  },
  target : 'server',

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss : {
      plugins : {
        tailwindcss : 'tailwind.config.js'
      }
    } 
  }
}
