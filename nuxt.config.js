const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
  // Your Nuxt options here...
  modules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/vuetify', { /* module options */ }]
  ],
  plugins: [],

  // Options such as mode, srcDir and generate.dir are already handled for you.
});