export function joinRoute (a, b) {
  return (a + b).replace('//', '/')
}

export function cleanLocation (location) {
  return location.replace(window.location.origin, '')
}
