(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

window.jsx = _2.default;

},{".":4}],2:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _globalAttributes = require('../maps/global-attributes');

var _globalAttributes2 = _interopRequireDefault(_globalAttributes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getAttrs = function getAttrs(tag) {
  var object = (typeof tag === 'undefined' ? 'undefined' : _typeof(tag)) === 'object';
  // define local attributes and extend the global attributes
  var localAttrs = object ? tag['attributes'] || {} : {};
  return Object.assign({}, _globalAttributes2.default, localAttrs);
};

exports.default = getAttrs;

},{"../maps/global-attributes":7}],3:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var getNode = function getNode(content) {
  if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') {
    return content;
  } else if (typeof content === 'string' || typeof content === 'number') {
    return document.createTextNode(content);
  } else {
    throw new Error('Expected "object", "numer" or "string" but received "' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)) + '"');
  }
};

exports.default = getNode;

},{}],4:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _htmlTags = require('./maps/html-tags');

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _eventHandlers = require('./maps/event-handlers');

var _eventHandlers2 = _interopRequireDefault(_eventHandlers);

var _style = require('./transformers/style');

var _style2 = _interopRequireDefault(_style);

var _node = require('./getters/node');

var _node2 = _interopRequireDefault(_node);

var _attrs = require('./getters/attrs');

var _attrs2 = _interopRequireDefault(_attrs);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * render content inside an element
 * @param  {DOMNode} content - HTML content to render
 * @param  {DOMNode} target - target element
 */
var render = function render(content, target) {
  // append content to target
  target.appendChild(content);
};

/**
 * create an element and assign attributes and handlers
 * also appends children
 * @param  {String} tagName - defines which tagType to render
 * @param  {Object} [props] - a list of properties containing attributes and eventlisteners
 * @param  {...[DOMNode]} children - a collection of children to append
 * @return {DOMNode} returns an HTML element
 */
var createElement = function createElement(tagName) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var properties = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  // make sure props is an object
  var props = properties || {};
  var type = typeof tagName === 'undefined' ? 'undefined' : _typeof(tagName);
  var object = type === 'object';
  var fn = type === 'function';
  var string = type === 'string';
  var number = type === 'number';
  var struct = fn && 'constructor' in tagName;

  if (struct) {
    var component = new tagName(props);
    if ('render' in component) {
      return component.render();
    } else {
      return component;
    }
  }

  if (fn) {
    return tagName(props);
  }

  if (!(tagName in _htmlTags2.default)) {
    throw new Error(tagName + ' is not a valid tagName');
  }

  // get the tag.name
  var tag = _htmlTags2.default[tagName];
  // tag could be an object
  var tagType = object ? tag.name : tag;

  if (!tagType) {
    return null;
  }

  // create the element and get attributes
  var el = document.createElement(tagType);
  var attrs = (0, _attrs2.default)(tag);

  // loop through all props and assign attributes and eventlisteners
  Object.keys(props).forEach(function (prop) {
    if (prop in attrs) {
      el.setAttribute(attrs[prop], props[prop]);
    } else if (prop in _eventHandlers2.default) {
      el.addEventListener(_eventHandlers2.default[prop], props[prop]);
    }
  });

  // if props contains a style object
  // set styles on element
  if ('style' in props) {
    (function () {
      var styles = props.style;
      Object.keys(styles).forEach(function (prop) {
        var value = styles[prop];
        el.style[prop] = (0, _style2.default)(prop, value);
      });
    })();
  }

  // loop through children and append.
  children.forEach(function (child) {
    var childNode = (0, _node2.default)(child);
    el.appendChild(childNode);
  });

  return el;
};

var jsx = {
  render: render,
  createElement: createElement
};

