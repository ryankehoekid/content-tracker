(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var M0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ym={exports:{}},zl={},Sm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),E0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),T0=Symbol.for("react.strict_mode"),A0=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),b0=Symbol.for("react.forward_ref"),P0=Symbol.for("react.suspense"),L0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),oh=Symbol.iterator;function N0(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,wm={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Mm}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tm(){}Tm.prototype=Hs.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=wm,this.updater=n||Mm}var Yd=Xd.prototype=new Tm;Yd.constructor=Xd;Em(Yd,Hs.prototype);Yd.isPureReactComponent=!0;var lh=Array.isArray,Am=Object.prototype.hasOwnProperty,qd={current:null},Rm={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Am.call(e,i)&&!Rm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:qd.current}}function I0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function U0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ch=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U0(""+t.key):e.toString(36)}function Xo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case E0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hc(a,0):i,lh(r)?(n="",t!=null&&(n=t.replace(ch,"$&/")+"/"),Xo(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=I0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+hc(s,o);a+=Xo(s,e,n,l,r)}else if(l=N0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+hc(s,o++),a+=Xo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Xo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Yo={transition:null},k0={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:qd};function bm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Hs;Xe.Fragment=w0;Xe.Profiler=A0;Xe.PureComponent=Xd;Xe.StrictMode=T0;Xe.Suspense=P0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;Xe.act=bm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Em({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Am.call(e,l)&&!Rm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:C0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:R0,_context:t},t.Consumer=t};Xe.createElement=Cm;Xe.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:b0,render:t}};Xe.isValidElement=$d;Xe.lazy=function(t){return{$$typeof:D0,_payload:{_status:-1,_result:t},_init:F0}};Xe.memo=function(t,e){return{$$typeof:L0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};Xe.unstable_act=bm;Xe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Xe.useContext=function(t){return Qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Xe.useId=function(){return Qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Qt.current.useRef(t)};Xe.useState=function(t){return Qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Qt.current.useTransition()};Xe.version="18.3.1";Sm.exports=Xe;var Pe=Sm.exports;const Sa=xm(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=Pe,B0=Symbol.for("react.element"),z0=Symbol.for("react.fragment"),H0=Object.prototype.hasOwnProperty,V0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G0={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)H0.call(e,i)&&!G0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B0,type:t,key:s,ref:a,props:r,_owner:V0.current}}zl.Fragment=z0;zl.jsx=Pm;zl.jsxs=Pm;ym.exports=zl;var S=ym.exports,Lm={exports:{}},xn={},Dm={exports:{}},Nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,W){var Z=U.length;U.push(W);e:for(;0<Z;){var ne=Z-1>>>1,K=U[ne];if(0<r(K,W))U[ne]=W,U[Z]=K,Z=ne;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var W=U[0],Z=U.pop();if(Z!==W){U[0]=Z;e:for(var ne=0,K=U.length,Se=K>>>1;ne<Se;){var Y=2*(ne+1)-1,J=U[Y],le=Y+1,oe=U[le];if(0>r(J,Z))le<K&&0>r(oe,J)?(U[ne]=oe,U[le]=Z,ne=le):(U[ne]=J,U[Y]=Z,ne=Y);else if(le<K&&0>r(oe,Z))U[ne]=oe,U[le]=Z,ne=le;else break e}}return W}function r(U,W){var Z=U.sortIndex-W.sortIndex;return Z!==0?Z:U.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=U)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function E(U){if(M=!1,g(U),!x)if(n(l)!==null)x=!0,F(R);else{var W=n(c);W!==null&&z(E,W.startTime-U)}}function R(U,W){x=!1,M&&(M=!1,f(w),w=-1),p=!0;var Z=h;try{for(g(W),d=n(l);d!==null&&(!(d.expirationTime>W)||U&&!A());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var K=ne(d.expirationTime<=W);W=t.unstable_now(),typeof K=="function"?d.callback=K:d===n(l)&&i(l),g(W)}else i(l);d=n(l)}if(d!==null)var Se=!0;else{var Y=n(c);Y!==null&&z(E,Y.startTime-W),Se=!1}return Se}finally{d=null,h=Z,p=!1}}var P=!1,b=null,w=-1,_=5,y=-1;function A(){return!(t.unstable_now()-y<_)}function L(){if(b!==null){var U=t.unstable_now();y=U;var W=!0;try{W=b(!0,U)}finally{W?N():(P=!1,b=null)}}else P=!1}var N;if(typeof v=="function")N=function(){v(L)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,k=G.port2;G.port1.onmessage=L,N=function(){k.postMessage(null)}}else N=function(){m(L,0)};function F(U){b=U,P||(P=!0,N())}function z(U,W){w=m(function(){U(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,F(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var W=3;break;default:W=h}var Z=h;h=W;try{return U()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,W){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Z=h;h=U;try{return W()}finally{h=Z}},t.unstable_scheduleCallback=function(U,W,Z){var ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,U){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Z+K,U={id:u++,callback:W,priorityLevel:U,startTime:Z,expirationTime:K,sortIndex:-1},Z>ne?(U.sortIndex=Z,e(c,U),n(l)===null&&U===n(c)&&(M?(f(w),w=-1):M=!0,z(E,Z-ne))):(U.sortIndex=K,e(l,U),x||p||(x=!0,F(R))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var W=h;return function(){var Z=h;h=W;try{return U.apply(this,arguments)}finally{h=Z}}}})(Nm);Dm.exports=Nm;var W0=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0=Pe,_n=W0;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,Ma={};function Br(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,X0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},dh={};function Y0(t){return _u.call(dh,t)?!0:_u.call(uh,t)?!1:X0.test(t)?dh[t]=!0:(uh[t]=!0,!1)}function q0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $0(t,e,n,i){if(e===null||typeof e>"u"||q0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Vt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($0(e,n,r,i)&&(n=null),i||r===null?Y0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=j0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),km=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,pc;function sa(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function K0(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case xu:return"Profiler";case Jd:return"StrictMode";case yu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Um:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:Mu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return Mu(t(e))}catch{}}return null}function Z0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mu(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q0(t){var e=Om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=Q0(t))}function Bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Eu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zm(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function wu(t,e){zm(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Au(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(aa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Hm(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,Gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J0=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){J0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var e_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(e_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function bu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lu=null,Ss=null,Ms=null;function vh(t){if(t=Wa(t)){if(typeof Lu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=jl(e),Lu(t.stateNode,t.type,e))}}function Xm(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function Ym(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,vh(t),e)for(t=0;t<e.length;t++)vh(e[t])}}function qm(t,e){return t(e)}function $m(){}var vc=!1;function Km(t,e,n){if(vc)return t(e,n);vc=!0;try{return qm(t,e,n)}finally{vc=!1,(Ss!==null||Ms!==null)&&($m(),Ym())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=jl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Du=!1;if(yi)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Du=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Du=!1}function t_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var da=!1,dl=null,fl=!1,Nu=null,n_={onError:function(t){da=!0,dl=t}};function i_(t,e,n,i,r,s,a,o,l){da=!1,dl=null,t_.apply(n_,arguments)}function r_(t,e,n,i,r,s,a,o,l){if(i_.apply(this,arguments),da){if(da){var c=dl;da=!1,dl=null}else throw Error(se(198));fl||(fl=!0,Nu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(zr(t)!==t)throw Error(se(188))}function s_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _h(r),t;if(s===i)return _h(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Qm(t){return t=s_(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=_n.unstable_scheduleCallback,xh=_n.unstable_cancelCallback,a_=_n.unstable_shouldYield,o_=_n.unstable_requestPaint,Et=_n.unstable_now,l_=_n.unstable_getCurrentPriorityLevel,rf=_n.unstable_ImmediatePriority,tg=_n.unstable_UserBlockingPriority,hl=_n.unstable_NormalPriority,c_=_n.unstable_LowPriority,ng=_n.unstable_IdlePriority,Hl=null,Jn=null;function u_(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:h_,d_=Math.log,f_=Math.LN2;function h_(t){return t>>>=0,t===0?32:31-(d_(t)/f_|0)|0}var ao=64,oo=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oa(o):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function p_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=p_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function g_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,af,ag,og,lg,Uu=!1,lo=[],Xi=null,Yi=null,qi=null,Ta=new Map,Aa=new Map,Hi=[],v_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function __(t,e,n,i,r){switch(e){case"focusin":return Xi=qs(Xi,t,e,n,i,r),!0;case"dragenter":return Yi=qs(Yi,t,e,n,i,r),!0;case"mouseover":return qi=qs(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,qs(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,qs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=Mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){ag(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Pu=i,n.target.dispatchEvent(i),Pu=null}else return e=Wa(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function Sh(t,e,n){qo(t)&&n.delete(e)}function x_(){Uu=!1,Xi!==null&&qo(Xi)&&(Xi=null),Yi!==null&&qo(Yi)&&(Yi=null),qi!==null&&qo(qi)&&(qi=null),Ta.forEach(Sh),Aa.forEach(Sh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,x_)))}function Ra(t){function e(r){return $s(r,t)}if(0<lo.length){$s(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),Yi!==null&&$s(Yi,t),qi!==null&&$s(qi,t),Ta.forEach(e),Aa.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Hi.shift()}var Es=Ci.ReactCurrentBatchConfig,ml=!0;function y_(t,e,n,i){var r=st,s=Es.transition;Es.transition=null;try{st=1,of(t,e,n,i)}finally{st=r,Es.transition=s}}function S_(t,e,n,i){var r=st,s=Es.transition;Es.transition=null;try{st=4,of(t,e,n,i)}finally{st=r,Es.transition=s}}function of(t,e,n,i){if(ml){var r=Fu(t,e,n,i);if(r===null)Cc(t,e,i,gl,n),yh(t,i);else if(__(r,t,e,n,i))i.stopPropagation();else if(yh(t,i),e&4&&-1<v_.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&sg(s),s=Fu(t,e,n,i),s===null&&Cc(t,e,i,gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var gl=null;function Fu(t,e,n,i){if(gl=null,t=nf(i),t=Mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l_()){case rf:return 1;case tg:return 4;case hl:case c_:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Wi=null,lf=null,$o=null;function dg(){if($o)return $o;var t,e=lf,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return $o=r.slice(t,1<i?1-i:void 0)}function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Mh(){return!1}function yn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Mh,this.isPropagationStopped=Mh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=yn(Vs),Ga=xt({},Vs,{view:0,detail:0}),M_=yn(Ga),xc,yc,Ks,Vl=xt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(xc=t.screenX-Ks.screenX,yc=t.screenY-Ks.screenY):yc=xc=0,Ks=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Eh=yn(Vl),E_=xt({},Vl,{dataTransfer:0}),w_=yn(E_),T_=xt({},Ga,{relatedTarget:0}),Sc=yn(T_),A_=xt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),R_=yn(A_),C_=xt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b_=yn(C_),P_=xt({},Vs,{data:0}),wh=yn(P_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N_[t])?!!e[t]:!1}function uf(){return I_}var U_=xt({},Ga,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F_=yn(U_),k_=xt({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=yn(k_),O_=xt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),B_=yn(O_),z_=xt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=yn(z_),V_=xt({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G_=yn(V_),W_=[9,13,27,32],df=yi&&"CompositionEvent"in window,fa=null;yi&&"documentMode"in document&&(fa=document.documentMode);var j_=yi&&"TextEvent"in window&&!fa,fg=yi&&(!df||fa&&8<fa&&11>=fa),Ah=" ",Rh=!1;function hg(t,e){switch(t){case"keyup":return W_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function X_(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Rh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Rh?null:t;default:return null}}function Y_(t,e){if(cs)return t==="compositionend"||!df&&hg(t,e)?(t=dg(),$o=lf=Wi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q_[t.type]:e==="textarea"}function mg(t,e,n,i){Xm(i),e=vl(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function $_(t){Ag(t,0)}function Gl(t){var e=fs(t);if(Bm(e))return t}function K_(t,e){if(t==="change")return e}var gg=!1;if(yi){var Mc;if(yi){var Ec="oninput"in document;if(!Ec){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),Ec=typeof bh.oninput=="function"}Mc=Ec}else Mc=!1;gg=Mc&&(!document.documentMode||9<document.documentMode)}function Ph(){ha&&(ha.detachEvent("onpropertychange",vg),Ca=ha=null)}function vg(t){if(t.propertyName==="value"&&Gl(Ca)){var e=[];mg(e,Ca,t,nf(t)),Km($_,e)}}function Z_(t,e,n){t==="focusin"?(Ph(),ha=e,Ca=n,ha.attachEvent("onpropertychange",vg)):t==="focusout"&&Ph()}function Q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(Ca)}function J_(t,e){if(t==="click")return Gl(e)}function ex(t,e){if(t==="input"||t==="change")return Gl(e)}function tx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:tx;function ba(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!_u.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nx(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var a=Dh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=yi&&"documentMode"in document&&11>=document.documentMode,us=null,ku=null,pa=null,Ou=!1;function Nh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||us==null||us!==ul(i)||(i=us,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&ba(pa,i)||(pa=i,i=vl(ku,"onSelect"),0<i.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},wc={},yg={};yi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Wl(t){if(wc[t])return wc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return wc[t]=e[n];return t}var Sg=Wl("animationend"),Mg=Wl("animationiteration"),Eg=Wl("animationstart"),wg=Wl("transitionend"),Tg=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Tg.set(t,e),Br(e,[t])}for(var Tc=0;Tc<Ih.length;Tc++){var Ac=Ih[Tc],rx=Ac.toLowerCase(),sx=Ac[0].toUpperCase()+Ac.slice(1);sr(rx,"on"+sx)}sr(Sg,"onAnimationEnd");sr(Mg,"onAnimationIteration");sr(Eg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(wg,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function Uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,r_(i,e,void 0,t),t.currentTarget=null}function Ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,o,c),s=l}}}if(fl)throw t=Nu,fl=!1,Nu=null,t}function lt(t,e){var n=e[Gu];n===void 0&&(n=e[Gu]=new Set);var i=t+"__bubble";n.has(i)||(Rg(e,t,2,!1),n.add(i))}function Rc(t,e,n){var i=0;e&&(i|=4),Rg(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[fo]){t[fo]=!0,Im.forEach(function(n){n!=="selectionchange"&&(ax.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Rc("selectionchange",!1,e))}}function Rg(t,e,n,i){switch(ug(e)){case 1:var r=y_;break;case 4:r=S_;break;default:r=of}n=r.bind(null,e,n,t),r=void 0,!Du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Km(function(){var c=s,u=nf(n),d=[];e:{var h=Tg.get(t);if(h!==void 0){var p=cf,x=t;switch(t){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":p=F_;break;case"focusin":x="focus",p=Sc;break;case"focusout":x="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=w_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=B_;break;case Sg:case Mg:case Eg:p=R_;break;case wg:p=H_;break;case"scroll":p=M_;break;case"wheel":p=G_;break;case"copy":case"cut":case"paste":p=b_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Th}var M=(e&4)!==0,m=!M&&t==="scroll",f=M?h!==null?h+"Capture":null:h;M=[];for(var v=c,g;v!==null;){g=v;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=wa(v,f),E!=null&&M.push(La(v,E,g)))),m)break;v=v.return}0<M.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Pu&&(x=n.relatedTarget||n.fromElement)&&(Mr(x)||x[Si]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Mr(x):null,x!==null&&(m=zr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(M=Eh,E="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Th,E="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:fs(p),g=x==null?h:fs(x),h=new M(E,v+"leave",p,n,u),h.target=m,h.relatedTarget=g,E=null,Mr(u)===c&&(M=new M(f,v+"enter",x,n,u),M.target=g,M.relatedTarget=m,E=M),m=E,p&&x)t:{for(M=p,f=x,v=0,g=M;g;g=Gr(g))v++;for(g=0,E=f;E;E=Gr(E))g++;for(;0<v-g;)M=Gr(M),v--;for(;0<g-v;)f=Gr(f),g--;for(;v--;){if(M===f||f!==null&&M===f.alternate)break t;M=Gr(M),f=Gr(f)}M=null}else M=null;p!==null&&Fh(d,h,p,M,!1),x!==null&&m!==null&&Fh(d,m,x,M,!0)}}e:{if(h=c?fs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=K_;else if(Ch(h))if(gg)R=ex;else{R=Q_;var P=Z_}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=J_);if(R&&(R=R(t,c))){mg(d,R,n,u);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Tu(h,"number",h.value)}switch(P=c?fs(c):window,t){case"focusin":(Ch(P)||P.contentEditable==="true")&&(us=P,ku=c,pa=null);break;case"focusout":pa=ku=us=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Nh(d,n,u);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Nh(d,n,u)}var b;if(df)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else cs?hg(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(fg&&n.locale!=="ko"&&(cs||w!=="onCompositionStart"?w==="onCompositionEnd"&&cs&&(b=dg()):(Wi=u,lf="value"in Wi?Wi.value:Wi.textContent,cs=!0)),P=vl(c,w),0<P.length&&(w=new wh(w,t,null,n,u),d.push({event:w,listeners:P}),b?w.data=b:(b=pg(n),b!==null&&(w.data=b)))),(b=j_?X_(t,n):Y_(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(u=new wh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}Ag(d,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(La(t,s,r)),s=wa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=wa(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ox=/\r\n?/g,lx=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(ox,`
`).replace(lx,"")}function ho(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(se(425))}function _l(){}var Bu=null,zu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch(dx)}:Vu;function dx(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Gs,Da="__reactProps$"+Gs,Si="__reactContainer$"+Gs,Gu="__reactEvents$"+Gs,fx="__reactListeners$"+Gs,hx="__reactHandles$"+Gs;function Mr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Kn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[Kn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function jl(t){return t[Da]||null}var Wu=[],hs=-1;function ar(t){return{current:t}}function dt(t){0>hs||(t.current=Wu[hs],Wu[hs]=null,hs--)}function ot(t,e){hs++,Wu[hs]=t.current,t.current=e}var ir={},qt=ar(ir),sn=ar(!1),Dr=ir;function Ps(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function xl(){dt(sn),dt(qt)}function zh(t,e,n){if(qt.current!==ir)throw Error(se(168));ot(qt,e),ot(sn,n)}function Cg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Z0(t)||"Unknown",r));return xt({},n,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Dr=qt.current,ot(qt,t),ot(sn,sn.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Cg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,dt(sn),dt(qt),ot(qt,t)):dt(sn),ot(sn,n)}var fi=null,Xl=!1,Pc=!1;function bg(t){fi===null?fi=[t]:fi.push(t)}function px(t){Xl=!0,bg(t)}function or(){if(!Pc&&fi!==null){Pc=!0;var t=0,e=st;try{var n=fi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Xl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),eg(rf,or),r}finally{st=e,Pc=!1}}return null}var ps=[],ms=0,Sl=null,Ml=0,wn=[],Tn=0,Nr=null,pi=1,mi="";function gr(t,e){ps[ms++]=Ml,ps[ms++]=Sl,Sl=t,Ml=e}function Pg(t,e,n){wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Nr,Nr=t;var i=pi;t=mi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,pi=1<<32-Vn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function hf(t){t.return!==null&&(gr(t,1),Pg(t,1,0))}function pf(t){for(;t===Sl;)Sl=ps[--ms],ps[ms]=null,Ml=ps[--ms],ps[ms]=null;for(;t===Nr;)Nr=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null,pi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,ht=!1,On=null;function Lg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xu(t){if(ht){var e=mn;if(e){var n=e;if(!Vh(t,e)){if(ju(t))throw Error(se(418));e=$i(n.nextSibling);var i=gn;e&&Vh(t,e)?Lg(i,n):(t.flags=t.flags&-4097|2,ht=!1,gn=t)}}else{if(ju(t))throw Error(se(418));t.flags=t.flags&-4097|2,ht=!1,gn=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function po(t){if(t!==gn)return!1;if(!ht)return Gh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=mn)){if(ju(t))throw Dg(),Error(se(418));for(;e;)Lg(t,e),e=$i(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?$i(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=mn;t;)t=$i(t.nextSibling)}function Ls(){mn=gn=null,ht=!1}function mf(t){On===null?On=[t]:On.push(t)}var mx=Ci.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function Ng(t){function e(f,v){if(t){var g=f.deletions;g===null?(f.deletions=[v],f.flags|=16):g.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=Ji(f,v),f.index=0,f.sibling=null,f}function s(f,v,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<v?(f.flags|=2,v):g):(f.flags|=2,v)):(f.flags|=1048576,v)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,v,g,E){return v===null||v.tag!==6?(v=kc(g,f.mode,E),v.return=f,v):(v=r(v,g),v.return=f,v)}function l(f,v,g,E){var R=g.type;return R===ls?u(f,v,g.props.children,E,g.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Bi&&Wh(R)===v.type)?(E=r(v,g.props),E.ref=Zs(f,v,g),E.return=f,E):(E=il(g.type,g.key,g.props,null,f.mode,E),E.ref=Zs(f,v,g),E.return=f,E)}function c(f,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Oc(g,f.mode,E),v.return=f,v):(v=r(v,g.children||[]),v.return=f,v)}function u(f,v,g,E,R){return v===null||v.tag!==7?(v=Cr(g,f.mode,E,R),v.return=f,v):(v=r(v,g),v.return=f,v)}function d(f,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=kc(""+v,f.mode,g),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return g=il(v.type,v.key,v.props,null,f.mode,g),g.ref=Zs(f,null,v),g.return=f,g;case os:return v=Oc(v,f.mode,g),v.return=f,v;case Bi:var E=v._init;return d(f,E(v._payload),g)}if(aa(v)||Xs(v))return v=Cr(v,f.mode,g,null),v.return=f,v;mo(f,v)}return null}function h(f,v,g,E){var R=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:o(f,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case io:return g.key===R?l(f,v,g,E):null;case os:return g.key===R?c(f,v,g,E):null;case Bi:return R=g._init,h(f,v,R(g._payload),E)}if(aa(g)||Xs(g))return R!==null?null:u(f,v,g,E,null);mo(f,g)}return null}function p(f,v,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,o(v,f,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return f=f.get(E.key===null?g:E.key)||null,l(v,f,E,R);case os:return f=f.get(E.key===null?g:E.key)||null,c(v,f,E,R);case Bi:var P=E._init;return p(f,v,g,P(E._payload),R)}if(aa(E)||Xs(E))return f=f.get(g)||null,u(v,f,E,R,null);mo(v,E)}return null}function x(f,v,g,E){for(var R=null,P=null,b=v,w=v=0,_=null;b!==null&&w<g.length;w++){b.index>w?(_=b,b=null):_=b.sibling;var y=h(f,b,g[w],E);if(y===null){b===null&&(b=_);break}t&&b&&y.alternate===null&&e(f,b),v=s(y,v,w),P===null?R=y:P.sibling=y,P=y,b=_}if(w===g.length)return n(f,b),ht&&gr(f,w),R;if(b===null){for(;w<g.length;w++)b=d(f,g[w],E),b!==null&&(v=s(b,v,w),P===null?R=b:P.sibling=b,P=b);return ht&&gr(f,w),R}for(b=i(f,b);w<g.length;w++)_=p(b,f,w,g[w],E),_!==null&&(t&&_.alternate!==null&&b.delete(_.key===null?w:_.key),v=s(_,v,w),P===null?R=_:P.sibling=_,P=_);return t&&b.forEach(function(A){return e(f,A)}),ht&&gr(f,w),R}function M(f,v,g,E){var R=Xs(g);if(typeof R!="function")throw Error(se(150));if(g=R.call(g),g==null)throw Error(se(151));for(var P=R=null,b=v,w=v=0,_=null,y=g.next();b!==null&&!y.done;w++,y=g.next()){b.index>w?(_=b,b=null):_=b.sibling;var A=h(f,b,y.value,E);if(A===null){b===null&&(b=_);break}t&&b&&A.alternate===null&&e(f,b),v=s(A,v,w),P===null?R=A:P.sibling=A,P=A,b=_}if(y.done)return n(f,b),ht&&gr(f,w),R;if(b===null){for(;!y.done;w++,y=g.next())y=d(f,y.value,E),y!==null&&(v=s(y,v,w),P===null?R=y:P.sibling=y,P=y);return ht&&gr(f,w),R}for(b=i(f,b);!y.done;w++,y=g.next())y=p(b,f,w,y.value,E),y!==null&&(t&&y.alternate!==null&&b.delete(y.key===null?w:y.key),v=s(y,v,w),P===null?R=y:P.sibling=y,P=y);return t&&b.forEach(function(L){return e(f,L)}),ht&&gr(f,w),R}function m(f,v,g,E){if(typeof g=="object"&&g!==null&&g.type===ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case io:e:{for(var R=g.key,P=v;P!==null;){if(P.key===R){if(R=g.type,R===ls){if(P.tag===7){n(f,P.sibling),v=r(P,g.props.children),v.return=f,f=v;break e}}else if(P.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Bi&&Wh(R)===P.type){n(f,P.sibling),v=r(P,g.props),v.ref=Zs(f,P,g),v.return=f,f=v;break e}n(f,P);break}else e(f,P);P=P.sibling}g.type===ls?(v=Cr(g.props.children,f.mode,E,g.key),v.return=f,f=v):(E=il(g.type,g.key,g.props,null,f.mode,E),E.ref=Zs(f,v,g),E.return=f,f=E)}return a(f);case os:e:{for(P=g.key;v!==null;){if(v.key===P)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(f,v.sibling),v=r(v,g.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Oc(g,f.mode,E),v.return=f,f=v}return a(f);case Bi:return P=g._init,m(f,v,P(g._payload),E)}if(aa(g))return x(f,v,g,E);if(Xs(g))return M(f,v,g,E);mo(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,g),v.return=f,f=v):(n(f,v),v=kc(g,f.mode,E),v.return=f,f=v),a(f)):n(f,v)}return m}var Ds=Ng(!0),Ig=Ng(!1),El=ar(null),wl=null,gs=null,gf=null;function vf(){gf=gs=wl=null}function _f(t){var e=El.current;dt(El),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){wl=t,gf=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(wl===null)throw Error(se(308));gs=t,wl.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Er=null;function xf(t){Er===null?Er=[t]:Er.push(t)}function Ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function Zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}function jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,M=o;switch(h=e,p=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=xt({},d,h);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=d}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ja={},ei=ar(ja),Na=ar(ja),Ia=ar(ja);function wr(t){if(t===ja)throw Error(se(174));return t}function Sf(t,e){switch(ot(Ia,e),ot(Na,t),ot(ei,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ru(e,t)}dt(ei),ot(ei,e)}function Ns(){dt(ei),dt(Na),dt(Ia)}function kg(t){wr(Ia.current);var e=wr(ei.current),n=Ru(e,t.type);e!==n&&(ot(Na,t),ot(ei,n))}function Mf(t){Na.current===t&&(dt(ei),dt(Na))}var gt=ar(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function Ef(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Qo=Ci.ReactCurrentDispatcher,Dc=Ci.ReactCurrentBatchConfig,Ir=0,_t=null,bt=null,Ut=null,Rl=!1,ma=!1,Ua=0,gx=0;function Gt(){throw Error(se(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(Ir=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?yx:Sx,t=n(i,r),ma){s=0;do{if(ma=!1,Ua=0,25<=s)throw Error(se(301));s+=1,Ut=bt=null,e.updateQueue=null,Qo.current=Mx,t=n(i,r)}while(ma)}if(Qo.current=Cl,e=bt!==null&&bt.next!==null,Ir=0,Ut=bt=_t=null,Rl=!1,e)throw Error(se(300));return t}function Af(){var t=Ua!==0;return Ua=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Pn(){if(bt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?_t.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Fa(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ir&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,_t.lanes|=u,Ur|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Og(){}function Bg(t,e){var n=_t,i=Pn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Rf(Vg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ka(9,Hg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(se(349));Ir&30||zg(n,e,r)}return r}function zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Wg(t)}function Vg(t,e,n){return n(function(){Gg(e)&&Wg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Wg(t){var e=Mi(t,1);e!==null&&Gn(e,t,1,-1)}function Yh(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,_t,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return Pn().memoizedState}function Jo(t,e,n,i){var r=Yn();_t.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Yl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&wf(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function qh(t,e){return Jo(8390656,8,t,e)}function Rf(t,e){return Yl(2048,8,t,e)}function Xg(t,e){return Yl(4,2,t,e)}function Yg(t,e){return Yl(4,4,t,e)}function qg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,qg.bind(null,e,t),n)}function Cf(){}function Kg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return Ir&21?(Wn(n,e)||(n=ig(),_t.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function vx(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{st=n,Dc.transition=i}}function Jg(){return Pn().memoizedState}function _x(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ev(t))tv(e,n);else if(n=Ug(t,e,n,i),n!==null){var r=Zt();Gn(n,t,i,r),nv(n,e,i)}}function xx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(t))tv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ug(t,e,r,i),n!==null&&(r=Zt(),Gn(n,t,i,r),nv(n,e,i))}}function ev(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function tv(t,e){ma=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}var Cl={readContext:bn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},yx={readContext:bn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jo(4194308,4,qg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jo(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_x.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Cf,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=vx.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Yn();if(ht){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),kt===null)throw Error(se(349));Ir&30||zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qh(Vg.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=kt.identifierPrefix;if(ht){var n=mi,i=pi;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:bn,useCallback:Kg,useContext:bn,useEffect:Rf,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Nc,useRef:jg,useState:function(){return Nc(Fa)},useDebugValue:Cf,useDeferredValue:function(t){var e=Pn();return Qg(e,bt.memoizedState,t)},useTransition:function(){var t=Nc(Fa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1},Mx={readContext:bn,useCallback:Kg,useContext:bn,useEffect:Rf,useImperativeHandle:$g,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Ic,useRef:jg,useState:function(){return Ic(Fa)},useDebugValue:Cf,useDeferredValue:function(t){var e=Pn();return bt===null?e.memoizedState=t:Qg(e,bt.memoizedState,t)},useTransition:function(){var t=Ic(Fa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Bg,useId:Jg,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=xi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Gn(e,t,r,i),Zo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=xi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Gn(e,t,r,i),Zo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Qi(t),r=xi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Gn(e,t,i,n),Zo(e,t,i))}};function $h(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function iv(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=an(e)?Dr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=an(e)?Dr:qt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ql.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=K0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function rv(t,e,n){n=xi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pl||(Pl=!0,ad=i),Ku(t,e)},n}function sv(t,e,n){n=xi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ex;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var wx=Ci.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):Ds(e,t.child,n,i)}function ep(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Tf(t,e,n,i,s,r),n=Af(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ht&&n&&hf(e),e.flags|=1,Kt(t,e,i,r),e.child)}function tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,av(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function av(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return Zu(t,e,n,i,r)}function ov(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(_s,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(_s,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(_s,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(_s,pn),pn|=i;return Kt(t,e,r,n),e.child}function lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=an(n)?Dr:qt.current;return s=Ps(e,s),ws(e,r),n=Tf(t,e,n,i,s,r),i=Af(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ht&&i&&hf(e),e.flags|=1,Kt(t,e,n,r),e.child)}function np(t,e,n,i,r){if(an(n)){var s=!0;yl(e)}else s=!1;if(ws(e,r),e.stateNode===null)el(t,e),iv(e,n,i),$u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=an(n)?Dr:qt.current,c=Ps(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Kh(e,a,i,c),zi=!1;var h=e.memoizedState;a.state=h,Tl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||sn.current||zi?(typeof u=="function"&&(qu(e,n,u,i),l=e.memoizedState),(o=zi||$h(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Fg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Fn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=an(n)?Dr:qt.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&Kh(e,a,i,l),zi=!1,h=e.memoizedState,a.state=h,Tl(e,i,a,r);var x=e.memoizedState;o!==d||h!==x||sn.current||zi?(typeof p=="function"&&(qu(e,n,p,i),x=e.memoizedState),(c=zi||$h(e,n,c,i,h,x,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Qu(t,e,n,i,s,r)}function Qu(t,e,n,i,r,s){lv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hh(e,n,!1),Ei(t,e,s);i=e.stateNode,wx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function cv(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),Sf(t,e.containerInfo)}function ip(t,e,n,i,r){return Ls(),mf(r),e.flags|=256,Kt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function uv(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(gt,r&1),t===null)return Xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Zl(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Ju,t):bf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Tx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ji(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&mf(i),Ds(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(se(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zl({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=ed(a),e.memoizedState=Ju,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Uc(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Gn(i,t,r,-1))}return Uf(),i=Uc(Error(se(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=$i(r.nextSibling),gn=e,ht=!0,On=null,t!==null&&(wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Nr,pi=t.id,mi=t.overflow,Nr=e),e=bf(e,i.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,s);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ax(t,e,n){switch(e.tag){case 3:cv(e),Ls();break;case 5:kg(e);break;case 1:an(e.type)&&yl(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?uv(t,e,n):(ot(gt,gt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);ot(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,ov(t,e,n)}return Ei(t,e,n)}var fv,td,hv,pv;fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ei.current);var s=null;switch(n){case"input":r=Eu(t,r),i=Eu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Au(t,r),i=Au(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_l)}Cu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};pv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return an(e.type)&&xl(),Wt(e),null;case 3:return i=e.stateNode,Ns(),dt(sn),dt(qt),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(cd(On),On=null))),td(t,e),Wt(e),null;case 5:Mf(e);var r=wr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Wt(e),null}if(t=wr(ei.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)lt(la[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":hh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":mh(i,s),lt("invalid",i)}Cu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":ro(i),ph(i,s,!0);break;case"textarea":ro(i),gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Kn]=e,t[Da]=i,fv(t,e,!1,!1),e.stateNode=t;e:{switch(a=bu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)lt(la[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":hh(t,i),r=Eu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":mh(t,i),r=Au(t,i),lt("invalid",t);break;default:r=i}Cu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Qd(t,s,l,a))}switch(n){case"input":ro(t),ph(t,i,!1);break;case"textarea":ro(t),gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)pv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(Ia.current),wr(ei.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return Wt(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&mn!==null&&e.mode&1&&!(e.flags&128))Dg(),Ls(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Kn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else On!==null&&(cd(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Pt===0&&(Pt=3):Uf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Ns(),td(t,e),t===null&&Pa(e.stateNode.containerInfo),Wt(e),null;case 10:return _f(e.type._context),Wt(e),null;case 17:return an(e.type)&&xl(),Wt(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Al(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Us&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Wt(e),null}else 2*Et()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=gt.current,ot(gt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return If(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Cx(t,e){switch(pf(e),e.tag){case 1:return an(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),dt(sn),dt(qt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return Ns(),null;case 10:return _f(e.type._context),null;case 22:case 23:return If(),null;case 24:return null;default:return null}}var vo=!1,Yt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function nd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var sp=!1;function Px(t,e){if(Bu=ml,t=xg(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},ml=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,m=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:Fn(e.type,M),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){Mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return x=sp,sp=!1,x}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,n,s)}r=r.next}while(r!==i)}}function $l(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mv(t){var e=t.alternate;e!==null&&(t.alternate=null,mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Da],delete e[Gu],delete e[fx],delete e[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gv(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var zt=null,kn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:Yt||vs(n,e);case 6:var i=zt,r=kn;zt=null,Pi(t,e,n),zt=i,kn=r,zt!==null&&(kn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(kn?(t=zt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Ra(t)):bc(zt,n.stateNode));break;case 4:i=zt,r=kn,zt=n.stateNode.containerInfo,kn=!0,Pi(t,e,n),zt=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nd(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Yt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Pi(t,e,n),Yt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(i){var r=Bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,kn=!1;break e;case 3:zt=o.stateNode.containerInfo,kn=!0;break e;case 4:zt=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(zt===null)throw Error(se(160));vv(s,a,r),zt=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_v(e,t),e=e.sibling}function _v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{ga(3,t,t.return),$l(3,t)}catch(M){Mt(t,t.return,M)}try{ga(5,t,t.return)}catch(M){Mt(t,t.return,M)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(M){Mt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zm(r,s),bu(o,a);var c=bu(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?jm(r,d):u==="dangerouslySetInnerHTML"?Gm(r,d):u==="children"?Ea(r,d):Qd(r,u,d,c)}switch(o){case"input":wu(r,s);break;case"textarea":Hm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(M){Mt(t,t.return,M)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Mt(t,t.return,M)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(M){Mt(t,t.return,M)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=Et())),i&4&&op(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Dn(e,t),Yt=c):Dn(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(d=ye=u;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:ga(4,h,h.return);break;case 1:vs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){Mt(i,n,M)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){cp(d);continue}}p!==null?(p.return=h,ye=p):cp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Wm("display",a))}catch(M){Mt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Mt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&op(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=ap(t);sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ap(t);rd(t,o,a);break;default:throw Error(se(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Lx(t,e,n){ye=t,xv(t)}function xv(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=vo;var c=Yt;if(vo=a,(Yt=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?up(r):l!==null?(l.return=a,ye=l):up(r);for(;s!==null;)ye=s,xv(s),s=s.sibling;ye=r,vo=o,Yt=c}lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):lp(t)}}function lp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||$l(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Yt||e.flags&512&&id(e)}catch(h){Mt(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function cp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function up(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$l(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{id(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{id(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var Dx=Math.ceil,bl=Ci.ReactCurrentDispatcher,Pf=Ci.ReactCurrentOwner,Cn=Ci.ReactCurrentBatchConfig,Ke=0,kt=null,Ct=null,Ht=0,pn=0,_s=ar(0),Pt=0,Oa=null,Ur=0,Kl=0,Lf=0,va=null,tn=null,Df=0,Us=1/0,di=null,Pl=!1,ad=null,Zi=null,_o=!1,ji=null,Ll=0,_a=0,od=null,tl=-1,nl=0;function Zt(){return Ke&6?Et():tl!==-1?tl:tl=Et()}function Qi(t){return t.mode&1?Ke&2&&Ht!==0?Ht&-Ht:mx.transition!==null?(nl===0&&(nl=ig()),nl):(t=st,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function Gn(t,e,n,i){if(50<_a)throw _a=0,od=null,Error(se(185));Va(t,n,i),(!(Ke&2)||t!==kt)&&(t===kt&&(!(Ke&2)&&(Kl|=n),Pt===4&&Vi(t,Ht)),on(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Us=Et()+500,Xl&&or()))}function on(t,e){var n=t.callbackNode;m_(t,e);var i=pl(t,t===kt?Ht:0);if(i===0)n!==null&&xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xh(n),e===1)t.tag===0?px(dp.bind(null,t)):bg(dp.bind(null,t)),ux(function(){!(Ke&6)&&or()}),n=null;else{switch(rg(i)){case 1:n=rf;break;case 4:n=tg;break;case 16:n=hl;break;case 536870912:n=ng;break;default:n=hl}n=Rv(n,yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yv(t,e){if(tl=-1,nl=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=pl(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=Ke;Ke|=2;var s=Mv();(kt!==t||Ht!==e)&&(di=null,Us=Et()+500,Rr(t,e));do try{Ux();break}catch(o){Sv(t,o)}while(!0);vf(),bl.current=s,Ke=r,Ct!==null?e=0:(kt=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=Iu(t),r!==0&&(i=r,e=ld(t,r))),e===1)throw n=Oa,Rr(t,0),Vi(t,i),on(t,Et()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Nx(r)&&(e=Dl(t,i),e===2&&(s=Iu(t),s!==0&&(i=s,e=ld(t,s))),e===1))throw n=Oa,Rr(t,0),Vi(t,i),on(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:vr(t,tn,di);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Df+500-Et(),10<e)){if(pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vu(vr.bind(null,t,tn,di),e);break}vr(t,tn,di);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Vn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dx(i/1960))-i,10<i){t.timeoutHandle=Vu(vr.bind(null,t,tn,di),i);break}vr(t,tn,di);break;case 5:vr(t,tn,di);break;default:throw Error(se(329))}}}return on(t,Et()),t.callbackNode===n?yv.bind(null,t):null}function ld(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=tn,tn=n,e!==null&&cd(e)),t}function cd(t){tn===null?tn=t:tn.push.apply(tn,t)}function Nx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Lf,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(Ke&6)throw Error(se(327));Ts();var e=pl(t,0);if(!(e&1))return on(t,Et()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Iu(t);i!==0&&(e=i,n=ld(t,i))}if(n===1)throw n=Oa,Rr(t,0),Vi(t,e),on(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,tn,di),on(t,Et()),null}function Nf(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Us=Et()+500,Xl&&or())}}function Fr(t){ji!==null&&ji.tag===0&&!(Ke&6)&&Ts();var e=Ke;Ke|=1;var n=Cn.transition,i=st;try{if(Cn.transition=null,st=1,t)return t()}finally{st=i,Cn.transition=n,Ke=e,!(Ke&6)&&or()}}function If(){pn=_s.current,dt(_s)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:Ns(),dt(sn),dt(qt),Ef();break;case 5:Mf(i);break;case 4:Ns();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:_f(i.type._context);break;case 22:case 23:If()}n=n.return}if(kt=t,Ct=t=Ji(t.current,null),Ht=pn=e,Pt=0,Oa=null,Lf=Kl=Ur=0,tn=va=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function Sv(t,e){do{var n=Ct;try{if(vf(),Qo.current=Cl,Rl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(Ir=0,Ut=bt=_t=null,ma=!1,Ua=0,Pf.current=null,n===null||n.return===null){Pt=1,Oa=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Qh(a);if(p!==null){p.flags&=-257,Jh(p,a,o,s,e),p.mode&1&&Zh(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var M=new Set;M.add(l),e.updateQueue=M}else x.add(l);break e}else{if(!(e&1)){Zh(s,c,e),Uf();break e}l=Error(se(426))}}else if(ht&&o.mode&1){var m=Qh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jh(m,a,o,s,e),mf(Is(l,o));break e}}s=l=Is(l,o),Pt!==4&&(Pt=2),va===null?va=[s]:va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=rv(s,l,e);jh(s,f);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=sv(s,o,e);jh(s,E);break e}}s=s.return}while(s!==null)}wv(n)}catch(R){e=R,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Mv(){var t=bl.current;return bl.current=Cl,t===null?Cl:t}function Uf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),kt===null||!(Ur&268435455)&&!(Kl&268435455)||Vi(kt,Ht)}function Dl(t,e){var n=Ke;Ke|=2;var i=Mv();(kt!==t||Ht!==e)&&(di=null,Rr(t,e));do try{Ix();break}catch(r){Sv(t,r)}while(!0);if(vf(),Ke=n,bl.current=i,Ct!==null)throw Error(se(261));return kt=null,Ht=0,Pt}function Ix(){for(;Ct!==null;)Ev(Ct)}function Ux(){for(;Ct!==null&&!a_();)Ev(Ct)}function Ev(t){var e=Av(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?wv(t):Ct=e,Pf.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Cx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Rx(n,e,pn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function vr(t,e,n){var i=st,r=Cn.transition;try{Cn.transition=null,st=1,Fx(t,e,n,i)}finally{Cn.transition=r,st=i}return null}function Fx(t,e,n,i){do Ts();while(ji!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g_(t,s),t===kt&&(Ct=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,Rv(hl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=st;st=1;var o=Ke;Ke|=4,Pf.current=null,Px(t,n),_v(n,t),nx(zu),ml=!!Bu,zu=Bu=null,t.current=n,Lx(n),o_(),Ke=o,st=a,Cn.transition=s}else t.current=n;if(_o&&(_o=!1,ji=t,Ll=r),s=t.pendingLanes,s===0&&(Zi=null),u_(n.stateNode),on(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,t=ad,ad=null,t;return Ll&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===od?_a++:(_a=0,od=t):_a=0,or(),null}function Ts(){if(ji!==null){var t=rg(Ll),e=Cn.transition,n=st;try{if(Cn.transition=null,st=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Ll=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:ga(8,u,s)}var d=u.child;if(d!==null)d.return=u,ye=d;else for(;ye!==null;){u=ye;var h=u.sibling,p=u.return;if(mv(u),u===c){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ye=f;break e}ye=s.return}}var v=t.current;for(ye=v;ye!==null;){a=ye;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ye=g;else e:for(a=v;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:$l(9,o)}}catch(R){Mt(o,o.return,R)}if(o===a){ye=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,ye=E;break e}ye=o.return}}if(Ke=r,or(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Hl,t)}catch{}i=!0}return i}finally{st=n,Cn.transition=e}}return!1}function fp(t,e,n){e=Is(n,e),e=rv(t,e,1),t=Ki(t,e,1),e=Zt(),t!==null&&(Va(t,1,e),on(t,e))}function Mt(t,e,n){if(t.tag===3)fp(t,t,n);else for(;e!==null;){if(e.tag===3){fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Is(n,t),t=sv(e,t,1),e=Ki(e,t,1),t=Zt(),e!==null&&(Va(e,1,t),on(e,t));break}}e=e.return}}function kx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Et()-Df?Rr(t,0):Lf|=n),on(t,e)}function Tv(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=Zt();t=Mi(t,e),t!==null&&(Va(t,e,n),on(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tv(t,n)}function Bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Tv(t,n)}var Av;Av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Ax(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ht&&e.flags&1048576&&Pg(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=Ps(e,qt.current);ws(e,n),r=Tf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,yl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=ql,e.stateNode=r,r._reactInternals=e,$u(e,i,t,n),e=Qu(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&hf(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hx(i),t=Fn(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=np(null,e,i,t,n);break e;case 11:e=ep(null,e,i,t,n);break e;case 14:e=tp(null,e,i,Fn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),np(t,e,i,r,n);case 3:e:{if(cv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),Tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(se(423)),e),e=ip(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(se(424)),e),e=ip(t,e,i,n,r);break e}else for(mn=$i(e.stateNode.containerInfo.firstChild),gn=e,ht=!0,On=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=Ei(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return kg(e),t===null&&Xu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hu(i,r)?a=null:s!==null&&Hu(i,s)&&(e.flags|=32),lv(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&Xu(e),null;case 13:return uv(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),ep(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(El,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!sn.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=xi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=bn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),tp(t,e,i,r,n);case 15:return av(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),el(t,e),e.tag=1,an(i)?(t=!0,yl(e)):t=!1,ws(e,n),iv(e,i,r),$u(e,i,r,n),Qu(null,e,i,!0,t,n);case 19:return dv(t,e,n);case 22:return ov(t,e,n)}throw Error(se(156,e.tag))};function Rv(t,e){return eg(t,e)}function zx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new zx(t,e,n,i)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hx(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ff(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ls:return Cr(n.children,r,s,e);case Jd:a=8,r|=8;break;case xu:return t=An(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case yu:return t=An(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Su:return t=An(19,n,e,r),t.elementType=Su,t.lanes=s,t;case km:return Zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Um:a=10;break e;case Fm:a=9;break e;case ef:a=11;break e;case tf:a=14;break e;case Bi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=An(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Zl(t,e,n,i){return t=An(22,t,i,e),t.elementType=km,t.lanes=n,t.stateNode={isHidden:!1},t}function kc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Oc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,i,r,s,a,o,l){return t=new Vx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function Gx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Cv(t){if(!t)return ir;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return Cg(t,n,e)}return e}function bv(t,e,n,i,r,s,a,o,l){return t=kf(n,i,!0,t,r,s,a,o,l),t.context=Cv(null),n=t.current,i=Zt(),r=Qi(n),s=xi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Va(t,r,i),on(t,i),t}function Ql(t,e,n,i){var r=e.current,s=Zt(),a=Qi(r);return n=Cv(n),e.context===null?e.context=n:e.pendingContext=n,e=xi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,a),t!==null&&(Gn(t,r,a,s),Zo(t,r,a)),a}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){hp(t,e),(t=t.alternate)&&hp(t,e)}function Wx(){return null}var Pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}Jl.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Ql(t,e,null,null)};Jl.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Ql(null,t,null,null)}),e[Si]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&cg(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(a);s.call(c)}}var a=bv(e,i,t,0,null,!1,!1,"",pp);return t._reactRootContainer=a,t[Si]=a.current,Pa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Nl(l);o.call(c)}}var l=kf(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=l,t[Si]=l.current,Pa(t.nodeType===8?t.parentNode:t),Fr(function(){Ql(e,l,n,i)}),l}function tc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Nl(a);o.call(l)}}Ql(e,a,t,r)}else a=jx(n,e,t,r,i);return Nl(a)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(sf(e,n|1),on(e,Et()),!(Ke&6)&&(Us=Et()+500,or()))}break;case 13:Fr(function(){var i=Mi(t,1);if(i!==null){var r=Zt();Gn(i,t,1,r)}}),Of(t,1)}};af=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=Zt();Gn(e,t,134217728,n)}Of(t,134217728)}};ag=function(t){if(t.tag===13){var e=Qi(t),n=Mi(t,e);if(n!==null){var i=Zt();Gn(n,t,e,i)}Of(t,e)}};og=function(){return st};lg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Lu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=jl(i);if(!r)throw Error(se(90));Bm(i),wu(i,r)}}}break;case"textarea":Hm(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};qm=Nf;$m=Fr;var Xx={usingClientEntryPoint:!1,Events:[Wa,fs,jl,Xm,Ym,Nf]},Js={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yx={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Hl=xo.inject(Yx),Jn=xo}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xx;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(se(200));return Gx(t,e,null,n)};xn.createRoot=function(t,e){if(!zf(t))throw Error(se(299));var n=!1,i="",r=Pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Bf(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Fr(t)};xn.hydrate=function(t,e,n){if(!ec(e))throw Error(se(200));return tc(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Pv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=bv(e,null,t,1,n??null,r,!1,s,a),t[Si]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Jl(e)};xn.render=function(t,e,n){if(!ec(e))throw Error(se(200));return tc(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!ec(t))throw Error(se(40));return t._reactRootContainer?(Fr(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};xn.unstable_batchedUpdates=Nf;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ec(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return tc(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Lm.exports=xn;var qx=Lm.exports,Dv,mp=qx;Dv=mp.createRoot,mp.hydrateRoot;const Nv="https://docs.google.com/spreadsheets/d/1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU/edit?usp=sharing",$x="Daily Log",Kx="Replies",Zx="Payments",Iv="https://docs.google.com/spreadsheets/d/10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo/edit?usp=sharing",Qx=["Lead Tracker","Leads","LEAD TRACKER","Sheet1",""];function Bc(t){const e=String(Nv).match(/\/d\/([\w-]+)/);return e?"https://docs.google.com/spreadsheets/d/"+e[1]+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(t):""}function Jx(){const t=String(Iv).match(/\/d\/([\w-]+)/);return t?Qx.map(e=>"https://docs.google.com/spreadsheets/d/"+t[1]+"/gviz/tq?tqx=out:csv"+(e?"&sheet="+encodeURIComponent(e):"")):[]}const ey="auto",Xa=.04,Ya=.3,ty=5*60*1e3,gp=.075,ft={replyRate:[.03,.06],bookingRate:[.25,.4],showRate:[.6,.8],closeRate:[.15,.3]},ut=864e5,zc={goal:3e4,deal:1e4,aov:5e3,showRate:.7,closeRate:.175,capacity:100,sendDays:26},ti=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function br(t){if(t==null)return 0;const e=parseFloat(String(t).replace(/[€$£,\s]/g,""));return Number.isFinite(e)?e:0}function yo(t){return String(t||"").trim().toLowerCase().startsWith("y")}function it(t,e){return e>0?t/e:0}function Ce(t){return Math.round(t).toLocaleString("en-IE")}function En(t,e=1){return t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function vt(t,e=0){return"€"+t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function gi(t){return t>=1e3?"€"+(t/1e3).toFixed(1)+"k":vt(t)}function qe(t,e=1){return(t*100).toLocaleString("en-IE",{minimumFractionDigits:0,maximumFractionDigits:e})+"%"}function pt(t){const e=n=>String(n).padStart(2,"0");return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())}function wi(t){return t.toLocaleDateString("en-IE",{day:"numeric",month:"short"})}function ny(t,e){const n=t.reduce((d,h)=>d+h.initials,0),i=t.reduce((d,h)=>d+h.followUps,0),r=t.reduce((d,h)=>d+h.comments,0),s=e.length,a=e.filter(d=>d.booked).length,o=e.filter(d=>d.showed).length,l=e.filter(d=>d.closed).length,c=e.reduce((d,h)=>d+h.dealValue,0),u=e.reduce((d,h)=>d+h.cash,0);return{initials:n,followUps:i,comments:r,touches:n+i+r,commentCoverage:it(r,n),replies:s,booked:a,shown:o,closed:l,replyRate:it(s,n),bookingRate:it(a,s),showRate:it(o,a),closeRate:it(l,o),dealValue:c,cash:u,outstanding:c-u,avgDeal:it(c,l),cashPerInitial:it(u,n)}}function iy(t){return t>=0&&t<=3?1:0}function Hf(t,e,n){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Map(t.map(R=>[pt(R.date),R])),a=t.slice(-7),o=a.length?a.reduce((R,P)=>R+P.initials,0)/a.length:0,l=it(o,n);let c=0,u=0;for(let R=13;R>=0;R--){const P=new Date(r.getTime()-R*ut);if(P.getDay()===0)continue;const b=s.get(pt(P));b&&(u+=b.followUps);for(const w of t){const _=Math.round((P-w.date)/ut);_>=0&&(c+=w.initials*iy(_))}}const d=c>0?u/c:null;let h=0,p=0;const x=t.length?t[0].date:null;for(let R=7;R>=1;R--){const P=new Date(r.getTime()-R*ut);P.getDay()!==0&&(x&&P<x||(h++,s.has(pt(P))&&p++))}const M=e.filter(R=>!R.booked&&!R.showed&&!R.closed&&!R.dead&&String(R.status||"").toLowerCase()!=="talking"&&(r-R.date)/ut>7).length,m=new Date(r.getTime()-13*ut),f=t.filter(R=>R.date>=m).reduce((R,P)=>R+P.initials,0),v=e.filter(R=>R.date>=m).length,g=t.find(R=>R.comments>0);let E=null;if(g){const R=new Date(Math.max(g.date.getTime(),m.getTime())),P=t.filter(_=>_.date>=R),b=P.reduce((_,y)=>_+y.initials,0),w=P.reduce((_,y)=>_+y.comments,0);E=b>0?w/b:null}return{today:r,pace:o,paceRatio:l,fuRatio:d,owed:c,sent:u,expectDays:h,loggedDays:p,stale:M,init14:f,replies14:v,replyRate14:it(v,f),commentRatio:E}}function ry(t,e,n){const i=Hf(t,e,n);return[{name:"Initials pace",zone:t.length?i.paceRatio>=.9?"g":i.paceRatio>=.6?"a":"r":"n",detail:Ce(i.pace)+" a day vs "+Ce(n)},{name:"Follow up ladder",zone:i.fuRatio===null?"n":i.fuRatio>=.85?"g":i.fuRatio>=.55?"a":"r",detail:i.fuRatio===null?"waiting on logged days":"about "+qe(Math.min(i.fuRatio,1.5),0)+" of ladder cadence, 14 days"},{name:"Comment coverage",zone:i.commentRatio===null?"n":i.commentRatio>=.85?"g":i.commentRatio>=.55?"a":"r",detail:i.commentRatio===null?"no comments logged yet":"about "+qe(Math.min(i.commentRatio,1.5),0)+" of initials get a comment"},{name:"Daily logging",zone:t.length?i.loggedDays>=i.expectDays?"g":i.loggedDays>=i.expectDays-2?"a":"r":"n",detail:i.loggedDays+" of "+i.expectDays+" days logged, last week"},{name:"Reply handling",zone:e.length?i.stale===0?"g":i.stale<=2?"a":"r":"n",detail:i.stale===0?"nothing waiting past 7 days":i.stale+" unbooked past 7 days"}]}function sy(t,e,n,i){const r=Hf(t,e,n),s=[],a=[],o=(u,d,h,p)=>s.push({sev:u,title:d,evidence:h,lever:p});t.length&&r.expectDays>0&&r.loggedDays<r.expectDays-1&&o("r","Fix the data first","Only "+r.loggedDays+" of the last "+r.expectDays+" days have an EOD row. Every other number here is guesswork until logging is daily.","EOD form every working day, no exceptions."),t.length&&r.paceRatio<.9&&o(r.paceRatio<.6?"r":"a","Volume below capacity","Initials running "+Ce(r.pace)+" a day against the "+Ce(n)+" target.","Protect the morning sending block. Initials go out while the US sleeps, per the system overview.");const l=r.fuRatio!==null&&r.fuRatio<.85;l&&o(r.fuRatio<.55?"r":"a","The ladder is being cut short","Follow ups are at about "+qe(r.fuRatio,0)+" of what the ladder messages owe the last 14 days of leads. Most replies come from the later touches, so this suppresses reply rate before the opener is to blame.","Finish the full ladder on every open lead before sourcing new ones. Catch up the recent cohorts first.");const c=r.commentRatio!==null&&r.commentRatio<.85;return c&&o(r.commentRatio<.55?"r":"a","The comment step is being skipped","Only about "+qe(r.commentRatio,0)+" of initials are getting a comment. These creators rarely see the initial DM, the comment on their latest reel is what earns the look, so low comments and a low reply rate are the same problem.","Comment on the latest reel 3 hours after every initial that got no reply. Rotate the comment bank, never repeat one on the same account."),r.init14>=150?(!l&&!c&&r.commentRatio!==null&&r.replyRate14<ft.replyRate[0]&&o("a","First touch underperforming","Ladder and comments are healthy but the 14 day reply rate is "+qe(r.replyRate14)+", under the "+qe(ft.replyRate[0],0)+" floor on "+Ce(r.init14)+" sends.","Rotate the opener, check account health and deliverability, tighten sourcing fit."),r.commentRatio===null&&a.push("comment coverage and the messaging verdict (no comments logged yet)")):a.push("messaging verdict (needs 150 initials in 14 days, at "+Ce(r.init14)+")"),i.replies>=10?i.bookingRate<ft.bookingRate[0]&&o("a","Replies not turning into booked calls","Booking rate "+qe(i.bookingRate)+" against a "+qe(ft.bookingRate[0],0)+" floor, on "+Ce(i.replies)+" replies.","Review the reply-to-call handling. Tier 1 first every day, ask for the call in about half the messages."):a.push("booking verdict (needs 10 replies, at "+Ce(i.replies)+")"),r.stale>0&&o(r.stale>2?"r":"a","Tier 1 leads going stale",r.stale+(r.stale===1?" reply is":" replies are")+" sitting unbooked past 7 days. Tier 1 never slips.","Work these today before any new outreach."),i.booked>=5?i.showRate<ft.showRate[0]&&o("a","Booked calls not showing","Show rate "+qe(i.showRate)+" against a "+qe(ft.showRate[0],0)+" floor.","Confirm the day before and the hour before. Calendar invite plus a personal message."):a.push("show verdict (needs 5 booked, at "+Ce(i.booked)+")"),i.shown>=5?i.closeRate<ft.closeRate[0]&&o("a","Shows not closing","Close rate "+qe(i.closeRate)+" against a "+qe(ft.closeRate[0],0)+" floor.","Review call recordings and the offer framing. This is a sales call problem, not an outreach problem."):a.push("close verdict (needs 5 shows, at "+Ce(i.shown)+")"),{findings:s,waiting:a}}function ay(t,e,n,i,r){const s=Hf(t,e,r.capacity),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=s.pace,c=i.replyRate>0,u=c?i.replyRate:Xa,d=i.bookingRate>0?i.bookingRate:Ya,h=r.showRate,p=r.closeRate,x=r.aov,M=r.sendDays,m=u*d*h*p*x,f=[];l<r.capacity&&f.push({name:"Volume back to "+Ce(r.capacity)+" a day",per:"mo",value:(r.capacity-l)*M*m,detail:Ce(l)+" a day now. Every account sending.",basis:c?"measured":"assumed"}),u<ft.replyRate[0]&&f.push({name:"Reply rate to "+qe(ft.replyRate[0],0),per:"mo",value:l*M*(ft.replyRate[0]-u)*d*h*p*x,detail:qe(u)+" now. Deliverability, then opener, then sourcing.",basis:"measured"}),i.replies>=5&&i.bookingRate<ft.bookingRate[0]&&f.push({name:"Booking rate to "+qe(ft.bookingRate[0],0),per:"mo",value:l*M*u*(ft.bookingRate[0]-d)*h*p*x,detail:qe(d)+" now. Speed to reply, route to the call.",basis:i.replies>=10?"measured":"hypothesis"});const v=l*M*u*d*h*p;v>0&&f.push({name:"Cash per close 5k to 7.5k",per:"mo",value:v*2500,detail:"Bigger first payment on the same deals. Scales with every fix above.",basis:"assumed"}),s.stale>0&&f.push({name:"Book the stale Tier 1 replies",per:"one time",value:s.stale*d*h*p*x,detail:s.stale+" replies past 7 days unbooked.",basis:"hypothesis"});const g=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied"&&E.nextDue<o).length;return g>0&&f.push({name:"Clear the overdue queue",per:"one time",value:g*u*d*h*p*x,detail:g+" leads overdue in the lead sheet.",basis:"hypothesis"}),f.filter(E=>E.value>.5).sort((E,R)=>R.value-E.value).slice(0,6)}function oy(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ut<=6,s=l=>{const c=(i-l)/ut;return c>=7&&c<=13},a=(l,c)=>c>0?l/c-1:null,o=(l,c,u)=>l.filter(d=>c(d.date)).reduce((d,h)=>d+u(h),0);return{initials:a(o(t,r,l=>l.initials),o(t,s,l=>l.initials)),followUps:a(o(t,r,l=>l.followUps),o(t,s,l=>l.followUps)),comments:a(o(t,r,l=>l.comments),o(t,s,l=>l.comments)),replies:a(o(e,r,()=>1),o(e,s,()=>1)),booked:a(o(e,r,l=>l.booked?1:0),o(e,s,l=>l.booked?1:0)),cash:a(o(e,r,l=>l.cash),o(e,s,l=>l.cash))}}function Uv(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ut<=6,s=l=>{const c=(i-l)/ut;return c>=7&&c<=13},a=(l,c,u)=>l.filter(d=>c(d.date)).reduce((d,h)=>d+u(h),0),o=(l,c)=>({cur:a(l,r,c),prev:a(l,s,c)});return{initials:o(t,l=>l.initials),followUps:o(t,l=>l.followUps),comments:o(t,l=>l.comments),replies:o(e,()=>1),booked:o(e,l=>l.booked?1:0),cash:o(e,l=>l.cash)}}function ly(t,e){const n=new Map(t.map(c=>[pt(c.date),c])),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate());let s=n.has(pt(r))?1:0;for(let c=1;c<400;c++){const u=new Date(r.getTime()-c*ut);if(u.getDay()!==0)if(n.has(pt(u)))s++;else break}let a=0,o=0;if(t.length)for(let c=t[0].date.getTime();c<=r.getTime();c+=ut){const u=new Date(c);u.getDay()!==0&&(n.has(pt(u))?(o++,a=Math.max(a,o)):o=0)}let l=0;for(let c=t.length-1;c>=0&&t[c].initials>=e*.9;c--)l++;return{cur:s,best:a,vol:l}}function Ba(t){if(t.name)return t.name;const e=String(t.handle||"").match(/instagram\.com\/([^/?#]+)/i);return e?"@"+e[1]:t.handle||"unknown"}function cy(t,e){const n=[],i=(a,o)=>{const l=e.find(a);l&&n.push({date:l.date,label:o,who:Ba(l)})};if(e.length&&n.push({date:e[0].date,label:"First reply",who:Ba(e[0])}),i(a=>a.booked,"First call booked"),i(a=>a.showed,"First call shown"),i(a=>a.closed,"First client closed"),t.length){const a=t.reduce((o,l)=>l.initials>o.initials?l:o);a.initials>0&&n.push({date:a.date,label:"Biggest day, "+Ce(a.initials)+" initials"})}const r=new Map;if(e.forEach(a=>{a.cash>0&&r.set(pt(a.date),(r.get(pt(a.date))||0)+a.cash)}),r.size){const[a,o]=[...r.entries()].sort((d,h)=>h[1]-d[1])[0],[l,c,u]=a.split("-").map(Number);n.push({date:new Date(l,c-1,u),label:"Biggest cash day, €"+Math.round(o).toLocaleString("en-IE")})}let s=0;for(const a of t){const o=s;s+=a.initials;for(const l of[500,1e3,2500,5e3,1e4,25e3])o<l&&s>=l&&n.push({date:a.date,label:Ce(l)+" initials sent, all time"})}return n.sort((a,o)=>o.date-a.date),n.slice(0,8)}function uy(t){const e=String(t||"").match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);if(!e)return null;let n=+e[1];const i=+e[2],r=e[3]?e[3].toLowerCase():null;return r==="pm"&&n<12&&(n+=12),r==="am"&&n===12&&(n=0),n>23||i>59?null:n+i/60}const Hc=[{label:"Morning",range:"06 to 12",test:t=>t>=6&&t<12},{label:"Afternoon",range:"12 to 17",test:t=>t>=12&&t<17},{label:"Evening",range:"17 to 22",test:t=>t>=17&&t<22},{label:"Late",range:"22 to 06",test:t=>t>=22||t<6}];function dy(t){let e=0,n=0;for(const o of t){const l=o/24*2*Math.PI;e+=Math.cos(l),n+=Math.sin(l)}let i=Math.atan2(n,e);i<0&&(i+=2*Math.PI);const r=i/(2*Math.PI)*24,s=Math.floor(r),a=Math.round((r-s)*60);return String(s%24).padStart(2,"0")+":"+String(a%60).padStart(2,"0")}function Vf(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),1),r=t.reduce((a,o)=>a+o.cash,0);if(!e||!e.length)return{source:"replies",all:r,mtd:t.filter(a=>a.date>=i).reduce((a,o)=>a+o.cash,0)};const s=e.reduce((a,o)=>a+o.amount,0);return{source:"payments",all:Math.max(s,r),mtd:e.filter(a=>a.date>=i).reduce((a,o)=>a+o.amount,0),mismatch:Math.abs(s-r)>1?{payAll:s,repliesAll:r}:null}}function fy(t){const e=t.filter(n=>n.dateBooked&&n.date&&n.dateBooked>=n.date).map(n=>Math.round((n.dateBooked-n.date)/ut));return e.length?(e.sort((n,i)=>n-i),{n:e.length,median:e[Math.floor(e.length/2)],within24h:e.filter(n=>n<=1).length/e.length}):null}function hy(t){const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.filter(i=>i.callDate&&!i.closed&&!i.dead&&i.callDate>=n&&!i.showed).sort((i,r)=>i.callDate-r.callDate).slice(0,8)}function py(t){const e=t.filter(i=>i.dead),n=new Map;return e.forEach(i=>{const r=i.deadReason||"Unspecified";n.set(r,(n.get(r)||0)+1)}),{total:e.length,reasons:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function my(t){const e=t.filter(i=>i.account);if(!e.length)return null;const n=new Map;return e.forEach(i=>n.set(i.account,(n.get(i.account)||0)+1)),{tagged:e.length,total:t.length,accounts:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function gy(t,e,n,i,r){const s=new Date,a=new Date(s.getFullYear(),s.getMonth(),1),o=new Date(s.getFullYear(),s.getMonth(),s.getDate()),l=new Date(s.getFullYear(),s.getMonth()+1,0),c=r??e.filter(f=>f.date>=a).reduce((f,v)=>f+v.cash,0),u=n.replyRate>0?n.replyRate:Xa,d=n.bookingRate>0?n.bookingRate:Ya;let h=0;e.forEach(f=>{f.closed||f.dead||(f.showed?h+=i.closeRate*i.aov:f.booked?h+=i.showRate*i.closeRate*i.aov:h+=d*i.showRate*i.closeRate*i.aov)});let p=0;for(let f=o.getTime()+ut;f<=l.getTime();f+=ut)new Date(f).getDay()!==0&&p++;const x=t.slice(-7),M=x.length?x.reduce((f,v)=>f+v.initials,0)/x.length:0,m=p*M*u*d*i.showRate*i.closeRate*i.aov*.35;return{cashMTD:c,pipe:h,future:m,remDays:p,pace7:M,mid:c+h+m}}function Fv(t,e,n,i,r){const s=gy(t,e,n,i,r),a=n.replyRate>0?n.replyRate:Xa,o=n.bookingRate>0?n.bookingRate:Ya,l=e.filter(M=>!M.closed&&!M.dead);let u=(1+n.initials*7+n.replies*131+Math.round(n.cash)*17)%2147483647;u<=0&&(u+=2147483646);const d=()=>(u=u*16807%2147483647)/2147483647,h=500,p=[];for(let M=0;M<h;M++){let m=s.cashMTD;for(const E of l){let R;E.showed?R=i.closeRate:E.booked?R=i.showRate*i.closeRate:R=o*i.showRate*i.closeRate,d()<R&&(m+=i.aov)}const f=Math.round(s.remDays*s.pace7);let v=0;for(let E=0;E<Math.min(f,4e3);E++)d()<a&&v++;const g=o*i.showRate*i.closeRate*.35;for(let E=0;E<v;E++)d()<g&&(m+=i.aov);p.push(m)}p.sort((M,m)=>M-m);const x=M=>p[Math.min(h-1,Math.floor(M*h))];return{p10:x(.1),p50:x(.5),p90:x(.9),mid:s.mid,cashMTD:s.cashMTD}}function vy(t,e,n,i){const r=[],s=new Date,a=new Date(s.getFullYear(),s.getMonth(),s.getDate());if(!t.length)return r;const o=new Map(t.map(E=>[pt(E.date),E])),l=new Date(a.getTime()-ut);l.getDay()!==0&&t[0].date<l&&!o.has(pt(l))&&r.push({sev:"r",text:"No EOD row for yesterday"});const c=t[t.length-1],u=t.slice(-15,-1);if(u.length>=5){const E=u.reduce((R,P)=>R+P.initials,0)/u.length;E>10&&c.initials<E*.5?r.push({sev:"r",text:"Volume drop: "+Ce(c.initials)+" initials vs "+Ce(E)+" avg. Block?"}):E>10&&c.initials>E*1.6&&r.push({sev:"g",text:"Volume surge: "+Ce(c.initials)+" initials, "+Ce((c.initials/E-1)*100)+"% over trend"})}const d=t.slice(-3),h=d.reduce((E,R)=>E+R.initials,0),p=it(e.length,t.reduce((E,R)=>E+R.initials,0));if(h>=120&&p>0){const E=d[0].date,R=e.filter(b=>b.date>=E).length,P=h*p;P>=3&&R===0&&r.push({sev:"r",text:"Reply drought: 0 replies on last "+Ce(h)+" sends, about "+Ce(P)+" expected. Check account health."})}const x=e.filter(E=>!E.booked&&!E.closed&&!E.dead&&(a-E.date)/ut<=1).length;x>0&&r.push({sev:"a",text:x+(x===1?" live reply":" live replies")+" in the last 24h. Work them now"});const M=e.filter(E=>!E.booked&&!E.showed&&!E.closed&&!E.dead&&String(E.status||"").toLowerCase()!=="talking"&&(a-E.date)/ut>7).length;M>0&&r.push({sev:"a",text:M+" unbooked past 7 days"});const m=e.filter(E=>E.callDate&&!E.closed&&!E.dead&&!E.showed&&E.callDate>=a).length;m>0&&r.push({sev:"g",text:m+(m===1?" call":" calls")+" on the books"}),t.some(E=>E.comments>0)&&c.initials>10&&c.comments<c.initials*.4&&r.push({sev:"a",text:"Comments at "+Ce(it(c.comments,c.initials)*100)+"% of initials on the latest day"});const v=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied");if(v.length>5){const E=v.filter(R=>R.nextDue<a).length;E>v.length*.8&&r.push({sev:"a",text:"Lead sheet: "+E+" of "+v.length+" overdue. Sheet stale or queue slipping"})}const g=e.filter(E=>(a-E.date)/ut<=6).reduce((E,R)=>E+R.cash,0);return g>0&&r.push({sev:"g",text:"€"+Math.round(g).toLocaleString("en-IE")+" collected this week"}),r.slice(0,6)}var kv={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(M0,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(w,_){var y=(_=_||{}).dynamicTyping||!1;if(b(y)&&(_.dynamicTypingFunction=y,y={}),_.dynamicTyping=y,_.transform=!!b(_.transform)&&_.transform,_.worker&&l.WORKERS_SUPPORTED){var A=function(){if(!l.WORKERS_SUPPORTED)return!1;var N=(k=i.URL||i.webkitURL||null,F=n.toString(),l.BLOB_URL||(l.BLOB_URL=k.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",F,")();"],{type:"text/javascript"})))),G=new i.Worker(N),k,F;return G.onmessage=v,G.id=o++,a[G.id]=G}();return A.userStep=_.step,A.userChunk=_.chunk,A.userComplete=_.complete,A.userError=_.error,_.step=b(_.step),_.chunk=b(_.chunk),_.complete=b(_.complete),_.error=b(_.error),delete _.worker,void A.postMessage({input:w,config:_,workerId:A.id})}var L=null;return l.NODE_STREAM_INPUT,typeof w=="string"?(w=function(N){return N.charCodeAt(0)===65279?N.slice(1):N}(w),L=_.download?new d(_):new p(_)):w.readable===!0&&b(w.read)&&b(w.on)?L=new x(_):(i.File&&w instanceof File||w instanceof Object)&&(L=new h(_)),L.stream(w)},unparse:function(w,_){var y=!1,A=!0,L=",",N=`\r
`,G='"',k=G+G,F=!1,z=null,U=!1;(function(){if(typeof _=="object"){if(typeof _.delimiter!="string"||l.BAD_DELIMITERS.filter(function(K){return _.delimiter.indexOf(K)!==-1}).length||(L=_.delimiter),(typeof _.quotes=="boolean"||typeof _.quotes=="function"||Array.isArray(_.quotes))&&(y=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(F=_.skipEmptyLines),typeof _.newline=="string"&&(N=_.newline),typeof _.quoteChar=="string"&&(G=_.quoteChar),typeof _.header=="boolean"&&(A=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");z=_.columns}_.escapeChar!==void 0&&(k=_.escapeChar+G),(typeof _.escapeFormulae=="boolean"||_.escapeFormulae instanceof RegExp)&&(U=_.escapeFormulae instanceof RegExp?_.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var W=new RegExp(m(G),"g");if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return Z(null,w,F);if(typeof w[0]=="object")return Z(z||Object.keys(w[0]),w,F)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||z),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),Z(w.fields||[],w.data||[],F);throw new Error("Unable to serialize unrecognized input");function Z(K,Se,Y){var J="";typeof K=="string"&&(K=JSON.parse(K)),typeof Se=="string"&&(Se=JSON.parse(Se));var le=Array.isArray(K)&&0<K.length,oe=!Array.isArray(Se[0]);if(le&&A){for(var Ee=0;Ee<K.length;Ee++)0<Ee&&(J+=L),J+=ne(K[Ee],Ee);0<Se.length&&(J+=N)}for(var ae=0;ae<Se.length;ae++){var xe=le?K.length:Se[ae].length,Be=!1,I=le?Object.keys(Se[ae]).length===0:Se[ae].length===0;if(Y&&!le&&(Be=Y==="greedy"?Se[ae].join("").trim()==="":Se[ae].length===1&&Se[ae][0].length===0),Y==="greedy"&&le){for(var Ue=[],ze=0;ze<xe;ze++){var Le=oe?K[ze]:ze;Ue.push(Se[ae][Le])}Be=Ue.join("").trim()===""}if(!Be){for(var fe=0;fe<xe;fe++){0<fe&&!I&&(J+=L);var Ze=le&&oe?K[fe]:fe;J+=ne(Se[ae][Ze],fe)}ae<Se.length-1&&(!Y||0<xe&&!I)&&(J+=N)}}return J}function ne(K,Se){if(K==null)return"";if(K.constructor===Date)return JSON.stringify(K).slice(1,25);var Y=!1;U&&typeof K=="string"&&U.test(K)&&(K="'"+K,Y=!0);var J=K.toString().replace(W,k);return(Y=Y||y===!0||typeof y=="function"&&y(K,Se)||Array.isArray(y)&&y[Se]||function(le,oe){for(var Ee=0;Ee<oe.length;Ee++)if(-1<le.indexOf(oe[Ee]))return!0;return!1}(J,l.BAD_DELIMITERS)||-1<J.indexOf(L)||J.charAt(0)===" "||J.charAt(J.length-1)===" ")?G+J+G:J}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=f,l.ParserHandle=M,l.NetworkStreamer=d,l.FileStreamer=h,l.StringStreamer=p,l.ReadableStreamStreamer=x,i.jQuery){var c=i.jQuery;c.fn.parse=function(w){var _=w.config||{},y=[];return this.each(function(N){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var G=0;G<this.files.length;G++)y.push({file:this.files[G],inputElem:this,instanceConfig:c.extend({},_)})}),A(),this;function A(){if(y.length!==0){var N,G,k,F,z=y[0];if(b(w.before)){var U=w.before(z.file,z.inputElem);if(typeof U=="object"){if(U.action==="abort")return N="AbortError",G=z.file,k=z.inputElem,F=U.reason,void(b(w.error)&&w.error({name:N},G,k,F));if(U.action==="skip")return void L();typeof U.config=="object"&&(z.instanceConfig=c.extend(z.instanceConfig,U.config))}else if(U==="skip")return void L()}var W=z.instanceConfig.complete;z.instanceConfig.complete=function(Z){b(W)&&W(Z,z.file,z.inputElem),L()},l.parse(z.file,z.instanceConfig)}else b(w.complete)&&w.complete()}function L(){y.splice(0,1),A()}}}function u(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var y=R(_);y.chunkSize=parseInt(y.chunkSize),_.step||_.chunk||(y.chunkSize=null),this._handle=new M(y),(this._handle.streamer=this)._config=y}).call(this,w),this.parseChunk=function(_,y){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(_);A!==void 0&&(_=A)}this.isFirstChunk=!1,this._halted=!1;var L=this._partialLine+_;this._partialLine="";var N=this._handle.parse(L,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var G=N.meta.cursor;this._finished||(this._partialLine=L.substring(G-this._baseIndex),this._baseIndex=G),N&&N.data&&(this._rowCount+=N.data.length);var k=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:N,workerId:l.WORKER_ID,finished:k});else if(b(this._config.chunk)&&!y){if(this._config.chunk(N,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);N=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(N.data),this._completeResults.errors=this._completeResults.errors.concat(N.errors),this._completeResults.meta=N.meta),this._completed||!k||!b(this._config.complete)||N&&N.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),k||N&&N.meta.paused||this._nextChunk(),N}this._halted=!0},this._sendError=function(_){b(this._config.error)?this._config.error(_):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:_,finished:!1})}}function d(w){var _;(w=w||{}).chunkSize||(w.chunkSize=l.RemoteChunkSize),u.call(this,w),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(y){this._input=y,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),r||(_.onload=P(this._chunkLoaded,this),_.onerror=P(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var y=this._config.downloadRequestHeaders;for(var A in y)_.setRequestHeader(A,y[A])}if(this._config.chunkSize){var L=this._start+this._config.chunkSize-1;_.setRequestHeader("Range","bytes="+this._start+"-"+L)}try{_.send(this._config.downloadRequestBody)}catch(N){this._chunkError(N.message)}r&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:_.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(y){var A=y.getResponseHeader("Content-Range");return A===null?-1:parseInt(A.substring(A.lastIndexOf("/")+1))}(_),this.parseChunk(_.responseText)))},this._chunkError=function(y){var A=_.statusText||y;this._sendError(new Error(A))}}function h(w){var _,y;(w=w||{}).chunkSize||(w.chunkSize=l.LocalChunkSize),u.call(this,w);var A=typeof FileReader<"u";this.stream=function(L){this._input=L,y=L.slice||L.webkitSlice||L.mozSlice,A?((_=new FileReader).onload=P(this._chunkLoaded,this),_.onerror=P(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var L=this._input;if(this._config.chunkSize){var N=Math.min(this._start+this._config.chunkSize,this._input.size);L=y.call(L,this._start,N)}var G=_.readAsText(L,this._config.encoding);A||this._chunkLoaded({target:{result:G}})},this._chunkLoaded=function(L){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(L.target.result)},this._chunkError=function(){this._sendError(_.error)}}function p(w){var _;u.call(this,w=w||{}),this.stream=function(y){return _=y,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var y,A=this._config.chunkSize;return A?(y=_.substring(0,A),_=_.substring(A)):(y=_,_=""),this._finished=!_,this.parseChunk(y)}}}function x(w){u.call(this,w=w||{});var _=[],y=!0,A=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(L){this._input=L,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):y=!0},this._streamData=P(function(L){try{_.push(typeof L=="string"?L:L.toString(this._config.encoding)),y&&(y=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(N){this._streamError(N)}},this),this._streamError=P(function(L){this._streamCleanUp(),this._sendError(L)},this),this._streamEnd=P(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function M(w){var _,y,A,L=Math.pow(2,53),N=-L,G=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,k=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,F=this,z=0,U=0,W=!1,Z=!1,ne=[],K={data:[],errors:[],meta:{}};if(b(w.step)){var Se=w.step;w.step=function(ae){if(K=ae,le())J();else{if(J(),K.data.length===0)return;z+=ae.data.length,w.preview&&z>w.preview?y.abort():(K.data=K.data[0],Se(K,F))}}}function Y(ae){return w.skipEmptyLines==="greedy"?ae.join("").trim()==="":ae.length===1&&ae[0].length===0}function J(){return K&&A&&(Ee("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),A=!1),w.skipEmptyLines&&(K.data=K.data.filter(function(ae){return!Y(ae)})),le()&&function(){if(!K)return;function ae(Be,I){b(w.transformHeader)&&(Be=w.transformHeader(Be,I)),ne.push(Be)}if(Array.isArray(K.data[0])){for(var xe=0;le()&&xe<K.data.length;xe++)K.data[xe].forEach(ae);K.data.splice(0,1)}else K.data.forEach(ae)}(),function(){if(!K||!w.header&&!w.dynamicTyping&&!w.transform)return K;function ae(Be,I){var Ue,ze=w.header?{}:[];for(Ue=0;Ue<Be.length;Ue++){var Le=Ue,fe=Be[Ue];w.header&&(Le=Ue>=ne.length?"__parsed_extra":ne[Ue]),w.transform&&(fe=w.transform(fe,Le)),fe=oe(Le,fe),Le==="__parsed_extra"?(ze[Le]=ze[Le]||[],ze[Le].push(fe)):ze[Le]=fe}return w.header&&(Ue>ne.length?Ee("FieldMismatch","TooManyFields","Too many fields: expected "+ne.length+" fields but parsed "+Ue,U+I):Ue<ne.length&&Ee("FieldMismatch","TooFewFields","Too few fields: expected "+ne.length+" fields but parsed "+Ue,U+I)),ze}var xe=1;return!K.data.length||Array.isArray(K.data[0])?(K.data=K.data.map(ae),xe=K.data.length):K.data=ae(K.data,0),w.header&&K.meta&&(K.meta.fields=ne),U+=xe,K}()}function le(){return w.header&&ne.length===0}function oe(ae,xe){return Be=ae,w.dynamicTypingFunction&&w.dynamicTyping[Be]===void 0&&(w.dynamicTyping[Be]=w.dynamicTypingFunction(Be)),(w.dynamicTyping[Be]||w.dynamicTyping)===!0?xe==="true"||xe==="TRUE"||xe!=="false"&&xe!=="FALSE"&&(function(I){if(G.test(I)){var Ue=parseFloat(I);if(N<Ue&&Ue<L)return!0}return!1}(xe)?parseFloat(xe):k.test(xe)?new Date(xe):xe===""?null:xe):xe;var Be}function Ee(ae,xe,Be,I){var Ue={type:ae,code:xe,message:Be};I!==void 0&&(Ue.row=I),K.errors.push(Ue)}this.parse=function(ae,xe,Be){var I=w.quoteChar||'"';if(w.newline||(w.newline=function(Le,fe){Le=Le.substring(0,1048576);var Ze=new RegExp(m(fe)+"([^]*?)"+m(fe),"gm"),Ae=(Le=Le.replace(Ze,"")).split("\r"),be=Le.split(`
`),D=1<be.length&&be[0].length<Ae[0].length;if(Ae.length===1||D)return`
`;for(var T=0,V=0;V<Ae.length;V++)Ae[V][0]===`
`&&T++;return T>=Ae.length/2?`\r
`:"\r"}(ae,I)),A=!1,w.delimiter)b(w.delimiter)&&(w.delimiter=w.delimiter(ae),K.meta.delimiter=w.delimiter);else{var Ue=function(Le,fe,Ze,Ae,be){var D,T,V,Q;be=be||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ie=0;ie<be.length;ie++){var $=be[ie],Te=0,de=0,ve=0;V=void 0;for(var Ie=new f({comments:Ae,delimiter:$,newline:fe,preview:10}).parse(Le),re=0;re<Ie.data.length;re++)if(Ze&&Y(Ie.data[re]))ve++;else{var ge=Ie.data[re].length;de+=ge,V!==void 0?0<ge&&(Te+=Math.abs(ge-V),V=ge):V=ge}0<Ie.data.length&&(de/=Ie.data.length-ve),(T===void 0||Te<=T)&&(Q===void 0||Q<de)&&1.99<de&&(T=Te,D=$,Q=de)}return{successful:!!(w.delimiter=D),bestDelimiter:D}}(ae,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess);Ue.successful?w.delimiter=Ue.bestDelimiter:(A=!0,w.delimiter=l.DefaultDelimiter),K.meta.delimiter=w.delimiter}var ze=R(w);return w.preview&&w.header&&ze.preview++,_=ae,y=new f(ze),K=y.parse(_,xe,Be),J(),W?{meta:{paused:!0}}:K||{meta:{paused:!1}}},this.paused=function(){return W},this.pause=function(){W=!0,y.abort(),_=b(w.chunk)?"":_.substring(y.getCharIndex())},this.resume=function(){F.streamer._halted?(W=!1,F.streamer.parseChunk(_,!0)):setTimeout(F.resume,3)},this.aborted=function(){return Z},this.abort=function(){Z=!0,y.abort(),K.meta.aborted=!0,b(w.complete)&&w.complete(K),_=""}}function m(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function f(w){var _,y=(w=w||{}).delimiter,A=w.newline,L=w.comments,N=w.step,G=w.preview,k=w.fastMode,F=_=w.quoteChar===void 0||w.quoteChar===null?'"':w.quoteChar;if(w.escapeChar!==void 0&&(F=w.escapeChar),(typeof y!="string"||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=","),L===y)throw new Error("Comment character same as delimiter");L===!0?L="#":(typeof L!="string"||-1<l.BAD_DELIMITERS.indexOf(L))&&(L=!1),A!==`
`&&A!=="\r"&&A!==`\r
`&&(A=`
`);var z=0,U=!1;this.parse=function(W,Z,ne){if(typeof W!="string")throw new Error("Input must be a string");var K=W.length,Se=y.length,Y=A.length,J=L.length,le=b(N),oe=[],Ee=[],ae=[],xe=z=0;if(!W)return Fe();if(w.header&&!Z){var Be=W.split(A)[0].split(y),I=[],Ue={},ze=!1;for(var Le in Be){var fe=Be[Le];b(w.transformHeader)&&(fe=w.transformHeader(fe,Le));var Ze=fe,Ae=Ue[fe]||0;for(0<Ae&&(ze=!0,Ze=fe+"_"+Ae),Ue[fe]=Ae+1;I.includes(Ze);)Ze=Ze+"_"+Ae;I.push(Ze)}if(ze){var be=W.split(A);be[0]=I.join(y),W=be.join(A)}}if(k||k!==!1&&W.indexOf(_)===-1){for(var D=W.split(A),T=0;T<D.length;T++){if(ae=D[T],z+=ae.length,T!==D.length-1)z+=A.length;else if(ne)return Fe();if(!L||ae.substring(0,J)!==L){if(le){if(oe=[],ve(ae.split(y)),De(),U)return Fe()}else ve(ae.split(y));if(G&&G<=T)return oe=oe.slice(0,G),Fe(!0)}}return Fe()}for(var V=W.indexOf(y,z),Q=W.indexOf(A,z),ie=new RegExp(m(F)+m(_),"g"),$=W.indexOf(_,z);;)if(W[z]!==_)if(L&&ae.length===0&&W.substring(z,z+J)===L){if(Q===-1)return Fe();z=Q+Y,Q=W.indexOf(A,z),V=W.indexOf(y,z)}else if(V!==-1&&(V<Q||Q===-1))ae.push(W.substring(z,V)),z=V+Se,V=W.indexOf(y,z);else{if(Q===-1)break;if(ae.push(W.substring(z,Q)),ge(Q+Y),le&&(De(),U))return Fe();if(G&&oe.length>=G)return Fe(!0)}else for($=z,z++;;){if(($=W.indexOf(_,$+1))===-1)return ne||Ee.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:oe.length,index:z}),re();if($===K-1)return re(W.substring(z,$).replace(ie,_));if(_!==F||W[$+1]!==F){if(_===F||$===0||W[$-1]!==F){V!==-1&&V<$+1&&(V=W.indexOf(y,$+1)),Q!==-1&&Q<$+1&&(Q=W.indexOf(A,$+1));var Te=Ie(Q===-1?V:Math.min(V,Q));if(W.substr($+1+Te,Se)===y){ae.push(W.substring(z,$).replace(ie,_)),W[z=$+1+Te+Se]!==_&&($=W.indexOf(_,z)),V=W.indexOf(y,z),Q=W.indexOf(A,z);break}var de=Ie(Q);if(W.substring($+1+de,$+1+de+Y)===A){if(ae.push(W.substring(z,$).replace(ie,_)),ge($+1+de+Y),V=W.indexOf(y,z),$=W.indexOf(_,z),le&&(De(),U))return Fe();if(G&&oe.length>=G)return Fe(!0);break}Ee.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:oe.length,index:z}),$++}}else $++}return re();function ve(pe){oe.push(pe),xe=z}function Ie(pe){var He=0;if(pe!==-1){var Ge=W.substring($+1,pe);Ge&&Ge.trim()===""&&(He=Ge.length)}return He}function re(pe){return ne||(pe===void 0&&(pe=W.substring(z)),ae.push(pe),z=K,ve(ae),le&&De()),Fe()}function ge(pe){z=pe,ve(ae),ae=[],Q=W.indexOf(A,z)}function Fe(pe){return{data:oe,errors:Ee,meta:{delimiter:y,linebreak:A,aborted:U,truncated:!!pe,cursor:xe+(Z||0)}}}function De(){N(Fe()),oe=[],Ee=[]}},this.abort=function(){U=!0},this.getCharIndex=function(){return z}}function v(w){var _=w.data,y=a[_.workerId],A=!1;if(_.error)y.userError(_.error,_.file);else if(_.results&&_.results.data){var L={abort:function(){A=!0,g(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(b(y.userStep)){for(var N=0;N<_.results.data.length&&(y.userStep({data:_.results.data[N],errors:_.results.errors,meta:_.results.meta},L),!A);N++);delete _.results}else b(y.userChunk)&&(y.userChunk(_.results,L,_.file),delete _.results)}_.finished&&!A&&g(_.workerId,_.results)}function g(w,_){var y=a[w];b(y.userComplete)&&y.userComplete(_),y.terminate(),delete a[w]}function E(){throw new Error("Not implemented.")}function R(w){if(typeof w!="object"||w===null)return w;var _=Array.isArray(w)?[]:{};for(var y in w)_[y]=R(w[y]);return _}function P(w,_){return function(){w.apply(_,arguments)}}function b(w){return typeof w=="function"}return s&&(i.onmessage=function(w){var _=w.data;if(l.WORKER_ID===void 0&&_&&(l.WORKER_ID=_.workerId),typeof _.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(_.input,_.config),finished:!0});else if(i.File&&_.input instanceof File||_.input instanceof Object){var y=l.parse(_.input,_.config);y&&i.postMessage({workerId:l.WORKER_ID,results:y,finished:!0})}}),(d.prototype=Object.create(u.prototype)).constructor=d,(h.prototype=Object.create(u.prototype)).constructor=h,(p.prototype=Object.create(p.prototype)).constructor=p,(x.prototype=Object.create(u.prototype)).constructor=x,l})})(kv);var _y=kv.exports;const nc=xm(_y);function Vc(t){const e=Date.now()+6048e5;let n=0;for(;t.getTime()>e&&n++<5;)t.setFullYear(t.getFullYear()-1);return t}function Gf(t){let e=ey;if(e==="auto"){e="DMY";for(const n of t){const i=String(n||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);if(i){if(+i[1]>12){e="DMY";break}if(+i[2]>12){e="MDY";break}}}}return function(i){const r=String(i||"").trim();if(!r)return null;let s=r.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(s)return Vc(new Date(+s[1],+s[2]-1,+s[3]));if(s=r.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),s){let o=+s[3];o<100&&(o+=2e3);const l=+s[1],c=+s[2],[u,d]=e==="MDY"?[c,l]:[l,c],h=new Date(o,d-1,u);return isNaN(h)?null:Vc(h)}const a=new Date(r);return isNaN(a)?null:Vc(a)}}function ic(t,e){for(let n=0;n<Math.min(t.length,12);n++){const i=t[n].map(r=>String(r||"").trim().toLowerCase());if(e.every(r=>i.some(s=>s.includes(r))))return n}return-1}function Ye(t,...e){const n=t.map(i=>String(i||"").trim().toLowerCase());for(const i of["exact","ends","includes"])for(const r of e){const s=n.findIndex(a=>i==="exact"?a===r:i==="ends"?a.endsWith(r):a.includes(r));if(s!==-1)return s}return-1}function rc(t){return t.map(n=>String(n||"").trim()).join("")?t.some(n=>String(n||"").toLowerCase().includes("example")):!0}function vp(t){const e=nc.parse(t,{skipEmptyLines:!1}).data,n=ic(e,["date","initials"]);if(n===-1)throw new Error("Daily Log: could not find the header row (needs Date and Initials Sent columns).");const i=e[n],r={date:Ye(i,"date"),setter:Ye(i,"setter"),initials:Ye(i,"initials sent","initial"),followUps:Ye(i,"follow ups sent","follow"),comments:Ye(i,"comments sent","comment"),notes:Ye(i,"notes","note")},s=e.slice(n+1).filter(l=>!rc(l)),a=Gf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);c&&o.push({date:c,setter:String(l[r.setter]||"").trim(),initials:br(l[r.initials]),followUps:br(l[r.followUps]),comments:r.comments!==-1?br(l[r.comments]):0,notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function _p(t){const e=nc.parse(t,{skipEmptyLines:!1}).data,n=ic(e,["date","handle"]);if(n===-1)throw new Error("Replies: could not find the header row (needs Date Replied and Handle columns).");const i=e[n],r={date:Ye(i,"date replied","date"),handle:Ye(i,"handle"),name:Ye(i,"name"),booked:Ye(i,"booked","book"),showed:Ye(i,"showed","show"),closed:Ye(i,"closed","close"),dealValue:Ye(i,"deal value","deal"),cash:Ye(i,"cash collected","cash"),plan:Ye(i,"payment plan","plan"),notes:Ye(i,"notes","note"),time:Ye(i,"time replied","time"),status:Ye(i,"status"),deadReason:Ye(i,"dead reason"),account:Ye(i,"account"),dateBooked:Ye(i,"date booked"),callDate:Ye(i,"call date"),dateClosed:Ye(i,"date closed")},s=e.slice(n+1).filter(l=>!rc(l)),a=Gf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);if(!c)continue;const u=String(l[r.status]||"").trim(),d=a(l[r.dateBooked]),h=a(l[r.dateClosed]);o.push({date:c,handle:String(l[r.handle]||"").trim(),name:String(l[r.name]||"").trim(),booked:yo(l[r.booked])||u.toLowerCase()==="booked"||!!d,showed:yo(l[r.showed]),closed:yo(l[r.closed])||!!h,dealValue:br(l[r.dealValue]),cash:br(l[r.cash]),paymentPlan:yo(l[r.plan]),notes:String(l[r.notes]||"").trim(),timeReplied:r.time!==-1?String(l[r.time]||"").trim():"",status:u,dead:u.toLowerCase()==="dead",deadReason:String(l[r.deadReason]||"").trim(),account:String(l[r.account]||"").trim(),dateBooked:d,callDate:xy(l[r.callDate]),dateClosed:h})}return o.sort((l,c)=>l.date-c.date),o}function xy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function yy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function xp(t){const e=nc.parse(t,{skipEmptyLines:!1}).data,n=ic(e,["handle","next due"]);if(n===-1)throw new Error("Leads: header row not found.");const i=e[n],r={handle:Ye(i,"handle"),account:Ye(i,"account"),name:Ye(i,"name"),niche:Ye(i,"niche"),nextTouch:Ye(i,"next touch"),nextDue:Ye(i,"next due date","next due"),status:Ye(i,"status")},s=[];for(const a of e.slice(n+1)){if(rc(a))continue;const o=String(a[r.handle]||"").trim();o&&s.push({handle:o,account:String(a[r.account]||"").trim(),name:String(a[r.name]||"").trim(),niche:String(a[r.niche]||"").trim(),nextTouch:String(a[r.nextTouch]||"").trim(),nextDue:yy(a[r.nextDue]),status:String(a[r.status]||"").trim()})}return s}function yp(t){const e=nc.parse(t,{skipEmptyLines:!1}).data,n=ic(e,["date","amount"]);if(n===-1)throw new Error("Payments: header row not found.");const i=e[n],r={date:Ye(i,"date"),handle:Ye(i,"handle"),amount:Ye(i,"amount"),notes:Ye(i,"notes","note")},s=e.slice(n+1).filter(l=>!rc(l)),a=Gf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]),u=br(l[r.amount]);!c||!(u>0)||o.push({date:c,amount:u,handle:String(l[r.handle]||"").trim(),notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function Sy(){const t=new Date,e=["KEHOEGROUP Daily Log,,,,,","Fill this in once a day,,,,,","Date,Setter,Initials Sent,Follow Ups Sent,Comments Sent,Notes","01/01/2026,Example Setter,25,10,20,Example row - ignore"],n=["KEHOEGROUP Replies,,,,,,,,,,,,,,,,","One row per person who replied,,,,,,,,,,,,,,,,","Date Replied,Handle,Name,Time Replied,Booked,Showed,Closed,Deal Value,Cash Collected,Payment Plan,Notes,Status,Dead Reason,Account,Date Booked,Call Date,Date Closed","01/01/2026,@example,Example Person,12:00,Y,Y,Y,10000,5000,Y,Example row - ignore,,,,,,"],i=["KEHOEGROUP Payments,,,","One row per payment received,,,","Date,Handle,Amount,Notes"],r=c=>{const u=d=>String(d).padStart(2,"0");return u(c.getDate())+"/"+u(c.getMonth()+1)+"/"+c.getFullYear()},a=(c=>{let u=c;return()=>(u=u*16807%2147483647)/2147483647})(42),o=["@fx_daniel","@ecom.luke","@ai.martina","@salescoach_tom","@realty.jane","@bizopp.kev","@trading.sy","@creator.mia","@closer.pat","@brand.ash","@growth.finn","@wealth.roy","@mentor.zed","@funnel.gus","@scale.ivy","@offer.max","@coach.nia","@deals.obi"];let l=0;for(let c=69;c>=0;c--){const u=new Date(t.getFullYear(),t.getMonth(),t.getDate()-c);if(u.getDay()===0)continue;const d=1+(69-c)/69,h=Math.round((14+a()*14)*d),p=Math.round((8+a()*16)*d),x=Math.round(h*(.8+a()*.2));e.push(r(u)+",Jamie,"+h+","+p+","+x+",");const M=h*(.03+a()*.025),m=Math.floor(M)+(a()<M%1?1:0);for(let f=0;f<m;f++){const v=o[l%o.length]+(l>=o.length?"."+l:"");l++;const g=a()<.38,E=g&&a()<.7,R=E&&c>20&&a()<.35,P=R?a()<.4?15e3:1e4:0,b=R&&a()<.5,w=R?b?P/2:P:0,_=13+Math.floor(a()*11),y=String(_%24).padStart(2,"0")+":"+String(Math.floor(a()*60)).padStart(2,"0"),A=!g&&c>14&&a()<.3,L=A?"Dead":g?"Booked":c<5&&a()<.5?"Talking":"",N=A?["Ghosted","No money","Bad fit","Priced out"][Math.floor(a()*4)]:"",G=g?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+1)):"",k=g&&!E&&c<4?r(new Date(t.getFullYear(),t.getMonth(),t.getDate()+1+Math.floor(a()*3))):g?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+3)):"",F=R?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+18)):"";n.push([r(u),v,"",y,g?"Y":"",E?"Y":"",R?"Y":"",P||"",w||"",b?"Y":"","",L,N,"Acc 1",G,k,F].join(",")),R&&w>0&&i.push([F,v,w,b?"first payment":"paid in full"].join(","))}}return{daily:e.join(`
`),replies:n.join(`
`),payments:i.join(`
`)}}function My(){const t=new Date,e=r=>pt(new Date(t.getFullYear(),t.getMonth(),t.getDate()+r)),n=["Handle,Account,Name,Niche,Last Touch Sent,Date Last Sent,Next Touch,Next Due Date,Status,Due?,Notes"],i=(r,s,a,o)=>n.push([r,"Acc 1","","Trading","","",s,e(a),o||"Active","",""].join(","));return["@fx_lead1","@fx_lead2","@ai_lead3"].forEach((r,s)=>i(r,"Touch 4",-2+s)),["@ec_lead4","@ec_lead5","@re_lead6","@re_lead7"].forEach(r=>i(r,"FU wk2-4",0)),["@tr_lead8","@tr_lead9"].forEach(r=>i(r,"Touch 5",1)),["@tr_lead10","@ai_lead11","@ec_lead12"].forEach(r=>i(r,"FU mon2-3",2)),i("@dead_lead","Reactivation",5,"Replied"),n.join(`
`)}async function So(t){const e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error("HTTP "+e.status);return e.text()}function Ey(){const[t,e]=Pe.useState({daily:null,replies:null,leads:[],payments:[],sample:!1,error:null,loadedAt:null}),[n,i]=Pe.useState(!0),r=Pe.useCallback(async()=>{i(!0);let s=null,a=null,o=[],l=[],c=!1,u=null;try{const[d,h]=await Promise.all([So(Bc($x)),So(Bc(Kx))]);s=vp(d),a=_p(h);try{l=yp(await So(Bc(Zx)))}catch{l=[]}}catch(d){const h=Sy();s=vp(h.daily),a=_p(h.replies),l=yp(h.payments),c=!0,u=String(d.message||d)}try{if(c)o=xp(My());else for(const d of Jx())try{const h=await So(d),p=xp(h);if(p.length){o=p;break}}catch{}}catch{}e({daily:s,replies:a,leads:o,payments:l,sample:c,error:u,loadedAt:new Date}),i(!1)},[]);return Pe.useEffect(()=>{r();const s=setInterval(r,ty);return()=>clearInterval(s)},[r]),{...t,loading:n,reload:r}}function Gc(t){const[e,n]=Pe.useState(null);return Pe.useEffect(()=>{fetch("/dm-tracker/"+t+".json?cb="+Date.now()).then(i=>i.ok?i.json():null).then(i=>{i&&i.headline&&n(i)}).catch(()=>{})},[t]),e}function ud({sub:t}){return S.jsxs("span",{children:[S.jsxs("span",{className:"display wordmark",children:["KEHOEGROUP",S.jsx("span",{className:"dot",children:"."})]}),t&&S.jsx("span",{className:"wm-sub",children:t})]})}function wy({kind:t,children:e}){return S.jsx("span",{className:"badge "+t,children:e})}function Pr({value:t,format:e}){const[n,i]=Pe.useState(ti?t:0),r=Pe.useRef(ti?t:0);return Pe.useEffect(()=>{const s=r.current,a=t;if(r.current=t,ti||s===a){i(a);return}const o=performance.now(),l=700;let c;const u=d=>{const h=Math.min((d-o)/l,1),p=1-Math.pow(1-h,3);i(s+(a-s)*p),h<1&&(c=requestAnimationFrame(u))};return c=requestAnimationFrame(u),()=>cancelAnimationFrame(c)},[t]),e(n)}function Sp({text:t}){const[e,n]=Pe.useState(ti?(t||"").length:0);return Pe.useEffect(()=>{if(ti){n((t||"").length);return}n(0);const i=setInterval(()=>{n(r=>{const s=r+3;return s>=(t||"").length&&clearInterval(i),s})},22);return()=>clearInterval(i)},[t]),S.jsxs("span",{children:[(t||"").slice(0,e),e<(t||"").length&&S.jsx("span",{className:"cursor",children:"▎"})]})}function Rt({children:t,delay:e=0,className:n=""}){const i=Pe.useRef(null),[r,s]=Pe.useState(ti);return Pe.useEffect(()=>{if(ti)return;const a=i.current;if(!a)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),o.disconnect())},{threshold:.08});return o.observe(a),()=>o.disconnect()},[]),S.jsx("div",{ref:i,className:"reveal "+(r?"in ":"")+n,style:e?{transitionDelay:e+"ms"}:null,children:t})}function Ty({data:t,color:e="#5A5A5A",dot:n="#E11414"}){if(!t||!t.some(l=>l>0))return null;const i=96,r=24,s=Math.max(...t,1),a=t.map((l,c)=>c/(t.length-1)*i+","+(r-2-l/s*(r-7))),o=a[a.length-1].split(",");return S.jsxs("svg",{width:i,height:r,className:"spark","aria-hidden":"true",children:[S.jsx("polyline",{points:a.join(" "),fill:"none",stroke:e,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"}),S.jsx("circle",{cx:o[0],cy:o[1],r:"2.5",fill:n})]})}function Li({label:t,num:e,format:n,sub:i,red:r,delta:s,spark:a,tip:o}){const l=s>.02?"up":s<-.02?"down":"flat",c=s>.02?"▲":s<-.02?"▼":"·";return S.jsxs("div",{className:"tile",children:[S.jsx("div",{className:"label",children:t}),S.jsx("div",{className:"display val"+(r?" red":""),children:S.jsx(Pr,{value:e,format:n})}),S.jsx("div",{className:"sub",children:i||" "}),s!=null&&S.jsxs("div",{className:"wdelta "+l,children:[c," ",Math.abs(s)<.005?"flat":Math.round(Math.abs(s)*100)+"%"," vs last wk"]}),a&&S.jsx(Ty,{data:a}),o&&S.jsx("div",{className:"tip",children:o.map(([u,d])=>S.jsxs("div",{className:"tip-row",children:[S.jsx("span",{children:u}),S.jsx("b",{children:d})]},u))})]})}function Ay({series:t,height:e=220,yFmt:n=i=>String(Math.round(i))}){const i=t.flatMap(g=>g.data);if(!i.length)return S.jsx("div",{className:"note",children:"No data in this window yet."});const r=720,s=e,a=44,o=10,l=12,c=26,u=i.map(g=>g.x.getTime()),d=Math.min(...u),h=Math.max(...u),p=Math.max(...i.map(g=>g.y),1)*1.12,x=g=>a+(g-d)/Math.max(h-d,1)*(r-a-o),M=g=>l+(1-g/p)*(s-l-c),m=4,f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=[];for(let g=0;g<=3;g++){const E=d+(h-d)*g/3,R=new Date(E);v.push({x:x(E),label:R.getDate()+" "+f[R.getMonth()]})}return S.jsxs("svg",{viewBox:"0 0 "+r+" "+s,className:"chart-svg",children:[Array.from({length:m+1},(g,E)=>{const R=p*E/m;return S.jsxs("g",{children:[S.jsx("line",{x1:a,x2:r-o,y1:M(R),y2:M(R),stroke:"#1B1B1B",strokeWidth:"1"}),S.jsx("text",{x:a-7,y:M(R)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:n(R)})]},E)}),v.map((g,E)=>S.jsx("text",{x:g.x,y:s-8,textAnchor:"middle",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:g.label},E)),t.map(g=>{const E=g.data.map(R=>x(R.x.getTime()).toFixed(1)+","+M(R.y).toFixed(1));return S.jsxs("g",{children:[g.area&&S.jsx("polygon",{points:E.join(" ")+" "+x(h).toFixed(1)+","+M(0)+" "+x(d).toFixed(1)+","+M(0),fill:g.color,opacity:"0.08"}),S.jsx("polyline",{points:E.join(" "),fill:"none",stroke:g.color,strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round",pathLength:"1",className:"drawline"})]},g.key)})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="166",Ry=0,Mp=1,Cy=2,Ov=1,by=2,ci=3,rr=0,ln=1,hi=2,er=0,As=1,Ep=2,wp=3,Tp=4,Py=5,yr=100,Ly=101,Dy=102,Ny=103,Iy=104,Uy=200,Fy=201,ky=202,Oy=203,dd=204,fd=205,By=206,zy=207,Hy=208,Vy=209,Gy=210,Wy=211,jy=212,Xy=213,Yy=214,qy=0,$y=1,Ky=2,Il=3,Zy=4,Qy=5,Jy=6,eS=7,Bv=0,tS=1,nS=2,tr=0,iS=1,rS=2,sS=3,aS=4,oS=5,lS=6,cS=7,zv=300,Fs=301,ks=302,hd=303,pd=304,sc=306,md=1e3,Tr=1001,gd=1002,Rn=1003,uS=1004,Mo=1005,zn=1006,Wc=1007,Ar=1008,Ti=1009,Hv=1010,Vv=1011,za=1012,jf=1013,kr=1014,vi=1015,qa=1016,Xf=1017,Yf=1018,Os=1020,Gv=35902,Wv=1021,jv=1022,Hn=1023,Xv=1024,Yv=1025,Rs=1026,Bs=1027,qv=1028,qf=1029,$v=1030,$f=1031,Kf=1033,rl=33776,sl=33777,al=33778,ol=33779,vd=35840,_d=35841,xd=35842,yd=35843,Sd=36196,Md=37492,Ed=37496,wd=37808,Td=37809,Ad=37810,Rd=37811,Cd=37812,bd=37813,Pd=37814,Ld=37815,Dd=37816,Nd=37817,Id=37818,Ud=37819,Fd=37820,kd=37821,ll=36492,Od=36494,Bd=36495,Kv=36283,zd=36284,Hd=36285,Vd=36286,dS=3200,fS=3201,hS=0,pS=1,Gi="",qn="srgb",lr="srgb-linear",Zf="display-p3",ac="display-p3-linear",Ul="linear",ct="srgb",Fl="rec709",kl="p3",Wr=7680,Ap=519,mS=512,gS=513,vS=514,Zv=515,_S=516,xS=517,yS=518,SS=519,Rp=35044,Cp="300 es",_i=2e3,Ol=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=Math.PI/180,Gd=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function MS(t,e){return(t%e+e)%e}function Xc(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],M=r[0],m=r[3],f=r[6],v=r[1],g=r[4],E=r[7],R=r[2],P=r[5],b=r[8];return s[0]=a*M+o*v+l*R,s[3]=a*m+o*g+l*P,s[6]=a*f+o*E+l*b,s[1]=c*M+u*v+d*R,s[4]=c*m+u*g+d*P,s[7]=c*f+u*E+d*b,s[2]=h*M+p*v+x*R,s[5]=h*m+p*g+x*P,s[8]=h*f+p*E+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new je;function Qv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ES(){const t=Bl("canvas");return t.style.display="block",t}const bp={};function Jv(t){t in bp||(bp[t]=!0,console.warn(t))}function wS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Pp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Eo={[lr]:{transfer:Ul,primaries:Fl,toReference:t=>t,fromReference:t=>t},[qn]:{transfer:ct,primaries:Fl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ac]:{transfer:Ul,primaries:kl,toReference:t=>t.applyMatrix3(Lp),fromReference:t=>t.applyMatrix3(Pp)},[Zf]:{transfer:ct,primaries:kl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lp),fromReference:t=>t.applyMatrix3(Pp).convertLinearToSRGB()}},TS=new Set([lr,ac]),rt={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!TS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Eo[e].toReference,r=Eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Eo[t].primaries},getTransfer:function(t){return t===Gi?Ul:Eo[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class AS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=Bl("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class e0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($c(r[a].image)):s.push($c(r[a]))}else s=$c(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $c(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CS=0;class cn extends Ws{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Tr,r=Tr,s=zn,a=Ar,o=Hn,l=Ti,c=cn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=$a(),this.name="",this.source=new e0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=zv;cn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(p+1)/2,R=(f+1)/2,P=(u+h)/4,b=(d+M)/4,w=(x+m)/4;return g>E&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=P/i,s=b/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=w/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=w/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(d-M)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends Ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends bS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t0 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PS extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],x=s[a+2],M=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=M;return}if(d!==M||l!==h||c!==p||u!==x){let m=1-o;const f=l*h+c*p+u*x+d*M,v=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const R=Math.sqrt(g),P=Math.atan2(R,f*v);m=Math.sin(m*P)/R,o=Math.sin(o*P)/R}const E=o*v;if(l=l*m+h*E,c=c*m+p*E,u=u*m+x*E,d=d*m+M*E,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],x=s[a+3];return e[n]=o*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-o*p,e[n+2]=c*x+u*p+o*h-l*d,e[n+3]=u*x-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new q,Dp=new Ka;class Za{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),To.subVectors(this.max,ta),Xr.subVectors(e.a,ta),Yr.subVectors(e.b,ta),qr.subVectors(e.c,ta),Di.subVectors(Yr,Xr),Ni.subVectors(qr,Yr),ur.subVectors(Xr,qr);let n=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ur.z,ur.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ur.z,0,-ur.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ur.y,ur.x,0];return!Zc(n,Xr,Yr,qr,To)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Xr,Yr,qr,To))?!1:(Ao.crossVectors(Di,Ni),n=[Ao.x,Ao.y,Ao.z],Zc(n,Xr,Yr,qr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new q,new q,new q,new q,new q,new q,new q,new q],Nn=new q,wo=new Za,Xr=new q,Yr=new q,qr=new q,Di=new q,Ni=new q,ur=new q,ta=new q,To=new q,Ao=new q,dr=new q;function Zc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const LS=new Za,na=new q,Qc=new q;class Qf{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Qc)),this.expandByPoint(na.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new q,Jc=new q,Ro=new q,Ii=new q,eu=new q,Co=new q,tu=new q;class DS{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=Ii.dot(this.direction),l=-Ii.dot(Ro),c=Ii.lengthSq(),u=Math.abs(1-a*a);let d,h,p,x;if(u>0)if(d=a*l-o,h=a*o-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jc).addScaledVector(Ro,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Co.subVectors(i,e),tu.crossVectors(eu,Co);let a=this.direction.dot(tu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(Ii,Co));if(l<0)return null;const c=o*this.direction.dot(eu.cross(Ii));if(c<0||l+c>a)return null;const u=-o*Ii.dot(tu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,x,M,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,x,M,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,x,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,x=o*u,M=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-M*c,n[9]=-o*l,n[2]=M-h*c,n[6]=x+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,M=c*d;n[0]=h+M*o,n[4]=x*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-x,n[6]=M+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,M=c*d;n[0]=h-M*o,n[4]=-a*d,n[8]=x+p*o,n[1]=p+x*o,n[5]=a*u,n[9]=M-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,x=o*u,M=o*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*u,n[4]=M-h*d,n[8]=x*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,p=a*c,x=o*l,M=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=a*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=o*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NS,e,IS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ui.crossVectors(i,fn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ui.crossVectors(i,fn)),Ui.normalize(),bo.crossVectors(fn,Ui),r[0]=Ui.x,r[4]=bo.x,r[8]=fn.x,r[1]=Ui.y,r[5]=bo.y,r[9]=fn.y,r[2]=Ui.z,r[6]=bo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],M=i[6],m=i[10],f=i[14],v=i[3],g=i[7],E=i[11],R=i[15],P=r[0],b=r[4],w=r[8],_=r[12],y=r[1],A=r[5],L=r[9],N=r[13],G=r[2],k=r[6],F=r[10],z=r[14],U=r[3],W=r[7],Z=r[11],ne=r[15];return s[0]=a*P+o*y+l*G+c*U,s[4]=a*b+o*A+l*k+c*W,s[8]=a*w+o*L+l*F+c*Z,s[12]=a*_+o*N+l*z+c*ne,s[1]=u*P+d*y+h*G+p*U,s[5]=u*b+d*A+h*k+p*W,s[9]=u*w+d*L+h*F+p*Z,s[13]=u*_+d*N+h*z+p*ne,s[2]=x*P+M*y+m*G+f*U,s[6]=x*b+M*A+m*k+f*W,s[10]=x*w+M*L+m*F+f*Z,s[14]=x*_+M*N+m*z+f*ne,s[3]=v*P+g*y+E*G+R*U,s[7]=v*b+g*A+E*k+R*W,s[11]=v*w+g*L+E*F+R*Z,s[15]=v*_+g*N+E*z+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],M=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+M*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-n*l*d+n*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],M=e[13],m=e[14],f=e[15],v=d*m*c-M*h*c+M*l*p-o*m*p-d*l*f+o*h*f,g=x*h*c-u*m*c-x*l*p+a*m*p+u*l*f-a*h*f,E=u*M*c-x*d*c+x*o*p-a*M*p-u*o*f+a*d*f,R=x*d*l-u*M*l-x*o*h+a*M*h+u*o*m-a*d*m,P=n*v+i*g+r*E+s*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=v*b,e[1]=(M*h*s-d*m*s-M*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(o*m*s-M*l*s+M*r*c-i*m*c-o*r*f+i*l*f)*b,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*b,e[4]=g*b,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*f+n*h*f)*b,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*f-n*l*f)*b,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*b,e[8]=E*b,e[9]=(x*d*s-u*M*s-x*i*p+n*M*p+u*i*f-n*d*f)*b,e[10]=(a*M*s-x*o*s+x*i*c-n*M*c-a*i*f+n*o*f)*b,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*b,e[12]=R*b,e[13]=(u*M*r-x*d*r+x*i*h-n*M*h-u*i*m+n*d*m)*b,e[14]=(x*o*r-a*M*r-x*i*l+n*M*l+a*i*m-n*o*m)*b,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,x=s*d,M=a*u,m=a*d,f=o*d,v=l*c,g=l*u,E=l*d,R=i.x,P=i.y,b=i.z;return r[0]=(1-(M+f))*R,r[1]=(p+E)*R,r[2]=(x-g)*R,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+f))*P,r[6]=(m+v)*P,r[7]=0,r[8]=(x+g)*b,r[9]=(m-v)*b,r[10]=(1-(h+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const a=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/a,d=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(o===_i)p=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ol)p=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),h=(n+e)*c,p=(i+r)*u;let x,M;if(o===_i)x=(a+s)*d,M=-2*d;else if(o===Ol)x=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new q,In=new Lt,NS=new q(0,0,0),IS=new q(1,1,1),Ui=new q,bo=new q,fn=new q,Np=new Lt,Ip=new Ka;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class n0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let US=0;const Up=new q,Kr=new Ka,ai=new Lt,Po=new q,ia=new q,FS=new q,kS=new Ka,Fp=new q(1,0,0),kp=new q(0,1,0),Op=new q(0,0,1),Bp={type:"added"},OS={type:"removed"},Zr={type:"childadded",child:null},nu={type:"childremoved",child:null};class vn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new q,n=new Ai,i=new Ka,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Fp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Up.copy(e).applyQuaternion(this.quaternion),this.position.add(Up.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(ia,Po,this.up):ai.lookAt(Po,ia,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(ai),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(OS),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,kS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new q,oi=new q,iu=new q,li=new q,Qr=new q,Jr=new q,zp=new q,ru=new q,su=new q,au=new q;class Zn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),oi.subVectors(i,n),iu.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(oi),l=Un.dot(iu),c=oi.dot(oi),u=oi.dot(iu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),oi.subVectors(e,n),Un.cross(oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Un.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),Jr.subVectors(s,i),ru.subVectors(e,i);const l=Qr.dot(ru),c=Jr.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const u=Qr.dot(su),d=Jr.dot(su);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);au.subVectors(e,s);const p=Qr.dot(au),x=Jr.dot(au);if(x>=0&&p<=x)return n.copy(s);const M=p*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Jr,o);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return zp.subVectors(s,r),o=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(zp,o);const f=1/(m+M+h);return a=M*f,o=h*f,n.copy(i).addScaledVector(Qr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=MS(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=qn){const i=i0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qn){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=qn){rt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Lo);const i=Xc(Fi.h,Lo.h,n),r=Xc(Fi.s,Lo.s,n),s=Xc(Fi.l,Lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new at;at.NAMES=i0;let BS=0;class oc extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=As,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=fd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class r0 extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new q,Do=new Qe;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Jv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class s0 extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class a0 extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Lr extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zS=0;const Mn=new Lt,lu=new vn,es=new q,hn=new Za,ra=new Za,It=new q;class Hr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?a0:s0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(hn.min,ra.min),hn.expandByPoint(It),It.addVectors(hn.max,ra.max),hn.expandByPoint(It)):(hn.expandByPoint(ra.min),hn.expandByPoint(ra.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),It.add(es)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new q,l[w]=new q;const c=new q,u=new q,d=new q,h=new Qe,p=new Qe,x=new Qe,M=new q,m=new q;function f(w,_,y){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,_),x.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const A=1/(p.x*x.y-x.x*p.y);isFinite(A)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(A),o[w].add(M),o[_].add(M),o[y].add(M),l[w].add(m),l[_].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let w=0,_=v.length;w<_;++w){const y=v[w],A=y.start,L=y.count;for(let N=A,G=A+L;N<G;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new q,E=new q,R=new q,P=new q;function b(w){R.fromBufferAttribute(r,w),P.copy(R);const _=o[w];g.copy(_),g.sub(R.multiplyScalar(R.dot(_))).normalize(),E.crossVectors(P,_);const A=E.dot(l[w])<0?-1:1;a.setXYZW(w,g.x,g.y,g.z,A)}for(let w=0,_=v.length;w<_;++w){const y=v[w],A=y.start,L=y.count;for(let N=A,G=A+L;N<G;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new ni(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new Lt,fr=new DS,No=new Qf,Vp=new q,ts=new q,ns=new q,is=new q,cu=new q,Io=new q,Uo=new Qe,Fo=new Qe,ko=new Qe,Gp=new q,Wp=new q,jp=new q,Oo=new q,Bo=new q;class Qn extends vn{constructor(e=new Hr,n=new r0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(cu.fromBufferAttribute(d,e),a?Io.addScaledVector(cu,u):Io.addScaledVector(cu.sub(n),u))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(No.containsPoint(fr.origin)===!1&&(fr.intersectSphere(No,Vp)===null||fr.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(Hp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Hp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const m=h[x],f=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,R=g;E<R;E+=3){const P=o.getX(E),b=o.getX(E+1),w=o.getX(E+2);r=zo(this,f,e,i,c,u,d,P,b,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const v=o.getX(m),g=o.getX(m+1),E=o.getX(m+2);r=zo(this,a,e,i,c,u,d,v,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=h.length;x<M;x++){const m=h[x],f=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,R=g;E<R;E+=3){const P=E,b=E+1,w=E+2;r=zo(this,f,e,i,c,u,d,P,b,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=x,f=M;m<f;m+=3){const v=m,g=m+1,E=m+2;r=zo(this,a,e,i,c,u,d,v,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function HS(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===rr,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function zo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const u=HS(t,e,n,i,ts,ns,is,Oo);if(u){r&&(Uo.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),u.uv=Zn.getInterpolation(Oo,ts,ns,is,Uo,Fo,ko,new Qe)),s&&(Uo.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),u.uv1=Zn.getInterpolation(Oo,ts,ns,is,Uo,Fo,ko,new Qe)),a&&(Gp.fromBufferAttribute(a,o),Wp.fromBufferAttribute(a,l),jp.fromBufferAttribute(a,c),u.normal=Zn.getInterpolation(Oo,ts,ns,is,Gp,Wp,jp,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};Zn.getNormal(ts,ns,is,d.normal),u.face=d}return u}class Qa extends Hr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lr(c,3)),this.setAttribute("normal",new Lr(u,3)),this.setAttribute("uv",new Lr(d,2));function x(M,m,f,v,g,E,R,P,b,w,_){const y=E/b,A=R/w,L=E/2,N=R/2,G=P/2,k=b+1,F=w+1;let z=0,U=0;const W=new q;for(let Z=0;Z<F;Z++){const ne=Z*A-N;for(let K=0;K<k;K++){const Se=K*y-L;W[M]=Se*v,W[m]=ne*g,W[f]=G,c.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[f]=P>0?1:-1,u.push(W.x,W.y,W.z),d.push(K/b),d.push(1-Z/w),z+=1}}for(let Z=0;Z<w;Z++)for(let ne=0;ne<b;ne++){const K=h+ne+k*Z,Se=h+ne+k*(Z+1),Y=h+(ne+1)+k*(Z+1),J=h+(ne+1)+k*Z;l.push(K,Se,J),l.push(Se,Y,J),U+=6}o.addGroup(p,U,_),p+=U,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function VS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const GS={clone:zs,merge:$t};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class l0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new q,Xp=new Qe,Yp=new Qe;class Bn extends l0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class XS extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new Bn(rs,ss,e,n);s.layers=this.layers,this.add(s);const a=new Bn(rs,ss,e,n);a.layers=this.layers,this.add(a);const o=new Bn(rs,ss,e,n);o.layers=this.layers,this.add(o);const l=new Bn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new Bn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class c0 extends cn{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new c0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:er});s.uniforms.tEquirect.value=n;const a=new Qn(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=zn),new XS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const uu=new q,qS=new q,$S=new je;class _r{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=uu.subVectors(i,n).cross(qS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(uu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$S.getNormalMatrix(e),r=this.coplanarPoint(uu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Qf,Ho=new q;class u0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],M=r[10],m=r[11],f=r[12],v=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-f).normalize(),i[1].setComponents(l+s,h+c,m+p,E+f).normalize(),i[2].setComponents(l+a,h+u,m+x,E+v).normalize(),i[3].setComponents(l-a,h-u,m-x,E-v).normalize(),i[4].setComponents(l-o,h-d,m-M,E-g).normalize(),n===_i)i[5].setComponents(l+o,h+d,m+M,E+g).normalize();else if(n===Ol)i[5].setComponents(o,d,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function d0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KS(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,x=h.length;p<x;p++){const M=h[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ja extends Hr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],x=[],M=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let g=0;g<c;g++){const E=g*d-s;x.push(E,-v,0),M.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const g=v+c*f,E=v+c*(f+1),R=v+1+c*(f+1),P=v+1+c*f;p.push(g,E,P),p.push(E,R,P)}this.setIndex(p),this.setAttribute("position",new Lr(x,3)),this.setAttribute("normal",new Lr(M,3)),this.setAttribute("uv",new Lr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
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
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iM=`#ifdef USE_AOMAP
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
#endif`,rM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sM=`#ifdef USE_BATCHING
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
#endif`,aM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uM=`#ifdef USE_IRIDESCENCE
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
#endif`,dM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yM=`#define PI 3.141592653589793
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
} // validated`,SM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,MM=`vec3 transformedNormal = objectNormal;
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
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`
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
}`,bM=`#ifdef USE_ENVMAP
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
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
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
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
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
#endif`,$M=`struct PhysicalMaterial {
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
}`,KM=`
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,hE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
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
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ME=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UE=`float getShadowMask() {
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
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,OE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`#include <common>
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
}`,i1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define MATCAP
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
}`,m1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,_1=`#define PHONG
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
}`,x1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,S1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,E1=`#define TOON
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
}`,w1=`uniform float size;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 color;
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
}`,C1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:ZS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:eM,alphatest_fragment:tM,alphatest_pars_fragment:nM,aomap_fragment:iM,aomap_pars_fragment:rM,batching_pars_vertex:sM,batching_vertex:aM,begin_vertex:oM,beginnormal_vertex:lM,bsdfs:cM,iridescence_fragment:uM,bumpmap_pars_fragment:dM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:hM,clipping_planes_pars_vertex:pM,clipping_planes_vertex:mM,color_fragment:gM,color_pars_fragment:vM,color_pars_vertex:_M,color_vertex:xM,common:yM,cube_uv_reflection_fragment:SM,defaultnormal_vertex:MM,displacementmap_pars_vertex:EM,displacementmap_vertex:wM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:RM,colorspace_pars_fragment:CM,envmap_fragment:bM,envmap_common_pars_fragment:PM,envmap_pars_fragment:LM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:NM,fog_vertex:IM,fog_pars_vertex:UM,fog_fragment:FM,fog_pars_fragment:kM,gradientmap_pars_fragment:OM,lightmap_pars_fragment:BM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:HM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:jM,lights_phong_fragment:XM,lights_phong_pars_fragment:YM,lights_physical_fragment:qM,lights_physical_pars_fragment:$M,lights_fragment_begin:KM,lights_fragment_maps:ZM,lights_fragment_end:QM,logdepthbuf_fragment:JM,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:aE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:dE,morphtarget_pars_vertex:fE,morphtarget_vertex:hE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:SE,clearcoat_pars_fragment:ME,iridescence_pars_fragment:EE,opaque_fragment:wE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:CE,dithering_pars_fragment:bE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:NE,shadowmap_vertex:IE,shadowmask_pars_fragment:UE,skinbase_vertex:FE,skinning_pars_vertex:kE,skinning_vertex:OE,skinnormal_vertex:BE,specularmap_fragment:zE,specularmap_pars_fragment:HE,tonemapping_fragment:VE,tonemapping_pars_fragment:GE,transmission_fragment:WE,transmission_pars_fragment:jE,uv_pars_fragment:XE,uv_pars_vertex:YE,uv_vertex:qE,worldpos_vertex:$E,background_vert:KE,background_frag:ZE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:e1,cube_frag:t1,depth_vert:n1,depth_frag:i1,distanceRGBA_vert:r1,distanceRGBA_frag:s1,equirect_vert:a1,equirect_frag:o1,linedashed_vert:l1,linedashed_frag:c1,meshbasic_vert:u1,meshbasic_frag:d1,meshlambert_vert:f1,meshlambert_frag:h1,meshmatcap_vert:p1,meshmatcap_frag:m1,meshnormal_vert:g1,meshnormal_frag:v1,meshphong_vert:_1,meshphong_frag:x1,meshphysical_vert:y1,meshphysical_frag:S1,meshtoon_vert:M1,meshtoon_frag:E1,points_vert:w1,points_frag:T1,shadow_vert:A1,shadow_frag:R1,sprite_vert:C1,sprite_frag:b1},me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},$n={basic:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([me.lights,me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Vo={r:0,b:0,g:0},pr=new Ai,P1=new Lt;function L1(t,e,n,i,r,s,a){const o=new at(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function M(v){let g=!1;const E=x(v);E===null?f(o,l):E&&E.isColor&&(f(E,1),g=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const E=x(g);E&&(E.isCubeTexture||E.mapping===sc)?(u===void 0&&(u=new Qn(new Qa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(g.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(P1.makeRotationFromEuler(pr)),u.material.toneMapped=rt.getTransfer(E.colorSpace)!==ct,(d!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qn(new Ja(2,2),new Ri({name:"BackgroundMaterial",uniforms:zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,g){v.getRGB(Vo,o0(t)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:M,addToRenderList:m}}function D1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,A,L,N,G){let k=!1;const F=d(N,L,A);s!==F&&(s=F,c(s.object)),k=p(y,N,L,G),k&&x(y,N,L,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,E(y,A,L,N),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,A,L){const N=L.wireframe===!0;let G=i[y.id];G===void 0&&(G={},i[y.id]=G);let k=G[A.id];k===void 0&&(k={},G[A.id]=k);let F=k[N];return F===void 0&&(F=h(l()),k[N]=F),F}function h(y){const A=[],L=[],N=[];for(let G=0;G<n;G++)A[G]=0,L[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,A,L,N){const G=s.attributes,k=A.attributes;let F=0;const z=L.getAttributes();for(const U in z)if(z[U].location>=0){const Z=G[U];let ne=k[U];if(ne===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function x(y,A,L,N){const G={},k=A.attributes;let F=0;const z=L.getAttributes();for(const U in z)if(z[U].location>=0){let Z=k[U];Z===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),G[U]=ne,F++}s.attributes=G,s.attributesNum=F,s.index=N}function M(){const y=s.newAttributes;for(let A=0,L=y.length;A<L;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){const L=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;L[y]=1,N[y]===0&&(t.enableVertexAttribArray(y),N[y]=1),G[y]!==A&&(t.vertexAttribDivisor(y,A),G[y]=A)}function v(){const y=s.newAttributes,A=s.enabledAttributes;for(let L=0,N=A.length;L<N;L++)A[L]!==y[L]&&(t.disableVertexAttribArray(L),A[L]=0)}function g(y,A,L,N,G,k,F){F===!0?t.vertexAttribIPointer(y,A,L,G,k):t.vertexAttribPointer(y,A,L,N,G,k)}function E(y,A,L,N){M();const G=N.attributes,k=L.getAttributes(),F=A.defaultAttributeValues;for(const z in k){const U=k[z];if(U.location>=0){let W=G[z];if(W===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const Z=W.normalized,ne=W.itemSize,K=e.get(W);if(K===void 0)continue;const Se=K.buffer,Y=K.type,J=K.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||W.gpuType===jf;if(W.isInterleavedBufferAttribute){const oe=W.data,Ee=oe.stride,ae=W.offset;if(oe.isInstancedInterleavedBuffer){for(let xe=0;xe<U.locationSize;xe++)f(U.location+xe,oe.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<U.locationSize;xe++)m(U.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let xe=0;xe<U.locationSize;xe++)g(U.location+xe,ne/U.locationSize,Y,Z,Ee*J,(ae+ne/U.locationSize*xe)*J,le)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<U.locationSize;oe++)f(U.location+oe,W.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<U.locationSize;oe++)m(U.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let oe=0;oe<U.locationSize;oe++)g(U.location+oe,ne/U.locationSize,Y,Z,ne*J,ne/U.locationSize*oe*J,le)}}else if(F!==void 0){const Z=F[z];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(U.location,Z);break;case 3:t.vertexAttrib3fv(U.location,Z);break;case 4:t.vertexAttrib4fv(U.location,Z);break;default:t.vertexAttrib1fv(U.location,Z)}}}}v()}function R(){w();for(const y in i){const A=i[y];for(const L in A){const N=A[L];for(const G in N)u(N[G].object),delete N[G];delete A[L]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const L in A){const N=A[L];for(const G in N)u(N[G].object),delete N[G];delete A[L]}delete i[y.id]}function b(y){for(const A in i){const L=i[A];if(L[y.id]===void 0)continue;const N=L[y.id];for(const G in N)u(N[G].object),delete N[G];delete L[y.id]}}function w(){_(),a=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:_,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function N1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let M=0;M<d;M++)x+=u[M];for(let M=0;M<h.length;M++)n.update(x,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function I1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Hn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const b=P===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vi&&!b)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),M=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:E,maxSamples:R}}function U1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let E=f.clippingState||null;l.value=E,E=u(x,h,g,p);for(let R=0;R!==g;++R)E[R]=n[R];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,x!==!0||m===null){const f=p+M*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,E=p;g!==M;++g,E+=4)a.copy(d[g]).applyMatrix4(v,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function F1(t){let e=new WeakMap;function n(a,o){return o===hd?a.mapping=Fs:o===pd&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===hd||o===pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new YS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class f0 extends l0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,qp=[.125,.215,.35,.446,.526,.582],Sr=20,du=new f0,$p=new at;let fu=null,hu=0,pu=0,mu=!1;const xr=(1+Math.sqrt(5))/2,as=1/xr,Kp=[new q(-xr,as,0),new q(xr,as,0),new q(-as,0,xr),new q(as,0,xr),new q(0,xr,-as),new q(0,xr,as),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,hu,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:qa,format:Hn,colorSpace:lr,depthBuffer:!1},r=Qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=O1(s,e,n)}return r}_compileMaterial(e){const n=new Qn(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const o=new Bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor($p),u.toneMapping=tr,u.autoClear=!1;const p=new r0({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Qn(new Qa,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy($p),M=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;Go(r,v*g,f>2?g:0,g,g),u.setRenderTarget(r),M&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Go(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kp[(r-s-1)%Kp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Qn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),M=s/x,m=isFinite(s)?1+Math.floor(u*M):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const f=[];let v=0;for(let b=0;b<Sr;++b){const w=b/M,_=Math.exp(-w*w/2);f.push(_),b===0?v+=_:b<m&&(v+=2*_)}for(let b=0;b<f.length;b++)f[b]=f[b]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const E=this._sizeLods[r],R=3*E*(r>g-xs?r-g+xs:0),P=4*(this._cubeSize-E);Go(n,R,P,3*E,2*E),l.setRenderTarget(n),l.render(d,du)}}function k1(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+qp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-xs?l=qp[a-t+xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,M=3,m=2,f=1,v=new Float32Array(M*x*p),g=new Float32Array(m*x*p),E=new Float32Array(f*x*p);for(let P=0;P<p;P++){const b=P%3*2/3-1,w=P>2?0:-1,_=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];v.set(_,M*x*P),g.set(h,m*x*P);const y=[P,P,P,P,P,P];E.set(y,f*x*P)}const R=new Hr;R.setAttribute("position",new ni(v,M)),R.setAttribute("uv",new ni(g,m)),R.setAttribute("faceIndex",new ni(E,f)),e.push(R),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qp(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function O1(t,e,n){const i=new Float32Array(Sr),r=new q(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Jp(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function em(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Jf(){return`

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
	`}function B1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===hd||l===pd,u=l===Fs||l===ks;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Zp(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Zp(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function z1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jv("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H1(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const M=h.morphAttributes[x];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const M=p[x];for(let m=0,f=M.length;m<f;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let M=0;if(p!==null){const v=p.array;M=p.version;for(let g=0,E=v.length;g<E;g+=3){const R=v[g+0],P=v[g+1],b=v[g+2];h.push(R,P,P,b,b,R)}}else if(x!==void 0){const v=x.array;M=x.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const R=g+0,P=g+1,b=g+2;h.push(R,P,P,b,b,R)}}else return;const m=new(Qv(h)?a0:s0)(h,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function V1(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*a,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,M){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,x);let f=0;for(let v=0;v<x;v++)f+=p[v];for(let v=0;v<M.length;v++)n.update(f,i,M[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function G1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function W1(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let y=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let R=o.attributes.position.count*E,P=1;R>e.maxTextureSize&&(P=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*P*4*d),w=new t0(b,R,P,d);w.type=vi,w.needsUpdate=!0;const _=E*4;for(let A=0;A<d;A++){const L=f[A],N=v[A],G=g[A],k=R*P*4*A;for(let F=0;F<L.count;F++){const z=F*_;x===!0&&(r.fromBufferAttribute(L,F),b[k+z+0]=r.x,b[k+z+1]=r.y,b[k+z+2]=r.z,b[k+z+3]=0),M===!0&&(r.fromBufferAttribute(N,F),b[k+z+4]=r.x,b[k+z+5]=r.y,b[k+z+6]=r.z,b[k+z+7]=0),m===!0&&(r.fromBufferAttribute(G,F),b[k+z+8]=r.x,b[k+z+9]=r.y,b[k+z+10]=r.z,b[k+z+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new Qe(R,P)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const M=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function j1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class h0 extends cn{constructor(e,n,i,r,s,a,o,l,c,u=Rs){if(u!==Rs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=kr),i===void 0&&u===Bs&&(i=Os),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const p0=new cn,tm=new h0(1,1),m0=new t0,g0=new PS,v0=new c0,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),am=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lc(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function X1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function K1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;am.set(i),t.uniformMatrix2fv(this.addr,!1,am),Nt(n,i)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;sm.set(i),t.uniformMatrix3fv(this.addr,!1,sm),Nt(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),Nt(n,i)}}function J1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tm.compareFunction=Zv,s=tm):s=p0,n.setTexture2D(e||s,r)}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g0,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v0,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m0,r)}function dw(t){switch(t){case 5126:return X1;case 35664:return Y1;case 35665:return q1;case 35666:return $1;case 35674:return K1;case 35675:return Z1;case 35676:return Q1;case 5124:case 35670:return J1;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(t,e){t.uniform1fv(this.addr,e)}function hw(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function pw(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function mw(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function gw(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vw(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _w(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function xw(t,e){t.uniform1iv(this.addr,e)}function yw(t,e){t.uniform2iv(this.addr,e)}function Sw(t,e){t.uniform3iv(this.addr,e)}function Mw(t,e){t.uniform4iv(this.addr,e)}function Ew(t,e){t.uniform1uiv(this.addr,e)}function ww(t,e){t.uniform2uiv(this.addr,e)}function Tw(t,e){t.uniform3uiv(this.addr,e)}function Aw(t,e){t.uniform4uiv(this.addr,e)}function Rw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||p0,s[a])}function Cw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||g0,s[a])}function bw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||v0,s[a])}function Pw(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||m0,s[a])}function Lw(t){switch(t){case 5126:return fw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return xw;case 35667:case 35671:return yw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Pw}}class Dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dw(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lw(n.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function om(t,e){t.seq.push(e),t.map[e.id]=e}function Uw(t,e,n){const i=t.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),a=gu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){om(n,c===void 0?new Dw(o,t,e):new Nw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Iw(o),om(n,d)),n=d}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Uw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fw=37297;let kw=0;function Ow(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Bw(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===kl&&n===Fl?i="LinearDisplayP3ToLinearSRGB":e===Fl&&n===kl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case ac:return[i,"LinearTransferOETF"];case qn:case Zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Ow(t.getShaderSource(e),a)}else return r}function zw(t,e){const n=Bw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Hw(t,e){let n;switch(e){case iS:n="Linear";break;case rS:n="Reinhard";break;case sS:n="OptimizedCineon";break;case aS:n="ACESFilmic";break;case lS:n="AgX";break;case cS:n="Neutral";break;case oS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Vw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Gw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ww(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ca(t){return t!==""}function um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(t){return t.replace(jw,Yw)}const Xw=new Map;function Yw(t,e){let n=We[e];if(n===void 0){const i=Xw.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wd(n)}const qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(qw,$w)}function $w(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Kw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===by?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Zw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Jw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bv:e="ENVMAP_BLENDING_MULTIPLY";break;case tS:e="ENVMAP_BLENDING_MIX";break;case nS:e="ENVMAP_BLENDING_ADD";break}return e}function eT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Kw(n),c=Zw(n),u=Qw(n),d=Jw(n),h=eT(n),p=Vw(n),x=Gw(s),M=r.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(m=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?We.tonemapping_pars_fragment:"",n.toneMapping!==tr?Hw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,zw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),a=Wd(a),a=um(a,n),a=dm(a,n),o=Wd(o),o=um(o,n),o=dm(o,n),a=fm(a),o=fm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=v+m+a,E=v+f+o,R=lm(r,r.VERTEX_SHADER,g),P=lm(r,r.FRAGMENT_SHADER,E);r.attachShader(M,R),r.attachShader(M,P),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(A){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(M).trim(),N=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(P).trim();let k=!0,F=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,R,P);else{const z=cm(r,R,"vertex"),U=cm(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+z+`
`+U)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(N===""||G==="")&&(F=!1);F&&(A.diagnostics={runnable:k,programLog:L,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:f}})}r.deleteShader(R),r.deleteShader(P),w=new cl(r,M),_=Ww(r,M)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,Fw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=P,this}let nT=0;class iT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rT(e),n.set(e,i)),i}}class rT{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}}function sT(t,e,n,i,r,s,a){const o=new n0,l=new iT,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,A,L,N){const G=L.fog,k=N.geometry,F=_.isMeshStandardMaterial?L.environment:null,z=(_.isMeshStandardMaterial?n:e).get(_.envMap||F),U=z&&z.mapping===sc?z.image.height:null,W=x[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const Z=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Z!==void 0?Z.length:0;let K=0;k.morphAttributes.position!==void 0&&(K=1),k.morphAttributes.normal!==void 0&&(K=2),k.morphAttributes.color!==void 0&&(K=3);let Se,Y,J,le;if(W){const Je=$n[W];Se=Je.vertexShader,Y=Je.fragmentShader}else Se=_.vertexShader,Y=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),le=l.getFragmentShaderID(_);const oe=t.getRenderTarget(),Ee=N.isInstancedMesh===!0,ae=N.isBatchedMesh===!0,xe=!!_.map,Be=!!_.matcap,I=!!z,Ue=!!_.aoMap,ze=!!_.lightMap,Le=!!_.bumpMap,fe=!!_.normalMap,Ze=!!_.displacementMap,Ae=!!_.emissiveMap,be=!!_.metalnessMap,D=!!_.roughnessMap,T=_.anisotropy>0,V=_.clearcoat>0,Q=_.dispersion>0,ie=_.iridescence>0,$=_.sheen>0,Te=_.transmission>0,de=T&&!!_.anisotropyMap,ve=V&&!!_.clearcoatMap,Ie=V&&!!_.clearcoatNormalMap,re=V&&!!_.clearcoatRoughnessMap,ge=ie&&!!_.iridescenceMap,Fe=ie&&!!_.iridescenceThicknessMap,De=$&&!!_.sheenColorMap,pe=$&&!!_.sheenRoughnessMap,He=!!_.specularMap,Ge=!!_.specularColorMap,mt=!!_.specularIntensityMap,O=Te&&!!_.transmissionMap,ce=Te&&!!_.thicknessMap,ee=!!_.gradientMap,te=!!_.alphaMap,he=_.alphaTest>0,ke=!!_.alphaHash,$e=!!_.extensions;let wt=tr;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Ot={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:Y,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ae,batchingColor:ae&&N._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:lr,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:Be,envMap:I,envMapMode:I&&z.mapping,envMapCubeUVHeight:U,aoMap:Ue,lightMap:ze,bumpMap:Le,normalMap:fe,displacementMap:h&&Ze,emissiveMap:Ae,normalMapObjectSpace:fe&&_.normalMapType===pS,normalMapTangentSpace:fe&&_.normalMapType===hS,metalnessMap:be,roughnessMap:D,anisotropy:T,anisotropyMap:de,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:Ie,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ie,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:He,specularColorMap:Ge,specularIntensityMap:mt,transmission:Te,transmissionMap:O,thicknessMap:ce,gradientMap:ee,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:ke,combine:_.combine,mapUv:xe&&M(_.map.channel),aoMapUv:Ue&&M(_.aoMap.channel),lightMapUv:ze&&M(_.lightMap.channel),bumpMapUv:Le&&M(_.bumpMap.channel),normalMapUv:fe&&M(_.normalMap.channel),displacementMapUv:Ze&&M(_.displacementMap.channel),emissiveMapUv:Ae&&M(_.emissiveMap.channel),metalnessMapUv:be&&M(_.metalnessMap.channel),roughnessMapUv:D&&M(_.roughnessMap.channel),anisotropyMapUv:de&&M(_.anisotropyMap.channel),clearcoatMapUv:ve&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(_.sheenRoughnessMap.channel),specularMapUv:He&&M(_.specularMap.channel),specularColorMapUv:Ge&&M(_.specularColorMap.channel),specularIntensityMapUv:mt&&M(_.specularIntensityMap.channel),transmissionMapUv:O&&M(_.transmissionMap.channel),thicknessMapUv:ce&&M(_.thicknessMap.channel),alphaMapUv:te&&M(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(fe||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(xe||te),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hi,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)y.push(A),y.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(v(y,_),g(y,_),y.push(t.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function v(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),_.push(o.mask)}function E(_){const y=x[_.type];let A;if(y){const L=$n[y];A=GS.clone(L.uniforms)}else A=_.uniforms;return A}function R(_,y){let A;for(let L=0,N=u.length;L<N;L++){const G=u[L];if(G.cacheKey===y){A=G,++A.usedTimes;break}}return A===void 0&&(A=new tT(t,y,_,s),u.push(A)),A}function P(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function b(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:R,releaseProgram:P,releaseShaderCache:b,programs:u,dispose:w}}function aT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function oT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,x,M,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:M,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=M,f.group=m),e++,f}function o(d,h,p,x,M,m){const f=a(d,h,p,x,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,M,m){const f=a(d,h,p,x,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||oT),i.length>1&&i.sort(h||pm),r.length>1&&r.sort(h||pm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function lT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new mm,t.set(i,[a])):r>=s.length?(a=new mm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new at};break;case"SpotLight":n={position:new q,direction:new q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function uT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dT=0;function fT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hT(t){const e=new cT,n=uT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Lt,a=new Lt;function o(c){let u=0,d=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,x=0,M=0,m=0,f=0,v=0,g=0,E=0,R=0,P=0,b=0;c.sort(fT);for(let _=0,y=c.length;_<y;_++){const A=c[_],L=A.color,N=A.intensity,G=A.distance,k=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*N,d+=L.g*N,h+=L.b*N;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],N);b++}else if(A.isDirectionalLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,U=n.get(A);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=A.shadow.matrix,v++}i.directional[p]=F,p++}else if(A.isSpotLight){const F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(L).multiplyScalar(N),F.distance=G,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[M]=F;const z=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,z.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[M]=z.matrix,A.castShadow){const U=n.get(A);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=k,E++}M++}else if(A.isRectAreaLight){const F=e.get(A);F.color.copy(L).multiplyScalar(N),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){const z=A.shadow,U=n.get(A);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[x]=U,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=A.shadow.matrix,g++}i.point[x]=F,x++}else if(A.isHemisphereLight){const F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(N),F.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[f]=F,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const w=i.hash;(w.directionalLength!==p||w.pointLength!==x||w.spotLength!==M||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==v||w.numPointShadows!==g||w.numSpotShadows!==E||w.numSpotMaps!==R||w.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=E+R-P,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=b,w.directionalLength=p,w.pointLength=x,w.spotLength=M,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=v,w.numPointShadows=g,w.numSpotShadows=E,w.numSpotMaps=R,w.numLightProbes=b,i.version=dT++)}function l(c,u){let d=0,h=0,p=0,x=0,M=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const g=c[f];if(g.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(g.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function gm(t){const e=new hT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gm(t),e.set(r,[o])):s>=a.length?(o=new gm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class mT extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gT extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
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
}`;function xT(t,e,n){let i=new u0;const r=new Qe,s=new Qe,a=new Ft,o=new mT({depthPacking:fS}),l=new gT,c={},u=n.maxTextureSize,d={[rr]:ln,[ln]:rr,[hi]:hi},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:vT,fragmentShader:_T}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Hr;x.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ov;let f=this.type;this.render=function(P,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const _=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),L=t.state;L.setBlending(er),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=f!==ci&&this.type===ci,G=f===ci&&this.type!==ci;for(let k=0,F=P.length;k<F;k++){const z=P[k],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const W=U.getFrameExtents();if(r.multiply(W),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,U.mapSize.y=s.y)),U.map===null||N===!0||G===!0){const ne=this.type!==ci?{minFilter:Rn,magFilter:Rn}:{};U.map!==null&&U.map.dispose(),U.map=new Or(r.x,r.y,ne),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Z=U.getViewportCount();for(let ne=0;ne<Z;ne++){const K=U.getViewport(ne);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a),U.updateMatrices(z,ne),i=U.getFrustum(),E(b,w,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===ci&&v(U,w),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(_,y,A)};function v(P,b){const w=e.update(M);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(b,null,w,h,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(b,null,w,p,M,null)}function g(P,b,w,_){let y=null;const A=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=y.uuid,N=b.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let k=G[N];k===void 0&&(k=y.clone(),G[N]=k,b.addEventListener("dispose",R)),y=k}if(y.visible=b.visible,y.wireframe=b.wireframe,_===ci?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:d[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=t.properties.get(y);L.light=w}return y}function E(P,b,w,_,y){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ci)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const N=e.update(P),G=P.material;if(Array.isArray(G)){const k=N.groups;for(let F=0,z=k.length;F<z;F++){const U=k[F],W=G[U.materialIndex];if(W&&W.visible){const Z=g(P,W,_,y);P.onBeforeShadow(t,P,b,w,N,Z,U),t.renderBufferDirect(w,null,N,Z,P,U),P.onAfterShadow(t,P,b,w,N,Z,U)}}}else if(G.visible){const k=g(P,G,_,y);P.onBeforeShadow(t,P,b,w,N,k,null),t.renderBufferDirect(w,null,N,k,P,null),P.onAfterShadow(t,P,b,w,N,k,null)}}const L=P.children;for(let N=0,G=L.length;N<G;N++)E(L[N],b,w,_,y)}function R(P){P.target.removeEventListener("dispose",R);for(const w in c){const _=c[w],y=P.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}function yT(t){function e(){let O=!1;const ce=new Ft;let ee=null;const te=new Ft(0,0,0,0);return{setMask:function(he){ee!==he&&!O&&(t.colorMask(he,he,he,he),ee=he)},setLocked:function(he){O=he},setClear:function(he,ke,$e,wt,Ot){Ot===!0&&(he*=wt,ke*=wt,$e*=wt),ce.set(he,ke,$e,wt),te.equals(ce)===!1&&(t.clearColor(he,ke,$e,wt),te.copy(ce))},reset:function(){O=!1,ee=null,te.set(-1,0,0,0)}}}function n(){let O=!1,ce=null,ee=null,te=null;return{setTest:function(he){he?le(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!O&&(t.depthMask(he),ce=he)},setFunc:function(he){if(ee!==he){switch(he){case qy:t.depthFunc(t.NEVER);break;case $y:t.depthFunc(t.ALWAYS);break;case Ky:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case Zy:t.depthFunc(t.EQUAL);break;case Qy:t.depthFunc(t.GEQUAL);break;case Jy:t.depthFunc(t.GREATER);break;case eS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=he}},setLocked:function(he){O=he},setClear:function(he){te!==he&&(t.clearDepth(he),te=he)},reset:function(){O=!1,ce=null,ee=null,te=null}}}function i(){let O=!1,ce=null,ee=null,te=null,he=null,ke=null,$e=null,wt=null,Ot=null;return{setTest:function(Je){O||(Je?le(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!O&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,ii,jn){(ee!==Je||te!==ii||he!==jn)&&(t.stencilFunc(Je,ii,jn),ee=Je,te=ii,he=jn)},setOp:function(Je,ii,jn){(ke!==Je||$e!==ii||wt!==jn)&&(t.stencilOp(Je,ii,jn),ke=Je,$e=ii,wt=jn)},setLocked:function(Je){O=Je},setClear:function(Je){Ot!==Je&&(t.clearStencil(Je),Ot=Je)},reset:function(){O=!1,ce=null,ee=null,te=null,he=null,ke=null,$e=null,wt=null,Ot=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,x=!1,M=null,m=null,f=null,v=null,g=null,E=null,R=null,P=new at(0,0,0),b=0,w=!1,_=null,y=null,A=null,L=null,N=null;const G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=F>=1):z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=F>=2);let U=null,W={};const Z=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),K=new Ft().fromArray(Z),Se=new Ft().fromArray(ne);function Y(O,ce,ee,te){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(O,ke),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ee;$e++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const J={};J[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(Il),Le(!1),fe(Mp),le(t.CULL_FACE),Ue(er);function le(O){c[O]!==!0&&(t.enable(O),c[O]=!0)}function oe(O){c[O]!==!1&&(t.disable(O),c[O]=!1)}function Ee(O,ce){return u[O]!==ce?(t.bindFramebuffer(O,ce),u[O]=ce,O===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),O===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ae(O,ce){let ee=h,te=!1;if(O){ee=d.get(ce),ee===void 0&&(ee=[],d.set(ce,ee));const he=O.textures;if(ee.length!==he.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,$e=he.length;ke<$e;ke++)ee[ke]=t.COLOR_ATTACHMENT0+ke;ee.length=he.length,te=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,te=!0);te&&t.drawBuffers(ee)}function xe(O){return p!==O?(t.useProgram(O),p=O,!0):!1}const Be={[yr]:t.FUNC_ADD,[Ly]:t.FUNC_SUBTRACT,[Dy]:t.FUNC_REVERSE_SUBTRACT};Be[Ny]=t.MIN,Be[Iy]=t.MAX;const I={[Uy]:t.ZERO,[Fy]:t.ONE,[ky]:t.SRC_COLOR,[dd]:t.SRC_ALPHA,[Gy]:t.SRC_ALPHA_SATURATE,[Hy]:t.DST_COLOR,[By]:t.DST_ALPHA,[Oy]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[Vy]:t.ONE_MINUS_DST_COLOR,[zy]:t.ONE_MINUS_DST_ALPHA,[Wy]:t.CONSTANT_COLOR,[jy]:t.ONE_MINUS_CONSTANT_COLOR,[Xy]:t.CONSTANT_ALPHA,[Yy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ue(O,ce,ee,te,he,ke,$e,wt,Ot,Je){if(O===er){x===!0&&(oe(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),O!==Py){if(O!==M||Je!==w){if((m!==yr||g!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,g=yr),Je)switch(O){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.ONE,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ep:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case wp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,v=null,E=null,R=null,P.set(0,0,0),b=0,M=O,w=Je}return}he=he||ce,ke=ke||ee,$e=$e||te,(ce!==m||he!==g)&&(t.blendEquationSeparate(Be[ce],Be[he]),m=ce,g=he),(ee!==f||te!==v||ke!==E||$e!==R)&&(t.blendFuncSeparate(I[ee],I[te],I[ke],I[$e]),f=ee,v=te,E=ke,R=$e),(wt.equals(P)===!1||Ot!==b)&&(t.blendColor(wt.r,wt.g,wt.b,Ot),P.copy(wt),b=Ot),M=O,w=!1}function ze(O,ce){O.side===hi?oe(t.CULL_FACE):le(t.CULL_FACE);let ee=O.side===ln;ce&&(ee=!ee),Le(ee),O.blending===As&&O.transparent===!1?Ue(er):Ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const te=O.stencilWrite;a.setTest(te),te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(O){_!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),_=O)}function fe(O){O!==Ry?(le(t.CULL_FACE),O!==y&&(O===Mp?t.cullFace(t.BACK):O===Cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),y=O}function Ze(O){O!==A&&(k&&t.lineWidth(O),A=O)}function Ae(O,ce,ee){O?(le(t.POLYGON_OFFSET_FILL),(L!==ce||N!==ee)&&(t.polygonOffset(ce,ee),L=ce,N=ee)):oe(t.POLYGON_OFFSET_FILL)}function be(O){O?le(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function D(O){O===void 0&&(O=t.TEXTURE0+G-1),U!==O&&(t.activeTexture(O),U=O)}function T(O,ce,ee){ee===void 0&&(U===null?ee=t.TEXTURE0+G-1:ee=U);let te=W[ee];te===void 0&&(te={type:void 0,texture:void 0},W[ee]=te),(te.type!==O||te.texture!==ce)&&(U!==ee&&(t.activeTexture(ee),U=ee),t.bindTexture(O,ce||J[O]),te.type=O,te.texture=ce)}function V(){const O=W[U];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(O){K.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function pe(O){Se.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),Se.copy(O))}function He(O,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let te=ee.get(O);te===void 0&&(te=t.getUniformBlockIndex(ce,O.name),ee.set(O,te))}function Ge(O,ce){const te=l.get(ce).get(O);o.get(ce)!==te&&(t.uniformBlockBinding(ce,te,O.__bindingPointIndex),o.set(ce,te))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,W={},u={},d=new WeakMap,h=[],p=null,x=!1,M=null,m=null,f=null,v=null,g=null,E=null,R=null,P=new at(0,0,0),b=0,w=!1,_=null,y=null,A=null,L=null,N=null,K.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:oe,bindFramebuffer:Ee,drawBuffers:ae,useProgram:xe,setBlending:Ue,setMaterial:ze,setFlipSided:Le,setCullFace:fe,setLineWidth:Ze,setPolygonOffset:Ae,setScissorTest:be,activeTexture:D,bindTexture:T,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:ge,texImage3D:Fe,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:Ie,texStorage3D:re,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:De,viewport:pe,reset:mt}}function vm(t,e,n,i){const r=ST(i);switch(n){case Wv:return t*e;case Xv:return t*e;case Yv:return t*e*2;case qv:return t*e/r.components*r.byteLength;case qf:return t*e/r.components*r.byteLength;case $v:return t*e*2/r.components*r.byteLength;case $f:return t*e*2/r.components*r.byteLength;case jv:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Kf:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _d:case yd:return Math.max(t,16)*Math.max(e,8)/4;case vd:case xd:return Math.max(t,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case Od:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kv:case zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ST(t){switch(t){case Ti:case Hv:return{byteLength:1,components:1};case za:case Vv:case qa:return{byteLength:2,components:1};case Xf:case Yf:return{byteLength:2,components:4};case kr:case jf:case vi:return{byteLength:4,components:1};case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function MT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,T){return p?new OffscreenCanvas(D,T):Bl("canvas")}function M(D,T,V){let Q=1;const ie=be(D);if((ie.width>V||ie.height>V)&&(Q=V/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const $=Math.floor(Q*ie.width),Te=Math.floor(Q*ie.height);d===void 0&&(d=x($,Te));const de=T?x($,Te):d;return de.width=$,de.height=Te,de.getContext("2d").drawImage(D,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+Te+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Rn&&D.minFilter!==zn}function f(D){t.generateMipmap(D)}function v(D,T,V,Q,ie=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let $=T;if(T===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),T===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),T===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),T===t.RGBA){const Te=ie?Ul:rt.getTransfer(Q);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=Te===ct?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(D,T){let V;return D?T===null||T===kr||T===Os?V=t.DEPTH24_STENCIL8:T===vi?V=t.DEPTH32F_STENCIL8:T===za&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===kr||T===Os?V=t.DEPTH_COMPONENT24:T===vi?V=t.DEPTH_COMPONENT32F:T===za&&(V=t.DEPTH_COMPONENT16),V}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Rn&&D.minFilter!==zn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function R(D){const T=D.target;T.removeEventListener("dispose",R),b(T),T.isVideoTexture&&u.delete(T)}function P(D){const T=D.target;T.removeEventListener("dispose",P),_(T)}function b(D){const T=i.get(D);if(T.__webglInit===void 0)return;const V=D.source,Q=h.get(V);if(Q){const ie=Q[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(D),Object.keys(Q).length===0&&h.delete(V)}i.remove(D)}function w(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const V=D.source,Q=h.get(V);delete Q[T.__cacheKey],a.memory.textures--}function _(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ie=0;ie<T.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(T.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)t.deleteFramebuffer(T.__webglFramebuffer[Q]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let Q=0,ie=V.length;Q<ie;Q++){const $=i.get(V[Q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(V[Q])}i.remove(D)}let y=0;function A(){y=0}function L(){const D=y;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),y+=1,D}function N(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function G(D,T){const V=i.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const Q=D.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(V,D,T);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function k(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Se(V,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function F(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Se(V,D,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function z(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Y(V,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}const U={[md]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[gd]:t.MIRRORED_REPEAT},W={[Rn]:t.NEAREST,[uS]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Wc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Z={[mS]:t.NEVER,[SS]:t.ALWAYS,[gS]:t.LESS,[Zv]:t.LEQUAL,[vS]:t.EQUAL,[yS]:t.GEQUAL,[_S]:t.GREATER,[xS]:t.NOTEQUAL};function ne(D,T){if(T.type===vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zn||T.magFilter===Wc||T.magFilter===Mo||T.magFilter===Ar||T.minFilter===zn||T.minFilter===Wc||T.minFilter===Mo||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,U[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,U[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,U[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,W[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==Mo&&T.minFilter!==Ar||T.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function K(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",R));const Q=T.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const $=N(T);if($!==D.__cacheKey){ie[$]===void 0&&(ie[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[$].usedTimes++;const Te=ie[D.__cacheKey];Te!==void 0&&(ie[D.__cacheKey].usedTimes--,Te.usedTimes===0&&w(T)),D.__cacheKey=$,D.__webglTexture=ie[$].texture}return V}function Se(D,T,V){let Q=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=K(D,T),$=T.source;n.bindTexture(Q,D.__webglTexture,t.TEXTURE0+V);const Te=i.get($);if($.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const de=rt.getPrimaries(rt.workingColorSpace),ve=T.colorSpace===Gi?null:rt.getPrimaries(T.colorSpace),Ie=T.colorSpace===Gi||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let re=M(T.image,!1,r.maxTextureSize);re=Ae(T,re);const ge=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let De=v(T.internalFormat,ge,Fe,T.colorSpace,T.isVideoTexture);ne(Q,T);let pe;const He=T.mipmaps,Ge=T.isVideoTexture!==!0,mt=Te.__version===void 0||ie===!0,O=$.dataReady,ce=E(T,re);if(T.isDepthTexture)De=g(T.format===Bs,T.type),mt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ge,Fe,null));else if(T.isDataTexture)if(He.length>0){Ge&&mt&&n.texStorage2D(t.TEXTURE_2D,ce,De,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,ge,Fe,pe.data);T.generateMipmaps=!1}else Ge?(mt&&n.texStorage2D(t.TEXTURE_2D,ce,De,re.width,re.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Fe,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ge,Fe,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,He[0].width,He[0].height,re.depth);for(let ee=0,te=He.length;ee<te;ee++)if(pe=He[ee],T.format!==Hn)if(ge!==null)if(Ge){if(O)if(T.layerUpdates.size>0){const he=vm(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const $e=pe.data.subarray(ke*he/pe.data.BYTES_PER_ELEMENT,(ke+1)*he/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ke,pe.width,pe.height,1,ge,$e,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,De,pe.width,pe.height,re.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,Fe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,De,pe.width,pe.height,re.depth,0,ge,Fe,pe.data)}else{Ge&&mt&&n.texStorage2D(t.TEXTURE_2D,ce,De,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],T.format!==Hn?ge!==null?Ge?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,ge,Fe,pe.data)}else if(T.isDataArrayTexture)if(Ge){if(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,re.width,re.height,re.depth),O)if(T.layerUpdates.size>0){const ee=vm(re.width,re.height,T.format,T.type);for(const te of T.layerUpdates){const he=re.data.subarray(te*ee/re.data.BYTES_PER_ELEMENT,(te+1)*ee/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ge,Fe,he)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isData3DTexture)Ge?(mt&&n.texStorage3D(t.TEXTURE_3D,ce,De,re.width,re.height,re.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isFramebufferTexture){if(mt)if(Ge)n.texStorage2D(t.TEXTURE_2D,ce,De,re.width,re.height);else{let ee=re.width,te=re.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,De,ee,te,0,ge,Fe,null),ee>>=1,te>>=1}}else if(He.length>0){if(Ge&&mt){const ee=be(He[0]);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?O&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ge,Fe,pe):n.texImage2D(t.TEXTURE_2D,ee,De,ge,Fe,pe);T.generateMipmaps=!1}else if(Ge){if(mt){const ee=be(re);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,re)}else n.texImage2D(t.TEXTURE_2D,0,De,ge,Fe,re);m(T)&&f(Q),Te.__version=$.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Y(D,T,V){if(T.image.length!==6)return;const Q=K(D,T),ie=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+V);const $=i.get(ie);if(ie.version!==$.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const Te=rt.getPrimaries(rt.workingColorSpace),de=T.colorSpace===Gi?null:rt.getPrimaries(T.colorSpace),ve=T.colorSpace===Gi||Te===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ie&&!re?ge[te]=M(T.image[te],!0,r.maxCubemapSize):ge[te]=re?T.image[te].image:T.image[te],ge[te]=Ae(T,ge[te]);const Fe=ge[0],De=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),He=v(T.internalFormat,De,pe,T.colorSpace),Ge=T.isVideoTexture!==!0,mt=$.__version===void 0||Q===!0,O=ie.dataReady;let ce=E(T,Fe);ne(t.TEXTURE_CUBE_MAP,T);let ee;if(Ie){Ge&&mt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Fe.width,Fe.height);for(let te=0;te<6;te++){ee=ge[te].mipmaps;for(let he=0;he<ee.length;he++){const ke=ee[he];T.format!==Hn?De!==null?Ge?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,De,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,De,pe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,De,pe,ke.data)}}}else{if(ee=T.mipmaps,Ge&&mt){ee.length>0&&ce++;const te=be(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ge?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,De,pe,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ge[te].width,ge[te].height,0,De,pe,ge[te].data);for(let he=0;he<ee.length;he++){const $e=ee[he].image[te].image;Ge?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,$e.width,$e.height,De,pe,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,$e.width,$e.height,0,De,pe,$e.data)}}else{Ge?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,pe,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,De,pe,ge[te]);for(let he=0;he<ee.length;he++){const ke=ee[he];Ge?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,De,pe,ke.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,De,pe,ke.image[te])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),$.__version=ie.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function J(D,T,V,Q,ie,$){const Te=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ve=v(V.internalFormat,Te,de,V.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>$),ge=Math.max(1,T.height>>$);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,$,ve,re,ge,T.depth,0,Te,de,null):n.texImage2D(ie,$,ve,re,ge,0,Te,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,0,Le(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(D,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const Q=T.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,$=g(T.stencilBuffer,ie),Te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Le(T);fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,$,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,D)}else{const Q=T.textures;for(let ie=0;ie<Q.length;ie++){const $=Q[ie],Te=s.convert($.format,$.colorSpace),de=s.convert($.type),ve=v($.internalFormat,Te,de,$.colorSpace),Ie=Le(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ve,T.width,T.height):fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,ie=Le(T);if(T.depthTexture.format===Rs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Bs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(D){const T=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,D)}else if(V){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=t.createRenderbuffer(),le(T.__webglDepthbuffer[Q],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(D,T,V){const Q=i.get(D);T!==void 0&&J(Q.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ee(D)}function xe(D){const T=D.texture,V=i.get(D),Q=i.get(T);D.addEventListener("dispose",P);const ie=D.textures,$=D.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=T.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ve=0;ve<T.mipmaps.length;ve++)V.__webglFramebuffer[de][ve]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Te)for(let de=0,ve=ie.length;de<ve;de++){const Ie=i.get(ie[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}if(D.samples>0&&fe(D)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const ve=ie[de];V.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ie=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),ge=v(ve.internalFormat,Ie,re,ve.colorSpace,D.isXRRenderTarget===!0),Fe=Le(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,V.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),le(V.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[de][ve],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else J(V.__webglFramebuffer[de],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let de=0,ve=ie.length;de<ve;de++){const Ie=ie[de],re=i.get(Ie);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ne(t.TEXTURE_2D,Ie),J(V.__webglFramebuffer,D,Ie,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Ie)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),ne(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[ve],D,T,t.COLOR_ATTACHMENT0,de,ve);else J(V.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,de,0);m(T)&&f(de),n.unbindTexture()}D.depthBuffer&&Ee(D)}function Be(D){const T=D.textures;for(let V=0,Q=T.length;V<Q;V++){const ie=T[V];if(m(ie)){const $=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(ie).__webglTexture;n.bindTexture($,Te),f($),n.unbindTexture()}}}const I=[],Ue=[];function ze(D){if(D.samples>0){if(fe(D)===!1){const T=D.textures,V=D.width,Q=D.height;let ie=t.COLOR_BUFFER_BIT;const $=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(D),de=T.length>1;if(de)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,ie,t.NEAREST),l===!0&&(I.length=0,Ue.length=0,I.push(t.COLOR_ATTACHMENT0+ve),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push($),Ue.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Le(D){return Math.min(r.maxSamples,D.samples)}function fe(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(D){const T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Ae(D,T){const V=D.colorSpace,Q=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==lr&&V!==Gi&&(rt.getTransfer(V)===ct?(Q!==Hn||ie!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=F,this.setTextureCube=z,this.rebindTextures=ae,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=J,this.useMultisampledRTT=fe}function ET(t,e){function n(i,r=Gi){let s;const a=rt.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Yf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hv)return t.BYTE;if(i===Vv)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===jf)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===Wv)return t.ALPHA;if(i===jv)return t.RGB;if(i===Hn)return t.RGBA;if(i===Xv)return t.LUMINANCE;if(i===Yv)return t.LUMINANCE_ALPHA;if(i===Rs)return t.DEPTH_COMPONENT;if(i===Bs)return t.DEPTH_STENCIL;if(i===qv)return t.RED;if(i===qf)return t.RED_INTEGER;if(i===$v)return t.RG;if(i===$f)return t.RG_INTEGER;if(i===Kf)return t.RGBA_INTEGER;if(i===rl||i===sl||i===al||i===ol)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===_d||i===xd||i===yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sd||i===Md||i===Ed)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sd||i===Md)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ed)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wd||i===Td||i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Dd||i===Nd||i===Id||i===Ud||i===Fd||i===kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Id)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ud)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Od||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kv||i===zd||i===Hd||i===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class wT extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wo extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TT={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const AT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RT=`
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

}`;class CT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:AT,fragmentShader:RT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends Ws{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const M=new CT,m=n.getContextAttributes();let f=null,v=null;const g=[],E=[],R=new Qe;let P=null;const b=new Bn;b.layers.enable(1),b.viewport=new Ft;const w=new Bn;w.layers.enable(2),w.viewport=new Ft;const _=[b,w],y=new wT;y.layers.enable(1),y.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=g[Y];return J===void 0&&(J=new vu,g[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=g[Y];return J===void 0&&(J=new vu,g[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=g[Y];return J===void 0&&(J=new vu,g[Y]=J),J.getHandSpace()};function N(Y){const J=E.indexOf(Y.inputSource);if(J===-1)return;const le=g[J];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<g.length;Y++){const J=E[Y];J!==null&&(E[Y]=null,g[Y].disconnect(J))}A=null,L=null,M.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,v=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Or(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Bs:Rs,le=m.stencil?Os:kr);const Ee={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Or(h.textureWidth,h.textureHeight,{format:Hn,type:Ti,depthTexture:new h0(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function k(Y){for(let J=0;J<Y.removed.length;J++){const le=Y.removed[J],oe=E.indexOf(le);oe>=0&&(E[oe]=null,g[oe].disconnect(le))}for(let J=0;J<Y.added.length;J++){const le=Y.added[J];let oe=E.indexOf(le);if(oe===-1){for(let ae=0;ae<g.length;ae++)if(ae>=E.length){E.push(le),oe=ae;break}else if(E[ae]===null){E[ae]=le,oe=ae;break}if(oe===-1)break}const Ee=g[oe];Ee&&Ee.connect(le)}}const F=new q,z=new q;function U(Y,J,le){F.setFromMatrixPosition(J.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const oe=F.distanceTo(z),Ee=J.projectionMatrix.elements,ae=le.projectionMatrix.elements,xe=Ee[14]/(Ee[10]-1),Be=Ee[14]/(Ee[10]+1),I=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],ze=(Ee[8]-1)/Ee[0],Le=(ae[8]+1)/ae[0],fe=xe*ze,Ze=xe*Le,Ae=oe/(-ze+Le),be=Ae*-ze;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(be),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const D=xe+Ae,T=Be+Ae,V=fe-be,Q=Ze+(oe-be),ie=I*Be/T*D,$=Ue*Be/T*D;Y.projectionMatrix.makePerspective(V,Q,ie,$,D,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function W(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;M.texture!==null&&(Y.near=M.depthNear,Y.far=M.depthFar),y.near=w.near=b.near=Y.near,y.far=w.far=b.far=Y.far,(A!==y.near||L!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far,b.near=A,b.far=L,w.near=A,w.far=L,b.updateProjectionMatrix(),w.updateProjectionMatrix(),Y.updateProjectionMatrix());const J=Y.parent,le=y.cameras;W(y,J);for(let oe=0;oe<le.length;oe++)W(le[oe],J);le.length===2?U(y,b,w):y.projectionMatrix.copy(b.projectionMatrix),Z(Y,y,J)};function Z(Y,J,le){le===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ne=null;function K(Y,J){if(u=J.getViewerPose(c||a),x=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;le.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let ae=0;ae<le.length;ae++){const xe=le[ae];let Be=null;if(p!==null)Be=p.getViewport(xe);else{const Ue=d.getViewSubImage(h,xe);Be=Ue.viewport,ae===0&&(e.setRenderTargetTextures(v,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(v))}let I=_[ae];I===void 0&&(I=new Bn,I.layers.enable(ae),I.viewport=new Ft,_[ae]=I),I.matrix.fromArray(xe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(xe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Be.x,Be.y,Be.width,Be.height),ae===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(I)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const ae=d.getDepthInformation(le[0]);ae&&ae.isValid&&ae.texture&&M.init(e,ae,r.renderState)}}for(let le=0;le<g.length;le++){const oe=E[le],Ee=g[le];oe!==null&&Ee!==void 0&&Ee.update(oe,J,c||a)}ne&&ne(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const Se=new d0;Se.setAnimationLoop(K),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const mr=new Ai,PT=new Lt;function LT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,o0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,g,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),g=v.envMap,E=v.envMapRotation;g&&(m.envMap.value=g,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(PT.makeRotationFromEuler(mr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function c(v,g){let E=r[v.id];E===void 0&&(x(v),E=u(v),r[v.id]=E,v.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(v,R);const P=e.render.frame;s[v.id]!==P&&(h(v),s[v.id]=P)}function u(v){const g=d();v.__bindingPointIndex=g;const E=t.createBuffer(),R=v.__size,P=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],E=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let P=0,b=E.length;P<b;P++){const w=Array.isArray(E[P])?E[P]:[E[P]];for(let _=0,y=w.length;_<y;_++){const A=w[_];if(p(A,P,_,R)===!0){const L=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let k=0;k<N.length;k++){const F=N[k],z=M(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,L+G,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,G),G+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,E,R){const P=v.value,b=g+"_"+E;if(R[b]===void 0)return typeof P=="number"||typeof P=="boolean"?R[b]=P:R[b]=P.clone(),!0;{const w=R[b];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return R[b]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function x(v){const g=v.uniforms;let E=0;const R=16;for(let b=0,w=g.length;b<w;b++){const _=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,A=_.length;y<A;y++){const L=_[y],N=Array.isArray(L.value)?L.value:[L.value];for(let G=0,k=N.length;G<k;G++){const F=N[G],z=M(F),U=E%R;U!==0&&R-U<z.boundary&&(E+=R-U),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=z.storage}}}const P=E%R;return P>0&&(E+=R-P),v.__size=E,v.__cache={},this}function M(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class NT{constructor(e={}){const{canvas:n=ES(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),x=new Int32Array(4);let M=null,m=null;const f=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qn,this.toneMapping=tr,this.toneMappingExposure=1;const g=this;let E=!1,R=0,P=0,b=null,w=-1,_=null;const y=new Ft,A=new Ft;let L=null;const N=new at(0);let G=0,k=n.width,F=n.height,z=1,U=null,W=null;const Z=new Ft(0,0,k,F),ne=new Ft(0,0,k,F);let K=!1;const Se=new u0;let Y=!1,J=!1;const le=new Lt,oe=new q,Ee=new Ft,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Be(){return b===null?z:1}let I=i;function Ue(C,B){return n.getContext(C,B)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const B="webgl2";if(I=Ue(B,C),I===null)throw Ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Le,fe,Ze,Ae,be,D,T,V,Q,ie,$,Te,de,ve,Ie,re,ge,Fe,De,pe,He,Ge,mt;function O(){ze=new z1(I),ze.init(),He=new ET(I,ze),Le=new I1(I,ze,e,He),fe=new yT(I),Ze=new G1(I),Ae=new aT,be=new MT(I,ze,fe,Ae,Le,He,Ze),D=new F1(g),T=new B1(g),V=new KS(I),Ge=new D1(I,V),Q=new H1(I,V,Ze,Ge),ie=new j1(I,Q,V,Ze),Fe=new W1(I,Le,be),Ie=new U1(Ae),$=new sT(g,D,T,ze,Le,Ge,Ie),Te=new LT(g,Ae),de=new lT,ve=new pT(ze),ge=new L1(g,D,T,fe,ie,h,l),re=new xT(g,ie,Le),mt=new DT(I,Ze,Le,fe),De=new N1(I,ze,Ze),pe=new V1(I,ze,Ze),Ze.programs=$.programs,g.capabilities=Le,g.extensions=ze,g.properties=Ae,g.renderLists=de,g.shadowMap=re,g.state=fe,g.info=Ze}O();const ce=new bT(g,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(k,F,!1))},this.getSize=function(C){return C.set(k,F)},this.setSize=function(C,B,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,F=B,n.width=Math.floor(C*z),n.height=Math.floor(B*z),j===!0&&(n.style.width=C+"px",n.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*z,F*z).floor()},this.setDrawingBufferSize=function(C,B,j){k=C,F=B,z=j,n.width=Math.floor(C*j),n.height=Math.floor(B*j),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,B,j,X){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,B,j,X),fe.viewport(y.copy(Z).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,B,j,X){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,B,j,X),fe.scissor(A.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){fe.setScissorTest(K=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,B=!0,j=!0){let X=0;if(C){let H=!1;if(b!==null){const ue=b.texture.format;H=ue===Kf||ue===$f||ue===qf}if(H){const ue=b.texture.type,_e=ue===Ti||ue===kr||ue===za||ue===Os||ue===Xf||ue===Yf,Me=ge.getClearColor(),we=ge.getClearAlpha(),Oe=Me.r,Ve=Me.g,Ne=Me.b;_e?(p[0]=Oe,p[1]=Ve,p[2]=Ne,p[3]=we,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=Oe,x[1]=Ve,x[2]=Ne,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else X|=I.COLOR_BUFFER_BIT}B&&(X|=I.DEPTH_BUFFER_BIT),j&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",he,!1),de.dispose(),ve.dispose(),Ae.dispose(),D.dispose(),T.dispose(),ie.dispose(),Ge.dispose(),mt.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",jn),ce.removeEventListener("sessionend",eh),cr.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Ze.autoReset,B=re.enabled,j=re.autoUpdate,X=re.needsUpdate,H=re.type;O(),Ze.autoReset=C,re.enabled=B,re.autoUpdate=j,re.needsUpdate=X,re.type=H}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const B=C.target;B.removeEventListener("dispose",ke),$e(B)}function $e(C){wt(C),Ae.remove(C)}function wt(C){const B=Ae.get(C).programs;B!==void 0&&(B.forEach(function(j){$.releaseProgram(j)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,j,X,H,ue){B===null&&(B=ae);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Me=_0(C,B,j,X,H);fe.setMaterial(X,_e);let we=j.index,Oe=1;if(X.wireframe===!0){if(we=Q.getWireframeAttribute(j),we===void 0)return;Oe=2}const Ve=j.drawRange,Ne=j.attributes.position;let et=Ve.start*Oe,yt=(Ve.start+Ve.count)*Oe;ue!==null&&(et=Math.max(et,ue.start*Oe),yt=Math.min(yt,(ue.start+ue.count)*Oe)),we!==null?(et=Math.max(et,0),yt=Math.min(yt,we.count)):Ne!=null&&(et=Math.max(et,0),yt=Math.min(yt,Ne.count));const St=yt-et;if(St<0||St===1/0)return;Ge.setup(H,X,Me,j,we);let un,tt=De;if(we!==null&&(un=V.get(we),tt=pe,tt.setIndex(un)),H.isMesh)X.wireframe===!0?(fe.setLineWidth(X.wireframeLinewidth*Be()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(H.isLine){let Re=X.linewidth;Re===void 0&&(Re=1),fe.setLineWidth(Re*Be()),H.isLineSegments?tt.setMode(I.LINES):H.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else H.isPoints?tt.setMode(I.POINTS):H.isSprite&&tt.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)tt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Re=H._multiDrawStarts,Bt=H._multiDrawCounts,nt=H._multiDrawCount,Ln=we?V.get(we).bytesPerElement:1,Vr=Ae.get(X).currentProgram.getUniforms();for(let dn=0;dn<nt;dn++)Vr.setValue(I,"_gl_DrawID",dn),tt.render(Re[dn]/Ln,Bt[dn])}else if(H.isInstancedMesh)tt.renderInstances(et,St,H.count);else if(j.isInstancedBufferGeometry){const Re=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bt=Math.min(j.instanceCount,Re);tt.renderInstances(et,St,Bt)}else tt.render(et,St)};function Ot(C,B,j){C.transparent===!0&&C.side===hi&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,to(C,B,j),C.side=rr,C.needsUpdate=!0,to(C,B,j),C.side=hi):to(C,B,j)}this.compile=function(C,B,j=null){j===null&&(j=C),m=ve.get(j),m.init(B),v.push(m),j.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),C!==j&&C.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const X=new Set;return C.traverse(function(H){const ue=H.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Me=ue[_e];Ot(Me,j,H),X.add(Me)}else Ot(ue,j,H),X.add(ue)}),v.pop(),m=null,X},this.compileAsync=function(C,B,j=null){const X=this.compile(C,B,j);return new Promise(H=>{function ue(){if(X.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){H(C);return}setTimeout(ue,10)}ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Je=null;function ii(C){Je&&Je(C)}function jn(){cr.stop()}function eh(){cr.start()}const cr=new d0;cr.setAnimationLoop(ii),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(C){Je=C,ce.setAnimationLoop(C),C===null?cr.stop():cr.start()},ce.addEventListener("sessionstart",jn),ce.addEventListener("sessionend",eh),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(B),B=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,B,b),m=ve.get(C,v.length),m.init(B),v.push(m),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Se.setFromProjectionMatrix(le),J=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,J),M=de.get(C,f.length),M.init(),f.push(M),ce.enabled===!0&&ce.isPresenting===!0){const ue=g.xr.getDepthSensingMesh();ue!==null&&cc(ue,B,-1/0,g.sortObjects)}cc(C,B,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(U,W),xe=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,xe&&ge.addToRenderList(M,C),this.info.render.frame++,Y===!0&&Ie.beginShadows();const j=m.state.shadowsArray;re.render(j,C,B),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=M.opaque,H=M.transmissive;if(m.setupLights(),B.isArrayCamera){const ue=B.cameras;if(H.length>0)for(let _e=0,Me=ue.length;_e<Me;_e++){const we=ue[_e];nh(X,H,C,we)}xe&&ge.render(C);for(let _e=0,Me=ue.length;_e<Me;_e++){const we=ue[_e];th(M,C,we,we.viewport)}}else H.length>0&&nh(X,H,C,B),xe&&ge.render(C),th(M,C,B);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(g,C,B),Ge.resetDefaultState(),w=-1,_=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&Ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function cc(C,B,j,X){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Se.intersectsSprite(C)){X&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const _e=ie.update(C),Me=C.material;Me.visible&&M.push(C,_e,Me,j,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Se.intersectsObject(C))){const _e=ie.update(C),Me=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ee.copy(_e.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){const we=_e.groups;for(let Oe=0,Ve=we.length;Oe<Ve;Oe++){const Ne=we[Oe],et=Me[Ne.materialIndex];et&&et.visible&&M.push(C,_e,et,j,Ee.z,Ne)}}else Me.visible&&M.push(C,_e,Me,j,Ee.z,null)}}const ue=C.children;for(let _e=0,Me=ue.length;_e<Me;_e++)cc(ue[_e],B,j,X)}function th(C,B,j,X){const H=C.opaque,ue=C.transmissive,_e=C.transparent;m.setupLightsView(j),Y===!0&&Ie.setGlobalState(g.clippingPlanes,j),X&&fe.viewport(y.copy(X)),H.length>0&&eo(H,B,j),ue.length>0&&eo(ue,B,j),_e.length>0&&eo(_e,B,j),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function nh(C,B,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Or(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qa:Ti,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[X.id],_e=X.viewport||y;ue.setSize(_e.z,_e.w);const Me=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(N),G=g.getClearAlpha(),G<1&&g.setClearColor(16777215,.5),xe?ge.render(j):g.clear();const we=g.toneMapping;g.toneMapping=tr;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Y===!0&&Ie.setGlobalState(g.clippingPlanes,X),eo(C,j,X),be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ne=0,et=B.length;Ne<et;Ne++){const yt=B[Ne],St=yt.object,un=yt.geometry,tt=yt.material,Re=yt.group;if(tt.side===hi&&St.layers.test(X.layers)){const Bt=tt.side;tt.side=ln,tt.needsUpdate=!0,ih(St,j,X,un,tt,Re),tt.side=Bt,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(be.updateMultisampleRenderTarget(ue),be.updateRenderTargetMipmap(ue))}g.setRenderTarget(Me),g.setClearColor(N,G),Oe!==void 0&&(X.viewport=Oe),g.toneMapping=we}function eo(C,B,j){const X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ue=C.length;H<ue;H++){const _e=C[H],Me=_e.object,we=_e.geometry,Oe=X===null?_e.material:X,Ve=_e.group;Me.layers.test(j.layers)&&ih(Me,B,j,we,Oe,Ve)}}function ih(C,B,j,X,H,ue){C.onBeforeRender(g,B,j,X,H,ue),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=ln,H.needsUpdate=!0,g.renderBufferDirect(j,B,X,H,C,ue),H.side=rr,H.needsUpdate=!0,g.renderBufferDirect(j,B,X,H,C,ue),H.side=hi):g.renderBufferDirect(j,B,X,H,C,ue),C.onAfterRender(g,B,j,X,H,ue)}function to(C,B,j){B.isScene!==!0&&(B=ae);const X=Ae.get(C),H=m.state.lights,ue=m.state.shadowsArray,_e=H.state.version,Me=$.getParameters(C,H.state,ue,B,j),we=$.getProgramCacheKey(Me);let Oe=X.programs;X.environment=C.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(C.isMeshStandardMaterial?T:D).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?B.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",ke),Oe=new Map,X.programs=Oe);let Ve=Oe.get(we);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===_e)return sh(C,Me),Ve}else Me.uniforms=$.getUniforms(C),C.onBeforeCompile(Me,g),Ve=$.acquireProgram(Me,we),Oe.set(we,Ve),X.uniforms=Me.uniforms;const Ne=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=Ie.uniform),sh(C,Me),X.needsLights=y0(C),X.lightsStateVersion=_e,X.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMap.value=H.state.directionalShadowMap,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotShadowMap.value=H.state.spotShadowMap,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMap.value=H.state.pointShadowMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function rh(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=cl.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function sh(C,B){const j=Ae.get(C);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function _0(C,B,j,X,H){B.isScene!==!0&&(B=ae),be.resetTextureUnits();const ue=B.fog,_e=X.isMeshStandardMaterial?B.environment:null,Me=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:lr,we=(X.isMeshStandardMaterial?T:D).get(X.envMap||_e),Oe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,yt=!!j.morphAttributes.color;let St=tr;X.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(St=g.toneMapping);const un=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=un!==void 0?un.length:0,Re=Ae.get(X),Bt=m.state.lights;if(Y===!0&&(J===!0||C!==_)){const Sn=C===_&&X.id===w;Ie.setState(X,C,Sn)}let nt=!1;X.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Bt.state.version||Re.outputColorSpace!==Me||H.isBatchedMesh&&Re.batching===!1||!H.isBatchedMesh&&Re.batching===!0||H.isBatchedMesh&&Re.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Re.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Re.instancing===!1||!H.isInstancedMesh&&Re.instancing===!0||H.isSkinnedMesh&&Re.skinning===!1||!H.isSkinnedMesh&&Re.skinning===!0||H.isInstancedMesh&&Re.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Re.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Re.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Re.instancingMorph===!1&&H.morphTexture!==null||Re.envMap!==we||X.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ie.numPlanes||Re.numIntersection!==Ie.numIntersection)||Re.vertexAlphas!==Oe||Re.vertexTangents!==Ve||Re.morphTargets!==Ne||Re.morphNormals!==et||Re.morphColors!==yt||Re.toneMapping!==St||Re.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Re.__version=X.version);let Ln=Re.currentProgram;nt===!0&&(Ln=to(X,B,H));let Vr=!1,dn=!1,uc=!1;const Tt=Ln.getUniforms(),bi=Re.uniforms;if(fe.useProgram(Ln.program)&&(Vr=!0,dn=!0,uc=!0),X.id!==w&&(w=X.id,dn=!0),Vr||_!==C){Tt.setValue(I,"projectionMatrix",C.projectionMatrix),Tt.setValue(I,"viewMatrix",C.matrixWorldInverse);const Sn=Tt.map.cameraPosition;Sn!==void 0&&Sn.setValue(I,oe.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,dn=!0,uc=!0)}if(H.isSkinnedMesh){Tt.setOptional(I,H,"bindMatrix"),Tt.setOptional(I,H,"bindMatrixInverse");const Sn=H.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Tt.setValue(I,"boneTexture",Sn.boneTexture,be))}H.isBatchedMesh&&(Tt.setOptional(I,H,"batchingTexture"),Tt.setValue(I,"batchingTexture",H._matricesTexture,be),Tt.setOptional(I,H,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",H._indirectTexture,be),Tt.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",H._colorsTexture,be));const dc=j.morphAttributes;if((dc.position!==void 0||dc.normal!==void 0||dc.color!==void 0)&&Fe.update(H,j,Ln),(dn||Re.receiveShadow!==H.receiveShadow)&&(Re.receiveShadow=H.receiveShadow,Tt.setValue(I,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=we,bi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(bi.envMapIntensity.value=B.environmentIntensity),dn&&(Tt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Re.needsLights&&x0(bi,uc),ue&&X.fog===!0&&Te.refreshFogUniforms(bi,ue),Te.refreshMaterialUniforms(bi,X,z,F,m.state.transmissionRenderTarget[C.id]),cl.upload(I,rh(Re),bi,be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cl.upload(I,rh(Re),bi,be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(I,"center",H.center),Tt.setValue(I,"modelViewMatrix",H.modelViewMatrix),Tt.setValue(I,"normalMatrix",H.normalMatrix),Tt.setValue(I,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Sn=X.uniformsGroups;for(let fc=0,S0=Sn.length;fc<S0;fc++){const ah=Sn[fc];mt.update(ah,Ln),mt.bind(ah,Ln)}}return Ln}function x0(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function y0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,B,j){Ae.get(C.texture).__webglTexture=B,Ae.get(C.depthTexture).__webglTexture=j;const X=Ae.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,B){const j=Ae.get(C);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,j=0){b=C,R=B,P=j;let X=!0,H=null,ue=!1,_e=!1;if(C){const we=Ae.get(C);we.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?be.setupRenderTarget(C):we.__hasExternalTextures&&be.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Ve=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?H=Ve[B][j]:H=Ve[B],ue=!0):C.samples>0&&be.useMultisampledRTT(C)===!1?H=Ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[j]:H=Ve,y.copy(C.viewport),A.copy(C.scissor),L=C.scissorTest}else y.copy(Z).multiplyScalar(z).floor(),A.copy(ne).multiplyScalar(z).floor(),L=K;if(fe.bindFramebuffer(I.FRAMEBUFFER,H)&&X&&fe.drawBuffers(C,H),fe.viewport(y),fe.scissor(A),fe.setScissorTest(L),ue){const we=Ae.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,j)}else if(_e){const we=Ae.get(C.texture),Oe=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,j||0,Oe)}w=-1},this.readRenderTargetPixels=function(C,B,j,X,H,ue,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){fe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=C.texture,Oe=we.format,Ve=we.type;if(!Le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-X&&j>=0&&j<=C.height-H&&I.readPixels(B,j,X,H,He.convert(Oe),He.convert(Ve),ue)}finally{const we=b!==null?Ae.get(b).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,B,j,X,H,ue,_e){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){fe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=C.texture,Oe=we.format,Ve=we.type;if(!Le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=C.width-X&&j>=0&&j<=C.height-H){const Ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(B,j,X,H,He.convert(Oe),He.convert(Ve),0),I.flush();const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await wS(I,et,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue)}finally{I.deleteBuffer(Ne),I.deleteSync(et)}return ue}}finally{const we=b!==null?Ae.get(b).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,B=null,j=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-j),H=Math.floor(C.image.width*X),ue=Math.floor(C.image.height*X),_e=B!==null?B.x:0,Me=B!==null?B.y:0;be.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,_e,Me,H,ue),fe.unbindTexture()},this.copyTextureToTexture=function(C,B,j=null,X=null,H=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],B=arguments[2],H=arguments[3]||0,j=null);let ue,_e,Me,we,Oe,Ve;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Me=j.min.x,we=j.min.y):(ue=C.image.width,_e=C.image.height,Me=0,we=0),X!==null?(Oe=X.x,Ve=X.y):(Oe=0,Ve=0);const Ne=He.convert(B.format),et=He.convert(B.type);be.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),tt=I.getParameter(I.UNPACK_SKIP_ROWS),Re=I.getParameter(I.UNPACK_SKIP_IMAGES),Bt=C.isCompressedTexture?C.mipmaps[H]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,Oe,Ve,ue,_e,Ne,et,Bt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,Oe,Ve,Bt.width,Bt.height,Ne,Bt.data):I.texSubImage2D(I.TEXTURE_2D,H,Oe,Ve,ue,_e,Ne,et,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Re),H===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,B,j=null,X=null,H=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,C=arguments[2],B=arguments[3],H=arguments[4]||0);let ue,_e,Me,we,Oe,Ve,Ne,et,yt;const St=C.isCompressedTexture?C.mipmaps[H]:C.image;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Me=j.max.z-j.min.z,we=j.min.x,Oe=j.min.y,Ve=j.min.z):(ue=St.width,_e=St.height,Me=St.depth,we=0,Oe=0,Ve=0),X!==null?(Ne=X.x,et=X.y,yt=X.z):(Ne=0,et=0,yt=0);const un=He.convert(B.format),tt=He.convert(B.type);let Re;if(B.isData3DTexture)be.setTexture3D(B,0),Re=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)be.setTexture2DArray(B,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Bt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Vr=I.getParameter(I.UNPACK_SKIP_ROWS),dn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Re,H,Ne,et,yt,ue,_e,Me,un,tt,St.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,H,Ne,et,yt,ue,_e,Me,un,St.data):I.texSubImage3D(Re,H,Ne,et,yt,ue,_e,Me,un,tt,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,dn),H===0&&B.generateMipmaps&&I.generateMipmap(Re),fe.unbindTexture()},this.initRenderTarget=function(C){Ae.get(C).__webglFramebuffer===void 0&&be.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?be.setTextureCube(C,0):C.isData3DTexture?be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?be.setTexture2DArray(C,0):be.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){R=0,P=0,b=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zf?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===ac?"display-p3":"srgb"}}class IT extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);const UT=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,FT=`
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
`;function kT({agitation:t=.3}){const e=Pe.useRef(null),n=Pe.useRef(null);return Pe.useEffect(()=>{const i=e.current;if(!i)return;let r;try{r=new NT({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return}const s=()=>Math.min(i.clientWidth||340,480);r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(s(),s()),i.appendChild(r.domElement);const a=new IT,o=new f0(-1,1,1,-1,0,1),l={uTime:{value:Math.random()*40},uAgitation:{value:t},uTilt:{value:new Qe(0,0)}};n.current=l;const c=new Ri({vertexShader:UT,fragmentShader:FT,uniforms:l,transparent:!0}),u=new Qn(new Ja(2,2),c);a.add(u);const d=new Qe(0,0),h=v=>{const g=i.getBoundingClientRect();d.set(((v.clientX-g.left)/g.width-.5)*2,((v.clientY-g.top)/g.height-.5)*-2)},p=()=>d.set(0,0);window.addEventListener("pointermove",h,{passive:!0}),i.addEventListener("pointerleave",p);let x=null,M=performance.now();const m=v=>{const g=Math.min((v-M)/1e3,.05);M=v,l.uTime.value+=g,l.uTilt.value.lerp(d,.04),r.render(a,o)};if(ti)m(performance.now());else{const v=g=>{m(g),x=requestAnimationFrame(v)};x=requestAnimationFrame(v)}const f=()=>{r.setSize(s(),s())};return window.addEventListener("resize",f),()=>{x&&cancelAnimationFrame(x),window.removeEventListener("pointermove",h),window.removeEventListener("resize",f),i.removeEventListener("pointerleave",p),i.removeChild(r.domElement),u.geometry.dispose(),c.dispose(),r.dispose()}},[]),Pe.useEffect(()=>{n.current&&(n.current.uAgitation.value=t)},[t]),S.jsx("div",{ref:e,className:"orb-gl",style:{position:"absolute",inset:0},"aria-hidden":"true"})}const _m=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];function OT({daily:t,replies:e,payments:n,m:i,calc:r}){const s=Vf(e,n),a=Pe.useMemo(()=>Fv(t,e,i,r,s.mtd),[t,e,i,r,s.mtd]),o=Math.min(it(s.mtd,r.goal),1),l=new Date,c=new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),u=l.getDate()/c,d=i.replyRate>0?i.replyRate:Xa,h=i.bookingRate>0?i.bookingRate:Ya,p=it(it(it(it(it(r.goal,r.aov),r.closeRate),r.showRate),h),d),x=it(it(p,r.capacity),r.sendDays/4.345),M=r.capacity>0?x<1?En(x*7,0)+" days":x<9?En(x,1)+" wks":En(x/4.345,1)+" mo":"set capacity",m=Math.max(r.goal,a.p90,1),f=E=>Math.min(E/m,1)*100+"%",v=i.replies<10,g=!v&&i.bookingRate<ft.bookingRate[0];return S.jsxs(Rt,{className:"card herostrip",children:[S.jsx("div",{className:"hs-ghost display","aria-hidden":"true",children:_m[l.getMonth()].slice(0,3)}),S.jsxs("div",{className:"hs-main",children:[S.jsxs("div",{className:"label",children:["Cash collected · ",_m[l.getMonth()].toLowerCase()]}),S.jsx("div",{className:"display hs-num",children:S.jsx(Pr,{value:s.mtd,format:vt})}),S.jsxs("div",{className:"beam",title:"the month, drawn to scale",children:[S.jsx("span",{className:"beam-fill",style:{width:f(s.mtd)}}),S.jsx("span",{className:"beam-goal",style:{left:f(r.goal)}}),S.jsx("span",{className:"beam-pace",style:{left:u*100+"%"},title:"where the month is"}),S.jsx("span",{className:"beam-band",style:{left:f(a.p10),width:"calc("+f(a.p90)+" - "+f(a.p10)+")"}}),S.jsx("span",{className:"beam-p50",style:{left:f(a.p50)}})]}),S.jsxs("div",{className:"beam-legend",children:[S.jsxs("span",{children:[S.jsx("i",{className:"bl-fill"}),"banked ",qe(o,0)]}),S.jsxs("span",{children:[S.jsx("i",{className:"bl-band"}),"forecast P10-P90"]}),S.jsxs("span",{children:[S.jsx("i",{className:"bl-p50"}),"P50 ",gi(a.p50)]}),S.jsxs("span",{children:[S.jsx("i",{className:"bl-goal"}),"goal ",gi(r.goal)]}),S.jsxs("span",{children:[S.jsx("i",{className:"bl-pace"}),"month pace"]})]})]}),S.jsxs("div",{className:"hs-rail",children:[S.jsxs("div",{className:"hs-stat",children:[S.jsx("div",{className:"label",children:"Projected month end"}),S.jsx("div",{className:"display hs-sv",children:S.jsx(Pr,{value:a.p50,format:vt})}),S.jsxs("div",{className:"hdetail",children:[gi(a.p10)," to ",gi(a.p90),", 500 runs"]})]}),S.jsxs("div",{className:"hs-stat",children:[S.jsx("div",{className:"label",children:"Booking rate"}),S.jsx("div",{className:"display hs-sv"+(g?" bad":""),children:v?"--":qe(i.bookingRate)}),S.jsx("div",{className:"hdetail",children:v?"needs 10 replies, at "+Ce(i.replies):Ce(i.booked)+" of "+Ce(i.replies)+" replies · floor "+qe(ft.bookingRate[0],0)})]}),S.jsxs("div",{className:"hs-stat",children:[S.jsx("div",{className:"label",children:"Time to goal"}),S.jsx("div",{className:"display hs-sv",children:M}),S.jsxs("div",{className:"hdetail",children:["at ",Ce(r.capacity)," a day, live rates"]})]}),S.jsxs("div",{className:"hs-stat",children:[S.jsx("div",{className:"label",children:"All time"}),S.jsx("div",{className:"display hs-sv",children:S.jsx(Pr,{value:s.all,format:vt})}),S.jsxs("div",{className:"hdetail",children:[vt(i.dealValue)," signed",s.source==="payments"?" · payments tab":""]})]})]})]})}function BT({daily:t,replies:e,m:n}){const i=oy(t,e),r=Uv(t,e),s=Pe.useMemo(()=>{const o=new Date,l=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Map(t.map(h=>[pt(h.date),h])),u=new Map;e.forEach(h=>{const p=pt(h.date);u.set(p,u.get(p)||{n:0,booked:0,cash:0});const x=u.get(p);x.n++,h.booked&&x.booked++,x.cash+=h.cash});const d={initials:[],followUps:[],comments:[],replies:[],booked:[],cash:[]};for(let h=13;h>=0;h--){const p=pt(new Date(l.getTime()-h*ut)),x=c.get(p),M=u.get(p);d.initials.push(x?x.initials:0),d.followUps.push(x?x.followUps:0),d.comments.push(x?x.comments:0),d.replies.push(M?M.n:0),d.booked.push(M?M.booked:0),d.cash.push(M?M.cash:0)}return d},[t,e]),a=o=>[["this wk",Ce(o.cur)],["last wk",Ce(o.prev)]];return S.jsxs("div",{className:"tiles",children:[S.jsx(Li,{label:"Initials",num:n.initials,format:Ce,sub:Ce(n.touches)+" total touches",delta:i.initials,spark:s.initials,tip:a(r.initials)}),S.jsx(Li,{label:"Follow ups",num:n.followUps,format:Ce,sub:En(it(n.followUps,n.initials))+" per initial",delta:i.followUps,spark:s.followUps,tip:a(r.followUps)}),S.jsx(Li,{label:"Comments",num:n.comments,format:Ce,sub:qe(n.commentCoverage,0)+" of initials",delta:i.comments,spark:s.comments,tip:a(r.comments)}),S.jsx(Li,{label:"Replies",num:n.replies,format:Ce,sub:qe(n.replyRate)+" reply rate",delta:i.replies,spark:s.replies,tip:a(r.replies)}),S.jsx(Li,{label:"Booked",num:n.booked,format:Ce,sub:qe(n.bookingRate)+" booking rate",delta:i.booked,spark:s.booked,tip:a(r.booked)}),S.jsx(Li,{label:"Shown",num:n.shown,format:Ce,sub:qe(n.showRate)+" show rate"}),S.jsx(Li,{label:"Closed",num:n.closed,format:Ce,red:!0,sub:qe(n.closeRate)+" close rate"+(n.avgDeal>0?" · "+vt(n.avgDeal)+" avg":"")}),S.jsx(Li,{label:"Cash",num:n.cash,format:vt,red:!0,sub:vt(n.outstanding)+" outstanding",delta:i.cash,spark:s.cash,tip:a(r.cash)})]})}function zT({daily:t,replies:e,leads:n,m:i,calc:r}){const s=ry(t,e,r.capacity),a=sy(t,e,r.capacity,i),o=ay(t,e,n,i,r),[l,c]=Pe.useState("alerts"),[u,d]=Pe.useState(null),[h,p]=Pe.useState(0),[x,M]=Pe.useState(null),[m,f]=Pe.useState(null),[v,g]=Pe.useState(null),E=Gc("overseer"),R=Gc("memo"),P=Gc("brief"),b=a.findings.filter(k=>k.sev==="r").length+s.filter(k=>k.zone==="r").length,w=a.findings.filter(k=>k.sev==="a").length+s.filter(k=>k.zone==="a").length,_=b>0?1:w>0?.55:.15,y={g:"OK",a:"WARN",r:"FAIL",n:"NULL"},A=o.length?o[0].value:1,L=o[0],N=(k,F)=>S.jsx("button",{className:"btn"+(l===k?" active":""),onClick:()=>c(k),children:F},k),G=(k,F,z,U)=>(k||[]).map((W,Z)=>S.jsxs("div",{className:"dir",onClick:()=>z(F===Z?null:Z),children:[S.jsxs("div",{className:"dir-title",children:[S.jsxs("span",{className:"dnum",children:[U," ",String(Z+1).padStart(2,"0")]})," // ",W.title.toUpperCase()]}),F===Z&&S.jsx("div",{className:"dir-body",children:W.text})]},Z));return S.jsxs(Rt,{className:"pal",children:[S.jsxs("div",{className:"pal-head",children:[S.jsx("h2",{className:"sec",style:{margin:0},children:"Palantir"}),S.jsxs("span",{className:"sysdots",children:[S.jsx("span",{className:"label",children:"sys"}),s.map((k,F)=>S.jsx("button",{className:"sysdot "+k.zone,title:k.name,onClick:()=>d(u===F?null:F),"aria-label":k.name},F))]}),S.jsx("span",{className:"label",children:"cash collected basis"})]}),u!==null&&S.jsxs("div",{className:"dot-detail",children:[s[u].name.toUpperCase()," [",y[s[u].zone],"] · ",s[u].detail]}),S.jsxs("div",{className:"pal-grid",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"orb-stage",children:[S.jsx(kT,{agitation:_}),L&&S.jsxs("div",{className:"orb-text",children:[S.jsx("div",{className:"display ov",children:gi(L.value)}),S.jsx("div",{className:"ol",children:L.per==="mo"?"per month · top lever":"one time · top lever"}),S.jsx("div",{className:"on",children:L.name})]})]}),S.jsx("div",{className:"lbars",children:o.map((k,F)=>S.jsxs("div",{className:"lbar",onClick:()=>g(v===F?null:F),children:[S.jsxs("div",{className:"lbar-top",children:[S.jsx("span",{className:"lever-rank",children:String(F+1).padStart(2,"0")}),S.jsx("span",{className:"lbar-name",children:k.name}),S.jsxs("span",{className:"lbar-val display",children:[gi(k.value),S.jsxs("span",{className:"lever-per",children:[" ",k.per==="mo"?"/mo":"1x"]})]})]}),S.jsx("div",{className:"lbar-track",children:S.jsx("span",{className:"lbar-fill",style:{width:Math.max(k.value/A*100,4)+"%",boxShadow:F===0?"0 0 10px rgba(225,20,20,0.55)":"none"}})}),v===F&&S.jsxs("div",{className:"lbar-detail",children:[k.detail," · basis: ",k.basis]})]},F))}),S.jsx("div",{className:"note",children:"Levers priced independently; they overlap and never sum. Baselines assumed until measured. Tap a lever for detail."})]}),S.jsxs("div",{className:"console",children:[S.jsxs("div",{className:"ptabs",children:[N("alerts","Alerts"+(a.findings.length?" · "+a.findings.length:"")),N("daily","Daily"),N("brief","Brief"),N("log","Log")]}),l==="alerts"&&S.jsxs("div",{children:[a.findings.length===0&&S.jsx("div",{className:"brief-head",children:"No active alerts. Push volume, keep the ladder full."}),a.findings.map((k,F)=>S.jsxs("div",{className:"alert-line",children:[S.jsxs("div",{className:"alert-head",onClick:()=>p(h===F?null:F),children:[S.jsxs("span",{className:k.sev==="r"?"sevr":"seva",children:[">> ALERT ",String(F+1).padStart(2,"0")]}),S.jsx("span",{children:k.title.toUpperCase()}),S.jsx("span",{style:{marginLeft:"auto",color:"#7A7A7A"},children:h===F?"−":"+"})]}),h===F&&S.jsxs("div",{className:"alert-body",children:[k.evidence,S.jsxs("div",{className:"diag-lever",children:[S.jsx("span",{children:"Lever"})," ",k.lever]})]})]},F)),a.waiting.length>0&&S.jsxs("div",{className:"note",children:["On mute until the sample can carry it: ",a.waiting.join("; "),"."]})]}),l==="daily"&&(P?S.jsxs("div",{children:[S.jsxs("div",{className:"label",style:{marginBottom:9},children:["Daily brief · ",P.date]}),S.jsx("div",{className:"brief-head",children:S.jsx(Sp,{text:P.headline})}),G(P.sections,x,M,"NOTE")]}):S.jsx("div",{className:"note",children:"The daily brief lands here every weekday morning."})),l==="brief"&&(E?S.jsxs("div",{children:[S.jsxs("div",{className:"label",style:{marginBottom:9},children:["Palantir brief · ",E.date]}),S.jsx("div",{className:"brief-head",children:S.jsx(Sp,{text:E.headline})}),G(E.sections,x,M,"DIRECTIVE")]}):S.jsx("div",{className:"note",children:"No brief published yet."})),l==="log"&&(R?S.jsxs("div",{children:[S.jsxs("div",{className:"label",style:{marginBottom:9},children:["Weekly memo · ",R.week]}),S.jsx("div",{className:"brief-head",children:R.headline}),G(R.sections,m,f,"ENTRY"),(R.archive||[]).map((k,F)=>S.jsxs("div",{className:"dir",onClick:()=>f(m==="a"+F?null:"a"+F),children:[S.jsxs("div",{className:"dir-title",children:[S.jsx("span",{className:"dnum",children:"ARCHIVE"})," // ",String(k.week||k.date||"").toUpperCase()]}),m==="a"+F&&S.jsx("div",{className:"dir-body",children:k.headline})]},"a"+F))]}):S.jsx("div",{className:"note",children:"No memo published yet."}))]})]})]})}function HT({daily:t,replies:e,leads:n,payments:i,m:r,calc:s}){return S.jsxs("div",{children:[S.jsx(OT,{daily:t,replies:e,payments:i,m:r,calc:s}),S.jsx(BT,{daily:t,replies:e,m:r}),S.jsx(zT,{daily:t,replies:e,leads:n,m:r,calc:s})]})}const xa={red:"#E11414",bone:"#F4F2ED"},jd=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function VT({m:t}){const e=Sa.useRef(null),n=[{label:"INITIALS",value:t.initials},{label:"REPLIES",value:t.replies,rate:t.replyRate},{label:"BOOKED",value:t.booked,rate:t.bookingRate},{label:"SHOWN",value:t.shown,rate:t.showRate},{label:"CLOSED",value:t.closed,rate:t.closeRate}];return Sa.useEffect(()=>{const i=e.current;if(!i)return;const r=760,s=350,a=Math.min(window.devicePixelRatio||1,2);i.width=r*a,i.height=s*a;const o=i.getContext("2d");o.scale(a,a);const l=n.length,c=84,u=46,d=152,h=104,p=n.map((A,L)=>c+L*(r-c-u)/(l-1)),x=Math.max(n[0].value,1),M=n.map(A=>Math.max(Math.sqrt(A.value/x)*h,4)),m=n.slice(1).map((A,L)=>n[L].value>0?A.value/n[L].value:0),f=A=>{if(A<=p[0])return M[0];if(A>=p[l-1])return M[l-1];let L=0;for(;A>p[L+1];)L++;const N=(A-p[L])/(p[L+1]-p[L]),G=N*N*(3-2*N);return M[L]+(M[L+1]-M[L])*G},v=(A,L)=>{let N=A*374761393+L*668265263;return N=(N^N>>13)*1274126177,((N^N>>16)>>>0)/4294967295},g=120,E=Array.from({length:g},(A,L)=>({i:L,x:c+v(L,99)*(r-c-u),u:v(L,7)*2-1,v:.55+v(L,13)*.75,deadAt:-1,fall:0})),R=A=>{for(let L=0;L<m.length;L++)if(v(A.i,L*31+3)>m[L])return L;return-1};E.forEach(A=>{A.b=R(A)});const P=()=>{for(let N=0;N<m.length;N++){if(1-m[N]<=.02)continue;const k=p[N+1],F=Math.max((M[N]-M[N+1])*1,2),z=o.createLinearGradient(k,d,k+30,s);z.addColorStop(0,"rgba(58,58,58,0.5)"),z.addColorStop(1,"rgba(58,58,58,0)"),o.fillStyle=z,o.beginPath(),o.moveTo(k-F*.4,d+f(k-F*.4)-1),o.bezierCurveTo(k+8,d+M[N]+26,k+18,s-26,k+22,s-6),o.lineTo(k+40+F,s-6),o.bezierCurveTo(k+30+F,s-40,k+F*.8+10,d+M[N]+10,k+F*.6,d+f(k+F*.6)-1),o.closePath(),o.fill()}const A=o.createLinearGradient(c,0,r-u,0);A.addColorStop(0,"#2E2E2E"),A.addColorStop(.72,"#3A2426"),A.addColorStop(1,"#7E0C0C"),o.fillStyle=A,o.beginPath(),o.moveTo(p[0],d-M[0]);for(let N=p[0];N<=p[l-1];N+=6)o.lineTo(N,d-f(N));o.lineTo(p[l-1],d-M[l-1]),o.lineTo(p[l-1]+26,d-M[l-1]*.55),o.lineTo(p[l-1]+26,d+M[l-1]*.55),o.lineTo(p[l-1],d+M[l-1]);for(let N=p[l-1];N>=p[0];N-=6)o.lineTo(N,d+f(N));o.closePath(),o.fill();const L=o.createRadialGradient(p[l-1]+8,d,2,p[l-1]+8,d,60);L.addColorStop(0,"rgba(225,20,20,0.35)"),L.addColorStop(1,"rgba(225,20,20,0)"),o.fillStyle=L,o.beginPath(),o.arc(p[l-1]+8,d,60,0,Math.PI*2),o.fill()},b=()=>{o.textAlign="center",n.forEach((A,L)=>{if(o.fillStyle="#7A7A7A",o.font="10px 'Space Mono', monospace",o.fillText(A.label,p[L],d-M[L]-(L===0?30:14)-(L%2===1?14:0)),o.fillStyle=L===l-1?"#E11414":"#F4F2ED",o.font="17px 'Archivo Black', sans-serif",o.fillText(Ce(A.value),p[L],d+M[L]+26+(L%2===1?12:0)),A.rate!==void 0&&(o.fillStyle="#B9B7B2",o.font="10px 'Space Mono', monospace",o.fillText(qe(A.rate),(p[L]+p[L-1])/2,d-Math.max(f((p[L]+p[L-1])/2),10)-10)),L>0){const N=n[L-1].value-A.value;N>0&&(o.fillStyle="#4A4A4A",o.font="9px 'Space Mono', monospace",o.fillText("-"+Ce(N),p[L]+30,s-12))}})};let w=null;const _=()=>{o.clearRect(0,0,r,s),P();for(const A of E){A.x+=A.v*(jd?0:1.1);const L=A.b>=0?p[A.b+1]:1/0;let N,G=.75;if(A.x>L)A.fall+=.045,N=d+f(L)*A.u*.8+(A.x-L)*(.9+A.fall),G=Math.max(.55-(A.x-L)/90,0),o.fillStyle="rgba(122,122,122,"+G.toFixed(2)+")";else{N=d+f(A.x)*A.u*.8;const k=(A.x-c)/(r-c-u);o.fillStyle="rgba("+(k>.7?"255,90,60":"200,160,150")+","+G.toFixed(2)+")"}(A.x>r-u+24||N>s||G<=0)&&(A.x=c,A.u=Math.random()*2-1,A.fall=0,A.i=(A.i+g)%1e5,A.b=R(A)),o.beginPath(),o.arc(A.x,N,1.4,0,Math.PI*2),o.fill()}b()},y=()=>{if(jd){_();return}const A=()=>{_(),w=requestAnimationFrame(A)};A()};return document.fonts&&document.fonts.ready?document.fonts.ready.then(y):y(),()=>{w&&cancelAnimationFrame(w)}},[t.initials,t.replies,t.booked,t.shown,t.closed]),S.jsxs("div",{children:[S.jsx("canvas",{ref:e,style:{width:"100%",display:"block"},"aria-label":"funnel flow"}),S.jsx("div",{className:"note",children:"Every dot is volume moving through the funnel; the gray fallout at each boundary is the drop-off, drawn to scale on a square root height. Counts and rates are exact."})]})}function jo({label:t,value:e,floor:n,strong:i,sample:r,sampleNeed:s,sampleUnit:a}){const l=2*Math.PI*40,c=r<s,u=Math.max(.005,Math.min(e/i,1)),d=Math.min(n/i,1)*360,h=c?"#3A3A3A":e>=n?xa.red:"#C9A227",[p,x]=Sa.useState(jd);return Sa.useEffect(()=>{const M=requestAnimationFrame(()=>x(!0));return()=>cancelAnimationFrame(M)},[]),S.jsxs("div",{className:"gauge",children:[S.jsxs("svg",{viewBox:"0 0 100 100",children:[S.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:"#1E1E1E",strokeWidth:"8"}),S.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:h,strokeWidth:"8",strokeDasharray:(p?u:.005)*l+" "+l,strokeLinecap:"round",style:{transition:"stroke-dasharray 1.1s cubic-bezier(0.22,1,0.36,1)"},transform:"rotate(-90 50 50)"}),S.jsx("line",{x1:"50",y1:"4",x2:"50",y2:"13",stroke:xa.bone,strokeWidth:"2",transform:"rotate("+d+" 50 50)",opacity:"0.75"}),S.jsx("text",{x:"50",y:"49",textAnchor:"middle",fill:xa.bone,fontFamily:"'Archivo Black', sans-serif",fontSize:"16",children:c?"--":qe(e,1)}),S.jsx("text",{x:"50",y:"63",textAnchor:"middle",fill:"#7A7A7A",fontFamily:"'Space Mono', monospace",fontSize:"7",letterSpacing:"1",children:c?"LOW SAMPLE":"FLOOR "+qe(n,0)})]}),S.jsx("div",{className:"label",style:{textAlign:"center",marginTop:7},children:t}),S.jsxs("div",{className:"gauge-sub",children:[Ce(r)," ",a]})]})}function GT({replies:t}){const[e,n]=Sa.useState("all"),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=p=>Math.max(0,Math.round((r-p.date)/ut)),a=p=>p.dead?"dead":p.closed?"won":p.booked||p.showed||["talking","waiting"].includes(p.status.toLowerCase())?"working":s(p)>7?"stale":"live",o=[...t].sort((p,x)=>x.date-p.date),l={live:[],stale:[],working:[],won:[],dead:[]};o.forEach(p=>l[a(p)].push(p));const c=[["live","Live, work these now"],["stale","Stale, rescue or kill"],["working","In play"],["won","Won"],["dead","Dead"]],u=[["all","All"],...c.map(([p])=>[p,p])],d=({r:p})=>{const x=a(p),M=s(p),m=x==="live"&&M<=1,f=Ba(p),v=[!0,p.booked,p.showed,p.closed];return S.jsxs("div",{className:"pl-row"+(p.dead?" is-dead":"")+(m?" is-fresh":""),children:[S.jsx("span",{className:"pl-mono "+x,children:(f.replace(/^@/,"")[0]||"?").toUpperCase()}),S.jsxs("span",{className:"pl-name",title:p.handle,children:[f,S.jsxs("span",{className:"pl-sub",children:[wi(p.date),p.timeReplied?" · "+p.timeReplied:"",p.account?" · "+p.account.toLowerCase():"",p.dead&&p.deadReason?" · "+p.deadReason.toLowerCase():"",p.callDate&&!p.showed&&!p.closed&&!p.dead?" · call "+wi(p.callDate):""]})]}),p.closed&&p.cash>0?S.jsxs("span",{className:"pipe-money",children:[vt(p.cash),p.dealValue>p.cash?" of "+vt(p.dealValue):""]}):!p.dead&&!p.closed?S.jsxs("span",{className:"age"+(x==="stale"?" stale":M>=2?" aging":""),children:[M,"d"]}):S.jsx("span",{}),S.jsx("span",{className:"pl-dots",title:"replied / booked / shown / closed",children:v.map((g,E)=>S.jsx("i",{className:"sd"+(g?" on":"")+(p.dead?" x":"")},E))})]})},h=e==="all"?null:l[e];return S.jsxs("div",{className:"card",children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:8},children:[S.jsx("h2",{className:"sec",style:{margin:0},children:"Pipeline"}),S.jsx("div",{className:"ptabs",style:{margin:0},children:u.map(([p,x])=>S.jsxs("button",{className:"btn sm"+(e===p?" active":""),onClick:()=>n(p),children:[x,p!=="all"&&l[p].length?" "+l[p].length:""]},p))})]}),o.length===0&&S.jsx("div",{className:"note",children:"No replies in this window yet."}),S.jsx("div",{className:"pipe-scroll",children:h?h.map((p,x)=>S.jsx(d,{r:p},x)):c.map(([p,x])=>l[p].length>0&&S.jsxs("div",{children:[S.jsxs("div",{className:"pl-group pg-"+p,children:[S.jsx("span",{children:x}),S.jsx("b",{children:l[p].length})]}),l[p].map((M,m)=>S.jsx(d,{r:M},m))]},p))})]})}function WT({replies:t}){const e=t.map(s=>uy(s.timeReplied)).filter(s=>s!==null);if(!e.length)return null;const n=Hc.map(s=>e.filter(s.test).length),i=n.indexOf(Math.max(...n)),r=Math.max(...Array.from({length:24},(s,a)=>e.filter(o=>Math.floor(o)===a).length),1);return S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Reply Windows, Irish time"}),S.jsxs("div",{className:"rw-stats",children:[S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Best window so far"}),S.jsx("div",{className:"display rw-big",style:{color:xa.red},children:Hc[i].range.replace(" to "," - ")}),S.jsx("div",{className:"hdetail",children:Hc[i].label.toLowerCase()})]}),S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Average reply time"}),S.jsx("div",{className:"display rw-big",children:dy(e)}),S.jsxs("div",{className:"hdetail",children:["across ",e.length," timed replies"]})]})]}),S.jsx("div",{className:"hm-row",children:Array.from({length:24},(s,a)=>{const o=e.filter(l=>Math.floor(l)===a).length;return S.jsx("span",{className:"hm-cell",title:String(a).padStart(2,"0")+":00, "+o+(o===1?" reply":" replies"),style:{background:o>0?"rgba(225,20,20,"+(.18+.82*(o/r)).toFixed(2)+")":"#1E1E1E"}},a)})}),S.jsxs("div",{className:"hm-labels",children:[S.jsx("span",{children:"00"}),S.jsx("span",{children:"06"}),S.jsx("span",{children:"12"}),S.jsx("span",{children:"18"}),S.jsx("span",{children:"23"})]}),S.jsxs("div",{className:"note",children:["Times on ",e.length," of ",t.length," replies.",e.length<30&&" Directional only until 30 plus. The reply window is when Tier 1 conversations should be worked live."]})]})}function jT({daily:t,leads:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=(u,d,h)=>S.jsxs("div",{children:[S.jsx("div",{className:"label",children:u}),S.jsx("div",{className:"display sv",style:h?{color:xa.red}:null,children:Ce(d)})]}),s=e.filter(u=>u.nextDue&&u.status.toLowerCase()!=="replied");if(s.length>0){const u=s.filter(M=>M.nextDue<i).length,d=s.filter(M=>pt(M.nextDue)===pt(i)).length,h=s.filter(M=>pt(M.nextDue)===pt(new Date(i.getTime()+ut))).length,p=s.filter(M=>M.nextDue<=i&&/^touch/i.test(M.nextTouch)).length,x=s.filter(M=>M.nextDue<=i&&!/^touch/i.test(M.nextTouch)).length;return S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Follow Up Queue, live from the lead sheet"}),S.jsxs("div",{className:"streaks",children:[r("Overdue",u,u>0),r("Due today",d),r("Due tomorrow",h)]}),S.jsxs("div",{className:"note",children:["Of everything due or overdue right now: ",Ce(p)," ladder touches, ",Ce(x)," evergreen follow ups, across ",Ce(s.length)," open leads.",u>0&&" Red rows in the lead sheet are stacking up, work them to zero per the SOP."]})]})}const a=new Date(i.getTime()+ut);let o=0,l=0;for(const u of t){const d=Math.round((a-u.date)/ut);d>=1&&d<=3?o+=u.initials:d>=8&&d<=28?l+=u.initials/3:d>=29&&d<=90?l+=u.initials/7:d>=91&&(l+=u.initials/30)}const c=o+l;return S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Tomorrow's Load, SOP estimate"}),S.jsxs("div",{className:"streaks",children:[r("Ladder messages",o),r("Evergreen touches",l),r("Total owed",c,c>450)]}),S.jsxs("div",{className:"note",children:["Estimated from the daily log cohorts and the SOP cadence. Connects to the lead scheduler sheet automatically when it is reachable.",c>450&&" This load is beyond one setter's day, Tier 3 slips first per the Follow Up SOP."]})]})}function XT({replies:t}){const e=fy(t),n=hy(t),i=py(t),r=my(t);return!e&&!n.length&&!i.total&&!r?null:S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Velocity + Outcomes"}),S.jsxs("div",{className:"streaks",children:[S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Reply to booked"}),S.jsx("div",{className:"display sv",children:e?e.median+"d":"--"}),S.jsx("div",{className:"hdetail",children:e?"median, "+e.n+" booked with dates":"needs Date Booked entries"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Booked inside 24h"}),S.jsx("div",{className:"display sv",children:e?qe(e.within24h,0):"--"}),S.jsx("div",{className:"hdetail",children:"speed to lead doctrine"})]}),S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Lost leads"}),S.jsx("div",{className:"display sv",children:i.total}),S.jsx("div",{className:"hdetail",children:i.reasons.length?i.reasons.map(([s,a])=>s.toLowerCase()+" "+a).join(" · "):"none marked dead yet"})]})]}),n.length>0&&S.jsxs("div",{style:{marginTop:14},children:[S.jsx("div",{className:"label",style:{marginBottom:6},children:"Calls on the books"}),n.map((s,a)=>S.jsxs("div",{className:"ev",children:[S.jsx("span",{className:"ev-date",children:wi(s.callDate)}),S.jsx("span",{className:"ev-label",children:Ba(s)}),s.account&&S.jsx("span",{className:"ev-who",children:s.account})]},a))]}),r&&S.jsxs("div",{className:"note",children:["Replies by account: ",r.accounts.map(([s,a])=>s+" "+a).join(" · "),r.tagged<r.total&&" · "+(r.total-r.tagged)+" untagged"]})]})}function YT({daily:t,replies:e,leads:n,m:i}){return S.jsxs("div",{className:"grid",children:[S.jsxs("div",{className:"two-col",children:[S.jsxs(Rt,{className:"card",children:[S.jsx("h2",{className:"sec",children:"Funnel, all time"}),S.jsx(VT,{m:i})]}),S.jsxs("div",{className:"grid",children:[S.jsx(Rt,{delay:60,children:S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Stage Rates vs floors"}),S.jsxs("div",{className:"gauges",children:[S.jsx(jo,{label:"Reply",value:i.replyRate,floor:ft.replyRate[0],strong:ft.replyRate[1],sample:i.initials,sampleNeed:150,sampleUnit:"sends"}),S.jsx(jo,{label:"Booking",value:i.bookingRate,floor:ft.bookingRate[0],strong:ft.bookingRate[1],sample:i.replies,sampleNeed:10,sampleUnit:"replies"}),S.jsx(jo,{label:"Show",value:i.showRate,floor:ft.showRate[0],strong:ft.showRate[1],sample:i.booked,sampleNeed:5,sampleUnit:"booked"}),S.jsx(jo,{label:"Close",value:i.closeRate,floor:ft.closeRate[0],strong:ft.closeRate[1],sample:i.shown,sampleNeed:5,sampleUnit:"shows"})]})]})}),S.jsx(Rt,{delay:120,children:S.jsx(XT,{replies:e})}),S.jsx(Rt,{delay:180,children:S.jsx(jT,{daily:t,leads:n})})]})]}),S.jsxs("div",{className:"two-col",children:[S.jsx(Rt,{children:S.jsx(GT,{replies:e})}),S.jsx(Rt,{delay:60,children:S.jsx(WT,{replies:e})})]})]})}const Oi={red:"#E11414",bone:"#F4F2ED"};function qT({daily:t,replies:e,payments:n,m:i,calc:r}){const s=Pe.useMemo(()=>{const y=new Date,A=new Date(y.getFullYear(),y.getMonth(),1),L=new Date(y.getFullYear(),y.getMonth()+1,0),N=new Date(y.getFullYear(),y.getMonth(),y.getDate()),G=Vf(e,n),k=G.source==="payments",F=[];let z=0;for(let W=A.getTime();W<=N.getTime();W+=ut){const Z=new Date(W),ne=k?n.filter(K=>K.date.getTime()===Z.getTime()).reduce((K,Se)=>K+Se.amount,0):e.filter(K=>K.date.getTime()===Z.getTime()).reduce((K,Se)=>K+Se.cash,0);z+=ne,F.push({x:Z,y:z})}const U=Fv(t,e,i,r,G.mtd);return{days:F,bands:U,monthEnd:L,today:N,goal:r.goal}},[t,e,n,i,r]),{days:a,bands:o,monthEnd:l,today:c,goal:u}=s,d=720,h=260,p=52,x=14,M=14,m=26,f=a.length?a[0].x.getTime():c.getTime(),v=l.getTime(),g=Math.max(u,o.p90,1)*1.08,E=y=>p+(y-f)/Math.max(v-f,1)*(d-p-x),R=y=>M+(1-y/g)*(h-M-m),P=a.map(y=>E(y.x.getTime()).toFixed(1)+","+R(y.y).toFixed(1)).join(" "),b=E(c.getTime()),w=R(o.cashMTD),_=[b+","+w,E(v)+","+R(o.p90),E(v)+","+R(o.p10)].join(" ");return S.jsxs("svg",{viewBox:"0 0 "+d+" "+h,className:"chart-svg",children:[[.25,.5,.75,1].map(y=>S.jsxs("g",{children:[S.jsx("line",{x1:p,x2:d-x,y1:R(g*y),y2:R(g*y),stroke:"#1B1B1B"}),S.jsx("text",{x:p-7,y:R(g*y)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:gi(g*y)})]},y)),S.jsx("line",{x1:p,x2:d-x,y1:R(u),y2:R(u),stroke:Oi.bone,strokeDasharray:"5 5",opacity:"0.45"}),S.jsxs("text",{x:d-x,y:R(u)-5,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,opacity:"0.7",children:["GOAL ",gi(u)]}),S.jsx("polygon",{points:_,fill:Oi.red,opacity:"0.10"}),S.jsx("line",{x1:b,y1:w,x2:E(v),y2:R(o.p50),stroke:Oi.red,strokeDasharray:"4 5",strokeWidth:"1.5",opacity:"0.8"}),a.length>1&&S.jsx("polyline",{points:P,fill:"none",stroke:Oi.red,strokeWidth:"2.4",strokeLinejoin:"round",pathLength:"1",className:"drawline"}),S.jsx("circle",{cx:b,cy:w,r:"3.5",fill:Oi.red}),S.jsxs("text",{x:b+6,y:w-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,children:[gi(o.cashMTD)," today"]}),S.jsx("text",{x:p,y:h-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:wi(new Date(f))}),S.jsx("text",{x:d-x,y:h-8,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:wi(l)})]})}function $T({replies:t}){const e=t.filter(n=>n.closed).sort((n,i)=>i.date-n.date);return e.length?S.jsx("div",{children:e.map((n,i)=>{const r=it(n.cash,n.dealValue||n.cash);return S.jsxs("div",{style:{padding:"10px 0",borderBottom:"1px solid #191919"},children:[S.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline"},children:[S.jsx("span",{className:"pipe-name",children:Ba(n)}),n.paymentPlan&&S.jsx("span",{className:"chip",children:"plan"}),S.jsxs("span",{className:"pipe-money",style:{marginLeft:"auto"},children:[vt(n.cash)," of ",vt(n.dealValue||n.cash)]}),S.jsx("span",{className:"pipe-date",children:wi(n.date)})]}),S.jsx("div",{className:"lbar-track",style:{marginTop:7},children:S.jsx("span",{className:"lbar-fill",style:{width:Math.max(r*100,2)+"%"}})})]},i)})}):S.jsx("div",{className:"note",children:"Closed deals land here with their collected vs signed split."})}function KT({calc:t,setCalc:e,m:n}){const[i,r]=Pe.useState(!1),{goal:s,deal:a,aov:o,showRate:l,closeRate:c,capacity:u,sendDays:d}=t,h=A=>L=>e({...t,[A]:L}),p=n.replyRate>0?n.replyRate:Xa,x=n.bookingRate>0?n.bookingRate:Ya,M=it(s,o),m=it(M,c),f=it(m,l),v=it(f,x),g=it(v,p),E=it(g,u),R=it(E,d/4.345),P=u>0?R<1?En(E,0)+" days":R<9?En(R,1)+" weeks":En(R/4.345,1)+" months":null,b=u*d*p*x*l*c*o,w=(A,L,N,G,k)=>S.jsxs("div",{className:"field",children:[S.jsx("label",{className:"label",children:A}),S.jsx("input",{type:"number",min:"0",step:G,value:L,onChange:F=>N(Math.max(0,br(F.target.value)))}),k&&S.jsx("div",{className:"hint",children:k})]}),_=(A,L,N,G,k,F,z)=>S.jsxs("div",{className:"field",children:[S.jsxs("label",{className:"label",children:[A," ",S.jsx(wy,{kind:"manual",children:"Manual"}),S.jsx("span",{className:"rate-val",style:{float:"right"},children:qe(L)})]}),S.jsx("input",{type:"range",min:G,max:k,step:F,value:L,onChange:U=>N(parseFloat(U.target.value))}),z]}),y=(A,L,N)=>S.jsxs("div",{className:"chain-row",children:[S.jsxs("div",{children:[S.jsx("div",{className:"mono cr-label",children:A}),N&&S.jsx("div",{className:"cr-note",children:N})]}),S.jsx("div",{className:"display cr-val",children:L})]});return S.jsxs("div",{className:"card",children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10},children:[S.jsx("h2",{className:"sec",style:{margin:0},children:"Planning Console"}),S.jsxs("span",{style:{display:"flex",gap:16,alignItems:"baseline",flexWrap:"wrap"},children:[S.jsxs("span",{className:"label",children:["goal ",S.jsx("b",{className:"display",style:{color:Oi.red,fontSize:16},children:vt(s)})]}),S.jsxs("span",{className:"label",children:["time to goal ",S.jsx("b",{className:"display",style:{color:"#F4F2ED",fontSize:16},children:P||"--"})]}),S.jsx("button",{className:"btn",onClick:()=>r(!i),children:i?"[ Close ]":"[ Adjust ]"})]})]}),i&&S.jsxs("div",{className:"calc-grid",style:{marginTop:16},children:[S.jsxs("div",{children:[w("Monthly cash goal (€)",s,h("goal"),1e3),w("Cash per close (€)",o,h("aov"),500,"What a client pays up front. Most deals are payment plans; the backend is tracked separately."),w("Deal value (€)",a,h("deal"),1e3,"Full contract for the signed-revenue view."),w("Capacity, initials a day",u,h("capacity"),5,"One warmed account sends about 100 a day before block risk."),w("Send days a month",d,h("sendDays"),1),_("Show rate",l,h("showRate"),.3,1,.005),_("Close rate",c,h("closeRate"),.05,.5,.005)]}),S.jsxs("div",{children:[y("Clients needed",En(M,1),"goal / cash per close"),y("Contract revenue",vt(M*a),"at full deal value"),y("Shows needed",En(m,1)),y("Calls to book",En(f,1)),y("Replies needed",En(v,0),qe(x)+" booking"+(n.bookingRate>0?", live":", assumed")),y("Initials needed",En(g,0),qe(p)+" reply"+(n.replyRate>0?", live":", assumed")),y("Time to goal",P||"--","at "+Ce(u)+" a day, "+Ce(d)+" send days a month"),y("Month supported by capacity",vt(b),qe(it(b,s),0)+" of goal")]})]})]})}function ZT({payments:t}){if(!t.length)return S.jsx("div",{className:"note",children:"The Payments tab is live. One row per payment the day it lands; this ledger and the monthly numbers read from it."});const e=[...t].sort((n,i)=>i.date-n.date).slice(0,12);return S.jsxs("div",{style:{marginTop:14},children:[S.jsx("div",{className:"label",style:{marginBottom:6},children:"Payments received"}),e.map((n,i)=>S.jsxs("div",{className:"ev",children:[S.jsx("span",{className:"ev-date",children:wi(n.date)}),S.jsx("span",{className:"ev-label",children:n.handle||n.notes||"payment"}),S.jsx("span",{className:"pipe-money",style:{marginLeft:"auto"},children:vt(n.amount)})]},i))]})}function QT({daily:t,replies:e,payments:n,m:i,calc:r,setCalc:s}){const a=Vf(e,n),o=a.all*gp,l=Math.max(i.dealValue-a.all,0),c=e.filter(d=>d.closed&&d.paymentPlan).length,u=e.filter(d=>d.closed).length;return S.jsxs("div",{className:"grid",children:[S.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:[S.jsxs(Rt,{className:"tile",children:[S.jsx("div",{className:"label",children:"Collected, this month"}),S.jsx("div",{className:"display val red",children:S.jsx(Pr,{value:a.mtd,format:vt})}),S.jsxs("div",{className:"sub",children:[qe(it(a.mtd,r.goal),0)," of ",vt(r.goal),a.source==="payments"?" · by payment date":""]})]}),S.jsxs(Rt,{className:"tile",delay:50,children:[S.jsx("div",{className:"label",children:"Signed, all time"}),S.jsx("div",{className:"display val",children:S.jsx(Pr,{value:i.dealValue,format:vt})}),S.jsxs("div",{className:"sub",children:[vt(l)," still to collect"]})]}),S.jsxs(Rt,{className:"tile",delay:100,children:[S.jsx("div",{className:"label",children:"Commission accrued"}),S.jsx("div",{className:"display val",children:S.jsx(Pr,{value:o,format:vt})}),S.jsxs("div",{className:"sub",children:[qe(gp,1)," of collected, owed to the setter"]})]}),S.jsxs(Rt,{className:"tile",delay:150,children:[S.jsx("div",{className:"label",children:"Payment plans"}),S.jsxs("div",{className:"display val",children:[c,S.jsxs("span",{style:{color:"#7A7A7A",fontSize:15},children:[" of ",u]})]}),S.jsx("div",{className:"sub",children:"deals on plans; backend follows"})]})]}),a.mismatch&&S.jsxs("div",{className:"notice",children:["Payments tab total (",vt(a.mismatch.payAll),") and reply-row cash (",vt(a.mismatch.repliesAll),") disagree. Two records of the same money should match; reconcile them."]}),S.jsxs(Rt,{className:"card",children:[S.jsx("h2",{className:"sec",children:"Cash Trajectory, this month"}),S.jsx(qT,{daily:t,replies:e,payments:n,m:i,calc:r}),S.jsxs("div",{className:"note",children:["Red line is money banked",a.source==="payments"?", dated by when each payment landed":"",". The cone is 500 simulated month-ends from the live rates: dashed midline P50, shaded P10 to P90. A thin sample means a wide cone; that is the honest read."]})]}),S.jsxs("div",{className:"two-col",children:[S.jsxs(Rt,{className:"card",children:[S.jsx("h2",{className:"sec",children:"Deal Ledger"}),S.jsx($T,{replies:e}),S.jsx(ZT,{payments:n})]}),S.jsx(Rt,{delay:60,children:S.jsx(KT,{calc:r,setCalc:s,m:i})})]})]})}const ui={red:"#E11414",teal:"#3EC1BB",steel:"#5A5A5A"};function JT({daily:t,replies:e,capacity:n}){const i=new Map;e.forEach(o=>{const l=pt(o.date);i.set(l,(i.get(l)||0)+1)});const r=t.some(o=>o.comments>0),s=o=>{const l=[];return n>0&&o.initials<n*.5&&l.push("volume under half target"),r&&o.comments===0&&l.push("no comments logged"),l},a=t.slice(-9).reverse();return S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Field Log, latest days"}),S.jsxs("div",{className:"flog-head",children:[S.jsx("span",{children:"Date"}),S.jsx("span",{children:"Init"}),S.jsx("span",{children:"FUps"}),S.jsx("span",{children:"Cmts"}),S.jsx("span",{children:"Repl"}),S.jsx("span",{children:"Note"})]}),a.map((o,l)=>S.jsxs("div",{className:"flog-row",children:[S.jsxs("span",{className:"fd"+(s(o).length?" warn":""),title:s(o).join(", ")||void 0,children:[wi(o.date),s(o).length>0&&" ⚠"]}),S.jsx("span",{children:Ce(o.initials)}),S.jsx("span",{children:Ce(o.followUps)}),S.jsx("span",{children:o.comments>0?Ce(o.comments):"·"}),S.jsx("span",{children:i.get(pt(o.date))||"·"}),S.jsx("span",{className:"fnote"+(o.notes&&o.notes.length>1?" alert":""),title:o.notes,children:o.notes&&o.notes.length>1?o.notes:"·"})]},l)),a.length===0&&S.jsx("div",{className:"note",children:"Logged days land here."}),S.jsx("div",{className:"note",children:"Notes come straight from the EOD form. Anything written there is an operational flag worth reading."})]})}function eA({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(d=>[pt(d.date),d])),s=r.get(pt(i)),a=r.get(pt(new Date(i.getTime()-ut))),o=s||a,l=s?"Today":"Latest logged day";if(!o)return null;const c=[{name:"Initials at target",ok:o.initials>=e*.9,detail:Ce(o.initials)+" of "+Ce(e)},{name:"Comments matched to initials",ok:o.comments>=o.initials*.85,detail:Ce(o.comments)+" comments"},{name:"Ladder worked",ok:o.followUps>0,detail:Ce(o.followUps)+" follow ups"},{name:"EOD logged",ok:!0,detail:"form in"}],u=c.filter(d=>d.ok).length;return S.jsxs("div",{className:"card",children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[S.jsxs("h2",{className:"sec",style:{margin:0},children:["Day Score, ",l.toLowerCase()]}),S.jsxs("span",{className:"display",style:{fontSize:22,color:u===c.length?ui.red:"#F4F2ED"},children:[u,"/",c.length]})]}),S.jsx("div",{style:{marginTop:12},children:c.map((d,h)=>S.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline",padding:"7px 0",borderBottom:"1px solid #191919"},children:[S.jsx("span",{className:"mono",style:{fontSize:11,color:d.ok?"#3EC1BB":"#C9A227",width:40},children:d.ok?"[OK]":"[..]"}),S.jsx("span",{style:{fontSize:13},children:d.name}),S.jsx("span",{className:"mono",style:{marginLeft:"auto",fontSize:10,color:"#7A7A7A"},children:d.detail})]},h))})]})}function tA({daily:t,replies:e,calc:n}){const i=ly(t,n.capacity),r=cy(t,e),s=Uv(t,e),a=[{key:"initials",color:ui.red,area:!0,data:t.map(o=>({x:o.date,y:o.initials}))},{key:"comments",color:ui.teal,data:t.map(o=>({x:o.date,y:o.comments}))},{key:"follow ups",color:ui.steel,data:t.map(o=>({x:o.date,y:o.followUps}))}];return S.jsxs("div",{className:"grid",children:[S.jsxs("div",{className:"two-col",children:[S.jsxs(Rt,{className:"card",children:[S.jsx("h2",{className:"sec",children:"Daily Output"}),S.jsx(Ay,{series:a,height:240}),S.jsxs("div",{className:"legend",children:[S.jsxs("span",{className:"leg",children:[S.jsx("i",{style:{background:ui.red}}),"initials"]}),S.jsxs("span",{className:"leg",children:[S.jsx("i",{style:{background:ui.teal}}),"comments"]}),S.jsxs("span",{className:"leg",children:[S.jsx("i",{style:{background:ui.steel}}),"follow ups"]})]})]}),S.jsxs("div",{className:"grid",children:[S.jsx(Rt,{delay:60,children:S.jsx(eA,{daily:t,capacity:n.capacity})}),S.jsx(Rt,{delay:120,children:S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Streaks"}),S.jsxs("div",{className:"streaks",children:[S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Log streak"}),S.jsxs("div",{className:"display sv",style:i.cur>=6?{color:ui.red}:null,children:[i.cur,"d"]}),S.jsxs("div",{className:"hdetail",children:["best ever ",i.best,"d"]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"Days at target volume"}),S.jsxs("div",{className:"display sv",style:i.vol>=3?{color:ui.red}:null,children:[i.vol,"d"]}),S.jsxs("div",{className:"hdetail",children:["at 90% of ",Ce(n.capacity)]})]}),S.jsxs("div",{children:[S.jsx("div",{className:"label",children:"This week"}),S.jsx("div",{className:"display sv",children:Ce(s.initials.cur)}),S.jsxs("div",{className:"hdetail",children:["initials, vs ",Ce(s.initials.prev)," last wk"]})]})]})]})})]})]}),S.jsxs("div",{className:"two-col",children:[S.jsx(Rt,{children:S.jsx(JT,{daily:t,replies:e,capacity:n.capacity})}),S.jsx(Rt,{delay:60,children:S.jsxs("div",{className:"card",children:[S.jsx("h2",{className:"sec",children:"Milestones"}),r.length===0&&S.jsx("div",{className:"note",children:"Milestones land here as they happen."}),r.map((o,l)=>S.jsxs("div",{className:"ev",children:[S.jsx("span",{className:"ev-date",children:wi(o.date)}),S.jsx("span",{className:"ev-label",children:o.label}),o.who&&S.jsx("span",{className:"ev-who",children:o.who})]},l))]})})]})]})}const ya=[{id:"command",label:"Command",el:HT},{id:"pipeline",label:"Pipeline",el:YT},{id:"cash",label:"Cash",el:QT},{id:"setter",label:"Setter",el:tA}];function nA(){const t=()=>{const i=(location.hash||"").replace(/^#\/?/,"");return ya.some(r=>r.id===i)?i:"command"},[e,n]=Pe.useState(t);return Pe.useEffect(()=>{const i=()=>n(t());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),e}function iA({done:t}){const e=["feeds .......... daily log / replies / lead scheduler","engine ......... levers priced, diagnosis armed","palantir ....... seeing-stone online"],[n,i]=Pe.useState(0);return Pe.useEffect(()=>{if(ti)return;const r=setInterval(()=>i(s=>s+1),330);return()=>clearInterval(r)},[]),S.jsx("div",{className:"boot"+(t?" done":""),children:S.jsxs("div",{className:"boot-in",children:[S.jsx(ud,{sub:"Ops Terminal v5"}),S.jsx("div",{className:"boot-lines",children:e.slice(0,n+1).map((r,s)=>S.jsxs("div",{children:[S.jsx("span",{className:"ok",children:">"})," ",r]},s))})]})})}function rA({open:t,close:e,go:n,actions:i}){const[r,s]=Pe.useState(""),[a,o]=Pe.useState(0),l=Pe.useMemo(()=>{const u=[...ya.map(h=>({label:"Go to "+h.label,k:"view",run:()=>n(h.id)})),...i],d=r.trim().toLowerCase();return d?u.filter(h=>h.label.toLowerCase().includes(d)):u},[r,i,n]);if(Pe.useEffect(()=>{o(0)},[r,t]),Pe.useEffect(()=>{t||s("")},[t]),!t)return null;const c=u=>{u.key==="Escape"?e():u.key==="ArrowDown"?(u.preventDefault(),o(d=>Math.min(d+1,l.length-1))):u.key==="ArrowUp"?(u.preventDefault(),o(d=>Math.max(d-1,0))):u.key==="Enter"&&l[a]&&(l[a].run(),e())};return S.jsx("div",{className:"pal-overlay",onClick:e,children:S.jsxs("div",{className:"palette",onClick:u=>u.stopPropagation(),children:[S.jsx("input",{autoFocus:!0,placeholder:"Type a command",value:r,onChange:u=>s(u.target.value),onKeyDown:c}),l.map((u,d)=>S.jsxs("div",{className:"pal-item"+(d===a?" sel":""),onMouseEnter:()=>o(d),onClick:()=>{u.run(),e()},children:[S.jsx("span",{children:u.label}),S.jsx("span",{className:"k",children:u.k})]},d))]})})}function sA(){const{daily:t,replies:e,leads:n,payments:i,sample:r,loadedAt:s,reload:a}=Ey(),o=nA(),[l,c]=Pe.useState(()=>{try{const R=JSON.parse(localStorage.getItem("kg_calc")||"null");return R?{...zc,...R}:zc}catch{return zc}});Pe.useEffect(()=>{try{localStorage.setItem("kg_calc",JSON.stringify(l))}catch{}},[l]);const[u,d]=Pe.useState(()=>ti||sessionStorage.getItem("kg_booted")==="1");Pe.useEffect(()=>{if(u)return;const R=setTimeout(()=>{d(!0);try{sessionStorage.setItem("kg_booted","1")}catch{}},1500);return()=>clearTimeout(R)},[u]);const[h,p]=Pe.useState(!1),[x,M]=Pe.useState(!1);Pe.useEffect(()=>{document.body.classList.toggle("tv",x)},[x]);const m=Pe.useCallback(R=>{location.hash="/"+R},[]);Pe.useEffect(()=>{const R=P=>{if((P.metaKey||P.ctrlKey)&&P.key.toLowerCase()==="k"){P.preventDefault(),p(w=>!w);return}if(P.target&&/input|textarea|select/i.test(P.target.tagName))return;P.key==="Escape"&&x&&M(!1);const b={1:"command",2:"pipeline",3:"cash",4:"setter"};b[P.key]&&m(b[P.key]),P.key.toLowerCase()==="t"&&M(w=>!w),P.key.toLowerCase()==="r"&&a()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[m,a,x]);const f=Pe.useMemo(()=>t&&e?ny(t,e):null,[t,e]),v=Pe.useMemo(()=>t&&e?vy(t,e,n,l.capacity):[],[t,e,n,l.capacity]);if(!t||!e)return S.jsxs("div",{className:"center",children:[S.jsx(ud,{sub:"Ops Terminal v5"}),S.jsx("div",{className:"label",style:{marginTop:10},children:"Pulling the numbers"})]});const g=(ya.find(R=>R.id===o)||ya[0]).el,E=[{label:"Refresh data",k:"R",run:a},{label:(x?"Exit":"Enter")+" TV mode",k:"T",run:()=>M(R=>!R)},{label:"Open sales sheet",k:"link",run:()=>window.open(Nv,"_blank")},{label:"Open lead scheduler",k:"link",run:()=>window.open(Iv,"_blank")},{label:"Open v4 tracker",k:"link",run:()=>window.open("/dm-tracker/","_blank")}];return S.jsxs("div",{children:[!u&&S.jsx(iA,{done:!1}),S.jsx("span",{className:"hud-corner hud-tl"}),S.jsx("span",{className:"hud-corner hud-tr"}),S.jsx("span",{className:"hud-corner hud-bl"}),S.jsx("span",{className:"hud-corner hud-br"}),S.jsxs("div",{className:"shell",children:[S.jsxs("div",{className:"topbar",children:[S.jsx("a",{href:"#/command",style:{textDecoration:"none"},children:S.jsx(ud,{sub:"Ops Terminal v5"})}),S.jsx("nav",{className:"nav",children:ya.map(R=>S.jsx("a",{href:"#/"+R.id,className:o===R.id?"on":"",children:R.label},R.id))}),S.jsxs("div",{className:"top-right",children:[S.jsxs("span",{className:"feed",children:[S.jsx("span",{className:r?"dead":"lit"}),r?"sample data":"live feed",s&&!r&&S.jsxs("span",{style:{color:"#4A4A4A"},children:[" ","· ",s.toLocaleTimeString("en-IE",{hour:"2-digit",minute:"2-digit"})]})]}),S.jsx("button",{className:"kbd-hint",onClick:()=>p(!0),children:"⌘K"})]})]}),r&&S.jsx("div",{className:"notice",children:"Live sheet unreachable from this network; running on sample data so the layout stays honest. It reconnects automatically."}),v.length>0&&S.jsx("div",{className:"ticker",children:v.map((R,P)=>S.jsx("span",{className:"sig "+R.sev,children:R.text},P))}),S.jsx(g,{daily:t,replies:e,leads:n,payments:i,m:f,calc:l,setCalc:c}),S.jsxs("div",{className:"footer",children:[S.jsx("span",{children:"KEHOEGROUP · Blood & Ink"}),S.jsx("span",{children:"keys: 1-4 views · T tv · R refresh · ⌘K palette"})]})]}),S.jsx(rA,{open:h,close:()=>p(!1),go:m,actions:E})]})}Dv(document.getElementById("root")).render(S.jsx(sA,{}));
