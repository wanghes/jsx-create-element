(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _=require("."),_2=_interopRequireDefault(_);window.jsx=_2.default;

},{".":5}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(t){return"undefined"==typeof t?"undefined":_typeof2(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":"undefined"==typeof t?"undefined":_typeof2(t)},_globalAttributes=require("../maps/global-attributes"),_globalAttributes2=_interopRequireDefault(_globalAttributes),getAttrs=function(t){var e="object"===("undefined"==typeof t?"undefined":_typeof(t)),o=e?t.attributes||{}:{};return Object.assign({},_globalAttributes2.default,o)};exports.default=getAttrs;

},{"../maps/global-attributes":8}],3:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":_typeof2(e)},_eventHandlers=require("../maps/event-handlers"),_eventHandlers2=_interopRequireDefault(_eventHandlers),getEventHandlers=function(e){var t="object"===("undefined"==typeof e?"undefined":_typeof(e)),n=t?e.eventHandlers||{}:{};return Object.assign({},_eventHandlers2.default,n)};exports.default=getEventHandlers;

},{"../maps/event-handlers":7}],4:[function(require,module,exports){
"use strict";var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":_typeof2(e)},getNode=function(e){var o="undefined"==typeof e?"undefined":_typeof(e);return"object"===o?Object.assign(e,{nodeType:"Element"}):"string"===o||"number"===o?{nodeType:"TextNode",content:e}:void 0};exports.default=getNode;

},{}],5:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":_typeof2(e)},_htmlTags=require("./maps/html-tags"),_htmlTags2=_interopRequireDefault(_htmlTags),_eventHandlers=require("./maps/event-handlers"),_eventHandlers2=_interopRequireDefault(_eventHandlers),_style=require("./transformers/style"),_style2=_interopRequireDefault(_style),_node=require("./getters/node"),_node2=_interopRequireDefault(_node),_attrs=require("./getters/attrs"),_attrs2=_interopRequireDefault(_attrs),_eventHandlers3=require("./getters/event-handlers"),_eventHandlers4=_interopRequireDefault(_eventHandlers3),STATE={},renderWithState=function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=arguments[2],o="undefined"==typeof t?"undefined":_typeof(t);if("object"===o){var a=t.nodeType,i=t.tagType,f=t.childNodes,s=t.dataSet,u="content"in t?t.content:i,d=n.node&&n.tagType===i&&n.nodeType===a?n.node:document["create"+a](u);"Element"===a?!function(){var e=t.attributes;Object.keys(e).forEach(function(t){d.setAttribute(t,e[t])}),Object.keys(s).forEach(function(e){d.setAttribute(e,s[e])});var r=t.eventListeners;n.node&&n.tagType===i||!function(){var e=n.eventListeners||{};Object.keys(e).forEach(function(t){n.node.removeEventListener(t,e[t])}),Object.keys(r).forEach(function(e){d.addEventListener(e,r[e])})}();var o=t.style;Object.keys(o).forEach(function(e){if("style"in n){var t=n.style;t[e]!==o[e]&&(d.style[e]=o[e])}else d.style[e]=o[e]})}():"TextNode"===a&&n.content!==u&&(d.textContent=u),f&&!function(){var r=n.childNodes||{};Object.keys(f).forEach(function(n){var o=r[n]||{};t.childNodes[n]=e(f[n],o,d)})}();var l="Element"!==a||"Element"!==n.nodeType;return!n.node||r!==n.node.parentNode||l?r.appendChild(d):n.tagType===i&&n.nodeType===a||(r.insertBefore(d,n.node),n.node.remove()),t.node=d,t}},render=function(e,t){STATE=renderWithState(e,STATE,t)},createElement=function(e){for(var t=arguments.length,n=Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o||{},i="undefined"==typeof e?"undefined":_typeof(e),f="function"===i,s=f&&"constructor"in e;if(s){var u=new e(a);return"render"in u?u.render():u}if(f)return e(a);if(!(e in _htmlTags2.default))throw new Error(e+" is not a valid tagName");var d=_htmlTags2.default[e],l="object"===("undefined"==typeof d?"undefined":_typeof(d))?d.name:d;if(!l)return null;var c=(0,_attrs2.default)(d),y=(0,_eventHandlers4.default)(d),p={tagType:l,nodeType:"Element",attributes:{},dataSet:{},style:{},eventListeners:{},childNodes:{}};return Object.keys(a).forEach(function(e){if(e in c)p.attributes[c[e]]=a[e];else if(e in y)p.eventListeners[y[e]]=a[e];else{var t=new RegExp("^data.*"),n=e.match(t);n&&n.forEach(function(t){var n=t.split(""),r=n.map(function(e){var t=e.toLowerCase();return e!==t?"-"+t:e}).join("");p.dataSet[r]=a[e]})}}),"style"in a&&!function(){var e=a.style;Object.keys(e).forEach(function(t){p.style[t]=(0,_style2.default)(t,e[t])})}(),n.forEach(function(e,t){var n=(0,_node2.default)(e);p.childNodes[t]=n}),p},jsx={render:render,createElement:createElement};exports.default=jsx;

},{"./getters/attrs":2,"./getters/event-handlers":3,"./getters/node":4,"./maps/event-handlers":7,"./maps/html-tags":9,"./transformers/style":10}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={height:{unit:"px"},width:{unit:"px"},outlineOffset:{unit:"px"},margin:{unit:"px"},padding:{unit:"px"},borderRadius:{unit:"px"},borderTopLeftRadius:{unit:"px"},borderTopRightRadius:{unit:"px"},borderBottomRightRadius:{unit:"px"},borderBottomLeftRadius:{unit:"px"},borderWidth:{unit:"px"},borderTopWidth:{unit:"px"},borderRightWidth:{unit:"px"},borderBottomWidth:{unit:"px"},borderLeftWidth:{unit:"px"},top:{unit:"px"},right:{unit:"px"},bottom:{unit:"px"},left:{unit:"px"}};

},{}],7:[function(require,module,exports){
"use strict";function _defineProperty(o,n,e){return n in o?Object.defineProperty(o,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[n]=e,o}Object.defineProperty(exports,"__esModule",{value:!0});var _onClick$onFocus$onBl;exports.default=(_onClick$onFocus$onBl={onClick:"click",onFocus:"focus",onBlur:"blur",onChange:"change",onSubmit:"submit",onInput:"input",onResize:"resize",onScroll:"scroll",onWheel:"mousewheel",onMouseDown:"mousedown",onMouseUp:"mouseup"},_defineProperty(_onClick$onFocus$onBl,"onMouseDown","mousedown"),_defineProperty(_onClick$onFocus$onBl,"onMouseMove","mousemove"),_defineProperty(_onClick$onFocus$onBl,"onMouseEnter","mouseenter"),_defineProperty(_onClick$onFocus$onBl,"onMouseOver","mouseover"),_defineProperty(_onClick$onFocus$onBl,"onMouseOut","mouseout"),_defineProperty(_onClick$onFocus$onBl,"onMouseLeave","mouseleave"),_defineProperty(_onClick$onFocus$onBl,"onTouchStart","touchstart"),_defineProperty(_onClick$onFocus$onBl,"onTouchEnd","touchend"),_defineProperty(_onClick$onFocus$onBl,"onTouchCancel","touchcancel"),_defineProperty(_onClick$onFocus$onBl,"onContextMenu","Ccntextmenu"),_defineProperty(_onClick$onFocus$onBl,"onDoubleClick","dblclick"),_defineProperty(_onClick$onFocus$onBl,"onDrag","drag"),_defineProperty(_onClick$onFocus$onBl,"onDragEnd","dragend"),_defineProperty(_onClick$onFocus$onBl,"onDragEnter","dragenter"),_defineProperty(_onClick$onFocus$onBl,"onDragExit","dragexit"),_defineProperty(_onClick$onFocus$onBl,"onDragLeave","dragleave"),_defineProperty(_onClick$onFocus$onBl,"onDragOver","dragover"),_defineProperty(_onClick$onFocus$onBl,"onDragStart","Dragstart"),_defineProperty(_onClick$onFocus$onBl,"onDrop","drop"),_defineProperty(_onClick$onFocus$onBl,"onLoad","load"),_defineProperty(_onClick$onFocus$onBl,"onCopy","copy"),_defineProperty(_onClick$onFocus$onBl,"onCut","cut"),_defineProperty(_onClick$onFocus$onBl,"onPaste","paste"),_defineProperty(_onClick$onFocus$onBl,"onCompositionEnd","compositionend"),_defineProperty(_onClick$onFocus$onBl,"onCompositionStart","compositionstart"),_defineProperty(_onClick$onFocus$onBl,"onCompositionUpdate","compositionupdate"),_defineProperty(_onClick$onFocus$onBl,"onKeyDown","keydown"),_defineProperty(_onClick$onFocus$onBl,"onKeyPress","keypress"),_defineProperty(_onClick$onFocus$onBl,"onKeyUp","keyup"),_defineProperty(_onClick$onFocus$onBl,"onAbort","Abort"),_defineProperty(_onClick$onFocus$onBl,"onCanPlay","canplay"),_defineProperty(_onClick$onFocus$onBl,"onCanPlayThrough","canplaythrough"),_defineProperty(_onClick$onFocus$onBl,"onDurationChange","durationchange"),_defineProperty(_onClick$onFocus$onBl,"onEmptied","emptied"),_defineProperty(_onClick$onFocus$onBl,"onEncrypted","encrypted "),_defineProperty(_onClick$onFocus$onBl,"onEnded","ended"),_defineProperty(_onClick$onFocus$onBl,"onError","error"),_defineProperty(_onClick$onFocus$onBl,"onLoadedData","loadeddata"),_defineProperty(_onClick$onFocus$onBl,"onLoadedMetadata","loadedmetadata"),_defineProperty(_onClick$onFocus$onBl,"onLoadStart","Loadstart"),_defineProperty(_onClick$onFocus$onBl,"onPause","pause"),_defineProperty(_onClick$onFocus$onBl,"onPlay","play "),_defineProperty(_onClick$onFocus$onBl,"onPlaying","playing"),_defineProperty(_onClick$onFocus$onBl,"onProgress","progress"),_defineProperty(_onClick$onFocus$onBl,"onRateChange","ratechange"),_defineProperty(_onClick$onFocus$onBl,"onSeeked","seeked"),_defineProperty(_onClick$onFocus$onBl,"onSeeking","seeking"),_defineProperty(_onClick$onFocus$onBl,"onStalled","stalled"),_defineProperty(_onClick$onFocus$onBl,"onSuspend","suspend "),_defineProperty(_onClick$onFocus$onBl,"onTimeUpdate","timeupdate"),_defineProperty(_onClick$onFocus$onBl,"onVolumeChange","volumechange"),_defineProperty(_onClick$onFocus$onBl,"onWaiting","waiting"),_defineProperty(_onClick$onFocus$onBl,"onAnimationStart","animationstart"),_defineProperty(_onClick$onFocus$onBl,"onAnimationEnd","animationend"),_defineProperty(_onClick$onFocus$onBl,"onAnimationIteration","animationiteration"),_defineProperty(_onClick$onFocus$onBl,"onTransitionEnd","transitionend"),_onClick$onFocus$onBl);

},{}],8:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={accessKey:"accesskey",className:"class",contentEditable:"contenteditable",contextMenu:"contextmenu",dir:"dir",draggable:"draggable",dropZone:"dropzone",hidden:"hidden",id:"id",itemId:"itemid",itemProp:"itemprop",itemRef:"itemref",itemScope:"itemscope",itemType:"itemtype",lang:"lang",spellCheck:"spellcheck",tabIndex:"tabindex",title:"title",translate:"translate"};

},{}],9:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={a:{name:"a",attributes:{download:"download",href:"href",hrefLang:"hreflang",ping:"ping",referrerPolicy:"referrerpolicy",rel:"rel",target:"target",type:"type"}},abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:{name:"audio",attributes:{autoPlay:"autoplay",autoBuffer:"autobuffer",buffered:"buffered",controls:"controls",loop:"loop",muted:"muted",played:"played",preload:"preload",src:"src",volume:"volume"}},blockquote:"blockquote",b:"b",base:"base",bdi:"bdi",bdo:"bdo",br:"br",button:{name:"button",attributes:{autoFocus:"autofocus",disabled:"disabled",form:"form",formAction:"formaction",formMethod:"formmethod",formType:"formtype",formValidate:"formvalidate",formTarget:"formtarget",type:"type",value:"value"}},canvas:{name:"canvas",attributes:{height:"height",width:"width"}},caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:{name:"data",attributes:{value:"value"}},datalist:"datalist",dfn:"dfn",div:"div",dd:"dd",del:"del",details:{name:"details",attributes:{open:"open"}},dl:"dl",dt:"dt",em:"em",embed:{name:"embed",attributes:{height:"height",src:"src",type:"type",width:"width"}},fieldset:{name:"fieldset",attributes:{disabled:"disabled",form:"form",name:"name"}},figcaption:"figcaption",figure:"figure",footer:"footer",form:{name:"form",attributes:{acceptCharset:"accept-charset",action:"action",autocomplete:"autocomplete",enctype:"enctype",method:"method",name:"name",noValidate:"novalidate",target:"target"}},h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",i:"i",input:{name:"input",attributes:{accept:"accept",autoFocus:"autofocus",autoComplete:"autocomplete",checked:"checked",disabled:"disabled",form:"form",formAction:"formaction",formMethod:"formmethod",formType:"formtype",formValidate:"formvalidate",formTarget:"formtarget",height:"height",list:"list",max:"max",maxLength:"maxlength",min:"min",minLength:"minlength",multiple:"multiple",name:"name",placeholder:"placeholder",readOnly:"readonly",required:"required",size:"size",src:"src",step:"step",type:"type",value:"value",width:"width"}},img:{name:"img",attributes:{alt:"alt",crossOrigin:"crossorigin",height:"height",isMap:"ismap",longDesc:"longdesc",referrerPolicy:"referrerpolicy",sizes:"sizes",src:"src",srcset:"srcset",width:"width",useMap:"usemap"}},ins:"ins",kbd:"kbd",label:{name:"label",attributes:{htmlFor:"for"}},legend:"legend",li:"li",link:"link",main:"main",map:{name:"map",attributes:{name:"name"}},mark:"mark",meta:"meta",meter:{name:"meter",attributes:{form:"form",high:"high",low:"low",min:"min",max:"max",optimum:"optimum",value:"value"}},nav:"nav",ol:"ol",object:{name:"object",attributes:{form:"form",height:"height",name:"name",type:"type",typeMustmatch:"typemustmatch",useMap:"usemap",width:"width"}},optgroup:{name:"optgroup",attributes:{disabled:"disabled",label:"label"}},option:{name:"option",attributes:{disabled:"disabled",label:"label",selected:"selected",value:"value"}},output:{name:"output",attributes:{htmlFor:"for",form:"form",name:"name"}},p:"p",param:{name:"param",attributes:{name:"name",value:"value"}},pre:"pre",progress:{name:"progress",attributes:{max:"max",value:"value"}},rp:"rp",rt:"rt",rtc:"rtc",ruby:"ruby",s:"s",samp:"samp",section:"section",select:{name:"select",attributes:{autoFocus:"autofocus",disabled:"disabled",form:"form",multiple:"multiple",name:"name",required:"required",size:"size"}},small:"small",source:{name:"source",attributes:{media:"media",sizes:"sizes",src:"src",srcset:"srcset",type:"type"}},span:"span",strong:"strong",style:"style",sub:"sub",sup:"sup",table:"table",tbody:"tbody",th:"th",thead:"thead",textarea:{name:"textarea",attributes:{autoComplete:"autocomplete",autoFocus:"autofocus",cols:"cols",disabled:"disabled",form:"form",maxLength:"maxlength",minLength:"minlength",name:"name",placeholder:"placeholder",readOnly:"readonly",required:"required",rows:"rows",selectionDirection:"selectionDirection",wrap:"wrap"}},td:"td",tfoot:"tfoot",tr:"tr",track:{name:"track",attributes:{htmlDefault:"default",kind:"kind",label:"label",src:"src",srclang:"srclang"}},time:"time",title:"title",u:"u",ul:"ul",video:{name:"video",attributes:{autoPlay:"autoplay",buffered:"buffered",controls:"controls",crossOrigin:"crossorigin",height:"height",loop:"loop",muted:"muted",played:"played",poster:"poster",preload:"preload",src:"src",width:"width"}}};

},{}],10:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":"undefined"==typeof e?"undefined":_typeof2(e)},_cssProperties=require("../maps/css-properties"),_cssProperties2=_interopRequireDefault(_cssProperties),transformStyle=function(e,t){if("number"==typeof t){var o=_cssProperties2.default[e];return o&&"unit"in o?""+t+o.unit:t}if("string"==typeof t)return t;throw new Error('Expected "number" or "string" but received "'+("undefined"==typeof t?"undefined":_typeof(t))+'"')};exports.default=transformStyle;

},{"../maps/css-properties":6}]},{},[1]);
