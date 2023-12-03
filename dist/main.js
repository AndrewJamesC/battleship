/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={28:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(81),o=r.n(n),a=r(645),c=r.n(a),i=r(667),s=r.n(i),l=new URL(r(868),r.b),u=new URL(r(594),r.b),d=c()(o()),f=s()(l),h=s()(u);d.push([t.id,`@font-face {\n  font-family: Ftyoverkillironcladnc-1Lj4;\n  src: url(${f});\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: url(${h});\n  background-repeat: no-repeat, repeat;\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n  color: white;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(6, 6, 59);\n  height: 10%;\n}\n\nh1 {\n  font-family: "Ftyoverkillironcladnc-1Lj4", "Franklin Gothic Medium",\n    "Arial Narrow", Arial, sans-serif;\n  color: #000;\n  background: linear-gradient(\n    45deg,\n    #999 5%,\n    #fff 10%,\n    #ccc 30%,\n    #ddd 50%,\n    #ccc 70%,\n    #fff 80%,\n    #999 95%\n  );\n  font-size: 50px;\n  padding: 10px 45px;\n  border-radius: 30%;\n}\n\nmain {\n  height: 90%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.instructions {\n  text-align: center;\n  align-items: center;\n  background: linear-gradient(\n    45deg,\n    #999 5%,\n    #fff 10%,\n    #ccc 30%,\n    #ddd 50%,\n    #ccc 70%,\n    #fff 80%,\n    #999 95%\n  );\n  height: 10%;\n  color: black;\n  font-size: 2.5rem;\n  margin-top: 20px;\n  font-weight: 900;\n}\nh2 {\n  text-align: center;\n  font-size: 2.5rem;\n  margin-bottom: 10px;\n  color: black;\n}\n.game-area-container {\n  border: 1px solid black;\n  display: flex;\n  margin: auto;\n  padding: 0 165px;\n  background: linear-gradient(\n    45deg,\n    #999 5%,\n    #fff 10%,\n    #ccc 30%,\n    #ddd 50%,\n    #ccc 70%,\n    #fff 80%,\n    #999 95%\n  );\n  border-radius: 38%;\n}\nbutton {\n  height: fit-content;\n  margin: auto;\n  font-size: 20px;\n}\n.player-board-container,\n.computer-board-container {\n  height: 580px;\n  width: 500px;\n  margin: 1.5vw 5vw 5vw 5vw;\n}\n\n.row {\n  display: grid;\n  grid-template-columns: repeat(10, 55px);\n  grid-template-rows: 55px;\n  justify-content: center;\n}\n\n.player,\n.computer {\n  background-color: rgba(6, 6, 59, 0.8);\n  border: 3px solid rgba(0, 0, 0, 0.8);\n}\n\n.hover {\n  background-color: #999;\n}\n\n.noPlaceHere {\n  cursor: not-allowed;\n}\n\n.carrier {\n  background-color: black;\n}\n\n.battleship {\n  background-color: chartreuse;\n}\n\n.cruiser {\n  background-color: chocolate;\n}\n\n.submarine {\n  background-color: crimson;\n}\n\n.destroyer {\n  background-color: coral;\n}\n`,""]);const p=d},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<t.length;l++){var u=[].concat(t[l]);n&&c[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},c=[],i=0;i<t.length;i++){var s=t[i],l=n.base?s[0]+n.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=r(d),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=o(h,n);n.byIndex=i,e.splice(i,0,{identifier:d,updater:p,references:1})}c.push(d)}return c}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=r(a[c]);e[i].references--}for(var s=n(t,o),l=0;l<a.length;l++){var u=r(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},868:(t,e,r)=>{t.exports=r.p+"42c5579cb3e0f1693ff9.otf"},594:(t,e,r)=>{t.exports=r.p+"4241f8b10ac1043d32da.jpg"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,r.nc=void 0;var n={};(()=>{r.d(n,{V:()=>et});var t=r(379),e=r.n(t),o=r(795),a=r.n(o),c=r(569),i=r.n(c),s=r(565),l=r.n(s),u=r(216),d=r.n(u),f=r(589),h=r.n(f),p=r(28),y={};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}y.styleTagTransform=h(),y.setAttributes=l(),y.insert=i().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),e()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;const b=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e,this.shipLength=r,this.hits=0}var e,r;return e=t,(r=[{key:"hit",value:function(){this.hits++}},{key:"isSunk",value:function(){return this.shipLength===this.hits}}])&&v(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function L(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===g(o)?o:String(o)),n)}var o}const S=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ships={battleship:new b("battleship",4),carrier:new b("carrier",5),cruiser:new b("cruiser",3),submarine:new b("submarine",3),destroyer:new b("destroyer",2)},this.miss=[]}var e,r;return e=t,r=[{key:"addShips",value:function(t,e,r,n){var o=this.ships[t],a=function(t,e,r){return Array.from({length:(e-t)/r+1},(function(e,n){return t+n*r}))};if("horizontal"===n&&e+o.shipLength<=10&&r<=10){for(var c in this.ships)if(this.ships[c].x||(this.ships[c].x=[]),this.ships[c].y||(this.ships[c].y=[]),this.ships[c].x.some((function(t){return a(e,e+o.shipLength-1,1).includes(t)}))&&this.ships[c].y.includes(r))return void console.log("A ship has already been placed here");o.x=a(e,e+o.shipLength-1,1),o.y=[r]}else if("vertical"===n&&e<=10&&r+o.shipLength<=10){for(var i in this.ships)if(this.ships[i].x||(this.ships[i].x=[]),this.ships[i].y||(this.ships[i].y=[]),this.ships[i].x.includes(e)&&this.ships[i].y.some((function(t){return a(r,r+o.shipLength-1,1).includes(t)})))return void console.log("A ship has already been placed here");o.x=[e],o.y=a(r,r+o.shipLength-1,1)}console.log(this.ships)}},{key:"receiveAttack",value:function(t,e){var r=!1;for(var n in this.ships)if(this.ships[n].x.includes(t)&&this.ships[n].y.includes(e)){r=!0,this.ships[n].hit(),this.ships[n].isSunk();break}r||this.miss.push([t,e])}}],r&&L(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,c,i=[],s=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){l=!0,o=t}finally{try{if(!s&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}const q=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playerGameboard=e,this.computerGameboard=r,this.attackedLocation=[]}var e,r;return e=t,(r=[{key:"computerAttack",value:function(){function t(){return{x:Math.floor(10*Math.random())+1,y:Math.floor(10*Math.random())+1}}for(var e=t(),r=e.x,n=e.y;this.attackedLocation.some((function(t){var e=P(t,2),o=e[0],a=e[1];return o===r&&a===n}));){var o=t();r=o.x,n=o.y}this.attackedLocation.push([r,n]),this.playerGameboard.receiveAttack(r,n)}},{key:"playerAttack",value:function(t,e){this.attackedLocation.some((function(r){var n=P(r,2),o=n[0],a=n[1];return o===t&&a===e}))?console.log("Choose new co-ordinates"):(this.attackedLocation.push([t,e]),this.computerGameboard.receiveAttack(t,e))}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var j=et();function N(t){var e=E(document.querySelectorAll(".player")),r=document.querySelector(".direction-btn");function n(t){var e=Number(t.target.id.slice(1).split("-")[0]),n=Number(t.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r){if(r<=9){t.classList.add("hover");var n="".concat(e,"-").concat(r+1);document.querySelector("#P".concat(n)).classList.add("hover")}else r>9&&t.classList.add("noPlaceHere")}(t.target,e,n):function(t,e,r){if(e<=9){t.classList.add("hover");var n="".concat(e+1,"-").concat(r);document.querySelector("#P".concat(n)).classList.add("hover")}else e>9&&t.classList.add("noPlaceHere")}(t.target,e,n)}function o(t){var e=Number(t.target.id.slice(1).split("-")[0]),r=Number(t.target.id.split("-")[1]);t.target.classList.remove("hover","noPlaceHere");for(var n=1;n<=1;n++){var o="P".concat(e+n,"-").concat(r),a=document.querySelector("#".concat(o));a&&a.classList.remove("hover");var c="P".concat(e,"-").concat(r+n),i=document.querySelector("#".concat(c));i&&i.classList.remove("hover")}}function a(e){var n=Number(e.target.id.slice(1).split("-")[0]),o=Number(e.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r,n){if(r<=9){t.classList.add("destroyer");var o="".concat(e,"-").concat(r+1);document.querySelector("#P".concat(o)).classList.add("destroyer"),n.addShips("destroyer",e,r,"vertical"),O()}}(e.target,n,o,t):function(t,e,r,n){if(e<=9){t.classList.add("destroyer");var o="".concat(e+1,"-").concat(r);document.querySelector("#P".concat(o)).classList.add("destroyer"),n.addShips("destroyer",e,r,"horizontal"),O()}}(e.target,n,o,t)}e.forEach((function(t){t.addEventListener("mouseover",n),t.addEventListener("mouseout",o),t.addEventListener("click",a)})),r.hasAttribute("data-listener-attached")||(r.addEventListener("click",(function(){r.classList.toggle("vertical")})),r.setAttribute("data-listener-attached",!0))}function O(){E(document.querySelectorAll(".player")).forEach((function(t){t.replaceWith(t.cloneNode(!0))}))}function T(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}j.playerGameboard,j.computerGameboard,j.humanPlayer,j.computerPlayer;var G=et();function M(t){var e=T(document.querySelectorAll(".player")),r=document.querySelector(".direction-btn");function n(t){var e=Number(t.target.id.slice(1).split("-")[0]),n=Number(t.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r){if(r<=8){t.classList.add("hover");var n="".concat(e,"-").concat(r+1),o="".concat(e,"-").concat(r+2);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover")}else r>8&&t.classList.add("noPlaceHere")}(t.target,e,n):function(t,e,r){if(e<=8){t.classList.add("hover");var n="".concat(e+1,"-").concat(r),o="".concat(e+2,"-").concat(r);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover")}else e>8&&t.classList.add("noPlaceHere")}(t.target,e,n)}function o(t){var e=Number(t.target.id.slice(1).split("-")[0]),r=Number(t.target.id.split("-")[1]);t.target.classList.remove("hover","noPlaceHere");for(var n=1;n<=2;n++){var o="P".concat(e+n,"-").concat(r),a=document.querySelector("#".concat(o));a&&a.classList.remove("hover");var c="P".concat(e,"-").concat(r+n),i=document.querySelector("#".concat(c));i&&i.classList.remove("hover")}}function a(e){var n=Number(e.target.id.slice(1).split("-")[0]),o=Number(e.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r,n){if(r<=7){t.classList.add("submarine");var o="".concat(e,"-").concat(r+1),a="".concat(e,"-").concat(r+2);document.querySelector("#P".concat(o)).classList.add("submarine"),document.querySelector("#P".concat(a)).classList.add("submarine"),n.addShips("submarine",e,r,"vertical"),_(),N(n)}}(e.target,n,o,t):function(t,e,r,n){if(e<=8){t.classList.add("submarine");var o="".concat(e+1,"-").concat(r),a="".concat(e+2,"-").concat(r);document.querySelector("#P".concat(o)).classList.add("submarine"),document.querySelector("#P".concat(a)).classList.add("submarine"),n.addShips("submarine",e,r,"horizontal"),_(),N(n)}}(e.target,n,o,t)}e.forEach((function(t){t.addEventListener("mouseover",n),t.addEventListener("mouseout",o),t.addEventListener("click",a)})),r.hasAttribute("data-listener-attached")||(r.addEventListener("click",(function(){r.classList.toggle("vertical")})),r.setAttribute("data-listener-attached",!0))}function _(){T(document.querySelectorAll(".player")).forEach((function(t){t.replaceWith(t.cloneNode(!0))}))}function C(t){return function(t){if(Array.isArray(t))return H(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}G.playerGameboard,G.computerGameboard,G.humanPlayer,G.computerPlayer;var z=et();function $(t){var e=C(document.querySelectorAll(".player")),r=document.querySelector(".direction-btn");function n(t){var e=Number(t.target.id.slice(1).split("-")[0]),n=Number(t.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r){if(r<=8){t.classList.add("hover");var n="".concat(e,"-").concat(r+1),o="".concat(e,"-").concat(r+2);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover")}else r>8&&t.classList.add("noPlaceHere")}(t.target,e,n):function(t,e,r){if(e<=8){t.classList.add("hover");var n="".concat(e+1,"-").concat(r),o="".concat(e+2,"-").concat(r);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover")}else e>8&&t.classList.add("noPlaceHere")}(t.target,e,n)}function o(t){var e=Number(t.target.id.slice(1).split("-")[0]),r=Number(t.target.id.split("-")[1]);t.target.classList.remove("hover","noPlaceHere");for(var n=1;n<=2;n++){var o="P".concat(e+n,"-").concat(r),a=document.querySelector("#".concat(o));a&&a.classList.remove("hover");var c="P".concat(e,"-").concat(r+n),i=document.querySelector("#".concat(c));i&&i.classList.remove("hover")}}function a(e){var n=Number(e.target.id.slice(1).split("-")[0]),o=Number(e.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r,n){if(r<=8){t.classList.add("cruiser");var o="".concat(e,"-").concat(r+1),a="".concat(e,"-").concat(r+2);document.querySelector("#P".concat(o)).classList.add("cruiser"),document.querySelector("#P".concat(a)).classList.add("cruiser"),n.addShips("cruiser",e,r,"vertical"),F(),M(n)}}(e.target,n,o,t):function(t,e,r,n){if(e<=8){t.classList.add("cruiser");var o="".concat(e+1,"-").concat(r),a="".concat(e+2,"-").concat(r);document.querySelector("#P".concat(o)).classList.add("cruiser"),document.querySelector("#P".concat(a)).classList.add("cruiser"),n.addShips("cruiser",e,r,"horizontal"),F(),M(n)}}(e.target,n,o,t)}e.forEach((function(t){t.addEventListener("mouseover",n),t.addEventListener("mouseout",o),t.addEventListener("click",a)})),r.hasAttribute("data-listener-attached")||(r.addEventListener("click",(function(){r.classList.toggle("vertical")})),r.setAttribute("data-listener-attached",!0))}function F(){C(document.querySelectorAll(".player")).forEach((function(t){t.replaceWith(t.cloneNode(!0))}))}function U(t){return function(t){if(Array.isArray(t))return R(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return R(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}z.playerGameboard,z.computerGameboard,z.humanPlayer,z.computerPlayer;var W=et();function Z(t){var e=U(document.querySelectorAll(".player")),r=document.querySelector(".direction-btn");function n(t){var e=Number(t.target.id.slice(1).split("-")[0]),n=Number(t.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r){if(r<=7){t.classList.add("hover");var n="".concat(e,"-").concat(r+1),o="".concat(e,"-").concat(r+2),a="".concat(e,"-").concat(r+3);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover"),document.querySelector("#P".concat(a)).classList.add("hover")}else r>7&&t.classList.add("noPlaceHere")}(t.target,e,n):function(t,e,r){if(e<=7){t.classList.add("hover");var n="".concat(e+1,"-").concat(r),o="".concat(e+2,"-").concat(r),a="".concat(e+3,"-").concat(r);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover"),document.querySelector("#P".concat(a)).classList.add("hover")}else e>7&&t.classList.add("noPlaceHere")}(t.target,e,n)}function o(t){var e=Number(t.target.id.slice(1).split("-")[0]),r=Number(t.target.id.split("-")[1]);t.target.classList.remove("hover","noPlaceHere");for(var n=1;n<=3;n++){var o="P".concat(e+n,"-").concat(r),a=document.querySelector("#".concat(o));a&&a.classList.remove("hover");var c="P".concat(e,"-").concat(r+n),i=document.querySelector("#".concat(c));i&&i.classList.remove("hover")}}function a(e){var n=Number(e.target.id.slice(1).split("-")[0]),o=Number(e.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r,n){if(r<=7){t.classList.add("battleship");var o="".concat(e,"-").concat(r+1),a="".concat(e,"-").concat(r+2),c="".concat(e,"-").concat(r+3);document.querySelector("#P".concat(o)).classList.add("battleship"),document.querySelector("#P".concat(a)).classList.add("battleship"),document.querySelector("#P".concat(c)).classList.add("battleship"),n.addShips("battleship",e,r,"vertical"),Y(),$(n)}}(e.target,n,o,t):function(t,e,r,n){if(e<=7){t.classList.add("battleship");var o="".concat(e+1,"-").concat(r),a="".concat(e+2,"-").concat(r),c="".concat(e+3,"-").concat(r);document.querySelector("#P".concat(o)).classList.add("battleship"),document.querySelector("#P".concat(a)).classList.add("battleship"),document.querySelector("#P".concat(c)).classList.add("battleship"),n.addShips("battleship",e,r,"horizontal"),Y(),$(n)}}(e.target,n,o,t)}e.forEach((function(t){t.addEventListener("mouseover",n),t.addEventListener("mouseout",o),t.addEventListener("click",a)})),r.hasAttribute("data-listener-attached")||(r.addEventListener("click",(function(){r.classList.toggle("vertical")})),r.setAttribute("data-listener-attached",!0))}function Y(){U(document.querySelectorAll(".player")).forEach((function(t){t.replaceWith(t.cloneNode(!0))}))}function B(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}W.playerGameboard,W.computerGameboard,W.humanPlayer,W.computerPlayer;var J=et();function Q(t){var e=B(document.querySelectorAll(".player")),r=document.querySelector(".direction-btn");function n(t){var e=Number(t.target.id.slice(1).split("-")[0]),n=Number(t.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r){if(r<=6){t.classList.add("hover");var n="".concat(e,"-").concat(r+1),o="".concat(e,"-").concat(r+2),a="".concat(e,"-").concat(r+3),c="".concat(e,"-").concat(r+4);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover"),document.querySelector("#P".concat(a)).classList.add("hover"),document.querySelector("#P".concat(c)).classList.add("hover")}else r>6&&t.classList.add("noPlaceHere")}(t.target,e,n):function(t,e,r){if(e<=6){t.classList.add("hover");var n="".concat(e+1,"-").concat(r),o="".concat(e+2,"-").concat(r),a="".concat(e+3,"-").concat(r),c="".concat(e+4,"-").concat(r);document.querySelector("#P".concat(n)).classList.add("hover"),document.querySelector("#P".concat(o)).classList.add("hover"),document.querySelector("#P".concat(a)).classList.add("hover"),document.querySelector("#P".concat(c)).classList.add("hover")}else e>6&&t.classList.add("noPlaceHere")}(t.target,e,n)}function o(t){var e=Number(t.target.id.slice(1).split("-")[0]),r=Number(t.target.id.split("-")[1]);t.target.classList.remove("hover","noPlaceHere");for(var n=1;n<=4;n++){var o="P".concat(e+n,"-").concat(r),a=document.querySelector("#".concat(o));a&&a.classList.remove("hover");var c="P".concat(e,"-").concat(r+n),i=document.querySelector("#".concat(c));i&&i.classList.remove("hover")}}function a(e){var n=Number(e.target.id.slice(1).split("-")[0]),o=Number(e.target.id.split("-")[1]);r.classList.contains("vertical")?function(t,e,r,n){if(r<=6){t.classList.add("carrier");var o="".concat(e,"-").concat(r+1),a="".concat(e,"-").concat(r+2),c="".concat(e,"-").concat(r+3),i="".concat(e,"-").concat(r+4);document.querySelector("#P".concat(o)).classList.add("carrier"),document.querySelector("#P".concat(a)).classList.add("carrier"),document.querySelector("#P".concat(c)).classList.add("carrier"),document.querySelector("#P".concat(i)).classList.add("carrier"),n.addShips("carrier",e,r,"vertical"),V(),Z(n)}}(e.target,n,o,t):function(t,e,r,n){if(e<=6){t.classList.add("carrier");var o="".concat(e+1,"-").concat(r),a="".concat(e+2,"-").concat(r),c="".concat(e+3,"-").concat(r),i="".concat(e+4,"-").concat(r);document.querySelector("#P".concat(o)).classList.add("carrier"),document.querySelector("#P".concat(a)).classList.add("carrier"),document.querySelector("#P".concat(c)).classList.add("carrier"),document.querySelector("#P".concat(i)).classList.add("carrier"),n.addShips("carrier",e,r,"horizontal"),V(),Z(n)}}(e.target,n,o,t)}e.forEach((function(t){t.addEventListener("mouseover",n),t.addEventListener("mouseout",o),t.addEventListener("click",a)})),r.hasAttribute("data-listener-attached")||(r.addEventListener("click",(function(){r.classList.toggle("vertical")})),r.setAttribute("data-listener-attached",!0))}function V(){var t=document.querySelector(".direction-btn");t.removeEventListener("click",(function(){t.classList.toggle("vertical")})),B(document.querySelectorAll(".player")).forEach((function(t){t.replaceWith(t.cloneNode(!0))}))}function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function X(){X=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,c=Object.create(a.prototype),i=new N(n||[]);return o(c,"_invoke",{value:q(t,r,i)}),c}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",m={};function v(){}function b(){}function g(){}var L={};l(L,c,(function(){return this}));var S=Object.getPrototypeOf,w=S&&S(S(O([])));w&&w!==r&&n.call(w,c)&&(L=w);var P=g.prototype=v.prototype=Object.create(L);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,c,i){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==K(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(u).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function q(e,r,n){var o=f;return function(a,c){if(o===p)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw c;return{value:t,done:!0}}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var s=E(i,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var l=d(e,r,n);if("normal"===l.type){if(o=n.done?y:h,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function E(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var c=a.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(K(e)+" is not iterable")}return b.prototype=g,o(P,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=l(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},A(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new x(u(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},A(P),l(P,s,"Generator"),l(P,c,(function(){return this})),l(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function tt(t,e,r,n,o,a,c){try{var i=t[a](c),s=i.value}catch(t){return void r(t)}i.done?e(s):Promise.resolve(s).then(n,o)}function et(){return rt.apply(this,arguments)}function rt(){var t;return t=X().mark((function t(){var e,r,n,o;return X().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new S,r=new S,n=new q(e,r),o=new q(e,r),Q(e),t.abrupt("return",{playerGameboard:e,computerGameboard:r,humanPlayer:n,computerPlayer:o});case 6:case"end":return t.stop()}}),t)})),rt=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){tt(a,n,o,c,i,"next",t)}function i(t){tt(a,n,o,c,i,"throw",t)}c(void 0)}))},rt.apply(this,arguments)}J.playerGameboard,J.computerGameboard,J.humanPlayer,J.computerPlayer})()})();