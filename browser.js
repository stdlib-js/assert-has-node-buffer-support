// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).hasNodeBufferSupport=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var r,n,u;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(r),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var s=Math.abs,h=String.prototype.toLowerCase,c=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function m(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=l.call(n,b,"$1e"),n=l.call(n,v,"e"),n=l.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),t.alternate&&(n=l.call(n,y,"$1."),n=l.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===c.call(t.specifier)?c.call(n):h.call(n)}function E(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function A(t,r,e){var n=r-t.length;return n<0?t:t=e?t+E(n):E(n)+t}var _=String.fromCharCode,R=isNaN,T=Array.isArray;function P(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function S(t){var r,e,n,o,a,s,h,c,l;if(!T(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",h=1,c=0;c<t.length;c++)if(f(n=t[c]))s+=n;else{if(r=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(h=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[h],10),h+=1,R(n.width))throw new TypeError("the argument for * width at position "+h+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[h],10),h+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+h+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[h],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),s+=n.arg||"",h+=1}return s}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function I(t){var r,e,n,i;for(e=[],i=0,n=U.exec(t);n;)(r=t.slice(i,U.lastIndex-n[0].length)).length&&e.push(r),e.push(B(n)),i=U.lastIndex,n=U.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function Y(t){return"string"==typeof t}function O(t){var r,e,n;if(!Y(t))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=I(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var x,C=Object.prototype,k=C.toString,L=C.__defineGetter__,M=C.__defineSetter__,D=C.__lookupGetter__,j=C.__lookupSetter__;x=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===k.call(e))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(D.call(t,r)||j.call(t,r)?(n=t.__proto__,t.__proto__=C,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(t,r,e.get),a&&M&&M.call(t,r,e.set),t};var F=x;var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var V=Object.prototype.toString;var $=Object.prototype.hasOwnProperty;var z,Z="function"==typeof Symbol?Symbol:void 0,G="function"==typeof Z?Z.toStringTag:"";z=N&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,i,o;if(null==t)return V.call(t);e=t[G],o=G,r=null!=(i=t)&&$.call(i,o);try{t[G]=void 0}catch(r){return V.call(t)}return n=V.call(t),r?t[G]=e:delete t[G],n}:function(t){return V.call(t)};var W,X=z;W=Array.isArray?Array.isArray:function(t){return"[object Array]"===X(t)};var q=W;function J(t){return null!==t&&"object"==typeof t}var H=function(t){if("function"!=typeof t)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!q(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(J);F(J,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:H});var K="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q=[],tt=[],rt="undefined"!=typeof Uint8Array?Uint8Array:Array,et=!1;function nt(){et=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)Q[r]=t[r],tt[t.charCodeAt(r)]=r;tt["-".charCodeAt(0)]=62,tt["_".charCodeAt(0)]=63}function it(t,r,e){for(var n,i,o=[],a=r;a<e;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push(Q[(i=n)>>18&63]+Q[i>>12&63]+Q[i>>6&63]+Q[63&i]);return o.join("")}function ot(t){var r;et||nt();for(var e=t.length,n=e%3,i="",o=[],a=16383,u=0,f=e-n;u<f;u+=a)o.push(it(t,u,u+a>f?f:u+a));return 1===n?(r=t[e-1],i+=Q[r>>2],i+=Q[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=Q[r>>10],i+=Q[r>>4&63],i+=Q[r<<2&63],i+="="),o.push(i),o.join("")}function at(t,r,e,n,i){var o,a,u=8*i-n-1,f=(1<<u)-1,s=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[r+c],c+=l,h-=8);if(0===o)o=1-s;else{if(o===f)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=s}return(p?-1:1)*a*Math.pow(2,o-n)}function ut(t,r,e,n,i,o){var a,u,f,s=8*o-i-1,h=(1<<s)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-a))<1&&(a--,f*=2),(r+=a+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(a++,f/=2),a+c>=h?(u=0,a=h):a+c>=1?(u=(r*f-1)*Math.pow(2,i),a+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(a=a<<i|u,s+=i;s>0;t[e+p]=255&a,p+=g,a/=256,s-=8);t[e+p-g]|=128*y}var ft={}.toString,st=Array.isArray||function(t){return"[object Array]"==ft.call(t)};function ht(){return lt.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function ct(t,r){if(ht()<r)throw new RangeError("Invalid typed array length");return lt.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=lt.prototype:(null===t&&(t=new lt(r)),t.length=r),t}function lt(t,r,e){if(!(lt.TYPED_ARRAY_SUPPORT||this instanceof lt))return new lt(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return yt(this,t)}return pt(this,t,r,e)}function pt(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);lt.TYPED_ARRAY_SUPPORT?(t=r).__proto__=lt.prototype:t=dt(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!lt.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|bt(r,e),i=(t=ct(t,n)).write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(vt(r)){var e=0|wt(r.length);return 0===(t=ct(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?ct(t,0):dt(t,r);if("Buffer"===r.type&&st(r.data))return dt(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function gt(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function yt(t,r){if(gt(r),t=ct(t,r<0?0:0|wt(r)),!lt.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function dt(t,r){var e=r.length<0?0:0|wt(r.length);t=ct(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function wt(t){if(t>=ht())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ht().toString(16)+" bytes");return 0|t}function vt(t){return!(null==t||!t._isBuffer)}function bt(t,r){if(vt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return Gt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return Wt(t).length;default:if(n)return Gt(t).length;r=(""+r).toLowerCase(),n=!0}}function mt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return kt(this,r,e);case"utf8":case"utf-8":return Yt(this,r,e);case"ascii":return xt(this,r,e);case"latin1":case"binary":return Ct(this,r,e);case"base64":return It(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Lt(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function Et(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function At(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=lt.from(r,n)),vt(r))return 0===r.length?-1:_t(t,r,e,n,i);if("number"==typeof r)return r&=255,lt.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):_t(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function _t(t,r,e,n,i){var o,a=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,u/=2,f/=2,e/=2}function s(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(i){var h=-1;for(o=e;o<u;o++)if(s(t,o)===s(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*a}else-1!==h&&(o-=o-h),h=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(s(t,o+l)!==s(r,l)){c=!1;break}if(c)return o}return-1}function Rt(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var u=parseInt(r.substr(2*a,2),16);if(isNaN(u))return a;t[e+a]=u}return a}function Tt(t,r,e,n){return Xt(Gt(r,t.length-e),t,e,n)}function Pt(t,r,e,n){return Xt(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function St(t,r,e,n){return Pt(t,r,e,n)}function Ut(t,r,e,n){return Xt(Wt(r),t,e,n)}function Bt(t,r,e,n){return Xt(function(t,r){for(var e,n,i,o=[],a=0;a<t.length&&!((r-=2)<0);++a)n=(e=t.charCodeAt(a))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function It(t,r,e){return 0===r&&e===t.length?ot(t):ot(t.slice(r,e))}function Yt(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,a,u,f,s=t[i],h=null,c=s>239?4:s>223?3:s>191?2:1;if(i+c<=e)switch(c){case 1:s<128&&(h=s);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&s)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(f=(15&s)<<12|(63&o)<<6|63&a)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],a=t[i+2],u=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&u)&&(f=(15&s)<<18|(63&o)<<12|(63&a)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=Ot)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Ot));return e}(n)}lt.TYPED_ARRAY_SUPPORT=void 0===K.TYPED_ARRAY_SUPPORT||K.TYPED_ARRAY_SUPPORT,ht(),lt.poolSize=8192,lt._augment=function(t){return t.__proto__=lt.prototype,t},lt.from=function(t,r,e){return pt(null,t,r,e)},lt.TYPED_ARRAY_SUPPORT&&(lt.prototype.__proto__=Uint8Array.prototype,lt.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&lt[Symbol.species]),lt.alloc=function(t,r,e){return function(t,r,e,n){return gt(r),r<=0?ct(t,r):void 0!==e?"string"==typeof n?ct(t,r).fill(e,n):ct(t,r).fill(e):ct(t,r)}(null,t,r,e)},lt.allocUnsafe=function(t){return yt(null,t)},lt.allocUnsafeSlow=function(t){return yt(null,t)},lt.isBuffer=function(t){return null!=t&&(!!t._isBuffer||qt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&qt(t.slice(0,0))}(t))},lt.compare=function(t,r){if(!vt(t)||!vt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},lt.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},lt.concat=function(t,r){if(!st(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return lt.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=lt.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!vt(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},lt.byteLength=bt,lt.prototype._isBuffer=!0,lt.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)Et(this,r,r+1);return this},lt.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)Et(this,r,r+3),Et(this,r+1,r+2);return this},lt.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)Et(this,r,r+7),Et(this,r+1,r+6),Et(this,r+2,r+5),Et(this,r+3,r+4);return this},lt.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Yt(this,0,t):mt.apply(this,arguments)},lt.prototype.equals=function(t){if(!vt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===lt.compare(this,t)},lt.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},lt.prototype.compare=function(t,r,e,n,i){if(!vt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(e>>>=0)-(r>>>=0),u=Math.min(o,a),f=this.slice(n,i),s=t.slice(r,e),h=0;h<u;++h)if(f[h]!==s[h]){o=f[h],a=s[h];break}return o<a?-1:a<o?1:0},lt.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},lt.prototype.indexOf=function(t,r,e){return At(this,t,r,e,!0)},lt.prototype.lastIndexOf=function(t,r,e){return At(this,t,r,e,!1)},lt.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return Rt(this,t,r,e);case"utf8":case"utf-8":return Tt(this,t,r,e);case"ascii":return Pt(this,t,r,e);case"latin1":case"binary":return St(this,t,r,e);case"base64":return Ut(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bt(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},lt.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Ot=4096;function xt(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function Ct(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function kt(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=Zt(t[o]);return i}function Lt(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function Mt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function Dt(t,r,e,n,i,o){if(!vt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function jt(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Ft(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function Nt(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function Vt(t,r,e,n,i){return i||Nt(t,0,e,4),ut(t,r,e,n,23,4),e+4}function $t(t,r,e,n,i){return i||Nt(t,0,e,8),ut(t,r,e,n,52,8),e+8}lt.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),lt.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=lt.prototype;else{var i=r-t;e=new lt(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},lt.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||Mt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},lt.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||Mt(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},lt.prototype.readUInt8=function(t,r){return r||Mt(t,1,this.length),this[t]},lt.prototype.readUInt16LE=function(t,r){return r||Mt(t,2,this.length),this[t]|this[t+1]<<8},lt.prototype.readUInt16BE=function(t,r){return r||Mt(t,2,this.length),this[t]<<8|this[t+1]},lt.prototype.readUInt32LE=function(t,r){return r||Mt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},lt.prototype.readUInt32BE=function(t,r){return r||Mt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},lt.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||Mt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},lt.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||Mt(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},lt.prototype.readInt8=function(t,r){return r||Mt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},lt.prototype.readInt16LE=function(t,r){r||Mt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},lt.prototype.readInt16BE=function(t,r){r||Mt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},lt.prototype.readInt32LE=function(t,r){return r||Mt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},lt.prototype.readInt32BE=function(t,r){return r||Mt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},lt.prototype.readFloatLE=function(t,r){return r||Mt(t,4,this.length),at(this,t,!0,23,4)},lt.prototype.readFloatBE=function(t,r){return r||Mt(t,4,this.length),at(this,t,!1,23,4)},lt.prototype.readDoubleLE=function(t,r){return r||Mt(t,8,this.length),at(this,t,!0,52,8)},lt.prototype.readDoubleBE=function(t,r){return r||Mt(t,8,this.length),at(this,t,!1,52,8)},lt.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Dt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},lt.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||Dt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},lt.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,1,255,0),lt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},lt.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,2,65535,0),lt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):jt(this,t,r,!0),r+2},lt.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,2,65535,0),lt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):jt(this,t,r,!1),r+2},lt.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,4,4294967295,0),lt.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):Ft(this,t,r,!0),r+4},lt.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,4,4294967295,0),lt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Ft(this,t,r,!1),r+4},lt.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Dt(this,t,r,e,i-1,-i)}var o=0,a=1,u=0;for(this[r]=255&t;++o<e&&(a*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},lt.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Dt(this,t,r,e,i-1,-i)}var o=e-1,a=1,u=0;for(this[r+o]=255&t;--o>=0&&(a*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},lt.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,1,127,-128),lt.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},lt.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,2,32767,-32768),lt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):jt(this,t,r,!0),r+2},lt.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,2,32767,-32768),lt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):jt(this,t,r,!1),r+2},lt.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,4,2147483647,-2147483648),lt.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):Ft(this,t,r,!0),r+4},lt.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||Dt(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),lt.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Ft(this,t,r,!1),r+4},lt.prototype.writeFloatLE=function(t,r,e){return Vt(this,t,r,!0,e)},lt.prototype.writeFloatBE=function(t,r,e){return Vt(this,t,r,!1,e)},lt.prototype.writeDoubleLE=function(t,r,e){return $t(this,t,r,!0,e)},lt.prototype.writeDoubleBE=function(t,r,e){return $t(this,t,r,!1,e)},lt.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!lt.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},lt.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!lt.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=vt(t)?t:Gt(new lt(t,n).toString()),u=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%u]}return this};var zt=/[^+\/0-9A-Za-z-_]/g;function Zt(t){return t<16?"0"+t.toString(16):t.toString(16)}function Gt(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function Wt(t){return function(t){var r,e,n,i,o,a;et||nt();var u=t.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[u-2]?2:"="===t[u-1]?1:0,a=new rt(3*u/4-o),n=o>0?u-4:u;var f=0;for(r=0,e=0;r<n;r+=4,e+=3)i=tt[t.charCodeAt(r)]<<18|tt[t.charCodeAt(r+1)]<<12|tt[t.charCodeAt(r+2)]<<6|tt[t.charCodeAt(r+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===o?(i=tt[t.charCodeAt(r)]<<2|tt[t.charCodeAt(r+1)]>>4,a[f++]=255&i):1===o&&(i=tt[t.charCodeAt(r)]<<10|tt[t.charCodeAt(r+1)]<<4|tt[t.charCodeAt(r+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(zt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Xt(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function qt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var Jt=lt;return function(){var t,r;if("function"!=typeof Jt)return!1;try{t=function(t){return J(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}(r="function"==typeof Jt.from?Jt.from([1,2,3,4]):new Jt([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}}));
//# sourceMappingURL=browser.js.map
