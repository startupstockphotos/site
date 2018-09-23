module.exports = function Grid (props, children) {
  return `
    <li id='${props.id}' class='grid__photo rel'>
      <img class='x y fill z0' src='${props.images.placeholder}' data-src='${props.images.display}' />
      <a href='/photos/${props.id}' class='abs fill z1'></a>
    </li>
  `
}
