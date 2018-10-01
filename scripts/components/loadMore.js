import { component } from 'picoapp'
import vsbl from 'vsbl'
import wait from 'w2t'

export default component(({ node, state, actions }) => {
  const button = node.getElementsByTagName('button')[0]

  vsbl(node)(() => {
    if (state.page < state.pages) {
      node.classList.add('is-active')
    }
  }, () => {
    node.classList.remove('is-active')
  })

  button.addEventListener('click', e => {
    node.classList.add('is-loading')

    wait(1000, [
      actions.loadMore()
    ]).then(() => {
      node.classList.remove('is-active')
      setTimeout(() => {
        node.classList.remove('is-loading')
      }, 800)
    })
  })
})
