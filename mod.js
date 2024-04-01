// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function e(t){return"number"==typeof t}function n(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function i(t,r,e){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=e?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function s(t){var r,n,s;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,s=parseInt(n,10),!isFinite(s)){if(!e(n))throw new Error("invalid integer. Value: "+n);s=0}return s<0&&("u"===t.specifier||10!==r)&&(s=4294967295+s+1),s<0?(n=(-s).toString(r),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=s.toString(r),s||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,h=String.prototype.toUpperCase,c=String.prototype.replace,l=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function b(t){var r,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!e(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":u(i)<1e-4?((r=t.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(t.precision),t.alternate||(n=c.call(n,v,"$1e"),n=c.call(n,w,"e"),n=c.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=c.call(n,l,"e+0$1"),n=c.call(n,p,"e-0$1"),t.alternate&&(n=c.call(n,g,"$1."),n=c.call(n,y,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===h.call(t.specifier)?h.call(n):f.call(n)}function E(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}var m=String.fromCharCode,A=isNaN,_=Array.isArray;function R(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function P(t){var r,e,n,o,a,u,f,h,c,l,p,g,y;if(!_(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",f=1,h=0;h<t.length;h++)if(n=t[h],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+h+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,c=0;c<e.length;c++)switch(o=e.charAt(c)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=s(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,p=n.width,g=n.padRight,y=void 0,(y=p-l.length)<0?l:l=g?l+E(y):E(y)+l)),u+=n.arg||"",f+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function U(t){var r,e,n,i;for(e=[],i=0,n=T.exec(t);n;)(r=t.slice(i,T.lastIndex-n[0].length)).length&&e.push(r),e.push(S(n)),i=T.lastIndex,n=T.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function B(t){var r,e;if("string"!=typeof t)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[U(t)],e=1;e<arguments.length;e++)r.push(arguments[e]);return P.apply(null,r)}var I,Y=Object.prototype,O=Y.toString,C=Y.__defineGetter__,x=Y.__defineSetter__,k=Y.__lookupGetter__,L=Y.__lookupSetter__;I=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(k.call(t,r)||L.call(t,r)?(n=t.__proto__,t.__proto__=Y,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(t,r,e.get),a&&x&&x.call(t,r,e.set),t};var M=I;var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var j=Object.prototype.toString;var F=Object.prototype.hasOwnProperty;var N,V="function"==typeof Symbol?Symbol:void 0,$="function"==typeof V?V.toStringTag:"";N=D&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,i,o;if(null==t)return j.call(t);e=t[$],o=$,r=null!=(i=t)&&F.call(i,o);try{t[$]=void 0}catch(r){return j.call(t)}return n=j.call(t),r?t[$]=e:delete t[$],n}:function(t){return j.call(t)};var z,Z=N;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Z(t)};var G=z;function W(t){return null!==t&&"object"==typeof t}var X=function(t){if("function"!=typeof t)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!G(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(W);M(W,"isObjectLikeArray",{configurable:!1,enumerable:!1,writable:!1,value:X});var q="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J=[],H=[],K="undefined"!=typeof Uint8Array?Uint8Array:Array,Q=!1;function tt(){Q=!0;for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=0;r<64;++r)J[r]=t[r],H[t.charCodeAt(r)]=r;H["-".charCodeAt(0)]=62,H["_".charCodeAt(0)]=63}function rt(t,r,e){for(var n,i,o=[],a=r;a<e;a+=3)n=(t[a]<<16)+(t[a+1]<<8)+t[a+2],o.push(J[(i=n)>>18&63]+J[i>>12&63]+J[i>>6&63]+J[63&i]);return o.join("")}function et(t){var r;Q||tt();for(var e=t.length,n=e%3,i="",o=[],a=16383,s=0,u=e-n;s<u;s+=a)o.push(rt(t,s,s+a>u?u:s+a));return 1===n?(r=t[e-1],i+=J[r>>2],i+=J[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=J[r>>10],i+=J[r>>4&63],i+=J[r<<2&63],i+="="),o.push(i),o.join("")}function nt(t,r,e,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,f=u>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=s;h>0;o=256*o+t[r+c],c+=l,h-=8);for(a=o&(1<<-h)-1,o>>=-h,h+=n;h>0;a=256*a+t[r+c],c+=l,h-=8);if(0===o)o=1-f;else{if(o===u)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)}function it(t,r,e,n,i,o){var a,s,u,f=8*o-i-1,h=(1<<f)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(s=isNaN(r)?1:0,a=h):(a=Math.floor(Math.log(r)/Math.LN2),r*(u=Math.pow(2,-a))<1&&(a--,u*=2),(r+=a+c>=1?l/u:l*Math.pow(2,1-c))*u>=2&&(a++,u/=2),a+c>=h?(s=0,a=h):a+c>=1?(s=(r*u-1)*Math.pow(2,i),a+=c):(s=r*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&s,p+=g,s/=256,i-=8);for(a=a<<i|s,f+=i;f>0;t[e+p]=255&a,p+=g,a/=256,f-=8);t[e+p-g]|=128*y}var ot={}.toString,at=Array.isArray||function(t){return"[object Array]"==ot.call(t)};function st(){return ft.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function ut(t,r){if(st()<r)throw new RangeError("Invalid typed array length");return ft.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=ft.prototype:(null===t&&(t=new ft(r)),t.length=r),t}function ft(t,r,e){if(!(ft.TYPED_ARRAY_SUPPORT||this instanceof ft))return new ft(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return lt(this,t)}return ht(this,t,r,e)}function ht(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);ft.TYPED_ARRAY_SUPPORT?(t=r).__proto__=ft.prototype:t=pt(t,r);return t}(t,r,e,n):"string"==typeof r?function(t,r,e){"string"==typeof e&&""!==e||(e="utf8");if(!ft.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|dt(r,e);t=ut(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(yt(r)){var e=0|gt(r.length);return 0===(t=ut(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?ut(t,0):pt(t,r);if("Buffer"===r.type&&at(r.data))return pt(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function ct(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function lt(t,r){if(ct(r),t=ut(t,r<0?0:0|gt(r)),!ft.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function pt(t,r){var e=r.length<0?0:0|gt(r.length);t=ut(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function gt(t){if(t>=st())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+st().toString(16)+" bytes");return 0|t}function yt(t){return!(null==t||!t._isBuffer)}function dt(t,r){if(yt(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return $t(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return zt(t).length;default:if(n)return $t(t).length;r=(""+r).toLowerCase(),n=!0}}function wt(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return Ot(this,r,e);case"utf8":case"utf-8":return Ut(this,r,e);case"ascii":return It(this,r,e);case"latin1":case"binary":return Yt(this,r,e);case"base64":return St(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ct(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function vt(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function bt(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=ft.from(r,n)),yt(r))return 0===r.length?-1:Et(t,r,e,n,i);if("number"==typeof r)return r&=255,ft.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):Et(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function Et(t,r,e,n,i){var o,a=1,s=t.length,u=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,s/=2,u/=2,e/=2}function f(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(i){var h=-1;for(o=e;o<s;o++)if(f(t,o)===f(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===u)return h*a}else-1!==h&&(o-=o-h),h=-1}else for(e+u>s&&(e=s-u),o=e;o>=0;o--){for(var c=!0,l=0;l<u;l++)if(f(t,o+l)!==f(r,l)){c=!1;break}if(c)return o}return-1}function mt(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var s=parseInt(r.substr(2*a,2),16);if(isNaN(s))return a;t[e+a]=s}return a}function At(t,r,e,n){return Zt($t(r,t.length-e),t,e,n)}function _t(t,r,e,n){return Zt(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function Rt(t,r,e,n){return _t(t,r,e,n)}function Pt(t,r,e,n){return Zt(zt(r),t,e,n)}function Tt(t,r,e,n){return Zt(function(t,r){for(var e,n,i,o=[],a=0;a<t.length&&!((r-=2)<0);++a)n=(e=t.charCodeAt(a))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function St(t,r,e){return 0===r&&e===t.length?et(t):et(t.slice(r,e))}function Ut(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,a,s,u,f=t[i],h=null,c=f>239?4:f>223?3:f>191?2:1;if(i+c<=e)switch(c){case 1:f<128&&(h=f);break;case 2:128==(192&(o=t[i+1]))&&(u=(31&f)<<6|63&o)>127&&(h=u);break;case 3:o=t[i+1],a=t[i+2],128==(192&o)&&128==(192&a)&&(u=(15&f)<<12|(63&o)<<6|63&a)>2047&&(u<55296||u>57343)&&(h=u);break;case 4:o=t[i+1],a=t[i+2],s=t[i+3],128==(192&o)&&128==(192&a)&&128==(192&s)&&(u=(15&f)<<18|(63&o)<<12|(63&a)<<6|63&s)>65535&&u<1114112&&(h=u)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=Bt)return String.fromCharCode.apply(String,t);var e="",n=0;for(;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=Bt));return e}(n)}ft.TYPED_ARRAY_SUPPORT=void 0===q.TYPED_ARRAY_SUPPORT||q.TYPED_ARRAY_SUPPORT,st(),ft.poolSize=8192,ft._augment=function(t){return t.__proto__=ft.prototype,t},ft.from=function(t,r,e){return ht(null,t,r,e)},ft.TYPED_ARRAY_SUPPORT&&(ft.prototype.__proto__=Uint8Array.prototype,ft.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&ft[Symbol.species]),ft.alloc=function(t,r,e){return function(t,r,e,n){return ct(r),r<=0?ut(t,r):void 0!==e?"string"==typeof n?ut(t,r).fill(e,n):ut(t,r).fill(e):ut(t,r)}(null,t,r,e)},ft.allocUnsafe=function(t){return lt(null,t)},ft.allocUnsafeSlow=function(t){return lt(null,t)},ft.isBuffer=function(t){return null!=t&&(!!t._isBuffer||Gt(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&Gt(t.slice(0,0))}(t))},ft.compare=function(t,r){if(!yt(t)||!yt(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},ft.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ft.concat=function(t,r){if(!at(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return ft.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=ft.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!yt(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},ft.byteLength=dt,ft.prototype._isBuffer=!0,ft.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)vt(this,r,r+1);return this},ft.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)vt(this,r,r+3),vt(this,r+1,r+2);return this},ft.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)vt(this,r,r+7),vt(this,r+1,r+6),vt(this,r+2,r+5),vt(this,r+3,r+4);return this},ft.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?Ut(this,0,t):wt.apply(this,arguments)},ft.prototype.equals=function(t){if(!yt(t))throw new TypeError("Argument must be a Buffer");return this===t||0===ft.compare(this,t)},ft.prototype.inspect=function(){var t="";return this.length>0&&(t=this.toString("hex",0,50).match(/.{2}/g).join(" "),this.length>50&&(t+=" ... ")),"<Buffer "+t+">"},ft.prototype.compare=function(t,r,e,n,i){if(!yt(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),a=(e>>>=0)-(r>>>=0),s=Math.min(o,a),u=this.slice(n,i),f=t.slice(r,e),h=0;h<s;++h)if(u[h]!==f[h]){o=u[h],a=f[h];break}return o<a?-1:a<o?1:0},ft.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},ft.prototype.indexOf=function(t,r,e){return bt(this,t,r,e,!0)},ft.prototype.lastIndexOf=function(t,r,e){return bt(this,t,r,e,!1)},ft.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return mt(this,t,r,e);case"utf8":case"utf-8":return At(this,t,r,e);case"ascii":return _t(this,t,r,e);case"latin1":case"binary":return Rt(this,t,r,e);case"base64":return Pt(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Tt(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},ft.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Bt=4096;function It(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function Yt(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function Ot(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=Vt(t[o]);return i}function Ct(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function xt(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function kt(t,r,e,n,i,o){if(!yt(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Lt(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function Mt(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function Dt(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function jt(t,r,e,n,i){return i||Dt(t,0,e,4),it(t,r,e,n,23,4),e+4}function Ft(t,r,e,n,i){return i||Dt(t,0,e,8),it(t,r,e,n,52,8),e+8}ft.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),ft.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=ft.prototype;else{var i=r-t;e=new ft(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},ft.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||xt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},ft.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||xt(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},ft.prototype.readUInt8=function(t,r){return r||xt(t,1,this.length),this[t]},ft.prototype.readUInt16LE=function(t,r){return r||xt(t,2,this.length),this[t]|this[t+1]<<8},ft.prototype.readUInt16BE=function(t,r){return r||xt(t,2,this.length),this[t]<<8|this[t+1]},ft.prototype.readUInt32LE=function(t,r){return r||xt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},ft.prototype.readUInt32BE=function(t,r){return r||xt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},ft.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||xt(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},ft.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||xt(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},ft.prototype.readInt8=function(t,r){return r||xt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},ft.prototype.readInt16LE=function(t,r){r||xt(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},ft.prototype.readInt16BE=function(t,r){r||xt(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},ft.prototype.readInt32LE=function(t,r){return r||xt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},ft.prototype.readInt32BE=function(t,r){return r||xt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},ft.prototype.readFloatLE=function(t,r){return r||xt(t,4,this.length),nt(this,t,!0,23,4)},ft.prototype.readFloatBE=function(t,r){return r||xt(t,4,this.length),nt(this,t,!1,23,4)},ft.prototype.readDoubleLE=function(t,r){return r||xt(t,8,this.length),nt(this,t,!0,52,8)},ft.prototype.readDoubleBE=function(t,r){return r||xt(t,8,this.length),nt(this,t,!1,52,8)},ft.prototype.writeUIntLE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||kt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},ft.prototype.writeUIntBE=function(t,r,e,n){(t=+t,r|=0,e|=0,n)||kt(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},ft.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,1,255,0),ft.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},ft.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,2,65535,0),ft.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Lt(this,t,r,!0),r+2},ft.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,2,65535,0),ft.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Lt(this,t,r,!1),r+2},ft.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,4,4294967295,0),ft.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):Mt(this,t,r,!0),r+4},ft.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,4,4294967295,0),ft.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Mt(this,t,r,!1),r+4},ft.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);kt(this,t,r,e,i-1,-i)}var o=0,a=1,s=0;for(this[r]=255&t;++o<e&&(a*=256);)t<0&&0===s&&0!==this[r+o-1]&&(s=1),this[r+o]=(t/a>>0)-s&255;return r+e},ft.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);kt(this,t,r,e,i-1,-i)}var o=e-1,a=1,s=0;for(this[r+o]=255&t;--o>=0&&(a*=256);)t<0&&0===s&&0!==this[r+o+1]&&(s=1),this[r+o]=(t/a>>0)-s&255;return r+e},ft.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,1,127,-128),ft.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},ft.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,2,32767,-32768),ft.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Lt(this,t,r,!0),r+2},ft.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,2,32767,-32768),ft.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Lt(this,t,r,!1),r+2},ft.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,4,2147483647,-2147483648),ft.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):Mt(this,t,r,!0),r+4},ft.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||kt(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),ft.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):Mt(this,t,r,!1),r+4},ft.prototype.writeFloatLE=function(t,r,e){return jt(this,t,r,!0,e)},ft.prototype.writeFloatBE=function(t,r,e){return jt(this,t,r,!1,e)},ft.prototype.writeDoubleLE=function(t,r,e){return Ft(this,t,r,!0,e)},ft.prototype.writeDoubleBE=function(t,r,e){return Ft(this,t,r,!1,e)},ft.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!ft.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},ft.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!ft.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=yt(t)?t:$t(new ft(t,n).toString()),s=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%s]}return this};var Nt=/[^+\/0-9A-Za-z-_]/g;function Vt(t){return t<16?"0"+t.toString(16):t.toString(16)}function $t(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],a=0;a<n;++a){if((e=t.charCodeAt(a))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function zt(t){return function(t){var r,e,n,i,o,a;Q||tt();var s=t.length;if(s%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[s-2]?2:"="===t[s-1]?1:0,a=new K(3*s/4-o),n=o>0?s-4:s;var u=0;for(r=0,e=0;r<n;r+=4,e+=3)i=H[t.charCodeAt(r)]<<18|H[t.charCodeAt(r+1)]<<12|H[t.charCodeAt(r+2)]<<6|H[t.charCodeAt(r+3)],a[u++]=i>>16&255,a[u++]=i>>8&255,a[u++]=255&i;return 2===o?(i=H[t.charCodeAt(r)]<<2|H[t.charCodeAt(r+1)]>>4,a[u++]=255&i):1===o&&(i=H[t.charCodeAt(r)]<<10|H[t.charCodeAt(r+1)]<<4|H[t.charCodeAt(r+2)]>>2,a[u++]=i>>8&255,a[u++]=255&i),a}(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(Nt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Zt(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function Gt(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var Wt=ft;function Xt(){var t,r;if("function"!=typeof Wt)return!1;try{t=function(t){return W(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}(r="function"==typeof Wt.from?Wt.from([1,2,3,4]):new Wt([1,2,3,4]))&&1===r[0]&&2===r[1]&&3===r[2]&&4===r[3]}catch(r){t=!1}return t}export{Xt as default};
//# sourceMappingURL=mod.js.map