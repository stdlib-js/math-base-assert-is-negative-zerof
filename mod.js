// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o,a="function"==typeof Symbol?Symbol:void 0,e="function"==typeof a?a.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,f,y,i;if(null==t)return r.call(t);a=t[e],i=e,o=null!=(y=t)&&n.call(y,i);try{t[e]=void 0}catch(n){return r.call(t)}return f=r.call(t),o?t[e]=a:delete t[e],f}:function(t){return r.call(t)};var f=o,y="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var u=function(){var t,r,n;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,5e40]),n=r,t=(y&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===i}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")},p="function"==typeof Uint32Array;var v="function"==typeof Uint32Array?Uint32Array:null;var A="function"==typeof Uint32Array?Uint32Array:void 0;var b=function(){var t,r,n;if("function"!=typeof v)return!1;try{r=new v(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(p&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?A:function(){throw new Error("not implemented")},m=new u(1);new b(m.buffer)[0]=4286578688;var w=m[0];function S(t){return 0===t&&1/t===w}export{S as default};
//# sourceMappingURL=mod.js.map
