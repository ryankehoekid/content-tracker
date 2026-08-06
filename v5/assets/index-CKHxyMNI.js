(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var v_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function __(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pm={exports:{}},Ol={},mm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),x_=Symbol.for("react.portal"),y_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),M_=Symbol.for("react.profiler"),E_=Symbol.for("react.provider"),w_=Symbol.for("react.context"),T_=Symbol.for("react.forward_ref"),A_=Symbol.for("react.suspense"),R_=Symbol.for("react.memo"),C_=Symbol.for("react.lazy"),ih=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vm=Object.assign,_m={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||gm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xm(){}xm.prototype=Vs.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||gm}var Hd=Bd.prototype=new xm;Hd.constructor=Bd;vm(Hd,Vs.prototype);Hd.isPureReactComponent=!0;var rh=Array.isArray,ym=Object.prototype.hasOwnProperty,Vd={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ym.call(e,i)&&!Sm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:za,type:t,key:s,ref:a,props:r,_owner:Vd.current}}function P_(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gd(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function L_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sh=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L_(""+t.key):e.toString(36)}function Go(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case za:case x_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,rh(r)?(n="",t!=null&&(n=t.replace(sh,"$&/")+"/"),Go(r,e,n,"",function(c){return c})):r!=null&&(Gd(r)&&(r=P_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(sh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",rh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=Go(s,e,n,l,r)}else if(l=b_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=Go(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function eo(t,e,n){if(t==null)return t;var i=[],r=0;return Go(t,i,"","",function(s){return e.call(n,s,r++)}),i}function D_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Wo={transition:null},N_={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Vd};function Em(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:eo,forEach:function(t,e,n){eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return eo(t,function(){e++}),e},toArray:function(t){return eo(t,function(e){return e})||[]},only:function(t){if(!Gd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Vs;Xe.Fragment=y_;Xe.Profiler=M_;Xe.PureComponent=Bd;Xe.StrictMode=S_;Xe.Suspense=A_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N_;Xe.act=Em;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Vd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ym.call(e,l)&&!Sm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:za,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:w_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E_,_context:t},t.Consumer=t};Xe.createElement=Mm;Xe.createFactory=function(t){var e=Mm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:T_,render:t}};Xe.isValidElement=Gd;Xe.lazy=function(t){return{$$typeof:C_,_payload:{_status:-1,_result:t},_init:D_}};Xe.memo=function(t,e){return{$$typeof:R_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Xe.unstable_act=Em;Xe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Xe.useContext=function(t){return Qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Xe.useId=function(){return Qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Qt.current.useRef(t)};Xe.useState=function(t){return Qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Qt.current.useTransition()};Xe.version="18.3.1";mm.exports=Xe;var Ne=mm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_=Ne,U_=Symbol.for("react.element"),F_=Symbol.for("react.fragment"),k_=Object.prototype.hasOwnProperty,O_=I_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z_={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)k_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:U_,type:t,key:s,ref:a,props:r,_owner:O_.current}}Ol.Fragment=F_;Ol.jsx=wm;Ol.jsxs=wm;pm.exports=Ol;var M=pm.exports,Tm={exports:{}},xn={},Am={exports:{}},Rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,G){var K=N.length;N.push(G);e:for(;0<K;){var ie=K-1>>>1,Q=N[ie];if(0<r(Q,G))N[ie]=G,N[K]=Q,K=ie;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var G=N[0],K=N.pop();if(K!==G){N[0]=K;e:for(var ie=0,Q=N.length,we=Q>>>1;ie<we;){var Y=2*(ie+1)-1,J=N[Y],le=Y+1,oe=N[le];if(0>r(J,K))le<Q&&0>r(oe,J)?(N[ie]=oe,N[le]=K,ie=le):(N[ie]=J,N[Y]=K,ie=Y);else if(le<Q&&0>r(oe,K))N[ie]=oe,N[le]=K,ie=le;else break e}}return G}function r(N,G){var K=N.sortIndex-G.sortIndex;return K!==0?K:N.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,h=null,d=3,p=!1,x=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=N)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function E(N){if(S=!1,m(N),!x)if(n(l)!==null)x=!0,O(b);else{var G=n(c);G!==null&&z(E,G.startTime-N)}}function b(N,G){x=!1,S&&(S=!1,f(w),w=-1),p=!0;var K=d;try{for(m(G),h=n(l);h!==null&&(!(h.expirationTime>G)||N&&!P());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,d=h.priorityLevel;var Q=ie(h.expirationTime<=G);G=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&i(l),m(G)}else i(l);h=n(l)}if(h!==null)var we=!0;else{var Y=n(c);Y!==null&&z(E,Y.startTime-G),we=!1}return we}finally{h=null,d=K,p=!1}}var C=!1,R=null,w=-1,v=5,y=-1;function P(){return!(t.unstable_now()-y<v)}function U(){if(R!==null){var N=t.unstable_now();y=N;var G=!0;try{G=R(!0,N)}finally{G?I():(C=!1,R=null)}}else C=!1}var I;if(typeof _=="function")I=function(){_(U)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,H=W.port2;W.port1.onmessage=U,I=function(){H.postMessage(null)}}else I=function(){g(U,0)};function O(N){R=N,C||(C=!0,I())}function z(N,G){w=g(function(){N(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,O(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var K=d;d=G;try{return N()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var K=d;d=N;try{return G()}finally{d=K}},t.unstable_scheduleCallback=function(N,G,K){var ie=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ie+K:ie):K=ie,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=K+Q,N={id:u++,callback:G,priorityLevel:N,startTime:K,expirationTime:Q,sortIndex:-1},K>ie?(N.sortIndex=K,e(c,N),n(l)===null&&N===n(c)&&(S?(f(w),w=-1):S=!0,z(E,K-ie))):(N.sortIndex=Q,e(l,N),x||p||(x=!0,O(b))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var G=d;return function(){var K=d;d=G;try{return N.apply(this,arguments)}finally{d=K}}}})(Rm);Am.exports=Rm;var B_=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_=Ne,_n=B_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,Sa={};function Or(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Sa[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,V_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ah={},oh={};function G_(t){return hu.call(oh,t)?!0:hu.call(ah,t)?!1:V_.test(t)?oh[t]=!0:(ah[t]=!0,!1)}function W_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j_(t,e,n,i){if(e===null||typeof e>"u"||W_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Vt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,jd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,jd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j_(e,n,r,i)&&(n=null),i||r===null?G_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ri=H_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,to=Symbol.for("react.element"),as=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Pm=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),Lm=Symbol.for("react.offscreen"),lh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,cc;function aa(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function dc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function X_(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case as:return"Portal";case pu:return"Profiler";case Yd:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pm:return(t.displayName||"Context")+".Consumer";case bm:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:vu(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return vu(t(e))}catch{}}return null}function Y_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vu(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q_(t){var e=Dm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function no(t){t._valueTracker||(t._valueTracker=q_(t))}function Nm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _u(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Im(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function xu(t,e){Im(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&yu(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yu(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(oa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Um(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,km=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$_=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){$_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Om(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function zm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Om(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var K_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,e){if(e){if(K_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Au=null,ys=null,Ss=null;function hh(t){if(t=Va(t)){if(typeof Au!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Gl(e),Au(t.stateNode,t.type,e))}}function Bm(t){ys?Ss?Ss.push(t):Ss=[t]:ys=t}function Hm(){if(ys){var t=ys,e=Ss;if(Ss=ys=null,hh(t),e)for(t=0;t<e.length;t++)hh(e[t])}}function Vm(t,e){return t(e)}function Gm(){}var fc=!1;function Wm(t,e,n){if(fc)return t(e,n);fc=!0;try{return Vm(t,e,n)}finally{fc=!1,(ys!==null||Ss!==null)&&(Gm(),Hm())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Ru=!1;if(yi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Ru=!1}function Z_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fa=!1,ll=null,cl=!1,Cu=null,Q_={onError:function(t){fa=!0,ll=t}};function J_(t,e,n,i,r,s,a,o,l){fa=!1,ll=null,Z_.apply(Q_,arguments)}function e0(t,e,n,i,r,s,a,o,l){if(J_.apply(this,arguments),fa){if(fa){var c=ll;fa=!1,ll=null}else throw Error(se(198));cl||(cl=!0,Cu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ph(t){if(zr(t)!==t)throw Error(se(188))}function t0(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ph(r),t;if(s===i)return ph(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Xm(t){return t=t0(t),t!==null?Ym(t):null}function Ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ym(t);if(e!==null)return e;t=t.sibling}return null}var qm=_n.unstable_scheduleCallback,mh=_n.unstable_cancelCallback,n0=_n.unstable_shouldYield,i0=_n.unstable_requestPaint,wt=_n.unstable_now,r0=_n.unstable_getCurrentPriorityLevel,Zd=_n.unstable_ImmediatePriority,$m=_n.unstable_UserBlockingPriority,ul=_n.unstable_NormalPriority,s0=_n.unstable_LowPriority,Km=_n.unstable_IdlePriority,zl=null,ei=null;function a0(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:c0,o0=Math.log,l0=Math.LN2;function c0(t){return t>>>=0,t===0?32:31-(o0(t)/l0|0)|0}var ro=64,so=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function u0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=u0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zm(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function f0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jm,Jd,eg,tg,ng,Pu=!1,ao=[],ji=null,Xi=null,Yi=null,wa=new Map,Ta=new Map,Bi=[],h0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function p0(t,e,n,i,r){switch(e){case"focusin":return ji=$s(ji,t,e,n,i,r),!0;case"dragenter":return Xi=$s(Xi,t,e,n,i,r),!0;case"mouseover":return Yi=$s(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wa.set(s,$s(wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,$s(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function ig(t){var e=Sr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=jm(n),e!==null){t.blockedOn=e,ng(t.priority,function(){eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Tu=i,n.target.dispatchEvent(i),Tu=null}else return e=Va(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){jo(t)&&n.delete(e)}function m0(){Pu=!1,ji!==null&&jo(ji)&&(ji=null),Xi!==null&&jo(Xi)&&(Xi=null),Yi!==null&&jo(Yi)&&(Yi=null),wa.forEach(vh),Ta.forEach(vh)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Pu||(Pu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,m0)))}function Aa(t){function e(r){return Ks(r,t)}if(0<ao.length){Ks(ao[0],t);for(var n=1;n<ao.length;n++){var i=ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&Ks(ji,t),Xi!==null&&Ks(Xi,t),Yi!==null&&Ks(Yi,t),wa.forEach(e),Ta.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&Bi.shift()}var Ms=Ri.ReactCurrentBatchConfig,fl=!0;function g0(t,e,n,i){var r=rt,s=Ms.transition;Ms.transition=null;try{rt=1,ef(t,e,n,i)}finally{rt=r,Ms.transition=s}}function v0(t,e,n,i){var r=rt,s=Ms.transition;Ms.transition=null;try{rt=4,ef(t,e,n,i)}finally{rt=r,Ms.transition=s}}function ef(t,e,n,i){if(fl){var r=Lu(t,e,n,i);if(r===null)Ec(t,e,i,hl,n),gh(t,i);else if(p0(r,t,e,n,i))i.stopPropagation();else if(gh(t,i),e&4&&-1<h0.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&Jm(s),s=Lu(t,e,n,i),s===null&&Ec(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var hl=null;function Lu(t,e,n,i){if(hl=null,t=Kd(i),t=Sr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r0()){case Zd:return 1;case $m:return 4;case ul:case s0:return 16;case Km:return 536870912;default:return 16}default:return 16}}var Gi=null,tf=null,Xo=null;function sg(){if(Xo)return Xo;var t,e=tf,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function _h(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:_h,this.isPropagationStopped=_h,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=yn(Gs),Ha=vt({},Gs,{view:0,detail:0}),_0=yn(Ha),pc,mc,Zs,Bl=vt({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(pc=t.screenX-Zs.screenX,mc=t.screenY-Zs.screenY):mc=pc=0,Zs=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),xh=yn(Bl),x0=vt({},Bl,{dataTransfer:0}),y0=yn(x0),S0=vt({},Ha,{relatedTarget:0}),gc=yn(S0),M0=vt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=yn(M0),w0=vt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T0=yn(w0),A0=vt({},Gs,{data:0}),yh=yn(A0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b0[t])?!!e[t]:!1}function rf(){return P0}var L0=vt({},Ha,{key:function(t){if(t.key){var e=R0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=yn(L0),N0=vt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=yn(N0),I0=vt({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),U0=yn(I0),F0=vt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=yn(F0),O0=vt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=yn(O0),B0=[9,13,27,32],sf=yi&&"CompositionEvent"in window,ha=null;yi&&"documentMode"in document&&(ha=document.documentMode);var H0=yi&&"TextEvent"in window&&!ha,ag=yi&&(!sf||ha&&8<ha&&11>=ha),Mh=" ",Eh=!1;function og(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function V0(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(Eh=!0,Mh);case"textInput":return t=e.data,t===Mh&&Eh?null:t;default:return null}}function G0(t,e){if(ls)return t==="compositionend"||!sf&&og(t,e)?(t=sg(),Xo=tf=Gi=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W0[t.type]:e==="textarea"}function cg(t,e,n,i){Bm(i),e=pl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Ra=null;function j0(t){yg(t,0)}function Hl(t){var e=ds(t);if(Nm(e))return t}function X0(t,e){if(t==="change")return e}var ug=!1;if(yi){var vc;if(yi){var _c="oninput"in document;if(!_c){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),_c=typeof Th.oninput=="function"}vc=_c}else vc=!1;ug=vc&&(!document.documentMode||9<document.documentMode)}function Ah(){pa&&(pa.detachEvent("onpropertychange",dg),Ra=pa=null)}function dg(t){if(t.propertyName==="value"&&Hl(Ra)){var e=[];cg(e,Ra,t,Kd(t)),Wm(j0,e)}}function Y0(t,e,n){t==="focusin"?(Ah(),pa=e,Ra=n,pa.attachEvent("onpropertychange",dg)):t==="focusout"&&Ah()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ra)}function $0(t,e){if(t==="click")return Hl(e)}function K0(t,e){if(t==="input"||t==="change")return Hl(e)}function Z0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Z0;function Ca(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hu.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=Rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q0(t){var e=hg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ch(n,s);var a=Ch(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var J0=yi&&"documentMode"in document&&11>=document.documentMode,cs=null,Du=null,ma=null,Nu=!1;function bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||cs==null||cs!==ol(i)||(i=cs,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ca(ma,i)||(ma=i,i=pl(Du,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},xc={},pg={};yi&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Vl(t){if(xc[t])return xc[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pg)return xc[t]=e[n];return t}var mg=Vl("animationend"),gg=Vl("animationiteration"),vg=Vl("animationstart"),_g=Vl("transitionend"),xg=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){xg.set(t,e),Or(e,[t])}for(var yc=0;yc<Ph.length;yc++){var Sc=Ph[yc],ex=Sc.toLowerCase(),tx=Sc[0].toUpperCase()+Sc.slice(1);rr(ex,"on"+tx)}rr(mg,"onAnimationEnd");rr(gg,"onAnimationIteration");rr(vg,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(_g,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,e0(i,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,o,c),s=l}}}if(cl)throw t=Cu,cl=!1,Cu=null,t}function ot(t,e){var n=e[Ou];n===void 0&&(n=e[Ou]=new Set);var i=t+"__bubble";n.has(i)||(Sg(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),Sg(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[co]){t[co]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(nx.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Mc("selectionchange",!1,e))}}function Sg(t,e,n,i){switch(rg(e)){case 1:var r=g0;break;case 4:r=v0;break;default:r=ef}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Sr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Wm(function(){var c=s,u=Kd(n),h=[];e:{var d=xg.get(t);if(d!==void 0){var p=nf,x=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":p=D0;break;case"focusin":x="focus",p=gc;break;case"focusout":x="blur",p=gc;break;case"beforeblur":case"afterblur":p=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=U0;break;case mg:case gg:case vg:p=E0;break;case _g:p=k0;break;case"scroll":p=_0;break;case"wheel":p=z0;break;case"copy":case"cut":case"paste":p=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sh}var S=(e&4)!==0,g=!S&&t==="scroll",f=S?d!==null?d+"Capture":null:d;S=[];for(var _=c,m;_!==null;){m=_;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,f!==null&&(E=Ea(_,f),E!=null&&S.push(Pa(_,E,m)))),g)break;_=_.return}0<S.length&&(d=new p(d,x,null,n,u),h.push({event:d,listeners:S}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Tu&&(x=n.relatedTarget||n.fromElement)&&(Sr(x)||x[Si]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Sr(x):null,x!==null&&(g=zr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=xh,E="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=Sh,E="onPointerLeave",f="onPointerEnter",_="pointer"),g=p==null?d:ds(p),m=x==null?d:ds(x),d=new S(E,_+"leave",p,n,u),d.target=g,d.relatedTarget=m,E=null,Sr(u)===c&&(S=new S(f,_+"enter",x,n,u),S.target=m,S.relatedTarget=g,E=S),g=E,p&&x)t:{for(S=p,f=x,_=0,m=S;m;m=Vr(m))_++;for(m=0,E=f;E;E=Vr(E))m++;for(;0<_-m;)S=Vr(S),_--;for(;0<m-_;)f=Vr(f),m--;for(;_--;){if(S===f||f!==null&&S===f.alternate)break t;S=Vr(S),f=Vr(f)}S=null}else S=null;p!==null&&Dh(h,d,p,S,!1),x!==null&&g!==null&&Dh(h,g,x,S,!0)}}e:{if(d=c?ds(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=X0;else if(wh(d))if(ug)b=K0;else{b=q0;var C=Y0}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=$0);if(b&&(b=b(t,c))){cg(h,b,n,u);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&yu(d,"number",d.value)}switch(C=c?ds(c):window,t){case"focusin":(wh(C)||C.contentEditable==="true")&&(cs=C,Du=c,ma=null);break;case"focusout":ma=Du=cs=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,bh(h,n,u);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":bh(h,n,u)}var R;if(sf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ls?og(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(ag&&n.locale!=="ko"&&(ls||w!=="onCompositionStart"?w==="onCompositionEnd"&&ls&&(R=sg()):(Gi=u,tf="value"in Gi?Gi.value:Gi.textContent,ls=!0)),C=pl(c,w),0<C.length&&(w=new yh(w,t,null,n,u),h.push({event:w,listeners:C}),R?w.data=R:(R=lg(n),R!==null&&(w.data=R)))),(R=H0?V0(t,n):G0(t,n))&&(c=pl(c,"onBeforeInput"),0<c.length&&(u=new yh("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=R))}yg(h,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Pa(t,s,r)),s=Ea(t,e),s!=null&&i.push(Pa(t,s,r))),t=t.return}return i}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ea(n,s),l!=null&&a.unshift(Pa(n,l,o))):r||(l=Ea(n,s),l!=null&&a.push(Pa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ix=/\r\n?/g,rx=/\u0000|\uFFFD/g;function Nh(t){return(typeof t=="string"?t:""+t).replace(ix,`
`).replace(rx,"")}function uo(t,e,n){if(e=Nh(e),Nh(t)!==e&&n)throw Error(se(425))}function ml(){}var Iu=null,Uu=null;function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(ox)}:ku;function ox(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Ws,La="__reactProps$"+Ws,Si="__reactContainer$"+Ws,Ou="__reactEvents$"+Ws,lx="__reactListeners$"+Ws,cx="__reactHandles$"+Ws;function Sr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uh(t);t!==null;){if(n=t[Zn])return n;t=Uh(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Zn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Gl(t){return t[La]||null}var zu=[],fs=-1;function sr(t){return{current:t}}function ct(t){0>fs||(t.current=zu[fs],zu[fs]=null,fs--)}function at(t,e){fs++,zu[fs]=t.current,t.current=e}var nr={},qt=sr(nr),sn=sr(!1),Lr=nr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function gl(){ct(sn),ct(qt)}function Fh(t,e,n){if(qt.current!==nr)throw Error(se(168));at(qt,e),at(sn,n)}function Mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Y_(t)||"Unknown",r));return vt({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Lr=qt.current,at(qt,t),at(sn,sn.current),!0}function kh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Mg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ct(sn),ct(qt),at(qt,t)):ct(sn),at(sn,n)}var hi=null,Wl=!1,Tc=!1;function Eg(t){hi===null?hi=[t]:hi.push(t)}function ux(t){Wl=!0,Eg(t)}function ar(){if(!Tc&&hi!==null){Tc=!0;var t=0,e=rt;try{var n=hi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Wl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),qm(Zd,ar),r}finally{rt=e,Tc=!1}}return null}var hs=[],ps=0,_l=null,xl=0,wn=[],Tn=0,Dr=null,mi=1,gi="";function mr(t,e){hs[ps++]=xl,hs[ps++]=_l,_l=t,xl=e}function wg(t,e,n){wn[Tn++]=mi,wn[Tn++]=gi,wn[Tn++]=Dr,Dr=t;var i=mi;t=gi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Gn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function of(t){t.return!==null&&(mr(t,1),wg(t,1,0))}function lf(t){for(;t===_l;)_l=hs[--ps],hs[ps]=null,xl=hs[--ps],hs[ps]=null;for(;t===Dr;)Dr=wn[--Tn],wn[Tn]=null,gi=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,dt=!1,On=null;function Tg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Oh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(dt){var e=mn;if(e){var n=e;if(!Oh(t,e)){if(Bu(t))throw Error(se(418));e=qi(n.nextSibling);var i=gn;e&&Oh(t,e)?Tg(i,n):(t.flags=t.flags&-4097|2,dt=!1,gn=t)}}else{if(Bu(t))throw Error(se(418));t.flags=t.flags&-4097|2,dt=!1,gn=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function fo(t){if(t!==gn)return!1;if(!dt)return zh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fu(t.type,t.memoizedProps)),e&&(e=mn)){if(Bu(t))throw Ag(),Error(se(418));for(;e;)Tg(t,e),e=qi(e.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?qi(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=mn;t;)t=qi(t.nextSibling)}function Ls(){mn=gn=null,dt=!1}function cf(t){On===null?On=[t]:On.push(t)}var dx=Ri.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function Rg(t){function e(f,_){if(t){var m=f.deletions;m===null?(f.deletions=[_],f.flags|=16):m.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Qi(f,_),f.index=0,f.sibling=null,f}function s(f,_,m){return f.index=m,t?(m=f.alternate,m!==null?(m=m.index,m<_?(f.flags|=2,_):m):(f.flags|=2,_)):(f.flags|=1048576,_)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,_,m,E){return _===null||_.tag!==6?(_=Dc(m,f.mode,E),_.return=f,_):(_=r(_,m),_.return=f,_)}function l(f,_,m,E){var b=m.type;return b===os?u(f,_,m.props.children,E,m.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Oi&&Bh(b)===_.type)?(E=r(_,m.props),E.ref=Qs(f,_,m),E.return=f,E):(E=el(m.type,m.key,m.props,null,f.mode,E),E.ref=Qs(f,_,m),E.return=f,E)}function c(f,_,m,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=Nc(m,f.mode,E),_.return=f,_):(_=r(_,m.children||[]),_.return=f,_)}function u(f,_,m,E,b){return _===null||_.tag!==7?(_=Rr(m,f.mode,E,b),_.return=f,_):(_=r(_,m),_.return=f,_)}function h(f,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Dc(""+_,f.mode,m),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case to:return m=el(_.type,_.key,_.props,null,f.mode,m),m.ref=Qs(f,null,_),m.return=f,m;case as:return _=Nc(_,f.mode,m),_.return=f,_;case Oi:var E=_._init;return h(f,E(_._payload),m)}if(oa(_)||Ys(_))return _=Rr(_,f.mode,m,null),_.return=f,_;ho(f,_)}return null}function d(f,_,m,E){var b=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:o(f,_,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case to:return m.key===b?l(f,_,m,E):null;case as:return m.key===b?c(f,_,m,E):null;case Oi:return b=m._init,d(f,_,b(m._payload),E)}if(oa(m)||Ys(m))return b!==null?null:u(f,_,m,E,null);ho(f,m)}return null}function p(f,_,m,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(m)||null,o(_,f,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case to:return f=f.get(E.key===null?m:E.key)||null,l(_,f,E,b);case as:return f=f.get(E.key===null?m:E.key)||null,c(_,f,E,b);case Oi:var C=E._init;return p(f,_,m,C(E._payload),b)}if(oa(E)||Ys(E))return f=f.get(m)||null,u(_,f,E,b,null);ho(_,E)}return null}function x(f,_,m,E){for(var b=null,C=null,R=_,w=_=0,v=null;R!==null&&w<m.length;w++){R.index>w?(v=R,R=null):v=R.sibling;var y=d(f,R,m[w],E);if(y===null){R===null&&(R=v);break}t&&R&&y.alternate===null&&e(f,R),_=s(y,_,w),C===null?b=y:C.sibling=y,C=y,R=v}if(w===m.length)return n(f,R),dt&&mr(f,w),b;if(R===null){for(;w<m.length;w++)R=h(f,m[w],E),R!==null&&(_=s(R,_,w),C===null?b=R:C.sibling=R,C=R);return dt&&mr(f,w),b}for(R=i(f,R);w<m.length;w++)v=p(R,f,w,m[w],E),v!==null&&(t&&v.alternate!==null&&R.delete(v.key===null?w:v.key),_=s(v,_,w),C===null?b=v:C.sibling=v,C=v);return t&&R.forEach(function(P){return e(f,P)}),dt&&mr(f,w),b}function S(f,_,m,E){var b=Ys(m);if(typeof b!="function")throw Error(se(150));if(m=b.call(m),m==null)throw Error(se(151));for(var C=b=null,R=_,w=_=0,v=null,y=m.next();R!==null&&!y.done;w++,y=m.next()){R.index>w?(v=R,R=null):v=R.sibling;var P=d(f,R,y.value,E);if(P===null){R===null&&(R=v);break}t&&R&&P.alternate===null&&e(f,R),_=s(P,_,w),C===null?b=P:C.sibling=P,C=P,R=v}if(y.done)return n(f,R),dt&&mr(f,w),b;if(R===null){for(;!y.done;w++,y=m.next())y=h(f,y.value,E),y!==null&&(_=s(y,_,w),C===null?b=y:C.sibling=y,C=y);return dt&&mr(f,w),b}for(R=i(f,R);!y.done;w++,y=m.next())y=p(R,f,w,y.value,E),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?w:y.key),_=s(y,_,w),C===null?b=y:C.sibling=y,C=y);return t&&R.forEach(function(U){return e(f,U)}),dt&&mr(f,w),b}function g(f,_,m,E){if(typeof m=="object"&&m!==null&&m.type===os&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case to:e:{for(var b=m.key,C=_;C!==null;){if(C.key===b){if(b=m.type,b===os){if(C.tag===7){n(f,C.sibling),_=r(C,m.props.children),_.return=f,f=_;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Oi&&Bh(b)===C.type){n(f,C.sibling),_=r(C,m.props),_.ref=Qs(f,C,m),_.return=f,f=_;break e}n(f,C);break}else e(f,C);C=C.sibling}m.type===os?(_=Rr(m.props.children,f.mode,E,m.key),_.return=f,f=_):(E=el(m.type,m.key,m.props,null,f.mode,E),E.ref=Qs(f,_,m),E.return=f,f=E)}return a(f);case as:e:{for(C=m.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(f,_.sibling),_=r(_,m.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Nc(m,f.mode,E),_.return=f,f=_}return a(f);case Oi:return C=m._init,g(f,_,C(m._payload),E)}if(oa(m))return x(f,_,m,E);if(Ys(m))return S(f,_,m,E);ho(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,m),_.return=f,f=_):(n(f,_),_=Dc(m,f.mode,E),_.return=f,f=_),a(f)):n(f,_)}return g}var Ds=Rg(!0),Cg=Rg(!1),yl=sr(null),Sl=null,ms=null,uf=null;function df(){uf=ms=Sl=null}function ff(t){var e=yl.current;ct(yl),t._currentValue=e}function Vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){Sl=t,uf=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(Sl===null)throw Error(se(308));ms=t,Sl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var Mr=null;function hf(t){Mr===null?Mr=[t]:Mr.push(t)}function bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}function Hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ml(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,u=c=l=null,o=s;do{var d=o.lane,p=o.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,S=o;switch(d=e,p=n,S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(p,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,d=typeof x=="function"?x.call(p,h,d):x,d==null)break e;h=vt({},h,d);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else p={eventTime:p,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=h}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ga={},ti=sr(Ga),Da=sr(Ga),Na=sr(Ga);function Er(t){if(t===Ga)throw Error(se(174));return t}function mf(t,e){switch(at(Na,e),at(Da,t),at(ti,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Mu(e,t)}ct(ti),at(ti,e)}function Ns(){ct(ti),ct(Da),ct(Na)}function Lg(t){Er(Na.current);var e=Er(ti.current),n=Mu(e,t.type);e!==n&&(at(Da,t),at(ti,n))}function gf(t){Da.current===t&&(ct(ti),ct(Da))}var mt=sr(0);function El(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function vf(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var $o=Ri.ReactCurrentDispatcher,Rc=Ri.ReactCurrentBatchConfig,Nr=0,gt=null,bt=null,Ut=null,wl=!1,ga=!1,Ia=0,fx=0;function Gt(){throw Error(se(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function xf(t,e,n,i,r,s){if(Nr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$o.current=t===null||t.memoizedState===null?gx:vx,t=n(i,r),ga){s=0;do{if(ga=!1,Ia=0,25<=s)throw Error(se(301));s+=1,Ut=bt=null,e.updateQueue=null,$o.current=_x,t=n(i,r)}while(ga)}if($o.current=Tl,e=bt!==null&&bt.next!==null,Nr=0,Ut=bt=gt=null,wl=!1,e)throw Error(se(300));return t}function yf(){var t=Ia!==0;return Ia=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Pn(){if(bt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ua(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,gt.lanes|=u,Ir|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,jn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dg(){}function Ng(t,e){var n=gt,i=Pn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Sf(Fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Fa(9,Ug.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(se(349));Nr&30||Ig(n,e,r)}return r}function Ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,kg(e)&&Og(t)}function Fg(t,e,n){return n(function(){kg(e)&&Og(t)})}function kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Og(t){var e=Mi(t,1);e!==null&&Wn(e,t,1,-1)}function Gh(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=mx.bind(null,gt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zg(){return Pn().memoizedState}function Ko(t,e,n,i){var r=qn();gt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&_f(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function Wh(t,e){return Ko(8390656,8,t,e)}function Sf(t,e){return jl(2048,8,t,e)}function Bg(t,e){return jl(4,2,t,e)}function Hg(t,e){return jl(4,4,t,e)}function Vg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gg(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,Vg.bind(null,e,t),n)}function Mf(){}function Wg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_f(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xg(t,e,n){return Nr&21?(jn(n,e)||(n=Zm(),gt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function hx(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{rt=n,Rc.transition=i}}function Yg(){return Pn().memoizedState}function px(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},qg(t))$g(e,n);else if(n=bg(t,e,n,i),n!==null){var r=Zt();Wn(n,t,i,r),Kg(n,e,i)}}function mx(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(qg(t))$g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=bg(t,e,r,i),n!==null&&(r=Zt(),Wn(n,t,i,r),Kg(n,e,i))}}function qg(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function $g(t,e){ga=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}var Tl={readContext:bn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},gx={readContext:bn,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,Vg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=px.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Gh,useDebugValue:Mf,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Gh(!1),e=t[0];return t=hx.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=qn();if(dt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),kt===null)throw Error(se(349));Nr&30||Ig(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wh(Fg.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=kt.identifierPrefix;if(dt){var n=gi,i=mi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vx={readContext:bn,useCallback:Wg,useContext:bn,useEffect:Sf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Hg,useMemo:jg,useReducer:Cc,useRef:zg,useState:function(){return Cc(Ua)},useDebugValue:Mf,useDeferredValue:function(t){var e=Pn();return Xg(e,bt.memoizedState,t)},useTransition:function(){var t=Cc(Ua)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ng,useId:Yg,unstable_isNewReconciler:!1},_x={readContext:bn,useCallback:Wg,useContext:bn,useEffect:Sf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Hg,useMemo:jg,useReducer:bc,useRef:zg,useState:function(){return bc(Ua)},useDebugValue:Mf,useDeferredValue:function(t){var e=Pn();return bt===null?e.memoizedState=t:Xg(e,bt.memoizedState,t)},useTransition:function(){var t=bc(Ua)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ng,useId:Yg,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Zi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Wn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Zi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Wn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Zi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Wn(e,t,i,n),qo(e,t,i))}};function jh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function Zg(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=an(e)?Lr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Wu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=an(e)?Lr:qt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),Ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=X_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xx=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Rl||(Rl=!0,td=i),ju(t,e)},n}function Jg(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Yh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new xx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $h(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var yx=Ri.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Cg(e,null,n,i):Ds(e,t.child,n,i)}function Kh(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=xf(t,e,n,i,s,r),n=yf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&n&&of(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Zh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ev(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function ev(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return Xu(t,e,n,i,r)}function tv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(vs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(vs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(vs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(vs,pn),pn|=i;return Kt(t,e,r,n),e.child}function nv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,i,r){var s=an(n)?Lr:qt.current;return s=Ps(e,s),Es(e,r),n=xf(t,e,n,i,s,r),i=yf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&i&&of(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Qh(t,e,n,i,r){if(an(n)){var s=!0;vl(e)}else s=!1;if(Es(e,r),e.stateNode===null)Zo(t,e),Zg(e,n,i),Wu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=an(n)?Lr:qt.current,c=Ps(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Xh(e,a,i,c),zi=!1;var d=e.memoizedState;a.state=d,Ml(e,i,a,r),l=e.memoizedState,o!==i||d!==l||sn.current||zi?(typeof u=="function"&&(Gu(e,n,u,i),l=e.memoizedState),(o=zi||jh(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Pg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Fn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=an(n)?Lr:qt.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&Xh(e,a,i,l),zi=!1,d=e.memoizedState,a.state=d,Ml(e,i,a,r);var x=e.memoizedState;o!==h||d!==x||sn.current||zi?(typeof p=="function"&&(Gu(e,n,p,i),x=e.memoizedState),(c=zi||jh(e,n,c,i,d,x,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Yu(t,e,n,i,s,r)}function Yu(t,e,n,i,r,s){nv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kh(e,n,!1),Ei(t,e,s);i=e.stateNode,yx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&kh(e,n,!0),e.child}function iv(t){var e=t.stateNode;e.pendingContext?Fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fh(t,e.context,!1),mf(t,e.containerInfo)}function Jh(t,e,n,i,r){return Ls(),cf(r),e.flags|=256,Kt(t,e,n,i),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function rv(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=$l(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$u(n),e.memoizedState=qu,t):Ef(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Sx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Qi(o,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?$u(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=qu,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ef(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function po(t,e,n,i){return i!==null&&cf(i),Ds(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Sx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(se(422))),po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$l({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=$u(a),e.memoizedState=qu,s);if(!(e.mode&1))return po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Pc(s,i,void 0),po(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Wn(i,t,r,-1))}return bf(),i=Pc(Error(se(421))),po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=qi(r.nextSibling),gn=e,dt=!0,On=null,t!==null&&(wn[Tn++]=mi,wn[Tn++]=gi,wn[Tn++]=Dr,mi=t.id,gi=t.overflow,Dr=e),e=Ef(e,i.children),e.flags|=4096,e)}function ep(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vu(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ep(t,n,e);else if(t.tag===19)ep(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&El(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&El(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Mx(t,e,n){switch(e.tag){case 3:iv(e),Ls();break;case 5:Lg(e);break;case 1:an(e.type)&&vl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(yl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?rv(t,e,n):(at(mt,mt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,tv(t,e,n)}return Ei(t,e,n)}var av,Ku,ov,lv;av=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(ti.current);var s=null;switch(n){case"input":r=_u(t,r),i=_u(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=Su(t,r),i=Su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ml)}Eu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ex(t,e,n){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return an(e.type)&&gl(),Wt(e),null;case 3:return i=e.stateNode,Ns(),ct(sn),ct(qt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(rd(On),On=null))),Ku(t,e),Wt(e),null;case 5:gf(e);var r=Er(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Wt(e),null}if(t=Er(ti.current),fo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[La]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)ot(ca[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":ch(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":dh(i,s),ot("invalid",i)}Eu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&uo(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":no(i),uh(i,s,!0);break;case"textarea":no(i),fh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Zn]=e,t[La]=i,av(t,e,!1,!1),e.stateNode=t;e:{switch(a=wu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)ot(ca[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":ch(t,i),r=_u(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":dh(t,i),r=Su(t,i),ot("invalid",t);break;default:r=i}Eu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?zm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&km(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Xd(t,s,l,a))}switch(n){case"input":no(t),uh(t,i,!1);break;case"textarea":no(t),fh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)lv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Er(Na.current),Er(ti.current),fo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:uo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Wt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))Ag(),Ls(),e.flags|=98560,s=!1;else if(s=fo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Zn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else On!==null&&(rd(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Pt===0&&(Pt=3):bf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Ns(),Ku(t,e),t===null&&ba(e.stateNode.containerInfo),Wt(e),null;case 10:return ff(e.type._context),Wt(e),null;case 17:return an(e.type)&&gl(),Wt(e),null;case 19:if(ct(mt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=El(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Us&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=El(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Wt(e),null}else 2*wt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function wx(t,e){switch(lf(e),e.tag){case 1:return an(e.type)&&gl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ct(sn),ct(qt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return Ns(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var mo=!1,Yt=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Zu(t,e,n){try{n()}catch(i){yt(t,e,i)}}var tp=!1;function Ax(t,e){if(Iu=fl,t=hg(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++u===i&&(l=a),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:t,selectionRange:n},fl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,g=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?S:Fn(e.type,S),g);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){yt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return x=tp,tp=!1,x}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,n,s)}r=r.next}while(r!==i)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cv(t){var e=t.alternate;e!==null&&(t.alternate=null,cv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[La],delete e[Ou],delete e[lx],delete e[cx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uv(t){return t.tag===5||t.tag===3||t.tag===4}function np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ml));else if(i!==4&&(t=t.child,t!==null))for(Ju(t,e,n),t=t.sibling;t!==null;)Ju(t,e,n),t=t.sibling}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Bt=null,kn=!1;function bi(t,e,n){for(n=n.child;n!==null;)dv(t,e,n),n=n.sibling}function dv(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(zl,n)}catch{}switch(n.tag){case 5:Yt||gs(n,e);case 6:var i=Bt,r=kn;Bt=null,bi(t,e,n),Bt=i,kn=r,Bt!==null&&(kn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(kn?(t=Bt,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),Aa(t)):wc(Bt,n.stateNode));break;case 4:i=Bt,r=kn,Bt=n.stateNode.containerInfo,kn=!0,bi(t,e,n),Bt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Zu(n,e,a),r=r.next}while(r!==i)}bi(t,e,n);break;case 1:if(!Yt&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,bi(t,e,n),Yt=i):bi(t,e,n);break;default:bi(t,e,n)}}function ip(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(i){var r=Ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,kn=!1;break e;case 3:Bt=o.stateNode.containerInfo,kn=!0;break e;case 4:Bt=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Bt===null)throw Error(se(160));dv(s,a,r),Bt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,t),e=e.sibling}function fv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Yn(t),i&4){try{va(3,t,t.return),Yl(3,t)}catch(S){yt(t,t.return,S)}try{va(5,t,t.return)}catch(S){yt(t,t.return,S)}}break;case 1:Dn(e,t),Yn(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(Dn(e,t),Yn(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(S){yt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Im(r,s),wu(o,a);var c=wu(o,s);for(a=0;a<l.length;a+=2){var u=l[a],h=l[a+1];u==="style"?zm(r,h):u==="dangerouslySetInnerHTML"?km(r,h):u==="children"?Ma(r,h):Xd(r,u,h,c)}switch(o){case"input":xu(r,s);break;case"textarea":Um(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?xs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[La]=s}catch(S){yt(t,t.return,S)}}break;case 6:if(Dn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){yt(t,t.return,S)}}break;case 3:if(Dn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(S){yt(t,t.return,S)}break;case 4:Dn(e,t),Yn(t);break;case 13:Dn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=wt())),i&4&&ip(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Dn(e,t),Yt=c):Dn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(h=ye=u;ye!==null;){switch(d=ye,p=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:gs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){yt(i,n,S)}}break;case 5:gs(d,d.return);break;case 22:if(d.memoizedState!==null){sp(h);continue}}p!==null?(p.return=d,ye=p):sp(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Om("display",a))}catch(S){yt(t,t.return,S)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){yt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),Yn(t),i&4&&ip(t);break;case 21:break;default:Dn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=np(t);ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=np(t);Ju(t,o,a);break;default:throw Error(se(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){ye=t,hv(t)}function hv(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||mo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=mo;var c=Yt;if(mo=a,(Yt=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?ap(r):l!==null?(l.return=a,ye=l):ap(r);for(;s!==null;)ye=s,hv(s),s=s.sibling;ye=r,mo=o,Yt=c}rp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):rp(t)}}function rp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Yl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Yt||e.flags&512&&Qu(e)}catch(d){yt(e,e.return,d)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function sp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ap(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Qu(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{Qu(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var Cx=Math.ceil,Al=Ri.ReactCurrentDispatcher,wf=Ri.ReactCurrentOwner,Cn=Ri.ReactCurrentBatchConfig,qe=0,kt=null,Ct=null,Ht=0,pn=0,vs=sr(0),Pt=0,ka=null,Ir=0,ql=0,Tf=0,_a=null,tn=null,Af=0,Us=1/0,fi=null,Rl=!1,td=null,Ki=null,go=!1,Wi=null,Cl=0,xa=0,nd=null,Qo=-1,Jo=0;function Zt(){return qe&6?wt():Qo!==-1?Qo:Qo=wt()}function Zi(t){return t.mode&1?qe&2&&Ht!==0?Ht&-Ht:dx.transition!==null?(Jo===0&&(Jo=Zm()),Jo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t):1}function Wn(t,e,n,i){if(50<xa)throw xa=0,nd=null,Error(se(185));Ba(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(ql|=n),Pt===4&&Hi(t,Ht)),on(t,i),n===1&&qe===0&&!(e.mode&1)&&(Us=wt()+500,Wl&&ar()))}function on(t,e){var n=t.callbackNode;d0(t,e);var i=dl(t,t===kt?Ht:0);if(i===0)n!==null&&mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mh(n),e===1)t.tag===0?ux(op.bind(null,t)):Eg(op.bind(null,t)),ax(function(){!(qe&6)&&ar()}),n=null;else{switch(Qm(i)){case 1:n=Zd;break;case 4:n=$m;break;case 16:n=ul;break;case 536870912:n=Km;break;default:n=ul}n=Sv(n,pv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function pv(t,e){if(Qo=-1,Jo=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=dl(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=qe;qe|=2;var s=gv();(kt!==t||Ht!==e)&&(fi=null,Us=wt()+500,Ar(t,e));do try{Lx();break}catch(o){mv(t,o)}while(!0);df(),Al.current=s,qe=r,Ct!==null?e=0:(kt=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=bu(t),r!==0&&(i=r,e=id(t,r))),e===1)throw n=ka,Ar(t,0),Hi(t,i),on(t,wt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!bx(r)&&(e=bl(t,i),e===2&&(s=bu(t),s!==0&&(i=s,e=id(t,s))),e===1))throw n=ka,Ar(t,0),Hi(t,i),on(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:gr(t,tn,fi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Af+500-wt(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(gr.bind(null,t,tn,fi),e);break}gr(t,tn,fi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){t.timeoutHandle=ku(gr.bind(null,t,tn,fi),i);break}gr(t,tn,fi);break;case 5:gr(t,tn,fi);break;default:throw Error(se(329))}}}return on(t,wt()),t.callbackNode===n?pv.bind(null,t):null}function id(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=bl(t,e),t!==2&&(e=tn,tn=n,e!==null&&rd(e)),t}function rd(t){tn===null?tn=t:tn.push.apply(tn,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Tf,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function op(t){if(qe&6)throw Error(se(327));ws();var e=dl(t,0);if(!(e&1))return on(t,wt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=bu(t);i!==0&&(e=i,n=id(t,i))}if(n===1)throw n=ka,Ar(t,0),Hi(t,e),on(t,wt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,tn,fi),on(t,wt()),null}function Rf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Us=wt()+500,Wl&&ar())}}function Ur(t){Wi!==null&&Wi.tag===0&&!(qe&6)&&ws();var e=qe;qe|=1;var n=Cn.transition,i=rt;try{if(Cn.transition=null,rt=1,t)return t()}finally{rt=i,Cn.transition=n,qe=e,!(qe&6)&&ar()}}function Cf(){pn=vs.current,ct(vs)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gl();break;case 3:Ns(),ct(sn),ct(qt),vf();break;case 5:gf(i);break;case 4:Ns();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:ff(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(kt=t,Ct=t=Qi(t.current,null),Ht=pn=e,Pt=0,ka=null,Tf=ql=Ir=0,tn=_a=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Mr=null}return t}function mv(t,e){do{var n=Ct;try{if(df(),$o.current=Tl,wl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Nr=0,Ut=bt=gt=null,ga=!1,Ia=0,wf.current=null,n===null||n.return===null){Pt=1,ka=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=qh(a);if(p!==null){p.flags&=-257,$h(p,a,o,s,e),p.mode&1&&Yh(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Yh(s,c,e),bf();break e}l=Error(se(426))}}else if(dt&&o.mode&1){var g=qh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),$h(g,a,o,s,e),cf(Is(l,o));break e}}s=l=Is(l,o),Pt!==4&&(Pt=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Qg(s,l,e);Hh(s,f);break e;case 1:o=l;var _=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ki===null||!Ki.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Jg(s,o,e);Hh(s,E);break e}}s=s.return}while(s!==null)}_v(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function gv(){var t=Al.current;return Al.current=Tl,t===null?Tl:t}function bf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),kt===null||!(Ir&268435455)&&!(ql&268435455)||Hi(kt,Ht)}function bl(t,e){var n=qe;qe|=2;var i=gv();(kt!==t||Ht!==e)&&(fi=null,Ar(t,e));do try{Px();break}catch(r){mv(t,r)}while(!0);if(df(),qe=n,Al.current=i,Ct!==null)throw Error(se(261));return kt=null,Ht=0,Pt}function Px(){for(;Ct!==null;)vv(Ct)}function Lx(){for(;Ct!==null&&!n0();)vv(Ct)}function vv(t){var e=yv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?_v(t):Ct=e,wf.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Ex(n,e,pn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function gr(t,e,n){var i=rt,r=Cn.transition;try{Cn.transition=null,rt=1,Dx(t,e,n,i)}finally{Cn.transition=r,rt=i}return null}function Dx(t,e,n,i){do ws();while(Wi!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f0(t,s),t===kt&&(Ct=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,Sv(ul,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=rt;rt=1;var o=qe;qe|=4,wf.current=null,Ax(t,n),fv(n,t),Q0(Uu),fl=!!Iu,Uu=Iu=null,t.current=n,Rx(n),i0(),qe=o,rt=a,Cn.transition=s}else t.current=n;if(go&&(go=!1,Wi=t,Cl=r),s=t.pendingLanes,s===0&&(Ki=null),a0(n.stateNode),on(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Rl)throw Rl=!1,t=td,td=null,t;return Cl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===nd?xa++:(xa=0,nd=t):xa=0,ar(),null}function ws(){if(Wi!==null){var t=Qm(Cl),e=Cn.transition,n=rt;try{if(Cn.transition=null,rt=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,Cl=0,qe&6)throw Error(se(331));var r=qe;for(qe|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:va(8,u,s)}var h=u.child;if(h!==null)h.return=u,ye=h;else for(;ye!==null;){u=ye;var d=u.sibling,p=u.return;if(cv(u),u===c){ye=null;break}if(d!==null){d.return=p,ye=d;break}ye=p}}}var x=s.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ye=f;break e}ye=s.return}}var _=t.current;for(ye=_;ye!==null;){a=ye;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,ye=m;else e:for(a=_;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Yl(9,o)}}catch(b){yt(o,o.return,b)}if(o===a){ye=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,ye=E;break e}ye=o.return}}if(qe=r,ar(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(zl,t)}catch{}i=!0}return i}finally{rt=n,Cn.transition=e}}return!1}function lp(t,e,n){e=Is(n,e),e=Qg(t,e,1),t=$i(t,e,1),e=Zt(),t!==null&&(Ba(t,1,e),on(t,e))}function yt(t,e,n){if(t.tag===3)lp(t,t,n);else for(;e!==null;){if(e.tag===3){lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Is(n,t),t=Jg(e,t,1),e=$i(e,t,1),t=Zt(),e!==null&&(Ba(e,1,t),on(e,t));break}}e=e.return}}function Nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>wt()-Af?Ar(t,0):Tf|=n),on(t,e)}function xv(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=Zt();t=Mi(t,e),t!==null&&(Ba(t,e,n),on(t,n))}function Ix(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xv(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),xv(t,n)}var yv;yv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Mx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,dt&&e.flags&1048576&&wg(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=Ps(e,qt.current);Es(e,n),r=xf(null,e,i,t,r,n);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Wu(e,i,t,n),e=Yu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&of(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kx(i),t=Fn(i,t),r){case 0:e=Xu(null,e,i,t,n);break e;case 1:e=Qh(null,e,i,t,n);break e;case 11:e=Kh(null,e,i,t,n);break e;case 14:e=Zh(null,e,i,Fn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Xu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Qh(t,e,i,r,n);case 3:e:{if(iv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pg(t,e),Ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(se(423)),e),e=Jh(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(se(424)),e),e=Jh(t,e,i,n,r);break e}else for(mn=qi(e.stateNode.containerInfo.firstChild),gn=e,dt=!0,On=null,n=Cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=Ei(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return Lg(e),t===null&&Hu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Fu(i,r)?a=null:s!==null&&Fu(i,s)&&(e.flags|=32),nv(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return rv(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Kh(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(yl,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!sn.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Vu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=bn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Zh(t,e,i,r,n);case 15:return ev(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Zo(t,e),e.tag=1,an(i)?(t=!0,vl(e)):t=!1,Es(e,n),Zg(e,i,r),Wu(e,i,r,n),Yu(null,e,i,!0,t,n);case 19:return sv(t,e,n);case 22:return tv(t,e,n)}throw Error(se(156,e.tag))};function Sv(t,e){return qm(t,e)}function Fx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Fx(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kx(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===$d)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Pf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case os:return Rr(n.children,r,s,e);case Yd:a=8,r|=8;break;case pu:return t=An(12,n,e,r|2),t.elementType=pu,t.lanes=s,t;case mu:return t=An(13,n,e,r),t.elementType=mu,t.lanes=s,t;case gu:return t=An(19,n,e,r),t.elementType=gu,t.lanes=s,t;case Lm:return $l(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bm:a=10;break e;case Pm:a=9;break e;case qd:a=11;break e;case $d:a=14;break e;case Oi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function $l(t,e,n,i){return t=An(22,t,i,e),t.elementType=Lm,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Nc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,i,r,s,a,o,l){return t=new Ox(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mv(t){if(!t)return nr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return Mg(t,n,e)}return e}function Ev(t,e,n,i,r,s,a,o,l){return t=Lf(n,i,!0,t,r,s,a,o,l),t.context=Mv(null),n=t.current,i=Zt(),r=Zi(n),s=xi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,Ba(t,r,i),on(t,i),t}function Kl(t,e,n,i){var r=e.current,s=Zt(),a=Zi(r);return n=Mv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,a),t!==null&&(Wn(t,r,a,s),qo(t,r,a)),a}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){cp(t,e),(t=t.alternate)&&cp(t,e)}function Bx(){return null}var wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Zl.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Kl(t,e,null,null)};Zl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Kl(null,t,null,null)}),e[Si]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&ig(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function up(){}function Hx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pl(a);s.call(c)}}var a=Ev(e,i,t,0,null,!1,!1,"",up);return t._reactRootContainer=a,t[Si]=a.current,ba(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Pl(l);o.call(c)}}var l=Lf(t,0,!1,null,null,!1,!1,"",up);return t._reactRootContainer=l,t[Si]=l.current,ba(t.nodeType===8?t.parentNode:t),Ur(function(){Kl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Pl(a);o.call(l)}}Kl(e,a,t,r)}else a=Hx(n,e,t,r,i);return Pl(a)}Jm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Qd(e,n|1),on(e,wt()),!(qe&6)&&(Us=wt()+500,ar()))}break;case 13:Ur(function(){var i=Mi(t,1);if(i!==null){var r=Zt();Wn(i,t,1,r)}}),Df(t,1)}};Jd=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=Zt();Wn(e,t,134217728,n)}Df(t,134217728)}};eg=function(t){if(t.tag===13){var e=Zi(t),n=Mi(t,e);if(n!==null){var i=Zt();Wn(n,t,e,i)}Df(t,e)}};tg=function(){return rt};ng=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Au=function(t,e,n){switch(e){case"input":if(xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(se(90));Nm(i),xu(i,r)}}}break;case"textarea":Um(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};Vm=Rf;Gm=Ur;var Vx={usingClientEntryPoint:!1,Events:[Va,ds,Gl,Bm,Hm,Rf]},ea={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xm(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{zl=vo.inject(Gx),ei=vo}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(se(200));return zx(t,e,null,n)};xn.createRoot=function(t,e){if(!If(t))throw Error(se(299));var n=!1,i="",r=wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,ba(t.nodeType===8?t.parentNode:t),new Nf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Xm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Ur(t)};xn.hydrate=function(t,e,n){if(!Ql(e))throw Error(se(200));return Jl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!If(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=wv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,r,!1,s,a),t[Si]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Zl(e)};xn.render=function(t,e,n){if(!Ql(e))throw Error(se(200));return Jl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(se(40));return t._reactRootContainer?(Ur(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};xn.unstable_batchedUpdates=Rf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ql(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Jl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(t){console.error(t)}}Tv(),Tm.exports=xn;var Wx=Tm.exports,Av,dp=Wx;Av=dp.createRoot,dp.hydrateRoot;const Rv="https://docs.google.com/spreadsheets/d/1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU/edit?usp=sharing",jx="Daily Log",Xx="Replies",Cv="https://docs.google.com/spreadsheets/d/10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo/edit?usp=sharing",Yx=["Lead Tracker","Leads","LEAD TRACKER","Sheet1",""];function fp(t){const e=String(Rv).match(/\/d\/([\w-]+)/);return e?"https://docs.google.com/spreadsheets/d/"+e[1]+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(t):""}function qx(){const t=String(Cv).match(/\/d\/([\w-]+)/);return t?Yx.map(e=>"https://docs.google.com/spreadsheets/d/"+t[1]+"/gviz/tq?tqx=out:csv"+(e?"&sheet="+encodeURIComponent(e):"")):[]}const $x="auto",Wa=.04,ja=.3,Kx=5*60*1e3,hp=.075,St={replyRate:[.03,.06],bookingRate:[.25,.4],showRate:[.6,.8],closeRate:[.15,.3]},ft=864e5,Ic={goal:3e4,deal:1e4,aov:5e3,showRate:.7,closeRate:.175,capacity:100,sendDays:26},ni=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function Ts(t){if(t==null)return 0;const e=parseFloat(String(t).replace(/[€$£,\s]/g,""));return Number.isFinite(e)?e:0}function _o(t){return String(t||"").trim().toLowerCase().startsWith("y")}function nt(t,e){return e>0?t/e:0}function Ce(t){return Math.round(t).toLocaleString("en-IE")}function En(t,e=1){return t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function Et(t,e=0){return"€"+t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function Cr(t){return t>=1e3?"€"+(t/1e3).toFixed(1)+"k":Et(t)}function Ke(t,e=1){return(t*100).toLocaleString("en-IE",{minimumFractionDigits:0,maximumFractionDigits:e})+"%"}function ht(t){const e=n=>String(n).padStart(2,"0");return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())}function Fs(t){return t.toLocaleDateString("en-IE",{day:"numeric",month:"short"})}function Zx(t,e){const n=t.reduce((h,d)=>h+d.initials,0),i=t.reduce((h,d)=>h+d.followUps,0),r=t.reduce((h,d)=>h+d.comments,0),s=e.length,a=e.filter(h=>h.booked).length,o=e.filter(h=>h.showed).length,l=e.filter(h=>h.closed).length,c=e.reduce((h,d)=>h+d.dealValue,0),u=e.reduce((h,d)=>h+d.cash,0);return{initials:n,followUps:i,comments:r,touches:n+i+r,commentCoverage:nt(r,n),replies:s,booked:a,shown:o,closed:l,replyRate:nt(s,n),bookingRate:nt(a,s),showRate:nt(o,a),closeRate:nt(l,o),dealValue:c,cash:u,outstanding:c-u,avgDeal:nt(c,l),cashPerInitial:nt(u,n)}}function Qx(t){return t>=0&&t<=3?1:0}function Uf(t,e,n){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Map(t.map(b=>[ht(b.date),b])),a=t.slice(-7),o=a.length?a.reduce((b,C)=>b+C.initials,0)/a.length:0,l=nt(o,n);let c=0,u=0;for(let b=13;b>=0;b--){const C=new Date(r.getTime()-b*ft);if(C.getDay()===0)continue;const R=s.get(ht(C));R&&(u+=R.followUps);for(const w of t){const v=Math.round((C-w.date)/ft);v>=0&&(c+=w.initials*Qx(v))}}const h=c>0?u/c:null;let d=0,p=0;const x=t.length?t[0].date:null;for(let b=7;b>=1;b--){const C=new Date(r.getTime()-b*ft);C.getDay()!==0&&(x&&C<x||(d++,s.has(ht(C))&&p++))}const S=e.filter(b=>!b.booked&&!b.showed&&!b.closed&&(r-b.date)/ft>7).length,g=new Date(r.getTime()-13*ft),f=t.filter(b=>b.date>=g).reduce((b,C)=>b+C.initials,0),_=e.filter(b=>b.date>=g).length,m=t.find(b=>b.comments>0);let E=null;if(m){const b=new Date(Math.max(m.date.getTime(),g.getTime())),C=t.filter(v=>v.date>=b),R=C.reduce((v,y)=>v+y.initials,0),w=C.reduce((v,y)=>v+y.comments,0);E=R>0?w/R:null}return{today:r,pace:o,paceRatio:l,fuRatio:h,owed:c,sent:u,expectDays:d,loggedDays:p,stale:S,init14:f,replies14:_,replyRate14:nt(_,f),commentRatio:E}}function Jx(t,e,n){const i=Uf(t,e,n);return[{name:"Initials pace",zone:t.length?i.paceRatio>=.9?"g":i.paceRatio>=.6?"a":"r":"n",detail:Ce(i.pace)+" a day vs "+Ce(n)},{name:"Follow up ladder",zone:i.fuRatio===null?"n":i.fuRatio>=.85?"g":i.fuRatio>=.55?"a":"r",detail:i.fuRatio===null?"waiting on logged days":"about "+Ke(Math.min(i.fuRatio,1.5),0)+" of ladder cadence, 14 days"},{name:"Comment coverage",zone:i.commentRatio===null?"n":i.commentRatio>=.85?"g":i.commentRatio>=.55?"a":"r",detail:i.commentRatio===null?"no comments logged yet":"about "+Ke(Math.min(i.commentRatio,1.5),0)+" of initials get a comment"},{name:"Daily logging",zone:t.length?i.loggedDays>=i.expectDays?"g":i.loggedDays>=i.expectDays-2?"a":"r":"n",detail:i.loggedDays+" of "+i.expectDays+" days logged, last week"},{name:"Reply handling",zone:e.length?i.stale===0?"g":i.stale<=2?"a":"r":"n",detail:i.stale===0?"nothing waiting past 7 days":i.stale+" unbooked past 7 days"}]}function ey(t,e,n,i){const r=Uf(t,e,n),s=[],a=[],o=(u,h,d,p)=>s.push({sev:u,title:h,evidence:d,lever:p});t.length&&r.expectDays>0&&r.loggedDays<r.expectDays-1&&o("r","Fix the data first","Only "+r.loggedDays+" of the last "+r.expectDays+" days have an EOD row. Every other number here is guesswork until logging is daily.","EOD form every working day, no exceptions."),t.length&&r.paceRatio<.9&&o(r.paceRatio<.6?"r":"a","Volume below capacity","Initials running "+Ce(r.pace)+" a day against the "+Ce(n)+" target.","Protect the morning sending block. Initials go out while the US sleeps, per the system overview.");const l=r.fuRatio!==null&&r.fuRatio<.85;l&&o(r.fuRatio<.55?"r":"a","The ladder is being cut short","Follow ups are at about "+Ke(r.fuRatio,0)+" of what the ladder messages owe the last 14 days of leads. Most replies come from the later touches, so this suppresses reply rate before the opener is to blame.","Finish the full ladder on every open lead before sourcing new ones. Catch up the recent cohorts first.");const c=r.commentRatio!==null&&r.commentRatio<.85;return c&&o(r.commentRatio<.55?"r":"a","The comment step is being skipped","Only about "+Ke(r.commentRatio,0)+" of initials are getting a comment. These creators rarely see the initial DM, the comment on their latest reel is what earns the look, so low comments and a low reply rate are the same problem.","Comment on the latest reel 3 hours after every initial that got no reply. Rotate the comment bank, never repeat one on the same account."),r.init14>=150?(!l&&!c&&r.commentRatio!==null&&r.replyRate14<St.replyRate[0]&&o("a","First touch underperforming","Ladder and comments are healthy but the 14 day reply rate is "+Ke(r.replyRate14)+", under the "+Ke(St.replyRate[0],0)+" floor on "+Ce(r.init14)+" sends.","Rotate the opener, check account health and deliverability, tighten sourcing fit."),r.commentRatio===null&&a.push("comment coverage and the messaging verdict (no comments logged yet)")):a.push("messaging verdict (needs 150 initials in 14 days, at "+Ce(r.init14)+")"),i.replies>=10?i.bookingRate<St.bookingRate[0]&&o("a","Replies not turning into booked calls","Booking rate "+Ke(i.bookingRate)+" against a "+Ke(St.bookingRate[0],0)+" floor, on "+Ce(i.replies)+" replies.","Review the reply-to-call handling. Tier 1 first every day, ask for the call in about half the messages."):a.push("booking verdict (needs 10 replies, at "+Ce(i.replies)+")"),r.stale>0&&o(r.stale>2?"r":"a","Tier 1 leads going stale",r.stale+(r.stale===1?" reply is":" replies are")+" sitting unbooked past 7 days. Tier 1 never slips.","Work these today before any new outreach."),i.booked>=5?i.showRate<St.showRate[0]&&o("a","Booked calls not showing","Show rate "+Ke(i.showRate)+" against a "+Ke(St.showRate[0],0)+" floor.","Confirm the day before and the hour before. Calendar invite plus a personal message."):a.push("show verdict (needs 5 booked, at "+Ce(i.booked)+")"),i.shown>=5?i.closeRate<St.closeRate[0]&&o("a","Shows not closing","Close rate "+Ke(i.closeRate)+" against a "+Ke(St.closeRate[0],0)+" floor.","Review call recordings and the offer framing. This is a sales call problem, not an outreach problem."):a.push("close verdict (needs 5 shows, at "+Ce(i.shown)+")"),{findings:s,waiting:a}}function ty(t,e,n,i,r){const s=Uf(t,e,r.capacity),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=s.pace,c=i.replyRate>0,u=c?i.replyRate:Wa,h=i.bookingRate>0?i.bookingRate:ja,d=r.showRate,p=r.closeRate,x=r.aov,S=r.sendDays,g=u*h*d*p*x,f=[];l<r.capacity&&f.push({name:"Volume back to "+Ce(r.capacity)+" a day",per:"mo",value:(r.capacity-l)*S*g,detail:Ce(l)+" a day now. Every account sending.",basis:c?"measured":"assumed"}),u<St.replyRate[0]&&f.push({name:"Reply rate to "+Ke(St.replyRate[0],0),per:"mo",value:l*S*(St.replyRate[0]-u)*h*d*p*x,detail:Ke(u)+" now. Deliverability, then opener, then sourcing.",basis:"measured"}),i.replies>=5&&i.bookingRate<St.bookingRate[0]&&f.push({name:"Booking rate to "+Ke(St.bookingRate[0],0),per:"mo",value:l*S*u*(St.bookingRate[0]-h)*d*p*x,detail:Ke(h)+" now. Speed to reply, route to the call.",basis:i.replies>=10?"measured":"hypothesis"});const _=l*S*u*h*d*p;_>0&&f.push({name:"Cash per close 5k to 7.5k",per:"mo",value:_*2500,detail:"Bigger first payment on the same deals. Scales with every fix above.",basis:"assumed"}),s.stale>0&&f.push({name:"Book the stale Tier 1 replies",per:"one time",value:s.stale*h*d*p*x,detail:s.stale+" replies past 7 days unbooked.",basis:"hypothesis"});const m=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied"&&E.nextDue<o).length;return m>0&&f.push({name:"Clear the overdue queue",per:"one time",value:m*u*h*d*p*x,detail:m+" leads overdue in the lead sheet.",basis:"hypothesis"}),f.filter(E=>E.value>.5).sort((E,b)=>b.value-E.value).slice(0,6)}function ny(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ft<=6,s=l=>{const c=(i-l)/ft;return c>=7&&c<=13},a=(l,c)=>c>0?l/c-1:null,o=(l,c,u)=>l.filter(h=>c(h.date)).reduce((h,d)=>h+u(d),0);return{initials:a(o(t,r,l=>l.initials),o(t,s,l=>l.initials)),followUps:a(o(t,r,l=>l.followUps),o(t,s,l=>l.followUps)),comments:a(o(t,r,l=>l.comments),o(t,s,l=>l.comments)),replies:a(o(e,r,()=>1),o(e,s,()=>1)),booked:a(o(e,r,l=>l.booked?1:0),o(e,s,l=>l.booked?1:0)),cash:a(o(e,r,l=>l.cash),o(e,s,l=>l.cash))}}function bv(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ft<=6,s=l=>{const c=(i-l)/ft;return c>=7&&c<=13},a=(l,c,u)=>l.filter(h=>c(h.date)).reduce((h,d)=>h+u(d),0),o=(l,c)=>({cur:a(l,r,c),prev:a(l,s,c)});return{initials:o(t,l=>l.initials),followUps:o(t,l=>l.followUps),comments:o(t,l=>l.comments),replies:o(e,()=>1),booked:o(e,l=>l.booked?1:0),cash:o(e,l=>l.cash)}}function iy(t,e){const n=new Map(t.map(c=>[ht(c.date),c])),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate());let s=n.has(ht(r))?1:0;for(let c=1;c<400;c++){const u=new Date(r.getTime()-c*ft);if(u.getDay()!==0)if(n.has(ht(u)))s++;else break}let a=0,o=0;if(t.length)for(let c=t[0].date.getTime();c<=r.getTime();c+=ft){const u=new Date(c);u.getDay()!==0&&(n.has(ht(u))?(o++,a=Math.max(a,o)):o=0)}let l=0;for(let c=t.length-1;c>=0&&t[c].initials>=e*.9;c--)l++;return{cur:s,best:a,vol:l}}function Ll(t){if(t.name)return t.name;const e=String(t.handle||"").match(/instagram\.com\/([^/?#]+)/i);return e?"@"+e[1]:t.handle||"unknown"}function ry(t,e){const n=[],i=(a,o)=>{const l=e.find(a);l&&n.push({date:l.date,label:o,who:Ll(l)})};if(e.length&&n.push({date:e[0].date,label:"First reply",who:Ll(e[0])}),i(a=>a.booked,"First call booked"),i(a=>a.showed,"First call shown"),i(a=>a.closed,"First client closed"),t.length){const a=t.reduce((o,l)=>l.initials>o.initials?l:o);a.initials>0&&n.push({date:a.date,label:"Biggest day, "+Ce(a.initials)+" initials"})}const r=new Map;if(e.forEach(a=>{a.cash>0&&r.set(ht(a.date),(r.get(ht(a.date))||0)+a.cash)}),r.size){const[a,o]=[...r.entries()].sort((h,d)=>d[1]-h[1])[0],[l,c,u]=a.split("-").map(Number);n.push({date:new Date(l,c-1,u),label:"Biggest cash day, €"+Math.round(o).toLocaleString("en-IE")})}let s=0;for(const a of t){const o=s;s+=a.initials;for(const l of[500,1e3,2500,5e3,1e4,25e3])o<l&&s>=l&&n.push({date:a.date,label:Ce(l)+" initials sent, all time"})}return n.sort((a,o)=>o.date-a.date),n.slice(0,8)}function sy(t){const e=String(t||"").match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);if(!e)return null;let n=+e[1];const i=+e[2],r=e[3]?e[3].toLowerCase():null;return r==="pm"&&n<12&&(n+=12),r==="am"&&n===12&&(n=0),n>23||i>59?null:n+i/60}const Uc=[{label:"Morning",range:"06 to 12",test:t=>t>=6&&t<12},{label:"Afternoon",range:"12 to 17",test:t=>t>=12&&t<17},{label:"Evening",range:"17 to 22",test:t=>t>=17&&t<22},{label:"Late",range:"22 to 06",test:t=>t>=22||t<6}];function ay(t){let e=0,n=0;for(const o of t){const l=o/24*2*Math.PI;e+=Math.cos(l),n+=Math.sin(l)}let i=Math.atan2(n,e);i<0&&(i+=2*Math.PI);const r=i/(2*Math.PI)*24,s=Math.floor(r),a=Math.round((r-s)*60);return String(s%24).padStart(2,"0")+":"+String(a%60).padStart(2,"0")}function Ff(t,e,n,i){const r=new Date,s=new Date(r.getFullYear(),r.getMonth(),1),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=new Date(r.getFullYear(),r.getMonth()+1,0),l=e.filter(g=>g.date>=s).reduce((g,f)=>g+f.cash,0),c=n.replyRate>0?n.replyRate:Wa,u=n.bookingRate>0?n.bookingRate:ja;let h=0;e.forEach(g=>{g.closed||(g.showed?h+=i.closeRate*i.aov:g.booked?h+=i.showRate*i.closeRate*i.aov:h+=u*i.showRate*i.closeRate*i.aov)});let d=0;for(let g=a.getTime()+ft;g<=o.getTime();g+=ft)new Date(g).getDay()!==0&&d++;const p=t.slice(-7),x=p.length?p.reduce((g,f)=>g+f.initials,0)/p.length:0,S=d*x*c*u*i.showRate*i.closeRate*i.aov*.35;return{cashMTD:l,pipe:h,future:S,remDays:d,pace7:x,mid:l+h+S}}function Pv(t,e,n,i){const r=Ff(t,e,n,i),s=n.replyRate>0?n.replyRate:Wa,a=n.bookingRate>0?n.bookingRate:ja,o=e.filter(x=>!x.closed);let c=(1+n.initials*7+n.replies*131+Math.round(n.cash)*17)%2147483647;c<=0&&(c+=2147483646);const u=()=>(c=c*16807%2147483647)/2147483647,h=500,d=[];for(let x=0;x<h;x++){let S=r.cashMTD;for(const m of o){let E;m.showed?E=i.closeRate:m.booked?E=i.showRate*i.closeRate:E=a*i.showRate*i.closeRate,u()<E&&(S+=i.aov)}const g=Math.round(r.remDays*r.pace7);let f=0;for(let m=0;m<Math.min(g,4e3);m++)u()<s&&f++;const _=a*i.showRate*i.closeRate*.35;for(let m=0;m<f;m++)u()<_&&(S+=i.aov);d.push(S)}d.sort((x,S)=>x-S);const p=x=>d[Math.min(h-1,Math.floor(x*h))];return{p10:p(.1),p50:p(.5),p90:p(.9),mid:r.mid,cashMTD:r.cashMTD}}function oy(t,e,n,i){const r=[],s=new Date,a=new Date(s.getFullYear(),s.getMonth(),s.getDate());if(!t.length)return r;const o=new Map(t.map(m=>[ht(m.date),m])),l=new Date(a.getTime()-ft);l.getDay()!==0&&t[0].date<l&&!o.has(ht(l))&&r.push({sev:"r",text:"No EOD row for yesterday"});const c=t[t.length-1],u=t.slice(-15,-1);if(u.length>=5){const m=u.reduce((E,b)=>E+b.initials,0)/u.length;m>10&&c.initials<m*.5?r.push({sev:"r",text:"Volume drop: "+Ce(c.initials)+" initials vs "+Ce(m)+" avg. Block?"}):m>10&&c.initials>m*1.6&&r.push({sev:"g",text:"Volume surge: "+Ce(c.initials)+" initials, "+Ce((c.initials/m-1)*100)+"% over trend"})}const h=t.slice(-3),d=h.reduce((m,E)=>m+E.initials,0),p=nt(e.length,t.reduce((m,E)=>m+E.initials,0));if(d>=120&&p>0){const m=h[0].date,E=e.filter(C=>C.date>=m).length,b=d*p;b>=3&&E===0&&r.push({sev:"r",text:"Reply drought: 0 replies on last "+Ce(d)+" sends, about "+Ce(b)+" expected. Check account health."})}const x=e.filter(m=>!m.booked&&!m.closed&&(a-m.date)/ft<=1).length;x>0&&r.push({sev:"a",text:x+(x===1?" live reply":" live replies")+" in the last 24h. Work them now"});const S=e.filter(m=>!m.booked&&!m.showed&&!m.closed&&(a-m.date)/ft>7).length;S>0&&r.push({sev:"a",text:S+" unbooked past 7 days"}),t.some(m=>m.comments>0)&&c.initials>10&&c.comments<c.initials*.4&&r.push({sev:"a",text:"Comments at "+Ce(nt(c.comments,c.initials)*100)+"% of initials on the latest day"});const f=n.filter(m=>m.nextDue&&m.status.toLowerCase()!=="replied");if(f.length>5){const m=f.filter(E=>E.nextDue<a).length;m>f.length*.8&&r.push({sev:"a",text:"Lead sheet: "+m+" of "+f.length+" overdue. Sheet stale or queue slipping"})}const _=e.filter(m=>(a-m.date)/ft<=6).reduce((m,E)=>m+E.cash,0);return _>0&&r.push({sev:"g",text:"€"+Math.round(_).toLocaleString("en-IE")+" collected this week"}),r.slice(0,6)}var Lv={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(v_,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(w,v){var y=(v=v||{}).dynamicTyping||!1;if(R(y)&&(v.dynamicTypingFunction=y,y={}),v.dynamicTyping=y,v.transform=!!R(v.transform)&&v.transform,v.worker&&l.WORKERS_SUPPORTED){var P=function(){if(!l.WORKERS_SUPPORTED)return!1;var I=(H=i.URL||i.webkitURL||null,O=n.toString(),l.BLOB_URL||(l.BLOB_URL=H.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",O,")();"],{type:"text/javascript"})))),W=new i.Worker(I),H,O;return W.onmessage=_,W.id=o++,a[W.id]=W}();return P.userStep=v.step,P.userChunk=v.chunk,P.userComplete=v.complete,P.userError=v.error,v.step=R(v.step),v.chunk=R(v.chunk),v.complete=R(v.complete),v.error=R(v.error),delete v.worker,void P.postMessage({input:w,config:v,workerId:P.id})}var U=null;return l.NODE_STREAM_INPUT,typeof w=="string"?(w=function(I){return I.charCodeAt(0)===65279?I.slice(1):I}(w),U=v.download?new h(v):new p(v)):w.readable===!0&&R(w.read)&&R(w.on)?U=new x(v):(i.File&&w instanceof File||w instanceof Object)&&(U=new d(v)),U.stream(w)},unparse:function(w,v){var y=!1,P=!0,U=",",I=`\r
`,W='"',H=W+W,O=!1,z=null,N=!1;(function(){if(typeof v=="object"){if(typeof v.delimiter!="string"||l.BAD_DELIMITERS.filter(function(Q){return v.delimiter.indexOf(Q)!==-1}).length||(U=v.delimiter),(typeof v.quotes=="boolean"||typeof v.quotes=="function"||Array.isArray(v.quotes))&&(y=v.quotes),typeof v.skipEmptyLines!="boolean"&&typeof v.skipEmptyLines!="string"||(O=v.skipEmptyLines),typeof v.newline=="string"&&(I=v.newline),typeof v.quoteChar=="string"&&(W=v.quoteChar),typeof v.header=="boolean"&&(P=v.header),Array.isArray(v.columns)){if(v.columns.length===0)throw new Error("Option columns is empty");z=v.columns}v.escapeChar!==void 0&&(H=v.escapeChar+W),(typeof v.escapeFormulae=="boolean"||v.escapeFormulae instanceof RegExp)&&(N=v.escapeFormulae instanceof RegExp?v.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var G=new RegExp(g(W),"g");if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return K(null,w,O);if(typeof w[0]=="object")return K(z||Object.keys(w[0]),w,O)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||z),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),K(w.fields||[],w.data||[],O);throw new Error("Unable to serialize unrecognized input");function K(Q,we,Y){var J="";typeof Q=="string"&&(Q=JSON.parse(Q)),typeof we=="string"&&(we=JSON.parse(we));var le=Array.isArray(Q)&&0<Q.length,oe=!Array.isArray(we[0]);if(le&&P){for(var Me=0;Me<Q.length;Me++)0<Me&&(J+=U),J+=ie(Q[Me],Me);0<we.length&&(J+=I)}for(var ae=0;ae<we.length;ae++){var xe=le?Q.length:we[ae].length,ze=!1,D=le?Object.keys(we[ae]).length===0:we[ae].length===0;if(Y&&!le&&(ze=Y==="greedy"?we[ae].join("").trim()==="":we[ae].length===1&&we[ae][0].length===0),Y==="greedy"&&le){for(var Ue=[],Be=0;Be<xe;Be++){var Pe=oe?Q[Be]:Be;Ue.push(we[ae][Pe])}ze=Ue.join("").trim()===""}if(!ze){for(var fe=0;fe<xe;fe++){0<fe&&!D&&(J+=U);var $e=le&&oe?Q[fe]:fe;J+=ie(we[ae][$e],fe)}ae<we.length-1&&(!Y||0<xe&&!D)&&(J+=I)}}return J}function ie(Q,we){if(Q==null)return"";if(Q.constructor===Date)return JSON.stringify(Q).slice(1,25);var Y=!1;N&&typeof Q=="string"&&N.test(Q)&&(Q="'"+Q,Y=!0);var J=Q.toString().replace(G,H);return(Y=Y||y===!0||typeof y=="function"&&y(Q,we)||Array.isArray(y)&&y[we]||function(le,oe){for(var Me=0;Me<oe.length;Me++)if(-1<le.indexOf(oe[Me]))return!0;return!1}(J,l.BAD_DELIMITERS)||-1<J.indexOf(U)||J.charAt(0)===" "||J.charAt(J.length-1)===" ")?W+J+W:J}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=f,l.ParserHandle=S,l.NetworkStreamer=h,l.FileStreamer=d,l.StringStreamer=p,l.ReadableStreamStreamer=x,i.jQuery){var c=i.jQuery;c.fn.parse=function(w){var v=w.config||{},y=[];return this.each(function(I){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var W=0;W<this.files.length;W++)y.push({file:this.files[W],inputElem:this,instanceConfig:c.extend({},v)})}),P(),this;function P(){if(y.length!==0){var I,W,H,O,z=y[0];if(R(w.before)){var N=w.before(z.file,z.inputElem);if(typeof N=="object"){if(N.action==="abort")return I="AbortError",W=z.file,H=z.inputElem,O=N.reason,void(R(w.error)&&w.error({name:I},W,H,O));if(N.action==="skip")return void U();typeof N.config=="object"&&(z.instanceConfig=c.extend(z.instanceConfig,N.config))}else if(N==="skip")return void U()}var G=z.instanceConfig.complete;z.instanceConfig.complete=function(K){R(G)&&G(K,z.file,z.inputElem),U()},l.parse(z.file,z.instanceConfig)}else R(w.complete)&&w.complete()}function U(){y.splice(0,1),P()}}}function u(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(v){var y=b(v);y.chunkSize=parseInt(y.chunkSize),v.step||v.chunk||(y.chunkSize=null),this._handle=new S(y),(this._handle.streamer=this)._config=y}).call(this,w),this.parseChunk=function(v,y){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var P=this._config.beforeFirstChunk(v);P!==void 0&&(v=P)}this.isFirstChunk=!1,this._halted=!1;var U=this._partialLine+v;this._partialLine="";var I=this._handle.parse(U,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var W=I.meta.cursor;this._finished||(this._partialLine=U.substring(W-this._baseIndex),this._baseIndex=W),I&&I.data&&(this._rowCount+=I.data.length);var H=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:I,workerId:l.WORKER_ID,finished:H});else if(R(this._config.chunk)&&!y){if(this._config.chunk(I,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);I=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(I.data),this._completeResults.errors=this._completeResults.errors.concat(I.errors),this._completeResults.meta=I.meta),this._completed||!H||!R(this._config.complete)||I&&I.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),H||I&&I.meta.paused||this._nextChunk(),I}this._halted=!0},this._sendError=function(v){R(this._config.error)?this._config.error(v):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:v,finished:!1})}}function h(w){var v;(w=w||{}).chunkSize||(w.chunkSize=l.RemoteChunkSize),u.call(this,w),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(y){this._input=y,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(v=new XMLHttpRequest,this._config.withCredentials&&(v.withCredentials=this._config.withCredentials),r||(v.onload=C(this._chunkLoaded,this),v.onerror=C(this._chunkError,this)),v.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var y=this._config.downloadRequestHeaders;for(var P in y)v.setRequestHeader(P,y[P])}if(this._config.chunkSize){var U=this._start+this._config.chunkSize-1;v.setRequestHeader("Range","bytes="+this._start+"-"+U)}try{v.send(this._config.downloadRequestBody)}catch(I){this._chunkError(I.message)}r&&v.status===0&&this._chunkError()}},this._chunkLoaded=function(){v.readyState===4&&(v.status<200||400<=v.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:v.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(y){var P=y.getResponseHeader("Content-Range");return P===null?-1:parseInt(P.substring(P.lastIndexOf("/")+1))}(v),this.parseChunk(v.responseText)))},this._chunkError=function(y){var P=v.statusText||y;this._sendError(new Error(P))}}function d(w){var v,y;(w=w||{}).chunkSize||(w.chunkSize=l.LocalChunkSize),u.call(this,w);var P=typeof FileReader<"u";this.stream=function(U){this._input=U,y=U.slice||U.webkitSlice||U.mozSlice,P?((v=new FileReader).onload=C(this._chunkLoaded,this),v.onerror=C(this._chunkError,this)):v=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var U=this._input;if(this._config.chunkSize){var I=Math.min(this._start+this._config.chunkSize,this._input.size);U=y.call(U,this._start,I)}var W=v.readAsText(U,this._config.encoding);P||this._chunkLoaded({target:{result:W}})},this._chunkLoaded=function(U){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(U.target.result)},this._chunkError=function(){this._sendError(v.error)}}function p(w){var v;u.call(this,w=w||{}),this.stream=function(y){return v=y,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var y,P=this._config.chunkSize;return P?(y=v.substring(0,P),v=v.substring(P)):(y=v,v=""),this._finished=!v,this.parseChunk(y)}}}function x(w){u.call(this,w=w||{});var v=[],y=!0,P=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(U){this._input=U,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){P&&v.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),v.length?this.parseChunk(v.shift()):y=!0},this._streamData=C(function(U){try{v.push(typeof U=="string"?U:U.toString(this._config.encoding)),y&&(y=!1,this._checkIsFinished(),this.parseChunk(v.shift()))}catch(I){this._streamError(I)}},this),this._streamError=C(function(U){this._streamCleanUp(),this._sendError(U)},this),this._streamEnd=C(function(){this._streamCleanUp(),P=!0,this._streamData("")},this),this._streamCleanUp=C(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function S(w){var v,y,P,U=Math.pow(2,53),I=-U,W=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,H=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,O=this,z=0,N=0,G=!1,K=!1,ie=[],Q={data:[],errors:[],meta:{}};if(R(w.step)){var we=w.step;w.step=function(ae){if(Q=ae,le())J();else{if(J(),Q.data.length===0)return;z+=ae.data.length,w.preview&&z>w.preview?y.abort():(Q.data=Q.data[0],we(Q,O))}}}function Y(ae){return w.skipEmptyLines==="greedy"?ae.join("").trim()==="":ae.length===1&&ae[0].length===0}function J(){return Q&&P&&(Me("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),P=!1),w.skipEmptyLines&&(Q.data=Q.data.filter(function(ae){return!Y(ae)})),le()&&function(){if(!Q)return;function ae(ze,D){R(w.transformHeader)&&(ze=w.transformHeader(ze,D)),ie.push(ze)}if(Array.isArray(Q.data[0])){for(var xe=0;le()&&xe<Q.data.length;xe++)Q.data[xe].forEach(ae);Q.data.splice(0,1)}else Q.data.forEach(ae)}(),function(){if(!Q||!w.header&&!w.dynamicTyping&&!w.transform)return Q;function ae(ze,D){var Ue,Be=w.header?{}:[];for(Ue=0;Ue<ze.length;Ue++){var Pe=Ue,fe=ze[Ue];w.header&&(Pe=Ue>=ie.length?"__parsed_extra":ie[Ue]),w.transform&&(fe=w.transform(fe,Pe)),fe=oe(Pe,fe),Pe==="__parsed_extra"?(Be[Pe]=Be[Pe]||[],Be[Pe].push(fe)):Be[Pe]=fe}return w.header&&(Ue>ie.length?Me("FieldMismatch","TooManyFields","Too many fields: expected "+ie.length+" fields but parsed "+Ue,N+D):Ue<ie.length&&Me("FieldMismatch","TooFewFields","Too few fields: expected "+ie.length+" fields but parsed "+Ue,N+D)),Be}var xe=1;return!Q.data.length||Array.isArray(Q.data[0])?(Q.data=Q.data.map(ae),xe=Q.data.length):Q.data=ae(Q.data,0),w.header&&Q.meta&&(Q.meta.fields=ie),N+=xe,Q}()}function le(){return w.header&&ie.length===0}function oe(ae,xe){return ze=ae,w.dynamicTypingFunction&&w.dynamicTyping[ze]===void 0&&(w.dynamicTyping[ze]=w.dynamicTypingFunction(ze)),(w.dynamicTyping[ze]||w.dynamicTyping)===!0?xe==="true"||xe==="TRUE"||xe!=="false"&&xe!=="FALSE"&&(function(D){if(W.test(D)){var Ue=parseFloat(D);if(I<Ue&&Ue<U)return!0}return!1}(xe)?parseFloat(xe):H.test(xe)?new Date(xe):xe===""?null:xe):xe;var ze}function Me(ae,xe,ze,D){var Ue={type:ae,code:xe,message:ze};D!==void 0&&(Ue.row=D),Q.errors.push(Ue)}this.parse=function(ae,xe,ze){var D=w.quoteChar||'"';if(w.newline||(w.newline=function(Pe,fe){Pe=Pe.substring(0,1048576);var $e=new RegExp(g(fe)+"([^]*?)"+g(fe),"gm"),Ae=(Pe=Pe.replace($e,"")).split("\r"),be=Pe.split(`
`),L=1<be.length&&be[0].length<Ae[0].length;if(Ae.length===1||L)return`
`;for(var T=0,V=0;V<Ae.length;V++)Ae[V][0]===`
`&&T++;return T>=Ae.length/2?`\r
`:"\r"}(ae,D)),P=!1,w.delimiter)R(w.delimiter)&&(w.delimiter=w.delimiter(ae),Q.meta.delimiter=w.delimiter);else{var Ue=function(Pe,fe,$e,Ae,be){var L,T,V,Z;be=be||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ne=0;ne<be.length;ne++){var $=be[ne],Te=0,de=0,ve=0;V=void 0;for(var Ie=new f({comments:Ae,delimiter:$,newline:fe,preview:10}).parse(Pe),re=0;re<Ie.data.length;re++)if($e&&Y(Ie.data[re]))ve++;else{var ge=Ie.data[re].length;de+=ge,V!==void 0?0<ge&&(Te+=Math.abs(ge-V),V=ge):V=ge}0<Ie.data.length&&(de/=Ie.data.length-ve),(T===void 0||Te<=T)&&(Z===void 0||Z<de)&&1.99<de&&(T=Te,L=$,Z=de)}return{successful:!!(w.delimiter=L),bestDelimiter:L}}(ae,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess);Ue.successful?w.delimiter=Ue.bestDelimiter:(P=!0,w.delimiter=l.DefaultDelimiter),Q.meta.delimiter=w.delimiter}var Be=b(w);return w.preview&&w.header&&Be.preview++,v=ae,y=new f(Be),Q=y.parse(v,xe,ze),J(),G?{meta:{paused:!0}}:Q||{meta:{paused:!1}}},this.paused=function(){return G},this.pause=function(){G=!0,y.abort(),v=R(w.chunk)?"":v.substring(y.getCharIndex())},this.resume=function(){O.streamer._halted?(G=!1,O.streamer.parseChunk(v,!0)):setTimeout(O.resume,3)},this.aborted=function(){return K},this.abort=function(){K=!0,y.abort(),Q.meta.aborted=!0,R(w.complete)&&w.complete(Q),v=""}}function g(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function f(w){var v,y=(w=w||{}).delimiter,P=w.newline,U=w.comments,I=w.step,W=w.preview,H=w.fastMode,O=v=w.quoteChar===void 0||w.quoteChar===null?'"':w.quoteChar;if(w.escapeChar!==void 0&&(O=w.escapeChar),(typeof y!="string"||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=","),U===y)throw new Error("Comment character same as delimiter");U===!0?U="#":(typeof U!="string"||-1<l.BAD_DELIMITERS.indexOf(U))&&(U=!1),P!==`
`&&P!=="\r"&&P!==`\r
`&&(P=`
`);var z=0,N=!1;this.parse=function(G,K,ie){if(typeof G!="string")throw new Error("Input must be a string");var Q=G.length,we=y.length,Y=P.length,J=U.length,le=R(I),oe=[],Me=[],ae=[],xe=z=0;if(!G)return Fe();if(w.header&&!K){var ze=G.split(P)[0].split(y),D=[],Ue={},Be=!1;for(var Pe in ze){var fe=ze[Pe];R(w.transformHeader)&&(fe=w.transformHeader(fe,Pe));var $e=fe,Ae=Ue[fe]||0;for(0<Ae&&(Be=!0,$e=fe+"_"+Ae),Ue[fe]=Ae+1;D.includes($e);)$e=$e+"_"+Ae;D.push($e)}if(Be){var be=G.split(P);be[0]=D.join(y),G=be.join(P)}}if(H||H!==!1&&G.indexOf(v)===-1){for(var L=G.split(P),T=0;T<L.length;T++){if(ae=L[T],z+=ae.length,T!==L.length-1)z+=P.length;else if(ie)return Fe();if(!U||ae.substring(0,J)!==U){if(le){if(oe=[],ve(ae.split(y)),Le(),N)return Fe()}else ve(ae.split(y));if(W&&W<=T)return oe=oe.slice(0,W),Fe(!0)}}return Fe()}for(var V=G.indexOf(y,z),Z=G.indexOf(P,z),ne=new RegExp(g(O)+g(v),"g"),$=G.indexOf(v,z);;)if(G[z]!==v)if(U&&ae.length===0&&G.substring(z,z+J)===U){if(Z===-1)return Fe();z=Z+Y,Z=G.indexOf(P,z),V=G.indexOf(y,z)}else if(V!==-1&&(V<Z||Z===-1))ae.push(G.substring(z,V)),z=V+we,V=G.indexOf(y,z);else{if(Z===-1)break;if(ae.push(G.substring(z,Z)),ge(Z+Y),le&&(Le(),N))return Fe();if(W&&oe.length>=W)return Fe(!0)}else for($=z,z++;;){if(($=G.indexOf(v,$+1))===-1)return ie||Me.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:oe.length,index:z}),re();if($===Q-1)return re(G.substring(z,$).replace(ne,v));if(v!==O||G[$+1]!==O){if(v===O||$===0||G[$-1]!==O){V!==-1&&V<$+1&&(V=G.indexOf(y,$+1)),Z!==-1&&Z<$+1&&(Z=G.indexOf(P,$+1));var Te=Ie(Z===-1?V:Math.min(V,Z));if(G.substr($+1+Te,we)===y){ae.push(G.substring(z,$).replace(ne,v)),G[z=$+1+Te+we]!==v&&($=G.indexOf(v,z)),V=G.indexOf(y,z),Z=G.indexOf(P,z);break}var de=Ie(Z);if(G.substring($+1+de,$+1+de+Y)===P){if(ae.push(G.substring(z,$).replace(ne,v)),ge($+1+de+Y),V=G.indexOf(y,z),$=G.indexOf(v,z),le&&(Le(),N))return Fe();if(W&&oe.length>=W)return Fe(!0);break}Me.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:oe.length,index:z}),$++}}else $++}return re();function ve(pe){oe.push(pe),xe=z}function Ie(pe){var He=0;if(pe!==-1){var Ge=G.substring($+1,pe);Ge&&Ge.trim()===""&&(He=Ge.length)}return He}function re(pe){return ie||(pe===void 0&&(pe=G.substring(z)),ae.push(pe),z=Q,ve(ae),le&&Le()),Fe()}function ge(pe){z=pe,ve(ae),ae=[],Z=G.indexOf(P,z)}function Fe(pe){return{data:oe,errors:Me,meta:{delimiter:y,linebreak:P,aborted:N,truncated:!!pe,cursor:xe+(K||0)}}}function Le(){I(Fe()),oe=[],Me=[]}},this.abort=function(){N=!0},this.getCharIndex=function(){return z}}function _(w){var v=w.data,y=a[v.workerId],P=!1;if(v.error)y.userError(v.error,v.file);else if(v.results&&v.results.data){var U={abort:function(){P=!0,m(v.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(R(y.userStep)){for(var I=0;I<v.results.data.length&&(y.userStep({data:v.results.data[I],errors:v.results.errors,meta:v.results.meta},U),!P);I++);delete v.results}else R(y.userChunk)&&(y.userChunk(v.results,U,v.file),delete v.results)}v.finished&&!P&&m(v.workerId,v.results)}function m(w,v){var y=a[w];R(y.userComplete)&&y.userComplete(v),y.terminate(),delete a[w]}function E(){throw new Error("Not implemented.")}function b(w){if(typeof w!="object"||w===null)return w;var v=Array.isArray(w)?[]:{};for(var y in w)v[y]=b(w[y]);return v}function C(w,v){return function(){w.apply(v,arguments)}}function R(w){return typeof w=="function"}return s&&(i.onmessage=function(w){var v=w.data;if(l.WORKER_ID===void 0&&v&&(l.WORKER_ID=v.workerId),typeof v.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(v.input,v.config),finished:!0});else if(i.File&&v.input instanceof File||v.input instanceof Object){var y=l.parse(v.input,v.config);y&&i.postMessage({workerId:l.WORKER_ID,results:y,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(d.prototype=Object.create(u.prototype)).constructor=d,(p.prototype=Object.create(p.prototype)).constructor=p,(x.prototype=Object.create(u.prototype)).constructor=x,l})})(Lv);var ly=Lv.exports;const kf=__(ly);function Fc(t){const e=Date.now()+6048e5;let n=0;for(;t.getTime()>e&&n++<5;)t.setFullYear(t.getFullYear()-1);return t}function Dv(t){let e=$x;if(e==="auto"){e="DMY";for(const n of t){const i=String(n||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);if(i){if(+i[1]>12){e="DMY";break}if(+i[2]>12){e="MDY";break}}}}return function(i){const r=String(i||"").trim();if(!r)return null;let s=r.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(s)return Fc(new Date(+s[1],+s[2]-1,+s[3]));if(s=r.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),s){let o=+s[3];o<100&&(o+=2e3);const l=+s[1],c=+s[2],[u,h]=e==="MDY"?[c,l]:[l,c],d=new Date(o,h-1,u);return isNaN(d)?null:Fc(d)}const a=new Date(r);return isNaN(a)?null:Fc(a)}}function Of(t,e){for(let n=0;n<Math.min(t.length,12);n++){const i=t[n].map(r=>String(r||"").trim().toLowerCase());if(e.every(r=>i.some(s=>s.includes(r))))return n}return-1}function ut(t,...e){const n=t.map(i=>String(i||"").trim().toLowerCase());for(const i of["exact","ends","includes"])for(const r of e){const s=n.findIndex(a=>i==="exact"?a===r:i==="ends"?a.endsWith(r):a.includes(r));if(s!==-1)return s}return-1}function zf(t){return t.map(n=>String(n||"").trim()).join("")?t.some(n=>String(n||"").toLowerCase().includes("example")):!0}function pp(t){const e=kf.parse(t,{skipEmptyLines:!1}).data,n=Of(e,["date","initials"]);if(n===-1)throw new Error("Daily Log: could not find the header row (needs Date and Initials Sent columns).");const i=e[n],r={date:ut(i,"date"),setter:ut(i,"setter"),initials:ut(i,"initials sent","initial"),followUps:ut(i,"follow ups sent","follow"),comments:ut(i,"comments sent","comment"),notes:ut(i,"notes","note")},s=e.slice(n+1).filter(l=>!zf(l)),a=Dv(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);c&&o.push({date:c,setter:String(l[r.setter]||"").trim(),initials:Ts(l[r.initials]),followUps:Ts(l[r.followUps]),comments:r.comments!==-1?Ts(l[r.comments]):0,notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function mp(t){const e=kf.parse(t,{skipEmptyLines:!1}).data,n=Of(e,["date","handle"]);if(n===-1)throw new Error("Replies: could not find the header row (needs Date Replied and Handle columns).");const i=e[n],r={date:ut(i,"date replied","date"),handle:ut(i,"handle"),name:ut(i,"name"),booked:ut(i,"booked","book"),showed:ut(i,"showed","show"),closed:ut(i,"closed","close"),dealValue:ut(i,"deal value","deal"),cash:ut(i,"cash collected","cash"),plan:ut(i,"payment plan","plan"),notes:ut(i,"notes","note"),time:ut(i,"time replied","time")},s=e.slice(n+1).filter(l=>!zf(l)),a=Dv(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);c&&o.push({date:c,handle:String(l[r.handle]||"").trim(),name:String(l[r.name]||"").trim(),booked:_o(l[r.booked]),showed:_o(l[r.showed]),closed:_o(l[r.closed]),dealValue:Ts(l[r.dealValue]),cash:Ts(l[r.cash]),paymentPlan:_o(l[r.plan]),notes:String(l[r.notes]||"").trim(),timeReplied:r.time!==-1?String(l[r.time]||"").trim():""})}return o.sort((l,c)=>l.date-c.date),o}function cy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function gp(t){const e=kf.parse(t,{skipEmptyLines:!1}).data,n=Of(e,["handle","next due"]);if(n===-1)throw new Error("Leads: header row not found.");const i=e[n],r={handle:ut(i,"handle"),account:ut(i,"account"),name:ut(i,"name"),niche:ut(i,"niche"),nextTouch:ut(i,"next touch"),nextDue:ut(i,"next due date","next due"),status:ut(i,"status")},s=[];for(const a of e.slice(n+1)){if(zf(a))continue;const o=String(a[r.handle]||"").trim();o&&s.push({handle:o,account:String(a[r.account]||"").trim(),name:String(a[r.name]||"").trim(),niche:String(a[r.niche]||"").trim(),nextTouch:String(a[r.nextTouch]||"").trim(),nextDue:cy(a[r.nextDue]),status:String(a[r.status]||"").trim()})}return s}function uy(){const t=new Date,e=["KEHOEGROUP Daily Log,,,,,","Fill this in once a day,,,,,","Date,Setter,Initials Sent,Follow Ups Sent,Comments Sent,Notes","01/01/2026,Example Setter,25,10,20,Example row - ignore"],n=["KEHOEGROUP Replies,,,,,,,,,","One row per person who replied,,,,,,,,,","Date Replied,Handle,Name,Time Replied,Booked,Showed,Closed,Deal Value,Cash Collected,Payment Plan,Notes","01/01/2026,@example,Example Person,12:00,Y,Y,Y,10000,5000,Y,Example row - ignore"],i=l=>{const c=u=>String(u).padStart(2,"0");return c(l.getDate())+"/"+c(l.getMonth()+1)+"/"+l.getFullYear()},s=(l=>{let c=l;return()=>(c=c*16807%2147483647)/2147483647})(42),a=["@fx_daniel","@ecom.luke","@ai.martina","@salescoach_tom","@realty.jane","@bizopp.kev","@trading.sy","@creator.mia","@closer.pat","@brand.ash","@growth.finn","@wealth.roy","@mentor.zed","@funnel.gus","@scale.ivy","@offer.max","@coach.nia","@deals.obi"];let o=0;for(let l=69;l>=0;l--){const c=new Date(t.getFullYear(),t.getMonth(),t.getDate()-l);if(c.getDay()===0)continue;const u=1+(69-l)/69,h=Math.round((14+s()*14)*u),d=Math.round((8+s()*16)*u),p=Math.round(h*(.8+s()*.2));e.push(i(c)+",Jamie,"+h+","+d+","+p+",");const x=h*(.03+s()*.025),S=Math.floor(x)+(s()<x%1?1:0);for(let g=0;g<S;g++){const f=a[o%a.length]+(o>=a.length?"."+o:"");o++;const _=s()<.38,m=_&&s()<.7,E=m&&l>20&&s()<.35,b=E?s()<.4?15e3:1e4:0,C=E&&s()<.5,R=E?C?b/2:b:0,w=13+Math.floor(s()*11),v=String(w%24).padStart(2,"0")+":"+String(Math.floor(s()*60)).padStart(2,"0");n.push([i(c),f,"",v,_?"Y":"",m?"Y":"",E?"Y":"",b||"",R||"",C?"Y":"",""].join(","))}}return{daily:e.join(`
`),replies:n.join(`
`)}}function dy(){const t=new Date,e=r=>ht(new Date(t.getFullYear(),t.getMonth(),t.getDate()+r)),n=["Handle,Account,Name,Niche,Last Touch Sent,Date Last Sent,Next Touch,Next Due Date,Status,Due?,Notes"],i=(r,s,a,o)=>n.push([r,"Acc 1","","Trading","","",s,e(a),o||"Active","",""].join(","));return["@fx_lead1","@fx_lead2","@ai_lead3"].forEach((r,s)=>i(r,"Touch 4",-2+s)),["@ec_lead4","@ec_lead5","@re_lead6","@re_lead7"].forEach(r=>i(r,"FU wk2-4",0)),["@tr_lead8","@tr_lead9"].forEach(r=>i(r,"Touch 5",1)),["@tr_lead10","@ai_lead11","@ec_lead12"].forEach(r=>i(r,"FU mon2-3",2)),i("@dead_lead","Reactivation",5,"Replied"),n.join(`
`)}async function kc(t){const e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error("HTTP "+e.status);return e.text()}function fy(){const[t,e]=Ne.useState({daily:null,replies:null,leads:[],sample:!1,error:null,loadedAt:null}),[n,i]=Ne.useState(!0),r=Ne.useCallback(async()=>{i(!0);let s=null,a=null,o=[],l=!1,c=null;try{const[u,h]=await Promise.all([kc(fp(jx)),kc(fp(Xx))]);s=pp(u),a=mp(h)}catch(u){const h=uy();s=pp(h.daily),a=mp(h.replies),l=!0,c=String(u.message||u)}try{if(l)o=gp(dy());else for(const u of qx())try{const h=await kc(u),d=gp(h);if(d.length){o=d;break}}catch{}}catch{}e({daily:s,replies:a,leads:o,sample:l,error:c,loadedAt:new Date}),i(!1)},[]);return Ne.useEffect(()=>{r();const s=setInterval(r,Kx);return()=>clearInterval(s)},[r]),{...t,loading:n,reload:r}}function Oc(t){const[e,n]=Ne.useState(null);return Ne.useEffect(()=>{fetch("/dm-tracker/"+t+".json?cb="+Date.now()).then(i=>i.ok?i.json():null).then(i=>{i&&i.headline&&n(i)}).catch(()=>{})},[t]),e}function sd({sub:t}){return M.jsxs("span",{children:[M.jsxs("span",{className:"display wordmark",children:["KEHOEGROUP",M.jsx("span",{className:"dot",children:"."})]}),t&&M.jsx("span",{className:"wm-sub",children:t})]})}function hy({kind:t,children:e}){return M.jsx("span",{className:"badge "+t,children:e})}function br({value:t,format:e}){const[n,i]=Ne.useState(ni?t:0),r=Ne.useRef(ni?t:0);return Ne.useEffect(()=>{const s=r.current,a=t;if(r.current=t,ni||s===a){i(a);return}const o=performance.now(),l=700;let c;const u=h=>{const d=Math.min((h-o)/l,1),p=1-Math.pow(1-d,3);i(s+(a-s)*p),d<1&&(c=requestAnimationFrame(u))};return c=requestAnimationFrame(u),()=>cancelAnimationFrame(c)},[t]),e(n)}function vp({text:t}){const[e,n]=Ne.useState(ni?(t||"").length:0);return Ne.useEffect(()=>{if(ni){n((t||"").length);return}n(0);const i=setInterval(()=>{n(r=>{const s=r+3;return s>=(t||"").length&&clearInterval(i),s})},22);return()=>clearInterval(i)},[t]),M.jsxs("span",{children:[(t||"").slice(0,e),e<(t||"").length&&M.jsx("span",{className:"cursor",children:"▎"})]})}function Mt({children:t,delay:e=0,className:n=""}){const i=Ne.useRef(null),[r,s]=Ne.useState(ni);return Ne.useEffect(()=>{if(ni)return;const a=i.current;if(!a)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),o.disconnect())},{threshold:.08});return o.observe(a),()=>o.disconnect()},[]),M.jsx("div",{ref:i,className:"reveal "+(r?"in ":"")+n,style:e?{transitionDelay:e+"ms"}:null,children:t})}function py({data:t,color:e="#5A5A5A",dot:n="#E11414"}){if(!t||!t.some(l=>l>0))return null;const i=96,r=24,s=Math.max(...t,1),a=t.map((l,c)=>c/(t.length-1)*i+","+(r-2-l/s*(r-7))),o=a[a.length-1].split(",");return M.jsxs("svg",{width:i,height:r,className:"spark","aria-hidden":"true",children:[M.jsx("polyline",{points:a.join(" "),fill:"none",stroke:e,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"}),M.jsx("circle",{cx:o[0],cy:o[1],r:"2.5",fill:n})]})}function Pi({label:t,num:e,format:n,sub:i,red:r,delta:s,spark:a,tip:o}){const l=s>.02?"up":s<-.02?"down":"flat",c=s>.02?"▲":s<-.02?"▼":"·";return M.jsxs("div",{className:"tile",children:[M.jsx("div",{className:"label",children:t}),M.jsx("div",{className:"display val"+(r?" red":""),children:M.jsx(br,{value:e,format:n})}),M.jsx("div",{className:"sub",children:i||" "}),s!=null&&M.jsxs("div",{className:"wdelta "+l,children:[c," ",Math.abs(s)<.005?"flat":Math.round(Math.abs(s)*100)+"%"," vs last wk"]}),a&&M.jsx(py,{data:a}),o&&M.jsx("div",{className:"tip",children:o.map(([u,h])=>M.jsxs("div",{className:"tip-row",children:[M.jsx("span",{children:u}),M.jsx("b",{children:h})]},u))})]})}function my({series:t,height:e=220,yFmt:n=i=>String(Math.round(i))}){const i=t.flatMap(m=>m.data);if(!i.length)return M.jsx("div",{className:"note",children:"No data in this window yet."});const r=720,s=e,a=44,o=10,l=12,c=26,u=i.map(m=>m.x.getTime()),h=Math.min(...u),d=Math.max(...u),p=Math.max(...i.map(m=>m.y),1)*1.12,x=m=>a+(m-h)/Math.max(d-h,1)*(r-a-o),S=m=>l+(1-m/p)*(s-l-c),g=4,f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],_=[];for(let m=0;m<=3;m++){const E=h+(d-h)*m/3,b=new Date(E);_.push({x:x(E),label:b.getDate()+" "+f[b.getMonth()]})}return M.jsxs("svg",{viewBox:"0 0 "+r+" "+s,className:"chart-svg",children:[Array.from({length:g+1},(m,E)=>{const b=p*E/g;return M.jsxs("g",{children:[M.jsx("line",{x1:a,x2:r-o,y1:S(b),y2:S(b),stroke:"#1B1B1B",strokeWidth:"1"}),M.jsx("text",{x:a-7,y:S(b)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:n(b)})]},E)}),_.map((m,E)=>M.jsx("text",{x:m.x,y:s-8,textAnchor:"middle",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:m.label},E)),t.map(m=>{const E=m.data.map(b=>x(b.x.getTime()).toFixed(1)+","+S(b.y).toFixed(1));return M.jsxs("g",{children:[m.area&&M.jsx("polygon",{points:E.join(" ")+" "+x(d).toFixed(1)+","+S(0)+" "+x(h).toFixed(1)+","+S(0),fill:m.color,opacity:"0.08"}),M.jsx("polyline",{points:E.join(" "),fill:"none",stroke:m.color,strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round"})]},m.key)})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bf="166",gy=0,_p=1,vy=2,Nv=1,_y=2,ui=3,ir=0,ln=1,pi=2,Ji=0,As=1,xp=2,yp=3,Sp=4,xy=5,xr=100,yy=101,Sy=102,My=103,Ey=104,wy=200,Ty=201,Ay=202,Ry=203,ad=204,od=205,Cy=206,by=207,Py=208,Ly=209,Dy=210,Ny=211,Iy=212,Uy=213,Fy=214,ky=0,Oy=1,zy=2,Dl=3,By=4,Hy=5,Vy=6,Gy=7,Iv=0,Wy=1,jy=2,er=0,Xy=1,Yy=2,qy=3,$y=4,Ky=5,Zy=6,Qy=7,Uv=300,ks=301,Os=302,ld=303,cd=304,ec=306,ud=1e3,wr=1001,dd=1002,Rn=1003,Jy=1004,xo=1005,Hn=1006,zc=1007,Tr=1008,wi=1009,Fv=1010,kv=1011,Oa=1012,Hf=1013,Fr=1014,vi=1015,Xa=1016,Vf=1017,Gf=1018,zs=1020,Ov=35902,zv=1021,Bv=1022,Vn=1023,Hv=1024,Vv=1025,Rs=1026,Bs=1027,Gv=1028,Wf=1029,Wv=1030,jf=1031,Xf=1033,tl=33776,nl=33777,il=33778,rl=33779,fd=35840,hd=35841,pd=35842,md=35843,gd=36196,vd=37492,_d=37496,xd=37808,yd=37809,Sd=37810,Md=37811,Ed=37812,wd=37813,Td=37814,Ad=37815,Rd=37816,Cd=37817,bd=37818,Pd=37819,Ld=37820,Dd=37821,sl=36492,Nd=36494,Id=36495,jv=36283,Ud=36284,Fd=36285,kd=36286,eS=3200,tS=3201,nS=0,iS=1,Vi="",$n="srgb",or="srgb-linear",Yf="display-p3",tc="display-p3-linear",Nl="linear",lt="srgb",Il="rec709",Ul="p3",Gr=7680,Mp=519,rS=512,sS=513,aS=514,Xv=515,oS=516,lS=517,cS=518,uS=519,Ep=35044,wp="300 es",_i=2e3,Fl=2001;class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,Od=180/Math.PI;function Ya(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function dS(t,e){return(t%e+e)%e}function Hc(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],x=i[8],S=r[0],g=r[3],f=r[6],_=r[1],m=r[4],E=r[7],b=r[2],C=r[5],R=r[8];return s[0]=a*S+o*_+l*b,s[3]=a*g+o*m+l*C,s[6]=a*f+o*E+l*R,s[1]=c*S+u*_+h*b,s[4]=c*g+u*m+h*C,s[7]=c*f+u*E+h*R,s[2]=d*S+p*_+x*b,s[5]=d*g+p*m+x*C,s[8]=d*f+p*E+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,p=c*s-a*l,x=n*h+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=d*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new je;function Yv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fS(){const t=kl("canvas");return t.style.display="block",t}const Tp={};function qv(t){t in Tp||(Tp[t]=!0,console.warn(t))}function hS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Ap=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[or]:{transfer:Nl,primaries:Il,toReference:t=>t,fromReference:t=>t},[$n]:{transfer:lt,primaries:Il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Nl,primaries:Ul,toReference:t=>t.applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap)},[Yf]:{transfer:lt,primaries:Ul,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Rp),fromReference:t=>t.applyMatrix3(Ap).convertLinearToSRGB()}},pS=new Set([or,tc]),it={enabled:!0,_workingColorSpace:or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!pS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=yo[e].toReference,r=yo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return yo[t].primaries},getTransfer:function(t){return t===Vi?Nl:yo[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class mS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=kl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gS=0;class $v{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wc(r[a].image)):s.push(Wc(r[a]))}else s=Wc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vS=0;class cn extends js{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=wr,r=wr,s=Hn,a=Tr,o=Vn,l=wi,c=cn.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Ya(),this.name="",this.source=new $v(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Uv;cn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],x=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,E=(p+1)/2,b=(f+1)/2,C=(u+d)/4,R=(h+S)/4,w=(x+g)/4;return m>E&&m>b?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=R/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=w/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=w/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(h-S)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _S extends js{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $v(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends _S{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Kv extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],p=s[a+1],x=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=S;return}if(h!==S||l!==d||c!==p||u!==x){let g=1-o;const f=l*d+c*p+u*x+h*S,_=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const b=Math.sqrt(m),C=Math.atan2(b,f*_);g=Math.sin(g*C)/b,o=Math.sin(o*C)/b}const E=o*_;if(l=l*g+d*E,c=c*g+p*E,u=u*g+x*E,h=h*g+S*E,g===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+u*h+l*p-c*d,e[n+1]=l*x+u*d+c*h-o*p,e[n+2]=c*x+u*p+o*d-l*h,e[n+3]=u*x-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"YXZ":this._x=d*u*h+c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"ZXY":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h-d*p*x;break;case"ZYX":this._x=d*u*h-c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h+d*p*x;break;case"YZX":this._x=d*u*h+c*p*x,this._y=c*p*h+d*u*x,this._z=c*u*x-d*p*h,this._w=c*u*h-d*p*x;break;case"XZY":this._x=d*u*h-c*p*x,this._y=c*p*h-d*u*x,this._z=c*u*x+d*p*h,this._w=c*u*h+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new q,Cp=new qa;class $a{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Mo.subVectors(this.max,na),jr.subVectors(e.a,na),Xr.subVectors(e.b,na),Yr.subVectors(e.c,na),Li.subVectors(Xr,jr),Di.subVectors(Yr,Xr),cr.subVectors(jr,Yr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-cr.z,cr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,cr.z,0,-cr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-cr.y,cr.x,0];return!Xc(n,jr,Xr,Yr,Mo)||(n=[1,0,0,0,1,0,0,0,1],!Xc(n,jr,Xr,Yr,Mo))?!1:(Eo.crossVectors(Li,Di),n=[Eo.x,Eo.y,Eo.z],Xc(n,jr,Xr,Yr,Mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new q,new q,new q,new q,new q,new q,new q,new q],Nn=new q,So=new $a,jr=new q,Xr=new q,Yr=new q,Li=new q,Di=new q,cr=new q,na=new q,Mo=new q,Eo=new q,ur=new q;function Xc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ur.fromArray(t,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yS=new $a,ia=new q,Yc=new q;class qf{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(Yc)),this.expandByPoint(ia.copy(e.center).sub(Yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new q,qc=new q,wo=new q,Ni=new q,$c=new q,To=new q,Kc=new q;class SS{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qc.copy(e).add(n).multiplyScalar(.5),wo.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(qc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(wo),o=Ni.dot(this.direction),l=-Ni.dot(wo),c=Ni.lengthSq(),u=Math.abs(1-a*a);let h,d,p,x;if(u>0)if(h=a*l-o,d=a*o-l,x=s*u,h>=0)if(d>=-x)if(d<=x){const S=1/u;h*=S,d*=S,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qc).addScaledVector(wo,d),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){$c.subVectors(n,e),To.subVectors(i,e),Kc.crossVectors($c,To);let a=this.direction.dot(Kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Ni,To));if(l<0)return null;const c=o*this.direction.dot($c.cross(Ni));if(c<0||l+c>a)return null;const u=-o*Ni.dot(Kc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,u,h,d,p,x,S,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,d,p,x,S,g)}set(e,n,i,r,s,a,o,l,c,u,h,d,p,x,S,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=x,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,x=o*u,S=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+x*c,n[5]=d-S*c,n[9]=-o*l,n[2]=S-d*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,x=c*u,S=c*h;n[0]=d+S*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=p*o-x,n[6]=S+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,x=c*u,S=c*h;n[0]=d-S*o,n[4]=-a*h,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*u,n[9]=S-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*h,x=o*u,S=o*h;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+S,n[1]=l*h,n[5]=S*c+d,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,x=o*l,S=o*c;n[0]=l*u,n[4]=S-d*h,n[8]=x*h+p,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*h+x,n[10]=d-S*h}else if(e.order==="XZY"){const d=a*l,p=a*c,x=o*l,S=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+S,n[5]=a*u,n[9]=p*h-x,n[2]=x*h-p,n[6]=o*u,n[10]=S*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,ES)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),Ao.crossVectors(fn,Ii),r[0]=Ii.x,r[4]=Ao.x,r[8]=fn.x,r[1]=Ii.y,r[5]=Ao.y,r[9]=fn.y,r[2]=Ii.z,r[6]=Ao.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],x=i[2],S=i[6],g=i[10],f=i[14],_=i[3],m=i[7],E=i[11],b=i[15],C=r[0],R=r[4],w=r[8],v=r[12],y=r[1],P=r[5],U=r[9],I=r[13],W=r[2],H=r[6],O=r[10],z=r[14],N=r[3],G=r[7],K=r[11],ie=r[15];return s[0]=a*C+o*y+l*W+c*N,s[4]=a*R+o*P+l*H+c*G,s[8]=a*w+o*U+l*O+c*K,s[12]=a*v+o*I+l*z+c*ie,s[1]=u*C+h*y+d*W+p*N,s[5]=u*R+h*P+d*H+p*G,s[9]=u*w+h*U+d*O+p*K,s[13]=u*v+h*I+d*z+p*ie,s[2]=x*C+S*y+g*W+f*N,s[6]=x*R+S*P+g*H+f*G,s[10]=x*w+S*U+g*O+f*K,s[14]=x*v+S*I+g*z+f*ie,s[3]=_*C+m*y+E*W+b*N,s[7]=_*R+m*P+E*H+b*G,s[11]=_*w+m*U+E*O+b*K,s[15]=_*v+m*I+E*z+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],x=e[3],S=e[7],g=e[11],f=e[15];return x*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*p-i*l*p)+S*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+g*(+n*c*h-n*o*p-s*a*h+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-n*l*h+n*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],x=e[12],S=e[13],g=e[14],f=e[15],_=h*g*c-S*d*c+S*l*p-o*g*p-h*l*f+o*d*f,m=x*d*c-u*g*c-x*l*p+a*g*p+u*l*f-a*d*f,E=u*S*c-x*h*c+x*o*p-a*S*p-u*o*f+a*h*f,b=x*h*l-u*S*l-x*o*d+a*S*d+u*o*g-a*h*g,C=n*_+i*m+r*E+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=_*R,e[1]=(S*d*s-h*g*s-S*r*p+i*g*p+h*r*f-i*d*f)*R,e[2]=(o*g*s-S*l*s+S*r*c-i*g*c-o*r*f+i*l*f)*R,e[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=m*R,e[5]=(u*g*s-x*d*s+x*r*p-n*g*p-u*r*f+n*d*f)*R,e[6]=(x*l*s-a*g*s-x*r*c+n*g*c+a*r*f-n*l*f)*R,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*p+n*l*p)*R,e[8]=E*R,e[9]=(x*h*s-u*S*s-x*i*p+n*S*p+u*i*f-n*h*f)*R,e[10]=(a*S*s-x*o*s+x*i*c-n*S*c-a*i*f+n*o*f)*R,e[11]=(u*o*s-a*h*s-u*i*c+n*h*c+a*i*p-n*o*p)*R,e[12]=b*R,e[13]=(u*S*r-x*h*r+x*i*d-n*S*d-u*i*g+n*h*g)*R,e[14]=(x*o*r-a*S*r-x*i*l+n*S*l+a*i*g-n*o*g)*R,e[15]=(a*h*r-u*o*r+u*i*l-n*h*l-a*i*d+n*o*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,d=s*c,p=s*u,x=s*h,S=a*u,g=a*h,f=o*h,_=l*c,m=l*u,E=l*h,b=i.x,C=i.y,R=i.z;return r[0]=(1-(S+f))*b,r[1]=(p+E)*b,r[2]=(x-m)*b,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+f))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(x+m)*R,r[9]=(g-_)*R,r[10]=(1-(d+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=qr.set(r[0],r[1],r[2]).length();const a=qr.set(r[4],r[5],r[6]).length(),o=qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(o===_i)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Fl)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(a-s),d=(n+e)*c,p=(i+r)*u;let x,S;if(o===_i)x=(a+s)*h,S=-2*h;else if(o===Fl)x=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qr=new q,In=new Lt,MS=new q(0,0,0),ES=new q(1,1,1),Ii=new q,Ao=new q,fn=new q,bp=new Lt,Pp=new qa;class Ti{constructor(e=0,n=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const Lp=new q,$r=new qa,oi=new Lt,Ro=new q,ra=new q,TS=new q,AS=new qa,Dp=new q(1,0,0),Np=new q(0,1,0),Ip=new q(0,0,1),Up={type:"added"},RS={type:"removed"},Kr={type:"childadded",child:null},Zc={type:"childremoved",child:null};class vn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new q,n=new Ti,i=new qa,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Np,e)}rotateZ(e){return this.rotateOnAxis(Ip,e)}translateOnAxis(e,n){return Lp.copy(e).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Np,e)}translateZ(e){return this.translateOnAxis(Ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ro.copy(e):Ro.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ra,Ro,this.up):oi.lookAt(Ro,ra,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(oi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Up),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RS),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Up),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new q,li=new q,Qc=new q,ci=new q,Zr=new q,Qr=new q,Fp=new q,Jc=new q,eu=new q,tu=new q;class Qn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),li.subVectors(i,n),Qc.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(li),l=Un.dot(Qc),c=li.dot(li),u=li.dot(Qc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),li.subVectors(e,n),Un.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Un.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Qr.subVectors(s,i),Jc.subVectors(e,i);const l=Zr.dot(Jc),c=Qr.dot(Jc);if(l<=0&&c<=0)return n.copy(i);eu.subVectors(e,r);const u=Zr.dot(eu),h=Qr.dot(eu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Zr,a);tu.subVectors(e,s);const p=Zr.dot(tu),x=Qr.dot(tu);if(x>=0&&p<=x)return n.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Qr,o);const g=u*x-p*h;if(g<=0&&h-u>=0&&p-x>=0)return Fp.subVectors(s,r),o=(h-u)/(h-u+(p-x)),n.copy(r).addScaledVector(Fp,o);const f=1/(g+S+d);return a=S*f,o=d*f,n.copy(i).addScaledVector(Zr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Co={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=dS(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=Qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Gc(e.r),this.g=Gc(e.g),this.b=Gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return it.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=$n){it.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Co);const i=Hc(Ui.h,Co.h,n),r=Hc(Ui.s,Co.s,n),s=Hc(Ui.l,Co.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new st;st.NAMES=Qv;let CS=0;class nc extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=As,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=od,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Jv extends nc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new q,bo=new Ze;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ep,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ep&&(e.usage=this.usage),e}}class e_ extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class t_ extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pr extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let bS=0;const Mn=new Lt,iu=new vn,Jr=new q,hn=new $a,sa=new $a,It=new q;class Br extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yv(e)?t_:e_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(hn.min,sa.min),hn.expandByPoint(It),It.addVectors(hn.max,sa.max),hn.expandByPoint(It)):(hn.expandByPoint(sa.min),hn.expandByPoint(sa.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(Jr.fromBufferAttribute(e,c),It.add(Jr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new q,l[w]=new q;const c=new q,u=new q,h=new q,d=new Ze,p=new Ze,x=new Ze,S=new q,g=new q;function f(w,v,y){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,v),x.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(d),x.sub(d);const P=1/(p.x*x.y-x.x*p.y);isFinite(P)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(P),o[w].add(S),o[v].add(S),o[y].add(S),l[w].add(g),l[v].add(g),l[y].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,v=_.length;w<v;++w){const y=_[w],P=y.start,U=y.count;for(let I=P,W=P+U;I<W;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const m=new q,E=new q,b=new q,C=new q;function R(w){b.fromBufferAttribute(r,w),C.copy(b);const v=o[w];m.copy(v),m.sub(b.multiplyScalar(b.dot(v))).normalize(),E.crossVectors(C,v);const P=E.dot(l[w])<0?-1:1;a.setXYZW(w,m.x,m.y,m.z,P)}for(let w=0,v=_.length;w<v;++w){const y=_[w],P=y.start,U=y.count;for(let I=P,W=P+U;I<W;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),S=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let f=0;f<u;f++)d[x++]=c[p++]}return new ii(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Br,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new Lt,dr=new SS,Po=new qf,Op=new q,es=new q,ts=new q,ns=new q,ru=new q,Lo=new q,Do=new Ze,No=new Ze,Io=new Ze,zp=new q,Bp=new q,Hp=new q,Uo=new q,Fo=new q;class Jn extends vn{constructor(e=new Br,n=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ru.fromBufferAttribute(h,e),a?Lo.addScaledVector(ru,u):Lo.addScaledVector(ru.sub(n),u))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(Po.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Po,Op)===null||dr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(kp.copy(s).invert(),dr.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=_,b=m;E<b;E+=3){const C=o.getX(E),R=o.getX(E+1),w=o.getX(E+2);r=ko(this,f,e,i,c,u,h,C,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let g=x,f=S;g<f;g+=3){const _=o.getX(g),m=o.getX(g+1),E=o.getX(g+2);r=ko(this,a,e,i,c,u,h,_,m,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const g=d[x],f=a[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=_,b=m;E<b;E+=3){const C=E,R=E+1,w=E+2;r=ko(this,f,e,i,c,u,h,C,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=x,f=S;g<f;g+=3){const _=g,m=g+1,E=g+2;r=ko(this,a,e,i,c,u,h,_,m,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function PS(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Fo);return c<n.near||c>n.far?null:{distance:c,point:Fo.clone(),object:t}}function ko(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,es),t.getVertexPosition(l,ts),t.getVertexPosition(c,ns);const u=PS(t,e,n,i,es,ts,ns,Uo);if(u){r&&(Do.fromBufferAttribute(r,o),No.fromBufferAttribute(r,l),Io.fromBufferAttribute(r,c),u.uv=Qn.getInterpolation(Uo,es,ts,ns,Do,No,Io,new Ze)),s&&(Do.fromBufferAttribute(s,o),No.fromBufferAttribute(s,l),Io.fromBufferAttribute(s,c),u.uv1=Qn.getInterpolation(Uo,es,ts,ns,Do,No,Io,new Ze)),a&&(zp.fromBufferAttribute(a,o),Bp.fromBufferAttribute(a,l),Hp.fromBufferAttribute(a,c),u.normal=Qn.getInterpolation(Uo,es,ts,ns,zp,Bp,Hp,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};Qn.getNormal(es,ts,ns,h.normal),u.face=h}return u}class Ka extends Br{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(c,3)),this.setAttribute("normal",new Pr(u,3)),this.setAttribute("uv",new Pr(h,2));function x(S,g,f,_,m,E,b,C,R,w,v){const y=E/R,P=b/w,U=E/2,I=b/2,W=C/2,H=R+1,O=w+1;let z=0,N=0;const G=new q;for(let K=0;K<O;K++){const ie=K*P-I;for(let Q=0;Q<H;Q++){const we=Q*y-U;G[S]=we*_,G[g]=ie*m,G[f]=W,c.push(G.x,G.y,G.z),G[S]=0,G[g]=0,G[f]=C>0?1:-1,u.push(G.x,G.y,G.z),h.push(Q/R),h.push(1-K/w),z+=1}}for(let K=0;K<w;K++)for(let ie=0;ie<R;ie++){const Q=d+ie+H*K,we=d+ie+H*(K+1),Y=d+(ie+1)+H*(K+1),J=d+(ie+1)+H*K;l.push(Q,we,J),l.push(we,Y,J),N+=6}o.addGroup(p,N,v),p+=N,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function LS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const DS={clone:Hs,merge:$t};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends nc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class i_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new q,Vp=new Ze,Gp=new Ze;class zn extends i_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Vp,Gp),n.subVectors(Gp,Vp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class US extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new zn(is,rs,e,n);s.layers=this.layers,this.add(s);const a=new zn(is,rs,e,n);a.layers=this.layers,this.add(a);const o=new zn(is,rs,e,n);o.layers=this.layers,this.add(o);const l=new zn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new zn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class r_ extends cn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FS extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new r_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ka(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ji});s.uniforms.tEquirect.value=n;const a=new Jn(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Hn),new US(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const su=new q,kS=new q,OS=new je;class vr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OS.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new qf,Oo=new q;class s_{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,a=new vr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],x=r[9],S=r[10],g=r[11],f=r[12],_=r[13],m=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,g-p,E-f).normalize(),i[1].setComponents(l+s,d+c,g+p,E+f).normalize(),i[2].setComponents(l+a,d+u,g+x,E+_).normalize(),i[3].setComponents(l-a,d-u,g-x,E-_).normalize(),i[4].setComponents(l-o,d-h,g-S,E-m).normalize(),n===_i)i[5].setComponents(l+o,d+h,g+S,E+m).normalize();else if(n===Fl)i[5].setComponents(o,h,S,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zS(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,x=d.length;p<x;p++){const S=d[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Za extends Br{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=n/l,p=[],x=[],S=[],g=[];for(let f=0;f<u;f++){const _=f*d-a;for(let m=0;m<c;m++){const E=m*h-s;x.push(E,-_,0),S.push(0,0,1),g.push(m/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){const m=_+c*f,E=_+c*(f+1),b=_+1+c*(f+1),C=_+1+c*f;p.push(m,E,C),p.push(E,b,C)}this.setIndex(p),this.setAttribute("position",new Pr(x,3)),this.setAttribute("normal",new Pr(S,3)),this.setAttribute("uv",new Pr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,OM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,YE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ow=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:BS,alphahash_pars_fragment:HS,alphamap_fragment:VS,alphamap_pars_fragment:GS,alphatest_fragment:WS,alphatest_pars_fragment:jS,aomap_fragment:XS,aomap_pars_fragment:YS,batching_pars_vertex:qS,batching_vertex:$S,begin_vertex:KS,beginnormal_vertex:ZS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:aM,color_pars_vertex:oM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:xM,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:wM,fog_fragment:TM,fog_pars_fragment:AM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:CM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:NM,lights_toon_pars_fragment:IM,lights_phong_fragment:UM,lights_phong_pars_fragment:FM,lights_physical_fragment:kM,lights_physical_pars_fragment:OM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:HM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:jM,map_fragment:XM,map_pars_fragment:YM,map_particle_fragment:qM,map_particle_pars_fragment:$M,metalnessmap_fragment:KM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:QM,morphcolor_vertex:JM,morphnormal_vertex:eE,morphtarget_pars_vertex:tE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:aE,normal_vertex:oE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:vE,dithering_pars_fragment:_E,roughnessmap_fragment:xE,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:ME,shadowmap_vertex:EE,shadowmask_pars_fragment:wE,skinbase_vertex:TE,skinning_pars_vertex:AE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:bE,specularmap_pars_fragment:PE,tonemapping_fragment:LE,tonemapping_pars_fragment:DE,transmission_fragment:NE,transmission_pars_fragment:IE,uv_pars_fragment:UE,uv_pars_vertex:FE,uv_vertex:kE,worldpos_vertex:OE,background_vert:zE,background_frag:BE,backgroundCube_vert:HE,backgroundCube_frag:VE,cube_vert:GE,cube_frag:WE,depth_vert:jE,depth_frag:XE,distanceRGBA_vert:YE,distanceRGBA_frag:qE,equirect_vert:$E,equirect_frag:KE,linedashed_vert:ZE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:ew,meshlambert_vert:tw,meshlambert_frag:nw,meshmatcap_vert:iw,meshmatcap_frag:rw,meshnormal_vert:sw,meshnormal_frag:aw,meshphong_vert:ow,meshphong_frag:lw,meshphysical_vert:cw,meshphysical_frag:uw,meshtoon_vert:dw,meshtoon_frag:fw,points_vert:hw,points_frag:pw,shadow_vert:mw,shadow_frag:gw,sprite_vert:vw,sprite_frag:_w},me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Kn={basic:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([me.lights,me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Kn.physical={uniforms:$t([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const zo={r:0,b:0,g:0},hr=new Ti,xw=new Lt;function yw(t,e,n,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function x(_){let m=_.isScene===!0?_.background:null;return m&&m.isTexture&&(m=(_.backgroundBlurriness>0?n:e).get(m)),m}function S(_){let m=!1;const E=x(_);E===null?f(o,l):E&&E.isColor&&(f(E,1),m=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,m){const E=x(m);E&&(E.isCubeTexture||E.mapping===ec)?(u===void 0&&(u=new Jn(new Ka(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Hs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(m.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xw.makeRotationFromEuler(hr)),u.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,(h!==E||d!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Jn(new Za(2,2),new Ai({name:"BackgroundMaterial",uniforms:Hs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=it.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,m){_.getRGB(zo,n_(t)),i.buffers.color.setClear(zo.r,zo.g,zo.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(_,m=1){o.set(_),l=m,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(o,l)},render:S,addToRenderList:g}}function Sw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,P,U,I,W){let H=!1;const O=h(I,U,P);s!==O&&(s=O,c(s.object)),H=p(y,I,U,W),H&&x(y,I,U,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(y,P,U,I),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function h(y,P,U){const I=U.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let H=W[P.id];H===void 0&&(H={},W[P.id]=H);let O=H[I];return O===void 0&&(O=d(l()),H[I]=O),O}function d(y){const P=[],U=[],I=[];for(let W=0;W<n;W++)P[W]=0,U[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,P,U,I){const W=s.attributes,H=P.attributes;let O=0;const z=U.getAttributes();for(const N in z)if(z[N].location>=0){const K=W[N];let ie=H[N];if(ie===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function x(y,P,U,I){const W={},H=P.attributes;let O=0;const z=U.getAttributes();for(const N in z)if(z[N].location>=0){let K=H[N];K===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),W[N]=ie,O++}s.attributes=W,s.attributesNum=O,s.index=I}function S(){const y=s.newAttributes;for(let P=0,U=y.length;P<U;P++)y[P]=0}function g(y){f(y,0)}function f(y,P){const U=s.newAttributes,I=s.enabledAttributes,W=s.attributeDivisors;U[y]=1,I[y]===0&&(t.enableVertexAttribArray(y),I[y]=1),W[y]!==P&&(t.vertexAttribDivisor(y,P),W[y]=P)}function _(){const y=s.newAttributes,P=s.enabledAttributes;for(let U=0,I=P.length;U<I;U++)P[U]!==y[U]&&(t.disableVertexAttribArray(U),P[U]=0)}function m(y,P,U,I,W,H,O){O===!0?t.vertexAttribIPointer(y,P,U,W,H):t.vertexAttribPointer(y,P,U,I,W,H)}function E(y,P,U,I){S();const W=I.attributes,H=U.getAttributes(),O=P.defaultAttributeValues;for(const z in H){const N=H[z];if(N.location>=0){let G=W[z];if(G===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(G=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(G=y.instanceColor)),G!==void 0){const K=G.normalized,ie=G.itemSize,Q=e.get(G);if(Q===void 0)continue;const we=Q.buffer,Y=Q.type,J=Q.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||G.gpuType===Hf;if(G.isInterleavedBufferAttribute){const oe=G.data,Me=oe.stride,ae=G.offset;if(oe.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)f(N.location+xe,oe.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<N.locationSize;xe++)g(N.location+xe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let xe=0;xe<N.locationSize;xe++)m(N.location+xe,ie/N.locationSize,Y,K,Me*J,(ae+ie/N.locationSize*xe)*J,le)}else{if(G.isInstancedBufferAttribute){for(let oe=0;oe<N.locationSize;oe++)f(N.location+oe,G.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let oe=0;oe<N.locationSize;oe++)m(N.location+oe,ie/N.locationSize,Y,K,ie*J,ie/N.locationSize*oe*J,le)}}else if(O!==void 0){const K=O[z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(N.location,K);break;case 3:t.vertexAttrib3fv(N.location,K);break;case 4:t.vertexAttrib4fv(N.location,K);break;default:t.vertexAttrib1fv(N.location,K)}}}}_()}function b(){w();for(const y in i){const P=i[y];for(const U in P){const I=P[U];for(const W in I)u(I[W].object),delete I[W];delete P[U]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const U in P){const I=P[U];for(const W in I)u(I[W].object),delete I[W];delete P[U]}delete i[y.id]}function R(y){for(const P in i){const U=i[P];if(U[y.id]===void 0)continue;const I=U[y.id];for(const W in I)u(I[W].object),delete I[W];delete U[y.id]}}function w(){v(),a=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:_}}function Mw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let x=0;x<h;x++)p+=u[x];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let x=0;for(let S=0;S<h;S++)x+=u[S];for(let S=0;S<d.length;S++)n.update(x,i,d[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ew(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Vn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==wi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!R)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),S=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:E,maxSamples:b}}function ww(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new vr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const _=s?0:i,m=_*4;let E=f.clippingState||null;l.value=E,E=u(x,d,m,p);for(let b=0;b!==m;++b)E[b]=n[b];f.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=l.value,x!==!0||g===null){const f=p+S*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<f)&&(g=new Float32Array(f));for(let m=0,E=p;m!==S;++m,E+=4)a.copy(h[m]).applyMatrix4(_,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}function Tw(t){let e=new WeakMap;function n(a,o){return o===ld?a.mapping=ks:o===cd&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ld||o===cd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new FS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class o_ extends i_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const _s=4,Wp=[.125,.215,.35,.446,.526,.582],yr=20,au=new o_,jp=new st;let ou=null,lu=0,cu=0,uu=!1;const _r=(1+Math.sqrt(5))/2,ss=1/_r,Xp=[new q(-_r,ss,0),new q(_r,ss,0),new q(-ss,0,_r),new q(ss,0,_r),new q(0,_r,-ss),new q(0,_r,ss),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Yp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Xa,format:Vn,colorSpace:or,depthBuffer:!1},r=qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Aw(s)),this._blurMaterial=Rw(s,e,n)}return r}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,au)}_sceneToCubeUV(e,n,i,r){const o=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(jp),u.toneMapping=er,u.autoClear=!1;const p=new Jv({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Jn(new Ka,p);let S=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,S=!0):(p.color.copy(jp),S=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):_===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const m=this._cubeSize;Bo(r,_*m,f>2?m:0,m,m),u.setRenderTarget(r),S&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xp[(r-s-1)%Xp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),S=s/x,g=isFinite(s)?1+Math.floor(u*S):yr;g>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const f=[];let _=0;for(let R=0;R<yr;++R){const w=R/S,v=Math.exp(-w*w/2);f.push(v),R===0?_+=v:R<g&&(_+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:m}=this;d.dTheta.value=x,d.mipInt.value=m-i;const E=this._sizeLods[r],b=3*E*(r>m-_s?r-m+_s:0),C=4*(this._cubeSize-E);Bo(n,b,C,3*E,2*E),l.setRenderTarget(n),l.render(h,au)}}function Aw(t){const e=[],n=[],i=[];let r=t;const s=t-_s+1+Wp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-_s?l=Wp[a-t+_s-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,x=6,S=3,g=2,f=1,_=new Float32Array(S*x*p),m=new Float32Array(g*x*p),E=new Float32Array(f*x*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,w=C>2?0:-1,v=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];_.set(v,S*x*C),m.set(d,g*x*C);const y=[C,C,C,C,C,C];E.set(y,f*x*C)}const b=new Br;b.setAttribute("position",new ii(_,S)),b.setAttribute("uv",new ii(m,g)),b.setAttribute("faceIndex",new ii(E,f)),e.push(b),r>_s&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function qp(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Rw(t,e,n){const i=new Float32Array(yr),r=new q(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $p(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Kp(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ld||l===cd,u=l===ks||l===Os;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Yp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Yp(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function bw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qv("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pw(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const S=d.morphAttributes[x];for(let g=0,f=S.length;g<f;g++)e.remove(S[g])}d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const x in p){const S=p[x];for(let g=0,f=S.length;g<f;g++)e.update(S[g],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,x=h.attributes.position;let S=0;if(p!==null){const _=p.array;S=p.version;for(let m=0,E=_.length;m<E;m+=3){const b=_[m+0],C=_[m+1],R=_[m+2];d.push(b,C,C,R,R,b)}}else if(x!==void 0){const _=x.array;S=x.version;for(let m=0,E=_.length/3-1;m<E;m+=3){const b=m+0,C=m+1,R=m+2;d.push(b,C,C,R,R,b)}}else return;const g=new(Yv(d)?t_:e_)(d,1);g.version=S;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Lw(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,d*a,x),n.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let g=0;for(let f=0;f<x;f++)g+=p[f];n.update(g,i,1)}function h(d,p,x,S){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],S[f]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,S,0,x);let f=0;for(let _=0;_<x;_++)f+=p[_];for(let _=0;_<S.length;_++)n.update(f,i,S[_])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Nw(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let y=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],m=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),g===!0&&(E=3);let b=o.attributes.position.count*E,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*C*4*h),w=new Kv(R,b,C,h);w.type=vi,w.needsUpdate=!0;const v=E*4;for(let P=0;P<h;P++){const U=f[P],I=_[P],W=m[P],H=b*C*4*P;for(let O=0;O<U.count;O++){const z=O*v;x===!0&&(r.fromBufferAttribute(U,O),R[H+z+0]=r.x,R[H+z+1]=r.y,R[H+z+2]=r.z,R[H+z+3]=0),S===!0&&(r.fromBufferAttribute(I,O),R[H+z+4]=r.x,R[H+z+5]=r.y,R[H+z+6]=r.z,R[H+z+7]=0),g===!0&&(r.fromBufferAttribute(W,O),R[H+z+8]=r.x,R[H+z+9]=r.y,R[H+z+10]=r.z,R[H+z+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new Ze(b,C)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Iw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class l_ extends cn{constructor(e,n,i,r,s,a,o,l,c,u=Rs){if(u!==Rs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=Fr),i===void 0&&u===Bs&&(i=zs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const c_=new cn,Zp=new l_(1,1),u_=new Kv,d_=new xS,f_=new r_,Qp=[],Jp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qp[r];if(s===void 0&&(s=new Float32Array(r),Qp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ic(t,e){let n=Jp[e];n===void 0&&(n=new Int32Array(e),Jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;nm.set(i),t.uniformMatrix2fv(this.addr,!1,nm),Nt(n,i)}}function Bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;tm.set(i),t.uniformMatrix3fv(this.addr,!1,tm),Nt(n,i)}}function Hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;em.set(i),t.uniformMatrix4fv(this.addr,!1,em),Nt(n,i)}}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function Kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Zp.compareFunction=Xv,s=Zp):s=c_,n.setTexture2D(e||s,r)}function Zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||d_,r)}function Qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||f_,r)}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||u_,r)}function e1(t){switch(t){case 5126:return Uw;case 35664:return Fw;case 35665:return kw;case 35666:return Ow;case 35674:return zw;case 35675:return Bw;case 35676:return Hw;case 5124:case 35670:return Vw;case 35667:case 35671:return Gw;case 35668:case 35672:return Ww;case 35669:case 35673:return jw;case 5125:return Xw;case 36294:return Yw;case 36295:return qw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return Jw}}function t1(t,e){t.uniform1fv(this.addr,e)}function n1(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function i1(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function r1(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function s1(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function a1(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o1(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l1(t,e){t.uniform1iv(this.addr,e)}function c1(t,e){t.uniform2iv(this.addr,e)}function u1(t,e){t.uniform3iv(this.addr,e)}function d1(t,e){t.uniform4iv(this.addr,e)}function f1(t,e){t.uniform1uiv(this.addr,e)}function h1(t,e){t.uniform2uiv(this.addr,e)}function p1(t,e){t.uniform3uiv(this.addr,e)}function m1(t,e){t.uniform4uiv(this.addr,e)}function g1(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||c_,s[a])}function v1(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||d_,s[a])}function _1(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||f_,s[a])}function x1(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||u_,s[a])}function y1(t){switch(t){case 5126:return t1;case 35664:return n1;case 35665:return i1;case 35666:return r1;case 35674:return s1;case 35675:return a1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}class S1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e1(n.type)}}class M1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=y1(n.type)}}class E1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function im(t,e){t.seq.push(e),t.map[e.id]=e}function w1(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){im(n,c===void 0?new S1(o,t,e):new M1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new E1(o),im(n,h)),n=h}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);w1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const T1=37297;let A1=0;function R1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function C1(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Ul&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Ul&&(i="LinearSRGBToLinearDisplayP3"),t){case or:case tc:return[i,"LinearTransferOETF"];case $n:case Yf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+R1(t.getShaderSource(e),a)}else return r}function b1(t,e){const n=C1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function P1(t,e){let n;switch(e){case Xy:n="Linear";break;case Yy:n="Reinhard";break;case qy:n="OptimizedCineon";break;case $y:n="ACESFilmic";break;case Zy:n="AgX";break;case Qy:n="Neutral";break;case Ky:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function L1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function D1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function N1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function om(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(t){return t.replace(I1,F1)}const U1=new Map;function F1(t,e){let n=We[e];if(n===void 0){const i=U1.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(n)}const k1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(t){return t.replace(k1,O1)}function O1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Nv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_y?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function B1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Os:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function V1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Iv:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case jy:e="ENVMAP_BLENDING_ADD";break}return e}function G1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function W1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=z1(n),c=B1(n),u=H1(n),h=V1(n),d=G1(n),p=L1(n),x=D1(s),S=r.createProgram();let g,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),f.length>0&&(f+=`
`)):(g=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),f=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?We.tonemapping_pars_fragment:"",n.toneMapping!==er?P1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,b1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=zd(a),a=am(a,n),a=om(a,n),o=zd(o),o=am(o,n),o=om(o,n),a=lm(a),o=lm(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const m=_+g+a,E=_+f+o,b=rm(r,r.VERTEX_SHADER,m),C=rm(r,r.FRAGMENT_SHADER,E);r.attachShader(S,b),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(S).trim(),I=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(C).trim();let H=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,C);else{const z=sm(r,b,"vertex"),N=sm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+z+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(I===""||W==="")&&(O=!1);O&&(P.diagnostics={runnable:H,programLog:U,vertexShader:{log:I,prefix:g},fragmentShader:{log:W,prefix:f}})}r.deleteShader(b),r.deleteShader(C),w=new al(r,S),v=N1(r,S)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,T1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A1++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=C,this}let j1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Y1(e),n.set(e,i)),i}}class Y1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function q1(t,e,n,i,r,s,a){const o=new Zv,l=new X1,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,y,P,U,I){const W=U.fog,H=I.geometry,O=v.isMeshStandardMaterial?U.environment:null,z=(v.isMeshStandardMaterial?n:e).get(v.envMap||O),N=z&&z.mapping===ec?z.image.height:null,G=x[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const K=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=K!==void 0?K.length:0;let Q=0;H.morphAttributes.position!==void 0&&(Q=1),H.morphAttributes.normal!==void 0&&(Q=2),H.morphAttributes.color!==void 0&&(Q=3);let we,Y,J,le;if(G){const Qe=Kn[G];we=Qe.vertexShader,Y=Qe.fragmentShader}else we=v.vertexShader,Y=v.fragmentShader,l.update(v),J=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);const oe=t.getRenderTarget(),Me=I.isInstancedMesh===!0,ae=I.isBatchedMesh===!0,xe=!!v.map,ze=!!v.matcap,D=!!z,Ue=!!v.aoMap,Be=!!v.lightMap,Pe=!!v.bumpMap,fe=!!v.normalMap,$e=!!v.displacementMap,Ae=!!v.emissiveMap,be=!!v.metalnessMap,L=!!v.roughnessMap,T=v.anisotropy>0,V=v.clearcoat>0,Z=v.dispersion>0,ne=v.iridescence>0,$=v.sheen>0,Te=v.transmission>0,de=T&&!!v.anisotropyMap,ve=V&&!!v.clearcoatMap,Ie=V&&!!v.clearcoatNormalMap,re=V&&!!v.clearcoatRoughnessMap,ge=ne&&!!v.iridescenceMap,Fe=ne&&!!v.iridescenceThicknessMap,Le=$&&!!v.sheenColorMap,pe=$&&!!v.sheenRoughnessMap,He=!!v.specularMap,Ge=!!v.specularColorMap,pt=!!v.specularIntensityMap,F=Te&&!!v.transmissionMap,ce=Te&&!!v.thicknessMap,ee=!!v.gradientMap,te=!!v.alphaMap,he=v.alphaTest>0,ke=!!v.alphaHash,Ye=!!v.extensions;let Tt=er;v.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Ot={shaderID:G,shaderType:v.type,shaderName:v.name,vertexShader:we,fragmentShader:Y,defines:v.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:ae,batchingColor:ae&&I._colorsTexture!==null,instancing:Me,instancingColor:Me&&I.instanceColor!==null,instancingMorph:Me&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:or,alphaToCoverage:!!v.alphaToCoverage,map:xe,matcap:ze,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:N,aoMap:Ue,lightMap:Be,bumpMap:Pe,normalMap:fe,displacementMap:d&&$e,emissiveMap:Ae,normalMapObjectSpace:fe&&v.normalMapType===iS,normalMapTangentSpace:fe&&v.normalMapType===nS,metalnessMap:be,roughnessMap:L,anisotropy:T,anisotropyMap:de,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:Ie,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ne,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:Le,sheenRoughnessMap:pe,specularMap:He,specularColorMap:Ge,specularIntensityMap:pt,transmission:Te,transmissionMap:F,thicknessMap:ce,gradientMap:ee,opaque:v.transparent===!1&&v.blending===As&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:ke,combine:v.combine,mapUv:xe&&S(v.map.channel),aoMapUv:Ue&&S(v.aoMap.channel),lightMapUv:Be&&S(v.lightMap.channel),bumpMapUv:Pe&&S(v.bumpMap.channel),normalMapUv:fe&&S(v.normalMap.channel),displacementMapUv:$e&&S(v.displacementMap.channel),emissiveMapUv:Ae&&S(v.emissiveMap.channel),metalnessMapUv:be&&S(v.metalnessMap.channel),roughnessMapUv:L&&S(v.roughnessMap.channel),anisotropyMapUv:de&&S(v.anisotropyMap.channel),clearcoatMapUv:ve&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(v.sheenRoughnessMap.channel),specularMapUv:He&&S(v.specularMap.channel),specularColorMapUv:Ge&&S(v.specularColorMap.channel),specularIntensityMapUv:pt&&S(v.specularIntensityMap.channel),transmissionMapUv:F&&S(v.transmissionMap.channel),thicknessMapUv:ce&&S(v.thicknessMap.channel),alphaMapUv:te&&S(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(fe||T),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!H.attributes.uv&&(xe||te),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:xe&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ye&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&v.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(y,v),m(y,v),y.push(t.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function _(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function m(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),v.push(o.mask)}function E(v){const y=x[v.type];let P;if(y){const U=Kn[y];P=DS.clone(U.uniforms)}else P=v.uniforms;return P}function b(v,y){let P;for(let U=0,I=u.length;U<I;U++){const W=u[U];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new W1(t,y,v,s),u.push(P)),P}function C(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:E,acquireProgram:b,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:w}}function $1(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function K1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function um(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,d,p,x,S,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:x,renderOrder:h.renderOrder,z:S,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=S,f.group=g),e++,f}function o(h,d,p,x,S,g){const f=a(h,d,p,x,S,g);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,x,S,g){const f=a(h,d,p,x,S,g);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||K1),i.length>1&&i.sort(d||um),r.length>1&&r.sort(d||um)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Z1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new dm,t.set(i,[a])):r>=s.length?(a=new dm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Q1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new st};break;case"SpotLight":n={position:new q,direction:new q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function J1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let eT=0;function tT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nT(t){const e=new Q1,n=J1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Lt,a=new Lt;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,x=0,S=0,g=0,f=0,_=0,m=0,E=0,b=0,C=0,R=0;c.sort(tT);for(let v=0,y=c.length;v<y;v++){const P=c[v],U=P.color,I=P.intensity,W=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*I,h+=U.g*I,d+=U.b*I;else if(P.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(P.sh.coefficients[O],I);R++}else if(P.isDirectionalLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=n.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,_++}i.directional[p]=O,p++}else if(P.isSpotLight){const O=e.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(U).multiplyScalar(I),O.distance=W,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,i.spot[S]=O;const z=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,z.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[S]=z.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=H,E++}S++}else if(P.isRectAreaLight){const O=e.get(P);O.color.copy(U).multiplyScalar(I),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=O,g++}else if(P.isPointLight){const O=e.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const z=P.shadow,N=n.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[x]=N,i.pointShadowMap[x]=H,i.pointShadowMatrix[x]=P.shadow.matrix,m++}i.point[x]=O,x++}else if(P.isHemisphereLight){const O=e.get(P);O.skyColor.copy(P.color).multiplyScalar(I),O.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[f]=O,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const w=i.hash;(w.directionalLength!==p||w.pointLength!==x||w.spotLength!==S||w.rectAreaLength!==g||w.hemiLength!==f||w.numDirectionalShadows!==_||w.numPointShadows!==m||w.numSpotShadows!==E||w.numSpotMaps!==b||w.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=E+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,w.directionalLength=p,w.pointLength=x,w.spotLength=S,w.rectAreaLength=g,w.hemiLength=f,w.numDirectionalShadows=_,w.numPointShadows=m,w.numSpotShadows=E,w.numSpotMaps=b,w.numLightProbes=R,i.version=eT++)}function l(c,u){let h=0,d=0,p=0,x=0,S=0;const g=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const m=c[f];if(m.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(m.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(m.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(m.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(m.width*.5,0,0),E.halfHeight.set(0,m.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(m.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(g),d++}else if(m.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(g),S++}}}return{setup:o,setupView:l,state:i}}function fm(t){const e=new nT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function iT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new fm(t),e.set(r,[o])):s>=a.length?(o=new fm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class rT extends nc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends nc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lT(t,e,n){let i=new s_;const r=new Ze,s=new Ze,a=new Ft,o=new rT({depthPacking:tS}),l=new sT,c={},u=n.maxTextureSize,h={[ir]:ln,[ln]:ir,[pi]:pi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:aT,fragmentShader:oT}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Br;x.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Jn(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nv;let f=this.type;this.render=function(C,R,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const v=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Ji),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const I=f!==ui&&this.type===ui,W=f===ui&&this.type!==ui;for(let H=0,O=C.length;H<O;H++){const z=C[H],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const G=N.getFrameExtents();if(r.multiply(G),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,N.mapSize.y=s.y)),N.map===null||I===!0||W===!0){const ie=this.type!==ui?{minFilter:Rn,magFilter:Rn}:{};N.map!==null&&N.map.dispose(),N.map=new kr(r.x,r.y,ie),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let ie=0;ie<K;ie++){const Q=N.getViewport(ie);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),U.viewport(a),N.updateMatrices(z,ie),i=N.getFrustum(),E(R,w,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&_(N,w),N.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(v,y,P)};function _(C,R){const w=e.update(S);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,w,d,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,w,p,S,null)}function m(C,R,w,v){let y=null;const P=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=w.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=y.uuid,I=R.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let H=W[I];H===void 0&&(H=y.clone(),W[I]=H,R.addEventListener("dispose",b)),y=H}if(y.visible=R.visible,y.wireframe=R.wireframe,v===ui?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=t.properties.get(y);U.light=w}return y}function E(C,R,w,v,y){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const I=e.update(C),W=C.material;if(Array.isArray(W)){const H=I.groups;for(let O=0,z=H.length;O<z;O++){const N=H[O],G=W[N.materialIndex];if(G&&G.visible){const K=m(C,G,v,y);C.onBeforeShadow(t,C,R,w,I,K,N),t.renderBufferDirect(w,null,I,K,C,N),C.onAfterShadow(t,C,R,w,I,K,N)}}}else if(W.visible){const H=m(C,W,v,y);C.onBeforeShadow(t,C,R,w,I,H,null),t.renderBufferDirect(w,null,I,H,C,null),C.onAfterShadow(t,C,R,w,I,H,null)}}const U=C.children;for(let I=0,W=U.length;I<W;I++)E(U[I],R,w,v,y)}function b(C){C.target.removeEventListener("dispose",b);for(const w in c){const v=c[w],y=C.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}function cT(t){function e(){let F=!1;const ce=new Ft;let ee=null;const te=new Ft(0,0,0,0);return{setMask:function(he){ee!==he&&!F&&(t.colorMask(he,he,he,he),ee=he)},setLocked:function(he){F=he},setClear:function(he,ke,Ye,Tt,Ot){Ot===!0&&(he*=Tt,ke*=Tt,Ye*=Tt),ce.set(he,ke,Ye,Tt),te.equals(ce)===!1&&(t.clearColor(he,ke,Ye,Tt),te.copy(ce))},reset:function(){F=!1,ee=null,te.set(-1,0,0,0)}}}function n(){let F=!1,ce=null,ee=null,te=null;return{setTest:function(he){he?le(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!F&&(t.depthMask(he),ce=he)},setFunc:function(he){if(ee!==he){switch(he){case ky:t.depthFunc(t.NEVER);break;case Oy:t.depthFunc(t.ALWAYS);break;case zy:t.depthFunc(t.LESS);break;case Dl:t.depthFunc(t.LEQUAL);break;case By:t.depthFunc(t.EQUAL);break;case Hy:t.depthFunc(t.GEQUAL);break;case Vy:t.depthFunc(t.GREATER);break;case Gy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=he}},setLocked:function(he){F=he},setClear:function(he){te!==he&&(t.clearDepth(he),te=he)},reset:function(){F=!1,ce=null,ee=null,te=null}}}function i(){let F=!1,ce=null,ee=null,te=null,he=null,ke=null,Ye=null,Tt=null,Ot=null;return{setTest:function(Qe){F||(Qe?le(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Qe){ce!==Qe&&!F&&(t.stencilMask(Qe),ce=Qe)},setFunc:function(Qe,ri,Xn){(ee!==Qe||te!==ri||he!==Xn)&&(t.stencilFunc(Qe,ri,Xn),ee=Qe,te=ri,he=Xn)},setOp:function(Qe,ri,Xn){(ke!==Qe||Ye!==ri||Tt!==Xn)&&(t.stencilOp(Qe,ri,Xn),ke=Qe,Ye=ri,Tt=Xn)},setLocked:function(Qe){F=Qe},setClear:function(Qe){Ot!==Qe&&(t.clearStencil(Qe),Ot=Qe)},reset:function(){F=!1,ce=null,ee=null,te=null,he=null,ke=null,Ye=null,Tt=null,Ot=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,x=!1,S=null,g=null,f=null,_=null,m=null,E=null,b=null,C=new st(0,0,0),R=0,w=!1,v=null,y=null,P=null,U=null,I=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),H=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),H=O>=2);let N=null,G={};const K=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Q=new Ft().fromArray(K),we=new Ft().fromArray(ie);function Y(F,ce,ee,te){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(F,ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<ee;Ye++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const J={};J[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(Dl),Pe(!1),fe(_p),le(t.CULL_FACE),Ue(Ji);function le(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function oe(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Me(F,ce){return u[F]!==ce?(t.bindFramebuffer(F,ce),u[F]=ce,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ae(F,ce){let ee=d,te=!1;if(F){ee=h.get(ce),ee===void 0&&(ee=[],h.set(ce,ee));const he=F.textures;if(ee.length!==he.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,Ye=he.length;ke<Ye;ke++)ee[ke]=t.COLOR_ATTACHMENT0+ke;ee.length=he.length,te=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,te=!0);te&&t.drawBuffers(ee)}function xe(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const ze={[xr]:t.FUNC_ADD,[yy]:t.FUNC_SUBTRACT,[Sy]:t.FUNC_REVERSE_SUBTRACT};ze[My]=t.MIN,ze[Ey]=t.MAX;const D={[wy]:t.ZERO,[Ty]:t.ONE,[Ay]:t.SRC_COLOR,[ad]:t.SRC_ALPHA,[Dy]:t.SRC_ALPHA_SATURATE,[Py]:t.DST_COLOR,[Cy]:t.DST_ALPHA,[Ry]:t.ONE_MINUS_SRC_COLOR,[od]:t.ONE_MINUS_SRC_ALPHA,[Ly]:t.ONE_MINUS_DST_COLOR,[by]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Iy]:t.ONE_MINUS_CONSTANT_COLOR,[Uy]:t.CONSTANT_ALPHA,[Fy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ce,ee,te,he,ke,Ye,Tt,Ot,Qe){if(F===Ji){x===!0&&(oe(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),F!==xy){if(F!==S||Qe!==w){if((g!==xr||m!==xr)&&(t.blendEquation(t.FUNC_ADD),g=xr,m=xr),Qe)switch(F){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,_=null,E=null,b=null,C.set(0,0,0),R=0,S=F,w=Qe}return}he=he||ce,ke=ke||ee,Ye=Ye||te,(ce!==g||he!==m)&&(t.blendEquationSeparate(ze[ce],ze[he]),g=ce,m=he),(ee!==f||te!==_||ke!==E||Ye!==b)&&(t.blendFuncSeparate(D[ee],D[te],D[ke],D[Ye]),f=ee,_=te,E=ke,b=Ye),(Tt.equals(C)===!1||Ot!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ot),C.copy(Tt),R=Ot),S=F,w=!1}function Be(F,ce){F.side===pi?oe(t.CULL_FACE):le(t.CULL_FACE);let ee=F.side===ln;ce&&(ee=!ee),Pe(ee),F.blending===As&&F.transparent===!1?Ue(Ji):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(F){v!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),v=F)}function fe(F){F!==gy?(le(t.CULL_FACE),F!==y&&(F===_p?t.cullFace(t.BACK):F===vy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),y=F}function $e(F){F!==P&&(H&&t.lineWidth(F),P=F)}function Ae(F,ce,ee){F?(le(t.POLYGON_OFFSET_FILL),(U!==ce||I!==ee)&&(t.polygonOffset(ce,ee),U=ce,I=ee)):oe(t.POLYGON_OFFSET_FILL)}function be(F){F?le(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function L(F){F===void 0&&(F=t.TEXTURE0+W-1),N!==F&&(t.activeTexture(F),N=F)}function T(F,ce,ee){ee===void 0&&(N===null?ee=t.TEXTURE0+W-1:ee=N);let te=G[ee];te===void 0&&(te={type:void 0,texture:void 0},G[ee]=te),(te.type!==F||te.texture!==ce)&&(N!==ee&&(t.activeTexture(ee),N=ee),t.bindTexture(F,ce||J[F]),te.type=F,te.texture=ce)}function V(){const F=G[N];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){Q.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Q.copy(F))}function pe(F){we.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),we.copy(F))}function He(F,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let te=ee.get(F);te===void 0&&(te=t.getUniformBlockIndex(ce,F.name),ee.set(F,te))}function Ge(F,ce){const te=l.get(ce).get(F);o.get(ce)!==te&&(t.uniformBlockBinding(ce,te,F.__bindingPointIndex),o.set(ce,te))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,G={},u={},h=new WeakMap,d=[],p=null,x=!1,S=null,g=null,f=null,_=null,m=null,E=null,b=null,C=new st(0,0,0),R=0,w=!1,v=null,y=null,P=null,U=null,I=null,Q.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:oe,bindFramebuffer:Me,drawBuffers:ae,useProgram:xe,setBlending:Ue,setMaterial:Be,setFlipSided:Pe,setCullFace:fe,setLineWidth:$e,setPolygonOffset:Ae,setScissorTest:be,activeTexture:L,bindTexture:T,unbindTexture:V,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:ge,texImage3D:Fe,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:Ie,texStorage3D:re,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Le,viewport:pe,reset:pt}}function hm(t,e,n,i){const r=uT(i);switch(n){case zv:return t*e;case Hv:return t*e;case Vv:return t*e*2;case Gv:return t*e/r.components*r.byteLength;case Wf:return t*e/r.components*r.byteLength;case Wv:return t*e*2/r.components*r.byteLength;case jf:return t*e*2/r.components*r.byteLength;case Bv:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Xf:return t*e*4/r.components*r.byteLength;case tl:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(t,16)*Math.max(e,8)/4;case fd:case pd:return Math.max(t,8)*Math.max(e,8)/2;case gd:case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sl:case Nd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jv:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fd:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uT(t){switch(t){case wi:case Fv:return{byteLength:1,components:1};case Oa:case kv:case Xa:return{byteLength:2,components:1};case Vf:case Gf:return{byteLength:2,components:4};case Fr:case Hf:case vi:return{byteLength:4,components:1};case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function dT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return p?new OffscreenCanvas(L,T):kl("canvas")}function S(L,T,V){let Z=1;const ne=be(L);if((ne.width>V||ne.height>V)&&(Z=V/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(Z*ne.width),Te=Math.floor(Z*ne.height);h===void 0&&(h=x($,Te));const de=T?x($,Te):h;return de.width=$,de.height=Te,de.getContext("2d").drawImage(L,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Te+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Rn&&L.minFilter!==Hn}function f(L){t.generateMipmap(L)}function _(L,T,V,Z,ne=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=T;if(T===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),T===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),T===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),T===t.RGBA){const Te=ne?Nl:it.getTransfer(Z);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=Te===lt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function m(L,T){let V;return L?T===null||T===Fr||T===zs?V=t.DEPTH24_STENCIL8:T===vi?V=t.DEPTH32F_STENCIL8:T===Oa&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fr||T===zs?V=t.DEPTH_COMPONENT24:T===vi?V=t.DEPTH_COMPONENT32F:T===Oa&&(V=t.DEPTH_COMPONENT16),V}function E(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Rn&&L.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function b(L){const T=L.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&u.delete(T)}function C(L){const T=L.target;T.removeEventListener("dispose",C),v(T)}function R(L){const T=i.get(L);if(T.__webglInit===void 0)return;const V=L.source,Z=d.get(V);if(Z){const ne=Z[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(L),Object.keys(Z).length===0&&d.delete(V)}i.remove(L)}function w(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const V=L.source,Z=d.get(V);delete Z[T.__cacheKey],a.memory.textures--}function v(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ne=0;ne<T.__webglFramebuffer[Z].length;ne++)t.deleteFramebuffer(T.__webglFramebuffer[Z][ne]);else t.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)t.deleteFramebuffer(T.__webglFramebuffer[Z]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=L.textures;for(let Z=0,ne=V.length;Z<ne;Z++){const $=i.get(V[Z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(V[Z])}i.remove(L)}let y=0;function P(){y=0}function U(){const L=y;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),y+=1,L}function I(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function W(L,T){const V=i.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const Z=L.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(V,L,T);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function H(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){we(V,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function O(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){we(V,L,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function z(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){Y(V,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}const N={[ud]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[dd]:t.MIRRORED_REPEAT},G={[Rn]:t.NEAREST,[Jy]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},K={[rS]:t.NEVER,[uS]:t.ALWAYS,[sS]:t.LESS,[Xv]:t.LEQUAL,[aS]:t.EQUAL,[cS]:t.GEQUAL,[oS]:t.GREATER,[lS]:t.NOTEQUAL};function ie(L,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===zc||T.magFilter===xo||T.magFilter===Tr||T.minFilter===Hn||T.minFilter===zc||T.minFilter===xo||T.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,N[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,G[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==xo&&T.minFilter!==Tr||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Q(L,T){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",b));const Z=T.source;let ne=d.get(Z);ne===void 0&&(ne={},d.set(Z,ne));const $=I(T);if($!==L.__cacheKey){ne[$]===void 0&&(ne[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[$].usedTimes++;const Te=ne[L.__cacheKey];Te!==void 0&&(ne[L.__cacheKey].usedTimes--,Te.usedTimes===0&&w(T)),L.__cacheKey=$,L.__webglTexture=ne[$].texture}return V}function we(L,T,V){let Z=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=t.TEXTURE_3D);const ne=Q(L,T),$=T.source;n.bindTexture(Z,L.__webglTexture,t.TEXTURE0+V);const Te=i.get($);if($.version!==Te.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const de=it.getPrimaries(it.workingColorSpace),ve=T.colorSpace===Vi?null:it.getPrimaries(T.colorSpace),Ie=T.colorSpace===Vi||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let re=S(T.image,!1,r.maxTextureSize);re=Ae(T,re);const ge=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Le=_(T.internalFormat,ge,Fe,T.colorSpace,T.isVideoTexture);ie(Z,T);let pe;const He=T.mipmaps,Ge=T.isVideoTexture!==!0,pt=Te.__version===void 0||ne===!0,F=$.dataReady,ce=E(T,re);if(T.isDepthTexture)Le=m(T.format===Bs,T.type),pt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Fe,null));else if(T.isDataTexture)if(He.length>0){Ge&&pt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,Le,pe.width,pe.height,0,ge,Fe,pe.data);T.generateMipmaps=!1}else Ge?(pt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,re.width,re.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Fe,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Fe,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,He[0].width,He[0].height,re.depth);for(let ee=0,te=He.length;ee<te;ee++)if(pe=He[ee],T.format!==Vn)if(ge!==null)if(Ge){if(F)if(T.layerUpdates.size>0){const he=hm(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const Ye=pe.data.subarray(ke*he/pe.data.BYTES_PER_ELEMENT,(ke+1)*he/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ke,pe.width,pe.height,1,ge,Ye,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Le,pe.width,pe.height,re.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,Fe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Le,pe.width,pe.height,re.depth,0,ge,Fe,pe.data)}else{Ge&&pt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],T.format!==Vn?ge!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,Le,pe.width,pe.height,0,ge,Fe,pe.data)}else if(T.isDataArrayTexture)if(Ge){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,re.width,re.height,re.depth),F)if(T.layerUpdates.size>0){const ee=hm(re.width,re.height,T.format,T.type);for(const te of T.layerUpdates){const he=re.data.subarray(te*ee/re.data.BYTES_PER_ELEMENT,(te+1)*ee/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ge,Fe,he)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isData3DTexture)Ge?(pt&&n.texStorage3D(t.TEXTURE_3D,ce,Le,re.width,re.height,re.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isFramebufferTexture){if(pt)if(Ge)n.texStorage2D(t.TEXTURE_2D,ce,Le,re.width,re.height);else{let ee=re.width,te=re.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Le,ee,te,0,ge,Fe,null),ee>>=1,te>>=1}}else if(He.length>0){if(Ge&&pt){const ee=be(He[0]);n.texStorage2D(t.TEXTURE_2D,ce,Le,ee.width,ee.height)}for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ge,Fe,pe):n.texImage2D(t.TEXTURE_2D,ee,Le,ge,Fe,pe);T.generateMipmaps=!1}else if(Ge){if(pt){const ee=be(re);n.texStorage2D(t.TEXTURE_2D,ce,Le,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Fe,re);g(T)&&f(Z),Te.__version=$.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Y(L,T,V){if(T.image.length!==6)return;const Z=Q(L,T),ne=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+V);const $=i.get(ne);if(ne.version!==$.__version||Z===!0){n.activeTexture(t.TEXTURE0+V);const Te=it.getPrimaries(it.workingColorSpace),de=T.colorSpace===Vi?null:it.getPrimaries(T.colorSpace),ve=T.colorSpace===Vi||Te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ie&&!re?ge[te]=S(T.image[te],!0,r.maxCubemapSize):ge[te]=re?T.image[te].image:T.image[te],ge[te]=Ae(T,ge[te]);const Fe=ge[0],Le=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),He=_(T.internalFormat,Le,pe,T.colorSpace),Ge=T.isVideoTexture!==!0,pt=$.__version===void 0||Z===!0,F=ne.dataReady;let ce=E(T,Fe);ie(t.TEXTURE_CUBE_MAP,T);let ee;if(Ie){Ge&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Fe.width,Fe.height);for(let te=0;te<6;te++){ee=ge[te].mipmaps;for(let he=0;he<ee.length;he++){const ke=ee[he];T.format!==Vn?Le!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,Le,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,Le,pe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,Le,pe,ke.data)}}}else{if(ee=T.mipmaps,Ge&&pt){ee.length>0&&ce++;const te=be(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Le,pe,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ge[te].width,ge[te].height,0,Le,pe,ge[te].data);for(let he=0;he<ee.length;he++){const Ye=ee[he].image[te].image;Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Ye.width,Ye.height,Le,pe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,Ye.width,Ye.height,0,Le,pe,Ye.data)}}else{Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,pe,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Le,pe,ge[te]);for(let he=0;he<ee.length;he++){const ke=ee[he];Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,Le,pe,ke.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,Le,pe,ke.image[te])}}}g(T)&&f(t.TEXTURE_CUBE_MAP),$.__version=ne.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function J(L,T,V,Z,ne,$){const Te=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ve=_(V.internalFormat,Te,de,V.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>$),ge=Math.max(1,T.height>>$);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,$,ve,re,ge,T.depth,0,Te,de,null):n.texImage2D(ne,$,ve,re,ge,0,Te,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ne,i.get(V).__webglTexture,0,Pe(T)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ne,i.get(V).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(L,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const Z=T.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,$=m(T.stencilBuffer,ne),Te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Pe(T);fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,$,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,L)}else{const Z=T.textures;for(let ne=0;ne<Z.length;ne++){const $=Z[ne],Te=s.convert($.format,$.colorSpace),de=s.convert($.type),ve=_($.internalFormat,Te,de,$.colorSpace),Ie=Pe(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ve,T.width,T.height):fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const Z=i.get(T.depthTexture).__webglTexture,ne=Pe(T);if(T.depthTexture.format===Rs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Bs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Me(L){const T=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,L)}else if(V){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]=t.createRenderbuffer(),le(T.__webglDepthbuffer[Z],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(L,T,V){const Z=i.get(L);T!==void 0&&J(Z.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Me(L)}function xe(L){const T=L.texture,V=i.get(L),Z=i.get(T);L.addEventListener("dispose",C);const ne=L.textures,$=L.isWebGLCubeRenderTarget===!0,Te=ne.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=T.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ve=0;ve<T.mipmaps.length;ve++)V.__webglFramebuffer[de][ve]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Te)for(let de=0,ve=ne.length;de<ve;de++){const Ie=i.get(ne[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&fe(L)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const ve=ne[de];V.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ie=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),ge=_(ve.internalFormat,Ie,re,ve.colorSpace,L.isXRRenderTarget===!0),Fe=Pe(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,V.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),le(V.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(t.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[de][ve],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else J(V.__webglFramebuffer[de],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let de=0,ve=ne.length;de<ve;de++){const Ie=ne[de],re=i.get(Ie);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Ie),J(V.__webglFramebuffer,L,Ie,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(Ie)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Z.__webglTexture),ie(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[ve],L,T,t.COLOR_ATTACHMENT0,de,ve);else J(V.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,de,0);g(T)&&f(de),n.unbindTexture()}L.depthBuffer&&Me(L)}function ze(L){const T=L.textures;for(let V=0,Z=T.length;V<Z;V++){const ne=T[V];if(g(ne)){const $=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ne).__webglTexture;n.bindTexture($,Te),f($),n.unbindTexture()}}}const D=[],Ue=[];function Be(L){if(L.samples>0){if(fe(L)===!1){const T=L.textures,V=L.width,Z=L.height;let ne=t.COLOR_BUFFER_BIT;const $=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(L),de=T.length>1;if(de)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,V,Z,0,0,V,Z,ne,t.NEAREST),l===!0&&(D.length=0,Ue.length=0,D.push(t.COLOR_ATTACHMENT0+ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push($),Ue.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Pe(L){return Math.min(r.maxSamples,L.samples)}function fe(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(L){const T=a.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ae(L,T){const V=L.colorSpace,Z=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==or&&V!==Vi&&(it.getTransfer(V)===lt?(Z!==Vn||ne!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function be(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=z,this.rebindTextures=ae,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=J,this.useMultisampledRTT=fe}function fT(t,e){function n(i,r=Vi){let s;const a=it.getTransfer(r);if(i===wi)return t.UNSIGNED_BYTE;if(i===Vf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Gf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ov)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fv)return t.BYTE;if(i===kv)return t.SHORT;if(i===Oa)return t.UNSIGNED_SHORT;if(i===Hf)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===Xa)return t.HALF_FLOAT;if(i===zv)return t.ALPHA;if(i===Bv)return t.RGB;if(i===Vn)return t.RGBA;if(i===Hv)return t.LUMINANCE;if(i===Vv)return t.LUMINANCE_ALPHA;if(i===Rs)return t.DEPTH_COMPONENT;if(i===Bs)return t.DEPTH_STENCIL;if(i===Gv)return t.RED;if(i===Wf)return t.RED_INTEGER;if(i===Wv)return t.RG;if(i===jf)return t.RG_INTEGER;if(i===Xf)return t.RGBA_INTEGER;if(i===tl||i===nl||i===il||i===rl)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===vd||i===_d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gd||i===vd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_d)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xd||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Md)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ed)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ad)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ld)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sl||i===Nd||i===Id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===sl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jv||i===Ud||i===Fd||i===kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ho extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends js{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,x=null;const S=new vT,g=n.getContextAttributes();let f=null,_=null;const m=[],E=[],b=new Ze;let C=null;const R=new zn;R.layers.enable(1),R.viewport=new Ft;const w=new zn;w.layers.enable(2),w.viewport=new Ft;const v=[R,w],y=new hT;y.layers.enable(1),y.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=m[Y];return J===void 0&&(J=new fu,m[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=m[Y];return J===void 0&&(J=new fu,m[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=m[Y];return J===void 0&&(J=new fu,m[Y]=J),J.getHandSpace()};function I(Y){const J=E.indexOf(Y.inputSource);if(J===-1)return;const le=m[J];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",H);for(let Y=0;Y<m.length;Y++){const J=E[Y];J!==null&&(E[Y]=null,m[Y].disconnect(J))}P=null,U=null,S.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,_=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",W),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new kr(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,le=null,oe=null;g.depth&&(oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=g.stencil?Bs:Rs,le=g.stencil?zs:Fr);const Me={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new kr(d.textureWidth,d.textureHeight,{format:Vn,type:wi,depthTexture:new l_(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(Y){for(let J=0;J<Y.removed.length;J++){const le=Y.removed[J],oe=E.indexOf(le);oe>=0&&(E[oe]=null,m[oe].disconnect(le))}for(let J=0;J<Y.added.length;J++){const le=Y.added[J];let oe=E.indexOf(le);if(oe===-1){for(let ae=0;ae<m.length;ae++)if(ae>=E.length){E.push(le),oe=ae;break}else if(E[ae]===null){E[ae]=le,oe=ae;break}if(oe===-1)break}const Me=m[oe];Me&&Me.connect(le)}}const O=new q,z=new q;function N(Y,J,le){O.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const oe=O.distanceTo(z),Me=J.projectionMatrix.elements,ae=le.projectionMatrix.elements,xe=Me[14]/(Me[10]-1),ze=Me[14]/(Me[10]+1),D=(Me[9]+1)/Me[5],Ue=(Me[9]-1)/Me[5],Be=(Me[8]-1)/Me[0],Pe=(ae[8]+1)/ae[0],fe=xe*Be,$e=xe*Pe,Ae=oe/(-Be+Pe),be=Ae*-Be;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(be),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const L=xe+Ae,T=ze+Ae,V=fe-be,Z=$e+(oe-be),ne=D*ze/T*L,$=Ue*ze/T*L;Y.projectionMatrix.makePerspective(V,Z,ne,$,L,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function G(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.texture!==null&&(Y.near=S.depthNear,Y.far=S.depthFar),y.near=w.near=R.near=Y.near,y.far=w.far=R.far=Y.far,(P!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,U=y.far,R.near=P,R.far=U,w.near=P,w.far=U,R.updateProjectionMatrix(),w.updateProjectionMatrix(),Y.updateProjectionMatrix());const J=Y.parent,le=y.cameras;G(y,J);for(let oe=0;oe<le.length;oe++)G(le[oe],J);le.length===2?N(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),K(Y,y,J)};function K(Y,J,le){le===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Od*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let ie=null;function Q(Y,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let oe=!1;le.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let ae=0;ae<le.length;ae++){const xe=le[ae];let ze=null;if(p!==null)ze=p.getViewport(xe);else{const Ue=h.getViewSubImage(d,xe);ze=Ue.viewport,ae===0&&(e.setRenderTargetTextures(_,Ue.colorTexture,d.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(_))}let D=v[ae];D===void 0&&(D=new zn,D.layers.enable(ae),D.viewport=new Ft,v[ae]=D),D.matrix.fromArray(xe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(xe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ze.x,ze.y,ze.width,ze.height),ae===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(D)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const ae=h.getDepthInformation(le[0]);ae&&ae.isValid&&ae.texture&&S.init(e,ae,r.renderState)}}for(let le=0;le<m.length;le++){const oe=E[le],Me=m[le];oe!==null&&Me!==void 0&&Me.update(oe,J,c||a)}ie&&ie(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const we=new a_;we.setAnimationLoop(Q),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const pr=new Ti,xT=new Lt;function yT(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,n_(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,_,m,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,E)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),S(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,_,m):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ln&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ln&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const _=e.get(f),m=_.envMap,E=_.envMapRotation;m&&(g.envMap.value=m,pr.copy(E),pr.x*=-1,pr.y*=-1,pr.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),g.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(pr)),g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,_,m){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*_,g.scale.value=m*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,_){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){const _=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,m){const E=m.program;i.uniformBlockBinding(_,E)}function c(_,m){let E=r[_.id];E===void 0&&(x(_),E=u(_),r[_.id]=E,_.addEventListener("dispose",g));const b=m.program;i.updateUBOMapping(_,b);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function u(_){const m=h();_.__bindingPointIndex=m;const E=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,E),E}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const m=r[_.id],E=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,R=E.length;C<R;C++){const w=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,y=w.length;v<y;v++){const P=w[v];if(p(P,C,v,b)===!0){const U=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<I.length;H++){const O=I[H],z=S(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,U+W,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,m,E,b){const C=_.value,R=m+"_"+E;if(b[R]===void 0)return typeof C=="number"||typeof C=="boolean"?b[R]=C:b[R]=C.clone(),!0;{const w=b[R];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return b[R]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function x(_){const m=_.uniforms;let E=0;const b=16;for(let R=0,w=m.length;R<w;R++){const v=Array.isArray(m[R])?m[R]:[m[R]];for(let y=0,P=v.length;y<P;y++){const U=v[y],I=Array.isArray(U.value)?U.value:[U.value];for(let W=0,H=I.length;W<H;W++){const O=I[W],z=S(O),N=E%b;N!==0&&b-N<z.boundary&&(E+=b-N),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=z.storage}}}const C=E%b;return C>0&&(E+=b-C),_.__size=E,_.__cache={},this}function S(_){const m={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function g(_){const m=_.target;m.removeEventListener("dispose",g);const E=a.indexOf(m.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class MT{constructor(e={}){const{canvas:n=fS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),x=new Int32Array(4);let S=null,g=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=er,this.toneMappingExposure=1;const m=this;let E=!1,b=0,C=0,R=null,w=-1,v=null;const y=new Ft,P=new Ft;let U=null;const I=new st(0);let W=0,H=n.width,O=n.height,z=1,N=null,G=null;const K=new Ft(0,0,H,O),ie=new Ft(0,0,H,O);let Q=!1;const we=new s_;let Y=!1,J=!1;const le=new Lt,oe=new q,Me=new Ft,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function ze(){return R===null?z:1}let D=i;function Ue(A,k){return n.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",he,!1),D===null){const k="webgl2";if(D=Ue(k,A),D===null)throw Ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Be,Pe,fe,$e,Ae,be,L,T,V,Z,ne,$,Te,de,ve,Ie,re,ge,Fe,Le,pe,He,Ge,pt;function F(){Be=new bw(D),Be.init(),He=new fT(D,Be),Pe=new Ew(D,Be,e,He),fe=new cT(D),$e=new Dw(D),Ae=new $1,be=new dT(D,Be,fe,Ae,Pe,He,$e),L=new Tw(m),T=new Cw(m),V=new zS(D),Ge=new Sw(D,V),Z=new Pw(D,V,$e,Ge),ne=new Iw(D,Z,V,$e),Fe=new Nw(D,Pe,be),Ie=new ww(Ae),$=new q1(m,L,T,Be,Pe,Ge,Ie),Te=new yT(m,Ae),de=new Z1,ve=new iT(Be),ge=new yw(m,L,T,fe,ne,d,l),re=new lT(m,ne,Pe),pt=new ST(D,$e,Pe,fe),Le=new Mw(D,Be,$e),pe=new Lw(D,Be,$e),$e.programs=$.programs,m.capabilities=Pe,m.extensions=Be,m.properties=Ae,m.renderLists=de,m.shadowMap=re,m.state=fe,m.info=$e}F();const ce=new _T(m,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(H,O,!1))},this.getSize=function(A){return A.set(H,O)},this.setSize=function(A,k,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,O=k,n.width=Math.floor(A*z),n.height=Math.floor(k*z),j===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(H*z,O*z).floor()},this.setDrawingBufferSize=function(A,k,j){H=A,O=k,z=j,n.width=Math.floor(A*j),n.height=Math.floor(k*j),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,k,j,X){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,k,j,X),fe.viewport(y.copy(K).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,k,j,X){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,k,j,X),fe.scissor(P.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){fe.setScissorTest(Q=A)},this.setOpaqueSort=function(A){N=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(A=!0,k=!0,j=!0){let X=0;if(A){let B=!1;if(R!==null){const ue=R.texture.format;B=ue===Xf||ue===jf||ue===Wf}if(B){const ue=R.texture.type,_e=ue===wi||ue===Fr||ue===Oa||ue===zs||ue===Vf||ue===Gf,Se=ge.getClearColor(),Ee=ge.getClearAlpha(),Oe=Se.r,Ve=Se.g,De=Se.b;_e?(p[0]=Oe,p[1]=Ve,p[2]=De,p[3]=Ee,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Oe,x[1]=Ve,x[2]=De,x[3]=Ee,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),j&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",he,!1),de.dispose(),ve.dispose(),Ae.dispose(),L.dispose(),T.dispose(),ne.dispose(),Ge.dispose(),pt.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Xn),ce.removeEventListener("sessionend",Kf),lr.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=$e.autoReset,k=re.enabled,j=re.autoUpdate,X=re.needsUpdate,B=re.type;F(),$e.autoReset=A,re.enabled=k,re.autoUpdate=j,re.needsUpdate=X,re.type=B}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const k=A.target;k.removeEventListener("dispose",ke),Ye(k)}function Ye(A){Tt(A),Ae.remove(A)}function Tt(A){const k=Ae.get(A).programs;k!==void 0&&(k.forEach(function(j){$.releaseProgram(j)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,j,X,B,ue){k===null&&(k=ae);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Se=h_(A,k,j,X,B);fe.setMaterial(X,_e);let Ee=j.index,Oe=1;if(X.wireframe===!0){if(Ee=Z.getWireframeAttribute(j),Ee===void 0)return;Oe=2}const Ve=j.drawRange,De=j.attributes.position;let Je=Ve.start*Oe,_t=(Ve.start+Ve.count)*Oe;ue!==null&&(Je=Math.max(Je,ue.start*Oe),_t=Math.min(_t,(ue.start+ue.count)*Oe)),Ee!==null?(Je=Math.max(Je,0),_t=Math.min(_t,Ee.count)):De!=null&&(Je=Math.max(Je,0),_t=Math.min(_t,De.count));const xt=_t-Je;if(xt<0||xt===1/0)return;Ge.setup(B,X,Se,j,Ee);let un,et=Le;if(Ee!==null&&(un=V.get(Ee),et=pe,et.setIndex(un)),B.isMesh)X.wireframe===!0?(fe.setLineWidth(X.wireframeLinewidth*ze()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(B.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),fe.setLineWidth(Re*ze()),B.isLineSegments?et.setMode(D.LINES):B.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else B.isPoints?et.setMode(D.POINTS):B.isSprite&&et.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,zt=B._multiDrawCounts,tt=B._multiDrawCount,Ln=Ee?V.get(Ee).bytesPerElement:1,Hr=Ae.get(X).currentProgram.getUniforms();for(let dn=0;dn<tt;dn++)Hr.setValue(D,"_gl_DrawID",dn),et.render(Re[dn]/Ln,zt[dn])}else if(B.isInstancedMesh)et.renderInstances(Je,xt,B.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zt=Math.min(j.instanceCount,Re);et.renderInstances(Je,xt,zt)}else et.render(Je,xt)};function Ot(A,k,j){A.transparent===!0&&A.side===pi&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,Ja(A,k,j),A.side=ir,A.needsUpdate=!0,Ja(A,k,j),A.side=pi):Ja(A,k,j)}this.compile=function(A,k,j=null){j===null&&(j=A),g=ve.get(j),g.init(k),_.push(g),j.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),A!==j&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const X=new Set;return A.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Se=ue[_e];Ot(Se,j,B),X.add(Se)}else Ot(ue,j,B),X.add(ue)}),_.pop(),g=null,X},this.compileAsync=function(A,k,j=null){const X=this.compile(A,k,j);return new Promise(B=>{function ue(){if(X.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){B(A);return}setTimeout(ue,10)}Be.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Qe=null;function ri(A){Qe&&Qe(A)}function Xn(){lr.stop()}function Kf(){lr.start()}const lr=new a_;lr.setAnimationLoop(ri),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(A){Qe=A,ce.setAnimationLoop(A),A===null?lr.stop():lr.start()},ce.addEventListener("sessionstart",Xn),ce.addEventListener("sessionend",Kf),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,k,R),g=ve.get(A,_.length),g.init(k),_.push(g),le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),we.setFromProjectionMatrix(le),J=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,J),S=de.get(A,f.length),S.init(),f.push(S),ce.enabled===!0&&ce.isPresenting===!0){const ue=m.xr.getDepthSensingMesh();ue!==null&&rc(ue,k,-1/0,m.sortObjects)}rc(A,k,0,m.sortObjects),S.finish(),m.sortObjects===!0&&S.sort(N,G),xe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,xe&&ge.addToRenderList(S,A),this.info.render.frame++,Y===!0&&Ie.beginShadows();const j=g.state.shadowsArray;re.render(j,A,k),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=S.opaque,B=S.transmissive;if(g.setupLights(),k.isArrayCamera){const ue=k.cameras;if(B.length>0)for(let _e=0,Se=ue.length;_e<Se;_e++){const Ee=ue[_e];Qf(X,B,A,Ee)}xe&&ge.render(A);for(let _e=0,Se=ue.length;_e<Se;_e++){const Ee=ue[_e];Zf(S,A,Ee,Ee.viewport)}}else B.length>0&&Qf(X,B,A,k),xe&&ge.render(A),Zf(S,A,k);R!==null&&(be.updateMultisampleRenderTarget(R),be.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(m,A,k),Ge.resetDefaultState(),w=-1,v=null,_.pop(),_.length>0?(g=_[_.length-1],Y===!0&&Ie.setGlobalState(m.clippingPlanes,g.state.camera)):g=null,f.pop(),f.length>0?S=f[f.length-1]:S=null};function rc(A,k,j,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){X&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const _e=ne.update(A),Se=A.material;Se.visible&&S.push(A,_e,Se,j,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){const _e=ne.update(A),Se=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Me.copy(_e.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Se)){const Ee=_e.groups;for(let Oe=0,Ve=Ee.length;Oe<Ve;Oe++){const De=Ee[Oe],Je=Se[De.materialIndex];Je&&Je.visible&&S.push(A,_e,Je,j,Me.z,De)}}else Se.visible&&S.push(A,_e,Se,j,Me.z,null)}}const ue=A.children;for(let _e=0,Se=ue.length;_e<Se;_e++)rc(ue[_e],k,j,X)}function Zf(A,k,j,X){const B=A.opaque,ue=A.transmissive,_e=A.transparent;g.setupLightsView(j),Y===!0&&Ie.setGlobalState(m.clippingPlanes,j),X&&fe.viewport(y.copy(X)),B.length>0&&Qa(B,k,j),ue.length>0&&Qa(ue,k,j),_e.length>0&&Qa(_e,k,j),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Qf(A,k,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new kr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Xa:wi,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ue=g.state.transmissionRenderTarget[X.id],_e=X.viewport||y;ue.setSize(_e.z,_e.w);const Se=m.getRenderTarget();m.setRenderTarget(ue),m.getClearColor(I),W=m.getClearAlpha(),W<1&&m.setClearColor(16777215,.5),xe?ge.render(j):m.clear();const Ee=m.toneMapping;m.toneMapping=er;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Y===!0&&Ie.setGlobalState(m.clippingPlanes,X),Qa(A,j,X),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let De=0,Je=k.length;De<Je;De++){const _t=k[De],xt=_t.object,un=_t.geometry,et=_t.material,Re=_t.group;if(et.side===pi&&xt.layers.test(X.layers)){const zt=et.side;et.side=ln,et.needsUpdate=!0,Jf(xt,j,X,un,et,Re),et.side=zt,et.needsUpdate=!0,Ve=!0}}Ve===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue))}m.setRenderTarget(Se),m.setClearColor(I,W),Oe!==void 0&&(X.viewport=Oe),m.toneMapping=Ee}function Qa(A,k,j){const X=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ue=A.length;B<ue;B++){const _e=A[B],Se=_e.object,Ee=_e.geometry,Oe=X===null?_e.material:X,Ve=_e.group;Se.layers.test(j.layers)&&Jf(Se,k,j,Ee,Oe,Ve)}}function Jf(A,k,j,X,B,ue){A.onBeforeRender(m,k,j,X,B,ue),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.transparent===!0&&B.side===pi&&B.forceSinglePass===!1?(B.side=ln,B.needsUpdate=!0,m.renderBufferDirect(j,k,X,B,A,ue),B.side=ir,B.needsUpdate=!0,m.renderBufferDirect(j,k,X,B,A,ue),B.side=pi):m.renderBufferDirect(j,k,X,B,A,ue),A.onAfterRender(m,k,j,X,B,ue)}function Ja(A,k,j){k.isScene!==!0&&(k=ae);const X=Ae.get(A),B=g.state.lights,ue=g.state.shadowsArray,_e=B.state.version,Se=$.getParameters(A,B.state,ue,k,j),Ee=$.getProgramCacheKey(Se);let Oe=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?T:L).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",ke),Oe=new Map,X.programs=Oe);let Ve=Oe.get(Ee);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===_e)return th(A,Se),Ve}else Se.uniforms=$.getUniforms(A),A.onBeforeCompile(Se,m),Ve=$.acquireProgram(Se,Ee),Oe.set(Ee,Ve),X.uniforms=Se.uniforms;const De=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Ie.uniform),th(A,Se),X.needsLights=m_(A),X.lightsStateVersion=_e,X.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function eh(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=al.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function th(A,k){const j=Ae.get(A);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function h_(A,k,j,X,B){k.isScene!==!0&&(k=ae),be.resetTextureUnits();const ue=k.fog,_e=X.isMeshStandardMaterial?k.environment:null,Se=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:or,Ee=(X.isMeshStandardMaterial?T:L).get(X.envMap||_e),Oe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!j.morphAttributes.position,Je=!!j.morphAttributes.normal,_t=!!j.morphAttributes.color;let xt=er;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xt=m.toneMapping);const un=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=un!==void 0?un.length:0,Re=Ae.get(X),zt=g.state.lights;if(Y===!0&&(J===!0||A!==v)){const Sn=A===v&&X.id===w;Ie.setState(X,A,Sn)}let tt=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==zt.state.version||Re.outputColorSpace!==Se||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==Ee||X.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ie.numPlanes||Re.numIntersection!==Ie.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Ve||Re.morphTargets!==De||Re.morphNormals!==Je||Re.morphColors!==_t||Re.toneMapping!==xt||Re.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Re.__version=X.version);let Ln=Re.currentProgram;tt===!0&&(Ln=Ja(X,k,B));let Hr=!1,dn=!1,sc=!1;const At=Ln.getUniforms(),Ci=Re.uniforms;if(fe.useProgram(Ln.program)&&(Hr=!0,dn=!0,sc=!0),X.id!==w&&(w=X.id,dn=!0),Hr||v!==A){At.setValue(D,"projectionMatrix",A.projectionMatrix),At.setValue(D,"viewMatrix",A.matrixWorldInverse);const Sn=At.map.cameraPosition;Sn!==void 0&&Sn.setValue(D,oe.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,dn=!0,sc=!0)}if(B.isSkinnedMesh){At.setOptional(D,B,"bindMatrix"),At.setOptional(D,B,"bindMatrixInverse");const Sn=B.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),At.setValue(D,"boneTexture",Sn.boneTexture,be))}B.isBatchedMesh&&(At.setOptional(D,B,"batchingTexture"),At.setValue(D,"batchingTexture",B._matricesTexture,be),At.setOptional(D,B,"batchingIdTexture"),At.setValue(D,"batchingIdTexture",B._indirectTexture,be),At.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",B._colorsTexture,be));const ac=j.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&Fe.update(B,j,Ln),(dn||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,At.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ci.envMap.value=Ee,Ci.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Ci.envMapIntensity.value=k.environmentIntensity),dn&&(At.setValue(D,"toneMappingExposure",m.toneMappingExposure),Re.needsLights&&p_(Ci,sc),ue&&X.fog===!0&&Te.refreshFogUniforms(Ci,ue),Te.refreshMaterialUniforms(Ci,X,z,O,g.state.transmissionRenderTarget[A.id]),al.upload(D,eh(Re),Ci,be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(al.upload(D,eh(Re),Ci,be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(D,"center",B.center),At.setValue(D,"modelViewMatrix",B.modelViewMatrix),At.setValue(D,"normalMatrix",B.normalMatrix),At.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Sn=X.uniformsGroups;for(let oc=0,g_=Sn.length;oc<g_;oc++){const nh=Sn[oc];pt.update(nh,Ln),pt.bind(nh,Ln)}}return Ln}function p_(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function m_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,k,j){Ae.get(A.texture).__webglTexture=k,Ae.get(A.depthTexture).__webglTexture=j;const X=Ae.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const j=Ae.get(A);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,j=0){R=A,b=k,C=j;let X=!0,B=null,ue=!1,_e=!1;if(A){const Ee=Ae.get(A);Ee.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):Ee.__webglFramebuffer===void 0?be.setupRenderTarget(A):Ee.__hasExternalTextures&&be.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Ve=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?B=Ve[k][j]:B=Ve[k],ue=!0):A.samples>0&&be.useMultisampledRTT(A)===!1?B=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[j]:B=Ve,y.copy(A.viewport),P.copy(A.scissor),U=A.scissorTest}else y.copy(K).multiplyScalar(z).floor(),P.copy(ie).multiplyScalar(z).floor(),U=Q;if(fe.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&fe.drawBuffers(A,B),fe.viewport(y),fe.scissor(P),fe.setScissorTest(U),ue){const Ee=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,j)}else if(_e){const Ee=Ae.get(A.texture),Oe=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,j||0,Oe)}w=-1},this.readRenderTargetPixels=function(A,k,j,X,B,ue,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){fe.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=A.texture,Oe=Ee.format,Ve=Ee.type;if(!Pe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&j>=0&&j<=A.height-B&&D.readPixels(k,j,X,B,He.convert(Oe),He.convert(Ve),ue)}finally{const Ee=R!==null?Ae.get(R).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,k,j,X,B,ue,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){fe.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Ee=A.texture,Oe=Ee.format,Ve=Ee.type;if(!Pe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-X&&j>=0&&j<=A.height-B){const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(k,j,X,B,He.convert(Oe),He.convert(Ve),0),D.flush();const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await hS(D,Je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(De),D.deleteSync(Je)}return ue}}finally{const Ee=R!==null?Ae.get(R).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(A,k=null,j=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-j),B=Math.floor(A.image.width*X),ue=Math.floor(A.image.height*X),_e=k!==null?k.x:0,Se=k!==null?k.y:0;be.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,_e,Se,B,ue),fe.unbindTexture()},this.copyTextureToTexture=function(A,k,j=null,X=null,B=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,j=null);let ue,_e,Se,Ee,Oe,Ve;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Se=j.min.x,Ee=j.min.y):(ue=A.image.width,_e=A.image.height,Se=0,Ee=0),X!==null?(Oe=X.x,Ve=X.y):(Oe=0,Ve=0);const De=He.convert(k.format),Je=He.convert(k.type);be.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),un=D.getParameter(D.UNPACK_SKIP_PIXELS),et=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),zt=A.isCompressedTexture?A.mipmaps[B]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,Oe,Ve,ue,_e,De,Je,zt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,Oe,Ve,zt.width,zt.height,De,zt.data):D.texSubImage2D(D.TEXTURE_2D,B,Oe,Ve,ue,_e,De,Je,zt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,un),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),B===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,k,j=null,X=null,B=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0);let ue,_e,Se,Ee,Oe,Ve,De,Je,_t;const xt=A.isCompressedTexture?A.mipmaps[B]:A.image;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Se=j.max.z-j.min.z,Ee=j.min.x,Oe=j.min.y,Ve=j.min.z):(ue=xt.width,_e=xt.height,Se=xt.depth,Ee=0,Oe=0,Ve=0),X!==null?(De=X.x,Je=X.y,_t=X.z):(De=0,Je=0,_t=0);const un=He.convert(k.format),et=He.convert(k.type);let Re;if(k.isData3DTexture)be.setTexture3D(k,0),Re=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)be.setTexture2DArray(k,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const zt=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Hr=D.getParameter(D.UNPACK_SKIP_ROWS),dn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Re,B,De,Je,_t,ue,_e,Se,un,et,xt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,B,De,Je,_t,ue,_e,Se,un,xt.data):D.texSubImage3D(Re,B,De,Je,_t,ue,_e,Se,un,et,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,zt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Hr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dn),B===0&&k.generateMipmaps&&D.generateMipmap(Re),fe.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&be.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?be.setTextureCube(A,0):A.isData3DTexture?be.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?be.setTexture2DArray(A,0):be.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Yf?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===tc?"display-p3":"srgb"}}class ET extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bf);const wT=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,TT=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uAgitation;
uniform vec2 uTilt;

// hash + 3D value noise + fbm
float hash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = p * 2.03 + vec3(1.7);
    a *= 0.5;
  }
  return v;
}

void main() {
  // screen-space ray toward a unit sphere at origin
  vec2 p = vUv * 2.0 - 1.0;
  float storm = 1.0 + uAgitation * 1.8;
  float t = uTime * 0.14 * storm;

  float r2 = dot(p, p);
  vec3 col = vec3(0.0);
  float alpha = 0.0;

  // seat glow + aura outside the sphere
  float d = sqrt(r2);
  if (d > 0.86) {
    float aura = smoothstep(1.34, 0.86, d) * (0.05 + uAgitation * 0.05);
    float seat = smoothstep(1.5, 0.9, length(vec2(p.x, (p.y + 1.06) * 2.6))) * 0.24;
    col += vec3(0.88, 0.08, 0.08) * (aura + seat);
    alpha = max(aura + seat, 0.0) * 2.2;
  }

  if (r2 < 0.86 * 0.86) {
    float R = 0.86;
    float z = sqrt(R * R - r2);
    vec3 N = normalize(vec3(p, z));
    vec3 V = vec3(0.0, 0.0, 1.0);

    // slight parallax from the pointer
    vec3 off = vec3(uTilt * 0.3, 0.0);

    // march the fire through the glass interior
    vec3 ro = vec3(p, z);
    vec3 rd = vec3(0.0, 0.0, -1.0);
    float fire = 0.0;
    float hot = 0.0;
    for (int i = 0; i < 14; i++) {
      float fi = float(i) / 14.0;
      vec3 sp = ro + rd * (z * 2.0 * fi);
      // swirl: rotate sample space around y over depth and time
      float an = t * 0.7 + sp.y * 1.2;
      float cs = cos(an), sn = sin(an);
      vec3 q = vec3(cs * sp.x - sn * sp.z, sp.y + t * 0.12, sn * sp.x + cs * sp.z);
      float n = fbm(q * 2.6 + off + vec3(0.0, -t * 0.5, 0.0));
      // density concentrates toward the core
      float core = 1.0 - length(sp) / R;
      float dens = smoothstep(0.42, 0.95, n) * core * core;
      fire += dens * 0.16;
      hot += smoothstep(0.62, 0.98, n) * core * core * core * 0.22;
    }
    fire *= 0.75 + uAgitation * 0.7;
    hot *= 0.75 + uAgitation * 0.9;
    // flicker under high agitation
    if (uAgitation > 0.7) {
      float fl = 0.9 + 0.1 * sin(uTime * 21.0) * sin(uTime * 13.7);
      fire *= fl; hot *= fl;
    }

    // fire palette: deep red > signal red > ember > near white
    vec3 fireCol = vec3(0.45, 0.02, 0.02) * fire
      + vec3(0.88, 0.08, 0.08) * fire * fire * 1.6
      + vec3(1.0, 0.42, 0.25) * hot
      + vec3(1.0, 0.9, 0.82) * hot * hot * 0.9;

    // glass body: near-black base
    vec3 body = vec3(0.012, 0.008, 0.009);

    // limb darkening: interior fades toward the silhouette edge
    float limb = smoothstep(0.30, 0.98, d / R);
    fireCol *= 1.0 - limb * 0.9;

    // fresnel rim
    float fres = pow(1.0 - max(dot(N, V), 0.0), 3.0);
    vec3 rim = vec3(0.9, 0.12, 0.08) * fres * (0.35 + uAgitation * 0.25);
    // cold rim on the upper left
    float cold = fres * max(dot(normalize(N.xy), normalize(vec2(-0.7, 0.75))), 0.0);
    rim += vec3(0.9, 0.88, 0.85) * cold * 0.18;

    // specular window, upper left
    vec3 L = normalize(vec3(-0.55, 0.62, 0.62));
    float spec = pow(max(dot(reflect(-L, N), V), 0.0), 60.0);
    float glaze = pow(max(dot(reflect(-L, N), V), 0.0), 8.0);
    vec3 specCol = vec3(1.0, 0.98, 0.95) * spec * 0.9 + vec3(1.0, 0.97, 0.93) * glaze * 0.08;

    col = body + fireCol + rim + specCol;
    alpha = 1.0;
  }

  // soft edge antialias on the silhouette
  float edge = smoothstep(0.875, 0.855, d);
  if (d <= 0.9 && d > 0.855) {
    alpha = max(alpha * edge, alpha * 0.0);
  }

  gl_FragColor = vec4(col, alpha);
}
`;function AT({agitation:t=.3}){const e=Ne.useRef(null),n=Ne.useRef(null);return Ne.useEffect(()=>{const i=e.current;if(!i)return;let r;try{r=new MT({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return}const s=()=>Math.min(i.clientWidth||340,480);r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(s(),s()),i.appendChild(r.domElement);const a=new ET,o=new o_(-1,1,1,-1,0,1),l={uTime:{value:Math.random()*40},uAgitation:{value:t},uTilt:{value:new Ze(0,0)}};n.current=l;const c=new Ai({vertexShader:wT,fragmentShader:TT,uniforms:l,transparent:!0}),u=new Jn(new Za(2,2),c);a.add(u);const h=new Ze(0,0),d=_=>{const m=i.getBoundingClientRect();h.set(((_.clientX-m.left)/m.width-.5)*2,((_.clientY-m.top)/m.height-.5)*-2)},p=()=>h.set(0,0);window.addEventListener("pointermove",d,{passive:!0}),i.addEventListener("pointerleave",p);let x=null,S=performance.now();const g=_=>{const m=Math.min((_-S)/1e3,.05);S=_,l.uTime.value+=m,l.uTilt.value.lerp(h,.04),r.render(a,o)};if(ni)g(performance.now());else{const _=m=>{g(m),x=requestAnimationFrame(_)};x=requestAnimationFrame(_)}const f=()=>{r.setSize(s(),s())};return window.addEventListener("resize",f),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("pointermove",d),window.removeEventListener("resize",f),i.removeEventListener("pointerleave",p),i.removeChild(r.domElement),u.geometry.dispose(),c.dispose(),r.dispose()}},[]),Ne.useEffect(()=>{n.current&&(n.current.uAgitation.value=t)},[t]),M.jsx("div",{ref:e,className:"orb-gl",style:{position:"absolute",inset:0},"aria-hidden":"true"})}function RT({daily:t,replies:e,m:n,calc:i}){const r=Ff(t,e,n,i),s=Ne.useMemo(()=>Pv(t,e,n,i),[t,e,n,i]),a=Math.min(nt(r.cashMTD,i.goal),1),o=new Date,l=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),c=o.getDate()/l,u=n.replyRate>0?n.replyRate:Wa,h=n.bookingRate>0?n.bookingRate:ja,d=nt(nt(nt(nt(nt(i.goal,i.aov),i.closeRate),i.showRate),h),u),p=nt(nt(d,i.capacity),i.sendDays/4.345),x=i.capacity>0?p<1?En(p*7,0)+" days":p<9?En(p,1)+" wks":En(p/4.345,1)+" mo":"set capacity";return M.jsxs("div",{className:"hero",children:[M.jsxs(Mt,{className:"card",children:[M.jsx("div",{className:"label",children:"Cash collected, this month"}),M.jsx("div",{className:"display hnum red",children:M.jsx(br,{value:r.cashMTD,format:Et})}),M.jsxs("div",{className:"goalbar",children:[M.jsx("span",{className:"fill",style:{width:a*100+"%"}}),M.jsx("span",{className:"pacer",style:{left:c*100+"%"},title:"where the month is"})]}),M.jsxs("div",{className:"hsub",children:[Ke(a,0)," of the ",Et(i.goal)," goal · white tick = month pace"]})]}),M.jsxs(Mt,{className:"card",delay:60,children:[M.jsx("div",{className:"label",children:"Projected month end"}),M.jsx("div",{className:"display hnum",children:M.jsx(br,{value:s.p50,format:Et})}),M.jsxs("div",{className:"band hsub",children:[M.jsxs("span",{className:"lo",children:["P10 ",Cr(s.p10)]}),M.jsx("span",{children:"·"}),M.jsxs("span",{className:"hi",children:["P90 ",Cr(s.p90)]})]}),M.jsx("div",{className:"hsub",children:"500-run band: pipeline by stage odds, new sends damped for close lag"})]}),M.jsxs(Mt,{className:"card",delay:120,children:[M.jsx("div",{className:"label",children:"Cash collected, all time"}),M.jsx("div",{className:"display hnum",children:M.jsx(br,{value:n.cash,format:Et})}),M.jsxs("div",{className:"hsub",children:[Et(n.dealValue)," signed · ",Et(n.outstanding)," outstanding"]})]}),M.jsxs(Mt,{className:"card",delay:180,children:[M.jsxs("div",{className:"label",children:["Time to goal, ",Ce(i.capacity)," a day"]}),M.jsx("div",{className:"display hnum",children:x}),M.jsxs("div",{className:"hsub",children:["at live rates and ",Ce(i.sendDays)," send days a month"]})]})]})}function CT({daily:t,replies:e,m:n}){const i=ny(t,e),r=bv(t,e),s=Ne.useMemo(()=>{const o=new Date,l=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Map(t.map(d=>[ht(d.date),d])),u=new Map;e.forEach(d=>{const p=ht(d.date);u.set(p,u.get(p)||{n:0,booked:0,cash:0});const x=u.get(p);x.n++,d.booked&&x.booked++,x.cash+=d.cash});const h={initials:[],followUps:[],comments:[],replies:[],booked:[],cash:[]};for(let d=13;d>=0;d--){const p=ht(new Date(l.getTime()-d*ft)),x=c.get(p),S=u.get(p);h.initials.push(x?x.initials:0),h.followUps.push(x?x.followUps:0),h.comments.push(x?x.comments:0),h.replies.push(S?S.n:0),h.booked.push(S?S.booked:0),h.cash.push(S?S.cash:0)}return h},[t,e]),a=o=>[["this wk",Ce(o.cur)],["last wk",Ce(o.prev)]];return M.jsxs("div",{className:"tiles",children:[M.jsx(Pi,{label:"Initials",num:n.initials,format:Ce,sub:Ke(n.replyRate)+" reply rate",delta:i.initials,spark:s.initials,tip:a(r.initials)}),M.jsx(Pi,{label:"Follow ups",num:n.followUps,format:Ce,sub:En(nt(n.followUps,n.initials))+" per initial",delta:i.followUps,spark:s.followUps,tip:a(r.followUps)}),M.jsx(Pi,{label:"Comments",num:n.comments,format:Ce,sub:Ke(n.commentCoverage,0)+" of initials",delta:i.comments,spark:s.comments,tip:a(r.comments)}),M.jsx(Pi,{label:"Replies",num:n.replies,format:Ce,sub:Ke(n.bookingRate)+" to booked",delta:i.replies,spark:s.replies,tip:a(r.replies)}),M.jsx(Pi,{label:"Booked",num:n.booked,format:Ce,sub:Ke(n.showRate)+" show rate",delta:i.booked,spark:s.booked,tip:a(r.booked)}),M.jsx(Pi,{label:"Shown",num:n.shown,format:Ce,sub:Ke(n.closeRate)+" close rate"}),M.jsx(Pi,{label:"Closed",num:n.closed,format:Ce,red:!0,sub:n.avgDeal>0?Et(n.avgDeal)+" avg deal":""}),M.jsx(Pi,{label:"Cash",num:n.cash,format:Et,red:!0,sub:Et(n.outstanding)+" outstanding",delta:i.cash,spark:s.cash,tip:a(r.cash)})]})}function bT({daily:t,replies:e,leads:n,m:i,calc:r}){const s=Jx(t,e,r.capacity),a=ey(t,e,r.capacity,i),o=ty(t,e,n,i,r),[l,c]=Ne.useState("alerts"),[u,h]=Ne.useState(null),[d,p]=Ne.useState(0),[x,S]=Ne.useState(null),[g,f]=Ne.useState(null),[_,m]=Ne.useState(null),E=Oc("overseer"),b=Oc("memo"),C=Oc("brief"),R=a.findings.filter(H=>H.sev==="r").length+s.filter(H=>H.zone==="r").length,w=a.findings.filter(H=>H.sev==="a").length+s.filter(H=>H.zone==="a").length,v=R>0?1:w>0?.55:.15,y={g:"OK",a:"WARN",r:"FAIL",n:"NULL"},P=o.length?o[0].value:1,U=o[0],I=(H,O)=>M.jsx("button",{className:"btn"+(l===H?" active":""),onClick:()=>c(H),children:O},H),W=(H,O,z,N)=>(H||[]).map((G,K)=>M.jsxs("div",{className:"dir",onClick:()=>z(O===K?null:K),children:[M.jsxs("div",{className:"dir-title",children:[M.jsxs("span",{className:"dnum",children:[N," ",String(K+1).padStart(2,"0")]})," // ",G.title.toUpperCase()]}),O===K&&M.jsx("div",{className:"dir-body",children:G.text})]},K));return M.jsxs(Mt,{className:"pal",children:[M.jsxs("div",{className:"pal-head",children:[M.jsx("h2",{className:"sec",style:{margin:0},children:"Palantir"}),M.jsxs("span",{className:"sysdots",children:[M.jsx("span",{className:"label",children:"sys"}),s.map((H,O)=>M.jsx("button",{className:"sysdot "+H.zone,title:H.name,onClick:()=>h(u===O?null:O),"aria-label":H.name},O))]}),M.jsx("span",{className:"label",children:"cash collected basis"})]}),u!==null&&M.jsxs("div",{className:"dot-detail",children:[s[u].name.toUpperCase()," [",y[s[u].zone],"] · ",s[u].detail]}),M.jsxs("div",{className:"pal-grid",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"orb-stage",children:[M.jsx(AT,{agitation:v}),U&&M.jsxs("div",{className:"orb-text",children:[M.jsx("div",{className:"display ov",children:Cr(U.value)}),M.jsx("div",{className:"ol",children:U.per==="mo"?"per month · top lever":"one time · top lever"}),M.jsx("div",{className:"on",children:U.name})]})]}),M.jsx("div",{className:"lbars",children:o.map((H,O)=>M.jsxs("div",{className:"lbar",onClick:()=>m(_===O?null:O),children:[M.jsxs("div",{className:"lbar-top",children:[M.jsx("span",{className:"lever-rank",children:String(O+1).padStart(2,"0")}),M.jsx("span",{className:"lbar-name",children:H.name}),M.jsxs("span",{className:"lbar-val display",children:[Cr(H.value),M.jsxs("span",{className:"lever-per",children:[" ",H.per==="mo"?"/mo":"1x"]})]})]}),M.jsx("div",{className:"lbar-track",children:M.jsx("span",{className:"lbar-fill",style:{width:Math.max(H.value/P*100,4)+"%",boxShadow:O===0?"0 0 10px rgba(225,20,20,0.55)":"none"}})}),_===O&&M.jsxs("div",{className:"lbar-detail",children:[H.detail," · basis: ",H.basis]})]},O))}),M.jsx("div",{className:"note",children:"Levers priced independently; they overlap and never sum. Baselines assumed until measured. Tap a lever for detail."})]}),M.jsxs("div",{className:"console",children:[M.jsxs("div",{className:"ptabs",children:[I("alerts","Alerts"+(a.findings.length?" · "+a.findings.length:"")),I("daily","Daily"),I("brief","Brief"),I("log","Log")]}),l==="alerts"&&M.jsxs("div",{children:[a.findings.length===0&&M.jsx("div",{className:"brief-head",children:"No active alerts. Push volume, keep the ladder full."}),a.findings.map((H,O)=>M.jsxs("div",{className:"alert-line",children:[M.jsxs("div",{className:"alert-head",onClick:()=>p(d===O?null:O),children:[M.jsxs("span",{className:H.sev==="r"?"sevr":"seva",children:[">> ALERT ",String(O+1).padStart(2,"0")]}),M.jsx("span",{children:H.title.toUpperCase()}),M.jsx("span",{style:{marginLeft:"auto",color:"#7A7A7A"},children:d===O?"−":"+"})]}),d===O&&M.jsxs("div",{className:"alert-body",children:[H.evidence,M.jsxs("div",{className:"diag-lever",children:[M.jsx("span",{children:"Lever"})," ",H.lever]})]})]},O)),a.waiting.length>0&&M.jsxs("div",{className:"note",children:["On mute until the sample can carry it: ",a.waiting.join("; "),"."]})]}),l==="daily"&&(C?M.jsxs("div",{children:[M.jsxs("div",{className:"label",style:{marginBottom:9},children:["Daily brief · ",C.date]}),M.jsx("div",{className:"brief-head",children:M.jsx(vp,{text:C.headline})}),W(C.sections,x,S,"NOTE")]}):M.jsx("div",{className:"note",children:"The daily brief lands here every weekday morning."})),l==="brief"&&(E?M.jsxs("div",{children:[M.jsxs("div",{className:"label",style:{marginBottom:9},children:["Palantir brief · ",E.date]}),M.jsx("div",{className:"brief-head",children:M.jsx(vp,{text:E.headline})}),W(E.sections,x,S,"DIRECTIVE")]}):M.jsx("div",{className:"note",children:"No brief published yet."})),l==="log"&&(b?M.jsxs("div",{children:[M.jsxs("div",{className:"label",style:{marginBottom:9},children:["Weekly memo · ",b.week]}),M.jsx("div",{className:"brief-head",children:b.headline}),W(b.sections,g,f,"ENTRY"),(b.archive||[]).map((H,O)=>M.jsxs("div",{className:"dir",onClick:()=>f(g==="a"+O?null:"a"+O),children:[M.jsxs("div",{className:"dir-title",children:[M.jsx("span",{className:"dnum",children:"ARCHIVE"})," // ",String(H.week||H.date||"").toUpperCase()]}),g==="a"+O&&M.jsx("div",{className:"dir-body",children:H.headline})]},"a"+O))]}):M.jsx("div",{className:"note",children:"No memo published yet."}))]})]})]})}function PT({daily:t,replies:e,leads:n,m:i,calc:r}){return M.jsxs("div",{children:[M.jsx(RT,{daily:t,replies:e,m:i,calc:r}),M.jsx(CT,{daily:t,replies:e,m:i}),M.jsx(bT,{daily:t,replies:e,leads:n,m:i,calc:r})]})}const Bn={red:"#E11414",bone:"#F4F2ED",steel:"#7A7A7A"};function LT({m:t}){const e=[{label:"Initials",value:t.initials},{label:"Replies",value:t.replies,rate:t.replyRate,rateLabel:"reply rate"},{label:"Booked",value:t.booked,rate:t.bookingRate,rateLabel:"booking rate"},{label:"Shown",value:t.shown,rate:t.showRate,rateLabel:"show rate"},{label:"Closed",value:t.closed,rate:t.closeRate,rateLabel:"close rate"}],n=Math.max(e[0].value,1),i=700,r=380,s=10,a=d=>Math.max(Math.sqrt(d/n)*(i*.62),44),o=e.length,l=(r-s*2)/o,c=e.map(d=>a(d.value));c.push(c[o-1]*.72);const u=["#414141","#3A3A3A","#323232","#2B2B2B",Bn.red],h=d=>{const p=s+d*l,x=p+l,S=l*.55,g=(i-c[d])/2,f=(i+c[d])/2,_=(i-c[d+1])/2,m=(i+c[d+1])/2;return"M"+g+","+p+" C"+g+","+(p+S)+" "+_+","+(x-S)+" "+_+","+x+" L"+m+","+x+" C"+m+","+(x-S)+" "+f+","+(p+S)+" "+f+","+p+" Z"};return M.jsxs("div",{children:[M.jsxs("svg",{viewBox:"0 0 "+i+" "+r,width:"100%",style:{display:"block"},children:[M.jsx("defs",{children:M.jsx("filter",{id:"redglow",x:"-40%",y:"-40%",width:"180%",height:"180%",children:M.jsx("feDropShadow",{dx:"0",dy:"0",stdDeviation:"7",floodColor:Bn.red,floodOpacity:"0.45"})})}),e.map((d,p)=>{const x=p>0?e[p-1].value-d.value:null,S=s+p*l+l/2;return M.jsxs("g",{children:[M.jsx("path",{d:h(p),fill:u[p],stroke:"#0A0A0A",strokeWidth:"2",filter:p===o-1?"url(#redglow)":void 0,children:M.jsx("title",{children:d.label+": "+Ce(d.value)+(d.rate!==void 0?" · "+Ke(d.rate)+" "+d.rateLabel:"")+(x!==null?" · "+Ce(x)+" did not make it":"")})}),M.jsx("text",{x:i/2,y:S+6,textAnchor:"middle",fontFamily:"'Archivo Black', sans-serif",fontSize:"19",fill:Bn.bone,style:{pointerEvents:"none"},children:Ce(d.value)}),M.jsx("text",{x:0,y:S+3,fontFamily:"'Space Mono', monospace",fontSize:"11",letterSpacing:"1.5",fill:Bn.steel,children:d.label.toUpperCase()}),d.rate!==void 0&&M.jsx("text",{x:i,y:S-4,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"11",fill:Bn.bone,children:Ke(d.rate)}),x!==null&&M.jsx("text",{x:i,y:S+11,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Bn.steel,children:"-"+Ce(x)+" lost"})]},d.label)})]}),M.jsx("div",{className:"note",children:"Widths on a square root scale so late stages stay visible. Hover a stage for detail. The counts and rates are exact."})]})}function Vo({label:t,value:e,floor:n,strong:i,sample:r,sampleNeed:s,sampleUnit:a}){const l=2*Math.PI*40,c=r<s,u=Math.max(.005,Math.min(e/i,1)),h=Math.min(n/i,1)*360,d=c?"#3A3A3A":e>=n?Bn.red:"#C9A227";return M.jsxs("div",{className:"gauge",children:[M.jsxs("svg",{viewBox:"0 0 100 100",children:[M.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:"#1E1E1E",strokeWidth:"8"}),M.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:d,strokeWidth:"8",strokeDasharray:u*l+" "+l,strokeLinecap:"round",transform:"rotate(-90 50 50)"}),M.jsx("line",{x1:"50",y1:"4",x2:"50",y2:"13",stroke:Bn.bone,strokeWidth:"2",transform:"rotate("+h+" 50 50)",opacity:"0.75"}),M.jsx("text",{x:"50",y:"49",textAnchor:"middle",fill:Bn.bone,fontFamily:"'Archivo Black', sans-serif",fontSize:"16",children:c?"--":Ke(e,1)}),M.jsx("text",{x:"50",y:"63",textAnchor:"middle",fill:"#7A7A7A",fontFamily:"'Space Mono', monospace",fontSize:"7",letterSpacing:"1",children:c?"LOW SAMPLE":"FLOOR "+Ke(n,0)})]}),M.jsx("div",{className:"label",style:{textAlign:"center",marginTop:7},children:t}),M.jsxs("div",{className:"gauge-sub",children:[Ce(r)," ",a]})]})}function DT({replies:t}){const e=[...t].sort((o,l)=>l.date-o.date),n=o=>o.closed?"closed":o.showed?"shown":o.booked?"booked":"replied",i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=o=>Math.max(0,Math.round((r-o.date)/ft)),a=o=>{if(n(o)!=="replied")return"";const l=s(o);return l>7?" stale":l>=2?" aging":""};return M.jsxs("div",{className:"card",children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:4},children:[M.jsx("h2",{className:"sec",style:{margin:0},children:"Pipeline"}),M.jsxs("span",{className:"label",children:[e.length," ",e.length===1?"reply":"replies"]})]}),e.length===0&&M.jsx("div",{className:"note",children:"No replies in this window yet."}),M.jsx("div",{className:"pipe-scroll",children:e.map((o,l)=>M.jsxs("div",{className:"pipe-row",children:[M.jsx("span",{className:"pipe-name",children:Ll(o)}),!o.closed&&M.jsxs("span",{className:"age"+a(o),title:"replied "+s(o)+" days ago",children:[s(o),"d"]}),M.jsx("span",{className:"chip "+n(o),children:n(o)}),o.closed&&o.cash>0&&M.jsxs("span",{className:"pipe-money",children:[Et(o.cash),o.dealValue>o.cash?" of "+Et(o.dealValue):"",o.paymentPlan?" · plan":""]}),M.jsxs("span",{className:"pipe-date",children:[Fs(o.date),o.timeReplied?" · "+o.timeReplied:""]})]},l))})]})}function NT({replies:t}){const e=t.map(s=>sy(s.timeReplied)).filter(s=>s!==null);if(!e.length)return null;const n=Uc.map(s=>e.filter(s.test).length),i=n.indexOf(Math.max(...n)),r=Math.max(...Array.from({length:24},(s,a)=>e.filter(o=>Math.floor(o)===a).length),1);return M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Reply Windows, Irish time"}),M.jsxs("div",{className:"rw-stats",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Best window so far"}),M.jsx("div",{className:"display rw-big",style:{color:Bn.red},children:Uc[i].range.replace(" to "," - ")}),M.jsx("div",{className:"hdetail",children:Uc[i].label.toLowerCase()})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Average reply time"}),M.jsx("div",{className:"display rw-big",children:ay(e)}),M.jsxs("div",{className:"hdetail",children:["across ",e.length," timed replies"]})]})]}),M.jsx("div",{className:"hm-row",children:Array.from({length:24},(s,a)=>{const o=e.filter(l=>Math.floor(l)===a).length;return M.jsx("span",{className:"hm-cell",title:String(a).padStart(2,"0")+":00, "+o+(o===1?" reply":" replies"),style:{background:o>0?"rgba(225,20,20,"+(.18+.82*(o/r)).toFixed(2)+")":"#1E1E1E"}},a)})}),M.jsxs("div",{className:"hm-labels",children:[M.jsx("span",{children:"00"}),M.jsx("span",{children:"06"}),M.jsx("span",{children:"12"}),M.jsx("span",{children:"18"}),M.jsx("span",{children:"23"})]}),M.jsxs("div",{className:"note",children:["Times on ",e.length," of ",t.length," replies.",e.length<30&&" Directional only until 30 plus. The reply window is when Tier 1 conversations should be worked live."]})]})}function IT({daily:t,leads:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=(u,h,d)=>M.jsxs("div",{children:[M.jsx("div",{className:"label",children:u}),M.jsx("div",{className:"display sv",style:d?{color:Bn.red}:null,children:Ce(h)})]}),s=e.filter(u=>u.nextDue&&u.status.toLowerCase()!=="replied");if(s.length>0){const u=s.filter(S=>S.nextDue<i).length,h=s.filter(S=>ht(S.nextDue)===ht(i)).length,d=s.filter(S=>ht(S.nextDue)===ht(new Date(i.getTime()+ft))).length,p=s.filter(S=>S.nextDue<=i&&/^touch/i.test(S.nextTouch)).length,x=s.filter(S=>S.nextDue<=i&&!/^touch/i.test(S.nextTouch)).length;return M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Follow Up Queue, live from the lead sheet"}),M.jsxs("div",{className:"streaks",children:[r("Overdue",u,u>0),r("Due today",h),r("Due tomorrow",d)]}),M.jsxs("div",{className:"note",children:["Of everything due or overdue right now: ",Ce(p)," ladder touches, ",Ce(x)," evergreen follow ups, across ",Ce(s.length)," open leads.",u>0&&" Red rows in the lead sheet are stacking up, work them to zero per the SOP."]})]})}const a=new Date(i.getTime()+ft);let o=0,l=0;for(const u of t){const h=Math.round((a-u.date)/ft);h>=1&&h<=3?o+=u.initials:h>=8&&h<=28?l+=u.initials/3:h>=29&&h<=90?l+=u.initials/7:h>=91&&(l+=u.initials/30)}const c=o+l;return M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Tomorrow's Load, SOP estimate"}),M.jsxs("div",{className:"streaks",children:[r("Ladder messages",o),r("Evergreen touches",l),r("Total owed",c,c>450)]}),M.jsxs("div",{className:"note",children:["Estimated from the daily log cohorts and the SOP cadence. Connects to the lead scheduler sheet automatically when it is reachable.",c>450&&" This load is beyond one setter's day, Tier 3 slips first per the Follow Up SOP."]})]})}function UT({daily:t,replies:e,leads:n,m:i}){return M.jsxs("div",{className:"grid",children:[M.jsxs("div",{className:"two-col",children:[M.jsxs(Mt,{className:"card",children:[M.jsx("h2",{className:"sec",children:"Funnel, all time"}),M.jsx(LT,{m:i})]}),M.jsxs("div",{className:"grid",children:[M.jsx(Mt,{delay:60,children:M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Stage Rates vs floors"}),M.jsxs("div",{className:"gauges",children:[M.jsx(Vo,{label:"Reply",value:i.replyRate,floor:St.replyRate[0],strong:St.replyRate[1],sample:i.initials,sampleNeed:150,sampleUnit:"sends"}),M.jsx(Vo,{label:"Booking",value:i.bookingRate,floor:St.bookingRate[0],strong:St.bookingRate[1],sample:i.replies,sampleNeed:10,sampleUnit:"replies"}),M.jsx(Vo,{label:"Show",value:i.showRate,floor:St.showRate[0],strong:St.showRate[1],sample:i.booked,sampleNeed:5,sampleUnit:"booked"}),M.jsx(Vo,{label:"Close",value:i.closeRate,floor:St.closeRate[0],strong:St.closeRate[1],sample:i.shown,sampleNeed:5,sampleUnit:"shows"})]})]})}),M.jsx(Mt,{delay:120,children:M.jsx(IT,{daily:t,leads:n})})]})]}),M.jsxs("div",{className:"two-col",children:[M.jsx(Mt,{children:M.jsx(DT,{replies:e})}),M.jsx(Mt,{delay:60,children:M.jsx(NT,{replies:e})})]})]})}const ki={red:"#E11414",bone:"#F4F2ED"};function FT({daily:t,replies:e,m:n,calc:i}){const r=Ne.useMemo(()=>{const v=new Date,y=new Date(v.getFullYear(),v.getMonth(),1),P=new Date(v.getFullYear(),v.getMonth()+1,0),U=new Date(v.getFullYear(),v.getMonth(),v.getDate()),I=[];let W=0;for(let O=y.getTime();O<=U.getTime();O+=ft){const z=new Date(O),N=e.filter(G=>G.date.getTime()===z.getTime()).reduce((G,K)=>G+K.cash,0);W+=N,I.push({x:z,y:W})}const H=Pv(t,e,n,i);return{days:I,bands:H,monthEnd:P,today:U,goal:i.goal}},[t,e,n,i]),{days:s,bands:a,monthEnd:o,today:l,goal:c}=r,u=720,h=260,d=52,p=14,x=14,S=26,g=s.length?s[0].x.getTime():l.getTime(),f=o.getTime(),_=Math.max(c,a.p90,1)*1.08,m=v=>d+(v-g)/Math.max(f-g,1)*(u-d-p),E=v=>x+(1-v/_)*(h-x-S),b=s.map(v=>m(v.x.getTime()).toFixed(1)+","+E(v.y).toFixed(1)).join(" "),C=m(l.getTime()),R=E(a.cashMTD),w=[C+","+R,m(f)+","+E(a.p90),m(f)+","+E(a.p10)].join(" ");return M.jsxs("svg",{viewBox:"0 0 "+u+" "+h,className:"chart-svg",children:[[.25,.5,.75,1].map(v=>M.jsxs("g",{children:[M.jsx("line",{x1:d,x2:u-p,y1:E(_*v),y2:E(_*v),stroke:"#1B1B1B"}),M.jsx("text",{x:d-7,y:E(_*v)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:Cr(_*v)})]},v)),M.jsx("line",{x1:d,x2:u-p,y1:E(c),y2:E(c),stroke:ki.bone,strokeDasharray:"5 5",opacity:"0.45"}),M.jsxs("text",{x:u-p,y:E(c)-5,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:ki.bone,opacity:"0.7",children:["GOAL ",Cr(c)]}),M.jsx("polygon",{points:w,fill:ki.red,opacity:"0.10"}),M.jsx("line",{x1:C,y1:R,x2:m(f),y2:E(a.p50),stroke:ki.red,strokeDasharray:"4 5",strokeWidth:"1.5",opacity:"0.8"}),s.length>1&&M.jsx("polyline",{points:b,fill:"none",stroke:ki.red,strokeWidth:"2.4",strokeLinejoin:"round"}),M.jsx("circle",{cx:C,cy:R,r:"3.5",fill:ki.red}),M.jsxs("text",{x:C+6,y:R-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:ki.bone,children:[Cr(a.cashMTD)," today"]}),M.jsx("text",{x:d,y:h-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:Fs(new Date(g))}),M.jsx("text",{x:u-p,y:h-8,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:Fs(o)})]})}function kT({replies:t}){const e=t.filter(n=>n.closed).sort((n,i)=>i.date-n.date);return e.length?M.jsx("div",{children:e.map((n,i)=>{const r=nt(n.cash,n.dealValue||n.cash);return M.jsxs("div",{style:{padding:"10px 0",borderBottom:"1px solid #191919"},children:[M.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline"},children:[M.jsx("span",{className:"pipe-name",children:Ll(n)}),n.paymentPlan&&M.jsx("span",{className:"chip",children:"plan"}),M.jsxs("span",{className:"pipe-money",style:{marginLeft:"auto"},children:[Et(n.cash)," of ",Et(n.dealValue||n.cash)]}),M.jsx("span",{className:"pipe-date",children:Fs(n.date)})]}),M.jsx("div",{className:"lbar-track",style:{marginTop:7},children:M.jsx("span",{className:"lbar-fill",style:{width:Math.max(r*100,2)+"%"}})})]},i)})}):M.jsx("div",{className:"note",children:"Closed deals land here with their collected vs signed split."})}function OT({calc:t,setCalc:e,m:n}){const[i,r]=Ne.useState(!1),{goal:s,deal:a,aov:o,showRate:l,closeRate:c,capacity:u,sendDays:h}=t,d=P=>U=>e({...t,[P]:U}),p=n.replyRate>0?n.replyRate:Wa,x=n.bookingRate>0?n.bookingRate:ja,S=nt(s,o),g=nt(S,c),f=nt(g,l),_=nt(f,x),m=nt(_,p),E=nt(m,u),b=nt(E,h/4.345),C=u>0?b<1?En(E,0)+" days":b<9?En(b,1)+" weeks":En(b/4.345,1)+" months":null,R=u*h*p*x*l*c*o,w=(P,U,I,W,H)=>M.jsxs("div",{className:"field",children:[M.jsx("label",{className:"label",children:P}),M.jsx("input",{type:"number",min:"0",step:W,value:U,onChange:O=>I(Math.max(0,Ts(O.target.value)))}),H&&M.jsx("div",{className:"hint",children:H})]}),v=(P,U,I,W,H,O,z)=>M.jsxs("div",{className:"field",children:[M.jsxs("label",{className:"label",children:[P," ",M.jsx(hy,{kind:"manual",children:"Manual"}),M.jsx("span",{className:"rate-val",style:{float:"right"},children:Ke(U)})]}),M.jsx("input",{type:"range",min:W,max:H,step:O,value:U,onChange:N=>I(parseFloat(N.target.value))}),z]}),y=(P,U,I)=>M.jsxs("div",{className:"chain-row",children:[M.jsxs("div",{children:[M.jsx("div",{className:"mono cr-label",children:P}),I&&M.jsx("div",{className:"cr-note",children:I})]}),M.jsx("div",{className:"display cr-val",children:U})]});return M.jsxs("div",{className:"card",children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10},children:[M.jsx("h2",{className:"sec",style:{margin:0},children:"Planning Console"}),M.jsxs("span",{style:{display:"flex",gap:16,alignItems:"baseline",flexWrap:"wrap"},children:[M.jsxs("span",{className:"label",children:["goal ",M.jsx("b",{className:"display",style:{color:ki.red,fontSize:16},children:Et(s)})]}),M.jsxs("span",{className:"label",children:["time to goal ",M.jsx("b",{className:"display",style:{color:"#F4F2ED",fontSize:16},children:C||"--"})]}),M.jsx("button",{className:"btn",onClick:()=>r(!i),children:i?"[ Close ]":"[ Adjust ]"})]})]}),i&&M.jsxs("div",{className:"calc-grid",style:{marginTop:16},children:[M.jsxs("div",{children:[w("Monthly cash goal (€)",s,d("goal"),1e3),w("Cash per close (€)",o,d("aov"),500,"What a client pays up front. Most deals are payment plans; the backend is tracked separately."),w("Deal value (€)",a,d("deal"),1e3,"Full contract for the signed-revenue view."),w("Capacity, initials a day",u,d("capacity"),5,"One warmed account sends about 100 a day before block risk."),w("Send days a month",h,d("sendDays"),1),v("Show rate",l,d("showRate"),.3,1,.005),v("Close rate",c,d("closeRate"),.05,.5,.005)]}),M.jsxs("div",{children:[y("Clients needed",En(S,1),"goal / cash per close"),y("Contract revenue",Et(S*a),"at full deal value"),y("Shows needed",En(g,1)),y("Calls to book",En(f,1)),y("Replies needed",En(_,0),Ke(x)+" booking"+(n.bookingRate>0?", live":", assumed")),y("Initials needed",En(m,0),Ke(p)+" reply"+(n.replyRate>0?", live":", assumed")),y("Time to goal",C||"--","at "+Ce(u)+" a day, "+Ce(h)+" send days a month"),y("Month supported by capacity",Et(R),Ke(nt(R,s),0)+" of goal")]})]})]})}function zT({daily:t,replies:e,m:n,calc:i,setCalc:r}){const s=Ff(t,e,n,i),a=n.cash*hp,o=e.filter(c=>c.closed&&c.paymentPlan).length,l=e.filter(c=>c.closed).length;return M.jsxs("div",{className:"grid",children:[M.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:[M.jsxs(Mt,{className:"tile",children:[M.jsx("div",{className:"label",children:"Collected, this month"}),M.jsx("div",{className:"display val red",children:M.jsx(br,{value:s.cashMTD,format:Et})}),M.jsxs("div",{className:"sub",children:[Ke(nt(s.cashMTD,i.goal),0)," of ",Et(i.goal)]})]}),M.jsxs(Mt,{className:"tile",delay:50,children:[M.jsx("div",{className:"label",children:"Signed, all time"}),M.jsx("div",{className:"display val",children:M.jsx(br,{value:n.dealValue,format:Et})}),M.jsxs("div",{className:"sub",children:[Et(n.outstanding)," still to collect"]})]}),M.jsxs(Mt,{className:"tile",delay:100,children:[M.jsx("div",{className:"label",children:"Commission accrued"}),M.jsx("div",{className:"display val",children:M.jsx(br,{value:a,format:Et})}),M.jsxs("div",{className:"sub",children:[Ke(hp,1)," of collected, owed to the setter"]})]}),M.jsxs(Mt,{className:"tile",delay:150,children:[M.jsx("div",{className:"label",children:"Payment plans"}),M.jsxs("div",{className:"display val",children:[o,M.jsxs("span",{style:{color:"#7A7A7A",fontSize:15},children:[" of ",l]})]}),M.jsx("div",{className:"sub",children:"deals on plans; backend follows"})]})]}),M.jsxs(Mt,{className:"card",children:[M.jsx("h2",{className:"sec",children:"Cash Trajectory, this month"}),M.jsx(FT,{daily:t,replies:e,m:n,calc:i}),M.jsx("div",{className:"note",children:"Red line is money banked. The cone is 500 simulated month-ends from the live rates: dashed midline P50, shaded P10 to P90. A thin sample means a wide cone; that is the honest read."})]}),M.jsxs("div",{className:"two-col",children:[M.jsxs(Mt,{className:"card",children:[M.jsx("h2",{className:"sec",children:"Deal Ledger"}),M.jsx(kT,{replies:e})]}),M.jsx(Mt,{delay:60,children:M.jsx(OT,{calc:i,setCalc:r,m:n})})]})]})}const di={red:"#E11414",teal:"#3EC1BB",steel:"#5A5A5A"};function BT({daily:t,replies:e,capacity:n}){const i=new Map;e.forEach(o=>{const l=ht(o.date);i.set(l,(i.get(l)||0)+1)});const r=t.some(o=>o.comments>0),s=o=>{const l=[];return n>0&&o.initials<n*.5&&l.push("volume under half target"),r&&o.comments===0&&l.push("no comments logged"),l},a=t.slice(-9).reverse();return M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Field Log, latest days"}),M.jsxs("div",{className:"flog-head",children:[M.jsx("span",{children:"Date"}),M.jsx("span",{children:"Init"}),M.jsx("span",{children:"FUps"}),M.jsx("span",{children:"Cmts"}),M.jsx("span",{children:"Repl"}),M.jsx("span",{children:"Note"})]}),a.map((o,l)=>M.jsxs("div",{className:"flog-row",children:[M.jsxs("span",{className:"fd"+(s(o).length?" warn":""),title:s(o).join(", ")||void 0,children:[Fs(o.date),s(o).length>0&&" ⚠"]}),M.jsx("span",{children:Ce(o.initials)}),M.jsx("span",{children:Ce(o.followUps)}),M.jsx("span",{children:o.comments>0?Ce(o.comments):"·"}),M.jsx("span",{children:i.get(ht(o.date))||"·"}),M.jsx("span",{className:"fnote"+(o.notes&&o.notes.length>1?" alert":""),title:o.notes,children:o.notes&&o.notes.length>1?o.notes:"·"})]},l)),a.length===0&&M.jsx("div",{className:"note",children:"Logged days land here."}),M.jsx("div",{className:"note",children:"Notes come straight from the EOD form. Anything written there is an operational flag worth reading."})]})}function HT({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(h=>[ht(h.date),h])),s=r.get(ht(i)),a=r.get(ht(new Date(i.getTime()-ft))),o=s||a,l=s?"Today":"Latest logged day";if(!o)return null;const c=[{name:"Initials at target",ok:o.initials>=e*.9,detail:Ce(o.initials)+" of "+Ce(e)},{name:"Comments matched to initials",ok:o.comments>=o.initials*.85,detail:Ce(o.comments)+" comments"},{name:"Ladder worked",ok:o.followUps>0,detail:Ce(o.followUps)+" follow ups"},{name:"EOD logged",ok:!0,detail:"form in"}],u=c.filter(h=>h.ok).length;return M.jsxs("div",{className:"card",children:[M.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[M.jsxs("h2",{className:"sec",style:{margin:0},children:["Day Score, ",l.toLowerCase()]}),M.jsxs("span",{className:"display",style:{fontSize:22,color:u===c.length?di.red:"#F4F2ED"},children:[u,"/",c.length]})]}),M.jsx("div",{style:{marginTop:12},children:c.map((h,d)=>M.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline",padding:"7px 0",borderBottom:"1px solid #191919"},children:[M.jsx("span",{className:"mono",style:{fontSize:11,color:h.ok?"#3EC1BB":"#C9A227",width:40},children:h.ok?"[OK]":"[..]"}),M.jsx("span",{style:{fontSize:13},children:h.name}),M.jsx("span",{className:"mono",style:{marginLeft:"auto",fontSize:10,color:"#7A7A7A"},children:h.detail})]},d))})]})}function VT({daily:t,replies:e,calc:n}){const i=iy(t,n.capacity),r=ry(t,e),s=bv(t,e),a=[{key:"initials",color:di.red,area:!0,data:t.map(o=>({x:o.date,y:o.initials}))},{key:"comments",color:di.teal,data:t.map(o=>({x:o.date,y:o.comments}))},{key:"follow ups",color:di.steel,data:t.map(o=>({x:o.date,y:o.followUps}))}];return M.jsxs("div",{className:"grid",children:[M.jsxs("div",{className:"two-col",children:[M.jsxs(Mt,{className:"card",children:[M.jsx("h2",{className:"sec",children:"Daily Output"}),M.jsx(my,{series:a,height:240}),M.jsxs("div",{className:"legend",children:[M.jsxs("span",{className:"leg",children:[M.jsx("i",{style:{background:di.red}}),"initials"]}),M.jsxs("span",{className:"leg",children:[M.jsx("i",{style:{background:di.teal}}),"comments"]}),M.jsxs("span",{className:"leg",children:[M.jsx("i",{style:{background:di.steel}}),"follow ups"]})]})]}),M.jsxs("div",{className:"grid",children:[M.jsx(Mt,{delay:60,children:M.jsx(HT,{daily:t,capacity:n.capacity})}),M.jsx(Mt,{delay:120,children:M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Streaks"}),M.jsxs("div",{className:"streaks",children:[M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Log streak"}),M.jsxs("div",{className:"display sv",style:i.cur>=6?{color:di.red}:null,children:[i.cur,"d"]}),M.jsxs("div",{className:"hdetail",children:["best ever ",i.best,"d"]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"Days at target volume"}),M.jsxs("div",{className:"display sv",style:i.vol>=3?{color:di.red}:null,children:[i.vol,"d"]}),M.jsxs("div",{className:"hdetail",children:["at 90% of ",Ce(n.capacity)]})]}),M.jsxs("div",{children:[M.jsx("div",{className:"label",children:"This week"}),M.jsx("div",{className:"display sv",children:Ce(s.initials.cur)}),M.jsxs("div",{className:"hdetail",children:["initials, vs ",Ce(s.initials.prev)," last wk"]})]})]})]})})]})]}),M.jsxs("div",{className:"two-col",children:[M.jsx(Mt,{children:M.jsx(BT,{daily:t,replies:e,capacity:n.capacity})}),M.jsx(Mt,{delay:60,children:M.jsxs("div",{className:"card",children:[M.jsx("h2",{className:"sec",children:"Milestones"}),r.length===0&&M.jsx("div",{className:"note",children:"Milestones land here as they happen."}),r.map((o,l)=>M.jsxs("div",{className:"ev",children:[M.jsx("span",{className:"ev-date",children:Fs(o.date)}),M.jsx("span",{className:"ev-label",children:o.label}),o.who&&M.jsx("span",{className:"ev-who",children:o.who})]},l))]})})]})]})}const ya=[{id:"command",label:"Command",el:PT},{id:"pipeline",label:"Pipeline",el:UT},{id:"cash",label:"Cash",el:zT},{id:"setter",label:"Setter",el:VT}];function GT(){const t=()=>{const i=(location.hash||"").replace(/^#\/?/,"");return ya.some(r=>r.id===i)?i:"command"},[e,n]=Ne.useState(t);return Ne.useEffect(()=>{const i=()=>n(t());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),e}function WT({done:t}){const e=["feeds .......... daily log / replies / lead scheduler","engine ......... levers priced, diagnosis armed","palantir ....... seeing-stone online"],[n,i]=Ne.useState(0);return Ne.useEffect(()=>{if(ni)return;const r=setInterval(()=>i(s=>s+1),330);return()=>clearInterval(r)},[]),M.jsx("div",{className:"boot"+(t?" done":""),children:M.jsxs("div",{className:"boot-in",children:[M.jsx(sd,{sub:"Ops Terminal v5"}),M.jsx("div",{className:"boot-lines",children:e.slice(0,n+1).map((r,s)=>M.jsxs("div",{children:[M.jsx("span",{className:"ok",children:">"})," ",r]},s))})]})})}function jT({open:t,close:e,go:n,actions:i}){const[r,s]=Ne.useState(""),[a,o]=Ne.useState(0),l=Ne.useMemo(()=>{const u=[...ya.map(d=>({label:"Go to "+d.label,k:"view",run:()=>n(d.id)})),...i],h=r.trim().toLowerCase();return h?u.filter(d=>d.label.toLowerCase().includes(h)):u},[r,i,n]);if(Ne.useEffect(()=>{o(0)},[r,t]),Ne.useEffect(()=>{t||s("")},[t]),!t)return null;const c=u=>{u.key==="Escape"?e():u.key==="ArrowDown"?(u.preventDefault(),o(h=>Math.min(h+1,l.length-1))):u.key==="ArrowUp"?(u.preventDefault(),o(h=>Math.max(h-1,0))):u.key==="Enter"&&l[a]&&(l[a].run(),e())};return M.jsx("div",{className:"pal-overlay",onClick:e,children:M.jsxs("div",{className:"palette",onClick:u=>u.stopPropagation(),children:[M.jsx("input",{autoFocus:!0,placeholder:"Type a command",value:r,onChange:u=>s(u.target.value),onKeyDown:c}),l.map((u,h)=>M.jsxs("div",{className:"pal-item"+(h===a?" sel":""),onMouseEnter:()=>o(h),onClick:()=>{u.run(),e()},children:[M.jsx("span",{children:u.label}),M.jsx("span",{className:"k",children:u.k})]},h))]})})}function XT(){const{daily:t,replies:e,leads:n,sample:i,loadedAt:r,reload:s}=fy(),a=GT(),[o,l]=Ne.useState(()=>{try{const E=JSON.parse(localStorage.getItem("kg_calc")||"null");return E?{...Ic,...E}:Ic}catch{return Ic}});Ne.useEffect(()=>{try{localStorage.setItem("kg_calc",JSON.stringify(o))}catch{}},[o]);const[c,u]=Ne.useState(()=>ni||sessionStorage.getItem("kg_booted")==="1");Ne.useEffect(()=>{if(c)return;const E=setTimeout(()=>{u(!0);try{sessionStorage.setItem("kg_booted","1")}catch{}},1500);return()=>clearTimeout(E)},[c]);const[h,d]=Ne.useState(!1),[p,x]=Ne.useState(!1);Ne.useEffect(()=>{document.body.classList.toggle("tv",p)},[p]);const S=Ne.useCallback(E=>{location.hash="/"+E},[]);Ne.useEffect(()=>{const E=b=>{if((b.metaKey||b.ctrlKey)&&b.key.toLowerCase()==="k"){b.preventDefault(),d(R=>!R);return}if(b.target&&/input|textarea|select/i.test(b.target.tagName))return;b.key==="Escape"&&p&&x(!1);const C={1:"command",2:"pipeline",3:"cash",4:"setter"};C[b.key]&&S(C[b.key]),b.key.toLowerCase()==="t"&&x(R=>!R),b.key.toLowerCase()==="r"&&s()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[S,s,p]);const g=Ne.useMemo(()=>t&&e?Zx(t,e):null,[t,e]),f=Ne.useMemo(()=>t&&e?oy(t,e,n,o.capacity):[],[t,e,n,o.capacity]);if(!t||!e)return M.jsxs("div",{className:"center",children:[M.jsx(sd,{sub:"Ops Terminal v5"}),M.jsx("div",{className:"label",style:{marginTop:10},children:"Pulling the numbers"})]});const _=(ya.find(E=>E.id===a)||ya[0]).el,m=[{label:"Refresh data",k:"R",run:s},{label:(p?"Exit":"Enter")+" TV mode",k:"T",run:()=>x(E=>!E)},{label:"Open sales sheet",k:"link",run:()=>window.open(Rv,"_blank")},{label:"Open lead scheduler",k:"link",run:()=>window.open(Cv,"_blank")},{label:"Open v4 tracker",k:"link",run:()=>window.open("/dm-tracker/","_blank")}];return M.jsxs("div",{children:[!c&&M.jsx(WT,{done:!1}),M.jsx("span",{className:"hud-corner hud-tl"}),M.jsx("span",{className:"hud-corner hud-tr"}),M.jsx("span",{className:"hud-corner hud-bl"}),M.jsx("span",{className:"hud-corner hud-br"}),M.jsxs("div",{className:"shell",children:[M.jsxs("div",{className:"topbar",children:[M.jsx("a",{href:"#/command",style:{textDecoration:"none"},children:M.jsx(sd,{sub:"Ops Terminal v5"})}),M.jsx("nav",{className:"nav",children:ya.map(E=>M.jsx("a",{href:"#/"+E.id,className:a===E.id?"on":"",children:E.label},E.id))}),M.jsxs("div",{className:"top-right",children:[M.jsxs("span",{className:"feed",children:[M.jsx("span",{className:i?"dead":"lit"}),i?"sample data":"live feed",r&&!i&&M.jsxs("span",{style:{color:"#4A4A4A"},children:[" ","· ",r.toLocaleTimeString("en-IE",{hour:"2-digit",minute:"2-digit"})]})]}),M.jsx("button",{className:"kbd-hint",onClick:()=>d(!0),children:"⌘K"})]})]}),i&&M.jsx("div",{className:"notice",children:"Live sheet unreachable from this network; running on sample data so the layout stays honest. It reconnects automatically."}),f.length>0&&M.jsx("div",{className:"ticker",children:f.map((E,b)=>M.jsx("span",{className:"sig "+E.sev,children:E.text},b))}),M.jsx(_,{daily:t,replies:e,leads:n,m:g,calc:o,setCalc:l}),M.jsxs("div",{className:"footer",children:[M.jsx("span",{children:"KEHOEGROUP · Blood & Ink"}),M.jsx("span",{children:"keys: 1-4 views · T tv · R refresh · ⌘K palette"})]})]}),M.jsx(jT,{open:h,close:()=>d(!1),go:S,actions:m})]})}Av(document.getElementById("root")).render(M.jsx(XT,{}));
