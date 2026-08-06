(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var E0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ym(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sm={exports:{}},Hl={},Mm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),w0=Symbol.for("react.portal"),T0=Symbol.for("react.fragment"),A0=Symbol.for("react.strict_mode"),R0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),P0=Symbol.for("react.forward_ref"),L0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),ch=Symbol.iterator;function U0(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var Em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wm=Object.assign,Tm={};function Hs(t,e,n){this.props=t,this.context=e,this.refs=Tm,this.updater=n||Em}Hs.prototype.isReactComponent={};Hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Am(){}Am.prototype=Hs.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=Tm,this.updater=n||Em}var $d=qd.prototype=new Am;$d.constructor=qd;wm($d,Hs.prototype);$d.isPureReactComponent=!0;var uh=Array.isArray,Rm=Object.prototype.hasOwnProperty,Kd={current:null},Cm={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!Cm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:Kd.current}}function I0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function F0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F0(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case w0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+pc(a,0):i,uh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),Yo(r,e,n,"",function(c){return c})):r!=null&&(Zd(r)&&(r=I0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",uh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+pc(s,o);a+=Yo(s,e,n,l,r)}else if(l=U0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+pc(s,o++),a+=Yo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function k0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},qo={transition:null},O0={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:qo,ReactCurrentOwner:Kd};function Pm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Hs;Xe.Fragment=T0;Xe.Profiler=R0;Xe.PureComponent=qd;Xe.StrictMode=A0;Xe.Suspense=L0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;Xe.act=Pm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!Cm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:b0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C0,_context:t},t.Consumer=t};Xe.createElement=bm;Xe.createFactory=function(t){var e=bm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:P0,render:t}};Xe.isValidElement=Zd;Xe.lazy=function(t){return{$$typeof:N0,_payload:{_status:-1,_result:t},_init:k0}};Xe.memo=function(t,e){return{$$typeof:D0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=qo.transition;qo.transition={};try{t()}finally{qo.transition=e}};Xe.unstable_act=Pm;Xe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Xe.useContext=function(t){return Qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Xe.useId=function(){return Qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Qt.current.useRef(t)};Xe.useState=function(t){return Qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Qt.current.useTransition()};Xe.version="18.3.1";Mm.exports=Xe;var Te=Mm.exports;const Sa=ym(Te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=Te,z0=Symbol.for("react.element"),H0=Symbol.for("react.fragment"),V0=Object.prototype.hasOwnProperty,G0=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W0={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)V0.call(e,i)&&!W0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z0,type:t,key:s,ref:a,props:r,_owner:G0.current}}Hl.Fragment=H0;Hl.jsx=Lm;Hl.jsxs=Lm;Sm.exports=Hl;var v=Sm.exports,Dm={exports:{}},yn={},Nm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,F){var Z=N.length;N.push(F);e:for(;0<Z;){var ne=Z-1>>>1,K=N[ne];if(0<r(K,F))N[ne]=F,N[Z]=K,Z=ne;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var F=N[0],Z=N.pop();if(Z!==F){N[0]=Z;e:for(var ne=0,K=N.length,xe=K>>>1;ne<xe;){var Y=2*(ne+1)-1,J=N[Y],le=Y+1,oe=N[le];if(0>r(J,Z))le<K&&0>r(oe,J)?(N[ne]=oe,N[le]=Z,ne=le):(N[ne]=J,N[Y]=Z,ne=Y);else if(le<K&&0>r(oe,Z))N[ne]=oe,N[le]=Z,ne=le;else break e}}return F}function r(N,F){var Z=N.sortIndex-F.sortIndex;return Z!==0?Z:N.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,h=3,p=!1,y=!1,M=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=N)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function E(N){if(M=!1,g(N),!y)if(n(l)!==null)y=!0,G(b);else{var F=n(c);F!==null&&B(E,F.startTime-N)}}function b(N,F){y=!1,M&&(M=!1,f(w),w=-1),p=!0;var Z=h;try{for(g(F),d=n(l);d!==null&&(!(d.expirationTime>F)||N&&!A());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,h=d.priorityLevel;var K=ne(d.expirationTime<=F);F=t.unstable_now(),typeof K=="function"?d.callback=K:d===n(l)&&i(l),g(F)}else i(l);d=n(l)}if(d!==null)var xe=!0;else{var Y=n(c);Y!==null&&B(E,Y.startTime-F),xe=!1}return xe}finally{d=null,h=Z,p=!1}}var P=!1,R=null,w=-1,_=5,S=-1;function A(){return!(t.unstable_now()-S<_)}function L(){if(R!==null){var N=t.unstable_now();S=N;var F=!0;try{F=R(!0,N)}finally{F?D():(P=!1,R=null)}}else P=!1}var D;if(typeof x=="function")D=function(){x(L)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=L,D=function(){W.postMessage(null)}}else D=function(){m(L,0)};function G(N){R=N,P||(P=!0,D())}function B(N,F){w=m(function(){N(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,G(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var Z=h;h=F;try{return N()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,F){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=h;h=N;try{return F()}finally{h=Z}},t.unstable_scheduleCallback=function(N,F,Z){var ne=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ne+Z:ne):Z=ne,N){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Z+K,N={id:u++,callback:F,priorityLevel:N,startTime:Z,expirationTime:K,sortIndex:-1},Z>ne?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(M?(f(w),w=-1):M=!0,B(E,Z-ne))):(N.sortIndex=K,e(l,N),y||p||(y=!0,G(b))),N},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(N){var F=h;return function(){var Z=h;h=F;try{return N.apply(this,arguments)}finally{h=Z}}}})(Um);Nm.exports=Um;var j0=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=Te,xn=j0;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Im=new Set,Ma={};function Br(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Im.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},hh={};function q0(t){return yu.call(hh,t)?!0:yu.call(fh,t)?!1:Y0.test(t)?hh[t]=!0:(fh[t]=!0,!1)}function $0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K0(t,e,n,i){if(e===null||typeof e>"u"||$0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K0(e,n,r,i)&&(n=null),i||r===null?q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),Fm=Symbol.for("react.provider"),km=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),ph=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,mc;function sa(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function vc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function Z0(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case Su:return"Profiler";case tf:return"StrictMode";case Mu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case Fm:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function Q0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J0(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=J0(t))}function zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Au(t,e){Hm(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(aa(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Vm(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e_=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){e_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function Xm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var t_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(t,e){if(e){if(t_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Du=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nu=null,Ss=null,Ms=null;function xh(t){if(t=Wa(t)){if(typeof Nu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Xl(e),Nu(t.stateNode,t.type,e))}}function Ym(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function qm(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function $m(t,e){return t(e)}function Km(){}var _c=!1;function Zm(t,e,n){if(_c)return t(e,n);_c=!0;try{return $m(t,e,n)}finally{_c=!1,(Ss!==null||Ms!==null)&&(Km(),qm())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Uu=!1;if(Si)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Uu=!1}function n_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var da=!1,fl=null,hl=!1,Iu=null,i_={onError:function(t){da=!0,fl=t}};function r_(t,e,n,i,r,s,a,o,l){da=!1,fl=null,n_.apply(i_,arguments)}function s_(t,e,n,i,r,s,a,o,l){if(r_.apply(this,arguments),da){if(da){var c=fl;da=!1,fl=null}else throw Error(se(198));hl||(hl=!0,Iu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(zr(t)!==t)throw Error(se(188))}function a_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Jm(t){return t=a_(t),t!==null?eg(t):null}function eg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eg(t);if(e!==null)return e;t=t.sibling}return null}var tg=xn.unstable_scheduleCallback,Sh=xn.unstable_cancelCallback,o_=xn.unstable_shouldYield,l_=xn.unstable_requestPaint,wt=xn.unstable_now,c_=xn.unstable_getCurrentPriorityLevel,af=xn.unstable_ImmediatePriority,ng=xn.unstable_UserBlockingPriority,pl=xn.unstable_NormalPriority,u_=xn.unstable_LowPriority,ig=xn.unstable_IdlePriority,Vl=null,ti=null;function d_(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:p_,f_=Math.log,h_=Math.LN2;function p_(t){return t>>>=0,t===0?32:31-(f_(t)/h_|0)|0}var ao=64,oo=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oa(o):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function m_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=m_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rg(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function v_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ag,lf,og,lg,cg,ku=!1,lo=[],Xi=null,Yi=null,qi=null,Ta=new Map,Aa=new Map,Hi=[],__="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wa(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x_(t,e,n,i,r){switch(e){case"focusin":return Xi=qs(Xi,t,e,n,i,r),!0;case"dragenter":return Yi=qs(Yi,t,e,n,i,r),!0;case"mouseover":return qi=qs(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,qs(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,qs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function ug(t){var e=Mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,cg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Du=i,n.target.dispatchEvent(i),Du=null}else return e=Wa(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){$o(t)&&n.delete(e)}function y_(){ku=!1,Xi!==null&&$o(Xi)&&(Xi=null),Yi!==null&&$o(Yi)&&(Yi=null),qi!==null&&$o(qi)&&(qi=null),Ta.forEach(Eh),Aa.forEach(Eh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,y_)))}function Ra(t){function e(r){return $s(r,t)}if(0<lo.length){$s(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),Yi!==null&&$s(Yi,t),qi!==null&&$s(qi,t),Ta.forEach(e),Aa.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Hi.shift()}var Es=Ci.ReactCurrentBatchConfig,gl=!0;function S_(t,e,n,i){var r=st,s=Es.transition;Es.transition=null;try{st=1,cf(t,e,n,i)}finally{st=r,Es.transition=s}}function M_(t,e,n,i){var r=st,s=Es.transition;Es.transition=null;try{st=4,cf(t,e,n,i)}finally{st=r,Es.transition=s}}function cf(t,e,n,i){if(gl){var r=Ou(t,e,n,i);if(r===null)bc(t,e,i,vl,n),Mh(t,i);else if(x_(r,t,e,n,i))i.stopPropagation();else if(Mh(t,i),e&4&&-1<__.indexOf(t)){for(;r!==null;){var s=Wa(r);if(s!==null&&ag(s),s=Ou(t,e,n,i),s===null&&bc(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var vl=null;function Ou(t,e,n,i){if(vl=null,t=sf(i),t=Mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function dg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c_()){case af:return 1;case ng:return 4;case pl:case u_:return 16;case ig:return 536870912;default:return 16}default:return 16}}var Wi=null,uf=null,Ko=null;function fg(){if(Ko)return Ko;var t,e=uf,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ko=r.slice(t,1<i?1-i:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function wh(){return!1}function Sn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:wh,this.isPropagationStopped=wh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Sn(Vs),Ga=xt({},Vs,{view:0,detail:0}),E_=Sn(Ga),yc,Sc,Ks,Gl=xt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(yc=t.screenX-Ks.screenX,Sc=t.screenY-Ks.screenY):Sc=yc=0,Ks=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Th=Sn(Gl),w_=xt({},Gl,{dataTransfer:0}),T_=Sn(w_),A_=xt({},Ga,{relatedTarget:0}),Mc=Sn(A_),R_=xt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=Sn(R_),b_=xt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=Sn(b_),L_=xt({},Vs,{data:0}),Ah=Sn(L_),D_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U_[t])?!!e[t]:!1}function ff(){return I_}var F_=xt({},Ga,{key:function(t){if(t.key){var e=D_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k_=Sn(F_),O_=xt({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Sn(O_),B_=xt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),z_=Sn(B_),H_=xt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=Sn(H_),G_=xt({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W_=Sn(G_),j_=[9,13,27,32],hf=Si&&"CompositionEvent"in window,fa=null;Si&&"documentMode"in document&&(fa=document.documentMode);var X_=Si&&"TextEvent"in window&&!fa,hg=Si&&(!hf||fa&&8<fa&&11>=fa),Ch=" ",bh=!1;function pg(t,e){switch(t){case"keyup":return j_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Y_(t,e){switch(t){case"compositionend":return mg(e);case"keypress":return e.which!==32?null:(bh=!0,Ch);case"textInput":return t=e.data,t===Ch&&bh?null:t;default:return null}}function q_(t,e){if(cs)return t==="compositionend"||!hf&&pg(t,e)?(t=fg(),Ko=uf=Wi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hg&&e.locale!=="ko"?null:e.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$_[t.type]:e==="textarea"}function gg(t,e,n,i){Ym(i),e=_l(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function K_(t){Rg(t,0)}function Wl(t){var e=fs(t);if(zm(e))return t}function Z_(t,e){if(t==="change")return e}var vg=!1;if(Si){var Ec;if(Si){var wc="oninput"in document;if(!wc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),wc=typeof Lh.oninput=="function"}Ec=wc}else Ec=!1;vg=Ec&&(!document.documentMode||9<document.documentMode)}function Dh(){ha&&(ha.detachEvent("onpropertychange",_g),Ca=ha=null)}function _g(t){if(t.propertyName==="value"&&Wl(Ca)){var e=[];gg(e,Ca,t,sf(t)),Zm(K_,e)}}function Q_(t,e,n){t==="focusin"?(Dh(),ha=e,Ca=n,ha.attachEvent("onpropertychange",_g)):t==="focusout"&&Dh()}function J_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wl(Ca)}function ex(t,e){if(t==="click")return Wl(e)}function tx(t,e){if(t==="input"||t==="change")return Wl(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:nx;function ba(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nh(n)}}function xg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=yg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xg(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var a=Uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Si&&"documentMode"in document&&11>=document.documentMode,us=null,Bu=null,pa=null,zu=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||us==null||us!==dl(i)||(i=us,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&ba(pa,i)||(pa=i,i=_l(Bu,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Tc={},Sg={};Si&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function jl(t){if(Tc[t])return Tc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sg)return Tc[t]=e[n];return t}var Mg=jl("animationend"),Eg=jl("animationiteration"),wg=jl("animationstart"),Tg=jl("transitionend"),Ag=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Ag.set(t,e),Br(e,[t])}for(var Ac=0;Ac<Fh.length;Ac++){var Rc=Fh[Ac],sx=Rc.toLowerCase(),ax=Rc[0].toUpperCase()+Rc.slice(1);sr(sx,"on"+ax)}sr(Mg,"onAnimationEnd");sr(Eg,"onAnimationIteration");sr(wg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Tg,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s_(i,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,c),s=l}}}if(hl)throw t=Iu,hl=!1,Iu=null,t}function dt(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[fo]){t[fo]=!0,Im.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Cc("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(dg(e)){case 1:var r=S_;break;case 4:r=M_;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Zm(function(){var c=s,u=sf(n),d=[];e:{var h=Ag.get(t);if(h!==void 0){var p=df,y=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":p=k_;break;case"focusin":y="focus",p=Mc;break;case"focusout":y="blur",p=Mc;break;case"beforeblur":case"afterblur":p=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=T_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=z_;break;case Mg:case Eg:case wg:p=C_;break;case Tg:p=V_;break;case"scroll":p=E_;break;case"wheel":p=W_;break;case"copy":case"cut":case"paste":p=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rh}var M=(e&4)!==0,m=!M&&t==="scroll",f=M?h!==null?h+"Capture":null:h;M=[];for(var x=c,g;x!==null;){g=x;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=wa(x,f),E!=null&&M.push(La(x,E,g)))),m)break;x=x.return}0<M.length&&(h=new p(h,y,null,n,u),d.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Du&&(y=n.relatedTarget||n.fromElement)&&(Mr(y)||y[Mi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Mr(y):null,y!==null&&(m=zr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=c),p!==y)){if(M=Th,E="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Rh,E="onPointerLeave",f="onPointerEnter",x="pointer"),m=p==null?h:fs(p),g=y==null?h:fs(y),h=new M(E,x+"leave",p,n,u),h.target=m,h.relatedTarget=g,E=null,Mr(u)===c&&(M=new M(f,x+"enter",y,n,u),M.target=g,M.relatedTarget=m,E=M),m=E,p&&y)t:{for(M=p,f=y,x=0,g=M;g;g=Gr(g))x++;for(g=0,E=f;E;E=Gr(E))g++;for(;0<x-g;)M=Gr(M),x--;for(;0<g-x;)f=Gr(f),g--;for(;x--;){if(M===f||f!==null&&M===f.alternate)break t;M=Gr(M),f=Gr(f)}M=null}else M=null;p!==null&&Oh(d,h,p,M,!1),y!==null&&m!==null&&Oh(d,m,y,M,!0)}}e:{if(h=c?fs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=Z_;else if(Ph(h))if(vg)b=tx;else{b=J_;var P=Q_}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=ex);if(b&&(b=b(t,c))){gg(d,b,n,u);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ru(h,"number",h.value)}switch(P=c?fs(c):window,t){case"focusin":(Ph(P)||P.contentEditable==="true")&&(us=P,Bu=c,pa=null);break;case"focusout":pa=Bu=us=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Ih(d,n,u);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Ih(d,n,u)}var R;if(hf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else cs?pg(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(hg&&n.locale!=="ko"&&(cs||w!=="onCompositionStart"?w==="onCompositionEnd"&&cs&&(R=fg()):(Wi=u,uf="value"in Wi?Wi.value:Wi.textContent,cs=!0)),P=_l(c,w),0<P.length&&(w=new Ah(w,t,null,n,u),d.push({event:w,listeners:P}),R?w.data=R:(R=mg(n),R!==null&&(w.data=R)))),(R=X_?Y_(t,n):q_(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(u=new Ah("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=R))}Rg(d,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(La(t,s,r)),s=wa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=wa(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var lx=/\r\n?/g,cx=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(cx,"")}function ho(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(se(425))}function xl(){}var Hu=null,Vu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,dx=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(fx)}:Wu;function fx(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Gs,Da="__reactProps$"+Gs,Mi="__reactContainer$"+Gs,ju="__reactEvents$"+Gs,hx="__reactListeners$"+Gs,px="__reactHandles$"+Gs;function Mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Qn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Wa(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Xl(t){return t[Da]||null}var Xu=[],hs=-1;function ar(t){return{current:t}}function ht(t){0>hs||(t.current=Xu[hs],Xu[hs]=null,hs--)}function ct(t,e){hs++,Xu[hs]=t.current,t.current=e}var ir={},qt=ar(ir),sn=ar(!1),Dr=ir;function Ps(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function yl(){ht(sn),ht(qt)}function Vh(t,e,n){if(qt.current!==ir)throw Error(se(168));ct(qt,e),ct(sn,n)}function bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Q0(t)||"Unknown",r));return xt({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Dr=qt.current,ct(qt,t),ct(sn,sn.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=bg(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ht(sn),ht(qt),ct(qt,t)):ht(sn),ct(sn,n)}var hi=null,Yl=!1,Lc=!1;function Pg(t){hi===null?hi=[t]:hi.push(t)}function mx(t){Yl=!0,Pg(t)}function or(){if(!Lc&&hi!==null){Lc=!0;var t=0,e=st;try{var n=hi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Yl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),tg(af,or),r}finally{st=e,Lc=!1}}return null}var ps=[],ms=0,Ml=null,El=0,Tn=[],An=0,Nr=null,mi=1,gi="";function gr(t,e){ps[ms++]=El,ps[ms++]=Ml,Ml=t,El=e}function Lg(t,e,n){Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Nr,Nr=t;var i=mi;t=gi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Gn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function mf(t){t.return!==null&&(gr(t,1),Lg(t,1,0))}function gf(t){for(;t===Ml;)Ml=ps[--ms],ps[ms]=null,El=ps[--ms],ps[ms]=null;for(;t===Nr;)Nr=Tn[--An],Tn[An]=null,gi=Tn[--An],Tn[An]=null,mi=Tn[--An],Tn[An]=null}var vn=null,gn=null,mt=!1,Bn=null;function Dg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(mt){var e=gn;if(e){var n=e;if(!Wh(t,e)){if(Yu(t))throw Error(se(418));e=$i(n.nextSibling);var i=vn;e&&Wh(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,mt=!1,vn=t)}}else{if(Yu(t))throw Error(se(418));t.flags=t.flags&-4097|2,mt=!1,vn=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function po(t){if(t!==vn)return!1;if(!mt)return jh(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=gn)){if(Yu(t))throw Ng(),Error(se(418));for(;e;)Dg(t,e),e=$i(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?$i(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=gn;t;)t=$i(t.nextSibling)}function Ls(){gn=vn=null,mt=!1}function vf(t){Bn===null?Bn=[t]:Bn.push(t)}var gx=Ci.ReactCurrentBatchConfig;function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function Ug(t){function e(f,x){if(t){var g=f.deletions;g===null?(f.deletions=[x],f.flags|=16):g.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Ji(f,x),f.index=0,f.sibling=null,f}function s(f,x,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<x?(f.flags|=2,x):g):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,g,E){return x===null||x.tag!==6?(x=Oc(g,f.mode,E),x.return=f,x):(x=r(x,g),x.return=f,x)}function l(f,x,g,E){var b=g.type;return b===ls?u(f,x,g.props.children,E,g.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Xh(b)===x.type)?(E=r(x,g.props),E.ref=Zs(f,x,g),E.return=f,E):(E=rl(g.type,g.key,g.props,null,f.mode,E),E.ref=Zs(f,x,g),E.return=f,E)}function c(f,x,g,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Bc(g,f.mode,E),x.return=f,x):(x=r(x,g.children||[]),x.return=f,x)}function u(f,x,g,E,b){return x===null||x.tag!==7?(x=Cr(g,f.mode,E,b),x.return=f,x):(x=r(x,g),x.return=f,x)}function d(f,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Oc(""+x,f.mode,g),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case io:return g=rl(x.type,x.key,x.props,null,f.mode,g),g.ref=Zs(f,null,x),g.return=f,g;case os:return x=Bc(x,f.mode,g),x.return=f,x;case Bi:var E=x._init;return d(f,E(x._payload),g)}if(aa(x)||Xs(x))return x=Cr(x,f.mode,g,null),x.return=f,x;mo(f,x)}return null}function h(f,x,g,E){var b=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:o(f,x,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case io:return g.key===b?l(f,x,g,E):null;case os:return g.key===b?c(f,x,g,E):null;case Bi:return b=g._init,h(f,x,b(g._payload),E)}if(aa(g)||Xs(g))return b!==null?null:u(f,x,g,E,null);mo(f,g)}return null}function p(f,x,g,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,o(x,f,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return f=f.get(E.key===null?g:E.key)||null,l(x,f,E,b);case os:return f=f.get(E.key===null?g:E.key)||null,c(x,f,E,b);case Bi:var P=E._init;return p(f,x,g,P(E._payload),b)}if(aa(E)||Xs(E))return f=f.get(g)||null,u(x,f,E,b,null);mo(x,E)}return null}function y(f,x,g,E){for(var b=null,P=null,R=x,w=x=0,_=null;R!==null&&w<g.length;w++){R.index>w?(_=R,R=null):_=R.sibling;var S=h(f,R,g[w],E);if(S===null){R===null&&(R=_);break}t&&R&&S.alternate===null&&e(f,R),x=s(S,x,w),P===null?b=S:P.sibling=S,P=S,R=_}if(w===g.length)return n(f,R),mt&&gr(f,w),b;if(R===null){for(;w<g.length;w++)R=d(f,g[w],E),R!==null&&(x=s(R,x,w),P===null?b=R:P.sibling=R,P=R);return mt&&gr(f,w),b}for(R=i(f,R);w<g.length;w++)_=p(R,f,w,g[w],E),_!==null&&(t&&_.alternate!==null&&R.delete(_.key===null?w:_.key),x=s(_,x,w),P===null?b=_:P.sibling=_,P=_);return t&&R.forEach(function(A){return e(f,A)}),mt&&gr(f,w),b}function M(f,x,g,E){var b=Xs(g);if(typeof b!="function")throw Error(se(150));if(g=b.call(g),g==null)throw Error(se(151));for(var P=b=null,R=x,w=x=0,_=null,S=g.next();R!==null&&!S.done;w++,S=g.next()){R.index>w?(_=R,R=null):_=R.sibling;var A=h(f,R,S.value,E);if(A===null){R===null&&(R=_);break}t&&R&&A.alternate===null&&e(f,R),x=s(A,x,w),P===null?b=A:P.sibling=A,P=A,R=_}if(S.done)return n(f,R),mt&&gr(f,w),b;if(R===null){for(;!S.done;w++,S=g.next())S=d(f,S.value,E),S!==null&&(x=s(S,x,w),P===null?b=S:P.sibling=S,P=S);return mt&&gr(f,w),b}for(R=i(f,R);!S.done;w++,S=g.next())S=p(R,f,w,S.value,E),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?w:S.key),x=s(S,x,w),P===null?b=S:P.sibling=S,P=S);return t&&R.forEach(function(L){return e(f,L)}),mt&&gr(f,w),b}function m(f,x,g,E){if(typeof g=="object"&&g!==null&&g.type===ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case io:e:{for(var b=g.key,P=x;P!==null;){if(P.key===b){if(b=g.type,b===ls){if(P.tag===7){n(f,P.sibling),x=r(P,g.props.children),x.return=f,f=x;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Xh(b)===P.type){n(f,P.sibling),x=r(P,g.props),x.ref=Zs(f,P,g),x.return=f,f=x;break e}n(f,P);break}else e(f,P);P=P.sibling}g.type===ls?(x=Cr(g.props.children,f.mode,E,g.key),x.return=f,f=x):(E=rl(g.type,g.key,g.props,null,f.mode,E),E.ref=Zs(f,x,g),E.return=f,f=E)}return a(f);case os:e:{for(P=g.key;x!==null;){if(x.key===P)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(f,x.sibling),x=r(x,g.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Bc(g,f.mode,E),x.return=f,f=x}return a(f);case Bi:return P=g._init,m(f,x,P(g._payload),E)}if(aa(g))return y(f,x,g,E);if(Xs(g))return M(f,x,g,E);mo(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,g),x.return=f,f=x):(n(f,x),x=Oc(g,f.mode,E),x.return=f,f=x),a(f)):n(f,x)}return m}var Ds=Ug(!0),Ig=Ug(!1),wl=ar(null),Tl=null,gs=null,_f=null;function xf(){_f=gs=Tl=null}function yf(t){var e=wl.current;ht(wl),t._currentValue=e}function $u(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Tl=t,_f=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Tl===null)throw Error(se(308));gs=t,Tl.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Er=null;function Sf(t){Er===null?Er=[t]:Er.push(t)}function Fg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function Yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,M=o;switch(h=e,p=n,M.tag){case 1:if(y=M.payload,typeof y=="function"){d=y.call(p,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=M.payload,h=typeof y=="function"?y.call(p,d,h):y,h==null)break e;d=xt({},d,h);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=d}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ja={},ni=ar(ja),Na=ar(ja),Ua=ar(ja);function wr(t){if(t===ja)throw Error(se(174));return t}function Ef(t,e){switch(ct(Ua,e),ct(Na,t),ct(ni,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}ht(ni),ct(ni,e)}function Ns(){ht(ni),ht(Na),ht(Ua)}function Og(t){wr(Ua.current);var e=wr(ni.current),n=bu(e,t.type);e!==n&&(ct(Na,t),ct(ni,n))}function wf(t){Na.current===t&&(ht(ni),ht(Na))}var vt=ar(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dc=[];function Tf(){for(var t=0;t<Dc.length;t++)Dc[t]._workInProgressVersionPrimary=null;Dc.length=0}var Jo=Ci.ReactCurrentDispatcher,Nc=Ci.ReactCurrentBatchConfig,Ur=0,_t=null,bt=null,It=null,Cl=!1,ma=!1,Ia=0,vx=0;function Gt(){throw Error(se(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Ur=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?Sx:Mx,t=n(i,r),ma){s=0;do{if(ma=!1,Ia=0,25<=s)throw Error(se(301));s+=1,It=bt=null,e.updateQueue=null,Jo.current=Ex,t=n(i,r)}while(ma)}if(Jo.current=bl,e=bt!==null&&bt.next!==null,Ur=0,It=bt=_t=null,Cl=!1,e)throw Error(se(300));return t}function Cf(){var t=Ia!==0;return Ia=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?_t.memoizedState=It=t:It=It.next=t,It}function Ln(){if(bt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=It===null?_t.memoizedState:It.next;if(e!==null)It=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?_t.memoizedState=It=t:It=It.next=t}return It}function Fa(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ur&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,_t.lanes|=u,Ir|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Xn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Ln(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Xn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bg(){}function zg(t,e){var n=_t,i=Ln(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,bf(Gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ka(9,Vg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(se(349));Ur&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&jg(t)}function Gg(t,e,n){return n(function(){Wg(e)&&jg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function jg(t){var e=Ei(t,1);e!==null&&Wn(e,t,1,-1)}function $h(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=yx.bind(null,_t,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xg(){return Ln().memoizedState}function el(t,e,n,i){var r=$n();_t.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Ln();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&Af(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Kh(t,e){return el(8390656,8,t,e)}function bf(t,e){return ql(2048,8,t,e)}function Yg(t,e){return ql(4,2,t,e)}function qg(t,e){return ql(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kg(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,$g.bind(null,e,t),n)}function Pf(){}function Zg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Ln();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return Ur&21?(Xn(n,e)||(n=rg(),_t.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function _x(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{st=n,Nc.transition=i}}function ev(){return Ln().memoizedState}function xx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},tv(t))nv(e,n);else if(n=Fg(t,e,n,i),n!==null){var r=Zt();Wn(n,t,i,r),iv(n,e,i)}}function yx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(tv(t))nv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Xn(o,a)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fg(t,e,r,i),n!==null&&(r=Zt(),Wn(n,t,i,r),iv(n,e,i))}}function tv(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function nv(t,e){ma=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var bl={readContext:Pn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Sx={readContext:Pn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Pf,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=_x.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=$n();if(mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),kt===null)throw Error(se(349));Ur&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(Gg.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=kt.identifierPrefix;if(mt){var n=gi,i=mi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:Pn,useCallback:Zg,useContext:Pn,useEffect:bf,useImperativeHandle:Kg,useInsertionEffect:Yg,useLayoutEffect:qg,useMemo:Qg,useReducer:Uc,useRef:Xg,useState:function(){return Uc(Fa)},useDebugValue:Pf,useDeferredValue:function(t){var e=Ln();return Jg(e,bt.memoizedState,t)},useTransition:function(){var t=Uc(Fa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:zg,useId:ev,unstable_isNewReconciler:!1},Ex={readContext:Pn,useCallback:Zg,useContext:Pn,useEffect:bf,useImperativeHandle:Kg,useInsertionEffect:Yg,useLayoutEffect:qg,useMemo:Qg,useReducer:Ic,useRef:Xg,useState:function(){return Ic(Fa)},useDebugValue:Pf,useDeferredValue:function(t){var e=Ln();return bt===null?e.memoizedState=t:Jg(e,bt.memoizedState,t)},useTransition:function(){var t=Ic(Fa)[0],e=Ln().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:zg,useId:ev,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Wn(e,t,r,i),Qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=Qi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Wn(e,t,r,i),Qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=Qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Wn(e,t,i,n),Qo(e,t,i))}};function Zh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function rv(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=an(e)?Dr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=an(e)?Dr:qt.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=Z0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,ld=i),Qu(t,e)},n}function av(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qu(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ox.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Tx=Ci.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Ig(e,null,n,i):Ds(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Rf(t,e,n,i,s,r),n=Cf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&n&&mf(e),e.flags|=1,Kt(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ov(t,e,s,i,r)):(t=rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Ju(t,e,n,i,r)}function lv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(_s,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(_s,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(_s,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(_s,mn),mn|=i;return Kt(t,e,r,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,r){var s=an(n)?Dr:qt.current;return s=Ps(e,s),ws(e,r),n=Rf(t,e,n,i,s,r),i=Cf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&i&&mf(e),e.flags|=1,Kt(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(an(n)){var s=!0;Sl(e)}else s=!1;if(ws(e,r),e.stateNode===null)tl(t,e),rv(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=an(n)?Dr:qt.current,c=Ps(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Qh(e,a,i,c),zi=!1;var h=e.memoizedState;a.state=h,Al(e,i,a,r),l=e.memoizedState,o!==i||h!==l||sn.current||zi?(typeof u=="function"&&(Ku(e,n,u,i),l=e.memoizedState),(o=zi||Zh(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,kg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:kn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=an(n)?Dr:qt.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&Qh(e,a,i,l),zi=!1,h=e.memoizedState,a.state=h,Al(e,i,a,r);var y=e.memoizedState;o!==d||h!==y||sn.current||zi?(typeof p=="function"&&(Ku(e,n,p,i),y=e.memoizedState),(c=zi||Zh(e,n,c,i,h,y,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){cv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gh(e,n,!1),wi(t,e,s);i=e.stateNode,Tx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?Vh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vh(t,e.context,!1),Ef(t,e.containerInfo)}function sp(t,e,n,i,r){return Ls(),vf(r),e.flags|=256,Kt(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(vt,r&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ql(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Lf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ax(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ji(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?nd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&vf(i),Ds(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Fc(Error(se(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ql({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=nd(a),e.memoizedState=td,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Fc(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),Wn(i,t,r,-1))}return kf(),i=Fc(Error(se(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Bx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=$i(r.nextSibling),vn=e,mt=!0,Bn=null,t!==null&&(Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Nr,mi=t.id,gi=t.overflow,Nr=e),e=Lf(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$u(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function fv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rx(t,e,n){switch(e.tag){case 3:uv(e),Ls();break;case 5:Og(e);break;case 1:an(e.type)&&Sl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(ct(vt,vt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return fv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,lv(t,e,n)}return wi(t,e,n)}var hv,id,pv,mv;hv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};pv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ni.current);var s=null;switch(n){case"input":r=Tu(t,r),i=Tu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Pu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};mv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cx(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return an(e.type)&&yl(),Wt(e),null;case 3:return i=e.stateNode,Ns(),ht(sn),ht(qt),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(dd(Bn),Bn=null))),id(t,e),Wt(e),null;case 5:wf(e);var r=wr(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)pv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Wt(e),null}if(t=wr(ni.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)dt(la[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":mh(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":vh(i,s),dt("invalid",i)}Pu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":ro(i),gh(i,s,!0);break;case"textarea":ro(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Qn]=e,t[Da]=i,hv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Lu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)dt(la[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":mh(t,i),r=Tu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":vh(t,i),r=Cu(t,i),dt("invalid",t);break;default:r=i}Pu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Xm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&ef(t,s,l,a))}switch(n){case"input":ro(t),gh(t,i,!1);break;case"textarea":ro(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)mv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=wr(Ua.current),wr(ni.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Wt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&gn!==null&&e.mode&1&&!(e.flags&128))Ng(),Ls(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Qn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else Bn!==null&&(dd(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Pt===0&&(Pt=3):kf())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Ns(),id(t,e),t===null&&Pa(e.stateNode.containerInfo),Wt(e),null;case 10:return yf(e.type._context),Wt(e),null;case 17:return an(e.type)&&yl(),Wt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Qs(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,Qs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Is&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return Wt(e),null}else 2*wt()-s.renderingStartTime>Is&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=vt.current,ct(vt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function bx(t,e){switch(gf(e),e.tag){case 1:return an(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ht(sn),ht(qt),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return Ns(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var vo=!1,Yt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,Se=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var op=!1;function Lx(t,e){if(Hu=gl,t=yg(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},gl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var M=y.memoizedProps,m=y.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:kn(e.type,M),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){Mt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return y=op,op=!1,y}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gv(t){var e=t.alternate;e!==null&&(t.alternate=null,gv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Da],delete e[ju],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var zt=null,On=!1;function Pi(t,e,n){for(n=n.child;n!==null;)_v(t,e,n),n=n.sibling}function _v(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Yt||vs(n,e);case 6:var i=zt,r=On;zt=null,Pi(t,e,n),zt=i,On=r,zt!==null&&(On?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(On?(t=zt,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),Ra(t)):Pc(zt,n.stateNode));break;case 4:i=zt,r=On,zt=n.stateNode.containerInfo,On=!0,Pi(t,e,n),zt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rd(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Yt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Mt(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Pi(t,e,n),Yt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,On=!1;break e;case 3:zt=o.stateNode.containerInfo,On=!0;break e;case 4:zt=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(zt===null)throw Error(se(160));_v(s,a,r),zt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),qn(t),i&4){try{ga(3,t,t.return),Kl(3,t)}catch(M){Mt(t,t.return,M)}try{ga(5,t,t.return)}catch(M){Mt(t,t.return,M)}}break;case 1:Nn(e,t),qn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Nn(e,t),qn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(M){Mt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Hm(r,s),Lu(o,a);var c=Lu(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?Xm(r,d):u==="dangerouslySetInnerHTML"?Wm(r,d):u==="children"?Ea(r,d):ef(r,u,d,c)}switch(o){case"input":Au(r,s);break;case"textarea":Vm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(M){Mt(t,t.return,M)}}break;case 6:if(Nn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Mt(t,t.return,M)}}break;case 3:if(Nn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(M){Mt(t,t.return,M)}break;case 4:Nn(e,t),qn(t);break;case 13:Nn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=wt())),i&4&&cp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Nn(e,t),Yt=c):Nn(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(d=Se=u;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:ga(4,h,h.return);break;case 1:vs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(M){Mt(i,n,M)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){dp(d);continue}}p!==null?(p.return=h,Se=p):dp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=jm("display",a))}catch(M){Mt(t,t.return,M)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(M){Mt(t,t.return,M)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nn(e,t),qn(t),i&4&&cp(t);break;case 21:break;default:Nn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=lp(t);od(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lp(t);ad(t,o,a);break;default:throw Error(se(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){Se=t,yv(t)}function yv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=vo;var c=Yt;if(vo=a,(Yt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?fp(r):l!==null?(l.return=a,Se=l):fp(r);for(;s!==null;)Se=s,yv(s),s=s.sibling;Se=r,vo=o,Yt=c}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):up(t)}}function up(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ra(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Yt||e.flags&512&&sd(e)}catch(h){Mt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function dp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function fp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Kl(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var s=e.return;try{sd(e)}catch(l){Mt(e,s,l)}break;case 5:var a=e.return;try{sd(e)}catch(l){Mt(e,a,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Nx=Math.ceil,Pl=Ci.ReactCurrentDispatcher,Df=Ci.ReactCurrentOwner,bn=Ci.ReactCurrentBatchConfig,Ke=0,kt=null,Ct=null,Ht=0,mn=0,_s=ar(0),Pt=0,Oa=null,Ir=0,Zl=0,Nf=0,va=null,tn=null,Uf=0,Is=1/0,fi=null,Ll=!1,ld=null,Zi=null,_o=!1,ji=null,Dl=0,_a=0,cd=null,nl=-1,il=0;function Zt(){return Ke&6?wt():nl!==-1?nl:nl=wt()}function Qi(t){return t.mode&1?Ke&2&&Ht!==0?Ht&-Ht:gx.transition!==null?(il===0&&(il=rg()),il):(t=st,t!==0||(t=window.event,t=t===void 0?16:dg(t.type)),t):1}function Wn(t,e,n,i){if(50<_a)throw _a=0,cd=null,Error(se(185));Va(t,n,i),(!(Ke&2)||t!==kt)&&(t===kt&&(!(Ke&2)&&(Zl|=n),Pt===4&&Vi(t,Ht)),on(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Is=wt()+500,Yl&&or()))}function on(t,e){var n=t.callbackNode;g_(t,e);var i=ml(t,t===kt?Ht:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?mx(hp.bind(null,t)):Pg(hp.bind(null,t)),dx(function(){!(Ke&6)&&or()}),n=null;else{switch(sg(i)){case 1:n=af;break;case 4:n=ng;break;case 16:n=pl;break;case 536870912:n=ig;break;default:n=pl}n=Cv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(nl=-1,il=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=ml(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Ke;Ke|=2;var s=Ev();(kt!==t||Ht!==e)&&(fi=null,Is=wt()+500,Rr(t,e));do try{Fx();break}catch(o){Mv(t,o)}while(!0);xf(),Pl.current=s,Ke=r,Ct!==null?e=0:(kt=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=Fu(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=Oa,Rr(t,0),Vi(t,i),on(t,wt()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ux(r)&&(e=Nl(t,i),e===2&&(s=Fu(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=Oa,Rr(t,0),Vi(t,i),on(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:vr(t,tn,fi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=Uf+500-wt(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Wu(vr.bind(null,t,tn,fi),e);break}vr(t,tn,fi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nx(i/1960))-i,10<i){t.timeoutHandle=Wu(vr.bind(null,t,tn,fi),i);break}vr(t,tn,fi);break;case 5:vr(t,tn,fi);break;default:throw Error(se(329))}}}return on(t,wt()),t.callbackNode===n?Sv.bind(null,t):null}function ud(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=tn,tn=n,e!==null&&dd(e)),t}function dd(t){tn===null?tn=t:tn.push.apply(tn,t)}function Ux(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Nf,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(Ke&6)throw Error(se(327));Ts();var e=ml(t,0);if(!(e&1))return on(t,wt()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Fu(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=Oa,Rr(t,0),Vi(t,e),on(t,wt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,tn,fi),on(t,wt()),null}function If(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Is=wt()+500,Yl&&or())}}function Fr(t){ji!==null&&ji.tag===0&&!(Ke&6)&&Ts();var e=Ke;Ke|=1;var n=bn.transition,i=st;try{if(bn.transition=null,st=1,t)return t()}finally{st=i,bn.transition=n,Ke=e,!(Ke&6)&&or()}}function Ff(){mn=_s.current,ht(_s)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ux(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:Ns(),ht(sn),ht(qt),Tf();break;case 5:wf(i);break;case 4:Ns();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:yf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(kt=t,Ct=t=Ji(t.current,null),Ht=mn=e,Pt=0,Oa=null,Nf=Zl=Ir=0,tn=va=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function Mv(t,e){do{var n=Ct;try{if(xf(),Jo.current=bl,Cl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Ur=0,It=bt=_t=null,ma=!1,Ia=0,Df.current=null,n===null||n.return===null){Pt=1,Oa=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ep(a);if(p!==null){p.flags&=-257,tp(p,a,o,s,e),p.mode&1&&Jh(s,c,e),e=p,l=c;var y=e.updateQueue;if(y===null){var M=new Set;M.add(l),e.updateQueue=M}else y.add(l);break e}else{if(!(e&1)){Jh(s,c,e),kf();break e}l=Error(se(426))}}else if(mt&&o.mode&1){var m=ep(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tp(m,a,o,s,e),vf(Us(l,o));break e}}s=l=Us(l,o),Pt!==4&&(Pt=2),va===null?va=[s]:va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=sv(s,l,e);Yh(s,f);break e;case 1:o=l;var x=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=av(s,o,e);Yh(s,E);break e}}s=s.return}while(s!==null)}Tv(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Ev(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function kf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),kt===null||!(Ir&268435455)&&!(Zl&268435455)||Vi(kt,Ht)}function Nl(t,e){var n=Ke;Ke|=2;var i=Ev();(kt!==t||Ht!==e)&&(fi=null,Rr(t,e));do try{Ix();break}catch(r){Mv(t,r)}while(!0);if(xf(),Ke=n,Pl.current=i,Ct!==null)throw Error(se(261));return kt=null,Ht=0,Pt}function Ix(){for(;Ct!==null;)wv(Ct)}function Fx(){for(;Ct!==null&&!o_();)wv(Ct)}function wv(t){var e=Rv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Tv(t):Ct=e,Df.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Cx(n,e,mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function vr(t,e,n){var i=st,r=bn.transition;try{bn.transition=null,st=1,kx(t,e,n,i)}finally{bn.transition=r,st=i}return null}function kx(t,e,n,i){do Ts();while(ji!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v_(t,s),t===kt&&(Ct=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,Cv(pl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var a=st;st=1;var o=Ke;Ke|=4,Df.current=null,Lx(t,n),xv(n,t),ix(Vu),gl=!!Hu,Vu=Hu=null,t.current=n,Dx(n),l_(),Ke=o,st=a,bn.transition=s}else t.current=n;if(_o&&(_o=!1,ji=t,Dl=r),s=t.pendingLanes,s===0&&(Zi=null),d_(n.stateNode),on(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=ld,ld=null,t;return Dl&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===cd?_a++:(_a=0,cd=t):_a=0,or(),null}function Ts(){if(ji!==null){var t=sg(Dl),e=bn.transition,n=st;try{if(bn.transition=null,st=16>t?16:t,ji===null)var i=!1;else{if(t=ji,ji=null,Dl=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:ga(8,u,s)}var d=u.child;if(d!==null)d.return=u,Se=d;else for(;Se!==null;){u=Se;var h=u.sibling,p=u.return;if(gv(u),u===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var y=s.alternate;if(y!==null){var M=y.child;if(M!==null){y.child=null;do{var m=M.sibling;M.sibling=null,M=m}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Se=f;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){a=Se;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Se=g;else e:for(a=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Kl(9,o)}}catch(b){Mt(o,o.return,b)}if(o===a){Se=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Se=E;break e}Se=o.return}}if(Ke=r,or(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(Vl,t)}catch{}i=!0}return i}finally{st=n,bn.transition=e}}return!1}function pp(t,e,n){e=Us(n,e),e=sv(t,e,1),t=Ki(t,e,1),e=Zt(),t!==null&&(Va(t,1,e),on(t,e))}function Mt(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Us(n,t),t=av(e,t,1),e=Ki(e,t,1),t=Zt(),e!==null&&(Va(e,1,t),on(e,t));break}}e=e.return}}function Ox(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>wt()-Uf?Rr(t,0):Nf|=n),on(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=Zt();t=Ei(t,e),t!==null&&(Va(t,e,n),on(t,n))}function Bx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Av(t,n)}var Rv;Rv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Rx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,mt&&e.flags&1048576&&Lg(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tl(t,e),t=e.pendingProps;var r=Ps(e,qt.current);ws(e,n),r=Rf(null,e,i,t,r,n);var s=Cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&mf(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Vx(i),t=kn(i,t),r){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,kn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),rp(t,e,i,r,n);case 3:e:{if(uv(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(se(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(se(424)),e),e=sp(t,e,i,n,r);break e}else for(gn=$i(e.stateNode.containerInfo.firstChild),vn=e,mt=!0,Bn=null,n=Ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=wi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Gu(i,r)?a=null:s!==null&&Gu(i,s)&&(e.flags|=32),cv(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&qu(e),null;case 13:return dv(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),np(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(wl,i._currentValue),i._currentValue=a,s!==null)if(Xn(s.value,a)){if(s.children===r.children&&!sn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$u(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$u(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Pn(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),ip(t,e,i,r,n);case 15:return ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),tl(t,e),e.tag=1,an(i)?(t=!0,Sl(e)):t=!1,ws(e,n),rv(e,i,r),Zu(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return fv(t,e,n);case 22:return lv(t,e,n)}throw Error(se(156,e.tag))};function Cv(t,e){return tg(t,e)}function Hx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Hx(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Of(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ls:return Cr(n.children,r,s,e);case tf:a=8,r|=8;break;case Su:return t=Rn(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case Mu:return t=Rn(13,n,e,r),t.elementType=Mu,t.lanes=s,t;case Eu:return t=Rn(19,n,e,r),t.elementType=Eu,t.lanes=s,t;case Om:return Ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fm:a=10;break e;case km:a=9;break e;case nf:a=11;break e;case rf:a=14;break e;case Bi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Ql(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,a,o,l){return t=new Gx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return ir;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return bg(t,n,e)}return e}function Pv(t,e,n,i,r,s,a,o,l){return t=Bf(n,i,!0,t,r,s,a,o,l),t.context=bv(null),n=t.current,i=Zt(),r=Qi(n),s=yi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Va(t,r,i),on(t,i),t}function Jl(t,e,n,i){var r=e.current,s=Zt(),a=Qi(r);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,a),t!==null&&(Wn(t,r,a,s),Qo(t,r,a)),a}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function jx(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}ec.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));Jl(t,e,null,null)};ec.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){Jl(null,t,null,null)}),e[Mi]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=lg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&ug(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function Xx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ul(a);s.call(c)}}var a=Pv(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=a,t[Mi]=a.current,Pa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Ul(l);o.call(c)}}var l=Bf(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[Mi]=l.current,Pa(t.nodeType===8?t.parentNode:t),Fr(function(){Jl(e,l,n,i)}),l}function nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Ul(a);o.call(l)}}Jl(e,a,t,r)}else a=Xx(n,e,t,r,i);return Ul(a)}ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(of(e,n|1),on(e,wt()),!(Ke&6)&&(Is=wt()+500,or()))}break;case 13:Fr(function(){var i=Ei(t,1);if(i!==null){var r=Zt();Wn(i,t,1,r)}}),zf(t,1)}};lf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Zt();Wn(e,t,134217728,n)}zf(t,134217728)}};og=function(t){if(t.tag===13){var e=Qi(t),n=Ei(t,e);if(n!==null){var i=Zt();Wn(n,t,e,i)}zf(t,e)}};lg=function(){return st};cg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Nu=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Xl(i);if(!r)throw Error(se(90));zm(i),Au(i,r)}}}break;case"textarea":Vm(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};$m=If;Km=Fr;var Yx={usingClientEntryPoint:!1,Events:[Wa,fs,Xl,Ym,qm,If]},Js={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jm(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Vl=xo.inject(qx),ti=xo}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(se(200));return Wx(t,e,null,n)};yn.createRoot=function(t,e){if(!Vf(t))throw Error(se(299));var n=!1,i="",r=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Hf(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Jm(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Fr(t)};yn.hydrate=function(t,e,n){if(!tc(e))throw Error(se(200));return nc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ec(e)};yn.render=function(t,e,n){if(!tc(e))throw Error(se(200));return nc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!tc(t))throw Error(se(40));return t._reactRootContainer?(Fr(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};yn.unstable_batchedUpdates=If;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!tc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return nc(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Dm.exports=yn;var $x=Dm.exports,Nv,vp=$x;Nv=vp.createRoot,vp.hydrateRoot;const Uv="https://docs.google.com/spreadsheets/d/1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU/edit?usp=sharing",Kx="Daily Log",Zx="Replies",Qx="Payments",Iv="https://docs.google.com/spreadsheets/d/10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo/edit?usp=sharing",Jx=["Lead Tracker","Leads","LEAD TRACKER","Sheet1",""];function zc(t){const e=String(Uv).match(/\/d\/([\w-]+)/);return e?"https://docs.google.com/spreadsheets/d/"+e[1]+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(t):""}function ey(){const t=String(Iv).match(/\/d\/([\w-]+)/);return t?Jx.map(e=>"https://docs.google.com/spreadsheets/d/"+t[1]+"/gviz/tq?tqx=out:csv"+(e?"&sheet="+encodeURIComponent(e):"")):[]}const ty="auto",Xa=.04,Ya=.3,ny=5*60*1e3,_p=.075,pt={replyRate:[.03,.06],bookingRate:[.25,.4],showRate:[.6,.8],closeRate:[.15,.3]},ot=864e5,Hc={goal:3e4,deal:1e4,aov:5e3,showRate:.7,closeRate:.175,capacity:100,sendDays:26},jn=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function br(t){if(t==null)return 0;const e=parseFloat(String(t).replace(/[€$£,\s]/g,""));return Number.isFinite(e)?e:0}function yo(t){return String(t||"").trim().toLowerCase().startsWith("y")}function it(t,e){return e>0?t/e:0}function Re(t){return Math.round(t).toLocaleString("en-IE")}function wn(t,e=1){return t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function lt(t,e=0){return"€"+t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function vi(t){return t>=1e3?"€"+(t/1e3).toFixed(1)+"k":lt(t)}function Ye(t,e=1){return(t*100).toLocaleString("en-IE",{minimumFractionDigits:0,maximumFractionDigits:e})+"%"}function ut(t){const e=n=>String(n).padStart(2,"0");return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())}function ln(t){return t.toLocaleDateString("en-IE",{day:"numeric",month:"short"})}function iy(t,e){const n=t.reduce((d,h)=>d+h.initials,0),i=t.reduce((d,h)=>d+h.followUps,0),r=t.reduce((d,h)=>d+h.comments,0),s=e.length,a=e.filter(d=>d.booked).length,o=e.filter(d=>d.showed).length,l=e.filter(d=>d.closed).length,c=e.reduce((d,h)=>d+h.dealValue,0),u=e.reduce((d,h)=>d+h.cash,0);return{initials:n,followUps:i,comments:r,touches:n+i+r,commentCoverage:it(r,n),replies:s,booked:a,shown:o,closed:l,replyRate:it(s,n),bookingRate:it(a,s),showRate:it(o,a),closeRate:it(l,o),dealValue:c,cash:u,outstanding:c-u,avgDeal:it(c,l),cashPerInitial:it(u,n)}}function ry(t){return t>=0&&t<=3?1:0}function Gf(t,e,n){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Map(t.map(b=>[ut(b.date),b])),a=t.slice(-7),o=a.length?a.reduce((b,P)=>b+P.initials,0)/a.length:0,l=it(o,n);let c=0,u=0;for(let b=13;b>=0;b--){const P=new Date(r.getTime()-b*ot);if(P.getDay()===0)continue;const R=s.get(ut(P));R&&(u+=R.followUps);for(const w of t){const _=Math.round((P-w.date)/ot);_>=0&&(c+=w.initials*ry(_))}}const d=c>0?u/c:null;let h=0,p=0;const y=t.length?t[0].date:null;for(let b=7;b>=1;b--){const P=new Date(r.getTime()-b*ot);P.getDay()!==0&&(y&&P<y||(h++,s.has(ut(P))&&p++))}const M=e.filter(b=>!b.booked&&!b.showed&&!b.closed&&!b.dead&&String(b.status||"").toLowerCase()!=="talking"&&(r-b.date)/ot>7).length,m=new Date(r.getTime()-13*ot),f=t.filter(b=>b.date>=m).reduce((b,P)=>b+P.initials,0),x=e.filter(b=>b.date>=m).length,g=t.find(b=>b.comments>0);let E=null;if(g){const b=new Date(Math.max(g.date.getTime(),m.getTime())),P=t.filter(_=>_.date>=b),R=P.reduce((_,S)=>_+S.initials,0),w=P.reduce((_,S)=>_+S.comments,0);E=R>0?w/R:null}return{today:r,pace:o,paceRatio:l,fuRatio:d,owed:c,sent:u,expectDays:h,loggedDays:p,stale:M,init14:f,replies14:x,replyRate14:it(x,f),commentRatio:E}}function sy(t,e,n){const i=Gf(t,e,n);return[{name:"Initials pace",zone:t.length?i.paceRatio>=.9?"g":i.paceRatio>=.6?"a":"r":"n",detail:Re(i.pace)+" a day vs "+Re(n)},{name:"Follow up ladder",zone:i.fuRatio===null?"n":i.fuRatio>=.85?"g":i.fuRatio>=.55?"a":"r",detail:i.fuRatio===null?"waiting on logged days":"about "+Ye(Math.min(i.fuRatio,1.5),0)+" of ladder cadence, 14 days"},{name:"Comment coverage",zone:i.commentRatio===null?"n":i.commentRatio>=.85?"g":i.commentRatio>=.55?"a":"r",detail:i.commentRatio===null?"no comments logged yet":"about "+Ye(Math.min(i.commentRatio,1.5),0)+" of initials get a comment"},{name:"Daily logging",zone:t.length?i.loggedDays>=i.expectDays?"g":i.loggedDays>=i.expectDays-2?"a":"r":"n",detail:i.loggedDays+" of "+i.expectDays+" days logged, last week"},{name:"Reply handling",zone:e.length?i.stale===0?"g":i.stale<=2?"a":"r":"n",detail:i.stale===0?"nothing waiting past 7 days":i.stale+" unbooked past 7 days"}]}function ay(t,e,n,i){const r=Gf(t,e,n),s=[],a=[],o=(u,d,h,p)=>s.push({sev:u,title:d,evidence:h,lever:p});t.length&&r.expectDays>0&&r.loggedDays<r.expectDays-1&&o("r","Fix the data first","Only "+r.loggedDays+" of the last "+r.expectDays+" days have an EOD row. Every other number here is guesswork until logging is daily.","EOD form every working day, no exceptions."),t.length&&r.paceRatio<.9&&o(r.paceRatio<.6?"r":"a","Volume below capacity","Initials running "+Re(r.pace)+" a day against the "+Re(n)+" target.","Protect the morning sending block. Initials go out while the US sleeps, per the system overview.");const l=r.fuRatio!==null&&r.fuRatio<.85;l&&o(r.fuRatio<.55?"r":"a","The ladder is being cut short","Follow ups are at about "+Ye(r.fuRatio,0)+" of what the ladder messages owe the last 14 days of leads. Most replies come from the later touches, so this suppresses reply rate before the opener is to blame.","Finish the full ladder on every open lead before sourcing new ones. Catch up the recent cohorts first.");const c=r.commentRatio!==null&&r.commentRatio<.85;return c&&o(r.commentRatio<.55?"r":"a","The comment step is being skipped","Only about "+Ye(r.commentRatio,0)+" of initials are getting a comment. These creators rarely see the initial DM, the comment on their latest reel is what earns the look, so low comments and a low reply rate are the same problem.","Comment on the latest reel 3 hours after every initial that got no reply. Rotate the comment bank, never repeat one on the same account."),r.init14>=150?(!l&&!c&&r.commentRatio!==null&&r.replyRate14<pt.replyRate[0]&&o("a","First touch underperforming","Ladder and comments are healthy but the 14 day reply rate is "+Ye(r.replyRate14)+", under the "+Ye(pt.replyRate[0],0)+" floor on "+Re(r.init14)+" sends.","Rotate the opener, check account health and deliverability, tighten sourcing fit."),r.commentRatio===null&&a.push("comment coverage and the messaging verdict (no comments logged yet)")):a.push("messaging verdict (needs 150 initials in 14 days, at "+Re(r.init14)+")"),i.replies>=10?i.bookingRate<pt.bookingRate[0]&&o("a","Replies not turning into booked calls","Booking rate "+Ye(i.bookingRate)+" against a "+Ye(pt.bookingRate[0],0)+" floor, on "+Re(i.replies)+" replies.","Review the reply-to-call handling. Tier 1 first every day, ask for the call in about half the messages."):a.push("booking verdict (needs 10 replies, at "+Re(i.replies)+")"),r.stale>0&&o(r.stale>2?"r":"a","Tier 1 leads going stale",r.stale+(r.stale===1?" reply is":" replies are")+" sitting unbooked past 7 days. Tier 1 never slips.","Work these today before any new outreach."),i.booked>=5?i.showRate<pt.showRate[0]&&o("a","Booked calls not showing","Show rate "+Ye(i.showRate)+" against a "+Ye(pt.showRate[0],0)+" floor.","Confirm the day before and the hour before. Calendar invite plus a personal message."):a.push("show verdict (needs 5 booked, at "+Re(i.booked)+")"),i.shown>=5?i.closeRate<pt.closeRate[0]&&o("a","Shows not closing","Close rate "+Ye(i.closeRate)+" against a "+Ye(pt.closeRate[0],0)+" floor.","Review call recordings and the offer framing. This is a sales call problem, not an outreach problem."):a.push("close verdict (needs 5 shows, at "+Re(i.shown)+")"),{findings:s,waiting:a}}function oy(t,e,n,i,r){const s=Gf(t,e,r.capacity),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=s.pace,c=i.replyRate>0,u=c?i.replyRate:Xa,d=i.bookingRate>0?i.bookingRate:Ya,h=r.showRate,p=r.closeRate,y=r.aov,M=r.sendDays,m=u*d*h*p*y,f=[];l<r.capacity&&f.push({name:"Volume back to "+Re(r.capacity)+" a day",per:"mo",value:(r.capacity-l)*M*m,detail:Re(l)+" a day now. Every account sending.",basis:c?"measured":"assumed"}),u<pt.replyRate[0]&&f.push({name:"Reply rate to "+Ye(pt.replyRate[0],0),per:"mo",value:l*M*(pt.replyRate[0]-u)*d*h*p*y,detail:Ye(u)+" now. Deliverability, then opener, then sourcing.",basis:"measured"}),i.replies>=5&&i.bookingRate<pt.bookingRate[0]&&f.push({name:"Booking rate to "+Ye(pt.bookingRate[0],0),per:"mo",value:l*M*u*(pt.bookingRate[0]-d)*h*p*y,detail:Ye(d)+" now. Speed to reply, route to the call.",basis:i.replies>=10?"measured":"hypothesis"});const x=l*M*u*d*h*p;x>0&&f.push({name:"Cash per close 5k to 7.5k",per:"mo",value:x*2500,detail:"Bigger first payment on the same deals. Scales with every fix above.",basis:"assumed"}),s.stale>0&&f.push({name:"Book the stale Tier 1 replies",per:"one time",value:s.stale*d*h*p*y,detail:s.stale+" replies past 7 days unbooked.",basis:"hypothesis"});const g=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied"&&E.nextDue<o).length;return g>0&&f.push({name:"Clear the overdue queue",per:"one time",value:g*u*d*h*p*y,detail:g+" leads overdue in the lead sheet.",basis:"hypothesis"}),f.filter(E=>E.value>.5).sort((E,b)=>b.value-E.value).slice(0,6)}function ly(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ot<=6,s=l=>{const c=(i-l)/ot;return c>=7&&c<=13},a=(l,c)=>c>0?l/c-1:null,o=(l,c,u)=>l.filter(d=>c(d.date)).reduce((d,h)=>d+u(h),0);return{initials:a(o(t,r,l=>l.initials),o(t,s,l=>l.initials)),followUps:a(o(t,r,l=>l.followUps),o(t,s,l=>l.followUps)),comments:a(o(t,r,l=>l.comments),o(t,s,l=>l.comments)),replies:a(o(e,r,()=>1),o(e,s,()=>1)),booked:a(o(e,r,l=>l.booked?1:0),o(e,s,l=>l.booked?1:0)),cash:a(o(e,r,l=>l.cash),o(e,s,l=>l.cash))}}function Fv(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/ot<=6,s=l=>{const c=(i-l)/ot;return c>=7&&c<=13},a=(l,c,u)=>l.filter(d=>c(d.date)).reduce((d,h)=>d+u(h),0),o=(l,c)=>({cur:a(l,r,c),prev:a(l,s,c)});return{initials:o(t,l=>l.initials),followUps:o(t,l=>l.followUps),comments:o(t,l=>l.comments),replies:o(e,()=>1),booked:o(e,l=>l.booked?1:0),cash:o(e,l=>l.cash)}}function cy(t,e){const n=new Map(t.map(c=>[ut(c.date),c])),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate());let s=n.has(ut(r))?1:0;for(let c=1;c<400;c++){const u=new Date(r.getTime()-c*ot);if(u.getDay()!==0)if(n.has(ut(u)))s++;else break}let a=0,o=0;if(t.length)for(let c=t[0].date.getTime();c<=r.getTime();c+=ot){const u=new Date(c);u.getDay()!==0&&(n.has(ut(u))?(o++,a=Math.max(a,o)):o=0)}let l=0;for(let c=t.length-1;c>=0&&t[c].initials>=e*.9;c--)l++;return{cur:s,best:a,vol:l}}function Ba(t){if(t.name)return t.name;const e=String(t.handle||"").match(/instagram\.com\/([^/?#]+)/i);return e?"@"+e[1]:t.handle||"unknown"}function uy(t,e){const n=[],i=(a,o)=>{const l=e.find(a);l&&n.push({date:l.date,label:o,who:Ba(l)})};if(e.length&&n.push({date:e[0].date,label:"First reply",who:Ba(e[0])}),i(a=>a.booked,"First call booked"),i(a=>a.showed,"First call shown"),i(a=>a.closed,"First client closed"),t.length){const a=t.reduce((o,l)=>l.initials>o.initials?l:o);a.initials>0&&n.push({date:a.date,label:"Biggest day, "+Re(a.initials)+" initials"})}const r=new Map;if(e.forEach(a=>{a.cash>0&&r.set(ut(a.date),(r.get(ut(a.date))||0)+a.cash)}),r.size){const[a,o]=[...r.entries()].sort((d,h)=>h[1]-d[1])[0],[l,c,u]=a.split("-").map(Number);n.push({date:new Date(l,c-1,u),label:"Biggest cash day, €"+Math.round(o).toLocaleString("en-IE")})}let s=0;for(const a of t){const o=s;s+=a.initials;for(const l of[500,1e3,2500,5e3,1e4,25e3])o<l&&s>=l&&n.push({date:a.date,label:Re(l)+" initials sent, all time"})}return n.sort((a,o)=>o.date-a.date),n.slice(0,8)}function dy(t){const e=String(t||"").match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);if(!e)return null;let n=+e[1];const i=+e[2],r=e[3]?e[3].toLowerCase():null;return r==="pm"&&n<12&&(n+=12),r==="am"&&n===12&&(n=0),n>23||i>59?null:n+i/60}const Vc=[{label:"Morning",range:"06 to 12",test:t=>t>=6&&t<12},{label:"Afternoon",range:"12 to 17",test:t=>t>=12&&t<17},{label:"Evening",range:"17 to 22",test:t=>t>=17&&t<22},{label:"Late",range:"22 to 06",test:t=>t>=22||t<6}];function fy(t){let e=0,n=0;for(const o of t){const l=o/24*2*Math.PI;e+=Math.cos(l),n+=Math.sin(l)}let i=Math.atan2(n,e);i<0&&(i+=2*Math.PI);const r=i/(2*Math.PI)*24,s=Math.floor(r),a=Math.round((r-s)*60);return String(s%24).padStart(2,"0")+":"+String(a%60).padStart(2,"0")}function Wf(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),1),r=t.reduce((a,o)=>a+o.cash,0);if(!e||!e.length)return{source:"replies",all:r,mtd:t.filter(a=>a.date>=i).reduce((a,o)=>a+o.cash,0)};const s=e.reduce((a,o)=>a+o.amount,0);return{source:"payments",all:Math.max(s,r),mtd:e.filter(a=>a.date>=i).reduce((a,o)=>a+o.amount,0),mismatch:Math.abs(s-r)>1?{payAll:s,repliesAll:r}:null}}function hy(t){const e=t.filter(n=>n.dateBooked&&n.date&&n.dateBooked>=n.date).map(n=>Math.round((n.dateBooked-n.date)/ot));return e.length?(e.sort((n,i)=>n-i),{n:e.length,median:e[Math.floor(e.length/2)],within24h:e.filter(n=>n<=1).length/e.length}):null}function py(t){const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.filter(i=>i.callDate&&!i.closed&&!i.dead&&i.callDate>=n&&!i.showed).sort((i,r)=>i.callDate-r.callDate).slice(0,8)}function my(t){const e=t.filter(i=>i.dead),n=new Map;return e.forEach(i=>{const r=i.deadReason||"Unspecified";n.set(r,(n.get(r)||0)+1)}),{total:e.length,reasons:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function gy(t){const e=t.filter(i=>i.account);if(!e.length)return null;const n=new Map;return e.forEach(i=>n.set(i.account,(n.get(i.account)||0)+1)),{tagged:e.length,total:t.length,accounts:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function vy(t,e,n,i,r){const s=new Date,a=new Date(s.getFullYear(),s.getMonth(),1),o=new Date(s.getFullYear(),s.getMonth(),s.getDate()),l=new Date(s.getFullYear(),s.getMonth()+1,0),c=r??e.filter(f=>f.date>=a).reduce((f,x)=>f+x.cash,0),u=n.replyRate>0?n.replyRate:Xa,d=n.bookingRate>0?n.bookingRate:Ya;let h=0;e.forEach(f=>{f.closed||f.dead||(f.showed?h+=i.closeRate*i.aov:f.booked?h+=i.showRate*i.closeRate*i.aov:h+=d*i.showRate*i.closeRate*i.aov)});let p=0;for(let f=o.getTime()+ot;f<=l.getTime();f+=ot)new Date(f).getDay()!==0&&p++;const y=t.slice(-7),M=y.length?y.reduce((f,x)=>f+x.initials,0)/y.length:0,m=p*M*u*d*i.showRate*i.closeRate*i.aov*.35;return{cashMTD:c,pipe:h,future:m,remDays:p,pace7:M,mid:c+h+m}}function kv(t,e,n,i,r){const s=vy(t,e,n,i,r),a=n.replyRate>0?n.replyRate:Xa,o=n.bookingRate>0?n.bookingRate:Ya,l=e.filter(M=>!M.closed&&!M.dead);let u=(1+n.initials*7+n.replies*131+Math.round(n.cash)*17)%2147483647;u<=0&&(u+=2147483646);const d=()=>(u=u*16807%2147483647)/2147483647,h=500,p=[];for(let M=0;M<h;M++){let m=s.cashMTD;for(const E of l){let b;E.showed?b=i.closeRate:E.booked?b=i.showRate*i.closeRate:b=o*i.showRate*i.closeRate,d()<b&&(m+=i.aov)}const f=Math.round(s.remDays*s.pace7);let x=0;for(let E=0;E<Math.min(f,4e3);E++)d()<a&&x++;const g=o*i.showRate*i.closeRate*.35;for(let E=0;E<x;E++)d()<g&&(m+=i.aov);p.push(m)}p.sort((M,m)=>M-m);const y=M=>p[Math.min(h-1,Math.floor(M*h))];return{p10:y(.1),p50:y(.5),p90:y(.9),mid:s.mid,cashMTD:s.cashMTD}}function _y(t,e,n,i){const r=[],s=new Date,a=new Date(s.getFullYear(),s.getMonth(),s.getDate());if(!t.length)return r;const o=new Map(t.map(E=>[ut(E.date),E])),l=new Date(a.getTime()-ot);l.getDay()!==0&&t[0].date<l&&!o.has(ut(l))&&r.push({sev:"r",text:"No EOD row for yesterday"});const c=t[t.length-1],u=t.slice(-15,-1);if(u.length>=5){const E=u.reduce((b,P)=>b+P.initials,0)/u.length;E>10&&c.initials<E*.5?r.push({sev:"r",text:"Volume drop: "+Re(c.initials)+" initials vs "+Re(E)+" avg. Block?"}):E>10&&c.initials>E*1.6&&r.push({sev:"g",text:"Volume surge: "+Re(c.initials)+" initials, "+Re((c.initials/E-1)*100)+"% over trend"})}const d=t.slice(-3),h=d.reduce((E,b)=>E+b.initials,0),p=it(e.length,t.reduce((E,b)=>E+b.initials,0));if(h>=120&&p>0){const E=d[0].date,b=e.filter(R=>R.date>=E).length,P=h*p;P>=3&&b===0&&r.push({sev:"r",text:"Reply drought: 0 replies on last "+Re(h)+" sends, about "+Re(P)+" expected. Check account health."})}const y=e.filter(E=>!E.booked&&!E.closed&&!E.dead&&(a-E.date)/ot<=1).length;y>0&&r.push({sev:"a",text:y+(y===1?" live reply":" live replies")+" in the last 24h. Work them now"});const M=e.filter(E=>!E.booked&&!E.showed&&!E.closed&&!E.dead&&String(E.status||"").toLowerCase()!=="talking"&&(a-E.date)/ot>7).length;M>0&&r.push({sev:"a",text:M+" unbooked past 7 days"});const m=e.filter(E=>E.callDate&&!E.closed&&!E.dead&&!E.showed&&E.callDate>=a).length;m>0&&r.push({sev:"g",text:m+(m===1?" call":" calls")+" on the books"}),t.some(E=>E.comments>0)&&c.initials>10&&c.comments<c.initials*.4&&r.push({sev:"a",text:"Comments at "+Re(it(c.comments,c.initials)*100)+"% of initials on the latest day"});const x=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied");if(x.length>5){const E=x.filter(b=>b.nextDue<a).length;E>x.length*.8&&r.push({sev:"a",text:"Lead sheet: "+E+" of "+x.length+" overdue. Sheet stale or queue slipping"})}const g=e.filter(E=>(a-E.date)/ot<=6).reduce((E,b)=>E+b.cash,0);return g>0&&r.push({sev:"g",text:"€"+Math.round(g).toLocaleString("en-IE")+" collected this week"}),r.slice(0,6)}var Ov={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(E0,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(w,_){var S=(_=_||{}).dynamicTyping||!1;if(R(S)&&(_.dynamicTypingFunction=S,S={}),_.dynamicTyping=S,_.transform=!!R(_.transform)&&_.transform,_.worker&&l.WORKERS_SUPPORTED){var A=function(){if(!l.WORKERS_SUPPORTED)return!1;var D=(W=i.URL||i.webkitURL||null,G=n.toString(),l.BLOB_URL||(l.BLOB_URL=W.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",G,")();"],{type:"text/javascript"})))),H=new i.Worker(D),W,G;return H.onmessage=x,H.id=o++,a[H.id]=H}();return A.userStep=_.step,A.userChunk=_.chunk,A.userComplete=_.complete,A.userError=_.error,_.step=R(_.step),_.chunk=R(_.chunk),_.complete=R(_.complete),_.error=R(_.error),delete _.worker,void A.postMessage({input:w,config:_,workerId:A.id})}var L=null;return l.NODE_STREAM_INPUT,typeof w=="string"?(w=function(D){return D.charCodeAt(0)===65279?D.slice(1):D}(w),L=_.download?new d(_):new p(_)):w.readable===!0&&R(w.read)&&R(w.on)?L=new y(_):(i.File&&w instanceof File||w instanceof Object)&&(L=new h(_)),L.stream(w)},unparse:function(w,_){var S=!1,A=!0,L=",",D=`\r
`,H='"',W=H+H,G=!1,B=null,N=!1;(function(){if(typeof _=="object"){if(typeof _.delimiter!="string"||l.BAD_DELIMITERS.filter(function(K){return _.delimiter.indexOf(K)!==-1}).length||(L=_.delimiter),(typeof _.quotes=="boolean"||typeof _.quotes=="function"||Array.isArray(_.quotes))&&(S=_.quotes),typeof _.skipEmptyLines!="boolean"&&typeof _.skipEmptyLines!="string"||(G=_.skipEmptyLines),typeof _.newline=="string"&&(D=_.newline),typeof _.quoteChar=="string"&&(H=_.quoteChar),typeof _.header=="boolean"&&(A=_.header),Array.isArray(_.columns)){if(_.columns.length===0)throw new Error("Option columns is empty");B=_.columns}_.escapeChar!==void 0&&(W=_.escapeChar+H),(typeof _.escapeFormulae=="boolean"||_.escapeFormulae instanceof RegExp)&&(N=_.escapeFormulae instanceof RegExp?_.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var F=new RegExp(m(H),"g");if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return Z(null,w,G);if(typeof w[0]=="object")return Z(B||Object.keys(w[0]),w,G)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||B),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),Z(w.fields||[],w.data||[],G);throw new Error("Unable to serialize unrecognized input");function Z(K,xe,Y){var J="";typeof K=="string"&&(K=JSON.parse(K)),typeof xe=="string"&&(xe=JSON.parse(xe));var le=Array.isArray(K)&&0<K.length,oe=!Array.isArray(xe[0]);if(le&&A){for(var Ee=0;Ee<K.length;Ee++)0<Ee&&(J+=L),J+=ne(K[Ee],Ee);0<xe.length&&(J+=D)}for(var ae=0;ae<xe.length;ae++){var ye=le?K.length:xe[ae].length,Be=!1,I=le?Object.keys(xe[ae]).length===0:xe[ae].length===0;if(Y&&!le&&(Be=Y==="greedy"?xe[ae].join("").trim()==="":xe[ae].length===1&&xe[ae][0].length===0),Y==="greedy"&&le){for(var Ie=[],ze=0;ze<ye;ze++){var Le=oe?K[ze]:ze;Ie.push(xe[ae][Le])}Be=Ie.join("").trim()===""}if(!Be){for(var fe=0;fe<ye;fe++){0<fe&&!I&&(J+=L);var Ze=le&&oe?K[fe]:fe;J+=ne(xe[ae][Ze],fe)}ae<xe.length-1&&(!Y||0<ye&&!I)&&(J+=D)}}return J}function ne(K,xe){if(K==null)return"";if(K.constructor===Date)return JSON.stringify(K).slice(1,25);var Y=!1;N&&typeof K=="string"&&N.test(K)&&(K="'"+K,Y=!0);var J=K.toString().replace(F,W);return(Y=Y||S===!0||typeof S=="function"&&S(K,xe)||Array.isArray(S)&&S[xe]||function(le,oe){for(var Ee=0;Ee<oe.length;Ee++)if(-1<le.indexOf(oe[Ee]))return!0;return!1}(J,l.BAD_DELIMITERS)||-1<J.indexOf(L)||J.charAt(0)===" "||J.charAt(J.length-1)===" ")?H+J+H:J}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=f,l.ParserHandle=M,l.NetworkStreamer=d,l.FileStreamer=h,l.StringStreamer=p,l.ReadableStreamStreamer=y,i.jQuery){var c=i.jQuery;c.fn.parse=function(w){var _=w.config||{},S=[];return this.each(function(D){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var H=0;H<this.files.length;H++)S.push({file:this.files[H],inputElem:this,instanceConfig:c.extend({},_)})}),A(),this;function A(){if(S.length!==0){var D,H,W,G,B=S[0];if(R(w.before)){var N=w.before(B.file,B.inputElem);if(typeof N=="object"){if(N.action==="abort")return D="AbortError",H=B.file,W=B.inputElem,G=N.reason,void(R(w.error)&&w.error({name:D},H,W,G));if(N.action==="skip")return void L();typeof N.config=="object"&&(B.instanceConfig=c.extend(B.instanceConfig,N.config))}else if(N==="skip")return void L()}var F=B.instanceConfig.complete;B.instanceConfig.complete=function(Z){R(F)&&F(Z,B.file,B.inputElem),L()},l.parse(B.file,B.instanceConfig)}else R(w.complete)&&w.complete()}function L(){S.splice(0,1),A()}}}function u(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(_){var S=b(_);S.chunkSize=parseInt(S.chunkSize),_.step||_.chunk||(S.chunkSize=null),this._handle=new M(S),(this._handle.streamer=this)._config=S}).call(this,w),this.parseChunk=function(_,S){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(_);A!==void 0&&(_=A)}this.isFirstChunk=!1,this._halted=!1;var L=this._partialLine+_;this._partialLine="";var D=this._handle.parse(L,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var H=D.meta.cursor;this._finished||(this._partialLine=L.substring(H-this._baseIndex),this._baseIndex=H),D&&D.data&&(this._rowCount+=D.data.length);var W=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:D,workerId:l.WORKER_ID,finished:W});else if(R(this._config.chunk)&&!S){if(this._config.chunk(D,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);D=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(D.data),this._completeResults.errors=this._completeResults.errors.concat(D.errors),this._completeResults.meta=D.meta),this._completed||!W||!R(this._config.complete)||D&&D.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),W||D&&D.meta.paused||this._nextChunk(),D}this._halted=!0},this._sendError=function(_){R(this._config.error)?this._config.error(_):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:_,finished:!1})}}function d(w){var _;(w=w||{}).chunkSize||(w.chunkSize=l.RemoteChunkSize),u.call(this,w),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(S){this._input=S,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(_=new XMLHttpRequest,this._config.withCredentials&&(_.withCredentials=this._config.withCredentials),r||(_.onload=P(this._chunkLoaded,this),_.onerror=P(this._chunkError,this)),_.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var S=this._config.downloadRequestHeaders;for(var A in S)_.setRequestHeader(A,S[A])}if(this._config.chunkSize){var L=this._start+this._config.chunkSize-1;_.setRequestHeader("Range","bytes="+this._start+"-"+L)}try{_.send(this._config.downloadRequestBody)}catch(D){this._chunkError(D.message)}r&&_.status===0&&this._chunkError()}},this._chunkLoaded=function(){_.readyState===4&&(_.status<200||400<=_.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:_.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(S){var A=S.getResponseHeader("Content-Range");return A===null?-1:parseInt(A.substring(A.lastIndexOf("/")+1))}(_),this.parseChunk(_.responseText)))},this._chunkError=function(S){var A=_.statusText||S;this._sendError(new Error(A))}}function h(w){var _,S;(w=w||{}).chunkSize||(w.chunkSize=l.LocalChunkSize),u.call(this,w);var A=typeof FileReader<"u";this.stream=function(L){this._input=L,S=L.slice||L.webkitSlice||L.mozSlice,A?((_=new FileReader).onload=P(this._chunkLoaded,this),_.onerror=P(this._chunkError,this)):_=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var L=this._input;if(this._config.chunkSize){var D=Math.min(this._start+this._config.chunkSize,this._input.size);L=S.call(L,this._start,D)}var H=_.readAsText(L,this._config.encoding);A||this._chunkLoaded({target:{result:H}})},this._chunkLoaded=function(L){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(L.target.result)},this._chunkError=function(){this._sendError(_.error)}}function p(w){var _;u.call(this,w=w||{}),this.stream=function(S){return _=S,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var S,A=this._config.chunkSize;return A?(S=_.substring(0,A),_=_.substring(A)):(S=_,_=""),this._finished=!_,this.parseChunk(S)}}}function y(w){u.call(this,w=w||{});var _=[],S=!0,A=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(L){this._input=L,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&_.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),_.length?this.parseChunk(_.shift()):S=!0},this._streamData=P(function(L){try{_.push(typeof L=="string"?L:L.toString(this._config.encoding)),S&&(S=!1,this._checkIsFinished(),this.parseChunk(_.shift()))}catch(D){this._streamError(D)}},this),this._streamError=P(function(L){this._streamCleanUp(),this._sendError(L)},this),this._streamEnd=P(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function M(w){var _,S,A,L=Math.pow(2,53),D=-L,H=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,G=this,B=0,N=0,F=!1,Z=!1,ne=[],K={data:[],errors:[],meta:{}};if(R(w.step)){var xe=w.step;w.step=function(ae){if(K=ae,le())J();else{if(J(),K.data.length===0)return;B+=ae.data.length,w.preview&&B>w.preview?S.abort():(K.data=K.data[0],xe(K,G))}}}function Y(ae){return w.skipEmptyLines==="greedy"?ae.join("").trim()==="":ae.length===1&&ae[0].length===0}function J(){return K&&A&&(Ee("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),A=!1),w.skipEmptyLines&&(K.data=K.data.filter(function(ae){return!Y(ae)})),le()&&function(){if(!K)return;function ae(Be,I){R(w.transformHeader)&&(Be=w.transformHeader(Be,I)),ne.push(Be)}if(Array.isArray(K.data[0])){for(var ye=0;le()&&ye<K.data.length;ye++)K.data[ye].forEach(ae);K.data.splice(0,1)}else K.data.forEach(ae)}(),function(){if(!K||!w.header&&!w.dynamicTyping&&!w.transform)return K;function ae(Be,I){var Ie,ze=w.header?{}:[];for(Ie=0;Ie<Be.length;Ie++){var Le=Ie,fe=Be[Ie];w.header&&(Le=Ie>=ne.length?"__parsed_extra":ne[Ie]),w.transform&&(fe=w.transform(fe,Le)),fe=oe(Le,fe),Le==="__parsed_extra"?(ze[Le]=ze[Le]||[],ze[Le].push(fe)):ze[Le]=fe}return w.header&&(Ie>ne.length?Ee("FieldMismatch","TooManyFields","Too many fields: expected "+ne.length+" fields but parsed "+Ie,N+I):Ie<ne.length&&Ee("FieldMismatch","TooFewFields","Too few fields: expected "+ne.length+" fields but parsed "+Ie,N+I)),ze}var ye=1;return!K.data.length||Array.isArray(K.data[0])?(K.data=K.data.map(ae),ye=K.data.length):K.data=ae(K.data,0),w.header&&K.meta&&(K.meta.fields=ne),N+=ye,K}()}function le(){return w.header&&ne.length===0}function oe(ae,ye){return Be=ae,w.dynamicTypingFunction&&w.dynamicTyping[Be]===void 0&&(w.dynamicTyping[Be]=w.dynamicTypingFunction(Be)),(w.dynamicTyping[Be]||w.dynamicTyping)===!0?ye==="true"||ye==="TRUE"||ye!=="false"&&ye!=="FALSE"&&(function(I){if(H.test(I)){var Ie=parseFloat(I);if(D<Ie&&Ie<L)return!0}return!1}(ye)?parseFloat(ye):W.test(ye)?new Date(ye):ye===""?null:ye):ye;var Be}function Ee(ae,ye,Be,I){var Ie={type:ae,code:ye,message:Be};I!==void 0&&(Ie.row=I),K.errors.push(Ie)}this.parse=function(ae,ye,Be){var I=w.quoteChar||'"';if(w.newline||(w.newline=function(Le,fe){Le=Le.substring(0,1048576);var Ze=new RegExp(m(fe)+"([^]*?)"+m(fe),"gm"),Ce=(Le=Le.replace(Ze,"")).split("\r"),Pe=Le.split(`
`),U=1<Pe.length&&Pe[0].length<Ce[0].length;if(Ce.length===1||U)return`
`;for(var T=0,V=0;V<Ce.length;V++)Ce[V][0]===`
`&&T++;return T>=Ce.length/2?`\r
`:"\r"}(ae,I)),A=!1,w.delimiter)R(w.delimiter)&&(w.delimiter=w.delimiter(ae),K.meta.delimiter=w.delimiter);else{var Ie=function(Le,fe,Ze,Ce,Pe){var U,T,V,Q;Pe=Pe||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ie=0;ie<Pe.length;ie++){var $=Pe[ie],Ae=0,de=0,ve=0;V=void 0;for(var Ue=new f({comments:Ce,delimiter:$,newline:fe,preview:10}).parse(Le),re=0;re<Ue.data.length;re++)if(Ze&&Y(Ue.data[re]))ve++;else{var ge=Ue.data[re].length;de+=ge,V!==void 0?0<ge&&(Ae+=Math.abs(ge-V),V=ge):V=ge}0<Ue.data.length&&(de/=Ue.data.length-ve),(T===void 0||Ae<=T)&&(Q===void 0||Q<de)&&1.99<de&&(T=Ae,U=$,Q=de)}return{successful:!!(w.delimiter=U),bestDelimiter:U}}(ae,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess);Ie.successful?w.delimiter=Ie.bestDelimiter:(A=!0,w.delimiter=l.DefaultDelimiter),K.meta.delimiter=w.delimiter}var ze=b(w);return w.preview&&w.header&&ze.preview++,_=ae,S=new f(ze),K=S.parse(_,ye,Be),J(),F?{meta:{paused:!0}}:K||{meta:{paused:!1}}},this.paused=function(){return F},this.pause=function(){F=!0,S.abort(),_=R(w.chunk)?"":_.substring(S.getCharIndex())},this.resume=function(){G.streamer._halted?(F=!1,G.streamer.parseChunk(_,!0)):setTimeout(G.resume,3)},this.aborted=function(){return Z},this.abort=function(){Z=!0,S.abort(),K.meta.aborted=!0,R(w.complete)&&w.complete(K),_=""}}function m(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function f(w){var _,S=(w=w||{}).delimiter,A=w.newline,L=w.comments,D=w.step,H=w.preview,W=w.fastMode,G=_=w.quoteChar===void 0||w.quoteChar===null?'"':w.quoteChar;if(w.escapeChar!==void 0&&(G=w.escapeChar),(typeof S!="string"||-1<l.BAD_DELIMITERS.indexOf(S))&&(S=","),L===S)throw new Error("Comment character same as delimiter");L===!0?L="#":(typeof L!="string"||-1<l.BAD_DELIMITERS.indexOf(L))&&(L=!1),A!==`
`&&A!=="\r"&&A!==`\r
`&&(A=`
`);var B=0,N=!1;this.parse=function(F,Z,ne){if(typeof F!="string")throw new Error("Input must be a string");var K=F.length,xe=S.length,Y=A.length,J=L.length,le=R(D),oe=[],Ee=[],ae=[],ye=B=0;if(!F)return Fe();if(w.header&&!Z){var Be=F.split(A)[0].split(S),I=[],Ie={},ze=!1;for(var Le in Be){var fe=Be[Le];R(w.transformHeader)&&(fe=w.transformHeader(fe,Le));var Ze=fe,Ce=Ie[fe]||0;for(0<Ce&&(ze=!0,Ze=fe+"_"+Ce),Ie[fe]=Ce+1;I.includes(Ze);)Ze=Ze+"_"+Ce;I.push(Ze)}if(ze){var Pe=F.split(A);Pe[0]=I.join(S),F=Pe.join(A)}}if(W||W!==!1&&F.indexOf(_)===-1){for(var U=F.split(A),T=0;T<U.length;T++){if(ae=U[T],B+=ae.length,T!==U.length-1)B+=A.length;else if(ne)return Fe();if(!L||ae.substring(0,J)!==L){if(le){if(oe=[],ve(ae.split(S)),De(),N)return Fe()}else ve(ae.split(S));if(H&&H<=T)return oe=oe.slice(0,H),Fe(!0)}}return Fe()}for(var V=F.indexOf(S,B),Q=F.indexOf(A,B),ie=new RegExp(m(G)+m(_),"g"),$=F.indexOf(_,B);;)if(F[B]!==_)if(L&&ae.length===0&&F.substring(B,B+J)===L){if(Q===-1)return Fe();B=Q+Y,Q=F.indexOf(A,B),V=F.indexOf(S,B)}else if(V!==-1&&(V<Q||Q===-1))ae.push(F.substring(B,V)),B=V+xe,V=F.indexOf(S,B);else{if(Q===-1)break;if(ae.push(F.substring(B,Q)),ge(Q+Y),le&&(De(),N))return Fe();if(H&&oe.length>=H)return Fe(!0)}else for($=B,B++;;){if(($=F.indexOf(_,$+1))===-1)return ne||Ee.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:oe.length,index:B}),re();if($===K-1)return re(F.substring(B,$).replace(ie,_));if(_!==G||F[$+1]!==G){if(_===G||$===0||F[$-1]!==G){V!==-1&&V<$+1&&(V=F.indexOf(S,$+1)),Q!==-1&&Q<$+1&&(Q=F.indexOf(A,$+1));var Ae=Ue(Q===-1?V:Math.min(V,Q));if(F.substr($+1+Ae,xe)===S){ae.push(F.substring(B,$).replace(ie,_)),F[B=$+1+Ae+xe]!==_&&($=F.indexOf(_,B)),V=F.indexOf(S,B),Q=F.indexOf(A,B);break}var de=Ue(Q);if(F.substring($+1+de,$+1+de+Y)===A){if(ae.push(F.substring(B,$).replace(ie,_)),ge($+1+de+Y),V=F.indexOf(S,B),$=F.indexOf(_,B),le&&(De(),N))return Fe();if(H&&oe.length>=H)return Fe(!0);break}Ee.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:oe.length,index:B}),$++}}else $++}return re();function ve(pe){oe.push(pe),ye=B}function Ue(pe){var He=0;if(pe!==-1){var Ge=F.substring($+1,pe);Ge&&Ge.trim()===""&&(He=Ge.length)}return He}function re(pe){return ne||(pe===void 0&&(pe=F.substring(B)),ae.push(pe),B=K,ve(ae),le&&De()),Fe()}function ge(pe){B=pe,ve(ae),ae=[],Q=F.indexOf(A,B)}function Fe(pe){return{data:oe,errors:Ee,meta:{delimiter:S,linebreak:A,aborted:N,truncated:!!pe,cursor:ye+(Z||0)}}}function De(){D(Fe()),oe=[],Ee=[]}},this.abort=function(){N=!0},this.getCharIndex=function(){return B}}function x(w){var _=w.data,S=a[_.workerId],A=!1;if(_.error)S.userError(_.error,_.file);else if(_.results&&_.results.data){var L={abort:function(){A=!0,g(_.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(R(S.userStep)){for(var D=0;D<_.results.data.length&&(S.userStep({data:_.results.data[D],errors:_.results.errors,meta:_.results.meta},L),!A);D++);delete _.results}else R(S.userChunk)&&(S.userChunk(_.results,L,_.file),delete _.results)}_.finished&&!A&&g(_.workerId,_.results)}function g(w,_){var S=a[w];R(S.userComplete)&&S.userComplete(_),S.terminate(),delete a[w]}function E(){throw new Error("Not implemented.")}function b(w){if(typeof w!="object"||w===null)return w;var _=Array.isArray(w)?[]:{};for(var S in w)_[S]=b(w[S]);return _}function P(w,_){return function(){w.apply(_,arguments)}}function R(w){return typeof w=="function"}return s&&(i.onmessage=function(w){var _=w.data;if(l.WORKER_ID===void 0&&_&&(l.WORKER_ID=_.workerId),typeof _.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(_.input,_.config),finished:!0});else if(i.File&&_.input instanceof File||_.input instanceof Object){var S=l.parse(_.input,_.config);S&&i.postMessage({workerId:l.WORKER_ID,results:S,finished:!0})}}),(d.prototype=Object.create(u.prototype)).constructor=d,(h.prototype=Object.create(u.prototype)).constructor=h,(p.prototype=Object.create(p.prototype)).constructor=p,(y.prototype=Object.create(u.prototype)).constructor=y,l})})(Ov);var xy=Ov.exports;const ic=ym(xy);function Gc(t){const e=Date.now()+6048e5;let n=0;for(;t.getTime()>e&&n++<5;)t.setFullYear(t.getFullYear()-1);return t}function jf(t){let e=ty;if(e==="auto"){e="DMY";for(const n of t){const i=String(n||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);if(i){if(+i[1]>12){e="DMY";break}if(+i[2]>12){e="MDY";break}}}}return function(i){const r=String(i||"").trim();if(!r)return null;let s=r.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(s)return Gc(new Date(+s[1],+s[2]-1,+s[3]));if(s=r.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),s){let o=+s[3];o<100&&(o+=2e3);const l=+s[1],c=+s[2],[u,d]=e==="MDY"?[c,l]:[l,c],h=new Date(o,d-1,u);return isNaN(h)?null:Gc(h)}const a=new Date(r);return isNaN(a)?null:Gc(a)}}function rc(t,e){for(let n=0;n<Math.min(t.length,12);n++){const i=t[n].map(r=>String(r||"").trim().toLowerCase());if(e.every(r=>i.some(s=>s.includes(r))))return n}return-1}function qe(t,...e){const n=t.map(i=>String(i||"").trim().toLowerCase());for(const i of["exact","ends","includes"])for(const r of e){const s=n.findIndex(a=>i==="exact"?a===r:i==="ends"?a.endsWith(r):a.includes(r));if(s!==-1)return s}return-1}function sc(t){return t.map(n=>String(n||"").trim()).join("")?t.some(n=>String(n||"").toLowerCase().includes("example")):!0}function xp(t){const e=ic.parse(t,{skipEmptyLines:!1}).data,n=rc(e,["date","initials"]);if(n===-1)throw new Error("Daily Log: could not find the header row (needs Date and Initials Sent columns).");const i=e[n],r={date:qe(i,"date"),setter:qe(i,"setter"),initials:qe(i,"initials sent","initial"),followUps:qe(i,"follow ups sent","follow"),comments:qe(i,"comments sent","comment"),notes:qe(i,"notes","note")},s=e.slice(n+1).filter(l=>!sc(l)),a=jf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);c&&o.push({date:c,setter:String(l[r.setter]||"").trim(),initials:br(l[r.initials]),followUps:br(l[r.followUps]),comments:r.comments!==-1?br(l[r.comments]):0,notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function yp(t){const e=ic.parse(t,{skipEmptyLines:!1}).data,n=rc(e,["date","handle"]);if(n===-1)throw new Error("Replies: could not find the header row (needs Date Replied and Handle columns).");const i=e[n],r={date:qe(i,"date replied","date"),handle:qe(i,"handle"),name:qe(i,"name"),booked:qe(i,"booked","book"),showed:qe(i,"showed","show"),closed:qe(i,"closed","close"),dealValue:qe(i,"deal value","deal"),cash:qe(i,"cash collected","cash"),plan:qe(i,"payment plan","plan"),notes:qe(i,"notes","note"),time:qe(i,"time replied","time"),status:qe(i,"status"),deadReason:qe(i,"dead reason"),account:qe(i,"account"),dateBooked:qe(i,"date booked"),callDate:qe(i,"call date"),dateClosed:qe(i,"date closed")},s=e.slice(n+1).filter(l=>!sc(l)),a=jf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);if(!c)continue;const u=String(l[r.status]||"").trim(),d=a(l[r.dateBooked]),h=a(l[r.dateClosed]);o.push({date:c,handle:String(l[r.handle]||"").trim(),name:String(l[r.name]||"").trim(),booked:yo(l[r.booked])||u.toLowerCase()==="booked"||!!d,showed:yo(l[r.showed]),closed:yo(l[r.closed])||!!h,dealValue:br(l[r.dealValue]),cash:br(l[r.cash]),paymentPlan:yo(l[r.plan]),notes:String(l[r.notes]||"").trim(),timeReplied:r.time!==-1?String(l[r.time]||"").trim():"",status:u,dead:u.toLowerCase()==="dead",deadReason:String(l[r.deadReason]||"").trim(),account:String(l[r.account]||"").trim(),dateBooked:d,callDate:yy(l[r.callDate]),dateClosed:h})}return o.sort((l,c)=>l.date-c.date),o}function yy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function Sy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function Sp(t){const e=ic.parse(t,{skipEmptyLines:!1}).data,n=rc(e,["handle","next due"]);if(n===-1)throw new Error("Leads: header row not found.");const i=e[n],r={handle:qe(i,"handle"),account:qe(i,"account"),name:qe(i,"name"),niche:qe(i,"niche"),nextTouch:qe(i,"next touch"),nextDue:qe(i,"next due date","next due"),status:qe(i,"status")},s=[];for(const a of e.slice(n+1)){if(sc(a))continue;const o=String(a[r.handle]||"").trim();o&&s.push({handle:o,account:String(a[r.account]||"").trim(),name:String(a[r.name]||"").trim(),niche:String(a[r.niche]||"").trim(),nextTouch:String(a[r.nextTouch]||"").trim(),nextDue:Sy(a[r.nextDue]),status:String(a[r.status]||"").trim()})}return s}function Mp(t){const e=ic.parse(t,{skipEmptyLines:!1}).data,n=rc(e,["date","amount"]);if(n===-1)throw new Error("Payments: header row not found.");const i=e[n],r={date:qe(i,"date"),handle:qe(i,"handle"),amount:qe(i,"amount"),notes:qe(i,"notes","note")},s=e.slice(n+1).filter(l=>!sc(l)),a=jf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]),u=br(l[r.amount]);!c||!(u>0)||o.push({date:c,amount:u,handle:String(l[r.handle]||"").trim(),notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function My(){const t=new Date,e=["KEHOEGROUP Daily Log,,,,,","Fill this in once a day,,,,,","Date,Setter,Initials Sent,Follow Ups Sent,Comments Sent,Notes","01/01/2026,Example Setter,25,10,20,Example row - ignore"],n=["KEHOEGROUP Replies,,,,,,,,,,,,,,,,","One row per person who replied,,,,,,,,,,,,,,,,","Date Replied,Handle,Name,Time Replied,Booked,Showed,Closed,Deal Value,Cash Collected,Payment Plan,Notes,Status,Dead Reason,Account,Date Booked,Call Date,Date Closed","01/01/2026,@example,Example Person,12:00,Y,Y,Y,10000,5000,Y,Example row - ignore,,,,,,"],i=["KEHOEGROUP Payments,,,","One row per payment received,,,","Date,Handle,Amount,Notes"],r=c=>{const u=d=>String(d).padStart(2,"0");return u(c.getDate())+"/"+u(c.getMonth()+1)+"/"+c.getFullYear()},a=(c=>{let u=c;return()=>(u=u*16807%2147483647)/2147483647})(42),o=["@fx_daniel","@ecom.luke","@ai.martina","@salescoach_tom","@realty.jane","@bizopp.kev","@trading.sy","@creator.mia","@closer.pat","@brand.ash","@growth.finn","@wealth.roy","@mentor.zed","@funnel.gus","@scale.ivy","@offer.max","@coach.nia","@deals.obi"];let l=0;for(let c=69;c>=0;c--){const u=new Date(t.getFullYear(),t.getMonth(),t.getDate()-c);if(u.getDay()===0)continue;const d=1+(69-c)/69,h=Math.round((14+a()*14)*d),p=Math.round((8+a()*16)*d),y=Math.round(h*(.8+a()*.2));e.push(r(u)+",Jamie,"+h+","+p+","+y+",");const M=h*(.03+a()*.025),m=Math.floor(M)+(a()<M%1?1:0);for(let f=0;f<m;f++){const x=o[l%o.length]+(l>=o.length?"."+l:"");l++;const g=a()<.38,E=g&&a()<.7,b=E&&c>20&&a()<.35,P=b?a()<.4?15e3:1e4:0,R=b&&a()<.5,w=b?R?P/2:P:0,_=13+Math.floor(a()*11),S=String(_%24).padStart(2,"0")+":"+String(Math.floor(a()*60)).padStart(2,"0"),A=!g&&c>14&&a()<.3,L=A?"Dead":g?"Booked":c<5&&a()<.5?"Talking":"",D=A?["Ghosted","No money","Bad fit","Priced out"][Math.floor(a()*4)]:"",H=g?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+1)):"",W=g&&!E&&c<4?r(new Date(t.getFullYear(),t.getMonth(),t.getDate()+1+Math.floor(a()*3))):g?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+3)):"",G=b?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+18)):"";n.push([r(u),x,"",S,g?"Y":"",E?"Y":"",b?"Y":"",P||"",w||"",R?"Y":"","",L,D,"Acc 1",H,W,G].join(",")),b&&w>0&&i.push([G,x,w,R?"first payment":"paid in full"].join(","))}}return{daily:e.join(`
`),replies:n.join(`
`),payments:i.join(`
`)}}function Ey(){const t=new Date,e=r=>ut(new Date(t.getFullYear(),t.getMonth(),t.getDate()+r)),n=["Handle,Account,Name,Niche,Last Touch Sent,Date Last Sent,Next Touch,Next Due Date,Status,Due?,Notes"],i=(r,s,a,o)=>n.push([r,"Acc 1","","Trading","","",s,e(a),o||"Active","",""].join(","));return["@fx_lead1","@fx_lead2","@ai_lead3"].forEach((r,s)=>i(r,"Touch 4",-2+s)),["@ec_lead4","@ec_lead5","@re_lead6","@re_lead7"].forEach(r=>i(r,"FU wk2-4",0)),["@tr_lead8","@tr_lead9"].forEach(r=>i(r,"Touch 5",1)),["@tr_lead10","@ai_lead11","@ec_lead12"].forEach(r=>i(r,"FU mon2-3",2)),i("@dead_lead","Reactivation",5,"Replied"),n.join(`
`)}async function So(t){const e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error("HTTP "+e.status);return e.text()}function wy(){const[t,e]=Te.useState({daily:null,replies:null,leads:[],payments:[],sample:!1,error:null,loadedAt:null}),[n,i]=Te.useState(!0),r=Te.useCallback(async()=>{i(!0);let s=null,a=null,o=[],l=[],c=!1,u=null;try{const[d,h]=await Promise.all([So(zc(Kx)),So(zc(Zx))]);s=xp(d),a=yp(h);try{l=Mp(await So(zc(Qx)))}catch{l=[]}}catch(d){const h=My();s=xp(h.daily),a=yp(h.replies),l=Mp(h.payments),c=!0,u=String(d.message||d)}try{if(c)o=Sp(Ey());else for(const d of ey())try{const h=await So(d),p=Sp(h);if(p.length){o=p;break}}catch{}}catch{}e({daily:s,replies:a,leads:o,payments:l,sample:c,error:u,loadedAt:new Date}),i(!1)},[]);return Te.useEffect(()=>{r();const s=setInterval(r,ny);return()=>clearInterval(s)},[r]),{...t,loading:n,reload:r}}function Wc(t){const[e,n]=Te.useState(null);return Te.useEffect(()=>{fetch("/dm-tracker/"+t+".json?cb="+Date.now()).then(i=>i.ok?i.json():null).then(i=>{i&&i.headline&&n(i)}).catch(()=>{})},[t]),e}function fd({sub:t}){return v.jsxs("span",{children:[v.jsxs("span",{className:"display wordmark",children:["KEHOEGROUP",v.jsx("span",{className:"dot",children:"."})]}),t&&v.jsx("span",{className:"wm-sub",children:t})]})}function Ty({kind:t,children:e}){return v.jsx("span",{className:"badge "+t,children:e})}function Pr({value:t,format:e}){const[n,i]=Te.useState(jn?t:0),r=Te.useRef(jn?t:0);return Te.useEffect(()=>{const s=r.current,a=t;if(r.current=t,jn||s===a){i(a);return}const o=performance.now(),l=700;let c;const u=d=>{const h=Math.min((d-o)/l,1),p=1-Math.pow(1-h,3);i(s+(a-s)*p),h<1&&(c=requestAnimationFrame(u))};return c=requestAnimationFrame(u),()=>cancelAnimationFrame(c)},[t]),e(n)}function jc({text:t}){const[e,n]=Te.useState(jn?(t||"").length:0);return Te.useEffect(()=>{if(jn){n((t||"").length);return}n(0);const i=setInterval(()=>{n(r=>{const s=r+3;return s>=(t||"").length&&clearInterval(i),s})},22);return()=>clearInterval(i)},[t]),v.jsxs("span",{children:[(t||"").slice(0,e),e<(t||"").length&&v.jsx("span",{className:"cursor",children:"▎"})]})}function Et({children:t,delay:e=0,className:n=""}){const i=Te.useRef(null),[r,s]=Te.useState(jn);return Te.useEffect(()=>{if(jn)return;const a=i.current;if(!a)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),o.disconnect())},{threshold:.08});return o.observe(a),()=>o.disconnect()},[]),v.jsx("div",{ref:i,className:"reveal "+(r?"in ":"")+n,style:e?{transitionDelay:e+"ms"}:null,children:t})}function Ay({data:t,color:e="#5A5A5A",dot:n="#E11414"}){if(!t||!t.some(l=>l>0))return null;const i=96,r=24,s=Math.max(...t,1),a=t.map((l,c)=>c/(t.length-1)*i+","+(r-2-l/s*(r-7))),o=a[a.length-1].split(",");return v.jsxs("svg",{width:i,height:r,className:"spark","aria-hidden":"true",children:[v.jsx("polyline",{points:a.join(" "),fill:"none",stroke:e,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"}),v.jsx("circle",{cx:o[0],cy:o[1],r:"2.5",fill:n})]})}function Li({label:t,num:e,format:n,sub:i,red:r,delta:s,spark:a,tip:o}){const l=s>.02?"up":s<-.02?"down":"flat",c=s>.02?"▲":s<-.02?"▼":"·";return v.jsxs("div",{className:"tile",children:[v.jsx("div",{className:"label",children:t}),v.jsx("div",{className:"display val"+(r?" red":""),children:v.jsx(Pr,{value:e,format:n})}),v.jsx("div",{className:"sub",children:i||" "}),s!=null&&v.jsxs("div",{className:"wdelta "+l,children:[c," ",Math.abs(s)<.005?"flat":Math.round(Math.abs(s)*100)+"%"," vs last wk"]}),a&&v.jsx(Ay,{data:a}),o&&v.jsx("div",{className:"tip",children:o.map(([u,d])=>v.jsxs("div",{className:"tip-row",children:[v.jsx("span",{children:u}),v.jsx("b",{children:d})]},u))})]})}function Ry({series:t,height:e=220,yFmt:n=i=>String(Math.round(i))}){const i=t.flatMap(g=>g.data);if(!i.length)return v.jsx("div",{className:"note",children:"No data in this window yet."});const r=720,s=e,a=44,o=10,l=12,c=26,u=i.map(g=>g.x.getTime()),d=Math.min(...u),h=Math.max(...u),p=Math.max(...i.map(g=>g.y),1)*1.12,y=g=>a+(g-d)/Math.max(h-d,1)*(r-a-o),M=g=>l+(1-g/p)*(s-l-c),m=4,f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],x=[];for(let g=0;g<=3;g++){const E=d+(h-d)*g/3,b=new Date(E);x.push({x:y(E),label:b.getDate()+" "+f[b.getMonth()]})}return v.jsxs("svg",{viewBox:"0 0 "+r+" "+s,className:"chart-svg",children:[Array.from({length:m+1},(g,E)=>{const b=p*E/m;return v.jsxs("g",{children:[v.jsx("line",{x1:a,x2:r-o,y1:M(b),y2:M(b),stroke:"#1B1B1B",strokeWidth:"1"}),v.jsx("text",{x:a-7,y:M(b)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:n(b)})]},E)}),x.map((g,E)=>v.jsx("text",{x:g.x,y:s-8,textAnchor:"middle",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:g.label},E)),t.map(g=>{const E=g.data.map(b=>y(b.x.getTime()).toFixed(1)+","+M(b.y).toFixed(1));return v.jsxs("g",{children:[g.area&&v.jsx("polygon",{points:E.join(" ")+" "+y(h).toFixed(1)+","+M(0)+" "+y(d).toFixed(1)+","+M(0),fill:g.color,opacity:"0.08"}),v.jsx("polyline",{points:E.join(" "),fill:"none",stroke:g.color,strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round",pathLength:"1",className:"drawline"})]},g.key)})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="166",Cy=0,Ep=1,by=2,Bv=1,Py=2,ui=3,rr=0,cn=1,pi=2,er=0,As=1,wp=2,Tp=3,Ap=4,Ly=5,yr=100,Dy=101,Ny=102,Uy=103,Iy=104,Fy=200,ky=201,Oy=202,By=203,hd=204,pd=205,zy=206,Hy=207,Vy=208,Gy=209,Wy=210,jy=211,Xy=212,Yy=213,qy=214,$y=0,Ky=1,Zy=2,Il=3,Qy=4,Jy=5,eS=6,tS=7,zv=0,nS=1,iS=2,tr=0,rS=1,sS=2,aS=3,oS=4,lS=5,cS=6,uS=7,Hv=300,Fs=301,ks=302,md=303,gd=304,ac=306,vd=1e3,Tr=1001,_d=1002,Cn=1003,dS=1004,Mo=1005,Hn=1006,Xc=1007,Ar=1008,Ti=1009,Vv=1010,Gv=1011,za=1012,Yf=1013,kr=1014,_i=1015,qa=1016,qf=1017,$f=1018,Os=1020,Wv=35902,jv=1021,Xv=1022,Vn=1023,Yv=1024,qv=1025,Rs=1026,Bs=1027,$v=1028,Kf=1029,Kv=1030,Zf=1031,Qf=1033,sl=33776,al=33777,ol=33778,ll=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Rd=37809,Cd=37810,bd=37811,Pd=37812,Ld=37813,Dd=37814,Nd=37815,Ud=37816,Id=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,cl=36492,zd=36494,Hd=36495,Zv=36283,Vd=36284,Gd=36285,Wd=36286,fS=3200,hS=3201,pS=0,mS=1,Gi="",Kn="srgb",lr="srgb-linear",Jf="display-p3",oc="display-p3-linear",Fl="linear",ft="srgb",kl="rec709",Ol="p3",Wr=7680,Rp=519,gS=512,vS=513,_S=514,Qv=515,xS=516,yS=517,SS=518,MS=519,Cp=35044,bp="300 es",xi=2e3,Bl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,jd=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function ES(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],y=i[8],M=r[0],m=r[3],f=r[6],x=r[1],g=r[4],E=r[7],b=r[2],P=r[5],R=r[8];return s[0]=a*M+o*x+l*b,s[3]=a*m+o*g+l*P,s[6]=a*f+o*E+l*R,s[1]=c*M+u*x+d*b,s[4]=c*m+u*g+d*P,s[7]=c*f+u*E+d*R,s[2]=h*M+p*x+y*b,s[5]=h*m+p*g+y*P,s[8]=h*f+p*E+y*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,y=n*d+i*h+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=d*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply($c.makeScale(e,n)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,n){return this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new je;function Jv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wS(){const t=zl("canvas");return t.style.display="block",t}const Pp={};function e0(t){t in Pp||(Pp[t]=!0,console.warn(t))}function TS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lp=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Eo={[lr]:{transfer:Fl,primaries:kl,toReference:t=>t,fromReference:t=>t},[Kn]:{transfer:ft,primaries:kl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Fl,primaries:Ol,toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp)},[Jf]:{transfer:ft,primaries:Ol,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},AS=new Set([lr,oc]),rt={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!AS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Eo[e].toReference,r=Eo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Eo[t].primaries},getTransfer:function(t){return t===Gi?Fl:Eo[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class RS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=zl("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class t0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zc(r[a].image)):s.push(Zc(r[a]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?RS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bS=0;class un extends Ws{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Tr,r=Tr,s=Hn,a=Ar,o=Vn,l=Ti,c=un.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=$a(),this.name="",this.source=new t0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Hv;un.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],y=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(p+1)/2,b=(f+1)/2,P=(u+h)/4,R=(d+M)/4,w=(y+m)/4;return g>E&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=P/i,s=R/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=w/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=w/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-y)*(m-y)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-y)/x,this.y=(d-M)/x,this.z=(h-u)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends PS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n0 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],y=s[a+2],M=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=y,e[n+3]=M;return}if(d!==M||l!==h||c!==p||u!==y){let m=1-o;const f=l*h+c*p+u*y+d*M,x=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const b=Math.sqrt(g),P=Math.atan2(b,f*x);m=Math.sin(m*P)/b,o=Math.sin(o*P)/b}const E=o*x;if(l=l*m+h*E,c=c*m+p*E,u=u*m+y*E,d=d*m+M*E,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],y=s[a+3];return e[n]=o*y+u*d+l*p-c*h,e[n+1]=l*y+u*h+c*d-o*p,e[n+2]=c*y+u*p+o*h-l*d,e[n+3]=u*y-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"YXZ":this._x=h*u*d+c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"ZXY":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d-h*p*y;break;case"ZYX":this._x=h*u*d-c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d+h*p*y;break;case"YZX":this._x=h*u*d+c*p*y,this._y=c*p*d+h*u*y,this._z=c*u*y-h*p*d,this._w=c*u*d-h*p*y;break;case"XZY":this._x=h*u*d-c*p*y,this._y=c*p*d-h*u*y,this._z=c*u*y+h*p*d,this._w=c*u*d+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new q,Np=new Ka;class Za{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),To.subVectors(this.max,ta),Xr.subVectors(e.a,ta),Yr.subVectors(e.b,ta),qr.subVectors(e.c,ta),Di.subVectors(Yr,Xr),Ni.subVectors(qr,Yr),ur.subVectors(Xr,qr);let n=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ur.z,ur.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ur.z,0,-ur.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ur.y,ur.x,0];return!Jc(n,Xr,Yr,qr,To)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,Xr,Yr,qr,To))?!1:(Ao.crossVectors(Di,Ni),n=[Ao.x,Ao.y,Ao.z],Jc(n,Xr,Yr,qr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new q,new q,new q,new q,new q,new q,new q,new q],Un=new q,wo=new Za,Xr=new q,Yr=new q,qr=new q,Di=new q,Ni=new q,ur=new q,ta=new q,To=new q,Ao=new q,dr=new q;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const DS=new Za,na=new q,eu=new q;class eh{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(eu)),this.expandByPoint(na.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new q,tu=new q,Ro=new q,Ui=new q,nu=new q,Co=new q,iu=new q;class NS{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ro),o=Ui.dot(this.direction),l=-Ui.dot(Ro),c=Ui.lengthSq(),u=Math.abs(1-a*a);let d,h,p,y;if(u>0)if(d=a*l-o,h=a*o-l,y=s*u,d>=0)if(h>=-y)if(h<=y){const M=1/u;d*=M,h*=M,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-y?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=y?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tu).addScaledVector(Ro,h),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),Co.subVectors(i,e),iu.crossVectors(nu,Co);let a=this.direction.dot(iu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);const l=o*this.direction.dot(Co.crossVectors(Ui,Co));if(l<0)return null;const c=o*this.direction.dot(nu.cross(Ui));if(c<0||l+c>a)return null;const u=-o*Ui.dot(iu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,a,o,l,c,u,d,h,p,y,M,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,p,y,M,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,p,y,M,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=y,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),s=1/$r.setFromMatrixColumn(e,1).length(),a=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,y=o*u,M=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=h-M*c,n[9]=-o*l,n[2]=M-h*c,n[6]=y+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h+M*o,n[4]=y*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-y,n[6]=M+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,y=c*u,M=c*d;n[0]=h-M*o,n[4]=-a*d,n[8]=y+p*o,n[1]=p+y*o,n[5]=a*u,n[9]=M-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,y=o*u,M=o*d;n[0]=l*u,n[4]=y*c-p,n[8]=h*c+M,n[1]=l*d,n[5]=M*c+h,n[9]=p*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,y=o*l,M=o*c;n[0]=l*u,n[4]=M-h*d,n[8]=y*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*d+y,n[10]=h-M*d}else if(e.order==="XZY"){const h=a*l,p=a*c,y=o*l,M=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+M,n[5]=a*u,n[9]=p*d-y,n[2]=y*d-p,n[6]=o*u,n[10]=M*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,IS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ii.crossVectors(i,hn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ii.crossVectors(i,hn)),Ii.normalize(),bo.crossVectors(hn,Ii),r[0]=Ii.x,r[4]=bo.x,r[8]=hn.x,r[1]=Ii.y,r[5]=bo.y,r[9]=hn.y,r[2]=Ii.z,r[6]=bo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],y=i[2],M=i[6],m=i[10],f=i[14],x=i[3],g=i[7],E=i[11],b=i[15],P=r[0],R=r[4],w=r[8],_=r[12],S=r[1],A=r[5],L=r[9],D=r[13],H=r[2],W=r[6],G=r[10],B=r[14],N=r[3],F=r[7],Z=r[11],ne=r[15];return s[0]=a*P+o*S+l*H+c*N,s[4]=a*R+o*A+l*W+c*F,s[8]=a*w+o*L+l*G+c*Z,s[12]=a*_+o*D+l*B+c*ne,s[1]=u*P+d*S+h*H+p*N,s[5]=u*R+d*A+h*W+p*F,s[9]=u*w+d*L+h*G+p*Z,s[13]=u*_+d*D+h*B+p*ne,s[2]=y*P+M*S+m*H+f*N,s[6]=y*R+M*A+m*W+f*F,s[10]=y*w+M*L+m*G+f*Z,s[14]=y*_+M*D+m*B+f*ne,s[3]=x*P+g*S+E*H+b*N,s[7]=x*R+g*A+E*W+b*F,s[11]=x*w+g*L+E*G+b*Z,s[15]=x*_+g*D+E*B+b*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],y=e[3],M=e[7],m=e[11],f=e[15];return y*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+M*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-n*l*d+n*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],y=e[12],M=e[13],m=e[14],f=e[15],x=d*m*c-M*h*c+M*l*p-o*m*p-d*l*f+o*h*f,g=y*h*c-u*m*c-y*l*p+a*m*p+u*l*f-a*h*f,E=u*M*c-y*d*c+y*o*p-a*M*p-u*o*f+a*d*f,b=y*d*l-u*M*l-y*o*h+a*M*h+u*o*m-a*d*m,P=n*x+i*g+r*E+s*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=x*R,e[1]=(M*h*s-d*m*s-M*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(o*m*s-M*l*s+M*r*c-i*m*c-o*r*f+i*l*f)*R,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=g*R,e[5]=(u*m*s-y*h*s+y*r*p-n*m*p-u*r*f+n*h*f)*R,e[6]=(y*l*s-a*m*s-y*r*c+n*m*c+a*r*f-n*l*f)*R,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=E*R,e[9]=(y*d*s-u*M*s-y*i*p+n*M*p+u*i*f-n*d*f)*R,e[10]=(a*M*s-y*o*s+y*i*c-n*M*c-a*i*f+n*o*f)*R,e[11]=(u*o*s-a*d*s-u*i*c+n*d*c+a*i*p-n*o*p)*R,e[12]=b*R,e[13]=(u*M*r-y*d*r+y*i*h-n*M*h-u*i*m+n*d*m)*R,e[14]=(y*o*r-a*M*r-y*i*l+n*M*l+a*i*m-n*o*m)*R,e[15]=(a*d*r-u*o*r+u*i*l-n*d*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,y=s*d,M=a*u,m=a*d,f=o*d,x=l*c,g=l*u,E=l*d,b=i.x,P=i.y,R=i.z;return r[0]=(1-(M+f))*b,r[1]=(p+E)*b,r[2]=(y-g)*b,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+f))*P,r[6]=(m+x)*P,r[7]=0,r[8]=(y+g)*R,r[9]=(m-x)*R,r[10]=(1-(h+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$r.set(r[0],r[1],r[2]).length();const a=$r.set(r[4],r[5],r[6]).length(),o=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/a,d=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,y;if(o===xi)p=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Bl)p=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(a-s),h=(n+e)*c,p=(i+r)*u;let y,M;if(o===xi)y=(a+s)*d,M=-2*d;else if(o===Bl)y=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new q,In=new Lt,US=new q(0,0,0),IS=new q(1,1,1),Ii=new q,bo=new q,hn=new q,Up=new Lt,Ip=new Ka;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class i0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const Fp=new q,Kr=new Ka,oi=new Lt,Po=new q,ia=new q,kS=new q,OS=new Ka,kp=new q(1,0,0),Op=new q(0,1,0),Bp=new q(0,0,1),zp={type:"added"},BS={type:"removed"},Zr={type:"childadded",child:null},ru={type:"childremoved",child:null};class _n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new q,n=new Ai,i=new Ka,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Bp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ia,Po,this.up):oi.lookAt(Po,ia,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(oi),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BS),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,kS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new q(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new q,li=new q,su=new q,ci=new q,Qr=new q,Jr=new q,Hp=new q,au=new q,ou=new q,lu=new q;class Jn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),li.subVectors(i,n),su.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(li),l=Fn.dot(su),c=li.dot(li),u=li.dot(su),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,y=(a*u-o*l)*h;return s.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),li.subVectors(e,n),Fn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),Jr.subVectors(s,i),au.subVectors(e,i);const l=Qr.dot(au),c=Jr.dot(au);if(l<=0&&c<=0)return n.copy(i);ou.subVectors(e,r);const u=Qr.dot(ou),d=Jr.dot(ou);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);lu.subVectors(e,s);const p=Qr.dot(lu),y=Jr.dot(lu);if(y>=0&&p<=y)return n.copy(s);const M=p*c-l*y;if(M<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Jr,o);const m=u*y-p*d;if(m<=0&&d-u>=0&&p-y>=0)return Hp.subVectors(s,r),o=(d-u)/(d-u+(p-y)),n.copy(r).addScaledVector(Hp,o);const f=1/(m+M+h);return a=M*f,o=h*f,n.copy(i).addScaledVector(Qr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=ES(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=r0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kn){rt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Lo);const i=qc(Fi.h,Lo.h,n),r=qc(Fi.s,Lo.s,n),s=qc(Fi.l,Lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new at;at.NAMES=r0;let zS=0;class lc extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=As,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==pd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class s0 extends lc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new q,Do=new Qe;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return e0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class a0 extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o0 extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Lr extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let HS=0;const En=new Lt,uu=new _n,es=new q,pn=new Za,ra=new Za,Ut=new q;class Hr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?o0:a0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(pn.min,ra.min),pn.expandByPoint(Ut),Ut.addVectors(pn.max,ra.max),pn.expandByPoint(Ut)):(pn.expandByPoint(ra.min),pn.expandByPoint(ra.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ut.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Ut.add(es)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new q,l[w]=new q;const c=new q,u=new q,d=new q,h=new Qe,p=new Qe,y=new Qe,M=new q,m=new q;function f(w,_,S){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,_),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,_),y.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),y.sub(h);const A=1/(p.x*y.y-y.x*p.y);isFinite(A)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(A),o[w].add(M),o[_].add(M),o[S].add(M),l[w].add(m),l[_].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let w=0,_=x.length;w<_;++w){const S=x[w],A=S.start,L=S.count;for(let D=A,H=A+L;D<H;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const g=new q,E=new q,b=new q,P=new q;function R(w){b.fromBufferAttribute(r,w),P.copy(b);const _=o[w];g.copy(_),g.sub(b.multiplyScalar(b.dot(_))).normalize(),E.crossVectors(P,_);const A=E.dot(l[w])<0?-1:1;a.setXYZW(w,g.x,g.y,g.z,A)}for(let w=0,_=x.length;w<_;++w){const S=x[w],A=S.start,L=S.count;for(let D=A,H=A+L;D<H;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,d=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,y=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let f=0;f<u;f++)h[y++]=c[p++]}return new ii(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new Lt,fr=new NS,No=new eh,Gp=new q,ts=new q,ns=new q,is=new q,du=new q,Uo=new q,Io=new Qe,Fo=new Qe,ko=new Qe,Wp=new q,jp=new q,Xp=new q,Oo=new q,Bo=new q;class ei extends _n{constructor(e=new Hr,n=new s0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(du.fromBufferAttribute(d,e),a?Uo.addScaledVector(du,u):Uo.addScaledVector(du.sub(n),u))}n.add(Uo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(No.containsPoint(fr.origin)===!1&&(fr.intersectSphere(No,Gp)===null||fr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Vp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Vp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=a[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,b=g;E<b;E+=3){const P=o.getX(E),R=o.getX(E+1),w=o.getX(E+2);r=zo(this,f,e,i,c,u,d,P,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const x=o.getX(m),g=o.getX(m+1),E=o.getX(m+2);r=zo(this,a,e,i,c,u,d,x,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,M=h.length;y<M;y++){const m=h[y],f=a[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,b=g;E<b;E+=3){const P=E,R=E+1,w=E+2;r=zo(this,f,e,i,c,u,d,P,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=y,f=M;m<f;m+=3){const x=m,g=m+1,E=m+2;r=zo(this,a,e,i,c,u,d,x,g,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function VS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===rr,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Bo);return c<n.near||c>n.far?null:{distance:c,point:Bo.clone(),object:t}}function zo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const u=VS(t,e,n,i,ts,ns,is,Oo);if(u){r&&(Io.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,l),ko.fromBufferAttribute(r,c),u.uv=Jn.getInterpolation(Oo,ts,ns,is,Io,Fo,ko,new Qe)),s&&(Io.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,l),ko.fromBufferAttribute(s,c),u.uv1=Jn.getInterpolation(Oo,ts,ns,is,Io,Fo,ko,new Qe)),a&&(Wp.fromBufferAttribute(a,o),jp.fromBufferAttribute(a,l),Xp.fromBufferAttribute(a,c),u.normal=Jn.getInterpolation(Oo,ts,ns,is,Wp,jp,Xp,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new q,materialIndex:0};Jn.getNormal(ts,ns,is,d.normal),u.face=d}return u}class Qa extends Hr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lr(c,3)),this.setAttribute("normal",new Lr(u,3)),this.setAttribute("uv",new Lr(d,2));function y(M,m,f,x,g,E,b,P,R,w,_){const S=E/R,A=b/w,L=E/2,D=b/2,H=P/2,W=R+1,G=w+1;let B=0,N=0;const F=new q;for(let Z=0;Z<G;Z++){const ne=Z*A-D;for(let K=0;K<W;K++){const xe=K*S-L;F[M]=xe*x,F[m]=ne*g,F[f]=H,c.push(F.x,F.y,F.z),F[M]=0,F[m]=0,F[f]=P>0?1:-1,u.push(F.x,F.y,F.z),d.push(K/R),d.push(1-Z/w),B+=1}}for(let Z=0;Z<w;Z++)for(let ne=0;ne<R;ne++){const K=h+ne+W*Z,xe=h+ne+W*(Z+1),Y=h+(ne+1)+W*(Z+1),J=h+(ne+1)+W*Z;l.push(K,xe,J),l.push(xe,Y,J),N+=6}o.addGroup(p,N,_),p+=N,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function GS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function l0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const WS={clone:zs,merge:$t};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends lc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class c0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new q,Yp=new Qe,qp=new Qe;class zn extends c0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Yp,qp),n.subVectors(qp,Yp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class YS extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new zn(rs,ss,e,n);s.layers=this.layers,this.add(s);const a=new zn(rs,ss,e,n);a.layers=this.layers,this.add(a);const o=new zn(rs,ss,e,n);o.layers=this.layers,this.add(o);const l=new zn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new zn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class u0 extends un{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Fs,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:er});s.uniforms.tEquirect.value=n;const a=new ei(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Hn),new YS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const fu=new q,$S=new q,KS=new je;class _r{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross($S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new eh,Ho=new q;class d0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],y=r[9],M=r[10],m=r[11],f=r[12],x=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-f).normalize(),i[1].setComponents(l+s,h+c,m+p,E+f).normalize(),i[2].setComponents(l+a,h+u,m+y,E+x).normalize(),i[3].setComponents(l-a,h-u,m-y,E-x).normalize(),i[4].setComponents(l-o,h-d,m-M,E-g).normalize(),n===xi)i[5].setComponents(l+o,h+d,m+M,E+g).normalize();else if(n===Bl)i[5].setComponents(o,d,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ho.x=r.normal.x>0?e.max.x:e.min.x,Ho.y=r.normal.y>0?e.max.y:e.min.y,Ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,y=h.length;p<y;p++){const M=h[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ja extends Hr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,p=[],y=[],M=[],m=[];for(let f=0;f<u;f++){const x=f*h-a;for(let g=0;g<c;g++){const E=g*d-s;y.push(E,-x,0),M.push(0,0,1),m.push(g/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const g=x+c*f,E=x+c*(f+1),b=x+1+c*(f+1),P=x+1+c*f;p.push(g,E,P),p.push(E,b,P)}this.setIndex(p),this.setAttribute("position",new Lr(y,3)),this.setAttribute("normal",new Lr(M,3)),this.setAttribute("uv",new Lr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`
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
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
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
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,KM=`struct PhysicalMaterial {
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
}`,ZM=`
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,oE=`#if defined( USE_POINTS_UV )
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
#endif`,lE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`#ifdef USE_MORPHTARGETS
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
#endif`,pE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,SE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,EE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`float getShadowMask() {
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
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,r1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,v1=`#define NORMAL
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
}`,_1=`#define NORMAL
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
}`,x1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,S1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,E1=`#define TOON
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
}`,w1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,b1=`uniform float rotation;
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
}`,P1=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:aM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:fM,clipping_planes_fragment:hM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:vM,color_pars_fragment:_M,color_pars_vertex:xM,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:EM,displacementmap_pars_vertex:wM,displacementmap_vertex:TM,emissivemap_fragment:AM,emissivemap_pars_fragment:RM,colorspace_fragment:CM,colorspace_pars_fragment:bM,envmap_fragment:PM,envmap_common_pars_fragment:LM,envmap_pars_fragment:DM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:WM,envmap_vertex:UM,fog_vertex:IM,fog_pars_vertex:FM,fog_fragment:kM,fog_pars_fragment:OM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:zM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:GM,lights_toon_fragment:jM,lights_toon_pars_fragment:XM,lights_phong_fragment:YM,lights_phong_pars_fragment:qM,lights_physical_fragment:$M,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:QM,lights_fragment_end:JM,logdepthbuf_fragment:eE,logdepthbuf_pars_fragment:tE,logdepthbuf_pars_vertex:nE,logdepthbuf_vertex:iE,map_fragment:rE,map_pars_fragment:sE,map_particle_fragment:aE,map_particle_pars_fragment:oE,metalnessmap_fragment:lE,metalnessmap_pars_fragment:cE,morphinstance_vertex:uE,morphcolor_vertex:dE,morphnormal_vertex:fE,morphtarget_pars_vertex:hE,morphtarget_vertex:pE,normal_fragment_begin:mE,normal_fragment_maps:gE,normal_pars_fragment:vE,normal_pars_vertex:_E,normal_vertex:xE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:SE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:EE,iridescence_pars_fragment:wE,opaque_fragment:TE,packing:AE,premultiplied_alpha_fragment:RE,project_vertex:CE,dithering_fragment:bE,dithering_pars_fragment:PE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:NE,shadowmap_pars_vertex:UE,shadowmap_vertex:IE,shadowmask_pars_fragment:FE,skinbase_vertex:kE,skinning_pars_vertex:OE,skinning_vertex:BE,skinnormal_vertex:zE,specularmap_fragment:HE,specularmap_pars_fragment:VE,tonemapping_fragment:GE,tonemapping_pars_fragment:WE,transmission_fragment:jE,transmission_pars_fragment:XE,uv_pars_fragment:YE,uv_pars_vertex:qE,uv_vertex:$E,worldpos_vertex:KE,background_vert:ZE,background_frag:QE,backgroundCube_vert:JE,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:a1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:d1,meshbasic_frag:f1,meshlambert_vert:h1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:v1,meshnormal_frag:_1,meshphong_vert:x1,meshphong_frag:y1,meshphysical_vert:S1,meshphysical_frag:M1,meshtoon_vert:E1,meshtoon_frag:w1,points_vert:T1,points_frag:A1,shadow_vert:R1,shadow_frag:C1,sprite_vert:b1,sprite_frag:P1},me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Zn={basic:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:$t([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:$t([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:$t([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:$t([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:$t([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:$t([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:$t([me.common,me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:$t([me.lights,me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Zn.physical={uniforms:$t([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Vo={r:0,b:0,g:0},pr=new Ai,L1=new Lt;function D1(t,e,n,i,r,s,a){const o=new at(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function y(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?n:e).get(g)),g}function M(x){let g=!1;const E=y(x);E===null?f(o,l):E&&E.isColor&&(f(E,1),g=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,g){const E=y(g);E&&(E.isCubeTexture||E.mapping===ac)?(u===void 0&&(u=new ei(new Qa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:zs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(g.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(pr)),u.material.toneMapped=rt.getTransfer(E.colorSpace)!==ft,(d!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ei(new Ja(2,2),new Ri({name:"BackgroundMaterial",uniforms:zs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,g){x.getRGB(Vo,l0(t)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),l=g,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:M,addToRenderList:m}}function N1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,A,L,D,H){let W=!1;const G=d(D,L,A);s!==G&&(s=G,c(s.object)),W=p(S,D,L,H),W&&y(S,D,L,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(S,A,L,D),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,A,L){const D=L.wireframe===!0;let H=i[S.id];H===void 0&&(H={},i[S.id]=H);let W=H[A.id];W===void 0&&(W={},H[A.id]=W);let G=W[D];return G===void 0&&(G=h(l()),W[D]=G),G}function h(S){const A=[],L=[],D=[];for(let H=0;H<n;H++)A[H]=0,L[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:D,object:S,attributes:{},index:null}}function p(S,A,L,D){const H=s.attributes,W=A.attributes;let G=0;const B=L.getAttributes();for(const N in B)if(B[N].location>=0){const Z=H[N];let ne=W[N];if(ne===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),Z===void 0||Z.attribute!==ne||ne&&Z.data!==ne.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function y(S,A,L,D){const H={},W=A.attributes;let G=0;const B=L.getAttributes();for(const N in B)if(B[N].location>=0){let Z=W[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ne={};ne.attribute=Z,Z&&Z.data&&(ne.data=Z.data),H[N]=ne,G++}s.attributes=H,s.attributesNum=G,s.index=D}function M(){const S=s.newAttributes;for(let A=0,L=S.length;A<L;A++)S[A]=0}function m(S){f(S,0)}function f(S,A){const L=s.newAttributes,D=s.enabledAttributes,H=s.attributeDivisors;L[S]=1,D[S]===0&&(t.enableVertexAttribArray(S),D[S]=1),H[S]!==A&&(t.vertexAttribDivisor(S,A),H[S]=A)}function x(){const S=s.newAttributes,A=s.enabledAttributes;for(let L=0,D=A.length;L<D;L++)A[L]!==S[L]&&(t.disableVertexAttribArray(L),A[L]=0)}function g(S,A,L,D,H,W,G){G===!0?t.vertexAttribIPointer(S,A,L,H,W):t.vertexAttribPointer(S,A,L,D,H,W)}function E(S,A,L,D){M();const H=D.attributes,W=L.getAttributes(),G=A.defaultAttributeValues;for(const B in W){const N=W[B];if(N.location>=0){let F=H[B];if(F===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){const Z=F.normalized,ne=F.itemSize,K=e.get(F);if(K===void 0)continue;const xe=K.buffer,Y=K.type,J=K.bytesPerElement,le=Y===t.INT||Y===t.UNSIGNED_INT||F.gpuType===Yf;if(F.isInterleavedBufferAttribute){const oe=F.data,Ee=oe.stride,ae=F.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<N.locationSize;ye++)f(N.location+ye,oe.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<N.locationSize;ye++)m(N.location+ye);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let ye=0;ye<N.locationSize;ye++)g(N.location+ye,ne/N.locationSize,Y,Z,Ee*J,(ae+ne/N.locationSize*ye)*J,le)}else{if(F.isInstancedBufferAttribute){for(let oe=0;oe<N.locationSize;oe++)f(N.location+oe,F.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let oe=0;oe<N.locationSize;oe++)m(N.location+oe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let oe=0;oe<N.locationSize;oe++)g(N.location+oe,ne/N.locationSize,Y,Z,ne*J,ne/N.locationSize*oe*J,le)}}else if(G!==void 0){const Z=G[B];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}x()}function b(){w();for(const S in i){const A=i[S];for(const L in A){const D=A[L];for(const H in D)u(D[H].object),delete D[H];delete A[L]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const A=i[S.id];for(const L in A){const D=A[L];for(const H in D)u(D[H].object),delete D[H];delete A[L]}delete i[S.id]}function R(S){for(const A in i){const L=i[A];if(L[S.id]===void 0)continue;const D=L[S.id];for(const H in D)u(D[H].object),delete D[H];delete L[S.id]}}function w(){_(),a=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:_,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function U1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)a(c[y],u[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let y=0;for(let M=0;M<d;M++)y+=u[M];for(let M=0;M<h.length;M++)n.update(y,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function I1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Vn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_i&&!R)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),M=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:E,maxSamples:b}}function F1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const y=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||y===null||y.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,g=x*4;let E=f.clippingState||null;l.value=E,E=u(y,h,g,p);for(let b=0;b!==g;++b)E[b]=n[b];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,y){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,y!==!0||m===null){const f=p+M*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,E=p;g!==M;++g,E+=4)a.copy(d[g]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function k1(t){let e=new WeakMap;function n(a,o){return o===md?a.mapping=Fs:o===gd&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===md||o===gd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h0 extends c0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,$p=[.125,.215,.35,.446,.526,.582],Sr=20,hu=new h0,Kp=new at;let pu=null,mu=0,gu=0,vu=!1;const xr=(1+Math.sqrt(5))/2,as=1/xr,Zp=[new q(-xr,as,0),new q(xr,as,0),new q(-as,0,xr),new q(as,0,xr),new q(0,xr,-as),new q(0,xr,as),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=vu,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:qa,format:Vn,colorSpace:lr,depthBuffer:!1},r=Jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=O1(s)),this._blurMaterial=B1(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,hu)}_sceneToCubeUV(e,n,i,r){const o=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Kp),u.toneMapping=tr,u.autoClear=!1;const p=new s0({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),y=new ei(new Qa,p);let M=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,M=!0):(p.color.copy(Kp),M=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const g=this._cubeSize;Go(r,x*g,f>2?g:0,g,g),u.setRenderTarget(r),M&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fs||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ei(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Go(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Zp[(r-s-1)%Zp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ei(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),M=s/y,m=isFinite(s)?1+Math.floor(u*M):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const f=[];let x=0;for(let R=0;R<Sr;++R){const w=R/M,_=Math.exp(-w*w/2);f.push(_),R===0?x+=_:R<m&&(x+=2*_)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const E=this._sizeLods[r],b=3*E*(r>g-xs?r-g+xs:0),P=4*(this._cubeSize-E);Go(n,b,P,3*E,2*E),l.setRenderTarget(n),l.render(d,hu)}}function O1(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+$p.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-xs?l=$p[a-t+xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,M=3,m=2,f=1,x=new Float32Array(M*y*p),g=new Float32Array(m*y*p),E=new Float32Array(f*y*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,w=P>2?0:-1,_=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];x.set(_,M*y*P),g.set(h,m*y*P);const S=[P,P,P,P,P,P];E.set(S,f*y*P)}const b=new Hr;b.setAttribute("position",new ii(x,M)),b.setAttribute("uv",new ii(g,m)),b.setAttribute("faceIndex",new ii(E,f)),e.push(b),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Jp(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function B1(t,e,n){const i=new Float32Array(Sr),r=new q(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:th(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function em(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function tm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function z1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===md||l===gd,u=l===Fs||l===ks;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Qp(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Qp(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function H1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&e0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const M=h.morphAttributes[y];for(let m=0,f=M.length;m<f;m++)e.remove(M[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const M=p[y];for(let m=0,f=M.length;m<f;m++)e.update(M[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,y=d.attributes.position;let M=0;if(p!==null){const x=p.array;M=p.version;for(let g=0,E=x.length;g<E;g+=3){const b=x[g+0],P=x[g+1],R=x[g+2];h.push(b,P,P,R,R,b)}}else if(y!==void 0){const x=y.array;M=y.version;for(let g=0,E=x.length/3-1;g<E;g+=3){const b=g+0,P=g+1,R=g+2;h.push(b,P,P,R,R,b)}}else return;const m=new(Jv(h)?o0:a0)(h,1);m.version=M;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function G1(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,y){y!==0&&(t.drawElementsInstanced(i,p,s,h*a,y),n.update(p,i,y))}function u(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,y);let m=0;for(let f=0;f<y;f++)m+=p[f];n.update(m,i,1)}function d(h,p,y,M){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,y);let f=0;for(let x=0;x<y;x++)f+=p[x];for(let x=0;x<M.length;x++)n.update(f,i,M[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function W1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function j1(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const y=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let E=0;y===!0&&(E=1),M===!0&&(E=2),m===!0&&(E=3);let b=o.attributes.position.count*E,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*P*4*d),w=new n0(R,b,P,d);w.type=_i,w.needsUpdate=!0;const _=E*4;for(let A=0;A<d;A++){const L=f[A],D=x[A],H=g[A],W=b*P*4*A;for(let G=0;G<L.count;G++){const B=G*_;y===!0&&(r.fromBufferAttribute(L,G),R[W+B+0]=r.x,R[W+B+1]=r.y,R[W+B+2]=r.z,R[W+B+3]=0),M===!0&&(r.fromBufferAttribute(D,G),R[W+B+4]=r.x,R[W+B+5]=r.y,R[W+B+6]=r.z,R[W+B+7]=0),m===!0&&(r.fromBufferAttribute(H,G),R[W+B+8]=r.x,R[W+B+9]=r.y,R[W+B+10]=r.z,R[W+B+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new Qe(b,P)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const M=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function X1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class p0 extends un{constructor(e,n,i,r,s,a,o,l,c,u=Rs){if(u!==Rs&&u!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=kr),i===void 0&&u===Bs&&(i=Os),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const m0=new un,nm=new p0(1,1),g0=new n0,v0=new LS,_0=new u0,im=[],rm=[],sm=new Float32Array(16),am=new Float32Array(9),om=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=im[r];if(s===void 0&&(s=new Float32Array(r),im[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cc(t,e){let n=rm[e];n===void 0&&(n=new Int32Array(e),rm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function Z1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Nt(n,i)}}function Q1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;am.set(i),t.uniformMatrix3fv(this.addr,!1,am),Nt(n,i)}}function J1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;sm.set(i),t.uniformMatrix4fv(this.addr,!1,sm),Nt(n,i)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nm.compareFunction=Qv,s=nm):s=m0,n.setTexture2D(e||s,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v0,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_0,r)}function dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g0,r)}function fw(t){switch(t){case 5126:return Y1;case 35664:return q1;case 35665:return $1;case 35666:return K1;case 35674:return Z1;case 35675:return Q1;case 35676:return J1;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return aw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return dw}}function hw(t,e){t.uniform1fv(this.addr,e)}function pw(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function mw(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function gw(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function vw(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _w(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yw(t,e){t.uniform1iv(this.addr,e)}function Sw(t,e){t.uniform2iv(this.addr,e)}function Mw(t,e){t.uniform3iv(this.addr,e)}function Ew(t,e){t.uniform4iv(this.addr,e)}function ww(t,e){t.uniform1uiv(this.addr,e)}function Tw(t,e){t.uniform2uiv(this.addr,e)}function Aw(t,e){t.uniform3uiv(this.addr,e)}function Rw(t,e){t.uniform4uiv(this.addr,e)}function Cw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||m0,s[a])}function bw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||v0,s[a])}function Pw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||_0,s[a])}function Lw(t,e,n){const i=this.cache,r=e.length,s=cc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||g0,s[a])}function Dw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return Ew;case 5125:return ww;case 36294:return Tw;case 36295:return Aw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return bw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Lw}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fw(n.type)}}class Uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Dw(n.type)}}class Iw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function lm(t,e){t.seq.push(e),t.map[e.id]=e}function Fw(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),a=_u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){lm(n,c===void 0?new Nw(o,t,e):new Uw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Iw(o),lm(n,d)),n=d}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Fw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function cm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const kw=37297;let Ow=0;function Bw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function zw(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Ol&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===Ol&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case oc:return[i,"LinearTransferOETF"];case Kn:case Jf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Bw(t.getShaderSource(e),a)}else return r}function Hw(t,e){const n=zw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Vw(t,e){let n;switch(e){case rS:n="Linear";break;case sS:n="Reinhard";break;case aS:n="OptimizedCineon";break;case oS:n="ACESFilmic";break;case cS:n="AgX";break;case uS:n="Neutral";break;case lS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Gw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Ww(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ca(t){return t!==""}function dm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(Xw,qw)}const Yw=new Map;function qw(t,e){let n=We[e];if(n===void 0){const i=Yw.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const $w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hm(t){return t.replace($w,Kw)}function Kw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Zw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Py?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Qw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Fs:case ks:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function eT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case zv:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function tT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Zw(n),c=Qw(n),u=Jw(n),d=eT(n),h=tT(n),p=Gw(n),y=Ww(s),M=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ca).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ca).join(`
`),f.length>0&&(f+=`
`)):(m=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),f=[pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?We.tonemapping_pars_fragment:"",n.toneMapping!==tr?Vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Hw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),a=Xd(a),a=dm(a,n),a=fm(a,n),o=Xd(o),o=dm(o,n),o=fm(o,n),a=hm(a),o=hm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=x+m+a,E=x+f+o,b=cm(r,r.VERTEX_SHADER,g),P=cm(r,r.FRAGMENT_SHADER,E);r.attachShader(M,b),r.attachShader(M,P),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(A){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(M).trim(),D=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(P).trim();let W=!0,G=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,P);else{const B=um(r,b,"vertex"),N=um(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+B+`
`+N)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||H==="")&&(G=!1);G&&(A.diagnostics={runnable:W,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:H,prefix:f}})}r.deleteShader(b),r.deleteShader(P),w=new ul(r,M),_=jw(r,M)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(M,kw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=P,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sT(e),n.set(e,i)),i}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function aT(t,e,n,i,r,s,a){const o=new i0,l=new rT,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,A,L,D){const H=L.fog,W=D.geometry,G=_.isMeshStandardMaterial?L.environment:null,B=(_.isMeshStandardMaterial?n:e).get(_.envMap||G),N=B&&B.mapping===ac?B.image.height:null,F=y[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=Z!==void 0?Z.length:0;let K=0;W.morphAttributes.position!==void 0&&(K=1),W.morphAttributes.normal!==void 0&&(K=2),W.morphAttributes.color!==void 0&&(K=3);let xe,Y,J,le;if(F){const Je=Zn[F];xe=Je.vertexShader,Y=Je.fragmentShader}else xe=_.vertexShader,Y=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),le=l.getFragmentShaderID(_);const oe=t.getRenderTarget(),Ee=D.isInstancedMesh===!0,ae=D.isBatchedMesh===!0,ye=!!_.map,Be=!!_.matcap,I=!!B,Ie=!!_.aoMap,ze=!!_.lightMap,Le=!!_.bumpMap,fe=!!_.normalMap,Ze=!!_.displacementMap,Ce=!!_.emissiveMap,Pe=!!_.metalnessMap,U=!!_.roughnessMap,T=_.anisotropy>0,V=_.clearcoat>0,Q=_.dispersion>0,ie=_.iridescence>0,$=_.sheen>0,Ae=_.transmission>0,de=T&&!!_.anisotropyMap,ve=V&&!!_.clearcoatMap,Ue=V&&!!_.clearcoatNormalMap,re=V&&!!_.clearcoatRoughnessMap,ge=ie&&!!_.iridescenceMap,Fe=ie&&!!_.iridescenceThicknessMap,De=$&&!!_.sheenColorMap,pe=$&&!!_.sheenRoughnessMap,He=!!_.specularMap,Ge=!!_.specularColorMap,gt=!!_.specularIntensityMap,k=Ae&&!!_.transmissionMap,ce=Ae&&!!_.thicknessMap,ee=!!_.gradientMap,te=!!_.alphaMap,he=_.alphaTest>0,ke=!!_.alphaHash,$e=!!_.extensions;let Tt=tr;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Ot={shaderID:F,shaderType:_.type,shaderName:_.name,vertexShader:xe,fragmentShader:Y,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:ae,batchingColor:ae&&D._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:lr,alphaToCoverage:!!_.alphaToCoverage,map:ye,matcap:Be,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:N,aoMap:Ie,lightMap:ze,bumpMap:Le,normalMap:fe,displacementMap:h&&Ze,emissiveMap:Ce,normalMapObjectSpace:fe&&_.normalMapType===mS,normalMapTangentSpace:fe&&_.normalMapType===pS,metalnessMap:Pe,roughnessMap:U,anisotropy:T,anisotropyMap:de,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:Ue,clearcoatRoughnessMap:re,dispersion:Q,iridescence:ie,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:$,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:He,specularColorMap:Ge,specularIntensityMap:gt,transmission:Ae,transmissionMap:k,thicknessMap:ce,gradientMap:ee,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:he,alphaHash:ke,combine:_.combine,mapUv:ye&&M(_.map.channel),aoMapUv:Ie&&M(_.aoMap.channel),lightMapUv:ze&&M(_.lightMap.channel),bumpMapUv:Le&&M(_.bumpMap.channel),normalMapUv:fe&&M(_.normalMap.channel),displacementMapUv:Ze&&M(_.displacementMap.channel),emissiveMapUv:Ce&&M(_.emissiveMap.channel),metalnessMapUv:Pe&&M(_.metalnessMap.channel),roughnessMapUv:U&&M(_.roughnessMap.channel),anisotropyMapUv:de&&M(_.anisotropyMap.channel),clearcoatMapUv:ve&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(_.sheenRoughnessMap.channel),specularMapUv:He&&M(_.specularMap.channel),specularColorMapUv:Ge&&M(_.specularColorMap.channel),specularIntensityMapUv:gt&&M(_.specularIntensityMap.channel),transmissionMapUv:k&&M(_.transmissionMap.channel),thicknessMapUv:ce&&M(_.thicknessMap.channel),alphaMapUv:te&&M(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(fe||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(ye||te),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pi,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$e&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&_.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)S.push(A),S.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(x(S,_),g(S,_),S.push(t.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function x(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),_.push(o.mask)}function E(_){const S=y[_.type];let A;if(S){const L=Zn[S];A=WS.clone(L.uniforms)}else A=_.uniforms;return A}function b(_,S){let A;for(let L=0,D=u.length;L<D;L++){const H=u[L];if(H.cacheKey===S){A=H,++A.usedTimes;break}}return A===void 0&&(A=new nT(t,S,_,s),u.push(A)),A}function P(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function R(_){l.remove(_)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:b,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:w}}function oT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function lT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,y,M,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:y,renderOrder:d.renderOrder,z:M,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=M,f.group=m),e++,f}function o(d,h,p,y,M,m){const f=a(d,h,p,y,M,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,y,M,m){const f=a(d,h,p,y,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||lT),i.length>1&&i.sort(h||mm),r.length>1&&r.sort(h||mm)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function cT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new gm,t.set(i,[a])):r>=s.length?(a=new gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function uT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new at};break;case"SpotLight":n={position:new q,direction:new q,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fT=0;function hT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pT(t){const e=new uT,n=dT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Lt,a=new Lt;function o(c){let u=0,d=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,y=0,M=0,m=0,f=0,x=0,g=0,E=0,b=0,P=0,R=0;c.sort(hT);for(let _=0,S=c.length;_<S;_++){const A=c[_],L=A.color,D=A.intensity,H=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*D,d+=L.g*D,h+=L.b*D;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],D);R++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const B=A.shadow,N=n.get(A);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=A.shadow.matrix,x++}i.directional[p]=G,p++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(L).multiplyScalar(D),G.distance=H,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[M]=G;const B=A.shadow;if(A.map&&(i.spotLightMap[b]=A.map,b++,B.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[M]=B.matrix,A.castShadow){const N=n.get(A);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.spotShadow[M]=N,i.spotShadowMap[M]=W,E++}M++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(L).multiplyScalar(D),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=G,m++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const B=A.shadow,N=n.get(A);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,i.pointShadow[y]=N,i.pointShadowMap[y]=W,i.pointShadowMatrix[y]=A.shadow.matrix,g++}i.point[y]=G,y++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(D),G.groundColor.copy(A.groundColor).multiplyScalar(D),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const w=i.hash;(w.directionalLength!==p||w.pointLength!==y||w.spotLength!==M||w.rectAreaLength!==m||w.hemiLength!==f||w.numDirectionalShadows!==x||w.numPointShadows!==g||w.numSpotShadows!==E||w.numSpotMaps!==b||w.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=y,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=E+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,w.directionalLength=p,w.pointLength=y,w.spotLength=M,w.rectAreaLength=m,w.hemiLength=f,w.numDirectionalShadows=x,w.numPointShadows=g,w.numSpotShadows=E,w.numSpotMaps=b,w.numLightProbes=R,i.version=fT++)}function l(c,u){let d=0,h=0,p=0,y=0,M=0;const m=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const g=c[f];if(g.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(g.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function vm(t){const e=new pT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function mT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vm(t),e.set(r,[o])):s>=a.length?(o=new vm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class gT extends lc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends lc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
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
}`;function yT(t,e,n){let i=new d0;const r=new Qe,s=new Qe,a=new Ft,o=new gT({depthPacking:hS}),l=new vT,c={},u=n.maxTextureSize,d={[rr]:cn,[cn]:rr,[pi]:pi},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:_T,fragmentShader:xT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Hr;y.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ei(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv;let f=this.type;this.render=function(P,R,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const _=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),L=t.state;L.setBlending(er),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=f!==ui&&this.type===ui,H=f===ui&&this.type!==ui;for(let W=0,G=P.length;W<G;W++){const B=P[W],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const F=N.getFrameExtents();if(r.multiply(F),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/F.x),r.x=s.x*F.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/F.y),r.y=s.y*F.y,N.mapSize.y=s.y)),N.map===null||D===!0||H===!0){const ne=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};N.map!==null&&N.map.dispose(),N.map=new Or(r.x,r.y,ne),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let ne=0;ne<Z;ne++){const K=N.getViewport(ne);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),L.viewport(a),N.updateMatrices(B,ne),i=N.getFrustum(),E(R,w,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&x(N,w),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(_,S,A)};function x(P,R){const w=e.update(M);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(R,null,w,h,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(R,null,w,p,M,null)}function g(P,R,w,_){let S=null;const A=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)S=A;else if(S=w.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const L=S.uuid,D=R.uuid;let H=c[L];H===void 0&&(H={},c[L]=H);let W=H[D];W===void 0&&(W=S.clone(),H[D]=W,R.addEventListener("dispose",b)),S=W}if(S.visible=R.visible,S.wireframe=R.wireframe,_===ui?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=t.properties.get(S);L.light=w}return S}function E(P,R,w,_,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const D=e.update(P),H=P.material;if(Array.isArray(H)){const W=D.groups;for(let G=0,B=W.length;G<B;G++){const N=W[G],F=H[N.materialIndex];if(F&&F.visible){const Z=g(P,F,_,S);P.onBeforeShadow(t,P,R,w,D,Z,N),t.renderBufferDirect(w,null,D,Z,P,N),P.onAfterShadow(t,P,R,w,D,Z,N)}}}else if(H.visible){const W=g(P,H,_,S);P.onBeforeShadow(t,P,R,w,D,W,null),t.renderBufferDirect(w,null,D,W,P,null),P.onAfterShadow(t,P,R,w,D,W,null)}}const L=P.children;for(let D=0,H=L.length;D<H;D++)E(L[D],R,w,_,S)}function b(P){P.target.removeEventListener("dispose",b);for(const w in c){const _=c[w],S=P.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}function ST(t){function e(){let k=!1;const ce=new Ft;let ee=null;const te=new Ft(0,0,0,0);return{setMask:function(he){ee!==he&&!k&&(t.colorMask(he,he,he,he),ee=he)},setLocked:function(he){k=he},setClear:function(he,ke,$e,Tt,Ot){Ot===!0&&(he*=Tt,ke*=Tt,$e*=Tt),ce.set(he,ke,$e,Tt),te.equals(ce)===!1&&(t.clearColor(he,ke,$e,Tt),te.copy(ce))},reset:function(){k=!1,ee=null,te.set(-1,0,0,0)}}}function n(){let k=!1,ce=null,ee=null,te=null;return{setTest:function(he){he?le(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!k&&(t.depthMask(he),ce=he)},setFunc:function(he){if(ee!==he){switch(he){case $y:t.depthFunc(t.NEVER);break;case Ky:t.depthFunc(t.ALWAYS);break;case Zy:t.depthFunc(t.LESS);break;case Il:t.depthFunc(t.LEQUAL);break;case Qy:t.depthFunc(t.EQUAL);break;case Jy:t.depthFunc(t.GEQUAL);break;case eS:t.depthFunc(t.GREATER);break;case tS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=he}},setLocked:function(he){k=he},setClear:function(he){te!==he&&(t.clearDepth(he),te=he)},reset:function(){k=!1,ce=null,ee=null,te=null}}}function i(){let k=!1,ce=null,ee=null,te=null,he=null,ke=null,$e=null,Tt=null,Ot=null;return{setTest:function(Je){k||(Je?le(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!k&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,ri,Yn){(ee!==Je||te!==ri||he!==Yn)&&(t.stencilFunc(Je,ri,Yn),ee=Je,te=ri,he=Yn)},setOp:function(Je,ri,Yn){(ke!==Je||$e!==ri||Tt!==Yn)&&(t.stencilOp(Je,ri,Yn),ke=Je,$e=ri,Tt=Yn)},setLocked:function(Je){k=Je},setClear:function(Je){Ot!==Je&&(t.clearStencil(Je),Ot=Je)},reset:function(){k=!1,ce=null,ee=null,te=null,he=null,ke=null,$e=null,Tt=null,Ot=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,x=null,g=null,E=null,b=null,P=new at(0,0,0),R=0,w=!1,_=null,S=null,A=null,L=null,D=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=G>=2);let N=null,F={};const Z=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),K=new Ft().fromArray(Z),xe=new Ft().fromArray(ne);function Y(k,ce,ee,te){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(k,ke),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ee;$e++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const J={};J[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(Il),Le(!1),fe(Ep),le(t.CULL_FACE),Ie(er);function le(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function oe(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function Ee(k,ce){return u[k]!==ce?(t.bindFramebuffer(k,ce),u[k]=ce,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ae(k,ce){let ee=h,te=!1;if(k){ee=d.get(ce),ee===void 0&&(ee=[],d.set(ce,ee));const he=k.textures;if(ee.length!==he.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,$e=he.length;ke<$e;ke++)ee[ke]=t.COLOR_ATTACHMENT0+ke;ee.length=he.length,te=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,te=!0);te&&t.drawBuffers(ee)}function ye(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const Be={[yr]:t.FUNC_ADD,[Dy]:t.FUNC_SUBTRACT,[Ny]:t.FUNC_REVERSE_SUBTRACT};Be[Uy]=t.MIN,Be[Iy]=t.MAX;const I={[Fy]:t.ZERO,[ky]:t.ONE,[Oy]:t.SRC_COLOR,[hd]:t.SRC_ALPHA,[Wy]:t.SRC_ALPHA_SATURATE,[Vy]:t.DST_COLOR,[zy]:t.DST_ALPHA,[By]:t.ONE_MINUS_SRC_COLOR,[pd]:t.ONE_MINUS_SRC_ALPHA,[Gy]:t.ONE_MINUS_DST_COLOR,[Hy]:t.ONE_MINUS_DST_ALPHA,[jy]:t.CONSTANT_COLOR,[Xy]:t.ONE_MINUS_CONSTANT_COLOR,[Yy]:t.CONSTANT_ALPHA,[qy]:t.ONE_MINUS_CONSTANT_ALPHA};function Ie(k,ce,ee,te,he,ke,$e,Tt,Ot,Je){if(k===er){y===!0&&(oe(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),k!==Ly){if(k!==M||Je!==w){if((m!==yr||g!==yr)&&(t.blendEquation(t.FUNC_ADD),m=yr,g=yr),Je)switch(k){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.ONE,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Tp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}f=null,x=null,E=null,b=null,P.set(0,0,0),R=0,M=k,w=Je}return}he=he||ce,ke=ke||ee,$e=$e||te,(ce!==m||he!==g)&&(t.blendEquationSeparate(Be[ce],Be[he]),m=ce,g=he),(ee!==f||te!==x||ke!==E||$e!==b)&&(t.blendFuncSeparate(I[ee],I[te],I[ke],I[$e]),f=ee,x=te,E=ke,b=$e),(Tt.equals(P)===!1||Ot!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ot),P.copy(Tt),R=Ot),M=k,w=!1}function ze(k,ce){k.side===pi?oe(t.CULL_FACE):le(t.CULL_FACE);let ee=k.side===cn;ce&&(ee=!ee),Le(ee),k.blending===As&&k.transparent===!1?Ie(er):Ie(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const te=k.stencilWrite;a.setTest(te),te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(k){_!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),_=k)}function fe(k){k!==Cy?(le(t.CULL_FACE),k!==S&&(k===Ep?t.cullFace(t.BACK):k===by?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),S=k}function Ze(k){k!==A&&(W&&t.lineWidth(k),A=k)}function Ce(k,ce,ee){k?(le(t.POLYGON_OFFSET_FILL),(L!==ce||D!==ee)&&(t.polygonOffset(ce,ee),L=ce,D=ee)):oe(t.POLYGON_OFFSET_FILL)}function Pe(k){k?le(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function U(k){k===void 0&&(k=t.TEXTURE0+H-1),N!==k&&(t.activeTexture(k),N=k)}function T(k,ce,ee){ee===void 0&&(N===null?ee=t.TEXTURE0+H-1:ee=N);let te=F[ee];te===void 0&&(te={type:void 0,texture:void 0},F[ee]=te),(te.type!==k||te.texture!==ce)&&(N!==ee&&(t.activeTexture(ee),N=ee),t.bindTexture(k,ce||J[k]),te.type=k,te.texture=ce)}function V(){const k=F[N];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(k){K.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function pe(k){xe.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),xe.copy(k))}function He(k,ce){let ee=l.get(ce);ee===void 0&&(ee=new WeakMap,l.set(ce,ee));let te=ee.get(k);te===void 0&&(te=t.getUniformBlockIndex(ce,k.name),ee.set(k,te))}function Ge(k,ce){const te=l.get(ce).get(k);o.get(ce)!==te&&(t.uniformBlockBinding(ce,te,k.__bindingPointIndex),o.set(ce,te))}function gt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,F={},u={},d=new WeakMap,h=[],p=null,y=!1,M=null,m=null,f=null,x=null,g=null,E=null,b=null,P=new at(0,0,0),R=0,w=!1,_=null,S=null,A=null,L=null,D=null,K.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:oe,bindFramebuffer:Ee,drawBuffers:ae,useProgram:ye,setBlending:Ie,setMaterial:ze,setFlipSided:Le,setCullFace:fe,setLineWidth:Ze,setPolygonOffset:Ce,setScissorTest:Pe,activeTexture:U,bindTexture:T,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:ie,texImage2D:ge,texImage3D:Fe,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:Ue,texStorage3D:re,texSubImage2D:$,texSubImage3D:Ae,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:De,viewport:pe,reset:gt}}function _m(t,e,n,i){const r=MT(i);switch(n){case jv:return t*e;case Yv:return t*e;case qv:return t*e*2;case $v:return t*e/r.components*r.byteLength;case Kf:return t*e/r.components*r.byteLength;case Kv:return t*e*2/r.components*r.byteLength;case Zf:return t*e*2/r.components*r.byteLength;case Xv:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Qf:return t*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(t,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cl:case zd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zv:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MT(t){switch(t){case Ti:case Vv:return{byteLength:1,components:1};case za:case Gv:case qa:return{byteLength:2,components:1};case qf:case $f:return{byteLength:2,components:4};case kr:case Yf:case _i:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function ET(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,T){return p?new OffscreenCanvas(U,T):zl("canvas")}function M(U,T,V){let Q=1;const ie=Pe(U);if((ie.width>V||ie.height>V)&&(Q=V/Math.max(ie.width,ie.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const $=Math.floor(Q*ie.width),Ae=Math.floor(Q*ie.height);d===void 0&&(d=y($,Ae));const de=T?y($,Ae):d;return de.width=$,de.height=Ae,de.getContext("2d").drawImage(U,0,0,$,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+Ae+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==Cn&&U.minFilter!==Hn}function f(U){t.generateMipmap(U)}function x(U,T,V,Q,ie=!1){if(U!==null){if(t[U]!==void 0)return t[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let $=T;if(T===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),T===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),T===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),T===t.RGBA){const Ae=ie?Fl:rt.getTransfer(Q);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=Ae===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function g(U,T){let V;return U?T===null||T===kr||T===Os?V=t.DEPTH24_STENCIL8:T===_i?V=t.DEPTH32F_STENCIL8:T===za&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===kr||T===Os?V=t.DEPTH_COMPONENT24:T===_i?V=t.DEPTH_COMPONENT32F:T===za&&(V=t.DEPTH_COMPONENT16),V}function E(U,T){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Cn&&U.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function b(U){const T=U.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&u.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),_(T)}function R(U){const T=i.get(U);if(T.__webglInit===void 0)return;const V=U.source,Q=h.get(V);if(Q){const ie=Q[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(U),Object.keys(Q).length===0&&h.delete(V)}i.remove(U)}function w(U){const T=i.get(U);t.deleteTexture(T.__webglTexture);const V=U.source,Q=h.get(V);delete Q[T.__cacheKey],a.memory.textures--}function _(U){const T=i.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let ie=0;ie<T.__webglFramebuffer[Q].length;ie++)t.deleteFramebuffer(T.__webglFramebuffer[Q][ie]);else t.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)t.deleteFramebuffer(T.__webglFramebuffer[Q]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=U.textures;for(let Q=0,ie=V.length;Q<ie;Q++){const $=i.get(V[Q]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(V[Q])}i.remove(U)}let S=0;function A(){S=0}function L(){const U=S;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),S+=1,U}function D(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function H(U,T){const V=i.get(U);if(U.isVideoTexture&&Ze(U),U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){const Q=U.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(V,U,T);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function W(U,T){const V=i.get(U);if(U.version>0&&V.__version!==U.version){xe(V,U,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function G(U,T){const V=i.get(U);if(U.version>0&&V.__version!==U.version){xe(V,U,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function B(U,T){const V=i.get(U);if(U.version>0&&V.__version!==U.version){Y(V,U,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}const N={[vd]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},F={[Cn]:t.NEAREST,[dS]:t.NEAREST_MIPMAP_NEAREST,[Mo]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Z={[gS]:t.NEVER,[MS]:t.ALWAYS,[vS]:t.LESS,[Qv]:t.LEQUAL,[_S]:t.EQUAL,[SS]:t.GEQUAL,[xS]:t.GREATER,[yS]:t.NOTEQUAL};function ne(U,T){if(T.type===_i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===Xc||T.magFilter===Mo||T.magFilter===Ar||T.minFilter===Hn||T.minFilter===Xc||T.minFilter===Mo||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,N[T.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,F[T.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,F[T.minFilter]),T.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==Mo&&T.minFilter!==Ar||T.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function K(U,T){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",b));const Q=T.source;let ie=h.get(Q);ie===void 0&&(ie={},h.set(Q,ie));const $=D(T);if($!==U.__cacheKey){ie[$]===void 0&&(ie[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[$].usedTimes++;const Ae=ie[U.__cacheKey];Ae!==void 0&&(ie[U.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(T)),U.__cacheKey=$,U.__webglTexture=ie[$].texture}return V}function xe(U,T,V){let Q=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=t.TEXTURE_3D);const ie=K(U,T),$=T.source;n.bindTexture(Q,U.__webglTexture,t.TEXTURE0+V);const Ae=i.get($);if($.version!==Ae.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const de=rt.getPrimaries(rt.workingColorSpace),ve=T.colorSpace===Gi?null:rt.getPrimaries(T.colorSpace),Ue=T.colorSpace===Gi||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let re=M(T.image,!1,r.maxTextureSize);re=Ce(T,re);const ge=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let De=x(T.internalFormat,ge,Fe,T.colorSpace,T.isVideoTexture);ne(Q,T);let pe;const He=T.mipmaps,Ge=T.isVideoTexture!==!0,gt=Ae.__version===void 0||ie===!0,k=$.dataReady,ce=E(T,re);if(T.isDepthTexture)De=g(T.format===Bs,T.type),gt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,De,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ge,Fe,null));else if(T.isDataTexture)if(He.length>0){Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,ce,De,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,ge,Fe,pe.data);T.generateMipmaps=!1}else Ge?(gt&&n.texStorage2D(t.TEXTURE_2D,ce,De,re.width,re.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Fe,re.data)):n.texImage2D(t.TEXTURE_2D,0,De,re.width,re.height,0,ge,Fe,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,He[0].width,He[0].height,re.depth);for(let ee=0,te=He.length;ee<te;ee++)if(pe=He[ee],T.format!==Vn)if(ge!==null)if(Ge){if(k)if(T.layerUpdates.size>0){const he=_m(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const $e=pe.data.subarray(ke*he/pe.data.BYTES_PER_ELEMENT,(ke+1)*he/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,ke,pe.width,pe.height,1,ge,$e,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,De,pe.width,pe.height,re.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,re.depth,ge,Fe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,De,pe.width,pe.height,re.depth,0,ge,Fe,pe.data)}else{Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,ce,De,He[0].width,He[0].height);for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],T.format!==Vn?ge!==null?Ge?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,ee,De,pe.width,pe.height,0,ge,Fe,pe.data)}else if(T.isDataArrayTexture)if(Ge){if(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,De,re.width,re.height,re.depth),k)if(T.layerUpdates.size>0){const ee=_m(re.width,re.height,T.format,T.type);for(const te of T.layerUpdates){const he=re.data.subarray(te*ee/re.data.BYTES_PER_ELEMENT,(te+1)*ee/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ge,Fe,he)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isData3DTexture)Ge?(gt&&n.texStorage3D(t.TEXTURE_3D,ce,De,re.width,re.height,re.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Fe,re.data)):n.texImage3D(t.TEXTURE_3D,0,De,re.width,re.height,re.depth,0,ge,Fe,re.data);else if(T.isFramebufferTexture){if(gt)if(Ge)n.texStorage2D(t.TEXTURE_2D,ce,De,re.width,re.height);else{let ee=re.width,te=re.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,De,ee,te,0,ge,Fe,null),ee>>=1,te>>=1}}else if(He.length>0){if(Ge&&gt){const ee=Pe(He[0]);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}for(let ee=0,te=He.length;ee<te;ee++)pe=He[ee],Ge?k&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ge,Fe,pe):n.texImage2D(t.TEXTURE_2D,ee,De,ge,Fe,pe);T.generateMipmaps=!1}else if(Ge){if(gt){const ee=Pe(re);n.texStorage2D(t.TEXTURE_2D,ce,De,ee.width,ee.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,re)}else n.texImage2D(t.TEXTURE_2D,0,De,ge,Fe,re);m(T)&&f(Q),Ae.__version=$.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Y(U,T,V){if(T.image.length!==6)return;const Q=K(U,T),ie=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+V);const $=i.get(ie);if(ie.version!==$.__version||Q===!0){n.activeTexture(t.TEXTURE0+V);const Ae=rt.getPrimaries(rt.workingColorSpace),de=T.colorSpace===Gi?null:rt.getPrimaries(T.colorSpace),ve=T.colorSpace===Gi||Ae===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ue=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!Ue&&!re?ge[te]=M(T.image[te],!0,r.maxCubemapSize):ge[te]=re?T.image[te].image:T.image[te],ge[te]=Ce(T,ge[te]);const Fe=ge[0],De=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),He=x(T.internalFormat,De,pe,T.colorSpace),Ge=T.isVideoTexture!==!0,gt=$.__version===void 0||Q===!0,k=ie.dataReady;let ce=E(T,Fe);ne(t.TEXTURE_CUBE_MAP,T);let ee;if(Ue){Ge&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Fe.width,Fe.height);for(let te=0;te<6;te++){ee=ge[te].mipmaps;for(let he=0;he<ee.length;he++){const ke=ee[he];T.format!==Vn?De!==null?Ge?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,De,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,0,0,ke.width,ke.height,De,pe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he,He,ke.width,ke.height,0,De,pe,ke.data)}}}else{if(ee=T.mipmaps,Ge&&gt){ee.length>0&&ce++;const te=Pe(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,De,pe,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ge[te].width,ge[te].height,0,De,pe,ge[te].data);for(let he=0;he<ee.length;he++){const $e=ee[he].image[te].image;Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,$e.width,$e.height,De,pe,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,$e.width,$e.height,0,De,pe,$e.data)}}else{Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,pe,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,De,pe,ge[te]);for(let he=0;he<ee.length;he++){const ke=ee[he];Ge?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,0,0,De,pe,ke.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he+1,He,De,pe,ke.image[te])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),$.__version=ie.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function J(U,T,V,Q,ie,$){const Ae=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ve=x(V.internalFormat,Ae,de,V.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>$),ge=Math.max(1,T.height>>$);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,$,ve,re,ge,T.depth,0,Ae,de,null):n.texImage2D(ie,$,ve,re,ge,0,Ae,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,0,Le(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ie,i.get(V).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(U,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,U),T.depthBuffer){const Q=T.depthTexture,ie=Q&&Q.isDepthTexture?Q.type:null,$=g(T.stencilBuffer,ie),Ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Le(T);fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,$,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ae,t.RENDERBUFFER,U)}else{const Q=T.textures;for(let ie=0;ie<Q.length;ie++){const $=Q[ie],Ae=s.convert($.format,$.colorSpace),de=s.convert($.type),ve=x($.internalFormat,Ae,de,$.colorSpace),Ue=Le(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ve,T.width,T.height):fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const Q=i.get(T.depthTexture).__webglTexture,ie=Le(T);if(T.depthTexture.format===Rs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Bs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ee(U){const T=i.get(U),V=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");oe(T.__webglFramebuffer,U)}else if(V){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=t.createRenderbuffer(),le(T.__webglDepthbuffer[Q],U,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,U,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(U,T,V){const Q=i.get(U);T!==void 0&&J(Q.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ee(U)}function ye(U){const T=U.texture,V=i.get(U),Q=i.get(T);U.addEventListener("dispose",P);const ie=U.textures,$=U.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=T.version,a.memory.textures++),$){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ve=0;ve<T.mipmaps.length;ve++)V.__webglFramebuffer[de][ve]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Ae)for(let de=0,ve=ie.length;de<ve;de++){const Ue=i.get(ie[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(U.samples>0&&fe(U)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const ve=ie[de];V.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ue=s.convert(ve.format,ve.colorSpace),re=s.convert(ve.type),ge=x(ve.internalFormat,Ue,re,ve.colorSpace,U.isXRRenderTarget===!0),Fe=Le(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,V.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),le(V.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[de][ve],U,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else J(V.__webglFramebuffer[de],U,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ae){for(let de=0,ve=ie.length;de<ve;de++){const Ue=ie[de],re=i.get(Ue);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ne(t.TEXTURE_2D,Ue),J(V.__webglFramebuffer,U,Ue,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Ue)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),ne(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)J(V.__webglFramebuffer[ve],U,T,t.COLOR_ATTACHMENT0,de,ve);else J(V.__webglFramebuffer,U,T,t.COLOR_ATTACHMENT0,de,0);m(T)&&f(de),n.unbindTexture()}U.depthBuffer&&Ee(U)}function Be(U){const T=U.textures;for(let V=0,Q=T.length;V<Q;V++){const ie=T[V];if(m(ie)){const $=U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ae=i.get(ie).__webglTexture;n.bindTexture($,Ae),f($),n.unbindTexture()}}}const I=[],Ie=[];function ze(U){if(U.samples>0){if(fe(U)===!1){const T=U.textures,V=U.width,Q=U.height;let ie=t.COLOR_BUFFER_BIT;const $=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ae=i.get(U),de=T.length>1;if(de)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const Ue=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ue,0)}t.blitFramebuffer(0,0,V,Q,0,0,V,Q,ie,t.NEAREST),l===!0&&(I.length=0,Ie.length=0,I.push(t.COLOR_ATTACHMENT0+ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(I.push($),Ie.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ie)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);const Ue=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const T=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Le(U){return Math.min(r.maxSamples,U.samples)}function fe(U){const T=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(U){const T=a.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function Ce(U,T){const V=U.colorSpace,Q=U.format,ie=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==lr&&V!==Gi&&(rt.getTransfer(V)===ft?(Q!==Vn||ie!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Pe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=A,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=ae,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=J,this.useMultisampledRTT=fe}function wT(t,e){function n(i,r=Gi){let s;const a=rt.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===qf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vv)return t.BYTE;if(i===Gv)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Yf)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===jv)return t.ALPHA;if(i===Xv)return t.RGB;if(i===Vn)return t.RGBA;if(i===Yv)return t.LUMINANCE;if(i===qv)return t.LUMINANCE_ALPHA;if(i===Rs)return t.DEPTH_COMPONENT;if(i===Bs)return t.DEPTH_STENCIL;if(i===$v)return t.RED;if(i===Kf)return t.RED_INTEGER;if(i===Kv)return t.RG;if(i===Zf)return t.RG_INTEGER;if(i===Qf)return t.RGBA_INTEGER;if(i===sl||i===al||i===ol||i===ll)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===wd||i===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ed||i===wd)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Ld||i===Dd||i===Nd||i===Ud||i===Id||i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===zd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zv||i===Vd||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class TT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AT={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const RT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:RT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends Ws{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,y=null;const M=new bT,m=n.getContextAttributes();let f=null,x=null;const g=[],E=[],b=new Qe;let P=null;const R=new zn;R.layers.enable(1),R.viewport=new Ft;const w=new zn;w.layers.enable(2),w.viewport=new Ft;const _=[R,w],S=new TT;S.layers.enable(1),S.layers.enable(2);let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=g[Y];return J===void 0&&(J=new xu,g[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=g[Y];return J===void 0&&(J=new xu,g[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=g[Y];return J===void 0&&(J=new xu,g[Y]=J),J.getHandSpace()};function D(Y){const J=E.indexOf(Y.inputSource);if(J===-1)return;const le=g[J];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",W);for(let Y=0;Y<g.length;Y++){const J=E[Y];J!==null&&(E[Y]=null,g[Y].disconnect(J))}A=null,L=null,M.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,x=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",H),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Or(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,le=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Bs:Rs,le=m.stencil?Os:kr);const Ee={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Or(h.textureWidth,h.textureHeight,{format:Vn,type:Ti,depthTexture:new p0(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(Y){for(let J=0;J<Y.removed.length;J++){const le=Y.removed[J],oe=E.indexOf(le);oe>=0&&(E[oe]=null,g[oe].disconnect(le))}for(let J=0;J<Y.added.length;J++){const le=Y.added[J];let oe=E.indexOf(le);if(oe===-1){for(let ae=0;ae<g.length;ae++)if(ae>=E.length){E.push(le),oe=ae;break}else if(E[ae]===null){E[ae]=le,oe=ae;break}if(oe===-1)break}const Ee=g[oe];Ee&&Ee.connect(le)}}const G=new q,B=new q;function N(Y,J,le){G.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(le.matrixWorld);const oe=G.distanceTo(B),Ee=J.projectionMatrix.elements,ae=le.projectionMatrix.elements,ye=Ee[14]/(Ee[10]-1),Be=Ee[14]/(Ee[10]+1),I=(Ee[9]+1)/Ee[5],Ie=(Ee[9]-1)/Ee[5],ze=(Ee[8]-1)/Ee[0],Le=(ae[8]+1)/ae[0],fe=ye*ze,Ze=ye*Le,Ce=oe/(-ze+Le),Pe=Ce*-ze;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const U=ye+Ce,T=Be+Ce,V=fe-Pe,Q=Ze+(oe-Pe),ie=I*Be/T*U,$=Ie*Be/T*U;Y.projectionMatrix.makePerspective(V,Q,ie,$,U,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function F(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;M.texture!==null&&(Y.near=M.depthNear,Y.far=M.depthFar),S.near=w.near=R.near=Y.near,S.far=w.far=R.far=Y.far,(A!==S.near||L!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,L=S.far,R.near=A,R.far=L,w.near=A,w.far=L,R.updateProjectionMatrix(),w.updateProjectionMatrix(),Y.updateProjectionMatrix());const J=Y.parent,le=S.cameras;F(S,J);for(let oe=0;oe<le.length;oe++)F(le[oe],J);le.length===2?N(S,R,w):S.projectionMatrix.copy(R.projectionMatrix),Z(Y,S,J)};function Z(Y,J,le){le===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=jd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(S)};let ne=null;function K(Y,J){if(u=J.getViewerPose(c||a),y=J,u!==null){const le=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let oe=!1;le.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let ae=0;ae<le.length;ae++){const ye=le[ae];let Be=null;if(p!==null)Be=p.getViewport(ye);else{const Ie=d.getViewSubImage(h,ye);Be=Ie.viewport,ae===0&&(e.setRenderTargetTextures(x,Ie.colorTexture,h.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(x))}let I=_[ae];I===void 0&&(I=new zn,I.layers.enable(ae),I.viewport=new Ft,_[ae]=I),I.matrix.fromArray(ye.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ye.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Be.x,Be.y,Be.width,Be.height),ae===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(I)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const ae=d.getDepthInformation(le[0]);ae&&ae.isValid&&ae.texture&&M.init(e,ae,r.renderState)}}for(let le=0;le<g.length;le++){const oe=E[le],Ee=g[le];oe!==null&&Ee!==void 0&&Ee.update(oe,J,c||a)}ne&&ne(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const xe=new f0;xe.setAnimationLoop(K),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const mr=new Ai,LT=new Lt;function DT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,l0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,g,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),y(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),g=x.envMap,E=x.envMapRotation;g&&(m.envMap.value=g,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(mr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,g){const E=g.program;i.uniformBlockBinding(x,E)}function c(x,g){let E=r[x.id];E===void 0&&(y(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(x,b);const P=e.render.frame;s[x.id]!==P&&(h(x),s[x.id]=P)}function u(x){const g=d();x.__bindingPointIndex=g;const E=t.createBuffer(),b=x.__size,P=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const g=r[x.id],E=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let P=0,R=E.length;P<R;P++){const w=Array.isArray(E[P])?E[P]:[E[P]];for(let _=0,S=w.length;_<S;_++){const A=w[_];if(p(A,P,_,b)===!0){const L=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let W=0;W<D.length;W++){const G=D[W],B=M(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,L+H,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,H),H+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,g,E,b){const P=x.value,R=g+"_"+E;if(b[R]===void 0)return typeof P=="number"||typeof P=="boolean"?b[R]=P:b[R]=P.clone(),!0;{const w=b[R];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return b[R]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function y(x){const g=x.uniforms;let E=0;const b=16;for(let R=0,w=g.length;R<w;R++){const _=Array.isArray(g[R])?g[R]:[g[R]];for(let S=0,A=_.length;S<A;S++){const L=_[S],D=Array.isArray(L.value)?L.value:[L.value];for(let H=0,W=D.length;H<W;H++){const G=D[H],B=M(G),N=E%b;N!==0&&b-N<B.boundary&&(E+=b-N),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=B.storage}}}const P=E%b;return P>0&&(E+=b-P),x.__size=E,x.__cache={},this}function M(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function m(x){const g=x.target;g.removeEventListener("dispose",m);const E=a.indexOf(g.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class UT{constructor(e={}){const{canvas:n=wS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),y=new Int32Array(4);let M=null,m=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=tr,this.toneMappingExposure=1;const g=this;let E=!1,b=0,P=0,R=null,w=-1,_=null;const S=new Ft,A=new Ft;let L=null;const D=new at(0);let H=0,W=n.width,G=n.height,B=1,N=null,F=null;const Z=new Ft(0,0,W,G),ne=new Ft(0,0,W,G);let K=!1;const xe=new d0;let Y=!1,J=!1;const le=new Lt,oe=new q,Ee=new Ft,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Be(){return R===null?B:1}let I=i;function Ie(C,O){return n.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const O="webgl2";if(I=Ie(O,C),I===null)throw Ie(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Le,fe,Ze,Ce,Pe,U,T,V,Q,ie,$,Ae,de,ve,Ue,re,ge,Fe,De,pe,He,Ge,gt;function k(){ze=new H1(I),ze.init(),He=new wT(I,ze),Le=new I1(I,ze,e,He),fe=new ST(I),Ze=new W1(I),Ce=new oT,Pe=new ET(I,ze,fe,Ce,Le,He,Ze),U=new k1(g),T=new z1(g),V=new ZS(I),Ge=new N1(I,V),Q=new V1(I,V,Ze,Ge),ie=new X1(I,Q,V,Ze),Fe=new j1(I,Le,Pe),Ue=new F1(Ce),$=new aT(g,U,T,ze,Le,Ge,Ue),Ae=new DT(g,Ce),de=new cT,ve=new mT(ze),ge=new D1(g,U,T,fe,ie,h,l),re=new yT(g,ie,Le),gt=new NT(I,Ze,Le,fe),De=new U1(I,ze,Ze),pe=new G1(I,ze,Ze),Ze.programs=$.programs,g.capabilities=Le,g.extensions=ze,g.properties=Ce,g.renderLists=de,g.shadowMap=re,g.state=fe,g.info=Ze}k();const ce=new PT(g,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(W,G,!1))},this.getSize=function(C){return C.set(W,G)},this.setSize=function(C,O,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,G=O,n.width=Math.floor(C*B),n.height=Math.floor(O*B),j===!0&&(n.style.width=C+"px",n.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set(W*B,G*B).floor()},this.setDrawingBufferSize=function(C,O,j){W=C,G=O,B=j,n.width=Math.floor(C*j),n.height=Math.floor(O*j),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,O,j,X){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,O,j,X),fe.viewport(S.copy(Z).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,O,j,X){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,O,j,X),fe.scissor(A.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){fe.setScissorTest(K=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,O=!0,j=!0){let X=0;if(C){let z=!1;if(R!==null){const ue=R.texture.format;z=ue===Qf||ue===Zf||ue===Kf}if(z){const ue=R.texture.type,_e=ue===Ti||ue===kr||ue===za||ue===Os||ue===qf||ue===$f,Me=ge.getClearColor(),we=ge.getClearAlpha(),Oe=Me.r,Ve=Me.g,Ne=Me.b;_e?(p[0]=Oe,p[1]=Ve,p[2]=Ne,p[3]=we,I.clearBufferuiv(I.COLOR,0,p)):(y[0]=Oe,y[1]=Ve,y[2]=Ne,y[3]=we,I.clearBufferiv(I.COLOR,0,y))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),j&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",he,!1),de.dispose(),ve.dispose(),Ce.dispose(),U.dispose(),T.dispose(),ie.dispose(),Ge.dispose(),gt.dispose(),$.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Yn),ce.removeEventListener("sessionend",nh),cr.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Ze.autoReset,O=re.enabled,j=re.autoUpdate,X=re.needsUpdate,z=re.type;k(),Ze.autoReset=C,re.enabled=O,re.autoUpdate=j,re.needsUpdate=X,re.type=z}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const O=C.target;O.removeEventListener("dispose",ke),$e(O)}function $e(C){Tt(C),Ce.remove(C)}function Tt(C){const O=Ce.get(C).programs;O!==void 0&&(O.forEach(function(j){$.releaseProgram(j)}),C.isShaderMaterial&&$.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,j,X,z,ue){O===null&&(O=ae);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Me=x0(C,O,j,X,z);fe.setMaterial(X,_e);let we=j.index,Oe=1;if(X.wireframe===!0){if(we=Q.getWireframeAttribute(j),we===void 0)return;Oe=2}const Ve=j.drawRange,Ne=j.attributes.position;let et=Ve.start*Oe,yt=(Ve.start+Ve.count)*Oe;ue!==null&&(et=Math.max(et,ue.start*Oe),yt=Math.min(yt,(ue.start+ue.count)*Oe)),we!==null?(et=Math.max(et,0),yt=Math.min(yt,we.count)):Ne!=null&&(et=Math.max(et,0),yt=Math.min(yt,Ne.count));const St=yt-et;if(St<0||St===1/0)return;Ge.setup(z,X,Me,j,we);let dn,tt=De;if(we!==null&&(dn=V.get(we),tt=pe,tt.setIndex(dn)),z.isMesh)X.wireframe===!0?(fe.setLineWidth(X.wireframeLinewidth*Be()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(z.isLine){let be=X.linewidth;be===void 0&&(be=1),fe.setLineWidth(be*Be()),z.isLineSegments?tt.setMode(I.LINES):z.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else z.isPoints?tt.setMode(I.POINTS):z.isSprite&&tt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const be=z._multiDrawStarts,Bt=z._multiDrawCounts,nt=z._multiDrawCount,Dn=we?V.get(we).bytesPerElement:1,Vr=Ce.get(X).currentProgram.getUniforms();for(let fn=0;fn<nt;fn++)Vr.setValue(I,"_gl_DrawID",fn),tt.render(be[fn]/Dn,Bt[fn])}else if(z.isInstancedMesh)tt.renderInstances(et,St,z.count);else if(j.isInstancedBufferGeometry){const be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bt=Math.min(j.instanceCount,be);tt.renderInstances(et,St,Bt)}else tt.render(et,St)};function Ot(C,O,j){C.transparent===!0&&C.side===pi&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,to(C,O,j),C.side=rr,C.needsUpdate=!0,to(C,O,j),C.side=pi):to(C,O,j)}this.compile=function(C,O,j=null){j===null&&(j=C),m=ve.get(j),m.init(O),x.push(m),j.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),C!==j&&C.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const X=new Set;return C.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Me=ue[_e];Ot(Me,j,z),X.add(Me)}else Ot(ue,j,z),X.add(ue)}),x.pop(),m=null,X},this.compileAsync=function(C,O,j=null){const X=this.compile(C,O,j);return new Promise(z=>{function ue(){if(X.forEach(function(_e){Ce.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){z(C);return}setTimeout(ue,10)}ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Je=null;function ri(C){Je&&Je(C)}function Yn(){cr.stop()}function nh(){cr.start()}const cr=new f0;cr.setAnimationLoop(ri),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(C){Je=C,ce.setAnimationLoop(C),C===null?cr.stop():cr.start()},ce.addEventListener("sessionstart",Yn),ce.addEventListener("sessionend",nh),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,O,R),m=ve.get(C,x.length),m.init(O),x.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),xe.setFromProjectionMatrix(le),J=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,J),M=de.get(C,f.length),M.init(),f.push(M),ce.enabled===!0&&ce.isPresenting===!0){const ue=g.xr.getDepthSensingMesh();ue!==null&&uc(ue,O,-1/0,g.sortObjects)}uc(C,O,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(N,F),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&ge.addToRenderList(M,C),this.info.render.frame++,Y===!0&&Ue.beginShadows();const j=m.state.shadowsArray;re.render(j,C,O),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=M.opaque,z=M.transmissive;if(m.setupLights(),O.isArrayCamera){const ue=O.cameras;if(z.length>0)for(let _e=0,Me=ue.length;_e<Me;_e++){const we=ue[_e];rh(X,z,C,we)}ye&&ge.render(C);for(let _e=0,Me=ue.length;_e<Me;_e++){const we=ue[_e];ih(M,C,we,we.viewport)}}else z.length>0&&rh(X,z,C,O),ye&&ge.render(C),ih(M,C,O);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(g,C,O),Ge.resetDefaultState(),w=-1,_=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&Ue.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function uc(C,O,j,X){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||xe.intersectsSprite(C)){X&&Ee.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const _e=ie.update(C),Me=C.material;Me.visible&&M.push(C,_e,Me,j,Ee.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||xe.intersectsObject(C))){const _e=ie.update(C),Me=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ee.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ee.copy(_e.boundingSphere.center)),Ee.applyMatrix4(C.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){const we=_e.groups;for(let Oe=0,Ve=we.length;Oe<Ve;Oe++){const Ne=we[Oe],et=Me[Ne.materialIndex];et&&et.visible&&M.push(C,_e,et,j,Ee.z,Ne)}}else Me.visible&&M.push(C,_e,Me,j,Ee.z,null)}}const ue=C.children;for(let _e=0,Me=ue.length;_e<Me;_e++)uc(ue[_e],O,j,X)}function ih(C,O,j,X){const z=C.opaque,ue=C.transmissive,_e=C.transparent;m.setupLightsView(j),Y===!0&&Ue.setGlobalState(g.clippingPlanes,j),X&&fe.viewport(S.copy(X)),z.length>0&&eo(z,O,j),ue.length>0&&eo(ue,O,j),_e.length>0&&eo(_e,O,j),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function rh(C,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Or(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qa:Ti,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[X.id],_e=X.viewport||S;ue.setSize(_e.z,_e.w);const Me=g.getRenderTarget();g.setRenderTarget(ue),g.getClearColor(D),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),ye?ge.render(j):g.clear();const we=g.toneMapping;g.toneMapping=tr;const Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Y===!0&&Ue.setGlobalState(g.clippingPlanes,X),eo(C,j,X),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ne=0,et=O.length;Ne<et;Ne++){const yt=O[Ne],St=yt.object,dn=yt.geometry,tt=yt.material,be=yt.group;if(tt.side===pi&&St.layers.test(X.layers)){const Bt=tt.side;tt.side=cn,tt.needsUpdate=!0,sh(St,j,X,dn,tt,be),tt.side=Bt,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue))}g.setRenderTarget(Me),g.setClearColor(D,H),Oe!==void 0&&(X.viewport=Oe),g.toneMapping=we}function eo(C,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ue=C.length;z<ue;z++){const _e=C[z],Me=_e.object,we=_e.geometry,Oe=X===null?_e.material:X,Ve=_e.group;Me.layers.test(j.layers)&&sh(Me,O,j,we,Oe,Ve)}}function sh(C,O,j,X,z,ue){C.onBeforeRender(g,O,j,X,z,ue),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.transparent===!0&&z.side===pi&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,g.renderBufferDirect(j,O,X,z,C,ue),z.side=rr,z.needsUpdate=!0,g.renderBufferDirect(j,O,X,z,C,ue),z.side=pi):g.renderBufferDirect(j,O,X,z,C,ue),C.onAfterRender(g,O,j,X,z,ue)}function to(C,O,j){O.isScene!==!0&&(O=ae);const X=Ce.get(C),z=m.state.lights,ue=m.state.shadowsArray,_e=z.state.version,Me=$.getParameters(C,z.state,ue,O,j),we=$.getProgramCacheKey(Me);let Oe=X.programs;X.environment=C.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(C.isMeshStandardMaterial?T:U).get(C.envMap||X.environment),X.envMapRotation=X.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",ke),Oe=new Map,X.programs=Oe);let Ve=Oe.get(we);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===_e)return oh(C,Me),Ve}else Me.uniforms=$.getUniforms(C),C.onBeforeCompile(Me,g),Ve=$.acquireProgram(Me,we),Oe.set(we,Ve),X.uniforms=Me.uniforms;const Ne=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ne.clippingPlanes=Ue.uniform),oh(C,Me),X.needsLights=S0(C),X.lightsStateVersion=_e,X.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function ah(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=ul.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function oh(C,O){const j=Ce.get(C);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function x0(C,O,j,X,z){O.isScene!==!0&&(O=ae),Pe.resetTextureUnits();const ue=O.fog,_e=X.isMeshStandardMaterial?O.environment:null,Me=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:lr,we=(X.isMeshStandardMaterial?T:U).get(X.envMap||_e),Oe=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!j.morphAttributes.position,et=!!j.morphAttributes.normal,yt=!!j.morphAttributes.color;let St=tr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=g.toneMapping);const dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tt=dn!==void 0?dn.length:0,be=Ce.get(X),Bt=m.state.lights;if(Y===!0&&(J===!0||C!==_)){const Mn=C===_&&X.id===w;Ue.setState(X,C,Mn)}let nt=!1;X.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Bt.state.version||be.outputColorSpace!==Me||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==we||X.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ue.numPlanes||be.numIntersection!==Ue.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==Ve||be.morphTargets!==Ne||be.morphNormals!==et||be.morphColors!==yt||be.toneMapping!==St||be.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,be.__version=X.version);let Dn=be.currentProgram;nt===!0&&(Dn=to(X,O,z));let Vr=!1,fn=!1,dc=!1;const At=Dn.getUniforms(),bi=be.uniforms;if(fe.useProgram(Dn.program)&&(Vr=!0,fn=!0,dc=!0),X.id!==w&&(w=X.id,fn=!0),Vr||_!==C){At.setValue(I,"projectionMatrix",C.projectionMatrix),At.setValue(I,"viewMatrix",C.matrixWorldInverse);const Mn=At.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,oe.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&At.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),_!==C&&(_=C,fn=!0,dc=!0)}if(z.isSkinnedMesh){At.setOptional(I,z,"bindMatrix"),At.setOptional(I,z,"bindMatrixInverse");const Mn=z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),At.setValue(I,"boneTexture",Mn.boneTexture,Pe))}z.isBatchedMesh&&(At.setOptional(I,z,"batchingTexture"),At.setValue(I,"batchingTexture",z._matricesTexture,Pe),At.setOptional(I,z,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",z._indirectTexture,Pe),At.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",z._colorsTexture,Pe));const fc=j.morphAttributes;if((fc.position!==void 0||fc.normal!==void 0||fc.color!==void 0)&&Fe.update(z,j,Dn),(fn||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,At.setValue(I,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(bi.envMap.value=we,bi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(bi.envMapIntensity.value=O.environmentIntensity),fn&&(At.setValue(I,"toneMappingExposure",g.toneMappingExposure),be.needsLights&&y0(bi,dc),ue&&X.fog===!0&&Ae.refreshFogUniforms(bi,ue),Ae.refreshMaterialUniforms(bi,X,B,G,m.state.transmissionRenderTarget[C.id]),ul.upload(I,ah(be),bi,Pe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ul.upload(I,ah(be),bi,Pe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&At.setValue(I,"center",z.center),At.setValue(I,"modelViewMatrix",z.modelViewMatrix),At.setValue(I,"normalMatrix",z.normalMatrix),At.setValue(I,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Mn=X.uniformsGroups;for(let hc=0,M0=Mn.length;hc<M0;hc++){const lh=Mn[hc];gt.update(lh,Dn),gt.bind(lh,Dn)}}return Dn}function y0(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function S0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,O,j){Ce.get(C.texture).__webglTexture=O,Ce.get(C.depthTexture).__webglTexture=j;const X=Ce.get(C);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const j=Ce.get(C);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,j=0){R=C,b=O,P=j;let X=!0,z=null,ue=!1,_e=!1;if(C){const we=Ce.get(C);we.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(I.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?Pe.setupRenderTarget(C):we.__hasExternalTextures&&Pe.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Ve=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?z=Ve[O][j]:z=Ve[O],ue=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?z=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[j]:z=Ve,S.copy(C.viewport),A.copy(C.scissor),L=C.scissorTest}else S.copy(Z).multiplyScalar(B).floor(),A.copy(ne).multiplyScalar(B).floor(),L=K;if(fe.bindFramebuffer(I.FRAMEBUFFER,z)&&X&&fe.drawBuffers(C,z),fe.viewport(S),fe.scissor(A),fe.setScissorTest(L),ue){const we=Ce.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,j)}else if(_e){const we=Ce.get(C.texture),Oe=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,j||0,Oe)}w=-1},this.readRenderTargetPixels=function(C,O,j,X,z,ue,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){fe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=C.texture,Oe=we.format,Ve=we.type;if(!Le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-X&&j>=0&&j<=C.height-z&&I.readPixels(O,j,X,z,He.convert(Oe),He.convert(Ve),ue)}finally{const we=R!==null?Ce.get(R).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,O,j,X,z,ue,_e){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){fe.bindFramebuffer(I.FRAMEBUFFER,Me);try{const we=C.texture,Oe=we.format,Ve=we.type;if(!Le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-X&&j>=0&&j<=C.height-z){const Ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(O,j,X,z,He.convert(Oe),He.convert(Ve),0),I.flush();const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await TS(I,et,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue)}finally{I.deleteBuffer(Ne),I.deleteSync(et)}return ue}}finally{const we=R!==null?Ce.get(R).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(C,O=null,j=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const X=Math.pow(2,-j),z=Math.floor(C.image.width*X),ue=Math.floor(C.image.height*X),_e=O!==null?O.x:0,Me=O!==null?O.y:0;Pe.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,_e,Me,z,ue),fe.unbindTexture()},this.copyTextureToTexture=function(C,O,j=null,X=null,z=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1],O=arguments[2],z=arguments[3]||0,j=null);let ue,_e,Me,we,Oe,Ve;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Me=j.min.x,we=j.min.y):(ue=C.image.width,_e=C.image.height,Me=0,we=0),X!==null?(Oe=X.x,Ve=X.y):(Oe=0,Ve=0);const Ne=He.convert(O.format),et=He.convert(O.type);Pe.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),tt=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),Bt=C.isCompressedTexture?C.mipmaps[z]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Me),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,Oe,Ve,ue,_e,Ne,et,Bt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,Oe,Ve,Bt.width,Bt.height,Ne,Bt.data):I.texSubImage2D(I.TEXTURE_2D,z,Oe,Ve,ue,_e,Ne,et,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),z===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,O,j=null,X=null,z=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,C=arguments[2],O=arguments[3],z=arguments[4]||0);let ue,_e,Me,we,Oe,Ve,Ne,et,yt;const St=C.isCompressedTexture?C.mipmaps[z]:C.image;j!==null?(ue=j.max.x-j.min.x,_e=j.max.y-j.min.y,Me=j.max.z-j.min.z,we=j.min.x,Oe=j.min.y,Ve=j.min.z):(ue=St.width,_e=St.height,Me=St.depth,we=0,Oe=0,Ve=0),X!==null?(Ne=X.x,et=X.y,yt=X.z):(Ne=0,et=0,yt=0);const dn=He.convert(O.format),tt=He.convert(O.type);let be;if(O.isData3DTexture)Pe.setTexture3D(O,0),be=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Pe.setTexture2DArray(O,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Bt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dn=I.getParameter(I.UNPACK_SKIP_PIXELS),Vr=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(be,z,Ne,et,yt,ue,_e,Me,dn,tt,St.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(be,z,Ne,et,yt,ue,_e,Me,dn,St.data):I.texSubImage3D(be,z,Ne,et,yt,ue,_e,Me,dn,tt,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),z===0&&O.generateMipmaps&&I.generateMipmap(be),fe.unbindTexture()},this.initRenderTarget=function(C){Ce.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){b=0,P=0,R=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Jf?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===oc?"display-p3":"srgb"}}class IT extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);const FT=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,kT=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uAgitation;
uniform float uFlare;
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
    fire *= (0.75 + uAgitation * 0.7) * (1.0 + uFlare * 1.4);
    hot *= (0.75 + uAgitation * 0.9) * (1.0 + uFlare * 1.8);
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
    vec3 rim = vec3(0.9, 0.12, 0.08) * fres * (0.35 + uAgitation * 0.25 + uFlare * 0.5);
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
`;function OT({agitation:t=.3,flare:e=0}){const n=Te.useRef(null),i=Te.useRef(null);return Te.useEffect(()=>{const r=n.current;if(!r)return;let s;try{s=new UT({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return}const a=()=>Math.min(r.clientWidth||340,480);s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setSize(a(),a()),r.appendChild(s.domElement);const o=new IT,l=new h0(-1,1,1,-1,0,1),c={uTime:{value:Math.random()*40},uAgitation:{value:t},uFlare:{value:0},uTilt:{value:new Qe(0,0)}};i.current=c;const u=new Ri({vertexShader:FT,fragmentShader:kT,uniforms:c,transparent:!0}),d=new ei(new Ja(2,2),u);o.add(d);const h=new Qe(0,0),p=g=>{const E=r.getBoundingClientRect();h.set(((g.clientX-E.left)/E.width-.5)*2,((g.clientY-E.top)/E.height-.5)*-2)},y=()=>h.set(0,0);window.addEventListener("pointermove",p,{passive:!0}),r.addEventListener("pointerleave",y);let M=null,m=performance.now();const f=g=>{const E=Math.min((g-m)/1e3,.05);m=g,c.uTime.value+=E,c.uFlare.value*=Math.pow(.25,E),c.uTilt.value.lerp(h,.04),s.render(o,l)};if(jn)f(performance.now());else{const g=E=>{f(E),M=requestAnimationFrame(g)};M=requestAnimationFrame(g)}const x=()=>{s.setSize(a(),a())};return window.addEventListener("resize",x),()=>{M&&cancelAnimationFrame(M),window.removeEventListener("pointermove",p),window.removeEventListener("resize",x),r.removeEventListener("pointerleave",y),r.removeChild(s.domElement),d.geometry.dispose(),u.dispose(),s.dispose()}},[]),Te.useEffect(()=>{i.current&&(i.current.uAgitation.value=t)},[t]),Te.useEffect(()=>{e&&i.current&&(i.current.uFlare.value=1)},[e]),v.jsx("div",{ref:n,className:"orb-gl",style:{position:"absolute",inset:0},"aria-hidden":"true"})}const xm=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];function BT({daily:t,replies:e,payments:n,m:i,calc:r}){const s=Wf(e,n),a=Te.useMemo(()=>kv(t,e,i,r,s.mtd),[t,e,i,r,s.mtd]),o=Math.min(it(s.mtd,r.goal),1),l=new Date,c=new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),u=l.getDate()/c,d=i.replyRate>0?i.replyRate:Xa,h=i.bookingRate>0?i.bookingRate:Ya,p=it(it(it(it(it(r.goal,r.aov),r.closeRate),r.showRate),h),d),y=it(it(p,r.capacity),r.sendDays/4.345),M=r.capacity>0?y<1?wn(y*7,0)+" days":y<9?wn(y,1)+" wks":wn(y/4.345,1)+" mo":"set capacity",m=Math.max(r.goal,a.p90,1),f=E=>Math.min(E/m,1)*100+"%",x=i.replies<10,g=!x&&i.bookingRate<pt.bookingRate[0];return v.jsxs(Et,{className:"card herostrip",children:[v.jsx("div",{className:"hs-ghost display","aria-hidden":"true",children:xm[l.getMonth()].slice(0,3)}),v.jsxs("div",{className:"hs-main",children:[v.jsxs("div",{className:"label",children:["Cash collected · ",xm[l.getMonth()].toLowerCase()]}),v.jsx("div",{className:"display hs-num",children:v.jsx(Pr,{value:s.mtd,format:lt})}),v.jsxs("div",{className:"beam",title:"the month, drawn to scale",children:[v.jsx("span",{className:"beam-fill",style:{width:f(s.mtd)}}),v.jsx("span",{className:"beam-goal",style:{left:f(r.goal)}}),v.jsx("span",{className:"beam-pace",style:{left:u*100+"%"},title:"where the month is"}),v.jsx("span",{className:"beam-band",style:{left:f(a.p10),width:"calc("+f(a.p90)+" - "+f(a.p10)+")"}}),v.jsx("span",{className:"beam-p50",style:{left:f(a.p50)}})]}),v.jsxs("div",{className:"beam-legend",children:[v.jsxs("span",{children:[v.jsx("i",{className:"bl-fill"}),"banked ",Ye(o,0)]}),v.jsxs("span",{children:[v.jsx("i",{className:"bl-band"}),"forecast P10-P90"]}),v.jsxs("span",{children:[v.jsx("i",{className:"bl-p50"}),"P50 ",vi(a.p50)]}),v.jsxs("span",{children:[v.jsx("i",{className:"bl-goal"}),"goal ",vi(r.goal)]}),v.jsxs("span",{children:[v.jsx("i",{className:"bl-pace"}),"month pace"]})]})]}),v.jsxs("div",{className:"hs-rail",children:[v.jsxs("div",{className:"hs-stat",children:[v.jsx("div",{className:"label",children:"Projected month end"}),v.jsx("div",{className:"display hs-sv",children:v.jsx(Pr,{value:a.p50,format:lt})}),v.jsxs("div",{className:"hdetail",children:[vi(a.p10)," to ",vi(a.p90),", 500 runs"]})]}),v.jsxs("div",{className:"hs-stat",children:[v.jsx("div",{className:"label",children:"Booking rate"}),v.jsx("div",{className:"display hs-sv"+(g?" bad":""),children:x?"--":Ye(i.bookingRate)}),v.jsx("div",{className:"hdetail",children:x?"needs 10 replies, at "+Re(i.replies):Re(i.booked)+" of "+Re(i.replies)+" replies · floor "+Ye(pt.bookingRate[0],0)})]}),v.jsxs("div",{className:"hs-stat",children:[v.jsx("div",{className:"label",children:"Time to goal"}),v.jsx("div",{className:"display hs-sv",children:M}),v.jsxs("div",{className:"hdetail",children:["at ",Re(r.capacity)," a day, live rates"]})]}),v.jsxs("div",{className:"hs-stat",children:[v.jsx("div",{className:"label",children:"All time"}),v.jsx("div",{className:"display hs-sv",children:v.jsx(Pr,{value:s.all,format:lt})}),v.jsxs("div",{className:"hdetail",children:[lt(i.dealValue)," signed",s.source==="payments"?" · payments tab":""]})]})]})]})}function zT({daily:t,replies:e,m:n}){const i=ly(t,e),r=Fv(t,e),s=Te.useMemo(()=>{const o=new Date,l=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Map(t.map(h=>[ut(h.date),h])),u=new Map;e.forEach(h=>{const p=ut(h.date);u.set(p,u.get(p)||{n:0,booked:0,cash:0});const y=u.get(p);y.n++,h.booked&&y.booked++,y.cash+=h.cash});const d={initials:[],followUps:[],comments:[],replies:[],booked:[],cash:[]};for(let h=13;h>=0;h--){const p=ut(new Date(l.getTime()-h*ot)),y=c.get(p),M=u.get(p);d.initials.push(y?y.initials:0),d.followUps.push(y?y.followUps:0),d.comments.push(y?y.comments:0),d.replies.push(M?M.n:0),d.booked.push(M?M.booked:0),d.cash.push(M?M.cash:0)}return d},[t,e]),a=o=>[["this wk",Re(o.cur)],["last wk",Re(o.prev)]];return v.jsxs("div",{className:"tiles",children:[v.jsx(Li,{label:"Initials",num:n.initials,format:Re,sub:Re(n.touches)+" total touches",delta:i.initials,spark:s.initials,tip:a(r.initials)}),v.jsx(Li,{label:"Follow ups",num:n.followUps,format:Re,sub:wn(it(n.followUps,n.initials))+" per initial",delta:i.followUps,spark:s.followUps,tip:a(r.followUps)}),v.jsx(Li,{label:"Comments",num:n.comments,format:Re,sub:Ye(n.commentCoverage,0)+" of initials",delta:i.comments,spark:s.comments,tip:a(r.comments)}),v.jsx(Li,{label:"Replies",num:n.replies,format:Re,sub:Ye(n.replyRate)+" reply rate",delta:i.replies,spark:s.replies,tip:a(r.replies)}),v.jsx(Li,{label:"Booked",num:n.booked,format:Re,sub:Ye(n.bookingRate)+" booking rate",delta:i.booked,spark:s.booked,tip:a(r.booked)}),v.jsx(Li,{label:"Shown",num:n.shown,format:Re,sub:Ye(n.showRate)+" show rate"}),v.jsx(Li,{label:"Closed",num:n.closed,format:Re,red:!0,sub:Ye(n.closeRate)+" close rate"+(n.avgDeal>0?" · "+lt(n.avgDeal)+" avg":"")}),v.jsx(Li,{label:"Cash",num:n.cash,format:lt,red:!0,sub:lt(n.outstanding)+" outstanding",delta:i.cash,spark:s.cash,tip:a(r.cash)})]})}function HT({daily:t,replies:e,leads:n,m:i,calc:r,flare:s}){const a=sy(t,e,r.capacity),o=ay(t,e,r.capacity,i),l=oy(t,e,n,i,r),[c,u]=Te.useState("alerts"),[d,h]=Te.useState(null),[p,y]=Te.useState(0),[M,m]=Te.useState(null),[f,x]=Te.useState(null),[g,E]=Te.useState(null),[b,P]=Te.useState(!1),R=Wc("overseer"),w=Wc("memo"),_=Wc("brief"),S=o.findings.filter(N=>N.sev==="r").length+a.filter(N=>N.zone==="r").length,A=o.findings.filter(N=>N.sev==="a").length+a.filter(N=>N.zone==="a").length,L=S>0?1:A>0?.55:.15,D={g:"OK",a:"WARN",r:"FAIL",n:"NULL"},H=l.length?l[0].value:1,W=l[0],G=(N,F)=>v.jsx("button",{className:"btn"+(c===N?" active":""),onClick:()=>u(N),children:F},N),B=(N,F,Z,ne)=>(N||[]).map((K,xe)=>v.jsxs("div",{className:"dir",onClick:()=>Z(F===xe?null:xe),children:[v.jsxs("div",{className:"dir-title",children:[v.jsxs("span",{className:"dnum",children:[ne," ",String(xe+1).padStart(2,"0")]})," // ",K.title.toUpperCase()]}),F===xe&&v.jsx("div",{className:"dir-body",children:K.text})]},xe));return v.jsxs(Et,{className:"pal",children:[v.jsxs("div",{className:"pal-head",children:[v.jsx("h2",{className:"sec",style:{margin:0},children:"Palantir"}),v.jsxs("span",{className:"sysdots",children:[v.jsx("span",{className:"label",children:"sys"}),a.map((N,F)=>v.jsx("button",{className:"sysdot "+N.zone,title:N.name,onClick:()=>h(d===F?null:F),"aria-label":N.name},F))]}),v.jsx("span",{className:"label",children:"cash collected basis"})]}),d!==null&&v.jsxs("div",{className:"dot-detail",children:[a[d].name.toUpperCase()," [",D[a[d].zone],"] · ",a[d].detail]}),v.jsxs("div",{className:"pal-grid",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"orb-stage speakable",onClick:()=>P(N=>!N),title:"tap the stone",role:"button","aria-label":"ask the stone",children:[v.jsx(OT,{agitation:L,flare:s}),b?v.jsx("div",{className:"orb-speak",children:v.jsx(jc,{text:o.findings.length?o.findings[0].title+". "+o.findings[0].lever:R?R.headline:"All quiet in the glass. Push volume, keep the ladder full."})},String(b)):W&&v.jsxs("div",{className:"orb-text",children:[v.jsx("div",{className:"display ov",children:vi(W.value)}),v.jsx("div",{className:"ol",children:W.per==="mo"?"per month · top lever":"one time · top lever"}),v.jsx("div",{className:"on",children:W.name})]})]}),v.jsx("div",{className:"lbars",children:l.map((N,F)=>v.jsxs("div",{className:"lbar",onClick:()=>E(g===F?null:F),children:[v.jsxs("div",{className:"lbar-top",children:[v.jsx("span",{className:"lever-rank",children:String(F+1).padStart(2,"0")}),v.jsx("span",{className:"lbar-name",children:N.name}),v.jsxs("span",{className:"lbar-val display",children:[vi(N.value),v.jsxs("span",{className:"lever-per",children:[" ",N.per==="mo"?"/mo":"1x"]})]})]}),v.jsx("div",{className:"lbar-track",children:v.jsx("span",{className:"lbar-fill",style:{width:Math.max(N.value/H*100,4)+"%",boxShadow:F===0?"0 0 10px rgba(225,20,20,0.55)":"none"}})}),g===F&&v.jsxs("div",{className:"lbar-detail",children:[N.detail," · basis: ",N.basis]})]},F))}),v.jsx("div",{className:"note",children:"Levers priced independently; they overlap and never sum. Baselines assumed until measured. Tap a lever for detail."})]}),v.jsxs("div",{className:"console",children:[v.jsxs("div",{className:"ptabs",children:[G("alerts","Alerts"+(o.findings.length?" · "+o.findings.length:"")),G("daily","Daily"),G("brief","Brief"),G("log","Log")]}),c==="alerts"&&v.jsxs("div",{children:[o.findings.length===0&&v.jsx("div",{className:"brief-head",children:"No active alerts. Push volume, keep the ladder full."}),o.findings.map((N,F)=>v.jsxs("div",{className:"alert-line",children:[v.jsxs("div",{className:"alert-head",onClick:()=>y(p===F?null:F),children:[v.jsxs("span",{className:N.sev==="r"?"sevr":"seva",children:[">> ALERT ",String(F+1).padStart(2,"0")]}),v.jsx("span",{children:N.title.toUpperCase()}),v.jsx("span",{style:{marginLeft:"auto",color:"#7A7A7A"},children:p===F?"−":"+"})]}),p===F&&v.jsxs("div",{className:"alert-body",children:[N.evidence,v.jsxs("div",{className:"diag-lever",children:[v.jsx("span",{children:"Lever"})," ",N.lever]})]})]},F)),o.waiting.length>0&&v.jsxs("div",{className:"note",children:["On mute until the sample can carry it: ",o.waiting.join("; "),"."]})]}),c==="daily"&&(_?v.jsxs("div",{children:[v.jsxs("div",{className:"label",style:{marginBottom:9},children:["Daily brief · ",_.date]}),v.jsx("div",{className:"brief-head",children:v.jsx(jc,{text:_.headline})}),B(_.sections,M,m,"NOTE")]}):v.jsx("div",{className:"note",children:"The daily brief lands here every weekday morning."})),c==="brief"&&(R?v.jsxs("div",{children:[v.jsxs("div",{className:"label",style:{marginBottom:9},children:["Palantir brief · ",R.date]}),v.jsx("div",{className:"brief-head",children:v.jsx(jc,{text:R.headline})}),B(R.sections,M,m,"DIRECTIVE")]}):v.jsx("div",{className:"note",children:"No brief published yet."})),c==="log"&&(w?v.jsxs("div",{children:[v.jsxs("div",{className:"label",style:{marginBottom:9},children:["Weekly memo · ",w.week]}),v.jsx("div",{className:"brief-head",children:w.headline}),B(w.sections,f,x,"ENTRY"),(w.archive||[]).map((N,F)=>v.jsxs("div",{className:"dir",onClick:()=>x(f==="a"+F?null:"a"+F),children:[v.jsxs("div",{className:"dir-title",children:[v.jsx("span",{className:"dnum",children:"ARCHIVE"})," // ",String(N.week||N.date||"").toUpperCase()]}),f==="a"+F&&v.jsx("div",{className:"dir-body",children:N.headline})]},"a"+F))]}):v.jsx("div",{className:"note",children:"No memo published yet."}))]})]})]})}function VT({daily:t,replies:e,leads:n,payments:i,m:r,calc:s,flare:a}){return v.jsxs("div",{children:[v.jsx(BT,{daily:t,replies:e,payments:i,m:r,calc:s}),v.jsx(zT,{daily:t,replies:e,m:r}),v.jsx(HT,{daily:t,replies:e,leads:n,m:r,calc:s,flare:a})]})}const xa={red:"#E11414",bone:"#F4F2ED"},Yd=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function GT({m:t}){const e=Sa.useRef(null),n=[{label:"INITIALS",value:t.initials},{label:"REPLIES",value:t.replies,rate:t.replyRate},{label:"BOOKED",value:t.booked,rate:t.bookingRate},{label:"SHOWN",value:t.shown,rate:t.showRate},{label:"CLOSED",value:t.closed,rate:t.closeRate}];return Sa.useEffect(()=>{const i=e.current;if(!i)return;const r=760,s=350,a=Math.min(window.devicePixelRatio||1,2);i.width=r*a,i.height=s*a;const o=i.getContext("2d");o.scale(a,a);const l=n.length,c=84,u=46,d=152,h=104,p=n.map((A,L)=>c+L*(r-c-u)/(l-1)),y=Math.max(n[0].value,1),M=n.map(A=>Math.max(Math.sqrt(A.value/y)*h,4)),m=n.slice(1).map((A,L)=>n[L].value>0?A.value/n[L].value:0),f=A=>{if(A<=p[0])return M[0];if(A>=p[l-1])return M[l-1];let L=0;for(;A>p[L+1];)L++;const D=(A-p[L])/(p[L+1]-p[L]),H=D*D*(3-2*D);return M[L]+(M[L+1]-M[L])*H},x=(A,L)=>{let D=A*374761393+L*668265263;return D=(D^D>>13)*1274126177,((D^D>>16)>>>0)/4294967295},g=120,E=Array.from({length:g},(A,L)=>({i:L,x:c+x(L,99)*(r-c-u),u:x(L,7)*2-1,v:.55+x(L,13)*.75,deadAt:-1,fall:0})),b=A=>{for(let L=0;L<m.length;L++)if(x(A.i,L*31+3)>m[L])return L;return-1};E.forEach(A=>{A.b=b(A)});const P=()=>{for(let D=0;D<m.length;D++){if(1-m[D]<=.02)continue;const W=p[D+1],G=Math.max((M[D]-M[D+1])*1,2),B=o.createLinearGradient(W,d,W+30,s);B.addColorStop(0,"rgba(58,58,58,0.5)"),B.addColorStop(1,"rgba(58,58,58,0)"),o.fillStyle=B,o.beginPath(),o.moveTo(W-G*.4,d+f(W-G*.4)-1),o.bezierCurveTo(W+8,d+M[D]+26,W+18,s-26,W+22,s-6),o.lineTo(W+40+G,s-6),o.bezierCurveTo(W+30+G,s-40,W+G*.8+10,d+M[D]+10,W+G*.6,d+f(W+G*.6)-1),o.closePath(),o.fill()}const A=o.createLinearGradient(c,0,r-u,0);A.addColorStop(0,"#2E2E2E"),A.addColorStop(.72,"#3A2426"),A.addColorStop(1,"#7E0C0C"),o.fillStyle=A,o.beginPath(),o.moveTo(p[0],d-M[0]);for(let D=p[0];D<=p[l-1];D+=6)o.lineTo(D,d-f(D));o.lineTo(p[l-1],d-M[l-1]),o.lineTo(p[l-1]+26,d-M[l-1]*.55),o.lineTo(p[l-1]+26,d+M[l-1]*.55),o.lineTo(p[l-1],d+M[l-1]);for(let D=p[l-1];D>=p[0];D-=6)o.lineTo(D,d+f(D));o.closePath(),o.fill();const L=o.createRadialGradient(p[l-1]+8,d,2,p[l-1]+8,d,60);L.addColorStop(0,"rgba(225,20,20,0.35)"),L.addColorStop(1,"rgba(225,20,20,0)"),o.fillStyle=L,o.beginPath(),o.arc(p[l-1]+8,d,60,0,Math.PI*2),o.fill()},R=()=>{o.textAlign="center",n.forEach((A,L)=>{if(o.fillStyle="#7A7A7A",o.font="10px 'Space Mono', monospace",o.fillText(A.label,p[L],d-M[L]-(L===0?30:14)-(L%2===1?14:0)),o.fillStyle=L===l-1?"#E11414":"#F4F2ED",o.font="17px 'Archivo Black', sans-serif",o.fillText(Re(A.value),p[L],d+M[L]+26+(L%2===1?12:0)),A.rate!==void 0&&(o.fillStyle="#B9B7B2",o.font="10px 'Space Mono', monospace",o.fillText(Ye(A.rate),(p[L]+p[L-1])/2,d-Math.max(f((p[L]+p[L-1])/2),10)-10)),L>0){const D=n[L-1].value-A.value;D>0&&(o.fillStyle="#4A4A4A",o.font="9px 'Space Mono', monospace",o.fillText("-"+Re(D),p[L]+30,s-12))}})};let w=null;const _=()=>{o.clearRect(0,0,r,s),P();for(const A of E){A.x+=A.v*(Yd?0:1.1);const L=A.b>=0?p[A.b+1]:1/0;let D,H=.75;if(A.x>L)A.fall+=.045,D=d+f(L)*A.u*.8+(A.x-L)*(.9+A.fall),H=Math.max(.55-(A.x-L)/90,0),o.fillStyle="rgba(122,122,122,"+H.toFixed(2)+")";else{D=d+f(A.x)*A.u*.8;const W=(A.x-c)/(r-c-u);o.fillStyle="rgba("+(W>.7?"255,90,60":"200,160,150")+","+H.toFixed(2)+")"}(A.x>r-u+24||D>s||H<=0)&&(A.x=c,A.u=Math.random()*2-1,A.fall=0,A.i=(A.i+g)%1e5,A.b=b(A)),o.beginPath(),o.arc(A.x,D,1.4,0,Math.PI*2),o.fill()}R()},S=()=>{if(Yd){_();return}const A=()=>{_(),w=requestAnimationFrame(A)};A()};return document.fonts&&document.fonts.ready?document.fonts.ready.then(S):S(),()=>{w&&cancelAnimationFrame(w)}},[t.initials,t.replies,t.booked,t.shown,t.closed]),v.jsxs("div",{children:[v.jsx("canvas",{ref:e,style:{width:"100%",display:"block"},"aria-label":"funnel flow"}),v.jsx("div",{className:"note",children:"Every dot is volume moving through the funnel; the gray fallout at each boundary is the drop-off, drawn to scale on a square root height. Counts and rates are exact."})]})}function jo({label:t,value:e,floor:n,strong:i,sample:r,sampleNeed:s,sampleUnit:a}){const l=2*Math.PI*40,c=r<s,u=Math.max(.005,Math.min(e/i,1)),d=Math.min(n/i,1)*360,h=c?"#3A3A3A":e>=n?xa.red:"#C9A227",[p,y]=Sa.useState(Yd);return Sa.useEffect(()=>{const M=requestAnimationFrame(()=>y(!0));return()=>cancelAnimationFrame(M)},[]),v.jsxs("div",{className:"gauge",children:[v.jsxs("svg",{viewBox:"0 0 100 100",children:[v.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:"#1E1E1E",strokeWidth:"8"}),v.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:h,strokeWidth:"8",strokeDasharray:(p?u:.005)*l+" "+l,strokeLinecap:"round",style:{transition:"stroke-dasharray 1.1s cubic-bezier(0.22,1,0.36,1)"},transform:"rotate(-90 50 50)"}),v.jsx("line",{x1:"50",y1:"4",x2:"50",y2:"13",stroke:xa.bone,strokeWidth:"2",transform:"rotate("+d+" 50 50)",opacity:"0.75"}),v.jsx("text",{x:"50",y:"49",textAnchor:"middle",fill:xa.bone,fontFamily:"'Archivo Black', sans-serif",fontSize:"16",children:c?"--":Ye(e,1)}),v.jsx("text",{x:"50",y:"63",textAnchor:"middle",fill:"#7A7A7A",fontFamily:"'Space Mono', monospace",fontSize:"7",letterSpacing:"1",children:c?"LOW SAMPLE":"FLOOR "+Ye(n,0)})]}),v.jsx("div",{className:"label",style:{textAlign:"center",marginTop:7},children:t}),v.jsxs("div",{className:"gauge-sub",children:[Re(r)," ",a]})]})}function WT({replies:t}){const[e,n]=Sa.useState("all"),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=p=>Math.max(0,Math.round((r-p.date)/ot)),a=p=>p.dead?"dead":p.closed?"won":p.booked||p.showed||["talking","waiting"].includes(p.status.toLowerCase())?"working":s(p)>7?"stale":"live",o=[...t].sort((p,y)=>y.date-p.date),l={live:[],stale:[],working:[],won:[],dead:[]};o.forEach(p=>l[a(p)].push(p));const c=[["live","Live, work these now"],["stale","Stale, rescue or kill"],["working","In play"],["won","Won"],["dead","Dead"]],u=[["all","All"],...c.map(([p])=>[p,p])],d=({r:p})=>{const y=a(p),M=s(p),m=y==="live"&&M<=1,f=Ba(p),x=[!0,p.booked,p.showed,p.closed];return v.jsxs("div",{className:"pl-row"+(p.dead?" is-dead":"")+(m?" is-fresh":""),children:[v.jsx("span",{className:"pl-mono "+y,children:(f.replace(/^@/,"")[0]||"?").toUpperCase()}),v.jsxs("span",{className:"pl-name",title:p.handle,children:[f,v.jsxs("span",{className:"pl-sub",children:[ln(p.date),p.timeReplied?" · "+p.timeReplied:"",p.account?" · "+p.account.toLowerCase():"",p.dead&&p.deadReason?" · "+p.deadReason.toLowerCase():"",p.callDate&&!p.showed&&!p.closed&&!p.dead?" · call "+ln(p.callDate):""]})]}),p.closed&&p.cash>0?v.jsxs("span",{className:"pipe-money",children:[lt(p.cash),p.dealValue>p.cash?" of "+lt(p.dealValue):""]}):!p.dead&&!p.closed?v.jsxs("span",{className:"age"+(y==="stale"?" stale":M>=2?" aging":""),children:[M,"d"]}):v.jsx("span",{}),v.jsx("span",{className:"pl-dots",title:"replied / booked / shown / closed",children:x.map((g,E)=>v.jsx("i",{className:"sd"+(g?" on":"")+(p.dead?" x":"")},E))})]})},h=e==="all"?null:l[e];return v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:8},children:[v.jsx("h2",{className:"sec",style:{margin:0},children:"Pipeline"}),v.jsx("div",{className:"ptabs",style:{margin:0},children:u.map(([p,y])=>v.jsxs("button",{className:"btn sm"+(e===p?" active":""),onClick:()=>n(p),children:[y,p!=="all"&&l[p].length?" "+l[p].length:""]},p))})]}),o.length===0&&v.jsx("div",{className:"note",children:"No replies in this window yet."}),v.jsx("div",{className:"pipe-scroll",children:h?h.map((p,y)=>v.jsx(d,{r:p},y)):c.map(([p,y])=>l[p].length>0&&v.jsxs("div",{children:[v.jsxs("div",{className:"pl-group pg-"+p,children:[v.jsx("span",{children:y}),v.jsx("b",{children:l[p].length})]}),l[p].map((M,m)=>v.jsx(d,{r:M},m))]},p))})]})}function jT({replies:t}){const e=t.map(s=>dy(s.timeReplied)).filter(s=>s!==null);if(!e.length)return null;const n=Vc.map(s=>e.filter(s.test).length),i=n.indexOf(Math.max(...n)),r=Math.max(...Array.from({length:24},(s,a)=>e.filter(o=>Math.floor(o)===a).length),1);return v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Reply Windows, Irish time"}),v.jsxs("div",{className:"rw-stats",children:[v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Best window so far"}),v.jsx("div",{className:"display rw-big",style:{color:xa.red},children:Vc[i].range.replace(" to "," - ")}),v.jsx("div",{className:"hdetail",children:Vc[i].label.toLowerCase()})]}),v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Average reply time"}),v.jsx("div",{className:"display rw-big",children:fy(e)}),v.jsxs("div",{className:"hdetail",children:["across ",e.length," timed replies"]})]})]}),v.jsx("div",{className:"hm-row",children:Array.from({length:24},(s,a)=>{const o=e.filter(l=>Math.floor(l)===a).length;return v.jsx("span",{className:"hm-cell",title:String(a).padStart(2,"0")+":00, "+o+(o===1?" reply":" replies"),style:{background:o>0?"rgba(225,20,20,"+(.18+.82*(o/r)).toFixed(2)+")":"#1E1E1E"}},a)})}),v.jsxs("div",{className:"hm-labels",children:[v.jsx("span",{children:"00"}),v.jsx("span",{children:"06"}),v.jsx("span",{children:"12"}),v.jsx("span",{children:"18"}),v.jsx("span",{children:"23"})]}),v.jsxs("div",{className:"note",children:["Times on ",e.length," of ",t.length," replies.",e.length<30&&" Directional only until 30 plus. The reply window is when Tier 1 conversations should be worked live."]})]})}function XT({daily:t,leads:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=(u,d,h)=>v.jsxs("div",{children:[v.jsx("div",{className:"label",children:u}),v.jsx("div",{className:"display sv",style:h?{color:xa.red}:null,children:Re(d)})]}),s=e.filter(u=>u.nextDue&&u.status.toLowerCase()!=="replied");if(s.length>0){const u=s.filter(M=>M.nextDue<i).length,d=s.filter(M=>ut(M.nextDue)===ut(i)).length,h=s.filter(M=>ut(M.nextDue)===ut(new Date(i.getTime()+ot))).length,p=s.filter(M=>M.nextDue<=i&&/^touch/i.test(M.nextTouch)).length,y=s.filter(M=>M.nextDue<=i&&!/^touch/i.test(M.nextTouch)).length;return v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Follow Up Queue, live from the lead sheet"}),v.jsxs("div",{className:"streaks",children:[r("Overdue",u,u>0),r("Due today",d),r("Due tomorrow",h)]}),v.jsxs("div",{className:"note",children:["Of everything due or overdue right now: ",Re(p)," ladder touches, ",Re(y)," evergreen follow ups, across ",Re(s.length)," open leads.",u>0&&" Red rows in the lead sheet are stacking up, work them to zero per the SOP."]})]})}const a=new Date(i.getTime()+ot);let o=0,l=0;for(const u of t){const d=Math.round((a-u.date)/ot);d>=1&&d<=3?o+=u.initials:d>=8&&d<=28?l+=u.initials/3:d>=29&&d<=90?l+=u.initials/7:d>=91&&(l+=u.initials/30)}const c=o+l;return v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Tomorrow's Load, SOP estimate"}),v.jsxs("div",{className:"streaks",children:[r("Ladder messages",o),r("Evergreen touches",l),r("Total owed",c,c>450)]}),v.jsxs("div",{className:"note",children:["Estimated from the daily log cohorts and the SOP cadence. Connects to the lead scheduler sheet automatically when it is reachable.",c>450&&" This load is beyond one setter's day, Tier 3 slips first per the Follow Up SOP."]})]})}function YT({replies:t}){const e=hy(t),n=py(t),i=my(t),r=gy(t);return!e&&!n.length&&!i.total&&!r?null:v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Velocity + Outcomes"}),v.jsxs("div",{className:"streaks",children:[v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Reply to booked"}),v.jsx("div",{className:"display sv",children:e?e.median+"d":"--"}),v.jsx("div",{className:"hdetail",children:e?"median, "+e.n+" booked with dates":"needs Date Booked entries"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Booked inside 24h"}),v.jsx("div",{className:"display sv",children:e?Ye(e.within24h,0):"--"}),v.jsx("div",{className:"hdetail",children:"speed to lead doctrine"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Lost leads"}),v.jsx("div",{className:"display sv",children:i.total}),v.jsx("div",{className:"hdetail",children:i.reasons.length?i.reasons.map(([s,a])=>s.toLowerCase()+" "+a).join(" · "):"none marked dead yet"})]})]}),n.length>0&&v.jsxs("div",{style:{marginTop:14},children:[v.jsx("div",{className:"label",style:{marginBottom:6},children:"Calls on the books"}),n.map((s,a)=>v.jsxs("div",{className:"ev",children:[v.jsx("span",{className:"ev-date",children:ln(s.callDate)}),v.jsx("span",{className:"ev-label",children:Ba(s)}),s.account&&v.jsx("span",{className:"ev-who",children:s.account})]},a))]}),r&&v.jsxs("div",{className:"note",children:["Replies by account: ",r.accounts.map(([s,a])=>s+" "+a).join(" · "),r.tagged<r.total&&" · "+(r.total-r.tagged)+" untagged"]})]})}function qT({daily:t,replies:e,leads:n,m:i}){return v.jsxs("div",{className:"grid",children:[v.jsxs("div",{className:"two-col",children:[v.jsxs(Et,{className:"card",children:[v.jsx("h2",{className:"sec",children:"Funnel, all time"}),v.jsx(GT,{m:i})]}),v.jsxs("div",{className:"grid",children:[v.jsx(Et,{delay:60,children:v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Stage Rates vs floors"}),v.jsxs("div",{className:"gauges",children:[v.jsx(jo,{label:"Reply",value:i.replyRate,floor:pt.replyRate[0],strong:pt.replyRate[1],sample:i.initials,sampleNeed:150,sampleUnit:"sends"}),v.jsx(jo,{label:"Booking",value:i.bookingRate,floor:pt.bookingRate[0],strong:pt.bookingRate[1],sample:i.replies,sampleNeed:10,sampleUnit:"replies"}),v.jsx(jo,{label:"Show",value:i.showRate,floor:pt.showRate[0],strong:pt.showRate[1],sample:i.booked,sampleNeed:5,sampleUnit:"booked"}),v.jsx(jo,{label:"Close",value:i.closeRate,floor:pt.closeRate[0],strong:pt.closeRate[1],sample:i.shown,sampleNeed:5,sampleUnit:"shows"})]})]})}),v.jsx(Et,{delay:120,children:v.jsx(YT,{replies:e})}),v.jsx(Et,{delay:180,children:v.jsx(XT,{daily:t,leads:n})})]})]}),v.jsxs("div",{className:"two-col",children:[v.jsx(Et,{children:v.jsx(WT,{replies:e})}),v.jsx(Et,{delay:60,children:v.jsx(jT,{replies:e})})]})]})}const Oi={red:"#E11414",bone:"#F4F2ED"};function $T({daily:t,replies:e,payments:n,m:i,calc:r}){const s=Te.useMemo(()=>{const S=new Date,A=new Date(S.getFullYear(),S.getMonth(),1),L=new Date(S.getFullYear(),S.getMonth()+1,0),D=new Date(S.getFullYear(),S.getMonth(),S.getDate()),H=Wf(e,n),W=H.source==="payments",G=[];let B=0;for(let F=A.getTime();F<=D.getTime();F+=ot){const Z=new Date(F),ne=W?n.filter(K=>K.date.getTime()===Z.getTime()).reduce((K,xe)=>K+xe.amount,0):e.filter(K=>K.date.getTime()===Z.getTime()).reduce((K,xe)=>K+xe.cash,0);B+=ne,G.push({x:Z,y:B})}const N=kv(t,e,i,r,H.mtd);return{days:G,bands:N,monthEnd:L,today:D,goal:r.goal}},[t,e,n,i,r]),{days:a,bands:o,monthEnd:l,today:c,goal:u}=s,d=720,h=260,p=52,y=14,M=14,m=26,f=a.length?a[0].x.getTime():c.getTime(),x=l.getTime(),g=Math.max(u,o.p90,1)*1.08,E=S=>p+(S-f)/Math.max(x-f,1)*(d-p-y),b=S=>M+(1-S/g)*(h-M-m),P=a.map(S=>E(S.x.getTime()).toFixed(1)+","+b(S.y).toFixed(1)).join(" "),R=E(c.getTime()),w=b(o.cashMTD),_=[R+","+w,E(x)+","+b(o.p90),E(x)+","+b(o.p10)].join(" ");return v.jsxs("svg",{viewBox:"0 0 "+d+" "+h,className:"chart-svg",children:[[.25,.5,.75,1].map(S=>v.jsxs("g",{children:[v.jsx("line",{x1:p,x2:d-y,y1:b(g*S),y2:b(g*S),stroke:"#1B1B1B"}),v.jsx("text",{x:p-7,y:b(g*S)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:vi(g*S)})]},S)),v.jsx("line",{x1:p,x2:d-y,y1:b(u),y2:b(u),stroke:Oi.bone,strokeDasharray:"5 5",opacity:"0.45"}),v.jsxs("text",{x:d-y,y:b(u)-5,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,opacity:"0.7",children:["GOAL ",vi(u)]}),v.jsx("polygon",{points:_,fill:Oi.red,opacity:"0.10"}),v.jsx("line",{x1:R,y1:w,x2:E(x),y2:b(o.p50),stroke:Oi.red,strokeDasharray:"4 5",strokeWidth:"1.5",opacity:"0.8"}),a.length>1&&v.jsx("polyline",{points:P,fill:"none",stroke:Oi.red,strokeWidth:"2.4",strokeLinejoin:"round",pathLength:"1",className:"drawline"}),v.jsx("circle",{cx:R,cy:w,r:"3.5",fill:Oi.red}),v.jsxs("text",{x:R+6,y:w-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,children:[vi(o.cashMTD)," today"]}),v.jsx("text",{x:p,y:h-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:ln(new Date(f))}),v.jsx("text",{x:d-y,y:h-8,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:ln(l)})]})}function KT({replies:t}){const e=t.filter(n=>n.closed).sort((n,i)=>i.date-n.date);return e.length?v.jsx("div",{className:"deal-cards",children:e.map((n,i)=>{const r=n.dealValue||n.cash,s=it(n.cash,r),a=Ba(n);return v.jsxs("div",{className:"deal-card",children:[v.jsxs("div",{className:"dc-top",children:[v.jsx("span",{className:"pl-mono won",children:(a.replace(/^@/,"")[0]||"?").toUpperCase()}),v.jsx("span",{className:"dc-name",title:n.handle,children:a}),n.paymentPlan&&v.jsx("span",{className:"chip",children:"plan"})]}),v.jsxs("div",{className:"dc-amount display",children:[lt(n.cash),v.jsxs("span",{className:"dc-of",children:[" of ",lt(r)]})]}),v.jsx("div",{className:"lbar-track",children:v.jsx("span",{className:"lbar-fill",style:{width:Math.max(s*100,2)+"%"}})}),v.jsxs("div",{className:"dc-foot",children:[v.jsxs("span",{children:[Ye(s,0)," collected"]}),v.jsx("span",{children:n.dateClosed?ln(n.dateClosed):ln(n.date)})]})]},i)})}):v.jsx("div",{className:"note",children:"Closed deals land here as receipts, collected vs signed filling in per deal."})}function Xo(t){return/rev\s?-?share|backend/i.test(t.notes||"")}function ZT({payments:t}){if(!t.length)return v.jsx("div",{className:"note",children:'The Payments tab is live. One row per payment the day it lands; the waterfall, the monthly numbers and the backend split all read from it. Tag backend money with "rev share" in the Notes column.'});const e=t.reduce((s,a)=>s+a.amount,0),n=t.filter(s=>!Xo(s)).reduce((s,a)=>s+a.amount,0),i=e-n,r=[...t].sort((s,a)=>s.date-a.date);return v.jsxs("div",{style:{marginTop:14},children:[v.jsx("div",{className:"label",style:{marginBottom:8},children:"Payment waterfall"}),v.jsx("div",{className:"wf",children:r.map((s,a)=>v.jsx("span",{className:"wf-seg"+(Xo(s)?" rev":""),style:{width:Math.max(s.amount/e*100,1.5)+"%"},title:ln(s.date)+": "+lt(s.amount)+(s.handle?" · "+s.handle:"")+(Xo(s)?" · rev share":"")},a))}),v.jsxs("div",{className:"wf-legend",children:[v.jsxs("span",{children:[v.jsx("i",{className:"wl-up"}),"upfront ",lt(n)]}),v.jsxs("span",{children:[v.jsx("i",{className:"wl-rev"}),"backend rev share ",lt(i)]}),v.jsxs("span",{style:{marginLeft:"auto"},children:[r.length," payments · ",lt(e)]})]}),v.jsx("div",{style:{marginTop:12},children:[...t].sort((s,a)=>a.date-s.date).slice(0,10).map((s,a)=>v.jsxs("div",{className:"ev",children:[v.jsx("span",{className:"ev-date",children:ln(s.date)}),v.jsxs("span",{className:"ev-label",children:[s.handle||s.notes||"payment",Xo(s)?" · rev share":""]}),v.jsx("span",{className:"pipe-money",style:{marginLeft:"auto"},children:lt(s.amount)})]},a))})]})}function QT({calc:t,setCalc:e,m:n}){const[i,r]=Te.useState(!1),{goal:s,deal:a,aov:o,showRate:l,closeRate:c,capacity:u,sendDays:d}=t,h=A=>L=>e({...t,[A]:L}),p=n.replyRate>0?n.replyRate:Xa,y=n.bookingRate>0?n.bookingRate:Ya,M=it(s,o),m=it(M,c),f=it(m,l),x=it(f,y),g=it(x,p),E=it(g,u),b=it(E,d/4.345),P=u>0?b<1?wn(E,0)+" days":b<9?wn(b,1)+" weeks":wn(b/4.345,1)+" months":null,R=u*d*p*y*l*c*o,w=(A,L,D,H,W)=>v.jsxs("div",{className:"field",children:[v.jsx("label",{className:"label",children:A}),v.jsx("input",{type:"number",min:"0",step:H,value:L,onChange:G=>D(Math.max(0,br(G.target.value)))}),W&&v.jsx("div",{className:"hint",children:W})]}),_=(A,L,D,H,W,G,B)=>v.jsxs("div",{className:"field",children:[v.jsxs("label",{className:"label",children:[A," ",v.jsx(Ty,{kind:"manual",children:"Manual"}),v.jsx("span",{className:"rate-val",style:{float:"right"},children:Ye(L)})]}),v.jsx("input",{type:"range",min:H,max:W,step:G,value:L,onChange:N=>D(parseFloat(N.target.value))}),B]}),S=(A,L,D)=>v.jsxs("div",{className:"chain-row",children:[v.jsxs("div",{children:[v.jsx("div",{className:"mono cr-label",children:A}),D&&v.jsx("div",{className:"cr-note",children:D})]}),v.jsx("div",{className:"display cr-val",children:L})]});return v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10},children:[v.jsx("h2",{className:"sec",style:{margin:0},children:"Planning Console"}),v.jsxs("span",{style:{display:"flex",gap:16,alignItems:"baseline",flexWrap:"wrap"},children:[v.jsxs("span",{className:"label",children:["goal ",v.jsx("b",{className:"display",style:{color:Oi.red,fontSize:16},children:lt(s)})]}),v.jsxs("span",{className:"label",children:["time to goal ",v.jsx("b",{className:"display",style:{color:"#F4F2ED",fontSize:16},children:P||"--"})]}),v.jsx("button",{className:"btn",onClick:()=>r(!i),children:i?"[ Close ]":"[ Adjust ]"})]})]}),i&&v.jsxs("div",{className:"calc-grid",style:{marginTop:16},children:[v.jsxs("div",{children:[w("Monthly cash goal (€)",s,h("goal"),1e3),w("Cash per close (€)",o,h("aov"),500,"What a client pays up front. Most deals are payment plans; the backend is tracked separately."),w("Deal value (€)",a,h("deal"),1e3,"Full contract for the signed-revenue view."),w("Capacity, initials a day",u,h("capacity"),5,"One warmed account sends about 100 a day before block risk."),w("Send days a month",d,h("sendDays"),1),_("Show rate",l,h("showRate"),.3,1,.005),_("Close rate",c,h("closeRate"),.05,.5,.005)]}),v.jsxs("div",{children:[S("Clients needed",wn(M,1),"goal / cash per close"),S("Contract revenue",lt(M*a),"at full deal value"),S("Shows needed",wn(m,1)),S("Calls to book",wn(f,1)),S("Replies needed",wn(x,0),Ye(y)+" booking"+(n.bookingRate>0?", live":", assumed")),S("Initials needed",wn(g,0),Ye(p)+" reply"+(n.replyRate>0?", live":", assumed")),S("Time to goal",P||"--","at "+Re(u)+" a day, "+Re(d)+" send days a month"),S("Month supported by capacity",lt(R),Ye(it(R,s),0)+" of goal")]})]})]})}function JT({daily:t,replies:e,payments:n,m:i,calc:r,setCalc:s}){const a=Wf(e,n),o=a.all*_p,l=Math.max(i.dealValue-a.all,0),c=e.filter(d=>d.closed&&d.paymentPlan).length,u=e.filter(d=>d.closed).length;return v.jsxs("div",{className:"grid",children:[v.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:[v.jsxs(Et,{className:"tile",children:[v.jsx("div",{className:"label",children:"Collected, this month"}),v.jsx("div",{className:"display val red",children:v.jsx(Pr,{value:a.mtd,format:lt})}),v.jsxs("div",{className:"sub",children:[Ye(it(a.mtd,r.goal),0)," of ",lt(r.goal),a.source==="payments"?" · by payment date":""]})]}),v.jsxs(Et,{className:"tile",delay:50,children:[v.jsx("div",{className:"label",children:"Signed, all time"}),v.jsx("div",{className:"display val",children:v.jsx(Pr,{value:i.dealValue,format:lt})}),v.jsxs("div",{className:"sub",children:[lt(l)," still to collect"]})]}),v.jsxs(Et,{className:"tile",delay:100,children:[v.jsx("div",{className:"label",children:"Commission accrued"}),v.jsx("div",{className:"display val",children:v.jsx(Pr,{value:o,format:lt})}),v.jsxs("div",{className:"sub",children:[Ye(_p,1)," of collected, owed to the setter"]})]}),v.jsxs(Et,{className:"tile",delay:150,children:[v.jsx("div",{className:"label",children:"Payment plans"}),v.jsxs("div",{className:"display val",children:[c,v.jsxs("span",{style:{color:"#7A7A7A",fontSize:15},children:[" of ",u]})]}),v.jsx("div",{className:"sub",children:"deals on plans; backend follows"})]})]}),a.mismatch&&v.jsxs("div",{className:"notice",children:["Payments tab total (",lt(a.mismatch.payAll),") and reply-row cash (",lt(a.mismatch.repliesAll),") disagree. Two records of the same money should match; reconcile them."]}),v.jsxs(Et,{className:"card",children:[v.jsx("h2",{className:"sec",children:"Cash Trajectory, this month"}),v.jsx($T,{daily:t,replies:e,payments:n,m:i,calc:r}),v.jsxs("div",{className:"note",children:["Red line is money banked",a.source==="payments"?", dated by when each payment landed":"",". The cone is 500 simulated month-ends from the live rates: dashed midline P50, shaded P10 to P90. A thin sample means a wide cone; that is the honest read."]})]}),v.jsxs("div",{className:"two-col",children:[v.jsxs(Et,{className:"card",children:[v.jsx("h2",{className:"sec",children:"Deal Ledger"}),v.jsx(KT,{replies:e}),v.jsx(ZT,{payments:n})]}),v.jsx(Et,{delay:60,children:v.jsx(QT,{calc:r,setCalc:s,m:i})})]})]})}const di={red:"#E11414",teal:"#3EC1BB",steel:"#5A5A5A"};function eA({daily:t,replies:e,capacity:n}){const i=new Map;e.forEach(o=>{const l=ut(o.date);i.set(l,(i.get(l)||0)+1)});const r=t.some(o=>o.comments>0),s=o=>{const l=[];return n>0&&o.initials<n*.5&&l.push("volume under half target"),r&&o.comments===0&&l.push("no comments logged"),l},a=t.slice(-9).reverse();return v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Field Log, latest days"}),v.jsxs("div",{className:"flog-head",children:[v.jsx("span",{children:"Date"}),v.jsx("span",{children:"Init"}),v.jsx("span",{children:"FUps"}),v.jsx("span",{children:"Cmts"}),v.jsx("span",{children:"Repl"}),v.jsx("span",{children:"Note"})]}),a.map((o,l)=>v.jsxs("div",{className:"flog-row",children:[v.jsxs("span",{className:"fd"+(s(o).length?" warn":""),title:s(o).join(", ")||void 0,children:[ln(o.date),s(o).length>0&&" ⚠"]}),v.jsx("span",{children:Re(o.initials)}),v.jsx("span",{children:Re(o.followUps)}),v.jsx("span",{children:o.comments>0?Re(o.comments):"·"}),v.jsx("span",{children:i.get(ut(o.date))||"·"}),v.jsx("span",{className:"fnote"+(o.notes&&o.notes.length>1?" alert":""),title:o.notes,children:o.notes&&o.notes.length>1?o.notes:"·"})]},l)),a.length===0&&v.jsx("div",{className:"note",children:"Logged days land here."}),v.jsx("div",{className:"note",children:"Notes come straight from the EOD form. Anything written there is an operational flag worth reading."})]})}function tA({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(u=>[ut(u.date),u])),s=t.length?t[0].date:null,a=(i.getDay()+6)%7,o=new Date(i.getTime()-a*ot),l=[];for(let u=15;u>=0;u--){const d=[];for(let h=0;h<6;h++){const p=new Date(o.getTime()-u*7*ot+h*ot);d.push(p>i?null:p)}l.push(d)}const c=u=>{if(!u)return{bg:"transparent",title:""};const d=r.get(ut(u)),h=s&&u>=s;return d?{bg:"rgba(225,20,20,"+(.16+.84*(e>0?Math.min(d.initials/e,1):0)).toFixed(2)+")",title:ln(u)+": "+Re(d.initials)+" initials, "+Re(d.followUps)+" follow ups"}:h?{bg:"#241A08",title:ln(u)+": not logged",miss:!0}:{bg:"#141414",title:ln(u)}};return v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:8},children:[v.jsx("h2",{className:"sec",style:{margin:0},children:"Consistency, 16 weeks"}),v.jsxs("span",{className:"label",children:["color = initials vs ",Re(e)]})]}),v.jsx("div",{className:"hmap",style:{marginTop:12},children:l.map((u,d)=>v.jsx("div",{className:"hmap-col",children:u.map((h,p)=>{const y=c(h);return v.jsx("span",{className:"hmap-cell"+(y.miss?" miss":""),style:{background:y.bg},title:y.title},p)})},d))}),v.jsx("div",{className:"note",children:"Mondays on top, Saturdays on the bottom, Sundays off. Amber cells are working days inside the tracking window with no EOD row."})]})}function nA({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(d=>[ut(d.date),d])),s=r.get(ut(i)),a=r.get(ut(new Date(i.getTime()-ot))),o=s||a,l=s?"Today":"Latest logged day";if(!o)return null;const c=[{name:"Initials at target",ok:o.initials>=e*.9,detail:Re(o.initials)+" of "+Re(e)},{name:"Comments matched to initials",ok:o.comments>=o.initials*.85,detail:Re(o.comments)+" comments"},{name:"Ladder worked",ok:o.followUps>0,detail:Re(o.followUps)+" follow ups"},{name:"EOD logged",ok:!0,detail:"form in"}],u=c.filter(d=>d.ok).length;return v.jsxs("div",{className:"card",children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[v.jsxs("h2",{className:"sec",style:{margin:0},children:["Day Score, ",l.toLowerCase()]}),v.jsxs("span",{className:"display",style:{fontSize:22,color:u===c.length?di.red:"#F4F2ED"},children:[u,"/",c.length]})]}),v.jsx("div",{style:{marginTop:12},children:c.map((d,h)=>v.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline",padding:"7px 0",borderBottom:"1px solid #191919"},children:[v.jsx("span",{className:"mono",style:{fontSize:11,color:d.ok?"#3EC1BB":"#C9A227",width:40},children:d.ok?"[OK]":"[..]"}),v.jsx("span",{style:{fontSize:13},children:d.name}),v.jsx("span",{className:"mono",style:{marginLeft:"auto",fontSize:10,color:"#7A7A7A"},children:d.detail})]},h))})]})}function iA({daily:t,replies:e,calc:n}){const i=cy(t,n.capacity),r=uy(t,e),s=Fv(t,e),a=[{key:"initials",color:di.red,area:!0,data:t.map(o=>({x:o.date,y:o.initials}))},{key:"comments",color:di.teal,data:t.map(o=>({x:o.date,y:o.comments}))},{key:"follow ups",color:di.steel,data:t.map(o=>({x:o.date,y:o.followUps}))}];return v.jsxs("div",{className:"grid",children:[v.jsxs("div",{className:"two-col",children:[v.jsxs("div",{className:"grid",children:[v.jsxs(Et,{className:"card",children:[v.jsx("h2",{className:"sec",children:"Daily Output"}),v.jsx(Ry,{series:a,height:240}),v.jsxs("div",{className:"legend",children:[v.jsxs("span",{className:"leg",children:[v.jsx("i",{style:{background:di.red}}),"initials"]}),v.jsxs("span",{className:"leg",children:[v.jsx("i",{style:{background:di.teal}}),"comments"]}),v.jsxs("span",{className:"leg",children:[v.jsx("i",{style:{background:di.steel}}),"follow ups"]})]})]}),v.jsx(Et,{delay:40,children:v.jsx(tA,{daily:t,capacity:n.capacity})})]}),v.jsxs("div",{className:"grid",children:[v.jsx(Et,{delay:60,children:v.jsx(nA,{daily:t,capacity:n.capacity})}),v.jsx(Et,{delay:120,children:v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Streaks"}),v.jsxs("div",{className:"streaks",children:[v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Log streak"}),v.jsxs("div",{className:"display sv",style:i.cur>=6?{color:di.red}:null,children:[i.cur,"d"]}),v.jsxs("div",{className:"hdetail",children:["best ever ",i.best,"d"]})]}),v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"Days at target volume"}),v.jsxs("div",{className:"display sv",style:i.vol>=3?{color:di.red}:null,children:[i.vol,"d"]}),v.jsxs("div",{className:"hdetail",children:["at 90% of ",Re(n.capacity)]})]}),v.jsxs("div",{children:[v.jsx("div",{className:"label",children:"This week"}),v.jsx("div",{className:"display sv",children:Re(s.initials.cur)}),v.jsxs("div",{className:"hdetail",children:["initials, vs ",Re(s.initials.prev)," last wk"]})]})]})]})})]})]}),v.jsxs("div",{className:"two-col",children:[v.jsx(Et,{children:v.jsx(eA,{daily:t,replies:e,capacity:n.capacity})}),v.jsx(Et,{delay:60,children:v.jsxs("div",{className:"card",children:[v.jsx("h2",{className:"sec",children:"Milestones"}),r.length===0&&v.jsx("div",{className:"note",children:"Milestones land here as they happen."}),r.map((o,l)=>v.jsxs("div",{className:"ev",children:[v.jsx("span",{className:"ev-date",children:ln(o.date)}),v.jsx("span",{className:"ev-label",children:o.label}),o.who&&v.jsx("span",{className:"ev-who",children:o.who})]},l))]})})]})]})}const ya=[{id:"command",label:"Command",el:VT},{id:"pipeline",label:"Pipeline",el:qT},{id:"cash",label:"Cash",el:JT},{id:"setter",label:"Setter",el:iA}];function rA(){const t=()=>{const i=(location.hash||"").replace(/^#\/?/,"");return ya.some(r=>r.id===i)?i:"command"},[e,n]=Te.useState(t);return Te.useEffect(()=>{const i=()=>n(t());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),e}function sA({done:t}){const e=["feeds .......... daily log / replies / lead scheduler","engine ......... levers priced, diagnosis armed","palantir ....... seeing-stone online"],[n,i]=Te.useState(0);return Te.useEffect(()=>{if(jn)return;const r=setInterval(()=>i(s=>s+1),330);return()=>clearInterval(r)},[]),v.jsx("div",{className:"boot"+(t?" done":""),children:v.jsxs("div",{className:"boot-in",children:[v.jsx(fd,{sub:"Ops Terminal v5"}),v.jsx("div",{className:"boot-lines",children:e.slice(0,n+1).map((r,s)=>v.jsxs("div",{children:[v.jsx("span",{className:"ok",children:">"})," ",r]},s))})]})})}function aA({open:t,close:e,go:n,actions:i}){const[r,s]=Te.useState(""),[a,o]=Te.useState(0),l=Te.useMemo(()=>{const u=[...ya.map(h=>({label:"Go to "+h.label,k:"view",run:()=>n(h.id)})),...i],d=r.trim().toLowerCase();return d?u.filter(h=>h.label.toLowerCase().includes(d)):u},[r,i,n]);if(Te.useEffect(()=>{o(0)},[r,t]),Te.useEffect(()=>{t||s("")},[t]),!t)return null;const c=u=>{u.key==="Escape"?e():u.key==="ArrowDown"?(u.preventDefault(),o(d=>Math.min(d+1,l.length-1))):u.key==="ArrowUp"?(u.preventDefault(),o(d=>Math.max(d-1,0))):u.key==="Enter"&&l[a]&&(l[a].run(),e())};return v.jsx("div",{className:"pal-overlay",onClick:e,children:v.jsxs("div",{className:"palette",onClick:u=>u.stopPropagation(),children:[v.jsx("input",{autoFocus:!0,placeholder:"Type a command",value:r,onChange:u=>s(u.target.value),onKeyDown:c}),l.map((u,d)=>v.jsxs("div",{className:"pal-item"+(d===a?" sel":""),onMouseEnter:()=>o(d),onClick:()=>{u.run(),e()},children:[v.jsx("span",{children:u.label}),v.jsx("span",{className:"k",children:u.k})]},d))]})})}function oA(){const{daily:t,replies:e,leads:n,payments:i,sample:r,loadedAt:s,reload:a}=wy(),o=rA(),[l,c]=Te.useState(()=>{try{const L=JSON.parse(localStorage.getItem("kg_calc")||"null");return L?{...Hc,...L}:Hc}catch{return Hc}});Te.useEffect(()=>{try{localStorage.setItem("kg_calc",JSON.stringify(l))}catch{}},[l]);const[u,d]=Te.useState(()=>jn||sessionStorage.getItem("kg_booted")==="1");Te.useEffect(()=>{if(u)return;const L=setTimeout(()=>{d(!0);try{sessionStorage.setItem("kg_booted","1")}catch{}},1500);return()=>clearTimeout(L)},[u]);const[h,p]=Te.useState(!1),[y,M]=Te.useState(!1);Te.useEffect(()=>{document.body.classList.toggle("tv",y)},[y]);const m=Te.useCallback(L=>{location.hash="/"+L},[]);Te.useEffect(()=>{const L=D=>{if((D.metaKey||D.ctrlKey)&&D.key.toLowerCase()==="k"){D.preventDefault(),p(W=>!W);return}if(D.target&&/input|textarea|select/i.test(D.target.tagName))return;D.key==="Escape"&&y&&M(!1);const H={1:"command",2:"pipeline",3:"cash",4:"setter"};H[D.key]&&m(H[D.key]),D.key.toLowerCase()==="t"&&M(W=>!W),D.key.toLowerCase()==="r"&&a()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[m,a,y]);const f=Te.useMemo(()=>t&&e?iy(t,e):null,[t,e]),x=Te.useRef(null),[g,E]=Te.useState(0);Te.useEffect(()=>{if(!f)return;const L=[f.initials,f.replies,f.booked,f.shown,f.closed,Math.round(f.cash)].join("|");x.current&&x.current!==L&&E(D=>D+1),x.current=L},[f]);const[b,P]=Te.useState(o),[R,w]=Te.useState(!1);Te.useEffect(()=>{if(o===b)return;if(jn){P(o);return}w(!0);const L=setTimeout(()=>P(o),150),D=setTimeout(()=>w(!1),340);return()=>{clearTimeout(L),clearTimeout(D)}},[o,b]);const _=Te.useMemo(()=>t&&e?_y(t,e,n,l.capacity):[],[t,e,n,l.capacity]);if(!t||!e)return v.jsxs("div",{className:"center",children:[v.jsx(fd,{sub:"Ops Terminal v5"}),v.jsx("div",{className:"label",style:{marginTop:10},children:"Pulling the numbers"})]});const S=(ya.find(L=>L.id===b)||ya[0]).el,A=[{label:"Refresh data",k:"R",run:a},{label:(y?"Exit":"Enter")+" TV mode",k:"T",run:()=>M(L=>!L)},{label:"Open sales sheet",k:"link",run:()=>window.open(Uv,"_blank")},{label:"Open lead scheduler",k:"link",run:()=>window.open(Iv,"_blank")},{label:"Open v4 tracker",k:"link",run:()=>window.open("/dm-tracker/","_blank")}];return v.jsxs("div",{children:[!u&&v.jsx(sA,{done:!1}),v.jsx("span",{className:"hud-corner hud-tl"}),v.jsx("span",{className:"hud-corner hud-tr"}),v.jsx("span",{className:"hud-corner hud-bl"}),v.jsx("span",{className:"hud-corner hud-br"}),v.jsxs("div",{className:"shell",children:[v.jsxs("div",{className:"topbar",children:[v.jsx("a",{href:"#/command",style:{textDecoration:"none"},children:v.jsx(fd,{sub:"Ops Terminal v5"})}),v.jsx("nav",{className:"nav",children:ya.map(L=>v.jsx("a",{href:"#/"+L.id,className:o===L.id?"on":"",children:L.label},L.id))}),v.jsxs("div",{className:"top-right",children:[v.jsxs("span",{className:"feed",children:[v.jsx("span",{className:r?"dead":"lit"}),r?"sample data":"live feed",s&&!r&&v.jsxs("span",{style:{color:"#4A4A4A"},children:[" ","· ",s.toLocaleTimeString("en-IE",{hour:"2-digit",minute:"2-digit"})]})]}),v.jsx("button",{className:"kbd-hint",onClick:()=>p(!0),children:"⌘K"})]})]}),r&&v.jsx("div",{className:"notice",children:"Live sheet unreachable from this network; running on sample data so the layout stays honest. It reconnects automatically."}),_.length>0&&v.jsx("div",{className:"ticker",children:_.map((L,D)=>v.jsx("span",{className:"sig "+L.sev,children:L.text},D))}),v.jsx(S,{daily:t,replies:e,leads:n,payments:i,m:f,calc:l,setCalc:c,flare:g}),v.jsxs("div",{className:"footer",children:[v.jsx("span",{children:"KEHOEGROUP · Blood & Ink"}),v.jsx("span",{children:"keys: 1-4 views · T tv · R refresh · ⌘K palette"})]})]}),R&&v.jsx("div",{className:"wipe","aria-hidden":"true"}),v.jsx(aA,{open:h,close:()=>p(!1),go:m,actions:A})]})}Nv(document.getElementById("root")).render(v.jsx(oA,{}));
