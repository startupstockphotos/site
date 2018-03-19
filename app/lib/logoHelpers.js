export function getBounds (target, threshold = 0) {
  const rect = target.getBoundingClientRect()
  return {
    rect,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
    left: rect.left - threshold,
    right: rect.right + threshold,
    top: rect.top - threshold,
    bottom: rect.bottom + threshold
  }
}

function move (target, rect, e) {
  const x = e.clientX - rect.left - (rect.width / 2)
  const y = e.clientY - rect.top - (rect.height / 2)
  window.requestAnimationFrame(() => {
    target.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

function reset (target) {
  window.requestAnimationFrame(() => {
    target.style.transform = ''
  })
}

export function init (target, boundary) {
  function handler (e) {
    const bounds = getBounds(boundary, 20)
    if (
      e.clientX > bounds.left && e.clientX < bounds.right &&
      e.clientY > bounds.top && e.clientY < bounds.bottom
    ) {
      move(target, bounds.rect, e)
    } else {
      reset(target)
    }
  }

  document.addEventListener('mousemove', handler)

  return {
    destroy () {
      document.removeEventListener('mousemove', handler)
      reset(target)
    }
  }
}
