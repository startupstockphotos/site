/** @jsx h */
import { h } from 'preact'
import store from 'state/store.js'

export default (map = state => state) => Comp => props => (
  <Comp {...Object.assign({}, props, map(store.state))} hydrate={store.hydrate} />
)
