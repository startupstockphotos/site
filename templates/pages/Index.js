const App = require('templates/components/App.js')
const Grid = require('templates/components/Grid.js')

module.exports = function Index (props, children) {
  return App(props, `
    ${Grid(props)}
  `)
}
