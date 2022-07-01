// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).hasNodeBufferSupport=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,s=n.__lookupSetter__;var a=e,h=function(t,r,e){var a,h,c,l;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((h="value"in e)&&(f.call(t,r)||s.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),c="get"in e,l="set"in e,h&&(c||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&i&&i.call(t,r,e.get),l&&u&&u.call(t,r,e.set),t},c=r()?a:h;var l=function(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var p=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return p&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var d=function(t){return w.call(t)},v=Object.prototype.hasOwnProperty;var b=function(t,r){return null!=t&&v.call(t,r)},E="function"==typeof Symbol?Symbol.toStringTag:"",A=b,_=E,m=y;var R=d,P=function(t){var r,e,n;if(null==t)return m.call(t);e=t[_],r=A(t,_);try{t[_]=void 0}catch(r){return m.call(t)}return n=m.call(t),r?t[_]=e:delete t[_],n},T=g()?P:R;var S=Array.isArray?Array.isArray:function(t){return"[object Array]"===T(t)};var U=function(t){return null!==t&&"object"==typeof t};l(U,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!S(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(U));var B=U;var Y=function(t){return B(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))},I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O=[],C=[],L="undefined"!=typeof Uint8Array?Uint8Array:Array,M=!1;function D(){M=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0,e=t.length;r<e;++r)O[r]=t[r],C[t.charCodeAt(r)]=r;C["-".charCodeAt(0)]=62,C["_".charCodeAt(0)]=63}function x(t,r,e){for(var n,o,i=[],u=r;u<e;u+=3)n=(t[u]<<16)+(t[u+1]<<8)+t[u+2],i.push(O[(o=n)>>18&63]+O[o>>12&63]+O[o>>6&63]+O[63&o]);return i.join("")}function j(t){var r;M||D();for(var e=t.length,n=e%3,o="",i=[],u=16383,f=0,s=e-n;f<s;f+=u)i.push(x(t,f,f+u>s?s:f+u));return 1===n?(r=t[e-1],o+=O[r>>2],o+=O[r<<4&63],o+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],o+=O[r>>10],o+=O[r>>4&63],o+=O[r<<2&63],o+="="),i.push(o),i.join("")}function k(t,r,e,n,o){var i,u,f=8*o-n-1,s=(1<<f)-1,a=s>>1,h=-7,c=e?o-1:0,l=e?-1:1,p=t[r+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=f;h>0;i=256*i+t[r+c],c+=l,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===i)i=1-a;else{if(i===s)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=a}return(p?-1:1)*u*Math.pow(2,i-n)}function N(t,r,e,n,o,i){var u,f,s,a=8*i-o-1,h=(1<<a)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-u))<1&&(u--,s*=2),(r+=u+c>=1?l/s:l*Math.pow(2,1-c))*s>=2&&(u++,s/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(r*s-1)*Math.pow(2,o),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&f,p+=g,f/=256,o-=8);for(u=u<<o|f,a+=o;a>0;t[e+p]=255&u,p+=g,u/=256,a-=8);t[e+p-g]|=128*y}var F={}.toString,z=Array.isArray||function(t){return"[object Array]"==F.call(t)};function V(){return q.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function G(t,r){if(V()<r)throw new RangeError("Invalid typed array length");return q.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=q.prototype:(null===t&&(t=new q(r)),t.length=r),t}function q(t,r,e){if(!(q.TYPED_ARRAY_SUPPORT||this instanceof q))return new q(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return H(this,t)}return J(this,t,r,e)}function J(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);q.TYPED_ARRAY_SUPPORT?(t=r).__proto__=q.prototype:t=K(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!q.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|X(r,e),o=(t=G(t,n)).write(r,e);o!==n&&(t=t.slice(0,o));return t}(t,r,e):function(t,r){if(W(r)){var e=0|Q(r.length);return 0===(t=G(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?G(t,0):K(t,r);if("Buffer"===r.type&&z(r.data))return K(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function Z(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function H(t,r){if(Z(r),t=G(t,r<0?0:0|Q(r)),!q.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function K(t,r){var e=r.length<0?0:0|Q(r.length);t=G(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function Q(t){if(t>=V())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+V().toString(16)+" bytes");return 0|t}function W(t){return!(null==t||!t._isBuffer)}function X(t,r){if(W(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return Pt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return Tt(t).length;default:if(n)return Pt(t).length;r=(""+r).toLowerCase(),n=!0}}function $(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return gt(this,r,e);case"utf8":case"utf-8":return ht(this,r,e);case"ascii":return lt(this,r,e);case"latin1":case"binary":return pt(this,r,e);case"base64":return at(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yt(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function tt(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function rt(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=q.from(r,n)),W(r))return 0===r.length?-1:et(t,r,e,n,o);if("number"==typeof r)return r&=255,q.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):et(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function et(t,r,e,n,o){var i,u=1,f=t.length,s=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,s/=2,e/=2}function a(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}if(o){var h=-1;for(i=e;i<f;i++)if(a(t,i)===a(r,-1===h?0:i-h)){if(-1===h&&(h=i),i-h+1===s)return h*u}else-1!==h&&(i-=i-h),h=-1}else for(e+s>f&&(e=f-s),i=e;i>=0;i--){for(var c=!0,l=0;l<s;l++)if(a(t,i+l)!==a(r,l)){c=!1;break}if(c)return i}return-1}function nt(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function ot(t,r,e,n){return St(Pt(r,t.length-e),t,e,n)}function it(t,r,e,n){return St(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function ut(t,r,e,n){return it(t,r,e,n)}function ft(t,r,e,n){return St(Tt(r),t,e,n)}function st(t,r,e,n){return St(function(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)n=(e=t.charCodeAt(u))>>8,o=e%256,i.push(o),i.push(n);return i}(r,t.length-e),t,e,n)}function at(t,r,e){return 0===r&&e===t.length?j(t):j(t.slice(r,e))}function ht(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i,u,f,s,a=t[o],h=null,c=a>239?4:a>223?3:a>191?2:1;if(o+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(i=t[o+1]))&&(s=(31&a)<<6|63&i)>127&&(h=s);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(s=(15&a)<<12|(63&i)<<6|63&u)>2047&&(s<55296||s>57343)&&(h=s);break;case 4:i=t[o+1],u=t[o+2],f=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&f)&&(s=(15&a)<<18|(63&i)<<12|(63&u)<<6|63&f)>65535&&s<1114112&&(h=s)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),o+=c}return function(t){var r=t.length;if(r<=ct)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=ct));return e}(n)}q.TYPED_ARRAY_SUPPORT=void 0===I.TYPED_ARRAY_SUPPORT||I.TYPED_ARRAY_SUPPORT,V(),q.poolSize=8192,q._augment=function(t){return t.__proto__=q.prototype,t},q.from=function(t,r,e){return J(null,t,r,e)},q.TYPED_ARRAY_SUPPORT&&(q.prototype.__proto__=Uint8Array.prototype,q.__proto__=Uint8Array),q.alloc=function(t,r,e){return function(t,r,e,n){return Z(r),r<=0?G(t,r):void 0!==e?"string"==typeof n?G(t,r).fill(e,n):G(t,r).fill(e):G(t,r)}(null,t,r,e)},q.allocUnsafe=function(t){return H(null,t)},q.allocUnsafeSlow=function(t){return H(null,t)},q.isBuffer=function(t){return null!=t&&(!!t._isBuffer||Ut(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&Ut(t.slice(0,0))}(t))},q.compare=function(t,r){if(!W(t)||!W(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,i=Math.min(e,n);o<i;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},q.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},q.concat=function(t,r){if(!z(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return q.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=q.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var i=t[e];if(!W(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(n,o),o+=i.length}return n},q.byteLength=X,q.prototype._isBuffer=!0,q.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)tt(this,r,r+1);return this},q.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)tt(this,r,r+3),tt(this,r+1,r+2);return this},q.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)tt(this,r,r+7),tt(this,r+1,r+6),tt(this,r+2,r+5),tt(this,r+3,r+4);return this},q.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?ht(this,0,t):$.apply(this,arguments)},q.prototype.equals=function(t){if(!W(t))throw new TypeError("Argument must be a Buffer");return this===t||0===q.compare(this,t)},q.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},q.prototype.compare=function(t,r,e,n,o){if(!W(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(n>>>=0),u=(e>>>=0)-(r>>>=0),f=Math.min(i,u),s=this.slice(n,o),a=t.slice(r,e),h=0;h<f;++h)if(s[h]!==a[h]){i=s[h],u=a[h];break}return i<u?-1:u<i?1:0},q.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},q.prototype.indexOf=function(t,r,e){return rt(this,t,r,e,!0)},q.prototype.lastIndexOf=function(t,r,e){return rt(this,t,r,e,!1)},q.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return nt(this,t,r,e);case"utf8":case"utf-8":return ot(this,t,r,e);case"ascii":return it(this,t,r,e);case"latin1":case"binary":return ut(this,t,r,e);case"base64":return ft(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return st(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},q.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var ct=4096;function lt(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function pt(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function gt(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=Rt(t[i]);return o}function yt(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function wt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function dt(t,r,e,n,o,i){if(!W(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<i)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function vt(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function bt(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function Et(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function At(t,r,e,n,o){return o||Et(t,0,e,4),N(t,r,e,n,23,4),e+4}function _t(t,r,e,n,o){return o||Et(t,0,e,8),N(t,r,e,n,52,8),e+8}q.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),q.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=q.prototype;else{var o=r-t;e=new q(o,void 0);for(var i=0;i<o;++i)e[i]=this[i+t]}return e},q.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||wt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},q.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||wt(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},q.prototype.readUInt8=function(t,r){return r||wt(t,1,this.length),this[t]},q.prototype.readUInt16LE=function(t,r){return r||wt(t,2,this.length),this[t]|this[t+1]<<8},q.prototype.readUInt16BE=function(t,r){return r||wt(t,2,this.length),this[t]<<8|this[t+1]},q.prototype.readUInt32LE=function(t,r){return r||wt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},q.prototype.readUInt32BE=function(t,r){return r||wt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},q.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||wt(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*r)),n},q.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||wt(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*r)),i},q.prototype.readInt8=function(t,r){return r||wt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},q.prototype.readInt16LE=function(t,r){r||wt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},q.prototype.readInt16BE=function(t,r){r||wt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},q.prototype.readInt32LE=function(t,r){return r||wt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},q.prototype.readInt32BE=function(t,r){return r||wt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},q.prototype.readFloatLE=function(t,r){return r||wt(t,4,this.length),k(this,t,!0,23,4)},q.prototype.readFloatBE=function(t,r){return r||wt(t,4,this.length),k(this,t,!1,23,4)},q.prototype.readDoubleLE=function(t,r){return r||wt(t,8,this.length),k(this,t,!0,52,8)},q.prototype.readDoubleBE=function(t,r){return r||wt(t,8,this.length),k(this,t,!1,52,8)},q.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||dt(this,t,r,e,Math.pow(2,8*e)-1,0);var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},q.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||dt(this,t,r,e,Math.pow(2,8*e)-1,0);var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},q.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,1,255,0),q.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},q.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,2,65535,0),q.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):vt(this,t,r,!0),r+2},q.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,2,65535,0),q.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):vt(this,t,r,!1),r+2},q.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,4,4294967295,0),q.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):bt(this,t,r,!0),r+4},q.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,4,4294967295,0),q.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):bt(this,t,r,!1),r+4},q.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);dt(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},q.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);dt(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},q.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,1,127,-128),q.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},q.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,2,32767,-32768),q.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):vt(this,t,r,!0),r+2},q.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,2,32767,-32768),q.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):vt(this,t,r,!1),r+2},q.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,4,2147483647,-2147483648),q.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):bt(this,t,r,!0),r+4},q.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||dt(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),q.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):bt(this,t,r,!1),r+4},q.prototype.writeFloatLE=function(t,r,e){return At(this,t,r,!0,e)},q.prototype.writeFloatBE=function(t,r,e){return At(this,t,r,!1,e)},q.prototype.writeDoubleLE=function(t,r,e){return _t(this,t,r,!0,e)},q.prototype.writeDoubleBE=function(t,r,e){return _t(this,t,r,!1,e)},q.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,i=n-e;if(this===t&&e<r&&r<n)for(o=i-1;o>=0;--o)t[o+r]=this[o+e];else if(i<1e3||!q.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+i),r);return i},q.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!q.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var i;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var u=W(t)?t:Pt(new q(t,n).toString()),f=u.length;for(i=0;i<e-r;++i)this[i+r]=u[i%f]}return this};var mt=/[^+\/0-9A-Za-z-_]/g;function Rt(t){return t<16?"0"+t.toString(16):t.toString(16)}function Pt(t,r){var e;r=r||1/0;for(var n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function Tt(t){return function(t){var r,e,n,o,i,u;M||D();var f=t.length;if(f%4>0)throw new Error("Invalid string. Length must be a multiple of 4");i="="===t[f-2]?2:"="===t[f-1]?1:0,u=new L(3*f/4-i),n=i>0?f-4:f;var s=0;for(r=0,e=0;r<n;r+=4,e+=3)o=C[t.charCodeAt(r)]<<18|C[t.charCodeAt(r+1)]<<12|C[t.charCodeAt(r+2)]<<6|C[t.charCodeAt(r+3)],u[s++]=o>>16&255,u[s++]=o>>8&255,u[s++]=255&o;return 2===i?(o=C[t.charCodeAt(r)]<<2|C[t.charCodeAt(r+1)]>>4,u[s++]=255&o):1===i&&(o=C[t.charCodeAt(r)]<<10|C[t.charCodeAt(r+1)]<<4|C[t.charCodeAt(r+2)]>>2,u[s++]=o>>8&255,u[s++]=255&o),u}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(mt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function St(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function Ut(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var Bt=q;return function(){var t,r;if("function"!=typeof Bt)return!1;try{r="function"==typeof Bt.from?Bt.from([1,2,3,4]):new Bt([1,2,3,4]),t=Y(r)&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}}));
//# sourceMappingURL=browser.js.map
