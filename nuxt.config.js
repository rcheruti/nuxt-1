const pkg = require('./package')
const yml = require('js-yaml');
const fs  = require('fs');
//const sass = require('node-sass');
//const sassUtils = require('node-sass-utils')(sass);

let site = process.env.site || 'site-1';
console.log('Site: ', site );

// load configurations
let siteConfig = yml.safeLoad(fs.readFileSync(`./sites/${site}.yml`));

let generateDir = 'docs' ; //+ (site ? '_'+site : '');

module.exports = {
  mode: 'universal',
  
  env: {
    site: site ,
    ...siteConfig
  },
  
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/polyfill-raf', ssr: false } ,
    { src: '~plugins/polyfill-typed-array', ssr: false } ,
    { src: '~plugins/polyfill-array-find', ssr: false } ,
    { src: '~plugins/plugins', ssr: false } 
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    ['nuxt-sass-resources-loader', [
      `sites/${site}.scss`
    ]]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  
  /**
   * Configs for de "nuxt generate" command
   */
  generate: {
    // Use the "/docs" folder for the final build to let the assets
    // availlable on GitHub
    dir: generateDir
  },
  
  router: {
    base: '/nuxt-1/'
  }
  
}
