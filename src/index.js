import HTML_TAGS from './maps/html-tags'
import EVENT_HANDLERS from './maps/event-handlers'
import transformStyle from './transformers/style'
import getNode from './getters/node'
import getAttrs from './getters/attrs'

/**
 * render content inside an element
 * @param  {DOMNode} content - HTML content to render
 * @param  {DOMNode} target - target element
 */
const render = (content, target) => {
  // append content to target
  target.appendChild(content)
}

/**
 * create an element and assign attributes and handlers
 * also appends children
 * @param  {String} tagName - defines which tagType to render
 * @param  {Object} [props] - a list of properties containing attributes and eventlisteners
 * @param  {...[DOMNode]} children - a collection of children to append
 * @return {DOMNode} returns an HTML element
 */
const createElement = (tagName, properties = {}, ...children) => {
  // make sure props is an object
  const props = properties || {}
  const type = typeof tagName
  const object = type === 'object'
  const fn = type === 'function'
  const string = type === 'string'
  const number = type === 'number'
  const struct = fn && 'constructor' in tagName

  if (struct) {
    const component = new tagName(props)
    if ('render' in component) {
      return component.render()
    } else {
      return component
    }
  }

  if (fn) {
    return tagName(props)
  }

  if (!(tagName in HTML_TAGS)) {
    throw new Error(`${tagName} is not a valid tagName`)
  }

  // get the tag.name
  const tag = HTML_TAGS[tagName]
  // tag could be an object
  const tagType = object ? tag.name : tag

  if (!tagType) {
    return null
  }

  // create the element and get attributes
  const el = document.createElement(tagType)
  const attrs = getAttrs(tag)

  // loop through all props and assign attributes and eventlisteners
  Object.keys(props).forEach(prop => {
    if (prop in attrs) {
      el.setAttribute(attrs[prop], props[prop])
    } else if (prop in EVENT_HANDLERS) {
      el.addEventListener(EVENT_HANDLERS[prop], props[prop])
    }
  })

  // if props contains a style object
  // set styles on element
  if ('style' in props) {
    const styles = props.style
    Object.keys(styles).forEach(prop => {
      const value = styles[prop]
      el.style[prop] = transformStyle(prop, value)
    })
  }

  // loop through children and append.
  children.forEach(child => {
    const childNode = getNode(child)
    el.appendChild(childNode)
  })

  return el
}

const jsx = {
  render,
  createElement
}

export default jsx