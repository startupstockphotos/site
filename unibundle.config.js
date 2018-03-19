require('now-env')
const path = require('path')

const {
  NODE_ENV,
  CLARE_API_URL,
  CLARE_SHOPIFY_GRAPHQL_URL,
  CLARE_SHOPIFY_GRAPHQL_ACCESS_TOKEN
} = process.env

const alias = {
  app: path.resolve('./app'),
  components: path.resolve('./app/components'),
  routes: path.resolve('./app/routes'),
  state: path.resolve('./app/state'),
  lib: path.resolve('./app/lib'),
}

module.exports = production => ({
  buildDir: 'build',
  publicDir: 'public',
  css: {
    output: {
      filename: 'style.css'
    }
  },
  client: {
    entry: 'app/index.js',
    output: {
      filename: 'index.js'
    },
    alias
  },
  server: {
    entry: 'server/index.js',
    output: {
      filename: 'server.js',
    },
    alias
  }
})
