!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){var o=n(5),r=n(6),a=3;function i(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(r(e,t),function(e,t){for(var n,o,r,a,c=0,s=0;n=t.childNodes[s],o=e.childNodes[s-c],n||o;s++)if(o)if(n)if(u(o,n))(r=i(o,n))!==n&&(t.replaceChild(r,n),c++);else{a=null;for(var l=s;l<t.childNodes.length;l++)if(u(t.childNodes[l],o)){a=t.childNodes[l];break}a?((r=i(o,a))!==a&&c++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),c++):(r=i(o,n))!==n&&(t.replaceChild(r,n),c++)}else t.appendChild(o),c++;else t.removeChild(n),s--}(e,t),t):null:e}function u(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===a&&e.nodeValue===t.nodeValue)}e.exports=function(e,t){return o.equal(typeof e,"object","nanomorph: oldTree should be an object"),o.equal(typeof t,"object","nanomorph: newTree should be an object"),i(t,e)}},function(e,t){e.exports=function(e,t){return"\n    <li id='".concat(e.id,"' class='grid__photo rel'>\n      <img class='x y fill z0' src='").concat(e.images.placeholder,"' data-src='").concat(e.images.display,"' />\n      <a href='/photos/").concat(e.id,"' class='abs fill z1'></a>\n    </li>\n  ")}},function(e,t,n){},,,function(e,t){function n(e,t){if(!e)throw new Error(t||"AssertionError")}n.notEqual=function(e,t,o){n(e!=t,o)},n.notOk=function(e,t){n(!e,t)},n.equal=function(e,t,o){n(e==t,o)},n.ok=n,e.exports=n},function(e,t,n){var o=n(7),r=o.length,a=1,i=3,u=8;function c(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}e.exports=function(e,t){var n=e.nodeType,s=e.nodeName;n===a&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,a=null,i=null,u=null,c=o.length-1;c>=0;--c)u=o[c],i=u.name,r=u.namespaceURI,a=u.value,r?(i=u.localName||i,t.getAttributeNS(r,i)!==a&&t.setAttributeNS(r,i,a)):t.hasAttribute(i)?t.getAttribute(i)!==a&&("null"===a||"undefined"===a?t.removeAttribute(i):t.setAttribute(i,a)):t.setAttribute(i,a);for(var s=n.length-1;s>=0;--s)!1!==(u=n[s]).specified&&(i=u.name,(r=u.namespaceURI)?(i=u.localName||i,e.hasAttributeNS(r,i)||t.removeAttributeNS(r,i)):e.hasAttributeNS(null,i)||t.removeAttribute(i))}(e,t);n!==i&&n!==u||t.nodeValue!==e.nodeValue&&(t.nodeValue=e.nodeValue);"INPUT"===s?function(e,t){var n=e.value,o=t.value;c(e,t,"checked"),c(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===s?function(e,t){c(e,t,"selected")}(e,t):"TEXTAREA"===s&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t);!function(e,t){for(var n=0;n<r;n++){var a=o[n];e[a]?t[a]=e[a]:t[a]&&(t[a]=void 0)}}(e,t)}},function(e,t){e.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onmouseenter","onmouseleave","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},function(e,t,n){"use strict";n.r(t);var o="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,o){var r=new XMLHttpRequest;for(var a in r.open(t.method||"get",e,!0),t.headers)r.setRequestHeader(a,t.headers[a]);function i(){var e,t=[],n=[],o={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,a,i){t.push(a=a.toLowerCase()),n.push([a,i]),e=o[a],o[a]=e?e+","+i:i}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:i,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return o[e.toLowerCase()]},has:function(e){return e.toLowerCase()in o}}}}r.withCredentials="include"==t.credentials,r.onload=function(){n(i())},r.onerror=o,r.send(t.body)})};function r(e,t){for(var n=0,o=e.length;n<o;n++)if(!t(e[n],n,e))return!1;return!0}const a="/",[i,u,c,s]=[0,1,2,3],[l,f,d,h]=[47,58,42,63];function p(e){if(e===a)return e;e.charCodeAt(0)===l&&(e=e.substring(1));var t=e.length-1;return e.charCodeAt(t)===l?e.substring(0,t):e}function v(e){return(e=p(e))===a?[a]:e.split(a)}function g(e,t){let n,o,l=v(e),f=l.length,d=0,h=(e,t)=>(function(e,t){return t.val===e&&t.type===i||(e===a?t.type>u:t.type!==i)})(l[t],e);for(;d<t.length;d++)if(((n=(o=t[d]).length)===f||n<f&&o[n-1].type===c||n>f&&o[n-1].type===s)&&r(o,h))return o;return[]}function m(e){if(e===a)return[{old:e,type:i,val:e}];let t,n,o,r=p(e),v=-1,g=0,m=r.length,y=[];for(;++v<m;)if((t=r.charCodeAt(v))!==f)if(t!==d){for(g=v;v<m&&r.charCodeAt(v)!==l;)++v;y.push({old:e,type:i,val:r.substring(g,v)}),r=r.substring(v),m-=v,v=g=0}else y.push({old:e,type:c,val:r.substring(v)});else{for(g=v+1,o=u,n=0;v<m&&r.charCodeAt(v)!==l;)r.charCodeAt(v)===h&&(n=v,o=s),v++;y.push({old:e,type:o,val:r.substring(g,n||v)}),r=r.substring(v),m-=v,v=0}return y}var y=new Map;function b(e){return e.replace(window.location.origin,"")}function w(e,t){var n="",o="",r=e.split(/#|\?/),i=r[0],u=r.slice(1);i=(i=i.replace(/\/$/g,""))||"/";for(var c=0;c<u.length;c++){var l=e.split(u[c])[0];"?"===l[l.length-1]&&(o=u[c]),"#"===l[l.length-1]&&(n=u[c])}var f=g(i,t.map(function(e){return e[1]}));return f[0]?{handler:t.filter(function(e){return e[0]===f[0].old})[0][2],params:function(e,t){let n,o,r=0,i=v(e),u={};for(;r<t.length;r++)o=t[r],(n=i[r])!==a&&void 0!==n&&o.type|2===s&&(u[o.val]=n);return u}(i,f),hash:n,search:o,pathname:i,location:e}:null}function A(e,t,n){return{node:e,actions:t,hydrate:n.hydrate,get state(){return n.state}}}function C(e){return function(t,n,o){var r=e(A(t,n,o))||{};return r.onStateChange&&o.listen(r.onStateChange),r}}n(2);var N,S,x,O,T,E,L,j,k,q=[];function P(e){return S=window.pageXOffset,O=window.pageYOffset,E=window.innerHeight,j=window.innerWidth,O===T&&S===x&&E===L&&j===k||(M(e),x=S,T=O,L=E,k=j),requestAnimationFrame(P)}function M(e){for(var t=0;t<q.length;t++)q[t]({x:S,y:O,px:x,py:T,vh:E,pvh:L,vw:j,pvw:k},e)}var _=function(e,t){return void 0===t&&(t={}),function(n,o){var r,a=!1,i=parseFloat(e.getAttribute("data-vsbl")||t.threshold||0);return q.indexOf(r=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];var u=t[0],c=u.y,s=u.vh,l=e.getBoundingClientRect(),f=l.top+c,d=i*l.height,h=f+l.height-d>=c&&f+d<=c+s;h&&!a?(a=!0,n&&n.apply(void 0,t)):!h&&a&&(a=!1,o&&o.apply(void 0,t))})<0&&q.push(r),N=N||P(performance.now()),M(performance.now()),function(){return q.splice(q.indexOf(r),1)}}};function B(){[].slice.call(document.querySelectorAll("[data-src]")).map(function(e){var t,n=e.getAttribute("data-src");t=_(e)(function(){var o=document.createElement("img");o.onload=function(o){e.src=n,t&&t()},o.src=n})})}function H(e,t){for(var n=[],o=0;o<t.length;o++){var r=t[o][e];n.indexOf(r)<0&&n.push(r)}var a=[];e:for(var i=0;i<n.length;i++)for(var u=0;u<t.length;u++)if(t[u][e]===n[i]){a.push(t[u]);continue e}return a}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=C(function(e){var t,n=e.node,o=(e.state,e.actions),r=R(n.getElementsByTagName("input"),1)[0],a=n.getElementsByTagName("button")[0];function i(){window.history.replaceState({},"",r.value||"/"),t&&clearTimeout(t),t=setTimeout(function(){r.value?o.search(r.value):o.resetSearch()},500)}r.addEventListener("keyup",i),r.addEventListener("change",i),n.addEventListener("submit",function(e){e.preventDefault(),i()}),a.addEventListener("click",function(e){r.value="",i()}),document.addEventListener("keydown",function(e){e.metaKey&&83===e.keyCode&&(e.preventDefault(),r.focus())})}),V=n(0),U=n.n(V),K=n(1),D=n.n(K),F=C(function(e){var t=e.node;e.state,e.actions;return{onStateChange:function(e){var n=e.photos,o=(e.pages,e.page,e.hits,t.cloneNode());o.innerHTML=n.reduce(function(e,t){return e+D()(t)},""),U()(t,o),B()}}});var z=C(function(e){e.node,document.getElementById("menuToggle");document.getElementById("headerBack").onclick=function(e){W.state.hasHistory?window.history.back():Y.go("/")}}),X=C(function(e){var t=e.node,n=e.state,o=e.actions,r=t.getElementsByTagName("button")[0];_(t)(function(){n.page<n.pages&&t.classList.add("is-active")},function(){t.classList.remove("is-active")}),r.addEventListener("click",function(e){t.classList.add("is-loading"),function(e,t){return Promise.all(t.concat(new Promise(function(t){return setTimeout(t,e)}))).then(function(e){return e.slice(0,e.length-1)})}(1e3,[o.loadMore()]).then(function(){t.classList.remove("is-active"),setTimeout(function(){t.classList.remove("is-loading")},800)})})});n.d(t,"app",function(){return W}),n.d(t,"router",function(){return Y});var $={search:I,grid:F,header:z,loadMore:X},J=Object.assign({query:"",page:0,hasHistory:!/about|photos/.test(window.location.pathname)},{photoCache:window.__hydrate.photos||[]},window.__hydrate),W=function(e,t,n){void 0===e&&(e={}),void 0===n&&(n={});var o=[],r=function(e){var t=Object.assign({},e),n=[],o=[];return{get state(){return t},hydrate:function(e){return t=Object.assign({},t,"function"==typeof e?e(t):e),function(e){for(var r=0,a=n;r<a.length;r+=1)(0,a[r])(t);for(;o.length;)o.pop()(t);e&&e()}},listen:function(e){return n.indexOf(e)<0&&n.push(e),function(){return n.splice(n.indexOf(e),1)}},once:function(e){o.indexOf(e)<0&&o.push(e)},reset:function(){t=e},replace:function(e){t=e}}}(t||{}),a=Object.keys(n).reduce(function(e,t){return e[t]=function(e){return Promise.resolve(n[t](e)(r.state)).then(function(e){return r.hydrate(e)()})},e},{});return{actions:a,hydrate:r.hydrate,get state(){return r.state},add:function(t){Object.assign(e,t)},mount:function(t){void 0===t&&(t="data-component"),t=[].concat(t);for(var n=0;n<t.length;n++)for(var i=t[n],u=[].slice.call(document.querySelectorAll("["+i+"]"));u.length;){var c=u.pop(),s=c.getAttribute(i),l=e[s];if(l){c.removeAttribute(i);var f=void 0;try{f=l(c,a,r)}catch(t){console.error("picoapp - "+s+" failed - "+(t.message||t))}f&&o.push(f)}}},unmount:function(){return Promise.all(o.filter(function(e){return e.onUnmount}).map(function(e){var t=e.onUnmount;return Promise.resolve("function"==typeof t?t(A(e.node,a,r)):null)})).then(function(){o=o.filter(function(e){return!e.onUnmount}).filter(function(e){return!document.documentElement.contains(e.node)})})}}}($,J,{search:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return o("".concat(J.api,"/api/v1/search/").concat(e,"?page=").concat(t),{mode:"cors"}).then(function(e){return e.json()}).then(function(e){var t=e.photos,o=e.pages,r=e.hits;return{query:e.query,page:0,photos:t,pages:o,hits:r,photoCache:H("id",n.photoCache.concat(t))}})}},loadMore:function(){return function(e){var t=e.page+1;return e.query?o("".concat(J.api,"/api/v1/search/").concat(query,"?page=").concat(t),{mode:"cors"}).then(function(e){return e.json()}).then(function(n){var o=n.photos,r=n.pages,a=n.hits,i=n.query;return console.log(i),{query:i,page:t,photos:e.photos.concat(o),pages:r,hits:a,photoCache:H("id",e.photoCache.concat(o))}}):o("".concat(J.api,"/api/v1/photos?page=").concat(t),{mode:"cors"}).then(function(e){return e.json()}).then(function(n){var o=n.photos,r=n.pages,a=n.hits;return{query:"",page:t,photos:e.photos.concat(o),pages:r,hits:a,photoCache:H("id",e.photoCache.concat(o))}})}},resetSearch:function(){return function(e){return{page:0,query:"",hits:e.photoCache.length,pages:Math.ceil(e.photoCache.length/24),photos:e.photoCache}}}}),Y=function(e,t){void 0===t&&(t=["*"]);var n,o=document.querySelector(e),r=[],a={};t=t.reduce(function(e,t){return"function"==typeof t?(r.push(t),e):(e.push([].concat(t)),e)},[]).map(function(e){return e.pop?[e[0],m(e[0]),e[1]]:[e,m(e),null]}),"scrollRestoration"in history&&(history.scrollRestoration="manual");var i=w(b(window.location.href),t),u=Object.assign({title:document.title},i);function c(e){return a[e]?a[e].map(function(e){return e(u)}):[]}function s(e,t,n,a){u.title=e.title,Promise.all(r.concat(n.handler||[]).map(function(e){return e(u)})).then(function(){window.scrollTo(0,0),requestAnimationFrame(function(){o.innerHTML=t,c("after")})})}function l(t,n,o){if(!n)return window.location.href=t;fetch(t,{credentials:"include"}).then(function(e){return e.text()}).then(function(r){var a=(new window.DOMParser).parseFromString(r,"text/html"),i=[a,a.querySelector(e).innerHTML];y.set(t,i),o&&o(i[0],i[1],n)})}function f(e,t,o){n=function(){var n=y.get(e);n?s(n[0],n[1],t):l(e,t,s)},u=Object.assign(u,t),Promise.all(c("before")).then(n)}function d(e){var n=b(e);return[n,w(n,t)]}return document.body.addEventListener("click",function(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&(!t.href||"A"!==t.nodeName);)t=t.parentNode;if(t&&window.location.origin===t.origin&&!t.hasAttribute("download")&&"_blank"!==t.target&&!/mailto|tel/.test(t.href)){e.preventDefault();var n=d(t.pathname);return u.location!==n[0]&&f.apply(void 0,n.concat([!1])),!1}}}),window.addEventListener("popstate",function(e){return f.apply(void 0,d(e.target.location.href).concat([!0])),!1}),{get state(){return u},go:function(e){n=null,f.apply(void 0,d(e).concat([!1]))},load:function(e,t){return l.apply(void 0,d(e).concat([t]))},on:function(e,t){return a[e]=a[e]?a[e].concat(t):[t],function(){return a[e].slice(a[e].indexOf(t),1)}}}}("#root");Y.on("after",function(e){window.history.pushState({},"",e.pathname),/about|photos/.test(e.pathname)||W.state.hasHistory||W.hydrate({hasHistory:!0}),/photos\//.test(e.pathname)?document.getElementById("header").classList.add("is-photo-route"):document.getElementById("header").classList.remove("is-photo-route"),W.mount(),B()}),W.mount(),B()}]);
//# sourceMappingURL=client.js.map