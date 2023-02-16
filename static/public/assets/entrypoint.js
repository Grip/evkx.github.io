function Vw(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ay(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Va={},qw={get exports(){return Va},set exports(e){Va=e}},Du={},T={},Kw={get exports(){return T},set exports(e){T=e}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=Symbol.for("react.element"),Qw=Symbol.for("react.portal"),Gw=Symbol.for("react.fragment"),Xw=Symbol.for("react.strict_mode"),Jw=Symbol.for("react.profiler"),Yw=Symbol.for("react.provider"),ek=Symbol.for("react.context"),tk=Symbol.for("react.forward_ref"),nk=Symbol.for("react.suspense"),rk=Symbol.for("react.memo"),ok=Symbol.for("react.lazy"),l_=Symbol.iterator;function ik(e){return e===null||typeof e!="object"?null:(e=l_&&e[l_]||e["@@iterator"],typeof e=="function"?e:null)}var Ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},By=Object.assign,Iy={};function Vi(e,t,n){this.props=e,this.context=t,this.refs=Iy,this.updater=n||Ny}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function My(){}My.prototype=Vi.prototype;function Mp(e,t,n){this.props=e,this.context=t,this.refs=Iy,this.updater=n||Ny}var Dp=Mp.prototype=new My;Dp.constructor=Mp;By(Dp,Vi.prototype);Dp.isPureReactComponent=!0;var u_=Array.isArray,Dy=Object.prototype.hasOwnProperty,Fp={current:null},Fy={key:!0,ref:!0,__self:!0,__source:!0};function jy(e,t,n){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Dy.call(t,r)&&!Fy.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:bs,type:e,key:a,ref:l,props:i,_owner:Fp.current}}function ak(e,t){return{$$typeof:bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jp(e){return typeof e=="object"&&e!==null&&e.$$typeof===bs}function sk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var c_=/\/+/g;function ad(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sk(""+e.key):t.toString(36)}function bl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case bs:case Qw:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ad(l,0):r,u_(i)?(n="",e!=null&&(n=e.replace(c_,"$&/")+"/"),bl(i,t,n,"",function(f){return f})):i!=null&&(jp(i)&&(i=ak(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(c_,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",u_(e))for(var u=0;u<e.length;u++){a=e[u];var d=r+ad(a,u);l+=bl(a,t,n,d,i)}else if(d=ik(e),typeof d=="function")for(e=d.call(e),u=0;!(a=e.next()).done;)a=a.value,d=r+ad(a,u++),l+=bl(a,t,n,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Js(e,t,n){if(e==null)return e;var r=[],i=0;return bl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function lk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ft={current:null},xl={transition:null},uk={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:xl,ReactCurrentOwner:Fp};Pe.Children={map:Js,forEach:function(e,t,n){Js(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Js(e,function(){t++}),t},toArray:function(e){return Js(e,function(t){return t})||[]},only:function(e){if(!jp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=Vi;Pe.Fragment=Gw;Pe.Profiler=Jw;Pe.PureComponent=Mp;Pe.StrictMode=Xw;Pe.Suspense=nk;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uk;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=By({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Fp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)Dy.call(t,d)&&!Fy.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:bs,type:e.type,key:i,ref:a,props:r,_owner:l}};Pe.createContext=function(e){return e={$$typeof:ek,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yw,_context:e},e.Consumer=e};Pe.createElement=jy;Pe.createFactory=function(e){var t=jy.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:tk,render:e}};Pe.isValidElement=jp;Pe.lazy=function(e){return{$$typeof:ok,_payload:{_status:-1,_result:e},_init:lk}};Pe.memo=function(e,t){return{$$typeof:rk,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=xl.transition;xl.transition={};try{e()}finally{xl.transition=t}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(e,t){return Ft.current.useCallback(e,t)};Pe.useContext=function(e){return Ft.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Ft.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Ft.current.useEffect(e,t)};Pe.useId=function(){return Ft.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Ft.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Ft.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Ft.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Ft.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Ft.current.useReducer(e,t,n)};Pe.useRef=function(e){return Ft.current.useRef(e)};Pe.useState=function(e){return Ft.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Ft.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Ft.current.useTransition()};Pe.version="18.2.0";(function(e){e.exports=Pe})(Kw);const Z=Ay(T),qa=Vw({__proto__:null,default:Z},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ck=T,dk=Symbol.for("react.element"),fk=Symbol.for("react.fragment"),pk=Object.prototype.hasOwnProperty,hk=ck.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mk={key:!0,ref:!0,__self:!0,__source:!0};function Uy(e,t,n){var r,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)pk.call(t,r)&&!mk.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dk,type:e,key:a,ref:l,props:i,_owner:hk.current}}Du.Fragment=fk;Du.jsx=Uy;Du.jsxs=Uy;(function(e){e.exports=Du})(qw);const _k=Va.Fragment,pe=Va.jsx,xt=Va.jsxs;var Bi={},vk={get exports(){return Bi},set exports(e){Bi=e}},en={},af={},gk={get exports(){return af},set exports(e){af=e}},$y={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,oe){var K=M.length;M.push(oe);e:for(;0<K;){var O=K-1>>>1,B=M[O];if(0<i(B,oe))M[O]=oe,M[K]=B,K=O;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var oe=M[0],K=M.pop();if(K!==oe){M[0]=K;e:for(var O=0,B=M.length,A=B>>>1;O<A;){var Q=2*(O+1)-1,te=M[Q],$=Q+1,ne=M[$];if(0>i(te,K))$<B&&0>i(ne,te)?(M[O]=ne,M[$]=K,O=$):(M[O]=te,M[Q]=K,O=Q);else if($<B&&0>i(ne,K))M[O]=ne,M[$]=K,O=$;else break e}}return oe}function i(M,oe){var K=M.sortIndex-oe.sortIndex;return K!==0?K:M.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var d=[],f=[],m=1,_=null,h=3,g=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(M){for(var oe=n(f);oe!==null;){if(oe.callback===null)r(f);else if(oe.startTime<=M)r(f),oe.sortIndex=oe.expirationTime,t(d,oe);else break;oe=n(f)}}function P(M){if(w=!1,S(M),!x)if(n(d)!==null)x=!0,ee(z);else{var oe=n(f);oe!==null&&ue(P,oe.startTime-M)}}function z(M,oe){x=!1,w&&(w=!1,y(j),j=-1),g=!0;var K=h;try{for(S(oe),_=n(d);_!==null&&(!(_.expirationTime>oe)||M&&!R());){var O=_.callback;if(typeof O=="function"){_.callback=null,h=_.priorityLevel;var B=O(_.expirationTime<=oe);oe=e.unstable_now(),typeof B=="function"?_.callback=B:_===n(d)&&r(d),S(oe)}else r(d);_=n(d)}if(_!==null)var A=!0;else{var Q=n(f);Q!==null&&ue(P,Q.startTime-oe),A=!1}return A}finally{_=null,h=K,g=!1}}var I=!1,D=null,j=-1,V=5,U=-1;function R(){return!(e.unstable_now()-U<V)}function Y(){if(D!==null){var M=e.unstable_now();U=M;var oe=!0;try{oe=D(!0,M)}finally{oe?_e():(I=!1,D=null)}}else I=!1}var _e;if(typeof b=="function")_e=function(){b(Y)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,de=re.port2;re.port1.onmessage=Y,_e=function(){de.postMessage(null)}}else _e=function(){C(Y,0)};function ee(M){D=M,I||(I=!0,_e())}function ue(M,oe){j=C(function(){M(e.unstable_now())},oe)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||g||(x=!0,ee(z))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var oe=3;break;default:oe=h}var K=h;h=oe;try{return M()}finally{h=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,oe){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=h;h=M;try{return oe()}finally{h=K}},e.unstable_scheduleCallback=function(M,oe,K){var O=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?O+K:O):K=O,M){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=K+B,M={id:m++,callback:oe,priorityLevel:M,startTime:K,expirationTime:B,sortIndex:-1},K>O?(M.sortIndex=K,t(f,M),n(d)===null&&M===n(f)&&(w?(y(j),j=-1):w=!0,ue(P,K-O))):(M.sortIndex=B,t(d,M),x||g||(x=!0,ee(z))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var oe=h;return function(){var K=h;h=oe;try{return M.apply(this,arguments)}finally{h=K}}}})($y);(function(e){e.exports=$y})(gk);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy=T,Jt=af;function J(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wy=new Set,Ka={};function qo(e,t){Ii(e,t),Ii(e+"Capture",t)}function Ii(e,t){for(Ka[e]=t,e=0;e<t.length;e++)Wy.add(t[e])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sf=Object.prototype.hasOwnProperty,yk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,d_={},f_={};function bk(e){return sf.call(f_,e)?!0:sf.call(d_,e)?!1:yk.test(e)?f_[e]=!0:(d_[e]=!0,!1)}function xk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wk(e,t,n,r){if(t===null||typeof t>"u"||xk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function jt(e,t,n,r,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pt[e]=new jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Pt[t]=new jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pt[e]=new jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pt[e]=new jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pt[e]=new jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pt[e]=new jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pt[e]=new jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pt[e]=new jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pt[e]=new jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function $p(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Up,$p);Pt[t]=new jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Up,$p);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Up,$p);Pt[t]=new jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!1,!1)});Pt.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pt[e]=new jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zp(e,t,n,r){var i=Pt.hasOwnProperty(t)?Pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wk(t,n,i,r)&&(n=null),r||i===null?bk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xr=Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),ci=Symbol.for("react.portal"),di=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),Ar=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),p_=Symbol.iterator;function pa(e){return e===null||typeof e!="object"?null:(e=p_&&e[p_]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,sd;function Oa(e){if(sd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sd=t&&t[1]||""}return`
`+sd+e}var ld=!1;function ud(e,t){if(!e||ld)return"";ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),l=i.length-1,u=a.length-1;1<=l&&0<=u&&i[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==a[u]){var d=`
`+i[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=u);break}}}finally{ld=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Oa(e):""}function kk(e){switch(e.tag){case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return e=ud(e.type,!1),e;case 11:return e=ud(e.type.render,!1),e;case 1:return e=ud(e.type,!0),e;default:return""}}function df(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case di:return"Fragment";case ci:return"Portal";case lf:return"Profiler";case Wp:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vy:return(e.displayName||"Context")+".Consumer";case Hy:return(e._context.displayName||"Context")+".Provider";case Hp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vp:return t=e.displayName||null,t!==null?t:df(e.type)||"Memo";case Ar:t=e._payload,e=e._init;try{return df(e(t))}catch{}}return null}function Sk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(t);case 8:return t===Wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function no(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ky(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pk(e){var t=Ky(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function el(e){e._valueTracker||(e._valueTracker=Pk(e))}function Qy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ky(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ul(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ff(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function h_(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=no(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gy(e,t){t=t.checked,t!=null&&Zp(e,"checked",t,!1)}function pf(e,t){Gy(e,t);var n=no(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hf(e,t.type,n):t.hasOwnProperty("defaultValue")&&hf(e,t.type,no(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function m_(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hf(e,t,n){(t!=="number"||Ul(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ta=Array.isArray;function ki(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+no(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(J(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function __(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(J(92));if(Ta(n)){if(1<n.length)throw Error(J(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:no(n)}}function Xy(e,t){var n=no(t.value),r=no(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function v_(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _f(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tl,Yy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ck=["Webkit","ms","Moz","O"];Object.keys(Na).forEach(function(e){Ck.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Na[t]=Na[e]})});function eb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Na.hasOwnProperty(e)&&Na[e]?(""+t).trim():t+"px"}function tb(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ek=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(e,t){if(t){if(Ek[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(J(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(J(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(J(61))}if(t.style!=null&&typeof t.style!="object")throw Error(J(62))}}function gf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function qp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bf=null,Si=null,Pi=null;function g_(e){if(e=ks(e)){if(typeof bf!="function")throw Error(J(280));var t=e.stateNode;t&&(t=Zu(t),bf(e.stateNode,e.type,t))}}function nb(e){Si?Pi?Pi.push(e):Pi=[e]:Si=e}function rb(){if(Si){var e=Si,t=Pi;if(Pi=Si=null,g_(e),t)for(e=0;e<t.length;e++)g_(t[e])}}function ob(e,t){return e(t)}function ib(){}var cd=!1;function ab(e,t,n){if(cd)return e(t,n);cd=!0;try{return ob(e,t,n)}finally{cd=!1,(Si!==null||Pi!==null)&&(ib(),rb())}}function Ga(e,t){var n=e.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var xf=!1;if(mr)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){xf=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{xf=!1}function Ok(e,t,n,r,i,a,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Ba=!1,$l=null,Zl=!1,wf=null,Tk={onError:function(e){Ba=!0,$l=e}};function Lk(e,t,n,r,i,a,l,u,d){Ba=!1,$l=null,Ok.apply(Tk,arguments)}function zk(e,t,n,r,i,a,l,u,d){if(Lk.apply(this,arguments),Ba){if(Ba){var f=$l;Ba=!1,$l=null}else throw Error(J(198));Zl||(Zl=!0,wf=f)}}function Ko(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y_(e){if(Ko(e)!==e)throw Error(J(188))}function Rk(e){var t=e.alternate;if(!t){if(t=Ko(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return y_(i),e;if(a===r)return y_(i),t;a=a.sibling}throw Error(J(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=a;break}if(u===r){l=!0,r=i,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=i;break}if(u===r){l=!0,r=a,n=i;break}u=u.sibling}if(!l)throw Error(J(189))}}if(n.alternate!==r)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function lb(e){return e=Rk(e),e!==null?ub(e):null}function ub(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ub(e);if(t!==null)return t;e=e.sibling}return null}var cb=Jt.unstable_scheduleCallback,b_=Jt.unstable_cancelCallback,Ak=Jt.unstable_shouldYield,Nk=Jt.unstable_requestPaint,ot=Jt.unstable_now,Bk=Jt.unstable_getCurrentPriorityLevel,Kp=Jt.unstable_ImmediatePriority,db=Jt.unstable_UserBlockingPriority,Wl=Jt.unstable_NormalPriority,Ik=Jt.unstable_LowPriority,fb=Jt.unstable_IdlePriority,Fu=null,qn=null;function Mk(e){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Fu,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:jk,Dk=Math.log,Fk=Math.LN2;function jk(e){return e>>>=0,e===0?32:31-(Dk(e)/Fk|0)|0}var nl=64,rl=4194304;function La(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=La(u):(a&=l,a!==0&&(r=La(a)))}else l=n&~i,l!==0?r=La(l):a!==0&&(r=La(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-En(t),i=1<<n,r|=e[n],t&=~i;return r}function Uk(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $k(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-En(a),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Uk(u,t)):d<=t&&(e.expiredLanes|=u),a&=~u}}function kf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pb(){var e=nl;return nl<<=1,!(nl&4194240)&&(nl=64),e}function dd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=n}function Zk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-En(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Qp(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-En(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Me=0;function hb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mb,Gp,_b,vb,gb,Sf=!1,ol=[],$r=null,Zr=null,Wr=null,Xa=new Map,Ja=new Map,Ir=[],Wk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function x_(e,t){switch(e){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Xa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(t.pointerId)}}function ma(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ks(t),t!==null&&Gp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hk(e,t,n,r,i){switch(t){case"focusin":return $r=ma($r,e,t,n,r,i),!0;case"dragenter":return Zr=ma(Zr,e,t,n,r,i),!0;case"mouseover":return Wr=ma(Wr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Xa.set(a,ma(Xa.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ja.set(a,ma(Ja.get(a)||null,e,t,n,r,i)),!0}return!1}function yb(e){var t=Oo(e.target);if(t!==null){var n=Ko(t);if(n!==null){if(t=n.tag,t===13){if(t=sb(n),t!==null){e.blockedOn=t,gb(e.priority,function(){_b(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yf=r,n.target.dispatchEvent(r),yf=null}else return t=ks(n),t!==null&&Gp(t),e.blockedOn=n,!1;t.shift()}return!0}function w_(e,t,n){wl(e)&&n.delete(t)}function Vk(){Sf=!1,$r!==null&&wl($r)&&($r=null),Zr!==null&&wl(Zr)&&(Zr=null),Wr!==null&&wl(Wr)&&(Wr=null),Xa.forEach(w_),Ja.forEach(w_)}function _a(e,t){e.blockedOn===t&&(e.blockedOn=null,Sf||(Sf=!0,Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority,Vk)))}function Ya(e){function t(i){return _a(i,e)}if(0<ol.length){_a(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for($r!==null&&_a($r,e),Zr!==null&&_a(Zr,e),Wr!==null&&_a(Wr,e),Xa.forEach(t),Ja.forEach(t),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)yb(n),n.blockedOn===null&&Ir.shift()}var Ci=xr.ReactCurrentBatchConfig,Vl=!0;function qk(e,t,n,r){var i=Me,a=Ci.transition;Ci.transition=null;try{Me=1,Xp(e,t,n,r)}finally{Me=i,Ci.transition=a}}function Kk(e,t,n,r){var i=Me,a=Ci.transition;Ci.transition=null;try{Me=4,Xp(e,t,n,r)}finally{Me=i,Ci.transition=a}}function Xp(e,t,n,r){if(Vl){var i=Pf(e,t,n,r);if(i===null)xd(e,t,r,ql,n),x_(e,r);else if(Hk(i,e,t,n,r))r.stopPropagation();else if(x_(e,r),t&4&&-1<Wk.indexOf(e)){for(;i!==null;){var a=ks(i);if(a!==null&&mb(a),a=Pf(e,t,n,r),a===null&&xd(e,t,r,ql,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else xd(e,t,r,null,n)}}var ql=null;function Pf(e,t,n,r){if(ql=null,e=qp(r),e=Oo(e),e!==null)if(t=Ko(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ql=e,null}function bb(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bk()){case Kp:return 1;case db:return 4;case Wl:case Ik:return 16;case fb:return 536870912;default:return 16}default:return 16}}var Fr=null,Jp=null,kl=null;function xb(){if(kl)return kl;var e,t=Jp,n=t.length,r,i="value"in Fr?Fr.value:Fr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[a-r];r++);return kl=i.slice(e,1<r?1-r:void 0)}function Sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function k_(){return!1}function tn(e){function t(n,r,i,a,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?il:k_,this.isPropagationStopped=k_,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),t}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=tn(qi),ws=Ye({},qi,{view:0,detail:0}),Qk=tn(ws),fd,pd,va,ju=Ye({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==va&&(va&&e.type==="mousemove"?(fd=e.screenX-va.screenX,pd=e.screenY-va.screenY):pd=fd=0,va=e),fd)},movementY:function(e){return"movementY"in e?e.movementY:pd}}),S_=tn(ju),Gk=Ye({},ju,{dataTransfer:0}),Xk=tn(Gk),Jk=Ye({},ws,{relatedTarget:0}),hd=tn(Jk),Yk=Ye({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),eS=tn(Yk),tS=Ye({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nS=tn(tS),rS=Ye({},qi,{data:0}),P_=tn(rS),oS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aS[e])?!!t[e]:!1}function eh(){return sS}var lS=Ye({},ws,{key:function(e){if(e.key){var t=oS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eh,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uS=tn(lS),cS=Ye({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C_=tn(cS),dS=Ye({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eh}),fS=tn(dS),pS=Ye({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=tn(pS),mS=Ye({},ju,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_S=tn(mS),vS=[9,13,27,32],th=mr&&"CompositionEvent"in window,Ia=null;mr&&"documentMode"in document&&(Ia=document.documentMode);var gS=mr&&"TextEvent"in window&&!Ia,wb=mr&&(!th||Ia&&8<Ia&&11>=Ia),E_=String.fromCharCode(32),O_=!1;function kb(e,t){switch(e){case"keyup":return vS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function yS(e,t){switch(e){case"compositionend":return Sb(t);case"keypress":return t.which!==32?null:(O_=!0,E_);case"textInput":return e=t.data,e===E_&&O_?null:e;default:return null}}function bS(e,t){if(fi)return e==="compositionend"||!th&&kb(e,t)?(e=xb(),kl=Jp=Fr=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wb&&t.locale!=="ko"?null:t.data;default:return null}}var xS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xS[e.type]:t==="textarea"}function Pb(e,t,n,r){nb(r),t=Kl(t,"onChange"),0<t.length&&(n=new Yp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ma=null,es=null;function wS(e){Ib(e,0)}function Uu(e){var t=mi(e);if(Qy(t))return e}function kS(e,t){if(e==="change")return t}var Cb=!1;if(mr){var md;if(mr){var _d="oninput"in document;if(!_d){var L_=document.createElement("div");L_.setAttribute("oninput","return;"),_d=typeof L_.oninput=="function"}md=_d}else md=!1;Cb=md&&(!document.documentMode||9<document.documentMode)}function z_(){Ma&&(Ma.detachEvent("onpropertychange",Eb),es=Ma=null)}function Eb(e){if(e.propertyName==="value"&&Uu(es)){var t=[];Pb(t,es,e,qp(e)),ab(wS,t)}}function SS(e,t,n){e==="focusin"?(z_(),Ma=t,es=n,Ma.attachEvent("onpropertychange",Eb)):e==="focusout"&&z_()}function PS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uu(es)}function CS(e,t){if(e==="click")return Uu(t)}function ES(e,t){if(e==="input"||e==="change")return Uu(t)}function OS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:OS;function ts(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sf.call(t,i)||!zn(e[i],t[i]))return!1}return!0}function R_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A_(e,t){var n=R_(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=R_(n)}}function Ob(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ob(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tb(){for(var e=window,t=Ul();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ul(e.document)}return t}function nh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function TS(e){var t=Tb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ob(n.ownerDocument.documentElement,n)){if(r!==null&&nh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=A_(n,a);var l=A_(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var LS=mr&&"documentMode"in document&&11>=document.documentMode,pi=null,Cf=null,Da=null,Ef=!1;function N_(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ef||pi==null||pi!==Ul(r)||(r=pi,"selectionStart"in r&&nh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Da&&ts(Da,r)||(Da=r,r=Kl(Cf,"onSelect"),0<r.length&&(t=new Yp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pi)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var hi={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},vd={},Lb={};mr&&(Lb=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function $u(e){if(vd[e])return vd[e];if(!hi[e])return e;var t=hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lb)return vd[e]=t[n];return e}var zb=$u("animationend"),Rb=$u("animationiteration"),Ab=$u("animationstart"),Nb=$u("transitionend"),Bb=new Map,B_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function uo(e,t){Bb.set(e,t),qo(t,[e])}for(var gd=0;gd<B_.length;gd++){var yd=B_[gd],zS=yd.toLowerCase(),RS=yd[0].toUpperCase()+yd.slice(1);uo(zS,"on"+RS)}uo(zb,"onAnimationEnd");uo(Rb,"onAnimationIteration");uo(Ab,"onAnimationStart");uo("dblclick","onDoubleClick");uo("focusin","onFocus");uo("focusout","onBlur");uo(Nb,"onTransitionEnd");Ii("onMouseEnter",["mouseout","mouseover"]);Ii("onMouseLeave",["mouseout","mouseover"]);Ii("onPointerEnter",["pointerout","pointerover"]);Ii("onPointerLeave",["pointerout","pointerover"]);qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("cancel close invalid load scroll toggle".split(" ").concat(za));function I_(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zk(r,t,void 0,e),e.currentTarget=null}function Ib(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==a&&i.isPropagationStopped())break e;I_(i,u,f),a=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==a&&i.isPropagationStopped())break e;I_(i,u,f),a=d}}}if(Zl)throw e=wf,Zl=!1,wf=null,e}function He(e,t){var n=t[Rf];n===void 0&&(n=t[Rf]=new Set);var r=e+"__bubble";n.has(r)||(Mb(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Mb(n,e,r,t)}var sl="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[sl]){e[sl]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(AS.has(n)||bd(n,!1,e),bd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sl]||(t[sl]=!0,bd("selectionchange",!1,t))}}function Mb(e,t,n,r){switch(bb(t)){case 1:var i=qk;break;case 4:i=Kk;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!xf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Oo(u),l===null)return;if(d=l.tag,d===5||d===6){r=a=l;continue e}u=u.parentNode}}r=r.return}ab(function(){var f=a,m=qp(n),_=[];e:{var h=Bb.get(e);if(h!==void 0){var g=Yp,x=e;switch(e){case"keypress":if(Sl(n)===0)break e;case"keydown":case"keyup":g=uS;break;case"focusin":x="focus",g=hd;break;case"focusout":x="blur",g=hd;break;case"beforeblur":case"afterblur":g=hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=S_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Xk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fS;break;case zb:case Rb:case Ab:g=eS;break;case Nb:g=hS;break;case"scroll":g=Qk;break;case"wheel":g=_S;break;case"copy":case"cut":case"paste":g=nS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=C_}var w=(t&4)!==0,C=!w&&e==="scroll",y=w?h!==null?h+"Capture":null:h;w=[];for(var b=f,S;b!==null;){S=b;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,y!==null&&(P=Ga(b,y),P!=null&&w.push(rs(b,P,S)))),C)break;b=b.return}0<w.length&&(h=new g(h,x,null,n,m),_.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==yf&&(x=n.relatedTarget||n.fromElement)&&(Oo(x)||x[_r]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=f,x=x?Oo(x):null,x!==null&&(C=Ko(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=f),g!==x)){if(w=S_,P="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(w=C_,P="onPointerLeave",y="onPointerEnter",b="pointer"),C=g==null?h:mi(g),S=x==null?h:mi(x),h=new w(P,b+"leave",g,n,m),h.target=C,h.relatedTarget=S,P=null,Oo(m)===f&&(w=new w(y,b+"enter",x,n,m),w.target=S,w.relatedTarget=C,P=w),C=P,g&&x)t:{for(w=g,y=x,b=0,S=w;S;S=ai(S))b++;for(S=0,P=y;P;P=ai(P))S++;for(;0<b-S;)w=ai(w),b--;for(;0<S-b;)y=ai(y),S--;for(;b--;){if(w===y||y!==null&&w===y.alternate)break t;w=ai(w),y=ai(y)}w=null}else w=null;g!==null&&M_(_,h,g,w,!1),x!==null&&C!==null&&M_(_,C,x,w,!0)}}e:{if(h=f?mi(f):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var z=kS;else if(T_(h))if(Cb)z=ES;else{z=PS;var I=SS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(z=CS);if(z&&(z=z(e,f))){Pb(_,z,n,m);break e}I&&I(e,h,f),e==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&hf(h,"number",h.value)}switch(I=f?mi(f):window,e){case"focusin":(T_(I)||I.contentEditable==="true")&&(pi=I,Cf=f,Da=null);break;case"focusout":Da=Cf=pi=null;break;case"mousedown":Ef=!0;break;case"contextmenu":case"mouseup":case"dragend":Ef=!1,N_(_,n,m);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":N_(_,n,m)}var D;if(th)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else fi?kb(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(wb&&n.locale!=="ko"&&(fi||j!=="onCompositionStart"?j==="onCompositionEnd"&&fi&&(D=xb()):(Fr=m,Jp="value"in Fr?Fr.value:Fr.textContent,fi=!0)),I=Kl(f,j),0<I.length&&(j=new P_(j,e,null,n,m),_.push({event:j,listeners:I}),D?j.data=D:(D=Sb(n),D!==null&&(j.data=D)))),(D=gS?yS(e,n):bS(e,n))&&(f=Kl(f,"onBeforeInput"),0<f.length&&(m=new P_("onBeforeInput","beforeinput",null,n,m),_.push({event:m,listeners:f}),m.data=D))}Ib(_,t)})}function rs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ga(e,n),a!=null&&r.unshift(rs(e,a,i)),a=Ga(e,t),a!=null&&r.push(rs(e,a,i))),e=e.return}return r}function ai(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function M_(e,t,n,r,i){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=Ga(n,a),d!=null&&l.unshift(rs(n,d,u))):i||(d=Ga(n,a),d!=null&&l.push(rs(n,d,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var NS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function D_(e){return(typeof e=="string"?e:""+e).replace(NS,`
`).replace(BS,"")}function ll(e,t,n){if(t=D_(t),D_(e)!==t&&n)throw Error(J(425))}function Ql(){}var Of=null,Tf=null;function Lf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zf=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,F_=typeof Promise=="function"?Promise:void 0,MS=typeof queueMicrotask=="function"?queueMicrotask:typeof F_<"u"?function(e){return F_.resolve(null).then(e).catch(DS)}:zf;function DS(e){setTimeout(function(){throw e})}function wd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ya(t)}function Hr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function j_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Ki,os="__reactProps$"+Ki,_r="__reactContainer$"+Ki,Rf="__reactEvents$"+Ki,FS="__reactListeners$"+Ki,jS="__reactHandles$"+Ki;function Oo(e){var t=e[Wn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_r]||n[Wn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=j_(e);e!==null;){if(n=e[Wn])return n;e=j_(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[Wn]||e[_r],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(J(33))}function Zu(e){return e[os]||null}var Af=[],_i=-1;function co(e){return{current:e}}function Ve(e){0>_i||(e.current=Af[_i],Af[_i]=null,_i--)}function Ze(e,t){_i++,Af[_i]=e.current,e.current=t}var ro={},Rt=co(ro),Ht=co(!1),Do=ro;function Mi(e,t){var n=e.type.contextTypes;if(!n)return ro;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Vt(e){return e=e.childContextTypes,e!=null}function Gl(){Ve(Ht),Ve(Rt)}function U_(e,t,n){if(Rt.current!==ro)throw Error(J(168));Ze(Rt,t),Ze(Ht,n)}function Db(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(J(108,Sk(e)||"Unknown",i));return Ye({},n,r)}function Xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ro,Do=Rt.current,Ze(Rt,e),Ze(Ht,Ht.current),!0}function $_(e,t,n){var r=e.stateNode;if(!r)throw Error(J(169));n?(e=Db(e,t,Do),r.__reactInternalMemoizedMergedChildContext=e,Ve(Ht),Ve(Rt),Ze(Rt,e)):Ve(Ht),Ze(Ht,n)}var cr=null,Wu=!1,kd=!1;function Fb(e){cr===null?cr=[e]:cr.push(e)}function US(e){Wu=!0,Fb(e)}function fo(){if(!kd&&cr!==null){kd=!0;var e=0,t=Me;try{var n=cr;for(Me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cr=null,Wu=!1}catch(i){throw cr!==null&&(cr=cr.slice(e+1)),cb(Kp,fo),i}finally{Me=t,kd=!1}}return null}var vi=[],gi=0,Jl=null,Yl=0,ln=[],un=0,Fo=null,dr=1,fr="";function So(e,t){vi[gi++]=Yl,vi[gi++]=Jl,Jl=e,Yl=t}function jb(e,t,n){ln[un++]=dr,ln[un++]=fr,ln[un++]=Fo,Fo=e;var r=dr;e=fr;var i=32-En(r)-1;r&=~(1<<i),n+=1;var a=32-En(t)+i;if(30<a){var l=i-i%5;a=(r&(1<<l)-1).toString(32),r>>=l,i-=l,dr=1<<32-En(t)+i|n<<i|r,fr=a+e}else dr=1<<a|n<<i|r,fr=e}function rh(e){e.return!==null&&(So(e,1),jb(e,1,0))}function oh(e){for(;e===Jl;)Jl=vi[--gi],vi[gi]=null,Yl=vi[--gi],vi[gi]=null;for(;e===Fo;)Fo=ln[--un],ln[un]=null,fr=ln[--un],ln[un]=null,dr=ln[--un],ln[un]=null}var Xt=null,Gt=null,Qe=!1,Pn=null;function Ub(e,t){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Z_(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=Hr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xt=e,Gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fo!==null?{id:dr,overflow:fr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xt=e,Gt=null,!0):!1;default:return!1}}function Nf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bf(e){if(Qe){var t=Gt;if(t){var n=t;if(!Z_(e,t)){if(Nf(e))throw Error(J(418));t=Hr(n.nextSibling);var r=Xt;t&&Z_(e,t)?Ub(r,n):(e.flags=e.flags&-4097|2,Qe=!1,Xt=e)}}else{if(Nf(e))throw Error(J(418));e.flags=e.flags&-4097|2,Qe=!1,Xt=e}}}function W_(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xt=e}function ul(e){if(e!==Xt)return!1;if(!Qe)return W_(e),Qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lf(e.type,e.memoizedProps)),t&&(t=Gt)){if(Nf(e))throw $b(),Error(J(418));for(;t;)Ub(e,t),t=Hr(t.nextSibling)}if(W_(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Gt=Hr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Gt=null}}else Gt=Xt?Hr(e.stateNode.nextSibling):null;return!0}function $b(){for(var e=Gt;e;)e=Hr(e.nextSibling)}function Di(){Gt=Xt=null,Qe=!1}function ih(e){Pn===null?Pn=[e]:Pn.push(e)}var $S=xr.ReactCurrentBatchConfig;function kn(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var eu=co(null),tu=null,yi=null,ah=null;function sh(){ah=yi=tu=null}function lh(e){var t=eu.current;Ve(eu),e._currentValue=t}function If(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ei(e,t){tu=e,ah=yi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Wt=!0),e.firstContext=null)}function pn(e){var t=e._currentValue;if(ah!==e)if(e={context:e,memoizedValue:t,next:null},yi===null){if(tu===null)throw Error(J(308));yi=e,tu.dependencies={lanes:0,firstContext:e}}else yi=yi.next=e;return t}var To=null;function uh(e){To===null?To=[e]:To.push(e)}function Zb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,uh(t)):(n.next=i.next,i.next=n),t.interleaved=n,vr(e,r)}function vr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nr=!1;function ch(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ze&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vr(e,n)}return i=r.interleaved,i===null?(t.next=t,uh(r)):(t.next=i.next,i.next=t),r.interleaved=t,vr(e,n)}function Pl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qp(e,n)}}function H_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nu(e,t,n,r){var i=e.updateQueue;Nr=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?a=f:l.next=f,l=d;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==l&&(u===null?m.firstBaseUpdate=f:u.next=f,m.lastBaseUpdate=d))}if(a!==null){var _=i.baseState;l=0,m=f=d=null,u=a;do{var h=u.lane,g=u.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=e,w=u;switch(h=t,g=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){_=x.call(g,_,h);break e}_=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(g,_,h):x,h==null)break e;_=Ye({},_,h);break e;case 2:Nr=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[u]:h.push(u))}else g={eventTime:g,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(f=m=g,d=_):m=m.next=g,l|=h;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;h=u,u=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(m===null&&(d=_),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Uo|=l,e.lanes=l,e.memoizedState=_}}function V_(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(J(191,i));i.call(r)}}}var Hb=new Zy.Component().refs;function Mf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hu={isMounted:function(e){return(e=e._reactInternals)?Ko(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=pr(r,i);a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Pl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Dt(),i=Kr(e),a=pr(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Vr(e,a,i),t!==null&&(On(t,e,i,r),Pl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Dt(),r=Kr(e),i=pr(n,r);i.tag=2,t!=null&&(i.callback=t),t=Vr(e,i,r),t!==null&&(On(t,e,r,n),Pl(t,e,r))}};function q_(e,t,n,r,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!ts(n,r)||!ts(i,a):!0}function Vb(e,t,n){var r=!1,i=ro,a=t.contextType;return typeof a=="object"&&a!==null?a=pn(a):(i=Vt(t)?Do:Rt.current,r=t.contextTypes,a=(r=r!=null)?Mi(e,i):ro),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function K_(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function Df(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Hb,ch(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=pn(a):(a=Vt(t)?Do:Rt.current,i.context=Mi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hu.enqueueReplaceState(i,i.state,null),nu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ga(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var r=n.stateNode}if(!r)throw Error(J(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=i.refs;u===Hb&&(u=i.refs={}),l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,e))}return e}function cl(e,t){throw e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Q_(e){var t=e._init;return t(e._payload)}function qb(e){function t(y,b){if(e){var S=y.deletions;S===null?(y.deletions=[b],y.flags|=16):S.push(b)}}function n(y,b){if(!e)return null;for(;b!==null;)t(y,b),b=b.sibling;return null}function r(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function i(y,b){return y=Qr(y,b),y.index=0,y.sibling=null,y}function a(y,b,S){return y.index=S,e?(S=y.alternate,S!==null?(S=S.index,S<b?(y.flags|=2,b):S):(y.flags|=2,b)):(y.flags|=1048576,b)}function l(y){return e&&y.alternate===null&&(y.flags|=2),y}function u(y,b,S,P){return b===null||b.tag!==6?(b=Ld(S,y.mode,P),b.return=y,b):(b=i(b,S),b.return=y,b)}function d(y,b,S,P){var z=S.type;return z===di?m(y,b,S.props.children,P,S.key):b!==null&&(b.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&Q_(z)===b.type)?(P=i(b,S.props),P.ref=ga(y,b,S),P.return=y,P):(P=zl(S.type,S.key,S.props,null,y.mode,P),P.ref=ga(y,b,S),P.return=y,P)}function f(y,b,S,P){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=zd(S,y.mode,P),b.return=y,b):(b=i(b,S.children||[]),b.return=y,b)}function m(y,b,S,P,z){return b===null||b.tag!==7?(b=Bo(S,y.mode,P,z),b.return=y,b):(b=i(b,S),b.return=y,b)}function _(y,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Ld(""+b,y.mode,S),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ys:return S=zl(b.type,b.key,b.props,null,y.mode,S),S.ref=ga(y,null,b),S.return=y,S;case ci:return b=zd(b,y.mode,S),b.return=y,b;case Ar:var P=b._init;return _(y,P(b._payload),S)}if(Ta(b)||pa(b))return b=Bo(b,y.mode,S,null),b.return=y,b;cl(y,b)}return null}function h(y,b,S,P){var z=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:u(y,b,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ys:return S.key===z?d(y,b,S,P):null;case ci:return S.key===z?f(y,b,S,P):null;case Ar:return z=S._init,h(y,b,z(S._payload),P)}if(Ta(S)||pa(S))return z!==null?null:m(y,b,S,P,null);cl(y,S)}return null}function g(y,b,S,P,z){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(S)||null,u(b,y,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Ys:return y=y.get(P.key===null?S:P.key)||null,d(b,y,P,z);case ci:return y=y.get(P.key===null?S:P.key)||null,f(b,y,P,z);case Ar:var I=P._init;return g(y,b,S,I(P._payload),z)}if(Ta(P)||pa(P))return y=y.get(S)||null,m(b,y,P,z,null);cl(b,P)}return null}function x(y,b,S,P){for(var z=null,I=null,D=b,j=b=0,V=null;D!==null&&j<S.length;j++){D.index>j?(V=D,D=null):V=D.sibling;var U=h(y,D,S[j],P);if(U===null){D===null&&(D=V);break}e&&D&&U.alternate===null&&t(y,D),b=a(U,b,j),I===null?z=U:I.sibling=U,I=U,D=V}if(j===S.length)return n(y,D),Qe&&So(y,j),z;if(D===null){for(;j<S.length;j++)D=_(y,S[j],P),D!==null&&(b=a(D,b,j),I===null?z=D:I.sibling=D,I=D);return Qe&&So(y,j),z}for(D=r(y,D);j<S.length;j++)V=g(D,y,j,S[j],P),V!==null&&(e&&V.alternate!==null&&D.delete(V.key===null?j:V.key),b=a(V,b,j),I===null?z=V:I.sibling=V,I=V);return e&&D.forEach(function(R){return t(y,R)}),Qe&&So(y,j),z}function w(y,b,S,P){var z=pa(S);if(typeof z!="function")throw Error(J(150));if(S=z.call(S),S==null)throw Error(J(151));for(var I=z=null,D=b,j=b=0,V=null,U=S.next();D!==null&&!U.done;j++,U=S.next()){D.index>j?(V=D,D=null):V=D.sibling;var R=h(y,D,U.value,P);if(R===null){D===null&&(D=V);break}e&&D&&R.alternate===null&&t(y,D),b=a(R,b,j),I===null?z=R:I.sibling=R,I=R,D=V}if(U.done)return n(y,D),Qe&&So(y,j),z;if(D===null){for(;!U.done;j++,U=S.next())U=_(y,U.value,P),U!==null&&(b=a(U,b,j),I===null?z=U:I.sibling=U,I=U);return Qe&&So(y,j),z}for(D=r(y,D);!U.done;j++,U=S.next())U=g(D,y,j,U.value,P),U!==null&&(e&&U.alternate!==null&&D.delete(U.key===null?j:U.key),b=a(U,b,j),I===null?z=U:I.sibling=U,I=U);return e&&D.forEach(function(Y){return t(y,Y)}),Qe&&So(y,j),z}function C(y,b,S,P){if(typeof S=="object"&&S!==null&&S.type===di&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ys:e:{for(var z=S.key,I=b;I!==null;){if(I.key===z){if(z=S.type,z===di){if(I.tag===7){n(y,I.sibling),b=i(I,S.props.children),b.return=y,y=b;break e}}else if(I.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ar&&Q_(z)===I.type){n(y,I.sibling),b=i(I,S.props),b.ref=ga(y,I,S),b.return=y,y=b;break e}n(y,I);break}else t(y,I);I=I.sibling}S.type===di?(b=Bo(S.props.children,y.mode,P,S.key),b.return=y,y=b):(P=zl(S.type,S.key,S.props,null,y.mode,P),P.ref=ga(y,b,S),P.return=y,y=P)}return l(y);case ci:e:{for(I=S.key;b!==null;){if(b.key===I)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){n(y,b.sibling),b=i(b,S.children||[]),b.return=y,y=b;break e}else{n(y,b);break}else t(y,b);b=b.sibling}b=zd(S,y.mode,P),b.return=y,y=b}return l(y);case Ar:return I=S._init,C(y,b,I(S._payload),P)}if(Ta(S))return x(y,b,S,P);if(pa(S))return w(y,b,S,P);cl(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,b!==null&&b.tag===6?(n(y,b.sibling),b=i(b,S),b.return=y,y=b):(n(y,b),b=Ld(S,y.mode,P),b.return=y,y=b),l(y)):n(y,b)}return C}var Fi=qb(!0),Kb=qb(!1),Ss={},Kn=co(Ss),is=co(Ss),as=co(Ss);function Lo(e){if(e===Ss)throw Error(J(174));return e}function dh(e,t){switch(Ze(as,t),Ze(is,e),Ze(Kn,Ss),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_f(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_f(t,e)}Ve(Kn),Ze(Kn,t)}function ji(){Ve(Kn),Ve(is),Ve(as)}function Qb(e){Lo(as.current);var t=Lo(Kn.current),n=_f(t,e.type);t!==n&&(Ze(is,e),Ze(Kn,n))}function fh(e){is.current===e&&(Ve(Kn),Ve(is))}var Xe=co(0);function ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sd=[];function ph(){for(var e=0;e<Sd.length;e++)Sd[e]._workInProgressVersionPrimary=null;Sd.length=0}var Cl=xr.ReactCurrentDispatcher,Pd=xr.ReactCurrentBatchConfig,jo=0,Je=null,dt=null,mt=null,ou=!1,Fa=!1,ss=0,ZS=0;function Et(){throw Error(J(321))}function hh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function mh(e,t,n,r,i,a){if(jo=a,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cl.current=e===null||e.memoizedState===null?qS:KS,e=n(r,i),Fa){a=0;do{if(Fa=!1,ss=0,25<=a)throw Error(J(301));a+=1,mt=dt=null,t.updateQueue=null,Cl.current=QS,e=n(r,i)}while(Fa)}if(Cl.current=iu,t=dt!==null&&dt.next!==null,jo=0,mt=dt=Je=null,ou=!1,t)throw Error(J(300));return e}function _h(){var e=ss!==0;return ss=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Je.memoizedState=mt=e:mt=mt.next=e,mt}function hn(){if(dt===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=mt===null?Je.memoizedState:mt.next;if(t!==null)mt=t,dt=e;else{if(e===null)throw Error(J(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},mt===null?Je.memoizedState=mt=e:mt=mt.next=e}return mt}function ls(e,t){return typeof t=="function"?t(e):t}function Cd(e){var t=hn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=dt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var u=l=null,d=null,f=a;do{var m=f.lane;if((jo&m)===m)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var _={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=_,l=r):d=d.next=_,Je.lanes|=m,Uo|=m}f=f.next}while(f!==null&&f!==a);d===null?l=r:d.next=u,zn(r,t.memoizedState)||(Wt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Je.lanes|=a,Uo|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ed(e){var t=hn(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);zn(a,t.memoizedState)||(Wt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Gb(){}function Xb(e,t){var n=Je,r=hn(),i=t(),a=!zn(r.memoizedState,i);if(a&&(r.memoizedState=i,Wt=!0),r=r.queue,vh(e0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||mt!==null&&mt.memoizedState.tag&1){if(n.flags|=2048,us(9,Yb.bind(null,n,r,i,t),void 0,null),_t===null)throw Error(J(349));jo&30||Jb(n,t,i)}return i}function Jb(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yb(e,t,n,r){t.value=n,t.getSnapshot=r,t0(t)&&n0(e)}function e0(e,t,n){return n(function(){t0(t)&&n0(e)})}function t0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function n0(e){var t=vr(e,1);t!==null&&On(t,e,1,-1)}function G_(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t.queue=e,e=e.dispatch=VS.bind(null,Je,e),[t.memoizedState,e]}function us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function r0(){return hn().memoizedState}function El(e,t,n,r){var i=Zn();Je.flags|=e,i.memoizedState=us(1|t,n,void 0,r===void 0?null:r)}function Vu(e,t,n,r){var i=hn();r=r===void 0?null:r;var a=void 0;if(dt!==null){var l=dt.memoizedState;if(a=l.destroy,r!==null&&hh(r,l.deps)){i.memoizedState=us(t,n,a,r);return}}Je.flags|=e,i.memoizedState=us(1|t,n,a,r)}function X_(e,t){return El(8390656,8,e,t)}function vh(e,t){return Vu(2048,8,e,t)}function o0(e,t){return Vu(4,2,e,t)}function i0(e,t){return Vu(4,4,e,t)}function a0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function s0(e,t,n){return n=n!=null?n.concat([e]):null,Vu(4,4,a0.bind(null,t,e),n)}function gh(){}function l0(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function u0(e,t){var n=hn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function c0(e,t,n){return jo&21?(zn(n,t)||(n=pb(),Je.lanes|=n,Uo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=n)}function WS(e,t){var n=Me;Me=n!==0&&4>n?n:4,e(!0);var r=Pd.transition;Pd.transition={};try{e(!1),t()}finally{Me=n,Pd.transition=r}}function d0(){return hn().memoizedState}function HS(e,t,n){var r=Kr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},f0(e))p0(t,n);else if(n=Zb(e,t,n,r),n!==null){var i=Dt();On(n,e,r,i),h0(n,t,r)}}function VS(e,t,n){var r=Kr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(e))p0(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(i.hasEagerState=!0,i.eagerState=u,zn(u,l)){var d=t.interleaved;d===null?(i.next=i,uh(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}n=Zb(e,t,i,r),n!==null&&(i=Dt(),On(n,e,r,i),h0(n,t,r))}}function f0(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function p0(e,t){Fa=ou=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function h0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qp(e,n)}}var iu={readContext:pn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},qS={readContext:pn,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:pn,useEffect:X_,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,El(4194308,4,a0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){return El(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HS.bind(null,Je,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:G_,useDebugValue:gh,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=G_(!1),t=e[0];return e=WS.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Je,i=Zn();if(Qe){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),_t===null)throw Error(J(349));jo&30||Jb(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,X_(e0.bind(null,r,a,e),[e]),r.flags|=2048,us(9,Yb.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Zn(),t=_t.identifierPrefix;if(Qe){var n=fr,r=dr;n=(r&~(1<<32-En(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ss++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ZS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KS={readContext:pn,useCallback:l0,useContext:pn,useEffect:vh,useImperativeHandle:s0,useInsertionEffect:o0,useLayoutEffect:i0,useMemo:u0,useReducer:Cd,useRef:r0,useState:function(){return Cd(ls)},useDebugValue:gh,useDeferredValue:function(e){var t=hn();return c0(t,dt.memoizedState,e)},useTransition:function(){var e=Cd(ls)[0],t=hn().memoizedState;return[e,t]},useMutableSource:Gb,useSyncExternalStore:Xb,useId:d0,unstable_isNewReconciler:!1},QS={readContext:pn,useCallback:l0,useContext:pn,useEffect:vh,useImperativeHandle:s0,useInsertionEffect:o0,useLayoutEffect:i0,useMemo:u0,useReducer:Ed,useRef:r0,useState:function(){return Ed(ls)},useDebugValue:gh,useDeferredValue:function(e){var t=hn();return dt===null?t.memoizedState=e:c0(t,dt.memoizedState,e)},useTransition:function(){var e=Ed(ls)[0],t=hn().memoizedState;return[e,t]},useMutableSource:Gb,useSyncExternalStore:Xb,useId:d0,unstable_isNewReconciler:!1};function Ui(e,t){try{var n="",r=t;do n+=kk(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Od(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ff(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var GS=typeof WeakMap=="function"?WeakMap:Map;function m0(e,t,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){su||(su=!0,Qf=r),Ff(e,t)},n}function _0(e,t,n){n=pr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ff(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ff(e,t),typeof r!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function J_(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new GS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c2.bind(null,e,t,n),t.then(e,e))}function Y_(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ev(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pr(-1,1),t.tag=2,Vr(n,t,1))),n.lanes|=1),e)}var XS=xr.ReactCurrentOwner,Wt=!1;function Mt(e,t,n,r){t.child=e===null?Kb(t,null,n,r):Fi(t,e.child,n,r)}function tv(e,t,n,r,i){n=n.render;var a=t.ref;return Ei(t,i),r=mh(e,t,n,r,a,i),n=_h(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Qe&&n&&rh(t),t.flags|=1,Mt(e,t,r,i),t.child)}function nv(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ch(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,v0(e,t,a,r,i)):(e=zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(l,r)&&e.ref===t.ref)return gr(e,t,i)}return t.flags|=1,e=Qr(a,r),e.ref=t.ref,e.return=t,t.child=e}function v0(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ts(a,r)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Wt=!0);else return t.lanes=e.lanes,gr(e,t,i)}return jf(e,t,n,r,i)}function g0(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ze(xi,Qt),Qt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ze(xi,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ze(xi,Qt),Qt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ze(xi,Qt),Qt|=r;return Mt(e,t,i,n),t.child}function y0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jf(e,t,n,r,i){var a=Vt(n)?Do:Rt.current;return a=Mi(t,a),Ei(t,i),n=mh(e,t,n,r,a,i),r=_h(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,gr(e,t,i)):(Qe&&r&&rh(t),t.flags|=1,Mt(e,t,n,i),t.child)}function rv(e,t,n,r,i){if(Vt(n)){var a=!0;Xl(t)}else a=!1;if(Ei(t,i),t.stateNode===null)Ol(e,t),Vb(t,n,r),Df(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=pn(f):(f=Vt(n)?Do:Rt.current,f=Mi(t,f));var m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";_||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&K_(t,l,r,f),Nr=!1;var h=t.memoizedState;l.state=h,nu(t,r,l,i),d=t.memoizedState,u!==r||h!==d||Ht.current||Nr?(typeof m=="function"&&(Mf(t,n,m,r),d=t.memoizedState),(u=Nr||q_(t,n,u,r,h,d,f))?(_||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Wb(e,t),u=t.memoizedProps,f=t.type===t.elementType?u:kn(t.type,u),l.props=f,_=t.pendingProps,h=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=pn(d):(d=Vt(n)?Do:Rt.current,d=Mi(t,d));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==_||h!==d)&&K_(t,l,r,d),Nr=!1,h=t.memoizedState,l.state=h,nu(t,r,l,i);var x=t.memoizedState;u!==_||h!==x||Ht.current||Nr?(typeof g=="function"&&(Mf(t,n,g,r),x=t.memoizedState),(f=Nr||q_(t,n,f,r,h,x,d)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Uf(e,t,n,r,a,i)}function Uf(e,t,n,r,i,a){y0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&$_(t,n,!1),gr(e,t,a);r=t.stateNode,XS.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Fi(t,e.child,null,a),t.child=Fi(t,null,u,a)):Mt(e,t,u,a),t.memoizedState=r.state,i&&$_(t,n,!0),t.child}function b0(e){var t=e.stateNode;t.pendingContext?U_(e,t.pendingContext,t.pendingContext!==t.context):t.context&&U_(e,t.context,!1),dh(e,t.containerInfo)}function ov(e,t,n,r,i){return Di(),ih(i),t.flags|=256,Mt(e,t,n,r),t.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Zf(e){return{baseLanes:e,cachePool:null,transitions:null}}function x0(e,t,n){var r=t.pendingProps,i=Xe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ze(Xe,i&1),e===null)return Bf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Qu(l,r,0,null),e=Bo(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Zf(n),t.memoizedState=$f,e):yh(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return JS(e,t,l,r,u,i,n);if(a){a=r.fallback,l=t.mode,i=e.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Qr(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?a=Qr(u,a):(a=Bo(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Zf(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=$f,r}return a=e.child,e=a.sibling,r=Qr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yh(e,t){return t=Qu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&ih(r),Fi(t,e.child,null,n),e=yh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JS(e,t,n,r,i,a,l){if(n)return t.flags&256?(t.flags&=-257,r=Od(Error(J(422))),dl(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Qu({mode:"visible",children:r.children},i,0,null),a=Bo(a,i,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Fi(t,e.child,null,l),t.child.memoizedState=Zf(l),t.memoizedState=$f,a);if(!(t.mode&1))return dl(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(J(419)),r=Od(a,r,void 0),dl(e,t,l,r)}if(u=(l&e.childLanes)!==0,Wt||u){if(r=_t,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vr(e,i),On(r,e,i,-1))}return Ph(),r=Od(Error(J(421))),dl(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=d2.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Gt=Hr(i.nextSibling),Xt=t,Qe=!0,Pn=null,e!==null&&(ln[un++]=dr,ln[un++]=fr,ln[un++]=Fo,dr=e.id,fr=e.overflow,Fo=t),t=yh(t,r.children),t.flags|=4096,t)}function iv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),If(e.return,t,n)}function Td(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function w0(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Mt(e,t,r.children,n),r=Xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iv(e,n,t);else if(e.tag===19)iv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ze(Xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ru(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Td(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ru(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Td(t,!0,n,null,a);break;case"together":Td(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ol(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Uo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=Qr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function YS(e,t,n){switch(t.tag){case 3:b0(t),Di();break;case 5:Qb(t);break;case 1:Vt(t.type)&&Xl(t);break;case 4:dh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ze(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ze(Xe,Xe.current&1),t.flags|=128,null):n&t.child.childLanes?x0(e,t,n):(Ze(Xe,Xe.current&1),e=gr(e,t,n),e!==null?e.sibling:null);Ze(Xe,Xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return w0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ze(Xe,Xe.current),r)break;return null;case 22:case 23:return t.lanes=0,g0(e,t,n)}return gr(e,t,n)}var k0,Wf,S0,P0;k0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};S0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Lo(Kn.current);var a=null;switch(n){case"input":i=ff(e,i),r=ff(e,r),a=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),a=[];break;case"textarea":i=mf(e,i),r=mf(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ql)}vf(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ka.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var d=r[f];if(u=i?.[f],r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(a||(a=[]),a.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(a=a||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&He("scroll",e),a||u===d||(a=[])):(a=a||[]).push(f,d))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};P0=function(e,t,n,r){n!==r&&(t.flags|=4)};function ya(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function e2(e,t,n){var r=t.pendingProps;switch(oh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Vt(t.type)&&Gl(),Ot(t),null;case 3:return r=t.stateNode,ji(),Ve(Ht),Ve(Rt),ph(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ul(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pn!==null&&(Jf(Pn),Pn=null))),Wf(e,t),Ot(t),null;case 5:fh(t);var i=Lo(as.current);if(n=t.type,e!==null&&t.stateNode!=null)S0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(J(166));return Ot(t),null}if(e=Lo(Kn.current),ul(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Wn]=t,r[os]=a,e=(t.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(i=0;i<za.length;i++)He(za[i],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":h_(r,a),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},He("invalid",r);break;case"textarea":__(r,a),He("invalid",r)}vf(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ll(r.textContent,u,e),i=["children",""+u]):Ka.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&He("scroll",r)}switch(n){case"input":el(r),m_(r,a,!0);break;case"textarea":el(r),v_(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ql)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Wn]=t,e[os]=r,k0(e,t,!1,!1),t.stateNode=e;e:{switch(l=gf(n,r),n){case"dialog":He("cancel",e),He("close",e),i=r;break;case"iframe":case"object":case"embed":He("load",e),i=r;break;case"video":case"audio":for(i=0;i<za.length;i++)He(za[i],e);i=r;break;case"source":He("error",e),i=r;break;case"img":case"image":case"link":He("error",e),He("load",e),i=r;break;case"details":He("toggle",e),i=r;break;case"input":h_(e,r),i=ff(e,r),He("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),He("invalid",e);break;case"textarea":__(e,r),i=mf(e,r),He("invalid",e);break;default:i=r}vf(n,i),u=i;for(a in u)if(u.hasOwnProperty(a)){var d=u[a];a==="style"?tb(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Yy(e,d)):a==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Qa(e,d):typeof d=="number"&&Qa(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Ka.hasOwnProperty(a)?d!=null&&a==="onScroll"&&He("scroll",e):d!=null&&Zp(e,a,d,l))}switch(n){case"input":el(e),m_(e,r,!1);break;case"textarea":el(e),v_(e);break;case"option":r.value!=null&&e.setAttribute("value",""+no(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ki(e,!!r.multiple,a,!1):r.defaultValue!=null&&ki(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)P0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(J(166));if(n=Lo(as.current),Lo(Kn.current),ul(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wn]=t,(a=r.nodeValue!==n)&&(e=Xt,e!==null))switch(e.tag){case 3:ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=t,t.stateNode=r}return Ot(t),null;case 13:if(Ve(Xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Qe&&Gt!==null&&t.mode&1&&!(t.flags&128))$b(),Di(),t.flags|=98560,a=!1;else if(a=ul(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(J(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[Wn]=t}else Di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),a=!1}else Pn!==null&&(Jf(Pn),Pn=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Xe.current&1?ft===0&&(ft=3):Ph())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return ji(),Wf(e,t),e===null&&ns(t.stateNode.containerInfo),Ot(t),null;case 10:return lh(t.type._context),Ot(t),null;case 17:return Vt(t.type)&&Gl(),Ot(t),null;case 19:if(Ve(Xe),a=t.memoizedState,a===null)return Ot(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ya(a,!1);else{if(ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ru(e),l!==null){for(t.flags|=128,ya(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ze(Xe,Xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&ot()>$i&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304)}else{if(!r)if(e=ru(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ya(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!Qe)return Ot(t),null}else 2*ot()-a.renderingStartTime>$i&&n!==1073741824&&(t.flags|=128,r=!0,ya(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ot(),t.sibling=null,n=Xe.current,Ze(Xe,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return Sh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qt&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(J(156,t.tag))}function t2(e,t){switch(oh(t),t.tag){case 1:return Vt(t.type)&&Gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ji(),Ve(Ht),Ve(Rt),ph(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fh(t),null;case 13:if(Ve(Xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Xe),null;case 4:return ji(),null;case 10:return lh(t.type._context),null;case 22:case 23:return Sh(),null;case 24:return null;default:return null}}var fl=!1,zt=!1,n2=typeof WeakSet=="function"?WeakSet:Set,ce=null;function bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(e,t,r)}else n.current=null}function Hf(e,t,n){try{n()}catch(r){et(e,t,r)}}var av=!1;function r2(e,t){if(Of=Vl,e=Tb(),nh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,m=0,_=e,h=null;t:for(;;){for(var g;_!==n||i!==0&&_.nodeType!==3||(u=l+i),_!==a||r!==0&&_.nodeType!==3||(d=l+r),_.nodeType===3&&(l+=_.nodeValue.length),(g=_.firstChild)!==null;)h=_,_=g;for(;;){if(_===e)break t;if(h===n&&++f===i&&(u=l),h===a&&++m===r&&(d=l),(g=_.nextSibling)!==null)break;_=h,h=_.parentNode}_=g}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:e,selectionRange:n},Vl=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?w:kn(t.type,w),C);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(P){et(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return x=av,av=!1,x}function ja(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Hf(t,n,a)}i=i.next}while(i!==r)}}function qu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function C0(e){var t=e.alternate;t!==null&&(e.alternate=null,C0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wn],delete t[os],delete t[Rf],delete t[FS],delete t[jS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function E0(e){return e.tag===5||e.tag===3||e.tag===4}function sv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||E0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ql));else if(r!==4&&(e=e.child,e!==null))for(qf(e,t,n),e=e.sibling;e!==null;)qf(e,t,n),e=e.sibling}function Kf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Kf(e,t,n),e=e.sibling;e!==null;)Kf(e,t,n),e=e.sibling}var bt=null,Sn=!1;function Or(e,t,n){for(n=n.child;n!==null;)O0(e,t,n),n=n.sibling}function O0(e,t,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:zt||bi(n,t);case 6:var r=bt,i=Sn;bt=null,Or(e,t,n),bt=r,Sn=i,bt!==null&&(Sn?(e=bt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Sn?(e=bt,n=n.stateNode,e.nodeType===8?wd(e.parentNode,n):e.nodeType===1&&wd(e,n),Ya(e)):wd(bt,n.stateNode));break;case 4:r=bt,i=Sn,bt=n.stateNode.containerInfo,Sn=!0,Or(e,t,n),bt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!zt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Hf(n,t,l),i=i.next}while(i!==r)}Or(e,t,n);break;case 1:if(!zt&&(bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){et(n,t,u)}Or(e,t,n);break;case 21:Or(e,t,n);break;case 22:n.mode&1?(zt=(r=zt)||n.memoizedState!==null,Or(e,t,n),zt=r):Or(e,t,n);break;default:Or(e,t,n)}}function lv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new n2),t.forEach(function(r){var i=f2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:bt=u.stateNode,Sn=!1;break e;case 3:bt=u.stateNode.containerInfo,Sn=!0;break e;case 4:bt=u.stateNode.containerInfo,Sn=!0;break e}u=u.return}if(bt===null)throw Error(J(160));O0(a,l,i),bt=null,Sn=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){et(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)T0(t,e),t=t.sibling}function T0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(t,e),jn(e),r&4){try{ja(3,e,e.return),qu(3,e)}catch(w){et(e,e.return,w)}try{ja(5,e,e.return)}catch(w){et(e,e.return,w)}}break;case 1:yn(t,e),jn(e),r&512&&n!==null&&bi(n,n.return);break;case 5:if(yn(t,e),jn(e),r&512&&n!==null&&bi(n,n.return),e.flags&32){var i=e.stateNode;try{Qa(i,"")}catch(w){et(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&Gy(i,a),gf(u,l);var f=gf(u,a);for(l=0;l<d.length;l+=2){var m=d[l],_=d[l+1];m==="style"?tb(i,_):m==="dangerouslySetInnerHTML"?Yy(i,_):m==="children"?Qa(i,_):Zp(i,m,_,f)}switch(u){case"input":pf(i,a);break;case"textarea":Xy(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?ki(i,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?ki(i,!!a.multiple,a.defaultValue,!0):ki(i,!!a.multiple,a.multiple?[]:"",!1))}i[os]=a}catch(w){et(e,e.return,w)}}break;case 6:if(yn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(J(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){et(e,e.return,w)}}break;case 3:if(yn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(t.containerInfo)}catch(w){et(e,e.return,w)}break;case 4:yn(t,e),jn(e);break;case 13:yn(t,e),jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(wh=ot())),r&4&&lv(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(zt=(f=zt)||m,yn(t,e),zt=f):yn(t,e),jn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(ce=e,m=e.child;m!==null;){for(_=ce=m;ce!==null;){switch(h=ce,g=h.child,h.tag){case 0:case 11:case 14:case 15:ja(4,h,h.return);break;case 1:bi(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){et(r,n,w)}}break;case 5:bi(h,h.return);break;case 22:if(h.memoizedState!==null){cv(_);continue}}g!==null?(g.return=h,ce=g):cv(_)}m=m.sibling}e:for(m=null,_=e;;){if(_.tag===5){if(m===null){m=_;try{i=_.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=_.stateNode,d=_.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=eb("display",l))}catch(w){et(e,e.return,w)}}}else if(_.tag===6){if(m===null)try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(w){et(e,e.return,w)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;m===_&&(m=null),_=_.return}m===_&&(m=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:yn(t,e),jn(e),r&4&&lv(e);break;case 21:break;default:yn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(E0(n)){var r=n;break e}n=n.return}throw Error(J(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qa(i,""),r.flags&=-33);var a=sv(e);Kf(e,a,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=sv(e);qf(e,u,l);break;default:throw Error(J(161))}}catch(d){et(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o2(e,t,n){ce=e,L0(e)}function L0(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var i=ce,a=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||fl;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||zt;u=fl;var f=zt;if(fl=l,(zt=d)&&!f)for(ce=i;ce!==null;)l=ce,d=l.child,l.tag===22&&l.memoizedState!==null?dv(i):d!==null?(d.return=l,ce=d):dv(i);for(;a!==null;)ce=a,L0(a),a=a.sibling;ce=i,fl=u,zt=f}uv(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ce=a):uv(e)}}function uv(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:zt||qu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!zt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:kn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&V_(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}V_(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var _=m.dehydrated;_!==null&&Ya(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}zt||t.flags&512&&Vf(t)}catch(h){et(t,t.return,h)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function cv(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function dv(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qu(4,t)}catch(d){et(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(d){et(t,i,d)}}var a=t.return;try{Vf(t)}catch(d){et(t,a,d)}break;case 5:var l=t.return;try{Vf(t)}catch(d){et(t,l,d)}}}catch(d){et(t,t.return,d)}if(t===e){ce=null;break}var u=t.sibling;if(u!==null){u.return=t.return,ce=u;break}ce=t.return}}var i2=Math.ceil,au=xr.ReactCurrentDispatcher,bh=xr.ReactCurrentOwner,fn=xr.ReactCurrentBatchConfig,ze=0,_t=null,ut=null,kt=0,Qt=0,xi=co(0),ft=0,cs=null,Uo=0,Ku=0,xh=0,Ua=null,Zt=null,wh=0,$i=1/0,sr=null,su=!1,Qf=null,qr=null,pl=!1,jr=null,lu=0,$a=0,Gf=null,Tl=-1,Ll=0;function Dt(){return ze&6?ot():Tl!==-1?Tl:Tl=ot()}function Kr(e){return e.mode&1?ze&2&&kt!==0?kt&-kt:$S.transition!==null?(Ll===0&&(Ll=pb()),Ll):(e=Me,e!==0||(e=window.event,e=e===void 0?16:bb(e.type)),e):1}function On(e,t,n,r){if(50<$a)throw $a=0,Gf=null,Error(J(185));xs(e,n,r),(!(ze&2)||e!==_t)&&(e===_t&&(!(ze&2)&&(Ku|=n),ft===4&&Mr(e,kt)),qt(e,r),n===1&&ze===0&&!(t.mode&1)&&($i=ot()+500,Wu&&fo()))}function qt(e,t){var n=e.callbackNode;$k(e,t);var r=Hl(e,e===_t?kt:0);if(r===0)n!==null&&b_(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&b_(n),t===1)e.tag===0?US(fv.bind(null,e)):Fb(fv.bind(null,e)),MS(function(){!(ze&6)&&fo()}),n=null;else{switch(hb(r)){case 1:n=Kp;break;case 4:n=db;break;case 16:n=Wl;break;case 536870912:n=fb;break;default:n=Wl}n=D0(n,z0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function z0(e,t){if(Tl=-1,Ll=0,ze&6)throw Error(J(327));var n=e.callbackNode;if(Oi()&&e.callbackNode!==n)return null;var r=Hl(e,e===_t?kt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=uu(e,r);else{t=r;var i=ze;ze|=2;var a=A0();(_t!==e||kt!==t)&&(sr=null,$i=ot()+500,No(e,t));do try{l2();break}catch(u){R0(e,u)}while(1);sh(),au.current=a,ze=i,ut!==null?t=0:(_t=null,kt=0,t=ft)}if(t!==0){if(t===2&&(i=kf(e),i!==0&&(r=i,t=Xf(e,i))),t===1)throw n=cs,No(e,0),Mr(e,r),qt(e,ot()),n;if(t===6)Mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!a2(i)&&(t=uu(e,r),t===2&&(a=kf(e),a!==0&&(r=a,t=Xf(e,a))),t===1))throw n=cs,No(e,0),Mr(e,r),qt(e,ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(J(345));case 2:Po(e,Zt,sr);break;case 3:if(Mr(e,r),(r&130023424)===r&&(t=wh+500-ot(),10<t)){if(Hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Dt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zf(Po.bind(null,e,Zt,sr),t);break}Po(e,Zt,sr);break;case 4:if(Mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-En(r);a=1<<l,l=t[l],l>i&&(i=l),r&=~a}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i2(r/1960))-r,10<r){e.timeoutHandle=zf(Po.bind(null,e,Zt,sr),r);break}Po(e,Zt,sr);break;case 5:Po(e,Zt,sr);break;default:throw Error(J(329))}}}return qt(e,ot()),e.callbackNode===n?z0.bind(null,e):null}function Xf(e,t){var n=Ua;return e.current.memoizedState.isDehydrated&&(No(e,t).flags|=256),e=uu(e,t),e!==2&&(t=Zt,Zt=n,t!==null&&Jf(t)),e}function Jf(e){Zt===null?Zt=e:Zt.push.apply(Zt,e)}function a2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!zn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mr(e,t){for(t&=~xh,t&=~Ku,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-En(t),r=1<<n;e[n]=-1,t&=~r}}function fv(e){if(ze&6)throw Error(J(327));Oi();var t=Hl(e,0);if(!(t&1))return qt(e,ot()),null;var n=uu(e,t);if(e.tag!==0&&n===2){var r=kf(e);r!==0&&(t=r,n=Xf(e,r))}if(n===1)throw n=cs,No(e,0),Mr(e,t),qt(e,ot()),n;if(n===6)throw Error(J(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Po(e,Zt,sr),qt(e,ot()),null}function kh(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&($i=ot()+500,Wu&&fo())}}function $o(e){jr!==null&&jr.tag===0&&!(ze&6)&&Oi();var t=ze;ze|=1;var n=fn.transition,r=Me;try{if(fn.transition=null,Me=1,e)return e()}finally{Me=r,fn.transition=n,ze=t,!(ze&6)&&fo()}}function Sh(){Qt=xi.current,Ve(xi)}function No(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,IS(n)),ut!==null)for(n=ut.return;n!==null;){var r=n;switch(oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gl();break;case 3:ji(),Ve(Ht),Ve(Rt),ph();break;case 5:fh(r);break;case 4:ji();break;case 13:Ve(Xe);break;case 19:Ve(Xe);break;case 10:lh(r.type._context);break;case 22:case 23:Sh()}n=n.return}if(_t=e,ut=e=Qr(e.current,null),kt=Qt=t,ft=0,cs=null,xh=Ku=Uo=0,Zt=Ua=null,To!==null){for(t=0;t<To.length;t++)if(n=To[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,r.next=l}n.pending=r}To=null}return e}function R0(e,t){do{var n=ut;try{if(sh(),Cl.current=iu,ou){for(var r=Je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(jo=0,mt=dt=Je=null,Fa=!1,ss=0,bh.current=null,n===null||n.return===null){ft=1,cs=t,ut=null;break}e:{var a=e,l=n.return,u=n,d=t;if(t=kt,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,m=u,_=m.tag;if(!(m.mode&1)&&(_===0||_===11||_===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Y_(l);if(g!==null){g.flags&=-257,ev(g,l,u,a,t),g.mode&1&&J_(a,f,t),t=g,d=f;var x=t.updateQueue;if(x===null){var w=new Set;w.add(d),t.updateQueue=w}else x.add(d);break e}else{if(!(t&1)){J_(a,f,t),Ph();break e}d=Error(J(426))}}else if(Qe&&u.mode&1){var C=Y_(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ev(C,l,u,a,t),ih(Ui(d,u));break e}}a=d=Ui(d,u),ft!==4&&(ft=2),Ua===null?Ua=[a]:Ua.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var y=m0(a,d,t);H_(a,y);break e;case 1:u=d;var b=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof b.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(qr===null||!qr.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=_0(a,u,t);H_(a,P);break e}}a=a.return}while(a!==null)}B0(n)}catch(z){t=z,ut===n&&n!==null&&(ut=n=n.return);continue}break}while(1)}function A0(){var e=au.current;return au.current=iu,e===null?iu:e}function Ph(){(ft===0||ft===3||ft===2)&&(ft=4),_t===null||!(Uo&268435455)&&!(Ku&268435455)||Mr(_t,kt)}function uu(e,t){var n=ze;ze|=2;var r=A0();(_t!==e||kt!==t)&&(sr=null,No(e,t));do try{s2();break}catch(i){R0(e,i)}while(1);if(sh(),ze=n,au.current=r,ut!==null)throw Error(J(261));return _t=null,kt=0,ft}function s2(){for(;ut!==null;)N0(ut)}function l2(){for(;ut!==null&&!Ak();)N0(ut)}function N0(e){var t=M0(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?B0(e):ut=t,bh.current=null}function B0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=t2(n,t),n!==null){n.flags&=32767,ut=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,ut=null;return}}else if(n=e2(n,t,Qt),n!==null){ut=n;return}if(t=t.sibling,t!==null){ut=t;return}ut=t=e}while(t!==null);ft===0&&(ft=5)}function Po(e,t,n){var r=Me,i=fn.transition;try{fn.transition=null,Me=1,u2(e,t,n,r)}finally{fn.transition=i,Me=r}return null}function u2(e,t,n,r){do Oi();while(jr!==null);if(ze&6)throw Error(J(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(J(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Zk(e,a),e===_t&&(ut=_t=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,D0(Wl,function(){return Oi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=fn.transition,fn.transition=null;var l=Me;Me=1;var u=ze;ze|=4,bh.current=null,r2(e,n),T0(n,e),TS(Tf),Vl=!!Of,Tf=Of=null,e.current=n,o2(n),Nk(),ze=u,Me=l,fn.transition=a}else e.current=n;if(pl&&(pl=!1,jr=e,lu=i),a=e.pendingLanes,a===0&&(qr=null),Mk(n.stateNode),qt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,e=Qf,Qf=null,e;return lu&1&&e.tag!==0&&Oi(),a=e.pendingLanes,a&1?e===Gf?$a++:($a=0,Gf=e):$a=0,fo(),null}function Oi(){if(jr!==null){var e=hb(lu),t=fn.transition,n=Me;try{if(fn.transition=null,Me=16>e?16:e,jr===null)var r=!1;else{if(e=jr,jr=null,lu=0,ze&6)throw Error(J(331));var i=ze;for(ze|=4,ce=e.current;ce!==null;){var a=ce,l=a.child;if(ce.flags&16){var u=a.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(ce=f;ce!==null;){var m=ce;switch(m.tag){case 0:case 11:case 15:ja(8,m,a)}var _=m.child;if(_!==null)_.return=m,ce=_;else for(;ce!==null;){m=ce;var h=m.sibling,g=m.return;if(C0(m),m===f){ce=null;break}if(h!==null){h.return=g,ce=h;break}ce=g}}}var x=a.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}ce=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,ce=l;else e:for(;ce!==null;){if(a=ce,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ja(9,a,a.return)}var y=a.sibling;if(y!==null){y.return=a.return,ce=y;break e}ce=a.return}}var b=e.current;for(ce=b;ce!==null;){l=ce;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,ce=S;else e:for(l=b;ce!==null;){if(u=ce,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:qu(9,u)}}catch(z){et(u,u.return,z)}if(u===l){ce=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,ce=P;break e}ce=u.return}}if(ze=i,fo(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Fu,e)}catch{}r=!0}return r}finally{Me=n,fn.transition=t}}return!1}function pv(e,t,n){t=Ui(n,t),t=m0(e,t,1),e=Vr(e,t,1),t=Dt(),e!==null&&(xs(e,1,t),qt(e,t))}function et(e,t,n){if(e.tag===3)pv(e,e,n);else for(;t!==null;){if(t.tag===3){pv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qr===null||!qr.has(r))){e=Ui(n,e),e=_0(t,e,1),t=Vr(t,e,1),e=Dt(),t!==null&&(xs(t,1,e),qt(t,e));break}}t=t.return}}function c2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Dt(),e.pingedLanes|=e.suspendedLanes&n,_t===e&&(kt&n)===n&&(ft===4||ft===3&&(kt&130023424)===kt&&500>ot()-wh?No(e,0):xh|=n),qt(e,t)}function I0(e,t){t===0&&(e.mode&1?(t=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):t=1);var n=Dt();e=vr(e,t),e!==null&&(xs(e,t,n),qt(e,n))}function d2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),I0(e,n)}function f2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(J(314))}r!==null&&r.delete(t),I0(e,n)}var M0;M0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Wt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Wt=!1,YS(e,t,n);Wt=!!(e.flags&131072)}else Wt=!1,Qe&&t.flags&1048576&&jb(t,Yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ol(e,t),e=t.pendingProps;var i=Mi(t,Rt.current);Ei(t,n),i=mh(null,t,r,e,i,n);var a=_h();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)?(a=!0,Xl(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ch(t),i.updater=Hu,t.stateNode=i,i._reactInternals=t,Df(t,r,e,n),t=Uf(null,t,r,!0,a,n)):(t.tag=0,Qe&&a&&rh(t),Mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ol(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=h2(r),e=kn(r,e),i){case 0:t=jf(null,t,r,e,n);break e;case 1:t=rv(null,t,r,e,n);break e;case 11:t=tv(null,t,r,e,n);break e;case 14:t=nv(null,t,r,kn(r.type,e),n);break e}throw Error(J(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),jf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),rv(e,t,r,i,n);case 3:e:{if(b0(t),e===null)throw Error(J(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Wb(e,t),nu(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ui(Error(J(423)),t),t=ov(e,t,r,n,i);break e}else if(r!==i){i=Ui(Error(J(424)),t),t=ov(e,t,r,n,i);break e}else for(Gt=Hr(t.stateNode.containerInfo.firstChild),Xt=t,Qe=!0,Pn=null,n=Kb(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){t=gr(e,t,n);break e}Mt(e,t,r,n)}t=t.child}return t;case 5:return Qb(t),e===null&&Bf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Lf(r,i)?l=null:a!==null&&Lf(r,a)&&(t.flags|=32),y0(e,t),Mt(e,t,l,n),t.child;case 6:return e===null&&Bf(t),null;case 13:return x0(e,t,n);case 4:return dh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fi(t,null,r,n):Mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),tv(e,t,r,i,n);case 7:return Mt(e,t,t.pendingProps,n),t.child;case 8:return Mt(e,t,t.pendingProps.children,n),t.child;case 12:return Mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ze(eu,r._currentValue),r._currentValue=l,a!==null)if(zn(a.value,l)){if(a.children===i.children&&!Ht.current){t=gr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(a.tag===1){d=pr(-1,n&-n),d.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?d.next=d:(d.next=m.next,m.next=d),f.pending=d}}a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),If(a.return,n,t),u.lanes|=n;break}d=d.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(J(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),If(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ei(t,n),i=pn(i),r=r(i),t.flags|=1,Mt(e,t,r,n),t.child;case 14:return r=t.type,i=kn(r,t.pendingProps),i=kn(r.type,i),nv(e,t,r,i,n);case 15:return v0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:kn(r,i),Ol(e,t),t.tag=1,Vt(r)?(e=!0,Xl(t)):e=!1,Ei(t,n),Vb(t,r,i),Df(t,r,i,n),Uf(null,t,r,!0,e,n);case 19:return w0(e,t,n);case 22:return g0(e,t,n)}throw Error(J(156,t.tag))};function D0(e,t){return cb(e,t)}function p2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,t,n,r){return new p2(e,t,n,r)}function Ch(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h2(e){if(typeof e=="function")return Ch(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hp)return 11;if(e===Vp)return 14}return 2}function Qr(e,t){var n=e.alternate;return n===null?(n=cn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,i,a){var l=2;if(r=e,typeof e=="function")Ch(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case di:return Bo(n.children,i,a,t);case Wp:l=8,i|=8;break;case lf:return e=cn(12,n,t,i|2),e.elementType=lf,e.lanes=a,e;case uf:return e=cn(13,n,t,i),e.elementType=uf,e.lanes=a,e;case cf:return e=cn(19,n,t,i),e.elementType=cf,e.lanes=a,e;case qy:return Qu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hy:l=10;break e;case Vy:l=9;break e;case Hp:l=11;break e;case Vp:l=14;break e;case Ar:l=16,r=null;break e}throw Error(J(130,e==null?e:typeof e,""))}return t=cn(l,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Bo(e,t,n,r){return e=cn(7,e,r,t),e.lanes=n,e}function Qu(e,t,n,r){return e=cn(22,e,r,t),e.elementType=qy,e.lanes=n,e.stateNode={isHidden:!1},e}function Ld(e,t,n){return e=cn(6,e,null,t),e.lanes=n,e}function zd(e,t,n){return t=cn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dd(0),this.expirationTimes=dd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Eh(e,t,n,r,i,a,l,u,d){return e=new m2(e,t,n,u,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=cn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(a),e}function _2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function F0(e){if(!e)return ro;e=e._reactInternals;e:{if(Ko(e)!==e||e.tag!==1)throw Error(J(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(J(171))}if(e.tag===1){var n=e.type;if(Vt(n))return Db(e,n,t)}return t}function j0(e,t,n,r,i,a,l,u,d){return e=Eh(n,r,!0,e,i,a,l,u,d),e.context=F0(null),n=e.current,r=Dt(),i=Kr(n),a=pr(r,i),a.callback=t??null,Vr(n,a,i),e.current.lanes=i,xs(e,i,r),qt(e,r),e}function Gu(e,t,n,r){var i=t.current,a=Dt(),l=Kr(i);return n=F0(n),t.context===null?t.context=n:t.pendingContext=n,t=pr(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vr(i,t,l),e!==null&&(On(e,i,l,a),Pl(e,i,l)),l}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oh(e,t){hv(e,t),(e=e.alternate)&&hv(e,t)}function v2(){return null}var U0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}Xu.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));Gu(e,t,null,null)};Xu.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$o(function(){Gu(null,e,null,null)}),t[_r]=null}};function Xu(e){this._internalRoot=e}Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=vb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ir.length&&t!==0&&t<Ir[n].priority;n++);Ir.splice(n,0,e),n===0&&yb(e)}};function Lh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mv(){}function g2(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=cu(l);a.call(f)}}var l=j0(t,r,e,0,null,!1,!1,"",mv);return e._reactRootContainer=l,e[_r]=l.current,ns(e.nodeType===8?e.parentNode:e),$o(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=cu(d);u.call(f)}}var d=Eh(e,0,!1,null,null,!1,!1,"",mv);return e._reactRootContainer=d,e[_r]=d.current,ns(e.nodeType===8?e.parentNode:e),$o(function(){Gu(t,d,n,r)}),d}function Yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var u=i;i=function(){var d=cu(l);u.call(d)}}Gu(t,l,e,i)}else l=g2(n,t,e,i,r);return cu(l)}mb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=La(t.pendingLanes);n!==0&&(Qp(t,n|1),qt(t,ot()),!(ze&6)&&($i=ot()+500,fo()))}break;case 13:$o(function(){var r=vr(e,1);if(r!==null){var i=Dt();On(r,e,1,i)}}),Oh(e,1)}};Gp=function(e){if(e.tag===13){var t=vr(e,134217728);if(t!==null){var n=Dt();On(t,e,134217728,n)}Oh(e,134217728)}};_b=function(e){if(e.tag===13){var t=Kr(e),n=vr(e,t);if(n!==null){var r=Dt();On(n,e,t,r)}Oh(e,t)}};vb=function(){return Me};gb=function(e,t){var n=Me;try{return Me=e,t()}finally{Me=n}};bf=function(e,t,n){switch(t){case"input":if(pf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Zu(r);if(!i)throw Error(J(90));Qy(r),pf(r,i)}}}break;case"textarea":Xy(e,n);break;case"select":t=n.value,t!=null&&ki(e,!!n.multiple,t,!1)}};ob=kh;ib=$o;var y2={usingClientEntryPoint:!1,Events:[ks,mi,Zu,nb,rb,kh]},ba={findFiberByHostInstance:Oo,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},b2={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lb(e),e===null?null:e.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||v2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Fu=hl.inject(b2),qn=hl}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y2;en.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(t))throw Error(J(200));return _2(e,t,null,n)};en.createRoot=function(e,t){if(!Lh(e))throw Error(J(299));var n=!1,r="",i=U0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Eh(e,1,!1,null,null,n,!1,r,i),e[_r]=t.current,ns(e.nodeType===8?e.parentNode:e),new Th(t)};en.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=lb(t),e=e===null?null:e.stateNode,e};en.flushSync=function(e){return $o(e)};en.hydrate=function(e,t,n){if(!Ju(t))throw Error(J(200));return Yu(null,e,t,!0,n)};en.hydrateRoot=function(e,t,n){if(!Lh(e))throw Error(J(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",l=U0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=j0(t,null,e,1,n??null,i,!1,a,l),e[_r]=t.current,ns(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xu(t)};en.render=function(e,t,n){if(!Ju(t))throw Error(J(200));return Yu(null,e,t,!1,n)};en.unmountComponentAtNode=function(e){if(!Ju(e))throw Error(J(40));return e._reactRootContainer?($o(function(){Yu(null,null,e,!1,function(){e._reactRootContainer=null,e[_r]=null})}),!0):!1};en.unstable_batchedUpdates=kh;en.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ju(n))throw Error(J(200));if(e==null||e._reactInternals===void 0)throw Error(J(38));return Yu(e,t,n,!1,r)};en.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=en})(vk);const x2=Ay(Bi);var $0,_v=Bi;$0=_v.createRoot,_v.hydrateRoot;var Yf={},w2={get exports(){return Yf},set exports(e){Yf=e}},Z0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=T;function k2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var S2=typeof Object.is=="function"?Object.is:k2,P2=Zi.useState,C2=Zi.useEffect,E2=Zi.useLayoutEffect,O2=Zi.useDebugValue;function T2(e,t){var n=t(),r=P2({inst:{value:n,getSnapshot:t}}),i=r[0].inst,a=r[1];return E2(function(){i.value=n,i.getSnapshot=t,Rd(i)&&a({inst:i})},[e,n,t]),C2(function(){return Rd(i)&&a({inst:i}),e(function(){Rd(i)&&a({inst:i})})},[e]),O2(n),n}function Rd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!S2(e,n)}catch{return!0}}function L2(e,t){return t()}var z2=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L2:T2;Z0.useSyncExternalStore=Zi.useSyncExternalStore!==void 0?Zi.useSyncExternalStore:z2;(function(e){e.exports=Z0})(w2);var ep={},R2={get exports(){return ep},set exports(e){ep=e}},W0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ec=T,A2=Yf;function N2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var B2=typeof Object.is=="function"?Object.is:N2,I2=A2.useSyncExternalStore,M2=ec.useRef,D2=ec.useEffect,F2=ec.useMemo,j2=ec.useDebugValue;W0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=M2(null);if(a.current===null){var l={hasValue:!1,value:null};a.current=l}else l=a.current;a=F2(function(){function d(g){if(!f){if(f=!0,m=g,g=r(g),i!==void 0&&l.hasValue){var x=l.value;if(i(x,g))return _=x}return _=g}if(x=_,B2(m,g))return x;var w=r(g);return i!==void 0&&i(x,w)?x:(m=g,_=w)}var f=!1,m,_,h=n===void 0?null:n;return[function(){return d(t())},h===null?void 0:function(){return d(h())}]},[t,n,r,i]);var u=I2(e,a[0],a[1]);return D2(function(){l.hasValue=!0,l.value=u},[u]),j2(u),u};(function(e){e.exports=W0})(R2);function U2(e){e()}let H0=U2;const $2=e=>H0=e,Z2=()=>H0,oo=T.createContext(null);function V0(){return T.useContext(oo)}const W2=()=>{throw new Error("uSES not initialized!")};let q0=W2;const H2=e=>{q0=e},V2=(e,t)=>e===t;function q2(e=oo){const t=e===oo?V0:()=>T.useContext(e);return function(r,i=V2){const{store:a,subscription:l,getServerState:u}=t(),d=q0(l.addNestedSub,a.getState,u||a.getState,r,i);return T.useDebugValue(d),d}}const K2=q2();function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}var tp={},Q2={get exports(){return tp},set exports(e){tp=e}},De={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vt=typeof Symbol=="function"&&Symbol.for,zh=vt?Symbol.for("react.element"):60103,Rh=vt?Symbol.for("react.portal"):60106,tc=vt?Symbol.for("react.fragment"):60107,nc=vt?Symbol.for("react.strict_mode"):60108,rc=vt?Symbol.for("react.profiler"):60114,oc=vt?Symbol.for("react.provider"):60109,ic=vt?Symbol.for("react.context"):60110,Ah=vt?Symbol.for("react.async_mode"):60111,ac=vt?Symbol.for("react.concurrent_mode"):60111,sc=vt?Symbol.for("react.forward_ref"):60112,lc=vt?Symbol.for("react.suspense"):60113,G2=vt?Symbol.for("react.suspense_list"):60120,uc=vt?Symbol.for("react.memo"):60115,cc=vt?Symbol.for("react.lazy"):60116,X2=vt?Symbol.for("react.block"):60121,J2=vt?Symbol.for("react.fundamental"):60117,Y2=vt?Symbol.for("react.responder"):60118,eP=vt?Symbol.for("react.scope"):60119;function nn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case zh:switch(e=e.type,e){case Ah:case ac:case tc:case rc:case nc:case lc:return e;default:switch(e=e&&e.$$typeof,e){case ic:case sc:case cc:case uc:case oc:return e;default:return t}}case Rh:return t}}}function K0(e){return nn(e)===ac}De.AsyncMode=Ah;De.ConcurrentMode=ac;De.ContextConsumer=ic;De.ContextProvider=oc;De.Element=zh;De.ForwardRef=sc;De.Fragment=tc;De.Lazy=cc;De.Memo=uc;De.Portal=Rh;De.Profiler=rc;De.StrictMode=nc;De.Suspense=lc;De.isAsyncMode=function(e){return K0(e)||nn(e)===Ah};De.isConcurrentMode=K0;De.isContextConsumer=function(e){return nn(e)===ic};De.isContextProvider=function(e){return nn(e)===oc};De.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===zh};De.isForwardRef=function(e){return nn(e)===sc};De.isFragment=function(e){return nn(e)===tc};De.isLazy=function(e){return nn(e)===cc};De.isMemo=function(e){return nn(e)===uc};De.isPortal=function(e){return nn(e)===Rh};De.isProfiler=function(e){return nn(e)===rc};De.isStrictMode=function(e){return nn(e)===nc};De.isSuspense=function(e){return nn(e)===lc};De.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tc||e===ac||e===rc||e===nc||e===lc||e===G2||typeof e=="object"&&e!==null&&(e.$$typeof===cc||e.$$typeof===uc||e.$$typeof===oc||e.$$typeof===ic||e.$$typeof===sc||e.$$typeof===J2||e.$$typeof===Y2||e.$$typeof===eP||e.$$typeof===X2)};De.typeOf=nn;(function(e){e.exports=De})(Q2);var Q0=tp,tP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nP={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G0={};G0[Q0.ForwardRef]=tP;G0[Q0.Memo]=nP;var vv={},rP={get exports(){return vv},set exports(e){vv=e}},Fe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh=Symbol.for("react.element"),Bh=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),hc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),oP=Symbol.for("react.server_context"),_c=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),gc=Symbol.for("react.suspense_list"),yc=Symbol.for("react.memo"),bc=Symbol.for("react.lazy"),iP=Symbol.for("react.offscreen"),X0;X0=Symbol.for("react.module.reference");function mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nh:switch(e=e.type,e){case dc:case pc:case fc:case vc:case gc:return e;default:switch(e=e&&e.$$typeof,e){case oP:case mc:case _c:case bc:case yc:case hc:return e;default:return t}}case Bh:return t}}}Fe.ContextConsumer=mc;Fe.ContextProvider=hc;Fe.Element=Nh;Fe.ForwardRef=_c;Fe.Fragment=dc;Fe.Lazy=bc;Fe.Memo=yc;Fe.Portal=Bh;Fe.Profiler=pc;Fe.StrictMode=fc;Fe.Suspense=vc;Fe.SuspenseList=gc;Fe.isAsyncMode=function(){return!1};Fe.isConcurrentMode=function(){return!1};Fe.isContextConsumer=function(e){return mn(e)===mc};Fe.isContextProvider=function(e){return mn(e)===hc};Fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nh};Fe.isForwardRef=function(e){return mn(e)===_c};Fe.isFragment=function(e){return mn(e)===dc};Fe.isLazy=function(e){return mn(e)===bc};Fe.isMemo=function(e){return mn(e)===yc};Fe.isPortal=function(e){return mn(e)===Bh};Fe.isProfiler=function(e){return mn(e)===pc};Fe.isStrictMode=function(e){return mn(e)===fc};Fe.isSuspense=function(e){return mn(e)===vc};Fe.isSuspenseList=function(e){return mn(e)===gc};Fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===dc||e===pc||e===fc||e===vc||e===gc||e===iP||typeof e=="object"&&e!==null&&(e.$$typeof===bc||e.$$typeof===yc||e.$$typeof===hc||e.$$typeof===mc||e.$$typeof===_c||e.$$typeof===X0||e.getModuleId!==void 0)};Fe.typeOf=mn;(function(e){e.exports=Fe})(rP);function aP(){const e=Z2();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,a=n={callback:r,next:null,prev:n};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}const gv={notify(){},get:()=>[]};function sP(e,t){let n,r=gv;function i(_){return d(),r.subscribe(_)}function a(){r.notify()}function l(){m.onStateChange&&m.onStateChange()}function u(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=aP())}function f(){n&&(n(),n=void 0,r.clear(),r=gv)}const m={addNestedSub:i,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:d,tryUnsubscribe:f,getListeners:()=>r};return m}const lP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uP=lP?T.useLayoutEffect:T.useEffect;function cP({store:e,context:t,children:n,serverState:r}){const i=T.useMemo(()=>{const u=sP(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0}},[e,r]),a=T.useMemo(()=>e.getState(),[e]);uP(()=>{const{subscription:u}=i;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[i,a]);const l=t||oo;return Z.createElement(l.Provider,{value:i},n)}function J0(e=oo){const t=e===oo?V0:()=>T.useContext(e);return function(){const{store:r}=t();return r}}const dP=J0();function fP(e=oo){const t=e===oo?dP:J0(e);return function(){return t().dispatch}}const pP=fP();H2(ep.useSyncExternalStoreWithSelector);$2(Bi.unstable_batchedUpdates);/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Be.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const yv="popstate";function hP(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:l,hash:u}=r.location;return ds("",{pathname:a,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return _P(t,n,null,e)}function ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mP(){return Math.random().toString(36).substr(2,8)}function bv(e,t){return{usr:e.state,key:e.key,idx:t}}function ds(e,t,n,r){return n===void 0&&(n=null),Be({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wr(t):t,{state:n,key:t&&t.key||r||mP()})}function Zo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function wr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _P(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u=lt.Pop,d=null,f=m();f==null&&(f=0,l.replaceState(Be({},l.state,{idx:f}),""));function m(){return(l.state||{idx:null}).idx}function _(){u=lt.Pop;let C=m(),y=C==null?null:C-f;f=C,d&&d({action:u,location:w.location,delta:y})}function h(C,y){u=lt.Push;let b=ds(w.location,C,y);n&&n(b,C),f=m()+1;let S=bv(b,f),P=w.createHref(b);try{l.pushState(S,"",P)}catch{i.location.assign(P)}a&&d&&d({action:u,location:w.location,delta:1})}function g(C,y){u=lt.Replace;let b=ds(w.location,C,y);n&&n(b,C),f=m();let S=bv(b,f),P=w.createHref(b);l.replaceState(S,"",P),a&&d&&d({action:u,location:w.location,delta:0})}function x(C){let y=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof C=="string"?C:Zo(C);return ke(y,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,y)}let w={get action(){return u},get location(){return e(i,l)},listen(C){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(yv,_),d=C,()=>{i.removeEventListener(yv,_),d=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let y=x(C);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:h,replace:g,go(C){return l.go(C)}};return w}var wt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wt||(wt={}));function vP(e){return e.index===!0}function Y0(e,t,n){return t===void 0&&(t=[]),n===void 0&&(n=new Set),e.map((r,i)=>{let a=[...t,i],l=typeof r.id=="string"?r.id:a.join("-");return ke(r.index!==!0||!r.children,"Cannot specify children on an index route"),ke(!n.has(l),'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),n.add(l),vP(r)?Be({},r,{id:l}):Be({},r,{id:l,children:r.children?Y0(r.children,a,n):void 0})})}function Ra(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?wr(t):t,i=n1(r.pathname||"/",n);if(i==null)return null;let a=e1(e);gP(a);let l=null;for(let u=0;l==null&&u<a.length;++u)l=EP(a[u],LP(i));return l}function e1(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(ke(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let f=Gr([r,d.relativePath]),m=n.concat(d);a.children&&a.children.length>0&&(ke(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+f+'".')),e1(a.children,t,m,f)),!(a.path==null&&!a.index)&&t.push({path:f,score:PP(f,a.index),routesMeta:m})};return e.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))i(a,l);else for(let d of t1(a.path))i(a,l,d)}),t}function t1(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=t1(r.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),i&&u.push(...l),u.map(d=>e.startsWith("/")&&d===""?"/":d)}function gP(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:CP(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yP=/^:\w+$/,bP=3,xP=2,wP=1,kP=10,SP=-2,xv=e=>e==="*";function PP(e,t){let n=e.split("/"),r=n.length;return n.some(xv)&&(r+=SP),t&&(r+=xP),n.filter(i=>!xv(i)).reduce((i,a)=>i+(yP.test(a)?bP:a===""?wP:kP),r)}function CP(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function EP(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let l=0;l<n.length;++l){let u=n[l],d=l===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=OP({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f);if(!m)return null;Object.assign(r,m.params);let _=u.route;a.push({params:r,pathname:Gr([i,m.pathname]),pathnameBase:NP(Gr([i,m.pathnameBase])),route:_}),m.pathnameBase!=="/"&&(i=Gr([i,m.pathnameBase]))}return a}function OP(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=TP(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((f,m,_)=>{if(m==="*"){let h=u[_]||"";l=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return f[m]=zP(u[_]||"",m),f},{}),pathname:a,pathnameBase:l,pattern:e}}function TP(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),fs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,u)=>(r.push(u),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function LP(e){try{return decodeURI(e)}catch(t){return fs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function zP(e,t){try{return decodeURIComponent(e)}catch(n){return fs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function n1(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function fs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function RP(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?wr(e):e;return{pathname:n?n.startsWith("/")?n:AP(n,t):t,search:BP(r),hash:IP(i)}}function AP(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ad(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ih(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function r1(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=wr(e):(i=Be({},e),ke(!i.pathname||!i.pathname.includes("?"),Ad("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Ad("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Ad("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,u;if(r||l==null)u=n;else{let _=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),_-=1;i.pathname=h.join("/")}u=_>=0?t[_]:"/"}let d=RP(i,u),f=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(f||m)&&(d.pathname+="/"),d}const Gr=e=>e.join("/").replace(/\/\/+/g,"/"),NP=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),BP=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,IP=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class wv extends Error{}class MP{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],ke(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,l)=>r=l),this.controller=new AbortController;let i=()=>r(new wv("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,l)=>{let[u,d]=l;return Object.assign(a,{[u]:this.trackPromise(u,d)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof wv?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return ke(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:FP(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function DP(e){return e instanceof Promise&&e._tracked===!0}function FP(e){if(!DP(e))return e;if(e._error)throw e._error;return e._data}class Mh{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function o1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const i1=["post","put","patch","delete"],jP=new Set(i1),UP=["get",...i1],$P=new Set(UP),ZP=new Set([301,302,303,307,308]),WP=new Set([307,308]),Nd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},HP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},kv={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},a1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",VP=!s1;function qP(e){ke(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=Y0(e.routes),n=null,r=new Set,i=null,a=null,l=null,u=e.hydrationData!=null,d=Ra(t,e.history.location,e.basename),f=null;if(d==null){let W=Rr(404,{pathname:e.history.location.pathname}),{matches:H,route:G}=Tv(t);d=H,f={[G.id]:W}}let m=!d.some(W=>W.route.loader)||e.hydrationData!=null,_,h={historyAction:e.history.action,location:e.history.location,matches:d,initialized:m,navigation:Nd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},g=lt.Pop,x=!1,w,C=!1,y=!1,b=[],S=[],P=new Map,z=0,I=-1,D=new Map,j=new Set,V=new Map,U=new Map,R=new Map,Y=!1;function _e(){return n=e.history.listen(W=>{let{action:H,location:G,delta:le}=W;if(Y){Y=!1;return}fs(R.size===0||le!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ie=Bn({currentLocation:h.location,nextLocation:G,historyAction:H});if(ie&&le!=null){Y=!0,e.history.go(le*-1),Ct(ie,{state:"blocked",location:G,proceed(){Ct(ie,{state:"proceeding",proceed:void 0,reset:void 0,location:G}),e.history.go(le)},reset(){Ne(ie),ee({blockers:new Map(_.state.blockers)})}});return}return K(H,G)}),h.initialized||K(lt.Pop,h.location),_}function re(){n&&n(),r.clear(),w&&w.abort(),h.fetchers.forEach((W,H)=>Re(H)),h.blockers.forEach((W,H)=>Ne(H))}function de(W){return r.add(W),()=>r.delete(W)}function ee(W){h=Be({},h,W),r.forEach(H=>H(h))}function ue(W,H){var G,le;let ie=h.actionData!=null&&h.navigation.formMethod!=null&&lr(h.navigation.formMethod)&&h.navigation.state==="loading"&&((G=W.state)==null?void 0:G._isRedirect)!==!0,ve;H.actionData?Object.keys(H.actionData).length>0?ve=H.actionData:ve=null:ie?ve=h.actionData:ve=null;let he=H.loaderData?Ov(h.loaderData,H.loaderData,H.matches||[],H.errors):h.loaderData;for(let[me]of R)Ne(me);let ye=x===!0||h.navigation.formMethod!=null&&lr(h.navigation.formMethod)&&((le=W.state)==null?void 0:le._isRedirect)!==!0;ee(Be({},H,{actionData:ve,loaderData:he,historyAction:g,location:W,initialized:!0,navigation:Nd,revalidation:"idle",restoreScrollPosition:Sr(W,H.matches||h.matches),preventScrollReset:ye,blockers:new Map(h.blockers)})),C||g===lt.Pop||(g===lt.Push?e.history.push(W,W.state):g===lt.Replace&&e.history.replace(W,W.state)),g=lt.Pop,x=!1,C=!1,y=!1,b=[],S=[]}async function M(W,H){if(typeof W=="number"){e.history.go(W);return}let{path:G,submission:le,error:ie}=Sv(W,H),ve=h.location,he=ds(h.location,G,H&&H.state);he=Be({},he,e.history.encodeLocation(he));let ye=H&&H.replace!=null?H.replace:void 0,me=lt.Push;ye===!0?me=lt.Replace:ye===!1||le!=null&&lr(le.formMethod)&&le.formAction===h.location.pathname+h.location.search&&(me=lt.Replace);let it=H&&"preventScrollReset"in H?H.preventScrollReset===!0:void 0,xe=Bn({currentLocation:ve,nextLocation:he,historyAction:me});if(xe){Ct(xe,{state:"blocked",location:he,proceed(){Ct(xe,{state:"proceeding",proceed:void 0,reset:void 0,location:he}),M(W,H)},reset(){Ne(xe),ee({blockers:new Map(h.blockers)})}});return}return await K(me,he,{submission:le,pendingError:ie,preventScrollReset:it,replace:H&&H.replace})}function oe(){if(Ue(),ee({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){K(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}K(g||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function K(W,H,G){w&&w.abort(),w=null,g=W,C=(G&&G.startUninterruptedRevalidation)===!0,Nt(h.location,h.matches),x=(G&&G.preventScrollReset)===!0;let le=G&&G.overrideNavigation,ie=Ra(t,H,e.basename);if(!ie){let je=Rr(404,{pathname:H.pathname}),{matches:Bt,route:gt}=Tv(t);$t(),ue(H,{matches:Bt,loaderData:{},errors:{[gt.id]:je}});return}if(JP(h.location,H)&&!(G&&G.submission&&lr(G.submission.formMethod))){ue(H,{matches:ie});return}w=new AbortController;let ve=wa(e.history,H,w.signal,G&&G.submission),he,ye;if(G&&G.pendingError)ye={[wi(ie).route.id]:G.pendingError};else if(G&&G.submission&&lr(G.submission.formMethod)){let je=await O(ve,H,G.submission,ie,{replace:G.replace});if(je.shortCircuited)return;he=je.pendingActionData,ye=je.pendingActionError,le=Be({state:"loading",location:H},G.submission),ve=new Request(ve.url,{signal:ve.signal})}let{shortCircuited:me,loaderData:it,errors:xe}=await B(ve,H,ie,le,G&&G.submission,G&&G.replace,he,ye);me||(w=null,ue(H,Be({matches:ie},he?{actionData:he}:{},{loaderData:it,errors:xe})))}async function O(W,H,G,le,ie){Ue();let ve=Be({state:"submitting",location:H},G);ee({navigation:ve});let he,ye=Av(le,H);if(!ye.route.action)he={type:wt.error,error:Rr(405,{method:W.method,pathname:H.pathname,routeId:ye.route.id})};else if(he=await xa("action",W,ye,le,_.basename),W.signal.aborted)return{shortCircuited:!0};if(Ti(he)){let me;return ie&&ie.replace!=null?me=ie.replace:me=he.location===h.location.pathname+h.location.search,await ne(h,he,{submission:G,replace:me}),{shortCircuited:!0}}if(Za(he)){let me=wi(le,ye.route.id);return(ie&&ie.replace)!==!0&&(g=lt.Push),{pendingActionData:{},pendingActionError:{[me.route.id]:he.error}}}if(zo(he))throw Rr(400,{type:"defer-action"});return{pendingActionData:{[ye.route.id]:he.data}}}async function B(W,H,G,le,ie,ve,he,ye){let me=le;me||(me=Be({state:"loading",location:H,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie));let it=ie||(me.formMethod&&me.formAction&&me.formData&&me.formEncType?{formMethod:me.formMethod,formAction:me.formAction,formData:me.formData,formEncType:me.formEncType}:void 0),[xe,je]=Pv(e.history,h,G,it,H,y,b,S,he,ye,V);if($t(ht=>!(G&&G.some(rn=>rn.route.id===ht))||xe&&xe.some(rn=>rn.route.id===ht)),xe.length===0&&je.length===0)return ue(H,Be({matches:G,loaderData:{},errors:ye||null},he?{actionData:he}:{})),{shortCircuited:!0};if(!C){je.forEach(rn=>{let er=h.fetchers.get(rn.key),Xo={state:"loading",data:er&&er.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(rn.key,Xo)});let ht=he||h.actionData;ee(Be({navigation:me},ht?Object.keys(ht).length===0?{actionData:null}:{actionData:ht}:{},je.length>0?{fetchers:new Map(h.fetchers)}:{}))}I=++z,je.forEach(ht=>P.set(ht.key,w));let{results:Bt,loaderResults:gt,fetcherResults:po}=await se(h.matches,G,xe,je,W);if(W.signal.aborted)return{shortCircuited:!0};je.forEach(ht=>P.delete(ht.key));let Qo=Lv(Bt);if(Qo)return await ne(h,Qo,{replace:ve}),{shortCircuited:!0};let{loaderData:ho,errors:Yn}=Ev(h,G,xe,gt,ye,je,po,U);U.forEach((ht,rn)=>{ht.subscribe(er=>{(er||ht.done)&&U.delete(rn)})}),Te();let Go=Kt(I);return Be({loaderData:ho,errors:Yn},Go||je.length>0?{fetchers:new Map(h.fetchers)}:{})}function A(W){return h.fetchers.get(W)||HP}function Q(W,H,G,le){if(VP)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");P.has(W)&&Ee(W);let ie=Ra(t,G,e.basename);if(!ie){We(W,H,Rr(404,{pathname:G}));return}let{path:ve,submission:he}=Sv(G,le,!0),ye=Av(ie,ve);if(x=(le&&le.preventScrollReset)===!0,he&&lr(he.formMethod)){te(W,H,ve,ye,ie,he);return}V.set(W,{routeId:H,path:ve,match:ye,matches:ie}),$(W,H,ve,ye,ie,he)}async function te(W,H,G,le,ie,ve){if(Ue(),V.delete(W),!le.route.action){let _n=Rr(405,{method:ve.formMethod,pathname:G,routeId:H});We(W,H,_n);return}let he=h.fetchers.get(W),ye=Be({state:"submitting"},ve,{data:he&&he.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(W,ye),ee({fetchers:new Map(h.fetchers)});let me=new AbortController,it=wa(e.history,G,me.signal,ve);P.set(W,me);let xe=await xa("action",it,le,ie,_.basename);if(it.signal.aborted){P.get(W)===me&&P.delete(W);return}if(Ti(xe)){P.delete(W),j.add(W);let _n=Be({state:"loading"},ve,{data:void 0," _hasFetcherDoneAnything ":!0});return h.fetchers.set(W,_n),ee({fetchers:new Map(h.fetchers)}),ne(h,xe,{isFetchActionRedirect:!0})}if(Za(xe)){We(W,H,xe.error);return}if(zo(xe))throw Rr(400,{type:"defer-action"});let je=h.navigation.location||h.location,Bt=wa(e.history,je,me.signal),gt=h.navigation.state!=="idle"?Ra(t,h.navigation.location,e.basename):h.matches;ke(gt,"Didn't find any matches after fetcher action");let po=++z;D.set(W,po);let Qo=Be({state:"loading",data:xe.data},ve,{" _hasFetcherDoneAnything ":!0});h.fetchers.set(W,Qo);let[ho,Yn]=Pv(e.history,h,gt,ve,je,y,b,S,{[le.route.id]:xe.data},void 0,V);Yn.filter(_n=>_n.key!==W).forEach(_n=>{let ea=_n.key,Rs=h.fetchers.get(ea),Ac={state:"loading",data:Rs&&Rs.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(ea,Ac),P.set(ea,me)}),ee({fetchers:new Map(h.fetchers)});let{results:Go,loaderResults:ht,fetcherResults:rn}=await se(h.matches,gt,ho,Yn,Bt);if(me.signal.aborted)return;D.delete(W),P.delete(W),Yn.forEach(_n=>P.delete(_n.key));let er=Lv(Go);if(er)return ne(h,er);let{loaderData:Xo,errors:Ji}=Ev(h,h.matches,ho,ht,void 0,Yn,rn,U),Rc={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(W,Rc);let Yi=Kt(po);h.navigation.state==="loading"&&po>I?(ke(g,"Expected pending action"),w&&w.abort(),ue(h.navigation.location,{matches:gt,loaderData:Xo,errors:Ji,fetchers:new Map(h.fetchers)})):(ee(Be({errors:Ji,loaderData:Ov(h.loaderData,Xo,gt,Ji)},Yi?{fetchers:new Map(h.fetchers)}:{})),y=!1)}async function $(W,H,G,le,ie,ve){let he=h.fetchers.get(W),ye=Be({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ve,{data:he&&he.data," _hasFetcherDoneAnything ":!0});h.fetchers.set(W,ye),ee({fetchers:new Map(h.fetchers)});let me=new AbortController,it=wa(e.history,G,me.signal);P.set(W,me);let xe=await xa("loader",it,le,ie,_.basename);if(zo(xe)&&(xe=await d1(xe,it.signal,!0)||xe),P.get(W)===me&&P.delete(W),it.signal.aborted)return;if(Ti(xe)){await ne(h,xe);return}if(Za(xe)){let Bt=wi(h.matches,H);h.fetchers.delete(W),ee({fetchers:new Map(h.fetchers),errors:{[Bt.route.id]:xe.error}});return}ke(!zo(xe),"Unhandled fetcher deferred data");let je={state:"idle",data:xe.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(W,je),ee({fetchers:new Map(h.fetchers)})}async function ne(W,H,G){var le;let{submission:ie,replace:ve,isFetchActionRedirect:he}=G===void 0?{}:G;H.revalidate&&(y=!0);let ye=ds(W.location,H.location,Be({_isRedirect:!0},he?{_isFetchActionRedirect:!0}:{}));if(ke(ye,"Expected a location on the redirect navigation"),a1.test(H.location)&&s1&&typeof((le=window)==null?void 0:le.location)<"u"){let gt=e.history.createURL(H.location).origin;if(window.location.origin!==gt){ve?window.location.replace(H.location):window.location.assign(H.location);return}}w=null;let me=ve===!0?lt.Replace:lt.Push,{formMethod:it,formAction:xe,formEncType:je,formData:Bt}=W.navigation;!ie&&it&&xe&&Bt&&je&&(ie={formMethod:it,formAction:xe,formEncType:je,formData:Bt}),WP.has(H.status)&&ie&&lr(ie.formMethod)?await K(me,ye,{submission:Be({},ie,{formAction:H.location}),preventScrollReset:x}):await K(me,ye,{overrideNavigation:{state:"loading",location:ye,formMethod:ie?ie.formMethod:void 0,formAction:ie?ie.formAction:void 0,formEncType:ie?ie.formEncType:void 0,formData:ie?ie.formData:void 0},preventScrollReset:x})}async function se(W,H,G,le,ie){let ve=await Promise.all([...G.map(me=>xa("loader",ie,me,H,_.basename)),...le.map(me=>xa("loader",wa(e.history,me.path,ie.signal),me.match,me.matches,_.basename))]),he=ve.slice(0,G.length),ye=ve.slice(G.length);return await Promise.all([zv(W,G,he,ie.signal,!1,h.loaderData),zv(W,le.map(me=>me.match),ye,ie.signal,!0)]),{results:ve,loaderResults:he,fetcherResults:ye}}function Ue(){y=!0,b.push(...$t()),V.forEach((W,H)=>{P.has(H)&&(S.push(H),Ee(H))})}function We(W,H,G){let le=wi(h.matches,H);Re(W),ee({errors:{[le.route.id]:G},fetchers:new Map(h.fetchers)})}function Re(W){P.has(W)&&Ee(W),V.delete(W),D.delete(W),j.delete(W),h.fetchers.delete(W)}function Ee(W){let H=P.get(W);ke(H,"Expected fetch controller: "+W),H.abort(),P.delete(W)}function qe(W){for(let H of W){let le={state:"idle",data:A(H).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};h.fetchers.set(H,le)}}function Te(){let W=[];for(let H of j){let G=h.fetchers.get(H);ke(G,"Expected fetcher: "+H),G.state==="loading"&&(j.delete(H),W.push(H))}qe(W)}function Kt(W){let H=[];for(let[G,le]of D)if(le<W){let ie=h.fetchers.get(G);ke(ie,"Expected fetcher: "+G),ie.state==="loading"&&(Ee(G),D.delete(G),H.push(G))}return qe(H),H.length>0}function Ut(W,H){let G=h.blockers.get(W)||kv;return R.get(W)!==H&&R.set(W,H),G}function Ne(W){h.blockers.delete(W),R.delete(W)}function Ct(W,H){let G=h.blockers.get(W)||kv;ke(G.state==="unblocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="blocked"||G.state==="blocked"&&H.state==="proceeding"||G.state==="blocked"&&H.state==="unblocked"||G.state==="proceeding"&&H.state==="unblocked","Invalid blocker state transition: "+G.state+" -> "+H.state),h.blockers.set(W,H),ee({blockers:new Map(h.blockers)})}function Bn(W){let{currentLocation:H,nextLocation:G,historyAction:le}=W;if(R.size===0)return;R.size>1&&fs(!1,"A router only supports one blocker at a time");let ie=Array.from(R.entries()),[ve,he]=ie[ie.length-1],ye=h.blockers.get(ve);if(!(ye&&ye.state==="proceeding")&&he({currentLocation:H,nextLocation:G,historyAction:le}))return ve}function $t(W){let H=[];return U.forEach((G,le)=>{(!W||W(le))&&(G.cancel(),H.push(le),U.delete(le))}),H}function Jn(W,H,G){if(i=W,l=H,a=G||(le=>le.key),!u&&h.navigation===Nd){u=!0;let le=Sr(h.location,h.matches);le!=null&&ee({restoreScrollPosition:le})}return()=>{i=null,l=null,a=null}}function Nt(W,H){if(i&&a&&l){let G=H.map(ie=>Rv(ie,h.loaderData)),le=a(W,G)||W.key;i[le]=l()}}function Sr(W,H){if(i&&a&&l){let G=H.map(ve=>Rv(ve,h.loaderData)),le=a(W,G)||W.key,ie=i[le];if(typeof ie=="number")return ie}return null}return _={get basename(){return e.basename},get state(){return h},get routes(){return t},initialize:_e,subscribe:de,enableScrollRestoration:Jn,navigate:M,fetch:Q,revalidate:oe,createHref:W=>e.history.createHref(W),encodeLocation:W=>e.history.encodeLocation(W),getFetcher:A,deleteFetcher:Re,dispose:re,getBlocker:Ut,deleteBlocker:Ne,_internalFetchControllers:P,_internalActiveDeferreds:U},_}function KP(e){return e!=null&&"formData"in e}function Sv(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:Zo(e);if(!t||!KP(t))return{path:r};if(t.formMethod&&!eC(t.formMethod))return{path:r,error:Rr(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:c1(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},lr(i.formMethod)))return{path:r,submission:i};let a=wr(r),l=u1(t.formData);return n&&a.search&&f1(a.search)&&l.append("index",""),a.search="?"+l,{path:Zo(a),submission:i}}function QP(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Pv(e,t,n,r,i,a,l,u,d,f,m){let _=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,h=e.createURL(t.location),g=e.createURL(i),x=a||h.toString()===g.toString()||h.search!==g.search,w=f?Object.keys(f)[0]:void 0,y=QP(n,w).filter((S,P)=>{if(S.route.loader==null)return!1;if(GP(t.loaderData,t.matches[P],S)||l.some(D=>D===S.route.id))return!0;let z=t.matches[P],I=S;return Cv(S,Be({currentUrl:h,currentParams:z.params,nextUrl:g,nextParams:I.params},r,{actionResult:_,defaultShouldRevalidate:x||l1(z,I)}))}),b=[];return m&&m.forEach((S,P)=>{if(n.some(z=>z.route.id===S.routeId))u.includes(P)?b.push(Be({key:P},S)):Cv(S.match,Be({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:n[n.length-1].params},r,{actionResult:_,defaultShouldRevalidate:x}))&&b.push(Be({key:P},S));else return}),[y,b]}function GP(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function l1(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Cv(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function xa(e,t,n,r,i,a,l,u){i===void 0&&(i="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let d,f,m,_=new Promise((g,x)=>m=x),h=()=>m();t.signal.addEventListener("abort",h);try{let g=n.route[e];ke(g,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),f=await Promise.race([g({request:t,params:n.params,context:u}),_]),ke(f!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(g){d=wt.error,f=g}finally{t.signal.removeEventListener("abort",h)}if(YP(f)){let g=f.status;if(ZP.has(g)){let C=f.headers.get("Location");if(ke(C,"Redirects returned/thrown from loaders/actions must have a Location header"),a1.test(C)){if(!a){let y=new URL(t.url),b=C.startsWith("//")?new URL(y.protocol+C):new URL(C);b.origin===y.origin&&(C=b.pathname+b.search+b.hash)}}else{let y=r.slice(0,r.indexOf(n)+1),b=Ih(y).map(P=>P.pathnameBase),S=r1(C,b,new URL(t.url).pathname);if(ke(Zo(S),"Unable to resolve redirect location: "+C),i){let P=S.pathname;S.pathname=P==="/"?i:Gr([i,P])}C=Zo(S)}if(a)throw f.headers.set("Location",C),f;return{type:wt.redirect,status:g,location:C,revalidate:f.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||wt.data,response:f};let x,w=f.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?x=await f.json():x=await f.text(),d===wt.error?{type:d,error:new Mh(g,f.statusText,x),headers:f.headers}:{type:wt.data,data:x,statusCode:f.status,headers:f.headers}}return d===wt.error?{type:d,error:f}:f instanceof MP?{type:wt.deferred,deferredData:f}:{type:wt.data,data:f}}function wa(e,t,n,r){let i=e.createURL(c1(t)).toString(),a={signal:n};if(r&&lr(r.formMethod)){let{formMethod:l,formEncType:u,formData:d}=r;a.method=l.toUpperCase(),a.body=u==="application/x-www-form-urlencoded"?u1(d):d}return new Request(i,a)}function u1(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function XP(e,t,n,r,i){let a={},l=null,u,d=!1,f={};return n.forEach((m,_)=>{let h=t[_].route.id;if(ke(!Ti(m),"Cannot handle redirect results in processLoaderData"),Za(m)){let g=wi(e,h),x=m.error;r&&(x=Object.values(r)[0],r=void 0),l=l||{},l[g.route.id]==null&&(l[g.route.id]=x),a[h]=void 0,d||(d=!0,u=o1(m.error)?m.error.status:500),m.headers&&(f[h]=m.headers)}else zo(m)?(i.set(h,m.deferredData),a[h]=m.deferredData.data):a[h]=m.data,m.statusCode!=null&&m.statusCode!==200&&!d&&(u=m.statusCode),m.headers&&(f[h]=m.headers)}),r&&(l=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:l,statusCode:u||200,loaderHeaders:f}}function Ev(e,t,n,r,i,a,l,u){let{loaderData:d,errors:f}=XP(t,n,r,i,u);for(let m=0;m<a.length;m++){let{key:_,match:h}=a[m];ke(l!==void 0&&l[m]!==void 0,"Did not find corresponding fetcher result");let g=l[m];if(Za(g)){let x=wi(e.matches,h.route.id);f&&f[x.route.id]||(f=Be({},f,{[x.route.id]:g.error})),e.fetchers.delete(_)}else if(Ti(g))ke(!1,"Unhandled fetcher revalidation redirect");else if(zo(g))ke(!1,"Unhandled fetcher deferred data");else{let x={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(_,x)}}return{loaderData:d,errors:f}}function Ov(e,t,n,r){let i=Be({},t);for(let a of n){let l=a.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function wi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Tv(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Rr(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(u="defer() is not supported in actions")):e===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",u='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Mh(e||500,l,new Error(u),!0)}function Lv(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Ti(n))return n}}function c1(e){let t=typeof e=="string"?wr(e):e;return Zo(Be({},t,{hash:""}))}function JP(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function zo(e){return e.type===wt.deferred}function Za(e){return e.type===wt.error}function Ti(e){return(e&&e.type)===wt.redirect}function YP(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function eC(e){return $P.has(e)}function lr(e){return jP.has(e)}async function zv(e,t,n,r,i,a){for(let l=0;l<n.length;l++){let u=n[l],d=t[l],f=e.find(_=>_.route.id===d.route.id),m=f!=null&&!l1(f,d)&&(a&&a[d.route.id])!==void 0;zo(u)&&(i||m)&&await d1(u,r,i).then(_=>{_&&(n[l]=_||n[l])})}}async function d1(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:wt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:wt.error,error:i}}return{type:wt.data,data:e.deferredData.data}}}function f1(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Rv(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Av(e,t){let n=typeof t=="string"?wr(t).search:t.search;if(e[e.length-1].route.index&&f1(n||""))return e[e.length-1];let r=Ih(e);return r[r.length-1]}/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},du.apply(this,arguments)}function tC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const nC=typeof Object.is=="function"?Object.is:tC,{useState:rC,useEffect:oC,useLayoutEffect:iC,useDebugValue:aC}=qa;function sC(e,t,n){const r=t(),[{inst:i},a]=rC({inst:{value:r,getSnapshot:t}});return iC(()=>{i.value=r,i.getSnapshot=t,Bd(i)&&a({inst:i})},[e,r,t]),oC(()=>(Bd(i)&&a({inst:i}),e(()=>{Bd(i)&&a({inst:i})})),[e]),aC(r),r}function Bd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!nC(n,r)}catch{return!0}}function lC(e,t,n){return t()}const uC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cC=!uC,dC=cC?lC:sC,fC="useSyncExternalStore"in qa?(e=>e.useSyncExternalStore)(qa):dC,Dh=T.createContext(null),Fh=T.createContext(null),jh=T.createContext(null),xc=T.createContext(null),Ps=T.createContext({outlet:null,matches:[]}),p1=T.createContext(null);function wc(){return T.useContext(xc)!=null}function h1(){return wc()||ke(!1),T.useContext(xc).location}function pC(){wc()||ke(!1);let{basename:e,navigator:t}=T.useContext(jh),{matches:n}=T.useContext(Ps),{pathname:r}=h1(),i=JSON.stringify(Ih(n).map(u=>u.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=r1(u,JSON.parse(i),r,d.relative==="path");e!=="/"&&(f.pathname=f.pathname==="/"?e:Gr([e,f.pathname])),(d.replace?t.replace:t.push)(f,d.state,d)},[e,t,i,r])}function hC(e,t){wc()||ke(!1);let{navigator:n}=T.useContext(jh),r=T.useContext(Fh),{matches:i}=T.useContext(Ps),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let d=h1(),f;if(t){var m;let w=typeof t=="string"?wr(t):t;u==="/"||(m=w.pathname)!=null&&m.startsWith(u)||ke(!1),f=w}else f=d;let _=f.pathname||"/",h=u==="/"?_:_.slice(u.length)||"/",g=Ra(e,{pathname:h}),x=gC(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Gr([u,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?u:Gr([u,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&x?T.createElement(xc.Provider,{value:{location:du({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:lt.Pop}},x):x}function mC(){let e=wC(),t=o1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class _C extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(Ps.Provider,{value:this.props.routeContext},T.createElement(p1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vC(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(Dh);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(Ps.Provider,{value:t},r)}function gC(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n?.errors;if(i!=null){let a=r.findIndex(l=>l.route.id&&i?.[l.route.id]);a>=0||ke(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,l,u)=>{let d=l.route.id?i?.[l.route.id]:null,f=n?l.route.errorElement||T.createElement(mC,null):null,m=t.concat(r.slice(0,u+1)),_=()=>T.createElement(vC,{match:l,routeContext:{outlet:a,matches:m}},d?f:l.route.element!==void 0?l.route.element:a);return n&&(l.route.errorElement||u===0)?T.createElement(_C,{location:n.location,component:f,error:d,children:_(),routeContext:{outlet:null,matches:m}}):_()},null)}var Nv;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Nv||(Nv={}));var fu;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(fu||(fu={}));function yC(e){let t=T.useContext(Fh);return t||ke(!1),t}function bC(e){let t=T.useContext(Ps);return t||ke(!1),t}function xC(e){let t=bC(),n=t.matches[t.matches.length-1];return n.route.id||ke(!1),n.route.id}function wC(){var e;let t=T.useContext(p1),n=yC(fu.UseRouteError),r=xC(fu.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function kC(e){let{fallbackElement:t,router:n}=e,r=fC(n.subscribe,()=>n.state,()=>n.state),i=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d?.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d?.preventScrollReset})}),[n]),a=n.basename||"/";return T.createElement(T.Fragment,null,T.createElement(Dh.Provider,{value:{router:n,navigator:i,static:!1,basename:a}},T.createElement(Fh.Provider,{value:r},T.createElement(PC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?T.createElement(CC,null):t))),null)}function SC(e){ke(!1)}function PC(e){let{basename:t="/",children:n=null,location:r,navigationType:i=lt.Pop,navigator:a,static:l=!1}=e;wc()&&ke(!1);let u=t.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:u,navigator:a,static:l}),[u,a,l]);typeof r=="string"&&(r=wr(r));let{pathname:f="/",search:m="",hash:_="",state:h=null,key:g="default"}=r,x=T.useMemo(()=>{let w=n1(f,u);return w==null?null:{pathname:w,search:m,hash:_,state:h,key:g}},[u,f,m,_,h,g]);return x==null?null:T.createElement(jh.Provider,{value:d},T.createElement(xc.Provider,{children:n,value:{location:x,navigationType:i}}))}function CC(e){let{children:t,location:n}=e,r=T.useContext(Dh),i=r&&!t?r.router.routes:np(t);return hC(i,n)}var Bv;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Bv||(Bv={}));new Promise(()=>{});function np(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,np(r.props.children,t));return}r.type!==SC&&ke(!1),!r.props.index||!r.props.children||ke(!1);let a=[...t,i],l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(l.children=np(r.props.children,a)),n.push(l)}),n}function m1(e){return e.map(t=>{let n=du({},t);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=m1(n.children)),n})}/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rp(){return rp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rp.apply(this,arguments)}function EC(e,t){return qP({basename:t?.basename,history:hP({window:t?.window}),hydrationData:t?.hydrationData||OC(),routes:m1(e)}).initialize()}function OC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=rp({},t,{errors:TC(t.errors)})),t}function TC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mh(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}var Iv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Iv||(Iv={}));var Mv;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Mv||(Mv={}));function Tn(e){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tn(e)}function LC(e,t){if(Tn(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _1(e){var t=LC(e,"string");return Tn(t)==="symbol"?t:String(t)}function Rn(e,t,n){return t=_1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zC(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var Dv={};function op(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];typeof t[0]=="string"&&Dv[t[0]]||(typeof t[0]=="string"&&(Dv[t[0]]=new Date),zC.apply(void 0,t))}function Fv(e,t,n){e.loadNamespaces(t,function(){if(e.isInitialized)n();else{var r=function i(){setTimeout(function(){e.off("initialized",i)},0),n()};e.on("initialized",r)}})}function RC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.languages[0],i=t.options?t.options.fallbackLng:!1,a=t.languages[t.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var l=function(d,f){var m=t.services.backendConnector.state["".concat(d,"|").concat(f)];return m===-1||m===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!l(t.isLanguageChangingTo,e)?!1:!!(t.hasResourceBundle(r,e)||!t.services.backendConnector.backend||t.options.resources&&!t.options.partialBundledLanguages||l(r,e)&&(!i||l(a,e)))}function AC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t.languages||!t.languages.length)return op("i18n.languages were undefined or empty",t.languages),!0;var r=t.options.ignoreJSONStructure!==void 0;return r?t.hasLoadedNamespace(e,{precheck:function(a,l){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!l(a.isLanguageChangingTo,e))return!1}}):RC(e,t,n)}var NC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,BC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},IC=function(t){return BC[t]},MC=function(t){return t.replace(NC,IC)};function jv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Uv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ip={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:MC};function DC(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ip=Uv(Uv({},ip),e)}function FC(){return ip}var v1;function jC(e){v1=e}function UC(){return v1}function An(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_1(r.key),r)}}function Nn(e,t,n){return t&&$v(e.prototype,t),n&&$v(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var $C={type:"3rdParty",init:function(t){DC(t.options.react),jC(t)}},ZC=T.createContext(),WC=function(){function e(){An(this,e),this.usedNamespaces={}}return Nn(e,[{key:"addUsedNamespaces",value:function(n){var r=this;n.forEach(function(i){r.usedNamespaces[i]||(r.usedNamespaces[i]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function g1(e){if(Array.isArray(e))return e}function HC(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,a,l,u=[],d=!0,f=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);d=!0);}catch(m){f=!0,i=m}finally{try{if(!d&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(f)throw i}}return u}}function Zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y1(e,t){if(e){if(typeof e=="string")return Zv(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zv(e,t)}}function b1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function VC(e,t){return g1(e)||HC(e,t)||y1(e,t)||b1()}function Wv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Id(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var qC=function(t,n){var r=T.useRef();return T.useEffect(function(){r.current=n?r.current:t},[t,n]),r.current};function Uh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.i18n,r=T.useContext(ZC)||{},i=r.i18n,a=r.defaultNS,l=n||i||UC();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new WC),!l){op("You will need to pass in an i18next instance by using initReactI18next");var u=function(V){return Array.isArray(V)?V[V.length-1]:V},d=[u,{},!1];return d.t=u,d.i18n={},d.ready=!1,d}l.options.react&&l.options.react.wait!==void 0&&op("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=Id(Id(Id({},FC()),l.options.react),t),m=f.useSuspense,_=f.keyPrefix,h=e||a||l.options&&l.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(h);var g=(l.isInitialized||l.initializedStoreOnce)&&h.every(function(j){return AC(j,l,f)});function x(){return l.getFixedT(null,f.nsMode==="fallback"?h:h[0],_)}var w=T.useState(x),C=VC(w,2),y=C[0],b=C[1],S=h.join(),P=qC(S),z=T.useRef(!0);T.useEffect(function(){var j=f.bindI18n,V=f.bindI18nStore;z.current=!0,!g&&!m&&Fv(l,h,function(){z.current&&b(x)}),g&&P&&P!==S&&z.current&&b(x);function U(){z.current&&b(x)}return j&&l&&l.on(j,U),V&&l&&l.store.on(V,U),function(){z.current=!1,j&&l&&j.split(" ").forEach(function(R){return l.off(R,U)}),V&&l&&V.split(" ").forEach(function(R){return l.store.off(R,U)})}},[l,S]);var I=T.useRef(!0);T.useEffect(function(){z.current&&!I.current&&b(x),I.current=!1},[l,_]);var D=[y,l,g];if(D.t=y,D.i18n=l,D.ready=g,g||!g&&!m)return D;throw new Promise(function(j){Fv(l,h,function(){j()})})}function pu(e,t){return pu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pu(e,t)}function Cs(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,pu(e,t)}var Es=function(){function e(){this.listeners=[]}var t=e.prototype;return t.subscribe=function(r){var i=this,a=r||function(){};return this.listeners.push(a),this.onSubscribe(),function(){i.listeners=i.listeners.filter(function(l){return l!==a}),i.onUnsubscribe()}},t.hasListeners=function(){return this.listeners.length>0},t.onSubscribe=function(){},t.onUnsubscribe=function(){},e}(),hu=typeof window>"u";function Lt(){}function KC(e,t){return typeof e=="function"?e(t):e}function ap(e){return typeof e=="number"&&e>=0&&e!==1/0}function mu(e){return Array.isArray(e)?e:[e]}function x1(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Rl(e,t,n){return kc(e)?typeof t=="function"?Ie({},n,{queryKey:e,queryFn:t}):Ie({},t,{queryKey:e}):e}function Br(e,t,n){return kc(e)?[Ie({},t,{queryKey:e}),n]:[e||{},t]}function QC(e,t){if(e===!0&&t===!0||e==null&&t==null)return"all";if(e===!1&&t===!1)return"none";var n=e??!t;return n?"active":"inactive"}function Hv(e,t){var n=e.active,r=e.exact,i=e.fetching,a=e.inactive,l=e.predicate,u=e.queryKey,d=e.stale;if(kc(u)){if(r){if(t.queryHash!==$h(u,t.options))return!1}else if(!_u(t.queryKey,u))return!1}var f=QC(n,a);if(f==="none")return!1;if(f!=="all"){var m=t.isActive();if(f==="active"&&!m||f==="inactive"&&m)return!1}return!(typeof d=="boolean"&&t.isStale()!==d||typeof i=="boolean"&&t.isFetching()!==i||l&&!l(t))}function Vv(e,t){var n=e.exact,r=e.fetching,i=e.predicate,a=e.mutationKey;if(kc(a)){if(!t.options.mutationKey)return!1;if(n){if(Ro(t.options.mutationKey)!==Ro(a))return!1}else if(!_u(t.options.mutationKey,a))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function $h(e,t){var n=t?.queryKeyHashFn||Ro;return n(e)}function Ro(e){var t=mu(e);return GC(t)}function GC(e){return JSON.stringify(e,function(t,n){return sp(n)?Object.keys(n).sort().reduce(function(r,i){return r[i]=n[i],r},{}):n})}function _u(e,t){return w1(mu(e),mu(t))}function w1(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(function(n){return!w1(e[n],t[n])}):!1}function vu(e,t){if(e===t)return e;var n=Array.isArray(e)&&Array.isArray(t);if(n||sp(e)&&sp(t)){for(var r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},u=0,d=0;d<a;d++){var f=n?d:i[d];l[f]=vu(e[f],t[f]),l[f]===e[f]&&u++}return r===a&&u===r?e:l}return t}function XC(e,t){if(e&&!t||t&&!e)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}function sp(e){if(!qv(e))return!1;var t=e.constructor;if(typeof t>"u")return!0;var n=t.prototype;return!(!qv(n)||!n.hasOwnProperty("isPrototypeOf"))}function qv(e){return Object.prototype.toString.call(e)==="[object Object]"}function kc(e){return typeof e=="string"||Array.isArray(e)}function JC(e){return new Promise(function(t){setTimeout(t,e)})}function Kv(e){Promise.resolve().then(e).catch(function(t){return setTimeout(function(){throw t})})}function k1(){if(typeof AbortController=="function")return new AbortController}var YC=function(e){Cs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!hu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",l,!1),function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("focus",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setFocused(u):l.onFocus()})},n.setFocused=function(i){this.focused=i,i&&this.onFocus()},n.onFocus=function(){this.listeners.forEach(function(i){i()})},n.isFocused=function(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)},t}(Es),Wa=new YC,eE=function(e){Cs(t,e);function t(){var r;return r=e.call(this)||this,r.setup=function(i){var a;if(!hu&&((a=window)!=null&&a.addEventListener)){var l=function(){return i()};return window.addEventListener("online",l,!1),window.addEventListener("offline",l,!1),function(){window.removeEventListener("online",l),window.removeEventListener("offline",l)}}},r}var n=t.prototype;return n.onSubscribe=function(){this.cleanup||this.setEventListener(this.setup)},n.onUnsubscribe=function(){if(!this.hasListeners()){var i;(i=this.cleanup)==null||i.call(this),this.cleanup=void 0}},n.setEventListener=function(i){var a,l=this;this.setup=i,(a=this.cleanup)==null||a.call(this),this.cleanup=i(function(u){typeof u=="boolean"?l.setOnline(u):l.onOnline()})},n.setOnline=function(i){this.online=i,i&&this.onOnline()},n.onOnline=function(){this.listeners.forEach(function(i){i()})},n.isOnline=function(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine},t}(Es),Al=new eE;function tE(e){return Math.min(1e3*Math.pow(2,e),3e4)}function gu(e){return typeof e?.cancel=="function"}var S1=function(t){this.revert=t?.revert,this.silent=t?.silent};function Nl(e){return e instanceof S1}var P1=function(t){var n=this,r=!1,i,a,l,u;this.abort=t.abort,this.cancel=function(h){return i?.(h)},this.cancelRetry=function(){r=!0},this.continueRetry=function(){r=!1},this.continue=function(){return a?.()},this.failureCount=0,this.isPaused=!1,this.isResolved=!1,this.isTransportCancelable=!1,this.promise=new Promise(function(h,g){l=h,u=g});var d=function(g){n.isResolved||(n.isResolved=!0,t.onSuccess==null||t.onSuccess(g),a?.(),l(g))},f=function(g){n.isResolved||(n.isResolved=!0,t.onError==null||t.onError(g),a?.(),u(g))},m=function(){return new Promise(function(g){a=g,n.isPaused=!0,t.onPause==null||t.onPause()}).then(function(){a=void 0,n.isPaused=!1,t.onContinue==null||t.onContinue()})},_=function h(){if(!n.isResolved){var g;try{g=t.fn()}catch(x){g=Promise.reject(x)}i=function(w){if(!n.isResolved&&(f(new S1(w)),n.abort==null||n.abort(),gu(g)))try{g.cancel()}catch{}},n.isTransportCancelable=gu(g),Promise.resolve(g).then(d).catch(function(x){var w,C;if(!n.isResolved){var y=(w=t.retry)!=null?w:3,b=(C=t.retryDelay)!=null?C:tE,S=typeof b=="function"?b(n.failureCount,x):b,P=y===!0||typeof y=="number"&&n.failureCount<y||typeof y=="function"&&y(n.failureCount,x);if(r||!P){f(x);return}n.failureCount++,t.onFail==null||t.onFail(n.failureCount,x),JC(S).then(function(){if(!Wa.isFocused()||!Al.isOnline())return m()}).then(function(){r?f(x):h()})}})}};_()},nE=function(){function e(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var t=e.prototype;return t.batch=function(r){var i;this.transactions++;try{i=r()}finally{this.transactions--,this.transactions||this.flush()}return i},t.schedule=function(r){var i=this;this.transactions?this.queue.push(r):Kv(function(){i.notifyFn(r)})},t.batchCalls=function(r){var i=this;return function(){for(var a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];i.schedule(function(){r.apply(void 0,l)})}},t.flush=function(){var r=this,i=this.queue;this.queue=[],i.length&&Kv(function(){r.batchNotifyFn(function(){i.forEach(function(a){r.notifyFn(a)})})})},t.setNotifyFunction=function(r){this.notifyFn=r},t.setBatchNotifyFunction=function(r){this.batchNotifyFn=r},e}(),tt=new nE,C1=console;function yu(){return C1}function rE(e){C1=e}var oE=function(){function e(n){this.abortSignalConsumed=!1,this.hadObservers=!1,this.defaultOptions=n.defaultOptions,this.setOptions(n.options),this.observers=[],this.cache=n.cache,this.queryKey=n.queryKey,this.queryHash=n.queryHash,this.initialState=n.state||this.getDefaultState(this.options),this.state=this.initialState,this.meta=n.meta,this.scheduleGc()}var t=e.prototype;return t.setOptions=function(r){var i;this.options=Ie({},this.defaultOptions,r),this.meta=r?.meta,this.cacheTime=Math.max(this.cacheTime||0,(i=this.options.cacheTime)!=null?i:5*60*1e3)},t.setDefaultOptions=function(r){this.defaultOptions=r},t.scheduleGc=function(){var r=this;this.clearGcTimeout(),ap(this.cacheTime)&&(this.gcTimeout=setTimeout(function(){r.optionalRemove()},this.cacheTime))},t.clearGcTimeout=function(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)},t.optionalRemove=function(){this.observers.length||(this.state.isFetching?this.hadObservers&&this.scheduleGc():this.cache.remove(this))},t.setData=function(r,i){var a,l,u=this.state.data,d=KC(r,u);return(a=(l=this.options).isDataEqual)!=null&&a.call(l,u,d)?d=u:this.options.structuralSharing!==!1&&(d=vu(u,d)),this.dispatch({data:d,type:"success",dataUpdatedAt:i?.updatedAt}),d},t.setState=function(r,i){this.dispatch({type:"setState",state:r,setStateOptions:i})},t.cancel=function(r){var i,a=this.promise;return(i=this.retryer)==null||i.cancel(r),a?a.then(Lt).catch(Lt):Promise.resolve()},t.destroy=function(){this.clearGcTimeout(),this.cancel({silent:!0})},t.reset=function(){this.destroy(),this.setState(this.initialState)},t.isActive=function(){return this.observers.some(function(r){return r.options.enabled!==!1})},t.isFetching=function(){return this.state.isFetching},t.isStale=function(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(function(r){return r.getCurrentResult().isStale})},t.isStaleByTime=function(r){return r===void 0&&(r=0),this.state.isInvalidated||!this.state.dataUpdatedAt||!x1(this.state.dataUpdatedAt,r)},t.onFocus=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnWindowFocus()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.onOnline=function(){var r,i=this.observers.find(function(a){return a.shouldFetchOnReconnect()});i&&i.refetch(),(r=this.retryer)==null||r.continue()},t.addObserver=function(r){this.observers.indexOf(r)===-1&&(this.observers.push(r),this.hadObservers=!0,this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:r}))},t.removeObserver=function(r){this.observers.indexOf(r)!==-1&&(this.observers=this.observers.filter(function(i){return i!==r}),this.observers.length||(this.retryer&&(this.retryer.isTransportCancelable||this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.cacheTime?this.scheduleGc():this.cache.remove(this)),this.cache.notify({type:"observerRemoved",query:this,observer:r}))},t.getObserversCount=function(){return this.observers.length},t.invalidate=function(){this.state.isInvalidated||this.dispatch({type:"invalidate"})},t.fetch=function(r,i){var a=this,l,u,d;if(this.state.isFetching){if(this.state.dataUpdatedAt&&i?.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var f;return(f=this.retryer)==null||f.continueRetry(),this.promise}}if(r&&this.setOptions(r),!this.options.queryFn){var m=this.observers.find(function(b){return b.options.queryFn});m&&this.setOptions(m.options)}var _=mu(this.queryKey),h=k1(),g={queryKey:_,pageParam:void 0,meta:this.meta};Object.defineProperty(g,"signal",{enumerable:!0,get:function(){if(h)return a.abortSignalConsumed=!0,h.signal}});var x=function(){return a.options.queryFn?(a.abortSignalConsumed=!1,a.options.queryFn(g)):Promise.reject("Missing queryFn")},w={fetchOptions:i,options:this.options,queryKey:_,state:this.state,fetchFn:x,meta:this.meta};if((l=this.options.behavior)!=null&&l.onFetch){var C;(C=this.options.behavior)==null||C.onFetch(w)}if(this.revertState=this.state,!this.state.isFetching||this.state.fetchMeta!==((u=w.fetchOptions)==null?void 0:u.meta)){var y;this.dispatch({type:"fetch",meta:(y=w.fetchOptions)==null?void 0:y.meta})}return this.retryer=new P1({fn:w.fetchFn,abort:h==null||(d=h.abort)==null?void 0:d.bind(h),onSuccess:function(S){a.setData(S),a.cache.config.onSuccess==null||a.cache.config.onSuccess(S,a),a.cacheTime===0&&a.optionalRemove()},onError:function(S){Nl(S)&&S.silent||a.dispatch({type:"error",error:S}),Nl(S)||(a.cache.config.onError==null||a.cache.config.onError(S,a),yu().error(S)),a.cacheTime===0&&a.optionalRemove()},onFail:function(){a.dispatch({type:"failed"})},onPause:function(){a.dispatch({type:"pause"})},onContinue:function(){a.dispatch({type:"continue"})},retry:w.options.retry,retryDelay:w.options.retryDelay}),this.promise=this.retryer.promise,this.promise},t.dispatch=function(r){var i=this;this.state=this.reducer(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onQueryUpdate(r)}),i.cache.notify({query:i,type:"queryUpdated",action:r})})},t.getDefaultState=function(r){var i=typeof r.initialData=="function"?r.initialData():r.initialData,a=typeof r.initialData<"u",l=a?typeof r.initialDataUpdatedAt=="function"?r.initialDataUpdatedAt():r.initialDataUpdatedAt:0,u=typeof i<"u";return{data:i,dataUpdateCount:0,dataUpdatedAt:u?l??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchMeta:null,isFetching:!1,isInvalidated:!1,isPaused:!1,status:u?"success":"idle"}},t.reducer=function(r,i){var a,l;switch(i.type){case"failed":return Ie({},r,{fetchFailureCount:r.fetchFailureCount+1});case"pause":return Ie({},r,{isPaused:!0});case"continue":return Ie({},r,{isPaused:!1});case"fetch":return Ie({},r,{fetchFailureCount:0,fetchMeta:(a=i.meta)!=null?a:null,isFetching:!0,isPaused:!1},!r.dataUpdatedAt&&{error:null,status:"loading"});case"success":return Ie({},r,{data:i.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(l=i.dataUpdatedAt)!=null?l:Date.now(),error:null,fetchFailureCount:0,isFetching:!1,isInvalidated:!1,isPaused:!1,status:"success"});case"error":var u=i.error;return Nl(u)&&u.revert&&this.revertState?Ie({},this.revertState):Ie({},r,{error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,isFetching:!1,isPaused:!1,status:"error"});case"invalidate":return Ie({},r,{isInvalidated:!0});case"setState":return Ie({},r,i.state);default:return r}},e}(),iE=function(e){Cs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.queries=[],i.queriesMap={},i}var n=t.prototype;return n.build=function(i,a,l){var u,d=a.queryKey,f=(u=a.queryHash)!=null?u:$h(d,a),m=this.get(f);return m||(m=new oE({cache:this,queryKey:d,queryHash:f,options:i.defaultQueryOptions(a),state:l,defaultOptions:i.getQueryDefaults(d),meta:a.meta}),this.add(m)),m},n.add=function(i){this.queriesMap[i.queryHash]||(this.queriesMap[i.queryHash]=i,this.queries.push(i),this.notify({type:"queryAdded",query:i}))},n.remove=function(i){var a=this.queriesMap[i.queryHash];a&&(i.destroy(),this.queries=this.queries.filter(function(l){return l!==i}),a===i&&delete this.queriesMap[i.queryHash],this.notify({type:"queryRemoved",query:i}))},n.clear=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){i.remove(a)})})},n.get=function(i){return this.queriesMap[i]},n.getAll=function(){return this.queries},n.find=function(i,a){var l=Br(i,a),u=l[0];return typeof u.exact>"u"&&(u.exact=!0),this.queries.find(function(d){return Hv(u,d)})},n.findAll=function(i,a){var l=Br(i,a),u=l[0];return Object.keys(u).length>0?this.queries.filter(function(d){return Hv(u,d)}):this.queries},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onFocus()})})},n.onOnline=function(){var i=this;tt.batch(function(){i.queries.forEach(function(a){a.onOnline()})})},t}(Es),aE=function(){function e(n){this.options=Ie({},n.defaultOptions,n.options),this.mutationId=n.mutationId,this.mutationCache=n.mutationCache,this.observers=[],this.state=n.state||sE(),this.meta=n.meta}var t=e.prototype;return t.setState=function(r){this.dispatch({type:"setState",state:r})},t.addObserver=function(r){this.observers.indexOf(r)===-1&&this.observers.push(r)},t.removeObserver=function(r){this.observers=this.observers.filter(function(i){return i!==r})},t.cancel=function(){return this.retryer?(this.retryer.cancel(),this.retryer.promise.then(Lt).catch(Lt)):Promise.resolve()},t.continue=function(){return this.retryer?(this.retryer.continue(),this.retryer.promise):this.execute()},t.execute=function(){var r=this,i,a=this.state.status==="loading",l=Promise.resolve();return a||(this.dispatch({type:"loading",variables:this.options.variables}),l=l.then(function(){r.mutationCache.config.onMutate==null||r.mutationCache.config.onMutate(r.state.variables,r)}).then(function(){return r.options.onMutate==null?void 0:r.options.onMutate(r.state.variables)}).then(function(u){u!==r.state.context&&r.dispatch({type:"loading",context:u,variables:r.state.variables})})),l.then(function(){return r.executeMutation()}).then(function(u){i=u,r.mutationCache.config.onSuccess==null||r.mutationCache.config.onSuccess(i,r.state.variables,r.state.context,r)}).then(function(){return r.options.onSuccess==null?void 0:r.options.onSuccess(i,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(i,null,r.state.variables,r.state.context)}).then(function(){return r.dispatch({type:"success",data:i}),i}).catch(function(u){return r.mutationCache.config.onError==null||r.mutationCache.config.onError(u,r.state.variables,r.state.context,r),yu().error(u),Promise.resolve().then(function(){return r.options.onError==null?void 0:r.options.onError(u,r.state.variables,r.state.context)}).then(function(){return r.options.onSettled==null?void 0:r.options.onSettled(void 0,u,r.state.variables,r.state.context)}).then(function(){throw r.dispatch({type:"error",error:u}),u})})},t.executeMutation=function(){var r=this,i;return this.retryer=new P1({fn:function(){return r.options.mutationFn?r.options.mutationFn(r.state.variables):Promise.reject("No mutationFn found")},onFail:function(){r.dispatch({type:"failed"})},onPause:function(){r.dispatch({type:"pause"})},onContinue:function(){r.dispatch({type:"continue"})},retry:(i=this.options.retry)!=null?i:0,retryDelay:this.options.retryDelay}),this.retryer.promise},t.dispatch=function(r){var i=this;this.state=lE(this.state,r),tt.batch(function(){i.observers.forEach(function(a){a.onMutationUpdate(r)}),i.mutationCache.notify(i)})},e}();function sE(){return{context:void 0,data:void 0,error:null,failureCount:0,isPaused:!1,status:"idle",variables:void 0}}function lE(e,t){switch(t.type){case"failed":return Ie({},e,{failureCount:e.failureCount+1});case"pause":return Ie({},e,{isPaused:!0});case"continue":return Ie({},e,{isPaused:!1});case"loading":return Ie({},e,{context:t.context,data:void 0,error:null,isPaused:!1,status:"loading",variables:t.variables});case"success":return Ie({},e,{data:t.data,error:null,status:"success",isPaused:!1});case"error":return Ie({},e,{data:void 0,error:t.error,failureCount:e.failureCount+1,isPaused:!1,status:"error"});case"setState":return Ie({},e,t.state);default:return e}}var uE=function(e){Cs(t,e);function t(r){var i;return i=e.call(this)||this,i.config=r||{},i.mutations=[],i.mutationId=0,i}var n=t.prototype;return n.build=function(i,a,l){var u=new aE({mutationCache:this,mutationId:++this.mutationId,options:i.defaultMutationOptions(a),state:l,defaultOptions:a.mutationKey?i.getMutationDefaults(a.mutationKey):void 0,meta:a.meta});return this.add(u),u},n.add=function(i){this.mutations.push(i),this.notify(i)},n.remove=function(i){this.mutations=this.mutations.filter(function(a){return a!==i}),i.cancel(),this.notify(i)},n.clear=function(){var i=this;tt.batch(function(){i.mutations.forEach(function(a){i.remove(a)})})},n.getAll=function(){return this.mutations},n.find=function(i){return typeof i.exact>"u"&&(i.exact=!0),this.mutations.find(function(a){return Vv(i,a)})},n.findAll=function(i){return this.mutations.filter(function(a){return Vv(i,a)})},n.notify=function(i){var a=this;tt.batch(function(){a.listeners.forEach(function(l){l(i)})})},n.onFocus=function(){this.resumePausedMutations()},n.onOnline=function(){this.resumePausedMutations()},n.resumePausedMutations=function(){var i=this.mutations.filter(function(a){return a.state.isPaused});return tt.batch(function(){return i.reduce(function(a,l){return a.then(function(){return l.continue().catch(Lt)})},Promise.resolve())})},t}(Es);function cE(){return{onFetch:function(t){t.fetchFn=function(){var n,r,i,a,l,u,d=(n=t.fetchOptions)==null||(r=n.meta)==null?void 0:r.refetchPage,f=(i=t.fetchOptions)==null||(a=i.meta)==null?void 0:a.fetchMore,m=f?.pageParam,_=f?.direction==="forward",h=f?.direction==="backward",g=((l=t.state.data)==null?void 0:l.pages)||[],x=((u=t.state.data)==null?void 0:u.pageParams)||[],w=k1(),C=w?.signal,y=x,b=!1,S=t.options.queryFn||function(){return Promise.reject("Missing queryFn")},P=function(re,de,ee,ue){return y=ue?[de].concat(y):[].concat(y,[de]),ue?[ee].concat(re):[].concat(re,[ee])},z=function(re,de,ee,ue){if(b)return Promise.reject("Cancelled");if(typeof ee>"u"&&!de&&re.length)return Promise.resolve(re);var M={queryKey:t.queryKey,signal:C,pageParam:ee,meta:t.meta},oe=S(M),K=Promise.resolve(oe).then(function(B){return P(re,ee,B,ue)});if(gu(oe)){var O=K;O.cancel=oe.cancel}return K},I;if(!g.length)I=z([]);else if(_){var D=typeof m<"u",j=D?m:Qv(t.options,g);I=z(g,D,j)}else if(h){var V=typeof m<"u",U=V?m:dE(t.options,g);I=z(g,V,U,!0)}else(function(){y=[];var _e=typeof t.options.getNextPageParam>"u",re=d&&g[0]?d(g[0],0,g):!0;I=re?z([],_e,x[0]):Promise.resolve(P([],x[0],g[0]));for(var de=function(M){I=I.then(function(oe){var K=d&&g[M]?d(g[M],M,g):!0;if(K){var O=_e?x[M]:Qv(t.options,oe);return z(oe,_e,O)}return Promise.resolve(P(oe,x[M],g[M]))})},ee=1;ee<g.length;ee++)de(ee)})();var R=I.then(function(_e){return{pages:_e,pageParams:y}}),Y=R;return Y.cancel=function(){b=!0,w?.abort(),gu(I)&&I.cancel()},R}}}}function Qv(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function dE(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}var fE=function(){function e(n){n===void 0&&(n={}),this.queryCache=n.queryCache||new iE,this.mutationCache=n.mutationCache||new uE,this.defaultOptions=n.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[]}var t=e.prototype;return t.mount=function(){var r=this;this.unsubscribeFocus=Wa.subscribe(function(){Wa.isFocused()&&Al.isOnline()&&(r.mutationCache.onFocus(),r.queryCache.onFocus())}),this.unsubscribeOnline=Al.subscribe(function(){Wa.isFocused()&&Al.isOnline()&&(r.mutationCache.onOnline(),r.queryCache.onOnline())})},t.unmount=function(){var r,i;(r=this.unsubscribeFocus)==null||r.call(this),(i=this.unsubscribeOnline)==null||i.call(this)},t.isFetching=function(r,i){var a=Br(r,i),l=a[0];return l.fetching=!0,this.queryCache.findAll(l).length},t.isMutating=function(r){return this.mutationCache.findAll(Ie({},r,{fetching:!0})).length},t.getQueryData=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state.data},t.getQueriesData=function(r){return this.getQueryCache().findAll(r).map(function(i){var a=i.queryKey,l=i.state,u=l.data;return[a,u]})},t.setQueryData=function(r,i,a){var l=Rl(r),u=this.defaultQueryOptions(l);return this.queryCache.build(this,u).setData(i,a)},t.setQueriesData=function(r,i,a){var l=this;return tt.batch(function(){return l.getQueryCache().findAll(r).map(function(u){var d=u.queryKey;return[d,l.setQueryData(d,i,a)]})})},t.getQueryState=function(r,i){var a;return(a=this.queryCache.find(r,i))==null?void 0:a.state},t.removeQueries=function(r,i){var a=Br(r,i),l=a[0],u=this.queryCache;tt.batch(function(){u.findAll(l).forEach(function(d){u.remove(d)})})},t.resetQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=this.queryCache,_=Ie({},d,{active:!0});return tt.batch(function(){return m.findAll(d).forEach(function(h){h.reset()}),l.refetchQueries(_,f)})},t.cancelQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=f===void 0?{}:f;typeof m.revert>"u"&&(m.revert=!0);var _=tt.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.cancel(m)})});return Promise.all(_).then(Lt).catch(Lt)},t.invalidateQueries=function(r,i,a){var l,u,d,f=this,m=Br(r,i,a),_=m[0],h=m[1],g=Ie({},_,{active:(l=(u=_.refetchActive)!=null?u:_.active)!=null?l:!0,inactive:(d=_.refetchInactive)!=null?d:!1});return tt.batch(function(){return f.queryCache.findAll(_).forEach(function(x){x.invalidate()}),f.refetchQueries(g,h)})},t.refetchQueries=function(r,i,a){var l=this,u=Br(r,i,a),d=u[0],f=u[1],m=tt.batch(function(){return l.queryCache.findAll(d).map(function(h){return h.fetch(void 0,Ie({},f,{meta:{refetchPage:d?.refetchPage}}))})}),_=Promise.all(m).then(Lt);return f?.throwOnError||(_=_.catch(Lt)),_},t.fetchQuery=function(r,i,a){var l=Rl(r,i,a),u=this.defaultQueryOptions(l);typeof u.retry>"u"&&(u.retry=!1);var d=this.queryCache.build(this,u);return d.isStaleByTime(u.staleTime)?d.fetch(u):Promise.resolve(d.state.data)},t.prefetchQuery=function(r,i,a){return this.fetchQuery(r,i,a).then(Lt).catch(Lt)},t.fetchInfiniteQuery=function(r,i,a){var l=Rl(r,i,a);return l.behavior=cE(),this.fetchQuery(l)},t.prefetchInfiniteQuery=function(r,i,a){return this.fetchInfiniteQuery(r,i,a).then(Lt).catch(Lt)},t.cancelMutations=function(){var r=this,i=tt.batch(function(){return r.mutationCache.getAll().map(function(a){return a.cancel()})});return Promise.all(i).then(Lt).catch(Lt)},t.resumePausedMutations=function(){return this.getMutationCache().resumePausedMutations()},t.executeMutation=function(r){return this.mutationCache.build(this,r).execute()},t.getQueryCache=function(){return this.queryCache},t.getMutationCache=function(){return this.mutationCache},t.getDefaultOptions=function(){return this.defaultOptions},t.setDefaultOptions=function(r){this.defaultOptions=r},t.setQueryDefaults=function(r,i){var a=this.queryDefaults.find(function(l){return Ro(r)===Ro(l.queryKey)});a?a.defaultOptions=i:this.queryDefaults.push({queryKey:r,defaultOptions:i})},t.getQueryDefaults=function(r){var i;return r?(i=this.queryDefaults.find(function(a){return _u(r,a.queryKey)}))==null?void 0:i.defaultOptions:void 0},t.setMutationDefaults=function(r,i){var a=this.mutationDefaults.find(function(l){return Ro(r)===Ro(l.mutationKey)});a?a.defaultOptions=i:this.mutationDefaults.push({mutationKey:r,defaultOptions:i})},t.getMutationDefaults=function(r){var i;return r?(i=this.mutationDefaults.find(function(a){return _u(r,a.mutationKey)}))==null?void 0:i.defaultOptions:void 0},t.defaultQueryOptions=function(r){if(r?._defaulted)return r;var i=Ie({},this.defaultOptions.queries,this.getQueryDefaults(r?.queryKey),r,{_defaulted:!0});return!i.queryHash&&i.queryKey&&(i.queryHash=$h(i.queryKey,i)),i},t.defaultQueryObserverOptions=function(r){return this.defaultQueryOptions(r)},t.defaultMutationOptions=function(r){return r?._defaulted?r:Ie({},this.defaultOptions.mutations,this.getMutationDefaults(r?.mutationKey),r,{_defaulted:!0})},t.clear=function(){this.queryCache.clear(),this.mutationCache.clear()},e}(),pE=function(e){Cs(t,e);function t(r,i){var a;return a=e.call(this)||this,a.client=r,a.options=i,a.trackedProps=[],a.selectError=null,a.bindMethods(),a.setOptions(i),a}var n=t.prototype;return n.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},n.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Gv(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},n.onUnsubscribe=function(){this.listeners.length||this.destroy()},n.shouldFetchOnReconnect=function(){return lp(this.currentQuery,this.options,this.options.refetchOnReconnect)},n.shouldFetchOnWindowFocus=function(){return lp(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},n.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},n.setOptions=function(i,a){var l=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(i),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=l.queryKey),this.updateQuery();var d=this.hasListeners();d&&Xv(this.currentQuery,u,this.options,l)&&this.executeFetch(),this.updateResult(a),d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||this.options.staleTime!==l.staleTime)&&this.updateStaleTimeout();var f=this.computeRefetchInterval();d&&(this.currentQuery!==u||this.options.enabled!==l.enabled||f!==this.currentRefetchInterval)&&this.updateRefetchInterval(f)},n.getOptimisticResult=function(i){var a=this.client.defaultQueryObserverOptions(i),l=this.client.getQueryCache().build(this.client,a);return this.createResult(l,a)},n.getCurrentResult=function(){return this.currentResult},n.trackResult=function(i,a){var l=this,u={},d=function(m){l.trackedProps.includes(m)||l.trackedProps.push(m)};return Object.keys(i).forEach(function(f){Object.defineProperty(u,f,{configurable:!1,enumerable:!0,get:function(){return d(f),i[f]}})}),(a.useErrorBoundary||a.suspense)&&d("error"),u},n.getNextResult=function(i){var a=this;return new Promise(function(l,u){var d=a.subscribe(function(f){f.isFetching||(d(),f.isError&&i?.throwOnError?u(f.error):l(f))})})},n.getCurrentQuery=function(){return this.currentQuery},n.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},n.refetch=function(i){return this.fetch(Ie({},i,{meta:{refetchPage:i?.refetchPage}}))},n.fetchOptimistic=function(i){var a=this,l=this.client.defaultQueryObserverOptions(i),u=this.client.getQueryCache().build(this.client,l);return u.fetch().then(function(){return a.createResult(u,l)})},n.fetch=function(i){var a=this;return this.executeFetch(i).then(function(){return a.updateResult(),a.currentResult})},n.executeFetch=function(i){this.updateQuery();var a=this.currentQuery.fetch(this.options,i);return i?.throwOnError||(a=a.catch(Lt)),a},n.updateStaleTimeout=function(){var i=this;if(this.clearStaleTimeout(),!(hu||this.currentResult.isStale||!ap(this.options.staleTime))){var a=x1(this.currentResult.dataUpdatedAt,this.options.staleTime),l=a+1;this.staleTimeoutId=setTimeout(function(){i.currentResult.isStale||i.updateResult()},l)}},n.computeRefetchInterval=function(){var i;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(i=this.options.refetchInterval)!=null?i:!1},n.updateRefetchInterval=function(i){var a=this;this.clearRefetchInterval(),this.currentRefetchInterval=i,!(hu||this.options.enabled===!1||!ap(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(a.options.refetchIntervalInBackground||Wa.isFocused())&&a.executeFetch()},this.currentRefetchInterval))},n.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},n.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},n.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},n.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},n.createResult=function(i,a){var l=this.currentQuery,u=this.options,d=this.currentResult,f=this.currentResultState,m=this.currentResultOptions,_=i!==l,h=_?i.state:this.currentQueryInitialState,g=_?this.currentResult:this.previousQueryResult,x=i.state,w=x.dataUpdatedAt,C=x.error,y=x.errorUpdatedAt,b=x.isFetching,S=x.status,P=!1,z=!1,I;if(a.optimisticResults){var D=this.hasListeners(),j=!D&&Gv(i,a),V=D&&Xv(i,l,a,u);(j||V)&&(b=!0,w||(S="loading"))}if(a.keepPreviousData&&!x.dataUpdateCount&&g?.isSuccess&&S!=="error")I=g.data,w=g.dataUpdatedAt,S=g.status,P=!0;else if(a.select&&typeof x.data<"u")if(d&&x.data===f?.data&&a.select===this.selectFn)I=this.selectResult;else try{this.selectFn=a.select,I=a.select(x.data),a.structuralSharing!==!1&&(I=vu(d?.data,I)),this.selectResult=I,this.selectError=null}catch(Y){yu().error(Y),this.selectError=Y}else I=x.data;if(typeof a.placeholderData<"u"&&typeof I>"u"&&(S==="loading"||S==="idle")){var U;if(d?.isPlaceholderData&&a.placeholderData===m?.placeholderData)U=d.data;else if(U=typeof a.placeholderData=="function"?a.placeholderData():a.placeholderData,a.select&&typeof U<"u")try{U=a.select(U),a.structuralSharing!==!1&&(U=vu(d?.data,U)),this.selectError=null}catch(Y){yu().error(Y),this.selectError=Y}typeof U<"u"&&(S="success",I=U,z=!0)}this.selectError&&(C=this.selectError,I=this.selectResult,y=Date.now(),S="error");var R={status:S,isLoading:S==="loading",isSuccess:S==="success",isError:S==="error",isIdle:S==="idle",data:I,dataUpdatedAt:w,error:C,errorUpdatedAt:y,failureCount:x.fetchFailureCount,errorUpdateCount:x.errorUpdateCount,isFetched:x.dataUpdateCount>0||x.errorUpdateCount>0,isFetchedAfterMount:x.dataUpdateCount>h.dataUpdateCount||x.errorUpdateCount>h.errorUpdateCount,isFetching:b,isRefetching:b&&S!=="loading",isLoadingError:S==="error"&&x.dataUpdatedAt===0,isPlaceholderData:z,isPreviousData:P,isRefetchError:S==="error"&&x.dataUpdatedAt!==0,isStale:Zh(i,a),refetch:this.refetch,remove:this.remove};return R},n.shouldNotifyListeners=function(i,a){if(!a)return!0;var l=this.options,u=l.notifyOnChangeProps,d=l.notifyOnChangePropsExclusions;if(!u&&!d||u==="tracked"&&!this.trackedProps.length)return!0;var f=u==="tracked"?this.trackedProps:u;return Object.keys(i).some(function(m){var _=m,h=i[_]!==a[_],g=f?.some(function(w){return w===m}),x=d?.some(function(w){return w===m});return h&&!x&&(!f||g)})},n.updateResult=function(i){var a=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!XC(this.currentResult,a)){var l={cache:!0};i?.listeners!==!1&&this.shouldNotifyListeners(this.currentResult,a)&&(l.listeners=!0),this.notify(Ie({},l,i))}},n.updateQuery=function(){var i=this.client.getQueryCache().build(this.client,this.options);if(i!==this.currentQuery){var a=this.currentQuery;this.currentQuery=i,this.currentQueryInitialState=i.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(a?.removeObserver(this),i.addObserver(this))}},n.onQueryUpdate=function(i){var a={};i.type==="success"?a.onSuccess=!0:i.type==="error"&&!Nl(i.error)&&(a.onError=!0),this.updateResult(a),this.hasListeners()&&this.updateTimers()},n.notify=function(i){var a=this;tt.batch(function(){i.onSuccess?(a.options.onSuccess==null||a.options.onSuccess(a.currentResult.data),a.options.onSettled==null||a.options.onSettled(a.currentResult.data,null)):i.onError&&(a.options.onError==null||a.options.onError(a.currentResult.error),a.options.onSettled==null||a.options.onSettled(void 0,a.currentResult.error)),i.listeners&&a.listeners.forEach(function(l){l(a.currentResult)}),i.cache&&a.client.getQueryCache().notify({query:a.currentQuery,type:"observerResultsUpdated"})})},t}(Es);function hE(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Gv(e,t){return hE(e,t)||e.state.dataUpdatedAt>0&&lp(e,t,t.refetchOnMount)}function lp(e,t,n){if(t.enabled!==!1){var r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&Zh(e,t)}return!1}function Xv(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Zh(e,n)}function Zh(e,t){return e.isStaleByTime(t.staleTime)}var mE=x2.unstable_batchedUpdates;tt.setBatchNotifyFunction(mE);var _E=console;rE(_E);var Jv=Z.createContext(void 0),E1=Z.createContext(!1);function O1(e){return e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=Jv),window.ReactQueryClientContext):Jv}var vE=function(){var t=Z.useContext(O1(Z.useContext(E1)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},gE=function(t){var n=t.client,r=t.contextSharing,i=r===void 0?!1:r,a=t.children;Z.useEffect(function(){return n.mount(),function(){n.unmount()}},[n]);var l=O1(i);return Z.createElement(E1.Provider,{value:i},Z.createElement(l.Provider,{value:n},a))};function yE(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var bE=Z.createContext(yE()),xE=function(){return Z.useContext(bE)};function wE(e,t,n){return typeof t=="function"?t.apply(void 0,n):typeof t=="boolean"?t:!!e}function kE(e,t){var n=Z.useRef(!1),r=Z.useState(0),i=r[1],a=vE(),l=xE(),u=a.defaultQueryObserverOptions(e);u.optimisticResults=!0,u.onError&&(u.onError=tt.batchCalls(u.onError)),u.onSuccess&&(u.onSuccess=tt.batchCalls(u.onSuccess)),u.onSettled&&(u.onSettled=tt.batchCalls(u.onSettled)),u.suspense&&(typeof u.staleTime!="number"&&(u.staleTime=1e3),u.cacheTime===0&&(u.cacheTime=1)),(u.suspense||u.useErrorBoundary)&&(l.isReset()||(u.retryOnMount=!1));var d=Z.useState(function(){return new t(a,u)}),f=d[0],m=f.getOptimisticResult(u);if(Z.useEffect(function(){n.current=!0,l.clearReset();var _=f.subscribe(tt.batchCalls(function(){n.current&&i(function(h){return h+1})}));return f.updateResult(),function(){n.current=!1,_()}},[l,f]),Z.useEffect(function(){f.setOptions(u,{listeners:!1})},[u,f]),u.suspense&&m.isLoading)throw f.fetchOptimistic(u).then(function(_){var h=_.data;u.onSuccess==null||u.onSuccess(h),u.onSettled==null||u.onSettled(h,null)}).catch(function(_){l.clearReset(),u.onError==null||u.onError(_),u.onSettled==null||u.onSettled(void 0,_)});if(m.isError&&!l.isReset()&&!m.isFetching&&wE(u.suspense,u.useErrorBoundary,[m.error,f.getCurrentQuery()]))throw m.error;return u.notifyOnChangeProps==="tracked"&&(m=f.trackResult(m,u)),m}function SE(e,t,n){var r=Rl(e,t,n);return kE(r,pE)}function Xr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sc(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pu(e,t)}function Os(e,t){if(t&&(Tn(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Xr(e)}function Xn(e){return Xn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Xn(e)}function PE(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function CE(e){return g1(e)||PE(e)||y1(e)||b1()}function Yv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function eg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yv(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var EE={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,n){console&&console[t]&&console[t].apply(console,n)}},OE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.init(t,n)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=n||EE,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(n){this.debug=n}},{key:"log",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(n,r,i,a){return a&&!this.debug?null:(typeof n[0]=="string"&&(n[0]="".concat(i).concat(this.prefix," ").concat(n[0])),this.logger[r](n))}},{key:"create",value:function(n){return new e(this.logger,eg(eg({},{prefix:"".concat(this.prefix,":").concat(n,":")}),this.options))}},{key:"clone",value:function(n){return n=n||this.options,n.prefix=n.prefix||this.prefix,new e(this.logger,n)}}]),e}(),Hn=new OE,io=function(){function e(){An(this,e),this.observers={}}return Nn(e,[{key:"on",value:function(n,r){var i=this;return n.split(" ").forEach(function(a){i.observers[a]=i.observers[a]||[],i.observers[a].push(r)}),this}},{key:"off",value:function(n,r){if(this.observers[n]){if(!r){delete this.observers[n];return}this.observers[n]=this.observers[n].filter(function(i){return i!==r})}}},{key:"emit",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(this.observers[n]){var l=[].concat(this.observers[n]);l.forEach(function(d){d.apply(void 0,i)})}if(this.observers["*"]){var u=[].concat(this.observers["*"]);u.forEach(function(d){d.apply(d,[n].concat(i))})}}}]),e}();function ka(){var e,t,n=new Promise(function(r,i){e=r,t=i});return n.resolve=e,n.reject=t,n}function tg(e){return e==null?"":""+e}function TE(e,t,n){e.forEach(function(r){t[r]&&(n[r]=t[r])})}function Wh(e,t,n){function r(u){return u&&u.indexOf("###")>-1?u.replace(/###/g,"."):u}function i(){return!e||typeof e=="string"}for(var a=typeof t!="string"?[].concat(t):t.split(".");a.length>1;){if(i())return{};var l=r(a.shift());!e[l]&&n&&(e[l]=new n),Object.prototype.hasOwnProperty.call(e,l)?e=e[l]:e={}}return i()?{}:{obj:e,k:r(a.shift())}}function ng(e,t,n){var r=Wh(e,t,Object),i=r.obj,a=r.k;i[a]=n}function LE(e,t,n,r){var i=Wh(e,t,Object),a=i.obj,l=i.k;a[l]=a[l]||[],r&&(a[l]=a[l].concat(n)),r||a[l].push(n)}function bu(e,t){var n=Wh(e,t),r=n.obj,i=n.k;if(r)return r[i]}function rg(e,t,n){var r=bu(e,n);return r!==void 0?r:bu(t,n)}function T1(e,t,n){for(var r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):T1(e[r],t[r],n):e[r]=t[r]);return e}function si(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var zE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function RE(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(t){return zE[t]}):e}var Pc=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,AE=[" ",",","?","!",";"];function NE(e,t,n){t=t||"",n=n||"";var r=AE.filter(function(u){return t.indexOf(u)<0&&n.indexOf(u)<0});if(r.length===0)return!0;var i=new RegExp("(".concat(r.map(function(u){return u==="?"?"\\?":u}).join("|"),")")),a=!i.test(e);if(!a){var l=e.indexOf(n);l>0&&!i.test(e.substring(0,l))&&(a=!0)}return a}function og(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ml(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?og(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):og(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function BE(e){var t=IE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function IE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function L1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[t])return e[t];for(var r=t.split(n),i=e,a=0;a<r.length;++a){if(!i||typeof i[r[a]]=="string"&&a+1<r.length)return;if(i[r[a]]===void 0){for(var l=2,u=r.slice(a,a+l).join(n),d=i[u];d===void 0&&r.length>a+l;)l++,u=r.slice(a,a+l).join(n),d=i[u];if(d===void 0)return;if(d===null)return null;if(t.endsWith(u)){if(typeof d=="string")return d;if(u&&typeof d[u]=="string")return d[u]}var f=r.slice(a+l).join(n);return f?L1(d,f,n):void 0}i=i[r[a]]}return i}}var ME=function(e){Sc(n,e);var t=BE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return An(this,n),i=t.call(this),Pc&&io.call(Xr(i)),i.data=r||{},i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.options.ignoreJSONStructure===void 0&&(i.options.ignoreJSONStructure=!0),i}return Nn(n,[{key:"addNamespaces",value:function(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}},{key:"removeNamespaces",value:function(i){var a=this.options.ns.indexOf(i);a>-1&&this.options.ns.splice(a,1)}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,f=u.ignoreJSONStructure!==void 0?u.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[i,a];l&&typeof l!="string"&&(m=m.concat(l)),l&&typeof l=="string"&&(m=m.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(m=i.split("."));var _=bu(this.data,m);return _||!f||typeof l!="string"?_:L1(this.data&&this.data[i]&&this.data[i][a],l,d)}},{key:"addResource",value:function(i,a,l,u){var d=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},f=this.options.keySeparator;f===void 0&&(f=".");var m=[i,a];l&&(m=m.concat(f?l.split(f):l)),i.indexOf(".")>-1&&(m=i.split("."),u=a,a=m[1]),this.addNamespaces(a),ng(this.data,m,u),d.silent||this.emit("added",i,a,l,u)}},{key:"addResources",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var d in l)(typeof l[d]=="string"||Object.prototype.toString.apply(l[d])==="[object Array]")&&this.addResource(i,a,d,l[d],{silent:!0});u.silent||this.emit("added",i,a,l)}},{key:"addResourceBundle",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[i,a];i.indexOf(".")>-1&&(m=i.split("."),u=l,l=a,a=m[1]),this.addNamespaces(a);var _=bu(this.data,m)||{};u?T1(_,l,d):_=ml(ml({},_),l),ng(this.data,m,_),f.silent||this.emit("added",i,a,l)}},{key:"removeResourceBundle",value:function(i,a){this.hasResourceBundle(i,a)&&delete this.data[i][a],this.removeNamespaces(a),this.emit("removed",i,a)}},{key:"hasResourceBundle",value:function(i,a){return this.getResource(i,a)!==void 0}},{key:"getResourceBundle",value:function(i,a){return a||(a=this.options.defaultNS),this.options.compatibilityAPI==="v1"?ml(ml({},{}),this.getResource(i,a)):this.getResource(i,a)}},{key:"getDataByLanguage",value:function(i){return this.data[i]}},{key:"hasLanguageSomeTranslations",value:function(i){var a=this.getDataByLanguage(i),l=a&&Object.keys(a)||[];return!!l.find(function(u){return a[u]&&Object.keys(a[u]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),n}(io),z1={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,n,r,i,a){var l=this;return t.forEach(function(u){l.processors[u]&&(n=l.processors[u].process(n,r,i,a))}),n}};function ig(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function It(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ig(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ig(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DE(e){var t=FE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function FE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var ag={},sg=function(e){Sc(n,e);var t=DE(n);function n(r){var i,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return An(this,n),i=t.call(this),Pc&&io.call(Xr(i)),TE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Xr(i)),i.options=a,i.options.keySeparator===void 0&&(i.options.keySeparator="."),i.logger=Hn.create("translator"),i}return Nn(n,[{key:"changeLanguage",value:function(i){i&&(this.language=i)}},{key:"exists",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(i==null)return!1;var l=this.resolve(i,a);return l&&l.res!==void 0}},{key:"extractFromKey",value:function(i,a){var l=a.nsSeparator!==void 0?a.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");var u=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,d=a.ns||this.options.defaultNS||[],f=l&&i.indexOf(l)>-1,m=!this.options.userDefinedKeySeparator&&!a.keySeparator&&!this.options.userDefinedNsSeparator&&!a.nsSeparator&&!NE(i,l,u);if(f&&!m){var _=i.match(this.interpolator.nestingRegexp);if(_&&_.length>0)return{key:i,namespaces:d};var h=i.split(l);(l!==u||l===u&&this.options.ns.indexOf(h[0])>-1)&&(d=h.shift()),i=h.join(u)}return typeof d=="string"&&(d=[d]),{key:i,namespaces:d}}},{key:"translate",value:function(i,a,l){var u=this;if(Tn(a)!=="object"&&this.options.overloadTranslationOptionHandler&&(a=this.options.overloadTranslationOptionHandler(arguments)),a||(a={}),i==null)return"";Array.isArray(i)||(i=[String(i)]);var d=a.returnDetails!==void 0?a.returnDetails:this.options.returnDetails,f=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator,m=this.extractFromKey(i[i.length-1],a),_=m.key,h=m.namespaces,g=h[h.length-1],x=a.lng||this.language,w=a.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(x&&x.toLowerCase()==="cimode"){if(w){var C=a.nsSeparator||this.options.nsSeparator;return d?(y.res="".concat(g).concat(C).concat(_),y):"".concat(g).concat(C).concat(_)}return d?(y.res=_,y):_}var y=this.resolve(i,a),b=y&&y.res,S=y&&y.usedKey||_,P=y&&y.exactUsedKey||_,z=Object.prototype.toString.apply(b),I=["[object Number]","[object Function]","[object RegExp]"],D=a.joinArrays!==void 0?a.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,V=typeof b!="string"&&typeof b!="boolean"&&typeof b!="number";if(j&&b&&V&&I.indexOf(z)<0&&!(typeof D=="string"&&z==="[object Array]")){if(!a.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var U=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,b,It(It({},a),{},{ns:h})):"key '".concat(_," (").concat(this.language,")' returned an object instead of string.");return d?(y.res=U,y):U}if(f){var R=z==="[object Array]",Y=R?[]:{},_e=R?P:S;for(var re in b)if(Object.prototype.hasOwnProperty.call(b,re)){var de="".concat(_e).concat(f).concat(re);Y[re]=this.translate(de,It(It({},a),{joinArrays:!1,ns:h})),Y[re]===de&&(Y[re]=b[re])}b=Y}}else if(j&&typeof D=="string"&&z==="[object Array]")b=b.join(D),b&&(b=this.extendTranslation(b,i,a,l));else{var ee=!1,ue=!1,M=a.count!==void 0&&typeof a.count!="string",oe=n.hasDefaultValue(a),K=M?this.pluralResolver.getSuffix(x,a.count,a):"",O=a["defaultValue".concat(K)]||a.defaultValue;!this.isValidLookup(b)&&oe&&(ee=!0,b=O),this.isValidLookup(b)||(ue=!0,b=_);var B=a.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,A=B&&ue?void 0:b,Q=oe&&O!==b&&this.options.updateMissing;if(ue||ee||Q){if(this.logger.log(Q?"updateKey":"missingKey",x,g,_,Q?O:b),f){var te=this.resolve(_,It(It({},a),{},{keySeparator:!1}));te&&te.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var $=[],ne=this.languageUtils.getFallbackCodes(this.options.fallbackLng,a.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ne&&ne[0])for(var se=0;se<ne.length;se++)$.push(ne[se]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(a.lng||this.language):$.push(a.lng||this.language);var Ue=function(Re,Ee,qe){var Te=oe&&qe!==b?qe:A;u.options.missingKeyHandler?u.options.missingKeyHandler(Re,g,Ee,Te,Q,a):u.backendConnector&&u.backendConnector.saveMissing&&u.backendConnector.saveMissing(Re,g,Ee,Te,Q,a),u.emit("missingKey",Re,g,Ee,b)};this.options.saveMissing&&(this.options.saveMissingPlurals&&M?$.forEach(function(We){u.pluralResolver.getSuffixes(We,a).forEach(function(Re){Ue([We],_+Re,a["defaultValue".concat(Re)]||O)})}):Ue($,_,O))}b=this.extendTranslation(b,i,a,y,l),ue&&b===_&&this.options.appendNamespaceToMissingKey&&(b="".concat(g,":").concat(_)),(ue||ee)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?b=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(g,":").concat(_):_,ee?b:void 0):b=this.options.parseMissingKeyHandler(b))}return d?(y.res=b,y):b}},{key:"extendTranslation",value:function(i,a,l,u,d){var f=this;if(this.i18nFormat&&this.i18nFormat.parse)i=this.i18nFormat.parse(i,It(It({},this.options.interpolation.defaultVariables),l),u.usedLng,u.usedNS,u.usedKey,{resolved:u});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init(It(It({},l),{interpolation:It(It({},this.options.interpolation),l.interpolation)}));var m=typeof i=="string"&&(l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),_;if(m){var h=i.match(this.interpolator.nestingRegexp);_=h&&h.length}var g=l.replace&&typeof l.replace!="string"?l.replace:l;if(this.options.interpolation.defaultVariables&&(g=It(It({},this.options.interpolation.defaultVariables),g)),i=this.interpolator.interpolate(i,g,l.lng||this.language,l),m){var x=i.match(this.interpolator.nestingRegexp),w=x&&x.length;_<w&&(l.nest=!1)}l.nest!==!1&&(i=this.interpolator.nest(i,function(){for(var b=arguments.length,S=new Array(b),P=0;P<b;P++)S[P]=arguments[P];return d&&d[0]===S[0]&&!l.context?(f.logger.warn("It seems you are nesting recursively key: ".concat(S[0]," in key: ").concat(a[0])),null):f.translate.apply(f,S.concat([a]))},l)),l.interpolation&&this.interpolator.reset()}var C=l.postProcess||this.options.postProcess,y=typeof C=="string"?[C]:C;return i!=null&&y&&y.length&&l.applyPostProcessor!==!1&&(i=z1.handle(y,i,a,this.options&&this.options.postProcessPassResolved?It({i18nResolved:u},l):l,this)),i}},{key:"resolve",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u,d,f,m,_;return typeof i=="string"&&(i=[i]),i.forEach(function(h){if(!a.isValidLookup(u)){var g=a.extractFromKey(h,l),x=g.key;d=x;var w=g.namespaces;a.options.fallbackNS&&(w=w.concat(a.options.fallbackNS));var C=l.count!==void 0&&typeof l.count!="string",y=C&&!l.ordinal&&l.count===0&&a.pluralResolver.shouldUseIntlApi(),b=l.context!==void 0&&(typeof l.context=="string"||typeof l.context=="number")&&l.context!=="",S=l.lngs?l.lngs:a.languageUtils.toResolveHierarchy(l.lng||a.language,l.fallbackLng);w.forEach(function(P){a.isValidLookup(u)||(_=P,!ag["".concat(S[0],"-").concat(P)]&&a.utils&&a.utils.hasLoadedNamespace&&!a.utils.hasLoadedNamespace(_)&&(ag["".concat(S[0],"-").concat(P)]=!0,a.logger.warn('key "'.concat(d,'" for languages "').concat(S.join(", "),`" won't get resolved as namespace "`).concat(_,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),S.forEach(function(z){if(!a.isValidLookup(u)){m=z;var I=[x];if(a.i18nFormat&&a.i18nFormat.addLookupKeys)a.i18nFormat.addLookupKeys(I,x,z,P,l);else{var D;C&&(D=a.pluralResolver.getSuffix(z,l.count,l));var j="".concat(a.options.pluralSeparator,"zero");if(C&&(I.push(x+D),y&&I.push(x+j)),b){var V="".concat(x).concat(a.options.contextSeparator).concat(l.context);I.push(V),C&&(I.push(V+D),y&&I.push(V+j))}}for(var U;U=I.pop();)a.isValidLookup(u)||(f=U,u=a.getResource(z,P,U,l))}}))})}}),{res:u,usedKey:d,exactUsedKey:f,usedLng:m,usedNS:_}}},{key:"isValidLookup",value:function(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}},{key:"getResource",value:function(i,a,l){var u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(i,a,l,u):this.resourceStore.getResource(i,a,l,u)}}],[{key:"hasDefaultValue",value:function(i){var a="defaultValue";for(var l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&a===l.substring(0,a.length)&&i[l]!==void 0)return!0;return!1}}]),n}(io);function Md(e){return e.charAt(0).toUpperCase()+e.slice(1)}var lg=function(){function e(t){An(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Hn.create("languageUtils")}return Nn(e,[{key:"getScriptPartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return null;var r=n.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(n){if(!n||n.indexOf("-")<0)return n;var r=n.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(n){if(typeof n=="string"&&n.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],i=n.split("-");return this.options.lowerCaseLng?i=i.map(function(a){return a.toLowerCase()}):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Md(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),r.indexOf(i[1].toLowerCase())>-1&&(i[1]=Md(i[1].toLowerCase())),r.indexOf(i[2].toLowerCase())>-1&&(i[2]=Md(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?n.toLowerCase():n}},{key:"isSupportedCode",value:function(n){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(n=this.getLanguagePartFromCode(n)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(n)>-1}},{key:"getBestMatchFromCodes",value:function(n){var r=this;if(!n)return null;var i;return n.forEach(function(a){if(!i){var l=r.formatLanguageCode(a);(!r.options.supportedLngs||r.isSupportedCode(l))&&(i=l)}}),!i&&this.options.supportedLngs&&n.forEach(function(a){if(!i){var l=r.getLanguagePartFromCode(a);if(r.isSupportedCode(l))return i=l;i=r.options.supportedLngs.find(function(u){if(u.indexOf(l)===0)return u})}}),i||(i=this.getFallbackCodes(this.options.fallbackLng)[0]),i}},{key:"getFallbackCodes",value:function(n,r){if(!n)return[];if(typeof n=="function"&&(n=n(r)),typeof n=="string"&&(n=[n]),Object.prototype.toString.apply(n)==="[object Array]")return n;if(!r)return n.default||[];var i=n[r];return i||(i=n[this.getScriptPartFromCode(r)]),i||(i=n[this.formatLanguageCode(r)]),i||(i=n[this.getLanguagePartFromCode(r)]),i||(i=n.default),i||[]}},{key:"toResolveHierarchy",value:function(n,r){var i=this,a=this.getFallbackCodes(r||this.options.fallbackLng||[],n),l=[],u=function(f){f&&(i.isSupportedCode(f)?l.push(f):i.logger.warn("rejecting language code not found in supportedLngs: ".concat(f)))};return typeof n=="string"&&n.indexOf("-")>-1?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(n)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(n)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(n))):typeof n=="string"&&u(this.formatLanguageCode(n)),a.forEach(function(d){l.indexOf(d)<0&&u(i.formatLanguageCode(d))}),l}}]),e}(),jE=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],UE={1:function(t){return Number(t>1)},2:function(t){return Number(t!=1)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(t==1?0:t>=2&&t<=4?1:2)},7:function(t){return Number(t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(t==1?0:t==2?1:t!=8&&t!=11?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(t==1?0:t==2?1:t<7?2:t<11?3:4)},11:function(t){return Number(t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(t!==0)},14:function(t){return Number(t==1?0:t==2?1:t==3?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:t!==0?1:2)},17:function(t){return Number(t==1||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(t==0?0:t==1?1:2)},19:function(t){return Number(t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(t==1?0:t==0||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3)}},$E=["v1","v2","v3"],ug={zero:0,one:1,two:2,few:3,many:4,other:5};function ZE(){var e={};return jE.forEach(function(t){t.lngs.forEach(function(n){e[n]={numbers:t.nr,plurals:UE[t.fc]}})}),e}var WE=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};An(this,e),this.languageUtils=t,this.options=n,this.logger=Hn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=ZE()}return Nn(e,[{key:"addRule",value:function(n,r){this.rules[n]=r}},{key:"getRule",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(n,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[n]||this.rules[this.languageUtils.getLanguagePartFromCode(n)]}},{key:"needsPlural",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(n,r);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(n,i).map(function(a){return"".concat(r).concat(a)})}},{key:"getSuffixes",value:function(n){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?a.resolvedOptions().pluralCategories.sort(function(l,u){return ug[l]-ug[u]}).map(function(l){return"".concat(r.options.prepend).concat(l)}):a.numbers.map(function(l){return r.getSuffix(n,l,i)}):[]}},{key:"getSuffix",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=this.getRule(n,i);return a?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(a.select(r)):this.getSuffixRetroCompatible(a,r):(this.logger.warn("no plural rule found for: ".concat(n)),"")}},{key:"getSuffixRetroCompatible",value:function(n,r){var i=this,a=n.noAbs?n.plurals(r):n.plurals(Math.abs(r)),l=n.numbers[a];this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));var u=function(){return i.options.prepend&&l.toString()?i.options.prepend+l.toString():l.toString()};return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?"_plural_".concat(l.toString()):u():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&n.numbers.length===2&&n.numbers[0]===1?u():this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString()}},{key:"shouldUseIntlApi",value:function(){return!$E.includes(this.options.compatibilityJSON)}}]),e}();function cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var HE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Hn.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(n){return n},this.init(t)}return Nn(e,[{key:"init",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};n.interpolation||(n.interpolation={escapeValue:!0});var r=n.interpolation;this.escape=r.escape!==void 0?r.escape:RE,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?si(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?si(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?si(r.nestingPrefix):r.nestingPrefixEscaped||si("$t("),this.nestingSuffix=r.nestingSuffix?si(r.nestingSuffix):r.nestingSuffixEscaped||si(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var n="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(n,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var i="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(i,"g")}},{key:"interpolate",value:function(n,r,i,a){var l=this,u,d,f,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function _(C){return C.replace(/\$/g,"$$$$")}var h=function(y){if(y.indexOf(l.formatSeparator)<0){var b=rg(r,m,y);return l.alwaysFormat?l.format(b,void 0,i,bn(bn(bn({},a),r),{},{interpolationkey:y})):b}var S=y.split(l.formatSeparator),P=S.shift().trim(),z=S.join(l.formatSeparator).trim();return l.format(rg(r,m,P),z,i,bn(bn(bn({},a),r),{},{interpolationkey:P}))};this.resetRegExp();var g=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,x=a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,w=[{regex:this.regexpUnescape,safeValue:function(y){return _(y)}},{regex:this.regexp,safeValue:function(y){return l.escapeValue?_(l.escape(y)):_(y)}}];return w.forEach(function(C){for(f=0;u=C.regex.exec(n);){var y=u[1].trim();if(d=h(y),d===void 0)if(typeof g=="function"){var b=g(n,u,a);d=typeof b=="string"?b:""}else if(a&&a.hasOwnProperty(y))d="";else if(x){d=u[0];continue}else l.logger.warn("missed to pass in variable ".concat(y," for interpolating ").concat(n)),d="";else typeof d!="string"&&!l.useRawValueToEscape&&(d=tg(d));var S=C.safeValue(d);if(n=n.replace(u[0],S),x?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,f++,f>=l.maxReplaces)break}}),n}},{key:"nest",value:function(n,r){var i=this,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,u,d;function f(g,x){var w=this.nestingOptionsSeparator;if(g.indexOf(w)<0)return g;var C=g.split(new RegExp("".concat(w,"[ ]*{"))),y="{".concat(C[1]);g=C[0],y=this.interpolate(y,d);var b=y.match(/'/g),S=y.match(/"/g);(b&&b.length%2===0&&!S||S.length%2!==0)&&(y=y.replace(/'/g,'"'));try{d=JSON.parse(y),x&&(d=bn(bn({},x),d))}catch(P){return this.logger.warn("failed parsing options string in nesting for key ".concat(g),P),"".concat(g).concat(w).concat(y)}return delete d.defaultValue,g}for(;l=this.nestingRegexp.exec(n);){var m=[];d=bn({},a),d=d.replace&&typeof d.replace!="string"?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;var _=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){var h=l[1].split(this.formatSeparator).map(function(g){return g.trim()});l[1]=h.shift(),m=h,_=!0}if(u=r(f.call(this,l[1].trim(),d),d),u&&l[0]===n&&typeof u!="string")return u;typeof u!="string"&&(u=tg(u)),u||(this.logger.warn("missed to resolve ".concat(l[1]," for nesting ").concat(n)),u=""),_&&(u=m.reduce(function(g,x){return i.format(g,x,a.lng,bn(bn({},a),{},{interpolationkey:l[1].trim()}))},u.trim())),n=n.replace(l[0],u),this.regexp.lastIndex=0}return n}}]),e}();function dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function VE(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var r=e.split("(");t=r[0].toLowerCase().trim();var i=r[1].substring(0,r[1].length-1);if(t==="currency"&&i.indexOf(":")<0)n.currency||(n.currency=i.trim());else if(t==="relativetime"&&i.indexOf(":")<0)n.range||(n.range=i.trim());else{var a=i.split(";");a.forEach(function(l){if(l){var u=l.split(":"),d=CE(u),f=d[0],m=d.slice(1),_=m.join(":").trim().replace(/^'+|'+$/g,"");n[f.trim()]||(n[f.trim()]=_),_==="false"&&(n[f.trim()]=!1),_==="true"&&(n[f.trim()]=!0),isNaN(_)||(n[f.trim()]=parseInt(_,10))}})}}return{formatName:t,formatOptions:n}}function li(e){var t={};return function(r,i,a){var l=i+JSON.stringify(a),u=t[l];return u||(u=e(i,a),t[l]=u),u(r)}}var qE=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};An(this,e),this.logger=Hn.create("formatter"),this.options=t,this.formats={number:li(function(n,r){var i=new Intl.NumberFormat(n,r);return function(a){return i.format(a)}}),currency:li(function(n,r){var i=new Intl.NumberFormat(n,Tr(Tr({},r),{},{style:"currency"}));return function(a){return i.format(a)}}),datetime:li(function(n,r){var i=new Intl.DateTimeFormat(n,Tr({},r));return function(a){return i.format(a)}}),relativetime:li(function(n,r){var i=new Intl.RelativeTimeFormat(n,Tr({},r));return function(a){return i.format(a,r.range||"day")}}),list:li(function(n,r){var i=new Intl.ListFormat(n,Tr({},r));return function(a){return i.format(a)}})},this.init(t)}return Nn(e,[{key:"init",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},i=r.interpolation;this.formatSeparator=i.formatSeparator?i.formatSeparator:i.formatSeparator||","}},{key:"add",value:function(n,r){this.formats[n.toLowerCase().trim()]=r}},{key:"addCached",value:function(n,r){this.formats[n.toLowerCase().trim()]=li(r)}},{key:"format",value:function(n,r,i,a){var l=this,u=r.split(this.formatSeparator),d=u.reduce(function(f,m){var _=VE(m),h=_.formatName,g=_.formatOptions;if(l.formats[h]){var x=f;try{var w=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},C=w.locale||w.lng||a.locale||a.lng||i;x=l.formats[h](f,C,Tr(Tr(Tr({},g),a),w))}catch(y){l.logger.warn(y)}return x}else l.logger.warn("there was no format function for ".concat(h));return f},n);return d}}]),e}();function fg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pg(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fg(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function KE(e){var t=QE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function QE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function GE(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}var XE=function(e){Sc(n,e);var t=KE(n);function n(r,i,a){var l,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return An(this,n),l=t.call(this),Pc&&io.call(Xr(l)),l.backend=r,l.store=i,l.services=a,l.languageUtils=a.languageUtils,l.options=u,l.logger=Hn.create("backendConnector"),l.waitingReads=[],l.maxParallelReads=u.maxParallelReads||10,l.readingCalls=0,l.maxRetries=u.maxRetries>=0?u.maxRetries:5,l.retryTimeout=u.retryTimeout>=1?u.retryTimeout:350,l.state={},l.queue=[],l.backend&&l.backend.init&&l.backend.init(a,u.backend,u),l}return Nn(n,[{key:"queueLoad",value:function(i,a,l,u){var d=this,f={},m={},_={},h={};return i.forEach(function(g){var x=!0;a.forEach(function(w){var C="".concat(g,"|").concat(w);!l.reload&&d.store.hasResourceBundle(g,w)?d.state[C]=2:d.state[C]<0||(d.state[C]===1?m[C]===void 0&&(m[C]=!0):(d.state[C]=1,x=!1,m[C]===void 0&&(m[C]=!0),f[C]===void 0&&(f[C]=!0),h[w]===void 0&&(h[w]=!0)))}),x||(_[g]=!0)}),(Object.keys(f).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:u}),{toLoad:Object.keys(f),pending:Object.keys(m),toLoadLanguages:Object.keys(_),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(i,a,l){var u=i.split("|"),d=u[0],f=u[1];a&&this.emit("failedLoading",d,f,a),l&&this.store.addResourceBundle(d,f,l),this.state[i]=a?-1:2;var m={};this.queue.forEach(function(_){LE(_.loaded,[d],f),GE(_,i),a&&_.errors.push(a),_.pendingCount===0&&!_.done&&(Object.keys(_.loaded).forEach(function(h){m[h]||(m[h]={});var g=_.loaded[h];g.length&&g.forEach(function(x){m[h][x]===void 0&&(m[h][x]=!0)})}),_.done=!0,_.errors.length?_.callback(_.errors):_.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(_){return!_.done})}},{key:"read",value:function(i,a,l){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!i.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:a,fcName:l,tried:d,wait:f,callback:m});return}this.readingCalls++;var _=function(w,C){if(u.readingCalls--,u.waitingReads.length>0){var y=u.waitingReads.shift();u.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(w&&C&&d<u.maxRetries){setTimeout(function(){u.read.call(u,i,a,l,d+1,f*2,m)},f);return}m(w,C)},h=this.backend[l].bind(this.backend);if(h.length===2){try{var g=h(i,a);g&&typeof g.then=="function"?g.then(function(x){return _(null,x)}).catch(_):_(null,g)}catch(x){_(x)}return}return h(i,a,_)}},{key:"prepareLoading",value:function(i,a){var l=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),d&&d();typeof i=="string"&&(i=this.languageUtils.toResolveHierarchy(i)),typeof a=="string"&&(a=[a]);var f=this.queueLoad(i,a,u,d);if(!f.toLoad.length)return f.pending.length||d(),null;f.toLoad.forEach(function(m){l.loadOne(m)})}},{key:"load",value:function(i,a,l){this.prepareLoading(i,a,{},l)}},{key:"reload",value:function(i,a,l){this.prepareLoading(i,a,{reload:!0},l)}},{key:"loadOne",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",u=i.split("|"),d=u[0],f=u[1];this.read(d,f,"read",void 0,void 0,function(m,_){m&&a.logger.warn("".concat(l,"loading namespace ").concat(f," for language ").concat(d," failed"),m),!m&&_&&a.logger.log("".concat(l,"loaded namespace ").concat(f," for language ").concat(d),_),a.loaded(i,m,_)})}},{key:"saveMissing",value:function(i,a,l,u,d){var f=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(a)){this.logger.warn('did not save key "'.concat(l,'" as the namespace "').concat(a,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend&&this.backend.create){var _=pg(pg({},f),{},{isUpdate:d}),h=this.backend.create.bind(this.backend);if(h.length<6)try{var g;h.length===5?g=h(i,a,l,u,_):g=h(i,a,l,u),g&&typeof g.then=="function"?g.then(function(x){return m(null,x)}).catch(m):m(null,g)}catch(x){m(x)}else h(i,a,l,u,m,_)}!i||!i[0]||this.store.addResource(i[0],a,l,u)}}}]),n}(io);function hg(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var n={};if(Tn(t[1])==="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),Tn(t[2])==="object"||Tn(t[3])==="object"){var r=t[3]||t[2];Object.keys(r).forEach(function(i){n[i]=r[i]})}return n},interpolation:{escapeValue:!0,format:function(t,n,r,i){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function mg(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function _g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_g(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_g(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function JE(e){var t=YE();return function(){var r=Xn(e),i;if(t){var a=Xn(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Os(this,i)}}function YE(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _l(){}function eO(e){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));t.forEach(function(n){typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}var xu=function(e){Sc(n,e);var t=JE(n);function n(){var r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;if(An(this,n),r=t.call(this),Pc&&io.call(Xr(r)),r.options=mg(i),r.services={},r.logger=Hn,r.modules={external:[]},eO(Xr(r)),a&&!r.isInitialized&&!i.isClone){if(!r.options.initImmediate)return r.init(i,a),Os(r,Xr(r));setTimeout(function(){r.init(i,a)},0)}return r}return Nn(n,[{key:"init",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;typeof a=="function"&&(l=a,a={}),!a.defaultNS&&a.defaultNS!==!1&&a.ns&&(typeof a.ns=="string"?a.defaultNS=a.ns:a.ns.indexOf("translation")<0&&(a.defaultNS=a.ns[0]));var u=hg();this.options=Un(Un(Un({},u),this.options),mg(a)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=Un(Un({},u.interpolation),this.options.interpolation)),a.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=a.keySeparator),a.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=a.nsSeparator);function d(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?Hn.init(d(this.modules.logger),this.options):Hn.init(null,this.options);var f;this.modules.formatter?f=this.modules.formatter:typeof Intl<"u"&&(f=qE);var m=new lg(this.options);this.store=new ME(this.options.resources,this.options);var _=this.services;_.logger=Hn,_.resourceStore=this.store,_.languageUtils=m,_.pluralResolver=new WE(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),f&&(!this.options.interpolation.format||this.options.interpolation.format===u.interpolation.format)&&(_.formatter=d(f),_.formatter.init(_,this.options),this.options.interpolation.format=_.formatter.format.bind(_.formatter)),_.interpolator=new HE(this.options),_.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},_.backendConnector=new XE(d(this.modules.backend),_.resourceStore,_,this.options),_.backendConnector.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.languageDetector&&(_.languageDetector=d(this.modules.languageDetector),_.languageDetector.init&&_.languageDetector.init(_,this.options.detection,this.options)),this.modules.i18nFormat&&(_.i18nFormat=d(this.modules.i18nFormat),_.i18nFormat.init&&_.i18nFormat.init(this)),this.translator=new sg(this.services,this.options),this.translator.on("*",function(y){for(var b=arguments.length,S=new Array(b>1?b-1:0),P=1;P<b;P++)S[P-1]=arguments[P];i.emit.apply(i,[y].concat(S))}),this.modules.external.forEach(function(y){y.init&&y.init(i)})}if(this.format=this.options.interpolation.format,l||(l=_l),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var g=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];g.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments)}});var x=["addResource","addResources","addResourceBundle","removeResourceBundle"];x.forEach(function(y){i[y]=function(){var b;return(b=i.store)[y].apply(b,arguments),i}});var w=ka(),C=function(){var b=function(P,z){i.isInitialized&&!i.initializedStoreOnce&&i.logger.warn("init: i18next is already initialized. You should call init just once!"),i.isInitialized=!0,i.options.isClone||i.logger.log("initialized",i.options),i.emit("initialized",i.options),w.resolve(z),l(P,z)};if(i.languages&&i.options.compatibilityAPI!=="v1"&&!i.isInitialized)return b(null,i.t.bind(i));i.changeLanguage(i.options.lng,b)};return this.options.resources||!this.options.initImmediate?C():setTimeout(C,0),w}},{key:"loadResources",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l,u=l,d=typeof i=="string"?i:this.language;if(typeof i=="function"&&(u=i),!this.options.resources||this.options.partialBundledLanguages){if(d&&d.toLowerCase()==="cimode")return u();var f=[],m=function(g){if(g){var x=a.services.languageUtils.toResolveHierarchy(g);x.forEach(function(w){f.indexOf(w)<0&&f.push(w)})}};if(d)m(d);else{var _=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);_.forEach(function(h){return m(h)})}this.options.preload&&this.options.preload.forEach(function(h){return m(h)}),this.services.backendConnector.load(f,this.options.ns,function(h){!h&&!a.resolvedLanguage&&a.language&&a.setResolvedLanguage(a.language),u(h)})}else u(null)}},{key:"reloadResources",value:function(i,a,l){var u=ka();return i||(i=this.languages),a||(a=this.options.ns),l||(l=_l),this.services.backendConnector.reload(i,a,function(d){u.resolve(),l(d)}),u}},{key:"use",value:function(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&z1.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}},{key:"setResolvedLanguage",value:function(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1))for(var a=0;a<this.languages.length;a++){var l=this.languages[a];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}}},{key:"changeLanguage",value:function(i,a){var l=this;this.isLanguageChangingTo=i;var u=ka();this.emit("languageChanging",i);var d=function(h){l.language=h,l.languages=l.services.languageUtils.toResolveHierarchy(h),l.resolvedLanguage=void 0,l.setResolvedLanguage(h)},f=function(h,g){g?(d(g),l.translator.changeLanguage(g),l.isLanguageChangingTo=void 0,l.emit("languageChanged",g),l.logger.log("languageChanged",g)):l.isLanguageChangingTo=void 0,u.resolve(function(){return l.t.apply(l,arguments)}),a&&a(h,function(){return l.t.apply(l,arguments)})},m=function(h){!i&&!h&&l.services.languageDetector&&(h=[]);var g=typeof h=="string"?h:l.services.languageUtils.getBestMatchFromCodes(h);g&&(l.language||d(g),l.translator.language||l.translator.changeLanguage(g),l.services.languageDetector&&l.services.languageDetector.cacheUserLanguage&&l.services.languageDetector.cacheUserLanguage(g)),l.loadResources(g,function(x){f(x,g)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(i),u}},{key:"getFixedT",value:function(i,a,l){var u=this,d=function f(m,_){var h;if(Tn(_)!=="object"){for(var g=arguments.length,x=new Array(g>2?g-2:0),w=2;w<g;w++)x[w-2]=arguments[w];h=u.options.overloadTranslationOptionHandler([m,_].concat(x))}else h=Un({},_);h.lng=h.lng||f.lng,h.lngs=h.lngs||f.lngs,h.ns=h.ns||f.ns,h.keyPrefix=h.keyPrefix||l||f.keyPrefix;var C=u.options.keySeparator||".",y;return h.keyPrefix&&Array.isArray(m)?y=m.map(function(b){return"".concat(h.keyPrefix).concat(C).concat(b)}):y=h.keyPrefix?"".concat(h.keyPrefix).concat(C).concat(m):m,u.t(y,h)};return typeof i=="string"?d.lng=i:d.lngs=i,d.ns=a,d.keyPrefix=l,d}},{key:"t",value:function(){var i;return this.translator&&(i=this.translator).translate.apply(i,arguments)}},{key:"exists",value:function(){var i;return this.translator&&(i=this.translator).exists.apply(i,arguments)}},{key:"setDefaultNamespace",value:function(i){this.options.defaultNS=i}},{key:"hasLoadedNamespace",value:function(i){var a=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var u=this.resolvedLanguage||this.languages[0],d=this.options?this.options.fallbackLng:!1,f=this.languages[this.languages.length-1];if(u.toLowerCase()==="cimode")return!0;var m=function(g,x){var w=a.services.backendConnector.state["".concat(g,"|").concat(x)];return w===-1||w===2};if(l.precheck){var _=l.precheck(this,m);if(_!==void 0)return _}return!!(this.hasResourceBundle(u,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(u,i)&&(!d||m(f,i)))}},{key:"loadNamespaces",value:function(i,a){var l=this,u=ka();return this.options.ns?(typeof i=="string"&&(i=[i]),i.forEach(function(d){l.options.ns.indexOf(d)<0&&l.options.ns.push(d)}),this.loadResources(function(d){u.resolve(),a&&a(d)}),u):(a&&a(),Promise.resolve())}},{key:"loadLanguages",value:function(i,a){var l=ka();typeof i=="string"&&(i=[i]);var u=this.options.preload||[],d=i.filter(function(f){return u.indexOf(f)<0});return d.length?(this.options.preload=u.concat(d),this.loadResources(function(f){l.resolve(),a&&a(f)}),l):(a&&a(),Promise.resolve())}},{key:"dir",value:function(i){if(i||(i=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!i)return"rtl";var a=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services&&this.services.languageUtils||new lg(hg());return a.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var i=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_l,u=Un(Un(Un({},this.options),a),{isClone:!0}),d=new n(u);(a.debug!==void 0||a.prefix!==void 0)&&(d.logger=d.logger.clone(a));var f=["store","services","language"];return f.forEach(function(m){d[m]=i[m]}),d.services=Un({},this.services),d.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d.translator=new sg(d.services,d.options),d.translator.on("*",function(m){for(var _=arguments.length,h=new Array(_>1?_-1:0),g=1;g<_;g++)h[g-1]=arguments[g];d.emit.apply(d,[m].concat(h))}),d.init(u,l),d.translator.options=d.options,d.translator.backendConnector.services.utils={hasLoadedNamespace:d.hasLoadedNamespace.bind(d)},d}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}(io);Rn(xu,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new xu(e,t)});var At=xu.createInstance();At.createInstance=xu.createInstance;At.createInstance;At.dir;At.init;At.loadResources;At.reloadResources;var tO=At.use;At.changeLanguage;At.getFixedT;var xo=At.t;At.exists;At.setDefaultNamespace;At.hasLoadedNamespace;At.loadNamespaces;At.loadLanguages;const Dd=()=>xt("div",{children:[pe("h1",{children:"Det skjedde en feil"}),pe("p",{children:pe("i",{children:"Vennligst gå tilbake i nettleseren eller refresh siden"})})]}),nO="2.25rem",rO="3.75rem",oO="540px",iO="#000000",aO="#0062ba",sO={0:{value:"Base",type:"other"},1:{value:"Components",type:"other"}},lO={id:"edeff752fe55f2581f6ceee82c66aac8b8a8622d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},uO={id:"df8b73b683752ef5f35b3cf293bbe5a0cba9f88d",selectedTokenSets:{Base:"source"},$figmaStyleReferences:{},type:"other",value:"[object Object]"},cO={icon:{size:{xs:{value:"1.5rem",type:"sizing"},sm:{value:"1.875rem",type:"sizing"},md:{value:"2.25rem",type:"sizing"},lg:{value:"3rem",type:"sizing"},xl:{value:"3.75rem",type:"sizing"}}},panel:{color:{background:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}},arrow:{default:{value:"#e6eff8",type:"color"},success:{value:"#d1f4e1",type:"color"},warning:{value:"#fffbe6",type:"color"}}},font_size:{header:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},body:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},space:{padding:{x:{xs:{value:"1.5rem",type:"spacing"},md:{value:"6rem",type:"spacing"}},y:{xs:{value:"1.5rem",type:"spacing"},md:{value:"2.25rem",type:"spacing"}}},gap:{xs:{value:"0.75rem",type:"spacing"},md:{value:"0.75rem",type:"spacing"}},text_group:{gap:{xs:{value:"0.375rem",type:"spacing"}}},arrow_left:{md:{value:"6.688rem",type:"spacing"},xs:{value:"4rem",type:"spacing"}}},size:{icon:{xs:{value:"2.25rem",type:"sizing"},md:{value:"3.75rem",type:"sizing"}}},typography:{default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"3%",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},font_weight:{heading:{value:"bold",type:"fontWeights"}}},legend:{font_weight:{default:{value:"medium",type:"fontWeights"}}},label:{font_weight:{default:{value:"medium",type:"fontWeights"}}},expandable_row:{color:{border_top:{default:{value:"#d2d5d8",type:"color"}},border_bottom:{default:{value:"#d2d5d8",type:"color"}}},space:{padding:{x:{xs:{value:"0.75rem",type:"spacing"},md:{value:"1.5rem",type:"spacing"}},top:{xs:{value:"0.25rem",type:"spacing"}},bottom:{xs:{value:"0.5rem",type:"spacing"}}},gap:{title:{xs:{value:.75,type:"spacing"},md:{value:"1.5rem",type:"spacing"}}}},size:{icon:{xs:{value:"1.5rem",type:"sizing"}}},font_weight:{header:{value:"medium",type:"fontWeights"}},font_size:{header:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},checkbox:{space:{gap:{xsmall:{value:"0.5rem",type:"spacing"},small:{value:"0.75rem",type:"spacing"}}},size:{width:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}},height:{xsmall:{value:"1.125rem",type:"sizing"},small:{value:"1.5rem",type:"sizing"}}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},checked:{value:"#0062ba",type:"color"},error:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},checked:{value:"#1e2b3c",type:"color"},error:{value:"#1e2b3c",type:"color"}}},border_width:{xsmall:{value:"2px",type:"borderWidth"},small:{value:"2px",type:"borderWidth"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"},sm:{value:"1rem",type:"fontSizes"}}},fieldset:{space:{gap:{y:{xsmall:{value:"0.75rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"},medium:{value:"1.5rem",type:"spacing"},large:{value:"1.5rem",type:"spacing"}}}}},field_description:{color:{text:{default:{value:"#1e2b3c",type:"color"}}},space:{top:{small:{value:"0.5rem",type:"spacing"},xsmall:{value:"0.375rem",type:"spacing"}}}},textarea:{border_width:{normal:{value:"2px",type:"borderWidth"}},color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"},error:{value:"#b3253a",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}},text:{default:{value:"#1e2b3c",type:"color"}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},size:{min_height:{xsmall:{value:"6.25rem",type:"sizing"},small:{value:"9.375rem",type:"sizing"},medium:{value:"12.5rem",type:"sizing"},large:{value:"18.75rem",type:"sizing"},xlarge:{value:"25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"}}},"checkbox-group":{space:{gap:{x:{xsmall:{value:"1.5rem",type:"spacing"},small:{value:"2.25rem",type:"spacing"}},y:{xsmall:{value:"0.563rem",type:"spacing"},small:{value:"1.125rem",type:"spacing"}}}}},toggle_button:{font_size:{sm:{value:"1rem",type:"fontSizes"}},size:{min_width:{sm:{value:"100%",type:"sizing"},md:{value:"auto",type:"sizing"}}},border_width:{inactive:{value:"2px",type:"borderWidth"}},color:{background:{active:{value:"#0062ba",type:"color"},inactive:{value:"#ffffff",type:"color"}},text:{active:{value:"#ffffff",type:"color"},inactive:{value:"#1e2b3c",type:"color"}},border:{inactive:{value:"#0062ba",type:"color"}}},space:{padding:{x:{value:"1.5rem",type:"spacing"},top:{value:"0.125rem",type:"spacing"},bottom:{value:"0.25rem",type:"spacing"}}}},icon_button:{size:{large:{circle:{value:"2.25rem",type:"sizing"},icon:{value:"1.4rem",type:"sizing"}},medium:{circle:{value:"1.5rem",type:"sizing"},icon:{value:"0.875rem",type:"sizing"}},small:{circle:{value:"1.125rem",type:"sizing"},icon:{value:"0.688rem",type:"sizing"}}},border_width:{default:{value:"1px",type:"borderWidth"}}},button:{filled:{primary:{color:{background:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},pressed:{value:"#00315d",type:"color"}}}},color:{text:{all:{value:"#ffffff",type:"color"}}},success:{color:{background:{default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},pressed:{value:"#084826",type:"color"}}}},danger:{color:{background:{default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},pressed:{value:"#861c2c",type:"color"}}}}},space:{gap:{small:{value:"0.5rem",type:"spacing"},medium:{value:"0.5rem",type:"spacing"},large:{value:"0.5rem",type:"spacing"}},padding:{x:{small:{value:"1.125rem",type:"spacing"},medium:{value:"2.25rem",type:"spacing"},large:{value:"3rem",type:"spacing"}}}},quiet:{space:{padding:{x:{small:{value:"0.375rem",type:"spacing"},medium:{value:"0.563rem",type:"spacing"},large:{value:"0.563rem",type:"spacing"}}}},primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},background:{hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},outline:{primary:{color:{text:{default:{value:"#0062ba",type:"color"},pressed:{value:"#ffffff",type:"color"}},border:{default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#e6eff8",type:"color"},pressed:{value:"#004e95",type:"color"}}}}},border_width:{default:{value:"1px",type:"borderWidth"}},size:{height:{small:{value:"2.25rem",type:"sizing"},medium:{value:"3rem",type:"sizing"},large:{value:"3.75rem",type:"sizing"}},icon:{small:{value:"1.5rem",type:"sizing"},medium:{value:"1.875rem",type:"sizing"},large:{value:"2.5rem",type:"sizing"}}}},input:{color:{border:{default:{value:"#1e2b3c",type:"color"},hover:{value:"#0062ba",type:"color"}},background:{default:{value:"#ffffff",type:"color"},hover:{value:"#ffffff",type:"color"},focus:{value:"#ffffff",type:"color"}}},error:{color:{border:{default:{value:"#b3253a",type:"color"}}}},space:{padding:{x:{value:"0.75rem",type:"spacing"},y:{value:"0.375rem",type:"spacing"}}},border_width:{default:{value:"2px",type:"borderWidth"},focus:{value:"4px",type:"borderWidth"}},read_only_info:{color:{border:{default:{value:"#fff4b4",type:"color"}},background:{default:{value:"#fff4b4",type:"color"}}}},read_only_confirm:{color:{background:{default:{value:"#d1f4e1",type:"color"}},border:{default:{value:"#d1f4e1",type:"color"}}}},size:{min_height:{default:{value:"2.25rem",type:"sizing"}}},font_size:{sm:{value:"1rem",type:"fontSizes"},md:{value:"1.125rem",type:"fontSizes"}}},error_message:{space:{padding:{top:{value:"0.375rem",type:"spacing"}}},color:{text:{value:"#b3253a",type:"color"}},font_size:{xs:{value:"0.875rem",type:"fontSizes"}}}},dO={thin:{value:"1px",type:"borderWidth"},standard:{value:"2px",type:"borderWidth"}},fO={half:{value:.375,type:"spacing"},base:{value:.75,type:"spacing"},x2:{value:1.5,type:"spacing"},x3:{value:2.25,type:"spacing"},x4:{value:3,type:"spacing"},x5:{value:3.75,type:"spacing"},x6:{value:4.5,type:"spacing"},x7:{value:5.25,type:"spacing"},x8:{value:6,type:"spacing"},x16:{value:12,type:"spacing"}},pO={border_radius:{normal:{value:"3px",type:"borderRadius"}},border_width:{normal:{value:"2px",type:"borderWidth"}}},hO={default:{value:"2.25rem",type:"paragraphSpacing"}},mO={100:{value:"0.75rem",type:"fontSizes"},200:{value:"0.875rem",type:"fontSizes"},300:{value:"1rem",type:"fontSizes"},400:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}},500:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}},600:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},700:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_lg:{value:"1.75rem",type:"fontSizes",description:"28px"}},800:{breakpoint_sm:{value:"1.5rem",type:"fontSizes",description:"24px"},breakpoint_md:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_lg:{value:"2.25rem",type:"fontSizes",description:"36px"}},900:{breakpoint_sm:{value:"1.75rem",type:"fontSizes",description:"28px"},breakpoint_md:{value:"2.25rem",type:"fontSizes",description:"36px"},breakpoint_lg:{value:"2.75rem",type:"fontSizes",description:"44px"}},heading:{h1:{breakpoint_sm:{value:"1.75rem",type:"fontSizes"},breakpoint_md:{value:"2.25rem",type:"fontSizes"},breakpoint_lg:{value:"2.75rem",type:"fontSizes"}},h2:{breakpoint_sm:{value:"1.5rem",type:"fontSizes"},breakpoint_md:{value:"1.75rem",type:"fontSizes"},breakpoint_lg:{value:"2.25rem",type:"fontSizes"}},h3:{breakpoint_sm:{value:"1.25rem",type:"fontSizes"},breakpoint_md:{value:"1.5rem",type:"fontSizes"},breakpoint_lg:{value:"1.75rem",type:"fontSizes"}},h4:{breakpoint_sm:{value:"1.125rem",type:"fontSizes"},breakpoint_md:{value:"1.25rem",type:"fontSizes"},breakpoint_lg:{value:"1.5rem",type:"fontSizes"}},h5:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"},breakpoint_lg:{value:"1.25rem",type:"fontSizes"}}},"component-size":{xs:{value:"0.875rem",type:"fontSizes",description:"14px"},sm:{value:"1rem",type:"fontSizes",description:"16px"},md:{value:"1.125rem",type:"fontSizes",description:"18px"},lg:{value:"1.5rem",type:"fontSizes",description:"24px"}},body:{medium:{value:"1rem",type:"fontSizes",description:"Body text should never be smaller than 16px"},large:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},label:{small:{breakpoint_sm:{value:"1rem",type:"fontSizes"},breakpoint_md:{value:"1.125rem",type:"fontSizes"}}},detail:{default:{value:"0.875rem",type:"fontSizes"}},ingress:{small:{breakpoint_sm:{value:"1.125rem",type:"fontSizes",description:"18px (Ingress should never be smaller than 18px, to keep a visual difference from the body text that is 16px.)"},breakpoint_md:{value:"1.25rem",type:"fontSizes",description:"20px"}},medium:{breakpoint_sm:{value:"1.25rem",type:"fontSizes",description:"20px"},breakpoint_md:{value:"1.5rem",type:"fontSizes",description:"24px"}}}},_O={default:{value:"Altinn-DIN",type:"fontFamilies"},heading:{value:"Altinn-DIN",type:"fontFamilies"},ingress:{value:"Altinn-DIN",type:"fontFamilies"},body:{value:"Altinn-DIN",type:"fontFamilies"},label:{value:"Altinn-DIN",type:"fontFamilies"}},vO={xs:{value:"0px",type:"sizing",description:"Specific styling for the smallest mobile sizes and up. Will affect screen sizes with the set size and larger."},sm:{value:"540px",type:"sizing",description:"Specific styling for the largest mobile sizes and up. Will affect screen sizes with the set size and larger."},md:{value:"768px",type:"sizing",description:"Specific styling for tablet and up. Will affect screen sizes with the set size and larger."},lg:{value:"960px",type:"sizing",description:"Specific styling for the largest tablets and up. Will affect screen sizes with the set size and larger.Will affect screen sizes with this size and larger"},xl:{value:"1200px",type:"sizing",description:"Specific styling for laptops and up. Will affect screen sizes with the set size and larger."},xxl:{value:"1600px",type:"sizing",description:"Specific styling for desktops and up. Will affect screen sizes with the set size and larger."}},gO={default:{fontFamily:{value:"Altinn-DIN",type:"fontFamily"},fontWeight:{value:"Regular",type:"fontWeight"},lineHeight:{value:1.5,type:"lineHeight"},fontSize:{value:"1rem",type:"fontSize"},letterSpacing:{value:"0.3px",type:"letterSpacing"},paragraphSpacing:{value:0,type:"paragraphSpacing"},textDecoration:{value:"none",type:"textDecoration"},textCase:{value:"none",type:"textCase"}}},yO={base:{value:.75,type:"sizing"},x2:{value:1.5,type:"sizing"},x3:{value:2.25,type:"sizing"},x4:{value:3,type:"sizing"},x5:{value:3.75,type:"sizing"},x6:{value:4.5,type:"sizing"},x7:{value:5.25,type:"sizing"},x8:{value:6,type:"sizing"},x10:{value:7.5,type:"sizing"},x16:{value:12,type:"sizing"}},bO={disabled:{value:"30%",type:"opacity"}},xO={grey:{100:{value:"#f4f5f6",type:"color",description:`AAA 13.1 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#e9eaec",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},300:{value:"#d2d5d8",type:"color",description:`AAA 11.9 on grey 800
AA 5.9 as bkdg for interaction blue`},400:{value:"#bcbfc5",type:"color",description:`AAA 8.7 on grey 800
AA18 4.4 as bkdg for interaction blue`},500:{value:"#a5aab1",type:"color",description:`AA 6.1 on grey 800
AA18 3 as bkdg for interaction blue`},600:{value:"#68707c",type:"color",description:`AA18 3.5 on grey 800
AA18 4 on white`},700:{value:"#4b5563",type:"color",description:"AAA 7.5 on white"},800:{value:"#1e2b3c",type:"color",description:`Main Text Color
AAA 14.3 on white`},900:{value:"#141e29",type:"color",description:"AAA 16.8 on white"}},white:{value:"#ffffff",type:"color",description:`Standard bckd color.
AAA 13.1 on grey 800
AAA 7.2 as bkdg for interaction blue`},black:{value:"#000000",type:"color"},red:{100:{value:"#f9d5db",type:"color"},200:{value:"#f3abb6",type:"color"},300:{value:"#ec8292",type:"color"},400:{value:"#e6586d",type:"color"},500:{value:"#e02e49",type:"color"},600:{value:"#b3253a",type:"color"},700:{value:"#861c2c",type:"color"},800:{value:"#5a121d",type:"color"},900:{value:"#480e17",type:"color"}},orange:{100:{value:"#ffe8cd",type:"color"},200:{value:"#ffd19b",type:"color"},300:{value:"#ffba6a",type:"color"},400:{value:"#ffa338",type:"color"},500:{value:"#ff8c06",type:"color"},600:{value:"#cc7005",type:"color"},700:{value:"#995404",type:"color"},800:{value:"#663802",type:"color"},900:{value:"#522d02",type:"color"}},yellow:{100:{value:"#fffbe6",type:"color"},200:{value:"#fff4b4",type:"color"},300:{value:"#ffed83",type:"color"},400:{value:"#ffe551",type:"color"},500:{value:"#ffda06",type:"color"},600:{value:"#e6c405",type:"color"},700:{value:"#ccae05",type:"color"},800:{value:"#998304",type:"color"},900:{value:"#665702",type:"color"}},green:{100:{value:"#e8faf0",type:"color"},200:{value:"#d1f4e1",type:"color"},300:{value:"#8be4b5",type:"color"},400:{value:"#5dd997",type:"color"},500:{value:"#2ece7a",type:"color"},600:{value:"#15b560",type:"color"},700:{value:"#118849",type:"color"},800:{value:"#0c6536",type:"color"},900:{value:"#084826",type:"color"}},blue:{100:{value:"#e6eff8",type:"color"},200:{value:"#b3d0ea",type:"color"},300:{value:"#80b1dd",type:"color"},400:{value:"#66a1d6",type:"color"},500:{value:"#3381c8",type:"color"},600:{value:"#1a72c1",type:"color"},700:{value:"#0062ba",type:"color"},800:{value:"#004e95",type:"color"},900:{value:"#00315d",type:"color"}},purple:{100:{value:"#f5e8f2",type:"color"},200:{value:"#e0b9d8",type:"color"},300:{value:"#cc8bbf",type:"color"},400:{value:"#b75da5",type:"color"},500:{value:"#a22e8b",type:"color"},600:{value:"#98177e",type:"color"},700:{value:"#7a1265",type:"color"},800:{value:"#5b0e4c",type:"color"},900:{value:"#490b3d",type:"color"}}},wO={background:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"}},surface:{neutral:{default:{value:"#ffffff",type:"color"},subtle:{value:"#f4f5f6",type:"color"},"subtle-hover":{value:"#e9eaec",type:"color"},selected:{value:"#e6eff8",type:"color"},inverted:{value:"#1e2b3c",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color",description:"Standard farge for handlinger"}},success:{subtle:{value:"#d1f4e1",type:"color"},default:{value:"#118849",type:"color"},hover:{value:"#0c6536",type:"color"},active:{value:"#084826",type:"color"}},warning:{subtle:{value:"#fffbe6",type:"color"}},danger:{subtle:{value:"#f9d5db",type:"color"},default:{value:"#e02e49",type:"color"},hover:{value:"#b3253a",type:"color"},active:{value:"#861c2c",type:"color"}},info:{subtle:{value:"#e6eff8",type:"color"}}},border:{info:{default:{value:"#004e95",type:"color"}},action:{subtle:{value:"#e6eff8",type:"color"},default:{value:"#0062ba",type:"color"},hover:{value:"#004e95",type:"color"},active:{value:"#00315d",type:"color"}},neutral:{default:{value:"#68707c",type:"color"},subtle:{value:"#d2d5d8",type:"color"},strong:{value:"#1e2b3c",type:"color"},divider:{value:"#bcbfc5",type:"color"}},success:{default:{value:"#0c6536",type:"color"}},warning:{default:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"}}},tab_focus:{outline:{color:{value:"#98177e",type:"color"},offset:{value:"2px",type:"spacing"},width:{value:"2px",type:"borderWidth"}}},text:{success:{default:{value:"#0c6536",type:"color"},on_success:{value:"#ffffff",type:"color"}},neutral:{default:{value:"#1e2b3c",type:"color"},subtle:{value:"#68707c",type:"color"},on_inverted:{value:"#ffffff",type:"color"}},action:{default:{value:"#0062ba",type:"color"},on_action:{value:"#ffffff",type:"color"}},warning:{default:{value:"#995404",type:"color"},on_warning:{value:"#663802",type:"color"},icon_warning:{value:"#cc7005",type:"color"}},danger:{default:{value:"#b3253a",type:"color"},on_danger:{value:"#ffffff",type:"color"}},visited:{default:{value:"#7a1265",type:"color"}}}},kO={default:{first:{100:{value:"#feefef",type:"color",description:`AAA 12.8 on grey 800
AA 6.4 as bkdg for interaction blue`},200:{value:"#fddfe0",type:"color",description:`Light error color
AAA 11.4 on grey 800
AA 5.7 as bkdg for interaction blue`},300:{value:"#fbbfc1",type:"color",description:`AAA 9 on grey 800
AA 4.5 as bkdg for interaction blue`},400:{value:"#f89fa1",type:"color",description:`AAA 7.1 on grey 800
AA18 3.5 as bkdg for interaction blue`},500:{value:"#f67f82",type:"color",description:"AA 5.6 on grey 800"},600:{value:"#f45f63",type:"color",description:"AA 4.5 on grey 800"},700:{value:"#dc5659",type:"color",description:"AA18 3.7 on grey 800"},800:{value:"#c34c4f",type:"color",description:"AA 4.7 on white"}},second:{100:{value:"#fcf7e9",type:"color",description:`AAA 13.3 on grey 800
AA 6.7 as bkdg for interaction blue`},200:{value:"#faeec2",type:"color",description:`Light warning color
AAA 12.3 on grey 800
AA 1.1 as bkdg for interaction blue`},300:{value:"#f5dda6",type:"color",description:`AAA 10 on grey 800
AA 5.4 as bkdg for interaction blue`},400:{value:"#efcc79",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},500:{value:"#eabb4d",type:"color",description:`AAA 7.9 on grey 800
AA18 4 as bkdg for interaction blue`},600:{value:"#e5aa20",type:"color",description:`AA 6.8 on grey 800
AA18 3.4 as bkdg for interaction blue`},700:{value:"#ce991d",type:"color",description:"AA 5.5 on grey 800"},800:{value:"#b7881a",type:"color",description:`AA18 4.4 on grey 800
AA18 3.2 on white`}},third:{100:{value:"#e9f5ff",type:"color",description:`AAA 12.9 on grey 800
AA 6.5 as bkdg for interaction blue`},200:{value:"#d2eafd",type:"color",description:`Light information color 
AAA 11.5 on grey 800
AA 5.8 as bkdg for interaction blue`},300:{value:"#a5d6fb",type:"color",description:`AAA 9.2 on grey 800
AA 4.6 as bkdg for interaction blue`},400:{value:"#78c1f9",type:"color",description:`AAA 7.3 on grey 800
AA18 3.7 as bkdg for interaction blue`},500:{value:"#4badf7",type:"color",description:"AA 5.8 on grey 800"},600:{value:"#1e98f5",type:"color",description:"AA 4.6 on grey 800"},700:{value:"#1b88dd",type:"color",description:"AA18 3.8 on grey 800"},800:{value:"#156aac",type:"color",description:"AA 5.6 on white"}}}},SO={tokenSetOrder:sO,Felles:lO,Altinn:uO,component:cO,border_width:dO,space:fO,interactive_components:pO,paragraph_space:hO,font_size:mO,font_family:_O,breakpoints:vO,typography:gO,size:yO,opacity:bO,colors:xO,semantic:wO,brand:kO};var up={},PO={get exports(){return up},set exports(e){up=e}};/* @preserve
 * Leaflet 1.9.3, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(ui,function(n){var r="1.9.3";function i(o){var s,c,p,v;for(c=1,p=arguments.length;c<p;c++){v=arguments[c];for(s in v)o[s]=v[s]}return o}var a=Object.create||function(){function o(){}return function(s){return o.prototype=s,new o}}();function l(o,s){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var p=c.call(arguments,2);return function(){return o.apply(s,p.length?p.concat(c.call(arguments)):arguments)}}var u=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++u),o._leaflet_id}function f(o,s,c){var p,v,k,E;return E=function(){p=!1,v&&(k.apply(c,v),v=!1)},k=function(){p?v=arguments:(o.apply(c,arguments),setTimeout(E,s),p=!0)},k}function m(o,s,c){var p=s[1],v=s[0],k=p-v;return o===p&&c?o:((o-v)%k+k)%k+v}function _(){return!1}function h(o,s){if(s===!1)return o;var c=Math.pow(10,s===void 0?6:s);return Math.round(o*c)/c}function g(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function x(o){return g(o).split(/\s+/)}function w(o,s){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?a(o.options):{});for(var c in s)o.options[c]=s[c];return o.options}function C(o,s,c){var p=[];for(var v in o)p.push(encodeURIComponent(c?v.toUpperCase():v)+"="+encodeURIComponent(o[v]));return(!s||s.indexOf("?")===-1?"?":"&")+p.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function b(o,s){return o.replace(y,function(c,p){var v=s[p];if(v===void 0)throw new Error("No value provided for variable "+c);return typeof v=="function"&&(v=v(s)),v})}var S=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function P(o,s){for(var c=0;c<o.length;c++)if(o[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function I(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var D=0;function j(o){var s=+new Date,c=Math.max(0,16-(s-D));return D=s+c,window.setTimeout(o,c)}var V=window.requestAnimationFrame||I("RequestAnimationFrame")||j,U=window.cancelAnimationFrame||I("CancelAnimationFrame")||I("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function R(o,s,c){if(c&&V===j)o.call(s);else return V.call(window,l(o,s))}function Y(o){o&&U.call(window,o)}var _e={__proto__:null,extend:i,create:a,bind:l,get lastId(){return u},stamp:d,throttle:f,wrapNum:m,falseFn:_,formatNum:h,trim:g,splitWords:x,setOptions:w,getParamString:C,template:b,isArray:S,indexOf:P,emptyImageUrl:z,requestFn:V,cancelFn:U,requestAnimFrame:R,cancelAnimFrame:Y};function re(){}re.extend=function(o){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,p=a(c);p.constructor=s,s.prototype=p;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(s[v]=this[v]);return o.statics&&i(s,o.statics),o.includes&&(de(o.includes),i.apply(null,[p].concat(o.includes))),i(p,o),delete p.statics,delete p.includes,p.options&&(p.options=c.options?a(c.options):{},i(p.options,o.options)),p._initHooks=[],p.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var k=0,E=p._initHooks.length;k<E;k++)p._initHooks[k].call(this)}},s},re.include=function(o){var s=this.prototype.options;return i(this.prototype,o),o.options&&(this.prototype.options=s,this.mergeOptions(o.options)),this},re.mergeOptions=function(o){return i(this.prototype.options,o),this},re.addInitHook=function(o){var s=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function de(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=S(o)?o:[o];for(var s=0;s<o.length;s++)o[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ee={on:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c)}return this},off:function(o,s,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var p in o)this._off(p,o[p],s);else{o=x(o);for(var v=arguments.length===1,k=0,E=o.length;k<E;k++)v?this._off(o[k]):this._off(o[k],s,c)}return this},_on:function(o,s,c,p){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(o,s,c)===!1){c===this&&(c=void 0);var v={fn:s,ctx:c};p&&(v.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(v)}},_off:function(o,s,c){var p,v,k;if(this._events&&(p=this._events[o],!!p)){if(arguments.length===1){if(this._firingCount)for(v=0,k=p.length;v<k;v++)p[v].fn=_;delete this._events[o];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var E=this._listens(o,s,c);if(E!==!1){var N=p[E];this._firingCount&&(N.fn=_,this._events[o]=p=p.slice()),p.splice(E,1)}}},fire:function(o,s,c){if(!this.listens(o,c))return this;var p=i({},s,{type:o,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var v=this._events[o];if(v){this._firingCount=this._firingCount+1||1;for(var k=0,E=v.length;k<E;k++){var N=v[k],F=N.fn;N.once&&this.off(o,F,N.ctx),F.call(N.ctx||this,p)}this._firingCount--}}return c&&this._propagateEvent(p),this},listens:function(o,s,c,p){typeof o!="string"&&console.warn('"string" type argument expected');var v=s;typeof s!="function"&&(p=!!s,v=void 0,c=void 0);var k=this._events&&this._events[o];if(k&&k.length&&this._listens(o,v,c)!==!1)return!0;if(p){for(var E in this._eventParents)if(this._eventParents[E].listens(o,s,c,p))return!0}return!1},_listens:function(o,s,c){if(!this._events)return!1;var p=this._events[o]||[];if(!s)return!!p.length;c===this&&(c=void 0);for(var v=0,k=p.length;v<k;v++)if(p[v].fn===s&&p[v].ctx===c)return v;return!1},once:function(o,s,c){if(typeof o=="object")for(var p in o)this._on(p,o[p],s,!0);else{o=x(o);for(var v=0,k=o.length;v<k;v++)this._on(o[v],s,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var s in this._eventParents)this._eventParents[s].fire(o.type,i({layer:o.target,propagatedFrom:o.target},o),!0)}};ee.addEventListener=ee.on,ee.removeEventListener=ee.clearAllEventListeners=ee.off,ee.addOneTimeEventListener=ee.once,ee.fireEvent=ee.fire,ee.hasEventListeners=ee.listens;var ue=re.extend(ee);function M(o,s,c){this.x=c?Math.round(o):o,this.y=c?Math.round(s):s}var oe=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(o){return this.clone()._add(K(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(K(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new M(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new M(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=oe(this.x),this.y=oe(this.y),this},distanceTo:function(o){o=K(o);var s=o.x-this.x,c=o.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(o){return o=K(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=K(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+h(this.x)+", "+h(this.y)+")"}};function K(o,s,c){return o instanceof M?o:S(o)?new M(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new M(o.x,o.y):new M(o,s,c)}function O(o,s){if(o)for(var c=s?[o,s]:o,p=0,v=c.length;p<v;p++)this.extend(c[p])}O.prototype={extend:function(o){var s,c;if(!o)return this;if(o instanceof M||typeof o[0]=="number"||"x"in o)s=c=K(o);else if(o=B(o),s=o.min,c=o.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return K((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return K(this.min.x,this.max.y)},getTopRight:function(){return K(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var s,c;return typeof o[0]=="number"||o instanceof M?o=K(o):o=B(o),o instanceof O?(s=o.min,c=o.max):s=c=o,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=B(o);var s=this.min,c=this.max,p=o.min,v=o.max,k=v.x>=s.x&&p.x<=c.x,E=v.y>=s.y&&p.y<=c.y;return k&&E},overlaps:function(o){o=B(o);var s=this.min,c=this.max,p=o.min,v=o.max,k=v.x>s.x&&p.x<c.x,E=v.y>s.y&&p.y<c.y;return k&&E},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var s=this.min,c=this.max,p=Math.abs(s.x-c.x)*o,v=Math.abs(s.y-c.y)*o;return B(K(s.x-p,s.y-v),K(c.x+p,c.y+v))},equals:function(o){return o?(o=B(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function B(o,s){return!o||o instanceof O?o:new O(o,s)}function A(o,s){if(o)for(var c=s?[o,s]:o,p=0,v=c.length;p<v;p++)this.extend(c[p])}A.prototype={extend:function(o){var s=this._southWest,c=this._northEast,p,v;if(o instanceof te)p=o,v=o;else if(o instanceof A){if(p=o._southWest,v=o._northEast,!p||!v)return this}else return o?this.extend($(o)||Q(o)):this;return!s&&!c?(this._southWest=new te(p.lat,p.lng),this._northEast=new te(v.lat,v.lng)):(s.lat=Math.min(p.lat,s.lat),s.lng=Math.min(p.lng,s.lng),c.lat=Math.max(v.lat,c.lat),c.lng=Math.max(v.lng,c.lng)),this},pad:function(o){var s=this._southWest,c=this._northEast,p=Math.abs(s.lat-c.lat)*o,v=Math.abs(s.lng-c.lng)*o;return new A(new te(s.lat-p,s.lng-v),new te(c.lat+p,c.lng+v))},getCenter:function(){return new te((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new te(this.getNorth(),this.getWest())},getSouthEast:function(){return new te(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof te||"lat"in o?o=$(o):o=Q(o);var s=this._southWest,c=this._northEast,p,v;return o instanceof A?(p=o.getSouthWest(),v=o.getNorthEast()):p=v=o,p.lat>=s.lat&&v.lat<=c.lat&&p.lng>=s.lng&&v.lng<=c.lng},intersects:function(o){o=Q(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>=s.lat&&p.lat<=c.lat,E=v.lng>=s.lng&&p.lng<=c.lng;return k&&E},overlaps:function(o){o=Q(o);var s=this._southWest,c=this._northEast,p=o.getSouthWest(),v=o.getNorthEast(),k=v.lat>s.lat&&p.lat<c.lat,E=v.lng>s.lng&&p.lng<c.lng;return k&&E},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,s){return o?(o=Q(o),this._southWest.equals(o.getSouthWest(),s)&&this._northEast.equals(o.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Q(o,s){return o instanceof A?o:new A(o,s)}function te(o,s,c){if(isNaN(o)||isNaN(s))throw new Error("Invalid LatLng object: ("+o+", "+s+")");this.lat=+o,this.lng=+s,c!==void 0&&(this.alt=+c)}te.prototype={equals:function(o,s){if(!o)return!1;o=$(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(s===void 0?1e-9:s)},toString:function(o){return"LatLng("+h(this.lat,o)+", "+h(this.lng,o)+")"},distanceTo:function(o){return se.distance(this,$(o))},wrap:function(){return se.wrapLatLng(this)},toBounds:function(o){var s=180*o/40075017,c=s/Math.cos(Math.PI/180*this.lat);return Q([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new te(this.lat,this.lng,this.alt)}};function $(o,s,c){return o instanceof te?o:S(o)&&typeof o[0]!="object"?o.length===3?new te(o[0],o[1],o[2]):o.length===2?new te(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new te(o.lat,"lng"in o?o.lng:o.lon,o.alt):s===void 0?null:new te(o,s,c)}var ne={latLngToPoint:function(o,s){var c=this.projection.project(o),p=this.scale(s);return this.transformation._transform(c,p)},pointToLatLng:function(o,s){var c=this.scale(s),p=this.transformation.untransform(o,c);return this.projection.unproject(p)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(o),p=this.transformation.transform(s.min,c),v=this.transformation.transform(s.max,c);return new O(p,v)},infinite:!1,wrapLatLng:function(o){var s=this.wrapLng?m(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?m(o.lat,this.wrapLat,!0):o.lat,p=o.alt;return new te(c,s,p)},wrapLatLngBounds:function(o){var s=o.getCenter(),c=this.wrapLatLng(s),p=s.lat-c.lat,v=s.lng-c.lng;if(p===0&&v===0)return o;var k=o.getSouthWest(),E=o.getNorthEast(),N=new te(k.lat-p,k.lng-v),F=new te(E.lat-p,E.lng-v);return new A(N,F)}},se=i({},ne,{wrapLng:[-180,180],R:6371e3,distance:function(o,s){var c=Math.PI/180,p=o.lat*c,v=s.lat*c,k=Math.sin((s.lat-o.lat)*c/2),E=Math.sin((s.lng-o.lng)*c/2),N=k*k+Math.cos(p)*Math.cos(v)*E*E,F=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*F}}),Ue=6378137,We={R:Ue,MAX_LATITUDE:85.0511287798,project:function(o){var s=Math.PI/180,c=this.MAX_LATITUDE,p=Math.max(Math.min(c,o.lat),-c),v=Math.sin(p*s);return new M(this.R*o.lng*s,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(o){var s=180/Math.PI;return new te((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*s,o.x*s/this.R)},bounds:function(){var o=Ue*Math.PI;return new O([-o,-o],[o,o])}()};function Re(o,s,c,p){if(S(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=s,this._c=c,this._d=p}Re.prototype={transform:function(o,s){return this._transform(o.clone(),s)},_transform:function(o,s){return s=s||1,o.x=s*(this._a*o.x+this._b),o.y=s*(this._c*o.y+this._d),o},untransform:function(o,s){return s=s||1,new M((o.x/s-this._b)/this._a,(o.y/s-this._d)/this._c)}};function Ee(o,s,c,p){return new Re(o,s,c,p)}var qe=i({},se,{code:"EPSG:3857",projection:We,transformation:function(){var o=.5/(Math.PI*We.R);return Ee(o,.5,-o,.5)}()}),Te=i({},qe,{code:"EPSG:900913"});function Kt(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Ut(o,s){var c="",p,v,k,E,N,F;for(p=0,k=o.length;p<k;p++){for(N=o[p],v=0,E=N.length;v<E;v++)F=N[v],c+=(v?"L":"M")+F.x+" "+F.y;c+=s?fe.svg?"z":"x":""}return c||"M0 0"}var Ne=document.documentElement.style,Ct="ActiveXObject"in window,Bn=Ct&&!document.addEventListener,$t="msLaunchUri"in navigator&&!("documentMode"in document),Jn=In("webkit"),Nt=In("android"),Sr=In("android 2")||In("android 3"),W=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),H=Nt&&In("Google")&&W<537&&!("AudioNode"in window),G=!!window.opera,le=!$t&&In("chrome"),ie=In("gecko")&&!Jn&&!G&&!Ct,ve=!le&&In("safari"),he=In("phantom"),ye="OTransition"in Ne,me=navigator.platform.indexOf("Win")===0,it=Ct&&"transition"in Ne,xe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Sr,je="MozPerspective"in Ne,Bt=!window.L_DISABLE_3D&&(it||xe||je)&&!ye&&!he,gt=typeof orientation<"u"||In("mobile"),po=gt&&Jn,Qo=gt&&xe,ho=!window.PointerEvent&&window.MSPointerEvent,Yn=!!(window.PointerEvent||ho),Go="ontouchstart"in window||!!window.TouchEvent,ht=!window.L_NO_TOUCH&&(Go||Yn),rn=gt&&G,er=gt&&ie,Xo=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ji=function(){var o=!1;try{var s=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",_,s),window.removeEventListener("testPassiveEventSupport",_,s)}catch{}return o}(),Rc=function(){return!!document.createElement("canvas").getContext}(),Yi=!!(document.createElementNS&&Kt("svg").createSVGRect),_n=!!Yi&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),ea=!Yi&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var s=o.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),Rs=navigator.platform.indexOf("Mac")===0,Ac=navigator.platform.indexOf("Linux")===0;function In(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var fe={ie:Ct,ielt9:Bn,edge:$t,webkit:Jn,android:Nt,android23:Sr,androidStock:H,opera:G,chrome:le,gecko:ie,safari:ve,phantom:he,opera12:ye,win:me,ie3d:it,webkit3d:xe,gecko3d:je,any3d:Bt,mobile:gt,mobileWebkit:po,mobileWebkit3d:Qo,msPointer:ho,pointer:Yn,touch:ht,touchNative:Go,mobileOpera:rn,mobileGecko:er,retina:Xo,passiveEvents:Ji,canvas:Rc,svg:Yi,vml:ea,inlineSvg:_n,mac:Rs,linux:Ac},pm=fe.msPointer?"MSPointerDown":"pointerdown",hm=fe.msPointer?"MSPointerMove":"pointermove",mm=fe.msPointer?"MSPointerUp":"pointerup",_m=fe.msPointer?"MSPointerCancel":"pointercancel",Nc={touchstart:pm,touchmove:hm,touchend:mm,touchcancel:_m},vm={touchstart:Vx,touchmove:As,touchend:As,touchcancel:As},Jo={},gm=!1;function Ux(o,s,c){return s==="touchstart"&&Hx(),vm[s]?(c=vm[s].bind(this,c),o.addEventListener(Nc[s],c,!1),c):(console.warn("wrong event specified:",s),_)}function $x(o,s,c){if(!Nc[s]){console.warn("wrong event specified:",s);return}o.removeEventListener(Nc[s],c,!1)}function Zx(o){Jo[o.pointerId]=o}function Wx(o){Jo[o.pointerId]&&(Jo[o.pointerId]=o)}function ym(o){delete Jo[o.pointerId]}function Hx(){gm||(document.addEventListener(pm,Zx,!0),document.addEventListener(hm,Wx,!0),document.addEventListener(mm,ym,!0),document.addEventListener(_m,ym,!0),gm=!0)}function As(o,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Jo)s.touches.push(Jo[c]);s.changedTouches=[s],o(s)}}function Vx(o,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&yt(s),As(o,s)}function qx(o){var s={},c,p;for(p in o)c=o[p],s[p]=c&&c.bind?c.bind(o):c;return o=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var Kx=200;function Qx(o,s){o.addEventListener("dblclick",s);var c=0,p;function v(k){if(k.detail!==1){p=k.detail;return}if(!(k.pointerType==="mouse"||k.sourceCapabilities&&!k.sourceCapabilities.firesTouchEvents)){var E=Sm(k);if(!(E.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!E.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var N=Date.now();N-c<=Kx?(p++,p===2&&s(qx(k))):p=1,c=N}}}return o.addEventListener("click",v),{dblclick:s,simDblclick:v}}function Gx(o,s){o.removeEventListener("dblclick",s.dblclick),o.removeEventListener("click",s.simDblclick)}var Bc=Is(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),ta=Is(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),bm=ta==="webkitTransition"||ta==="OTransition"?ta+"End":"transitionend";function xm(o){return typeof o=="string"?document.getElementById(o):o}function na(o,s){var c=o.style[s]||o.currentStyle&&o.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var p=document.defaultView.getComputedStyle(o,null);c=p?p[s]:null}return c==="auto"?null:c}function Ae(o,s,c){var p=document.createElement(o);return p.className=s||"",c&&c.appendChild(p),p}function Ge(o){var s=o.parentNode;s&&s.removeChild(o)}function Ns(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function Yo(o){var s=o.parentNode;s&&s.lastChild!==o&&s.appendChild(o)}function ei(o){var s=o.parentNode;s&&s.firstChild!==o&&s.insertBefore(o,s.firstChild)}function Ic(o,s){if(o.classList!==void 0)return o.classList.contains(s);var c=Bs(o);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function we(o,s){if(o.classList!==void 0)for(var c=x(s),p=0,v=c.length;p<v;p++)o.classList.add(c[p]);else if(!Ic(o,s)){var k=Bs(o);Mc(o,(k?k+" ":"")+s)}}function rt(o,s){o.classList!==void 0?o.classList.remove(s):Mc(o,g((" "+Bs(o)+" ").replace(" "+s+" "," ")))}function Mc(o,s){o.className.baseVal===void 0?o.className=s:o.className.baseVal=s}function Bs(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function on(o,s){"opacity"in o.style?o.style.opacity=s:"filter"in o.style&&Xx(o,s)}function Xx(o,s){var c=!1,p="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(p)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):o.style.filter+=" progid:"+p+"(opacity="+s+")"}function Is(o){for(var s=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in s)return o[c];return!1}function mo(o,s,c){var p=s||new M(0,0);o.style[Bc]=(fe.ie3d?"translate("+p.x+"px,"+p.y+"px)":"translate3d("+p.x+"px,"+p.y+"px,0)")+(c?" scale("+c+")":"")}function at(o,s){o._leaflet_pos=s,fe.any3d?mo(o,s):(o.style.left=s.x+"px",o.style.top=s.y+"px")}function _o(o){return o._leaflet_pos||new M(0,0)}var ra,oa,Dc;if("onselectstart"in document)ra=function(){be(window,"selectstart",yt)},oa=function(){$e(window,"selectstart",yt)};else{var ia=Is(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ra=function(){if(ia){var o=document.documentElement.style;Dc=o[ia],o[ia]="none"}},oa=function(){ia&&(document.documentElement.style[ia]=Dc,Dc=void 0)}}function Fc(){be(window,"dragstart",yt)}function jc(){$e(window,"dragstart",yt)}var Ms,Uc;function $c(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Ds(),Ms=o,Uc=o.style.outline,o.style.outline="none",be(window,"keydown",Ds))}function Ds(){Ms&&(Ms.style.outline=Uc,Ms=void 0,Uc=void 0,$e(window,"keydown",Ds))}function wm(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function Zc(o){var s=o.getBoundingClientRect();return{x:s.width/o.offsetWidth||1,y:s.height/o.offsetHeight||1,boundingClientRect:s}}var Jx={__proto__:null,TRANSFORM:Bc,TRANSITION:ta,TRANSITION_END:bm,get:xm,getStyle:na,create:Ae,remove:Ge,empty:Ns,toFront:Yo,toBack:ei,hasClass:Ic,addClass:we,removeClass:rt,setClass:Mc,getClass:Bs,setOpacity:on,testProp:Is,setTransform:mo,setPosition:at,getPosition:_o,get disableTextSelection(){return ra},get enableTextSelection(){return oa},disableImageDrag:Fc,enableImageDrag:jc,preventOutline:$c,restoreOutline:Ds,getSizedParentNode:wm,getScale:Zc};function be(o,s,c,p){if(s&&typeof s=="object")for(var v in s)Hc(o,v,s[v],c);else{s=x(s);for(var k=0,E=s.length;k<E;k++)Hc(o,s[k],c,p)}return this}var Mn="_leaflet_events";function $e(o,s,c,p){if(arguments.length===1)km(o),delete o[Mn];else if(s&&typeof s=="object")for(var v in s)Vc(o,v,s[v],c);else if(s=x(s),arguments.length===2)km(o,function(N){return P(s,N)!==-1});else for(var k=0,E=s.length;k<E;k++)Vc(o,s[k],c,p);return this}function km(o,s){for(var c in o[Mn]){var p=c.split(/\d/)[0];(!s||s(p))&&Vc(o,p,null,null,c)}}var Wc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Hc(o,s,c,p){var v=s+d(c)+(p?"_"+d(p):"");if(o[Mn]&&o[Mn][v])return this;var k=function(N){return c.call(p||o,N||window.event)},E=k;!fe.touchNative&&fe.pointer&&s.indexOf("touch")===0?k=Ux(o,s,k):fe.touch&&s==="dblclick"?k=Qx(o,k):"addEventListener"in o?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?o.addEventListener(Wc[s]||s,k,fe.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(k=function(N){N=N||window.event,Kc(o,N)&&E(N)},o.addEventListener(Wc[s],k,!1)):o.addEventListener(s,E,!1):o.attachEvent("on"+s,k),o[Mn]=o[Mn]||{},o[Mn][v]=k}function Vc(o,s,c,p,v){v=v||s+d(c)+(p?"_"+d(p):"");var k=o[Mn]&&o[Mn][v];if(!k)return this;!fe.touchNative&&fe.pointer&&s.indexOf("touch")===0?$x(o,s,k):fe.touch&&s==="dblclick"?Gx(o,k):"removeEventListener"in o?o.removeEventListener(Wc[s]||s,k,!1):o.detachEvent("on"+s,k),o[Mn][v]=null}function vo(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function qc(o){return Hc(o,"wheel",vo),this}function aa(o){return be(o,"mousedown touchstart dblclick contextmenu",vo),o._leaflet_disable_click=!0,this}function yt(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function go(o){return yt(o),vo(o),this}function Sm(o){if(o.composedPath)return o.composedPath();for(var s=[],c=o.target;c;)s.push(c),c=c.parentNode;return s}function Pm(o,s){if(!s)return new M(o.clientX,o.clientY);var c=Zc(s),p=c.boundingClientRect;return new M((o.clientX-p.left)/c.x-s.clientLeft,(o.clientY-p.top)/c.y-s.clientTop)}var Yx=fe.linux&&fe.chrome?window.devicePixelRatio:fe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Cm(o){return fe.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/Yx:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Kc(o,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var ew={__proto__:null,on:be,off:$e,stopPropagation:vo,disableScrollPropagation:qc,disableClickPropagation:aa,preventDefault:yt,stop:go,getPropagationPath:Sm,getMousePosition:Pm,getWheelDelta:Cm,isExternalTarget:Kc,addListener:be,removeListener:$e},Em=ue.extend({run:function(o,s,c,p){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(p||.5,.2),this._startPos=_o(o),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=R(this._animate,this),this._step()},_step:function(o){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,s){var c=this._startPos.add(this._offset.multiplyBy(o));s&&c._round(),at(this._el,c),this.fire("step")},_complete:function(){Y(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),Oe=ue.extend({options:{crs:qe,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView($(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=ta&&fe.any3d&&!fe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),be(this._proxy,bm,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),o=this._limitCenter($(o),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=i({animate:c.animate},c.zoom),c.pan=i({animate:c.animate,duration:c.duration},c.pan));var p=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,s,c.zoom):this._tryAnimatedPan(o,c.pan);if(p)return clearTimeout(this._sizeTimer),this}return this._resetView(o,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,s){return this._loaded?this.setView(this.getCenter(),o,{zoom:s}):(this._zoom=o,this)},zoomIn:function(o,s){return o=o||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,s)},zoomOut:function(o,s){return o=o||(fe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,s)},setZoomAround:function(o,s,c){var p=this.getZoomScale(s),v=this.getSize().divideBy(2),k=o instanceof M?o:this.latLngToContainerPoint(o),E=k.subtract(v).multiplyBy(1-1/p),N=this.containerPointToLatLng(v.add(E));return this.setView(N,s,{zoom:c})},_getBoundsCenterZoom:function(o,s){s=s||{},o=o.getBounds?o.getBounds():Q(o);var c=K(s.paddingTopLeft||s.padding||[0,0]),p=K(s.paddingBottomRight||s.padding||[0,0]),v=this.getBoundsZoom(o,!1,c.add(p));if(v=typeof s.maxZoom=="number"?Math.min(s.maxZoom,v):v,v===1/0)return{center:o.getCenter(),zoom:v};var k=p.subtract(c).divideBy(2),E=this.project(o.getSouthWest(),v),N=this.project(o.getNorthEast(),v),F=this.unproject(E.add(N).divideBy(2).add(k),v);return{center:F,zoom:v}},fitBounds:function(o,s){if(o=Q(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,s){return this.setView(o,this._zoom,{pan:s})},panBy:function(o,s){if(o=K(o).round(),s=s||{},!o.x&&!o.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Em,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){we(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,s,c){if(c=c||{},c.animate===!1||!fe.any3d)return this.setView(o,s,c);this._stop();var p=this.project(this.getCenter()),v=this.project(o),k=this.getSize(),E=this._zoom;o=$(o),s=s===void 0?E:s;var N=Math.max(k.x,k.y),F=N*this.getZoomScale(E,s),X=v.distanceTo(p)||1,ae=1.42,ge=ae*ae;function Se(st){var Xs=st?-1:1,$w=st?F:N,Zw=F*F-N*N+Xs*ge*ge*X*X,Ww=2*$w*ge*X,id=Zw/Ww,s_=Math.sqrt(id*id+1)-id,Hw=s_<1e-9?-18:Math.log(s_);return Hw}function sn(st){return(Math.exp(st)-Math.exp(-st))/2}function bo(st){return(Math.exp(st)+Math.exp(-st))/2}function Gs(st){return sn(st)/bo(st)}var Er=Se(0);function od(st){return N*(bo(Er)/bo(Er+ae*st))}function Dw(st){return N*(bo(Er)*Gs(Er+ae*st)-sn(Er))/ge}function Fw(st){return 1-Math.pow(1-st,1.5)}var jw=Date.now(),i_=(Se(1)-Er)/ae,Uw=c.duration?1e3*c.duration:1e3*i_*.8;function a_(){var st=(Date.now()-jw)/Uw,Xs=Fw(st)*i_;st<=1?(this._flyToFrame=R(a_,this),this._move(this.unproject(p.add(v.subtract(p).multiplyBy(Dw(Xs)/X)),E),this.getScaleZoom(N/od(Xs),E),{flyTo:!0})):this._move(o,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),a_.call(this),this},flyToBounds:function(o,s){var c=this._getBoundsCenterZoom(o,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(o){return o=Q(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var s=this.options.minZoom;return this.options.minZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var s=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&s!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,s){this._enforcingBounds=!0;var c=this.getCenter(),p=this._limitCenter(c,this._zoom,Q(o));return c.equals(p)||this.panTo(p,s),this._enforcingBounds=!1,this},panInside:function(o,s){s=s||{};var c=K(s.paddingTopLeft||s.padding||[0,0]),p=K(s.paddingBottomRight||s.padding||[0,0]),v=this.project(this.getCenter()),k=this.project(o),E=this.getPixelBounds(),N=B([E.min.add(c),E.max.subtract(p)]),F=N.getSize();if(!N.contains(k)){this._enforcingBounds=!0;var X=k.subtract(N.getCenter()),ae=N.extend(k).getSize().subtract(F);v.x+=X.x<0?-ae.x:ae.x,v.y+=X.y<0?-ae.y:ae.y,this.panTo(this.unproject(v),s),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=i({animate:!1,pan:!0},o===!0?{animate:!0}:o);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),p=s.divideBy(2).round(),v=c.divideBy(2).round(),k=p.subtract(v);return!k.x&&!k.y?this:(o.animate&&o.pan?this.panBy(k):(o.pan&&this._rawPanBy(k),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=i({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,o):navigator.geolocation.getCurrentPosition(s,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var s=o.code,c=o.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var s=o.coords.latitude,c=o.coords.longitude,p=new te(s,c),v=p.toBounds(o.coords.accuracy*2),k=this._locateOptions;if(k.setView){var E=this.getBoundsZoom(v);this.setView(p,k.maxZoom?Math.min(E,k.maxZoom):E)}var N={latlng:p,bounds:v,timestamp:o.timestamp};for(var F in o.coords)typeof o.coords[F]=="number"&&(N[F]=o.coords[F]);this.fire("locationfound",N)}},addHandler:function(o,s){if(!s)return this;var c=this[o]=new s(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Ge(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Y(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Ge(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,s){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),p=Ae("div",c,s||this._mapPane);return o&&(this._panes[o]=p),p},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),s=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new A(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,s,c){o=Q(o),c=K(c||[0,0]);var p=this.getZoom()||0,v=this.getMinZoom(),k=this.getMaxZoom(),E=o.getNorthWest(),N=o.getSouthEast(),F=this.getSize().subtract(c),X=B(this.project(N,p),this.project(E,p)).getSize(),ae=fe.any3d?this.options.zoomSnap:1,ge=F.x/X.x,Se=F.y/X.y,sn=s?Math.max(ge,Se):Math.min(ge,Se);return p=this.getScaleZoom(sn,p),ae&&(p=Math.round(p/(ae/100))*(ae/100),p=s?Math.ceil(p/ae)*ae:Math.floor(p/ae)*ae),Math.max(v,Math.min(k,p))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,s){var c=this._getTopLeftPoint(o,s);return new O(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(o)/c.scale(s)},getScaleZoom:function(o,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var p=c.zoom(o*c.scale(s));return isNaN(p)?1/0:p},project:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint($(o),s)},unproject:function(o,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(K(o),s)},layerPointToLatLng:function(o){var s=K(o).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(o){var s=this.project($(o))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng($(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(Q(o))},distance:function(o,s){return this.options.crs.distance($(o),$(s))},containerPointToLayerPoint:function(o){return K(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return K(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var s=this.containerPointToLayerPoint(K(o));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint($(o)))},mouseEventToContainerPoint:function(o){return Pm(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var s=this._container=xm(o);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");be(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&fe.any3d,we(o,"leaflet-container"+(fe.touch?" leaflet-touch":"")+(fe.retina?" leaflet-retina":"")+(fe.ielt9?" leaflet-oldie":"")+(fe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=na(o,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new M(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(we(o.markerPane,"leaflet-zoom-hide"),we(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,s,c){at(this._mapPane,new M(0,0));var p=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var v=this._zoom!==s;this._moveStart(v,c)._move(o,s)._moveEnd(v),this.fire("viewreset"),p&&this.fire("load")},_moveStart:function(o,s){return o&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(o,s,c,p){s===void 0&&(s=this._zoom);var v=this._zoom!==s;return this._zoom=s,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),p?c&&c.pinch&&this.fire("zoom",c):((v||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Y(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){at(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var s=o?$e:be;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),fe.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Y(this._resizeRequest),this._resizeRequest=R(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,s){for(var c=[],p,v=s==="mouseout"||s==="mouseover",k=o.target||o.srcElement,E=!1;k;){if(p=this._targets[d(k)],p&&(s==="click"||s==="preclick")&&this._draggableMoved(p)){E=!0;break}if(p&&p.listens(s,!0)&&(v&&!Kc(k,o)||(c.push(p),v))||k===this._container)break;k=k.parentNode}return!c.length&&!E&&!v&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var s=o.target||o.srcElement;if(!(!this._loaded||s._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(s))){var c=o.type;c==="mousedown"&&$c(s),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,s,c){if(o.type==="click"){var p=i({},o);p.type="preclick",this._fireDOMEvent(p,p.type,c)}var v=this._findEventTargets(o,s);if(c){for(var k=[],E=0;E<c.length;E++)c[E].listens(s,!0)&&k.push(c[E]);v=k.concat(v)}if(v.length){s==="contextmenu"&&yt(o);var N=v[0],F={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var X=N.getLatLng&&(!N._radius||N._radius<=10);F.containerPoint=X?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(o),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=X?N.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(E=0;E<v.length;E++)if(v[E].fire(s,F,!0),F.originalEvent._stopped||v[E].options.bubblingMouseEvents===!1&&P(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,s=this._handlers.length;o<s;o++)this._handlers[o].disable()},whenReady:function(o,s){return this._loaded?o.call(s||this,{target:this}):this.on("load",o,s),this},_getMapPanePos:function(){return _o(this._mapPane)||new M(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,s){var c=o&&s!==void 0?this._getNewPixelOrigin(o,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,s){var c=this.getSize()._divideBy(2);return this.project(o,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return this.project(o,s)._subtract(p)},_latLngBoundsToNewLayerBounds:function(o,s,c){var p=this._getNewPixelOrigin(c,s);return B([this.project(o.getSouthWest(),s)._subtract(p),this.project(o.getNorthWest(),s)._subtract(p),this.project(o.getSouthEast(),s)._subtract(p),this.project(o.getNorthEast(),s)._subtract(p)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,s,c){if(!c)return o;var p=this.project(o,s),v=this.getSize().divideBy(2),k=new O(p.subtract(v),p.add(v)),E=this._getBoundsOffset(k,c,s);return Math.abs(E.x)<=1&&Math.abs(E.y)<=1?o:this.unproject(p.add(E),s)},_limitOffset:function(o,s){if(!s)return o;var c=this.getPixelBounds(),p=new O(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(p,s))},_getBoundsOffset:function(o,s,c){var p=B(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),v=p.min.subtract(o.min),k=p.max.subtract(o.max),E=this._rebound(v.x,-k.x),N=this._rebound(v.y,-k.y);return new M(E,N)},_rebound:function(o,s){return o+s>0?Math.round(o-s)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(s))},_limitZoom:function(o){var s=this.getMinZoom(),c=this.getMaxZoom(),p=fe.any3d?this.options.zoomSnap:1;return p&&(o=Math.round(o/p)*p),Math.max(s,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){rt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,s){var c=this._getCenterOffset(o)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var o=this._proxy=Ae("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(s){var c=Bc,p=this._proxy.style[c];mo(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),p===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Ge(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),s=this.getZoom();mo(this._proxy,this.project(o,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var p=this.getZoomScale(s),v=this._getCenterOffset(o)._divideBy(1-1/p);return c.animate!==!0&&!this.getSize().contains(v)?!1:(R(function(){this._moveStart(!0,!1)._animateZoom(o,s,!0)},this),!0)},_animateZoom:function(o,s,c,p){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=s,we(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:s,noUpdate:p}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&rt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function tw(o,s){return new Oe(o,s)}var vn=re.extend({options:{position:"topright"},initialize:function(o){w(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var s=this._map;return s&&s.removeControl(this),this.options.position=o,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var s=this._container=this.onAdd(o),c=this.getPosition(),p=o._controlCorners[c];return we(s,"leaflet-control"),c.indexOf("bottom")!==-1?p.insertBefore(s,p.firstChild):p.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Ge(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),sa=function(o){return new vn(o)};Oe.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},s="leaflet-",c=this._controlContainer=Ae("div",s+"control-container",this._container);function p(v,k){var E=s+v+" "+s+k;o[v+k]=Ae("div",E,c)}p("top","left"),p("top","right"),p("bottom","left"),p("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Ge(this._controlCorners[o]);Ge(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Om=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,s,c,p){return c<p?-1:p<c?1:0}},initialize:function(o,s,c){w(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var p in o)this._addLayer(o[p],p);for(p in s)this._addLayer(s[p],p,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return vn.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,s){return this._addLayer(o,s),this._map?this._update():this},addOverlay:function(o,s){return this._addLayer(o,s,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(o));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){we(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(we(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):rt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return rt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",s=this._container=Ae("div",o),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),aa(s),qc(s);var p=this._section=Ae("section",o+"-list");c&&(this._map.on("click",this.collapse,this),be(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=Ae("a",o+"-toggle",s);v.href="#",v.title="Layers",v.setAttribute("role","button"),be(v,{keydown:function(k){k.keyCode===13&&this._expandSafely()},click:function(k){yt(k),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Ae("div",o+"-base",p),this._separator=Ae("div",o+"-separator",p),this._overlaysList=Ae("div",o+"-overlays",p),s.appendChild(p)},_getLayer:function(o){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===o)return this._layers[s]},_addLayer:function(o,s,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(p,v){return this.options.sortFunction(p.layer,v.layer,p.name,v.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ns(this._baseLayersList),Ns(this._overlaysList),this._layerControlInputs=[];var o,s,c,p,v=0;for(c=0;c<this._layers.length;c++)p=this._layers[c],this._addItem(p),s=s||p.overlay,o=o||!p.overlay,v+=p.overlay?0:1;return this.options.hideSingleBase&&(o=o&&v>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=s&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var s=this._getLayer(d(o.target)),c=s.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(o,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(s?' checked="checked"':"")+"/>",p=document.createElement("div");return p.innerHTML=c,p.firstChild},_addItem:function(o){var s=document.createElement("label"),c=this._map.hasLayer(o.layer),p;o.overlay?(p=document.createElement("input"),p.type="checkbox",p.className="leaflet-control-layers-selector",p.defaultChecked=c):p=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(p),p.layerId=d(o.layer),be(p,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+o.name;var k=document.createElement("span");s.appendChild(k),k.appendChild(p),k.appendChild(v);var E=o.overlay?this._overlaysList:this._baseLayersList;return E.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){var o=this._layerControlInputs,s,c,p=[],v=[];this._handlingClick=!0;for(var k=o.length-1;k>=0;k--)s=o[k],c=this._getLayer(s.layerId).layer,s.checked?p.push(c):s.checked||v.push(c);for(k=0;k<v.length;k++)this._map.hasLayer(v[k])&&this._map.removeLayer(v[k]);for(k=0;k<p.length;k++)this._map.hasLayer(p[k])||this._map.addLayer(p[k]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,s,c,p=this._map.getZoom(),v=o.length-1;v>=0;v--)s=o[v],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&p<c.options.minZoom||c.options.maxZoom!==void 0&&p>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;be(o,"click",yt),this.expand(),setTimeout(function(){$e(o,"click",yt)})}}),nw=function(o,s,c){return new Om(o,s,c)},Qc=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var s="leaflet-control-zoom",c=Ae("div",s+" leaflet-bar"),p=this.options;return this._zoomInButton=this._createButton(p.zoomInText,p.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(p.zoomOutText,p.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,s,c,p,v){var k=Ae("a",c,p);return k.innerHTML=o,k.href="#",k.title=s,k.setAttribute("role","button"),k.setAttribute("aria-label",s),aa(k),be(k,"click",go),be(k,"click",v,this),be(k,"click",this._refocusOnMap,this),k},_updateDisabled:function(){var o=this._map,s="leaflet-disabled";rt(this._zoomInButton,s),rt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(we(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(we(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});Oe.mergeOptions({zoomControl:!0}),Oe.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Qc,this.addControl(this.zoomControl))});var rw=function(o){return new Qc(o)},Tm=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var s="leaflet-control-scale",c=Ae("div",s),p=this.options;return this._addScales(p,s+"-line",c),o.on(p.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,s,c){o.metric&&(this._mScale=Ae("div",s,c)),o.imperial&&(this._iScale=Ae("div",s,c))},_update:function(){var o=this._map,s=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,s]),o.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var s=this._getRoundNum(o),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/o)},_updateImperial:function(o){var s=o*3.2808399,c,p,v;s>5280?(c=s/5280,p=this._getRoundNum(c),this._updateScale(this._iScale,p+" mi",p/c)):(v=this._getRoundNum(s),this._updateScale(this._iScale,v+" ft",v/s))},_updateScale:function(o,s,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=s},_getRoundNum:function(o){var s=Math.pow(10,(Math.floor(o)+"").length-1),c=o/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),ow=function(o){return new Tm(o)},iw='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Gc=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(fe.inlineSvg?iw+" ":"")+"Leaflet</a>"},initialize:function(o){w(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Ae("div","leaflet-control-attribution"),aa(this._container);for(var s in o._layers)o._layers[s].getAttribution&&this.addAttribution(o._layers[s].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var s in this._attributions)this._attributions[s]&&o.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});Oe.mergeOptions({attributionControl:!0}),Oe.addInitHook(function(){this.options.attributionControl&&new Gc().addTo(this)});var aw=function(o){return new Gc(o)};vn.Layers=Om,vn.Zoom=Qc,vn.Scale=Tm,vn.Attribution=Gc,sa.layers=nw,sa.zoom=rw,sa.scale=ow,sa.attribution=aw;var Dn=re.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Dn.addTo=function(o,s){return o.addHandler(s,this),this};var sw={Events:ee},Lm=fe.touch?"touchstart mousedown":"mousedown",Pr=ue.extend({options:{clickTolerance:3},initialize:function(o,s,c,p){w(this,p),this._element=o,this._dragStartTarget=s||o,this._preventOutline=c},enable:function(){this._enabled||(be(this._dragStartTarget,Lm,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Pr._dragging===this&&this.finishDrag(!0),$e(this._dragStartTarget,Lm,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!Ic(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Pr._dragging===this&&this.finishDrag();return}if(!(Pr._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Pr._dragging=this,this._preventOutline&&$c(this._element),Fc(),ra(),!this._moving)){this.fire("down");var s=o.touches?o.touches[0]:o,c=wm(this._element);this._startPoint=new M(s.clientX,s.clientY),this._startPos=_o(this._element),this._parentScale=Zc(c);var p=o.type==="mousedown";be(document,p?"mousemove":"touchmove",this._onMove,this),be(document,p?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var s=o.touches&&o.touches.length===1?o.touches[0]:o,c=new M(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,yt(o),this._moved||(this.fire("dragstart"),this._moved=!0,we(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),we(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),at(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){rt(document.body,"leaflet-dragging"),this._lastTarget&&(rt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),$e(document,"mousemove touchmove",this._onMove,this),$e(document,"mouseup touchend touchcancel",this._onUp,this),jc(),oa(),this._moved&&this._moving&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)}),this._moving=!1,Pr._dragging=!1}});function zm(o,s){if(!s||!o.length)return o.slice();var c=s*s;return o=cw(o,c),o=uw(o,c),o}function Rm(o,s,c){return Math.sqrt(la(o,s,c,!0))}function lw(o,s,c){return la(o,s,c)}function uw(o,s){var c=o.length,p=typeof Uint8Array!=void 0+""?Uint8Array:Array,v=new p(c);v[0]=v[c-1]=1,Xc(o,v,s,0,c-1);var k,E=[];for(k=0;k<c;k++)v[k]&&E.push(o[k]);return E}function Xc(o,s,c,p,v){var k=0,E,N,F;for(N=p+1;N<=v-1;N++)F=la(o[N],o[p],o[v],!0),F>k&&(E=N,k=F);k>c&&(s[E]=1,Xc(o,s,c,p,E),Xc(o,s,c,E,v))}function cw(o,s){for(var c=[o[0]],p=1,v=0,k=o.length;p<k;p++)dw(o[p],o[v])>s&&(c.push(o[p]),v=p);return v<k-1&&c.push(o[k-1]),c}var Am;function Nm(o,s,c,p,v){var k=p?Am:yo(o,c),E=yo(s,c),N,F,X;for(Am=E;;){if(!(k|E))return[o,s];if(k&E)return!1;N=k||E,F=Fs(o,s,N,c,v),X=yo(F,c),N===k?(o=F,k=X):(s=F,E=X)}}function Fs(o,s,c,p,v){var k=s.x-o.x,E=s.y-o.y,N=p.min,F=p.max,X,ae;return c&8?(X=o.x+k*(F.y-o.y)/E,ae=F.y):c&4?(X=o.x+k*(N.y-o.y)/E,ae=N.y):c&2?(X=F.x,ae=o.y+E*(F.x-o.x)/k):c&1&&(X=N.x,ae=o.y+E*(N.x-o.x)/k),new M(X,ae,v)}function yo(o,s){var c=0;return o.x<s.min.x?c|=1:o.x>s.max.x&&(c|=2),o.y<s.min.y?c|=4:o.y>s.max.y&&(c|=8),c}function dw(o,s){var c=s.x-o.x,p=s.y-o.y;return c*c+p*p}function la(o,s,c,p){var v=s.x,k=s.y,E=c.x-v,N=c.y-k,F=E*E+N*N,X;return F>0&&(X=((o.x-v)*E+(o.y-k)*N)/F,X>1?(v=c.x,k=c.y):X>0&&(v+=E*X,k+=N*X)),E=o.x-v,N=o.y-k,p?E*E+N*N:new M(v,k)}function an(o){return!S(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Bm(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),an(o)}function Im(o,s){var c,p,v,k,E,N,F,X;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ae=[];for(var ge in o)ae.push(s.project($(o[ge])));var Se=ae.length;for(c=0,p=0;c<Se-1;c++)p+=ae[c].distanceTo(ae[c+1])/2;if(p===0)X=ae[0];else for(c=0,k=0;c<Se-1;c++)if(E=ae[c],N=ae[c+1],v=E.distanceTo(N),k+=v,k>p){F=(k-p)/v,X=[N.x-F*(N.x-E.x),N.y-F*(N.y-E.y)];break}return s.unproject(K(X))}var fw={__proto__:null,simplify:zm,pointToSegmentDistance:Rm,closestPointOnSegment:lw,clipSegment:Nm,_getEdgeIntersection:Fs,_getBitCode:yo,_sqClosestPointOnSegment:la,isFlat:an,_flat:Bm,polylineCenter:Im};function Mm(o,s,c){var p,v=[1,4,2,8],k,E,N,F,X,ae,ge,Se;for(k=0,ae=o.length;k<ae;k++)o[k]._code=yo(o[k],s);for(N=0;N<4;N++){for(ge=v[N],p=[],k=0,ae=o.length,E=ae-1;k<ae;E=k++)F=o[k],X=o[E],F._code&ge?X._code&ge||(Se=Fs(X,F,ge,s,c),Se._code=yo(Se,s),p.push(Se)):(X._code&ge&&(Se=Fs(X,F,ge,s,c),Se._code=yo(Se,s),p.push(Se)),p.push(F));o=p}return o}function Dm(o,s){var c,p,v,k,E,N,F,X,ae;if(!o||o.length===0)throw new Error("latlngs not passed");an(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ge=[];for(var Se in o)ge.push(s.project($(o[Se])));var sn=ge.length;for(N=F=X=0,c=0,p=sn-1;c<sn;p=c++)v=ge[c],k=ge[p],E=v.y*k.x-k.y*v.x,F+=(v.x+k.x)*E,X+=(v.y+k.y)*E,N+=E*3;return N===0?ae=ge[0]:ae=[F/N,X/N],s.unproject(K(ae))}var pw={__proto__:null,clipPolygon:Mm,polygonCenter:Dm},Jc={project:function(o){return new M(o.lng,o.lat)},unproject:function(o){return new te(o.y,o.x)},bounds:new O([-180,-90],[180,90])},Yc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new O([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var s=Math.PI/180,c=this.R,p=o.lat*s,v=this.R_MINOR/c,k=Math.sqrt(1-v*v),E=k*Math.sin(p),N=Math.tan(Math.PI/4-p/2)/Math.pow((1-E)/(1+E),k/2);return p=-c*Math.log(Math.max(N,1e-10)),new M(o.lng*s*c,p)},unproject:function(o){for(var s=180/Math.PI,c=this.R,p=this.R_MINOR/c,v=Math.sqrt(1-p*p),k=Math.exp(-o.y/c),E=Math.PI/2-2*Math.atan(k),N=0,F=.1,X;N<15&&Math.abs(F)>1e-7;N++)X=v*Math.sin(E),X=Math.pow((1-X)/(1+X),v/2),F=Math.PI/2-2*Math.atan(k*X)-E,E+=F;return new te(E*s,o.x*s/c)}},hw={__proto__:null,LonLat:Jc,Mercator:Yc,SphericalMercator:We},mw=i({},se,{code:"EPSG:3395",projection:Yc,transformation:function(){var o=.5/(Math.PI*Yc.R);return Ee(o,.5,-o,.5)}()}),Fm=i({},se,{code:"EPSG:4326",projection:Jc,transformation:Ee(1/180,1,-1/180,.5)}),_w=i({},ne,{projection:Jc,transformation:Ee(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,s){var c=s.lng-o.lng,p=s.lat-o.lat;return Math.sqrt(c*c+p*p)},infinite:!0});ne.Earth=se,ne.EPSG3395=mw,ne.EPSG3857=qe,ne.EPSG900913=Te,ne.EPSG4326=Fm,ne.Simple=_w;var gn=ue.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var s=o.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});Oe.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(o);return this._layers[s]?this:(this._layers[s]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var s=d(o);return this._layers[s]?(this._loaded&&o.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},_addLayers:function(o){o=o?S(o)?o:[o]:[];for(var s=0,c=o.length;s<c;s++)this.addLayer(o[s])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var s=d(o);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,s=-1/0,c=this._getZoomSpan();for(var p in this._zoomBoundLayers){var v=this._zoomBoundLayers[p].options;o=v.minZoom===void 0?o:Math.min(o,v.minZoom),s=v.maxZoom===void 0?s:Math.max(s,v.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ti=gn.extend({initialize:function(o,s){w(this,s),this._layers={};var c,p;if(o)for(c=0,p=o.length;c<p;c++)this.addLayer(o[c])},addLayer:function(o){var s=this.getLayerId(o);return this._layers[s]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var s=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(o){var s=typeof o=="number"?o:this.getLayerId(o);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var s=Array.prototype.slice.call(arguments,1),c,p;for(c in this._layers)p=this._layers[c],p[o]&&p[o].apply(p,s);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,s){for(var c in this._layers)o.call(s,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),vw=function(o,s){return new ti(o,s)},tr=ti.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),ti.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),ti.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new A;for(var s in this._layers){var c=this._layers[s];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),gw=function(o,s){return new tr(o,s)},ni=re.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){w(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,s){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var p=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(p,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(p.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),p},_setIconStyles:function(o,s){var c=this.options,p=c[s+"Size"];typeof p=="number"&&(p=[p,p]);var v=K(p),k=K(s==="shadow"&&c.shadowAnchor||c.iconAnchor||v&&v.divideBy(2,!0));o.className="leaflet-marker-"+s+" "+(c.className||""),k&&(o.style.marginLeft=-k.x+"px",o.style.marginTop=-k.y+"px"),v&&(o.style.width=v.x+"px",o.style.height=v.y+"px")},_createImg:function(o,s){return s=s||document.createElement("img"),s.src=o,s},_getIconUrl:function(o){return fe.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function yw(o){return new ni(o)}var ua=ni.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof ua.imagePath!="string"&&(ua.imagePath=this._detectIconPath()),(this.options.imagePath||ua.imagePath)+ni.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var s=function(c,p,v){var k=p.exec(c);return k&&k[v]};return o=s(o,/^url\((['"])?(.+)\1\)$/,2),o&&s(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Ae("div","leaflet-default-icon-path",document.body),s=na(o,"background-image")||na(o,"backgroundImage");if(document.body.removeChild(o),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),jm=Dn.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Pr(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),we(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&rt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var s=this._marker,c=s._map,p=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,k=_o(s._icon),E=c.getPixelBounds(),N=c.getPixelOrigin(),F=B(E.min._subtract(N).add(v),E.max._subtract(N).subtract(v));if(!F.contains(k)){var X=K((Math.max(F.max.x,k.x)-F.max.x)/(E.max.x-F.max.x)-(Math.min(F.min.x,k.x)-F.min.x)/(E.min.x-F.min.x),(Math.max(F.max.y,k.y)-F.max.y)/(E.max.y-F.max.y)-(Math.min(F.min.y,k.y)-F.min.y)/(E.min.y-F.min.y)).multiplyBy(p);c.panBy(X,{animate:!1}),this._draggable._newPos._add(X),this._draggable._startPos._add(X),at(s._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=R(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(Y(this._panRequest),this._panRequest=R(this._adjustPan.bind(this,o)))},_onDrag:function(o){var s=this._marker,c=s._shadow,p=_o(s._icon),v=s._map.layerPointToLatLng(p);c&&at(c,p),s._latlng=v,o.latlng=v,o.oldLatLng=this._oldLatLng,s.fire("move",o).fire("drag",o)},_onDragEnd:function(o){Y(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),js=gn.extend({options:{icon:new ua,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,s){w(this,s),this._latlng=$(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),p=!1;c!==this._icon&&(this._icon&&this._removeIcon(),p=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),we(c,s),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(c,"focus",this._panOnFocus,this);var v=o.icon.createShadow(this._shadow),k=!1;v!==this._shadow&&(this._removeShadow(),k=!0),v&&(we(v,s),v.alt=""),this._shadow=v,o.opacity<1&&this._updateOpacity(),p&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&k&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&$e(this._icon,"focus",this._panOnFocus,this),Ge(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Ge(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&at(this._icon,o),this._shadow&&at(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(we(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),jm)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new jm(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&on(this._icon,o),this._shadow&&on(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var s=this.options.icon.options,c=s.iconSize?K(s.iconSize):K(0,0),p=s.iconAnchor?K(s.iconAnchor):K(0,0);o.panInside(this._latlng,{paddingTopLeft:p,paddingBottomRight:c.subtract(p)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function bw(o,s){return new js(o,s)}var Cr=gn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return w(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Us=Cr.extend({options:{fill:!0,radius:10},initialize:function(o,s){w(this,s),this._latlng=$(o),this._radius=this.options.radius},setLatLng:function(o){var s=this._latlng;return this._latlng=$(o),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var s=o&&o.radius||this._radius;return Cr.prototype.setStyle.call(this,o),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,s=this._radiusY||o,c=this._clickTolerance(),p=[o+c,s+c];this._pxBounds=new O(this._point.subtract(p),this._point.add(p))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function xw(o,s){return new Us(o,s)}var ed=Us.extend({initialize:function(o,s,c){if(typeof s=="number"&&(s=i({},c,{radius:s})),w(this,s),this._latlng=$(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new A(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:Cr.prototype.setStyle,_project:function(){var o=this._latlng.lng,s=this._latlng.lat,c=this._map,p=c.options.crs;if(p.distance===se.distance){var v=Math.PI/180,k=this._mRadius/se.R/v,E=c.project([s+k,o]),N=c.project([s-k,o]),F=E.add(N).divideBy(2),X=c.unproject(F).lat,ae=Math.acos((Math.cos(k*v)-Math.sin(s*v)*Math.sin(X*v))/(Math.cos(s*v)*Math.cos(X*v)))/v;(isNaN(ae)||ae===0)&&(ae=k/Math.cos(Math.PI/180*s)),this._point=F.subtract(c.getPixelOrigin()),this._radius=isNaN(ae)?0:F.x-c.project([X,o-ae]).x,this._radiusY=F.y-E.y}else{var ge=p.unproject(p.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ge).x}this._updateBounds()}});function ww(o,s,c){return new ed(o,s,c)}var nr=Cr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,s){w(this,s),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var s=1/0,c=null,p=la,v,k,E=0,N=this._parts.length;E<N;E++)for(var F=this._parts[E],X=1,ae=F.length;X<ae;X++){v=F[X-1],k=F[X];var ge=p(o,v,k,!0);ge<s&&(s=ge,c=p(o,v,k))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Im(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,s){return s=s||this._defaultShape(),o=$(o),s.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new A,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return an(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var s=[],c=an(o),p=0,v=o.length;p<v;p++)c?(s[p]=$(o[p]),this._bounds.extend(s[p])):s[p]=this._convertLatLngs(o[p]);return s},_project:function(){var o=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),s=new M(o,o);this._rawPxBounds&&(this._pxBounds=new O([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(o,s,c){var p=o[0]instanceof te,v=o.length,k,E;if(p){for(E=[],k=0;k<v;k++)E[k]=this._map.latLngToLayerPoint(o[k]),c.extend(E[k]);s.push(E)}else for(k=0;k<v;k++)this._projectLatlngs(o[k],s,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,p,v,k,E,N,F;for(c=0,v=0,k=this._rings.length;c<k;c++)for(F=this._rings[c],p=0,E=F.length;p<E-1;p++)N=Nm(F[p],F[p+1],o,p,!0),N&&(s[v]=s[v]||[],s[v].push(N[0]),(N[1]!==F[p+1]||p===E-2)&&(s[v].push(N[1]),v++))}},_simplifyPoints:function(){for(var o=this._parts,s=this.options.smoothFactor,c=0,p=o.length;c<p;c++)o[c]=zm(o[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,s){var c,p,v,k,E,N,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,k=this._parts.length;c<k;c++)for(N=this._parts[c],p=0,E=N.length,v=E-1;p<E;v=p++)if(!(!s&&p===0)&&Rm(o,N[v],N[p])<=F)return!0;return!1}});function kw(o,s){return new nr(o,s)}nr._flat=Bm;var ri=nr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Dm(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var s=nr.prototype._convertLatLngs.call(this,o),c=s.length;return c>=2&&s[0]instanceof te&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(o){nr.prototype._setLatLngs.call(this,o),an(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return an(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,s=this.options.weight,c=new M(s,s);if(o=new O(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var p=0,v=this._rings.length,k;p<v;p++)k=Mm(this._rings[p],o,!0),k.length&&this._parts.push(k)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var s=!1,c,p,v,k,E,N,F,X;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(k=0,F=this._parts.length;k<F;k++)for(c=this._parts[k],E=0,X=c.length,N=X-1;E<X;N=E++)p=c[E],v=c[N],p.y>o.y!=v.y>o.y&&o.x<(v.x-p.x)*(o.y-p.y)/(v.y-p.y)+p.x&&(s=!s);return s||nr.prototype._containsPoint.call(this,o,!0)}});function Sw(o,s){return new ri(o,s)}var rr=tr.extend({initialize:function(o,s){w(this,s),this._layers={},o&&this.addData(o)},addData:function(o){var s=S(o)?o:o.features,c,p,v;if(s){for(c=0,p=s.length;c<p;c++)v=s[c],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var k=this.options;if(k.filter&&!k.filter(o))return this;var E=$s(o,k);return E?(E.feature=Hs(o),E.defaultOptions=E.options,this.resetStyle(E),k.onEachFeature&&k.onEachFeature(o,E),this.addLayer(E)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=i({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(s){this._setLayerStyle(s,o)},this)},_setLayerStyle:function(o,s){o.setStyle&&(typeof s=="function"&&(s=s(o.feature)),o.setStyle(s))}});function $s(o,s){var c=o.type==="Feature"?o.geometry:o,p=c?c.coordinates:null,v=[],k=s&&s.pointToLayer,E=s&&s.coordsToLatLng||td,N,F,X,ae;if(!p&&!c)return null;switch(c.type){case"Point":return N=E(p),Um(k,o,N,s);case"MultiPoint":for(X=0,ae=p.length;X<ae;X++)N=E(p[X]),v.push(Um(k,o,N,s));return new tr(v);case"LineString":case"MultiLineString":return F=Zs(p,c.type==="LineString"?0:1,E),new nr(F,s);case"Polygon":case"MultiPolygon":return F=Zs(p,c.type==="Polygon"?1:2,E),new ri(F,s);case"GeometryCollection":for(X=0,ae=c.geometries.length;X<ae;X++){var ge=$s({geometry:c.geometries[X],type:"Feature",properties:o.properties},s);ge&&v.push(ge)}return new tr(v);case"FeatureCollection":for(X=0,ae=c.features.length;X<ae;X++){var Se=$s(c.features[X],s);Se&&v.push(Se)}return new tr(v);default:throw new Error("Invalid GeoJSON object.")}}function Um(o,s,c,p){return o?o(s,c):new js(c,p&&p.markersInheritOptions&&p)}function td(o){return new te(o[1],o[0],o[2])}function Zs(o,s,c){for(var p=[],v=0,k=o.length,E;v<k;v++)E=s?Zs(o[v],s-1,c):(c||td)(o[v]),p.push(E);return p}function nd(o,s){return o=$(o),o.alt!==void 0?[h(o.lng,s),h(o.lat,s),h(o.alt,s)]:[h(o.lng,s),h(o.lat,s)]}function Ws(o,s,c,p){for(var v=[],k=0,E=o.length;k<E;k++)v.push(s?Ws(o[k],an(o[k])?0:s-1,c,p):nd(o[k],p));return!s&&c&&v.push(v[0].slice()),v}function oi(o,s){return o.feature?i({},o.feature,{geometry:s}):Hs(s)}function Hs(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var rd={toGeoJSON:function(o){return oi(this,{type:"Point",coordinates:nd(this.getLatLng(),o)})}};js.include(rd),ed.include(rd),Us.include(rd),nr.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=Ws(this._latlngs,s?1:0,!1,o);return oi(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),ri.include({toGeoJSON:function(o){var s=!an(this._latlngs),c=s&&!an(this._latlngs[0]),p=Ws(this._latlngs,c?2:s?1:0,!0,o);return s||(p=[p]),oi(this,{type:(c?"Multi":"")+"Polygon",coordinates:p})}}),ti.include({toMultiPoint:function(o){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(o).geometry.coordinates)}),oi(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(o){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(o);var c=s==="GeometryCollection",p=[];return this.eachLayer(function(v){if(v.toGeoJSON){var k=v.toGeoJSON(o);if(c)p.push(k.geometry);else{var E=Hs(k);E.type==="FeatureCollection"?p.push.apply(p,E.features):p.push(E)}}}),c?oi(this,{geometries:p,type:"GeometryCollection"}):{type:"FeatureCollection",features:p}}});function $m(o,s){return new rr(o,s)}var Pw=$m,Vs=gn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,s,c){this._url=o,this._bounds=Q(s),w(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(we(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Ge(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&Yo(this._image),this},bringToBack:function(){return this._map&&ei(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=Q(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",s=this._image=o?this._url:Ae("img");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onload=l(this.fire,this,"load"),s.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(o){var s=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;mo(this._image,c,s)},_reset:function(){var o=this._image,s=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();at(o,s.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){on(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),Cw=function(o,s,c){return new Vs(o,s,c)},Zm=Vs.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",s=this._image=o?this._url:Ae("video");if(we(s,"leaflet-image-layer"),this._zoomAnimated&&we(s,"leaflet-zoom-animated"),this.options.className&&we(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onloadeddata=l(this.fire,this,"load"),o){for(var c=s.getElementsByTagName("source"),p=[],v=0;v<c.length;v++)p.push(c[v].src);this._url=c.length>0?p:[s.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var k=0;k<this._url.length;k++){var E=Ae("source");E.src=this._url[k],s.appendChild(E)}}});function Ew(o,s,c){return new Zm(o,s,c)}var Wm=Vs.extend({_initImage:function(){var o=this._image=this._url;we(o,"leaflet-image-layer"),this._zoomAnimated&&we(o,"leaflet-zoom-animated"),this.options.className&&we(o,this.options.className),o.onselectstart=_,o.onmousemove=_}});function Ow(o,s,c){return new Wm(o,s,c)}var Fn=gn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,s){o&&(o instanceof te||S(o))?(this._latlng=$(o),w(this,s)):(w(this,o),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&on(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&on(this._container,1),this.bringToFront(),this.options.interactive&&(we(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(on(this._container,0),this._removeTimeout=setTimeout(l(Ge,void 0,this._container),200)):Ge(this._container),this.options.interactive&&(rt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=$(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Yo(this._container),this},bringToBack:function(){return this._map&&ei(this._container),this},_prepareOpen:function(o){var s=this._source;if(!s._map)return!1;if(s instanceof tr){s=null;var c=this._source._layers;for(var p in c)if(c[p]._map){s=c[p];break}if(!s)return!1;this._source=s}if(!o)if(s.getCenter)o=s.getCenter();else if(s.getLatLng)o=s.getLatLng();else if(s.getBounds)o=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")o.innerHTML=s;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),s=K(this.options.offset),c=this._getAnchor();this._zoomAnimated?at(this._container,o.add(c)):s=s.add(o).add(c);var p=this._containerBottom=-s.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=p+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});Oe.include({_initOverlay:function(o,s,c,p){var v=s;return v instanceof o||(v=new o(p).setContent(s)),c&&v.setLatLng(c),v}}),gn.include({_initOverlay:function(o,s,c,p){var v=c;return v instanceof o?(w(v,p),v._source=this):(v=s&&!p?s:new o(p,this),v.setContent(c)),v}});var qs=Fn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,Fn.prototype.openOn.call(this,o)},onAdd:function(o){Fn.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Cr||this._source.on("preclick",vo))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Cr||this._source.off("preclick",vo))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",s=this._container=Ae("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Ae("div",o+"-content-wrapper",s);if(this._contentNode=Ae("div",o+"-content",c),aa(s),qc(this._contentNode),be(s,"contextmenu",vo),this._tipContainer=Ae("div",o+"-tip-container",s),this._tip=Ae("div",o+"-tip",this._tipContainer),this.options.closeButton){var p=this._closeButton=Ae("a",o+"-close-button",s);p.setAttribute("role","button"),p.setAttribute("aria-label","Close popup"),p.href="#close",p.innerHTML='<span aria-hidden="true">&#215;</span>',be(p,"click",function(v){yt(v),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,s=o.style;s.width="",s.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var p=o.offsetHeight,v=this.options.maxHeight,k="leaflet-popup-scrolled";v&&p>v?(s.height=v+"px",we(o,k)):rt(o,k),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();at(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,s=parseInt(na(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,p=this._containerWidth,v=new M(this._containerLeft,-c-this._containerBottom);v._add(_o(this._container));var k=o.layerPointToContainerPoint(v),E=K(this.options.autoPanPadding),N=K(this.options.autoPanPaddingTopLeft||E),F=K(this.options.autoPanPaddingBottomRight||E),X=o.getSize(),ae=0,ge=0;k.x+p+F.x>X.x&&(ae=k.x+p-X.x+F.x),k.x-ae-N.x<0&&(ae=k.x-N.x),k.y+c+F.y>X.y&&(ge=k.y+c-X.y+F.y),k.y-ge-N.y<0&&(ge=k.y-N.y),(ae||ge)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ae,ge]))}},_getAnchor:function(){return K(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Tw=function(o,s){return new qs(o,s)};Oe.mergeOptions({closePopupOnClick:!0}),Oe.include({openPopup:function(o,s,c){return this._initOverlay(qs,o,s,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),gn.include({bindPopup:function(o,s){return this._popup=this._initOverlay(qs,this._popup,o,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof tr||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){go(o);var s=o.layer||o.target;if(this._popup._source===s&&!(s instanceof Cr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=s,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var Ks=Fn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){Fn.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){Fn.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=Fn.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",s=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Ae("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var s,c,p=this._map,v=this._container,k=p.latLngToContainerPoint(p.getCenter()),E=p.layerPointToContainerPoint(o),N=this.options.direction,F=v.offsetWidth,X=v.offsetHeight,ae=K(this.options.offset),ge=this._getAnchor();N==="top"?(s=F/2,c=X):N==="bottom"?(s=F/2,c=0):N==="center"?(s=F/2,c=X/2):N==="right"?(s=0,c=X/2):N==="left"?(s=F,c=X/2):E.x<k.x?(N="right",s=0,c=X/2):(N="left",s=F+(ae.x+ge.x)*2,c=X/2),o=o.subtract(K(s,c,!0)).add(ae).add(ge),rt(v,"leaflet-tooltip-right"),rt(v,"leaflet-tooltip-left"),rt(v,"leaflet-tooltip-top"),rt(v,"leaflet-tooltip-bottom"),we(v,"leaflet-tooltip-"+N),at(v,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&on(this._container,o)},_animateZoom:function(o){var s=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(s)},_getAnchor:function(){return K(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Lw=function(o,s){return new Ks(o,s)};Oe.include({openTooltip:function(o,s,c){return this._initOverlay(Ks,o,s,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),gn.include({bindTooltip:function(o,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ks,this._tooltip,o,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var s=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof tr||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var s=o.getElement();s&&(be(s,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),be(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var s=o.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){!this._tooltip||!this._map||this._map.dragging&&this._map.dragging.moving()||(this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0))},_moveTooltip:function(o){var s=o.latlng,c,p;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),p=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(p)),this._tooltip.setLatLng(s)}});var Hm=ni.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var s=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Ns(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var p=K(c.bgPos);s.style.backgroundPosition=-p.x+"px "+-p.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function zw(o){return new Hm(o)}ni.Default=ua;var ca=gn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:fe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){w(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Ge(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Yo(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(ei(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof M?o:new M(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var s=this.getPane().children,c=-o(-1/0,1/0),p=0,v=s.length,k;p<v;p++)k=s[p].style.zIndex,s[p]!==this._container&&k&&(c=o(c,+k));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!fe.ielt9){on(this._container,this.options.opacity);var o=+new Date,s=!1,c=!1;for(var p in this._tiles){var v=this._tiles[p];if(!(!v.current||!v.loaded)){var k=Math.min(1,(o-v.loaded)/200);on(v.el,k),k<1?s=!0:(v.active?c=!0:this._onOpaqueTile(v),v.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(Y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=Ae("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,s=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=s-Math.abs(o-c),this._onUpdateLevel(c)):(Ge(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var p=this._levels[o],v=this._map;return p||(p=this._levels[o]={},p.el=Ae("div","leaflet-tile-container leaflet-zoom-animated",this._container),p.el.style.zIndex=s,p.origin=v.project(v.unproject(v.getPixelOrigin()),o).round(),p.zoom=o,this._setZoomTransform(p,v.getCenter(),v.getZoom()),_(p.el.offsetWidth),this._onCreateLevel(p)),this._level=p,p}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var o,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)s=this._tiles[o],s.retain=s.current;for(o in this._tiles)if(s=this._tiles[o],s.current&&!s.active){var p=s.coords;this._retainParent(p.x,p.y,p.z,p.z-5)||this._retainChildren(p.x,p.y,p.z,p.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var s in this._tiles)this._tiles[s].coords.z===o&&this._removeTile(s)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Ge(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,s,c,p){var v=Math.floor(o/2),k=Math.floor(s/2),E=c-1,N=new M(+v,+k);N.z=+E;var F=this._tileCoordsToKey(N),X=this._tiles[F];return X&&X.active?(X.retain=!0,!0):(X&&X.loaded&&(X.retain=!0),E>p?this._retainParent(v,k,E,p):!1)},_retainChildren:function(o,s,c,p){for(var v=2*o;v<2*o+2;v++)for(var k=2*s;k<2*s+2;k++){var E=new M(v,k);E.z=c+1;var N=this._tileCoordsToKey(E),F=this._tiles[N];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);c+1<p&&this._retainChildren(v,k,c+1,p)}},_resetView:function(o){var s=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var s=this.options;return s.minNativeZoom!==void 0&&o<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<o?s.maxNativeZoom:o},_setView:function(o,s,c,p){var v=Math.round(s);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var k=this.options.updateWhenZooming&&v!==this._tileZoom;(!p||k)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,s)},_setZoomTransforms:function(o,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,s)},_setZoomTransform:function(o,s,c){var p=this._map.getZoomScale(c,o.zoom),v=o.origin.multiplyBy(p).subtract(this._map._getNewPixelOrigin(s,c)).round();fe.any3d?mo(o.el,v,p):at(o.el,v)},_resetGrid:function(){var o=this._map,s=o.options.crs,c=this._tileSize=this.getTileSize(),p=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,s.wrapLng[0]],p).x/c.x),Math.ceil(o.project([0,s.wrapLng[1]],p).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([s.wrapLat[0],0],p).y/c.x),Math.ceil(o.project([s.wrapLat[1],0],p).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),p=s.getZoomScale(c,this._tileZoom),v=s.project(o,this._tileZoom).floor(),k=s.getSize().divideBy(p*2);return new O(v.subtract(k),v.add(k))},_update:function(o){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(o===void 0&&(o=s.getCenter()),this._tileZoom!==void 0){var p=this._getTiledPixelBounds(o),v=this._pxBoundsToTileRange(p),k=v.getCenter(),E=[],N=this.options.keepBuffer,F=new O(v.getBottomLeft().subtract([N,-N]),v.getTopRight().add([N,-N]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var X in this._tiles){var ae=this._tiles[X].coords;(ae.z!==this._tileZoom||!F.contains(new M(ae.x,ae.y)))&&(this._tiles[X].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ge=v.min.y;ge<=v.max.y;ge++)for(var Se=v.min.x;Se<=v.max.x;Se++){var sn=new M(Se,ge);if(sn.z=this._tileZoom,!!this._isValidTile(sn)){var bo=this._tiles[this._tileCoordsToKey(sn)];bo?bo.current=!0:E.push(sn)}}if(E.sort(function(Er,od){return Er.distanceTo(k)-od.distanceTo(k)}),E.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Gs=document.createDocumentFragment();for(Se=0;Se<E.length;Se++)this._addTile(E[Se],Gs);this._level.el.appendChild(Gs)}}}},_isValidTile:function(o){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!s.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var p=this._tileCoordsToBounds(o);return Q(this.options.bounds).overlaps(p)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var s=this._map,c=this.getTileSize(),p=o.scaleBy(c),v=p.add(c),k=s.unproject(p,o.z),E=s.unproject(v,o.z);return[k,E]},_tileCoordsToBounds:function(o){var s=this._tileCoordsToNwSe(o),c=new A(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var s=o.split(":"),c=new M(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(o){var s=this._tiles[o];s&&(Ge(s.el),delete this._tiles[o],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){we(o,"leaflet-tile");var s=this.getTileSize();o.style.width=s.x+"px",o.style.height=s.y+"px",o.onselectstart=_,o.onmousemove=_,fe.ielt9&&this.options.opacity<1&&on(o,this.options.opacity)},_addTile:function(o,s){var c=this._getTilePos(o),p=this._tileCoordsToKey(o),v=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(v),this.createTile.length<2&&R(l(this._tileReady,this,o,null,v)),at(v,c),this._tiles[p]={el:v,coords:o,current:!0},s.appendChild(v),this.fire("tileloadstart",{tile:v,coords:o})},_tileReady:function(o,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:o});var p=this._tileCoordsToKey(o);c=this._tiles[p],c&&(c.loaded=+new Date,this._map._fadeAnimated?(on(c.el,0),Y(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(we(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),fe.ielt9||!this._map._fadeAnimated?R(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var s=new M(this._wrapX?m(o.x,this._wrapX):o.x,this._wrapY?m(o.y,this._wrapY):o.y);return s.z=o.z,s},_pxBoundsToTileRange:function(o){var s=this.getTileSize();return new O(o.min.unscaleBy(s).floor(),o.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function Rw(o){return new ca(o)}var ii=ca.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,s){this._url=o,s=w(this,s),s.detectRetina&&fe.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,s){return this._url===o&&s===void 0&&(s=!0),this._url=o,s||this.redraw(),this},createTile:function(o,s){var c=document.createElement("img");return be(c,"load",l(this._tileOnLoad,this,s,c)),be(c,"error",l(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var s={r:fe.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(s.y=c),s["-y"]=c}return b(this._url,i(s,this.options))},_tileOnLoad:function(o,s){fe.ielt9?setTimeout(l(o,this,null,s),0):o(null,s)},_tileOnError:function(o,s,c){var p=this.options.errorTileUrl;p&&s.getAttribute("src")!==p&&(s.src=p),o(c,s)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,p=this.options.zoomOffset;return c&&(o=s-o),o+p},_getSubdomain:function(o){var s=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var o,s;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(s=this._tiles[o].el,s.onload=_,s.onerror=_,!s.complete)){s.src=z;var c=this._tiles[o].coords;Ge(s),delete this._tiles[o],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(o){var s=this._tiles[o];if(s)return s.el.setAttribute("src",z),ca.prototype._removeTile.call(this,o)},_tileReady:function(o,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return ca.prototype._tileReady.call(this,o,s,c)}});function Vm(o,s){return new ii(o,s)}var qm=ii.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,s){this._url=o;var c=i({},this.defaultWmsParams);for(var p in s)p in this.options||(c[p]=s[p]);s=w(this,s);var v=s.detectRetina&&fe.retina?2:1,k=this.getTileSize();c.width=k.x*v,c.height=k.y*v,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,ii.prototype.onAdd.call(this,o)},getTileUrl:function(o){var s=this._tileCoordsToNwSe(o),c=this._crs,p=B(c.project(s[0]),c.project(s[1])),v=p.min,k=p.max,E=(this._wmsVersion>=1.3&&this._crs===Fm?[v.y,v.x,k.y,k.x]:[v.x,v.y,k.x,k.y]).join(","),N=ii.prototype.getTileUrl.call(this,o);return N+C(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+E},setParams:function(o,s){return i(this.wmsParams,o),s||this.redraw(),this}});function Aw(o,s){return new qm(o,s)}ii.WMS=qm,Vm.wms=Aw;var or=gn.extend({options:{padding:.1},initialize:function(o){w(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&we(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,s){var c=this._map.getZoomScale(s,this._zoom),p=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,s),k=p.multiplyBy(-c).add(v).subtract(this._map._getNewPixelOrigin(o,s));fe.any3d?mo(this._container,k,c):at(this._container,k)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-o)).round();this._bounds=new O(c,c.add(s.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Km=or.extend({options:{tolerance:0},getEvents:function(){var o=or.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){or.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");be(o,"mousemove",this._onMouseMove,this),be(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),be(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){Y(this._redrawRequest),delete this._ctx,Ge(this._container),$e(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var s in this._layers)o=this._layers[s],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=this._container,c=o.getSize(),p=fe.retina?2:1;at(s,o.min),s.width=p*c.x,s.height=p*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",fe.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){or.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var s=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var s=o._order,c=s.next,p=s.prev;c?c.prev=p:this._drawLast=p,p?p.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var s=o.options.dashArray.split(/[, ]+/),c=[],p,v;for(v=0;v<s.length;v++){if(p=Number(s[v]),isNaN(p))return;c.push(p)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||R(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var s=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(o._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(o._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var s=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var p=this._drawFirst;p;p=p.next)o=p.layer,(!s||o._pxBounds&&o._pxBounds.intersects(s))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,s){if(this._drawing){var c,p,v,k,E=o._parts,N=E.length,F=this._ctx;if(N){for(F.beginPath(),c=0;c<N;c++){for(p=0,v=E[c].length;p<v;p++)k=E[c][p],F[p?"lineTo":"moveTo"](k.x,k.y);s&&F.closePath()}this._fillStroke(F,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var s=o._point,c=this._ctx,p=Math.max(Math.round(o._radius),1),v=(Math.max(Math.round(o._radiusY),1)||p)/p;v!==1&&(c.save(),c.scale(1,v)),c.beginPath(),c.arc(s.x,s.y/v,p,0,Math.PI*2,!1),v!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,s){var c=s.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(s.options&&s.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var s=this._map.mouseEventToLayerPoint(o),c,p,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(p=c);this._fireEvent(p?[p]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,s)}},_handleMouseOut:function(o){var s=this._hoveredLayer;s&&(rt(this._container,"leaflet-interactive"),this._fireEvent([s],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,s){if(!this._mouseHoverThrottled){for(var c,p,v=this._drawFirst;v;v=v.next)c=v.layer,c.options.interactive&&c._containsPoint(s)&&(p=c);p!==this._hoveredLayer&&(this._handleMouseOut(o),p&&(we(this._container,"leaflet-interactive"),this._fireEvent([p],o,"mouseover"),this._hoveredLayer=p)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,s,c){this._map._fireDOMEvent(s,c||s.type,o)},_bringToFront:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(c)c.prev=p;else return;p?p.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(o)}},_bringToBack:function(o){var s=o._order;if(s){var c=s.next,p=s.prev;if(p)p.next=c;else return;c?c.prev=p:p&&(this._drawLast=p),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(o)}}});function Qm(o){return fe.canvas?new Km(o):null}var da=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Nw={_initContainer:function(){this._container=Ae("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(or.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var s=o._container=da("shape");we(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",o._path=da("path"),s.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var s=o._container;this._container.appendChild(s),o.options.interactive&&o.addInteractiveTarget(s)},_removePath:function(o){var s=o._container;Ge(s),o.removeInteractiveTarget(s),delete this._layers[d(o)]},_updateStyle:function(o){var s=o._stroke,c=o._fill,p=o.options,v=o._container;v.stroked=!!p.stroke,v.filled=!!p.fill,p.stroke?(s||(s=o._stroke=da("stroke")),v.appendChild(s),s.weight=p.weight+"px",s.color=p.color,s.opacity=p.opacity,p.dashArray?s.dashStyle=S(p.dashArray)?p.dashArray.join(" "):p.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=p.lineCap.replace("butt","flat"),s.joinstyle=p.lineJoin):s&&(v.removeChild(s),o._stroke=null),p.fill?(c||(c=o._fill=da("fill")),v.appendChild(c),c.color=p.fillColor||p.color,c.opacity=p.fillOpacity):c&&(v.removeChild(c),o._fill=null)},_updateCircle:function(o){var s=o._point.round(),c=Math.round(o._radius),p=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+p+" 0,"+65535*360)},_setPath:function(o,s){o._path.v=s},_bringToFront:function(o){Yo(o._container)},_bringToBack:function(o){ei(o._container)}},Qs=fe.vml?da:Kt,fa=or.extend({_initContainer:function(){this._container=Qs("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qs("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Ge(this._container),$e(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){or.prototype._update.call(this);var o=this._bounds,s=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),at(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(o){var s=o._path=Qs("path");o.options.className&&we(s,o.options.className),o.options.interactive&&we(s,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Ge(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var s=o._path,c=o.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(o,s){this._setPath(o,Ut(o._parts,s))},_updateCircle:function(o){var s=o._point,c=Math.max(Math.round(o._radius),1),p=Math.max(Math.round(o._radiusY),1)||c,v="a"+c+","+p+" 0 1,0 ",k=o._empty()?"M0 0":"M"+(s.x-c)+","+s.y+v+c*2+",0 "+v+-c*2+",0 ";this._setPath(o,k)},_setPath:function(o,s){o._path.setAttribute("d",s)},_bringToFront:function(o){Yo(o._path)},_bringToBack:function(o){ei(o._path)}});fe.vml&&fa.include(Nw);function Gm(o){return fe.svg||fe.vml?new fa(o):null}Oe.include({getRenderer:function(o){var s=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var s=this._paneRenderers[o];return s===void 0&&(s=this._createRenderer({pane:o}),this._paneRenderers[o]=s),s},_createRenderer:function(o){return this.options.preferCanvas&&Qm(o)||Gm(o)}});var Xm=ri.extend({initialize:function(o,s){ri.prototype.initialize.call(this,this._boundsToLatLngs(o),s)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=Q(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function Bw(o,s){return new Xm(o,s)}fa.create=Qs,fa.pointsToPath=Ut,rr.geometryToLayer=$s,rr.coordsToLatLng=td,rr.coordsToLatLngs=Zs,rr.latLngToCoords=nd,rr.latLngsToCoords=Ws,rr.getFeature=oi,rr.asFeature=Hs,Oe.mergeOptions({boxZoom:!0});var Jm=Dn.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){$e(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Ge(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ra(),Fc(),this._startPoint=this._map.mouseEventToContainerPoint(o),be(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Ae("div","leaflet-zoom-box",this._container),we(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var s=new O(this._point,this._startPoint),c=s.getSize();at(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Ge(this._box),rt(this._container,"leaflet-crosshair")),oa(),jc(),$e(document,{contextmenu:go,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var s=new A(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Oe.addInitHook("addHandler","boxZoom",Jm),Oe.mergeOptions({doubleClickZoom:!0});var Ym=Dn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var s=this._map,c=s.getZoom(),p=s.options.zoomDelta,v=o.originalEvent.shiftKey?c-p:c+p;s.options.doubleClickZoom==="center"?s.setZoom(v):s.setZoomAround(o.containerPoint,v)}});Oe.addInitHook("addHandler","doubleClickZoom",Ym),Oe.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var e_=Dn.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Pr(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}we(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){rt(this._map._container,"leaflet-grab"),rt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Q(this._map.options.maxBounds);this._offsetLimit=B(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,s){return o-(o-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;o.x<s.min.x&&(o.x=this._viscousLimit(o.x,s.min.x)),o.y<s.min.y&&(o.y=this._viscousLimit(o.y,s.min.y)),o.x>s.max.x&&(o.x=this._viscousLimit(o.x,s.max.x)),o.y>s.max.y&&(o.y=this._viscousLimit(o.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,s=Math.round(o/2),c=this._initialWorldOffset,p=this._draggable._newPos.x,v=(p-s+c)%o+s-c,k=(p+s+c)%o-s-c,E=Math.abs(v+c)<Math.abs(k+c)?v:k;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=E},_onDragEnd:function(o){var s=this._map,c=s.options,p=!c.inertia||o.noInertia||this._times.length<2;if(s.fire("dragend",o),p)s.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),k=(this._lastTime-this._times[0])/1e3,E=c.easeLinearity,N=v.multiplyBy(E/k),F=N.distanceTo([0,0]),X=Math.min(c.inertiaMaxSpeed,F),ae=N.multiplyBy(X/F),ge=X/(c.inertiaDeceleration*E),Se=ae.multiplyBy(-ge/2).round();!Se.x&&!Se.y?s.fire("moveend"):(Se=s._limitOffset(Se,s.options.maxBounds),R(function(){s.panBy(Se,{duration:ge,easeLinearity:E,noMoveStart:!0,animate:!0})}))}}});Oe.addInitHook("addHandler","dragging",e_),Oe.mergeOptions({keyboard:!0,keyboardPanDelta:80});var t_=Dn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),be(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),$e(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,s=document.documentElement,c=o.scrollTop||s.scrollTop,p=o.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(p,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var s=this._panKeys={},c=this.keyCodes,p,v;for(p=0,v=c.left.length;p<v;p++)s[c.left[p]]=[-1*o,0];for(p=0,v=c.right.length;p<v;p++)s[c.right[p]]=[o,0];for(p=0,v=c.down.length;p<v;p++)s[c.down[p]]=[0,o];for(p=0,v=c.up.length;p<v;p++)s[c.up[p]]=[0,-1*o]},_setZoomDelta:function(o){var s=this._zoomKeys={},c=this.keyCodes,p,v;for(p=0,v=c.zoomIn.length;p<v;p++)s[c.zoomIn[p]]=o;for(p=0,v=c.zoomOut.length;p<v;p++)s[c.zoomOut[p]]=-o},_addHooks:function(){be(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){$e(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var s=o.keyCode,c=this._map,p;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(p=this._panKeys[s],o.shiftKey&&(p=K(p).multiplyBy(3)),c.options.maxBounds&&(p=c._limitOffset(K(p),c.options.maxBounds)),c.options.worldCopyJump){var v=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(p)));c.panTo(v)}else c.panBy(p)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;go(o)}}});Oe.addInitHook("addHandler","keyboard",t_),Oe.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var n_=Dn.extend({addHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){$e(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var s=Cm(o),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var p=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),p),go(o)},_performZoom:function(){var o=this._map,s=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var p=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(p))))/Math.LN2,k=c?Math.ceil(v/c)*c:v,E=o._limitZoom(s+(this._delta>0?k:-k))-s;this._delta=0,this._startTime=null,E&&(o.options.scrollWheelZoom==="center"?o.setZoom(s+E):o.setZoomAround(this._lastMousePos,s+E))}});Oe.addInitHook("addHandler","scrollWheelZoom",n_);var Iw=600;Oe.mergeOptions({tapHold:fe.touchNative&&fe.safari&&fe.mobile,tapTolerance:15});var r_=Dn.extend({addHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){$e(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var s=o.touches[0];this._startPos=this._newPos=new M(s.clientX,s.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(be(document,"touchend",yt),be(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Iw),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){$e(document,"touchend",yt),$e(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),$e(document,"touchend touchcancel contextmenu",this._cancel,this),$e(document,"touchmove",this._onMove,this)},_onMove:function(o){var s=o.touches[0];this._newPos=new M(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,s){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});Oe.addInitHook("addHandler","tapHold",r_),Oe.mergeOptions({touchZoom:fe.touch,bounceAtZoomLimits:!0});var o_=Dn.extend({addHooks:function(){we(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){rt(this._map._container,"leaflet-touch-zoom"),$e(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var s=this._map;if(!(!o.touches||o.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(p)._divideBy(2))),this._startDist=c.distanceTo(p),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),yt(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(o.touches[0]),p=s.mouseEventToContainerPoint(o.touches[1]),v=c.distanceTo(p)/this._startDist;if(this._zoom=s.getScaleZoom(v,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&v<1||this._zoom>s.getMaxZoom()&&v>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var k=c._add(p)._divideBy(2)._subtract(this._centerPoint);if(v===1&&k.x===0&&k.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(k),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),Y(this._animRequest);var E=l(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=R(E,this,!0),yt(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Y(this._animRequest),$e(document,"touchmove",this._onTouchMove,this),$e(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Oe.addInitHook("addHandler","touchZoom",o_),Oe.BoxZoom=Jm,Oe.DoubleClickZoom=Ym,Oe.Drag=e_,Oe.Keyboard=t_,Oe.ScrollWheelZoom=n_,Oe.TapHold=r_,Oe.TouchZoom=o_,n.Bounds=O,n.Browser=fe,n.CRS=ne,n.Canvas=Km,n.Circle=ed,n.CircleMarker=Us,n.Class=re,n.Control=vn,n.DivIcon=Hm,n.DivOverlay=Fn,n.DomEvent=ew,n.DomUtil=Jx,n.Draggable=Pr,n.Evented=ue,n.FeatureGroup=tr,n.GeoJSON=rr,n.GridLayer=ca,n.Handler=Dn,n.Icon=ni,n.ImageOverlay=Vs,n.LatLng=te,n.LatLngBounds=A,n.Layer=gn,n.LayerGroup=ti,n.LineUtil=fw,n.Map=Oe,n.Marker=js,n.Mixin=sw,n.Path=Cr,n.Point=M,n.PolyUtil=pw,n.Polygon=ri,n.Polyline=nr,n.Popup=qs,n.PosAnimation=Em,n.Projection=hw,n.Rectangle=Xm,n.Renderer=or,n.SVG=fa,n.SVGOverlay=Wm,n.TileLayer=ii,n.Tooltip=Ks,n.Transformation=Re,n.Util=_e,n.VideoOverlay=Zm,n.bind=l,n.bounds=B,n.canvas=Qm,n.circle=ww,n.circleMarker=xw,n.control=sa,n.divIcon=zw,n.extend=i,n.featureGroup=gw,n.geoJSON=$m,n.geoJson=Pw,n.gridLayer=Rw,n.icon=yw,n.imageOverlay=Cw,n.latLng=$,n.latLngBounds=Q,n.layerGroup=vw,n.map=tw,n.marker=bw,n.point=K,n.polygon=Sw,n.polyline=kw,n.popup=Tw,n.rectangle=Bw,n.setOptions=w,n.stamp=d,n.svg=Gm,n.svgOverlay=Ow,n.tileLayer=Vm,n.tooltip=Lw,n.transformation=Ee,n.version=r,n.videoOverlay=Ew;var Mw=window.L;n.noConflict=function(){return window.L=Mw,this},window.L=n})})(PO,up);var Fd,cp={};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/Fd={get exports(){return cp},set exports(e){cp=e}},function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}Fd.exports?(t.default=t,Fd.exports=t):window.classNames=t}();var vg,gg,yg,Li=cp;function CO(e){const t=a=>{var l;return(l=window?.matchMedia(a).matches)!==null&&l!==void 0&&l},[n,r]=T.useState(t(e)),i=()=>{r(t(e))};return T.useEffect(()=>{const a=window.matchMedia(e);return i(),a.addEventListener("change",i),()=>a.removeEventListener("change",i)},[e]),n}function dp(){return dp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dp.apply(this,arguments)}var bg,xg,wg,EO=function(e){return T.createElement("svg",dp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),vg||(vg=T.createElement("path",{d:"M18.066 7.387a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64Z"})),gg||(gg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 2.82C9.616 2.82 2.82 9.616 2.82 18S9.616 33.18 18 33.18 33.18 26.384 33.18 18 26.384 2.82 18 2.82ZM1.5 18C1.5 8.887 8.887 1.5 18 1.5S34.5 8.887 34.5 18 27.113 34.5 18 34.5 1.5 27.113 1.5 18Z"})),yg||(yg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.974 15.307h-3.3v-1.32h4.62l-.009 10.481h-1.311v-9.16ZM23.293 26.026h-9.24v-1.558h9.24v1.558Z"})))};function fp(){return fp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fp.apply(this,arguments)}var OO=function(e){return T.createElement("svg",fp({viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},e),bg||(bg=T.createElement("path",{d:"M18 34.5c-9.142 0-16.5-7.383-16.5-16.444S8.858 1.5 18 1.5s16.5 7.383 16.5 16.556C34.5 27.229 27.03 34.5 18 34.5Zm0-31.322c-8.25 0-14.828 6.6-14.828 14.878S9.75 32.822 18 32.822s14.716-6.6 14.716-14.766S26.138 3.178 18 3.178Z"})),xg||(xg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.941 23.941 8 17.001l1.06-1.062 6.942 6.942-1.061 1.06Z"})),wg||(wg=T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 13 16 25l-1.06-1.06 12-12L28 13Z"})))};function Ce(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Ur,xn={panel:"Panel-module_panel__4VWNp","panel--mobile-layout":"Panel-module_panel--mobile-layout__OII-B",panel__pointer:"Panel-module_panel__pointer__BETJ8","panel__pointer-position":"Panel-module_panel__pointer-position__Zer8q","panel__content-wrapper--info":"Panel-module_panel__content-wrapper--info__lrfgo","panel__pointer--info":"Panel-module_panel__pointer--info__5OaTN","panel__content-wrapper--success":"Panel-module_panel__content-wrapper--success__k0JQD","panel__pointer--success":"Panel-module_panel__pointer--success__O-X6n","panel__content-wrapper--warning":"Panel-module_panel__content-wrapper--warning__vYY8E","panel__pointer--warning":"Panel-module_panel__pointer--warning__l5Zf8","panel__content-wrapper--error":"Panel-module_panel__content-wrapper--error__3LhKe","panel__pointer--error":"Panel-module_panel__pointer--error__4MGTF","panel__content-wrapper":"Panel-module_panel__content-wrapper__oiWk8","panel__icon-wrapper":"Panel-module_panel__icon-wrapper__631EQ",panel__content:"Panel-module_panel__content__U3cAc",panel__header:"Panel-module_panel__header__UJuRe",panel__body:"Panel-module_panel__body__gRd1x"};Ce(`/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-y-padding: var(--component-panel-space-padding-y-md);
    --panel-x-padding: var(--component-panel-space-padding-x-md);
    --panel-content-gap: var(--component-panel-space-gap-md);
    --panel-pointer-width: calc(var(--component-panel-size-icon-md) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

/* breakpoints-md */
@media only screen and (min-width: 768px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_md
    );
  }
}

/* breakpoints-lg */
@media only screen and (min-width: 960px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* breakpoints-xl */
@media only screen and (min-width: 1200px) {
  .Panel-module_panel__4VWNp:not(.Panel-module_panel--mobile-layout__OII-B) {
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_md);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_lg
    );
  }
}

/* print style */
@media print {
  .Panel-module_panel__4VWNp {
    --panel-y-padding: var(--component-panel-space-padding-y-xs);
    --panel-x-padding: var(--component-panel-space-padding-x-xs);
    --panel-content-gap: var(--component-panel-space-gap-xs);
    --panel-pointer-width: calc(var(--component-panel-size-icon-xs) / 2);
    --panel-pointer-height: calc(var(--panel-pointer-width) / 2);
    --panel-body-font_size: var(--component-panel-font_size-body-breakpoint_sm);
    --panel-header-font_size: var(
      --component-panel-font_size-header-breakpoint_sm
    );
  }
}

.Panel-module_panel__4VWNp {
  width: 100%;
}

.Panel-module_panel__pointer__BETJ8 {
  width: var(--panel-pointer-width);
  height: var(--panel-pointer-height);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.Panel-module_panel__pointer-position__Zer8q {
  top: 1px;
  position: relative;
  left: calc(var(--panel-x-padding) + (var(--panel-pointer-width) / 2));
}

.Panel-module_panel__content-wrapper--info__lrfgo,
.Panel-module_panel__pointer--info__5OaTN {
  background-color: var(--component-panel-color-background-default);
}

.Panel-module_panel__content-wrapper--success__k0JQD,
.Panel-module_panel__pointer--success__O-X6n {
  background-color: var(--component-panel-color-background-success);
}

.Panel-module_panel__content-wrapper--warning__vYY8E,
.Panel-module_panel__pointer--warning__l5Zf8 {
  background-color: var(--component-panel-color-background-warning);
}

.Panel-module_panel__content-wrapper--error__3LhKe,
.Panel-module_panel__pointer--error__4MGTF {
  background-color: var(--colors-red-200);
}

.Panel-module_panel__content-wrapper__oiWk8 {
  display: flex;
  gap: var(--panel-content-gap);
  padding: var(--panel-y-padding) var(--panel-x-padding);
}

.Panel-module_panel__icon-wrapper__631EQ {
  display: flex;
  flex: none;
}

.Panel-module_panel__content__U3cAc {
  display: flex;
  flex-direction: column;
  gap: var(--component-panel-space-text_group-gap-xs);
}

.Panel-module_panel__header__UJuRe {
  margin: 0;
  font-size: var(--panel-header-font_size);
  font-weight: var(--component-panel-font_weight-heading);
}

.Panel-module_panel__body__gRd1x {
  font-size: var(--panel-body-font_size);
}
`),function(e){e.Success="success",e.Info="info",e.Warning="warning",e.Error="error"}(Ur||(Ur={}));const TO=({size:e,variant:t})=>{switch(t){case Ur.Info:case Ur.Error:case Ur.Warning:return Z.createElement(EO,{style:{width:e,height:e},"data-testid":"panel-icon-info"});case Ur.Success:return Z.createElement(OO,{style:{width:e,height:e},"data-testid":"panel-icon-success"})}},LO=({children:e})=>Z.createElement("div",{className:Li(xn["panel__pointer-position"])},e),zO=({renderIcon:e=TO,title:t,children:n,variant:r=Ur.Info,showPointer:i=!1,showIcon:a=!0,forceMobileLayout:l=!1,renderArrow:u=LO})=>{const d=(({forceMobileLayout:m})=>{const _=CO(`(max-width: ${oO})`);return!!m||_})({forceMobileLayout:l}),f=d?nO:rO;return Z.createElement("div",{className:Li(xn.panel,{[xn["panel--mobile-layout"]]:d})},i&&u({children:Z.createElement("div",{"data-testid":"panel-pointer",className:Li(xn.panel__pointer,xn[`panel__pointer--${r}`])})}),Z.createElement("div",{"data-testid":"panel-content-wrapper",className:Li(xn["panel__content-wrapper"],xn[`panel__content-wrapper--${r}`])},a&&Z.createElement("div",{"data-testid":"panel-icon-wrapper",className:xn["panel__icon-wrapper"]},e({size:f,variant:r})),Z.createElement("div",{className:xn.panel__content},t&&Z.createElement("h2",{className:xn.panel__header},t),Z.createElement("div",{className:xn.panel__body},n))))};Ce(`.PopoverPanel-module_popover-panel__tGILa {
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
}

.PopoverPanel-module_popover-panel__arrow__Cmcr3 {
  transform: scale(-1);
  margin-top: -1px;
}
`);Ce(`.CircularProgress-module_svg__TUYPH {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.CircularProgress-module_circleTransition__D9rut {
  transition: stroke-dashoffset 1s ease-in-out;
}

.CircularProgress-module_container__gVi97 {
  position: relative;
}

.CircularProgress-module_label__OgO-f {
  all: initial;
  font-family: inherit;
  font-size: var(--font_size-300);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
`);Ce(`/**
 * Do not edit directly
 * Generated on Thu, 02 Feb 2023 08:15:46 GMT
 */

:root {
  --token-set-order-0: Base;
  --token-set-order-1: Components;
  --felles: [object Object];
  --altinn: [object Object];
  --component-icon-size-xs: 1.5rem;
  --component-icon-size-sm: 1.875rem;
  --component-icon-size-md: 2.25rem;
  --component-icon-size-lg: 3rem;
  --component-icon-size-xl: 3.75rem;
  --component-panel-color-background-default: #e6eff8;
  --component-panel-color-background-success: #d1f4e1;
  --component-panel-color-background-warning: #fffbe6;
  --component-panel-color-arrow-default: #e6eff8;
  --component-panel-color-arrow-success: #d1f4e1;
  --component-panel-color-arrow-warning: #fffbe6;
  --component-panel-font_size-header-breakpoint_sm: 1.5rem;
  --component-panel-font_size-header-breakpoint_md: 1.75rem;
  --component-panel-font_size-header-breakpoint_lg: 2.25rem;
  --component-panel-font_size-body-breakpoint_sm: 1rem;
  --component-panel-font_size-body-breakpoint_md: 1.125rem;
  --component-panel-space-padding-x-xs: 1.5rem;
  --component-panel-space-padding-x-md: 6rem;
  --component-panel-space-padding-y-xs: 1.5rem;
  --component-panel-space-padding-y-md: 2.25rem;
  --component-panel-space-gap-xs: 0.75rem;
  --component-panel-space-gap-md: 0.75rem;
  --component-panel-space-text_group-gap-xs: 0.375rem;
  --component-panel-space-arrow_left-md: 6.688rem;
  --component-panel-space-arrow_left-xs: 4rem;
  --component-panel-size-icon-xs: 2.25rem;
  --component-panel-size-icon-md: 3.75rem;
  --component-panel-typography-default-font-family: Altinn-DIN;
  --component-panel-typography-default-font-weight: Regular;
  --component-panel-typography-default-line-height: 1.5;
  --component-panel-typography-default-font-size: 1rem;
  --component-panel-typography-default-letter-spacing: 3%;
  --component-panel-typography-default-paragraph-spacing: 0;
  --component-panel-typography-default-text-decoration: none;
  --component-panel-typography-default-text-case: none;
  --component-panel-font_weight-heading: bold;
  --component-legend-font_weight-default: medium;
  --component-label-font_weight-default: medium;
  --component-expandable_row-color-border_top-default: #d2d5d8;
  --component-expandable_row-color-border_bottom-default: #d2d5d8;
  --component-expandable_row-space-padding-x-xs: 0.75rem;
  --component-expandable_row-space-padding-x-md: 1.5rem;
  --component-expandable_row-space-padding-top-xs: 0.25rem;
  --component-expandable_row-space-padding-bottom-xs: 0.5rem;
  --component-expandable_row-space-gap-title-xs: 0.75;
  --component-expandable_row-space-gap-title-md: 1.5rem;
  --component-expandable_row-size-icon-xs: 1.5rem;
  --component-expandable_row-font_weight-header: medium;
  --component-expandable_row-font_size-header-breakpoint_sm: 1rem;
  --component-expandable_row-font_size-header-breakpoint_md: 1.125rem;
  --component-expandable_row-border_width-default: 1px;
  --component-checkbox-space-gap-xsmall: 0.5rem;
  --component-checkbox-space-gap-small: 0.75rem;
  --component-checkbox-size-width-xsmall: 1.125rem;
  --component-checkbox-size-width-small: 1.5rem;
  --component-checkbox-size-height-xsmall: 1.125rem;
  --component-checkbox-size-height-small: 1.5rem;
  --component-checkbox-color-border-default: #1e2b3c;
  --component-checkbox-color-border-hover: #0062ba;
  --component-checkbox-color-border-checked: #0062ba;
  --component-checkbox-color-border-error: #b3253a;
  --component-checkbox-color-background-default: #ffffff;
  --component-checkbox-color-background-hover: #e6eff8;
  --component-checkbox-color-background-checked: #0062ba;
  --component-checkbox-color-background-error: #ffffff;
  --component-checkbox-color-text-default: #1e2b3c;
  --component-checkbox-color-text-hover: #0062ba;
  --component-checkbox-color-text-checked: #1e2b3c;
  --component-checkbox-color-text-error: #1e2b3c;
  --component-checkbox-border_width-xsmall: 2px;
  --component-checkbox-border_width-small: 2px;
  --component-checkbox-font_size-xs: 0.875rem;
  --component-checkbox-font_size-sm: 1rem;
  --component-fieldset-space-gap-y-xsmall: 0.75rem;
  --component-fieldset-space-gap-y-small: 1.125rem;
  --component-fieldset-space-gap-y-medium: 1.5rem;
  --component-fieldset-space-gap-y-large: 1.5rem;
  --component-field_description-color-text-default: #1e2b3c;
  --component-field_description-space-top-small: 0.5rem;
  --component-field_description-space-top-xsmall: 0.375rem;
  --component-textarea-border_width-normal: 2px;
  --component-textarea-color-border-default: #1e2b3c;
  --component-textarea-color-border-hover: #0062ba;
  --component-textarea-color-border-error: #b3253a;
  --component-textarea-color-background-default: #ffffff;
  --component-textarea-color-background-hover: #ffffff;
  --component-textarea-color-background-focus: #ffffff;
  --component-textarea-color-text-default: #1e2b3c;
  --component-textarea-space-padding-x: 0.75rem;
  --component-textarea-space-padding-y: 0.375rem;
  --component-textarea-size-min_height-xsmall: 6.25rem;
  --component-textarea-size-min_height-small: 9.375rem;
  --component-textarea-size-min_height-medium: 12.5rem;
  --component-textarea-size-min_height-large: 18.75rem;
  --component-textarea-size-min_height-xlarge: 25rem;
  --component-textarea-font_size-sm: 1rem;
  --component-checkbox-group-space-gap-x-xsmall: 1.5rem;
  --component-checkbox-group-space-gap-x-small: 2.25rem;
  --component-checkbox-group-space-gap-y-xsmall: 0.563rem;
  --component-checkbox-group-space-gap-y-small: 1.125rem;
  --component-toggle_button-font_size-sm: 1rem;
  --component-toggle_button-size-min_width-sm: 100%;
  --component-toggle_button-size-min_width-md: auto;
  --component-toggle_button-border_width-inactive: 2px;
  --component-toggle_button-color-background-active: #0062ba;
  --component-toggle_button-color-background-inactive: #ffffff;
  --component-toggle_button-color-text-active: #ffffff;
  --component-toggle_button-color-text-inactive: #1e2b3c;
  --component-toggle_button-color-border-inactive: #0062ba;
  --component-toggle_button-space-padding-x: 1.5rem;
  --component-toggle_button-space-padding-top: 0.125rem;
  --component-toggle_button-space-padding-bottom: 0.25rem;
  --component-icon_button-size-large-circle: 2.25rem;
  --component-icon_button-size-large-icon: 1.4rem;
  --component-icon_button-size-medium-circle: 1.5rem;
  --component-icon_button-size-medium-icon: 0.875rem;
  --component-icon_button-size-small-circle: 1.125rem;
  --component-icon_button-size-small-icon: 0.688rem;
  --component-icon_button-border_width-default: 1px;
  --component-button-filled-primary-color-background-default: #0062ba;
  --component-button-filled-primary-color-background-hover: #004e95;
  --component-button-filled-primary-color-background-pressed: #00315d;
  --component-button-filled-color-text-all: #ffffff;
  --component-button-filled-success-color-background-default: #118849;
  --component-button-filled-success-color-background-hover: #0c6536;
  --component-button-filled-success-color-background-pressed: #084826;
  --component-button-filled-danger-color-background-default: #e02e49;
  --component-button-filled-danger-color-background-hover: #b3253a;
  --component-button-filled-danger-color-background-pressed: #861c2c;
  --component-button-space-gap-small: 0.5rem;
  --component-button-space-gap-medium: 0.5rem;
  --component-button-space-gap-large: 0.5rem;
  --component-button-space-padding-x-small: 1.125rem;
  --component-button-space-padding-x-medium: 2.25rem;
  --component-button-space-padding-x-large: 3rem;
  --component-button-quiet-space-padding-x-small: 0.375rem;
  --component-button-quiet-space-padding-x-medium: 0.563rem;
  --component-button-quiet-space-padding-x-large: 0.563rem;
  --component-button-quiet-primary-color-text-default: #0062ba;
  --component-button-quiet-primary-color-text-pressed: #ffffff;
  --component-button-quiet-primary-color-background-hover: #e6eff8;
  --component-button-quiet-primary-color-background-pressed: #004e95;
  --component-button-outline-primary-color-text-default: #0062ba;
  --component-button-outline-primary-color-text-pressed: #ffffff;
  --component-button-outline-primary-color-border-default: #0062ba;
  --component-button-outline-primary-color-border-hover: #004e95;
  --component-button-outline-primary-color-background-default: #ffffff;
  --component-button-outline-primary-color-background-hover: #e6eff8;
  --component-button-outline-primary-color-background-pressed: #004e95;
  --component-button-border_width-default: 1px;
  --component-button-size-height-small: 2.25rem;
  --component-button-size-height-medium: 3rem;
  --component-button-size-height-large: 3.75rem;
  --component-button-size-icon-small: 1.5rem;
  --component-button-size-icon-medium: 1.875rem;
  --component-button-size-icon-large: 2.5rem;
  --component-input-color-border-default: #1e2b3c;
  --component-input-color-border-hover: #0062ba;
  --component-input-color-background-default: #ffffff;
  --component-input-color-background-hover: #ffffff;
  --component-input-color-background-focus: #ffffff;
  --component-input-error-color-border-default: #b3253a;
  --component-input-space-padding-x: 0.75rem;
  --component-input-space-padding-y: 0.375rem;
  --component-input-border_width-default: 2px;
  --component-input-border_width-focus: 4px;
  --component-input-read_only_info-color-border-default: #fff4b4;
  --component-input-read_only_info-color-background-default: #fff4b4;
  --component-input-read_only_confirm-color-background-default: #d1f4e1;
  --component-input-read_only_confirm-color-border-default: #d1f4e1;
  --component-input-size-min_height-default: 2.25rem;
  --component-input-font_size-sm: 1rem;
  --component-input-font_size-md: 1.125rem;
  --component-error_message-space-padding-top: 0.375rem;
  --component-error_message-color-text: #b3253a;
  --component-error_message-font_size-xs: 0.875rem;
  --border_width-thin: 1px;
  --border_width-standard: 2px;
  --space-half: 0.375;
  --space-base: 0.75;
  --space-x2: 1.5;
  --space-x3: 2.25;
  --space-x4: 3;
  --space-x5: 3.75;
  --space-x6: 4.5;
  --space-x7: 5.25;
  --space-x8: 6;
  --space-x16: 12;
  --interactive_components-border_radius-normal: 3px;
  --interactive_components-border_width-normal: 2px;
  --paragraph_space-default: 2.25rem;
  --font_size-100: 0.75rem;
  --font_size-200: 0.875rem;
  --font_size-300: 1rem;
  --font_size-400-breakpoint_sm: 1rem;
  --font_size-400-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_sm: 1rem;
  --font_size-500-breakpoint_md: 1.125rem;
  --font_size-500-breakpoint_lg: 1.25rem;
  --font_size-600-breakpoint_sm: 1.125rem;
  --font_size-600-breakpoint_md: 1.25rem;
  --font_size-600-breakpoint_lg: 1.5rem;
  --font_size-700-breakpoint_sm: 1.25rem;
  --font_size-700-breakpoint_md: 1.5rem;
  --font_size-700-breakpoint_lg: 1.75rem;
  --font_size-800-breakpoint_sm: 1.5rem;
  --font_size-800-breakpoint_md: 1.75rem;
  --font_size-800-breakpoint_lg: 2.25rem;
  --font_size-900-breakpoint_sm: 1.75rem;
  --font_size-900-breakpoint_md: 2.25rem;
  --font_size-900-breakpoint_lg: 2.75rem;
  --font_size-heading-h1-breakpoint_sm: 1.75rem;
  --font_size-heading-h1-breakpoint_md: 2.25rem;
  --font_size-heading-h1-breakpoint_lg: 2.75rem;
  --font_size-heading-h2-breakpoint_sm: 1.5rem;
  --font_size-heading-h2-breakpoint_md: 1.75rem;
  --font_size-heading-h2-breakpoint_lg: 2.25rem;
  --font_size-heading-h3-breakpoint_sm: 1.25rem;
  --font_size-heading-h3-breakpoint_md: 1.5rem;
  --font_size-heading-h3-breakpoint_lg: 1.75rem;
  --font_size-heading-h4-breakpoint_sm: 1.125rem;
  --font_size-heading-h4-breakpoint_md: 1.25rem;
  --font_size-heading-h4-breakpoint_lg: 1.5rem;
  --font_size-heading-h5-breakpoint_sm: 1rem;
  --font_size-heading-h5-breakpoint_md: 1.125rem;
  --font_size-heading-h5-breakpoint_lg: 1.25rem;
  --font_size-component-size-xs: 0.875rem;
  --font_size-component-size-sm: 1rem;
  --font_size-component-size-md: 1.125rem;
  --font_size-component-size-lg: 1.5rem;
  --font_size-body-medium: 1rem;
  --font_size-body-large-breakpoint_sm: 1rem;
  --font_size-body-large-breakpoint_md: 1.125rem;
  --font_size-label-small-breakpoint_sm: 1rem;
  --font_size-label-small-breakpoint_md: 1.125rem;
  --font_size-detail-default: 0.875rem;
  --font_size-ingress-small-breakpoint_sm: 1.125rem;
  --font_size-ingress-small-breakpoint_md: 1.25rem;
  --font_size-ingress-medium-breakpoint_sm: 1.25rem;
  --font_size-ingress-medium-breakpoint_md: 1.5rem;
  --font_family-default: Altinn-DIN;
  --font_family-heading: Altinn-DIN;
  --font_family-ingress: Altinn-DIN;
  --font_family-body: Altinn-DIN;
  --font_family-label: Altinn-DIN;
  --breakpoints-xs: 0px;
  --breakpoints-sm: 540px;
  --breakpoints-md: 768px;
  --breakpoints-lg: 960px;
  --breakpoints-xl: 1200px;
  --breakpoints-xxl: 1600px;
  --typography-default-font-family: Altinn-DIN;
  --typography-default-font-weight: Regular;
  --typography-default-line-height: 1.5;
  --typography-default-font-size: 1rem;
  --typography-default-letter-spacing: 0.3px;
  --typography-default-paragraph-spacing: 0;
  --typography-default-text-decoration: none;
  --typography-default-text-case: none;
  --size-base: 0.75rem;
  --size-x2: 1.5rem;
  --size-x3: 2.25rem;
  --size-x4: 3rem;
  --size-x5: 3.75rem;
  --size-x6: 4.5rem;
  --size-x7: 5.25rem;
  --size-x8: 6rem;
  --size-x10: 7.5rem;
  --size-x16: 12rem;
  --opacity-disabled: 30%;
  --colors-grey-100: #f4f5f6;
  --colors-grey-200: #e9eaec;
  --colors-grey-300: #d2d5d8;
  --colors-grey-400: #bcbfc5;
  --colors-grey-500: #a5aab1;
  --colors-grey-600: #68707c;
  --colors-grey-700: #4b5563;
  --colors-grey-800: #1e2b3c;
  --colors-grey-900: #141e29;
  --colors-white: #ffffff;
  --colors-black: #000000;
  --colors-red-100: #f9d5db;
  --colors-red-200: #f3abb6;
  --colors-red-300: #ec8292;
  --colors-red-400: #e6586d;
  --colors-red-500: #e02e49;
  --colors-red-600: #b3253a;
  --colors-red-700: #861c2c;
  --colors-red-800: #5a121d;
  --colors-red-900: #480e17;
  --colors-orange-100: #ffe8cd;
  --colors-orange-200: #ffd19b;
  --colors-orange-300: #ffba6a;
  --colors-orange-400: #ffa338;
  --colors-orange-500: #ff8c06;
  --colors-orange-600: #cc7005;
  --colors-orange-700: #995404;
  --colors-orange-800: #663802;
  --colors-orange-900: #522d02;
  --colors-yellow-100: #fffbe6;
  --colors-yellow-200: #fff4b4;
  --colors-yellow-300: #ffed83;
  --colors-yellow-400: #ffe551;
  --colors-yellow-500: #ffda06;
  --colors-yellow-600: #e6c405;
  --colors-yellow-700: #ccae05;
  --colors-yellow-800: #998304;
  --colors-yellow-900: #665702;
  --colors-green-100: #e8faf0;
  --colors-green-200: #d1f4e1;
  --colors-green-300: #8be4b5;
  --colors-green-400: #5dd997;
  --colors-green-500: #2ece7a;
  --colors-green-600: #15b560;
  --colors-green-700: #118849;
  --colors-green-800: #0c6536;
  --colors-green-900: #084826;
  --colors-blue-100: #e6eff8;
  --colors-blue-200: #b3d0ea;
  --colors-blue-300: #80b1dd;
  --colors-blue-400: #66a1d6;
  --colors-blue-500: #3381c8;
  --colors-blue-600: #1a72c1;
  --colors-blue-700: #0062ba;
  --colors-blue-800: #004e95;
  --colors-blue-900: #00315d;
  --colors-purple-100: #f5e8f2;
  --colors-purple-200: #e0b9d8;
  --colors-purple-300: #cc8bbf;
  --colors-purple-400: #b75da5;
  --colors-purple-500: #a22e8b;
  --colors-purple-600: #98177e;
  --colors-purple-700: #7a1265;
  --colors-purple-800: #5b0e4c;
  --colors-purple-900: #490b3d;
  --semantic-background-default: #ffffff;
  --semantic-background-subtle: #f4f5f6;
  --semantic-surface-neutral-default: #ffffff;
  --semantic-surface-neutral-subtle: #f4f5f6;
  --semantic-surface-neutral-subtle-hover: #e9eaec;
  --semantic-surface-neutral-selected: #e6eff8;
  --semantic-surface-neutral-inverted: #1e2b3c;
  --semantic-surface-action-subtle: #e6eff8;
  --semantic-surface-action-default: #0062ba;
  --semantic-surface-action-hover: #004e95;
  --semantic-surface-action-active: #00315d;
  --semantic-surface-success-subtle: #d1f4e1;
  --semantic-surface-success-default: #118849;
  --semantic-surface-success-hover: #0c6536;
  --semantic-surface-success-active: #084826;
  --semantic-surface-warning-subtle: #fffbe6;
  --semantic-surface-danger-subtle: #f9d5db;
  --semantic-surface-danger-default: #e02e49;
  --semantic-surface-danger-hover: #b3253a;
  --semantic-surface-danger-active: #861c2c;
  --semantic-surface-info-subtle: #e6eff8;
  --semantic-border-info-default: #004e95;
  --semantic-border-action-subtle: #e6eff8;
  --semantic-border-action-default: #0062ba;
  --semantic-border-action-hover: #004e95;
  --semantic-border-action-active: #00315d;
  --semantic-border-neutral-default: #68707c;
  --semantic-border-neutral-subtle: #d2d5d8;
  --semantic-border-neutral-strong: #1e2b3c;
  --semantic-border-neutral-divider: #bcbfc5;
  --semantic-border-success-default: #0c6536;
  --semantic-border-warning-default: #cc7005;
  --semantic-border-danger-default: #b3253a;
  --semantic-tab_focus-outline-color: #98177e;
  --semantic-tab_focus-outline-offset: 2px;
  --semantic-tab_focus-outline-width: 2px;
  --semantic-text-success-default: #0c6536;
  --semantic-text-success-on_success: #ffffff;
  --semantic-text-neutral-default: #1e2b3c;
  --semantic-text-neutral-subtle: #68707c;
  --semantic-text-neutral-on_inverted: #ffffff;
  --semantic-text-action-default: #0062ba;
  --semantic-text-action-on_action: #ffffff;
  --semantic-text-warning-default: #995404;
  --semantic-text-warning-on_warning: #663802;
  --semantic-text-warning-icon_warning: #cc7005;
  --semantic-text-danger-default: #b3253a;
  --semantic-text-danger-on_danger: #ffffff;
  --semantic-text-visited-default: #7a1265;
  --brand-default-first-100: #feefef;
  --brand-default-first-200: #fddfe0;
  --brand-default-first-300: #fbbfc1;
  --brand-default-first-400: #f89fa1;
  --brand-default-first-500: #f67f82;
  --brand-default-first-600: #f45f63;
  --brand-default-first-700: #dc5659;
  --brand-default-first-800: #c34c4f;
  --brand-default-second-100: #fcf7e9;
  --brand-default-second-200: #faeec2;
  --brand-default-second-300: #f5dda6;
  --brand-default-second-400: #efcc79;
  --brand-default-second-500: #eabb4d;
  --brand-default-second-600: #e5aa20;
  --brand-default-second-700: #ce991d;
  --brand-default-second-800: #b7881a;
  --brand-default-third-100: #e9f5ff;
  --brand-default-third-200: #d2eafd;
  --brand-default-third-300: #a5d6fb;
  --brand-default-third-400: #78c1f9;
  --brand-default-third-500: #4badf7;
  --brand-default-third-600: #1e98f5;
  --brand-default-third-700: #1b88dd;
  --brand-default-third-800: #156aac;
}
`);Ce(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';

html {
  font-family: var(--font_family-default), sans-serif;
}
`);T.createContext(void 0);Ce(`.ToggleButtonGroup-module_toggle-button-group__op1wi {
  border-color: var(--component-toggle_button-color-border-inactive);
  border-width: 2px;
  border-style: solid;
  min-height: 32px;
  border-radius: 3px;
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  width: var(--toggle-button-group-width);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: 100%;
  }
}

/* breakpoints-md and above */
@media only screen and (min-width: 768px) {
  .ToggleButtonGroup-module_toggle-button-group__op1wi {
    --toggle-button-group-width: auto;
  }
}
`);Ce(`.ToggleButton-module_toggle-button__g4lb- {
  border-radius: 0;
  border: none;
  padding-left: var(--component-toggle_button-space-padding-x);
  padding-right: var(--component-toggle_button-space-padding-x);
  font-family: inherit;
  background-color: var(--component-toggle_button-color-background-inactive);
  color: var(--component-toggle_button-color-text-inactive);
  font-size: var(--component-toggle_button-font_size-sm);
  height: 100%;
}

.ToggleButton-module_toggle-button--selected__Gm7TD {
  background-color: var(--component-toggle_button-color-background-active);
  color: var(--component-toggle_button-color-text-active);
}

.ToggleButton-module_toggle-button__g4lb-:not(.ToggleButton-module_toggle-button--selected__Gm7TD):hover {
  background-color: var(--colors-blue-200);
}
`);var kg;(function(e){e.Primary="primary",e.Secondary="secondary"})(kg||(kg={}));T.createContext(void 0);Ce(`.Accordion-module_accordion__LVhhv {
  --component-accordion-color-background: var(--colors-white);
  --component-panel-size-width: 100%;
  background-color: var(--component-accordion-color-background);
  width: var(--component-panel-size-width);
}
`);Ce(`.AccordionHeader-module_accordion-header__QlYjQ {
  --component-accordion_header-border_top_style: solid;
  --component-accordion_header-border_top_color: var(--colors-neutral-200);
  --component-accordion_header-border_top_width: var(--border_width-thin);
  --component-accordion_header-color-background: var(--colors-white);
  display: flex;
  border-top-width: var(--component-accordion_header-border_top_width);
  border-top-style: var(--component-accordion_header-border_top_style);
  border-top-color: var(--component-accordion_header-border_top_color);
  background-color: var(--component-accordion_header-color-background);
}

/* breakpoints-xs */
@media only screen and (min-width: 0) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    display: none;
  }
}

/* breakpoints-sm */
@media only screen and (min-width: 540px) {
  .AccordionHeader-module_accordion-header__subtitle__OSUoH {
    opacity: 60%;
    font-size: 0.9rem;
    display: block;
  }
  .AccordionHeader-module_accordion-header--subtitle__DNear {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 0.2rem;
  }
}

.AccordionHeader-module_accordion-header__title__ss-G6 {
  --component-accordion_header_title-spacing-margin_left: 1.6rem;
  --component-accordion_header_title-border_top_style: none;
  --component-accordion_header_title-border_bottom_style: none;
  --component-accordion_header_title-border_right_style: none;
  --component-accordion_header_title-border_left_style: none;
  --component-accordion_header_title-font_size: var(--font_size-300);
  --component-accordion_header_title-font_weight: var(
    --component-panel-font_weight-heading
  );
  --component-accordion_header_title-color-background: none;
  font-family: inherit;
  flex: 1 1 auto;
  border-top-style: var(--component-accordion_header_title-border_top_style);
  border-bottom-style: var(
    --component-accordion_header_title-border_bottom_style
  );
  border-left-style: var(--component-accordion_header_title-border_left_style);
  border-right-style: var(
    --component-accordion_header_title-border_right_style
  );
  text-align: var(--component-accordion_header_title-text-align);
  background-color: var(--component-accordion_header_title-color-background);
  font-size: var(--component-accordion_header_title-font_size);
  font-weight: var(--component-accordion_header_title-font_weight);
  margin-left: var(--component-accordion_header_title-spacing-margin_left);
  line-height: 16px;
}

.AccordionHeader-module_accordion-header__actions__eYrxF {
  display: grid;
  grid-auto-flow: column;
  column-gap: 0.3rem;
  align-items: center;
  padding: 0 0.2rem;
}
`);Ce(`.AccordionIcon-module_accordion-icon__PWdLi {
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  margin-left: 1.6rem;
  box-sizing: border-box;
  flex-shrink: 0;
}

.AccordionIcon-module_accordion-icon--opened__Vv1Nk {
  transform: rotate(90deg);
}
`);function R1(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}const Sg=e=>{var{svgIconComponent:t}=e,n=R1(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};var pp,hp,mp,$n={"altinn-button":"Button-module_altinn-button__66e22",icon:"Button-module_icon__-43u5","altinn-button--small":"Button-module_altinn-button--small__Dgk-Q","altinn-button--medium":"Button-module_altinn-button--medium__bOVBh","altinn-button--large":"Button-module_altinn-button--large__xStsn","altinn-button--full-width":"Button-module_altinn-button--full-width__MAP1E","altinn-button--dashed-border":"Button-module_altinn-button--dashed-border__qpC6S","altinn-button--only-icon":"Button-module_altinn-button--only-icon__dHhst","altinn-button--filled":"Button-module_altinn-button--filled__-w8IZ","altinn-button--outline":"Button-module_altinn-button--outline__NWnjl","altinn-button--quiet":"Button-module_altinn-button--quiet__2HgNN","altinn-button--filled--primary":"Button-module_altinn-button--filled--primary__qR1t6","altinn-button--filled--secondary":"Button-module_altinn-button--filled--secondary__RXBZU","altinn-button--filled--success":"Button-module_altinn-button--filled--success__-hCDf","altinn-button--filled--danger":"Button-module_altinn-button--filled--danger__dshZU","altinn-button--filled--inverted":"Button-module_altinn-button--filled--inverted__B3H2y","altinn-button--outline--primary":"Button-module_altinn-button--outline--primary__yrQtz","altinn-button--outline--secondary":"Button-module_altinn-button--outline--secondary__NQPoO","altinn-button--outline--success":"Button-module_altinn-button--outline--success__oAdH7","altinn-button--outline--danger":"Button-module_altinn-button--outline--danger__ngRhZ","altinn-button--outline--inverted":"Button-module_altinn-button--outline--inverted__opiJ3","altinn-button--quiet--primary":"Button-module_altinn-button--quiet--primary__ym-xv","altinn-button--quiet--secondary":"Button-module_altinn-button--quiet--secondary__LschY","altinn-button--quiet--success":"Button-module_altinn-button--quiet--success__AvIPs","altinn-button--quiet--danger":"Button-module_altinn-button--quiet--danger__buvJM","altinn-button--quiet--inverted":"Button-module_altinn-button--quiet--inverted__-VC-B"};Ce(`.Button-module_altinn-button__66e22 {
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);

  all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */
  font-family: inherit;
  border: var(--component-button-border_width-default) solid transparent;
  padding: 0 var(--button-vertical-padding);
  text-align: center;
  box-sizing: border-box;
  letter-spacing: var(--typography-default-letter-spacing);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Button-module_altinn-button__66e22:focus-visible {
  outline: var(--interactive_components-colors-focus_outline) solid
    var(--border_width-standard);
  outline-offset: var(--border_width-standard);
}

.Button-module_altinn-button__66e22:focus:not(:focus-visible) {
  outline: none;
}

.Button-module_altinn-button__66e22:disabled {
  cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Button-module_icon__-43u5 {
  height: var(--icon-size);
  width: var(--icon-size);
}

.Button-module_altinn-button--small__Dgk-Q {
  height: var(--component-button-size-height-small);
  font-size: var(--font_size-300);
  --icon-size: var(--component-button-size-icon-small);
  --button-vertical-padding: var(--component-button-space-padding-x-small);
  gap: var(--component-button-space-gap-small);
}

.Button-module_altinn-button--medium__bOVBh {
  height: var(--component-button-size-height-medium);
  min-width: var(--component-button-size-height-medium);
  font-size: var(--font_size-400-breakpoint_md);
  --icon-size: var(--component-button-size-icon-medium);
  --button-vertical-padding: var(--component-button-space-padding-x-medium);
  gap: var(--component-button-space-gap-medium);
}

.Button-module_altinn-button--large__xStsn {
  height: var(--component-button-size-height-large);
  min-width: var(--component-button-size-height-large);
  font-size: var(--font_size-600-breakpoint_md);
  --icon-size: var(--component-button-size-icon-large);
  --button-vertical-padding: var(--component-button-space-padding-x-large);
  gap: var(--component-button-space-gap-large);
}

.Button-module_altinn-button--full-width__MAP1E {
  width: 100%;
}

.Button-module_altinn-button--dashed-border__qpC6S {
  border-style: dashed;
}

.Button-module_altinn-button--only-icon__dHhst {
  padding: 0.5rem !important;
}

.Button-module_altinn-button--filled__-w8IZ {
  border-radius: 3px;
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
}

.Button-module_altinn-button--outline__NWnjl {
  border-radius: 3px;
  background-color: transparent;
}

.Button-module_altinn-button--quiet__2HgNN {
  border-radius: 50px;
  padding: 0 calc(var(--button-vertical-padding) * 2 / 3);
  background-color: transparent;
}

/* Filled button colors */
.Button-module_altinn-button--filled--primary__qR1t6 {
  background: var(--component-button-filled-primary-color-background-default);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):hover {
  background: var(--component-button-filled-primary-color-background-hover);
}

.Button-module_altinn-button--filled--primary__qR1t6:not(:disabled):active {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU {
  background: var(--component-button-filled-primary-color-background-pressed);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):hover {
  background: var(--colors-blue-800);
}

.Button-module_altinn-button--filled--secondary__RXBZU:not(:disabled):active {
  background: var(--colors-blue-950);
}

.Button-module_altinn-button--filled--success__-hCDf {
  background: var(--component-button-filled-success-color-background-default);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):hover {
  background: var(--component-button-filled-success-color-background-hover);
}

.Button-module_altinn-button--filled--success__-hCDf:not(:disabled):active {
  background: var(--component-button-filled-success-color-background-pressed);
}

.Button-module_altinn-button--filled--danger__dshZU {
  background: var(--component-button-filled-danger-color-background-default);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):hover {
  background: var(--component-button-filled-danger-color-background-hover);
}

.Button-module_altinn-button--filled--danger__dshZU:not(:disabled):active {
  background: var(--colors-red-800);
}

.Button-module_altinn-button--filled--inverted__B3H2y {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--filled--inverted__B3H2y:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--filled--inverted__B3H2y:focus-visible {
  outline-color: var(--colors-white);
}

/* Outline button colors */
.Button-module_altinn-button--outline--primary__yrQtz {
  color: var(--component-button-outline-primary-color-text-default);
  fill: var(--component-button-outline-primary-color-text-default);
  border-color: var(--component-button-outline-primary-color-border-default);
  background: var(--component-button-outline-primary-color-background-default);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-outline-primary-color-background-hover);
  border-color: var(--component-button-outline-primary-color-border-hover);
}

.Button-module_altinn-button--outline--primary__yrQtz:not(:disabled):active {
  color: var(--component-button-outline-primary-color-text-pressed);
  fill: var(--component-button-outline-primary-color-text-pressed);
  background: var(--component-button-outline-primary-color-background-pressed);
}

.Button-module_altinn-button--outline--secondary__NQPoO {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
  border-color: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):hover {
  background: var(--colors-blue-200);
}

.Button-module_altinn-button--outline--secondary__NQPoO:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--outline--success__oAdH7 {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
  background: var(--colors-white);
  border-color: var(--colors-green-700);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--outline--success__oAdH7:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-green-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ {
  color: var(--colors-red-500);
  fill: var(--colors-red-500);
  background: var(--colors-white);
  border-color: var(--colors-red-500);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):hover {
  color: var(--colors-red-700);
  fill: var(--colors-red-700);
  background: var(--colors-red-200);
  border-color: var(--colors-red-700);
}

.Button-module_altinn-button--outline--danger__ngRhZ:not(:disabled):active {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: var(--colors-red-500);
}

.Button-module_altinn-button--outline--inverted__opiJ3 {
  color: var(--colors-white);
  fill: var(--colors-white);
  border-color: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):hover {
  background: rgba(255, 255, 255, 0.1);
}

.Button-module_altinn-button--outline--inverted__opiJ3:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--outline--inverted__opiJ3:focus-visible {
  outline-color: var(--colors-white);
}

/* Quiet button colors */
.Button-module_altinn-button--quiet--primary__ym-xv {
  color: var(--component-button-quiet-primary-color-text-default);
  fill: var(--component-button-quiet-primary-color-text-default);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):hover {
  color: var(--colors-blue-800);
  fill: var(--colors-blue-800);
  background: var(--component-button-quiet-primary-color-background-hover);
}

.Button-module_altinn-button--quiet--primary__ym-xv:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--component-button-quiet-primary-color-background-pressed);
}

.Button-module_altinn-button--quiet--secondary__LschY {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):hover {
  background: var(--colors-neutral-400);
}

.Button-module_altinn-button--quiet--secondary__LschY:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-blue-900);
}

.Button-module_altinn-button--quiet--success__AvIPs {
  color: var(--colors-green-700);
  fill: var(--colors-green-700);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):hover {
  color: var(--colors-green-800);
  fill: var(--colors-green-800);
  background: var(--colors-green-300);
}

.Button-module_altinn-button--quiet--success__AvIPs:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-green-900);
}

.Button-module_altinn-button--quiet--danger__buvJM {
  color: var(--colors-red-600);
  fill: var(--colors-red-600);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):hover {
  color: var(--colors-red-800);
  fill: var(--colors-red-800);
  background: var(--colors-red-200);
}

.Button-module_altinn-button--quiet--danger__buvJM:not(:disabled):active {
  color: var(--component-button-filled-color-text-all);
  fill: var(--component-button-filled-color-text-all);
  background: var(--colors-red-800);
}

.Button-module_altinn-button--quiet--inverted__-VC-B {
  color: var(--colors-white);
  fill: var(--colors-white);
  background: transparent;
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):hover {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: rgba(255, 255, 255, 0.9);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:not(:disabled):active {
  color: var(--colors-blue-900);
  fill: var(--colors-blue-900);
  background: var(--colors-white);
}

.Button-module_altinn-button--quiet--inverted__-VC-B:focus-visible {
  outline-color: var(--colors-white);
}
`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(pp||(pp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(hp||(hp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(mp||(mp={}));var wu,ku;T.forwardRef((e,t)=>{var{children:n,color:r=hp.Primary,variant:i=mp.Filled,size:a=pp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,h=R1(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},h,{ref:t,className:Li($n["altinn-button"],$n[`altinn-button--${a}`],$n[`altinn-button--${i}`],$n[`altinn-button--${r}`],$n[`altinn-button--${i}--${r}`],{[$n["altinn-button--full-width"]]:l},{[$n["altinn-button--dashed-border"]]:u},{[$n["altinn-button--only-icon"]]:!n&&f},_),type:m}),f&&d==="left"&&Z.createElement(Sg,{svgIconComponent:f,className:$n.icon}),n,f&&d==="right"&&Z.createElement(Sg,{svgIconComponent:f,className:$n.icon}))});(function(e){e.Primary="primary",e.Success="success"})(wu||(wu={})),function(e){e.Small="small",e.Medium="medium"}(ku||(ku={}));const RO=T.createContext({color:wu.Primary,size:ku.Medium});var AO="Page-module_page__THNNc";Ce(`.Page-module_page__THNNc {
  width: 100%;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
}
`);const NO=({children:e,color:t=wu.Primary,size:n=ku.Medium})=>Z.createElement("div",{className:AO},Z.createElement(RO.Provider,{value:{color:t,size:n}},e));Ce(`.PageHeader-module_page-header__94GS1 {
  height: var(--page-header-height);
  background-color: var(--component-page_header-background-color);
  display: flex;
  width: 100%;
  color: var(--component-page_header-color);
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  box-sizing: inherit;
  align-items: center;
  font-size: var(--page_header-title-font-size);
  fill: var(--component-page_header-color);
}

.PageHeader-module_page-header--primary__-DYm- {
  --component-page_header-background-color: #022f51;
  --component-page_header-color: white;
}

.PageHeader-module_page-header--success__JUNEP {
  --component-page_header-background-color: #17c96b;
  --component-page_header-color: black;
}

.PageHeader-module_page-header--small__iSiFU {
  --page_header-title-font-size: 18px;
  --page-header-height: 72px;
}

.PageHeader-module_page-header--medium__TiCR6 {
  --page_header-title-font-size: 28px;
  --page-header-height: 96px;
}
`);var BO={"page-content":"PageContent-module_page-content__-sHWi"};Ce(`.PageContent-module_page-content__-sHWi {
  --component-page_content-vertical-padding: 2rem;
  background-color: white;
  padding-top: var(--component-page_content-vertical-padding);
  padding-bottom: var(--component-page_content-vertical-padding);
  box-sizing: inherit;
}
`);const Pg=({children:e})=>Z.createElement("div",{className:Li(BO["page-content"])},e);var _p;Ce(`.List-module_list__9aWGq {
  padding-left: 0;
  list-style-type: none;
  border-top-color: var(--component-list-border_top_color);
  border-top-style: var(--component-list-border_top_style);
  border-top-width: var(--component-list-border_top_width);
}

.List-module_list--solid__--Ld- {
  --component-list-border_top_color: #bcc7cc;
  --component-list-border_top_style: solid;
  --component-list-border_top_width: 0.1rem;
}

.List-module_list--dashed__CDfmL {
  --component-list-border_top_color: #1eadf7;
  --component-list-border_top_style: dashed;
  --component-list-border_top_width: 0.1rem;
}
`),function(e){e.Solid="solid",e.Dashed="dashed"}(_p||(_p={}));T.createContext({borderStyle:_p.Solid});Ce(`.ListItem-module_list-item__OIENi {
  display: block;
  border-bottom-color: var(--component-list_item-border_bottom_color);
  border-bottom-style: var(--component-list_item-border-bottom-style);
  border-bottom-width: var(--component-list_item-border-bottom-width);
}

.ListItem-module_list-item--solid__H4Nk8 {
  --component-list_item-border_bottom_color: #bcc7cc;
  --component-list_item-border-bottom-style: solid;
  --component-list_item-border-bottom-width: 0.1rem;
}

.ListItem-module_list-item--dashed__26PJV {
  --component-list_item-border-bottom-width: 0.1rem;
  --component-list_item-border_bottom_color: #1eadf7;
  --component-list_item-border-bottom-style: dashed;
}
`);var Cg,Eg,Og;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"})(Cg||(Cg={})),function(e){e.ReadOnlyInfo="readonly-info",e.ReadOnlyConfirm="readonly-confirm"}(Eg||(Eg={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Og||(Og={}));Ce(`.InputWrapper-module_InputWrapper__us2BQ {
  --background: var(--component-input-color-background-default);
  --border-color: var(--component-input-color-border-default);
  --outline-color: var(--component-input-color-outline-focus);
  --icon-background: transparent;
  --paddingY: 0;
  --paddingX: 0;
  background: var(--background);
  border-width: var(--component-input-border_width-default);
  border-radius: var(--interactive_components-border_radius-normal);
  border-style: solid;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  border-color: var(--border-color);
}

.InputWrapper-module_InputWrapper--with-focus-effect__24aF7:focus-within {
  outline: var(--outline-color) auto var(--border_width-thin);
  outline-offset: calc(var(--border_width-thin) + var(--border_width-standard));
}

.InputWrapper-module_InputWrapper--default__Lcj6I:hover {
  --border-color: var(--component-input-color-border-hover);
}

.InputWrapper-module_InputWrapper--error__C8fG3 {
  --icon-background: var(--component-input-error-color-border-default);
  --border-color: var(--component-input-error-color-border-default);
}

.InputWrapper-module_InputWrapper--error__C8fG3:hover {
  --icon-background: var(--component-input-error-color-border-hover);
  --border-color: var(--component-input-error-color-border-hover);
}

.InputWrapper-module_InputWrapper--disabled__p0H70 {
  --background: repeating-linear-gradient(
    135deg,
    #efefef,
    #efefef 2px,
    #fff 3px,
    #fff 5px
  );
  --border-color: var(--component-input-disabled-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-info__u6Mi8 {
  --background: var(--component-input-read_only_info-color-background-default);
  --border-color: var(--component-input-read_only_info-color-border-default);
}

.InputWrapper-module_InputWrapper--readonly-confirm__Y-YY- {
  --background: var(
    --component-input-read_only_confirm-color-background-default
  );
  --border-color: var(--component-input-read_only_confirm-color-border-default);
}

.InputWrapper-module_InputWrapper--search__1aIP8 {
  flex-direction: row-reverse;
}

.InputWrapper-module_InputWrapper--with-padding__o-H2V {
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */
  --paddingY: calc(
    var(--component-input-space-padding-y) -
      var(--component-input-border_width-default)
  );
  --paddingX: var(--component-input-space-padding-x);
}

.InputWrapper-module_InputWrapper__field__-Uwxu {
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  width: 100%;
  background: var(--background);
}

.InputWrapper-module_InputWrapper__icon__tbkEy {
  background: var(--icon-background);
  padding-right: var(--component-input-border_width-focus);
  padding-left: var(--component-input-border_width-default);
  display: flex;
  align-items: center;
  flex: none;
}

.InputWrapper-module_InputWrapper__icon--disabled__mmqUt {
  opacity: 60%;
}

.InputWrapper-module_InputWrapper__label__tLifi {
  font-weight: var(--component-label-font_weight-default);
  padding: 0;
}
`);Ce(`.ErrorMessage-module_altinn-error-message-wrapper__zR1LF {
  color: var(--component-error_message-color-text);
  font-size: var(--component-error_message-font_size-xs);
}
`);Ce(`.Map-module_map__mpwLI {
  position: relative;
  height: 50rem;
  width: 100%;
}
`);var vp,Tg;Ce(`Table {
  /* #FFFFFF */

  /* Inside auto layout */
  background-color: #ffffff;
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12);
}
`),function(e){e.Header="header",e.Body="body",e.Footer="footer"}(vp||(vp={})),function(e){e.Descending="desc",e.Ascending="asc",e.NotSortable="notSortable",e.NotActive="notActive"}(Tg||(Tg={}));T.createContext(void 0);T.createContext({variantStandard:vp.Body});Ce(`.TableHeader-module_table-header__mrqgB {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);Ce(`.TableRow-module_TableRow__3GK6I {
  width: 1056px;
  height: 60px;
}

.TableRow-module_table-row--selected__0i2on {
  background-color: #e0daf7;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
  border-left: 2px solid #011728;
}

.TableRow-module_table-row--body__CP23F:hover {
  background-color: #e3f7ff;
  cursor: pointer;
}
`);Ce(`.TableBody-module_TableBody__tqUvt {
  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  background-color: #ffff;
}
`);Ce(`.TableCell-module_header-table-cell__NOs4b {
  text-align: left;
  padding: 8px;
  margin: 20px 0 20px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_header-table-cell-radiobutton__I1mdW {
  text-align: left;
  padding: 8px;
  margin: 10px 0 10px 0;
  background: #f5f5f5;
  user-select: none;
}

.TableCell-module_body-table-cell__MhHfa {
  text-align: left;
  border-top: 1px solid #dde3e5;
  max-width: 300px;
  margin: 20px 0 20px 0;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_body-table-cell-radiobutton__kha-K {
  text-align: left;
  border-top: 1px solid #dde3e5;
  border-top: 1px solid #dde3e5;
  border-bottom: 1px solid #dde3e5;
}

.TableCell-module_image__vWvwd {
  max-width: 45px;
  max-height: 45px;
}

.TableCell-module_input__cyAaE {
  margin: 0px 15px 0px 15px;
}
.TableCell-module_radio-button__FbSRH {
  margin: 0px 0px 0px 15px;
}

.TableCell-module_container-sortable__70xdN {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.TableCell-module_icon__ADG4G {
  fill: rgba(0, 0, 0, 0.4);
  margin-left: -5px;
}

.TableCell-module_icon-desc__do5N3 {
  fill: rgb(0, 0, 0);
  margin-left: -5px;
}

.TableCell-module_icon-asc__96gN7 {
  fill: rgb(0, 0, 0);
  transform: rotate(180deg);
  margin-left: -5px;
}

.TableCell-module_header__HuaKn {
  color: #4b5563;
  font-weight: 600;
  margin: 10px 10px 10px 0;
}

.TableCell-module_property__k74rm {
  margin: 10px 10px 10px 0;
}
`);Ce(`.TableFooter-module_table-footer__FJZKm {
  background: #f5f5f5;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}
`);var Lg;Ce(`.CheckboxRadioTemplate-module_altinn-template__x5xJ- {
  --cursor: pointer;
  --description-color: var(--component-field_description-color-text-default);
  --label-color: var(--component-checkbox-color-text-default);
  --opacity: 1;

  border-radius: var(--input_box-border_radius);
  cursor: var(--cursor);
  display: inline-flex;
  flex-direction: row;
  font-size: var(--font_size);
  gap: var(--gap);
  line-height: var(--typography-default-line-height);
  opacity: var(--opacity);
}

.CheckboxRadioTemplate-module_altinn-template--xsmall__oK4HN {
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
  --gap: var(--component-checkbox-space-gap-xsmall);
}

.CheckboxRadioTemplate-module_altinn-template--small__AkNZO {
  --description-margin_top: var(--component-field_description-space-top-small);
  --font_size: var(--component-checkbox-font_size-sm);
  --gap: var(--component-checkbox-space-gap-small);
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):hover {
  --label-color: var(--component-checkbox-color-text-hover);
}

.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX {
  --cursor: auto;
  --opacity: var(--interactive_components-colors-disabled-opacity);
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__ToryX {
  display: inline-block;
  height: var(--input_box-size);
  position: relative;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__input__SiID4 {
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
}

.CheckboxRadioTemplate-module_altinn-template__input-wrapper__visible-box__qrEbd {
  display: inline-block;
  flex: 0 0 var(--input_box-size);
  height: var(--input_box-size);
  position: relative;
  width: var(--input_box-size);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__jBhWL {
  display: inline-flex;
  flex-direction: column;
  gap: var(--description-margin_top);

  /* Center-align input box with the first line in the label */
  margin-top: calc(
    (
        var(--input_box-size) -
          (var(--typography-default-line-height) * var(--font_size))
      ) / 2
  );
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__label__p2F6D {
  color: var(--label-color);
}

.CheckboxRadioTemplate-module_altinn-template__label-and-description__description__vqkxP {
  color: var(--description-color);
}

@supports not selector(:has(:focus-visible)) {
  .CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):focus-within {
    outline: 2px solid var(--interactive_components-colors-focus_outline);
    outline-offset: 2px;
  }
}

.CheckboxRadioTemplate-module_altinn-template__x5xJ-:not(.CheckboxRadioTemplate-module_altinn-template--disabled__M05zX):has(:focus-visible) {
  outline: 2px solid var(--interactive_components-colors-focus_outline);
  outline-offset: 2px;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Lg||(Lg={}));var zg;Ce(`.RadioButton-module_altinn-radio__iDfpf {
  /* Internal variables */
  --radio-background_color: var(--component-checkbox-color-background-default);
  --radio-border_color: var(--component-checkbox-color-border-default);
  --radio-border_width: var(--component-checkbox-border_width-small);
  --radio-checkmark-color: var(--colors-blue-700);
  --radio-checkmark-display: none;
  --radio-size: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-border_radius: calc(var(--radio-size) / 2);
  --input_box-size: var(--radio-size);
}

.RadioButton-module_altinn-radio--small__DK5Mw {
  --radio-size: var(--component-checkbox-size-width-small);
}

.RadioButton-module_altinn-radio--xsmall__pYclx {
  --radio-size: var(--component-checkbox-size-width-xsmall);
}

.RadioButton-module_altinn-radio--error__-z3qC {
  --radio-background_color: var(--component-checkbox-color-background-error);
  --radio-border_color: var(--component-checkbox-color-border-error);
}

.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-checkmark-display: inline-block;
}

.RadioButton-module_altinn-radio--checked__LWN7U:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--error__-z3qC) {
  --radio-border_color: var(--component-checkbox-color-border-checked);
}

.RadioButton-module_altinn-radio__iDfpf:not(.RadioButton-module_altinn-radio--disabled__XCncL, .RadioButton-module_altinn-radio--checked__LWN7U):hover {
  --radio-background_color: var(--component-checkbox-color-background-hover);
}

.RadioButton-module_altinn-radio__iDfpf:not(
    .RadioButton-module_altinn-radio--disabled__XCncL,
    .RadioButton-module_altinn-radio--error__-z3qC,
    .RadioButton-module_altinn-radio--checked__LWN7U
  ):hover {
  --radio-border_color: var(--component-checkbox-color-border-hover);
}

.RadioButton-module_altinn-radio--disabled__XCncL.RadioButton-module_altinn-radio--checked__LWN7U {
  --radio-background_color: var(--component-checkbox-color-border-disabled);
  --radio-border_color: transparent;
}

.RadioButton-module_altinn-visible-button__2nitf {
  background-color: var(--radio-background_color);
  border-color: var(--radio-border_color);
  border-radius: 50%;
  border-style: solid;
  border-width: var(--radio-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--radio-size);
  width: var(--radio-size);
}

.RadioButton-module_altinn-visible-button__checkmark__U-wDg {
  --radio-checkmark-size: 80%;
  background-color: var(--radio-checkmark-color);
  border-radius: 50%;
  display: var(--radio-checkmark-display);
  height: var(--radio-checkmark-size);
  margin: calc(
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -
      var(--radio-border_width)
  );
  width: var(--radio-checkmark-size);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(zg||(zg={}));Ce(`.Checkbox-module_altinn-checkbox__UGXBu {
  /* Internal variables */
  --checkbox-background_color: var(
    --component-checkbox-color-background-default
  );
  --checkbox-border_color: var(--component-checkbox-color-border-default);
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);
  --checkbox-border_width: var(--component-checkbox-border_width-small);
  --checkbox-checkmark-display: none;
  --checkbox-height: var(--component-checkbox-size-height-small);
  --checkbox-width: var(--component-checkbox-size-width-small);

  /* Variables used by CheckboxRadioTemplate */
  --input_box-size: var(--checkbox-height);
  --input_box-border_radius: var(--checkbox-border_radius);
}

.Checkbox-module_altinn-checkbox--compact__GRWwc {
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);
  --checkbox-height: var(--component-checkbox-size-height-xsmall);
  --checkbox-width: var(--component-checkbox-size-width-xsmall);
}

.Checkbox-module_altinn-checkbox--error__drS2Y {
  --checkbox-background_color: var(--component-checkbox-color-background-error);
  --checkbox-border_color: var(--component-checkbox-color-border-error);
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-checkmark-display: inline-block;
}

.Checkbox-module_altinn-checkbox--checked__jZ1RZ:not(.Checkbox-module_altinn-checkbox--disabled__w-UgR) {
  --checkbox-background_color: var(
    --component-checkbox-color-background-checked
  );
  --checkbox-border_color: var(--component-checkbox-color-border-checked);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-background_color: var(--component-checkbox-color-background-hover);
}

.Checkbox-module_altinn-checkbox__UGXBu:not(
    .Checkbox-module_altinn-checkbox--disabled__w-UgR,
    .Checkbox-module_altinn-checkbox--error__drS2Y,
    .Checkbox-module_altinn-checkbox--checked__jZ1RZ
  ):hover {
  --checkbox-border_color: var(--component-checkbox-color-border-hover);
}

.Checkbox-module_altinn-checkbox--disabled__w-UgR.Checkbox-module_altinn-checkbox--checked__jZ1RZ {
  --checkbox-background_color: var(--component-checkbox-color-border-disabled);
  --checkbox-border_color: transparent;
}

.Checkbox-module_altinn-checkbox--read-only__EJpNV {
  --cursor: auto;
}

.Checkbox-module_altinn-visible-box__MaStE {
  background-color: var(--checkbox-background_color);
  border-color: var(--checkbox-border_color);
  border-radius: var(--checkbox-border_radius);
  border-style: solid;
  border-width: var(--checkbox-border_width);
  box-sizing: border-box;
  display: inline-block;
  height: var(--checkbox-height);
  width: var(--checkbox-width);
}

.Checkbox-module_altinn-visible-box__checkmark__MP-Mb {
  background-color: white;
  clip-path: polygon(
    47.11% 56.51%,
    30.37% 38.94%,
    21.5% 48.09%,
    47.11% 74.54%,
    81.5% 39.16%,
    72.63% 30%
  );
  display: var(--checkbox-checkmark-display);
  height: 100%;
  width: 100%;
}
`);Ce(`.TextArea-module_altinn-TextArea__lzLj9 {
  font-family: inherit;
  font-size: var(--component-checkbox-font_size-sm);
}

.TextArea-module_altinn-TextArea--resize-none__N8fGA {
  resize: none;
}

.TextArea-module_altinn-TextArea--resize-both__EPavZ {
  resize: both;
}

.TextArea-module_altinn-TextArea--resize-horizontal__VRq3u {
  resize: horizontal;
}

.TextArea-module_altinn-TextArea--resize-vertical__qxnks {
  resize: vertical;
}
`);var Rg;Ce(`.FieldSet-module_altinn-field-set__NebiS {
  --color: var(--component-checkbox-color-text-default);
  --content-margin_top: var(--component-fieldset-space-gap-y-small);
  --description-color: var(--component-field_description-color-text-default);
  --description-margin_top: var(--component-field_description-space-top-small);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);
  --font_size: var(--component-checkbox-font_size-sm);

  color: var(--color);
  border: 0;
  font-size: var(--font_size);
  line-height: var(--typography-default-line-height);
  margin: 0;
  padding: 0;
}

.FieldSet-module_altinn-field-set--xsmall__J07mi {
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --description-margin_top: var(--component-field_description-space-top-xsmall);
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);
  --font_size: var(--component-checkbox-font_size-xs);
}

.FieldSet-module_altinn-field-set__NebiS:disabled {
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.FieldSet-module_altinn-field-set__NebiS:disabled * {
  opacity: 1;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 {
  font-weight: bold;
  padding: 0;
}

.FieldSet-module_altinn-field-set__description__8AMj5 {
  color: var(--description-color);
  margin: 0;
}

.FieldSet-module_altinn-field-set__legend__W9vL3 + .FieldSet-module_altinn-field-set__description__8AMj5 {
  margin-top: var(--description-margin_top);
}

.FieldSet-module_altinn-field-set__content__Q5V0v:not(:first-child) {
  margin-top: var(--content-margin_top);
}

.FieldSet-module_altinn-field-set__error-message__rNV-5 {
  margin-top: var(--error_message-margin_top);
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Rg||(Rg={}));var Ag;Ce(`.CheckboxGroup-module_altinn-checkbox-group__Q7GlX {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);

  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.CheckboxGroup-module_altinn-checkbox-group--compact__xSYGF {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.CheckboxGroup-module_altinn-checkbox-group--vertical__s2AkE {
  flex-direction: column;
}

.CheckboxGroup-module_altinn-checkbox-group--horizontal__Wl42J {
  flex-direction: row;
}
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ag||(Ag={}));Ce(`.Pagination-module_pagination-icon__zVOLT {
  fill: rgb(0, 0, 0);
}

.Pagination-module_pagination-icon__zVOLT:not(:last-child) {
  margin-right: 20px;
}

.Pagination-module_pagination-icon__zVOLT:hover {
  cursor: pointer;
}

.Pagination-module_pagination-icon--disabled__IvaxN {
  fill: rgba(0, 0, 0, 0.4);
  cursor: default !important;
}

.Pagination-module_pagination-wrapper__cUN7w {
  display: flex;
  align-items: center;
  justify-content: right;
}

.Pagination-module_icon-button__uZQ12 {
  background-color: transparent;
  margin: 5px;
  border: none;
}

.Pagination-module_description-text__ondJh {
  margin-right: 64px;
}

.Pagination-module_select-pagination__mma1- {
  margin-right: 25px;
}

/* breakpoints-sm */
@media only screen and (max-width: 540px) {
  .Pagination-module_pagination-wrapper__cUN7w {
    display: flex;
    flex-direction: column;
  }
  .Pagination-module_pagination-wrapper-row__yaNEB {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .Pagination-module_description-text__ondJh {
    margin-top: 10px;
    margin-right: 30px;
  }
  .Pagination-module_select-pagination__mma1- {
    margin-top: 10px;
    margin-right: 25px;
  }
}
`);Ce(`.MultiSelectItem-module_altinn-multi-select-item__fb2Ov {
  --border-radius: calc(var(--multiselect_item-height) / 2);
  align-items: center;
  background-color: var(--multiselect_item-background_color);
  border-radius: var(--border-radius);
  color: var(--multiselect_item-text_color);
  display: inline-flex;
  font-size: var(--font_size);
  gap: var(--multiselect_item-space_between);
  height: var(--multiselect_item-height);
  padding-left: var(--multiselect_item-space_left);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4 {
  background-color: transparent;
  border-bottom-right-radius: inherit;
  border-top-right-radius: inherit;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  padding: calc(
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2
  );
  width: var(--multiselect_item-height);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:not(:disabled):hover {
  background-color: var(--delete_cross_box-color-hover);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__UBRN4:focus-visible {
  background-color: var(--delete_cross_box-color-hover);
  outline: var(--focus_visible-outline);
}

.MultiSelectItem-module_altinn-multi-select-item__delete-button__cross__tRRZX {
  background-color: var(--multiselect_item_delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}
`);Ce(`.Select-module_altinn-select__678hU {
  --delete_cross_box-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --delete_cross_box-color-hover: var(--colors-red-500);
  --delete_cross_box-size: 25px;
  --delete_cross-clip_path: polygon(
    14.29% 0%,
    50% 35.71%,
    85.71% 0%,
    100% 14.29%,
    64.29% 50%,
    100% 85.71%,
    85.71% 100%,
    50% 64.29%,
    14.29% 100%,
    0% 85.71%,
    35.71% 50%,
    0% 14.29%
  );
  --delete_cross-color: var(--colors-blue-900);
  --delete_cross-color-active: var(--colors-blue-700);
  --delete_cross-color-disabled: #022f5180;
  --delete_cross-color-hover: white;
  --delete_cross-size: 12px;
  --arrow-border_left: 1px solid #022f5180;
  --arrow-color: var(--colors-blue-900);
  --arrow-height_to_width_fraction: calc(8 / 14);
  --arrow-horizontal_padding: 6px;
  --arrow-size: 14px;
  --arrow_wrapper-margin: 4px;
  --field-height-inside: calc(
    var(--field-height) - var(--component-input-border_width-default) * 2
  );
  --field-height: 36px;
  --font_size: 16px;
  --interactive_element-cursor: pointer;
  --line-height: 1.5;
  --multiselect_item-background_color: var(--colors-blue-900);
  --multiselect_item-height: 24px;
  --multiselect_item-space_between: 6px;
  --multiselect_item-space_left: 16px;
  --multiselect_item-text_color: white;
  --multiselect_item_delete_cross-color: white;
  --multiselect_items-gap: 4px;
  --multiselect_items-padding: calc(
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2
  );
  --option-background_color-default: transparent;
  --option-background_color-hover: var(--colors-blue-200);
  --option-background_color-selected: var(--colors-blue-300);
  --option-background_color-selected-hover: var(--colors-blue-500);
  --option-border_color: #022f5180;
  --option-border_width: 1px;
  --option-height: 36px;
  --option_list-background_color: white;
  --option_list-border: 1px solid #68707c;
  --option_list-border_radius: var(
    --interactive_components-border_radius-normal
  );
  --option_list-number_of_visible_options: 7;
  --option_list-shadow: 1px 1px 3px #00000040;
  --option_list-z_index: 1;
  --option-outline-focus: none;
  --option-padding_horizontal: 12px;
  --singleselect_field-padding_left: 12px;
  --focus_visible-outline: 2px auto
    var(--interactive_components-colors-focus_outline);

  font-size: var(--font_size);
  line-height: var(--line-height);
  position: relative;
}

.Select-module_altinn-select--disabled__3ckBL {
  --interactive_element-cursor: auto;
  opacity: var(--interactive_components-colors-disabled-opacity);
}

.Select-module_altinn-select--expanded__cA3tN {
  --delete_cross-color: var(--delete_cross-color-active);
}

.Select-module_altinn-select__678hU:not(.Select-module_altinn-select--expanded__cA3tN) .Select-module_altinn-select__option-list__ZT-fJ {
  display: none;
}

.Select-module_altinn-select--using-keyboard__-6NMj {
  --option-outline-focus: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__button__2FWU3 {
  background: transparent;
  border: 0;
  cursor: var(--interactive_element-cursor);
  height: 100%;
  margin: 0;
  padding: 0;
}

.Select-module_altinn-select__field__R4jZc {
  display: inline-flex;
  padding: 0;
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__R4jZc,
.Select-module_altinn-select--single__IapdF .Select-module_altinn-select__field__button__2FWU3 {
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  font-family: var(--font_family-default);
  font-size: var(--font_size);
  min-height: var(--field-height-inside);
  position: relative;
  width: 100%;
}

.Select-module_altinn-select--single__field__value__ywU8x {
  flex: 1;
  padding-left: var(--singleselect_field-padding_left);
  text-align: left;
}

.Select-module_altinn-select--multiple__field__values__oNU3G {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: var(--multiselect_items-gap);
  padding: var(--multiselect_items-padding);
}

.Select-module_altinn-select--multiple__5eSEL .Select-module_altinn-select__field__button__2FWU3:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select__field__arrow-wrapper__TqwIN {
  --arrow-height: calc(
    var(--arrow-size) * var(--arrow-height_to_width_fraction)
  );
  --arrow-vertical_padding: calc(
    (var(--field-height-inside) - var(--arrow-height)) / 2 -
      var(--arrow_wrapper-margin)
  );
  align-items: center;
  border-left: var(--arrow-border_left);
  box-sizing: border-box;
  display: flex;
  height: calc(100% - var(--arrow-vertical_padding));
  margin-bottom: var(--arrow_wrapper-margin);
  margin-left: var(--arrow_wrapper-margin);
  margin-top: var(--arrow_wrapper-margin);
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);
}

.Select-module_altinn-select__field__arrow-wrapper__arrow__4z33K {
  background-color: var(--arrow-color);
  clip-path: polygon(
    11.72% 9.93%,
    50% 67.28%,
    88.28% 9.93%,
    97.43% 29.13%,
    50% 96.79%,
    2.57% 29.13%
  );
  display: inline-block;
  height: var(--arrow-height);
  width: var(--arrow-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6 {
  background: none;
  border-radius: var(--delete_cross_box-border_radius);
  border: none;
  cursor: var(--interactive_element-cursor);
  height: var(--delete_cross_box-size);
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);
  width: var(--delete_cross_box-size);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  cursor: auto;
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:focus-visible {
  outline: var(--focus_visible-outline);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:hover:not(:disabled) {
  background-color: var(--delete_cross_box-color-hover);
  --delete_cross-color: var(--delete_cross-color-hover);
}

.Select-module_altinn-select--multiple__field__delete-button__G1EI6:disabled {
  --delete_cross-color: var(--delete_cross-color-disabled);
  background-color: transparent;
}

.Select-module_altinn-select--multiple__field__delete-button__cross__PqK7N {
  background-color: var(--delete_cross-color);
  clip-path: var(--delete_cross-clip_path);
  display: inline-block;
  height: var(--delete_cross-size);
  width: var(--delete_cross-size);
}

.Select-module_altinn-select__option-list__ZT-fJ {
  background-color: var(--option_list-background_color);
  border-radius: var(--option_list-border_radius);
  border: var(--option_list-border);
  box-shadow: var(--option_list-shadow);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0;
  max-height: calc(
    var(--option-height) * var(--option_list-number_of_visible_options)
  );
  overflow-y: auto;
  padding: 0;
  position: absolute;
  z-index: var(--option_list-z_index);
}

.Select-module_altinn-select__option-list__option__6b--t {
  background-color: var(--option-background_color-default);
  border-color: var(--option-border_color);
  border-style: solid;
  border-width: var(--option-border_width) 0 0 0;
  box-sizing: border-box;
  cursor: var(--interactive_element-cursor);
  display: inline-block;
  min-height: var(--option-height);
  overflow-x: hidden;
  padding-left: var(--option-padding_horizontal);
  padding-right: var(--option-padding_horizontal);
  padding-top: calc(
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2
  );
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Select-module_altinn-select__option-list__option__6b--t:hover {
  background-color: var(--option-background_color-hover);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk {
  background-color: var(--option-background_color-selected);
}

.Select-module_altinn-select__option-list__option--selected__m7OPk:hover {
  background-color: var(--option-background_color-selected-hover);
}

.Select-module_altinn-select--multiple__option-list__option--focused__R36IO {
  outline: var(--option-outline-focus);
}
`);Ce(`.Tabs-module_altinn-tabs__YJ7fE {
  --divider-color: #c9c9c9;
  --divider-width: 1px;
  --tab-border_bottom_color-selected: var(--colors-blue-700);
  --tab-border_bottom_color: transparent;
  --tab-border_bottom_width: 4px;
  --tab-font_family: var(--font_family-default);
  --tab-font_size: var(--font_size-component-size-sm);
  --tab-font_weight: 500;
  --tab-height: 32px;
  --tab-text_color-hover: var(--colors-black);
  --tab-text_color-selected: var(--colors-blue-700);
  --tab-text_color: #68707c;
  --tablist-gap: 36px;
  --tablist-margin_horizontal: 2rem;
  --tabpanel-margin_horizontal: 2rem;
  --tabpanel-margin_vertical: 2rem;
  position: relative;
}

.Tabs-module_altinn-tabs__tablist__iOp0D {
  display: flex;
  gap: var(--tablist-gap);
  margin: 0 var(--tablist-margin_horizontal);
  position: relative;
  z-index: 1;
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg {
  background-color: transparent;
  border-bottom-color: var(--tab-border_bottom_color);
  border-bottom-style: solid;
  border-width: 0 0 var(--tab-border_bottom_width) 0;
  color: var(--tab-text_color);
  cursor: pointer;
  font-family: var(--tab-font_family);
  font-size: var(--tab-font_size);
  font-weight: var(--tab-font_weight);
  line-height: var(--tab-height);
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Tabs-module_altinn-tabs__tablist__tab--selected__zxZv4 {
  --tab-text_color: var(--tab-text_color-selected);
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:hover {
  --tab-text_color: var(--tab-text_color-hover);
}

.Tabs-module_altinn-tabs__tablist__tab__ZaGUg:focus-visible {
  outline: var(--component-input-color-outline-focus) auto 2px;
  outline-offset: 2px;
}

.Tabs-module_altinn-tabs__divider__jmabD {
  border-color: var(--divider-color);
  border-style: solid;
  border-width: var(--divider-width) 0 0 0;
  height: var(--divider-width);
  margin: 0;
  position: absolute;
  top: var(--tab-height);
  width: 100%;
}

.Tabs-module_altinn-tabs__tabpanel__RBbkH {
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);
}
`);var Ng,Bg;Ce(`.RadioGroup-module_altinn-radio-group__Eje9Q {
  column-gap: var(--gap-x);
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--gap-y);
}

.RadioGroup-module_altinn-radio-group--xsmall__50AkM {
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);
}

.RadioGroup-module_altinn-radio-group--small__nFoFM {
  --gap-x: var(--component-checkbox-group-space-gap-x-small);
  --gap-y: var(--component-checkbox-group-space-gap-y-small);
}

.RadioGroup-module_altinn-radio-group--vertical__uCqzM {
  flex-direction: column;
}

.RadioGroup-module_altinn-radio-group--horizontal__jACTG {
  flex-direction: row;
}
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ng||(Ng={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Bg||(Bg={}));let Ig=0;function IO(e){const[t,n]=T.useState(e),r=e||t;return T.useEffect(()=>{t==null&&(Ig+=1,n(`aksel-icon-${Ig}`))},[t]),r}const Mg=Z["useId"];function A1(e){var t;if(Mg!==void 0){const n=Mg();return e??n.replace(/(:)/g,"")}return(t=IO(e))!==null&&t!==void 0?t:""}var MO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const DO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=MO(e,["title","titleId"]);let a=A1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),FO=DO;var jO=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const UO=T.forwardRef((e,t)=>{var{title:n,titleId:r}=e,i=jO(e,["title","titleId"]);let a=A1();return a=n?r||"title-"+a:void 0,T.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),n?T.createElement("title",{id:a},n):null,T.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0Zm0 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-11c2.205 0 4 1.657 4 3.693 0 .986-.416 1.914-1.172 2.612l-.593.54-.294.28c-.477.466-.869.94-.936 1.417l-.01.144v.814h-1.991v-.814c0-1.254.84-2.214 1.675-3.002l.74-.68c.38-.35.59-.816.59-1.31 0-1.024-.901-1.856-2.01-1.856-1.054 0-1.922.755-2.002 1.71l-.006.145H8C8 6.657 9.794 5 12 5Z",fill:"currentColor"}))}),$O=UO;function Qi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var jd,N1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/jd=N1,function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=typeof i;if(a==="string"||a==="number")n.push(i);else if(Array.isArray(i)){if(i.length){var l=t.apply(null,i);l&&n.push(l)}}else if(a==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){n.push(i.toString());continue}for(var u in i)e.call(i,u)&&i[u]&&n.push(u)}}}return n.join(" ")}jd.exports?(t.default=t,jd.exports=t):window.classNames=t}();var St=N1.exports;const gp=e=>{var{svgIconComponent:t}=e,n=Qi(e,["svgIconComponent"]);return T.isValidElement(t)?T.cloneElement(t,Object.assign({},n)):null};function nt(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}gp.displayName="SvgIcon";var yp,bp,xp,ir={button:"Button-module_button__2ZuB7",icon:"Button-module_icon__-43u5",small:"Button-module_small__l39oh",medium:"Button-module_medium__KTxdk",large:"Button-module_large__6bsb7",fullWidth:"Button-module_fullWidth__36oJT",dashedBorder:"Button-module_dashedBorder__500FL",outline:"Button-module_outline__F5jq-",quiet:"Button-module_quiet__1KlhF",onlyIcon:"Button-module_onlyIcon__lENu3",filled:"Button-module_filled__inpPb",primary:"Button-module_primary__s1sM6",secondary:"Button-module_secondary__R0waJ",success:"Button-module_success__w6qB6",danger:"Button-module_danger__V4fX8",inverted:"Button-module_inverted__VD6YO"};nt(`.Button-module_button__2ZuB7 {\r
    --border-radius: 3px;\r
    --button-size: var(--component-button-size-height-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    --icon-size: var(--component-button-size-icon-small);\r
\r
    all: initial; /* reset all styles to default, to avoid style overrides/surprises caused by other css (from Design system v1 f.ex) */\r
    align-items: center;\r
    border-radius: var(--border-radius);\r
    border: var(--component-button-border_width-default) solid transparent;\r
    box-sizing: border-box;\r
    color: var(--font-and-icon-color);\r
    cursor: pointer;\r
    display: flex;\r
    fill: var(--font-and-icon-color);\r
    font-family: inherit;\r
    height: var(--button-size);\r
    justify-content: center;\r
    letter-spacing: var(--typography-default-letter-spacing);\r
    padding: 0 var(--button-vertical-padding);\r
    text-align: center;\r
}\r
\r
.Button-module_button__2ZuB7:focus-visible {\r
    outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
    outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Button-module_button__2ZuB7:focus:not(:focus-visible) {\r
    outline: none;\r
}\r
\r
.Button-module_button__2ZuB7:disabled {\r
    cursor: auto;\r
    opacity: var(--opacity-disabled);\r
}\r
\r
.Button-module_icon__-43u5 {\r
    display: inline-block;\r
    height: var(--icon-size);\r
    width: var(--icon-size);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_small__l39oh {\r
    --button-size: var(--component-button-size-height-small);\r
    --button-vertical-padding: var(--component-button-space-padding-x-small);\r
    --icon-size: var(--component-button-size-icon-small);\r
    font-size: var(--font_size-300);\r
    gap: var(--component-button-space-gap-small);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_medium__KTxdk {\r
    --button-size: var(--component-button-size-height-medium);\r
    --button-vertical-padding: var(--component-button-space-padding-x-medium);\r
    --icon-size: var(--component-button-size-icon-medium);\r
    font-size: var(--font_size-400-breakpoint_md);\r
    gap: var(--component-button-space-gap-medium);\r
    min-width: var(--component-button-size-height-medium);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_large__6bsb7 {\r
    --button-size: var(--component-button-size-height-large);\r
    --button-vertical-padding: var(--component-button-space-padding-x-large);\r
    --icon-size: var(--component-button-size-icon-large);\r
    font-size: var(--font_size-600-breakpoint_md);\r
    gap: var(--component-button-space-gap-large);\r
    min-width: var(--component-button-size-height-large);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_fullWidth__36oJT {\r
    width: 100%;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_dashedBorder__500FL {\r
    border-style: dashed;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq- {\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF {\r
    --border-radius: 50px;\r
    padding: 0 calc(var(--button-vertical-padding) * 2 / 3);\r
    background-color: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_onlyIcon__lENu3 {\r
    padding: 0.5rem;\r
    width: var(--button-size);\r
}\r
\r
/* Filled button colors */\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6 {\r
    background: var(--component-button-filled-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):hover {\r
    background: var(--component-button-filled-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_primary__s1sM6:not(:disabled):active {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ {\r
    background: var(--component-button-filled-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_secondary__R0waJ:not(:disabled):active {\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6 {\r
    background: var(--component-button-filled-success-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):hover {\r
    background: var(--component-button-filled-success-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_success__w6qB6:not(:disabled):active {\r
    background: var(--component-button-filled-success-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8 {\r
    background: var(--component-button-filled-danger-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):hover {\r
    background: var(--component-button-filled-danger-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_danger__V4fX8:not(:disabled):active {\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_filled__inpPb.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Outline button colors */\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-default);\r
    border-color: var(--component-button-outline-primary-color-border-default);\r
    background: var(--component-button-outline-primary-color-background-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-outline-primary-color-background-hover);\r
    border-color: var(--component-button-outline-primary-color-border-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-outline-primary-color-text-pressed);\r
    background: var(--component-button-outline-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
    border-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-blue-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
    background: var(--colors-white);\r
    border-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-500);\r
    background: var(--colors-white);\r
    border-color: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-700);\r
    background: var(--colors-red-100);\r
    border-color: var(--colors-red-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-white);\r
    background: var(--colors-red-500);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    border-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    background: rgba(255, 255, 255, 0.1);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_outline__F5jq-.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}\r
\r
/* Quiet button colors */\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6 {\r
    --font-and-icon-color: var(--component-button-quiet-primary-color-text-default);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-800);\r
    background: var(--component-button-quiet-primary-color-background-hover);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_primary__s1sM6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--component-button-quiet-primary-color-background-pressed);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ {\r
    --font-and-icon-color: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):hover {\r
    background: var(--colors-grey-300);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_secondary__R0waJ:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-blue-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6 {\r
    --font-and-icon-color: var(--colors-green-700);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-green-800);\r
    background: var(--colors-green-200);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_success__w6qB6:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-green-900);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8 {\r
    --font-and-icon-color: var(--colors-red-600);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-red-800);\r
    background: var(--colors-red-100);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_danger__V4fX8:not(:disabled):active {\r
    --font-and-icon-color: var(--component-button-filled-color-text-all);\r
    background: var(--colors-red-800);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO {\r
    --font-and-icon-color: var(--colors-white);\r
    background: transparent;\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):hover {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: rgba(255, 255, 255, 0.9);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:not(:disabled):active {\r
    --font-and-icon-color: var(--colors-blue-900);\r
    background: var(--colors-white);\r
}\r
\r
.Button-module_button__2ZuB7.Button-module_quiet__1KlhF.Button-module_inverted__VD6YO:focus-visible {\r
    outline-color: var(--colors-white);\r
}`),function(e){e.Small="small",e.Medium="medium",e.Large="large"}(yp||(yp={})),function(e){e.Primary="primary",e.Secondary="secondary",e.Success="success",e.Danger="danger",e.Inverted="inverted"}(bp||(bp={})),function(e){e.Filled="filled",e.Outline="outline",e.Quiet="quiet"}(xp||(xp={}));const B1=(e,t)=>{var{children:n,color:r=bp.Primary,variant:i=xp.Filled,size:a=yp.Small,fullWidth:l=!1,dashedBorder:u=!1,iconPlacement:d="left",icon:f,type:m="button",className:_}=e,h=Qi(e,["children","color","variant","size","fullWidth","dashedBorder","iconPlacement","icon","type","className"]);return Z.createElement("button",Object.assign({},h,{ref:t,className:St(ir.button,ir[a],ir[i],ir[r],{[ir.fullWidth]:l},{[ir.dashedBorder]:u},{[ir.onlyIcon]:!n&&f},_),type:m}),f&&d==="left"&&Z.createElement(gp,{svgIconComponent:f,className:ir.icon}),n,f&&d==="right"&&Z.createElement(gp,{svgIconComponent:f,className:ir.icon}))};B1.displayName="Button";T.forwardRef(B1);var ZO="ErrorMessage-module_errorMessageWrapper__rSdCu";nt(`.ErrorMessage-module_errorMessageWrapper__rSdCu {\r
  color: var(--component-error_message-color-text);\r
  font-size: var(--component-error_message-font_size-xs);\r
}\r
`);const I1=({id:e,children:t,ariaLabel:n})=>Z.createElement("div",{"aria-label":n,className:ZO,"data-testid":"ErrorMessage",id:e,role:"alertdialog"},t);function Dg(e,t){T.useEffect(()=>(document.addEventListener(e,t),()=>document.removeEventListener(e,t)),[e,t])}function Ud(e,t){T.useEffect(()=>{const n=r=>{r.key===e&&t()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[e,t])}function WO(e){const t=T.useRef();return T.useEffect(()=>{t.current=e},[e]),t.current}I1.displayName="ErrorMessage";const Su=(e,t)=>{const n=T.useRef(!0);T.useEffect(()=>{if(!n.current)return e();n.current=!1},t)};function M1(e,t){if(e===t)return!0;if(e===void 0||t===void 0||e.length!==t.length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function D1(e){return e.length===new Set(e).size}var HO="Tabs-module_tabs__QzIkz",VO="Tabs-module_tablist__WR6ag",qO="Tabs-module_tab__IdDYc",KO="Tabs-module_selected__TxfYv",QO="Tabs-module_divider__-r5Cd",GO="Tabs-module_tabpanel__0vR1c";nt(`@import 'https://altinncdn.no/fonts/altinn-din/altinn-din.css';\r
\r
.Tabs-module_tabs__QzIkz {\r
  --divider-color: #c9c9c9;\r
  --divider-width: 1px;\r
  --tab-border_bottom_color-selected: var(--colors-blue-700);\r
  --tab-border_bottom_color: transparent;\r
  --tab-border_bottom_width: 4px;\r
  --tab-font_family: var(--font_family-default);\r
  --tab-font_size: var(--font_size-component-size-sm);\r
  --tab-font_weight: 500;\r
  --tab-height: 32px;\r
  --tab-text_color-hover: var(--colors-black);\r
  --tab-text_color-selected: var(--colors-blue-700);\r
  --tab-text_color: #68707c;\r
  --tablist-gap: 1.5rem;\r
  --tablist-margin_horizontal: 20px;\r
  --tabpanel-margin_horizontal: 20px;\r
  --tabpanel-margin_vertical: 20px;\r
  position: relative;\r
}\r
\r
.Tabs-module_tablist__WR6ag {\r
  display: flex;\r
  gap: var(--tablist-gap);\r
  margin: 0 var(--tablist-margin_horizontal);\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.Tabs-module_tab__IdDYc {\r
  background-color: transparent;\r
  border-bottom-color: var(--tab-border_bottom_color);\r
  border-bottom-style: solid;\r
  border-width: 0 0 var(--tab-border_bottom_width) 0;\r
  color: var(--tab-text_color);\r
  cursor: pointer;\r
  font-family: var(--tab-font_family);\r
  font-size: var(--tab-font_size);\r
  font-weight: var(--tab-font_weight);\r
  line-height: var(--tab-height);\r
  margin: 0;\r
  overflow: hidden;\r
  padding: 0;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.Tabs-module_tab__IdDYc.Tabs-module_selected__TxfYv {\r
  --tab-text_color: var(--tab-text_color-selected);\r
  --tab-border_bottom_color: var(--tab-border_bottom_color-selected);\r
}\r
\r
.Tabs-module_tab__IdDYc:hover {\r
  --tab-text_color: var(--tab-text_color-hover);\r
}\r
\r
.Tabs-module_tab__IdDYc:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) auto var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Tabs-module_divider__-r5Cd {\r
  border-color: var(--divider-color);\r
  border-style: solid;\r
  border-width: var(--divider-width) 0 0 0;\r
  height: var(--divider-width);\r
  margin: 0;\r
  position: absolute;\r
  top: var(--tab-height);\r
  width: 100%;\r
}\r
\r
.Tabs-module_tabpanel__0vR1c {\r
  margin: var(--tabpanel-margin_vertical) var(--tabpanel-margin_horizontal);\r
}\r
`);const Fg=e=>e.replace(/\s/,"_"),F1=({activeTab:e,items:t,onChange:n})=>{const r=T.useId(),i=t.map(({name:w,content:C,value:y,tabId:b,panelId:S})=>{const P=y??w;return{name:w,content:C,value:P,tabId:b??r+Fg(P)+"-tab",panelId:S??r+Fg(P)+"-panel"}});if(!D1(i.map(({value:w})=>w)))throw Error("Each tab value must be unique.");if(e!==void 0&&!i.some(w=>w.value===e))throw Error("The given active tab value must exist in the list of items.");const a=w=>i.findIndex(C=>C.value===w),l=e??i[0].value,[u,d]=T.useState(l),[f,m]=T.useState(a(l));T.useEffect(()=>d(l),[l]);const _=T.useRef(null),h=i.length-1;Su(()=>{var w;(w=_.current)===null||w===void 0||w.querySelectorAll('[role="tab"]')[f].focus()},[f]);const g=w=>{u!==w&&n&&n(w),d(w),m(a(w))},x=w=>C=>{switch(C.key){case"ArrowRight":f!==void 0&&m(f===h?0:f+1);break;case"ArrowLeft":f!==void 0&&m(f===0?h:f-1);break;case"Space":g(w)}};return Z.createElement("div",{className:HO},Z.createElement("div",{className:VO,ref:_,role:"tablist"},i.map((w,C)=>{const y=w.value===u;return Z.createElement("button",{"aria-controls":w.panelId,"aria-selected":y,className:St(qO,y&&KO),id:w.tabId,key:w.value,onClick:()=>g(w.value),onKeyDown:x(w.value),role:"tab",tabIndex:f===C?0:-1},w.name)})),Z.createElement("hr",{className:QO}),i.map(w=>Z.createElement("div",{className:GO,"aria-labelledby":w.tabId,hidden:w.value!==u,id:w.panelId,key:w.panelId,role:"tabpanel"},w.content)))};function ps(e){return e.split("-")[1]}function Hh(e){return e==="y"?"height":"width"}function Io(e){return e.split("-")[0]}function Ts(e){return["top","bottom"].includes(Io(e))?"x":"y"}function jg(e,t,n){let{reference:r,floating:i}=e;const a=r.x+r.width/2-i.width/2,l=r.y+r.height/2-i.height/2,u=Ts(t),d=Hh(u),f=r[d]/2-i[d]/2,m=u==="x";let _;switch(Io(t)){case"top":_={x:a,y:r.y-i.height};break;case"bottom":_={x:a,y:r.y+r.height};break;case"right":_={x:r.x+r.width,y:l};break;case"left":_={x:r.x-i.width,y:l};break;default:_={x:r.x,y:r.y}}switch(ps(t)){case"start":_[u]-=f*(n&&m?-1:1);break;case"end":_[u]+=f*(n&&m?-1:1)}return _}F1.displayName="Tabs";function j1(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function Pu(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function U1(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:l,elements:u,strategy:d}=e,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:_="floating",altBoundary:h=!1,padding:g=0}=t,x=j1(g),w=u[h?_==="floating"?"reference":"floating":_],C=Pu(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(w)))==null||n?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(u.floating)),boundary:f,rootBoundary:m,strategy:d})),y=_==="floating"?{...l.floating,x:r,y:i}:l.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u.floating)),S=await(a.isElement==null?void 0:a.isElement(b))&&await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1},P=Pu(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:b,strategy:d}):y);return{top:(C.top-P.top+x.top)/S.y,bottom:(P.bottom-C.bottom+x.bottom)/S.y,left:(C.left-P.left+x.left)/S.x,right:(P.right-C.right+x.right)/S.x}}const XO=Math.min,JO=Math.max;function wp(e,t,n){return JO(e,XO(t,n))}const Ug=e=>({name:"arrow",options:e,async fn(t){const{element:n,padding:r=0}=e||{},{x:i,y:a,placement:l,rects:u,platform:d}=t;if(n==null)return{};const f=j1(r),m={x:i,y:a},_=Ts(l),h=Hh(_),g=await d.getDimensions(n),x=_==="y"?"top":"left",w=_==="y"?"bottom":"right",C=u.reference[h]+u.reference[_]-m[_]-u.floating[h],y=m[_]-u.reference[_],b=await(d.getOffsetParent==null?void 0:d.getOffsetParent(n));let S=b?_==="y"?b.clientHeight||0:b.clientWidth||0:0;S===0&&(S=u.floating[h]);const P=C/2-y/2,z=f[x],I=S-g[h]-f[w],D=S/2-g[h]/2+P,j=wp(z,D,I),V=ps(l)!=null&&D!=j&&u.reference[h]/2-(D<z?f[x]:f[w])-g[h]/2<0;return{[_]:m[_]-(V?D<z?z-D:I-D:0),data:{[_]:j,centerOffset:D-j}}}}),YO={left:"right",right:"left",bottom:"top",top:"bottom"};function vl(e){return e.replace(/left|right|bottom|top/g,t=>YO[t])}const eT={start:"end",end:"start"};function $d(e){return e.replace(/start|end/g,t=>eT[t])}const tT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;const{placement:r,middlewareData:i,rects:a,initialPlacement:l,platform:u,elements:d}=t,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:_,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:x=!0,...w}=e,C=Io(r),y=Io(l)===l,b=await(u.isRTL==null?void 0:u.isRTL(d.floating)),S=_||(y||!x?[vl(l)]:function(U){const R=vl(U);return[$d(U),R,$d(R)]}(l));_||g==="none"||S.push(...function(U,R,Y,_e){const re=ps(U);let de=function(ee,ue,M){const oe=["left","right"],K=["right","left"],O=["top","bottom"],B=["bottom","top"];switch(ee){case"top":case"bottom":return M?ue?K:oe:ue?oe:K;case"left":case"right":return ue?O:B;default:return[]}}(Io(U),Y==="start",_e);return re&&(de=de.map(ee=>ee+"-"+re),R&&(de=de.concat(de.map($d)))),de}(l,x,g,b));const P=[l,...S],z=await U1(t,w),I=[];let D=((n=i.flip)==null?void 0:n.overflows)||[];if(f&&I.push(z[C]),m){const{main:U,cross:R}=function(Y,_e,re){re===void 0&&(re=!1);const de=ps(Y),ee=Ts(Y),ue=Hh(ee);let M=ee==="x"?de===(re?"end":"start")?"right":"left":de==="start"?"bottom":"top";return _e.reference[ue]>_e.floating[ue]&&(M=vl(M)),{main:M,cross:vl(M)}}(r,a,b);I.push(z[U],z[R])}if(D=[...D,{placement:r,overflows:I}],!I.every(U=>U<=0)){var j;const U=(((j=i.flip)==null?void 0:j.index)||0)+1,R=P[U];if(R)return{data:{index:U,overflows:D},reset:{placement:R}};let Y="bottom";switch(h){case"bestFit":{var V;const _e=(V=D.map(re=>[re,re.overflows.filter(de=>de>0).reduce((de,ee)=>de+ee,0)]).sort((re,de)=>re[1]-de[1])[0])==null?void 0:V[0].placement;_e&&(Y=_e);break}case"initialPlacement":Y=l}if(r!==Y)return{reset:{placement:Y}}}return{}}}},nT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await async function(a,l){const{placement:u,platform:d,elements:f}=a,m=await(d.isRTL==null?void 0:d.isRTL(f.floating)),_=Io(u),h=ps(u),g=Ts(u)==="x",x=["left","top"].includes(_)?-1:1,w=m&&g?-1:1,C=typeof l=="function"?l(a):l;let{mainAxis:y,crossAxis:b,alignmentAxis:S}=typeof C=="number"?{mainAxis:C,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...C};return h&&typeof S=="number"&&(b=h==="end"?-1*S:S),g?{x:b*w,y:y*x}:{x:y*x,y:b*w}}(t,e);return{x:n+i.x,y:r+i.y,data:i}}}};function dn(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Qn(e){return dn(e).getComputedStyle(e)}function ao(e){return Z1(e)?(e.nodeName||"").toLowerCase():""}let gl;function $1(){if(gl)return gl;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(gl=e.brands.map(t=>t.brand+"/"+t.version).join(" "),gl):navigator.userAgent}function yr(e){return e instanceof dn(e).HTMLElement}function Ln(e){return e instanceof dn(e).Element}function Z1(e){return e instanceof dn(e).Node}function $g(e){return typeof ShadowRoot>"u"?!1:e instanceof dn(e).ShadowRoot||e instanceof ShadowRoot}function Cc(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Qn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function rT(e){return["table","td","th"].includes(ao(e))}function kp(e){const t=/firefox/i.test($1()),n=Qn(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(i=>n.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const a=n.contain;return a!=null&&a.includes(i)})}function W1(){return!/^((?!chrome|android).)*safari/i.test($1())}function Vh(e){return["html","body","#document"].includes(ao(e))}const Zg=Math.min,Ha=Math.max,Cu=Math.round;function H1(e){const t=Qn(e);let n=parseFloat(t.width),r=parseFloat(t.height);const i=e.offsetWidth,a=e.offsetHeight,l=Cu(n)!==i||Cu(r)!==a;return l&&(n=i,r=a),{width:n,height:r,fallback:l}}function V1(e){return Ln(e)?e:e.contextElement}const q1={x:1,y:1};function zi(e){const t=V1(e);if(!yr(t))return q1;const n=t.getBoundingClientRect(),{width:r,height:i,fallback:a}=H1(t);let l=(a?Cu(n.width):n.width)/r,u=(a?Cu(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}function Wo(e,t,n,r){var i,a;t===void 0&&(t=!1),n===void 0&&(n=!1);const l=e.getBoundingClientRect(),u=V1(e);let d=q1;t&&(r?Ln(r)&&(d=zi(r)):d=zi(e));const f=u?dn(u):window,m=!W1()&&n;let _=(l.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/d.x,h=(l.top+(m&&((a=f.visualViewport)==null?void 0:a.offsetTop)||0))/d.y,g=l.width/d.x,x=l.height/d.y;if(u){const w=dn(u),C=r&&Ln(r)?dn(r):r;let y=w.frameElement;for(;y&&r&&C!==w;){const b=zi(y),S=y.getBoundingClientRect(),P=getComputedStyle(y);S.x+=(y.clientLeft+parseFloat(P.paddingLeft))*b.x,S.y+=(y.clientTop+parseFloat(P.paddingTop))*b.y,_*=b.x,h*=b.y,g*=b.x,x*=b.y,_+=S.x,h+=S.y,y=dn(y).frameElement}}return{width:g,height:x,top:h,right:_+g,bottom:h+x,left:_,x:_,y:h}}function Jr(e){return((Z1(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ec(e){return Ln(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function K1(e){return Wo(Jr(e)).left+Ec(e).scrollLeft}function oT(e,t,n){const r=yr(t),i=Jr(t),a=Wo(e,!0,n==="fixed",t);let l={scrollLeft:0,scrollTop:0};const u={x:0,y:0};if(r||!r&&n!=="fixed")if((ao(t)!=="body"||Cc(i))&&(l=Ec(t)),yr(t)){const d=Wo(t,!0);u.x=d.x+t.clientLeft,u.y=d.y+t.clientTop}else i&&(u.x=K1(i));return{x:a.left+l.scrollLeft-u.x,y:a.top+l.scrollTop-u.y,width:a.width,height:a.height}}function hs(e){if(ao(e)==="html")return e;const t=e.assignedSlot||e.parentNode||($g(e)?e.host:null)||Jr(e);return $g(t)?t.host:t}function Wg(e){return yr(e)&&Qn(e).position!=="fixed"?e.offsetParent:null}function Hg(e){const t=dn(e);let n=Wg(e);for(;n&&rT(n)&&Qn(n).position==="static";)n=Wg(n);return n&&(ao(n)==="html"||ao(n)==="body"&&Qn(n).position==="static"&&!kp(n))?t:n||function(r){let i=hs(r);for(;yr(i)&&!Vh(i);){if(kp(i))return i;i=hs(i)}return null}(e)||t}function Q1(e){const t=hs(e);return Vh(t)?e.ownerDocument.body:yr(t)&&Cc(t)?t:Q1(t)}function Yr(e,t){var n;t===void 0&&(t=[]);const r=Q1(e),i=r===((n=e.ownerDocument)==null?void 0:n.body),a=dn(r);return i?t.concat(a,a.visualViewport||[],Cc(r)?r:[]):t.concat(r,Yr(r))}function Vg(e,t,n){return t==="viewport"?Pu(function(r,i){const a=dn(r),l=Jr(r),u=a.visualViewport;let d=l.clientWidth,f=l.clientHeight,m=0,_=0;if(u){d=u.width,f=u.height;const h=W1();(h||!h&&i==="fixed")&&(m=u.offsetLeft,_=u.offsetTop)}return{width:d,height:f,x:m,y:_}}(e,n)):Ln(t)?function(r,i){const a=Wo(r,!0,i==="fixed"),l=a.top+r.clientTop,u=a.left+r.clientLeft,d=yr(r)?zi(r):{x:1,y:1},f=r.clientWidth*d.x,m=r.clientHeight*d.y,_=u*d.x,h=l*d.y;return{top:h,left:_,right:_+f,bottom:h+m,x:_,y:h,width:f,height:m}}(t,n):Pu(function(r){var i;const a=Jr(r),l=Ec(r),u=(i=r.ownerDocument)==null?void 0:i.body,d=Ha(a.scrollWidth,a.clientWidth,u?u.scrollWidth:0,u?u.clientWidth:0),f=Ha(a.scrollHeight,a.clientHeight,u?u.scrollHeight:0,u?u.clientHeight:0);let m=-l.scrollLeft+K1(r);const _=-l.scrollTop;return Qn(u||a).direction==="rtl"&&(m+=Ha(a.clientWidth,u?u.clientWidth:0)-d),{width:d,height:f,x:m,y:_}}(Jr(e)))}const iT={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?function(d,f){const m=f.get(d);if(m)return m;let _=Yr(d).filter(w=>Ln(w)&&ao(w)!=="body"),h=null;const g=Qn(d).position==="fixed";let x=g?hs(d):d;for(;Ln(x)&&!Vh(x);){const w=Qn(x),C=kp(x);(g?C||h:C||w.position!=="static"||!h||!["absolute","fixed"].includes(h.position))?h=w:_=_.filter(y=>y!==x),x=hs(x)}return f.set(d,_),_}(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((d,f)=>{const m=Vg(t,f,i);return d.top=Ha(m.top,d.top),d.right=Zg(m.right,d.right),d.bottom=Zg(m.bottom,d.bottom),d.left=Ha(m.left,d.left),d},Vg(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=yr(n),a=Jr(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0},u={x:1,y:1};const d={x:0,y:0};if((i||!i&&r!=="fixed")&&((ao(n)!=="body"||Cc(a))&&(l=Ec(n)),yr(n))){const f=Wo(n);u=zi(n),d.x=f.x+n.clientLeft,d.y=f.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x,y:t.y*u.y-l.scrollTop*u.y+d.y}},isElement:Ln,getDimensions:function(e){return H1(e)},getOffsetParent:Hg,getDocumentElement:Jr,getScale:zi,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||Hg,a=this.getDimensions;return{reference:oT(t,await i(n),r),floating:{x:0,y:0,...await a(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>Qn(e).direction==="rtl"};function aT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:u=!1}=r,d=i&&!u,f=d||a?[...Ln(e)?Yr(e):e.contextElement?Yr(e.contextElement):[],...Yr(t)]:[];f.forEach(g=>{d&&g.addEventListener("scroll",n,{passive:!0}),a&&g.addEventListener("resize",n)});let m,_=null;if(l){let g=!0;_=new ResizeObserver(()=>{g||n(),g=!1}),Ln(e)&&!u&&_.observe(e),Ln(e)||!e.contextElement||u||_.observe(e.contextElement),_.observe(t)}let h=u?Wo(e):null;return u&&function g(){const x=Wo(e);!h||x.x===h.x&&x.y===h.y&&x.width===h.width&&x.height===h.height||n(),h=x,m=requestAnimationFrame(g)}(),n(),()=>{var g;f.forEach(x=>{d&&x.removeEventListener("scroll",n),a&&x.removeEventListener("resize",n)}),(g=_)==null||g.disconnect(),_=null,u&&cancelAnimationFrame(m)}}const sT=(e,t,n)=>{const r=new Map,i={platform:iT,...n},a={...i.platform,_c:r};return(async(l,u,d)=>{const{placement:f="bottom",strategy:m="absolute",middleware:_=[],platform:h}=d,g=_.filter(Boolean),x=await(h.isRTL==null?void 0:h.isRTL(u));let w=await h.getElementRects({reference:l,floating:u,strategy:m}),{x:C,y}=jg(w,f,x),b=f,S={},P=0;for(let z=0;z<g.length;z++){const{name:I,fn:D}=g[z],{x:j,y:V,data:U,reset:R}=await D({x:C,y,initialPlacement:f,placement:b,strategy:m,middlewareData:S,rects:w,platform:h,elements:{reference:l,floating:u}});C=j??C,y=V??y,S={...S,[I]:{...S[I],...U}},R&&P<=50&&(P++,typeof R=="object"&&(R.placement&&(b=R.placement),R.rects&&(w=R.rects===!0?await h.getElementRects({reference:l,floating:u,strategy:m}):R.rects),{x:C,y}=jg(w,b,x)),z=-1)}return{x:C,y,placement:b,strategy:m,middlewareData:S}})(e,t,{...i,platform:a})},lT=e=>{const{element:t,padding:n}=e;return{name:"arrow",options:e,fn(r){return i=t,Object.prototype.hasOwnProperty.call(i,"current")?t.current!=null?Ug({element:t.current,padding:n}).fn(r):{}:t?Ug({element:t,padding:n}).fn(r):{};var i}}};var yl=typeof document<"u"?T.useLayoutEffect:T.useEffect;function Eu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!=0;)if(!Eu(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!=0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!=0;){const a=i[r];if((a!=="_owner"||!e.$$typeof)&&!Eu(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function uT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],whileElementsMounted:i,open:a}=e,[l,u]=T.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[d,f]=T.useState(r);Eu(d,r)||f(r);const m=T.useRef(null),_=T.useRef(null),h=T.useRef(l),g=function(j){const V=T.useRef(j);return yl(()=>{V.current=j}),V}(i),[x,w]=T.useState(null),[C,y]=T.useState(null),b=T.useCallback(j=>{m.current!==j&&(m.current=j,w(j))},[]),S=T.useCallback(j=>{_.current!==j&&(_.current=j,y(j))},[]),P=T.useCallback(()=>{m.current&&_.current&&sT(m.current,_.current,{middleware:d,placement:t,strategy:n}).then(j=>{const V={...j,isPositioned:!0};z.current&&!Eu(h.current,V)&&(h.current=V,Bi.flushSync(()=>{u(V)}))})},[d,t,n]);yl(()=>{a===!1&&h.current.isPositioned&&(h.current.isPositioned=!1,u(j=>({...j,isPositioned:!1})))},[a]);const z=T.useRef(!1);yl(()=>(z.current=!0,()=>{z.current=!1}),[]),yl(()=>{if(x&&C){if(g.current)return g.current(x,C,P);P()}},[x,C,P,g]);const I=T.useMemo(()=>({reference:m,floating:_,setReference:b,setFloating:S}),[b,S]),D=T.useMemo(()=>({reference:x,floating:C}),[x,C]);return T.useMemo(()=>({...l,update:P,refs:I,elements:D,reference:b,floating:S}),[l,P,I,D,b,S])}var G1=typeof document<"u"?T.useLayoutEffect:T.useEffect;let Zd=!1,cT=0;const qg=()=>"floating-ui-"+cT++,Kg=qa["useId".toString()]||function(){const[e,t]=T.useState(()=>Zd?qg():void 0);return G1(()=>{e==null&&t(qg())},[]),T.useEffect(()=>{Zd||(Zd=!0)},[]),e},dT=T.createContext(null),fT=T.createContext(null),X1=()=>T.useContext(fT);function J1(e){return e?.ownerDocument||document}function Y1(e){return J1(e).defaultView||window}function Ao(e){return!!e&&e instanceof Y1(e).Element}function qh(e){return!!e&&e instanceof Y1(e).HTMLElement}function pT(e){if(e.mozInputSource===0&&e.isTrusted)return!0;const t=/Android/i;return(t.test(function(){const n=navigator.userAgentData;return n!=null&&n.platform?n.platform:navigator.platform}())||t.test(function(){const n=navigator.userAgentData;return n&&Array.isArray(n.brands)?n.brands.map(r=>{let{brand:i,version:a}=r;return i+"/"+a}).join(" "):navigator.userAgent}()))&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function hT(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType!=="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0}function Qg(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function Wd(e,t){let n=e.filter(i=>{var a;return i.parentId===t&&((a=i.context)==null?void 0:a.open)})||[],r=n;for(;r.length;)r=e.filter(i=>{var a;return(a=r)==null?void 0:a.some(l=>{var u;return i.parentId===l.id&&((u=i.context)==null?void 0:u.open)})})||[],n=n.concat(r);return n}const mT=qa["useInsertionEffect".toString()]||(e=>e());function ex(e){const t=T.useRef(()=>{});return mT(()=>{t.current=e}),T.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current==null?void 0:t.current(...r)},[])}function Gg(e){return qh(e.target)&&e.target.tagName==="BUTTON"}function Xg(e){return function(t){return qh(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}(e)}function Hd(e,t){if(t==null)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return n.target!=null&&t.contains(n.target)}const _T={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},vT={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},gT=function(e,t){let{open:n,onOpenChange:r,events:i,nodeId:a,elements:{reference:l,domReference:u,floating:d}}=e,{enabled:f=!0,escapeKey:m=!0,outsidePress:_=!0,outsidePressEvent:h="pointerdown",referencePress:g=!1,referencePressEvent:x="pointerdown",ancestorScroll:w=!1,bubbles:C=!0}=t===void 0?{}:t;const y=X1(),b=(((S=T.useContext(dT))==null?void 0:S.id)||null)!=null;var S;const P=ex(typeof _=="function"?_:()=>!1),z=typeof _=="function"?P:_,I=T.useRef(!1),{escapeKeyBubbles:D,outsidePressBubbles:j}=function(V){var U,R;return V===void 0&&(V=!0),{escapeKeyBubbles:typeof V=="boolean"?V:(U=V.escapeKey)==null||U,outsidePressBubbles:typeof V=="boolean"?V:(R=V.outsidePress)==null||R}}(C);return T.useEffect(()=>{if(!n||!f)return;function V(re){if(re.key==="Escape"){if(!D&&y&&Wd(y.nodesRef.current,a).length>0)return;i.emit("dismiss",{type:"escapeKey",data:{returnFocus:{preventScroll:!1}}}),r(!1)}}function U(re){const de=I.current;if(I.current=!1,de||typeof z=="function"&&!z(re))return;const ee=function(M){return"composedPath"in M?M.composedPath()[0]:M.target}(re);if(qh(ee)&&d){const M=d.ownerDocument.defaultView||window,oe=ee.scrollWidth>ee.clientWidth,K=ee.scrollHeight>ee.clientHeight;let O=K&&re.offsetX>ee.clientWidth;if(K&&M.getComputedStyle(ee).direction==="rtl"&&(O=re.offsetX<=ee.offsetWidth-ee.clientWidth),O||oe&&re.offsetY>ee.clientHeight)return}const ue=y&&Wd(y.nodesRef.current,a).some(M=>{var oe;return Hd(re,(oe=M.context)==null?void 0:oe.elements.floating)});Hd(re,d)||Hd(re,u)||ue||!j&&y&&Wd(y.nodesRef.current,a).length>0||(i.emit("dismiss",{type:"outsidePress",data:{returnFocus:b?{preventScroll:!0}:pT(re)||hT(re)}}),r(!1))}function R(){r(!1)}const Y=J1(d);m&&Y.addEventListener("keydown",V),z&&Y.addEventListener(h,U);let _e=[];return w&&(Ao(u)&&(_e=Yr(u)),Ao(d)&&(_e=_e.concat(Yr(d))),!Ao(l)&&l&&l.contextElement&&(_e=_e.concat(Yr(l.contextElement)))),_e=_e.filter(re=>{var de;return re!==((de=Y.defaultView)==null?void 0:de.visualViewport)}),_e.forEach(re=>{re.addEventListener("scroll",R,{passive:!0})}),()=>{m&&Y.removeEventListener("keydown",V),z&&Y.removeEventListener(h,U),_e.forEach(re=>{re.removeEventListener("scroll",R)})}},[d,u,l,m,z,h,i,y,a,n,r,w,f,D,j,b]),T.useEffect(()=>{I.current=!1},[z,h]),T.useMemo(()=>f?{reference:{[_T[x]]:()=>{g&&(i.emit("dismiss",{type:"referencePress",data:{returnFocus:!1}}),r(!1))}},floating:{[vT[h]]:()=>{I.current=!0}}}:{},[f,i,g,h,x,r])};function Kh(e){return T.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})},e)}function yT(e){e===void 0&&(e={});const{open:t=!1,onOpenChange:n,nodeId:r}=e,i=uT(e),a=X1(),l=T.useRef(null),u=T.useRef({}),d=T.useState(()=>function(){const y=new Map;return{emit(b,S){var P;(P=y.get(b))==null||P.forEach(z=>z(S))},on(b,S){y.set(b,[...y.get(b)||[],S])},off(b,S){y.set(b,(y.get(b)||[]).filter(P=>P!==S))}}}())[0],[f,m]=T.useState(null),_=T.useCallback(y=>{const b=Ao(y)?{getBoundingClientRect:()=>y.getBoundingClientRect(),contextElement:y}:y;i.refs.setReference(b)},[i.refs]),h=T.useCallback(y=>{(Ao(y)||y===null)&&(l.current=y,m(y)),(Ao(i.refs.reference.current)||i.refs.reference.current===null||y!==null&&!Ao(y))&&i.refs.setReference(y)},[i.refs]),g=T.useMemo(()=>({...i.refs,setReference:h,setPositionReference:_,domReference:l}),[i.refs,h,_]),x=T.useMemo(()=>({...i.elements,domReference:f}),[i.elements,f]),w=ex(n),C=T.useMemo(()=>({...i,refs:g,elements:x,dataRef:u,nodeId:r,events:d,open:t,onOpenChange:w}),[i,r,d,t,w,g,x]);return G1(()=>{const y=a?.nodesRef.current.find(b=>b.id===r);y&&(y.context=C)}),T.useMemo(()=>({...i,context:C,refs:g,reference:h,positionReference:_}),[i,g,C,h,_])}function Vd(e,t,n){const r=new Map;return{...n==="floating"&&{tabIndex:-1},...e,...t.map(i=>i?i[n]:null).concat(e).reduce((i,a)=>(a&&Object.entries(a).forEach(l=>{let[u,d]=l;var f;u.indexOf("on")===0?(r.has(u)||r.set(u,[]),typeof d=="function"&&((f=r.get(u))==null||f.push(d),i[u]=function(){for(var m,_=arguments.length,h=new Array(_),g=0;g<_;g++)h[g]=arguments[g];(m=r.get(u))==null||m.forEach(x=>x(...h))})):i[u]=d}),i),{})}}var Ou,Sp={popover:"Popover-module_popover__E9K9X",default:"Popover-module_default__TlPJp",info:"Popover-module_info__VKCAP",warning:"Popover-module_warning__o27i9",danger:"Popover-module_danger__9bIyx",arrow:"Popover-module_arrow__5A-0e"};function bT(e){var{variant:t=Ou.Default,arrow:n,initialOpen:r,placement:i,offset:a,open:l,onOpenChange:u}=e,d=Qi(e,["variant","arrow","initialOpen","placement","offset","open","onOpenChange"]);const[f,m]=T.useState(r),_=l??f,h=u??m,g=T.useRef(null),x=yT({placement:i,open:_,onOpenChange:h,whileElementsMounted:aT,middleware:[nT(a??(n?12:4)),tT({padding:5,fallbackPlacements:["bottom","top"]}),(w={padding:5},w===void 0&&(w={}),{name:"shift",options:w,async fn(z){const{x:I,y:D,placement:j}=z,{mainAxis:V=!0,crossAxis:U=!1,limiter:R={fn:K=>{let{x:O,y:B}=K;return{x:O,y:B}}},...Y}=w,_e={x:I,y:D},re=await U1(z,Y),de=Ts(Io(j)),ee=de==="x"?"y":"x";let ue=_e[de],M=_e[ee];if(V){const K=de==="y"?"bottom":"right";ue=wp(ue+re[de==="y"?"top":"left"],ue,ue-re[K])}if(U){const K=ee==="y"?"bottom":"right";M=wp(M+re[ee==="y"?"top":"left"],M,M-re[K])}const oe=R.fn({...z,[de]:ue,[ee]:M});return{...oe,data:{x:oe.x-I,y:oe.y-D}}}}),lT({element:g,padding:8})]});var w;const C=x.context,y=function(z,I){let{open:D,onOpenChange:j,dataRef:V,refs:U}=z,{enabled:R=!0,event:Y="click",toggle:_e=!0,ignoreMouse:re=!1,keyboardHandlers:de=!0}=I===void 0?{}:I;const ee=T.useRef();return T.useMemo(()=>R?{reference:{onPointerDown(ue){ee.current=ue.pointerType},onMouseDown(ue){ue.button===0&&(Qg(ee.current,!0)&&re||Y!=="click"&&(D?!_e||V.current.openEvent&&V.current.openEvent.type!=="mousedown"||j(!1):(ue.preventDefault(),j(!0)),V.current.openEvent=ue.nativeEvent))},onClick(ue){V.current.__syncReturnFocus||(Y==="mousedown"&&ee.current?ee.current=void 0:Qg(ee.current,!0)&&re||(D?!_e||V.current.openEvent&&V.current.openEvent.type!=="click"||j(!1):j(!0),V.current.openEvent=ue.nativeEvent))},onKeyDown(ue){ee.current=void 0,de&&(Gg(ue)||(ue.key!==" "||Xg(U.domReference.current)||ue.preventDefault(),ue.key==="Enter"&&(D?_e&&j(!1):j(!0))))},onKeyUp(ue){de&&(Gg(ue)||Xg(U.domReference.current)||ue.key===" "&&(D?_e&&j(!1):j(!0)))}}}:{},[R,V,Y,re,de,U,_e,D,j])}(C,{enabled:l==null}),b=gT(C,{referencePress:!1}),S=function(z,I){let{open:D}=z,{enabled:j=!0,role:V="dialog"}=I===void 0?{}:I;const U=Kg(),R=Kg();return T.useMemo(()=>{const Y={id:U,role:V};return j?V==="tooltip"?{reference:{"aria-describedby":D?U:void 0},floating:Y}:{reference:{"aria-expanded":D?"true":"false","aria-haspopup":V==="alertdialog"?"dialog":V,"aria-controls":D?U:void 0,...V==="listbox"&&{role:"combobox"},...V==="menu"&&{id:R}},floating:{...Y,...V==="menu"&&{"aria-labelledby":R}}}:{}},[j,V,D,U,R])}(C),P=function(z){z===void 0&&(z=[]);const I=z,D=T.useCallback(U=>Vd(U,z,"reference"),I),j=T.useCallback(U=>Vd(U,z,"floating"),I),V=T.useCallback(U=>Vd(U,z,"item"),I);return T.useMemo(()=>({getReferenceProps:D,getFloatingProps:j,getItemProps:V}),[D,j,V])}([y,b,S]);return T.useMemo(()=>Object.assign(Object.assign(Object.assign(Object.assign({open:_,setOpen:h},P),x),d),{arrow:n,arrowRef:g,variant:t}),[_,h,P,x,d,n,g,t])}nt(`.Popover-module_popover__E9K9X {\r
  width: max-content;\r
  z-index: 2;\r
  padding: 12px;\r
  max-width: calc(100vw - 20px);\r
  border: 1px solid gray;\r
  border-radius: 3px;\r
  box-shadow: 0 3px 6px 0 #00000033;\r
}\r
\r
.Popover-module_popover__E9K9X:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
  var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.Popover-module_popover__E9K9X:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_default__TlPJp {\r
  background-color: #FFFFFF;\r
  border-color: #68707C;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_info__VKCAP {\r
  background-color: #E6EFF8;\r
  border-color: #004C8F;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_warning__o27i9 {\r
  background-color: #FFFBE6;\r
  border-color: #CC7005;\r
}\r
\r
.Popover-module_popover__E9K9X.Popover-module_danger__9bIyx {\r
  background-color: #F9D5DB;\r
  border-color: #B3253A;\r
}\r
\r
.Popover-module_arrow__5A-0e {\r
  position: absolute;\r
  box-sizing: content-box;\r
  z-index: -1;\r
  transform: rotate(45deg);\r
  background-color: inherit;\r
  border: 1px solid;\r
  /* Set border color separately in order to make inheritance work. */\r
  border-color: inherit;\r
  width: 12px;\r
  height: 12px;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="top"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 3px 3px 6px 0 #00000033;\r
  clip-path: inset(0px -10px -10px 0px);\r
  border-left-color: transparent;\r
  border-top-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="bottom"] > .Popover-module_arrow__5A-0e {\r
  clip-path: inset(-10px 0 0 -10px);\r
  border-bottom-color: transparent;\r
  border-right-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="left"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: 1px 3px 6px 0 #00000033;\r
  clip-path: inset(-10px -10px 0 0);\r
  border-left-color: transparent;\r
  border-bottom-color: transparent;\r
}\r
\r
.Popover-module_popover__E9K9X[data-placement^="right"] > .Popover-module_arrow__5A-0e {\r
  box-shadow: -1px 3px 6px 0 #00000033;\r
  clip-path: inset(0 0 -10px -10px);\r
  border-right-color: transparent;\r
  border-top-color: transparent;\r
}\r
`),function(e){e.Default="default",e.Info="info",e.Warning="warning",e.Danger="danger"}(Ou||(Ou={}));const tx=T.createContext(null),Qh=()=>{const e=T.useContext(tx);if(e==null)throw new Error("Popover components must be wrapped in <Popover />");return e};function nx(e){var{children:t,trigger:n,arrow:r=!0,initialOpen:i=!1}=e,a=Qi(e,["children","trigger","arrow","initialOpen"]);const l=bT(Object.assign({arrow:r,initialOpen:i},a));return Z.createElement(tx.Provider,{value:l},Z.createElement(xT,null,n),Z.createElement(wT,null,t,l.arrow&&Z.createElement(kT,null)))}nx.displayName="Popover";const xT=T.forwardRef(function(e,t){var{children:n}=e,r=Qi(e,["children"]);const i=Qh(),a=n.ref,l=Kh([i.reference,t,a]);return T.isValidElement(n)?T.cloneElement(n,i.getReferenceProps(Object.assign(Object.assign(Object.assign({ref:l},r),n.props),{"data-state":i.open?"open":"closed","aria-expanded":i.open}))):null}),wT=T.forwardRef(function(e,t){var n,r;const i=Qh(),a=Kh([i.floating,t]);return i.open?Z.createElement("div",Object.assign({ref:a,style:{position:i.strategy,top:(n=i.y)!==null&&n!==void 0?n:0,left:(r=i.x)!==null&&r!==void 0?r:0},"data-placement":i.placement,className:St(Sp.popover,Sp[i.variant],i.className)},i.getFloatingProps(e),{tabIndex:-1,role:"dialog"}),e.children):null}),kT=T.forwardRef(function(e,t){var n,r;const i=Qh(),a=Kh([i.arrowRef,t]),l=(n=i.middlewareData.arrow)===null||n===void 0?void 0:n.x,u=(r=i.middlewareData.arrow)===null||r===void 0?void 0:r.y,d={top:"bottom",right:"left",bottom:"top",left:"right"}[i.placement.split("-")[0]];return Z.createElement("div",Object.assign({ref:a,style:Object.assign(Object.assign(Object.assign({},l!=null?{left:l}:{}),u!=null?{top:u}:{}),d?{[d]:"-7px"}:{}),className:Sp.arrow},e))});var ST="utility-module_visuallyHidden__R-C67";nt(`/**\r
 * Visually hide an element, but leave it available for screen readers\r
 */\r
.utility-module_visuallyHidden__R-C67 {\r
	border: 0;\r
	clip: rect(0 0 0 0);\r
	height: 1px;\r
	overflow: hidden;\r
	padding: 0;\r
	position: absolute;\r
	white-space: nowrap;\r
	width: 1px;\r
}\r
`);var Ho,wo={helpTextButton:"HelpText-module_helpTextButton__Ir4Uk",helpTextIconFilled:"HelpText-module_helpTextIconFilled__SjZ8e",helpTextIcon:"HelpText-module_helpTextIcon__ex2WU",helpTextContent:"HelpText-module_helpTextContent__EDHac",small:"HelpText-module_small__Y44D4",xsmall:"HelpText-module_xsmall__peaFV"};nt(`.HelpText-module_helpTextButton__Ir4Uk {\r
  all: initial;\r
  background-color: transparent;\r
  border-radius: 50px;\r
  padding: 0;\r
  cursor: pointer;\r
  display: flex;\r
  border: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus-visible {\r
  outline: var(--semantic-tab_focus-outline-color) solid\r
    var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
  color: var(--colors-blue-700);\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:focus:not(:focus-visible) {\r
  outline: none;\r
}\r
\r
.HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIcon__ex2WU {\r
  display: none;\r
}\r
\r
.HelpText-module_helpTextButton__Ir4Uk:where(:hover, :focus-visible, [data-state^="open"]) > .HelpText-module_helpTextIconFilled__SjZ8e {\r
  display: inline-block;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU {\r
  color: var(--colors-blue-700);\r
  width: var(--help_text-icon-width);\r
  height: var(--help_text-icon-height);\r
}\r
\r
.HelpText-module_helpTextContent__EDHac {\r
  font-size: var(--font_size-300);\r
  line-height: var(--typography-default-line-height);\r
  width: fit-content;\r
  max-width: 700px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_small__Y44D4 {\r
  --help_text-icon-width: 24px;\r
  --help_text-icon-height: 24px;\r
}\r
\r
.HelpText-module_helpTextIcon__ex2WU.HelpText-module_xsmall__peaFV {\r
  --help_text-icon-width: 18px;\r
  --help_text-icon-height: 18px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Ho||(Ho={}));const Gh=e=>{var{className:t,children:n,title:r,placement:i="right",onClick:a,size:l=Ho.Small}=e,u=Qi(e,["className","children","title","placement","onClick","size"]);const[d,f]=T.useState(!1);return Z.createElement(nx,{variant:Ou.Info,placement:i,open:d,onOpenChange:f,className:wo.helpTextContent,trigger:Z.createElement("button",Object.assign({},u,{className:St(wo.helpTextButton,t),onClick:m=>{f(_=>!_),a?.(m)}}),Z.createElement($O,{className:St(wo.helpTextIcon,wo.helpTextIconFilled,wo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement(FO,{className:St(wo.helpTextIcon,wo[l],t),"data-state":d?"open":"closed","aria-hidden":!0}),Z.createElement("span",{className:ST},r))},n)};Gh.displayName="HelpText";var Wi,Lr={fieldSet:"FieldSet-module_fieldSet__GgktD",xsmall:"FieldSet-module_xsmall__y9foq",legendAndHelpText:"FieldSet-module_legendAndHelpText__WDZ-j",legend:"FieldSet-module_legend__PjhoV",legendContent:"FieldSet-module_legendContent__nOeHK",description:"FieldSet-module_description__XKHS-",content:"FieldSet-module_content__aZp-0",errorMessage:"FieldSet-module_errorMessage__nDaJ7"};nt(`.FieldSet-module_fieldSet__GgktD {\r
  --color: var(--component-checkbox-color-text-default);\r
  --content-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --description-color: var(--component-field_description-color-text-default);\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-small);\r
  --help_text-gap: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
\r
  color: var(--color);\r
  border: 0;\r
  font-size: var(--font_size);\r
  line-height: var(--typography-default-line-height);\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.FieldSet-module_xsmall__y9foq {\r
  --content-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --error_message-margin_top: var(--component-fieldset-space-gap-y-xsmall);\r
  --help_text-gap: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled {\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.FieldSet-module_fieldSet__GgktD:disabled * {\r
  opacity: 1;\r
}\r
\r
.FieldSet-module_legendAndHelpText__WDZ-j {\r
  display: flex;\r
  gap: var(--help_text-gap);\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV {\r
  padding: 0;\r
}\r
\r
.FieldSet-module_legendContent__nOeHK {\r
  font-weight: bold;\r
}\r
\r
.FieldSet-module_description__XKHS- {\r
  color: var(--description-color);\r
  margin: 0;\r
}\r
\r
.FieldSet-module_legend__PjhoV + .FieldSet-module_description__XKHS- {\r
  margin-top: var(--description-margin_top);\r
}\r
\r
.FieldSet-module_content__aZp-0:not(:first-child) {\r
  margin-top: var(--content-margin_top);\r
}\r
\r
.FieldSet-module_errorMessage__nDaJ7 {\r
  margin-top: var(--error_message-margin_top);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(Wi||(Wi={}));const Xh=({children:e,className:t,contentClassName:n,description:r,disabled:i,error:a,helpText:l,legend:u,size:d=Wi.Small})=>{const f=d===Wi.Xsmall?Ho.Xsmall:Ho.Small;return Z.createElement("fieldset",{className:St(Lr.fieldSet,Lr[d],t),disabled:i},u&&Z.createElement("legend",{className:Lr.legend},Z.createElement("span",{className:Lr.legendAndHelpText},Z.createElement("span",{className:Lr.legendContent},u),l&&Z.createElement(Gh,{size:f,title:`Help text for ${u}`},l))),r&&Z.createElement("p",{className:Lr.description},r),Z.createElement("div",{className:St(Lr.content,n)},e),a&&Z.createElement("div",{className:Lr.errorMessage},Z.createElement(I1,null,a)))};Xh.displayName="FieldSet";var ms,wn={template:"CheckboxRadioTemplate-module_template__CbnTf",xsmall:"CheckboxRadioTemplate-module_xsmall__JkKoU",small:"CheckboxRadioTemplate-module_small__7fCnT",disabled:"CheckboxRadioTemplate-module_disabled__AUMha",clickable:"CheckboxRadioTemplate-module_clickable__iw4S2",inputWrapper:"CheckboxRadioTemplate-module_inputWrapper__K4Urn",input:"CheckboxRadioTemplate-module_input__O2CzZ",visibleBox:"CheckboxRadioTemplate-module_visibleBox__mj4RB",labelAndDescription:"CheckboxRadioTemplate-module_labelAndDescription__NcntT",label:"CheckboxRadioTemplate-module_label__hsc7R",labelAndHelpText:"CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ",description:"CheckboxRadioTemplate-module_description__FX9dz"};nt(`.CheckboxRadioTemplate-module_template__CbnTf {\r
  --click-cursor: pointer;\r
  --description-color: var(--component-field_description-color-text-default);\r
  --label-color: var(--component-checkbox-color-text-default);\r
  --opacity: 1;\r
\r
  border-radius: var(--input_box-border_radius);\r
  display: inline-flex;\r
  flex-direction: row;\r
  font-size: var(--font_size);\r
  gap: var(--gap);\r
  line-height: var(--typography-default-line-height);\r
  opacity: var(--opacity);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_xsmall__JkKoU {\r
  --description-margin_top: var(--component-field_description-space-top-xsmall);\r
  --font_size: var(--component-checkbox-font_size-xs);\r
  --gap: var(--component-checkbox-space-gap-xsmall);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_small__7fCnT {\r
  --description-margin_top: var(--component-field_description-space-top-small);\r
  --font_size: var(--component-checkbox-font_size-sm);\r
  --gap: var(--component-checkbox-space-gap-small);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):hover {\r
  --label-color: var(--component-checkbox-color-text-hover);\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf.CheckboxRadioTemplate-module_disabled__AUMha {\r
  --click-cursor: auto;\r
  --opacity: var(--opacity-disabled);\r
}\r
\r
.CheckboxRadioTemplate-module_clickable__iw4S2  {\r
  cursor: var(--click-cursor);\r
}\r
\r
.CheckboxRadioTemplate-module_inputWrapper__K4Urn {\r
  display: inline-block;\r
  height: var(--input_box-size);\r
  position: relative;\r
}\r
\r
.CheckboxRadioTemplate-module_input__O2CzZ {\r
  height: 0;\r
  opacity: 0;\r
  position: absolute;\r
  width: 0;\r
}\r
\r
.CheckboxRadioTemplate-module_visibleBox__mj4RB {\r
  display: inline-block;\r
  flex: 0 0 var(--input_box-size);\r
  height: var(--input_box-size);\r
  position: relative;\r
  width: var(--input_box-size);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndDescription__NcntT {\r
  display: inline-flex;\r
  flex-direction: column;\r
  gap: var(--description-margin_top);\r
\r
  /* Center-align input box with the first line in the label */\r
  margin-top: calc(\r
    (\r
        var(--input_box-size) -\r
          (var(--typography-default-line-height) * var(--font_size))\r
      ) / 2\r
  );\r
}\r
\r
.CheckboxRadioTemplate-module_label__hsc7R {\r
  color: var(--label-color);\r
}\r
\r
.CheckboxRadioTemplate-module_labelAndHelpText__JIDAJ {\r
  display: inline-flex;\r
  flex-direction: row;\r
  gap: var(--gap);\r
  align-items: center;\r
}\r
\r
.CheckboxRadioTemplate-module_description__FX9dz {\r
  color: var(--description-color);\r
}\r
\r
@supports not selector(:has(:focus-visible)) {\r
  .CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):focus-within {\r
    outline: 2px solid var(--semantic-tab_focus-outline-color);\r
    outline-offset: 2px;\r
  }\r
}\r
\r
.CheckboxRadioTemplate-module_template__CbnTf:not(.CheckboxRadioTemplate-module_disabled__AUMha):not(:has(button:focus-visible)):has(:focus-visible) {\r
  outline: 2px solid var(--semantic-tab_focus-outline-color);\r
  outline-offset: 2px;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ms||(ms={}));const PT=({checked:e,children:t,className:n,description:r,disabled:i,helpText:a,hideInput:l,hideLabel:u,inputId:d,label:f,name:m,onChange:_,presentation:h,size:g,type:x,value:w})=>{const C=T.useId(),y=d??"input-"+C,b=f?`${y}-label`:void 0,S=r?`${y}-description`:void 0,P=f&&!u,z=!h||typeof f!="object"&&typeof r!="object",I=g===ms.Xsmall?Ho.Xsmall:Ho.Small;return Z.createElement(Jg,{className:St(wn.template,wn[g],i&&wn.disabled,n),htmlFor:y,isLabel:z},!l&&Z.createElement(Jg,{className:wn.inputWrapper,htmlFor:y,isLabel:!z},Z.createElement("input",{"aria-describedby":S,"aria-label":P||typeof f!="string"?void 0:f,"aria-labelledby":P?b:void 0,checked:e!=null&&e,className:wn.input,disabled:i,id:y,name:m,onChange:i?void 0:_,role:h?"presentation":void 0,type:x,value:w}),Z.createElement("span",{className:wn.visibleBox},t)),(P||r)&&Z.createElement("span",{className:wn.labelAndDescription},P&&Z.createElement("span",{className:wn.labelAndHelpText},Z.createElement("span",{className:wn.label,id:b},f),a&&Z.createElement(Gh,{size:I,title:`Help text for ${f}`},a)),r&&Z.createElement("span",{className:wn.description,id:S},r)))},Jg=({children:e,className:t,htmlFor:n,isLabel:r})=>r?Z.createElement("label",{className:t+" "+wn.clickable,htmlFor:n},e):Z.createElement("span",{className:t},e);var CT="Checkbox-module_checkbox__lSeQj",ET="Checkbox-module_compact__Cl41-",OT="Checkbox-module_error__E-bmD",TT="Checkbox-module_checked__3yAq6",LT="Checkbox-module_disabled__x7-eg",zT="Checkbox-module_readOnly__FamUn",RT="Checkbox-module_visibleBox__G7q8H",AT="Checkbox-module_checkmark__ES9N8";nt(`.Checkbox-module_checkbox__lSeQj {\r
  /* Internal variables */\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-default\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-default);\r
  --checkbox-border_radius: var(--interactive_components-border_radius-normal);\r
  --checkbox-border_width: var(--component-checkbox-border_width-small);\r
  --checkbox-checkmark-display: none;\r
  --checkbox-height: var(--component-checkbox-size-height-small);\r
  --checkbox-width: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-size: var(--checkbox-height);\r
  --input_box-border_radius: var(--checkbox-border_radius);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_compact__Cl41- {\r
  --checkbox-border_width: var(--component-checkbox-border_width-xsmall);\r
  --checkbox-height: var(--component-checkbox-size-height-xsmall);\r
  --checkbox-width: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_error__E-bmD {\r
  --checkbox-background_color: var(--component-checkbox-color-background-error);\r
  --checkbox-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_checked__3yAq6 {\r
  --checkbox-checkmark-display: inline-block;\r
  --checkbox-background_color: var(\r
    --component-checkbox-color-background-checked\r
  );\r
  --checkbox-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj:not(.Checkbox-module_disabled__x7-eg, .Checkbox-module_error__E-bmD, .Checkbox-module_checked__3yAq6):hover {\r
  --checkbox-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.Checkbox-module_checkbox__lSeQj.Checkbox-module_readOnly__FamUn {\r
  --cursor: auto;\r
}\r
\r
.Checkbox-module_visibleBox__G7q8H {\r
  background-color: var(--checkbox-background_color);\r
  border-color: var(--checkbox-border_color);\r
  border-radius: var(--checkbox-border_radius);\r
  border-style: solid;\r
  border-width: var(--checkbox-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--checkbox-height);\r
  width: var(--checkbox-width);\r
}\r
\r
.Checkbox-module_checkmark__ES9N8 {\r
  background-color: white;\r
  clip-path: polygon(\r
    47.11% 56.51%,\r
    30.37% 38.94%,\r
    21.5% 48.09%,\r
    47.11% 74.54%,\r
    81.5% 39.16%,\r
    72.63% 30%\r
  );\r
  display: var(--checkbox-checkmark-display);\r
  height: 100%;\r
  width: 100%;\r
}\r
`);const ur=({checkboxId:e,checked:t,compact:n,description:r,disabled:i,error:a,helpText:l,hideLabel:u,label:d,name:f,onChange:m,presentation:_,readOnly:h})=>Z.createElement(PT,{checked:t,className:St(CT,t&&TT,a&&OT,i&&LT,n&&ET,h&&zT),description:r,disabled:i,helpText:l,hideInput:h,hideLabel:u,inputId:e,label:d,name:f,onChange:m,presentation:_,size:n?ms.Xsmall:ms.Small,type:"checkbox"},Z.createElement("span",{className:RT},Z.createElement("span",{className:AT})));ur.displayName="Checkbox";var Ri,qd={checkboxGroup:"CheckboxGroup-module_checkboxGroup__LIGFC",compact:"CheckboxGroup-module_compact__IPuN8",vertical:"CheckboxGroup-module_vertical__R-l07",horizontal:"CheckboxGroup-module_horizontal__myCqF"};nt(`.CheckboxGroup-module_checkboxGroup__LIGFC {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_compact__IPuN8 {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_vertical__R-l07 {\r
  flex-direction: column;\r
}\r
\r
.CheckboxGroup-module_checkboxGroup__LIGFC.CheckboxGroup-module_horizontal__myCqF {\r
  flex-direction: row;\r
}\r
`),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(Ri||(Ri={}));const NT=(e,t)=>{switch(t.type){case"check":return e.concat([t.name]);case"uncheck":return e.filter(n=>n!==t.name);case"reset":return t.state}},Yg=e=>e.filter(({checked:t})=>t).map(({name:t})=>t),Bl=({compact:e,description:t,disabled:n,error:r,helpText:i,items:a,legend:l,onChange:u,presentation:d,variant:f=Ri.Vertical})=>{if(!D1(a.map(g=>g.name)))throw Error("Each name in the checkbox group must be unique.");const[m,_]=T.useReducer(NT,Yg(a));T.useEffect(()=>_({type:"reset",state:Yg(a)}),[a]);const h=WO(m);return Su(()=>{u&&!n&&!M1(h,m)&&u(m)},[m,u,n]),Z.createElement(Xh,{contentClassName:St(qd.checkboxGroup,qd[f],e&&qd.compact),description:t,disabled:n,error:r,helpText:i,legend:l,size:e?Wi.Xsmall:Wi.Small},a.map(g=>Z.createElement(ur,{checkboxId:g.checkboxId,checked:m.includes(g.name),compact:e,description:g.description,disabled:n||g.disabled,error:!!r,helpText:g.helpText,key:g.name,label:g.label,name:g.name,onChange:x=>{_({type:x.target.checked?"check":"uncheck",name:g.name})},presentation:d})))};Bl.displayName="CheckboxGroup";var ey;nt(`.RadioButton-module_radio__-lcP- {\r
  /* Internal variables */\r
  --radio-background_color: var(--component-checkbox-color-background-default);\r
  --radio-border_color: var(--component-checkbox-color-border-default);\r
  --radio-border_width: var(--component-checkbox-border_width-small);\r
  --radio-checkmark-color: var(--colors-blue-700);\r
  --radio-checkmark-display: none;\r
  --radio-size: var(--component-checkbox-size-width-small);\r
\r
  /* Variables used by CheckboxRadioTemplate */\r
  --input_box-border_radius: calc(var(--radio-size) / 2);\r
  --input_box-size: var(--radio-size);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_small__bDKxm {\r
  --radio-size: var(--component-checkbox-size-width-small);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_xsmall__i7xp0 {\r
  --radio-size: var(--component-checkbox-size-width-xsmall);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_error__WeFrR {\r
  --radio-background_color: var(--component-checkbox-color-background-error);\r
  --radio-border_color: var(--component-checkbox-color-border-error);\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re {\r
  --radio-checkmark-display: inline-block;\r
}\r
\r
.RadioButton-module_radio__-lcP-.RadioButton-module_checked__Uc9Re:not(.RadioButton-module_error__WeFrR) {\r
  --radio-border_color: var(--component-checkbox-color-border-checked);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-background_color: var(--component-checkbox-color-background-hover);\r
}\r
\r
.RadioButton-module_radio__-lcP-:not(.RadioButton-module_disabled__thDlK, .RadioButton-module_error__WeFrR, .RadioButton-module_checked__Uc9Re):hover {\r
  --radio-border_color: var(--component-checkbox-color-border-hover);\r
}\r
\r
.RadioButton-module_visibleButton__QmmNn {\r
  background-color: var(--radio-background_color);\r
  border-color: var(--radio-border_color);\r
  border-radius: 50%;\r
  border-style: solid;\r
  border-width: var(--radio-border_width);\r
  box-sizing: border-box;\r
  display: inline-block;\r
  height: var(--radio-size);\r
  width: var(--radio-size);\r
}\r
\r
.RadioButton-module_checkmark__fHNs0 {\r
  --radio-checkmark-size: 80%;\r
  background-color: var(--radio-checkmark-color);\r
  border-radius: 50%;\r
  display: var(--radio-checkmark-display);\r
  height: var(--radio-checkmark-size);\r
  margin: calc(\r
    (var(--radio-size) - var(--radio-checkmark-size)) / 2 -\r
      var(--radio-border_width)\r
  );\r
  width: var(--radio-checkmark-size);\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ey||(ey={}));var ty,ny;nt(`.RadioGroup-module_radioGroup__pO2pz {\r
  column-gap: var(--gap-x);\r
  display: flex;\r
  flex-wrap: wrap;\r
  row-gap: var(--gap-y);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_xsmall__wwC4P {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-xsmall);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-xsmall);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_small__j8rVm {\r
  --gap-x: var(--component-checkbox-group-space-gap-x-small);\r
  --gap-y: var(--component-checkbox-group-space-gap-y-small);\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_vertical__VIcHp {\r
  flex-direction: column;\r
}\r
\r
.RadioGroup-module_radioGroup__pO2pz.RadioGroup-module_horizontal__vsHUV {\r
  flex-direction: row;\r
}\r
`),function(e){e.Xsmall="xsmall",e.Small="small"}(ty||(ty={})),function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(ny||(ny={}));var Eo,Tu,Mo;(function(e){e.Default="default",e.Error="error",e.Disabled="disabled",e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"})(Eo||(Eo={})),function(e){e.ReadOnlyInfo="readonlyInfo",e.ReadOnlyConfirm="readonlyConfirm"}(Tu||(Tu={})),function(e){e.None="none",e.Error="error",e.Search="search"}(Mo||(Mo={}));const BT=()=>Z.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M8 0C3.875 0 0.5 3.375 0.5 7.5C0.5 11.625 3.875 15 8 15C12.125 15 15.5 11.625 15.5 7.5C15.5 3.375 12.125 0 8 0ZM8.875 11.25H7.5V9.9375H8.875V11.25ZM8.6875 9H7.6875L7.375 4.125H9L8.6875 9Z",fill:"white"})),IT=()=>Z.createElement("svg",{width:"15",height:"15",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z.createElement("path",{d:"M34 31.5758L23.9289 21.3939C25.5533 19.2929 26.3655 16.8687 26.3655 14.1212C26.3655 7.49495 20.8426 2 14.1827 2C7.52284 2 2 7.49495 2 14.1212C2 20.7475 7.52284 26.2424 14.1827 26.2424C16.9442 26.2424 19.5431 25.2727 21.4924 23.8182L31.7259 34L34 31.5758ZM5.24873 14.1212C5.24873 9.27273 9.30965 5.23232 14.1827 5.23232C19.0558 5.23232 23.1168 9.27273 23.1168 14.1212C23.1168 18.9697 19.0558 23.0101 14.1827 23.0101C9.30965 23.0101 5.24873 18.9697 5.24873 14.1212Z",fill:"black"}));var ry="Icon-module_icon__3YqoF",MT="Icon-module_disabled__e4-Yg";nt(`.Icon-module_icon__3YqoF {\r
    background: var(--icon-background);\r
    padding-right: var(--component-input-border_width-focus);\r
    padding-left: var(--component-input-border_width-default);\r
    display: flex;\r
    align-items: center;\r
    flex: none;\r
}\r
\r
.Icon-module_icon__3YqoF.Icon-module_disabled__e4-Yg {\r
    opacity: 60%;\r
}`);const DT=({variant:e,disabled:t=!1})=>{switch(e){case Mo.Error:return Z.createElement("div",{className:ry,"data-testid":"input-icon-error"},Z.createElement(BT,null));case Mo.Search:return Z.createElement("div",{className:St(ry,t&&MT),"data-testid":"input-icon-search"},Z.createElement(IT,null));default:return null}};var ko={inputWrapper:"InputWrapper-module_inputWrapper__I-Tcb",withFocusEffect:"InputWrapper-module_withFocusEffect__9DobY",default:"InputWrapper-module_default__SS3Cg",error:"InputWrapper-module_error__FhSCJ",disabled:"InputWrapper-module_disabled__8mIxc",readonlyInfo:"InputWrapper-module_readonlyInfo__mQyMN",readonlyConfirm:"InputWrapper-module_readonlyConfirm__WrHUu",search:"InputWrapper-module_search__SwwFJ",withPadding:"InputWrapper-module_withPadding__6NkNf",field:"InputWrapper-module_field__UA-RS",label:"InputWrapper-module_label__x0-XH"};nt(`.InputWrapper-module_inputWrapper__I-Tcb {\r
  --background: var(--component-input-color-background-default);\r
  --border-color: var(--component-input-color-border-default);\r
  --icon-background: transparent;\r
  --outline-color: var(--semantic-tab_focus-outline-color);\r
  --paddingX: 0;\r
  --paddingY: 0;\r
  align-items: stretch;\r
  background: var(--background);\r
  border-color: var(--border-color);\r
  border-radius: var(--interactive_components-border_radius-normal);\r
  border-style: solid;\r
  border-width: var(--component-input-border_width-default);\r
  box-sizing: border-box;\r
  display: flex;\r
  min-height: var(--component-input-size-min_height-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withFocusEffect__9DobY:focus-within {\r
  outline: var(--outline-color) solid var(--semantic-tab_focus-outline-width);\r
  outline-offset: var(--semantic-tab_focus-outline-offset);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_default__SS3Cg:hover {\r
  --border-color: var(--component-input-color-border-hover);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_error__FhSCJ {\r
  --icon-background: var(--component-input-error-color-border-default);\r
  --border-color: var(--component-input-error-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_disabled__8mIxc {\r
  --background: repeating-linear-gradient(\r
    135deg,\r
    #efefef,\r
    #efefef 2px,\r
    #fff 3px,\r
    #fff 5px\r
  );\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyInfo__mQyMN {\r
  --background: var(--component-input-read_only_info-color-background-default);\r
  --border-color: var(--component-input-read_only_info-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_readonlyConfirm__WrHUu {\r
  --background: var(\r
    --component-input-read_only_confirm-color-background-default\r
  );\r
  --border-color: var(--component-input-read_only_confirm-color-border-default);\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_search__SwwFJ {\r
  flex-direction: row-reverse;\r
}\r
\r
.InputWrapper-module_inputWrapper__I-Tcb.InputWrapper-module_withPadding__6NkNf {\r
  /* Subtract size of border on padding-y, because border is on outer element. Without this, height of entire component will be too big */\r
  --paddingY: calc(\r
    var(--component-input-space-padding-y) -\r
      var(--component-input-border_width-default)\r
  );\r
  --paddingX: var(--component-input-space-padding-x);\r
}\r
\r
.InputWrapper-module_field__UA-RS {\r
  background: var(--background);\r
  border: none;\r
  box-sizing: border-box;\r
  font-family: var(--font_family-default);\r
  outline: none;\r
  padding: var(--paddingY) var(--paddingX);\r
  width: 100%;\r
}\r
\r
.InputWrapper-module_label__x0-XH {\r
  font-weight: var(--component-label-font_weight-default);\r
  padding: 0;\r
}\r
`);const FT=({disabled:e=!1,inputId:t,inputRenderer:n,isSearch:r=!1,isValid:i=!0,label:a,noFocusEffect:l,noPadding:u,readOnly:d=!1})=>{const f=T.useId(),m=t??f,{variant:_,iconVariant:h}=(({readOnly:g=!1,disabled:x=!1,isValid:w=!0,isSearch:C=!1}={})=>{let y=Mo.None;return C&&(y=Mo.Search),x?{variant:Eo.Disabled,iconVariant:y}:g===!0||g===Tu.ReadOnlyInfo?{variant:Eo.ReadOnlyInfo,iconVariant:y}:g===Tu.ReadOnlyConfirm?{variant:Eo.ReadOnlyConfirm,iconVariant:y}:w===!1?{variant:Eo.Error,iconVariant:Mo.Error}:{variant:Eo.Default,iconVariant:y}})({disabled:e,isSearch:r,isValid:i,readOnly:d});return Z.createElement(Z.Fragment,null,a&&Z.createElement("label",{className:ko.label,htmlFor:m},a),Z.createElement("div",{"data-testid":"InputWrapper",className:St(ko.inputWrapper,ko[_],{[ko.search]:r,[ko.withFocusEffect]:!l,[ko.withPadding]:!u})},Z.createElement(DT,{variant:h,disabled:e}),n({className:ko.field,inputId:m,variant:_})))},jT=(e,t)=>{if(e.length!==1)throw new Error("Char must be a single character.");const n=[];for(let r=0;r<t.length;r++)t[r]===e&&n.push(r);return n},oy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase(),i=new Set;for(let a=0;a<e.length;a++){const l=n[a];for(const u of jT(l,r))if(!i.has(u)){i.add(u);break}}return i.size},iy=(e,t)=>{const n=e.toLowerCase(),r=t.toLowerCase();let i=0;for(let a=0;a<r.length;a++)if(r[a]===n[i]&&(i++,i===n.length))return!0;return!1},UT=e=>(t,n)=>{const r=(i=>(a,l)=>{const u=iy(i,a),d=iy(i,l);if(!u&&!d)return 0;if(u&&!d)return-1;if(!u&&d)return 1;let f=0;for(let m=0;m<i.length;m++){const _=a.substring(f).indexOf(i[m]),h=l.substring(f).indexOf(i[m]);if(_<h)return-1;if(_>h)return 1;f+=_+1}return 0})(e)(t,n);return r!==0?r:(i=>(a,l)=>{const u=oy(i,a);return oy(i,l)-u})(e)(t,n)};var $T="MultiSelectItem-module_multiSelectItem__tjklN",ZT="MultiSelectItem-module_deleteButton__xRVRz",WT="MultiSelectItem-module_deleteButtonCross__yqZOX";nt(`.MultiSelectItem-module_multiSelectItem__tjklN {\r
  --border-radius: calc(var(--multiselect_item-height) / 2);\r
  align-items: center;\r
  background-color: var(--multiselect_item-background_color);\r
  border-radius: var(--border-radius);\r
  color: var(--multiselect_item-text_color);\r
  display: inline-flex;\r
  font-size: var(--font_size);\r
  gap: var(--multiselect_item-space_between);\r
  height: var(--multiselect_item-height);\r
  padding-left: var(--multiselect_item-space_left);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz {\r
  background-color: transparent;\r
  border-bottom-right-radius: inherit;\r
  border-top-right-radius: inherit;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  padding: calc(\r
    (var(--multiselect_item-height) - var(--delete_cross-size)) / 2\r
  );\r
  width: var(--multiselect_item-height);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:not(:disabled):hover {\r
  background-color: var(--delete_cross_box-color-hover);\r
}\r
\r
.MultiSelectItem-module_deleteButton__xRVRz:focus-visible {\r
  background-color: var(--delete_cross_box-color-hover);\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.MultiSelectItem-module_deleteButtonCross__yqZOX {\r
  background-color: var(--multiselect_item_delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
`);const rx=({deleteButtonLabel:e,disabled:t,onDeleteButtonClick:n,label:r})=>Z.createElement("span",{className:$T},Z.createElement("span",null,r),Z.createElement("button",{"aria-label":e,className:ZT,disabled:t,onClick:n},Z.createElement("span",{className:WT})));rx.displayName="MultiSelectItem";var ct={select:"Select-module_select__cjdcr",disabled:"Select-module_disabled__8YgjS",expanded:"Select-module_expanded__QPHZ6",optionListWrapper:"Select-module_optionListWrapper__Ech-7",usingKeyboard:"Select-module_usingKeyboard__RCPHw",fieldButton:"Select-module_fieldButton__uKwX8",field:"Select-module_field__h-wBy",inputArea:"Select-module_inputArea__jBTNl",multiple:"Select-module_multiple__cwGEC",textInput:"Select-module_textInput__QOpiN",single:"Select-module_single__i2zPs",fieldValue:"Select-module_fieldValue__XgrGc",arrowWrapper:"Select-module_arrowWrapper__meDQz",arrow:"Select-module_arrow__w35wW",deleteButton:"Select-module_deleteButton__hZfr7",deleteButtonCross:"Select-module_deleteButtonCross__OKMwb",optionList:"Select-module_optionList__Lhg-F",option:"Select-module_option__Hvo8n",selected:"Select-module_selected__8A13A",focused:"Select-module_focused__joVjV"};nt(`.Select-module_select__cjdcr {\r
  --delete_cross_box-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --delete_cross_box-color-hover: var(--colors-red-500);\r
  --delete_cross_box-size: 25px;\r
  --delete_cross-clip_path: polygon(\r
    14.29% 0%,\r
    50% 35.71%,\r
    85.71% 0%,\r
    100% 14.29%,\r
    64.29% 50%,\r
    100% 85.71%,\r
    85.71% 100%,\r
    50% 64.29%,\r
    14.29% 100%,\r
    0% 85.71%,\r
    35.71% 50%,\r
    0% 14.29%\r
  );\r
  --delete_cross-color: var(--colors-blue-900);\r
  --delete_cross-color-active: var(--colors-blue-700);\r
  --delete_cross-color-disabled: #022f5180;\r
  --delete_cross-color-hover: white;\r
  --delete_cross-size: 12px;\r
  --arrow-border_left: 1px solid #022f5180;\r
  --arrow-color: var(--colors-blue-900);\r
  --arrow-height_to_width_fraction: calc(8 / 14);\r
  --arrow-horizontal_padding: 6px;\r
  --arrow-size: 14px;\r
  --arrow_wrapper-margin: 4px;\r
  --field-height-inside: calc(\r
    var(--field-height) - var(--component-input-border_width-default) * 2\r
  );\r
  --field-height: var(--component-input-size-min_height-default);\r
  --font_size: 16px;\r
  --interactive_element-cursor: pointer;\r
  --line-height: 1.5;\r
  --multiselect_item-background_color: var(--colors-blue-900);\r
  --multiselect_item-height: 24px;\r
  --multiselect_item-space_between: 6px;\r
  --multiselect_item-space_left: 16px;\r
  --multiselect_item-text_color: white;\r
  --multiselect_item_delete_cross-color: white;\r
  --multiselect_items-gap: 4px;\r
  --multiselect_items-padding: calc(\r
    (var(--field-height-inside) - var(--multiselect_item-height)) / 2\r
  );\r
  --option-background_color-default: transparent;\r
  --option-background_color-hover: var(--colors-blue-100);\r
  --option-background_color-selected: var(--colors-blue-200);\r
  --option-background_color-selected-hover: var(--colors-blue-500);\r
  --option-border_color: #022f5180;\r
  --option-border_width: 1px;\r
  --option-height: 36px;\r
  --option_list-background_color: white;\r
  --option_list-border: 1px solid #68707c;\r
  --option_list-border_radius: var(\r
    --interactive_components-border_radius-normal\r
  );\r
  --option_list-number_of_visible_options: 7;\r
  --option_list-shadow: 1px 1px 3px #00000040;\r
  --option_list-z_index: 2;\r
  --option-outline-focus: none;\r
  --option-padding_horizontal: 12px;\r
  --singleselect_field-padding_left: 12px;\r
  --focus_visible-outline: var(--semantic-tab_focus-outline-width) auto\r
    var(--semantic-tab_focus-outline-color);\r
\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_disabled__8YgjS {\r
  --interactive_element-cursor: auto;\r
  opacity: var(--opacity-disabled);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_expanded__QPHZ6 {\r
  --delete_cross-color: var(--delete_cross-color-active);\r
}\r
\r
.Select-module_select__cjdcr:not(.Select-module_expanded__QPHZ6) .Select-module_optionListWrapper__Ech-7 {\r
  display: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_usingKeyboard__RCPHw {\r
  --option-outline-focus: var(--focus_visible-outline);\r
}\r
\r
.Select-module_fieldButton__uKwX8 {\r
  background: transparent;\r
  border: 0;\r
  cursor: var(--interactive_element-cursor);\r
  height: 100%;\r
  margin: 0;\r
  padding: 0;\r
}\r
\r
.Select-module_field__h-wBy {\r
  display: inline-flex;\r
  padding: 0;\r
  align-items: center;\r
  flex-direction: row;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--field-height-inside);\r
  position: relative;\r
  width: 100%;\r
}\r
\r
.Select-module_inputArea__jBTNl {\r
  align-items: center;\r
  display: flex;\r
  flex: 1;\r
  height: 100%;\r
  position: relative;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_inputArea__jBTNl {\r
  display: inline-flex;\r
  flex-direction: row;\r
  flex-wrap: wrap;\r
  flex: 1;\r
  gap: var(--multiselect_items-gap);\r
  padding: var(--multiselect_items-padding);\r
}\r
\r
.Select-module_textInput__QOpiN {\r
  background: transparent;\r
  border: 0;\r
  box-sizing: border-box;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  line-height: var(--line-height);\r
  min-height: var(--field-height-inside);\r
  outline: none;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_textInput__QOpiN {\r
  cursor: var(--interactive_element-cursor);\r
  padding: 0 0 0 var(--singleselect_field-padding_left);\r
  position: absolute;\r
  width: 100%;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_textInput__QOpiN {\r
  flex: 1;\r
  min-height: 0;\r
  min-width: 3rem;\r
  padding: 0;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_single__i2zPs .Select-module_fieldValue__XgrGc {\r
  flex: 1;\r
  padding-left: var(--singleselect_field-padding_left);\r
  text-align: left;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_fieldButton__uKwX8:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_arrowWrapper__meDQz {\r
  --arrow-height: calc(\r
    var(--arrow-size) * var(--arrow-height_to_width_fraction)\r
  );\r
  --arrow-vertical_padding: calc(\r
    (var(--field-height-inside) - var(--arrow-height)) / 2 -\r
      var(--arrow_wrapper-margin)\r
  );\r
  align-items: center;\r
  border-left: var(--arrow-border_left);\r
  box-sizing: border-box;\r
  display: flex;\r
  height: calc(100% - var(--arrow-vertical_padding));\r
  margin-bottom: var(--arrow_wrapper-margin);\r
  margin-left: var(--arrow_wrapper-margin);\r
  margin-top: var(--arrow_wrapper-margin);\r
  padding: var(--arrow-vertical_padding) var(--arrow-horizontal_padding);\r
}\r
\r
.Select-module_arrow__w35wW {\r
  background-color: var(--arrow-color);\r
  clip-path: polygon(\r
    11.72% 9.93%,\r
    50% 67.28%,\r
    88.28% 9.93%,\r
    97.43% 29.13%,\r
    50% 96.79%,\r
    2.57% 29.13%\r
  );\r
  display: inline-block;\r
  height: var(--arrow-height);\r
  width: var(--arrow-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7 {\r
  background: none;\r
  border-radius: var(--delete_cross_box-border_radius);\r
  border: none;\r
  cursor: var(--interactive_element-cursor);\r
  height: var(--delete_cross_box-size);\r
  padding: calc((var(--delete_cross_box-size) - var(--delete_cross-size)) / 2);\r
  width: var(--delete_cross_box-size);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  cursor: auto;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:focus-visible {\r
  outline: var(--focus_visible-outline);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:hover:not(:disabled) {\r
  background-color: var(--delete_cross_box-color-hover);\r
  --delete_cross-color: var(--delete_cross-color-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButton__hZfr7:disabled {\r
  --delete_cross-color: var(--delete_cross-color-disabled);\r
  background-color: transparent;\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_deleteButtonCross__OKMwb {\r
  background-color: var(--delete_cross-color);\r
  clip-path: var(--delete_cross-clip_path);\r
  display: inline-block;\r
  height: var(--delete_cross-size);\r
  width: var(--delete_cross-size);\r
}\r
\r
.Select-module_optionListWrapper__Ech-7 {\r
  background-color: var(--option_list-background_color);\r
  border-radius: var(--option_list-border_radius);\r
  border: var(--option_list-border);\r
  box-shadow: var(--option_list-shadow);\r
  box-sizing: border-box;\r
  margin: 0;\r
  max-height: calc(\r
    var(--option-height) * var(--option_list-number_of_visible_options)\r
  );\r
  overflow-y: auto;\r
  padding: 0;\r
  position: absolute;\r
  z-index: var(--option_list-z_index);\r
}\r
\r
.Select-module_optionList__Lhg-F {\r
  display: flex;\r
  flex-direction: column;\r
  width: 100%;\r
}\r
\r
.Select-module_option__Hvo8n {\r
  background-color: var(--option-background_color-default);\r
  border-color: var(--option-border_color);\r
  border-style: solid;\r
  border-width: var(--option-border_width) 0 0 0;\r
  box-sizing: border-box;\r
  cursor: var(--interactive_element-cursor);\r
  display: inline-block;\r
  font-family: var(--font_family-default);\r
  font-size: var(--font_size);\r
  min-height: var(--option-height);\r
  overflow-x: hidden;\r
  padding-left: var(--option-padding_horizontal);\r
  padding-right: var(--option-padding_horizontal);\r
  padding-top: calc(\r
    (var(--option-height) - (var(--font_size) * var(--line-height))) / 2\r
  );\r
  text-align: left;\r
  text-overflow: ellipsis;\r
}\r
\r
.Select-module_option__Hvo8n:hover {\r
  background-color: var(--option-background_color-hover);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A {\r
  background-color: var(--option-background_color-selected);\r
}\r
\r
.Select-module_option__Hvo8n.Select-module_selected__8A13A:hover {\r
  background-color: var(--option-background_color-selected-hover);\r
}\r
\r
.Select-module_select__cjdcr.Select-module_multiple__cwGEC .Select-module_option__Hvo8n.Select-module_focused__joVjV {\r
  outline: var(--option-outline-focus);\r
}\r
`);const HT=(e,t)=>((n,r)=>[...n.entries()].map(([i,a])=>({key:i,keywords:(a?.length?a:[i]).sort(r)})).sort((i,a)=>{const l=Math.min(i.keywords.length,a.keywords.length);for(let u=0;u<l;u++){const d=r(i.keywords[u],a.keywords[u]);if(d!==0)return d}return 0}).map(({key:i})=>i))(new Map(e.map(({label:n,value:r,keywords:i})=>[r,i?[n,...i]:[n]])),UT(t)).map(n=>e.find(r=>r.value===n)),Sa={ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",Enter:"Enter"},Pp=e=>{var t;const{disabled:n,error:r,hideLabel:i,inputId:a,label:l,multiple:u,onChange:d,options:f,searchLabel:m,value:_}=e,h=f.map($=>$.value);if(h.length!==new Set(h).size)throw Error("Each value in the option list must be unique.");const[g,x]=T.useState(u&&_!=null?_:[]),[w,C]=T.useState(""),y=()=>w&&C(""),[b,S]=T.useState(f),P=f.length,z=(t=b[0])===null||t===void 0?void 0:t.value;Su(()=>{z!==void 0&&D(z)},[z]);const[I,D]=T.useState(u?void 0:_),j=b.findIndex($=>$.value===I),[V,U]=T.useState(!1);Dg("click",()=>U(!1)),Dg("keydown",()=>U(!0));const[R,Y]=T.useState(!1),_e=T.useRef(null),re=T.useRef(null);Su(()=>{u?M1(_,g)||x(_??[]):D(_)},[_]),T.useEffect(()=>{const $=_e.current;if($){const ne=$.offsetHeight,se=$.querySelectorAll("button");if(!se.length)return;const Ue=$.scrollTop,We=Ue+ne,Re=se[j];if(Re){const Ee=Re.offsetTop,qe=Ee+Re.offsetHeight;Ee>=Ue&&qe<=We||($.scrollTop=Ee<Ue?Ee:qe-ne)}}},[j]);const de=$=>{var ne;return(ne=f.find(se=>se.value===$))!==null&&ne!==void 0?ne:{label:"",value:""}},ee=($,ne)=>{g?.length||D(ne),x($),d&&d($)},ue=$=>{var ne;u?g.includes($)?M($):ee([...g,$],$):(D(ne=$),Y(!1),y(),d&&d(ne))},M=$=>{ee(g.filter(ne=>ne!==$),$)},oe=T.useCallback(()=>{if(I===void 0)D(b[0].value);else{const $=j+1;$>=0&&$<P&&D(b[$].value)}Y(!0)},[I,j,D,b,P]),K=T.useCallback(()=>{if(I===void 0)D(b[P-1].value);else{const $=j-1;$>=0&&$<P&&D(b[$].value)}Y(!0)},[I,j,D,b,P]);Ud(Sa.ArrowDown,()=>{R&&(oe(),y())}),Ud(Sa.ArrowUp,()=>{R&&(K(),y())}),Ud(Sa.Enter,()=>{R&&u&&I?ue(I):R&&Y(!1),y()});const O=$=>{const ne=$.target.value;ne&&(S(HT(f,ne)),!R&&Y(!0)),C(ne)},B=$=>I===$,A=$=>u?g.includes($):B($),Q=T.useId(),te=re.current?`calc(${re.current.offsetWidth}px + 2 * ${SO.component.input.border_width.default.value})`:void 0;return Z.createElement("span",{className:St(ct.select,ct[u?"multiple":"single"],R&&ct.expanded,n&&ct.disabled,V&&ct.usingKeyboard),"data-testid":"select-root"},Z.createElement(FT,{disabled:n,inputId:a,inputRenderer:({className:$,inputId:ne})=>Z.createElement("span",{className:$+" "+ct.field,ref:re},Z.createElement("span",{className:ct.inputArea},u&&Z.createElement(Z.Fragment,null,g.map(de).map(se=>Z.createElement(rx,{deleteButtonLabel:se.deleteButtonLabel,disabled:n!=null&&n,key:se.value,label:se.label,onDeleteButtonClick:()=>M(se.value)}))),Z.createElement("input",{"aria-label":m,autoComplete:"off",className:ct.textInput,disabled:n,onBlur:()=>Y(!1),onChange:O,onFocus:()=>Y(!0),onKeyDown:se=>{Object.values(Sa).includes(se.key)&&se.preventDefault()},type:"text",value:w}),!u&&!w.length&&Z.createElement("span",{className:ct.fieldValue},de(I).label)),u&&Z.createElement("button",{"aria-label":e.deleteButtonLabel,className:ct.deleteButton,disabled:!g.length||n,onClick:()=>{ee([])}},Z.createElement("span",{className:ct.deleteButtonCross})),Z.createElement("button",{"aria-controls":Q,"aria-expanded":R,"aria-haspopup":"listbox","aria-label":l,className:ct.fieldButton,disabled:n,id:ne,onBlur:()=>Y(!1),onClick:()=>Y(!0),onKeyDown:se=>{Object.values(Sa).includes(se.key)&&(se.preventDefault(),Y(!0))},role:"combobox",tabIndex:-1,value:u?g:I},Z.createElement("span",{className:ct.arrowWrapper},Z.createElement("span",{className:ct.arrow})))),isSearch:!1,isValid:!r,label:i?void 0:l,noFocusEffect:u,noPadding:!0,readOnly:!1}),Z.createElement("span",{className:ct.optionListWrapper,ref:_e,style:{width:te}},Z.createElement("span",{className:ct.optionList,id:Q,role:"listbox"},b.map($=>{var ne;return Z.createElement("button",{"aria-label":$.label,"aria-selected":A($.value),className:St(ct.option,A($.value)&&ct.selected,u&&B($.value)&&ct.focused),key:$.value,onClick:()=>ue($.value),onMouseDown:se=>se.preventDefault(),onKeyDown:se=>se.preventDefault(),role:"option",value:$.value},(ne=$.formattedLabel)!==null&&ne!==void 0?ne:$.label)}))))};Pp.displayName="Select";nt(`.TextArea-module_textArea__Fp7-I {\r
  border: none;\r
  font-family: inherit;\r
  font-size: var(--component-textarea-font_size-sm);\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-none__LLMFm {\r
  resize: none;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-both__LTKmK {\r
  resize: both;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-horizontal__SIRxw {\r
  resize: horizontal;\r
}\r
\r
.TextArea-module_textArea__Fp7-I.TextArea-module_resize-vertical__oRHAF {\r
  resize: vertical;\r
}\r
`);var _s;(function(e){e.Primary="primary",e.Secondary="secondary"})(_s||(_s={}));const ox=T.createContext(void 0),Jh=()=>{const e=T.useContext(ox);if(e===void 0)throw new Error("useAccordionContext must be used within an AccordionContext");return e};var VT="Accordion-module_accordion__LVhhv";nt(`.Accordion-module_accordion__LVhhv {\r
  --component-accordion-color-background: var(--colors-white);\r
  --component-panel-size-width: 100%;\r
  background-color: var(--component-accordion-color-background);\r
  width: var(--component-panel-size-width);\r
}\r
`);const ix=({children:e,open:t,onClick:n,iconVariant:r=_s.Primary})=>{const i=T.useId(),a=T.useId();return Z.createElement("div",{className:VT},Z.createElement(ox.Provider,{value:{onClick:n,open:t,headerId:i,contentId:a,iconVariant:r}},e))};ix.displayName="Accordion";const ax=({children:e})=>{const{open:t,contentId:n,headerId:r}=Jh();return Z.createElement("div",null,t&&Z.createElement("div",{"aria-expanded":t,id:n,"aria-labelledby":r},e))};ax.displayName="AccordionContent";var qT="AccordionHeader-module_accordionHeader__nap0Y",KT="AccordionHeader-module_subtitle__CpDh7",QT="AccordionHeader-module_withSubtitle__zCXnG",GT="AccordionHeader-module_title__3VVAA",XT="AccordionHeader-module_actions__WCBkS";nt(`.AccordionHeader-module_accordionHeader__nap0Y {\r
  --component-accordion_header-border_top_color: var(--colors-grey-200);\r
  --component-accordion_header-border_top_style: solid;\r
  --component-accordion_header-border_top_width: var(--border_width-thin);\r
  --component-accordion_header-color-background: var(--colors-white);\r
  align-items: center;\r
  background-color: var(--component-accordion_header-color-background);\r
  border-top-color: var(--component-accordion_header-border_top_color);\r
  border-top-style: var(--component-accordion_header-border_top_style);\r
  border-top-width: var(--component-accordion_header-border_top_width);\r
  display: flex;\r
}\r
\r
/* breakpoints-xs */\r
@media only screen and (min-width: 0) {\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: none;\r
  }\r
}\r
\r
/* breakpoints-sm */\r
@media only screen and (min-width: 540px) {\r
  .AccordionHeader-module_accordionHeader__nap0Y.AccordionHeader-module_withSubtitle__zCXnG {\r
    padding-bottom: 0.2rem;\r
    padding-right: 0.2rem;\r
    padding-top: 0.2rem;\r
  }\r
\r
  .AccordionHeader-module_subtitle__CpDh7 {\r
    display: inline-block;\r
    font-size: 0.9rem;\r
    opacity: 60%;\r
  }\r
}\r
\r
.AccordionHeader-module_title__3VVAA {\r
  --component-accordion_header_title-border_bottom_style: none;\r
  --component-accordion_header_title-border_left_style: none;\r
  --component-accordion_header_title-border_right_style: none;\r
  --component-accordion_header_title-border_top_style: none;\r
  --component-accordion_header_title-color-background: none;\r
  --component-accordion_header_title-font_size: var(--font_size-300);\r
  --component-accordion_header_title-font_weight: var(--component-panel-font_weight-heading);\r
  --component-accordion_header_title-spacing-margin_left: 1.6rem;\r
  background-color: var(--component-accordion_header_title-color-background);\r
  border-bottom-style: var(--component-accordion_header_title-border_bottom_style);\r
  border-left-style: var(--component-accordion_header_title-border_left_style);\r
  border-right-style: var(--component-accordion_header_title-border_right_style);\r
  border-top-style: var(--component-accordion_header_title-border_top_style);\r
  cursor: pointer;\r
  display: inline-flex;\r
  flex: 1 1 auto;\r
  flex-direction: column;\r
  font-family: inherit;\r
  font-size: var(--component-accordion_header_title-font_size);\r
  font-weight: var(--component-accordion_header_title-font_weight);\r
  line-height: 16px;\r
  margin-left: var(--component-accordion_header_title-spacing-margin_left);\r
  text-align: left;\r
}\r
\r
.AccordionHeader-module_actions__WCBkS {\r
  align-items: center;\r
  column-gap: 0.3rem;\r
  display: grid;\r
  grid-auto-flow: column;\r
  padding: 0 0.2rem;\r
}\r
`);var JT="AccordionIcon-module_accordionIcon__C4yU3",YT="AccordionIcon-module_opened__jWTPV";nt(`.AccordionIcon-module_accordionIcon__C4yU3 {\r
  --size: 20px;\r
  box-sizing: border-box;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
  height: var(--size);\r
  margin-bottom: 0.6rem;\r
  margin-left: 0.6rem;\r
  margin-top: 0.6rem;\r
  width: var(--size);\r
}\r
\r
.AccordionIcon-module_accordionIcon__C4yU3.AccordionIcon-module_opened__jWTPV {\r
  transform: rotate(90deg);\r
}\r
`);const eL=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 12.8834 34\r
        L 10      31.0909\r
        L 22.9754 18\r
        L 10       4.90909\r
        L 12.8834  2\r
        L 28.7423 18\r
        L 12.8834 34\r
        Z\r
      `,fill:iO})),tL=e=>Z.createElement("svg",Object.assign({viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),Z.createElement("path",{d:`\r
        M 18   34\r
        C 26.8 34    34   26.8 34 18\r
        C 34    9.2  26.8  2   18  2\r
        C  9.2  2     2    9.2  2 18\r
        C  2   26.8   9.2 34   18 34\r
        Z\r
        M 14.3556 11.1556\r
        L 16.0444 9.37778\r
        L 24.2222 17.5556\r
        L 16.0444 25.7333\r
        L 14.3556 23.9556\r
        L 20.8444 17.5556\r
        L 14.3556 11.1556\r
        Z\r
      `,fill:aO})),sx=()=>{const{onClick:e,open:t,iconVariant:n}=Jh(),r={className:St(JT,t&&YT),onClick:e};switch(n){case _s.Primary:return Z.createElement(eL,Object.assign({},r));case _s.Secondary:return Z.createElement(tL,Object.assign({},r))}};sx.displayName="AccordionIcon";const lx=({children:e,actions:t,subtitle:n})=>{const{onClick:r,open:i,headerId:a,contentId:l}=Jh();return Z.createElement("div",{className:St(qT,{[QT]:n})},Z.createElement(sx,null),Z.createElement("button",{className:GT,"aria-expanded":i,type:"button",onClick:r,id:a,"aria-controls":l},e,n?.length&&Z.createElement("span",{"data-testid":"accordion-header-subtitle",className:KT},n)),Z.createElement("div",{className:XT},t))};lx.displayName="AccordionHeader";var ay={list:"List-module_list__9aWGq",solid:"List-module_solid__g5log",dashed:"List-module_dashed__sq10j"};nt(`.List-module_list__9aWGq {\r
  --component-list-border_width: 1px;\r
  border-top-color: var(--component-list-border_color);\r
  border-top-style: var(--component-list-border_style);\r
  border-top-width: var(--component-list-border_width);\r
  list-style-type: none;\r
  padding-left: 0;\r
}\r
\r
.List-module_list__9aWGq.List-module_solid__g5log {\r
  --component-list-border_color: #bcc7cc;\r
  --component-list-border_style: solid;\r
}\r
\r
.List-module_list__9aWGq.List-module_dashed__sq10j {\r
  --component-list-border_color: #1eadf7;\r
  --component-list-border_style: dashed;\r
}\r
`);const nL=({children:e,borderStyle:t="solid"})=>Z.createElement("ul",{className:ay.list+" "+ay[t]},e);var rL="ListItem-module_listItem__AJQMK";nt(`.ListItem-module_listItem__AJQMK {\r
  border-bottom-color: var(--component-list-border_color);\r
  border-bottom-style: var(--component-list-border_style);\r
  border-bottom-width: var(--component-list-border_width);\r
  display: block;\r
}\r
`);const Pa=({children:e})=>Z.createElement("li",{className:rL},e);function ux(e,t){return function(){return e.apply(t,arguments)}}const{toString:cx}=Object.prototype,{getPrototypeOf:Yh}=Object,em=(e=>t=>{const n=cx.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kr=e=>(e=e.toLowerCase(),t=>em(t)===e),Oc=e=>t=>typeof t===e,{isArray:Gi}=Array,vs=Oc("undefined");function oL(e){return e!==null&&!vs(e)&&e.constructor!==null&&!vs(e.constructor)&&so(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dx=kr("ArrayBuffer");function iL(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dx(e.buffer),t}const aL=Oc("string"),so=Oc("function"),fx=Oc("number"),tm=e=>e!==null&&typeof e=="object",sL=e=>e===!0||e===!1,Il=e=>{if(em(e)!=="object")return!1;const t=Yh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lL=kr("Date"),uL=kr("File"),cL=kr("Blob"),dL=kr("FileList"),fL=e=>tm(e)&&so(e.pipe),pL=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||cx.call(e)===t||so(e.toString)&&e.toString()===t)},hL=kr("URLSearchParams"),mL=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ls(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Gi(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),l=a.length;let u;for(r=0;r<l;r++)u=a[r],t.call(null,e[u],u,e)}}function px(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const hx=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),mx=e=>!vs(e)&&e!==hx;function Cp(){const{caseless:e}=mx(this)&&this||{},t={},n=(r,i)=>{const a=e&&px(t,i)||i;Il(t[a])&&Il(r)?t[a]=Cp(t[a],r):Il(r)?t[a]=Cp({},r):Gi(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ls(arguments[r],n);return t}const _L=(e,t,n,{allOwnKeys:r}={})=>(Ls(t,(i,a)=>{n&&so(i)?e[a]=ux(i,n):e[a]=i},{allOwnKeys:r}),e),vL=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gL=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yL=(e,t,n,r)=>{let i,a,l;const u={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)l=i[a],(!r||r(l,e,t))&&!u[l]&&(t[l]=e[l],u[l]=!0);e=n!==!1&&Yh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},bL=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xL=e=>{if(!e)return null;if(Gi(e))return e;let t=e.length;if(!fx(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wL=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Yh(Uint8Array)),kL=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},SL=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},PL=kr("HTMLFormElement"),CL=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),sy=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),EL=kr("RegExp"),_x=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ls(n,(i,a)=>{t(i,a,e)!==!1&&(r[a]=i)}),Object.defineProperties(e,r)},OL=e=>{_x(e,(t,n)=>{if(so(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(so(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TL=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Gi(e)?r(e):r(String(e).split(t)),n},LL=()=>{},zL=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Kd="abcdefghijklmnopqrstuvwxyz",ly="0123456789",vx={DIGIT:ly,ALPHA:Kd,ALPHA_DIGIT:Kd+Kd.toUpperCase()+ly},RL=(e=16,t=vx.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function AL(e){return!!(e&&so(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const NL=e=>{const t=new Array(10),n=(r,i)=>{if(tm(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Gi(r)?[]:{};return Ls(r,(l,u)=>{const d=n(l,i+1);!vs(d)&&(a[u]=d)}),t[i]=void 0,a}}return r};return n(e,0)},q={isArray:Gi,isArrayBuffer:dx,isBuffer:oL,isFormData:pL,isArrayBufferView:iL,isString:aL,isNumber:fx,isBoolean:sL,isObject:tm,isPlainObject:Il,isUndefined:vs,isDate:lL,isFile:uL,isBlob:cL,isRegExp:EL,isFunction:so,isStream:fL,isURLSearchParams:hL,isTypedArray:wL,isFileList:dL,forEach:Ls,merge:Cp,extend:_L,trim:mL,stripBOM:vL,inherits:gL,toFlatObject:yL,kindOf:em,kindOfTest:kr,endsWith:bL,toArray:xL,forEachEntry:kL,matchAll:SL,isHTMLForm:PL,hasOwnProperty:sy,hasOwnProp:sy,reduceDescriptors:_x,freezeMethods:OL,toObjectSet:TL,toCamelCase:CL,noop:LL,toFiniteNumber:zL,findKey:px,global:hx,isContextDefined:mx,ALPHABET:vx,generateString:RL,isSpecCompliantForm:AL,toJSONObject:NL};function Le(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}q.inherits(Le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gx=Le.prototype,yx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{yx[e]={value:e}});Object.defineProperties(Le,yx);Object.defineProperty(gx,"isAxiosError",{value:!0});Le.from=(e,t,n,r,i,a)=>{const l=Object.create(gx);return q.toFlatObject(e,l,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),Le.call(l,e.message,t,n,r,i),l.cause=e,l.name=e.name,a&&Object.assign(l,a),l};const BL=null;function Ep(e){return q.isPlainObject(e)||q.isArray(e)}function bx(e){return q.endsWith(e,"[]")?e.slice(0,-2):e}function uy(e,t,n){return e?e.concat(t).map(function(i,a){return i=bx(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function IL(e){return q.isArray(e)&&!e.some(Ep)}const ML=q.toFlatObject(q,{},null,function(t){return/^is[A-Z]/.test(t)});function Tc(e,t,n){if(!q.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!q.isUndefined(C[w])});const r=n.metaTokens,i=n.visitor||m,a=n.dots,l=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(t);if(!q.isFunction(i))throw new TypeError("visitor must be a function");function f(x){if(x===null)return"";if(q.isDate(x))return x.toISOString();if(!d&&q.isBlob(x))throw new Le("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(x)||q.isTypedArray(x)?d&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function m(x,w,C){let y=x;if(x&&!C&&typeof x=="object"){if(q.endsWith(w,"{}"))w=r?w:w.slice(0,-2),x=JSON.stringify(x);else if(q.isArray(x)&&IL(x)||(q.isFileList(x)||q.endsWith(w,"[]"))&&(y=q.toArray(x)))return w=bx(w),y.forEach(function(S,P){!(q.isUndefined(S)||S===null)&&t.append(l===!0?uy([w],P,a):l===null?w:w+"[]",f(S))}),!1}return Ep(x)?!0:(t.append(uy(C,w,a),f(x)),!1)}const _=[],h=Object.assign(ML,{defaultVisitor:m,convertValue:f,isVisitable:Ep});function g(x,w){if(!q.isUndefined(x)){if(_.indexOf(x)!==-1)throw Error("Circular reference detected in "+w.join("."));_.push(x),q.forEach(x,function(y,b){(!(q.isUndefined(y)||y===null)&&i.call(t,y,q.isString(b)?b.trim():b,w,h))===!0&&g(y,w?w.concat(b):[b])}),_.pop()}}if(!q.isObject(e))throw new TypeError("data must be an object");return g(e),t}function cy(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function nm(e,t){this._pairs=[],e&&Tc(e,this,t)}const xx=nm.prototype;xx.append=function(t,n){this._pairs.push([t,n])};xx.toString=function(t){const n=t?function(r){return t.call(this,r,cy)}:cy;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function DL(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wx(e,t,n){if(!t)return e;const r=n&&n.encode||DL,i=n&&n.serialize;let a;if(i?a=i(t,n):a=q.isURLSearchParams(t)?t.toString():new nm(t,n).toString(r),a){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class FL{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){q.forEach(this.handlers,function(r){r!==null&&t(r)})}}const dy=FL,kx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},jL=typeof URLSearchParams<"u"?URLSearchParams:nm,UL=typeof FormData<"u"?FormData:null,$L=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ZL=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Vn={isBrowser:!0,classes:{URLSearchParams:jL,FormData:UL,Blob},isStandardBrowserEnv:$L,isStandardBrowserWebWorkerEnv:ZL,protocols:["http","https","file","blob","url","data"]};function WL(e,t){return Tc(e,new Vn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return Vn.isNode&&q.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function HL(e){return q.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function VL(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function Sx(e){function t(n,r,i,a){let l=n[a++];const u=Number.isFinite(+l),d=a>=n.length;return l=!l&&q.isArray(i)?i.length:l,d?(q.hasOwnProp(i,l)?i[l]=[i[l],r]:i[l]=r,!u):((!i[l]||!q.isObject(i[l]))&&(i[l]=[]),t(n,r,i[l],a)&&q.isArray(i[l])&&(i[l]=VL(i[l])),!u)}if(q.isFormData(e)&&q.isFunction(e.entries)){const n={};return q.forEachEntry(e,(r,i)=>{t(HL(r),i,n,0)}),n}return null}const qL={"Content-Type":void 0};function KL(e,t,n){if(q.isString(e))try{return(t||JSON.parse)(e),q.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Lc={transitional:kx,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=q.isObject(t);if(a&&q.isHTMLForm(t)&&(t=new FormData(t)),q.isFormData(t))return i&&i?JSON.stringify(Sx(t)):t;if(q.isArrayBuffer(t)||q.isBuffer(t)||q.isStream(t)||q.isFile(t)||q.isBlob(t))return t;if(q.isArrayBufferView(t))return t.buffer;if(q.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return WL(t,this.formSerializer).toString();if((u=q.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Tc(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),KL(t)):t}],transformResponse:[function(t){const n=this.transitional||Lc.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&q.isString(t)&&(r&&!this.responseType||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(u){if(l)throw u.name==="SyntaxError"?Le.from(u,Le.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vn.classes.FormData,Blob:Vn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(t){Lc.headers[t]={}});q.forEach(["post","put","patch"],function(t){Lc.headers[t]=q.merge(qL)});const rm=Lc,QL=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),GL=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(l){i=l.indexOf(":"),n=l.substring(0,i).trim().toLowerCase(),r=l.substring(i+1).trim(),!(!n||t[n]&&QL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fy=Symbol("internals");function Ca(e){return e&&String(e).trim().toLowerCase()}function Ml(e){return e===!1||e==null?e:q.isArray(e)?e.map(Ml):String(e)}function XL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function JL(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Qd(e,t,n,r,i){if(q.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!q.isString(t)){if(q.isString(r))return t.indexOf(r)!==-1;if(q.isRegExp(r))return r.test(t)}}function YL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function ez(e,t){const n=q.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,l){return this[r].call(this,t,i,a,l)},configurable:!0})})}class zc{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(u,d,f){const m=Ca(d);if(!m)throw new Error("header name must be a non-empty string");const _=q.findKey(i,m);(!_||i[_]===void 0||f===!0||f===void 0&&i[_]!==!1)&&(i[_||d]=Ml(u))}const l=(u,d)=>q.forEach(u,(f,m)=>a(f,m,d));return q.isPlainObject(t)||t instanceof this.constructor?l(t,n):q.isString(t)&&(t=t.trim())&&!JL(t)?l(GL(t),n):t!=null&&a(n,t,r),this}get(t,n){if(t=Ca(t),t){const r=q.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return XL(i);if(q.isFunction(n))return n.call(this,i,r);if(q.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ca(t),t){const r=q.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Qd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(l){if(l=Ca(l),l){const u=q.findKey(r,l);u&&(!n||Qd(r,r[u],u,n))&&(delete r[u],i=!0)}}return q.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Qd(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return q.forEach(this,(i,a)=>{const l=q.findKey(r,a);if(l){n[l]=Ml(i),delete n[a];return}const u=t?YL(a):String(a).trim();u!==a&&delete n[a],n[u]=Ml(i),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return q.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&q.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[fy]=this[fy]={accessors:{}}).accessors,i=this.prototype;function a(l){const u=Ca(l);r[u]||(ez(i,l),r[u]=!0)}return q.isArray(t)?t.forEach(a):a(t),this}}zc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(zc.prototype);q.freezeMethods(zc);const hr=zc;function Gd(e,t){const n=this||rm,r=t||n,i=hr.from(r.headers);let a=r.data;return q.forEach(e,function(u){a=u.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function Px(e){return!!(e&&e.__CANCEL__)}function zs(e,t,n){Le.call(this,e??"canceled",Le.ERR_CANCELED,t,n),this.name="CanceledError"}q.inherits(zs,Le,{__CANCEL__:!0});function tz(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Le("Request failed with status code "+n.status,[Le.ERR_BAD_REQUEST,Le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const nz=Vn.isStandardBrowserEnv?function(){return{write:function(n,r,i,a,l,u){const d=[];d.push(n+"="+encodeURIComponent(r)),q.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),q.isString(a)&&d.push("path="+a),q.isString(l)&&d.push("domain="+l),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rz(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function oz(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Cx(e,t){return e&&!rz(t)?oz(e,t):t}const iz=Vn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(a){let l=a;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(l){const u=q.isString(l)?i(l):l;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function az(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sz(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,l;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),m=r[a];l||(l=f),n[i]=d,r[i]=f;let _=a,h=0;for(;_!==i;)h+=n[_++],_=_%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),f-l<t)return;const g=m&&f-m;return g?Math.round(h*1e3/g):void 0}}function py(e,t){let n=0;const r=sz(50,250);return i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,u=a-n,d=r(u),f=a<=l;n=a;const m={loaded:a,total:l,progress:l?a/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l&&f?(l-a)/d:void 0,event:i};m[t?"download":"upload"]=!0,e(m)}}const lz=typeof XMLHttpRequest<"u",uz=lz&&function(e){return new Promise(function(n,r){let i=e.data;const a=hr.from(e.headers).normalize(),l=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}q.isFormData(i)&&(Vn.isStandardBrowserEnv||Vn.isStandardBrowserWebWorkerEnv)&&a.setContentType(!1);let f=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(g+":"+x))}const m=Cx(e.baseURL,e.url);f.open(e.method.toUpperCase(),wx(m,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function _(){if(!f)return;const g=hr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:g,config:e,request:f};tz(function(y){n(y),d()},function(y){r(y),d()},w),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new Le("Request aborted",Le.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new Le("Network Error",Le.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||kx;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),r(new Le(x,w.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,e,f)),f=null},Vn.isStandardBrowserEnv){const g=(e.withCredentials||iz(m))&&e.xsrfCookieName&&nz.read(e.xsrfCookieName);g&&a.set(e.xsrfHeaderName,g)}i===void 0&&a.setContentType(null),"setRequestHeader"in f&&q.forEach(a.toJSON(),function(x,w){f.setRequestHeader(w,x)}),q.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),l&&l!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",py(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",py(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=g=>{f&&(r(!g||g.type?new zs(null,e,f):g),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const h=az(m);if(h&&Vn.protocols.indexOf(h)===-1){r(new Le("Unsupported protocol "+h+":",Le.ERR_BAD_REQUEST,e));return}f.send(i||null)})},Dl={http:BL,xhr:uz};q.forEach(Dl,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const cz={getAdapter:e=>{e=q.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=q.isString(n)?Dl[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new Le(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Dl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Dl};function Xd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new zs(null,e)}function hy(e){return Xd(e),e.headers=hr.from(e.headers),e.data=Gd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),cz.getAdapter(e.adapter||rm.adapter)(e).then(function(r){return Xd(e),r.data=Gd.call(e,e.transformResponse,r),r.headers=hr.from(r.headers),r},function(r){return Px(r)||(Xd(e),r&&r.response&&(r.response.data=Gd.call(e,e.transformResponse,r.response),r.response.headers=hr.from(r.response.headers))),Promise.reject(r)})}const my=e=>e instanceof hr?e.toJSON():e;function Hi(e,t){t=t||{};const n={};function r(f,m,_){return q.isPlainObject(f)&&q.isPlainObject(m)?q.merge.call({caseless:_},f,m):q.isPlainObject(m)?q.merge({},m):q.isArray(m)?m.slice():m}function i(f,m,_){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f,_)}else return r(f,m,_)}function a(f,m){if(!q.isUndefined(m))return r(void 0,m)}function l(f,m){if(q.isUndefined(m)){if(!q.isUndefined(f))return r(void 0,f)}else return r(void 0,m)}function u(f,m,_){if(_ in t)return r(f,m);if(_ in e)return r(void 0,f)}const d={url:a,method:a,data:a,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u,headers:(f,m)=>i(my(f),my(m),!0)};return q.forEach(Object.keys(e).concat(Object.keys(t)),function(m){const _=d[m]||i,h=_(e[m],t[m],m);q.isUndefined(h)&&_!==u||(n[m]=h)}),n}const Ex="1.3.3",om={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{om[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _y={};om.transitional=function(t,n,r){function i(a,l){return"[Axios v"+Ex+"] Transitional option '"+a+"'"+l+(r?". "+r:"")}return(a,l,u)=>{if(t===!1)throw new Le(i(l," has been removed"+(n?" in "+n:"")),Le.ERR_DEPRECATED);return n&&!_y[l]&&(_y[l]=!0,console.warn(i(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,l,u):!0}};function dz(e,t,n){if(typeof e!="object")throw new Le("options must be an object",Le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],l=t[a];if(l){const u=e[a],d=u===void 0||l(u,a,e);if(d!==!0)throw new Le("option "+a+" must be "+d,Le.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Le("Unknown option "+a,Le.ERR_BAD_OPTION)}}const Op={assertOptions:dz,validators:om},zr=Op.validators;class Lu{constructor(t){this.defaults=t,this.interceptors={request:new dy,response:new dy}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Hi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Op.assertOptions(r,{silentJSONParsing:zr.transitional(zr.boolean),forcedJSONParsing:zr.transitional(zr.boolean),clarifyTimeoutError:zr.transitional(zr.boolean)},!1),i!==void 0&&Op.assertOptions(i,{encode:zr.function,serialize:zr.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=a&&q.merge(a.common,a[n.method]),l&&q.forEach(["delete","get","head","post","put","patch","common"],x=>{delete a[x]}),n.headers=hr.concat(l,a);const u=[];let d=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(d=d&&w.synchronous,u.unshift(w.fulfilled,w.rejected))});const f=[];this.interceptors.response.forEach(function(w){f.push(w.fulfilled,w.rejected)});let m,_=0,h;if(!d){const x=[hy.bind(this),void 0];for(x.unshift.apply(x,u),x.push.apply(x,f),h=x.length,m=Promise.resolve(n);_<h;)m=m.then(x[_++],x[_++]);return m}h=u.length;let g=n;for(_=0;_<h;){const x=u[_++],w=u[_++];try{g=x(g)}catch(C){w.call(this,C);break}}try{m=hy.call(this,g)}catch(x){return Promise.reject(x)}for(_=0,h=f.length;_<h;)m=m.then(f[_++],f[_++]);return m}getUri(t){t=Hi(this.defaults,t);const n=Cx(t.baseURL,t.url);return wx(n,t.params,t.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(t){Lu.prototype[t]=function(n,r){return this.request(Hi(r||{},{method:t,url:n,data:(r||{}).data}))}});q.forEach(["post","put","patch"],function(t){function n(r){return function(a,l,u){return this.request(Hi(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:l}))}}Lu.prototype[t]=n(),Lu.prototype[t+"Form"]=n(!0)});const Fl=Lu;class im{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const l=new Promise(u=>{r.subscribe(u),a=u}).then(i);return l.cancel=function(){r.unsubscribe(a)},l},t(function(a,l,u){r.reason||(r.reason=new zs(a,l,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new im(function(i){t=i}),cancel:t}}}const fz=im;function pz(e){return function(n){return e.apply(null,n)}}function hz(e){return q.isObject(e)&&e.isAxiosError===!0}const Tp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Tp).forEach(([e,t])=>{Tp[t]=e});const mz=Tp;function Ox(e){const t=new Fl(e),n=ux(Fl.prototype.request,t);return q.extend(n,Fl.prototype,t,{allOwnKeys:!0}),q.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Ox(Hi(e,i))},n}const pt=Ox(rm);pt.Axios=Fl;pt.CanceledError=zs;pt.CancelToken=fz;pt.isCancel=Px;pt.VERSION=Ex;pt.toFormData=Tc;pt.AxiosError=Le;pt.Cancel=pt.CanceledError;pt.all=function(t){return Promise.all(t)};pt.spread=pz;pt.isAxiosError=hz;pt.mergeConfig=Hi;pt.AxiosHeaders=hr;pt.formToJSON=e=>Sx(q.isHTMLForm(e)?new FormData(e):e);pt.HttpStatusCode=mz;pt.default=pt;const Tx=pt;function Cn(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function lo(e){return!!e&&!!e[Ke]}function br(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===Sz}(e)||Array.isArray(e)||!!e[ky]||!!(!((t=e.constructor)===null||t===void 0)&&t[ky])||am(e)||sm(e))}function Vo(e,t,n){n===void 0&&(n=!1),Xi(e)===0?(n?Object.keys:Ni)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,i){return t(i,r,e)})}function Xi(e){var t=e[Ke];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:am(e)?2:sm(e)?3:0}function Ai(e,t){return Xi(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _z(e,t){return Xi(e)===2?e.get(t):e[t]}function Lx(e,t,n){var r=Xi(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function zx(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function am(e){return wz&&e instanceof Map}function sm(e){return kz&&e instanceof Set}function Co(e){return e.o||e.t}function lm(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ax(e);delete t[Ke];for(var n=Ni(t),r=0;r<n.length;r++){var i=n[r],a=t[i];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function um(e,t){return t===void 0&&(t=!1),cm(e)||lo(e)||!br(e)||(Xi(e)>1&&(e.set=e.add=e.clear=e.delete=vz),Object.freeze(e),t&&Vo(e,function(n,r){return um(r,!0)},!0)),e}function vz(){Cn(2)}function cm(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Gn(e){var t=Ap[e];return t||Cn(18,e),t}function gz(e,t){Ap[e]||(Ap[e]=t)}function Lp(){return gs}function Jd(e,t){t&&(Gn("Patches"),e.u=[],e.s=[],e.v=t)}function zu(e){zp(e),e.p.forEach(yz),e.p=null}function zp(e){e===gs&&(gs=e.l)}function vy(e){return gs={p:[],l:gs,h:e,m:!0,_:0}}function yz(e){var t=e[Ke];t.i===0||t.i===1?t.j():t.O=!0}function Yd(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Gn("ES5").S(t,e,r),r?(n[Ke].P&&(zu(t),Cn(4)),br(e)&&(e=Ru(t,e),t.l||Au(t,e)),t.u&&Gn("Patches").M(n[Ke].t,e,t.u,t.s)):e=Ru(t,n,[]),zu(t),t.u&&t.v(t.u,t.s),e!==Rx?e:void 0}function Ru(e,t,n){if(cm(t))return t;var r=t[Ke];if(!r)return Vo(t,function(u,d){return gy(e,r,t,u,d,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Au(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=lm(r.k):r.o,a=i,l=!1;r.i===3&&(a=new Set(i),i.clear(),l=!0),Vo(a,function(u,d){return gy(e,r,i,u,d,n,l)}),Au(e,i,!1),n&&e.u&&Gn("Patches").N(r,n,e.u,e.s)}return r.o}function gy(e,t,n,r,i,a,l){if(lo(i)){var u=Ru(e,i,a&&t&&t.i!==3&&!Ai(t.R,r)?a.concat(r):void 0);if(Lx(n,r,u),!lo(u))return;e.m=!1}else l&&n.add(i);if(br(i)&&!cm(i)){if(!e.h.D&&e._<1)return;Ru(e,i),t&&t.A.l||Au(e,i)}}function Au(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&um(t,n)}function ef(e,t){var n=e[Ke];return(n?Co(n):e)[t]}function yy(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dr(e){e.P||(e.P=!0,e.l&&Dr(e.l))}function tf(e){e.o||(e.o=lm(e.t))}function Rp(e,t,n){var r=am(t)?Gn("MapSet").F(t,n):sm(t)?Gn("MapSet").T(t,n):e.g?function(i,a){var l=Array.isArray(i),u={i:l?1:0,A:a?a.A:Lp(),P:!1,I:!1,R:{},l:a,t:i,k:null,o:null,j:null,C:!1},d=u,f=ys;l&&(d=[u],f=Aa);var m=Proxy.revocable(d,f),_=m.revoke,h=m.proxy;return u.k=h,u.j=_,h}(t,n):Gn("ES5").J(t,n);return(n?n.A:Lp()).p.push(r),r}function bz(e){return lo(e)||Cn(22,e),function t(n){if(!br(n))return n;var r,i=n[Ke],a=Xi(n);if(i){if(!i.P&&(i.i<4||!Gn("ES5").K(i)))return i.t;i.I=!0,r=by(n,a),i.I=!1}else r=by(n,a);return Vo(r,function(l,u){i&&_z(i.t,l)===u||Lx(r,l,t(u))}),a===3?new Set(r):r}(e)}function by(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return lm(e)}function xz(){function e(a,l){var u=i[a];return u?u.enumerable=l:i[a]=u={configurable:!0,enumerable:l,get:function(){var d=this[Ke];return ys.get(d,a)},set:function(d){var f=this[Ke];ys.set(f,a,d)}},u}function t(a){for(var l=a.length-1;l>=0;l--){var u=a[l][Ke];if(!u.P)switch(u.i){case 5:r(u)&&Dr(u);break;case 4:n(u)&&Dr(u)}}}function n(a){for(var l=a.t,u=a.k,d=Ni(u),f=d.length-1;f>=0;f--){var m=d[f];if(m!==Ke){var _=l[m];if(_===void 0&&!Ai(l,m))return!0;var h=u[m],g=h&&h[Ke];if(g?g.t!==_:!zx(h,_))return!0}}var x=!!l[Ke];return d.length!==Ni(l).length+(x?0:1)}function r(a){var l=a.k;if(l.length!==a.t.length)return!0;var u=Object.getOwnPropertyDescriptor(l,l.length-1);if(u&&!u.get)return!0;for(var d=0;d<l.length;d++)if(!l.hasOwnProperty(d))return!0;return!1}var i={};gz("ES5",{J:function(a,l){var u=Array.isArray(a),d=function(m,_){if(m){for(var h=Array(_.length),g=0;g<_.length;g++)Object.defineProperty(h,""+g,e(g,!0));return h}var x=Ax(_);delete x[Ke];for(var w=Ni(x),C=0;C<w.length;C++){var y=w[C];x[y]=e(y,m||!!x[y].enumerable)}return Object.create(Object.getPrototypeOf(_),x)}(u,a),f={i:u?5:4,A:l?l.A:Lp(),P:!1,I:!1,R:{},l,t:a,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,Ke,{value:f,writable:!0}),d},S:function(a,l,u){u?lo(l)&&l[Ke].A===a&&t(a.p):(a.u&&function d(f){if(f&&typeof f=="object"){var m=f[Ke];if(m){var _=m.t,h=m.k,g=m.R,x=m.i;if(x===4)Vo(h,function(S){S!==Ke&&(_[S]!==void 0||Ai(_,S)?g[S]||d(h[S]):(g[S]=!0,Dr(m)))}),Vo(_,function(S){h[S]!==void 0||Ai(h,S)||(g[S]=!1,Dr(m))});else if(x===5){if(r(m)&&(Dr(m),g.length=!0),h.length<_.length)for(var w=h.length;w<_.length;w++)g[w]=!1;else for(var C=_.length;C<h.length;C++)g[C]=!0;for(var y=Math.min(h.length,_.length),b=0;b<y;b++)h.hasOwnProperty(b)||(g[b]=!0),g[b]===void 0&&d(h[b])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?n(a):r(a)}})}var xy,gs,dm=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",wz=typeof Map<"u",kz=typeof Set<"u",wy=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Rx=dm?Symbol.for("immer-nothing"):((xy={})["immer-nothing"]=!0,xy),ky=dm?Symbol.for("immer-draftable"):"__$immer_draftable",Ke=dm?Symbol.for("immer-state"):"__$immer_state",Sz=""+Object.prototype.constructor,Ni=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ax=Object.getOwnPropertyDescriptors||function(e){var t={};return Ni(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Ap={},ys={get:function(e,t){if(t===Ke)return e;var n=Co(e);if(!Ai(n,t))return function(i,a,l){var u,d=yy(a,l);return d?"value"in d?d.value:(u=d.get)===null||u===void 0?void 0:u.call(i.k):void 0}(e,n,t);var r=n[t];return e.I||!br(r)?r:r===ef(e.t,t)?(tf(e),e.o[t]=Rp(e.A.h,r,e)):r},has:function(e,t){return t in Co(e)},ownKeys:function(e){return Reflect.ownKeys(Co(e))},set:function(e,t,n){var r=yy(Co(e),t);if(r?.set)return r.set.call(e.k,n),!0;if(!e.P){var i=ef(Co(e),t),a=i?.[Ke];if(a&&a.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(zx(n,i)&&(n!==void 0||Ai(e.t,t)))return!0;tf(e),Dr(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ef(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,tf(e),Dr(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Co(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Cn(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Cn(12)}},Aa={};Vo(ys,function(e,t){Aa[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Aa.deleteProperty=function(e,t){return Aa.set.call(this,e,t,void 0)},Aa.set=function(e,t,n){return ys.set.call(this,e[0],t,n,e[0])};var Pz=function(){function e(n){var r=this;this.g=wy,this.D=!0,this.produce=function(i,a,l){if(typeof i=="function"&&typeof a!="function"){var u=a;a=i;var d=r;return function(w){var C=this;w===void 0&&(w=u);for(var y=arguments.length,b=Array(y>1?y-1:0),S=1;S<y;S++)b[S-1]=arguments[S];return d.produce(w,function(P){var z;return(z=a).call.apply(z,[C,P].concat(b))})}}var f;if(typeof a!="function"&&Cn(6),l!==void 0&&typeof l!="function"&&Cn(7),br(i)){var m=vy(r),_=Rp(r,i,void 0),h=!0;try{f=a(_),h=!1}finally{h?zu(m):zp(m)}return typeof Promise<"u"&&f instanceof Promise?f.then(function(w){return Jd(m,l),Yd(w,m)},function(w){throw zu(m),w}):(Jd(m,l),Yd(f,m))}if(!i||typeof i!="object"){if((f=a(i))===void 0&&(f=i),f===Rx&&(f=void 0),r.D&&um(f,!0),l){var g=[],x=[];Gn("Patches").M(i,f,g,x),l(g,x)}return f}Cn(21,i)},this.produceWithPatches=function(i,a){if(typeof i=="function")return function(f){for(var m=arguments.length,_=Array(m>1?m-1:0),h=1;h<m;h++)_[h-1]=arguments[h];return r.produceWithPatches(f,function(g){return i.apply(void 0,[g].concat(_))})};var l,u,d=r.produce(i,a,function(f,m){l=f,u=m});return typeof Promise<"u"&&d instanceof Promise?d.then(function(f){return[f,l,u]}):[d,l,u]},typeof n?.useProxies=="boolean"&&this.setUseProxies(n.useProxies),typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){br(n)||Cn(8),lo(n)&&(n=bz(n));var r=vy(this),i=Rp(this,n,void 0);return i[Ke].C=!0,zp(r),i},t.finishDraft=function(n,r){var i=n&&n[Ke],a=i.A;return Jd(a,r),Yd(void 0,a)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!wy&&Cn(20),this.g=n},t.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var a=r[i];if(a.path.length===0&&a.op==="replace"){n=a.value;break}}i>-1&&(r=r.slice(i+1));var l=Gn("Patches").$;return lo(n)?l(n,r):this.produce(n,function(u){return l(u,r)})},e}(),Yt=new Pz,Nx=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseProxies.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);function Sy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Py(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sy(Object(n),!0).forEach(function(r){Rn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Cy=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),nf=function(){return Math.random().toString(36).substring(7).split("").join(".")},Nu={INIT:"@@redux/INIT"+nf(),REPLACE:"@@redux/REPLACE"+nf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nf()}};function Cz(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Bx(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Tt(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Tt(1));return n(Bx)(e,t)}if(typeof e!="function")throw new Error(Tt(2));var i=e,a=t,l=[],u=l,d=!1;function f(){u===l&&(u=l.slice())}function m(){if(d)throw new Error(Tt(3));return a}function _(w){if(typeof w!="function")throw new Error(Tt(4));if(d)throw new Error(Tt(5));var C=!0;return f(),u.push(w),function(){if(C){if(d)throw new Error(Tt(6));C=!1,f();var b=u.indexOf(w);u.splice(b,1),l=null}}}function h(w){if(!Cz(w))throw new Error(Tt(7));if(typeof w.type>"u")throw new Error(Tt(8));if(d)throw new Error(Tt(9));try{d=!0,a=i(a,w)}finally{d=!1}for(var C=l=u,y=0;y<C.length;y++){var b=C[y];b()}return w}function g(w){if(typeof w!="function")throw new Error(Tt(10));i=w,h({type:Nu.REPLACE})}function x(){var w,C=_;return w={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Tt(11));function S(){b.next&&b.next(m())}S();var P=C(S);return{unsubscribe:P}}},w[Cy]=function(){return this},w}return h({type:Nu.INIT}),r={dispatch:h,subscribe:_,getState:m,replaceReducer:g},r[Cy]=x,r}function Ez(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Nu.INIT});if(typeof r>"u")throw new Error(Tt(12));if(typeof n(void 0,{type:Nu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Tt(13))})}function Oz(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var a=Object.keys(n),l;try{Ez(n)}catch(u){l=u}return function(d,f){if(d===void 0&&(d={}),l)throw l;for(var m=!1,_={},h=0;h<a.length;h++){var g=a[h],x=n[g],w=d[g],C=x(w,f);if(typeof C>"u")throw f&&f.type,new Error(Tt(14));_[g]=C,m=m||C!==w}return m=m||a.length!==Object.keys(d).length,m?_:d}}function Bu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Tz(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),a=function(){throw new Error(Tt(15))},l={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},u=t.map(function(d){return d(l)});return a=Bu.apply(void 0,u)(i.dispatch),Py(Py({},i),{},{dispatch:a})}}}function Ix(e){var t=function(r){var i=r.dispatch,a=r.getState;return function(l){return function(u){return typeof u=="function"?u(i,a,e):l(u)}}};return t}var Mx=Ix();Mx.withExtraArgument=Ix;const Ey=Mx;var Lz=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),zz=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(f){return function(m){return d([f,m])}}function d(f){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(a=f[0]&2?i.return:f[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;switch(i=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return n.label++,{value:f[1],done:!1};case 5:n.label++,i=f[1],f=[0];continue;case 7:f=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1],a=f;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(f);break}a[2]&&n.ops.pop(),n.trys.pop();continue}f=t.call(e,n)}catch(m){f=[6,m],i=0}finally{r=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}},Iu=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},Rz=Object.defineProperty,Az=Object.defineProperties,Nz=Object.getOwnPropertyDescriptors,Oy=Object.getOwnPropertySymbols,Bz=Object.prototype.hasOwnProperty,Iz=Object.prototype.propertyIsEnumerable,Ty=function(e,t,n){return t in e?Rz(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},eo=function(e,t){for(var n in t||(t={}))Bz.call(t,n)&&Ty(e,n,t[n]);if(Oy)for(var r=0,i=Oy(t);r<i.length;r++){var n=i[r];Iz.call(t,n)&&Ty(e,n,t[n])}return e},rf=function(e,t){return Az(e,Nz(t))},Mz=function(e,t,n){return new Promise(function(r,i){var a=function(d){try{u(n.next(d))}catch(f){i(f)}},l=function(d){try{u(n.throw(d))}catch(f){i(f)}},u=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(a,l)};u((n=n.apply(e,t)).next())})},Dz=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Bu:Bu.apply(null,arguments)};function Fz(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var jz=function(e){Lz(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Iu([void 0],n[0].concat(this)))):new(t.bind.apply(t,Iu([void 0],n.concat(this))))},t}(Array);function Np(e){return br(e)?Nx(e,function(){}):e}function Uz(e){return typeof e=="boolean"}function $z(){return function(t){return Zz(t)}}function Zz(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new jz;return n&&(Uz(n)?r.push(Ey):r.push(Ey.withExtraArgument(n.extraArgument))),r}var Wz=!0;function Hz(e){var t=$z(),n=e||{},r=n.reducer,i=r===void 0?void 0:r,a=n.middleware,l=a===void 0?t():a,u=n.devTools,d=u===void 0?!0:u,f=n.preloadedState,m=f===void 0?void 0:f,_=n.enhancers,h=_===void 0?void 0:_,g;if(typeof i=="function")g=i;else if(Fz(i))g=Oz(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=Tz.apply(void 0,x),C=Bu;d&&(C=Dz(eo({trace:!Wz},typeof d=="object"&&d)));var y=[w];Array.isArray(h)?y=Iu([w],h):typeof h=="function"&&(y=h(y));var b=C.apply(void 0,y);return Bx(g,m,b)}function to(e,t){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(t){var a=t.apply(void 0,r);if(!a)throw new Error("prepareAction did not return an object");return eo(eo({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Dx(e){var t={},n=[],r,i={addCase:function(a,l){var u=typeof a=="string"?a:a.type;if(u in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[u]=l,i},addMatcher:function(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase:function(a){return r=a,i}};return e(i),[t,n,r]}function Vz(e){return typeof e=="function"}function qz(e,t,n,r){n===void 0&&(n=[]);var i=typeof t=="function"?Dx(t):[t,n,r],a=i[0],l=i[1],u=i[2],d;if(Vz(e))d=function(){return Np(e())};else{var f=Np(e);d=function(){return f}}function m(_,h){_===void 0&&(_=d());var g=Iu([a[h.type]],l.filter(function(x){var w=x.matcher;return w(h)}).map(function(x){var w=x.reducer;return w}));return g.filter(function(x){return!!x}).length===0&&(g=[u]),g.reduce(function(x,w){if(w)if(lo(x)){var C=x,y=w(C,h);return y===void 0?x:y}else{if(br(x))return Nx(x,function(b){return w(b,h)});var y=w(x,h);if(y===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}return x},_)}return m.getInitialState=d,m}function Kz(e,t){return e+"/"+t}function Qz(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Np(e.initialState),r=e.reducers||{},i=Object.keys(r),a={},l={},u={};i.forEach(function(m){var _=r[m],h=Kz(t,m),g,x;"reducer"in _?(g=_.reducer,x=_.prepare):g=_,a[m]=g,l[h]=g,u[m]=x?to(h,x):to(h)});function d(){var m=typeof e.extraReducers=="function"?Dx(e.extraReducers):[e.extraReducers],_=m[0],h=_===void 0?{}:_,g=m[1],x=g===void 0?[]:g,w=m[2],C=w===void 0?void 0:w,y=eo(eo({},h),l);return qz(n,function(b){for(var S in y)b.addCase(S,y[S]);for(var P=0,z=x;P<z.length;P++){var I=z[P];b.addMatcher(I.matcher,I.reducer)}C&&b.addDefaultCase(C)})}var f;return{name:t,reducer:function(m,_){return f||(f=d()),f(m,_)},actions:u,caseReducers:a,getInitialState:function(){return f||(f=d()),f.getInitialState()}}}var Gz="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Xz=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Gz[Math.random()*64|0];return t},Jz=["name","message","stack","code"],of=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ly=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Yz=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Jz;n<r.length;n++){var i=r[n];typeof e[i]=="string"&&(t[i]=e[i])}return t}return{message:String(e)}},Fx=function(){function e(t,n,r){var i=to(t+"/fulfilled",function(f,m,_,h){return{payload:f,meta:rf(eo({},h||{}),{arg:_,requestId:m,requestStatus:"fulfilled"})}}),a=to(t+"/pending",function(f,m,_){return{payload:void 0,meta:rf(eo({},_||{}),{arg:m,requestId:f,requestStatus:"pending"})}}),l=to(t+"/rejected",function(f,m,_,h,g){return{payload:h,error:(r&&r.serializeError||Yz)(f||"Rejected"),meta:rf(eo({},g||{}),{arg:_,requestId:m,rejectedWithValue:!!h,requestStatus:"rejected",aborted:f?.name==="AbortError",condition:f?.name==="ConditionError"})}}),u=typeof AbortController<"u"?AbortController:function(){function f(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return f.prototype.abort=function(){},f}();function d(f){return function(m,_,h){var g=r?.idGenerator?r.idGenerator(f):Xz(),x=new u,w;function C(b){w=b,x.abort()}var y=function(){return Mz(this,null,function(){var b,S,P,z,I,D,j;return zz(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),z=(b=r?.condition)==null?void 0:b.call(r,f,{getState:_,extra:h}),tR(z)?[4,z]:[3,2];case 1:z=V.sent(),V.label=2;case 2:if(z===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return I=new Promise(function(U,R){return x.signal.addEventListener("abort",function(){return R({name:"AbortError",message:w||"Aborted"})})}),m(a(g,f,(S=r?.getPendingMeta)==null?void 0:S.call(r,{requestId:g,arg:f},{getState:_,extra:h}))),[4,Promise.race([I,Promise.resolve(n(f,{dispatch:m,getState:_,extra:h,requestId:g,signal:x.signal,abort:C,rejectWithValue:function(U,R){return new of(U,R)},fulfillWithValue:function(U,R){return new Ly(U,R)}})).then(function(U){if(U instanceof of)throw U;return U instanceof Ly?i(U.payload,g,f,U.meta):i(U,g,f)})])];case 3:return P=V.sent(),[3,5];case 4:return D=V.sent(),P=D instanceof of?l(null,g,f,D.payload,D.meta):l(D,g,f),[3,5];case 5:return j=r&&!r.dispatchConditionRejection&&l.match(P)&&P.meta.condition,j||m(P),[2,P]}})})}();return Object.assign(y,{abort:C,requestId:g,arg:f,unwrap:function(){return y.then(eR)}})}}return Object.assign(d,{pending:a,rejected:l,fulfilled:i,typePrefix:t})}return e.withTypes=function(){return e},e}();function eR(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function tR(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var fm="listenerMiddleware";to(fm+"/add");to(fm+"/removeAll");to(fm+"/remove");var zy;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);xz();const nR={loading:!0,brandloading:!0,evList:{evs:[],count:0},search:{name:"",sortOrder:1,evType:[],brands:[],seatConfiguration:[],seatMassageFirstRow:!1,seatMassageSecondRow:!1,seatVentilationFirstRow:!1,seatVentilationSecondRow:!1,allWheelDrive:!1,nightVision:!1,adaptiveSuspension:!1,airSuspension:!1,instrumentCluster:!1,headUpDisplay:!1,androidAuto:!1,appleCarPlay:!1,colors:[]},searchOptions:{brands:["Audi"],seatConfig:[],bodyTypes:["Sedan"],seatConfiguration:["5 seat"],colors:["Red"]},error:""},Bp=Fx("evsearch/fetchEvs",async e=>{const t=window.location.href;let n="https://api.evkx.net/api/Ev";return t.startsWith("http://localhost")&&(n="https://localhost:7033/api/Ev"),await Tx.post(n,e,{headers:{"Content-Type":"application/json"}}).then(r=>r.data).catch(r=>{console.error("error",r)})}),Ip=Fx("evsearch/fetchSearchOptions",async()=>{const e=window.location.href;let t="https://api.evkx.net/api/searchoptions";return e.startsWith("http://localhost")&&(t="https://localhost:7033/api/searchoptions"),await Tx.get(t).then(n=>n.data).catch(n=>{console.error("error",n)})}),jx=Qz({name:"evsearch",initialState:nR,reducers:{updateSortOrder:(e,t)=>{const n=t.payload.trim().toLowerCase();e.search.sortOrder=parseInt(n)},updateEvType:(e,t)=>{const n=t.payload;e.search.evType=n},updateBrands:(e,t)=>{const n=t.payload;e.search.brands=n},updateSeatConfig:(e,t)=>{const n=t.payload;e.search.seatConfiguration=n},updateAllWheelDrive:(e,t)=>{const n=t.payload;e.search.allWheelDrive=n},updateNightVision:(e,t)=>{const n=t.payload;e.search.nightVision=n},updateAdaptiveDamping:(e,t)=>{const n=t.payload;e.search.adaptiveSuspension=n},updateAdaptiveAirSuspension:(e,t)=>{const n=t.payload;e.search.airSuspension=n},updateInstrumentCluster:(e,t)=>{const n=t.payload;e.search.instrumentCluster=n},updateHeadUpDisplay:(e,t)=>{const n=t.payload;e.search.headUpDisplay=n},updateAndroidAuto:(e,t)=>{const n=t.payload;e.search.androidAuto=n},updateAppleCarPlay:(e,t)=>{const n=t.payload;e.search.appleCarPlay=n},updateColors:(e,t)=>{const n=t.payload;e.search.colors=n}},extraReducers:e=>{e.addCase(Bp.fulfilled,(t,n)=>{const r=n.payload;t.evList=r,t.loading=!1}).addCase(Bp.rejected,(t,n)=>{t.error=n.error.message}).addCase(Ip.fulfilled,(t,n)=>{const r=n.payload;t.searchOptions=r,t.brandloading=!1}).addCase(Ip.rejected,(t,n)=>{t.error=n.error.message})}}),rR=jx.reducer,{updateSortOrder:oR,updateEvType:iR,updateBrands:aR,updateSeatConfig:sR,updateAllWheelDrive:lR,updateNightVision:uR,updateAdaptiveDamping:cR,updateAdaptiveAirSuspension:UR,updateInstrumentCluster:dR,updateHeadUpDisplay:fR,updateAndroidAuto:pR,updateAppleCarPlay:hR,updateColors:mR}=jx.actions,ar=K2,_R=()=>pP(),vR="_pageContainer_14hyd_3",gR="_exitButton_14hyd_71",yR={pageContainer:vR,exitButton:gR},bR=({children:e})=>(pC(),Uh("common"),pe("div",{className:yR.pageContainer,children:pe("div",{children:e})})),xR="_evsearchAccordionContent_1ee0i_1",wR="_evText_1ee0i_11",kR="_scopeItems_1ee0i_19",SR="_line_1ee0i_27",PR="_contentTexts_1ee0i_37",CR="_bottomContentTexts_1ee0i_47",ER="_styledtable_1ee0i_55",OR={evsearchAccordionContent:xR,evText:wR,scopeItems:kR,line:SR,contentTexts:PR,bottomContentTexts:CR,styledtable:ER},TR=({title:e="No info",subtitle:t="No info",topContentText:n,textList:r=[""],maxPower:i=0,topSpeedKph:a=0,infoUri:l="",netBattery:u=0,wltpConsumption:d=0,wltpRange:f=0})=>{const[m,_]=T.useState(!1);return pe("div",{children:xt(ix,{open:m,onClick:()=>{_(!m)},children:[pe(lx,{subtitle:t,children:e}),pe(ax,{children:pe("div",{className:OR.evsearchAccordionContent,children:xt("div",{children:[pe("a",{href:l,children:"Read our full article"}),pe("br",{}),pe("br",{}),xt(Xh,{legend:xo("evsearch.specifications"),description:xo("evsearch.specificationshiglihts"),children:[xt(nL,{borderStyle:"dashed",children:[xt(Pa,{children:[pe("b",{children:xo("evsearch.topspeed")}),"- ",a," km/h"]}),xt(Pa,{children:[pe("b",{children:xo("evsearch.maxpower")})," - ",i," kW"]}),xt(Pa,{children:[pe("b",{children:xo("evsearch.specwltprange")})," - ",f," km"]}),xt(Pa,{children:[pe("b",{children:xo("evsearch.specwltpconsumption")})," - ",d," kWh/100km"]}),xt(Pa,{children:[pe("b",{children:xo("evsearch.specnetbattery")})," - ",u," kWh"]})]}),pe("a",{href:l+"specifications/",children:"See full specification"})]})]})})})]})})},LR="_pageContent_xhe0h_1",zR="_pageContentContainer_xhe0h_19",RR="_resultInfo_xhe0h_33",Ea={pageContent:LR,pageContentContainer:zR,resultInfo:RR},Ry=()=>{const{t:e}=Uh("common"),t=ar(R=>R.evsearchResult.loading),n=_R(),r=async()=>await n(Ip()),i=ar(R=>R.evsearchResult.evList.evs),a=ar(R=>R.evsearchResult.evList.count),l=ar(R=>R.evsearchResult.searchOptions.brands),u=ar(R=>R.evsearchResult.searchOptions.bodyTypes),d=ar(R=>R.evsearchResult.searchOptions.colors),f=ar(R=>R.evsearchResult.searchOptions.seatConfiguration),m=ar(R=>R.evsearchResult.search),_=async R=>await n(Bp(R)),h=ar(R=>R.evsearchResult.error);T.useEffect(()=>{t&&(_(m),r())},[]),T.useEffect(()=>{_(m)},[m]);const g=R=>{n(oR(R))},x=R=>{n(aR(R))},w=l.map(R=>({label:R,value:R})),C=R=>{n(iR(R))},y=R=>{n(sR(R))},b=R=>{const Y=R.target.checked;n(lR(Y))},S=R=>{const Y=R.target.checked;n(uR(Y))},P=R=>{const Y=R.target.checked;n(cR(Y))},z=R=>{const Y=R.target.checked;n(dR(Y))},I=R=>{const Y=R.target.checked;n(fR(Y))},D=R=>{const Y=R.target.checked;n(hR(Y))},j=R=>{const Y=R.target.checked;n(pR(Y))},V=R=>{n(mR(R))},U=()=>h?pe(zO,{title:e("api_delegation.data_retrieval_failed"),variant:Ur.Error,forceMobileLayout:!0,children:xt("div",{children:[e("api_delegation.error_message"),": ",h]})}):t?e("evsearch.loading")+"...":i.map((R,Y)=>pe(TR,{title:R.name,subtitle:R.sortValue+" "+R.sortParameter,topContentText:R.infoUri,maxPower:R.maxPowerKw,topSpeedKph:R.topSpeedKph,infoUri:R.infoUri,wltpConsumption:R.wltpConsumption,wltpRange:R.wltpRange,netBattery:R.netBattery},Y));return pe(bR,{children:pe(NO,{children:xt(Pg,{children:[xt("div",{className:Ea.pageContent,children:[pe(Pp,{label:String(e("evsearch.sortorder")),multiple:!1,onChange:g,options:[{label:String(e("evsearch.sortorderbrand")),value:"1"},{label:String(e("evsearch.sortorderrange")),value:"2"},{label:String(e("evsearch.sortordernetsize")),value:"3"},{label:String(e("evsearch.sortordernetsizedesc")),value:"4"},{label:"WLTP forbruk minium spesifikasjon",value:"5"},{label:"Power more > less",value:"6"},{label:"Top speed more >less",value:"7"},{label:"Max DC Charging",value:"8"},{label:"Nominal voltage",value:"9"},{label:"0-100kph",value:"10"}]}),pe(Pp,{label:String(e("evsearch.brandfilter")),multiple:!0,onChange:x,options:w}),pe("br",{}),pe(Bl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:R=>C(R),compact:!0,legend:"Select body type",items:u.map(R=>({label:R,name:R,checked:m.evType===void 0||m.evType.includes(R)}))}),pe("br",{}),pe(F1,{items:[{content:pe(Bl,{"data-testid":"evsearch-seatconfig",variant:Ri.Horizontal,onChange:R=>y(R),compact:!0,legend:"Number of seats",items:f.map(R=>({label:R,name:R,checked:m.seatConfiguration===void 0||m.seatConfiguration.includes(R)}))}),name:"Seats"},{content:xt(Pg,{children:[pe(ur,{checked:m.allWheelDrive,label:"All wheel drive",onChange:b,compact:!0}),pe("br",{}),pe(ur,{checked:m.adaptiveSuspension,label:"Adaptive Suspension",onChange:P,compact:!0})]}),name:"Drivetrain"},{content:pe(ur,{checked:m.nightVision,label:"Nightvision",onChange:S,compact:!0}),name:"Driver Assistance"},{content:pe(Bl,{"data-testid":"evsearch-evtype",variant:Ri.Horizontal,onChange:R=>V(R),compact:!0,legend:"Select paint color",items:d.map(R=>({label:R,name:R,checked:m.colors===void 0||m.colors.includes(R)}))}),name:"Exterior"},{content:xt("div",{children:[pe(ur,{checked:m.headUpDisplay,label:"Head Up Display",onChange:I,compact:!0}),pe("br",{}),pe(ur,{checked:m.instrumentCluster,label:"Dedicated Instrument Cluster",onChange:z,compact:!0}),pe("br",{}),pe(ur,{checked:m.androidAuto,label:"Android Auto Support",onChange:j,compact:!0}),pe("br",{}),pe(ur,{checked:m.appleCarPlay,label:"Apple Car Play Support",onChange:D,compact:!0})]}),name:"UI & Interface"}]}),pe("br",{})]}),pe("div",{className:Ea.pageContentAccordionsContainer,children:xt("div",{className:Ea.apiAccordions,children:[xt("h4",{className:Ea.resultInfo,children:[a," ",e("evsearch.searchresult"),":"]}),pe("div",{className:Ea.accordionScrollContainer,children:U()})]})})]})})})},AR=EC([{path:"/",errorElement:pe(Dd,{})},{path:"evsearch",element:pe(Ry,{}),errorElement:pe(Dd,{})},{path:"nb/evsearch",element:pe(Ry,{}),errorElement:pe(Dd,{})}],{basename:"/"}),NR={backendApiUrl:new URL(window.location.href).origin+"/api/",defaultLocale:"no_nb"},jl={backendApiUrl:{}.VITE_BACKEND_API_URL,defaultLocale:{}.VITE_DEFAULT_LOCALE};for(const e in jl)jl[e]===void 0&&delete jl[e];const BR={...NR,...jl};function IR(e){return BR[e]}const MR=({children:e})=>{const{i18n:t}=Uh("common"),n=window.location.href;let r="en";n.includes("nb/")&&(r="no_nb");const a=`/public/localizations/${r}.json`,l=new URL(a,import.meta.url).href;return SE("Localizations",async()=>{const d=await(await fetch(l)).json();At.addResourceBundle(t.language,"common",d)},{staleTime:1/0,suspense:!0}),pe(_k,{children:e})};var Mu={},DR={get exports(){return Mu},set exports(e){Mu=e}};(function(e,t){(function(n,r){r(t)})(ui,function(n){function r(O,B){O.super_=B,O.prototype=Object.create(B.prototype,{constructor:{value:O,enumerable:!1,writable:!0,configurable:!0}})}function i(O,B){Object.defineProperty(this,"kind",{value:O,enumerable:!0}),B&&B.length&&Object.defineProperty(this,"path",{value:B,enumerable:!0})}function a(O,B,A){a.super_.call(this,"E",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0}),Object.defineProperty(this,"rhs",{value:A,enumerable:!0})}function l(O,B){l.super_.call(this,"N",O),Object.defineProperty(this,"rhs",{value:B,enumerable:!0})}function u(O,B){u.super_.call(this,"D",O),Object.defineProperty(this,"lhs",{value:B,enumerable:!0})}function d(O,B,A){d.super_.call(this,"A",O),Object.defineProperty(this,"index",{value:B,enumerable:!0}),Object.defineProperty(this,"item",{value:A,enumerable:!0})}function f(O,B,A){var Q=O.slice((A||B)+1||O.length);return O.length=B<0?O.length+B:B,O.push.apply(O,Q),O}function m(O){var B=typeof O>"u"?"undefined":de(O);return B!=="object"?B:O===Math?"math":O===null?"null":Array.isArray(O)?"array":Object.prototype.toString.call(O)==="[object Date]"?"date":typeof O.toString=="function"&&/^\/.*\//.test(O.toString())?"regexp":"object"}function _(O,B,A,Q,te,$,ne){te=te||[],ne=ne||[];var se=te.slice(0);if(typeof $<"u"){if(Q){if(typeof Q=="function"&&Q(se,$))return;if((typeof Q>"u"?"undefined":de(Q))==="object"){if(Q.prefilter&&Q.prefilter(se,$))return;if(Q.normalize){var Ue=Q.normalize(se,$,O,B);Ue&&(O=Ue[0],B=Ue[1])}}}se.push($)}m(O)==="regexp"&&m(B)==="regexp"&&(O=O.toString(),B=B.toString());var We=typeof O>"u"?"undefined":de(O),Re=typeof B>"u"?"undefined":de(B),Ee=We!=="undefined"||ne&&ne[ne.length-1].lhs&&ne[ne.length-1].lhs.hasOwnProperty($),qe=Re!=="undefined"||ne&&ne[ne.length-1].rhs&&ne[ne.length-1].rhs.hasOwnProperty($);if(!Ee&&qe)A(new l(se,B));else if(!qe&&Ee)A(new u(se,O));else if(m(O)!==m(B))A(new a(se,O,B));else if(m(O)==="date"&&O-B!==0)A(new a(se,O,B));else if(We==="object"&&O!==null&&B!==null)if(ne.filter(function(Ne){return Ne.lhs===O}).length)O!==B&&A(new a(se,O,B));else{if(ne.push({lhs:O,rhs:B}),Array.isArray(O)){var Te;for(O.length,Te=0;Te<O.length;Te++)Te>=B.length?A(new d(se,Te,new u(void 0,O[Te]))):_(O[Te],B[Te],A,Q,se,Te,ne);for(;Te<B.length;)A(new d(se,Te,new l(void 0,B[Te++])))}else{var Kt=Object.keys(O),Ut=Object.keys(B);Kt.forEach(function(Ne,Ct){var Bn=Ut.indexOf(Ne);Bn>=0?(_(O[Ne],B[Ne],A,Q,se,Ne,ne),Ut=f(Ut,Bn)):_(O[Ne],void 0,A,Q,se,Ne,ne)}),Ut.forEach(function(Ne){_(void 0,B[Ne],A,Q,se,Ne,ne)})}ne.length=ne.length-1}else O!==B&&(We==="number"&&isNaN(O)&&isNaN(B)||A(new a(se,O,B)))}function h(O,B,A,Q){return Q=Q||[],_(O,B,function(te){te&&Q.push(te)},A),Q.length?Q:void 0}function g(O,B,A){if(A.path&&A.path.length){var Q,te=O[B],$=A.path.length-1;for(Q=0;Q<$;Q++)te=te[A.path[Q]];switch(A.kind){case"A":g(te[A.path[Q]],A.index,A.item);break;case"D":delete te[A.path[Q]];break;case"E":case"N":te[A.path[Q]]=A.rhs}}else switch(A.kind){case"A":g(O[B],A.index,A.item);break;case"D":O=f(O,B);break;case"E":case"N":O[B]=A.rhs}return O}function x(O,B,A){if(O&&B&&A&&A.kind){for(var Q=O,te=-1,$=A.path?A.path.length-1:0;++te<$;)typeof Q[A.path[te]]>"u"&&(Q[A.path[te]]=typeof A.path[te]=="number"?[]:{}),Q=Q[A.path[te]];switch(A.kind){case"A":g(A.path?Q[A.path[te]]:Q,A.index,A.item);break;case"D":delete Q[A.path[te]];break;case"E":case"N":Q[A.path[te]]=A.rhs}}}function w(O,B,A){if(A.path&&A.path.length){var Q,te=O[B],$=A.path.length-1;for(Q=0;Q<$;Q++)te=te[A.path[Q]];switch(A.kind){case"A":w(te[A.path[Q]],A.index,A.item);break;case"D":te[A.path[Q]]=A.lhs;break;case"E":te[A.path[Q]]=A.lhs;break;case"N":delete te[A.path[Q]]}}else switch(A.kind){case"A":w(O[B],A.index,A.item);break;case"D":O[B]=A.lhs;break;case"E":O[B]=A.lhs;break;case"N":O=f(O,B)}return O}function C(O,B,A){if(O&&B&&A&&A.kind){var Q,te,$=O;for(te=A.path.length-1,Q=0;Q<te;Q++)typeof $[A.path[Q]]>"u"&&($[A.path[Q]]={}),$=$[A.path[Q]];switch(A.kind){case"A":w($[A.path[Q]],A.index,A.item);break;case"D":$[A.path[Q]]=A.lhs;break;case"E":$[A.path[Q]]=A.lhs;break;case"N":delete $[A.path[Q]]}}}function y(O,B,A){if(O&&B){var Q=function(te){A&&!A(O,B,te)||x(O,B,te)};_(O,B,Q)}}function b(O){return"color: "+M[O].color+"; font-weight: bold"}function S(O){var B=O.kind,A=O.path,Q=O.lhs,te=O.rhs,$=O.index,ne=O.item;switch(B){case"E":return[A.join("."),Q,"→",te];case"N":return[A.join("."),te];case"D":return[A.join(".")];case"A":return[A.join(".")+"["+$+"]",ne];default:return[]}}function P(O,B,A,Q){var te=h(O,B);try{Q?A.groupCollapsed("diff"):A.group("diff")}catch{A.log("diff")}te?te.forEach(function($){var ne=$.kind,se=S($);A.log.apply(A,["%c "+M[ne].text,b(ne)].concat(ee(se)))}):A.log("—— no diff ——");try{A.groupEnd()}catch{A.log("—— diff end —— ")}}function z(O,B,A,Q){switch(typeof O>"u"?"undefined":de(O)){case"object":return typeof O[Q]=="function"?O[Q].apply(O,ee(A)):O[Q];case"function":return O(B);default:return O}}function I(O){var B=O.timestamp,A=O.duration;return function(Q,te,$){var ne=["action"];return ne.push("%c"+String(Q.type)),B&&ne.push("%c@ "+te),A&&ne.push("%c(in "+$.toFixed(2)+" ms)"),ne.join(" ")}}function D(O,B){var A=B.logger,Q=B.actionTransformer,te=B.titleFormatter,$=te===void 0?I(B):te,ne=B.collapsed,se=B.colors,Ue=B.level,We=B.diff,Re=typeof B.titleFormatter>"u";O.forEach(function(Ee,qe){var Te=Ee.started,Kt=Ee.startedTime,Ut=Ee.action,Ne=Ee.prevState,Ct=Ee.error,Bn=Ee.took,$t=Ee.nextState,Jn=O[qe+1];Jn&&($t=Jn.prevState,Bn=Jn.started-Te);var Nt=Q(Ut),Sr=typeof ne=="function"?ne(function(){return $t},Ut,Ee):ne,W=_e(Kt),H=se.title?"color: "+se.title(Nt)+";":"",G=["color: gray; font-weight: lighter;"];G.push(H),B.timestamp&&G.push("color: gray; font-weight: lighter;"),B.duration&&G.push("color: gray; font-weight: lighter;");var le=$(Nt,W,Bn);try{Sr?se.title&&Re?A.groupCollapsed.apply(A,["%c "+le].concat(G)):A.groupCollapsed(le):se.title&&Re?A.group.apply(A,["%c "+le].concat(G)):A.group(le)}catch{A.log(le)}var ie=z(Ue,Nt,[Ne],"prevState"),ve=z(Ue,Nt,[Nt],"action"),he=z(Ue,Nt,[Ct,Ne],"error"),ye=z(Ue,Nt,[$t],"nextState");if(ie)if(se.prevState){var me="color: "+se.prevState(Ne)+"; font-weight: bold";A[ie]("%c prev state",me,Ne)}else A[ie]("prev state",Ne);if(ve)if(se.action){var it="color: "+se.action(Nt)+"; font-weight: bold";A[ve]("%c action    ",it,Nt)}else A[ve]("action    ",Nt);if(Ct&&he)if(se.error){var xe="color: "+se.error(Ct,Ne)+"; font-weight: bold;";A[he]("%c error     ",xe,Ct)}else A[he]("error     ",Ct);if(ye)if(se.nextState){var je="color: "+se.nextState($t)+"; font-weight: bold";A[ye]("%c next state",je,$t)}else A[ye]("next state",$t);We&&P(Ne,$t,A,Sr);try{A.groupEnd()}catch{A.log("—— log end ——")}})}function j(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=Object.assign({},oe,O),A=B.logger,Q=B.stateTransformer,te=B.errorTransformer,$=B.predicate,ne=B.logErrors,se=B.diffPredicate;if(typeof A>"u")return function(){return function(We){return function(Re){return We(Re)}}};if(O.getState&&O.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(We){return function(Re){return We(Re)}}};var Ue=[];return function(We){var Re=We.getState;return function(Ee){return function(qe){if(typeof $=="function"&&!$(Re,qe))return Ee(qe);var Te={};Ue.push(Te),Te.started=re.now(),Te.startedTime=new Date,Te.prevState=Q(Re()),Te.action=qe;var Kt=void 0;if(ne)try{Kt=Ee(qe)}catch(Ne){Te.error=te(Ne)}else Kt=Ee(qe);Te.took=re.now()-Te.started,Te.nextState=Q(Re());var Ut=B.diff&&typeof se=="function"?se(Re,qe):B.diff;if(D(Ue,Object.assign({},B,{diff:Ut})),Ue.length=0,Te.error)throw Te.error;return Kt}}}}var V,U,R=function(O,B){return new Array(B+1).join(O)},Y=function(O,B){return R("0",B-O.toString().length)+O},_e=function(O){return Y(O.getHours(),2)+":"+Y(O.getMinutes(),2)+":"+Y(O.getSeconds(),2)+"."+Y(O.getMilliseconds(),3)},re=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},ee=function(O){if(Array.isArray(O)){for(var B=0,A=Array(O.length);B<O.length;B++)A[B]=O[B];return A}return Array.from(O)},ue=[];V=(typeof ui>"u"?"undefined":de(ui))==="object"&&ui?ui:typeof window<"u"?window:{},U=V.DeepDiff,U&&ue.push(function(){typeof U<"u"&&V.DeepDiff===h&&(V.DeepDiff=U,U=void 0)}),r(a,i),r(l,i),r(u,i),r(d,i),Object.defineProperties(h,{diff:{value:h,enumerable:!0},observableDiff:{value:_,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:x,enumerable:!0},revertChange:{value:C,enumerable:!0},isConflict:{value:function(){return typeof U<"u"},enumerable:!0},noConflict:{value:function(){return ue&&(ue.forEach(function(O){O()}),ue=null),h},enumerable:!0}});var M={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},oe={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(O){return O},actionTransformer:function(O){return O},errorTransformer:function(O){return O},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},K=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},B=O.dispatch,A=O.getState;return typeof B=="function"||typeof A=="function"?j()({dispatch:B,getState:A}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=oe,n.createLogger=j,n.logger=K,n.default=K,Object.defineProperty(n,"__esModule",{value:!0})})})(DR,Mu);Mu.createLogger();const FR=Hz({reducer:{evsearchResult:rR}}),jR=e=>{if(e==="no_nb")return"no_nb";if(e==="en")return"en";if(e==="no_nn")return"no_nn"};tO($C).init({lng:jR("no_nb"),fallbackLng:IR("defaultLocale"),ns:["common"],defaultNS:"common",returnNull:!1},()=>{const e=new fE({defaultOptions:void 0});$0(document.getElementById("root")).render(pe(T.StrictMode,{children:pe(cP,{store:FR,children:pe(gE,{client:e,children:pe(MR,{children:pe(kC,{router:AR})})})})}))});
