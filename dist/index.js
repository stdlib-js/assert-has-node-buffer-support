"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var i=u(function(B,o){
var a=typeof Buffer=="function"?Buffer:null;o.exports=a
});var s=u(function(m,n){
var c=require('@stdlib/assert-is-buffer/dist'),f=i();function l(){var e,r;if(typeof f!="function")return!1;try{typeof f.from=="function"?r=f.from([1,2,3,4]):r=new f([1,2,3,4]),e=c(r)&&r[0]===1&&r[1]===2&&r[2]===3&&r[3]===4}catch(t){e=!1}return e}n.exports=l
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