exports.default = jsx;

},{"./getters/attrs":2,"./getters/node":3,"./maps/event-handlers":6,"./maps/html-tags":8,"./transformers/style":9}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  height: {
    unit: 'px'
  },
  width: {
    unit: 'px'
  },
  outlineOffset: {
    unit: 'px'
  },
  margin: {
    unit: 'px'
  },
  padding: {
    unit: 'px'
  },
  borderRadius: {
    unit: 'px'
  },
  borderTopLeftRadius: {
    unit: 'px'
  },
  borderTopRightRadius: {
    unit: 'px'
  },
  borderBottomRightRadius: {
    unit: 'px'
  },
  borderBottomLeftRadius: {
    unit: 'px'
  },
  borderWidth: {
    unit: 'px'
  },
  borderTopWidth: {
    unit: 'px'
  },
  borderRightWidth: {
    unit: 'px'
  },
  borderBottomWidth: {
    unit: 'px'
  },
  borderLeftWidth: {
    unit: 'px'
  },
  top: {
    unit: 'px'
  },
  right: {
    unit: 'px'
  },
  bottom: {
    unit: 'px'
  },
  left: {
    unit: 'px'
  }
};

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _onClick$onFocus$onBl;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

exports.default = (_onClick$onFocus$onBl = {
  onClick: 'click',
  onFocus: 'focus',
  onBlur: 'blur',
  onChange: 'change',
  onSubmit: 'submit',
  onInput: 'input',
  onResize: 'resize',
  onScroll: 'scroll',
  onWheel: 'mousewheel',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup'
}, _defineProperty(_onClick$onFocus$onBl, 'onMouseDown', 'mousedown'), _defineProperty(_onClick$onFocus$onBl, 'onMouseMove', 'mousemove'), _defineProperty(_onClick$onFocus$onBl, 'onMouseEnter', 'mouseenter'), _defineProperty(_onClick$onFocus$onBl, 'onMouseOver', 'mouseover'), _defineProperty(_onClick$onFocus$onBl, 'onMouseOut', 'mouseout'), _defineProperty(_onClick$onFocus$onBl, 'onMouseLeave', 'mouseleave'), _defineProperty(_onClick$onFocus$onBl, 'onTouchStart', 'touchstart'), _defineProperty(_onClick$onFocus$onBl, 'onTouchEnd', 'touchend'), _defineProperty(_onClick$onFocus$onBl, 'onTouchCancel', 'touchcancel'), _defineProperty(_onClick$onFocus$onBl, 'onContextMenu', 'Ccntextmenu'), _defineProperty(_onClick$onFocus$onBl, 'onDoubleClick', 'dblclick'), _defineProperty(_onClick$onFocus$onBl, 'onDrag', 'drag'), _defineProperty(_onClick$onFocus$onBl, 'onDragEnd', 'dragend'), _defineProperty(_onClick$onFocus$onBl, 'onDragEnter', 'dragenter'), _defineProperty(_onClick$onFocus$onBl, 'onDragExit', 'dragexit'), _defineProperty(_onClick$onFocus$onBl, 'onDragLeave', 'dragleave'), _defineProperty(_onClick$onFocus$onBl, 'onDragOver', 'dragover'), _defineProperty(_onClick$onFocus$onBl, 'onDragStart', 'Dragstart'), _defineProperty(_onClick$onFocus$onBl, 'onDrop', 'drop'), _defineProperty(_onClick$onFocus$onBl, 'onLoad', 'load'), _defineProperty(_onClick$onFocus$onBl, 'onCopy', 'copy'), _defineProperty(_onClick$onFocus$onBl, 'onCut', 'cut'), _defineProperty(_onClick$onFocus$onBl, 'onPaste', 'paste'), _defineProperty(_onClick$onFocus$onBl, 'onCompositionEnd', 'compositionend'), _defineProperty(_onClick$onFocus$onBl, 'onCompositionStart', 'compositionstart'), _defineProperty(_onClick$onFocus$onBl, 'onCompositionUpdate', 'compositionupdate'), _defineProperty(_onClick$onFocus$onBl, 'onKeyDown', 'keydown'), _defineProperty(_onClick$onFocus$onBl, 'onKeyPress', 'keypress'), _defineProperty(_onClick$onFocus$onBl, 'onKeyUp', 'keyup'), _defineProperty(_onClick$onFocus$onBl, 'onAbort', 'Abort'), _defineProperty(_onClick$onFocus$onBl, 'onCanPlay', 'canplay'), _defineProperty(_onClick$onFocus$onBl, 'onCanPlayThrough', 'canplaythrough'), _defineProperty(_onClick$onFocus$onBl, 'onDurationChange', 'durationchange'), _defineProperty(_onClick$onFocus$onBl, 'onEmptied', 'emptied'), _defineProperty(_onClick$onFocus$onBl, 'onEncrypted', 'encrypted '), _defineProperty(_onClick$onFocus$onBl, 'onEnded', 'ended'), _defineProperty(_onClick$onFocus$onBl, 'onError', 'error'), _defineProperty(_onClick$onFocus$onBl, 'onLoadedData', 'loadeddata'), _defineProperty(_onClick$onFocus$onBl, 'onLoadedMetadata', 'loadedmetadata'), _defineProperty(_onClick$onFocus$onBl, 'onLoadStart', 'Loadstart'), _defineProperty(_onClick$onFocus$onBl, 'onPause', 'pause'), _defineProperty(_onClick$onFocus$onBl, 'onPlay', 'play '), _defineProperty(_onClick$onFocus$onBl, 'onPlaying', 'playing'), _defineProperty(_onClick$onFocus$onBl, 'onProgress', 'progress'), _defineProperty(_onClick$onFocus$onBl, 'onRateChange', 'ratechange'), _defineProperty(_onClick$onFocus$onBl, 'onSeeked', 'seeked'), _defineProperty(_onClick$onFocus$onBl, 'onSeeking', 'seeking'), _defineProperty(_onClick$onFocus$onBl, 'onStalled', 'stalled'), _defineProperty(_onClick$onFocus$onBl, 'onSuspend', 'suspend '), _defineProperty(_onClick$onFocus$onBl, 'onTimeUpdate', 'timeupdate'), _defineProperty(_onClick$onFocus$onBl, 'onVolumeChange', 'volumechange'), _defineProperty(_onClick$onFocus$onBl, 'onWaiting', 'waiting'), _defineProperty(_onClick$onFocus$onBl, 'onAnimationStart', 'animationstart'), _defineProperty(_onClick$onFocus$onBl, 'onAnimationEnd', 'animationend'), _defineProperty(_onClick$onFocus$onBl, 'onAnimationIteration', 'animationiteration'), _defineProperty(_onClick$onFocus$onBl, 'onTransitionEnd', 'transitionend'), _onClick$onFocus$onBl);

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  accessKey: 'accesskey',
  className: 'class',
  contentEditable: 'contenteditable',
  contextMenu: 'contextmenu',
  dir: 'dir',
  draggable: 'draggable',
  dropZone: 'dropzone',
  hidden: 'hidden',
  id: 'id',
  itemId: 'itemid',
  itemProp: 'itemprop',
  itemRef: 'itemref',
  itemScope: 'itemscope',
  itemType: 'itemtype',
  lang: 'lang',
  spellCheck: 'spellcheck',
  tabIndex: 'tabindex',
  title: 'title',
  translate: 'translate'
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  a: {
    name: 'a',
    attributes: {
      download: 'download',
      href: 'href',
      hrefLang: 'hreflang',
      ping: 'ping',
      referrerPolicy: 'referrerpolicy',
      rel: 'rel',
      target: 'target',
      type: 'type'
    }
  },
  abbr: 'abbr',
  address: 'address',
  area: 'area',
  article: 'article',
  aside: 'aside',
  audio: {
    name: 'audio',
    attributes: {
      autoPlay: 'autoplay',
      autoBuffer: 'autobuffer',
      buffered: 'buffered',
      controls: 'controls',
      loop: 'loop',
      muted: 'muted',
      played: 'played',
      preload: 'preload',
      src: 'src',
      volume: 'volume'
    }
  },
  blockquote: 'blockquote',
  b: 'b',
  base: 'base',
  bdi: 'bdi',
  bdo: 'bdo',
  br: 'br',
  button: {
    name: 'button',
    attributes: {
      autoFocus: 'autofocus',
      disabled: 'disabled',
      form: 'form',
      formAction: 'formaction',
      formMethod: 'formmethod',
      formType: 'formtype',
      formValidate: 'formvalidate',
      formTarget: 'formtarget',
      type: 'type',
      value: 'value'
    }
  },
  canvas: {
    name: 'canvas',
    attributes: {
      height: 'height',
      width: 'width'
    }
  },
  caption: 'caption',
  cite: 'cite',
  code: 'code',
  col: 'col',
  colgroup: 'colgroup',
  data: {
    name: 'data',
    attributes: {
      value: 'value'
    }
  },
  datalist: 'datalist',
  dfn: 'dfn',
  div: 'div',
  dd: 'dd',
  del: 'del',
  details: {
    name: 'details',
    attributes: {
      open: 'open'
    }
  },
  dl: 'dl',
  dt: 'dt',
  em: 'em',
  embed: {
    name: 'embed',
    attributes: {
      height: 'height',
      src: 'src',
      type: 'type',
      width: 'width'
    }
  },
  fieldset: {
    name: 'fieldset',
    attributes: {
      disabled: 'disabled',
      form: 'form',
      name: 'name'
    }
  },
  figcaption: 'figcaption',
  figure: 'figure',
  footer: 'footer',
  form: {
    name: 'form',
    attributes: {
      acceptCharset: 'accept-charset',
      action: 'action',
      autocomplete: 'autocomplete',
      enctype: 'enctype',
      method: 'method',
      name: 'name',
      noValidate: 'novalidate',
      target: 'target'
    }
  },
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  head: 'head',
  header: 'header',
  hgroup: 'hgroup',
  hr: 'hr',
  i: 'i',
  input: {
    name: 'input',
    attributes: {
      accept: 'accept',
      autoFocus: 'autofocus',
      autoComplete: 'autocomplete',
      checked: 'checked',
      disabled: 'disabled',
      form: 'form',
      formAction: 'formaction',
      formMethod: 'formmethod',
      formType: 'formtype',
      formValidate: 'formvalidate',
      formTarget: 'formtarget',
      height: 'height',
      list: 'list',
      max: 'max',
      maxLength: 'maxlength',
      min: 'min',
      minLength: 'minlength',
      multiple: 'multiple',
      name: 'name',
      placeholder: 'placeholder',
      readOnly: 'readonly',
      required: 'required',
      size: 'size',
      src: 'src',
      step: 'step',
      type: 'type',
      value: 'value',
      width: 'width'
    }
  },
  img: {
    name: 'img',
    attributes: {
      alt: 'alt',
      crossOrigin: 'crossorigin',
      height: 'height',
      isMap: 'ismap',
      longDesc: 'longdesc',
      referrerPolicy: 'referrerpolicy',
      sizes: 'sizes',
      src: 'src',
      srcset: 'srcset',
      width: 'width',
      useMap: 'usemap'
    }
  },
  ins: 'ins',
  kbd: 'kbd',
  label: {
    name: 'label',
    attributes: {
      htmlFor: 'for'
    }
  },
  legend: 'legend',
  li: 'li',
  link: 'link',
  main: 'main',
  map: {
    name: 'map',
    attributes: {
      name: 'name'
    }
  },
  mark: 'mark',
  meta: 'meta',
  meter: {
    name: 'meter',
    attributes: {
      form: 'form',
      high: 'high',
      low: 'low',
      min: 'min',
      max: 'max',
      optimum: 'optimum',
      value: 'value'
    }
  },
  nav: 'nav',
  ol: 'ol',
  object: {
    name: 'object',
    attributes: {
      form: 'form',
      height: 'height',
      name: 'name',
      type: 'type',
      typeMustmatch: 'typemustmatch',
      useMap: 'usemap',
      width: 'width'
    }
  },
  optgroup: {
    name: 'optgroup',
    attributes: {
      disabled: 'disabled',
      label: 'label'
    }
  },
  option: {
    name: 'option',
    attributes: {
      disabled: 'disabled',
      label: 'label',
      selected: 'selected',
      value: 'value'
    }
  },
  output: {
    name: 'output',
    attributes: {
      htmlFor: 'for',
      form: 'form',
      name: 'name'
    }
  },
  p: 'p',
  param: {
    name: 'param',
    attributes: {
      name: 'name',
      value: 'value'
    }
  },
  pre: 'pre',
  progress: {
    name: 'progress',
    attributes: {
      max: 'max',
      value: 'value'
    }
  },
  rp: 'rp',
  rt: 'rt',
  rtc: 'rtc',
  ruby: 'ruby',
  s: 's',
  samp: 'samp',
  section: 'section',
  select: {
    name: 'select',
    attributes: {
      autoFocus: 'autofocus',
      disabled: 'disabled',
      form: 'form',
      multiple: 'multiple',
      name: 'name',
      required: 'required',
      size: 'size'
    }
  },
  small: 'small',
  source: {
    name: 'source',
    attributes: {
      media: 'media',
      sizes: 'sizes',
      src: 'src',
      srcset: 'srcset',
      type: 'type'
    }
  },
  span: 'span',
  strong: 'strong',
  style: 'style',
  sub: 'sub',
  sup: 'sup',
  table: 'table',
  tbody: 'tbody',
  th: 'th',
  thead: 'thead',
  textarea: {
    name: 'textarea',
    attributes: {
      autoComplete: 'autocomplete',
      autoFocus: 'autofocus',
      cols: 'cols',
      disabled: 'disabled',
      form: 'form',
      maxLength: 'maxlength',
      minLength: 'minlength',
      name: 'name',
      placeholder: 'placeholder',
      readOnly: 'readonly',
      required: 'required',
      rows: 'rows',
      selectionDirection: 'selectionDirection',
      wrap: 'wrap'
    }
  },
  td: 'td',
  tfoot: 'tfoot',
  tr: 'tr',
  track: {
    name: 'track',
    attributes: {
      htmlDefault: 'default',
      kind: 'kind',
      label: 'label',
      src: 'src',
      srclang: 'srclang'
    }
  },
  time: 'time',
  title: 'title',
  u: 'u',
  ul: 'ul',
  video: {
    name: 'video',
    attributes: {
      autoPlay: 'autoplay',
      buffered: 'buffered',
      controls: 'controls',
      crossOrigin: 'crossorigin',
      height: 'height',
      loop: 'loop',
      muted: 'muted',
      played: 'played',
      poster: 'poster',
      preload: 'preload',
      src: 'src',
      width: 'width'
    }
  }

};

},{}],9:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _cssProperties = require('../maps/css-properties');

var _cssProperties2 = _interopRequireDefault(_cssProperties);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var transformStyle = function transformStyle(prop, value) {
  // make numbers default to px
  if (typeof value === 'number') {
    var cssProp = _cssProperties2.default[prop];
    if (cssProp && 'unit' in cssProp) {
      return '' + value + cssProp.unit;
    } else {
      return value;
    }
  } else if (typeof value === 'string') {
    return value;
  } else {
    throw new Error('Expected "number" or "string" but received "' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + '"');
  }
};

exports.default = transformStyle;

},{"../maps/css-properties":5}]},{},[1]);
