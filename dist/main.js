!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";var o=n(2),i=n.n(o)()((function(e){return e[1]}));i.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap);"]),i.push([e.i,'*{margin:0;padding:0;box-sizing:border-box}html,body{font-family:"Poppins", sans-serif;font-size:20px;font-weight:200}h1,h2,h3,h4,h5,h6{font-weight:300;text-align:center;margin:0}p{margin:0}h1{font-size:2.4rem}h2{font-size:2.2rem}h3{font-size:2rem}h4{font-size:1.8rem}h5{font-size:1.6rem}h6{font-size:1.2rem}.noselect{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}header{background-color:#ef5350;color:white;display:flex;align-items:center;justify-content:center;gap:15px;box-shadow:0 2px 4px rgba(22,22,22,0.363),0 5px 10px rgba(54,54,54,0.212);position:fixed;width:100vw;padding:15px 15px 20px 15px;z-index:100}#logo{filter:drop-shadow(2px 5px rgba(22,22,22,0.363))}#type-filters{white-space:nowrap;overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}#type-filters::-webkit-scrollbar{display:none}.type-filter{cursor:pointer;font-size:20px;border-radius:50px}main{width:100vw;padding-top:160px}.my-card{cursor:zoom-in;border-radius:20px}.my-card:hover{box-shadow:0 2px 4px rgba(32,32,32,0.11),0 5px 15px rgba(151,151,151,0.26)}.my-title{margin:0}.secondary-text{color:#a5a5a5}.type{border-radius:50px;font-size:0.7rem}.my-modal-body{-ms-overflow-style:none;scrollbar-width:none}.my-modal-body::-webkit-scrollbar{display:none}.bg{background-repeat:no-repeat;background-size:cover;background-position:center bottom;border-radius:5px;padding:2.5rem;margin-bottom:25px}.bg-land{background-image:url(https://cutewallpaper.org/21/pokemon-grass-background/Pokemon-forest-by-BlazingIfrit-Fur-Affinity-dot-net.jpg)}.bg-water{background-image:url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83ohf3-7f911e73-0d36-4f31-94f9-e620fd0163c6.png/v1/fill/w_800,h_480,q_80,strp/pokemon_x_and_y_battle_background_4_by_phoenixoflight92_d83ohf3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00ODAiLCJwYXRoIjoiXC9mXC8yZmIyODIxYS0xNDA2LTRhMWQtOWIwNC02NjY4ZjI3OGU5NDRcL2Q4M29oZjMtN2Y5MTFlNzMtMGQzNi00ZjMxLTk0ZjktZTYyMGZkMDE2M2M2LnBuZyIsIndpZHRoIjoiPD04MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.R69jPvW1dAKWyHhWFt4On559i5z54sO7Kco6ddrThuE)}.bg-sky{background-image:url(https://cutewallpaper.org/21/pokemon-sky-background/vp-Pokemon-Thread-35278085.png)}.bg-ground{background-image:url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83tnmo-b19278a2-4c9e-40ed-a230-4f7a00435824.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmZiMjgyMWEtMTQwNi00YTFkLTliMDQtNjY2OGYyNzhlOTQ0XC9kODN0bm1vLWIxOTI3OGEyLTRjOWUtNDBlZC1hMjMwLTRmN2EwMDQzNTgyNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.OdMc6eA-jxSZrPoOXBT6_3kWqqI0dg2bhC6ZbwdDQeY)}.bg-ice{background-image:url(https://pbs.twimg.com/media/CPr1FQiWIAAAAQ7.jpg:large)}#pokemon-detail-image{filter:drop-shadow(0px 15px 12px rgba(0,0,0,0.836))}#scroll-top{position:fixed;bottom:15px;right:15px;display:flex;justify-content:center;align-items:center;width:70px;height:70px;border-radius:50%;background-color:#e96b69;box-shadow:0 2px 4px rgba(41,41,41,0.356),0 5px 10px rgba(77,77,77,0.226);transition:all 0.25s ease-in-out;cursor:pointer;z-index:99}#scroll-top:hover{background-color:#ef5350;animation-name:float;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}#scroll-top-icon{font-size:2rem;color:white}.hide{display:none;visibility:hidden;opacity:0}.float{animation-name:float;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}@keyframes float{0%{transform:translateY(0px)}25%{transform:translateY(-3px)}50%{transform:translateY(0px)}75%{transform:translateY(3px)}100%{transform:translateY(0px)}}@media all and (max-width: 1199px){html,body{font-size:20px}}@media all and (max-width: 991px){html,body{font-size:18px}}@media all and (max-width: 768px){html,body{font-size:18px}#logo{height:90px}main{padding-top:150px}}@media all and (max-width: 575px){html,body{font-size:16px}header{flex-direction:column;gap:0}#logo{height:80px}main{padding-top:140px}.type{font-size:20px}}\n',""]),t.a=i},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=s(d),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:b(u,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function b(e,t){var n,o,i;if(t.singleton){var r=h++;n=m||(m=c(t)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=c(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=l(e,t),c=0;c<n.length;c++){var d=s(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=r}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),r=n(0),a={insert:"head",singleton:!1};i()(r.a,a),r.a.locals}]);