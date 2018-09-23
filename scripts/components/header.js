import { component } from 'picoapp'
import tickl from 'tickl'
import { app, router } from 'scripts/client.js'

export default component(({ node }) => {
  const toggle = document.getElementById('menuToggle')
  const back = document.getElementById('headerBack')

  back.onclick = e => {
    app.state.hasHistory ? (
      window.history.back()
    ) : (
      router.go('/')
    )
  }
  // const span = toggle.getElementsByTagName('span')[0]

  // tickl(toggle, [
  //   [span, 0.1]
  // ])
})
