module.exports = function Grid (props, children) {
  return `
    <li class='grid__photo rel'>
      <img class='x y' src='${props.images.placeholder}' />
    </li>
  `
}
