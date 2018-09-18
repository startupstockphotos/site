import { component } from 'picoapp'

export default component(({ node, state, actions }) => {
  const [ input ] = node.getElementsByTagName('input')
  const reset = node.getElementsByTagName('button')[0]

  input.addEventListener('keyup', e => {
    e.target.value ? (
      actions.search(e.target.value)
    ) : (
      actions.resetSearch()
    )
  })

  reset.addEventListener('click', e => {
    input.value = ''
    actions.resetSearch()
  })
})
