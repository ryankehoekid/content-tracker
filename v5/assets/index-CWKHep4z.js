(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var T0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mm={exports:{}},Gl={},Em={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ha=Symbol.for("react.element"),A0=Symbol.for("react.portal"),R0=Symbol.for("react.fragment"),C0=Symbol.for("react.strict_mode"),b0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),L0=Symbol.for("react.forward_ref"),D0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),uh=Symbol.iterator;function F0(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Am={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rm(){}Rm.prototype=Vs.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}var Kd=qd.prototype=new Rm;Kd.constructor=qd;Tm(Kd,Vs.prototype);Kd.isPureReactComponent=!0;var dh=Array.isArray,Cm=Object.prototype.hasOwnProperty,$d={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Cm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ha,type:t,key:s,ref:a,props:r,_owner:$d.current}}function k0(t,e){return{$$typeof:Ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ha}function O0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O0(""+t.key):e.toString(36)}function qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ha:case A0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+gc(a,0):i,dh(r)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),qo(r,e,n,"",function(c){return c})):r!=null&&(Zd(r)&&(r=k0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",dh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+gc(s,o);a+=qo(s,e,n,l,r)}else if(l=F0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+gc(s,o++),a+=qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function no(t,e,n){if(t==null)return t;var i=[],r=0;return qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function B0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Ko={transition:null},z0={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Ko,ReactCurrentOwner:$d};function Nm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:no,forEach:function(t,e,n){no(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return no(t,function(){e++}),e},toArray:function(t){return no(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Vs;Xe.Fragment=R0;Xe.Profiler=b0;Xe.PureComponent=qd;Xe.StrictMode=C0;Xe.Suspense=D0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;Xe.act=Nm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Cm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ha,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:N0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};Xe.createElement=Pm;Xe.createFactory=function(t){var e=Pm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:L0,render:t}};Xe.isValidElement=Zd;Xe.lazy=function(t){return{$$typeof:U0,_payload:{_status:-1,_result:t},_init:B0}};Xe.memo=function(t,e){return{$$typeof:I0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ko.transition;Ko.transition={};try{t()}finally{Ko.transition=e}};Xe.unstable_act=Nm;Xe.useCallback=function(t,e){return Jt.current.useCallback(t,e)};Xe.useContext=function(t){return Jt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Jt.current.useEffect(t,e)};Xe.useId=function(){return Jt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Jt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Jt.current.useRef(t)};Xe.useState=function(t){return Jt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Jt.current.useTransition()};Xe.version="18.3.1";Em.exports=Xe;var _e=Em.exports;const bs=Sm(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=_e,V0=Symbol.for("react.element"),G0=Symbol.for("react.fragment"),j0=Object.prototype.hasOwnProperty,W0=H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X0={key:!0,ref:!0,__self:!0,__source:!0};function Lm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)j0.call(e,i)&&!X0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V0,type:t,key:s,ref:a,props:r,_owner:W0.current}}Gl.Fragment=G0;Gl.jsx=Lm;Gl.jsxs=Lm;Mm.exports=Gl;var m=Mm.exports,Dm={exports:{}},yn={},Im={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,z){var Q=U.length;U.push(z);e:for(;0<Q;){var Y=Q-1>>>1,j=U[Y];if(0<r(j,z))U[Y]=z,U[Q]=j,Q=Y;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var z=U[0],Q=U.pop();if(Q!==z){U[0]=Q;e:for(var Y=0,j=U.length,Me=j>>>1;Y<Me;){var K=2*(Y+1)-1,ee=U[K],re=K+1,le=U[re];if(0>r(ee,Q))re<j&&0>r(le,ee)?(U[Y]=le,U[re]=Q,Y=re):(U[Y]=ee,U[K]=Q,Y=K);else if(re<j&&0>r(le,Q))U[Y]=le,U[re]=Q,Y=re;else break e}}return z}function r(U,z){var Q=U.sortIndex-z.sortIndex;return Q!==0?Q:U.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,f=null,h=3,p=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(U){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=U)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function E(U){if(M=!1,v(U),!_)if(n(l)!==null)_=!0,G(b);else{var z=n(c);z!==null&&O(E,z.startTime-U)}}function b(U,z){_=!1,M&&(M=!1,d(w),w=-1),p=!0;var Q=h;try{for(v(z),f=n(l);f!==null&&(!(f.expirationTime>z)||U&&!A());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var j=Y(f.expirationTime<=z);z=t.unstable_now(),typeof j=="function"?f.callback=j:f===n(l)&&i(l),v(z)}else i(l);f=n(l)}if(f!==null)var Me=!0;else{var K=n(c);K!==null&&O(E,K.startTime-z),Me=!1}return Me}finally{f=null,h=Q,p=!1}}var P=!1,R=null,w=-1,x=5,y=-1;function A(){return!(t.unstable_now()-y<x)}function N(){if(R!==null){var U=t.unstable_now();y=U;var z=!0;try{z=R(!0,U)}finally{z?L():(P=!1,R=null)}}else P=!1}var L;if(typeof S=="function")L=function(){S(N)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,W=H.port2;H.port1.onmessage=N,L=function(){W.postMessage(null)}}else L=function(){g(N,0)};function G(U){R=U,P||(P=!0,L())}function O(U,z){w=g(function(){U(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(b))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var Q=h;h=z;try{return U()}finally{h=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,z){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=h;h=U;try{return z()}finally{h=Q}},t.unstable_scheduleCallback=function(U,z,Q){var Y=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Y+Q:Y):Q=Y,U){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=Q+j,U={id:u++,callback:z,priorityLevel:U,startTime:Q,expirationTime:j,sortIndex:-1},Q>Y?(U.sortIndex=Q,e(c,U),n(l)===null&&U===n(c)&&(M?(d(w),w=-1):M=!0,O(E,Q-Y))):(U.sortIndex=j,e(l,U),_||p||(_=!0,G(b))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var z=h;return function(){var Q=h;h=z;try{return U.apply(this,arguments)}finally{h=Q}}}})(Um);Im.exports=Um;var Y0=Im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=_e,xn=Y0;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,Ma={};function Br(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Ma[t]=e,t=0;t<e.length;t++)Fm.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},ph={};function $0(t){return yu.call(ph,t)?!0:yu.call(hh,t)?!1:K0.test(t)?ph[t]=!0:(hh[t]=!0,!1)}function Z0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Q0(t,e,n,i){if(e===null||typeof e>"u"||Z0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);Vt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Q0(e,n,r,i)&&(n=null),i||r===null?$0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,io=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),km=Symbol.for("react.provider"),Om=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),Bi=Symbol.for("react.lazy"),Bm=Symbol.for("react.offscreen"),mh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,vc;function aa(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function xc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function J0(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case Su:return"Profiler";case tf:return"StrictMode";case Mu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Om:return(t.displayName||"Context")+".Consumer";case km:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case Bi:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function e_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t_(t){var e=zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=t_(t))}function Hm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tu(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vm(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function Au(t,e){Vm(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ru(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ru(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(oa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Gm(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var so,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=so.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ea(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},n_=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){n_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Xm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Xm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var i_=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(t,e){if(e){if(i_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,Ss=null,Ms=null;function yh(t){if(t=ja(t)){if(typeof Du!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=ql(e),Du(t.stateNode,t.type,e))}}function qm(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function Km(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,yh(t),e)for(t=0;t<e.length;t++)yh(e[t])}}function $m(t,e){return t(e)}function Zm(){}var yc=!1;function Qm(t,e,n){if(yc)return t(e,n);yc=!0;try{return $m(t,e,n)}finally{yc=!1,(Ss!==null||Ms!==null)&&(Zm(),Km())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Iu=!1;if(Si)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Iu=!1}function r_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fa=!1,pl=null,ml=!1,Uu=null,s_={onError:function(t){fa=!0,pl=t}};function a_(t,e,n,i,r,s,a,o,l){fa=!1,pl=null,r_.apply(s_,arguments)}function o_(t,e,n,i,r,s,a,o,l){if(a_.apply(this,arguments),fa){if(fa){var c=pl;fa=!1,pl=null}else throw Error(ae(198));ml||(ml=!0,Uu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sh(t){if(zr(t)!==t)throw Error(ae(188))}function l_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sh(r),t;if(s===i)return Sh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function eg(t){return t=l_(t),t!==null?tg(t):null}function tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tg(t);if(e!==null)return e;t=t.sibling}return null}var ng=xn.unstable_scheduleCallback,Mh=xn.unstable_cancelCallback,c_=xn.unstable_shouldYield,u_=xn.unstable_requestPaint,wt=xn.unstable_now,d_=xn.unstable_getCurrentPriorityLevel,af=xn.unstable_ImmediatePriority,ig=xn.unstable_UserBlockingPriority,gl=xn.unstable_NormalPriority,f_=xn.unstable_LowPriority,rg=xn.unstable_IdlePriority,jl=null,ti=null;function h_(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:g_,p_=Math.log,m_=Math.LN2;function g_(t){return t>>>=0,t===0?32:31-(p_(t)/m_|0)|0}var ao=64,oo=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function v_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=v_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=ao;return ao<<=1,!(ao&4194240)&&(ao=64),t}function Sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function x_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function of(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function ag(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var og,lf,lg,cg,ug,ku=!1,lo=[],Xi=null,Yi=null,qi=null,Ta=new Map,Aa=new Map,Hi=[],y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ja(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function S_(t,e,n,i,r){switch(e){case"focusin":return Xi=Ks(Xi,t,e,n,i,r),!0;case"dragenter":return Yi=Ks(Yi,t,e,n,i,r),!0;case"mouseover":return qi=Ks(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Ks(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Ks(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function dg(t){var e=Mr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jm(n),e!==null){t.blockedOn=e,ug(t.priority,function(){lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ou(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=ja(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function wh(t,e,n){$o(t)&&n.delete(e)}function M_(){ku=!1,Xi!==null&&$o(Xi)&&(Xi=null),Yi!==null&&$o(Yi)&&(Yi=null),qi!==null&&$o(qi)&&(qi=null),Ta.forEach(wh),Aa.forEach(wh)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,ku||(ku=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,M_)))}function Ra(t){function e(r){return $s(r,t)}if(0<lo.length){$s(lo[0],t);for(var n=1;n<lo.length;n++){var i=lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&$s(Xi,t),Yi!==null&&$s(Yi,t),qi!==null&&$s(qi,t),Ta.forEach(e),Aa.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)dg(n),n.blockedOn===null&&Hi.shift()}var Es=Ci.ReactCurrentBatchConfig,_l=!0;function E_(t,e,n,i){var r=ot,s=Es.transition;Es.transition=null;try{ot=1,cf(t,e,n,i)}finally{ot=r,Es.transition=s}}function w_(t,e,n,i){var r=ot,s=Es.transition;Es.transition=null;try{ot=4,cf(t,e,n,i)}finally{ot=r,Es.transition=s}}function cf(t,e,n,i){if(_l){var r=Ou(t,e,n,i);if(r===null)Nc(t,e,i,xl,n),Eh(t,i);else if(S_(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<y_.indexOf(t)){for(;r!==null;){var s=ja(r);if(s!==null&&og(s),s=Ou(t,e,n,i),s===null&&Nc(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nc(t,e,i,null,n)}}var xl=null;function Ou(t,e,n,i){if(xl=null,t=sf(i),t=Mr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function fg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d_()){case af:return 1;case ig:return 4;case gl:case f_:return 16;case rg:return 536870912;default:return 16}default:return 16}}var ji=null,uf=null,Zo=null;function hg(){if(Zo)return Zo;var t,e=uf,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Zo=r.slice(t,1<i?1-i:void 0)}function Qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function co(){return!0}function Th(){return!1}function Sn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?co:Th,this.isPropagationStopped=Th,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Sn(Gs),Ga=yt({},Gs,{view:0,detail:0}),T_=Sn(Ga),Mc,Ec,Zs,Wl=yt({},Ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(Mc=t.screenX-Zs.screenX,Ec=t.screenY-Zs.screenY):Ec=Mc=0,Zs=t),Mc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Ah=Sn(Wl),A_=yt({},Wl,{dataTransfer:0}),R_=Sn(A_),C_=yt({},Ga,{relatedTarget:0}),wc=Sn(C_),b_=yt({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=Sn(b_),N_=yt({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L_=Sn(N_),D_=yt({},Gs,{data:0}),Rh=Sn(D_),I_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F_[t])?!!e[t]:!1}function ff(){return k_}var O_=yt({},Ga,{key:function(t){if(t.key){var e=I_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=Sn(O_),z_=yt({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=Sn(z_),H_=yt({},Ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),V_=Sn(H_),G_=yt({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Sn(G_),W_=yt({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),X_=Sn(W_),Y_=[9,13,27,32],hf=Si&&"CompositionEvent"in window,ha=null;Si&&"documentMode"in document&&(ha=document.documentMode);var q_=Si&&"TextEvent"in window&&!ha,pg=Si&&(!hf||ha&&8<ha&&11>=ha),bh=" ",Ph=!1;function mg(t,e){switch(t){case"keyup":return Y_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function K_(t,e){switch(t){case"compositionend":return gg(e);case"keypress":return e.which!==32?null:(Ph=!0,bh);case"textInput":return t=e.data,t===bh&&Ph?null:t;default:return null}}function $_(t,e){if(cs)return t==="compositionend"||!hf&&mg(t,e)?(t=hg(),Zo=uf=ji=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pg&&e.locale!=="ko"?null:e.data;default:return null}}var Z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z_[t.type]:e==="textarea"}function vg(t,e,n,i){qm(i),e=yl(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Ca=null;function Q_(t){Cg(t,0)}function Xl(t){var e=fs(t);if(Hm(e))return t}function J_(t,e){if(t==="change")return e}var _g=!1;if(Si){var Tc;if(Si){var Ac="oninput"in document;if(!Ac){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Ac=typeof Lh.oninput=="function"}Tc=Ac}else Tc=!1;_g=Tc&&(!document.documentMode||9<document.documentMode)}function Dh(){pa&&(pa.detachEvent("onpropertychange",xg),Ca=pa=null)}function xg(t){if(t.propertyName==="value"&&Xl(Ca)){var e=[];vg(e,Ca,t,sf(t)),Qm(Q_,e)}}function ex(t,e,n){t==="focusin"?(Dh(),pa=e,Ca=n,pa.attachEvent("onpropertychange",xg)):t==="focusout"&&Dh()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Ca)}function nx(t,e){if(t==="click")return Xl(e)}function ix(t,e){if(t==="input"||t==="change")return Xl(e)}function rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:rx;function ba(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sg(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sx(t){var e=Sg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var a=Uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ax=Si&&"documentMode"in document&&11>=document.documentMode,us=null,Bu=null,ma=null,zu=!1;function Fh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||us==null||us!==hl(i)||(i=us,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&ba(ma,i)||(ma=i,i=yl(Bu,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Rc={},Mg={};Si&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Yl(t){if(Rc[t])return Rc[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mg)return Rc[t]=e[n];return t}var Eg=Yl("animationend"),wg=Yl("animationiteration"),Tg=Yl("animationstart"),Ag=Yl("transitionend"),Rg=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Rg.set(t,e),Br(e,[t])}for(var Cc=0;Cc<kh.length;Cc++){var bc=kh[Cc],ox=bc.toLowerCase(),lx=bc[0].toUpperCase()+bc.slice(1);sr(ox,"on"+lx)}sr(Eg,"onAnimationEnd");sr(wg,"onAnimationIteration");sr(Tg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Ag,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,o_(i,e,void 0,t),t.currentTarget=null}function Cg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,c),s=l}}}if(ml)throw t=Uu,ml=!1,Uu=null,t}function dt(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[fo]){t[fo]=!0,Fm.forEach(function(n){n!=="selectionchange"&&(cx.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fo]||(e[fo]=!0,Pc("selectionchange",!1,e))}}function bg(t,e,n,i){switch(fg(e)){case 1:var r=E_;break;case 4:r=w_;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Qm(function(){var c=s,u=sf(n),f=[];e:{var h=Rg.get(t);if(h!==void 0){var p=df,_=t;switch(t){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":p=B_;break;case"focusin":_="focus",p=wc;break;case"focusout":_="blur",p=wc;break;case"beforeblur":case"afterblur":p=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=V_;break;case Eg:case wg:case Tg:p=P_;break;case Ag:p=j_;break;case"scroll":p=T_;break;case"wheel":p=X_;break;case"copy":case"cut":case"paste":p=L_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ch}var M=(e&4)!==0,g=!M&&t==="scroll",d=M?h!==null?h+"Capture":null:h;M=[];for(var S=c,v;S!==null;){v=S;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,d!==null&&(E=wa(S,d),E!=null&&M.push(Na(S,E,v)))),g)break;S=S.return}0<M.length&&(h=new p(h,_,null,n,u),f.push({event:h,listeners:M}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Lu&&(_=n.relatedTarget||n.fromElement)&&(Mr(_)||_[Mi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Mr(_):null,_!==null&&(g=zr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=Ah,E="onMouseLeave",d="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(M=Ch,E="onPointerLeave",d="onPointerEnter",S="pointer"),g=p==null?h:fs(p),v=_==null?h:fs(_),h=new M(E,S+"leave",p,n,u),h.target=g,h.relatedTarget=v,E=null,Mr(u)===c&&(M=new M(d,S+"enter",_,n,u),M.target=v,M.relatedTarget=g,E=M),g=E,p&&_)t:{for(M=p,d=_,S=0,v=M;v;v=Gr(v))S++;for(v=0,E=d;E;E=Gr(E))v++;for(;0<S-v;)M=Gr(M),S--;for(;0<v-S;)d=Gr(d),v--;for(;S--;){if(M===d||d!==null&&M===d.alternate)break t;M=Gr(M),d=Gr(d)}M=null}else M=null;p!==null&&Bh(f,h,p,M,!1),_!==null&&g!==null&&Bh(f,g,_,M,!0)}}e:{if(h=c?fs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=J_;else if(Nh(h))if(_g)b=ix;else{b=tx;var P=ex}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=nx);if(b&&(b=b(t,c))){vg(f,b,n,u);break e}P&&P(t,h,c),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ru(h,"number",h.value)}switch(P=c?fs(c):window,t){case"focusin":(Nh(P)||P.contentEditable==="true")&&(us=P,Bu=c,ma=null);break;case"focusout":ma=Bu=us=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Fh(f,n,u);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":Fh(f,n,u)}var R;if(hf)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else cs?mg(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(pg&&n.locale!=="ko"&&(cs||w!=="onCompositionStart"?w==="onCompositionEnd"&&cs&&(R=hg()):(ji=u,uf="value"in ji?ji.value:ji.textContent,cs=!0)),P=yl(c,w),0<P.length&&(w=new Rh(w,t,null,n,u),f.push({event:w,listeners:P}),R?w.data=R:(R=gg(n),R!==null&&(w.data=R)))),(R=q_?K_(t,n):$_(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(u=new Rh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}Cg(f,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wa(t,n),s!=null&&i.unshift(Na(t,s,r)),s=wa(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=wa(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=wa(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ux=/\r\n?/g,dx=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(dx,"")}function ho(t,e,n){if(e=zh(e),zh(t)!==e&&n)throw Error(ae(425))}function Sl(){}var Hu=null,Vu=null;function Gu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(px)}:ju;function px(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Qn="__reactFiber$"+js,La="__reactProps$"+js,Mi="__reactContainer$"+js,Wu="__reactEvents$"+js,mx="__reactListeners$"+js,gx="__reactHandles$"+js;function Mr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[Qn])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function ja(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function ql(t){return t[La]||null}var Xu=[],hs=-1;function ar(t){return{current:t}}function ht(t){0>hs||(t.current=Xu[hs],Xu[hs]=null,hs--)}function ut(t,e){hs++,Xu[hs]=t.current,t.current=e}var ir={},Kt=ar(ir),an=ar(!1),Lr=ir;function Ns(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Ml(){ht(an),ht(Kt)}function Gh(t,e,n){if(Kt.current!==ir)throw Error(ae(168));ut(Kt,e),ut(an,n)}function Pg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,e_(t)||"Unknown",r));return yt({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Lr=Kt.current,ut(Kt,t),ut(an,an.current),!0}function jh(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=Pg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ht(an),ht(Kt),ut(Kt,t)):ht(an),ut(an,n)}var hi=null,Kl=!1,Dc=!1;function Ng(t){hi===null?hi=[t]:hi.push(t)}function vx(t){Kl=!0,Ng(t)}function or(){if(!Dc&&hi!==null){Dc=!0;var t=0,e=ot;try{var n=hi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Kl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),ng(af,or),r}finally{ot=e,Dc=!1}}return null}var ps=[],ms=0,wl=null,Tl=0,Tn=[],An=0,Dr=null,mi=1,gi="";function gr(t,e){ps[ms++]=Tl,ps[ms++]=wl,wl=t,Tl=e}function Lg(t,e,n){Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Dr,Dr=t;var i=mi;t=gi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Gn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function mf(t){t.return!==null&&(gr(t,1),Lg(t,1,0))}function gf(t){for(;t===wl;)wl=ps[--ms],ps[ms]=null,Tl=ps[--ms],ps[ms]=null;for(;t===Dr;)Dr=Tn[--An],Tn[An]=null,gi=Tn[--An],Tn[An]=null,mi=Tn[--An],Tn[An]=null}var vn=null,gn=null,mt=!1,Bn=null;function Dg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qu(t){if(mt){var e=gn;if(e){var n=e;if(!Wh(t,e)){if(Yu(t))throw Error(ae(418));e=Ki(n.nextSibling);var i=vn;e&&Wh(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,mt=!1,vn=t)}}else{if(Yu(t))throw Error(ae(418));t.flags=t.flags&-4097|2,mt=!1,vn=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function po(t){if(t!==vn)return!1;if(!mt)return Xh(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gu(t.type,t.memoizedProps)),e&&(e=gn)){if(Yu(t))throw Ig(),Error(ae(418));for(;e;)Dg(t,e),e=Ki(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Ki(t.stateNode.nextSibling):null;return!0}function Ig(){for(var t=gn;t;)t=Ki(t.nextSibling)}function Ls(){gn=vn=null,mt=!1}function vf(t){Bn===null?Bn=[t]:Bn.push(t)}var _x=Ci.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function mo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function Ug(t){function e(d,S){if(t){var v=d.deletions;v===null?(d.deletions=[S],d.flags|=16):v.push(S)}}function n(d,S){if(!t)return null;for(;S!==null;)e(d,S),S=S.sibling;return null}function i(d,S){for(d=new Map;S!==null;)S.key!==null?d.set(S.key,S):d.set(S.index,S),S=S.sibling;return d}function r(d,S){return d=Ji(d,S),d.index=0,d.sibling=null,d}function s(d,S,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<S?(d.flags|=2,S):v):(d.flags|=2,S)):(d.flags|=1048576,S)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,S,v,E){return S===null||S.tag!==6?(S=zc(v,d.mode,E),S.return=d,S):(S=r(S,v),S.return=d,S)}function l(d,S,v,E){var b=v.type;return b===ls?u(d,S,v.props.children,E,v.key):S!==null&&(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Yh(b)===S.type)?(E=r(S,v.props),E.ref=Qs(d,S,v),E.return=d,E):(E=sl(v.type,v.key,v.props,null,d.mode,E),E.ref=Qs(d,S,v),E.return=d,E)}function c(d,S,v,E){return S===null||S.tag!==4||S.stateNode.containerInfo!==v.containerInfo||S.stateNode.implementation!==v.implementation?(S=Hc(v,d.mode,E),S.return=d,S):(S=r(S,v.children||[]),S.return=d,S)}function u(d,S,v,E,b){return S===null||S.tag!==7?(S=Cr(v,d.mode,E,b),S.return=d,S):(S=r(S,v),S.return=d,S)}function f(d,S,v){if(typeof S=="string"&&S!==""||typeof S=="number")return S=zc(""+S,d.mode,v),S.return=d,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case io:return v=sl(S.type,S.key,S.props,null,d.mode,v),v.ref=Qs(d,null,S),v.return=d,v;case os:return S=Hc(S,d.mode,v),S.return=d,S;case Bi:var E=S._init;return f(d,E(S._payload),v)}if(oa(S)||Ys(S))return S=Cr(S,d.mode,v,null),S.return=d,S;mo(d,S)}return null}function h(d,S,v,E){var b=S!==null?S.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(d,S,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return v.key===b?l(d,S,v,E):null;case os:return v.key===b?c(d,S,v,E):null;case Bi:return b=v._init,h(d,S,b(v._payload),E)}if(oa(v)||Ys(v))return b!==null?null:u(d,S,v,E,null);mo(d,v)}return null}function p(d,S,v,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(v)||null,o(S,d,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case io:return d=d.get(E.key===null?v:E.key)||null,l(S,d,E,b);case os:return d=d.get(E.key===null?v:E.key)||null,c(S,d,E,b);case Bi:var P=E._init;return p(d,S,v,P(E._payload),b)}if(oa(E)||Ys(E))return d=d.get(v)||null,u(S,d,E,b,null);mo(S,E)}return null}function _(d,S,v,E){for(var b=null,P=null,R=S,w=S=0,x=null;R!==null&&w<v.length;w++){R.index>w?(x=R,R=null):x=R.sibling;var y=h(d,R,v[w],E);if(y===null){R===null&&(R=x);break}t&&R&&y.alternate===null&&e(d,R),S=s(y,S,w),P===null?b=y:P.sibling=y,P=y,R=x}if(w===v.length)return n(d,R),mt&&gr(d,w),b;if(R===null){for(;w<v.length;w++)R=f(d,v[w],E),R!==null&&(S=s(R,S,w),P===null?b=R:P.sibling=R,P=R);return mt&&gr(d,w),b}for(R=i(d,R);w<v.length;w++)x=p(R,d,w,v[w],E),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?w:x.key),S=s(x,S,w),P===null?b=x:P.sibling=x,P=x);return t&&R.forEach(function(A){return e(d,A)}),mt&&gr(d,w),b}function M(d,S,v,E){var b=Ys(v);if(typeof b!="function")throw Error(ae(150));if(v=b.call(v),v==null)throw Error(ae(151));for(var P=b=null,R=S,w=S=0,x=null,y=v.next();R!==null&&!y.done;w++,y=v.next()){R.index>w?(x=R,R=null):x=R.sibling;var A=h(d,R,y.value,E);if(A===null){R===null&&(R=x);break}t&&R&&A.alternate===null&&e(d,R),S=s(A,S,w),P===null?b=A:P.sibling=A,P=A,R=x}if(y.done)return n(d,R),mt&&gr(d,w),b;if(R===null){for(;!y.done;w++,y=v.next())y=f(d,y.value,E),y!==null&&(S=s(y,S,w),P===null?b=y:P.sibling=y,P=y);return mt&&gr(d,w),b}for(R=i(d,R);!y.done;w++,y=v.next())y=p(R,d,w,y.value,E),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?w:y.key),S=s(y,S,w),P===null?b=y:P.sibling=y,P=y);return t&&R.forEach(function(N){return e(d,N)}),mt&&gr(d,w),b}function g(d,S,v,E){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case io:e:{for(var b=v.key,P=S;P!==null;){if(P.key===b){if(b=v.type,b===ls){if(P.tag===7){n(d,P.sibling),S=r(P,v.props.children),S.return=d,d=S;break e}}else if(P.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Bi&&Yh(b)===P.type){n(d,P.sibling),S=r(P,v.props),S.ref=Qs(d,P,v),S.return=d,d=S;break e}n(d,P);break}else e(d,P);P=P.sibling}v.type===ls?(S=Cr(v.props.children,d.mode,E,v.key),S.return=d,d=S):(E=sl(v.type,v.key,v.props,null,d.mode,E),E.ref=Qs(d,S,v),E.return=d,d=E)}return a(d);case os:e:{for(P=v.key;S!==null;){if(S.key===P)if(S.tag===4&&S.stateNode.containerInfo===v.containerInfo&&S.stateNode.implementation===v.implementation){n(d,S.sibling),S=r(S,v.children||[]),S.return=d,d=S;break e}else{n(d,S);break}else e(d,S);S=S.sibling}S=Hc(v,d.mode,E),S.return=d,d=S}return a(d);case Bi:return P=v._init,g(d,S,P(v._payload),E)}if(oa(v))return _(d,S,v,E);if(Ys(v))return M(d,S,v,E);mo(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,S!==null&&S.tag===6?(n(d,S.sibling),S=r(S,v),S.return=d,d=S):(n(d,S),S=zc(v,d.mode,E),S.return=d,d=S),a(d)):n(d,S)}return g}var Ds=Ug(!0),Fg=Ug(!1),Al=ar(null),Rl=null,gs=null,_f=null;function xf(){_f=gs=Rl=null}function yf(t){var e=Al.current;ht(Al),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Rl=t,_f=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Rl===null)throw Error(ae(308));gs=t,Rl.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Er=null;function Sf(t){Er===null?Er=[t]:Er.push(t)}function kg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Og(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function Jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,u=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(h=e,p=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=yt({},f,h);break e;case 2:zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=f}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Wa={},ni=ar(Wa),Da=ar(Wa),Ia=ar(Wa);function wr(t){if(t===Wa)throw Error(ae(174));return t}function Ef(t,e){switch(ut(Ia,e),ut(Da,t),ut(ni,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}ht(ni),ut(ni,e)}function Is(){ht(ni),ht(Da),ht(Ia)}function Bg(t){wr(Ia.current);var e=wr(ni.current),n=bu(e,t.type);e!==n&&(ut(Da,t),ut(ni,n))}function wf(t){Da.current===t&&(ht(ni),ht(Da))}var vt=ar(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Tf(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var el=Ci.ReactCurrentDispatcher,Uc=Ci.ReactCurrentBatchConfig,Ir=0,xt=null,bt=null,Ut=null,Pl=!1,ga=!1,Ua=0,xx=0;function Gt(){throw Error(ae(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Rf(t,e,n,i,r,s){if(Ir=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?Ex:wx,t=n(i,r),ga){s=0;do{if(ga=!1,Ua=0,25<=s)throw Error(ae(301));s+=1,Ut=bt=null,e.updateQueue=null,el.current=Tx,t=n(i,r)}while(ga)}if(el.current=Nl,e=bt!==null&&bt.next!==null,Ir=0,Ut=bt=xt=null,Pl=!1,e)throw Error(ae(300));return t}function Cf(){var t=Ua!==0;return Ua=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?xt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Nn(){if(bt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ut===null?xt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=t;else{if(t===null)throw Error(ae(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?xt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Fa(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((Ir&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,xt.lanes|=u,Ur|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Xn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Xn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zg(){}function Hg(t,e){var n=xt,i=Nn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,bf(jg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,ka(9,Gg.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ae(349));Ir&30||Vg(n,e,r)}return r}function Vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,i){e.value=n,e.getSnapshot=i,Wg(e)&&Xg(t)}function jg(t,e,n){return n(function(){Wg(e)&&Xg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Xg(t){var e=Ei(t,1);e!==null&&jn(e,t,1,-1)}function $h(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=Mx.bind(null,xt,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Yg(){return Nn().memoizedState}function tl(t,e,n,i){var r=Kn();xt.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function $l(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&Af(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}xt.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Zh(t,e){return tl(8390656,8,t,e)}function bf(t,e){return $l(2048,8,t,e)}function qg(t,e){return $l(4,2,t,e)}function Kg(t,e){return $l(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zg(t,e,n){return n=n!=null?n.concat([t]):null,$l(4,4,$g.bind(null,e,t),n)}function Pf(){}function Qg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Jg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return Ir&21?(Xn(n,e)||(n=sg(),xt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function yx(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{ot=n,Uc.transition=i}}function tv(){return Nn().memoizedState}function Sx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))iv(e,n);else if(n=kg(t,e,n,i),n!==null){var r=Qt();jn(n,t,i,r),rv(n,e,i)}}function Mx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Xn(o,a)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=kg(t,e,r,i),n!==null&&(r=Qt(),jn(n,t,i,r),rv(n,e,i))}}function nv(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function iv(t,e){ga=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,of(t,n)}}var Nl={readContext:Pn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Ex={readContext:Pn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Sx.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Pf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=yx.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Kn();if(mt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),kt===null)throw Error(ae(349));Ir&30||Vg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zh(jg.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,Gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=kt.identifierPrefix;if(mt){var n=gi,i=mi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wx={readContext:Pn,useCallback:Qg,useContext:Pn,useEffect:bf,useImperativeHandle:Zg,useInsertionEffect:qg,useLayoutEffect:Kg,useMemo:Jg,useReducer:Fc,useRef:Yg,useState:function(){return Fc(Fa)},useDebugValue:Pf,useDeferredValue:function(t){var e=Nn();return ev(e,bt.memoizedState,t)},useTransition:function(){var t=Fc(Fa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:zg,useSyncExternalStore:Hg,useId:tv,unstable_isNewReconciler:!1},Tx={readContext:Pn,useCallback:Qg,useContext:Pn,useEffect:bf,useImperativeHandle:Zg,useInsertionEffect:qg,useLayoutEffect:Kg,useMemo:Jg,useReducer:kc,useRef:Yg,useState:function(){return kc(Fa)},useDebugValue:Pf,useDeferredValue:function(t){var e=Nn();return bt===null?e.memoizedState=t:ev(e,bt.memoizedState,t)},useTransition:function(){var t=kc(Fa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:zg,useSyncExternalStore:Hg,useId:tv,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $u(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Qi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(jn(e,t,r,i),Jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Qi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(jn(e,t,r,i),Jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Qi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(jn(e,t,i,n),Jo(e,t,i))}};function Qh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function sv(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?Lr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Ns(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?Lr:Kt.current,r.context=Ns(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($u(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e){try{var n="",i=e;do n+=J0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function av(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,ld=i),Qu(t,e)},n}function ov(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qu(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ax;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zx.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var Rx=Ci.ReactCurrentOwner,sn=!1;function Zt(t,e,n,i){e.child=t===null?Fg(e,null,n,i):Ds(e,t.child,n,i)}function ip(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Rf(t,e,n,i,s,r),n=Cf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&n&&mf(e),e.flags|=1,Zt(t,e,i,r),e.child)}function rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lv(t,e,s,i,r)):(t=sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Ju(t,e,n,i,r)}function cv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(_s,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(_s,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(_s,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(_s,mn),mn|=i;return Zt(t,e,r,n),e.child}function uv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ju(t,e,n,i,r){var s=on(n)?Lr:Kt.current;return s=Ns(e,s),ws(e,r),n=Rf(t,e,n,i,s,r),i=Cf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&i&&mf(e),e.flags|=1,Zt(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(on(n)){var s=!0;El(e)}else s=!1;if(ws(e,r),e.stateNode===null)nl(t,e),sv(e,n,i),Zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pn(c):(c=on(n)?Lr:Kt.current,c=Ns(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Jh(e,a,i,c),zi=!1;var h=e.memoizedState;a.state=h,Cl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||an.current||zi?(typeof u=="function"&&($u(e,n,u,i),l=e.memoizedState),(o=zi||Qh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Og(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:kn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?Lr:Kt.current,l=Ns(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Jh(e,a,i,l),zi=!1,h=e.memoizedState,a.state=h,Cl(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||an.current||zi?(typeof p=="function"&&($u(e,n,p,i),_=e.memoizedState),(c=zi||Qh(e,n,c,i,h,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return ed(t,e,n,i,s,r)}function ed(t,e,n,i,r,s){uv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&jh(e,n,!1),wi(t,e,s);i=e.stateNode,Rx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,o,s)):Zt(t,e,o,s),e.memoizedState=i.state,r&&jh(e,n,!0),e.child}function dv(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),Ef(t,e.containerInfo)}function ap(t,e,n,i,r){return Ls(),vf(r),e.flags|=256,Zt(t,e,n,i),e.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(t){return{baseLanes:t,cachePool:null,transitions:null}}function fv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(vt,r&1),t===null)return qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nd(n),e.memoizedState=td,t):Nf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Cx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Ji(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?nd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=td,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function go(t,e,n,i){return i!==null&&vf(i),Ds(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(ae(422))),go(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,a),e.child.memoizedState=nd(a),e.memoizedState=td,s);if(!(e.mode&1))return go(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Oc(s,i,void 0),go(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),jn(i,t,r,-1))}return kf(),i=Oc(Error(ae(421))),go(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Ki(r.nextSibling),vn=e,mt=!0,Bn=null,t!==null&&(Tn[An++]=mi,Tn[An++]=gi,Tn[An++]=Dr,mi=t.id,gi=t.overflow,Dr=e),e=Nf(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ku(t.return,e,n)}function Bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function hv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bc(e,!0,n,null,s);break;case"together":Bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bx(t,e,n){switch(e.tag){case 3:dv(e),Ls();break;case 5:Bg(e);break;case 1:on(e.type)&&El(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?fv(t,e,n):(ut(vt,vt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ut(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return hv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return wi(t,e,n)}var pv,id,mv,gv;pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ni.current);var s=null;switch(n){case"input":r=Tu(t,r),i=Tu(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Pu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Px(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return on(e.type)&&Ml(),jt(e),null;case 3:return i=e.stateNode,Is(),ht(an),ht(Kt),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(po(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(dd(Bn),Bn=null))),id(t,e),jt(e),null;case 5:wf(e);var r=wr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return jt(e),null}if(t=wr(ni.current),po(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[La]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)dt(ca[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":gh(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":_h(i,s),dt("invalid",i)}Pu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ho(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":ro(i),vh(i,s,!0);break;case"textarea":ro(i),xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Qn]=e,t[La]=i,pv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Nu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)dt(ca[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":gh(t,i),r=Tu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":_h(t,i),r=Cu(t,i),dt("invalid",t);break;default:r=i}Pu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ea(t,l):typeof l=="number"&&Ea(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&ef(t,s,l,a))}switch(n){case"input":ro(t),vh(t,i,!1);break;case"textarea":ro(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=wr(Ia.current),wr(ni.current),po(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ho(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return jt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&gn!==null&&e.mode&1&&!(e.flags&128))Ig(),Ls(),e.flags|=98560,s=!1;else if(s=po(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[Qn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Bn!==null&&(dd(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Pt===0&&(Pt=3):kf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Is(),id(t,e),t===null&&Pa(e.stateNode.containerInfo),jt(e),null;case 10:return yf(e.type._context),jt(e),null;case 17:return on(e.type)&&Ml(),jt(e),null;case 19:if(ht(vt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=bl(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Fs&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return jt(e),null}else 2*wt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=vt.current,ut(vt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Nx(t,e){switch(gf(e),e.tag){case 1:return on(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),ht(an),ht(Kt),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return Is(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var vo=!1,Yt=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,Se=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function rd(t,e,n){try{n()}catch(i){Et(t,e,i)}}var lp=!1;function Dx(t,e){if(Hu=_l,t=Sg(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++u===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},_l=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,d=e.stateNode,S=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:kn(e.type,M),g);d.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){Et(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return _=lp,lp=!1,_}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rd(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[La],delete e[Wu],delete e[mx],delete e[gx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _v(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(ad(t,e,n),t=t.sibling;t!==null;)ad(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var zt=null,On=!1;function Pi(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:Yt||vs(n,e);case 6:var i=zt,r=On;zt=null,Pi(t,e,n),zt=i,On=r,zt!==null&&(On?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(On?(t=zt,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Ra(t)):Lc(zt,n.stateNode));break;case 4:i=zt,r=On,zt=n.stateNode.containerInfo,On=!0,Pi(t,e,n),zt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&rd(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Yt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Pi(t,e,n),Yt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Lx),e.forEach(function(i){var r=Vx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,On=!1;break e;case 3:zt=o.stateNode.containerInfo,On=!0;break e;case 4:zt=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(zt===null)throw Error(ae(160));xv(s,a,r),zt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,t),e=e.sibling}function yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),qn(t),i&4){try{va(3,t,t.return),Ql(3,t)}catch(M){Et(t,t.return,M)}try{va(5,t,t.return)}catch(M){Et(t,t.return,M)}}break;case 1:Dn(e,t),qn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Dn(e,t),qn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ea(r,"")}catch(M){Et(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Vm(r,s),Nu(o,a);var c=Nu(o,s);for(a=0;a<l.length;a+=2){var u=l[a],f=l[a+1];u==="style"?Ym(r,f):u==="dangerouslySetInnerHTML"?Wm(r,f):u==="children"?Ea(r,f):ef(r,u,f,c)}switch(o){case"input":Au(r,s);break;case"textarea":Gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ys(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[La]=s}catch(M){Et(t,t.return,M)}}break;case 6:if(Dn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Et(t,t.return,M)}}break;case 3:if(Dn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(M){Et(t,t.return,M)}break;case 4:Dn(e,t),qn(t);break;case 13:Dn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(If=wt())),i&4&&up(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||u,Dn(e,t),Yt=c):Dn(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Se=t,u=t.child;u!==null;){for(f=Se=u;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:va(4,h,h.return);break;case 1:vs(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Et(i,n,M)}}break;case 5:vs(h,h.return);break;case 22:if(h.memoizedState!==null){fp(f);continue}}p!==null?(p.return=h,Se=p):fp(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Xm("display",a))}catch(M){Et(t,t.return,M)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(M){Et(t,t.return,M)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),qn(t),i&4&&up(t);break;case 21:break;default:Dn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_v(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=cp(t);od(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=cp(t);ad(t,o,a);break;default:throw Error(ae(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t,e,n){Se=t,Sv(t)}function Sv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||vo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=vo;var c=Yt;if(vo=a,(Yt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?hp(r):l!==null?(l.return=a,Se=l):hp(r);for(;s!==null;)Se=s,Sv(s),s=s.sibling;Se=r,vo=o,Yt=c}dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):dp(t)}}function dp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ra(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Yt||e.flags&512&&sd(e)}catch(h){Et(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function fp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function hp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{sd(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{sd(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Ux=Math.ceil,Ll=Ci.ReactCurrentDispatcher,Lf=Ci.ReactCurrentOwner,bn=Ci.ReactCurrentBatchConfig,$e=0,kt=null,Ct=null,Ht=0,mn=0,_s=ar(0),Pt=0,Oa=null,Ur=0,Jl=0,Df=0,_a=null,nn=null,If=0,Fs=1/0,fi=null,Dl=!1,ld=null,Zi=null,_o=!1,Wi=null,Il=0,xa=0,cd=null,il=-1,rl=0;function Qt(){return $e&6?wt():il!==-1?il:il=wt()}function Qi(t){return t.mode&1?$e&2&&Ht!==0?Ht&-Ht:_x.transition!==null?(rl===0&&(rl=sg()),rl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:fg(t.type)),t):1}function jn(t,e,n,i){if(50<xa)throw xa=0,cd=null,Error(ae(185));Va(t,n,i),(!($e&2)||t!==kt)&&(t===kt&&(!($e&2)&&(Jl|=n),Pt===4&&Vi(t,Ht)),ln(t,i),n===1&&$e===0&&!(e.mode&1)&&(Fs=wt()+500,Kl&&or()))}function ln(t,e){var n=t.callbackNode;__(t,e);var i=vl(t,t===kt?Ht:0);if(i===0)n!==null&&Mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mh(n),e===1)t.tag===0?vx(pp.bind(null,t)):Ng(pp.bind(null,t)),hx(function(){!($e&6)&&or()}),n=null;else{switch(ag(i)){case 1:n=af;break;case 4:n=ig;break;case 16:n=gl;break;case 536870912:n=rg;break;default:n=gl}n=bv(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(il=-1,rl=0,$e&6)throw Error(ae(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=vl(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=$e;$e|=2;var s=wv();(kt!==t||Ht!==e)&&(fi=null,Fs=wt()+500,Rr(t,e));do try{Ox();break}catch(o){Ev(t,o)}while(!0);xf(),Ll.current=s,$e=r,Ct!==null?e=0:(kt=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=Fu(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=Oa,Rr(t,0),Vi(t,i),ln(t,wt()),n;if(e===6)Vi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Fx(r)&&(e=Ul(t,i),e===2&&(s=Fu(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=Oa,Rr(t,0),Vi(t,i),ln(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:vr(t,nn,fi);break;case 3:if(Vi(t,i),(i&130023424)===i&&(e=If+500-wt(),10<e)){if(vl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(vr.bind(null,t,nn,fi),e);break}vr(t,nn,fi);break;case 4:if(Vi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ux(i/1960))-i,10<i){t.timeoutHandle=ju(vr.bind(null,t,nn,fi),i);break}vr(t,nn,fi);break;case 5:vr(t,nn,fi);break;default:throw Error(ae(329))}}}return ln(t,wt()),t.callbackNode===n?Mv.bind(null,t):null}function ud(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=nn,nn=n,e!==null&&dd(e)),t}function dd(t){nn===null?nn=t:nn.push.apply(nn,t)}function Fx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vi(t,e){for(e&=~Df,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function pp(t){if($e&6)throw Error(ae(327));Ts();var e=vl(t,0);if(!(e&1))return ln(t,wt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Fu(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=Oa,Rr(t,0),Vi(t,e),ln(t,wt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,nn,fi),ln(t,wt()),null}function Uf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Fs=wt()+500,Kl&&or())}}function Fr(t){Wi!==null&&Wi.tag===0&&!($e&6)&&Ts();var e=$e;$e|=1;var n=bn.transition,i=ot;try{if(bn.transition=null,ot=1,t)return t()}finally{ot=i,bn.transition=n,$e=e,!($e&6)&&or()}}function Ff(){mn=_s.current,ht(_s)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fx(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Is(),ht(an),ht(Kt),Tf();break;case 5:wf(i);break;case 4:Is();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:yf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(kt=t,Ct=t=Ji(t.current,null),Ht=mn=e,Pt=0,Oa=null,Df=Jl=Ur=0,nn=_a=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Er=null}return t}function Ev(t,e){do{var n=Ct;try{if(xf(),el.current=Nl,Pl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Ir=0,Ut=bt=xt=null,ga=!1,Ua=0,Lf.current=null,n===null||n.return===null){Pt=1,Oa=e,Ct=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ht,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=tp(a);if(p!==null){p.flags&=-257,np(p,a,o,s,e),p.mode&1&&ep(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){ep(s,c,e),kf();break e}l=Error(ae(426))}}else if(mt&&o.mode&1){var g=tp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),np(g,a,o,s,e),vf(Us(l,o));break e}}s=l=Us(l,o),Pt!==4&&(Pt=2),_a===null?_a=[s]:_a.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=av(s,l,e);qh(s,d);break e;case 1:o=l;var S=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof S.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zi===null||!Zi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=ov(s,o,e);qh(s,E);break e}}s=s.return}while(s!==null)}Av(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function wv(){var t=Ll.current;return Ll.current=Nl,t===null?Nl:t}function kf(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),kt===null||!(Ur&268435455)&&!(Jl&268435455)||Vi(kt,Ht)}function Ul(t,e){var n=$e;$e|=2;var i=wv();(kt!==t||Ht!==e)&&(fi=null,Rr(t,e));do try{kx();break}catch(r){Ev(t,r)}while(!0);if(xf(),$e=n,Ll.current=i,Ct!==null)throw Error(ae(261));return kt=null,Ht=0,Pt}function kx(){for(;Ct!==null;)Tv(Ct)}function Ox(){for(;Ct!==null&&!c_();)Tv(Ct)}function Tv(t){var e=Cv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Av(t):Ct=e,Lf.current=null}function Av(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nx(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=Px(n,e,mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function vr(t,e,n){var i=ot,r=bn.transition;try{bn.transition=null,ot=1,Bx(t,e,n,i)}finally{bn.transition=r,ot=i}return null}function Bx(t,e,n,i){do Ts();while(Wi!==null);if($e&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(x_(t,s),t===kt&&(Ct=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_o||(_o=!0,bv(gl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var a=ot;ot=1;var o=$e;$e|=4,Lf.current=null,Dx(t,n),yv(n,t),sx(Vu),_l=!!Hu,Vu=Hu=null,t.current=n,Ix(n),u_(),$e=o,ot=a,bn.transition=s}else t.current=n;if(_o&&(_o=!1,Wi=t,Il=r),s=t.pendingLanes,s===0&&(Zi=null),h_(n.stateNode),ln(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=ld,ld=null,t;return Il&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===cd?xa++:(xa=0,cd=t):xa=0,or(),null}function Ts(){if(Wi!==null){var t=ag(Il),e=bn.transition,n=ot;try{if(bn.transition=null,ot=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,Il=0,$e&6)throw Error(ae(331));var r=$e;for($e|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var u=Se;switch(u.tag){case 0:case 11:case 15:va(8,u,s)}var f=u.child;if(f!==null)f.return=u,Se=f;else for(;Se!==null;){u=Se;var h=u.sibling,p=u.return;if(vv(u),u===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:va(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var S=t.current;for(Se=S;Se!==null;){a=Se;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Se=v;else e:for(a=S;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ql(9,o)}}catch(b){Et(o,o.return,b)}if(o===a){Se=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Se=E;break e}Se=o.return}}if($e=r,or(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{ot=n,bn.transition=e}}return!1}function mp(t,e,n){e=Us(n,e),e=av(t,e,1),t=$i(t,e,1),e=Qt(),t!==null&&(Va(t,1,e),ln(t,e))}function Et(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Us(n,t),t=ov(e,t,1),e=$i(e,t,1),t=Qt(),e!==null&&(Va(e,1,t),ln(e,t));break}}e=e.return}}function zx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>wt()-If?Rr(t,0):Df|=n),ln(t,e)}function Rv(t,e){e===0&&(t.mode&1?(e=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):e=1);var n=Qt();t=Ei(t,e),t!==null&&(Va(t,e,n),ln(t,n))}function Hx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rv(t,n)}function Vx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Rv(t,n)}var Cv;Cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,bx(t,e,n);sn=!!(t.flags&131072)}else sn=!1,mt&&e.flags&1048576&&Lg(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;nl(t,e),t=e.pendingProps;var r=Ns(e,Kt.current);ws(e,n),r=Rf(null,e,i,t,r,n);var s=Cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,Zu(e,i,t,n),e=ed(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&mf(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jx(i),t=kn(i,t),r){case 0:e=Ju(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=ip(null,e,i,t,n);break e;case 14:e=rp(null,e,i,kn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),sp(t,e,i,r,n);case 3:e:{if(dv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Og(t,e),Cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Us(Error(ae(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=Us(Error(ae(424)),e),e=ap(t,e,i,n,r);break e}else for(gn=Ki(e.stateNode.containerInfo.firstChild),vn=e,mt=!0,Bn=null,n=Fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=wi(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return Bg(e),t===null&&qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Gu(i,r)?a=null:s!==null&&Gu(i,s)&&(e.flags|=32),uv(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&qu(e),null;case 13:return fv(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),ip(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Al,i._currentValue),i._currentValue=a,s!==null)if(Xn(s.value,a)){if(s.children===r.children&&!an.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ku(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ku(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Pn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),rp(t,e,i,r,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),nl(t,e),e.tag=1,on(i)?(t=!0,El(e)):t=!1,ws(e,n),sv(e,i,r),Zu(e,i,r,n),ed(null,e,i,!0,t,n);case 19:return hv(t,e,n);case 22:return cv(t,e,n)}throw Error(ae(156,e.tag))};function bv(t,e){return ng(t,e)}function Gx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Gx(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function jx(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Of(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ls:return Cr(n.children,r,s,e);case tf:a=8,r|=8;break;case Su:return t=Rn(12,n,e,r|2),t.elementType=Su,t.lanes=s,t;case Mu:return t=Rn(13,n,e,r),t.elementType=Mu,t.lanes=s,t;case Eu:return t=Rn(19,n,e,r),t.elementType=Eu,t.lanes=s,t;case Bm:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case km:a=10;break e;case Om:a=9;break e;case nf:a=11;break e;case rf:a=14;break e;case Bi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Bm,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Hc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Wx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,i,r,s,a,o,l){return t=new Wx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function Xx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Pv(t){if(!t)return ir;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(on(n))return Pg(t,n,e)}return e}function Nv(t,e,n,i,r,s,a,o,l){return t=Bf(n,i,!0,t,r,s,a,o,l),t.context=Pv(null),n=t.current,i=Qt(),r=Qi(n),s=yi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,Va(t,r,i),ln(t,i),t}function tc(t,e,n,i){var r=e.current,s=Qt(),a=Qi(r);return n=Pv(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,a),t!==null&&(jn(t,r,a,s),Jo(t,r,a)),a}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zf(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function Yx(){return null}var Lv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}nc.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));tc(t,e,null,null)};nc.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){tc(null,t,null,null)}),e[Mi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=cg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&dg(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function qx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Fl(a);s.call(c)}}var a=Nv(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=a,t[Mi]=a.current,Pa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Fl(l);o.call(c)}}var l=Bf(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[Mi]=l.current,Pa(t.nodeType===8?t.parentNode:t),Fr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Fl(a);o.call(l)}}tc(e,a,t,r)}else a=qx(n,e,t,r,i);return Fl(a)}og=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(of(e,n|1),ln(e,wt()),!($e&6)&&(Fs=wt()+500,or()))}break;case 13:Fr(function(){var i=Ei(t,1);if(i!==null){var r=Qt();jn(i,t,1,r)}}),zf(t,1)}};lf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=Qt();jn(e,t,134217728,n)}zf(t,134217728)}};lg=function(t){if(t.tag===13){var e=Qi(t),n=Ei(t,e);if(n!==null){var i=Qt();jn(n,t,e,i)}zf(t,e)}};cg=function(){return ot};ug=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Du=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ae(90));Hm(i),Au(i,r)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};$m=Uf;Zm=Fr;var Kx={usingClientEntryPoint:!1,Events:[ja,fs,ql,qm,Km,Uf]},ea={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eg(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{jl=xo.inject($x),ti=xo}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(ae(200));return Xx(t,e,null,n)};yn.createRoot=function(t,e){if(!Vf(t))throw Error(ae(299));var n=!1,i="",r=Lv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Hf(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=eg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Fr(t)};yn.hydrate=function(t,e,n){if(!ic(e))throw Error(ae(200));return rc(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Lv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Nv(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};yn.render=function(t,e,n){if(!ic(e))throw Error(ae(200));return rc(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(ae(40));return t._reactRootContainer?(Fr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};yn.unstable_batchedUpdates=Uf;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return rc(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Dm.exports=yn;var Zx=Dm.exports,Iv,_p=Zx;Iv=_p.createRoot,_p.hydrateRoot;const Uv="https://docs.google.com/spreadsheets/d/1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU/edit?usp=sharing",Qx="Daily Log",Jx="Replies",ey="Payments",Fv="https://docs.google.com/spreadsheets/d/10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo/edit?usp=sharing",ty=["Lead Tracker","Leads","LEAD TRACKER","Sheet1",""];function Vc(t){const e=String(Uv).match(/\/d\/([\w-]+)/);return e?"https://docs.google.com/spreadsheets/d/"+e[1]+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(t):""}function ny(){const t=String(Fv).match(/\/d\/([\w-]+)/);return t?ty.map(e=>"https://docs.google.com/spreadsheets/d/"+t[1]+"/gviz/tq?tqx=out:csv"+(e?"&sheet="+encodeURIComponent(e):"")):[]}const iy="auto",Xa=.04,Ya=.3,ry=5*60*1e3,xp=.075,pt={replyRate:[.03,.06],bookingRate:[.125,.25],showRate:[.6,.8],closeRate:[.15,.3]},Je=864e5,Gc={goal:3e4,deal:1e4,aov:5e3,showRate:.7,closeRate:.175,capacity:100,sendDays:26},Wn=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function br(t){if(t==null)return 0;const e=parseFloat(String(t).replace(/[€$£,\s]/g,""));return Number.isFinite(e)?e:0}function yo(t){return String(t||"").trim().toLowerCase().startsWith("y")}function rt(t,e){return e>0?t/e:0}function Ee(t){return Math.round(t).toLocaleString("en-IE")}function wn(t,e=1){return t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function ct(t,e=0){return"€"+t.toLocaleString("en-IE",{minimumFractionDigits:e,maximumFractionDigits:e})}function vi(t){return t>=1e3?"€"+(t/1e3).toFixed(1)+"k":ct(t)}function Ye(t,e=1){return(t*100).toLocaleString("en-IE",{minimumFractionDigits:0,maximumFractionDigits:e})+"%"}function st(t){const e=n=>String(n).padStart(2,"0");return t.getFullYear()+"-"+e(t.getMonth()+1)+"-"+e(t.getDate())}function qt(t){return t.toLocaleDateString("en-IE",{day:"numeric",month:"short"})}function sy(t,e){const n=t.reduce((f,h)=>f+h.initials,0),i=t.reduce((f,h)=>f+h.followUps,0),r=t.reduce((f,h)=>f+h.comments,0),s=e.length,a=e.filter(f=>f.booked).length,o=e.filter(f=>f.showed).length,l=e.filter(f=>f.closed).length,c=e.reduce((f,h)=>f+h.dealValue,0),u=e.reduce((f,h)=>f+h.cash,0);return{initials:n,followUps:i,comments:r,touches:n+i+r,commentCoverage:rt(r,n),replies:s,booked:a,shown:o,closed:l,replyRate:rt(s,n),bookingRate:rt(a,s),showRate:rt(o,a),closeRate:rt(l,o),dealValue:c,cash:u,outstanding:c-u,avgDeal:rt(c,l),cashPerInitial:rt(u,n)}}function ay(t){return t>=0&&t<=3?1:0}function Gf(t,e,n){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Map(t.map(b=>[st(b.date),b])),a=t.slice(-7),o=a.length?a.reduce((b,P)=>b+P.initials,0)/a.length:0,l=rt(o,n);let c=0,u=0;for(let b=13;b>=0;b--){const P=new Date(r.getTime()-b*Je);if(P.getDay()===0)continue;const R=s.get(st(P));R&&(u+=R.followUps);for(const w of t){const x=Math.round((P-w.date)/Je);x>=0&&(c+=w.initials*ay(x))}}const f=c>0?u/c:null;let h=0,p=0;const _=t.length?t[0].date:null;for(let b=7;b>=1;b--){const P=new Date(r.getTime()-b*Je);P.getDay()!==0&&(_&&P<_||(h++,s.has(st(P))&&p++))}const M=e.filter(b=>!b.booked&&!b.showed&&!b.closed&&!b.dead&&String(b.status||"").toLowerCase()!=="talking"&&(r-b.date)/Je>7).length,g=new Date(r.getTime()-13*Je),d=t.filter(b=>b.date>=g).reduce((b,P)=>b+P.initials,0),S=e.filter(b=>b.date>=g).length,v=t.find(b=>b.comments>0);let E=null;if(v){const b=new Date(Math.max(v.date.getTime(),g.getTime())),P=t.filter(x=>x.date>=b),R=P.reduce((x,y)=>x+y.initials,0),w=P.reduce((x,y)=>x+y.comments,0);E=R>0?w/R:null}return{today:r,pace:o,paceRatio:l,fuRatio:f,owed:c,sent:u,expectDays:h,loggedDays:p,stale:M,init14:d,replies14:S,replyRate14:rt(S,d),commentRatio:E}}function oy(t,e,n){const i=Gf(t,e,n);return[{name:"Initials pace",zone:t.length?i.paceRatio>=.9?"g":i.paceRatio>=.6?"a":"r":"n",detail:Ee(i.pace)+" a day vs "+Ee(n)},{name:"Follow up ladder",zone:i.fuRatio===null?"n":i.fuRatio>=.85?"g":i.fuRatio>=.55?"a":"r",detail:i.fuRatio===null?"waiting on logged days":"about "+Ye(Math.min(i.fuRatio,1.5),0)+" of ladder cadence, 14 days"},{name:"Comment coverage",zone:i.commentRatio===null?"n":i.commentRatio>=.85?"g":i.commentRatio>=.55?"a":"r",detail:i.commentRatio===null?"no comments logged yet":"about "+Ye(Math.min(i.commentRatio,1.5),0)+" of initials get a comment"},{name:"Daily logging",zone:t.length?i.loggedDays>=i.expectDays?"g":i.loggedDays>=i.expectDays-2?"a":"r":"n",detail:i.loggedDays+" of "+i.expectDays+" days logged, last week"},{name:"Reply handling",zone:e.length?i.stale===0?"g":i.stale<=2?"a":"r":"n",detail:i.stale===0?"nothing waiting past 7 days":i.stale+" unbooked past 7 days"}]}function ly(t,e,n,i){const r=Gf(t,e,n),s=[],a=[],o=(u,f,h,p)=>s.push({sev:u,title:f,evidence:h,lever:p});t.length&&r.expectDays>0&&r.loggedDays<r.expectDays-1&&o("r","Fix the data first","Only "+r.loggedDays+" of the last "+r.expectDays+" days have an EOD row. Every other number here is guesswork until logging is daily.","EOD form every working day, no exceptions."),t.length&&r.paceRatio<.9&&o(r.paceRatio<.6?"r":"a","Volume below capacity","Initials running "+Ee(r.pace)+" a day against the "+Ee(n)+" target.","Protect the morning sending block. Initials go out while the US sleeps, per the system overview.");const l=r.fuRatio!==null&&r.fuRatio<.85;l&&o(r.fuRatio<.55?"r":"a","The ladder is being cut short","Follow ups are at about "+Ye(r.fuRatio,0)+" of what the ladder messages owe the last 14 days of leads. Most replies come from the later touches, so this suppresses reply rate before the opener is to blame.","Finish the full ladder on every open lead before sourcing new ones. Catch up the recent cohorts first.");const c=r.commentRatio!==null&&r.commentRatio<.85;return c&&o(r.commentRatio<.55?"r":"a","The comment step is being skipped","Only about "+Ye(r.commentRatio,0)+" of initials are getting a comment. These creators rarely see the initial DM, the comment on their latest reel is what earns the look, so low comments and a low reply rate are the same problem.","Comment on the latest reel 3 hours after every initial that got no reply. Rotate the comment bank, never repeat one on the same account."),r.init14>=150?(!l&&!c&&r.commentRatio!==null&&r.replyRate14<pt.replyRate[0]&&o("a","First touch underperforming","Ladder and comments are healthy but the 14 day reply rate is "+Ye(r.replyRate14)+", under the "+Ye(pt.replyRate[0],0)+" floor on "+Ee(r.init14)+" sends.","Rotate the opener, check account health and deliverability, tighten sourcing fit."),r.commentRatio===null&&a.push("comment coverage and the messaging verdict (no comments logged yet)")):a.push("messaging verdict (needs 150 initials in 14 days, at "+Ee(r.init14)+")"),i.replies>=10?i.bookingRate<pt.bookingRate[0]&&o("a","Replies not turning into booked calls","Booking rate "+Ye(i.bookingRate)+" against a "+Ye(pt.bookingRate[0],0)+" floor, on "+Ee(i.replies)+" replies.","Review the reply-to-call handling. Tier 1 first every day, ask for the call in about half the messages."):a.push("booking verdict (needs 10 replies, at "+Ee(i.replies)+")"),r.stale>0&&o(r.stale>2?"r":"a","Tier 1 leads going stale",r.stale+(r.stale===1?" reply is":" replies are")+" sitting unbooked past 7 days. Tier 1 never slips.","Work these today before any new outreach."),i.booked>=5?i.showRate<pt.showRate[0]&&o("a","Booked calls not showing","Show rate "+Ye(i.showRate)+" against a "+Ye(pt.showRate[0],0)+" floor.","Confirm the day before and the hour before. Calendar invite plus a personal message."):a.push("show verdict (needs 5 booked, at "+Ee(i.booked)+")"),i.shown>=5?i.closeRate<pt.closeRate[0]&&o("a","Shows not closing","Close rate "+Ye(i.closeRate)+" against a "+Ye(pt.closeRate[0],0)+" floor.","Review call recordings and the offer framing. This is a sales call problem, not an outreach problem."):a.push("close verdict (needs 5 shows, at "+Ee(i.shown)+")"),{findings:s,waiting:a}}function jf(t){const e=t.filter(a=>a.nextDue&&a.status.toLowerCase()!=="replied");if(!e.length)return!1;const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=Math.max(...e.map(a=>a.nextDue.getTime()));return e.filter(a=>a.nextDue<i).length===e.length&&r<i.getTime()-3*Je}function cy(t,e,n,i,r){const s=Gf(t,e,r.capacity),a=new Date,o=new Date(a.getFullYear(),a.getMonth(),a.getDate()),l=s.pace,c=i.replyRate>0,u=c?i.replyRate:Xa,f=i.bookingRate>0?i.bookingRate:Ya,h=r.showRate,p=r.closeRate,_=r.aov,M=r.sendDays,g=u*f*h*p*_,d=[];l<r.capacity&&d.push({name:"Volume back to "+Ee(r.capacity)+" a day",per:"mo",value:(r.capacity-l)*M*g,detail:Ee(l)+" a day now. Every account sending.",basis:c?"measured":"assumed"}),u<pt.replyRate[0]&&d.push({name:"Reply rate to "+Ye(pt.replyRate[0],0),per:"mo",value:l*M*(pt.replyRate[0]-u)*f*h*p*_,detail:Ye(u)+" now. Deliverability, then opener, then sourcing.",basis:"measured"}),i.replies>=5&&i.bookingRate<pt.bookingRate[0]&&d.push({name:"Booking rate to "+Ye(pt.bookingRate[0],0),per:"mo",value:l*M*u*(pt.bookingRate[0]-f)*h*p*_,detail:Ye(f)+" now. Speed to reply, route to the call.",basis:i.replies>=10?"measured":"hypothesis"});const S=l*M*u*f*h*p;S>0&&d.push({name:"Cash per close 5k to 7.5k",per:"mo",value:S*2500,detail:"Bigger first payment on the same deals. Scales with every fix above.",basis:"assumed"}),s.stale>0&&d.push({name:"Book the stale Tier 1 replies",per:"one time",value:s.stale*f*h*p*_,detail:s.stale+" replies past 7 days unbooked.",basis:"hypothesis"});const v=jf(n)?0:n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied"&&E.nextDue<o).length;return v>0&&d.push({name:"Clear the overdue queue",per:"one time",value:v*u*f*h*p*_,detail:v+" leads overdue in the lead sheet.",basis:"hypothesis"}),d.filter(E=>E.value>.5).sort((E,b)=>b.value-E.value).slice(0,6)}function uy(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/Je<=6,s=l=>{const c=(i-l)/Je;return c>=7&&c<=13},a=(l,c)=>c>0?l/c-1:null,o=(l,c,u)=>l.filter(f=>c(f.date)).reduce((f,h)=>f+u(h),0);return{initials:a(o(t,r,l=>l.initials),o(t,s,l=>l.initials)),followUps:a(o(t,r,l=>l.followUps),o(t,s,l=>l.followUps)),comments:a(o(t,r,l=>l.comments),o(t,s,l=>l.comments)),replies:a(o(e,r,()=>1),o(e,s,()=>1)),booked:a(o(e,r,l=>l.booked?1:0),o(e,s,l=>l.booked?1:0)),cash:a(o(e,r,l=>l.cash),o(e,s,l=>l.cash))}}function kv(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=l=>(i-l)/Je<=6,s=l=>{const c=(i-l)/Je;return c>=7&&c<=13},a=(l,c,u)=>l.filter(f=>c(f.date)).reduce((f,h)=>f+u(h),0),o=(l,c)=>({cur:a(l,r,c),prev:a(l,s,c)});return{initials:o(t,l=>l.initials),followUps:o(t,l=>l.followUps),comments:o(t,l=>l.comments),replies:o(e,()=>1),booked:o(e,l=>l.booked?1:0),cash:o(e,l=>l.cash)}}function dy(t,e){const n=new Map(t.map(c=>[st(c.date),c])),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate());let s=n.has(st(r))?1:0;for(let c=1;c<400;c++){const u=new Date(r.getTime()-c*Je);if(u.getDay()!==0)if(n.has(st(u)))s++;else break}let a=0,o=0;if(t.length)for(let c=t[0].date.getTime();c<=r.getTime();c+=Je){const u=new Date(c);u.getDay()!==0&&(n.has(st(u))?(o++,a=Math.max(a,o)):o=0)}let l=0;for(let c=t.length-1;c>=0&&t[c].initials>=e*.9;c--)l++;return{cur:s,best:a,vol:l}}function Ba(t){if(t.name)return t.name;const e=String(t.handle||"").match(/instagram\.com\/([^/?#]+)/i);return e?"@"+e[1]:t.handle||"unknown"}function fy(t,e){const n=[],i=(a,o)=>{const l=e.find(a);l&&n.push({date:l.date,label:o,who:Ba(l)})};if(e.length&&n.push({date:e[0].date,label:"First reply",who:Ba(e[0])}),i(a=>a.booked,"First call booked"),i(a=>a.showed,"First call shown"),i(a=>a.closed,"First client closed"),t.length){const a=t.reduce((o,l)=>l.initials>o.initials?l:o);a.initials>0&&n.push({date:a.date,label:"Biggest day, "+Ee(a.initials)+" initials"})}const r=new Map;if(e.forEach(a=>{a.cash>0&&r.set(st(a.date),(r.get(st(a.date))||0)+a.cash)}),r.size){const[a,o]=[...r.entries()].sort((f,h)=>h[1]-f[1])[0],[l,c,u]=a.split("-").map(Number);n.push({date:new Date(l,c-1,u),label:"Biggest cash day, €"+Math.round(o).toLocaleString("en-IE")})}let s=0;for(const a of t){const o=s;s+=a.initials;for(const l of[500,1e3,2500,5e3,1e4,25e3])o<l&&s>=l&&n.push({date:a.date,label:Ee(l)+" initials sent, all time"})}return n.sort((a,o)=>o.date-a.date),n.slice(0,8)}function hy(t){const e=String(t||"").match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);if(!e)return null;let n=+e[1];const i=+e[2],r=e[3]?e[3].toLowerCase():null;return r==="pm"&&n<12&&(n+=12),r==="am"&&n===12&&(n=0),n>23||i>59?null:n+i/60}const jc=[{label:"Morning",range:"06 to 12",test:t=>t>=6&&t<12},{label:"Afternoon",range:"12 to 17",test:t=>t>=12&&t<17},{label:"Evening",range:"17 to 22",test:t=>t>=17&&t<22},{label:"Late",range:"22 to 06",test:t=>t>=22||t<6}];function py(t){let e=0,n=0;for(const o of t){const l=o/24*2*Math.PI;e+=Math.cos(l),n+=Math.sin(l)}let i=Math.atan2(n,e);i<0&&(i+=2*Math.PI);const r=i/(2*Math.PI)*24,s=Math.floor(r),a=Math.round((r-s)*60);return String(s%24).padStart(2,"0")+":"+String(a%60).padStart(2,"0")}function Wf(t,e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),1),r=t.reduce((a,o)=>a+o.cash,0);if(!e||!e.length)return{source:"replies",all:r,mtd:t.filter(a=>a.date>=i).reduce((a,o)=>a+o.cash,0)};const s=e.reduce((a,o)=>a+o.amount,0);return{source:"payments",all:Math.max(s,r),mtd:e.filter(a=>a.date>=i).reduce((a,o)=>a+o.amount,0),mismatch:Math.abs(s-r)>1?{payAll:s,repliesAll:r}:null}}function my(t){const e=t.filter(n=>n.dateBooked&&n.date&&n.dateBooked>=n.date).map(n=>Math.round((n.dateBooked-n.date)/Je));return e.length?(e.sort((n,i)=>n-i),{n:e.length,median:e[Math.floor(e.length/2)],within24h:e.filter(n=>n<=1).length/e.length}):null}function Ov(t){const e=new Date,n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return t.filter(i=>i.callDate&&!i.closed&&!i.dead&&i.callDate>=n&&!i.showed).sort((i,r)=>i.callDate-r.callDate).slice(0,8)}function gy(t){const e=t.filter(i=>i.dead),n=new Map;return e.forEach(i=>{const r=i.deadReason||"Unspecified";n.set(r,(n.get(r)||0)+1)}),{total:e.length,reasons:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function vy(t){const e=t.filter(i=>i.account);if(!e.length)return null;const n=new Map;return e.forEach(i=>n.set(i.account,(n.get(i.account)||0)+1)),{tagged:e.length,total:t.length,accounts:[...n.entries()].sort((i,r)=>r[1]-i[1])}}function _y(t,e,n,i,r){const s=new Date,a=new Date(s.getFullYear(),s.getMonth(),1),o=new Date(s.getFullYear(),s.getMonth(),s.getDate()),l=new Date(s.getFullYear(),s.getMonth()+1,0),c=r??e.filter(d=>d.date>=a).reduce((d,S)=>d+S.cash,0),u=n.replyRate>0?n.replyRate:Xa,f=n.bookingRate>0?n.bookingRate:Ya;let h=0;e.forEach(d=>{d.closed||d.dead||(d.showed?h+=i.closeRate*i.aov:d.booked?h+=i.showRate*i.closeRate*i.aov:h+=f*i.showRate*i.closeRate*i.aov)});let p=0;for(let d=o.getTime()+Je;d<=l.getTime();d+=Je)new Date(d).getDay()!==0&&p++;const _=t.slice(-7),M=_.length?_.reduce((d,S)=>d+S.initials,0)/_.length:0,g=p*M*u*f*i.showRate*i.closeRate*i.aov*.35;return{cashMTD:c,pipe:h,future:g,remDays:p,pace7:M,mid:c+h+g}}function Bv(t,e,n,i,r){const s=_y(t,e,n,i,r),a=n.replyRate>0?n.replyRate:Xa,o=n.bookingRate>0?n.bookingRate:Ya,l=e.filter(M=>!M.closed&&!M.dead);let u=(1+n.initials*7+n.replies*131+Math.round(n.cash)*17)%2147483647;u<=0&&(u+=2147483646);const f=()=>(u=u*16807%2147483647)/2147483647,h=500,p=[];for(let M=0;M<h;M++){let g=s.cashMTD;for(const E of l){let b;E.showed?b=i.closeRate:E.booked?b=i.showRate*i.closeRate:b=o*i.showRate*i.closeRate,f()<b&&(g+=i.aov)}const d=Math.round(s.remDays*s.pace7);let S=0;for(let E=0;E<Math.min(d,4e3);E++)f()<a&&S++;const v=o*i.showRate*i.closeRate*.35;for(let E=0;E<S;E++)f()<v&&(g+=i.aov);p.push(g)}p.sort((M,g)=>M-g);const _=M=>p[Math.min(h-1,Math.floor(M*h))];return{p10:_(.1),p50:_(.5),p90:_(.9),mid:s.mid,cashMTD:s.cashMTD}}function xy(t,e,n,i){const r=[],s=new Date,a=new Date(s.getFullYear(),s.getMonth(),s.getDate());if(!t.length)return r;const o=new Map(t.map(E=>[st(E.date),E])),l=new Date(a.getTime()-Je);l.getDay()!==0&&t[0].date<l&&!o.has(st(l))&&r.push({sev:"r",text:"No EOD row for yesterday"});const c=t[t.length-1],u=t.slice(-15,-1);if(u.length>=5){const E=u.reduce((b,P)=>b+P.initials,0)/u.length;E>10&&c.initials<E*.5?r.push({sev:"r",text:"Volume drop: "+Ee(c.initials)+" initials vs "+Ee(E)+" avg. Block?"}):E>10&&c.initials>E*1.6&&r.push({sev:"g",text:"Volume surge: "+Ee(c.initials)+" initials, "+Ee((c.initials/E-1)*100)+"% over trend"})}const f=t.slice(-3),h=f.reduce((E,b)=>E+b.initials,0),p=rt(e.length,t.reduce((E,b)=>E+b.initials,0));if(h>=120&&p>0){const E=f[0].date,b=e.filter(R=>R.date>=E).length,P=h*p;P>=3&&b===0&&r.push({sev:"r",text:"Reply drought: 0 replies on last "+Ee(h)+" sends, about "+Ee(P)+" expected. Check account health."})}const _=e.filter(E=>!E.booked&&!E.closed&&!E.dead&&(a-E.date)/Je<=1).length;_>0&&r.push({sev:"a",text:_+(_===1?" live reply":" live replies")+" in the last 24h. Work them now"});const M=e.filter(E=>!E.booked&&!E.showed&&!E.closed&&!E.dead&&String(E.status||"").toLowerCase()!=="talking"&&(a-E.date)/Je>7).length;M>0&&r.push({sev:"a",text:M+" unbooked past 7 days"});const g=e.filter(E=>E.callDate&&!E.closed&&!E.dead&&!E.showed&&E.callDate>=a).length;g>0&&r.push({sev:"g",text:g+(g===1?" call":" calls")+" on the books"}),t.some(E=>E.comments>0)&&c.initials>10&&c.comments<c.initials*.4&&r.push({sev:"a",text:"Comments at "+Ee(rt(c.comments,c.initials)*100)+"% of initials on the latest day"});const S=n.filter(E=>E.nextDue&&E.status.toLowerCase()!=="replied");if(S.length>5&&!jf(n)){const E=S.filter(b=>b.nextDue<a).length;E>S.length*.8&&r.push({sev:"a",text:"Lead sheet: "+E+" of "+S.length+" overdue. Sheet stale or queue slipping"})}const v=e.filter(E=>(a-E.date)/Je<=6).reduce((E,b)=>E+b.cash,0);return v>0&&r.push({sev:"g",text:"€"+Math.round(v).toLocaleString("en-IE")+" collected this week"}),r.slice(0,6)}var zv={exports:{}};/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/(function(t,e){(function(n,i){t.exports=i()})(T0,function n(){var i=typeof self<"u"?self:typeof window<"u"?window:i!==void 0?i:{},r=!i.document&&!!i.postMessage,s=i.IS_PAPA_WORKER||!1,a={},o=0,l={parse:function(w,x){var y=(x=x||{}).dynamicTyping||!1;if(R(y)&&(x.dynamicTypingFunction=y,y={}),x.dynamicTyping=y,x.transform=!!R(x.transform)&&x.transform,x.worker&&l.WORKERS_SUPPORTED){var A=function(){if(!l.WORKERS_SUPPORTED)return!1;var L=(W=i.URL||i.webkitURL||null,G=n.toString(),l.BLOB_URL||(l.BLOB_URL=W.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",G,")();"],{type:"text/javascript"})))),H=new i.Worker(L),W,G;return H.onmessage=S,H.id=o++,a[H.id]=H}();return A.userStep=x.step,A.userChunk=x.chunk,A.userComplete=x.complete,A.userError=x.error,x.step=R(x.step),x.chunk=R(x.chunk),x.complete=R(x.complete),x.error=R(x.error),delete x.worker,void A.postMessage({input:w,config:x,workerId:A.id})}var N=null;return l.NODE_STREAM_INPUT,typeof w=="string"?(w=function(L){return L.charCodeAt(0)===65279?L.slice(1):L}(w),N=x.download?new f(x):new p(x)):w.readable===!0&&R(w.read)&&R(w.on)?N=new _(x):(i.File&&w instanceof File||w instanceof Object)&&(N=new h(x)),N.stream(w)},unparse:function(w,x){var y=!1,A=!0,N=",",L=`\r
`,H='"',W=H+H,G=!1,O=null,U=!1;(function(){if(typeof x=="object"){if(typeof x.delimiter!="string"||l.BAD_DELIMITERS.filter(function(j){return x.delimiter.indexOf(j)!==-1}).length||(N=x.delimiter),(typeof x.quotes=="boolean"||typeof x.quotes=="function"||Array.isArray(x.quotes))&&(y=x.quotes),typeof x.skipEmptyLines!="boolean"&&typeof x.skipEmptyLines!="string"||(G=x.skipEmptyLines),typeof x.newline=="string"&&(L=x.newline),typeof x.quoteChar=="string"&&(H=x.quoteChar),typeof x.header=="boolean"&&(A=x.header),Array.isArray(x.columns)){if(x.columns.length===0)throw new Error("Option columns is empty");O=x.columns}x.escapeChar!==void 0&&(W=x.escapeChar+H),(typeof x.escapeFormulae=="boolean"||x.escapeFormulae instanceof RegExp)&&(U=x.escapeFormulae instanceof RegExp?x.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var z=new RegExp(g(H),"g");if(typeof w=="string"&&(w=JSON.parse(w)),Array.isArray(w)){if(!w.length||Array.isArray(w[0]))return Q(null,w,G);if(typeof w[0]=="object")return Q(O||Object.keys(w[0]),w,G)}else if(typeof w=="object")return typeof w.data=="string"&&(w.data=JSON.parse(w.data)),Array.isArray(w.data)&&(w.fields||(w.fields=w.meta&&w.meta.fields||O),w.fields||(w.fields=Array.isArray(w.data[0])?w.fields:typeof w.data[0]=="object"?Object.keys(w.data[0]):[]),Array.isArray(w.data[0])||typeof w.data[0]=="object"||(w.data=[w.data])),Q(w.fields||[],w.data||[],G);throw new Error("Unable to serialize unrecognized input");function Q(j,Me,K){var ee="";typeof j=="string"&&(j=JSON.parse(j)),typeof Me=="string"&&(Me=JSON.parse(Me));var re=Array.isArray(j)&&0<j.length,le=!Array.isArray(Me[0]);if(re&&A){for(var Te=0;Te<j.length;Te++)0<Te&&(ee+=N),ee+=Y(j[Te],Te);0<Me.length&&(ee+=L)}for(var oe=0;oe<Me.length;oe++){var ye=re?j.length:Me[oe].length,Be=!1,I=re?Object.keys(Me[oe]).length===0:Me[oe].length===0;if(K&&!re&&(Be=K==="greedy"?Me[oe].join("").trim()==="":Me[oe].length===1&&Me[oe][0].length===0),K==="greedy"&&re){for(var Ue=[],ze=0;ze<ye;ze++){var Ne=le?j[ze]:ze;Ue.push(Me[oe][Ne])}Be=Ue.join("").trim()===""}if(!Be){for(var fe=0;fe<ye;fe++){0<fe&&!I&&(ee+=N);var Ze=re&&le?j[fe]:fe;ee+=Y(Me[oe][Ze],fe)}oe<Me.length-1&&(!K||0<ye&&!I)&&(ee+=L)}}return ee}function Y(j,Me){if(j==null)return"";if(j.constructor===Date)return JSON.stringify(j).slice(1,25);var K=!1;U&&typeof j=="string"&&U.test(j)&&(j="'"+j,K=!0);var ee=j.toString().replace(z,W);return(K=K||y===!0||typeof y=="function"&&y(j,Me)||Array.isArray(y)&&y[Me]||function(re,le){for(var Te=0;Te<le.length;Te++)if(-1<re.indexOf(le[Te]))return!0;return!1}(ee,l.BAD_DELIMITERS)||-1<ee.indexOf(N)||ee.charAt(0)===" "||ee.charAt(ee.length-1)===" ")?H+ee+H:ee}}};if(l.RECORD_SEP="",l.UNIT_SEP="",l.BYTE_ORDER_MARK="\uFEFF",l.BAD_DELIMITERS=["\r",`
`,'"',l.BYTE_ORDER_MARK],l.WORKERS_SUPPORTED=!r&&!!i.Worker,l.NODE_STREAM_INPUT=1,l.LocalChunkSize=10485760,l.RemoteChunkSize=5242880,l.DefaultDelimiter=",",l.Parser=d,l.ParserHandle=M,l.NetworkStreamer=f,l.FileStreamer=h,l.StringStreamer=p,l.ReadableStreamStreamer=_,i.jQuery){var c=i.jQuery;c.fn.parse=function(w){var x=w.config||{},y=[];return this.each(function(L){if(!(c(this).prop("tagName").toUpperCase()==="INPUT"&&c(this).attr("type").toLowerCase()==="file"&&i.FileReader)||!this.files||this.files.length===0)return!0;for(var H=0;H<this.files.length;H++)y.push({file:this.files[H],inputElem:this,instanceConfig:c.extend({},x)})}),A(),this;function A(){if(y.length!==0){var L,H,W,G,O=y[0];if(R(w.before)){var U=w.before(O.file,O.inputElem);if(typeof U=="object"){if(U.action==="abort")return L="AbortError",H=O.file,W=O.inputElem,G=U.reason,void(R(w.error)&&w.error({name:L},H,W,G));if(U.action==="skip")return void N();typeof U.config=="object"&&(O.instanceConfig=c.extend(O.instanceConfig,U.config))}else if(U==="skip")return void N()}var z=O.instanceConfig.complete;O.instanceConfig.complete=function(Q){R(z)&&z(Q,O.file,O.inputElem),N()},l.parse(O.file,O.instanceConfig)}else R(w.complete)&&w.complete()}function N(){y.splice(0,1),A()}}}function u(w){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(x){var y=b(x);y.chunkSize=parseInt(y.chunkSize),x.step||x.chunk||(y.chunkSize=null),this._handle=new M(y),(this._handle.streamer=this)._config=y}).call(this,w),this.parseChunk=function(x,y){if(this.isFirstChunk&&R(this._config.beforeFirstChunk)){var A=this._config.beforeFirstChunk(x);A!==void 0&&(x=A)}this.isFirstChunk=!1,this._halted=!1;var N=this._partialLine+x;this._partialLine="";var L=this._handle.parse(N,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var H=L.meta.cursor;this._finished||(this._partialLine=N.substring(H-this._baseIndex),this._baseIndex=H),L&&L.data&&(this._rowCount+=L.data.length);var W=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(s)i.postMessage({results:L,workerId:l.WORKER_ID,finished:W});else if(R(this._config.chunk)&&!y){if(this._config.chunk(L,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);L=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(L.data),this._completeResults.errors=this._completeResults.errors.concat(L.errors),this._completeResults.meta=L.meta),this._completed||!W||!R(this._config.complete)||L&&L.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),W||L&&L.meta.paused||this._nextChunk(),L}this._halted=!0},this._sendError=function(x){R(this._config.error)?this._config.error(x):s&&this._config.error&&i.postMessage({workerId:l.WORKER_ID,error:x,finished:!1})}}function f(w){var x;(w=w||{}).chunkSize||(w.chunkSize=l.RemoteChunkSize),u.call(this,w),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(y){this._input=y,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(x=new XMLHttpRequest,this._config.withCredentials&&(x.withCredentials=this._config.withCredentials),r||(x.onload=P(this._chunkLoaded,this),x.onerror=P(this._chunkError,this)),x.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var y=this._config.downloadRequestHeaders;for(var A in y)x.setRequestHeader(A,y[A])}if(this._config.chunkSize){var N=this._start+this._config.chunkSize-1;x.setRequestHeader("Range","bytes="+this._start+"-"+N)}try{x.send(this._config.downloadRequestBody)}catch(L){this._chunkError(L.message)}r&&x.status===0&&this._chunkError()}},this._chunkLoaded=function(){x.readyState===4&&(x.status<200||400<=x.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:x.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(y){var A=y.getResponseHeader("Content-Range");return A===null?-1:parseInt(A.substring(A.lastIndexOf("/")+1))}(x),this.parseChunk(x.responseText)))},this._chunkError=function(y){var A=x.statusText||y;this._sendError(new Error(A))}}function h(w){var x,y;(w=w||{}).chunkSize||(w.chunkSize=l.LocalChunkSize),u.call(this,w);var A=typeof FileReader<"u";this.stream=function(N){this._input=N,y=N.slice||N.webkitSlice||N.mozSlice,A?((x=new FileReader).onload=P(this._chunkLoaded,this),x.onerror=P(this._chunkError,this)):x=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var N=this._input;if(this._config.chunkSize){var L=Math.min(this._start+this._config.chunkSize,this._input.size);N=y.call(N,this._start,L)}var H=x.readAsText(N,this._config.encoding);A||this._chunkLoaded({target:{result:H}})},this._chunkLoaded=function(N){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(N.target.result)},this._chunkError=function(){this._sendError(x.error)}}function p(w){var x;u.call(this,w=w||{}),this.stream=function(y){return x=y,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var y,A=this._config.chunkSize;return A?(y=x.substring(0,A),x=x.substring(A)):(y=x,x=""),this._finished=!x,this.parseChunk(y)}}}function _(w){u.call(this,w=w||{});var x=[],y=!0,A=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(N){this._input=N,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){A&&x.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),x.length?this.parseChunk(x.shift()):y=!0},this._streamData=P(function(N){try{x.push(typeof N=="string"?N:N.toString(this._config.encoding)),y&&(y=!1,this._checkIsFinished(),this.parseChunk(x.shift()))}catch(L){this._streamError(L)}},this),this._streamError=P(function(N){this._streamCleanUp(),this._sendError(N)},this),this._streamEnd=P(function(){this._streamCleanUp(),A=!0,this._streamData("")},this),this._streamCleanUp=P(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function M(w){var x,y,A,N=Math.pow(2,53),L=-N,H=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,W=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,G=this,O=0,U=0,z=!1,Q=!1,Y=[],j={data:[],errors:[],meta:{}};if(R(w.step)){var Me=w.step;w.step=function(oe){if(j=oe,re())ee();else{if(ee(),j.data.length===0)return;O+=oe.data.length,w.preview&&O>w.preview?y.abort():(j.data=j.data[0],Me(j,G))}}}function K(oe){return w.skipEmptyLines==="greedy"?oe.join("").trim()==="":oe.length===1&&oe[0].length===0}function ee(){return j&&A&&(Te("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+l.DefaultDelimiter+"'"),A=!1),w.skipEmptyLines&&(j.data=j.data.filter(function(oe){return!K(oe)})),re()&&function(){if(!j)return;function oe(Be,I){R(w.transformHeader)&&(Be=w.transformHeader(Be,I)),Y.push(Be)}if(Array.isArray(j.data[0])){for(var ye=0;re()&&ye<j.data.length;ye++)j.data[ye].forEach(oe);j.data.splice(0,1)}else j.data.forEach(oe)}(),function(){if(!j||!w.header&&!w.dynamicTyping&&!w.transform)return j;function oe(Be,I){var Ue,ze=w.header?{}:[];for(Ue=0;Ue<Be.length;Ue++){var Ne=Ue,fe=Be[Ue];w.header&&(Ne=Ue>=Y.length?"__parsed_extra":Y[Ue]),w.transform&&(fe=w.transform(fe,Ne)),fe=le(Ne,fe),Ne==="__parsed_extra"?(ze[Ne]=ze[Ne]||[],ze[Ne].push(fe)):ze[Ne]=fe}return w.header&&(Ue>Y.length?Te("FieldMismatch","TooManyFields","Too many fields: expected "+Y.length+" fields but parsed "+Ue,U+I):Ue<Y.length&&Te("FieldMismatch","TooFewFields","Too few fields: expected "+Y.length+" fields but parsed "+Ue,U+I)),ze}var ye=1;return!j.data.length||Array.isArray(j.data[0])?(j.data=j.data.map(oe),ye=j.data.length):j.data=oe(j.data,0),w.header&&j.meta&&(j.meta.fields=Y),U+=ye,j}()}function re(){return w.header&&Y.length===0}function le(oe,ye){return Be=oe,w.dynamicTypingFunction&&w.dynamicTyping[Be]===void 0&&(w.dynamicTyping[Be]=w.dynamicTypingFunction(Be)),(w.dynamicTyping[Be]||w.dynamicTyping)===!0?ye==="true"||ye==="TRUE"||ye!=="false"&&ye!=="FALSE"&&(function(I){if(H.test(I)){var Ue=parseFloat(I);if(L<Ue&&Ue<N)return!0}return!1}(ye)?parseFloat(ye):W.test(ye)?new Date(ye):ye===""?null:ye):ye;var Be}function Te(oe,ye,Be,I){var Ue={type:oe,code:ye,message:Be};I!==void 0&&(Ue.row=I),j.errors.push(Ue)}this.parse=function(oe,ye,Be){var I=w.quoteChar||'"';if(w.newline||(w.newline=function(Ne,fe){Ne=Ne.substring(0,1048576);var Ze=new RegExp(g(fe)+"([^]*?)"+g(fe),"gm"),Ce=(Ne=Ne.replace(Ze,"")).split("\r"),Pe=Ne.split(`
`),D=1<Pe.length&&Pe[0].length<Ce[0].length;if(Ce.length===1||D)return`
`;for(var T=0,V=0;V<Ce.length;V++)Ce[V][0]===`
`&&T++;return T>=Ce.length/2?`\r
`:"\r"}(oe,I)),A=!1,w.delimiter)R(w.delimiter)&&(w.delimiter=w.delimiter(oe),j.meta.delimiter=w.delimiter);else{var Ue=function(Ne,fe,Ze,Ce,Pe){var D,T,V,J;Pe=Pe||[",","	","|",";",l.RECORD_SEP,l.UNIT_SEP];for(var ie=0;ie<Pe.length;ie++){var Z=Pe[ie],Re=0,de=0,ve=0;V=void 0;for(var Ie=new d({comments:Ce,delimiter:Z,newline:fe,preview:10}).parse(Ne),se=0;se<Ie.data.length;se++)if(Ze&&K(Ie.data[se]))ve++;else{var ge=Ie.data[se].length;de+=ge,V!==void 0?0<ge&&(Re+=Math.abs(ge-V),V=ge):V=ge}0<Ie.data.length&&(de/=Ie.data.length-ve),(T===void 0||Re<=T)&&(J===void 0||J<de)&&1.99<de&&(T=Re,D=Z,J=de)}return{successful:!!(w.delimiter=D),bestDelimiter:D}}(oe,w.newline,w.skipEmptyLines,w.comments,w.delimitersToGuess);Ue.successful?w.delimiter=Ue.bestDelimiter:(A=!0,w.delimiter=l.DefaultDelimiter),j.meta.delimiter=w.delimiter}var ze=b(w);return w.preview&&w.header&&ze.preview++,x=oe,y=new d(ze),j=y.parse(x,ye,Be),ee(),z?{meta:{paused:!0}}:j||{meta:{paused:!1}}},this.paused=function(){return z},this.pause=function(){z=!0,y.abort(),x=R(w.chunk)?"":x.substring(y.getCharIndex())},this.resume=function(){G.streamer._halted?(z=!1,G.streamer.parseChunk(x,!0)):setTimeout(G.resume,3)},this.aborted=function(){return Q},this.abort=function(){Q=!0,y.abort(),j.meta.aborted=!0,R(w.complete)&&w.complete(j),x=""}}function g(w){return w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d(w){var x,y=(w=w||{}).delimiter,A=w.newline,N=w.comments,L=w.step,H=w.preview,W=w.fastMode,G=x=w.quoteChar===void 0||w.quoteChar===null?'"':w.quoteChar;if(w.escapeChar!==void 0&&(G=w.escapeChar),(typeof y!="string"||-1<l.BAD_DELIMITERS.indexOf(y))&&(y=","),N===y)throw new Error("Comment character same as delimiter");N===!0?N="#":(typeof N!="string"||-1<l.BAD_DELIMITERS.indexOf(N))&&(N=!1),A!==`
`&&A!=="\r"&&A!==`\r
`&&(A=`
`);var O=0,U=!1;this.parse=function(z,Q,Y){if(typeof z!="string")throw new Error("Input must be a string");var j=z.length,Me=y.length,K=A.length,ee=N.length,re=R(L),le=[],Te=[],oe=[],ye=O=0;if(!z)return Fe();if(w.header&&!Q){var Be=z.split(A)[0].split(y),I=[],Ue={},ze=!1;for(var Ne in Be){var fe=Be[Ne];R(w.transformHeader)&&(fe=w.transformHeader(fe,Ne));var Ze=fe,Ce=Ue[fe]||0;for(0<Ce&&(ze=!0,Ze=fe+"_"+Ce),Ue[fe]=Ce+1;I.includes(Ze);)Ze=Ze+"_"+Ce;I.push(Ze)}if(ze){var Pe=z.split(A);Pe[0]=I.join(y),z=Pe.join(A)}}if(W||W!==!1&&z.indexOf(x)===-1){for(var D=z.split(A),T=0;T<D.length;T++){if(oe=D[T],O+=oe.length,T!==D.length-1)O+=A.length;else if(Y)return Fe();if(!N||oe.substring(0,ee)!==N){if(re){if(le=[],ve(oe.split(y)),Le(),U)return Fe()}else ve(oe.split(y));if(H&&H<=T)return le=le.slice(0,H),Fe(!0)}}return Fe()}for(var V=z.indexOf(y,O),J=z.indexOf(A,O),ie=new RegExp(g(G)+g(x),"g"),Z=z.indexOf(x,O);;)if(z[O]!==x)if(N&&oe.length===0&&z.substring(O,O+ee)===N){if(J===-1)return Fe();O=J+K,J=z.indexOf(A,O),V=z.indexOf(y,O)}else if(V!==-1&&(V<J||J===-1))oe.push(z.substring(O,V)),O=V+Me,V=z.indexOf(y,O);else{if(J===-1)break;if(oe.push(z.substring(O,J)),ge(J+K),re&&(Le(),U))return Fe();if(H&&le.length>=H)return Fe(!0)}else for(Z=O,O++;;){if((Z=z.indexOf(x,Z+1))===-1)return Y||Te.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:le.length,index:O}),se();if(Z===j-1)return se(z.substring(O,Z).replace(ie,x));if(x!==G||z[Z+1]!==G){if(x===G||Z===0||z[Z-1]!==G){V!==-1&&V<Z+1&&(V=z.indexOf(y,Z+1)),J!==-1&&J<Z+1&&(J=z.indexOf(A,Z+1));var Re=Ie(J===-1?V:Math.min(V,J));if(z.substr(Z+1+Re,Me)===y){oe.push(z.substring(O,Z).replace(ie,x)),z[O=Z+1+Re+Me]!==x&&(Z=z.indexOf(x,O)),V=z.indexOf(y,O),J=z.indexOf(A,O);break}var de=Ie(J);if(z.substring(Z+1+de,Z+1+de+K)===A){if(oe.push(z.substring(O,Z).replace(ie,x)),ge(Z+1+de+K),V=z.indexOf(y,O),Z=z.indexOf(x,O),re&&(Le(),U))return Fe();if(H&&le.length>=H)return Fe(!0);break}Te.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:le.length,index:O}),Z++}}else Z++}return se();function ve(pe){le.push(pe),ye=O}function Ie(pe){var He=0;if(pe!==-1){var Ge=z.substring(Z+1,pe);Ge&&Ge.trim()===""&&(He=Ge.length)}return He}function se(pe){return Y||(pe===void 0&&(pe=z.substring(O)),oe.push(pe),O=j,ve(oe),re&&Le()),Fe()}function ge(pe){O=pe,ve(oe),oe=[],J=z.indexOf(A,O)}function Fe(pe){return{data:le,errors:Te,meta:{delimiter:y,linebreak:A,aborted:U,truncated:!!pe,cursor:ye+(Q||0)}}}function Le(){L(Fe()),le=[],Te=[]}},this.abort=function(){U=!0},this.getCharIndex=function(){return O}}function S(w){var x=w.data,y=a[x.workerId],A=!1;if(x.error)y.userError(x.error,x.file);else if(x.results&&x.results.data){var N={abort:function(){A=!0,v(x.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:E,resume:E};if(R(y.userStep)){for(var L=0;L<x.results.data.length&&(y.userStep({data:x.results.data[L],errors:x.results.errors,meta:x.results.meta},N),!A);L++);delete x.results}else R(y.userChunk)&&(y.userChunk(x.results,N,x.file),delete x.results)}x.finished&&!A&&v(x.workerId,x.results)}function v(w,x){var y=a[w];R(y.userComplete)&&y.userComplete(x),y.terminate(),delete a[w]}function E(){throw new Error("Not implemented.")}function b(w){if(typeof w!="object"||w===null)return w;var x=Array.isArray(w)?[]:{};for(var y in w)x[y]=b(w[y]);return x}function P(w,x){return function(){w.apply(x,arguments)}}function R(w){return typeof w=="function"}return s&&(i.onmessage=function(w){var x=w.data;if(l.WORKER_ID===void 0&&x&&(l.WORKER_ID=x.workerId),typeof x.input=="string")i.postMessage({workerId:l.WORKER_ID,results:l.parse(x.input,x.config),finished:!0});else if(i.File&&x.input instanceof File||x.input instanceof Object){var y=l.parse(x.input,x.config);y&&i.postMessage({workerId:l.WORKER_ID,results:y,finished:!0})}}),(f.prototype=Object.create(u.prototype)).constructor=f,(h.prototype=Object.create(u.prototype)).constructor=h,(p.prototype=Object.create(p.prototype)).constructor=p,(_.prototype=Object.create(u.prototype)).constructor=_,l})})(zv);var yy=zv.exports;const sc=Sm(yy);function Wc(t){const e=Date.now()+6048e5;let n=0;for(;t.getTime()>e&&n++<5;)t.setFullYear(t.getFullYear()-1);return t}function Xf(t){let e=iy;if(e==="auto"){e="DMY";for(const n of t){const i=String(n||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);if(i){if(+i[1]>12){e="DMY";break}if(+i[2]>12){e="MDY";break}}}}return function(i){const r=String(i||"").trim();if(!r)return null;let s=r.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(s)return Wc(new Date(+s[1],+s[2]-1,+s[3]));if(s=r.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),s){let o=+s[3];o<100&&(o+=2e3);const l=+s[1],c=+s[2],[u,f]=e==="MDY"?[c,l]:[l,c],h=new Date(o,f-1,u);return isNaN(h)?null:Wc(h)}const a=new Date(r);return isNaN(a)?null:Wc(a)}}function ac(t,e){for(let n=0;n<Math.min(t.length,12);n++){const i=t[n].map(r=>String(r||"").trim().toLowerCase());if(e.every(r=>i.some(s=>s.includes(r))))return n}return-1}function qe(t,...e){const n=t.map(i=>String(i||"").trim().toLowerCase());for(const i of["exact","ends","includes"])for(const r of e){const s=n.findIndex(a=>i==="exact"?a===r:i==="ends"?a.endsWith(r):a.includes(r));if(s!==-1)return s}return-1}function oc(t){return t.map(n=>String(n||"").trim()).join("")?t.some(n=>String(n||"").toLowerCase().includes("example")):!0}function yp(t){const e=sc.parse(t,{skipEmptyLines:!1}).data,n=ac(e,["date","initials"]);if(n===-1)throw new Error("Daily Log: could not find the header row (needs Date and Initials Sent columns).");const i=e[n],r={date:qe(i,"date"),setter:qe(i,"setter"),initials:qe(i,"initials sent","initial"),followUps:qe(i,"follow ups sent","follow"),comments:qe(i,"comments sent","comment"),notes:qe(i,"notes","note")},s=e.slice(n+1).filter(l=>!oc(l)),a=Xf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);c&&o.push({date:c,setter:String(l[r.setter]||"").trim(),initials:br(l[r.initials]),followUps:br(l[r.followUps]),comments:r.comments!==-1?br(l[r.comments]):0,notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function Sp(t){const e=sc.parse(t,{skipEmptyLines:!1}).data,n=ac(e,["date","handle"]);if(n===-1)throw new Error("Replies: could not find the header row (needs Date Replied and Handle columns).");const i=e[n],r={date:qe(i,"date replied","date"),handle:qe(i,"handle"),name:qe(i,"name"),booked:qe(i,"booked","book"),showed:qe(i,"showed","show"),closed:qe(i,"closed","close"),dealValue:qe(i,"deal value","deal"),cash:qe(i,"cash collected","cash"),plan:qe(i,"payment plan","plan"),notes:qe(i,"notes","note"),time:qe(i,"time replied","time"),status:qe(i,"status"),deadReason:qe(i,"dead reason"),account:qe(i,"account"),dateBooked:qe(i,"date booked"),callDate:qe(i,"call date"),dateClosed:qe(i,"date closed")},s=e.slice(n+1).filter(l=>!oc(l)),a=Xf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]);if(!c)continue;const u=String(l[r.status]||"").trim(),f=a(l[r.dateBooked]),h=a(l[r.dateClosed]);o.push({date:c,handle:String(l[r.handle]||"").trim(),name:String(l[r.name]||"").trim(),booked:yo(l[r.booked])||u.toLowerCase()==="booked"||!!f,showed:yo(l[r.showed]),closed:yo(l[r.closed])||!!h,dealValue:br(l[r.dealValue]),cash:br(l[r.cash]),paymentPlan:yo(l[r.plan]),notes:String(l[r.notes]||"").trim(),timeReplied:r.time!==-1?String(l[r.time]||"").trim():"",status:u,dead:u.toLowerCase()==="dead",deadReason:String(l[r.deadReason]||"").trim(),account:String(l[r.account]||"").trim(),dateBooked:f,callDate:Sy(l[r.callDate]),dateClosed:h})}return o.sort((l,c)=>l.date-c.date),o}function Sy(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function My(t){const e=String(t||"").trim();if(!e)return null;let n=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);if(n)return new Date(+n[1],+n[2]-1,+n[3]);if(n=e.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/),n){let i=+n[3];return i<100&&(i+=2e3),new Date(i,+n[2]-1,+n[1])}return null}function Mp(t){const e=sc.parse(t,{skipEmptyLines:!1}).data,n=ac(e,["handle","next due"]);if(n===-1)throw new Error("Leads: header row not found.");const i=e[n],r={handle:qe(i,"handle"),account:qe(i,"account"),name:qe(i,"name"),niche:qe(i,"niche"),nextTouch:qe(i,"next touch"),nextDue:qe(i,"next due date","next due"),status:qe(i,"status")},s=[];for(const a of e.slice(n+1)){if(oc(a))continue;const o=String(a[r.handle]||"").trim();o&&s.push({handle:o,account:String(a[r.account]||"").trim(),name:String(a[r.name]||"").trim(),niche:String(a[r.niche]||"").trim(),nextTouch:String(a[r.nextTouch]||"").trim(),nextDue:My(a[r.nextDue]),status:String(a[r.status]||"").trim()})}return s}function Ep(t){const e=sc.parse(t,{skipEmptyLines:!1}).data,n=ac(e,["date","amount"]);if(n===-1)throw new Error("Payments: header row not found.");const i=e[n],r={date:qe(i,"date"),handle:qe(i,"handle"),amount:qe(i,"amount"),notes:qe(i,"notes","note")},s=e.slice(n+1).filter(l=>!oc(l)),a=Xf(s.map(l=>l[r.date])),o=[];for(const l of s){const c=a(l[r.date]),u=br(l[r.amount]);!c||!(u>0)||o.push({date:c,amount:u,handle:String(l[r.handle]||"").trim(),notes:String(l[r.notes]||"").trim()})}return o.sort((l,c)=>l.date-c.date),o}function Ey(){const t=new Date,e=["KEHOEGROUP Daily Log,,,,,","Fill this in once a day,,,,,","Date,Setter,Initials Sent,Follow Ups Sent,Comments Sent,Notes","01/01/2026,Example Setter,25,10,20,Example row - ignore"],n=["KEHOEGROUP Replies,,,,,,,,,,,,,,,,","One row per person who replied,,,,,,,,,,,,,,,,","Date Replied,Handle,Name,Time Replied,Booked,Showed,Closed,Deal Value,Cash Collected,Payment Plan,Notes,Status,Dead Reason,Account,Date Booked,Call Date,Date Closed","01/01/2026,@example,Example Person,12:00,Y,Y,Y,10000,5000,Y,Example row - ignore,,,,,,"],i=["KEHOEGROUP Payments,,,","One row per payment received,,,","Date,Handle,Amount,Notes"],r=c=>{const u=f=>String(f).padStart(2,"0");return u(c.getDate())+"/"+u(c.getMonth()+1)+"/"+c.getFullYear()},a=(c=>{let u=c;return()=>(u=u*16807%2147483647)/2147483647})(42),o=["@fx_daniel","@ecom.luke","@ai.martina","@salescoach_tom","@realty.jane","@bizopp.kev","@trading.sy","@creator.mia","@closer.pat","@brand.ash","@growth.finn","@wealth.roy","@mentor.zed","@funnel.gus","@scale.ivy","@offer.max","@coach.nia","@deals.obi"];let l=0;for(let c=69;c>=0;c--){const u=new Date(t.getFullYear(),t.getMonth(),t.getDate()-c);if(u.getDay()===0)continue;const f=1+(69-c)/69,h=Math.round((14+a()*14)*f),p=Math.round((8+a()*16)*f),_=Math.round(h*(.8+a()*.2));e.push(r(u)+",Jamie,"+h+","+p+","+_+",");const M=h*(.03+a()*.025),g=Math.floor(M)+(a()<M%1?1:0);for(let d=0;d<g;d++){const S=o[l%o.length]+(l>=o.length?"."+l:"");l++;const v=a()<.38,E=v&&a()<.7,b=E&&c>20&&a()<.35,P=b?a()<.4?15e3:1e4:0,R=b&&a()<.5,w=b?R?P/2:P:0,x=13+Math.floor(a()*11),y=String(x%24).padStart(2,"0")+":"+String(Math.floor(a()*60)).padStart(2,"0"),A=!v&&c>14&&a()<.3,N=A?"Dead":v?"Booked":c<5&&a()<.5?"Talking":"",L=A?["Ghosted","No money","Bad fit","Priced out"][Math.floor(a()*4)]:"",H=v?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+1)):"",W=v&&!E&&c<4?r(new Date(t.getFullYear(),t.getMonth(),t.getDate()+1+Math.floor(a()*3))):v?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+3)):"",G=b?r(new Date(u.getFullYear(),u.getMonth(),u.getDate()+18)):"";n.push([r(u),S,"",y,v?"Y":"",E?"Y":"",b?"Y":"",P||"",w||"",R?"Y":"","",N,L,"Acc 1",H,W,G].join(",")),b&&w>0&&i.push([G,S,w,R?"first payment":"paid in full"].join(","))}}return{daily:e.join(`
`),replies:n.join(`
`),payments:i.join(`
`)}}function wy(){const t=new Date,e=r=>st(new Date(t.getFullYear(),t.getMonth(),t.getDate()+r)),n=["Handle,Account,Name,Niche,Last Touch Sent,Date Last Sent,Next Touch,Next Due Date,Status,Due?,Notes"],i=(r,s,a,o)=>n.push([r,"Acc 1","","Trading","","",s,e(a),o||"Active","",""].join(","));return["@fx_lead1","@fx_lead2","@ai_lead3"].forEach((r,s)=>i(r,"Touch 4",-2+s)),["@ec_lead4","@ec_lead5","@re_lead6","@re_lead7"].forEach(r=>i(r,"FU wk2-4",0)),["@tr_lead8","@tr_lead9"].forEach(r=>i(r,"Touch 5",1)),["@tr_lead10","@ai_lead11","@ec_lead12"].forEach(r=>i(r,"FU mon2-3",2)),i("@dead_lead","Reactivation",5,"Replied"),n.join(`
`)}async function So(t){const e=await fetch(t,{cache:"no-store"});if(!e.ok)throw new Error("HTTP "+e.status);return e.text()}function Ty(){const[t,e]=_e.useState({daily:null,replies:null,leads:[],payments:[],sample:!1,error:null,loadedAt:null}),[n,i]=_e.useState(!0),r=_e.useCallback(async()=>{i(!0);let s=null,a=null,o=[],l=[],c=!1,u=null;try{const[f,h]=await Promise.all([So(Vc(Qx)),So(Vc(Jx))]);s=yp(f),a=Sp(h);try{l=Ep(await So(Vc(ey)))}catch{l=[]}}catch(f){const h=Ey();s=yp(h.daily),a=Sp(h.replies),l=Ep(h.payments),c=!0,u=String(f.message||f)}try{if(c)o=Mp(wy());else for(const f of ny())try{const h=await So(f),p=Mp(h);if(p.length){o=p;break}}catch{}}catch{}e({daily:s,replies:a,leads:o,payments:l,sample:c,error:u,loadedAt:new Date}),i(!1)},[]);return _e.useEffect(()=>{r();const s=setInterval(r,ry);return()=>clearInterval(s)},[r]),{...t,loading:n,reload:r}}function Mo(t){const[e,n]=_e.useState(null);return _e.useEffect(()=>{fetch("/dm-tracker/"+t+".json?cb="+Date.now()).then(i=>i.ok?i.json():null).then(i=>{i&&i.headline&&n(i)}).catch(()=>{})},[t]),e}function fd({sub:t}){return m.jsxs("span",{children:[m.jsxs("span",{className:"display wordmark",children:["KEHOEGROUP",m.jsx("span",{className:"dot",children:"."})]}),t&&m.jsx("span",{className:"wm-sub",children:t})]})}function Ay({kind:t,children:e}){return m.jsx("span",{className:"badge "+t,children:e})}function Pr({value:t,format:e}){const[n,i]=_e.useState(Wn?t:0),r=_e.useRef(Wn?t:0);return _e.useEffect(()=>{const s=r.current,a=t;if(r.current=t,Wn||s===a){i(a);return}const o=performance.now(),l=700;let c;const u=f=>{const h=Math.min((f-o)/l,1),p=1-Math.pow(1-h,3);i(s+(a-s)*p),h<1&&(c=requestAnimationFrame(u))};return c=requestAnimationFrame(u),()=>cancelAnimationFrame(c)},[t]),e(n)}function al({text:t}){const[e,n]=_e.useState(Wn?(t||"").length:0);return _e.useEffect(()=>{if(Wn){n((t||"").length);return}n(0);const i=setInterval(()=>{n(r=>{const s=r+3;return s>=(t||"").length&&clearInterval(i),s})},22);return()=>clearInterval(i)},[t]),m.jsxs("span",{children:[(t||"").slice(0,e),e<(t||"").length&&m.jsx("span",{className:"cursor",children:"▎"})]})}function _t({children:t,delay:e=0,className:n=""}){const i=_e.useRef(null),[r,s]=_e.useState(Wn);return _e.useEffect(()=>{if(Wn)return;const a=i.current;if(!a)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),o.disconnect())},{threshold:.08});return o.observe(a),()=>o.disconnect()},[]),m.jsx("div",{ref:i,className:"reveal "+(r?"in ":"")+n,style:e?{transitionDelay:e+"ms"}:null,children:t})}function Ry({data:t,color:e="#5A5A5A",dot:n="#E11414"}){if(!t||!t.some(l=>l>0))return null;const i=96,r=24,s=Math.max(...t,1),a=t.map((l,c)=>c/(t.length-1)*i+","+(r-2-l/s*(r-7))),o=a[a.length-1].split(",");return m.jsxs("svg",{width:i,height:r,className:"spark","aria-hidden":"true",children:[m.jsx("polyline",{points:a.join(" "),fill:"none",stroke:e,strokeWidth:"1.5",strokeLinejoin:"round",strokeLinecap:"round"}),m.jsx("circle",{cx:o[0],cy:o[1],r:"2.5",fill:n})]})}function Ni({label:t,num:e,format:n,sub:i,red:r,delta:s,spark:a,tip:o}){const l=s>.02?"up":s<-.02?"down":"flat",c=s>.02?"▲":s<-.02?"▼":"·";return m.jsxs("div",{className:"tile",children:[m.jsx("div",{className:"label",children:t}),m.jsx("div",{className:"display val"+(r?" red":""),children:m.jsx(Pr,{value:e,format:n})}),m.jsx("div",{className:"sub",children:i||" "}),s!=null&&m.jsxs("div",{className:"wdelta "+l,children:[c," ",Math.abs(s)<.005?"flat":Math.round(Math.abs(s)*100)+"%"," vs last wk"]}),a&&m.jsx(Ry,{data:a}),o&&m.jsx("div",{className:"tip",children:o.map(([u,f])=>m.jsxs("div",{className:"tip-row",children:[m.jsx("span",{children:u}),m.jsx("b",{children:f})]},u))})]})}function Cy({series:t,height:e=220,yFmt:n=i=>String(Math.round(i))}){const i=t.flatMap(v=>v.data);if(!i.length)return m.jsx("div",{className:"note",children:"No data in this window yet."});const r=720,s=e,a=44,o=10,l=12,c=26,u=i.map(v=>v.x.getTime()),f=Math.min(...u),h=Math.max(...u),p=Math.max(...i.map(v=>v.y),1)*1.12,_=v=>a+(v-f)/Math.max(h-f,1)*(r-a-o),M=v=>l+(1-v/p)*(s-l-c),g=4,d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=[];for(let v=0;v<=3;v++){const E=f+(h-f)*v/3,b=new Date(E);S.push({x:_(E),label:b.getDate()+" "+d[b.getMonth()]})}return m.jsxs("svg",{viewBox:"0 0 "+r+" "+s,className:"chart-svg",children:[Array.from({length:g+1},(v,E)=>{const b=p*E/g;return m.jsxs("g",{children:[m.jsx("line",{x1:a,x2:r-o,y1:M(b),y2:M(b),stroke:"#1B1B1B",strokeWidth:"1"}),m.jsx("text",{x:a-7,y:M(b)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:n(b)})]},E)}),S.map((v,E)=>m.jsx("text",{x:v.x,y:s-8,textAnchor:"middle",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:v.label},E)),t.map(v=>{const E=v.data.map(b=>_(b.x.getTime()).toFixed(1)+","+M(b.y).toFixed(1));return m.jsxs("g",{children:[v.area&&m.jsx("polygon",{points:E.join(" ")+" "+_(h).toFixed(1)+","+M(0)+" "+_(f).toFixed(1)+","+M(0),fill:v.color,opacity:"0.08"}),m.jsx("polyline",{points:E.join(" "),fill:"none",stroke:v.color,strokeWidth:"1.8",strokeLinejoin:"round",strokeLinecap:"round",pathLength:"1",className:"drawline"})]},v.key)})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yf="166",by=0,wp=1,Py=2,Hv=1,Ny=2,ui=3,rr=0,cn=1,pi=2,er=0,As=1,Tp=2,Ap=3,Rp=4,Ly=5,yr=100,Dy=101,Iy=102,Uy=103,Fy=104,ky=200,Oy=201,By=202,zy=203,hd=204,pd=205,Hy=206,Vy=207,Gy=208,jy=209,Wy=210,Xy=211,Yy=212,qy=213,Ky=214,$y=0,Zy=1,Qy=2,kl=3,Jy=4,eS=5,tS=6,nS=7,Vv=0,iS=1,rS=2,tr=0,sS=1,aS=2,oS=3,lS=4,cS=5,uS=6,dS=7,Gv=300,ks=301,Os=302,md=303,gd=304,lc=306,vd=1e3,Tr=1001,_d=1002,Cn=1003,fS=1004,Eo=1005,Hn=1006,Xc=1007,Ar=1008,Ti=1009,jv=1010,Wv=1011,za=1012,qf=1013,kr=1014,_i=1015,qa=1016,Kf=1017,$f=1018,Bs=1020,Xv=35902,Yv=1021,qv=1022,Vn=1023,Kv=1024,$v=1025,Rs=1026,zs=1027,Zv=1028,Zf=1029,Qv=1030,Qf=1031,Jf=1033,ol=33776,ll=33777,cl=33778,ul=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Rd=37809,Cd=37810,bd=37811,Pd=37812,Nd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,Bd=37821,dl=36492,zd=36494,Hd=36495,Jv=36283,Vd=36284,Gd=36285,jd=36286,hS=3200,pS=3201,mS=0,gS=1,Gi="",$n="srgb",lr="srgb-linear",eh="display-p3",cc="display-p3-linear",Ol="linear",ft="srgb",Bl="rec709",zl="p3",jr=7680,Cp=519,vS=512,_S=513,xS=514,e0=515,yS=516,SS=517,MS=518,ES=519,bp=35044,Pp="300 es",xi=2e3,Hl=2001;class Ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Wd=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function wS(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],M=r[0],g=r[3],d=r[6],S=r[1],v=r[4],E=r[7],b=r[2],P=r[5],R=r[8];return s[0]=a*M+o*S+l*b,s[3]=a*g+o*v+l*P,s[6]=a*d+o*E+l*R,s[1]=c*M+u*S+f*b,s[4]=c*g+u*v+f*P,s[7]=c*d+u*E+f*R,s[2]=h*M+p*S+_*b,s[5]=h*g+p*v+_*P,s[8]=h*d+p*E+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new We;function t0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TS(){const t=Vl("canvas");return t.style.display="block",t}const Np={};function n0(t){t in Np||(Np[t]=!0,console.warn(t))}function AS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[lr]:{transfer:Ol,primaries:Bl,toReference:t=>t,fromReference:t=>t},[$n]:{transfer:ft,primaries:Bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cc]:{transfer:Ol,primaries:zl,toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp)},[eh]:{transfer:ft,primaries:zl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},RS=new Set([lr,cc]),at={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!RS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=wo[e].toReference,r=wo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return wo[t].primaries},getTransfer:function(t){return t===Gi?Ol:wo[t].transfer}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class CS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=Vl("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class i0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zc(r[a].image)):s.push(Zc(r[a]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class un extends Ws{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Tr,r=Tr,s=Hn,a=Ar,o=Vn,l=Ti,c=un.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Ka(),this.name="",this.source=new i0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Gv;un.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(p+1)/2,b=(d+1)/2,P=(u+h)/4,R=(f+M)/4,w=(_+g)/4;return v>E&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=P/i,s=R/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=P/r,s=w/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=w/s),this.set(i,r,s,n),this}let S=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-_)/S,this.y=(f-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NS extends Ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new i0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends NS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class r0 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],M=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=M;return}if(f!==M||l!==h||c!==p||u!==_){let g=1-o;const d=l*h+c*p+u*_+f*M,S=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const b=Math.sqrt(v),P=Math.atan2(b,d*S);g=Math.sin(g*P)/b,o=Math.sin(o*P)/b}const E=o*S;if(l=l*g+h*E,c=c*g+p*E,u=u*g+_*E,f=f*g+M*E,g===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-o*p,e[n+2]=c*_+u*p+o*h-l*f,e[n+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new $,Ip=new $a;class Za{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Ao.subVectors(this.max,na),Xr.subVectors(e.a,na),Yr.subVectors(e.b,na),qr.subVectors(e.c,na),Li.subVectors(Yr,Xr),Di.subVectors(qr,Yr),ur.subVectors(Xr,qr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ur.z,ur.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ur.z,0,-ur.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ur.y,ur.x,0];return!Jc(n,Xr,Yr,qr,Ao)||(n=[1,0,0,0,1,0,0,0,1],!Jc(n,Xr,Yr,qr,Ao))?!1:(Ro.crossVectors(Li,Di),n=[Ro.x,Ro.y,Ro.z],Jc(n,Xr,Yr,qr,Ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new $,new $,new $,new $,new $,new $,new $,new $],In=new $,To=new Za,Xr=new $,Yr=new $,qr=new $,Li=new $,Di=new $,ur=new $,na=new $,Ao=new $,Ro=new $,dr=new $;function Jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),u=i.dot(dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const DS=new Za,ia=new $,eu=new $;class th{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(eu)),this.expandByPoint(ia.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new $,tu=new $,Co=new $,Ii=new $,nu=new $,bo=new $,iu=new $;class IS{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Ii.dot(this.direction),l=-Ii.dot(Co),c=Ii.lengthSq(),u=Math.abs(1-a*a);let f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const M=1/u;f*=M,h*=M,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tu).addScaledVector(Co,h),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),bo.subVectors(i,e),iu.crossVectors(nu,bo);let a=this.direction.dot(iu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Ii,bo));if(l<0)return null;const c=o*this.direction.dot(nu.cross(Ii));if(c<0||l+c>a)return null;const u=-o*Ii.dot(iu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,a,o,l,c,u,f,h,p,_,M,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,p,_,M,g)}set(e,n,i,r,s,a,o,l,c,u,f,h,p,_,M,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,_=o*u,M=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-M*c,n[9]=-o*l,n[2]=M-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,M=c*f;n[0]=h+M*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=M+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,M=c*f;n[0]=h-M*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=M-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,_=o*u,M=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+M,n[1]=l*f,n[5]=M*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,M=o*c;n[0]=l*u,n[4]=M-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,M=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+M,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=M*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,FS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ui.crossVectors(i,hn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ui.crossVectors(i,hn)),Ui.normalize(),Po.crossVectors(hn,Ui),r[0]=Ui.x,r[4]=Po.x,r[8]=hn.x,r[1]=Ui.y,r[5]=Po.y,r[9]=hn.y,r[2]=Ui.z,r[6]=Po.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],M=i[6],g=i[10],d=i[14],S=i[3],v=i[7],E=i[11],b=i[15],P=r[0],R=r[4],w=r[8],x=r[12],y=r[1],A=r[5],N=r[9],L=r[13],H=r[2],W=r[6],G=r[10],O=r[14],U=r[3],z=r[7],Q=r[11],Y=r[15];return s[0]=a*P+o*y+l*H+c*U,s[4]=a*R+o*A+l*W+c*z,s[8]=a*w+o*N+l*G+c*Q,s[12]=a*x+o*L+l*O+c*Y,s[1]=u*P+f*y+h*H+p*U,s[5]=u*R+f*A+h*W+p*z,s[9]=u*w+f*N+h*G+p*Q,s[13]=u*x+f*L+h*O+p*Y,s[2]=_*P+M*y+g*H+d*U,s[6]=_*R+M*A+g*W+d*z,s[10]=_*w+M*N+g*G+d*Q,s[14]=_*x+M*L+g*O+d*Y,s[3]=S*P+v*y+E*H+b*U,s[7]=S*R+v*A+E*W+b*z,s[11]=S*w+v*N+E*G+b*Q,s[15]=S*x+v*L+E*O+b*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],M=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+M*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+g*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],M=e[13],g=e[14],d=e[15],S=f*g*c-M*h*c+M*l*p-o*g*p-f*l*d+o*h*d,v=_*h*c-u*g*c-_*l*p+a*g*p+u*l*d-a*h*d,E=u*M*c-_*f*c+_*o*p-a*M*p-u*o*d+a*f*d,b=_*f*l-u*M*l-_*o*h+a*M*h+u*o*g-a*f*g,P=n*S+i*v+r*E+s*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=S*R,e[1]=(M*h*s-f*g*s-M*r*p+i*g*p+f*r*d-i*h*d)*R,e[2]=(o*g*s-M*l*s+M*r*c-i*g*c-o*r*d+i*l*d)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=v*R,e[5]=(u*g*s-_*h*s+_*r*p-n*g*p-u*r*d+n*h*d)*R,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*d-n*l*d)*R,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=E*R,e[9]=(_*f*s-u*M*s-_*i*p+n*M*p+u*i*d-n*f*d)*R,e[10]=(a*M*s-_*o*s+_*i*c-n*M*c-a*i*d+n*o*d)*R,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*R,e[12]=b*R,e[13]=(u*M*r-_*f*r+_*i*h-n*M*h-u*i*g+n*f*g)*R,e[14]=(_*o*r-a*M*r-_*i*l+n*M*l+a*i*g-n*o*g)*R,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,_=s*f,M=a*u,g=a*f,d=o*f,S=l*c,v=l*u,E=l*f,b=i.x,P=i.y,R=i.z;return r[0]=(1-(M+d))*b,r[1]=(p+E)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+d))*P,r[6]=(g+S)*P,r[7]=0,r[8]=(_+v)*R,r[9]=(g-S)*R,r[10]=(1-(h+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const a=Kr.set(r[4],r[5],r[6]).length(),o=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/a,f=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(o===xi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Hl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*u;let _,M;if(o===xi)_=(a+s)*f,M=-2*f;else if(o===Hl)_=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new $,Un=new Nt,US=new $(0,0,0),FS=new $(1,1,1),Ui=new $,Po=new $,hn=new $,Up=new Nt,Fp=new $a;class Ai{constructor(e=0,n=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class s0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const kp=new $,$r=new $a,oi=new Nt,No=new $,ra=new $,OS=new $,BS=new $a,Op=new $(1,0,0),Bp=new $(0,1,0),zp=new $(0,0,1),Hp={type:"added"},zS={type:"removed"},Zr={type:"childadded",child:null},ru={type:"childremoved",child:null};class _n extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new $,n=new Ai,i=new $a,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new We}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new s0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return kp.copy(e).applyQuaternion(this.quaternion),this.position.add(kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?No.copy(e):No.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ra,No,this.up):oi.lookAt(No,ra,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(oi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zS),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hp),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new $,li=new $,su=new $,ci=new $,Qr=new $,Jr=new $,Vp=new $,au=new $,ou=new $,lu=new $;class Jn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),li.subVectors(i,n),su.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(li),l=Fn.dot(su),c=li.dot(li),u=li.dot(su),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),li.subVectors(e,n),Fn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Fn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Qr.subVectors(r,i),Jr.subVectors(s,i),au.subVectors(e,i);const l=Qr.dot(au),c=Jr.dot(au);if(l<=0&&c<=0)return n.copy(i);ou.subVectors(e,r);const u=Qr.dot(ou),f=Jr.dot(ou);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Qr,a);lu.subVectors(e,s);const p=Qr.dot(lu),_=Jr.dot(lu);if(_>=0&&p<=_)return n.copy(s);const M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Jr,o);const g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return Vp.subVectors(s,r),o=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Vp,o);const d=1/(g+M+h);return a=M*d,o=h*d,n.copy(i).addScaledVector(Qr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=wS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=a0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return at.fromWorkingColorSpace(Xt.copy(this),e),Math.round(rn(Xt.r*255,0,255))*65536+Math.round(rn(Xt.g*255,0,255))*256+Math.round(rn(Xt.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=$n){at.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Lo);const i=qc(Fi.h,Lo.h,n),r=qc(Fi.s,Lo.s,n),s=qc(Fi.l,Lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new lt;lt.NAMES=a0;let HS=0;class uc extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=As,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=pd,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==pd&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class o0 extends uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new $,Do=new Qe;class ii{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return n0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Do.fromBufferAttribute(this,n),Do.applyMatrix3(e),this.setXY(n,Do.x,Do.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bp&&(e.usage=this.usage),e}}class l0 extends ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class c0 extends ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nr extends ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}let VS=0;const En=new Nt,uu=new _n,es=new $,pn=new Za,sa=new Za,It=new $;class Hr extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t0(e)?c0:l0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new th);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(pn.min,sa.min),pn.expandByPoint(It),It.addVectors(pn.max,sa.max),pn.expandByPoint(It)):(pn.expandByPoint(sa.min),pn.expandByPoint(sa.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)It.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),It.add(es)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new $,l[w]=new $;const c=new $,u=new $,f=new $,h=new Qe,p=new Qe,_=new Qe,M=new $,g=new $;function d(w,x,y){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,x),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,x),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(A),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(A),o[w].add(M),o[x].add(M),o[y].add(M),l[w].add(g),l[x].add(g),l[y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let w=0,x=S.length;w<x;++w){const y=S[w],A=y.start,N=y.count;for(let L=A,H=A+N;L<H;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new $,E=new $,b=new $,P=new $;function R(w){b.fromBufferAttribute(r,w),P.copy(b);const x=o[w];v.copy(x),v.sub(b.multiplyScalar(b.dot(x))).normalize(),E.crossVectors(P,x);const A=E.dot(l[w])<0?-1:1;a.setXYZW(w,v.x,v.y,v.z,A)}for(let w=0,x=S.length;w<x;++w){const y=S[w],A=y.start,N=y.count;for(let L=A,H=A+N;L<H;L+=3)R(e.getX(L+0)),R(e.getX(L+1)),R(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new ii(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new Nt,fr=new IS,Io=new th,jp=new $,ts=new $,ns=new $,is=new $,du=new $,Uo=new $,Fo=new Qe,ko=new Qe,Oo=new Qe,Wp=new $,Xp=new $,Yp=new $,Bo=new $,zo=new $;class ei extends _n{constructor(e=new Hr,n=new o0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(du.fromBufferAttribute(f,e),a?Uo.addScaledVector(du,u):Uo.addScaledVector(du.sub(n),u))}n.add(Uo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Io.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Io,jp)===null||fr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Gp.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const g=h[_],d=a[g.materialIndex],S=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,b=v;E<b;E+=3){const P=o.getX(E),R=o.getX(E+1),w=o.getX(E+2);r=Ho(this,d,e,i,c,u,f,P,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=_,d=M;g<d;g+=3){const S=o.getX(g),v=o.getX(g+1),E=o.getX(g+2);r=Ho(this,a,e,i,c,u,f,S,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const g=h[_],d=a[g.materialIndex],S=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=S,b=v;E<b;E+=3){const P=E,R=E+1,w=E+2;r=Ho(this,d,e,i,c,u,f,P,R,w),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=_,d=M;g<d;g+=3){const S=g,v=g+1,E=g+2;r=Ho(this,a,e,i,c,u,f,S,v,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function GS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===rr,o),l===null)return null;zo.copy(o),zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zo);return c<n.near||c>n.far?null:{distance:c,point:zo.clone(),object:t}}function Ho(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const u=GS(t,e,n,i,ts,ns,is,Bo);if(u){r&&(Fo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,l),Oo.fromBufferAttribute(r,c),u.uv=Jn.getInterpolation(Bo,ts,ns,is,Fo,ko,Oo,new Qe)),s&&(Fo.fromBufferAttribute(s,o),ko.fromBufferAttribute(s,l),Oo.fromBufferAttribute(s,c),u.uv1=Jn.getInterpolation(Bo,ts,ns,is,Fo,ko,Oo,new Qe)),a&&(Wp.fromBufferAttribute(a,o),Xp.fromBufferAttribute(a,l),Yp.fromBufferAttribute(a,c),u.normal=Jn.getInterpolation(Bo,ts,ns,is,Wp,Xp,Yp,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};Jn.getNormal(ts,ns,is,f.normal),u.face=f}return u}class Qa extends Hr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nr(c,3)),this.setAttribute("normal",new Nr(u,3)),this.setAttribute("uv",new Nr(f,2));function _(M,g,d,S,v,E,b,P,R,w,x){const y=E/R,A=b/w,N=E/2,L=b/2,H=P/2,W=R+1,G=w+1;let O=0,U=0;const z=new $;for(let Q=0;Q<G;Q++){const Y=Q*A-L;for(let j=0;j<W;j++){const Me=j*y-N;z[M]=Me*S,z[g]=Y*v,z[d]=H,c.push(z.x,z.y,z.z),z[M]=0,z[g]=0,z[d]=P>0?1:-1,u.push(z.x,z.y,z.z),f.push(j/R),f.push(1-Q/w),O+=1}}for(let Q=0;Q<w;Q++)for(let Y=0;Y<R;Y++){const j=h+Y+W*Q,Me=h+Y+W*(Q+1),K=h+(Y+1)+W*(Q+1),ee=h+(Y+1)+W*Q;l.push(j,Me,ee),l.push(Me,K,ee),U+=6}o.addGroup(p,U,x),p+=U,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function jS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function u0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const WS={clone:Hs,merge:$t};var XS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends uc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XS,this.fragmentShader=YS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class d0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new $,qp=new Qe,Kp=new Qe;class zn extends d0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wd*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,qp,Kp),n.subVectors(Kp,qp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class qS extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new zn(rs,ss,e,n);s.layers=this.layers,this.add(s);const a=new zn(rs,ss,e,n);a.layers=this.layers,this.add(a);const o=new zn(rs,ss,e,n);o.layers=this.layers,this.add(o);const l=new zn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new zn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class f0 extends un{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class KS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new f0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qa(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:er});s.uniforms.tEquirect.value=n;const a=new ei(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Hn),new qS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const fu=new $,$S=new $,ZS=new We;class _r{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross($S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ZS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new th,Vo=new $;class h0{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],M=r[10],g=r[11],d=r[12],S=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,g-p,E-d).normalize(),i[1].setComponents(l+s,h+c,g+p,E+d).normalize(),i[2].setComponents(l+a,h+u,g+_,E+S).normalize(),i[3].setComponents(l-a,h-u,g-_,E-S).normalize(),i[4].setComponents(l-o,h-f,g-M,E-v).normalize(),n===xi)i[5].setComponents(l+o,h+f,g+M,E+v).normalize();else if(n===Hl)i[5].setComponents(o,f,M,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QS(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,o),f.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,_=h.length;p<_;p++){const M=h[p];t.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ja extends Hr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,p=[],_=[],M=[],g=[];for(let d=0;d<u;d++){const S=d*h-a;for(let v=0;v<c;v++){const E=v*f-s;_.push(E,-S,0),M.push(0,0,1),g.push(v/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const v=S+c*d,E=S+c*(d+1),b=S+1+c*(d+1),P=S+1+c*d;p.push(v,E,P),p.push(E,b,P)}this.setIndex(p),this.setAttribute("position",new Nr(_,3)),this.setAttribute("normal",new Nr(M,3)),this.setAttribute("uv",new Nr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
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
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
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
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
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
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MM=`#define PI 3.141592653589793
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
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
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
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`
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
}`,NM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,HM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#endif`,ZM=`struct PhysicalMaterial {
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
}`,QM=`
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
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
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HE=`#ifdef USE_SKINNING
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
#endif`,VE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`#include <common>
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
}`,sw=`#if DEPTH_PACKING == 3200
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
}`,aw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
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
}`,dw=`uniform vec3 diffuse;
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
}`,fw=`#include <common>
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
}`,hw=`uniform vec3 diffuse;
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define LAMBERT
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
}`,gw=`#define MATCAP
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
}`,vw=`#define MATCAP
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
}`,_w=`#define NORMAL
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
}`,xw=`#define NORMAL
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
}`,yw=`#define PHONG
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
}`,Sw=`#define PHONG
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
}`,Mw=`#define STANDARD
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
}`,Ew=`#define STANDARD
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
}`,ww=`#define TOON
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
}`,Tw=`#define TOON
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
}`,Aw=`uniform float size;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,bw=`uniform vec3 color;
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
}`,Pw=`uniform float rotation;
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
}`,Nw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:JS,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:aM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:dM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:_M,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:wM,displacementmap_pars_vertex:TM,displacementmap_vertex:AM,emissivemap_fragment:RM,emissivemap_pars_fragment:CM,colorspace_fragment:bM,colorspace_pars_fragment:PM,envmap_fragment:NM,envmap_common_pars_fragment:LM,envmap_pars_fragment:DM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:WM,envmap_vertex:UM,fog_vertex:FM,fog_pars_vertex:kM,fog_fragment:OM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:HM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:GM,lights_pars_begin:jM,lights_toon_fragment:XM,lights_toon_pars_fragment:YM,lights_phong_fragment:qM,lights_phong_pars_fragment:KM,lights_physical_fragment:$M,lights_physical_pars_fragment:ZM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:aE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:dE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:vE,normal_pars_fragment:_E,normal_pars_vertex:xE,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:TE,opaque_fragment:AE,packing:RE,premultiplied_alpha_fragment:CE,project_vertex:bE,dithering_fragment:PE,dithering_pars_fragment:NE,roughnessmap_fragment:LE,roughnessmap_pars_fragment:DE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:UE,shadowmap_vertex:FE,shadowmask_pars_fragment:kE,skinbase_vertex:OE,skinning_pars_vertex:BE,skinning_vertex:zE,skinnormal_vertex:HE,specularmap_fragment:VE,specularmap_pars_fragment:GE,tonemapping_fragment:jE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:YE,uv_pars_fragment:qE,uv_pars_vertex:KE,uv_vertex:$E,worldpos_vertex:ZE,background_vert:QE,background_frag:JE,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:rw,depth_frag:sw,distanceRGBA_vert:aw,distanceRGBA_frag:ow,equirect_vert:lw,equirect_frag:cw,linedashed_vert:uw,linedashed_frag:dw,meshbasic_vert:fw,meshbasic_frag:hw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:vw,meshnormal_vert:_w,meshnormal_frag:xw,meshphong_vert:yw,meshphong_frag:Sw,meshphysical_vert:Mw,meshphysical_frag:Ew,meshtoon_vert:ww,meshtoon_frag:Tw,points_vert:Aw,points_frag:Rw,shadow_vert:Cw,shadow_frag:bw,sprite_vert:Pw,sprite_frag:Nw},me={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Zn={basic:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:$t([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:$t([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:$t([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new lt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:$t([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:$t([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:$t([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:$t([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:$t([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:$t([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:$t([me.lights,me.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Zn.physical={uniforms:$t([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Go={r:0,b:0,g:0},pr=new Ai,Lw=new Nt;function Dw(t,e,n,i,r,s,a){const o=new lt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?n:e).get(v)),v}function M(S){let v=!1;const E=_(S);E===null?d(o,l):E&&E.isColor&&(d(E,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(S,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===lc)?(u===void 0&&(u=new ei(new Qa(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Hs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(pr)),u.material.toneMapped=at.getTransfer(E.colorSpace)!==ft,(f!==E||h!==E.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ei(new Ja(2,2),new Ri({name:"BackgroundMaterial",uniforms:Hs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=at.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,v){S.getRGB(Go,u0(t)),i.buffers.color.setClear(Go.r,Go.g,Go.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(o,l)},render:M,addToRenderList:g}}function Iw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(y,A,N,L,H){let W=!1;const G=f(L,N,A);s!==G&&(s=G,c(s.object)),W=p(y,L,N,H),W&&_(y,L,N,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(y,A,N,L),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,A,N){const L=N.wireframe===!0;let H=i[y.id];H===void 0&&(H={},i[y.id]=H);let W=H[A.id];W===void 0&&(W={},H[A.id]=W);let G=W[L];return G===void 0&&(G=h(l()),W[L]=G),G}function h(y){const A=[],N=[],L=[];for(let H=0;H<n;H++)A[H]=0,N[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:L,object:y,attributes:{},index:null}}function p(y,A,N,L){const H=s.attributes,W=A.attributes;let G=0;const O=N.getAttributes();for(const U in O)if(O[U].location>=0){const Q=H[U];let Y=W[U];if(Y===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Q===void 0||Q.attribute!==Y||Y&&Q.data!==Y.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function _(y,A,N,L){const H={},W=A.attributes;let G=0;const O=N.getAttributes();for(const U in O)if(O[U].location>=0){let Q=W[U];Q===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor));const Y={};Y.attribute=Q,Q&&Q.data&&(Y.data=Q.data),H[U]=Y,G++}s.attributes=H,s.attributesNum=G,s.index=L}function M(){const y=s.newAttributes;for(let A=0,N=y.length;A<N;A++)y[A]=0}function g(y){d(y,0)}function d(y,A){const N=s.newAttributes,L=s.enabledAttributes,H=s.attributeDivisors;N[y]=1,L[y]===0&&(t.enableVertexAttribArray(y),L[y]=1),H[y]!==A&&(t.vertexAttribDivisor(y,A),H[y]=A)}function S(){const y=s.newAttributes,A=s.enabledAttributes;for(let N=0,L=A.length;N<L;N++)A[N]!==y[N]&&(t.disableVertexAttribArray(N),A[N]=0)}function v(y,A,N,L,H,W,G){G===!0?t.vertexAttribIPointer(y,A,N,H,W):t.vertexAttribPointer(y,A,N,L,H,W)}function E(y,A,N,L){M();const H=L.attributes,W=N.getAttributes(),G=A.defaultAttributeValues;for(const O in W){const U=W[O];if(U.location>=0){let z=H[O];if(z===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(z=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(z=y.instanceColor)),z!==void 0){const Q=z.normalized,Y=z.itemSize,j=e.get(z);if(j===void 0)continue;const Me=j.buffer,K=j.type,ee=j.bytesPerElement,re=K===t.INT||K===t.UNSIGNED_INT||z.gpuType===qf;if(z.isInterleavedBufferAttribute){const le=z.data,Te=le.stride,oe=z.offset;if(le.isInstancedInterleavedBuffer){for(let ye=0;ye<U.locationSize;ye++)d(U.location+ye,le.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<U.locationSize;ye++)g(U.location+ye);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let ye=0;ye<U.locationSize;ye++)v(U.location+ye,Y/U.locationSize,K,Q,Te*ee,(oe+Y/U.locationSize*ye)*ee,re)}else{if(z.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)d(U.location+le,z.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let le=0;le<U.locationSize;le++)g(U.location+le);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let le=0;le<U.locationSize;le++)v(U.location+le,Y/U.locationSize,K,Q,Y*ee,Y/U.locationSize*le*ee,re)}}else if(G!==void 0){const Q=G[O];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(U.location,Q);break;case 3:t.vertexAttrib3fv(U.location,Q);break;case 4:t.vertexAttrib4fv(U.location,Q);break;default:t.vertexAttrib1fv(U.location,Q)}}}}S()}function b(){w();for(const y in i){const A=i[y];for(const N in A){const L=A[N];for(const H in L)u(L[H].object),delete L[H];delete A[N]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const N in A){const L=A[N];for(const H in L)u(L[H].object),delete L[H];delete A[N]}delete i[y.id]}function R(y){for(const A in i){const N=i[A];if(N[y.id]===void 0)continue;const L=N[y.id];for(const H in L)u(L[H].object),delete L[H];delete N[y.id]}}function w(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:x,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:S}}function Uw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let M=0;M<f;M++)_+=u[M];for(let M=0;M<h.length;M++)n.update(_,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Vn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ti&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==_i&&!R)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),M=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:d,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:E,maxSamples:b}}function kw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const S=s?0:i,v=S*4;let E=d.clippingState||null;l.value=E,E=u(_,h,v,p);for(let b=0;b!==v;++b)E[b]=n[b];d.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const d=p+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,E=p;v!==M;++v,E+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function Ow(t){let e=new WeakMap;function n(a,o){return o===md?a.mapping=ks:o===gd&&(a.mapping=Os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===md||o===gd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new KS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m0 extends d0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const xs=4,$p=[.125,.215,.35,.446,.526,.582],Sr=20,hu=new m0,Zp=new lt;let pu=null,mu=0,gu=0,vu=!1;const xr=(1+Math.sqrt(5))/2,as=1/xr,Qp=[new $(-xr,as,0),new $(xr,as,0),new $(-as,0,xr),new $(as,0,xr),new $(0,xr,-as),new $(0,xr,as),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=vu,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:qa,format:Vn,colorSpace:lr,depthBuffer:!1},r=em(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=em(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bw(s)),this._blurMaterial=zw(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,hu)}_sceneToCubeUV(e,n,i,r){const o=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Zp),u.toneMapping=tr,u.autoClear=!1;const p=new o0({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new ei(new Qa,p);let M=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,M=!0):(p.color.copy(Zp),M=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;jo(r,S*v,d>2?v:0,v,v),u.setRenderTarget(r),M&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ks||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ei(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;jo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qp[(r-s-1)%Qp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ei(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),M=s/_,g=isFinite(s)?1+Math.floor(u*M):Sr;g>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const d=[];let S=0;for(let R=0;R<Sr;++R){const w=R/M,x=Math.exp(-w*w/2);d.push(x),R===0?S+=x:R<g&&(S+=2*x)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const E=this._sizeLods[r],b=3*E*(r>v-xs?r-v+xs:0),P=4*(this._cubeSize-E);jo(n,b,P,3*E,2*E),l.setRenderTarget(n),l.render(f,hu)}}function Bw(t){const e=[],n=[],i=[];let r=t;const s=t-xs+1+$p.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-xs?l=$p[a-t+xs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,M=3,g=2,d=1,S=new Float32Array(M*_*p),v=new Float32Array(g*_*p),E=new Float32Array(d*_*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,w=P>2?0:-1,x=[R,w,0,R+2/3,w,0,R+2/3,w+1,0,R,w,0,R+2/3,w+1,0,R,w+1,0];S.set(x,M*_*P),v.set(h,g*_*P);const y=[P,P,P,P,P,P];E.set(y,d*_*P)}const b=new Hr;b.setAttribute("position",new ii(S,M)),b.setAttribute("uv",new ii(v,g)),b.setAttribute("faceIndex",new ii(E,d)),e.push(b),r>xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function em(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function zw(t,e,n){const i=new Float32Array(Sr),r=new $(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function tm(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function nm(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function Hw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===md||l===gd,u=l===ks||l===Os;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Jp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Jp(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Vw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&n0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gw(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const M=h.morphAttributes[_];for(let g=0,d=M.length;g<d;g++)e.remove(M[g])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const M=p[_];for(let g=0,d=M.length;g<d;g++)e.update(M[g],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let M=0;if(p!==null){const S=p.array;M=p.version;for(let v=0,E=S.length;v<E;v+=3){const b=S[v+0],P=S[v+1],R=S[v+2];h.push(b,P,P,R,R,b)}}else if(_!==void 0){const S=_.array;M=_.version;for(let v=0,E=S.length/3-1;v<E;v+=3){const b=v+0,P=v+1,R=v+2;h.push(b,P,P,R,R,b)}}else return;const g=new(t0(h)?c0:l0)(h,1);g.version=M;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function jw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];n.update(g,i,1)}function f(h,p,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],M[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,M,0,_);let d=0;for(let S=0;S<_;S++)d+=p[S];for(let S=0;S<M.length;S++)n.update(d,i,M[S])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Ww(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Xw(t,e,n){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),M===!0&&(E=2),g===!0&&(E=3);let b=o.attributes.position.count*E,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*P*4*f),w=new r0(R,b,P,f);w.type=_i,w.needsUpdate=!0;const x=E*4;for(let A=0;A<f;A++){const N=d[A],L=S[A],H=v[A],W=b*P*4*A;for(let G=0;G<N.count;G++){const O=G*x;_===!0&&(r.fromBufferAttribute(N,G),R[W+O+0]=r.x,R[W+O+1]=r.y,R[W+O+2]=r.z,R[W+O+3]=0),M===!0&&(r.fromBufferAttribute(L,G),R[W+O+4]=r.x,R[W+O+5]=r.y,R[W+O+6]=r.z,R[W+O+7]=0),g===!0&&(r.fromBufferAttribute(H,G),R[W+O+8]=r.x,R[W+O+9]=r.y,R[W+O+10]=r.z,R[W+O+11]=H.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Qe(b,P)},i.set(o,h),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Yw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class g0 extends un{constructor(e,n,i,r,s,a,o,l,c,u=Rs){if(u!==Rs&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Rs&&(i=kr),i===void 0&&u===zs&&(i=Bs),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v0=new un,im=new g0(1,1),_0=new r0,x0=new LS,y0=new f0,rm=[],sm=[],am=new Float32Array(16),om=new Float32Array(9),lm=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=rm[r];if(s===void 0&&(s=new Float32Array(r),rm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dc(t,e){let n=sm[e];n===void 0&&(n=new Int32Array(e),sm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;lm.set(i),t.uniformMatrix2fv(this.addr,!1,lm),Dt(n,i)}}function Jw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;om.set(i),t.uniformMatrix3fv(this.addr,!1,om),Dt(n,i)}}function e1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;am.set(i),t.uniformMatrix4fv(this.addr,!1,am),Dt(n,i)}}function t1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function s1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function a1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function o1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function c1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(im.compareFunction=e0,s=im):s=v0,n.setTexture2D(e||s,r)}function u1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x0,r)}function d1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y0,r)}function f1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_0,r)}function h1(t){switch(t){case 5126:return qw;case 35664:return Kw;case 35665:return $w;case 35666:return Zw;case 35674:return Qw;case 35675:return Jw;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return a1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return f1}}function p1(t,e){t.uniform1fv(this.addr,e)}function m1(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function g1(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function v1(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function _1(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function x1(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y1(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S1(t,e){t.uniform1iv(this.addr,e)}function M1(t,e){t.uniform2iv(this.addr,e)}function E1(t,e){t.uniform3iv(this.addr,e)}function w1(t,e){t.uniform4iv(this.addr,e)}function T1(t,e){t.uniform1uiv(this.addr,e)}function A1(t,e){t.uniform2uiv(this.addr,e)}function R1(t,e){t.uniform3uiv(this.addr,e)}function C1(t,e){t.uniform4uiv(this.addr,e)}function b1(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||v0,s[a])}function P1(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x0,s[a])}function N1(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||y0,s[a])}function L1(t,e,n){const i=this.cache,r=e.length,s=dc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||_0,s[a])}function D1(t){switch(t){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return _1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return S1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return w1;case 5125:return T1;case 36294:return A1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return L1}}class I1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=h1(n.type)}}class U1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D1(n.type)}}class F1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function cm(t,e){t.seq.push(e),t.map[e.id]=e}function k1(t,e,n){const i=t.name,r=i.length;for(_u.lastIndex=0;;){const s=_u.exec(i),a=_u.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cm(n,c===void 0?new I1(o,t,e):new U1(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new F1(o),cm(n,f)),n=f}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);k1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const O1=37297;let B1=0;function z1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function H1(t){const e=at.getPrimaries(at.workingColorSpace),n=at.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case cc:return[i,"LinearTransferOETF"];case $n:case eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function dm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+z1(t.getShaderSource(e),a)}else return r}function V1(t,e){const n=H1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function G1(t,e){let n;switch(e){case sS:n="Linear";break;case aS:n="Reinhard";break;case oS:n="OptimizedCineon";break;case lS:n="ACESFilmic";break;case uS:n="AgX";break;case dS:n="Neutral";break;case cS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function j1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function W1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function X1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(Y1,K1)}const q1=new Map;function K1(t,e){let n=je[e];if(n===void 0){const i=q1.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xd(n)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pm(t){return t.replace($1,Z1)}function Z1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Q1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function J1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ks:case Os:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vv:e="ENVMAP_BLENDING_MULTIPLY";break;case iS:e="ENVMAP_BLENDING_MIX";break;case rS:e="ENVMAP_BLENDING_ADD";break}return e}function nT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Q1(n),c=J1(n),u=eT(n),f=tT(n),h=nT(n),p=j1(n),_=W1(s),M=r.createProgram();let g,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ua).join(`
`),d.length>0&&(d+=`
`)):(g=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),d=[mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?je.tonemapping_pars_fragment:"",n.toneMapping!==tr?G1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,V1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=Xd(a),a=fm(a,n),a=hm(a,n),o=Xd(o),o=fm(o,n),o=hm(o,n),a=pm(a),o=pm(o),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=S+g+a,E=S+d+o,b=um(r,r.VERTEX_SHADER,v),P=um(r,r.FRAGMENT_SHADER,E);r.attachShader(M,b),r.attachShader(M,P),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(A){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(M).trim(),L=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(P).trim();let W=!0,G=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,b,P);else{const O=dm(r,b,"vertex"),U=dm(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+O+`
`+U)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||H==="")&&(G=!1);G&&(A.diagnostics={runnable:W,programLog:N,vertexShader:{log:L,prefix:g},fragmentShader:{log:H,prefix:d}})}r.deleteShader(b),r.deleteShader(P),w=new fl(r,M),x=X1(r,M)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,O1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=B1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=b,this.fragmentShader=P,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function oT(t,e,n,i,r,s,a){const o=new s0,l=new sT,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,y,A,N,L){const H=N.fog,W=L.geometry,G=x.isMeshStandardMaterial?N.environment:null,O=(x.isMeshStandardMaterial?n:e).get(x.envMap||G),U=O&&O.mapping===lc?O.image.height:null,z=_[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Y=Q!==void 0?Q.length:0;let j=0;W.morphAttributes.position!==void 0&&(j=1),W.morphAttributes.normal!==void 0&&(j=2),W.morphAttributes.color!==void 0&&(j=3);let Me,K,ee,re;if(z){const et=Zn[z];Me=et.vertexShader,K=et.fragmentShader}else Me=x.vertexShader,K=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const le=t.getRenderTarget(),Te=L.isInstancedMesh===!0,oe=L.isBatchedMesh===!0,ye=!!x.map,Be=!!x.matcap,I=!!O,Ue=!!x.aoMap,ze=!!x.lightMap,Ne=!!x.bumpMap,fe=!!x.normalMap,Ze=!!x.displacementMap,Ce=!!x.emissiveMap,Pe=!!x.metalnessMap,D=!!x.roughnessMap,T=x.anisotropy>0,V=x.clearcoat>0,J=x.dispersion>0,ie=x.iridescence>0,Z=x.sheen>0,Re=x.transmission>0,de=T&&!!x.anisotropyMap,ve=V&&!!x.clearcoatMap,Ie=V&&!!x.clearcoatNormalMap,se=V&&!!x.clearcoatRoughnessMap,ge=ie&&!!x.iridescenceMap,Fe=ie&&!!x.iridescenceThicknessMap,Le=Z&&!!x.sheenColorMap,pe=Z&&!!x.sheenRoughnessMap,He=!!x.specularMap,Ge=!!x.specularColorMap,gt=!!x.specularIntensityMap,F=Re&&!!x.transmissionMap,ce=Re&&!!x.thicknessMap,te=!!x.gradientMap,ne=!!x.alphaMap,he=x.alphaTest>0,ke=!!x.alphaHash,Ke=!!x.extensions;let Tt=tr;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Ot={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:K,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:oe,batchingColor:oe&&L._colorsTexture!==null,instancing:Te,instancingColor:Te&&L.instanceColor!==null,instancingMorph:Te&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:lr,alphaToCoverage:!!x.alphaToCoverage,map:ye,matcap:Be,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:U,aoMap:Ue,lightMap:ze,bumpMap:Ne,normalMap:fe,displacementMap:h&&Ze,emissiveMap:Ce,normalMapObjectSpace:fe&&x.normalMapType===gS,normalMapTangentSpace:fe&&x.normalMapType===mS,metalnessMap:Pe,roughnessMap:D,anisotropy:T,anisotropyMap:de,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:Ie,clearcoatRoughnessMap:se,dispersion:J,iridescence:ie,iridescenceMap:ge,iridescenceThicknessMap:Fe,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:pe,specularMap:He,specularColorMap:Ge,specularIntensityMap:gt,transmission:Re,transmissionMap:F,thicknessMap:ce,gradientMap:te,opaque:x.transparent===!1&&x.blending===As&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:he,alphaHash:ke,combine:x.combine,mapUv:ye&&M(x.map.channel),aoMapUv:Ue&&M(x.aoMap.channel),lightMapUv:ze&&M(x.lightMap.channel),bumpMapUv:Ne&&M(x.bumpMap.channel),normalMapUv:fe&&M(x.normalMap.channel),displacementMapUv:Ze&&M(x.displacementMap.channel),emissiveMapUv:Ce&&M(x.emissiveMap.channel),metalnessMapUv:Pe&&M(x.metalnessMap.channel),roughnessMapUv:D&&M(x.roughnessMap.channel),anisotropyMapUv:de&&M(x.anisotropyMap.channel),clearcoatMapUv:ve&&M(x.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&M(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&M(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(x.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(x.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&M(x.sheenRoughnessMap.channel),specularMapUv:He&&M(x.specularMap.channel),specularColorMapUv:Ge&&M(x.specularColorMap.channel),specularIntensityMapUv:gt&&M(x.specularIntensityMap.channel),transmissionMapUv:F&&M(x.transmissionMap.channel),thicknessMapUv:ce&&M(x.thicknessMap.channel),alphaMapUv:ne&&M(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(fe||T),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(ye||ne),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:ye&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pi,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)y.push(A),y.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(S(y,x),v(y,x),y.push(t.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function v(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),x.push(o.mask)}function E(x){const y=_[x.type];let A;if(y){const N=Zn[y];A=WS.clone(N.uniforms)}else A=x.uniforms;return A}function b(x,y){let A;for(let N=0,L=u.length;N<L;N++){const H=u[N];if(H.cacheKey===y){A=H,++A.usedTimes;break}}return A===void 0&&(A=new iT(t,y,x,s),u.push(A)),A}function P(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function w(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:E,acquireProgram:b,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:w}}function lT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,_,M,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:M,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=M,d.group=g),e++,d}function o(f,h,p,_,M,g){const d=a(f,h,p,_,M,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,M,g){const d=a(f,h,p,_,M,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||cT),i.length>1&&i.sort(h||gm),r.length>1&&r.sort(h||gm)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new vm,t.set(i,[a])):r>=s.length?(a=new vm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new lt};break;case"SpotLight":n={position:new $,direction:new $,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function fT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t){const e=new dT,n=fT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new Nt,a=new Nt;function o(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,_=0,M=0,g=0,d=0,S=0,v=0,E=0,b=0,P=0,R=0;c.sort(pT);for(let x=0,y=c.length;x<y;x++){const A=c[x],N=A.color,L=A.intensity,H=A.distance,W=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*L,f+=N.g*L,h+=N.b*L;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],L);R++}else if(A.isDirectionalLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const O=A.shadow,U=n.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=A.shadow.matrix,S++}i.directional[p]=G,p++}else if(A.isSpotLight){const G=e.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(N).multiplyScalar(L),G.distance=H,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[M]=G;const O=A.shadow;if(A.map&&(i.spotLightMap[b]=A.map,b++,O.updateMatrices(A),A.castShadow&&P++),i.spotLightMatrix[M]=O.matrix,A.castShadow){const U=n.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.spotShadow[M]=U,i.spotShadowMap[M]=W,E++}M++}else if(A.isRectAreaLight){const G=e.get(A);G.color.copy(N).multiplyScalar(L),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=G,g++}else if(A.isPointLight){const G=e.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const O=A.shadow,U=n.get(A);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=A.shadow.matrix,v++}i.point[_]=G,_++}else if(A.isHemisphereLight){const G=e.get(A);G.skyColor.copy(A.color).multiplyScalar(L),G.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[d]=G,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const w=i.hash;(w.directionalLength!==p||w.pointLength!==_||w.spotLength!==M||w.rectAreaLength!==g||w.hemiLength!==d||w.numDirectionalShadows!==S||w.numPointShadows!==v||w.numSpotShadows!==E||w.numSpotMaps!==b||w.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,w.directionalLength=p,w.pointLength=_,w.spotLength=M,w.rectAreaLength=g,w.hemiLength=d,w.numDirectionalShadows=S,w.numPointShadows=v,w.numSpotShadows=E,w.numSpotMaps=b,w.numLightProbes=R,i.version=hT++)}function l(c,u){let f=0,h=0,p=0,_=0,M=0;const g=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const v=c[d];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function _m(t){const e=new mT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _m(t),e.set(r,[o])):s>=a.length?(o=new _m(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class vT extends uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
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
}`;function ST(t,e,n){let i=new h0;const r=new Qe,s=new Qe,a=new Ft,o=new vT({depthPacking:pS}),l=new _T,c={},u=n.maxTextureSize,f={[rr]:cn,[cn]:rr,[pi]:pi},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:xT,fragmentShader:yT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Hr;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ei(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let d=this.type;this.render=function(P,R,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const x=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),N=t.state;N.setBlending(er),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=d!==ui&&this.type===ui,H=d===ui&&this.type!==ui;for(let W=0,G=P.length;W<G;W++){const O=P[W],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const z=U.getFrameExtents();if(r.multiply(z),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,U.mapSize.y=s.y)),U.map===null||L===!0||H===!0){const Y=this.type!==ui?{minFilter:Cn,magFilter:Cn}:{};U.map!==null&&U.map.dispose(),U.map=new Or(r.x,r.y,Y),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Q=U.getViewportCount();for(let Y=0;Y<Q;Y++){const j=U.getViewport(Y);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),N.viewport(a),U.updateMatrices(O,Y),i=U.getFrustum(),E(R,w,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===ui&&S(U,w),U.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(x,y,A)};function S(P,R){const w=e.update(M);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Or(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(R,null,w,h,M,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(R,null,w,p,M,null)}function v(P,R,w,x){let y=null;const A=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=y.uuid,L=R.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let W=H[L];W===void 0&&(W=y.clone(),H[L]=W,R.addEventListener("dispose",b)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,x===ui?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=t.properties.get(y);N.light=w}return y}function E(P,R,w,x,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ui)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const L=e.update(P),H=P.material;if(Array.isArray(H)){const W=L.groups;for(let G=0,O=W.length;G<O;G++){const U=W[G],z=H[U.materialIndex];if(z&&z.visible){const Q=v(P,z,x,y);P.onBeforeShadow(t,P,R,w,L,Q,U),t.renderBufferDirect(w,null,L,Q,P,U),P.onAfterShadow(t,P,R,w,L,Q,U)}}}else if(H.visible){const W=v(P,H,x,y);P.onBeforeShadow(t,P,R,w,L,W,null),t.renderBufferDirect(w,null,L,W,P,null),P.onAfterShadow(t,P,R,w,L,W,null)}}const N=P.children;for(let L=0,H=N.length;L<H;L++)E(N[L],R,w,x,y)}function b(P){P.target.removeEventListener("dispose",b);for(const w in c){const x=c[w],y=P.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}function MT(t){function e(){let F=!1;const ce=new Ft;let te=null;const ne=new Ft(0,0,0,0);return{setMask:function(he){te!==he&&!F&&(t.colorMask(he,he,he,he),te=he)},setLocked:function(he){F=he},setClear:function(he,ke,Ke,Tt,Ot){Ot===!0&&(he*=Tt,ke*=Tt,Ke*=Tt),ce.set(he,ke,Ke,Tt),ne.equals(ce)===!1&&(t.clearColor(he,ke,Ke,Tt),ne.copy(ce))},reset:function(){F=!1,te=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,ce=null,te=null,ne=null;return{setTest:function(he){he?re(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(he){ce!==he&&!F&&(t.depthMask(he),ce=he)},setFunc:function(he){if(te!==he){switch(he){case $y:t.depthFunc(t.NEVER);break;case Zy:t.depthFunc(t.ALWAYS);break;case Qy:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case Jy:t.depthFunc(t.EQUAL);break;case eS:t.depthFunc(t.GEQUAL);break;case tS:t.depthFunc(t.GREATER);break;case nS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=he}},setLocked:function(he){F=he},setClear:function(he){ne!==he&&(t.clearDepth(he),ne=he)},reset:function(){F=!1,ce=null,te=null,ne=null}}}function i(){let F=!1,ce=null,te=null,ne=null,he=null,ke=null,Ke=null,Tt=null,Ot=null;return{setTest:function(et){F||(et?re(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!F&&(t.stencilMask(et),ce=et)},setFunc:function(et,ri,Yn){(te!==et||ne!==ri||he!==Yn)&&(t.stencilFunc(et,ri,Yn),te=et,ne=ri,he=Yn)},setOp:function(et,ri,Yn){(ke!==et||Ke!==ri||Tt!==Yn)&&(t.stencilOp(et,ri,Yn),ke=et,Ke=ri,Tt=Yn)},setLocked:function(et){F=et},setClear:function(et){Ot!==et&&(t.clearStencil(et),Ot=et)},reset:function(){F=!1,ce=null,te=null,ne=null,he=null,ke=null,Ke=null,Tt=null,Ot=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,_=!1,M=null,g=null,d=null,S=null,v=null,E=null,b=null,P=new lt(0,0,0),R=0,w=!1,x=null,y=null,A=null,N=null,L=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=G>=2);let U=null,z={};const Q=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),j=new Ft().fromArray(Q),Me=new Ft().fromArray(Y);function K(F,ce,te,ne){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(F,ke),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<te;Ke++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(ce+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const ee={};ee[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),re(t.DEPTH_TEST),s.setFunc(kl),Ne(!1),fe(wp),re(t.CULL_FACE),Ue(er);function re(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function le(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Te(F,ce){return u[F]!==ce?(t.bindFramebuffer(F,ce),u[F]=ce,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ce),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function oe(F,ce){let te=h,ne=!1;if(F){te=f.get(ce),te===void 0&&(te=[],f.set(ce,te));const he=F.textures;if(te.length!==he.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,Ke=he.length;ke<Ke;ke++)te[ke]=t.COLOR_ATTACHMENT0+ke;te.length=he.length,ne=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ne=!0);ne&&t.drawBuffers(te)}function ye(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Be={[yr]:t.FUNC_ADD,[Dy]:t.FUNC_SUBTRACT,[Iy]:t.FUNC_REVERSE_SUBTRACT};Be[Uy]=t.MIN,Be[Fy]=t.MAX;const I={[ky]:t.ZERO,[Oy]:t.ONE,[By]:t.SRC_COLOR,[hd]:t.SRC_ALPHA,[Wy]:t.SRC_ALPHA_SATURATE,[Gy]:t.DST_COLOR,[Hy]:t.DST_ALPHA,[zy]:t.ONE_MINUS_SRC_COLOR,[pd]:t.ONE_MINUS_SRC_ALPHA,[jy]:t.ONE_MINUS_DST_COLOR,[Vy]:t.ONE_MINUS_DST_ALPHA,[Xy]:t.CONSTANT_COLOR,[Yy]:t.ONE_MINUS_CONSTANT_COLOR,[qy]:t.CONSTANT_ALPHA,[Ky]:t.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ce,te,ne,he,ke,Ke,Tt,Ot,et){if(F===er){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(re(t.BLEND),_=!0),F!==Ly){if(F!==M||et!==w){if((g!==yr||v!==yr)&&(t.blendEquation(t.FUNC_ADD),g=yr,v=yr),et)switch(F){case As:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tp:t.blendFunc(t.ONE,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case As:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}d=null,S=null,E=null,b=null,P.set(0,0,0),R=0,M=F,w=et}return}he=he||ce,ke=ke||te,Ke=Ke||ne,(ce!==g||he!==v)&&(t.blendEquationSeparate(Be[ce],Be[he]),g=ce,v=he),(te!==d||ne!==S||ke!==E||Ke!==b)&&(t.blendFuncSeparate(I[te],I[ne],I[ke],I[Ke]),d=te,S=ne,E=ke,b=Ke),(Tt.equals(P)===!1||Ot!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Ot),P.copy(Tt),R=Ot),M=F,w=!1}function ze(F,ce){F.side===pi?le(t.CULL_FACE):re(t.CULL_FACE);let te=F.side===cn;ce&&(te=!te),Ne(te),F.blending===As&&F.transparent===!1?Ue(er):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;a.setTest(ne),ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ce(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){x!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),x=F)}function fe(F){F!==by?(re(t.CULL_FACE),F!==y&&(F===wp?t.cullFace(t.BACK):F===Py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),y=F}function Ze(F){F!==A&&(W&&t.lineWidth(F),A=F)}function Ce(F,ce,te){F?(re(t.POLYGON_OFFSET_FILL),(N!==ce||L!==te)&&(t.polygonOffset(ce,te),N=ce,L=te)):le(t.POLYGON_OFFSET_FILL)}function Pe(F){F?re(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function D(F){F===void 0&&(F=t.TEXTURE0+H-1),U!==F&&(t.activeTexture(F),U=F)}function T(F,ce,te){te===void 0&&(U===null?te=t.TEXTURE0+H-1:te=U);let ne=z[te];ne===void 0&&(ne={type:void 0,texture:void 0},z[te]=ne),(ne.type!==F||ne.texture!==ce)&&(U!==te&&(t.activeTexture(te),U=te),t.bindTexture(F,ce||ee[F]),ne.type=F,ne.texture=ce)}function V(){const F=z[U];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){j.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),j.copy(F))}function pe(F){Me.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Me.copy(F))}function He(F,ce){let te=l.get(ce);te===void 0&&(te=new WeakMap,l.set(ce,te));let ne=te.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(ce,F.name),te.set(F,ne))}function Ge(F,ce){const ne=l.get(ce).get(F);o.get(ce)!==ne&&(t.uniformBlockBinding(ce,ne,F.__bindingPointIndex),o.set(ce,ne))}function gt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,z={},u={},f=new WeakMap,h=[],p=null,_=!1,M=null,g=null,d=null,S=null,v=null,E=null,b=null,P=new lt(0,0,0),R=0,w=!1,x=null,y=null,A=null,N=null,L=null,j.set(0,0,t.canvas.width,t.canvas.height),Me.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:re,disable:le,bindFramebuffer:Te,drawBuffers:oe,useProgram:ye,setBlending:Ue,setMaterial:ze,setFlipSided:Ne,setCullFace:fe,setLineWidth:Ze,setPolygonOffset:Ce,setScissorTest:Pe,activeTexture:D,bindTexture:T,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:ge,texImage3D:Fe,updateUBOMapping:He,uniformBlockBinding:Ge,texStorage2D:Ie,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Le,viewport:pe,reset:gt}}function xm(t,e,n,i){const r=ET(i);switch(n){case Yv:return t*e;case Kv:return t*e;case $v:return t*e*2;case Zv:return t*e/r.components*r.byteLength;case Zf:return t*e/r.components*r.byteLength;case Qv:return t*e*2/r.components*r.byteLength;case Qf:return t*e*2/r.components*r.byteLength;case qv:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Jf:return t*e*4/r.components*r.byteLength;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(t,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dl:case zd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jv:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(t){switch(t){case Ti:case jv:return{byteLength:1,components:1};case za:case Wv:case qa:return{byteLength:2,components:1};case Kf:case $f:return{byteLength:2,components:4};case kr:case qf:case _i:return{byteLength:4,components:1};case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function wT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return p?new OffscreenCanvas(D,T):Vl("canvas")}function M(D,T,V){let J=1;const ie=Pe(D);if((ie.width>V||ie.height>V)&&(J=V/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Z=Math.floor(J*ie.width),Re=Math.floor(J*ie.height);f===void 0&&(f=_(Z,Re));const de=T?_(Z,Re):f;return de.width=Z,de.height=Re,de.getContext("2d").drawImage(D,0,0,Z,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Re+")."),de}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),D;return D}function g(D){return D.generateMipmaps&&D.minFilter!==Cn&&D.minFilter!==Hn}function d(D){t.generateMipmap(D)}function S(D,T,V,J,ie=!1){if(D!==null){if(t[D]!==void 0)return t[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=T;if(T===t.RED&&(V===t.FLOAT&&(Z=t.R32F),V===t.HALF_FLOAT&&(Z=t.R16F),V===t.UNSIGNED_BYTE&&(Z=t.R8)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.R8UI),V===t.UNSIGNED_SHORT&&(Z=t.R16UI),V===t.UNSIGNED_INT&&(Z=t.R32UI),V===t.BYTE&&(Z=t.R8I),V===t.SHORT&&(Z=t.R16I),V===t.INT&&(Z=t.R32I)),T===t.RG&&(V===t.FLOAT&&(Z=t.RG32F),V===t.HALF_FLOAT&&(Z=t.RG16F),V===t.UNSIGNED_BYTE&&(Z=t.RG8)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Z=t.RG8UI),V===t.UNSIGNED_SHORT&&(Z=t.RG16UI),V===t.UNSIGNED_INT&&(Z=t.RG32UI),V===t.BYTE&&(Z=t.RG8I),V===t.SHORT&&(Z=t.RG16I),V===t.INT&&(Z=t.RG32I)),T===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),T===t.RGBA){const Re=ie?Ol:at.getTransfer(J);V===t.FLOAT&&(Z=t.RGBA32F),V===t.HALF_FLOAT&&(Z=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Z=Re===ft?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(D,T){let V;return D?T===null||T===kr||T===Bs?V=t.DEPTH24_STENCIL8:T===_i?V=t.DEPTH32F_STENCIL8:T===za&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===kr||T===Bs?V=t.DEPTH_COMPONENT24:T===_i?V=t.DEPTH_COMPONENT32F:T===za&&(V=t.DEPTH_COMPONENT16),V}function E(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function b(D){const T=D.target;T.removeEventListener("dispose",b),R(T),T.isVideoTexture&&u.delete(T)}function P(D){const T=D.target;T.removeEventListener("dispose",P),x(T)}function R(D){const T=i.get(D);if(T.__webglInit===void 0)return;const V=D.source,J=h.get(V);if(J){const ie=J[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(D),Object.keys(J).length===0&&h.delete(V)}i.remove(D)}function w(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const V=D.source,J=h.get(V);delete J[T.__cacheKey],a.memory.textures--}function x(D){const T=i.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ie=0;ie<T.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(T.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)t.deleteFramebuffer(T.__webglFramebuffer[J]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=D.textures;for(let J=0,ie=V.length;J<ie;J++){const Z=i.get(V[J]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(V[J])}i.remove(D)}let y=0;function A(){y=0}function N(){const D=y;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),y+=1,D}function L(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function H(D,T){const V=i.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&V.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(V,D,T);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function W(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Me(V,D,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function G(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){Me(V,D,T);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function O(D,T){const V=i.get(D);if(D.version>0&&V.__version!==D.version){K(V,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}const U={[vd]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},z={[Cn]:t.NEAREST,[fS]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},Q={[vS]:t.NEVER,[ES]:t.ALWAYS,[_S]:t.LESS,[e0]:t.LEQUAL,[xS]:t.EQUAL,[MS]:t.GEQUAL,[yS]:t.GREATER,[SS]:t.NOTEQUAL};function Y(D,T){if(T.type===_i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===Xc||T.magFilter===Eo||T.magFilter===Ar||T.minFilter===Hn||T.minFilter===Xc||T.minFilter===Eo||T.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,U[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,U[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,U[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,z[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,z[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,Q[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Cn||T.minFilter!==Eo&&T.minFilter!==Ar||T.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function j(D,T){let V=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",b));const J=T.source;let ie=h.get(J);ie===void 0&&(ie={},h.set(J,ie));const Z=L(T);if(Z!==D.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[Z].usedTimes++;const Re=ie[D.__cacheKey];Re!==void 0&&(ie[D.__cacheKey].usedTimes--,Re.usedTimes===0&&w(T)),D.__cacheKey=Z,D.__webglTexture=ie[Z].texture}return V}function Me(D,T,V){let J=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=t.TEXTURE_3D);const ie=j(D,T),Z=T.source;n.bindTexture(J,D.__webglTexture,t.TEXTURE0+V);const Re=i.get(Z);if(Z.version!==Re.__version||ie===!0){n.activeTexture(t.TEXTURE0+V);const de=at.getPrimaries(at.workingColorSpace),ve=T.colorSpace===Gi?null:at.getPrimaries(T.colorSpace),Ie=T.colorSpace===Gi||de===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=M(T.image,!1,r.maxTextureSize);se=Ce(T,se);const ge=s.convert(T.format,T.colorSpace),Fe=s.convert(T.type);let Le=S(T.internalFormat,ge,Fe,T.colorSpace,T.isVideoTexture);Y(J,T);let pe;const He=T.mipmaps,Ge=T.isVideoTexture!==!0,gt=Re.__version===void 0||ie===!0,F=Z.dataReady,ce=E(T,se);if(T.isDepthTexture)Le=v(T.format===zs,T.type),gt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Le,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,Fe,null));else if(T.isDataTexture)if(He.length>0){Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,He[0].width,He[0].height);for(let te=0,ne=He.length;te<ne;te++)pe=He[te],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,te,Le,pe.width,pe.height,0,ge,Fe,pe.data);T.generateMipmaps=!1}else Ge?(gt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,Fe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Le,se.width,se.height,0,ge,Fe,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ge&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,He[0].width,He[0].height,se.depth);for(let te=0,ne=He.length;te<ne;te++)if(pe=He[te],T.format!==Vn)if(ge!==null)if(Ge){if(F)if(T.layerUpdates.size>0){const he=xm(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const Ke=pe.data.subarray(ke*he/pe.data.BYTES_PER_ELEMENT,(ke+1)*he/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ke,pe.width,pe.height,1,ge,Ke,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,se.depth,ge,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Le,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,se.depth,ge,Fe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Le,pe.width,pe.height,se.depth,0,ge,Fe,pe.data)}else{Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,ce,Le,He[0].width,He[0].height);for(let te=0,ne=He.length;te<ne;te++)pe=He[te],T.format!==Vn?ge!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,pe.width,pe.height,ge,Fe,pe.data):n.texImage2D(t.TEXTURE_2D,te,Le,pe.width,pe.height,0,ge,Fe,pe.data)}else if(T.isDataArrayTexture)if(Ge){if(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Le,se.width,se.height,se.depth),F)if(T.layerUpdates.size>0){const te=xm(se.width,se.height,T.format,T.type);for(const ne of T.layerUpdates){const he=se.data.subarray(ne*te/se.data.BYTES_PER_ELEMENT,(ne+1)*te/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,ge,Fe,he)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(T.isData3DTexture)Ge?(gt&&n.texStorage3D(t.TEXTURE_3D,ce,Le,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Fe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ge,Fe,se.data);else if(T.isFramebufferTexture){if(gt)if(Ge)n.texStorage2D(t.TEXTURE_2D,ce,Le,se.width,se.height);else{let te=se.width,ne=se.height;for(let he=0;he<ce;he++)n.texImage2D(t.TEXTURE_2D,he,Le,te,ne,0,ge,Fe,null),te>>=1,ne>>=1}}else if(He.length>0){if(Ge&&gt){const te=Pe(He[0]);n.texStorage2D(t.TEXTURE_2D,ce,Le,te.width,te.height)}for(let te=0,ne=He.length;te<ne;te++)pe=He[te],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge,Fe,pe):n.texImage2D(t.TEXTURE_2D,te,Le,ge,Fe,pe);T.generateMipmaps=!1}else if(Ge){if(gt){const te=Pe(se);n.texStorage2D(t.TEXTURE_2D,ce,Le,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Fe,se)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Fe,se);g(T)&&d(J),Re.__version=Z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function K(D,T,V){if(T.image.length!==6)return;const J=j(D,T),ie=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+V);const Z=i.get(ie);if(ie.version!==Z.__version||J===!0){n.activeTexture(t.TEXTURE0+V);const Re=at.getPrimaries(at.workingColorSpace),de=T.colorSpace===Gi?null:at.getPrimaries(T.colorSpace),ve=T.colorSpace===Gi||Re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!Ie&&!se?ge[ne]=M(T.image[ne],!0,r.maxCubemapSize):ge[ne]=se?T.image[ne].image:T.image[ne],ge[ne]=Ce(T,ge[ne]);const Fe=ge[0],Le=s.convert(T.format,T.colorSpace),pe=s.convert(T.type),He=S(T.internalFormat,Le,pe,T.colorSpace),Ge=T.isVideoTexture!==!0,gt=Z.__version===void 0||J===!0,F=ie.dataReady;let ce=E(T,Fe);Y(t.TEXTURE_CUBE_MAP,T);let te;if(Ie){Ge&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,Fe.width,Fe.height);for(let ne=0;ne<6;ne++){te=ge[ne].mipmaps;for(let he=0;he<te.length;he++){const ke=te[he];T.format!==Vn?Le!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ke.width,ke.height,Le,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,0,0,ke.width,ke.height,Le,pe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he,He,ke.width,ke.height,0,Le,pe,ke.data)}}}else{if(te=T.mipmaps,Ge&&gt){te.length>0&&ce++;const ne=Pe(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,He,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Le,pe,ge[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,ge[ne].width,ge[ne].height,0,Le,pe,ge[ne].data);for(let he=0;he<te.length;he++){const Ke=te[he].image[ne].image;Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,Ke.width,Ke.height,Le,pe,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,He,Ke.width,Ke.height,0,Le,pe,Ke.data)}}else{Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Le,pe,ge[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,He,Le,pe,ge[ne]);for(let he=0;he<te.length;he++){const ke=te[he];Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,0,0,Le,pe,ke.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he+1,He,Le,pe,ke.image[ne])}}}g(T)&&d(t.TEXTURE_CUBE_MAP),Z.__version=ie.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ee(D,T,V,J,ie,Z){const Re=s.convert(V.format,V.colorSpace),de=s.convert(V.type),ve=S(V.internalFormat,Re,de,V.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>Z),ge=Math.max(1,T.height>>Z);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Z,ve,se,ge,T.depth,0,Re,de,null):n.texImage2D(ie,Z,ve,se,ge,0,Re,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,i.get(V).__webglTexture,0,Ne(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,i.get(V).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(D,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const J=T.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Z=v(T.stencilBuffer,ie),Re=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ne(T);fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Z,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Z,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Z,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,D)}else{const J=T.textures;for(let ie=0;ie<J.length;ie++){const Z=J[ie],Re=s.convert(Z.format,Z.colorSpace),de=s.convert(Z.type),ve=S(Z.internalFormat,Re,de,Z.colorSpace),Ie=Ne(T);V&&fe(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,ve,T.width,T.height):fe(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,ve,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ve,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,ie=Ne(T);if(T.depthTexture.format===Rs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(T.depthTexture.format===zs)fe(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Te(D){const T=i.get(D),V=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");le(T.__webglFramebuffer,D)}else if(V){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=t.createRenderbuffer(),re(T.__webglDepthbuffer[J],D,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),re(T.__webglDepthbuffer,D,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(D,T,V){const J=i.get(D);T!==void 0&&ee(J.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Te(D)}function ye(D){const T=D.texture,V=i.get(D),J=i.get(T);D.addEventListener("dispose",P);const ie=D.textures,Z=D.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=T.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let ve=0;ve<T.mipmaps.length;ve++)V.__webglFramebuffer[de][ve]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Re)for(let de=0,ve=ie.length;de<ve;de++){const Ie=i.get(ie[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}if(D.samples>0&&fe(D)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<ie.length;de++){const ve=ie[de];V.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Ie=s.convert(ve.format,ve.colorSpace),se=s.convert(ve.type),ge=S(ve.internalFormat,Ie,se,ve.colorSpace,D.isXRRenderTarget===!0),Fe=Ne(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,V.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),re(V.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Y(t.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ee(V.__webglFramebuffer[de][ve],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else ee(V.__webglFramebuffer[de],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(T)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let de=0,ve=ie.length;de<ve;de++){const Ie=ie[de],se=i.get(Ie);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Y(t.TEXTURE_2D,Ie),ee(V.__webglFramebuffer,D,Ie,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(Ie)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,J.__webglTexture),Y(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ee(V.__webglFramebuffer[ve],D,T,t.COLOR_ATTACHMENT0,de,ve);else ee(V.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,de,0);g(T)&&d(de),n.unbindTexture()}D.depthBuffer&&Te(D)}function Be(D){const T=D.textures;for(let V=0,J=T.length;V<J;V++){const ie=T[V];if(g(ie)){const Z=D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(ie).__webglTexture;n.bindTexture(Z,Re),d(Z),n.unbindTexture()}}}const I=[],Ue=[];function ze(D){if(D.samples>0){if(fe(D)===!1){const T=D.textures,V=D.width,J=D.height;let ie=t.COLOR_BUFFER_BIT;const Z=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(D),de=T.length>1;if(de)for(let ve=0;ve<T.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ve=0;ve<T.length;ve++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,V,J,0,0,V,J,ie,t.NEAREST),l===!0&&(I.length=0,Ue.length=0,I.push(t.COLOR_ATTACHMENT0+ve),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(Z),Ue.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<T.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Re.__webglColorRenderbuffer[ve]);const Ie=i.get(T[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Ne(D){return Math.min(r.maxSamples,D.samples)}function fe(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ze(D){const T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function Ce(D,T){const V=D.colorSpace,J=D.format,ie=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||V!==lr&&V!==Gi&&(at.getTransfer(V)===ft?(J!==Vn||ie!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Pe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=A,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=oe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=fe}function TT(t,e){function n(i,r=Gi){let s;const a=at.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===Kf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$f)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jv)return t.BYTE;if(i===Wv)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===qf)return t.INT;if(i===kr)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===qa)return t.HALF_FLOAT;if(i===Yv)return t.ALPHA;if(i===qv)return t.RGB;if(i===Vn)return t.RGBA;if(i===Kv)return t.LUMINANCE;if(i===$v)return t.LUMINANCE_ALPHA;if(i===Rs)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===Zv)return t.RED;if(i===Zf)return t.RED_INTEGER;if(i===Qv)return t.RG;if(i===Qf)return t.RG_INTEGER;if(i===Jf)return t.RGBA_INTEGER;if(i===ol||i===ll||i===cl||i===ul)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===wd||i===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ed||i===wd)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===Cd||i===bd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd||i===kd||i===Od||i===Bd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ld)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ud)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Od)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===zd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dl)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jv||i===Vd||i===Gd||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class AT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wo extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),d=this._getHandJoint(c,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
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

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:CT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new Ja(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NT extends Ws{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const M=new PT,g=n.getContextAttributes();let d=null,S=null;const v=[],E=[],b=new Qe;let P=null;const R=new zn;R.layers.enable(1),R.viewport=new Ft;const w=new zn;w.layers.enable(2),w.viewport=new Ft;const x=[R,w],y=new AT;y.layers.enable(1),y.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=v[K];return ee===void 0&&(ee=new xu,v[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=v[K];return ee===void 0&&(ee=new xu,v[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=v[K];return ee===void 0&&(ee=new xu,v[K]=ee),ee.getHandSpace()};function L(K){const ee=E.indexOf(K.inputSource);if(ee===-1)return;const re=v[ee];re!==void 0&&(re.update(K.inputSource,K.frame,c||a),re.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",W);for(let K=0;K<v.length;K++){const ee=E[K];ee!==null&&(E[K]=null,v[K].disconnect(ee))}A=null,N=null,M.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,S=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",H),r.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Or(p.framebufferWidth,p.framebufferHeight,{format:Vn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,re=null,le=null;g.depth&&(le=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=g.stencil?zs:Rs,re=g.stencil?Bs:kr);const Te={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Or(h.textureWidth,h.textureHeight,{format:Vn,type:Ti,depthTexture:new g0(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(K){for(let ee=0;ee<K.removed.length;ee++){const re=K.removed[ee],le=E.indexOf(re);le>=0&&(E[le]=null,v[le].disconnect(re))}for(let ee=0;ee<K.added.length;ee++){const re=K.added[ee];let le=E.indexOf(re);if(le===-1){for(let oe=0;oe<v.length;oe++)if(oe>=E.length){E.push(re),le=oe;break}else if(E[oe]===null){E[oe]=re,le=oe;break}if(le===-1)break}const Te=v[le];Te&&Te.connect(re)}}const G=new $,O=new $;function U(K,ee,re){G.setFromMatrixPosition(ee.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const le=G.distanceTo(O),Te=ee.projectionMatrix.elements,oe=re.projectionMatrix.elements,ye=Te[14]/(Te[10]-1),Be=Te[14]/(Te[10]+1),I=(Te[9]+1)/Te[5],Ue=(Te[9]-1)/Te[5],ze=(Te[8]-1)/Te[0],Ne=(oe[8]+1)/oe[0],fe=ye*ze,Ze=ye*Ne,Ce=le/(-ze+Ne),Pe=Ce*-ze;ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Pe),K.translateZ(Ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const D=ye+Ce,T=Be+Ce,V=fe-Pe,J=Ze+(le-Pe),ie=I*Be/T*D,Z=Ue*Be/T*D;K.projectionMatrix.makePerspective(V,J,ie,Z,D,T),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function z(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;M.texture!==null&&(K.near=M.depthNear,K.far=M.depthFar),y.near=w.near=R.near=K.near,y.far=w.far=R.far=K.far,(A!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,N=y.far,R.near=A,R.far=N,w.near=A,w.far=N,R.updateProjectionMatrix(),w.updateProjectionMatrix(),K.updateProjectionMatrix());const ee=K.parent,re=y.cameras;z(y,ee);for(let le=0;le<re.length;le++)z(re[le],ee);re.length===2?U(y,R,w):y.projectionMatrix.copy(R.projectionMatrix),Q(K,y,ee)};function Q(K,ee,re){re===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Wd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let Y=null;function j(K,ee){if(u=ee.getViewerPose(c||a),_=ee,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let le=!1;re.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let oe=0;oe<re.length;oe++){const ye=re[oe];let Be=null;if(p!==null)Be=p.getViewport(ye);else{const Ue=f.getViewSubImage(h,ye);Be=Ue.viewport,oe===0&&(e.setRenderTargetTextures(S,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(S))}let I=x[oe];I===void 0&&(I=new zn,I.layers.enable(oe),I.viewport=new Ft,x[oe]=I),I.matrix.fromArray(ye.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ye.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Be.x,Be.y,Be.width,Be.height),oe===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(I)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const oe=f.getDepthInformation(re[0]);oe&&oe.isValid&&oe.texture&&M.init(e,oe,r.renderState)}}for(let re=0;re<v.length;re++){const le=E[re],Te=v[re];le!==null&&Te!==void 0&&Te.update(le,ee,c||a)}Y&&Y(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Me=new p0;Me.setAnimationLoop(j),this.setAnimationLoop=function(K){Y=K},this.dispose=function(){}}}const mr=new Ai,LT=new Nt;function DT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,u0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,S,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,E)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,S,v):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===cn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===cn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=e.get(d),v=S.envMap,E=S.envMapRotation;v&&(g.envMap.value=v,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(mr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,S,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=v*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){const S=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const E=v.program;i.uniformBlockBinding(S,E)}function c(S,v){let E=r[S.id];E===void 0&&(_(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(S,b);const P=e.render.frame;s[S.id]!==P&&(h(S),s[S.id]=P)}function u(S){const v=f();S.__bindingPointIndex=v;const E=t.createBuffer(),b=S.__size,P=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=r[S.id],E=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let P=0,R=E.length;P<R;P++){const w=Array.isArray(E[P])?E[P]:[E[P]];for(let x=0,y=w.length;x<y;x++){const A=w[x];if(p(A,P,x,b)===!0){const N=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let H=0;for(let W=0;W<L.length;W++){const G=L[W],O=M(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,N+H,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,v,E,b){const P=S.value,R=v+"_"+E;if(b[R]===void 0)return typeof P=="number"||typeof P=="boolean"?b[R]=P:b[R]=P.clone(),!0;{const w=b[R];if(typeof P=="number"||typeof P=="boolean"){if(w!==P)return b[R]=P,!0}else if(w.equals(P)===!1)return w.copy(P),!0}return!1}function _(S){const v=S.uniforms;let E=0;const b=16;for(let R=0,w=v.length;R<w;R++){const x=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,A=x.length;y<A;y++){const N=x[y],L=Array.isArray(N.value)?N.value:[N.value];for(let H=0,W=L.length;H<W;H++){const G=L[H],O=M(G),U=E%b;U!==0&&b-U<O.boundary&&(E+=b-U),N.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=O.storage}}}const P=E%b;return P>0&&(E+=b-P),S.__size=E,S.__cache={},this}function M(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function g(S){const v=S.target;v.removeEventListener("dispose",g);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class UT{constructor(e={}){const{canvas:n=TS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),_=new Int32Array(4);let M=null,g=null;const d=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let E=!1,b=0,P=0,R=null,w=-1,x=null;const y=new Ft,A=new Ft;let N=null;const L=new lt(0);let H=0,W=n.width,G=n.height,O=1,U=null,z=null;const Q=new Ft(0,0,W,G),Y=new Ft(0,0,W,G);let j=!1;const Me=new h0;let K=!1,ee=!1;const re=new Nt,le=new $,Te=new Ft,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Be(){return R===null?O:1}let I=i;function Ue(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yf}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ne,!1),n.addEventListener("webglcontextcreationerror",he,!1),I===null){const k="webgl2";if(I=Ue(k,C),I===null)throw Ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Ne,fe,Ze,Ce,Pe,D,T,V,J,ie,Z,Re,de,ve,Ie,se,ge,Fe,Le,pe,He,Ge,gt;function F(){ze=new Vw(I),ze.init(),He=new TT(I,ze),Ne=new Fw(I,ze,e,He),fe=new MT(I),Ze=new Ww(I),Ce=new lT,Pe=new wT(I,ze,fe,Ce,Ne,He,Ze),D=new Ow(v),T=new Hw(v),V=new QS(I),Ge=new Iw(I,V),J=new Gw(I,V,Ze,Ge),ie=new Yw(I,J,V,Ze),Fe=new Xw(I,Ne,Pe),Ie=new kw(Ce),Z=new oT(v,D,T,ze,Ne,Ge,Ie),Re=new DT(v,Ce),de=new uT,ve=new gT(ze),ge=new Dw(v,D,T,fe,ie,h,l),se=new ST(v,ie,Ne),gt=new IT(I,Ze,Ne,fe),Le=new Uw(I,ze,Ze),pe=new jw(I,ze,Ze),Ze.programs=Z.programs,v.capabilities=Ne,v.extensions=ze,v.properties=Ce,v.renderLists=de,v.shadowMap=se,v.state=fe,v.info=Ze}F();const ce=new NT(v,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(W,G,!1))},this.getSize=function(C){return C.set(W,G)},this.setSize=function(C,k,X=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=C,G=k,n.width=Math.floor(C*O),n.height=Math.floor(k*O),X===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(W*O,G*O).floor()},this.setDrawingBufferSize=function(C,k,X){W=C,G=k,O=X,n.width=Math.floor(C*X),n.height=Math.floor(k*X),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,k,X,q){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,k,X,q),fe.viewport(y.copy(Q).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,k,X,q){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,k,X,q),fe.scissor(A.copy(Y).multiplyScalar(O).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){fe.setScissorTest(j=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){z=C},this.getClearColor=function(C){return C.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(C=!0,k=!0,X=!0){let q=0;if(C){let B=!1;if(R!==null){const ue=R.texture.format;B=ue===Jf||ue===Qf||ue===Zf}if(B){const ue=R.texture.type,xe=ue===Ti||ue===kr||ue===za||ue===Bs||ue===Kf||ue===$f,we=ge.getClearColor(),Ae=ge.getClearAlpha(),Oe=we.r,Ve=we.g,De=we.b;xe?(p[0]=Oe,p[1]=Ve,p[2]=De,p[3]=Ae,I.clearBufferuiv(I.COLOR,0,p)):(_[0]=Oe,_[1]=Ve,_[2]=De,_[3]=Ae,I.clearBufferiv(I.COLOR,0,_))}else q|=I.COLOR_BUFFER_BIT}k&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ne,!1),n.removeEventListener("webglcontextcreationerror",he,!1),de.dispose(),ve.dispose(),Ce.dispose(),D.dispose(),T.dispose(),ie.dispose(),Ge.dispose(),gt.dispose(),Z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Yn),ce.removeEventListener("sessionend",ih),cr.stop()};function te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Ze.autoReset,k=se.enabled,X=se.autoUpdate,q=se.needsUpdate,B=se.type;F(),Ze.autoReset=C,se.enabled=k,se.autoUpdate=X,se.needsUpdate=q,se.type=B}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){const k=C.target;k.removeEventListener("dispose",ke),Ke(k)}function Ke(C){Tt(C),Ce.remove(C)}function Tt(C){const k=Ce.get(C).programs;k!==void 0&&(k.forEach(function(X){Z.releaseProgram(X)}),C.isShaderMaterial&&Z.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,X,q,B,ue){k===null&&(k=oe);const xe=B.isMesh&&B.matrixWorld.determinant()<0,we=S0(C,k,X,q,B);fe.setMaterial(q,xe);let Ae=X.index,Oe=1;if(q.wireframe===!0){if(Ae=J.getWireframeAttribute(X),Ae===void 0)return;Oe=2}const Ve=X.drawRange,De=X.attributes.position;let tt=Ve.start*Oe,St=(Ve.start+Ve.count)*Oe;ue!==null&&(tt=Math.max(tt,ue.start*Oe),St=Math.min(St,(ue.start+ue.count)*Oe)),Ae!==null?(tt=Math.max(tt,0),St=Math.min(St,Ae.count)):De!=null&&(tt=Math.max(tt,0),St=Math.min(St,De.count));const Mt=St-tt;if(Mt<0||Mt===1/0)return;Ge.setup(B,q,we,X,Ae);let dn,nt=Le;if(Ae!==null&&(dn=V.get(Ae),nt=pe,nt.setIndex(dn)),B.isMesh)q.wireframe===!0?(fe.setLineWidth(q.wireframeLinewidth*Be()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(B.isLine){let be=q.linewidth;be===void 0&&(be=1),fe.setLineWidth(be*Be()),B.isLineSegments?nt.setMode(I.LINES):B.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else B.isPoints?nt.setMode(I.POINTS):B.isSprite&&nt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const be=B._multiDrawStarts,Bt=B._multiDrawCounts,it=B._multiDrawCount,Ln=Ae?V.get(Ae).bytesPerElement:1,Vr=Ce.get(q).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)Vr.setValue(I,"_gl_DrawID",fn),nt.render(be[fn]/Ln,Bt[fn])}else if(B.isInstancedMesh)nt.renderInstances(tt,Mt,B.count);else if(X.isInstancedBufferGeometry){const be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bt=Math.min(X.instanceCount,be);nt.renderInstances(tt,Mt,Bt)}else nt.render(tt,Mt)};function Ot(C,k,X){C.transparent===!0&&C.side===pi&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,to(C,k,X),C.side=rr,C.needsUpdate=!0,to(C,k,X),C.side=pi):to(C,k,X)}this.compile=function(C,k,X=null){X===null&&(X=C),g=ve.get(X),g.init(k),S.push(g),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),C!==X&&C.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const q=new Set;return C.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const we=ue[xe];Ot(we,X,B),q.add(we)}else Ot(ue,X,B),q.add(ue)}),S.pop(),g=null,q},this.compileAsync=function(C,k,X=null){const q=this.compile(C,k,X);return new Promise(B=>{function ue(){if(q.forEach(function(xe){Ce.get(xe).currentProgram.isReady()&&q.delete(xe)}),q.size===0){B(C);return}setTimeout(ue,10)}ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let et=null;function ri(C){et&&et(C)}function Yn(){cr.stop()}function ih(){cr.start()}const cr=new p0;cr.setAnimationLoop(ri),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(C){et=C,ce.setAnimationLoop(C),C===null?cr.stop():cr.start()},ce.addEventListener("sessionstart",Yn),ce.addEventListener("sessionend",ih),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,R),g=ve.get(C,S.length),g.init(k),S.push(g),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Me.setFromProjectionMatrix(re),ee=this.localClippingEnabled,K=Ie.init(this.clippingPlanes,ee),M=de.get(C,d.length),M.init(),d.push(M),ce.enabled===!0&&ce.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&fc(ue,k,-1/0,v.sortObjects)}fc(C,k,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(U,z),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&ge.addToRenderList(M,C),this.info.render.frame++,K===!0&&Ie.beginShadows();const X=g.state.shadowsArray;se.render(X,C,k),K===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=M.opaque,B=M.transmissive;if(g.setupLights(),k.isArrayCamera){const ue=k.cameras;if(B.length>0)for(let xe=0,we=ue.length;xe<we;xe++){const Ae=ue[xe];sh(q,B,C,Ae)}ye&&ge.render(C);for(let xe=0,we=ue.length;xe<we;xe++){const Ae=ue[xe];rh(M,C,Ae,Ae.viewport)}}else B.length>0&&sh(q,B,C,k),ye&&ge.render(C),rh(M,C,k);R!==null&&(Pe.updateMultisampleRenderTarget(R),Pe.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,k),Ge.resetDefaultState(),w=-1,x=null,S.pop(),S.length>0?(g=S[S.length-1],K===!0&&Ie.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function fc(C,k,X,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){q&&Te.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const xe=ie.update(C),we=C.material;we.visible&&M.push(C,xe,we,X,Te.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const xe=ie.update(C),we=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Te.copy(C.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Te.copy(xe.boundingSphere.center)),Te.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Ae=xe.groups;for(let Oe=0,Ve=Ae.length;Oe<Ve;Oe++){const De=Ae[Oe],tt=we[De.materialIndex];tt&&tt.visible&&M.push(C,xe,tt,X,Te.z,De)}}else we.visible&&M.push(C,xe,we,X,Te.z,null)}}const ue=C.children;for(let xe=0,we=ue.length;xe<we;xe++)fc(ue[xe],k,X,q)}function rh(C,k,X,q){const B=C.opaque,ue=C.transmissive,xe=C.transparent;g.setupLightsView(X),K===!0&&Ie.setGlobalState(v.clippingPlanes,X),q&&fe.viewport(y.copy(q)),B.length>0&&eo(B,k,X),ue.length>0&&eo(ue,k,X),xe.length>0&&eo(xe,k,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function sh(C,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Or(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?qa:Ti,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ue=g.state.transmissionRenderTarget[q.id],xe=q.viewport||y;ue.setSize(xe.z,xe.w);const we=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(L),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),ye?ge.render(X):v.clear();const Ae=v.toneMapping;v.toneMapping=tr;const Oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),K===!0&&Ie.setGlobalState(v.clippingPlanes,q),eo(C,X,q),Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let De=0,tt=k.length;De<tt;De++){const St=k[De],Mt=St.object,dn=St.geometry,nt=St.material,be=St.group;if(nt.side===pi&&Mt.layers.test(q.layers)){const Bt=nt.side;nt.side=cn,nt.needsUpdate=!0,ah(Mt,X,q,dn,nt,be),nt.side=Bt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Pe.updateMultisampleRenderTarget(ue),Pe.updateRenderTargetMipmap(ue))}v.setRenderTarget(we),v.setClearColor(L,H),Oe!==void 0&&(q.viewport=Oe),v.toneMapping=Ae}function eo(C,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ue=C.length;B<ue;B++){const xe=C[B],we=xe.object,Ae=xe.geometry,Oe=q===null?xe.material:q,Ve=xe.group;we.layers.test(X.layers)&&ah(we,k,X,Ae,Oe,Ve)}}function ah(C,k,X,q,B,ue){C.onBeforeRender(v,k,X,q,B,ue),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),B.transparent===!0&&B.side===pi&&B.forceSinglePass===!1?(B.side=cn,B.needsUpdate=!0,v.renderBufferDirect(X,k,q,B,C,ue),B.side=rr,B.needsUpdate=!0,v.renderBufferDirect(X,k,q,B,C,ue),B.side=pi):v.renderBufferDirect(X,k,q,B,C,ue),C.onAfterRender(v,k,X,q,B,ue)}function to(C,k,X){k.isScene!==!0&&(k=oe);const q=Ce.get(C),B=g.state.lights,ue=g.state.shadowsArray,xe=B.state.version,we=Z.getParameters(C,B.state,ue,k,X),Ae=Z.getProgramCacheKey(we);let Oe=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?T:D).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",ke),Oe=new Map,q.programs=Oe);let Ve=Oe.get(Ae);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===xe)return lh(C,we),Ve}else we.uniforms=Z.getUniforms(C),C.onBeforeCompile(we,v),Ve=Z.acquireProgram(we,Ae),Oe.set(Ae,Ve),q.uniforms=we.uniforms;const De=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(De.clippingPlanes=Ie.uniform),lh(C,we),q.needsLights=E0(C),q.lightsStateVersion=xe,q.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function oh(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=fl.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function lh(C,k){const X=Ce.get(C);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function S0(C,k,X,q,B){k.isScene!==!0&&(k=oe),Pe.resetTextureUnits();const ue=k.fog,xe=q.isMeshStandardMaterial?k.environment:null,we=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:lr,Ae=(q.isMeshStandardMaterial?T:D).get(q.envMap||xe),Oe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,St=!!X.morphAttributes.color;let Mt=tr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const dn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=dn!==void 0?dn.length:0,be=Ce.get(q),Bt=g.state.lights;if(K===!0&&(ee===!0||C!==x)){const Mn=C===x&&q.id===w;Ie.setState(q,C,Mn)}let it=!1;q.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Bt.state.version||be.outputColorSpace!==we||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==Ae||q.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==Ve||be.morphTargets!==De||be.morphNormals!==tt||be.morphColors!==St||be.toneMapping!==Mt||be.morphTargetsCount!==nt)&&(it=!0):(it=!0,be.__version=q.version);let Ln=be.currentProgram;it===!0&&(Ln=to(q,k,B));let Vr=!1,fn=!1,hc=!1;const At=Ln.getUniforms(),bi=be.uniforms;if(fe.useProgram(Ln.program)&&(Vr=!0,fn=!0,hc=!0),q.id!==w&&(w=q.id,fn=!0),Vr||x!==C){At.setValue(I,"projectionMatrix",C.projectionMatrix),At.setValue(I,"viewMatrix",C.matrixWorldInverse);const Mn=At.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,le.setFromMatrixPosition(C.matrixWorld)),Ne.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&At.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),x!==C&&(x=C,fn=!0,hc=!0)}if(B.isSkinnedMesh){At.setOptional(I,B,"bindMatrix"),At.setOptional(I,B,"bindMatrixInverse");const Mn=B.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),At.setValue(I,"boneTexture",Mn.boneTexture,Pe))}B.isBatchedMesh&&(At.setOptional(I,B,"batchingTexture"),At.setValue(I,"batchingTexture",B._matricesTexture,Pe),At.setOptional(I,B,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",B._indirectTexture,Pe),At.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",B._colorsTexture,Pe));const pc=X.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0)&&Fe.update(B,X,Ln),(fn||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,At.setValue(I,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(bi.envMap.value=Ae,bi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(bi.envMapIntensity.value=k.environmentIntensity),fn&&(At.setValue(I,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&M0(bi,hc),ue&&q.fog===!0&&Re.refreshFogUniforms(bi,ue),Re.refreshMaterialUniforms(bi,q,O,G,g.state.transmissionRenderTarget[C.id]),fl.upload(I,oh(be),bi,Pe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(fl.upload(I,oh(be),bi,Pe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&At.setValue(I,"center",B.center),At.setValue(I,"modelViewMatrix",B.modelViewMatrix),At.setValue(I,"normalMatrix",B.normalMatrix),At.setValue(I,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Mn=q.uniformsGroups;for(let mc=0,w0=Mn.length;mc<w0;mc++){const ch=Mn[mc];gt.update(ch,Ln),gt.bind(ch,Ln)}}return Ln}function M0(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function E0(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,k,X){Ce.get(C.texture).__webglTexture=k,Ce.get(C.depthTexture).__webglTexture=X;const q=Ce.get(C);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const X=Ce.get(C);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,X=0){R=C,b=k,P=X;let q=!0,B=null,ue=!1,xe=!1;if(C){const Ae=Ce.get(C);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(I.FRAMEBUFFER,null),q=!1):Ae.__webglFramebuffer===void 0?Pe.setupRenderTarget(C):Ae.__hasExternalTextures&&Pe.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);const Ve=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?B=Ve[k][X]:B=Ve[k],ue=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?B=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[X]:B=Ve,y.copy(C.viewport),A.copy(C.scissor),N=C.scissorTest}else y.copy(Q).multiplyScalar(O).floor(),A.copy(Y).multiplyScalar(O).floor(),N=j;if(fe.bindFramebuffer(I.FRAMEBUFFER,B)&&q&&fe.drawBuffers(C,B),fe.viewport(y),fe.scissor(A),fe.setScissorTest(N),ue){const Ae=Ce.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,X)}else if(xe){const Ae=Ce.get(C.texture),Oe=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Oe)}w=-1},this.readRenderTargetPixels=function(C,k,X,q,B,ue,xe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){fe.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=C.texture,Oe=Ae.format,Ve=Ae.type;if(!Ne.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&X>=0&&X<=C.height-B&&I.readPixels(k,X,q,B,He.convert(Oe),He.convert(Ve),ue)}finally{const Ae=R!==null?Ce.get(R).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(C,k,X,q,B,ue,xe){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){fe.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=C.texture,Oe=Ae.format,Ve=Ae.type;if(!Ne.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-q&&X>=0&&X<=C.height-B){const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(k,X,q,B,He.convert(Oe),He.convert(Ve),0),I.flush();const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await AS(I,tt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue)}finally{I.deleteBuffer(De),I.deleteSync(tt)}return ue}}finally{const Ae=R!==null?Ce.get(R).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,k=null,X=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(C.image.width*q),ue=Math.floor(C.image.height*q),xe=k!==null?k.x:0,we=k!==null?k.y:0;Pe.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,xe,we,B,ue),fe.unbindTexture()},this.copyTextureToTexture=function(C,k,X=null,q=null,B=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,C=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let ue,xe,we,Ae,Oe,Ve;X!==null?(ue=X.max.x-X.min.x,xe=X.max.y-X.min.y,we=X.min.x,Ae=X.min.y):(ue=C.image.width,xe=C.image.height,we=0,Ae=0),q!==null?(Oe=q.x,Ve=q.y):(Oe=0,Ve=0);const De=He.convert(k.format),tt=He.convert(k.type);Pe.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const St=I.getParameter(I.UNPACK_ROW_LENGTH),Mt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dn=I.getParameter(I.UNPACK_SKIP_PIXELS),nt=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),Bt=C.isCompressedTexture?C.mipmaps[B]:C.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Oe,Ve,ue,xe,De,tt,Bt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Oe,Ve,Bt.width,Bt.height,De,Bt.data):I.texSubImage2D(I.TEXTURE_2D,B,Oe,Ve,ue,xe,De,tt,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dn),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),B===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,X=null,q=null,B=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,C=arguments[2],k=arguments[3],B=arguments[4]||0);let ue,xe,we,Ae,Oe,Ve,De,tt,St;const Mt=C.isCompressedTexture?C.mipmaps[B]:C.image;X!==null?(ue=X.max.x-X.min.x,xe=X.max.y-X.min.y,we=X.max.z-X.min.z,Ae=X.min.x,Oe=X.min.y,Ve=X.min.z):(ue=Mt.width,xe=Mt.height,we=Mt.depth,Ae=0,Oe=0,Ve=0),q!==null?(De=q.x,tt=q.y,St=q.z):(De=0,tt=0,St=0);const dn=He.convert(k.format),nt=He.convert(k.type);let be;if(k.isData3DTexture)Pe.setTexture3D(k,0),be=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Pe.setTexture2DArray(k,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Bt=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Vr=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),C.isDataTexture||C.isData3DTexture?I.texSubImage3D(be,B,De,tt,St,ue,xe,we,dn,nt,Mt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(be,B,De,tt,St,ue,xe,we,dn,Mt.data):I.texSubImage3D(be,B,De,tt,St,ue,xe,we,dn,nt,Mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),B===0&&k.generateMipmaps&&I.generateMipmap(be),fe.unbindTexture()},this.initRenderTarget=function(C){Ce.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){b=0,P=0,R=null,fe.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===eh?"display-p3":"srgb",n.unpackColorSpace=at.workingColorSpace===cc?"display-p3":"srgb"}}class FT extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yf);const kT=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,OT=`
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
`;function BT({agitation:t=.3,flare:e=0}){const n=_e.useRef(null),i=_e.useRef(null);return _e.useEffect(()=>{const r=n.current;if(!r)return;let s;try{s=new UT({alpha:!0,antialias:!0,powerPreference:"low-power"})}catch{return}const a=()=>Math.min(r.clientWidth||340,480);s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.setSize(a(),a()),r.appendChild(s.domElement);const o=new FT,l=new m0(-1,1,1,-1,0,1),c={uTime:{value:Math.random()*40},uAgitation:{value:t},uFlare:{value:0},uTilt:{value:new Qe(0,0)}};i.current=c;const u=new Ri({vertexShader:kT,fragmentShader:OT,uniforms:c,transparent:!0}),f=new ei(new Ja(2,2),u);o.add(f);const h=new Qe(0,0),p=v=>{const E=r.getBoundingClientRect();h.set(((v.clientX-E.left)/E.width-.5)*2,((v.clientY-E.top)/E.height-.5)*-2)},_=()=>h.set(0,0);window.addEventListener("pointermove",p,{passive:!0}),r.addEventListener("pointerleave",_);let M=null,g=performance.now();const d=v=>{const E=Math.min((v-g)/1e3,.05);g=v,c.uTime.value+=E,c.uFlare.value*=Math.pow(.25,E),c.uTilt.value.lerp(h,.04),s.render(o,l)};if(Wn)d(performance.now());else{const v=E=>{d(E),M=requestAnimationFrame(v)};M=requestAnimationFrame(v)}const S=()=>{s.setSize(a(),a())};return window.addEventListener("resize",S),()=>{M&&cancelAnimationFrame(M),window.removeEventListener("pointermove",p),window.removeEventListener("resize",S),r.removeEventListener("pointerleave",_),r.removeChild(s.domElement),f.geometry.dispose(),u.dispose(),s.dispose()}},[]),_e.useEffect(()=>{i.current&&(i.current.uAgitation.value=t)},[t]),_e.useEffect(()=>{e&&i.current&&(i.current.uFlare.value=1)},[e]),m.jsx("div",{ref:n,className:"orb-gl",style:{position:"absolute",inset:0},"aria-hidden":"true"})}const ym=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];function zT({daily:t,replies:e,payments:n,m:i,calc:r}){const s=Wf(e,n),a=_e.useMemo(()=>Bv(t,e,i,r,s.mtd),[t,e,i,r,s.mtd]),o=Math.min(rt(s.mtd,r.goal),1),l=new Date,c=new Date(l.getFullYear(),l.getMonth()+1,0).getDate(),u=l.getDate()/c,f=i.replyRate>0?i.replyRate:Xa,h=i.bookingRate>0?i.bookingRate:Ya,p=rt(rt(rt(rt(rt(r.goal,r.aov),r.closeRate),r.showRate),h),f),_=rt(rt(p,r.capacity),r.sendDays/4.345),M=r.capacity>0?_<1?wn(_*7,0)+" days":_<9?wn(_,1)+" wks":wn(_/4.345,1)+" mo":"set capacity",g=Math.max(r.goal,a.p90,1),d=E=>Math.min(E/g,1)*100+"%",S=i.replies<10,v=!S&&i.bookingRate<pt.bookingRate[0];return m.jsxs(_t,{className:"card herostrip",children:[m.jsx("div",{className:"hs-ghost display","aria-hidden":"true",children:ym[l.getMonth()].slice(0,3)}),m.jsxs("div",{className:"hs-main",children:[m.jsxs("div",{className:"label",children:["Cash collected · ",ym[l.getMonth()].toLowerCase()]}),m.jsx("div",{className:"display hs-num",children:m.jsx(Pr,{value:s.mtd,format:ct})}),m.jsxs("div",{className:"beam",title:"the month, drawn to scale",children:[m.jsx("span",{className:"beam-fill",style:{width:d(s.mtd)}}),m.jsx("span",{className:"beam-goal",style:{left:d(r.goal)}}),m.jsx("span",{className:"beam-pace",style:{left:u*100+"%"},title:"where the month is"}),m.jsx("span",{className:"beam-band",style:{left:d(a.p10),width:"calc("+d(a.p90)+" - "+d(a.p10)+")"}}),m.jsx("span",{className:"beam-p50",style:{left:d(a.p50)}})]}),m.jsxs("div",{className:"beam-legend",children:[m.jsxs("span",{children:[m.jsx("i",{className:"bl-fill"}),"banked ",Ye(o,0)]}),m.jsxs("span",{children:[m.jsx("i",{className:"bl-band"}),"forecast P10-P90"]}),m.jsxs("span",{children:[m.jsx("i",{className:"bl-p50"}),"P50 ",vi(a.p50)]}),m.jsxs("span",{children:[m.jsx("i",{className:"bl-goal"}),"goal ",vi(r.goal)]}),m.jsxs("span",{children:[m.jsx("i",{className:"bl-pace"}),"month pace"]})]})]}),m.jsxs("div",{className:"hs-rail",children:[m.jsxs("div",{className:"hs-stat",children:[m.jsx("div",{className:"label",children:"Projected month end"}),m.jsx("div",{className:"display hs-sv",children:m.jsx(Pr,{value:a.p50,format:ct})}),m.jsxs("div",{className:"hdetail",children:[vi(a.p10)," to ",vi(a.p90),", 500 runs"]})]}),m.jsxs("div",{className:"hs-stat",children:[m.jsx("div",{className:"label",children:"Booking rate"}),m.jsx("div",{className:"display hs-sv"+(v?" bad":""),children:S?"--":Ye(i.bookingRate)}),m.jsx("div",{className:"hdetail",children:S?"needs 10 replies, at "+Ee(i.replies):Ee(i.booked)+" of "+Ee(i.replies)+" replies · floor "+Ye(pt.bookingRate[0],0)})]}),m.jsxs("div",{className:"hs-stat",children:[m.jsx("div",{className:"label",children:"Time to goal"}),m.jsx("div",{className:"display hs-sv",children:M}),m.jsxs("div",{className:"hdetail",children:["at ",Ee(r.capacity)," a day, live rates"]})]}),m.jsxs("div",{className:"hs-stat",children:[m.jsx("div",{className:"label",children:"All time"}),m.jsx("div",{className:"display hs-sv",children:m.jsx(Pr,{value:s.all,format:ct})}),m.jsxs("div",{className:"hdetail",children:[ct(i.dealValue)," signed",s.source==="payments"?" · payments tab":""]})]})]})]})}function HT({daily:t,replies:e,m:n}){const i=uy(t,e),r=kv(t,e),s=_e.useMemo(()=>{const o=new Date,l=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Map(t.map(h=>[st(h.date),h])),u=new Map;e.forEach(h=>{const p=st(h.date);u.set(p,u.get(p)||{n:0,booked:0,cash:0});const _=u.get(p);_.n++,h.booked&&_.booked++,_.cash+=h.cash});const f={initials:[],followUps:[],comments:[],replies:[],booked:[],cash:[]};for(let h=13;h>=0;h--){const p=st(new Date(l.getTime()-h*Je)),_=c.get(p),M=u.get(p);f.initials.push(_?_.initials:0),f.followUps.push(_?_.followUps:0),f.comments.push(_?_.comments:0),f.replies.push(M?M.n:0),f.booked.push(M?M.booked:0),f.cash.push(M?M.cash:0)}return f},[t,e]),a=o=>[["this wk",Ee(o.cur)],["last wk",Ee(o.prev)]];return m.jsxs("div",{className:"tiles",children:[m.jsx(Ni,{label:"Initials",num:n.initials,format:Ee,sub:Ee(n.touches)+" total touches",delta:i.initials,spark:s.initials,tip:a(r.initials)}),m.jsx(Ni,{label:"Follow ups",num:n.followUps,format:Ee,sub:wn(rt(n.followUps,n.initials))+" per initial",delta:i.followUps,spark:s.followUps,tip:a(r.followUps)}),m.jsx(Ni,{label:"Comments",num:n.comments,format:Ee,sub:Ye(n.commentCoverage,0)+" of initials",delta:i.comments,spark:s.comments,tip:a(r.comments)}),m.jsx(Ni,{label:"Replies",num:n.replies,format:Ee,sub:Ye(n.replyRate)+" reply rate",delta:i.replies,spark:s.replies,tip:a(r.replies)}),m.jsx(Ni,{label:"Booked",num:n.booked,format:Ee,sub:Ye(n.bookingRate)+" booking rate",delta:i.booked,spark:s.booked,tip:a(r.booked)}),m.jsx(Ni,{label:"Shown",num:n.shown,format:Ee,sub:Ye(n.showRate)+" show rate"}),m.jsx(Ni,{label:"Closed",num:n.closed,format:Ee,red:!0,sub:Ye(n.closeRate)+" close rate"+(n.avgDeal>0?" · "+ct(n.avgDeal)+" avg":"")}),m.jsx(Ni,{label:"Cash",num:n.cash,format:ct,red:!0,sub:ct(n.outstanding)+" outstanding",delta:i.cash,spark:s.cash,tip:a(r.cash)})]})}function VT(){const[t,e]=_e.useState(""),[n,i]=_e.useState([]),[r,s]=_e.useState(!1),a=bs.useRef(null),o=async(c,u)=>{try{const f=await fetch("/api/ask",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({question:c,key:u||localStorage.getItem("palantirKey")||void 0})});if(f.status===401&&!u){const p=window.prompt("This stone is keyed. Enter the ask key:");return p?(localStorage.setItem("palantirKey",p),o(c,p)):"The stone stays dark without the key."}const h=await f.json().catch(()=>({}));return f.status===503?"The stone is not wired yet. In Vercel, set ANTHROPIC_API_KEY (and PALANTIR_DOCTRINE) to switch it on.":!f.ok||!h.answer?"The stone clouded over ("+(h.error||f.status)+"). Ask again.":h.answer}catch{return"The stone is unreachable. Check the connection and ask again."}},l=async()=>{const c=t.trim();if(!c||r)return;e(""),s(!0),i(f=>[...f,{role:"q",text:c}]);const u=await o(c);i(f=>[...f,{role:"a",text:u}]),s(!1),requestAnimationFrame(()=>a.current&&a.current.scrollIntoView({block:"nearest"}))};return m.jsxs("div",{className:"askc",children:[m.jsxs("div",{className:"ask-thread",children:[n.length===0&&m.jsx("div",{className:"note",children:'Ask the stone anything the sheets can answer. It reads the live Daily Log, Replies, Payments and lead scheduler, holds the doctrine, and cites its numbers. Try: "why is booking rate below floor" or "what happens to the month if we hold this pace".'}),n.map((c,u)=>m.jsxs("div",{className:"ask-line "+c.role,children:[m.jsx("span",{className:"ask-tag",children:c.role==="q"?"> RYAN":"< STONE"}),c.role==="a"&&u===n.length-1&&!r?m.jsx(al,{text:c.text}):m.jsx("span",{className:"ask-text",children:c.text})]},u)),r&&m.jsxs("div",{className:"ask-line a",children:[m.jsx("span",{className:"ask-tag",children:"< STONE"}),m.jsxs("span",{className:"ask-wait",children:["the glass is turning",m.jsx("span",{className:"cursor",children:"_"})]})]}),m.jsx("div",{ref:a})]}),m.jsxs("div",{className:"ask-row",children:[m.jsx("input",{className:"ask-input",type:"text",value:t,maxLength:600,placeholder:"ask the stone",onChange:c=>e(c.target.value),onKeyDown:c=>{c.key==="Enter"&&l(),c.stopPropagation()}}),m.jsx("button",{className:"btn ask-send",onClick:l,disabled:r,children:"ASK"})]})]})}function GT({daily:t,replies:e,leads:n,m:i,calc:r,flare:s}){const a=oy(t,e,r.capacity),o=ly(t,e,r.capacity,i),l=cy(t,e,n,i,r),[c,u]=_e.useState("alerts"),[f,h]=_e.useState(null),[p,_]=_e.useState(0),[M,g]=_e.useState(null),[d,S]=_e.useState(null),[v,E]=_e.useState(null),[b,P]=_e.useState(!1),R=Mo("overseer"),w=Mo("memo"),x=Mo("brief"),y=Mo("calls"),[A,N]=_e.useState(null),L=o.findings.filter(Y=>Y.sev==="r").length+a.filter(Y=>Y.zone==="r").length,H=o.findings.filter(Y=>Y.sev==="a").length+a.filter(Y=>Y.zone==="a").length,W=L>0?1:H>0?.55:.15,G={g:"OK",a:"WARN",r:"FAIL",n:"NULL"},O=l.length?l[0].value:1,U=l[0],z=(Y,j)=>m.jsx("button",{className:"btn"+(c===Y?" active":""),onClick:()=>u(Y),children:j},Y),Q=(Y,j,Me,K)=>(Y||[]).map((ee,re)=>m.jsxs("div",{className:"dir",onClick:()=>Me(j===re?null:re),children:[m.jsxs("div",{className:"dir-title",children:[m.jsxs("span",{className:"dnum",children:[K," ",String(re+1).padStart(2,"0")]})," // ",ee.title.toUpperCase()]}),j===re&&m.jsx("div",{className:"dir-body",children:ee.text})]},re));return m.jsxs(_t,{className:"pal",children:[m.jsxs("div",{className:"pal-head",children:[m.jsx("h2",{className:"sec",style:{margin:0},children:"Palantir"}),m.jsxs("span",{className:"sysdots",children:[m.jsx("span",{className:"label",children:"sys"}),a.map((Y,j)=>m.jsx("button",{className:"sysdot "+Y.zone,title:Y.name,onClick:()=>h(f===j?null:j),"aria-label":Y.name},j))]}),m.jsx("span",{className:"label",children:"cash collected basis"})]}),f!==null&&m.jsxs("div",{className:"dot-detail",children:[a[f].name.toUpperCase()," [",G[a[f].zone],"] · ",a[f].detail]}),m.jsxs("div",{className:"pal-grid",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"orb-stage speakable",onClick:()=>P(Y=>!Y),title:"tap the stone",role:"button","aria-label":"ask the stone",children:[m.jsx(BT,{agitation:W,flare:s}),b?m.jsx("div",{className:"orb-speak",children:m.jsx(al,{text:o.findings.length?o.findings[0].title+". "+o.findings[0].lever:R?R.headline:"All quiet in the glass. Push volume, keep the ladder full."})},String(b)):U&&m.jsxs("div",{className:"orb-text",children:[m.jsx("div",{className:"display ov",children:vi(U.value)}),m.jsx("div",{className:"ol",children:U.per==="mo"?"per month · top lever":"one time · top lever"}),m.jsx("div",{className:"on",children:U.name})]})]}),m.jsx("div",{className:"lbars",children:l.map((Y,j)=>m.jsxs("div",{className:"lbar",onClick:()=>E(v===j?null:j),children:[m.jsxs("div",{className:"lbar-top",children:[m.jsx("span",{className:"lever-rank",children:String(j+1).padStart(2,"0")}),m.jsx("span",{className:"lbar-name",children:Y.name}),m.jsxs("span",{className:"lbar-val display",children:[vi(Y.value),m.jsxs("span",{className:"lever-per",children:[" ",Y.per==="mo"?"/mo":"1x"]})]})]}),m.jsx("div",{className:"lbar-track",children:m.jsx("span",{className:"lbar-fill",style:{width:Math.max(Y.value/O*100,4)+"%",boxShadow:j===0?"0 0 10px rgba(225,20,20,0.55)":"none"}})}),v===j&&m.jsxs("div",{className:"lbar-detail",children:[Y.detail," · basis: ",Y.basis]})]},j))}),m.jsx("div",{className:"note",children:"Levers priced independently; they overlap and never sum. Baselines assumed until measured. Tap a lever for detail."})]}),m.jsxs("div",{className:"console",children:[m.jsxs("div",{className:"ptabs",children:[z("alerts","Alerts"+(o.findings.length?" · "+o.findings.length:"")),z("ask","Ask"),z("daily","Daily"),z("calls","Calls"+(y&&y.calls&&y.calls.length?" · "+y.calls.length:"")),z("brief","Brief"),z("log","Log")]}),c==="ask"&&m.jsx(VT,{}),c==="calls"&&(y&&y.calls&&y.calls.length?m.jsxs("div",{children:[m.jsxs("div",{className:"label",style:{marginBottom:9},children:["Call intelligence · updated ",y.updated]}),y.calls.map((Y,j)=>m.jsxs("div",{className:"dir",onClick:()=>N(A===j?null:j),children:[m.jsxs("div",{className:"dir-title",children:[m.jsxs("span",{className:"dnum",children:["CALL ",String(Y.date||"").toUpperCase()]})," // ",String(Y.title||"").toUpperCase(),Y.score!=null&&m.jsxs("span",{className:"call-score",children:[Y.score,"/10"]})]}),A===j&&m.jsxs("div",{className:"dir-body",children:[Y.read,Y.fix?" Biggest fix: "+Y.fix:""]})]},j))]}):m.jsx("div",{className:"note",children:"No calls read yet. Drop the transcript TEXT (a Fathom transcript pasted into a Google Doc, or the exported .docx) into a Drive folder named KEHOEGROUP Calls, or name the doc starting with CALL. The morning run reads every new one: objections, doctrine compliance, a score out of 10 and the single biggest fix land here. Video files alone cannot be read; it needs the transcript."})),c==="alerts"&&m.jsxs("div",{children:[o.findings.length===0&&m.jsx("div",{className:"brief-head",children:"No active alerts. Push volume, keep the ladder full."}),o.findings.map((Y,j)=>m.jsxs("div",{className:"alert-line",children:[m.jsxs("div",{className:"alert-head",onClick:()=>_(p===j?null:j),children:[m.jsxs("span",{className:Y.sev==="r"?"sevr":"seva",children:[">> ALERT ",String(j+1).padStart(2,"0")]}),m.jsx("span",{children:Y.title.toUpperCase()}),m.jsx("span",{style:{marginLeft:"auto",color:"#7A7A7A"},children:p===j?"−":"+"})]}),p===j&&m.jsxs("div",{className:"alert-body",children:[Y.evidence,m.jsxs("div",{className:"diag-lever",children:[m.jsx("span",{children:"Lever"})," ",Y.lever]})]})]},j)),o.waiting.length>0&&m.jsxs("div",{className:"note",children:["On mute until the sample can carry it: ",o.waiting.join("; "),"."]})]}),c==="daily"&&(x?m.jsxs("div",{children:[m.jsxs("div",{className:"label",style:{marginBottom:9},children:["Daily brief · ",x.date]}),m.jsx("div",{className:"brief-head",children:m.jsx(al,{text:x.headline})}),Q(x.sections,M,g,"NOTE")]}):m.jsx("div",{className:"note",children:"The daily brief lands here every weekday morning."})),c==="brief"&&(R?m.jsxs("div",{children:[m.jsxs("div",{className:"label",style:{marginBottom:9},children:["Palantir brief · ",R.date]}),m.jsx("div",{className:"brief-head",children:m.jsx(al,{text:R.headline})}),Q(R.sections,M,g,"DIRECTIVE")]}):m.jsx("div",{className:"note",children:"No brief published yet."})),c==="log"&&(w?m.jsxs("div",{children:[m.jsxs("div",{className:"label",style:{marginBottom:9},children:["Weekly memo · ",w.week]}),m.jsx("div",{className:"brief-head",children:w.headline}),Q(w.sections,d,S,"ENTRY"),(w.archive||[]).map((Y,j)=>m.jsxs("div",{className:"dir",onClick:()=>S(d==="a"+j?null:"a"+j),children:[m.jsxs("div",{className:"dir-title",children:[m.jsx("span",{className:"dnum",children:"ARCHIVE"})," // ",String(Y.week||Y.date||"").toUpperCase()]}),d==="a"+j&&m.jsx("div",{className:"dir-body",children:Y.headline})]},"a"+j))]}):m.jsx("div",{className:"note",children:"No memo published yet."}))]})]})]})}function jT({daily:t,replies:e,leads:n,payments:i,m:r,calc:s,flare:a}){return m.jsxs("div",{children:[m.jsx(zT,{daily:t,replies:e,payments:i,m:r,calc:s}),m.jsx(HT,{daily:t,replies:e,m:r}),m.jsx(GT,{daily:t,replies:e,leads:n,m:r,calc:s,flare:a})]})}const ya={red:"#E11414",bone:"#F4F2ED"},Yd=typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches;function WT({m:t}){const e=bs.useRef(null),n=[{label:"INITIALS",value:t.initials},{label:"REPLIES",value:t.replies,rate:t.replyRate},{label:"BOOKED",value:t.booked,rate:t.bookingRate},{label:"SHOWN",value:t.shown,rate:t.showRate},{label:"CLOSED",value:t.closed,rate:t.closeRate}];return bs.useEffect(()=>{const i=e.current;if(!i)return;const r=760,s=350,a=Math.min(window.devicePixelRatio||1,2);i.width=r*a,i.height=s*a;const o=i.getContext("2d");o.scale(a,a);const l=n.length,c=84,u=46,f=152,h=104,p=n.map((A,N)=>c+N*(r-c-u)/(l-1)),_=Math.max(n[0].value,1),M=n.map(A=>Math.max(Math.sqrt(A.value/_)*h,4)),g=n.slice(1).map((A,N)=>n[N].value>0?A.value/n[N].value:0),d=A=>{if(A<=p[0])return M[0];if(A>=p[l-1])return M[l-1];let N=0;for(;A>p[N+1];)N++;const L=(A-p[N])/(p[N+1]-p[N]),H=L*L*(3-2*L);return M[N]+(M[N+1]-M[N])*H},S=(A,N)=>{let L=A*374761393+N*668265263;return L=(L^L>>13)*1274126177,((L^L>>16)>>>0)/4294967295},v=120,E=Array.from({length:v},(A,N)=>({i:N,x:c+S(N,99)*(r-c-u),u:S(N,7)*2-1,v:.55+S(N,13)*.75,deadAt:-1,fall:0})),b=A=>{for(let N=0;N<g.length;N++)if(S(A.i,N*31+3)>g[N])return N;return-1};E.forEach(A=>{A.b=b(A)});const P=()=>{for(let L=0;L<g.length;L++){if(1-g[L]<=.02)continue;const W=p[L+1],G=Math.max((M[L]-M[L+1])*1,2),O=o.createLinearGradient(W,f,W+30,s);O.addColorStop(0,"rgba(58,58,58,0.5)"),O.addColorStop(1,"rgba(58,58,58,0)"),o.fillStyle=O,o.beginPath(),o.moveTo(W-G*.4,f+d(W-G*.4)-1),o.bezierCurveTo(W+8,f+M[L]+26,W+18,s-26,W+22,s-6),o.lineTo(W+40+G,s-6),o.bezierCurveTo(W+30+G,s-40,W+G*.8+10,f+M[L]+10,W+G*.6,f+d(W+G*.6)-1),o.closePath(),o.fill()}const A=o.createLinearGradient(c,0,r-u,0);A.addColorStop(0,"#2E2E2E"),A.addColorStop(.72,"#3A2426"),A.addColorStop(1,"#7E0C0C"),o.fillStyle=A,o.beginPath(),o.moveTo(p[0],f-M[0]);for(let L=p[0];L<=p[l-1];L+=6)o.lineTo(L,f-d(L));o.lineTo(p[l-1],f-M[l-1]),o.lineTo(p[l-1]+26,f-M[l-1]*.55),o.lineTo(p[l-1]+26,f+M[l-1]*.55),o.lineTo(p[l-1],f+M[l-1]);for(let L=p[l-1];L>=p[0];L-=6)o.lineTo(L,f+d(L));o.closePath(),o.fill();const N=o.createRadialGradient(p[l-1]+8,f,2,p[l-1]+8,f,60);N.addColorStop(0,"rgba(225,20,20,0.35)"),N.addColorStop(1,"rgba(225,20,20,0)"),o.fillStyle=N,o.beginPath(),o.arc(p[l-1]+8,f,60,0,Math.PI*2),o.fill()},R=()=>{o.textAlign="center",n.forEach((A,N)=>{if(o.fillStyle="#7A7A7A",o.font="10px 'Space Mono', monospace",o.fillText(A.label,p[N],f-M[N]-(N===0?30:14)-(N%2===1?14:0)),o.fillStyle=N===l-1?"#E11414":"#F4F2ED",o.font="17px 'Archivo Black', sans-serif",o.fillText(Ee(A.value),p[N],f+M[N]+26+(N%2===1?12:0)),A.rate!==void 0&&(o.fillStyle="#B9B7B2",o.font="10px 'Space Mono', monospace",o.fillText(Ye(A.rate),(p[N]+p[N-1])/2,f-Math.max(d((p[N]+p[N-1])/2),10)-10)),N>0){const L=n[N-1].value-A.value;L>0&&(o.fillStyle="#4A4A4A",o.font="9px 'Space Mono', monospace",o.fillText("-"+Ee(L),p[N]+30,s-12))}})};let w=null;const x=()=>{o.clearRect(0,0,r,s),P();for(const A of E){A.x+=A.v*(Yd?0:1.1);const N=A.b>=0?p[A.b+1]:1/0;let L,H=.75;if(A.x>N)A.fall+=.045,L=f+d(N)*A.u*.8+(A.x-N)*(.9+A.fall),H=Math.max(.55-(A.x-N)/90,0),o.fillStyle="rgba(122,122,122,"+H.toFixed(2)+")";else{L=f+d(A.x)*A.u*.8;const W=(A.x-c)/(r-c-u);o.fillStyle="rgba("+(W>.7?"255,90,60":"200,160,150")+","+H.toFixed(2)+")"}(A.x>r-u+24||L>s||H<=0)&&(A.x=c,A.u=Math.random()*2-1,A.fall=0,A.i=(A.i+v)%1e5,A.b=b(A)),o.beginPath(),o.arc(A.x,L,1.4,0,Math.PI*2),o.fill()}R()},y=()=>{if(Yd){x();return}const A=()=>{x(),w=requestAnimationFrame(A)};A()};return document.fonts&&document.fonts.ready?document.fonts.ready.then(y):y(),()=>{w&&cancelAnimationFrame(w)}},[t.initials,t.replies,t.booked,t.shown,t.closed]),m.jsxs("div",{children:[m.jsx("canvas",{ref:e,style:{width:"100%",display:"block"},"aria-label":"funnel flow"}),m.jsx("div",{className:"note",children:"Every dot is volume moving through the funnel; the gray fallout at each boundary is the drop-off, drawn to scale on a square root height. Counts and rates are exact."})]})}function Xo({label:t,value:e,floor:n,strong:i,sample:r,sampleNeed:s,sampleUnit:a}){const l=2*Math.PI*40,c=r<s,u=Math.max(.005,Math.min(e/i,1)),f=Math.min(n/i,1)*360,h=c?"#3A3A3A":e>=n?ya.red:"#C9A227",[p,_]=bs.useState(Yd);return bs.useEffect(()=>{const M=requestAnimationFrame(()=>_(!0));return()=>cancelAnimationFrame(M)},[]),m.jsxs("div",{className:"gauge",children:[m.jsxs("svg",{viewBox:"0 0 100 100",children:[m.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:"#1E1E1E",strokeWidth:"8"}),m.jsx("circle",{cx:"50",cy:"50",r:40,fill:"none",stroke:h,strokeWidth:"8",strokeDasharray:(p?u:.005)*l+" "+l,strokeLinecap:"round",style:{transition:"stroke-dasharray 1.1s cubic-bezier(0.22,1,0.36,1)"},transform:"rotate(-90 50 50)"}),m.jsx("line",{x1:"50",y1:"4",x2:"50",y2:"13",stroke:ya.bone,strokeWidth:"2",transform:"rotate("+f+" 50 50)",opacity:"0.75"}),m.jsx("text",{x:"50",y:"49",textAnchor:"middle",fill:ya.bone,fontFamily:"'Archivo Black', sans-serif",fontSize:"16",children:c?"--":Ye(e,1)}),m.jsx("text",{x:"50",y:"63",textAnchor:"middle",fill:"#7A7A7A",fontFamily:"'Space Mono', monospace",fontSize:"7",letterSpacing:"1",children:c?"LOW SAMPLE":"FLOOR "+Ye(n,0)})]}),m.jsx("div",{className:"label",style:{textAlign:"center",marginTop:7},children:t}),m.jsxs("div",{className:"gauge-sub",children:[Ee(r)," ",a]})]})}function XT({replies:t}){const[e,n]=bs.useState("all"),i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=p=>Math.max(0,Math.round((r-p.date)/Je)),a=p=>p.dead?"dead":p.closed?"won":p.booked||p.showed||["talking","waiting"].includes(p.status.toLowerCase())?"working":s(p)>7?"stale":"live",o=[...t].sort((p,_)=>_.date-p.date),l={live:[],stale:[],working:[],won:[],dead:[]};o.forEach(p=>l[a(p)].push(p));const c=[["live","Live, work these now"],["stale","Stale, rescue or kill"],["working","In play"],["won","Won"],["dead","Dead"]],u=[["all","All"],...c.map(([p])=>[p,p])],f=({r:p})=>{const _=a(p),M=s(p),g=_==="live"&&M<=1,d=Ba(p),S=[!0,p.booked,p.showed,p.closed];return m.jsxs("div",{className:"pl-row"+(p.dead?" is-dead":"")+(g?" is-fresh":""),children:[m.jsx("span",{className:"pl-mono "+_,children:(d.replace(/^@/,"")[0]||"?").toUpperCase()}),m.jsxs("span",{className:"pl-name",title:p.handle,children:[d,m.jsxs("span",{className:"pl-sub",children:[qt(p.date),p.timeReplied?" · "+p.timeReplied:"",p.account?" · "+p.account.toLowerCase():"",p.dead&&p.deadReason?" · "+p.deadReason.toLowerCase():"",p.callDate&&!p.showed&&!p.closed&&!p.dead?" · call "+qt(p.callDate):""]})]}),p.closed&&p.cash>0?m.jsxs("span",{className:"pipe-money",children:[ct(p.cash),p.dealValue>p.cash?" of "+ct(p.dealValue):""]}):!p.dead&&!p.closed?m.jsxs("span",{className:"age"+(_==="stale"?" stale":M>=2?" aging":""),children:[M,"d"]}):m.jsx("span",{}),m.jsx("span",{className:"pl-dots",title:"replied / booked / shown / closed",children:S.map((v,E)=>m.jsx("i",{className:"sd"+(v?" on":"")+(p.dead?" x":"")},E))})]})},h=e==="all"?null:l[e];return m.jsxs("div",{className:"card",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8,marginBottom:8},children:[m.jsx("h2",{className:"sec",style:{margin:0},children:"Pipeline"}),m.jsx("div",{className:"ptabs",style:{margin:0},children:u.map(([p,_])=>m.jsxs("button",{className:"btn sm"+(e===p?" active":""),onClick:()=>n(p),children:[_,p!=="all"&&l[p].length?" "+l[p].length:""]},p))})]}),o.length===0&&m.jsx("div",{className:"note",children:"No replies in this window yet."}),m.jsx("div",{className:"pipe-scroll",children:h?h.map((p,_)=>m.jsx(f,{r:p},_)):c.map(([p,_])=>l[p].length>0&&m.jsxs("div",{children:[m.jsxs("div",{className:"pl-group pg-"+p,children:[m.jsx("span",{children:_}),m.jsx("b",{children:l[p].length})]}),l[p].map((M,g)=>m.jsx(f,{r:M},g))]},p))})]})}function YT({replies:t}){const e=t.map(s=>hy(s.timeReplied)).filter(s=>s!==null);if(!e.length)return null;const n=jc.map(s=>e.filter(s.test).length),i=n.indexOf(Math.max(...n)),r=Math.max(...Array.from({length:24},(s,a)=>e.filter(o=>Math.floor(o)===a).length),1);return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Reply Windows, Irish time"}),m.jsxs("div",{className:"rw-stats",children:[m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Best window so far"}),m.jsx("div",{className:"display rw-big",style:{color:ya.red},children:jc[i].range.replace(" to "," - ")}),m.jsx("div",{className:"hdetail",children:jc[i].label.toLowerCase()})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Average reply time"}),m.jsx("div",{className:"display rw-big",children:py(e)}),m.jsxs("div",{className:"hdetail",children:["across ",e.length," timed replies"]})]})]}),m.jsx("div",{className:"hm-row",children:Array.from({length:24},(s,a)=>{const o=e.filter(l=>Math.floor(l)===a).length;return m.jsx("span",{className:"hm-cell",title:String(a).padStart(2,"0")+":00, "+o+(o===1?" reply":" replies"),style:{background:o>0?"rgba(225,20,20,"+(.18+.82*(o/r)).toFixed(2)+")":"#1E1E1E"}},a)})}),m.jsxs("div",{className:"hm-labels",children:[m.jsx("span",{children:"00"}),m.jsx("span",{children:"06"}),m.jsx("span",{children:"12"}),m.jsx("span",{children:"18"}),m.jsx("span",{children:"23"})]}),m.jsxs("div",{className:"note",children:["Times on ",e.length," of ",t.length," replies.",e.length<30&&" Directional only until 30 plus. The reply window is when Tier 1 conversations should be worked live."]})]})}function qT({daily:t,leads:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=(u,f,h)=>m.jsxs("div",{children:[m.jsx("div",{className:"label",children:u}),m.jsx("div",{className:"display sv",style:h?{color:ya.red}:null,children:Ee(f)})]}),s=e.filter(u=>u.nextDue&&u.status.toLowerCase()!=="replied");if(s.length>0&&jf(e))return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Follow Up Queue, standing by"}),m.jsxs("div",{className:"note",children:["The lead scheduler is parked until accounts 2 and 3 land; its dates are intentionally not being worked right now, so nothing here scores as overdue. The queue re-arms automatically the day the dates start moving again. ",Ee(s.length)," leads loaded and waiting."]})]});if(s.length>0){const u=s.filter(M=>M.nextDue<i).length,f=s.filter(M=>st(M.nextDue)===st(i)).length,h=s.filter(M=>st(M.nextDue)===st(new Date(i.getTime()+Je))).length,p=s.filter(M=>M.nextDue<=i&&/^touch/i.test(M.nextTouch)).length,_=s.filter(M=>M.nextDue<=i&&!/^touch/i.test(M.nextTouch)).length;return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Follow Up Queue, live from the lead sheet"}),m.jsxs("div",{className:"streaks",children:[r("Overdue",u,u>0),r("Due today",f),r("Due tomorrow",h)]}),m.jsxs("div",{className:"note",children:["Of everything due or overdue right now: ",Ee(p)," ladder touches, ",Ee(_)," evergreen follow ups, across ",Ee(s.length)," open leads.",u>0&&" Red rows in the lead sheet are stacking up, work them to zero per the SOP."]})]})}const a=new Date(i.getTime()+Je);let o=0,l=0;for(const u of t){const f=Math.round((a-u.date)/Je);f>=1&&f<=3?o+=u.initials:f>=8&&f<=28?l+=u.initials/3:f>=29&&f<=90?l+=u.initials/7:f>=91&&(l+=u.initials/30)}const c=o+l;return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Tomorrow's Load, SOP estimate"}),m.jsxs("div",{className:"streaks",children:[r("Ladder messages",o),r("Evergreen touches",l),r("Total owed",c,c>450)]}),m.jsxs("div",{className:"note",children:["Estimated from the daily log cohorts and the SOP cadence. Connects to the lead scheduler sheet automatically when it is reachable.",c>450&&" This load is beyond one setter's day, Tier 3 slips first per the Follow Up SOP."]})]})}function KT({replies:t}){const e=my(t),n=Ov(t),i=gy(t),r=vy(t);return!e&&!n.length&&!i.total&&!r?null:m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Velocity + Outcomes"}),m.jsxs("div",{className:"streaks",children:[m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Reply to booked"}),m.jsx("div",{className:"display sv",children:e?e.median+"d":"--"}),m.jsx("div",{className:"hdetail",children:e?"median, "+e.n+" booked with dates":"needs Date Booked entries"})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Booked inside 24h"}),m.jsx("div",{className:"display sv",children:e?Ye(e.within24h,0):"--"}),m.jsx("div",{className:"hdetail",children:"speed to lead doctrine"})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Lost leads"}),m.jsx("div",{className:"display sv",children:i.total}),m.jsx("div",{className:"hdetail",children:i.reasons.length?i.reasons.map(([s,a])=>s.toLowerCase()+" "+a).join(" · "):"none marked dead yet"})]})]}),n.length>0&&m.jsxs("div",{style:{marginTop:14},children:[m.jsx("div",{className:"label",style:{marginBottom:6},children:"Calls on the books"}),n.map((s,a)=>m.jsxs("div",{className:"ev",children:[m.jsx("span",{className:"ev-date",children:qt(s.callDate)}),m.jsx("span",{className:"ev-label",children:Ba(s)}),s.account&&m.jsx("span",{className:"ev-who",children:s.account})]},a))]}),r&&m.jsxs("div",{className:"note",children:["Replies by account: ",r.accounts.map(([s,a])=>s+" "+a).join(" · "),r.tagged<r.total&&" · "+(r.total-r.tagged)+" untagged"]})]})}function $T({daily:t,replies:e,leads:n,m:i}){return m.jsxs("div",{className:"grid",children:[m.jsxs("div",{className:"two-col",children:[m.jsxs(_t,{className:"card",children:[m.jsx("h2",{className:"sec",children:"Funnel, all time"}),m.jsx(WT,{m:i})]}),m.jsxs("div",{className:"grid",children:[m.jsx(_t,{delay:60,children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Stage Rates vs floors"}),m.jsxs("div",{className:"gauges",children:[m.jsx(Xo,{label:"Reply",value:i.replyRate,floor:pt.replyRate[0],strong:pt.replyRate[1],sample:i.initials,sampleNeed:150,sampleUnit:"sends"}),m.jsx(Xo,{label:"Booking",value:i.bookingRate,floor:pt.bookingRate[0],strong:pt.bookingRate[1],sample:i.replies,sampleNeed:10,sampleUnit:"replies"}),m.jsx(Xo,{label:"Show",value:i.showRate,floor:pt.showRate[0],strong:pt.showRate[1],sample:i.booked,sampleNeed:5,sampleUnit:"booked"}),m.jsx(Xo,{label:"Close",value:i.closeRate,floor:pt.closeRate[0],strong:pt.closeRate[1],sample:i.shown,sampleNeed:5,sampleUnit:"shows"})]})]})}),m.jsx(_t,{delay:120,children:m.jsx(KT,{replies:e})}),m.jsx(_t,{delay:180,children:m.jsx(qT,{daily:t,leads:n})})]})]}),m.jsxs("div",{className:"two-col",children:[m.jsx(_t,{children:m.jsx(XT,{replies:e})}),m.jsx(_t,{delay:60,children:m.jsx(YT,{replies:e})})]})]})}const Oi={red:"#E11414",bone:"#F4F2ED"};function ZT({daily:t,replies:e,payments:n,m:i,calc:r}){const s=_e.useMemo(()=>{const y=new Date,A=new Date(y.getFullYear(),y.getMonth(),1),N=new Date(y.getFullYear(),y.getMonth()+1,0),L=new Date(y.getFullYear(),y.getMonth(),y.getDate()),H=Wf(e,n),W=H.source==="payments",G=[];let O=0;for(let z=A.getTime();z<=L.getTime();z+=Je){const Q=new Date(z),Y=W?n.filter(j=>j.date.getTime()===Q.getTime()).reduce((j,Me)=>j+Me.amount,0):e.filter(j=>j.date.getTime()===Q.getTime()).reduce((j,Me)=>j+Me.cash,0);O+=Y,G.push({x:Q,y:O})}const U=Bv(t,e,i,r,H.mtd);return{days:G,bands:U,monthEnd:N,today:L,goal:r.goal}},[t,e,n,i,r]),{days:a,bands:o,monthEnd:l,today:c,goal:u}=s,f=720,h=260,p=52,_=14,M=14,g=26,d=a.length?a[0].x.getTime():c.getTime(),S=l.getTime(),v=Math.max(u,o.p90,1)*1.08,E=y=>p+(y-d)/Math.max(S-d,1)*(f-p-_),b=y=>M+(1-y/v)*(h-M-g),P=a.map(y=>E(y.x.getTime()).toFixed(1)+","+b(y.y).toFixed(1)).join(" "),R=E(c.getTime()),w=b(o.cashMTD),x=[R+","+w,E(S)+","+b(o.p90),E(S)+","+b(o.p10)].join(" ");return m.jsxs("svg",{viewBox:"0 0 "+f+" "+h,className:"chart-svg",children:[[.25,.5,.75,1].map(y=>m.jsxs("g",{children:[m.jsx("line",{x1:p,x2:f-_,y1:b(v*y),y2:b(v*y),stroke:"#1B1B1B"}),m.jsx("text",{x:p-7,y:b(v*y)+3,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:vi(v*y)})]},y)),m.jsx("line",{x1:p,x2:f-_,y1:b(u),y2:b(u),stroke:Oi.bone,strokeDasharray:"5 5",opacity:"0.45"}),m.jsxs("text",{x:f-_,y:b(u)-5,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,opacity:"0.7",children:["GOAL ",vi(u)]}),m.jsx("polygon",{points:x,fill:Oi.red,opacity:"0.10"}),m.jsx("line",{x1:R,y1:w,x2:E(S),y2:b(o.p50),stroke:Oi.red,strokeDasharray:"4 5",strokeWidth:"1.5",opacity:"0.8"}),a.length>1&&m.jsx("polyline",{points:P,fill:"none",stroke:Oi.red,strokeWidth:"2.4",strokeLinejoin:"round",pathLength:"1",className:"drawline"}),m.jsx("circle",{cx:R,cy:w,r:"3.5",fill:Oi.red}),m.jsxs("text",{x:R+6,y:w-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:Oi.bone,children:[vi(o.cashMTD)," today"]}),m.jsx("text",{x:p,y:h-8,fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:qt(new Date(d))}),m.jsx("text",{x:f-_,y:h-8,textAnchor:"end",fontFamily:"'Space Mono', monospace",fontSize:"9",fill:"#4A4A4A",children:qt(l)})]})}function QT({replies:t}){const e=t.filter(n=>n.closed).sort((n,i)=>i.date-n.date);return e.length?m.jsx("div",{className:"deal-cards",children:e.map((n,i)=>{const r=n.dealValue||n.cash,s=rt(n.cash,r),a=Ba(n);return m.jsxs("div",{className:"deal-card",children:[m.jsxs("div",{className:"dc-top",children:[m.jsx("span",{className:"pl-mono won",children:(a.replace(/^@/,"")[0]||"?").toUpperCase()}),m.jsx("span",{className:"dc-name",title:n.handle,children:a}),n.paymentPlan&&m.jsx("span",{className:"chip",children:"plan"})]}),m.jsxs("div",{className:"dc-amount display",children:[ct(n.cash),m.jsxs("span",{className:"dc-of",children:[" of ",ct(r)]})]}),m.jsx("div",{className:"lbar-track",children:m.jsx("span",{className:"lbar-fill",style:{width:Math.max(s*100,2)+"%"}})}),m.jsxs("div",{className:"dc-foot",children:[m.jsxs("span",{children:[Ye(s,0)," collected"]}),m.jsx("span",{children:n.dateClosed?qt(n.dateClosed):qt(n.date)})]})]},i)})}):m.jsx("div",{className:"note",children:"Closed deals land here as receipts, collected vs signed filling in per deal."})}function Yo(t){return/rev\s?-?share|backend/i.test(t.notes||"")}function JT({payments:t}){if(!t.length)return m.jsx("div",{className:"note",children:'The Payments tab is live. One row per payment the day it lands; the waterfall, the monthly numbers and the backend split all read from it. Tag backend money with "rev share" in the Notes column.'});const e=t.reduce((s,a)=>s+a.amount,0),n=t.filter(s=>!Yo(s)).reduce((s,a)=>s+a.amount,0),i=e-n,r=[...t].sort((s,a)=>s.date-a.date);return m.jsxs("div",{style:{marginTop:14},children:[m.jsx("div",{className:"label",style:{marginBottom:8},children:"Payment waterfall"}),m.jsx("div",{className:"wf",children:r.map((s,a)=>m.jsx("span",{className:"wf-seg"+(Yo(s)?" rev":""),style:{width:Math.max(s.amount/e*100,1.5)+"%"},title:qt(s.date)+": "+ct(s.amount)+(s.handle?" · "+s.handle:"")+(Yo(s)?" · rev share":"")},a))}),m.jsxs("div",{className:"wf-legend",children:[m.jsxs("span",{children:[m.jsx("i",{className:"wl-up"}),"upfront ",ct(n)]}),m.jsxs("span",{children:[m.jsx("i",{className:"wl-rev"}),"backend rev share ",ct(i)]}),m.jsxs("span",{style:{marginLeft:"auto"},children:[r.length," payments · ",ct(e)]})]}),m.jsx("div",{style:{marginTop:12},children:[...t].sort((s,a)=>a.date-s.date).slice(0,10).map((s,a)=>m.jsxs("div",{className:"ev",children:[m.jsx("span",{className:"ev-date",children:qt(s.date)}),m.jsxs("span",{className:"ev-label",children:[s.handle||s.notes||"payment",Yo(s)?" · rev share":""]}),m.jsx("span",{className:"pipe-money",style:{marginLeft:"auto"},children:ct(s.amount)})]},a))})]})}function eA({calc:t,setCalc:e,m:n}){const[i,r]=_e.useState(!1),{goal:s,deal:a,aov:o,showRate:l,closeRate:c,capacity:u,sendDays:f}=t,h=A=>N=>e({...t,[A]:N}),p=n.replyRate>0?n.replyRate:Xa,_=n.bookingRate>0?n.bookingRate:Ya,M=rt(s,o),g=rt(M,c),d=rt(g,l),S=rt(d,_),v=rt(S,p),E=rt(v,u),b=rt(E,f/4.345),P=u>0?b<1?wn(E,0)+" days":b<9?wn(b,1)+" weeks":wn(b/4.345,1)+" months":null,R=u*f*p*_*l*c*o,w=(A,N,L,H,W)=>m.jsxs("div",{className:"field",children:[m.jsx("label",{className:"label",children:A}),m.jsx("input",{type:"number",min:"0",step:H,value:N,onChange:G=>L(Math.max(0,br(G.target.value)))}),W&&m.jsx("div",{className:"hint",children:W})]}),x=(A,N,L,H,W,G,O)=>m.jsxs("div",{className:"field",children:[m.jsxs("label",{className:"label",children:[A," ",m.jsx(Ay,{kind:"manual",children:"Manual"}),m.jsx("span",{className:"rate-val",style:{float:"right"},children:Ye(N)})]}),m.jsx("input",{type:"range",min:H,max:W,step:G,value:N,onChange:U=>L(parseFloat(U.target.value))}),O]}),y=(A,N,L)=>m.jsxs("div",{className:"chain-row",children:[m.jsxs("div",{children:[m.jsx("div",{className:"mono cr-label",children:A}),L&&m.jsx("div",{className:"cr-note",children:L})]}),m.jsx("div",{className:"display cr-val",children:N})]});return m.jsxs("div",{className:"card",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10},children:[m.jsx("h2",{className:"sec",style:{margin:0},children:"Planning Console"}),m.jsxs("span",{style:{display:"flex",gap:16,alignItems:"baseline",flexWrap:"wrap"},children:[m.jsxs("span",{className:"label",children:["goal ",m.jsx("b",{className:"display",style:{color:Oi.red,fontSize:16},children:ct(s)})]}),m.jsxs("span",{className:"label",children:["time to goal ",m.jsx("b",{className:"display",style:{color:"#F4F2ED",fontSize:16},children:P||"--"})]}),m.jsx("button",{className:"btn",onClick:()=>r(!i),children:i?"[ Close ]":"[ Adjust ]"})]})]}),i&&m.jsxs("div",{className:"calc-grid",style:{marginTop:16},children:[m.jsxs("div",{children:[w("Monthly cash goal (€)",s,h("goal"),1e3),w("Cash per close (€)",o,h("aov"),500,"What a client pays up front. Most deals are payment plans; the backend is tracked separately."),w("Deal value (€)",a,h("deal"),1e3,"Full contract for the signed-revenue view."),w("Capacity, initials a day",u,h("capacity"),5,"One warmed account sends about 100 a day before block risk."),w("Send days a month",f,h("sendDays"),1),x("Show rate",l,h("showRate"),.3,1,.005),x("Close rate",c,h("closeRate"),.05,.5,.005)]}),m.jsxs("div",{children:[y("Clients needed",wn(M,1),"goal / cash per close"),y("Contract revenue",ct(M*a),"at full deal value"),y("Shows needed",wn(g,1)),y("Calls to book",wn(d,1)),y("Replies needed",wn(S,0),Ye(_)+" booking"+(n.bookingRate>0?", live":", assumed")),y("Initials needed",wn(v,0),Ye(p)+" reply"+(n.replyRate>0?", live":", assumed")),y("Time to goal",P||"--","at "+Ee(u)+" a day, "+Ee(f)+" send days a month"),y("Month supported by capacity",ct(R),Ye(rt(R,s),0)+" of goal")]})]})]})}function tA({daily:t,replies:e,payments:n,m:i,calc:r,setCalc:s}){const a=Wf(e,n),o=a.all*xp,l=Math.max(i.dealValue-a.all,0),c=e.filter(f=>f.closed&&f.paymentPlan).length,u=e.filter(f=>f.closed).length;return m.jsxs("div",{className:"grid",children:[m.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"repeat(4, 1fr)"},children:[m.jsxs(_t,{className:"tile",children:[m.jsx("div",{className:"label",children:"Collected, this month"}),m.jsx("div",{className:"display val red",children:m.jsx(Pr,{value:a.mtd,format:ct})}),m.jsxs("div",{className:"sub",children:[Ye(rt(a.mtd,r.goal),0)," of ",ct(r.goal),a.source==="payments"?" · by payment date":""]})]}),m.jsxs(_t,{className:"tile",delay:50,children:[m.jsx("div",{className:"label",children:"Signed, all time"}),m.jsx("div",{className:"display val",children:m.jsx(Pr,{value:i.dealValue,format:ct})}),m.jsxs("div",{className:"sub",children:[ct(l)," still to collect"]})]}),m.jsxs(_t,{className:"tile",delay:100,children:[m.jsx("div",{className:"label",children:"Commission accrued"}),m.jsx("div",{className:"display val",children:m.jsx(Pr,{value:o,format:ct})}),m.jsxs("div",{className:"sub",children:[Ye(xp,1)," of collected, owed to the setter"]})]}),m.jsxs(_t,{className:"tile",delay:150,children:[m.jsx("div",{className:"label",children:"Payment plans"}),m.jsxs("div",{className:"display val",children:[c,m.jsxs("span",{style:{color:"#7A7A7A",fontSize:15},children:[" of ",u]})]}),m.jsx("div",{className:"sub",children:"deals on plans; backend follows"})]})]}),a.mismatch&&m.jsxs("div",{className:"notice",children:["Payments tab total (",ct(a.mismatch.payAll),") and reply-row cash (",ct(a.mismatch.repliesAll),") disagree. Two records of the same money should match; reconcile them."]}),m.jsxs(_t,{className:"card",children:[m.jsx("h2",{className:"sec",children:"Cash Trajectory, this month"}),m.jsx(ZT,{daily:t,replies:e,payments:n,m:i,calc:r}),m.jsxs("div",{className:"note",children:["Red line is money banked",a.source==="payments"?", dated by when each payment landed":"",". The cone is 500 simulated month-ends from the live rates: dashed midline P50, shaded P10 to P90. A thin sample means a wide cone; that is the honest read."]})]}),m.jsxs("div",{className:"two-col",children:[m.jsxs(_t,{className:"card",children:[m.jsx("h2",{className:"sec",children:"Deal Ledger"}),m.jsx(QT,{replies:e}),m.jsx(JT,{payments:n})]}),m.jsx(_t,{delay:60,children:m.jsx(eA,{calc:r,setCalc:s,m:i})})]})]})}const di={red:"#E11414",teal:"#3EC1BB",steel:"#5A5A5A"};function nA({daily:t,replies:e,capacity:n}){const i=new Map;e.forEach(o=>{const l=st(o.date);i.set(l,(i.get(l)||0)+1)});const r=t.some(o=>o.comments>0),s=o=>{const l=[];return n>0&&o.initials<n*.5&&l.push("volume under half target"),r&&o.comments===0&&l.push("no comments logged"),l},a=t.slice(-9).reverse();return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Field Log, latest days"}),m.jsxs("div",{className:"flog-head",children:[m.jsx("span",{children:"Date"}),m.jsx("span",{children:"Init"}),m.jsx("span",{children:"FUps"}),m.jsx("span",{children:"Cmts"}),m.jsx("span",{children:"Repl"}),m.jsx("span",{children:"Note"})]}),a.map((o,l)=>m.jsxs("div",{className:"flog-row",children:[m.jsxs("span",{className:"fd"+(s(o).length?" warn":""),title:s(o).join(", ")||void 0,children:[qt(o.date),s(o).length>0&&" ⚠"]}),m.jsx("span",{children:Ee(o.initials)}),m.jsx("span",{children:Ee(o.followUps)}),m.jsx("span",{children:o.comments>0?Ee(o.comments):"·"}),m.jsx("span",{children:i.get(st(o.date))||"·"}),m.jsx("span",{className:"fnote"+(o.notes&&o.notes.length>1?" alert":""),title:o.notes,children:o.notes&&o.notes.length>1?o.notes:"·"})]},l)),a.length===0&&m.jsx("div",{className:"note",children:"Logged days land here."}),m.jsx("div",{className:"note",children:"Notes come straight from the EOD form. Anything written there is an operational flag worth reading."})]})}function iA({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(u=>[st(u.date),u])),s=t.length?t[0].date:null,a=(i.getDay()+6)%7,o=new Date(i.getTime()-a*Je),l=[];for(let u=15;u>=0;u--){const f=[];for(let h=0;h<6;h++){const p=new Date(o.getTime()-u*7*Je+h*Je);f.push(p>i?null:p)}l.push(f)}const c=u=>{if(!u)return{bg:"transparent",title:""};const f=r.get(st(u)),h=s&&u>=s;return f?{bg:"rgba(225,20,20,"+(.16+.84*(e>0?Math.min(f.initials/e,1):0)).toFixed(2)+")",title:qt(u)+": "+Ee(f.initials)+" initials, "+Ee(f.followUps)+" follow ups"}:h?{bg:"#241A08",title:qt(u)+": not logged",miss:!0}:{bg:"#141414",title:qt(u)}};return m.jsxs("div",{className:"card",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:8},children:[m.jsx("h2",{className:"sec",style:{margin:0},children:"Consistency, 16 weeks"}),m.jsxs("span",{className:"label",children:["color = initials vs ",Ee(e)]})]}),m.jsx("div",{className:"hmap",style:{marginTop:12},children:l.map((u,f)=>m.jsx("div",{className:"hmap-col",children:u.map((h,p)=>{const _=c(h);return m.jsx("span",{className:"hmap-cell"+(_.miss?" miss":""),style:{background:_.bg},title:_.title},p)})},f))}),m.jsx("div",{className:"note",children:"Mondays on top, Saturdays on the bottom, Sundays off. Amber cells are working days inside the tracking window with no EOD row."})]})}function rA({daily:t,capacity:e}){const n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),r=new Map(t.map(f=>[st(f.date),f])),s=r.get(st(i)),a=r.get(st(new Date(i.getTime()-Je))),o=s||a,l=s?"Today":"Latest logged day";if(!o)return null;const c=[{name:"Initials at target",ok:o.initials>=e*.9,detail:Ee(o.initials)+" of "+Ee(e)},{name:"Comments matched to initials",ok:o.comments>=o.initials*.85,detail:Ee(o.comments)+" comments"},{name:"Ladder worked",ok:o.followUps>0,detail:Ee(o.followUps)+" follow ups"},{name:"EOD logged",ok:!0,detail:"form in"}],u=c.filter(f=>f.ok).length;return m.jsxs("div",{className:"card",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[m.jsxs("h2",{className:"sec",style:{margin:0},children:["Day Score, ",l.toLowerCase()]}),m.jsxs("span",{className:"display",style:{fontSize:22,color:u===c.length?di.red:"#F4F2ED"},children:[u,"/",c.length]})]}),m.jsx("div",{style:{marginTop:12},children:c.map((f,h)=>m.jsxs("div",{style:{display:"flex",gap:10,alignItems:"baseline",padding:"7px 0",borderBottom:"1px solid #191919"},children:[m.jsx("span",{className:"mono",style:{fontSize:11,color:f.ok?"#3EC1BB":"#C9A227",width:40},children:f.ok?"[OK]":"[..]"}),m.jsx("span",{style:{fontSize:13},children:f.name}),m.jsx("span",{className:"mono",style:{marginLeft:"auto",fontSize:10,color:"#7A7A7A"},children:f.detail})]},h))})]})}function sA({daily:t,replies:e,capacity:n}){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Map(t.map(h=>[st(h.date),h])).get(st(r)),o=a?a.initials:0,l=Math.max(n-o,0),c=Ov(e).filter(h=>h.callDate&&(h.callDate-r)/Je<2),u=e.filter(h=>!h.booked&&!h.dead&&!h.closed).sort((h,p)=>{const _=h.status.toLowerCase()==="talking",M=p.status.toLowerCase()==="talking";return _!==M?_?1:-1:h.date-p.date}),f=[];if(c.length&&f.push({title:"Calls "+(c.some(h=>st(h.callDate)===st(r))?"today":"tomorrow"),text:c.map(h=>h.handle+" "+qt(h.callDate)).join(" · ")+". Confirm each one this morning; a confirmed call shows."}),u.length){const h=u.slice(0,5).map(p=>{const _=Math.round((r-p.date)/Je);return p.handle+(_>0?" ("+_+"d)":"")});f.push({title:"Work the "+Ee(u.length)+" open conversation"+(u.length===1?"":"s"),text:h.join(" · ")+(u.length>5?" and "+Ee(u.length-5)+" more":"")+". Oldest first; every open thread is money already paid for."})}return f.push({title:l>0?Ee(l)+" initials to target":"Volume target hit",text:l>0?(o>0?Ee(o)+" logged so far today. ":"")+"Full ladder beside it: follow ups first, then fresh sends, comment before each initial.":"Target volume is in. Spend the extra minutes on the reply queue, not on more sends."}),m.jsxs("div",{className:"card orders",children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:8},children:[m.jsx("h2",{className:"sec",style:{margin:0},children:"Marching Orders"}),m.jsxs("span",{className:"label",children:[qt(r)," · straight from the sheets"]})]}),m.jsx("div",{style:{marginTop:10},children:f.map((h,p)=>m.jsxs("div",{className:"order",children:[m.jsx("span",{className:"order-n display",children:String(p+1).padStart(2,"0")}),m.jsxs("div",{children:[m.jsx("div",{className:"order-t",children:h.title}),m.jsx("div",{className:"order-x",children:h.text})]})]},p))})]})}const aA=[{id:"reply",label:"+ Reply"},{id:"booking",label:"Booked"},{id:"payment",label:"Cash in"},{id:"status",label:"Status"}];function oA(){const[t,e]=_e.useState("reply"),[n,i]=_e.useState(""),[r,s]=_e.useState(""),[a,o]=_e.useState("Talking"),[l,c]=_e.useState(""),[u,f]=_e.useState(localStorage.getItem("logPin")||""),[h,p]=_e.useState(null),[_,M]=_e.useState(!1),g=async()=>{if(!_){if(!n.trim()){p({bad:!0,text:"Needs a handle."});return}if(t==="payment"&&!(Number(r)>0)){p({bad:!0,text:"Needs an amount."});return}if(!u){p({bad:!0,text:"Set the pin first (same as the sheet secret)."});return}localStorage.setItem("logPin",u),M(!0),p(null);try{const d=await fetch("/api/log",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({pin:u,action:t,handle:n.trim(),notes:l.trim(),amount:Number(r)||0,status:t==="status"?a:""})}),S=await d.json().catch(()=>({}));d.status===503?p({bad:!0,text:"Not wired yet: set SHEET_WEBHOOK_URL and LOG_PIN in Vercel."}):d.status===401?p({bad:!0,text:"Wrong pin."}):!d.ok||!S.ok?p({bad:!0,text:"Sheet said no ("+(S.error||d.status)+")."}):(p({text:"Logged. The sheet has it."}),i(""),s(""),c(""))}catch{p({bad:!0,text:"Could not reach the relay."})}M(!1)}};return m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Quick Log"}),m.jsx("div",{className:"ql-modes",children:aA.map(d=>m.jsx("button",{className:"btn"+(t===d.id?" active":""),onClick:()=>{e(d.id),p(null)},children:d.label},d.id))}),m.jsxs("div",{className:"ql-form",children:[m.jsx("input",{className:"ask-input",placeholder:"@handle",value:n,maxLength:80,onChange:d=>i(d.target.value)}),t==="payment"&&m.jsx("input",{className:"ask-input",placeholder:"amount EUR",inputMode:"decimal",value:r,onChange:d=>s(d.target.value)}),t==="status"&&m.jsx("select",{className:"ask-input",value:a,onChange:d=>o(d.target.value),children:["Talking","Waiting","Dead"].map(d=>m.jsx("option",{children:d},d))}),m.jsx("input",{className:"ask-input",placeholder:"note (optional)",value:l,maxLength:200,onChange:d=>c(d.target.value)}),m.jsxs("div",{className:"ql-row",children:[m.jsx("input",{className:"ask-input ql-pin",placeholder:"pin",type:"password",value:u,onChange:d=>f(d.target.value)}),m.jsx("button",{className:"btn ask-send",onClick:g,disabled:_,children:_?"…":"LOG IT"})]})]}),h&&m.jsx("div",{className:"note"+(h.bad?" ql-bad":""),children:h.text}),m.jsx("div",{className:"note",children:"Writes straight to the Replies and Payments tabs. Bookings made through Calendly log themselves."})]})}function lA({daily:t,replies:e,calc:n}){const i=dy(t,n.capacity),r=fy(t,e),s=kv(t,e),a=[{key:"initials",color:di.red,area:!0,data:t.map(o=>({x:o.date,y:o.initials}))},{key:"comments",color:di.teal,data:t.map(o=>({x:o.date,y:o.comments}))},{key:"follow ups",color:di.steel,data:t.map(o=>({x:o.date,y:o.followUps}))}];return m.jsxs("div",{className:"grid",children:[m.jsxs("div",{className:"two-col",children:[m.jsx(_t,{children:m.jsx(sA,{daily:t,replies:e,capacity:n.capacity})}),m.jsx(_t,{delay:40,children:m.jsx(oA,{})})]}),m.jsxs("div",{className:"two-col",children:[m.jsxs("div",{className:"grid",children:[m.jsxs(_t,{className:"card",children:[m.jsx("h2",{className:"sec",children:"Daily Output"}),m.jsx(Cy,{series:a,height:240}),m.jsxs("div",{className:"legend",children:[m.jsxs("span",{className:"leg",children:[m.jsx("i",{style:{background:di.red}}),"initials"]}),m.jsxs("span",{className:"leg",children:[m.jsx("i",{style:{background:di.teal}}),"comments"]}),m.jsxs("span",{className:"leg",children:[m.jsx("i",{style:{background:di.steel}}),"follow ups"]})]})]}),m.jsx(_t,{delay:40,children:m.jsx(iA,{daily:t,capacity:n.capacity})})]}),m.jsxs("div",{className:"grid",children:[m.jsx(_t,{delay:60,children:m.jsx(rA,{daily:t,capacity:n.capacity})}),m.jsx(_t,{delay:120,children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Streaks"}),m.jsxs("div",{className:"streaks",children:[m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Log streak"}),m.jsxs("div",{className:"display sv",style:i.cur>=6?{color:di.red}:null,children:[i.cur,"d"]}),m.jsxs("div",{className:"hdetail",children:["best ever ",i.best,"d"]})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"Days at target volume"}),m.jsxs("div",{className:"display sv",style:i.vol>=3?{color:di.red}:null,children:[i.vol,"d"]}),m.jsxs("div",{className:"hdetail",children:["at 90% of ",Ee(n.capacity)]})]}),m.jsxs("div",{children:[m.jsx("div",{className:"label",children:"This week"}),m.jsx("div",{className:"display sv",children:Ee(s.initials.cur)}),m.jsxs("div",{className:"hdetail",children:["initials, vs ",Ee(s.initials.prev)," last wk"]})]})]})]})})]})]}),m.jsxs("div",{className:"two-col",children:[m.jsx(_t,{children:m.jsx(nA,{daily:t,replies:e,capacity:n.capacity})}),m.jsx(_t,{delay:60,children:m.jsxs("div",{className:"card",children:[m.jsx("h2",{className:"sec",children:"Milestones"}),r.length===0&&m.jsx("div",{className:"note",children:"Milestones land here as they happen."}),r.map((o,l)=>m.jsxs("div",{className:"ev",children:[m.jsx("span",{className:"ev-date",children:qt(o.date)}),m.jsx("span",{className:"ev-label",children:o.label}),o.who&&m.jsx("span",{className:"ev-who",children:o.who})]},l))]})})]})]})}const Sa=[{id:"command",label:"Command",el:jT},{id:"pipeline",label:"Pipeline",el:$T},{id:"cash",label:"Cash",el:tA},{id:"setter",label:"Setter",el:lA}];function cA(){const t=()=>{const i=(location.hash||"").replace(/^#\/?/,"");return Sa.some(r=>r.id===i)?i:"command"},[e,n]=_e.useState(t);return _e.useEffect(()=>{const i=()=>n(t());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]),e}function uA({done:t}){const e=["feeds .......... daily log / replies / lead scheduler","engine ......... levers priced, diagnosis armed","palantir ....... seeing-stone online"],[n,i]=_e.useState(0);return _e.useEffect(()=>{if(Wn)return;const r=setInterval(()=>i(s=>s+1),330);return()=>clearInterval(r)},[]),m.jsx("div",{className:"boot"+(t?" done":""),children:m.jsxs("div",{className:"boot-in",children:[m.jsx(fd,{sub:"Ops Terminal v5"}),m.jsx("div",{className:"boot-lines",children:e.slice(0,n+1).map((r,s)=>m.jsxs("div",{children:[m.jsx("span",{className:"ok",children:">"})," ",r]},s))})]})})}function dA({open:t,close:e,go:n,actions:i}){const[r,s]=_e.useState(""),[a,o]=_e.useState(0),l=_e.useMemo(()=>{const u=[...Sa.map(h=>({label:"Go to "+h.label,k:"view",run:()=>n(h.id)})),...i],f=r.trim().toLowerCase();return f?u.filter(h=>h.label.toLowerCase().includes(f)):u},[r,i,n]);if(_e.useEffect(()=>{o(0)},[r,t]),_e.useEffect(()=>{t||s("")},[t]),!t)return null;const c=u=>{u.key==="Escape"?e():u.key==="ArrowDown"?(u.preventDefault(),o(f=>Math.min(f+1,l.length-1))):u.key==="ArrowUp"?(u.preventDefault(),o(f=>Math.max(f-1,0))):u.key==="Enter"&&l[a]&&(l[a].run(),e())};return m.jsx("div",{className:"pal-overlay",onClick:e,children:m.jsxs("div",{className:"palette",onClick:u=>u.stopPropagation(),children:[m.jsx("input",{autoFocus:!0,placeholder:"Type a command",value:r,onChange:u=>s(u.target.value),onKeyDown:c}),l.map((u,f)=>m.jsxs("div",{className:"pal-item"+(f===a?" sel":""),onMouseEnter:()=>o(f),onClick:()=>{u.run(),e()},children:[m.jsx("span",{children:u.label}),m.jsx("span",{className:"k",children:u.k})]},f))]})})}function fA(){const{daily:t,replies:e,leads:n,payments:i,sample:r,loadedAt:s,reload:a}=Ty(),o=cA(),[l,c]=_e.useState(()=>{try{const N=JSON.parse(localStorage.getItem("kg_calc")||"null");return N?{...Gc,...N}:Gc}catch{return Gc}});_e.useEffect(()=>{try{localStorage.setItem("kg_calc",JSON.stringify(l))}catch{}},[l]);const[u,f]=_e.useState(()=>Wn||sessionStorage.getItem("kg_booted")==="1");_e.useEffect(()=>{if(u)return;const N=setTimeout(()=>{f(!0);try{sessionStorage.setItem("kg_booted","1")}catch{}},1500);return()=>clearTimeout(N)},[u]);const[h,p]=_e.useState(!1),[_,M]=_e.useState(!1);_e.useEffect(()=>{document.body.classList.toggle("tv",_)},[_]);const g=_e.useCallback(N=>{location.hash="/"+N},[]);_e.useEffect(()=>{const N=L=>{if((L.metaKey||L.ctrlKey)&&L.key.toLowerCase()==="k"){L.preventDefault(),p(W=>!W);return}if(L.target&&/input|textarea|select/i.test(L.target.tagName))return;L.key==="Escape"&&_&&M(!1);const H={1:"command",2:"pipeline",3:"cash",4:"setter"};H[L.key]&&g(H[L.key]),L.key.toLowerCase()==="t"&&M(W=>!W),L.key.toLowerCase()==="r"&&a()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[g,a,_]);const d=_e.useMemo(()=>t&&e?sy(t,e):null,[t,e]),S=_e.useRef(null),[v,E]=_e.useState(0);_e.useEffect(()=>{if(!d)return;const N=[d.initials,d.replies,d.booked,d.shown,d.closed,Math.round(d.cash)].join("|");S.current&&S.current!==N&&E(L=>L+1),S.current=N},[d]);const[b,P]=_e.useState(o),[R,w]=_e.useState(!1);_e.useEffect(()=>{if(o===b)return;if(Wn){P(o);return}w(!0);const N=setTimeout(()=>P(o),150),L=setTimeout(()=>w(!1),340);return()=>{clearTimeout(N),clearTimeout(L)}},[o,b]);const x=_e.useMemo(()=>t&&e?xy(t,e,n,l.capacity):[],[t,e,n,l.capacity]);if(!t||!e)return m.jsxs("div",{className:"center",children:[m.jsx(fd,{sub:"Ops Terminal v5"}),m.jsx("div",{className:"label",style:{marginTop:10},children:"Pulling the numbers"})]});const y=(Sa.find(N=>N.id===b)||Sa[0]).el,A=[{label:"Refresh data",k:"R",run:a},{label:(_?"Exit":"Enter")+" TV mode",k:"T",run:()=>M(N=>!N)},{label:"Open sales sheet",k:"link",run:()=>window.open(Uv,"_blank")},{label:"Open lead scheduler",k:"link",run:()=>window.open(Fv,"_blank")},{label:"Open v4 tracker",k:"link",run:()=>window.open("/dm-tracker/","_blank")}];return m.jsxs("div",{children:[!u&&m.jsx(uA,{done:!1}),m.jsx("span",{className:"hud-corner hud-tl"}),m.jsx("span",{className:"hud-corner hud-tr"}),m.jsx("span",{className:"hud-corner hud-bl"}),m.jsx("span",{className:"hud-corner hud-br"}),m.jsxs("div",{className:"shell",children:[m.jsxs("div",{className:"topbar",children:[m.jsx("a",{href:"#/command",style:{textDecoration:"none"},children:m.jsx(fd,{sub:"Ops Terminal v5"})}),m.jsx("nav",{className:"nav",children:Sa.map(N=>m.jsx("a",{href:"#/"+N.id,className:o===N.id?"on":"",children:N.label},N.id))}),m.jsxs("div",{className:"top-right",children:[m.jsxs("span",{className:"feed",children:[m.jsx("span",{className:r?"dead":"lit"}),r?"sample data":"live feed",s&&!r&&m.jsxs("span",{style:{color:"#4A4A4A"},children:[" ","· ",s.toLocaleTimeString("en-IE",{hour:"2-digit",minute:"2-digit"})]})]}),m.jsx("button",{className:"kbd-hint",onClick:()=>p(!0),children:"⌘K"})]})]}),r&&m.jsx("div",{className:"notice",children:"Live sheet unreachable from this network; running on sample data so the layout stays honest. It reconnects automatically."}),x.length>0&&m.jsx("div",{className:"ticker",children:x.map((N,L)=>m.jsx("span",{className:"sig "+N.sev,children:N.text},L))}),m.jsx(y,{daily:t,replies:e,leads:n,payments:i,m:d,calc:l,setCalc:c,flare:v}),m.jsxs("div",{className:"footer",children:[m.jsx("span",{children:"KEHOEGROUP · Blood & Ink"}),m.jsx("span",{children:"keys: 1-4 views · T tv · R refresh · ⌘K palette"})]})]}),R&&m.jsx("div",{className:"wipe","aria-hidden":"true"}),m.jsx(dA,{open:h,close:()=>p(!1),go:g,actions:A})]})}Iv(document.getElementById("root")).render(m.jsx(fA,{}));
