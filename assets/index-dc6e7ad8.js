var Ii=Object.freeze,cu=Object.defineProperty;var Mi=(e,t)=>Ii(cu(e,"raw",{value:Ii(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const uu=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function qe(e,t){return e?uu.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function ne(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function du(e){return ne(e).map(t=>e[t])}function to(e){return ne(e).map(t=>[t,e[t]])}function fu(e){return Object.fromEntries(e)}function Ho(e,t){return e.filter((n,r)=>!t.includes(r))}function hu(e,t){return e.includes(t)}function yt(e){return!!e}function Ms(e,t){return e.match(t)??[]}function mu(e){return e.replace(/,/g,"")}function pu(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const gu={capitalizeFirstLetter:!1};function vu(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function wu(e,t){return t.capitalizeFirstLetter?vu(e):e}function yu(e,t=gu){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,o=>{const i=o[1];return i?i.toUpperCase():""});return wu(r,t)}var Dt;(function(e){e.Upper="upper",e.Lower="lower"})(Dt||(Dt={}));function bu(e){return e.toLowerCase()!==e.toUpperCase()}function Li(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!bu(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===Dt.Upper&&o!==o.toUpperCase())return!1;if(t===Dt.Lower&&o!==o.toLowerCase())return!1}return!0}function no(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=Li(a,Dt.Lower,{blockNoCaseCharacters:!0})||Li(s,Dt.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function dn(e,t){return e.split(t)}const ku=String(NaN);function Ls(e){if(typeof e=="string"&&isNaN(Number(e)))return ku;const t=Number(e),n=t<0,r=String(Math.abs(t)),[o,i]=r.split("."),a=i?`.${i}`:"",l=Ms(o.split("").reverse().join(""),/.{1,3}/g).reverse().map(u=>u.split("").reverse().join("")).join(",");return[n?"-":"",l,a].join("")}function $u(e){return typeof e=="number"?e:Number(typeof e=="string"?mu(e):e)}function xu(e){return String(e).includes("e")}function ro(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}function ft({value:e,min:t,max:n}){return Math.min(Math.max(e,t),n)}var Ni;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Ni||(Ni={}));function Tu(e){return!!(qe(e,"then")&&typeof e.then=="function")}class Su extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),Object.defineProperty(this,"durationMs",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"message",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PromiseTimeoutError"})}}function Eu(e,t){return new Promise(async(n,r)=>{const o=e===1/0?void 0:setTimeout(()=>{r(new Su(e))},e);try{const i=await t;n(i)}catch(i){r(i)}finally{clearTimeout(o)}})}function Au(e){return e?e.map(bt).filter(yt).join(`
`):""}function bt(e){return e?e instanceof Error?e.message:qe(e,"message")?String(e.message):String(e):""}function kt(e){return e instanceof Error?e:new Error(bt(e))}function Cu(e,t){const n=kt(e);return n.message=`${t}: ${n.message}`,n}function Ns(e){try{const t=e.callback();return t instanceof Promise?t.catch(n=>e.catchCallback?e.catchCallback(n):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}var Oi;(function(e){e.Upper="upper",e.Lower="lower"})(Oi||(Oi={}));var Pi;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Pi||(Pi={}));class Iu extends Error{constructor(){super(...arguments),this.name="AssertionError"}}function qi(e){return e instanceof Promise}function oo(e){return Array.isArray(e)?"array":typeof e}function ie(e,t){return oo(e)===t}function Mu(e,t){if(e==null)throw new Iu(t||"defined assertion failed")}function Me(e){return!!e&&typeof e=="object"}function Ro(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function Di({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const Bi="Failed to compare objects using JSON.stringify";function _i(e,t,n){return Di({source:e,errorHandler(r){if(n)return"";throw r}})===Di({source:t,errorHandler(r){if(n)return"";throw r}})}function Fo(e,t,n={}){try{return e===t?!0:Me(e)&&Me(t)?_i(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(o=>Fo(e[o],t[o])):!1:_i(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const o=kt(r);throw o.message.startsWith(Bi)||(o.message=`${Bi}: ${o.message}`),o}}function Os(e,t){return ne(e).filter(r=>{const o=e[r];return t(r,o,e)}).reduce((r,o)=>(r[o]=e[o],r),{})}function Lu(e,t){return Os(e,n=>!t.includes(n))}function Ps(e,t){return Os(e,n=>t.includes(n))}function ue(e,t){let n=!1;const r=ne(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(ne(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function qs(e,t){try{return Nu(e,t),!0}catch{return!1}}function Nu(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function fn(){let e,t,n=!1;const r=new Promise((o,i)=>{e=a=>(n=!0,o(a)),t=a=>{n=!0,i(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${fn.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function io(e){const t=fn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function Ou(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Pu=Ou();function Vo(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Pu.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}const qu="%",Du="px";function Te(e){return Ds({value:e,suffix:Du})}function kr(e){return Ds({value:e,suffix:qu})}function Ds({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Bu=["k","M","B","T","P","E","Z","Y"];function Wo({beforeDot:e,afterDot:t="",maxLength:n}){if(t.length){const r=n-e.length-1;if(r>0){const o=t.slice(0,r);return Number(o)?[e,o].join("."):e}}return e}function _u(e,t,n){const[r,o]=dn(e,"."),i=Ls(r),a=Ms(i,/,/g).length,s=t[a-1],[l,c]=dn(i,","),u=[c,o].join("");return l.length+1>n?["0.",l[0],t[a]].join(""):[Wo({beforeDot:l,afterDot:u,maxLength:n-1}),s].join("")}const Hi=3;function Hu({input:e,maxLength:t}){const n=String(e),[r,o]=dn(n,"e"),i=o.replace(/^[\-\+]/,""),a=o[0],s=["e",a,i].join(""),[l,c]=dn(r,"."),u=i.length+Hi;return u===t?[l,s].join(""):u>t?a==="-"?"0":String(1/0):[Wo({afterDot:c,beforeDot:l,maxLength:t-i.length+Hi}),s].join("")}function Ru(e,t){const[n,r]=dn(Ls(e),".");if(n.length<=t)return Wo({beforeDot:n,afterDot:r,maxLength:t})}function Fu(e,{customSuffixes:t=Bu,maxLength:n=6}={}){const r=$u(e);if(isNaN(r)||r===1/0)return String(r);if(xu(r))return Hu({input:r,maxLength:n});const o=String(r),i=Ru(o,n);return i??_u(o,t,n)}function Vu(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return oo(e)===oo(t)&&n}const Bs="__vir__shape__definition__key__do__not__use__in__actual__objects";function _s(e){return qe(e,Bs)}const zo=Symbol("and"),Hs=Symbol("instance"),Rs=Symbol("enum"),Fs=Symbol("exact"),Vs=Symbol("indexed-keys"),Zo=Symbol("or"),jo=Symbol("unknown"),Wu=[zo,Rs,Fs,Vs,Hs,Zo,jo],Ws="__vir__shape__specifier__key__do__not__use__in__actual__objects";function zu(...e){return Xo(e,zo)}function Ce(...e){return Xo(e,Zo)}function Zu(e){return Xo([e],jo)}function Uo(e){return $t(e,zo)}function Go(e){return $t(e,Hs)}function Yo(e){return $t(e,Rs)}function Jo(e){return $t(e,Fs)}function Ko(e){return $t(e,Vs)}function cr(e){return $t(e,Zo)}function Qo(e){return $t(e,jo)}function $t(e,t){const n=ur(e);return!!n&&n.specifierType===t}function Xo(e,t){return{[Ws]:!0,specifierType:t,parts:e}}function At(e,t,n){const r=ur(t);if(r){if(Go(r))return e instanceof r.parts[0];if(Uo(r))return r.parts.every(o=>At(e,o));if(cr(r))return r.parts.some(o=>At(e,o));if(Jo(r))return Me(e)?At(e,r.parts[0]):e===r.parts[0];if(Yo(r))return Object.values(r.parts[0]).some(o=>o===e);if(Ko(r))return Me(e)?(n?!0:ne(e).every(i=>At(i,r.parts[0].keys)))&&du(e).every(i=>At(i,r.parts[0].values)):!1;if(Qo(r))return!0}return Vu(e,t)}function ur(e){if(Me(e)&&qe(e,Ws)){if(!qe(e,"parts")||!ie(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!qe(e,"specifierType")||!hu(Wu,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Ri extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ao(e,t=!1){return Rn(e)}function Rn(e){const t=ur(e);if(t)if(Go(t)){const n=t.parts[0];try{return new n}catch(r){throw new Ri(`Failed to create default value for classShape for class '${n.name}': ${bt(r)}`)}}else{if(cr(t)||Jo(t))return Rn(t.parts[0]);if(Uo(t))return t.parts.reduce((n,r)=>Object.assign(n,Rn(r)),{});if(Yo(t))return Object.values(t.parts[0])[0];if(Ko(t))return{};if(Qo(t))return t.parts[0]??{};throw new Ri(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return _s(e)?ao(e.shape):e instanceof RegExp?e:ie(e,"array")?e.map(Rn):Me(e)?ue(e,(n,r)=>ao(r)):e}function Be(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return ao(e)},[Bs]:!0}}class pe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function zs(e,t,n={}){try{return ei(e,t,n),!0}catch{return!1}}function ei(e,t,n={}){Ne({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}function so(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Ne({subject:e,shape:t,keys:n,options:r}){if(Qo(t))return!0;if(_s(t))return Ne({subject:e,shape:t.shape,keys:n,options:r});const o=so(n);if(ur(e))throw new pe(`Shape test subjects cannot be contain shape specifiers but one was found at ${o}.`);if(!At(e,t,!r.ignoreExtraKeys))throw new pe(`Subject does not match shape definition at key ${o}`);if(ie(t,"function"))return ie(e,"function");if(Go(t))return e instanceof t.parts[0];if(Me(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(u=>[u,!1])),l=[];let c=!1;if(cr(t)){const u=[];c=t.parts.some(f=>{try{const m=Ne({subject:e,shape:f,keys:n,options:{...r}});return Object.assign(s,m),!0}catch(m){if(m instanceof pe)return u.push(m),!1;throw m}}),!c&&qs(u,1)&&l.push(u[0])}else if(Uo(t))c=t.parts.every(u=>{try{const f=Ne({subject:e,shape:u,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(s,f),!0}catch(f){if(f instanceof pe)return l.push(f),!1;throw f}});else if(Jo(t)){const u=Ne({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(s,u),c=!0}else{if(Yo(t))throw new pe(`Cannot compare an enum specifier to an object at ${o}`);if(ie(t,"array")&&ie(a,"array"))c=a.every((u,f)=>{const m=t.some(p=>{try{return Ne({subject:u,shape:p,keys:[...n,f],options:r}),!0}catch(g){if(g instanceof pe)return l.push(g),!1;throw g}});return s[f]=m,m});else if(Ko(t)){const u=ue(e,(f,m)=>(r.ignoreExtraKeys||Ne({shape:t.parts[0].keys,subject:f,keys:[...n,f],options:r}),Ne({shape:t.parts[0].values,subject:m,keys:[...n,f],options:r}),!0));Object.assign(s,u),c=!0}else{const u=ju({keys:n,options:r,shape:t,subject:e});Object.assign(s,u),c=!0}}if(l.length)throw new pe(Au(l));if(!c){const f=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>so([...n,m])).join(",")}`;throw new pe(f)}return r.ignoreExtraKeys||Object.entries(s).forEach(([u,f])=>{if(!f)throw new pe(`subject as extra key '${u}' in ${o}.`)}),s}else if(r.exactValues)return e===t;return!0}function ju({keys:e,options:t,shape:n,subject:r}){const o=so(e),i={};if(Me(n)){const a=new Set(ne(r)),s=new Set(ne(n));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new pe(`Subject has extra key '${String(l)}' in ${o}`)}),s.forEach(l=>{var m;const c=n[l],u=cr(c)?c.parts.includes(void 0):!1,f=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!u&&!f)throw new pe(`Subject missing key '${String(l)}' in ${o}`)}),a.forEach(l=>{const c=r[l];if(t.ignoreExtraKeys&&!s.has(l))return;const u=n[l];Ne({subject:c,shape:u,keys:[...e,l],options:t}),i[l]=!0})}else throw new pe(`shape definition at ${o} was not an object.`);return i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fn=globalThis,ti=Fn.ShadowRoot&&(Fn.ShadyCSS===void 0||Fn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ni=Symbol(),Fi=new WeakMap;let Zs=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ni)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(ti&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Fi.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fi.set(n,t))}return t}toString(){return this.cssText}};const S=e=>new Zs(typeof e=="string"?e:e+"",void 0,ni),Vn=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Zs(n,e,ni)},Uu=(e,t)=>{if(ti)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=Fn.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Vi=ti?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return S(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gu,defineProperty:Yu,getOwnPropertyDescriptor:Ju,getOwnPropertyNames:Ku,getOwnPropertySymbols:Qu,getPrototypeOf:Xu}=Object,Ke=globalThis,Wi=Ke.trustedTypes,ed=Wi?Wi.emptyScript:"",$r=Ke.reactiveElementPolyfillSupport,on=(e,t)=>e,Gn={toAttribute(e,t){switch(t){case Boolean:e=e?ed:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ri=(e,t)=>!Gu(e,t),zi={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:ri};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ke.litPropertyMetadata??(Ke.litPropertyMetadata=new WeakMap);let Ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=zi){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Yu(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Ju(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return o==null?void 0:o.call(this)},set(a){const s=o==null?void 0:o.call(this);i.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zi}static _$Ei(){if(this.hasOwnProperty(on("elementProperties")))return;const t=Xu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(on("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(on("properties"))){const n=this.properties,r=[...Ku(n),...Qu(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Vi(o))}else t!==void 0&&n.push(Vi(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Uu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Gn).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,n){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=r.getPropertyOptions(o),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Gn;this._$Em=o,this[o]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??ri)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[on("elementProperties")]=new Map,Ct[on("finalized")]=new Map,$r==null||$r({ReactiveElement:Ct}),(Ke.reactiveElementVersions??(Ke.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const an=globalThis,Yn=an.trustedTypes,Zi=Yn?Yn.createPolicy("lit-html",{createHTML:e=>e}):void 0,oi="$lit$",Oe=`lit$${(Math.random()+"").slice(9)}$`,ii="?"+Oe,td=`<${ii}>`,gt=document,hn=()=>gt.createComment(""),mn=e=>e===null||typeof e!="object"&&typeof e!="function",js=Array.isArray,Us=e=>js(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",xr=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ji=/-->/g,Ui=/>/g,ot=RegExp(`>|${xr}(?:([^\\s"'>=/]+)(${xr}*=${xr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gi=/'/g,Yi=/"/g,Gs=/^(?:script|style|textarea|title)$/i,Ys=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),nd=Ys(1),rd=Ys(2),de=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Ji=new WeakMap,ut=gt.createTreeWalker(gt,129);function Js(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zi!==void 0?Zi.createHTML(t):t}const Ks=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",a=Yt;for(let s=0;s<n;s++){const l=e[s];let c,u,f=-1,m=0;for(;m<l.length&&(a.lastIndex=m,u=a.exec(l),u!==null);)m=a.lastIndex,a===Yt?u[1]==="!--"?a=ji:u[1]!==void 0?a=Ui:u[2]!==void 0?(Gs.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=ot):u[3]!==void 0&&(a=ot):a===ot?u[0]===">"?(a=o??Yt,f=-1):u[1]===void 0?f=-2:(f=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?ot:u[3]==='"'?Yi:Gi):a===Yi||a===Gi?a=ot:a===ji||a===Ui?a=Yt:(a=ot,o=void 0);const p=a===ot&&e[s+1].startsWith("/>")?" ":"";i+=a===Yt?l+td:f>=0?(r.push(c),l.slice(0,f)+oi+l.slice(f)+Oe+p):l+Oe+(f===-2?s:p)}return[Js(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class pn{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,a=0;const s=t.length-1,l=this.parts,[c,u]=Ks(t,n);if(this.el=pn.createElement(c,r),ut.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=ut.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(oi)){const m=u[a++],p=o.getAttribute(f).split(Oe),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:i,name:g[2],strings:p,ctor:g[1]==="."?Xs:g[1]==="?"?el:g[1]==="@"?tl:$n}),o.removeAttribute(f)}else f.startsWith(Oe)&&(l.push({type:6,index:i}),o.removeAttribute(f));if(Gs.test(o.tagName)){const f=o.textContent.split(Oe),m=f.length-1;if(m>0){o.textContent=Yn?Yn.emptyScript:"";for(let p=0;p<m;p++)o.append(f[p],hn()),ut.nextNode(),l.push({type:2,index:++i});o.append(f[m],hn())}}}else if(o.nodeType===8)if(o.data===ii)l.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(Oe,f+1))!==-1;)l.push({type:7,index:i}),f+=Oe.length-1}i++}}static createElement(t,n){const r=gt.createElement("template");return r.innerHTML=t,r}}function vt(e,t,n=e,r){var a,s;if(t===de)return t;let o=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const i=mn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=o:n._$Cl=o),o!==void 0&&(t=vt(e,o._$AS(e,t.values),o,r)),t}class Qs{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??gt).importNode(n,!0);ut.currentNode=o;let i=ut.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Rt(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new nl(i,this,t)),this._$AV.push(c),l=r[++s]}a!==(l==null?void 0:l.index)&&(i=ut.nextNode(),a++)}return ut.currentNode=gt,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Rt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=vt(this,t,n),mn(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==de&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Us(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Z&&mn(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=pn.createElement(Js(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const a=new Qs(o,this),s=a.u(this.options);a.p(n),this.T(s),this._$AH=a}}_$AC(t){let n=Ji.get(t.strings);return n===void 0&&Ji.set(t.strings,n=new pn(t)),n}k(t){js(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Rt(this.S(hn()),this.S(hn()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class $n{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(t,n=this,r,o){const i=this.strings;let a=!1;if(i===void 0)t=vt(this,t,n,0),a=!mn(t)||t!==this._$AH&&t!==de,a&&(this._$AH=t);else{const s=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=vt(this,s[r+l],n,l),c===de&&(c=this._$AH[l]),a||(a=!mn(c)||c!==this._$AH[l]),c===Z?t=Z:t!==Z&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xs extends $n{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class el extends $n{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class tl extends $n{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=vt(this,t,n,0)??Z)===de)return;const r=this._$AH,o=t===Z&&r!==Z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Z&&(r===Z||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class nl{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){vt(this,t)}}const od={P:oi,A:Oe,C:ii,M:1,L:Ks,R:Qs,D:Us,V:vt,I:Rt,H:$n,N:el,U:tl,B:Xs,F:nl},Tr=an.litHtmlPolyfillSupport;Tr==null||Tr(pn,Rt),(an.litHtmlVersions??(an.litHtmlVersions=[])).push("3.1.2");const id=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(n==null?void 0:n.renderBefore)??null;r._$litPart$=o=new Rt(t.insertBefore(hn(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let sn=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=id(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return de}};var Cs;sn._$litElement$=!0,sn.finalized=!0,(Cs=globalThis.litElementHydrateSupport)==null||Cs.call(globalThis,{LitElement:sn});const Sr=globalThis.litElementPolyfillSupport;Sr==null||Sr({LitElement:sn});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ad}=od,Ki=()=>document.createComment(""),Jt=(e,t,n)=>{var i;const r=e._$AA.parentNode,o=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=r.insertBefore(Ki(),o),s=r.insertBefore(Ki(),o);n=new ad(a,s,e,e.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let c;(i=n._$AQ)==null||i.call(n,e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==s._$AU&&n._$AP(c)}if(a!==o||l){let c=n._$AA;for(;c!==a;){const u=c.nextSibling;r.insertBefore(c,o),c=u}}}return n},it=(e,t,n=e)=>(e._$AI(t,n),e),sd={},ld=(e,t=sd)=>e._$AH=t,cd=e=>e._$AH,Er=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=e=>(...t)=>({_$litDirective$:e,values:t});class _e{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ud={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:ri},dd=(e=ud,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function fd(e){return(t,n)=>typeof n=="object"?dd(e,t,n):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=Xe(class extends _e{constructor(e){var t;if(super(e),e.type!==xn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((r=this.nt)!=null&&r.has(i))&&this.st.add(i);return this.render(t)}const n=e.element.classList;for(const i of this.st)i in t||(n.remove(i),this.st.delete(i));for(const i in t){const a=!!t[i];a===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(a?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return de}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=e=>e??Z;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lo extends _e{constructor(t){if(super(t),this.it=Z,t.type!==xn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Z||t==null)return this._t=void 0,this.it=t;if(t===de)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}lo.directiveName="unsafeHTML",lo.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xi extends lo{}Xi.directiveName="unsafeSVG",Xi.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function hd(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},md=Xe(class extends _e{constructor(e){if(super(e),e.type!==xn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const o=[],i=[];let a=0;for(const s of e)o[a]=r?r(s,a):a,i[a]=n(s,a),a++;return{values:i,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const o=cd(e),{values:i,keys:a}=this.dt(t,n,r);if(!Array.isArray(o))return this.ut=a,i;const s=this.ut??(this.ut=[]),l=[];let c,u,f=0,m=o.length-1,p=0,g=i.length-1;for(;f<=m&&p<=g;)if(o[f]===null)f++;else if(o[m]===null)m--;else if(s[f]===a[p])l[p]=it(o[f],i[p]),f++,p++;else if(s[m]===a[g])l[g]=it(o[m],i[g]),m--,g--;else if(s[f]===a[g])l[g]=it(o[f],i[g]),Jt(e,l[g+1],o[f]),f++,g--;else if(s[m]===a[p])l[p]=it(o[m],i[p]),Jt(e,o[f],o[m]),m--,p++;else if(c===void 0&&(c=ea(a,p,g),u=ea(s,f,m)),c.has(s[f]))if(c.has(s[m])){const y=u.get(a[p]),x=y!==void 0?o[y]:null;if(x===null){const $=Jt(e,o[f]);it($,i[p]),l[p]=$}else l[p]=it(x,i[p]),Jt(e,o[f],x),o[y]=null;p++}else Er(o[m]),m--;else Er(o[f]),f++;for(;p<=g;){const y=Jt(e,l[g+1]);it(y,i[p]),l[p++]=y}for(;f<=m;){const y=o[f++];y!==null&&Er(y)}return this.ut=a,ld(e,l),de}}),pd=md;class rl extends sn{}var Bt;(function(e){e.Upper="upper",e.Lower="lower"})(Bt||(Bt={}));function gd(e){return e.toLowerCase()!==e.toUpperCase()}function ta(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const o=e[r]||"";if(!gd(o)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===Bt.Upper&&o!==o.toUpperCase())return!1;if(t===Bt.Lower&&o!==o.toLowerCase())return!1}return!0}function vd(e){return e.split("").reduce((n,r,o,i)=>{const a=o>0&&i[o-1]||"",s=o<i.length-1&&i[o+1]||"",l=ta(a,Bt.Lower,{blockNoCaseCharacters:!0})||ta(s,Bt.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||o===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}var na;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(na||(na={}));function wd(e){return!!e&&typeof e=="object"}function ra(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function yd(e,t){let n=!1;const r=ra(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(ra(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function He(e){if(wd(e))return yd(e,(n,r)=>{if(!ie(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(vd(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const i=r,a=n.startsWith("--")?S(n):n.startsWith("-")?Vn`-${S(n)}`:Vn`--${S(n)}`;return{name:a,value:Vn`var(${a}, ${S(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${He.name}' function.`)}function co({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function bd(e,t,n){const r=!t.length&&!n.length,o=e.length?!1:!t.filter(s=>!!s.index).length;if(r||o)return[...e];const i=e.map(s=>[s]);return i.length||(i[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(i[s]=[])}),t.forEach(s=>{const l=i[s.index];l&&l.splice(0,0,...s.values)}),i.flat()}function Wn(e){return qe(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function ai(e){return qe(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function ol(e){return e.map(t=>Wn(t)?t.definition:t).filter(t=>ai(t))}const il=new WeakMap;function kd(e,t){var o;const n=ol(t);return(o=al(il,[e,...n]).value)==null?void 0:o.template}function $d(e,t,n){const r=ol(t);return ll(il,[e,...r],n)}function al(e,t,n=0){const{currentTemplateAndNested:r,reason:o}=sl(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?al(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:o}}function sl(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const o=e.get(r);return o==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:o,reason:"key and value exists"}}function ll(e,t,n,r=0){const{currentTemplateAndNested:o,currentKey:i,reason:a}=sl(e,t,r);if(!i)return{result:!1,reason:a};const s=o??{nested:void 0,template:void 0};if(o||e.set(i,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),ll(l,t,n,r+1)}const xd=new WeakMap;function cl(e,t,n){const r=kd(e,t),o=r??n();if(!r){const s=$d(e,t,o);if(s.result)xd.set(e,o);else throw new Error(`Failed to set template transform: ${s.reason}`)}const i=o.valuesTransform(t),a=bd(t,i.valueInsertions,i.valueIndexDeletions);return{strings:o.templateStrings,values:a}}function ul(e,t,n,r){const o=[],i=[],a=[],s=[];return e.forEach((c,u)=>{const f=o.length-1,m=o[f],p=u-1,g=t[p];r&&r(c);let y,x=[];if(typeof m=="string"&&(y=n(m,c,g),y)){o[f]=m+y.replacement,a.push(p);const C=y.getExtraValues;x=C?C(g):[],x.length&&C?(o[f]+=" ",x.forEach((z,X)=>{X&&o.push(" ")}),s.push(z=>{const X=z[p],be=C(X);return{index:p,values:be}}),o.push(c)):o[f]+=c}y||o.push(c);const $=e.raw[u];y?(i[f]=i[f]+y.replacement+$,x.length&&x.forEach(()=>{i.push("")})):i.push($)}),{templateStrings:Object.assign([],o,{raw:i}),valuesTransform(c){const u=s.map(f=>f(c)).flat();return{valueIndexDeletions:a,valueInsertions:u}}}}function Td(...[e,t,n]){if(ai(n))return{replacement:n.tagName,getExtraValues:void 0}}function Sd(e,t){return ul(e,t,Td)}function v(e,...t){const n=cl(e,t,()=>Sd(e,t));return Vn(n.strings,...n.values)}const Ed={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function dl(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof rl?!0:dl(n)}function fl(e,t){const n=e.instanceState;ne(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ne(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),Ad(e)}function Ad(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function oa(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class Cd extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function hl(){return e=>{var t;return t=class extends Cd{constructor(n){super(e,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function q(){return hl()}function Id(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const o=hl()([e,r].join("-"));return n[r]=o,n},{}):{}}const Md="_elementVirStateSetup";function Ld(e){return Me(e)?Md in e:!1}const Nd=Be({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:Zu()});function Ar(e){return zs(e,Nd,{allowExtraKeys:!0})}function ml(e,t){t in e||fd()(e,t)}function Od(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function ia(e,t){const n=e;function r(a){t?Od(a,e,e.tagName):ml(e,a)}function o(a,s){return r(s),n[s]}return new Proxy({},{get:o,set(a,s,l){const c=Ld(l)?l._elementVirStateSetup():l;r(s);const u=n[s];function f(p){a[s]=p,n[s]=p}const m=e.observablePropertyListenerMap[s];if(u!==c&&Ar(u)&&(m!=null&&m.length)&&u.removeListener(m),Ar(c))if(m)c.addListener(m);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[s]=p,c.addListener(p)}else Ar(u)&&(e.observablePropertyListenerMap[s]=void 0);return f(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return o(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function Pd(e){return e?ue(e,t=>t):{}}function qd({hostClassNames:e,cssVars:t}){return{hostClasses:ue(e,(n,r)=>({name:S(r),selector:S(`:host(.${r})`)})),cssVars:t}}function Dd({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:o}){t&&ne(t).forEach(i=>{const a=t[i],s=n[i];typeof a=="function"&&(a({state:r,inputs:o})?e.classList.add(s):e.classList.remove(s))})}function Bd({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function o(a){ne(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:n,slotNames:r,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:o}}function _d(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}var Hd=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function dr(e){var t;const n=e;if(!ie(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!ie(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...Ed,...n.options},o=Id(n.tagName,n.events),i=Pd(n.hostClasses);n.hostClasses&&oa(n.tagName,n.hostClasses),n.cssVars&&oa(n.tagName,n.cssVars);const a=n.cssVars?He(n.cssVars):{},s=_d(n.slotNames),l=typeof n.styles=="function"?n.styles(qd({hostClassNames:i,cssVars:a})):n.styles||v``,c=n.renderCallback;function u(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:m}}const f=(t=class extends rl{createRenderParams(){return Bd({element:this,eventsMap:o,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{dl(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${dr.name}' to define ${n.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const p=c(m);if(p instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Dd({host:m.host,hostClassesInit:n.hostClasses,hostClassNames:i,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},p}catch(m){const p=Cu(m,`Failed to render ${n.tagName}`);return console.error(p),this._lastRenderError=p,bt(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(n.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const m=this.createRenderParams();if(n.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){fl(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ia(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ia(this,!r.allowPolymorphicState)});const m=n.stateInitStatic||{};ne(m).forEach(p=>{ml(this,p),this.instanceState[p]=m[p]}),this.definition=f}},Hd(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:u}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),t);return Object.defineProperties(f,{name:{value:yu(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof f,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,f),f}function pl(){return e=>{const t=e;if(!ie(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return dr({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function Rd(e,t){return e===t}function Fd(e,t=Rd){const n=new Set;function r(){n.forEach(a=>a(i.value))}function o(a){return n.delete(a)}const i={value:e,setValue(a){t(i.value,a)||(i.value=a,r())},addListener(a){return!n.has(a)&&n.add(a),()=>o(a)},removeListener:o,destroy(){n.clear()}};return i}const Cr=Symbol("not set");function Vd(e){let t=Cr,n;const r=e&&"updateCallback"in e?e.updateCallback:void 0;let o=fn();const i=Fd(o.promise);function a(){o=fn(),i.setValue(o.promise)}function s(y){o.resolve(y),i.setValue(y),p.latestResolvedValue=y}function l(y){o.reject(y),i.setValue(y)}function c(y){y!==n&&(n=y,o.isSettled()&&a(),y.then(x=>{n===y&&s(x)}).catch(x=>{if(n===y){o.promise.catch(()=>{});const $=kt(x);console.error($),l($)}}))}function u(y,x){if(!r)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const $={...y},C={...x};if(t===Cr||!Fo($,t,{ignoreNonSerializableProperties:!0})){t=$;const z=r(t,C);c(z)}}function f(y,x){t=Cr,u(y,x)}const m={latestResolvedValue:e&&"defaultValue"in e&&!qi(e.defaultValue)?e.defaultValue:void 0,setNewPromise(y){c(y)},setResolvedValue(y){y!==i.value&&(o.isSettled()&&a(),o.resolve(y),s(y))},updateTrigger:r?u:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:r?f:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}},p=Object.assign(i,m),g=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return g instanceof Promise?c(g):s(g),qi(g)?c(g):s(g),p}function si(...e){return{_elementVirStateSetup(){return Vd(...e)}}}function li(e,t){return gn(e,t),e.element}function Wd(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function gn(e,t){const n=Wd(e),r=n?`: in ${n}`:"";if(e.type!==xn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function zd(e){const t=Xe(class extends _e{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=li(n,e)}render(n){return this.element.setAttribute(e,n),de}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function gl(e){return!Tu(e)}function uo(e){return e instanceof Error}function T(e,t){return Zd(e,t)}const Zd=Xe(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=li(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),de}}),aa="onDomCreated",jd=Xe(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),gn(e,aa)}update(e,[t]){gn(e,aa);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),Ir="onResize",vn=Xe(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),gn(e,Ir)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${Ir} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){gn(e,Ir),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Qe(e,t,n){return hd(e,()=>t,()=>n)}const{attributeDirective:Ud,attributeSelector:Y1,attributeName:J1}=zd("data-test-id");function vl(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),pl()(n(r))),defineElementNoInputs:r=>(t(r),dr(n(r)))}}function Gd(e,t){return t?sa(e,t):sa(void 0,e)}const sa=Xe(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=li(e,"assign")}render(e,t){return fl(this.element,t),de}});function Yd(...[e,t,n]){const r=Wn(n)?n.definition:n,o=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),i=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=o||i,s=ai(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);if(!a||!s)return;if(o&&!r.elementOptions.ignoreUnsetInputs&&!Wn(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(c){const u=Wn(c)?c.inputs:void 0;return[o&&u?Gd(u):void 0].filter(yt)}}}function Jd(e){}function Kd(e){return ul(e.strings,e.values,Yd,Jd)}function h(e,...t){const n=nd(e,...t),r=cl(e,t,()=>Kd(n));return{...n,strings:r.strings,values:r.values}}function Jn(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],i=(t??[""]).map((a,s)=>{const l=Qd(a,r[s]);return`${a}${l}`});return pu(i.join(""))}function Qd(e,t){return t._$litType$!=null||t._$litDirective$!=null?Jn(t):Array.isArray(t)?t.map(r=>Jn(r)).join(""):e.endsWith("=")?`"${t}"`:t}const la="vira-",{defineElement:Ft,defineElementNoInputs:K1}=vl({assertInputs:e=>{if(!e.tagName.startsWith(la))throw new Error(`Tag name should start with '${la}' but got '${e.tagName}'`)}}),wl=v`
    pointer-events: none;
    opacity: 0.3;
`,ht=He({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Kn=He({"vira-form-input-border-radius":"8px"}),Qn=He({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Kn["vira-form-input-border-radius"].value} + 4px)`});function yl({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=S(Te(r+n+t));return v`
        ${S(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Qn["vira-focus-outline-color"].value};
            border-radius: ${Qn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const xt=v`
    padding: 0;
    margin: 0;
`,Q=v`
    ${xt};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function Xd(e){return v`
        ${S(e)} {
            scrollbar-width: none; /* hide scrollbars in Firefox */
            -ms-overflow-style: none; /* hide scrollbars in IE 10+ */
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${S(e)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `}const fe=v`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,ae=Ft()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var fo;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(fo||(fo={}));Ft()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===fo.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${fe};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Qn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${wl};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Q};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Kn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${ht["vira-interaction-animation-duration"].value},
                background-color
                    ${ht["vira-interaction-animation-duration"].value},
                border-color ${ht["vira-interaction-animation-duration"].value};
        }

        ${yl({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ae} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${ae.assign({icon:e.icon})}></${ae}>
              `:"",n=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var ho;(function(e){e.Header="header"})(ho||(ho={}));Ft()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Q};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${ht["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:o}){const i=o.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${T("click",()=>{n(new r.expandChange(!o.expanded))})}
            >
                <slot name=${ho.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${i} disabled="disabled">
                <div
                    ${vn(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const M=He({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const ef=w({name:"CloseX24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"Element16Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"Element24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const tf=w({name:"Loader24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),nf=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${ht["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,rf=w({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${nf}
        </style>
        ${tf.svgTemplate}
    `});w({name:"Options24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${M["vira-icon-stroke-color"].value}"
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});const of=w({name:"StatusFailure24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});w({name:"StatusInProgress24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${M["vira-icon-stroke-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width="calc(${M["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `});w({name:"StatusSuccess24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${M["vira-icon-fill-color"].value}
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${M["vira-icon-stroke-color"].value}
                stroke-width=${M["vira-icon-stroke-width"].value}
            />
        </svg>
    `});var Xn;(function(e){e.Loading="loading",e.Error="error"})(Xn||(Xn={}));const In=Ft()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:q(),imageError:q()},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:o}){const i=e.imageUrl,a=t.erroredUrls[i]?h`
                  <slot class="status-wrapper" name=${Xn.Error}>
                      <${ae.assign({icon:of})} class="error"></${ae}>
                  </slot>
              `:t.loadedUrls[i]?void 0:h`
                    <slot class="status-wrapper" name=${Xn.Loading}>
                        <${ae.assign({icon:rf})}></${ae}>
                    </slot>
                `;return h`
            ${Qe(!!a,a)}
            <img
                class=${se({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await io(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[i]:!0}}),r(new o.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await io(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[i]:!0}}),r(new o.imageError(s.error))})}
                src=${i}
            />
        `}});var ca;(function(e){e.Upper="upper",e.Lower="lower"})(ca||(ca={}));var ua;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ua||(ua={}));const af={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},sf=Object.keys(af),lf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...sf,...lf];function bl(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}function mo({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>mo({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function kl({value:e,allowed:t,blocked:n}){const r=t?mo({input:e,matcher:t}):!0,o=n?mo({input:e,matcher:n}):!1;return r&&!o}function $l(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(kl({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function cf({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:o}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=bl(n,HTMLInputElement),a=n.data,s=t;let l=i.value??"";if(a)if(a.length===1)kl({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,r(a));else{const{filtered:c,blocked:u}=$l({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,r(u)}i.value!==l&&(i.value=l),s!==l&&o(l)}Ft()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:q(),inputBlocked:q()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Qn["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${wl};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Q};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${fe};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Q};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Kn["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${ht["vira-interaction-animation-duration"].value};
            }

            label {
                ${Q};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Kn["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${yl({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Q};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${fe};
            }

            .close-x-button {
                ${Q};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${ht["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:o})=>{const{filtered:i}=$l({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${ae.assign({icon:e.icon})} class="left-side-icon"></${ae}>
              `:"",s=e.fitText?v`
                  width: ${n.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${a}
                ${Qe(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${vn(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${i}
                    ${T("input",l=>{cf({inputs:e,filteredValue:i,event:l,inputBlockedCallback(c){t(new o.inputBlocked(c))},newValueCallback(c){t(new o.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Qe(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new o.valueChange(""))})}
                        >
                            <${ae.assign({icon:ef})}></${ae}>
                        </button>
                    `)}
                ${Qe(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});const uf=0;function ci(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==uf)}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var da;(function(e){e.Upper="upper",e.Lower="lower"})(da||(da={}));var fa;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(fa||(fa={}));Ft()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,events:{routeChange:q()},renderCallback({inputs:e,dispatch:t,events:n}){var o,i;function r(a){e.route&&ci(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((o=e.link)!=null&&o.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(i=e.route)==null?void 0:i.router.createRoutesUrl(e.route.route);return h`
                <a href=${a} rel="noopener noreferrer" ${T("click",r)}>
                    <slot></slot>
                </a>
            `}}});const d=He({"toniq-icon-fill-color":M["vira-icon-fill-color"].default,"toniq-icon-stroke-color":M["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),H=ue(d,(e,t)=>n=>S(`var(${t.name}, ${n})`));w({name:"Copy16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${d["toniq-icon-fill-color"].value}
            stroke=${d["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `});w({name:"ExternalLink16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `});w({name:"InfoCircle16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `});w({name:"ArrowBarUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `});w({name:"ArrowForwardUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `});const xl=w({name:"ArrowLeft24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `});w({name:"ArrowLoopLeft24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `});w({name:"ArrowLoopRight24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `});const Tl=w({name:"ArrowRight24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `});w({name:"ArrowsSort24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `});w({name:"ArrowsSortAscending24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `});w({name:"ArrowsSortDescending24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `});w({name:"Bell24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 18h16m-2 0v-7.5C18 6.9 15.3 4 12 4s-6 3-6 6.5V18m7.9-13.7a2 2 0 0 0-3.8 0M10 18v1a2 2 0 1 0 4 0v-1"
            />
        </svg>
    `});w({name:"Bucket24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `});w({name:"BuildingStore24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `});w({name:"CalendarEvent24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `});w({name:"Cash24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `});w({name:"Chain24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `});const df=w({name:"CheckMark24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),ff=w({name:"ChevronDown24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `});w({name:"ChevronUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `});w({name:"Circle24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `});w({name:"CircleDot24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `});const ui=w({name:"CirclePlus24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `});w({name:"CircleWavyCheck24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `});w({name:"Clock24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `});w({name:"Code24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${d["toniq-icon-stroke-width"].value}
            />
        </svg>
    `});const Sl=w({name:"Copy24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `});w({name:"CreateFile24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `});w({name:"DotsVertical24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Download24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `});w({name:"Edit24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `});w({name:"Envelope24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4.8 19c-.5 0-1-.2-1.3-.5-.4-.3-.5-.7-.5-1.2V6.8c0-.5.1-1 .5-1.3.4-.3.8-.5 1.3-.5h14.4c.5 0 1 .2 1.3.5.4.3.5.8.5 1.3v10.5c0 .5-.1.9-.5 1.2-.4.3-.8.5-1.3.5H4.8ZM20.5 5.5 12 13 3.5 5.5"
            />
        </svg>
    `});const hf=w({name:"ExternalLink24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `});w({name:"Filter24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `});w({name:"Gear24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5.74 10.25c.3-1.07.86-2.03 1.62-2.8L6.2 4.95l2.6-1.5 1.58 2.25a6.53 6.53 0 0 1 3.24 0l1.58-2.24 2.6 1.5-1.16 2.5a6.49 6.49 0 0 1 1.62 2.8l2.74.24v3l-2.74.25a6.49 6.49 0 0 1-1.62 2.8l1.16 2.5-2.6 1.5-1.58-2.25a6.53 6.53 0 0 1-3.24 0L8.8 20.54l-2.6-1.5 1.16-2.5a6.49 6.49 0 0 1-1.62-2.8L3 13.5v-3l2.74-.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </svg>
    `});w({name:"Geometry24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `});w({name:"GridDots24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Heart24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `});w({name:"Infinity24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `});w({name:"Info24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `});w({name:"LayersLinked24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `});w({name:"LayoutGrid24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `});w({name:"Lifebuoy24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `});w({name:"List24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `});w({name:"ListDetails24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `});w({name:"Loader24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `});const mf=w({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }

            svg {
                animation: spin 1s infinite linear;
            }
        </style>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `});w({name:"Lock24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `});w({name:"LockOpen24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `});w({name:"Menu24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `});w({name:"Paper24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `});w({name:"People24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `});w({name:"Person24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${d["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${d["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${d["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `});w({name:"Photo24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `});w({name:"Refresh24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `});w({name:"Rocket24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Search24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `});w({name:"Send24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `});w({name:"ShoppingCart24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `});w({name:"Social24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `});w({name:"Square24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${d["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `});const ha={interactionDuration:v`--toniq-interaction-transition-duration`,prettyDuration:v`--toniq-pretty-transition-duration`},j={interaction:v`var(${ha.interactionDuration}, 84ms)`,pretty:v`var(${ha.prettyDuration}, 300ms)`};function Mr(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const pf=(()=>{const e={backgroundColor:v`#ffffff`,foregroundColor:v`#000000`},t={...e,foregroundColor:v`#00D093`},n={...e,foregroundColor:v`#ACADAD`},r={...e,foregroundColor:v`#D6D6D6`},o={...t},i={...t,foregroundColor:v`#00A876`},a={...t,foregroundColor:v`#1D6852`},s={...r},l={...e,foregroundColor:v`#EAFBF7`},c={...e,backgroundColor:v`#D2EEFA`},u=Mr(o),f=Mr(i),m=Mr(a),p=m,g={backgroundColor:v`#F1F3F6`,foregroundColor:e.foregroundColor},y={...g,foregroundColor:v`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:n,pageTertiary:r,pageInteraction:o,pageInteractionHover:i,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:p,accentPrimary:u,accentPrimaryHover:f,accentPrimaryActive:m,accentSecondary:g,accentTertiary:y}})(),El=pf;function ma(e,t){return S(`--toniq-${no(e)}-${no(t)}`)}const Al=ue(El,e=>({backgroundColor:ma(e,"backgroundColor"),foregroundColor:ma(e,"foregroundColor")}));function Se(e,t){const n=El[e][t],r=Al[e][t];return v`var(${r}, ${n})`}const k=ue(Al,e=>({foregroundColor:Se(e,"foregroundColor"),backgroundColor:Se(e,"backgroundColor")}));function F(e){return v`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const wt=v`
    pointer-events: none;
    opacity: 0.3;
    ${fe};
`;function et({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const o=S(Te(r+n+t));return v`
        ${S(e)}::after {
            content: '';
            top: calc(${o} * -1);
            left: calc(${o} * -1);
            position: absolute;
            width: calc(100% + calc(${o} * 2));
            height: calc(100% + calc(${o} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${k.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const Cl={toniqFont:{"font-family":v`'Lexend', sans-serif`},normalWeightFont:{"font-weight":v`400`},boldFont:{"font-weight":v`600`},extraBoldFont:{"font-weight":v`900`},paragraphFont:{"line-height":v`24px`,"font-size":v`16px`},boldParagraphFont:{},labelFont:{"line-height":v`16px`,"font-size":v`12px`},boldLabelFont:{},h1Font:{"line-height":v`96px`,"font-size":v`64px`},h2Font:{"line-height":v`64px`,"font-size":v`48px`},h3Font:{"line-height":v`48px`,"font-size":v`32px`},h4Font:{"line-height":v`32px`,"font-size":v`24px`},monospaceFont:{"font-family":v`'Inconsolata', monospace`,"line-height":v`1.125em`}},gf=ue(Cl,(e,t)=>{const n=S(no(e.replace(/Font$/,"")));return ue(t,o=>{const i=S(o);return v`--toniq-font-${n}-${i}`})});function ke(e){const t=gf[e],n=Cl[e],r=ne(t).map(o=>{const i=n[o],a=t[o];return v`
            ${S(o)}: var(${a}, ${i});
        `});return S(r.join(`
`))}const U=(()=>{const e=v`
        font-style: normal;
        color: ${k.pagePrimary.foregroundColor};
        ${ke("toniqFont")};
    `,t=v`
        ${e};
        ${ke("normalWeightFont")};
    `,n=v`
        ${e};
        ${ke("boldFont")};
    `,r=v`
        ${e};
        ${ke("extraBoldFont")};
    `,o=v`
        ${e};
        ${ke("paragraphFont")};
        ${t};
    `,i=v`
        ${e};
        ${o};
        ${n};
    `,a=v`
        ${e};
        ${ke("labelFont")};
        ${t};
    `,s=v`
        ${a};
        ${n};
    `,l=v`
        ${ke("h1Font")};
        ${r};
    `,c=v`
        ${ke("h2Font")};
        ${r};
    `,u=v`
        ${ke("h3Font")};
        ${n};
    `,f=v`
        ${ke("h4Font")};
        ${n};
    `,m=v`
        ${ke("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:n,extraBoldFont:r,paragraphFont:o,boldParagraphFont:i,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:u,h4Font:f,monospaceFont:m}})(),er={popupShadow:v`
        filter: drop-shadow(0px 12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:v`
        filter: drop-shadow(0px -12px 8px ${k.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:v`
        filter: drop-shadow(0px 12px 8px ${k.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function vf(e,t=!0){const n=S(e),r=e===":host"?v`
                  :host(:hover);
              `:v`
                  ${n}:hover
              `,o=t?v`
              ${n} {
                  cursor: pointer;
              }
              ${r} {
                  border-color: ${k.pageInteraction.foregroundColor};
              }
          `:v``;return v`
        ${n} {
            border-radius: 16px;
            background-color: ${k.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${er.popupShadow};
        }

        ${o}
    `}w({name:"SquareCheck24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${d["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `});const po=w({name:"Trash24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `});w({name:"Upload24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `});w({name:"Wallet24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `});const wf=w({name:"World24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 0c2 0 4 4 4 9s-2 9-4 9-4-4-4-9 2-9 4-9ZM4 9h16M4 15h16"
            />
        </svg>
    `});w({name:"WorldUpload24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-fill-color"].value}
                d="M12 21c-2 0-4-4-4-9s2-9 4-9 4 4 4 9M4 9h16M4 15h8m0 6s0 0 0 0a9 9 0 1 1 9-9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `});w({name:"X24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `});w({name:"Folder48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `});w({name:"FolderOff48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `});w({name:"Kyc48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${d["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `});w({name:"Api64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                fill=${d["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `});w({name:"CircleDashes64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `});w({name:"Rocket64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${d["toniq-icon-stroke-color"].value}
            fill=${d["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M57.7 6.7c0-.2-.2-.4-.4-.4-6.8-1.7-22.5 4.2-31 12.8a36.8 36.8 0 0 0-4.1 4.9c-2.7-.3-5.3 0-7.5.9C8.4 27.7 6.5 34.9 6 38a1.1 1.1 0 0 0 1.2 1.3l10.2-1 .1 2.2c0 .5.3 1 .7 1.4l3.9 4c.4.3.9.5 1.4.6l2.3.1-1.2 10.2A1.1 1.1 0 0 0 26 58c3.2-.5 10.4-2.4 13.2-8.7 1-2.2 1.2-4.8 1-7.4 1.7-1.3 3.3-2.7 4.8-4.2 8.6-8.5 14.5-23.9 12.8-31Zm-20.4 20a5.4 5.4 0 0 1 3.8-9.1 5.4 5.4 0 0 1 3.8 9.1 5.3 5.3 0 0 1-7.6 0ZM13.7 44c-1.2.2-2.4.7-3.3 1.6C8.2 47.8 8 56 8 56s8.2-.2 10.4-2.4c.9-.9 1.5-2 1.6-3.3"
            />
        </svg>
    `});w({name:"CryptoBtc16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <circle cx="8" cy="8" r="7" fill="#f7931a" />
            <path
                d="M11.1 7c.13-.93-.59-1.43-1.55-1.76l.31-1.26-.77-.2-.3 1.23-.62-.14.3-1.24-.76-.2L7.4 4.7l-.5-.12-1.05-.26-.2.82s.56.13.55.14c.31.07.37.28.36.45L6.2 7.16l.08.02-.08-.01-.5 2c-.04.1-.14.24-.35.19l-.56-.14-.38.88 1 .25.54.14-.31 1.28.76.2.32-1.28.6.17-.3 1.25.76.2.32-1.28c1.31.25 2.3.15 2.71-1.04.33-.95-.02-1.5-.7-1.86.5-.12.87-.45.98-1.13ZM9.32 9.47c-.23.95-1.84.44-2.36.31l.42-1.69c.52.13 2.2.39 1.94 1.38Zm.23-2.47c-.2.86-1.54.43-1.98.32l.39-1.54c.43.11 1.83.32 1.6 1.22Z"
                fill="#fff"
            />
        </svg>
    `});w({name:"CryptoBtc24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle cx="12" cy="12" r="12" fill="#f7931a" />
            <path
                fill="#fff"
                d="M17.3 10.3c.23-1.6-.99-2.46-2.65-3.04l.54-2.16-1.32-.33-.52 2.1-1.06-.24.53-2.12-1.31-.33-.54 2.16-.84-.2-1.82-.45-.35 1.4s.98.23.96.24c.53.13.63.49.61.77l-.61 2.46.13.04-.13-.03-.87 3.45c-.06.16-.23.4-.6.31.01.02-.96-.24-.96-.24l-.65 1.51 1.71.43.94.24-.54 2.19 1.31.33.54-2.17c.36.1.71.2 1.05.28l-.54 2.15 1.32.33.54-2.19c2.25.43 3.94.26 4.65-1.77.57-1.64-.03-2.58-1.21-3.2.86-.2 1.5-.76 1.68-1.93Zm-3.02 4.2c-.4 1.64-3.16.76-4.05.54l.72-2.9c.9.22 3.76.66 3.33 2.37Zm.4-4.23c-.36 1.48-2.65.73-3.4.54l.66-2.63c.74.19 3.14.54 2.75 2.09Z"
            />
        </svg>
    `});w({name:"CryptoCkBtc16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <circle cx="8" cy="8" r="7" fill="#3c00ba" />
            <path
                d="M10.57 7.21c.11-.76-.47-1.18-1.27-1.45l.26-1.03-.63-.16-.25 1-.5-.1.25-1.03-.63-.16-.26 1.04-.4-.1-.87-.21-.18.67s.47.1.47.12c.25.05.3.23.3.36l-.3 1.18.06.02-.06-.01L6.14 9c-.03.08-.1.19-.3.15l-.45-.12-.3.73.81.2.45.12-.26 1.05.63.15.26-1.03.5.12-.26 1.04.63.15.27-1.05c1.07.21 1.88.13 2.22-.84.27-.78-.01-1.24-.58-1.53.41-.1.72-.37.8-.93ZM9.13 9.23c-.2.79-1.52.36-1.95.26l.35-1.4c.43.11 1.8.32 1.6 1.14Zm.19-2.03c-.18.71-1.27.35-1.64.26L8 6.2c.36.1 1.5.26 1.32 1Z"
                fill="#fff"
            />
        </svg>
    `});w({name:"CryptoCkBtc24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <g>
                <circle cx="12" cy="12" r="12" fill="#3c00ba" />
                <path
                    fill="#28aae1"
                    d="M1.63 11.3a10.42 10.42 0 0 1 9.67-9.67v1.06a9.36 9.36 0 0 0-8.6 8.6H1.63Z"
                />
                <path
                    fill="url(#CkBtcToken24Icon-b)"
                    d="M12.7 1.62c5.2.33 9.38 4.49 9.73 9.68h-1.07a9.36 9.36 0 0 0-8.66-8.62V1.62Z"
                />
                <path
                    fill="#28aae1"
                    d="M22.43 12.7a10.42 10.42 0 0 1-9.73 9.68v-1.06a9.36 9.36 0 0 0 8.66-8.62h1.07Z"
                />
                <path
                    fill="url(#CkBtcToken24Icon-c)"
                    d="M11.3 22.37a10.42 10.42 0 0 1-9.67-9.67H2.7a9.36 9.36 0 0 0 8.6 8.61v1.06Z"
                />
                <path
                    fill="#fff"
                    fill-rule="nonzero"
                    d="M16.4 10.65c.2-1.31-.8-2.02-2.17-2.49l.44-1.77-1.08-.27-.43 1.73-.86-.2.43-1.75-1.08-.27-.44 1.78-.7-.16-1.48-.38-.3 1.15s.81.19.8.2c.43.1.51.4.5.63l-.5 2.02a1 1 0 0 1 .1.04l-.1-.03-.72 2.83c-.05.14-.18.33-.5.26l-.78-.2L7 15.01l1.4.35.77.2-.44 1.8 1.08.27.44-1.78.86.22-.44 1.77 1.08.27.45-1.8c1.84.36 3.23.22 3.81-1.45.47-1.34-.02-2.12-1-2.62.71-.17 1.25-.63 1.39-1.59Zm-2.47 3.46c-.34 1.35-2.6.62-3.33.44l.6-2.38c.73.18 3.08.54 2.73 1.94Zm.33-3.48c-.3 1.22-2.18.6-2.8.45L12 8.92c.61.15 2.58.44 2.26 1.71Z"
                />
            <defs>
                <linearGradient
                    id="CkBtcToken24Icon-b"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(3 3 -3 3 16 4)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#f8b13f" />
                    <stop offset="1" stop-color="#f15a25" />
                </linearGradient>
                <linearGradient
                    id="CkBtcToken24Icon-c"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(4 4 -4 4 4 14)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#532786" />
                    <stop offset="1" stop-color="#ed1e79" />
                </linearGradient>
            </defs>
        </svg>
    `});const Il="0 0 58 58",Ml=rd`
    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" width="58" height="58" />
`;w({name:"CryptoIcp16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="${Il}"
        >
            ${Ml}
        </svg>
    `});w({name:"CryptoIcp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="${Il}"
        >
            ${Ml}
        </svg>
    `});const yf=w({name:"BrandDiscord24Icon",svgTemplate:h`
        <svg
            fill=${H["toniq-icon-fill-color"]("#5865f2")}
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill-rule="nonzero"
                d="M19.624 4.976a18.18 18.18 0 0 0-4.478-1.389.069.069 0 0 0-.072.034 12.72 12.72 0 0 0-.558 1.146 16.69 16.69 0 0 0-5.029 0 11.6 11.6 0 0 0-.566-1.146.072.072 0 0 0-.072-.034 18.108 18.108 0 0 0-4.478 1.389.062.062 0 0 0-.03.025C1.489 9.262.708 13.419 1.091 17.523c.002.021.013.04.029.052a18.229 18.229 0 0 0 5.493 2.777.07.07 0 0 0 .077-.025c.423-.578.801-1.188 1.124-1.828a.07.07 0 0 0-.038-.097 12.059 12.059 0 0 1-1.716-.818.07.07 0 0 1-.007-.117c.115-.087.231-.177.341-.267a.068.068 0 0 1 .071-.01c3.6 1.644 7.498 1.644 11.056 0a.068.068 0 0 1 .072.009c.11.091.226.181.342.268a.07.07 0 0 1-.006.117c-.548.32-1.118.591-1.717.817a.07.07 0 0 0-.038.098 14.83 14.83 0 0 0 1.123 1.827.071.071 0 0 0 .078.026 18.189 18.189 0 0 0 5.502-2.777.07.07 0 0 0 .028-.051c.459-4.745-.768-8.867-3.252-12.522a.06.06 0 0 0-.029-.026ZM8.352 15.024c-1.084 0-1.977-.995-1.977-2.217s.875-2.218 1.977-2.218c1.11 0 1.994 1.004 1.977 2.218 0 1.222-.876 2.217-1.977 2.217Zm7.31 0c-1.084 0-1.977-.995-1.977-2.217s.876-2.218 1.977-2.218c1.11 0 1.994 1.004 1.977 2.218 0 1.222-.867 2.217-1.977 2.217Z"
            />
        </svg>
    `}),bf=w({name:"BrandDistrikt24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${H["toniq-icon-fill-color"]("#697bff")}
        >
            <path
                d="M.5 10h3c.3 0 .5.2.5.5v9c0 .3.2.5.5.5h9c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H.5a.5.5 0 0 1-.5-.5v-13c0-.3.2-.5.5-.5ZM5.5 4h13c.3 0 .5.2.5.5v13c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-9c0-.3-.2-.5-.5-.5h-9a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5ZM20.5 0h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5h-3a.5.5 0 0 1-.5-.5v-3c0-.3.2-.5.5-.5Z"
            />
        </svg>
    `}),kf=w({name:"BrandDscvr24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="none"
        >
            <path d="M0 0h24v24H0z" />
            <clipPath id="a">
                <path
                    d="M7.325 19.928c-4.472-2.313-6.188-7.527-4.671-12.211a.6002.6002 0 0 0-.343-.741l-.087-.037-.141.299c-.157.33-.301.668-.424 1.014-2.067 5.719.893 12.027 6.612 14.094.034.013.068.024.104.037 2.557.482 5.043.382 6.956-.6 1.964-1.011 3.342-2.95 4.629-5.504-.417.775-.946 1.482-1.57 2.106-2.921 2.918-7.447 3.416-11.065 1.543Z"
                />
            </clipPath>
            <g clip-path="url(#a)">
                <path d="M.744 6.63h20.433v16.803H.744z" style="fill:url(#b)" />
                <ellipse cx="12.006" cy="11.738" rx="10.421" ry="10.317" style="fill-opacity:.1" />
            </g>
            <clipPath id="c">
                <path
                    d="M5.761 16.21c2.971 3.042 7.964 3.904 11.16.705 1.577-3.806.841-6.125-1.438-7.338 1.005 1.344 1.15 3.149.369 4.635-1.65 3.159-6.387 2.984-8.687.631a7.119 7.119 0 0 1-1.988-4.241c-.7-3.993.877-7.118 4.694-9.369-2.973.671-5.179 2.756-6.266 5.837-1.03 3.209-.199 6.728 2.156 9.14Z"
                />
            </clipPath>
            <g clip-path="url(#c)">
                <path d="M2.801.623h15.854v19.939H2.801z" style="fill:url(#d)" />
                <path
                    d="M18.563 9.679c0 5.122-3.135 8.006-6.732 8.006-4.488 0-7.83-3.618-7.83-8.302 0-4.684 3.638-8.488 8.126-8.488 4.487 0 6.436 4.1 6.436 8.784Z"
                    style="fill-opacity:.1;fill-rule:nonzero"
                />
            </g>
            <clipPath id="e">
                <path
                    d="M10.581 8.197c1.813-.59 3.707-.213 4.899 1.38 1.153.88 1.773 2.148 1.87 3.812.058 1.027-.086 2.201-.432 3.526 2.717-2.717 2.717-7.123 0-9.842-2.682-2.683-5.766-2.476-8.938-.833l-.197.102.165 5.066c.249-.744.82-.799 1.245-1.328.445-.553.752-1.564 1.388-1.883Z"
                />
            </clipPath>
            <g clip-path="url(#e)">
                <path d="M7.398 4.175h11.948v12.968H7.398z" style="fill:url(#f)" />
                <path
                    d="M2.382.835v22.782h19.744V.835H2.382Zm9.339 18.532c-3.629 0-5.915-1.241-5.915-4.87 0-3.668 2.716-8.014 6.344-8.014 2.989 0 6.136 2.691 6.136 6.317.002 3.628-2.937 6.567-6.565 6.567.002 0 0 0 0 0Z"
                    style="fill-opacity:.1;fill-rule:nonzero"
                />
            </g>
            <clipPath id="g">
                <path
                    d="M11.998 2.96c4.991-.003 9.036 4.039 9.041 9.027 0 1.499-.372 2.974-1.082 4.292-2.541 5.04-6.403 7.076-11.587 6.104 5.737 2.001 12.009-1.025 14.013-6.759 2.001-5.738-1.025-12.009-6.759-14.014-1.05-.366-2.153-.573-3.267-.607C12.237 1 12.116 1 11.998 1c-.715 0-1.427.079-2.124.233-4.126 2.264-5.693 5.386-4.697 9.369-.32-3.029 1.315-5.926 4.073-7.215l.404-.118a8.9704 8.9704 0 0 1 2.344-.309Z"
                />
            </clipPath>
            <g clip-path="url(#g)">
                <path d="M4.425.688h19.032v22.617H4.425z" style="fill:url(#h)" />
                <path
                    d="M.079-3.613v29.755H24.56V-3.613H.079Zm12.158 26.276c-5.415 0-9.806-4.666-9.806-10.419S6.822 1.828 12.237 1.828c5.415 0 9.805 4.666 9.805 10.416 0 5.751-4.39 10.419-9.805 10.419Z"
                    style="fill-opacity:.1"
                />
            </g>
            <clipPath id="i">
                <path
                    d="m10.702 15.828-.121-7.629c-.589.291-1.113.702-1.538 1.203-.463.547-.827 1.218-1.092 2.006l.1 3.068.102.097c.83.804 1.721 1.077 2.549 1.255Z"
                />
            </clipPath>
            <g clip-path="url(#i)">
                <path d="M7.823 8.102h3.01v7.817h-3.01z" style="fill:url(#j)" />
                <path
                    d="m11.389 6.886-2.168.065.276 9.212 2.169-.065-.277-9.212Z"
                    style="fill-opacity:.1"
                />
            </g>
            <defs>
                <linearGradient
                    id="b"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(12 20 -20 12 5.2522 5.404)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#ffcd02;stop-opacity:1" />
                    <stop offset=".14" style="stop-color:#ffcd02;stop-opacity:1" />
                    <stop offset=".37" style="stop-color:#ff963b;stop-opacity:1" />
                    <stop offset=".7" style="stop-color:#ff6373;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#ff4295;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="d"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(18 18 -18 18 1.7784 1.643)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#1b59d2;stop-opacity:1" />
                    <stop offset=".51" style="stop-color:#4e9bf2;stop-opacity:1" />
                    <stop offset=".98" style="stop-color:#1b59d2;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#1b59d2;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="f"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(15 8 -8 15 6.0834 6.4501)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#50aff3;stop-opacity:1" />
                    <stop offset=".33" style="stop-color:#4064c5;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#6c349f;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="h"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(9 26 -26 9 9.1934 -1.048)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#a700ba;stop-opacity:1" />
                    <stop offset=".49" style="stop-color:#c00c95;stop-opacity:1" />
                    <stop offset=".86" style="stop-color:#db1b62;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#db1b62;stop-opacity:1" />
                </linearGradient>
                <linearGradient
                    id="j"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="0"
                    gradientTransform="matrix(0 8 -8 0 9.3272 8.1035)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" style="stop-color:#1c58d2;stop-opacity:1" />
                    <stop offset=".33" style="stop-color:#5734ca;stop-opacity:1" />
                    <stop offset="1" style="stop-color:#a203bc;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    `});w({name:"BrandFacebookLogo24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#1877f2")}
                d="M23 12a11 11 0 1 0-12.72 10.87v-7.69h-2.8V12h2.8V9.58c0-2.76 1.64-4.28 4.16-4.28 1.2 0 2.46.21 2.46.21v2.7H15.5c-1.37 0-1.8.86-1.8 1.73V12h3.06l-.49 3.18h-2.56v7.69A11 11 0 0 0 23 12Z"
            />
            <path
                fill="#fff"
                d="m16.28 15.18.49-3.18h-3.05V9.94c0-.87.42-1.72 1.8-1.72h1.38v-2.7s-1.26-.22-2.46-.22c-2.52 0-4.16 1.52-4.16 4.28V12h-2.8v3.18h2.8v7.69a11.07 11.07 0 0 0 3.44 0v-7.69h2.56Z"
            />
        </svg>
    `});w({name:"BrandGoogleLogo24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#4285f4")}
                d="M21.6 12.23c0-.71-.06-1.4-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.34Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#34a853")}
                d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.51a6 6 0 0 1-3.39.95c-2.6 0-4.8-1.76-5.6-4.12H3.07v2.6A10 10 0 0 0 12 22Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#fbbc05")}
                d="M6.4 13.9a6.01 6.01 0 0 1 0-3.8V7.5H3.07a9.99 9.99 0 0 0 0 9l3.35-2.6Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#ea4335")}
                d="M12 5.98c1.47 0 2.79.5 3.82 1.5L18.7 4.6A10 10 0 0 0 3.06 7.5l3.35 2.59A5.96 5.96 0 0 1 12 5.98Z"
            />
        </svg>
    `});w({name:"BrandIcScan24Icon",svgTemplate:h`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M13 21h-1L1 16v2l11 5 1-1v-1Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="m13 2-1-1L1 6l1 2h1V7l9-4h1V2ZM13 7l-1-1-6.573 2.988 1.654 1.234L12 7.976 13 8V7Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M1 7.976 23 18v-2L1 6v1.976Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="m23 16-11 5v2l11-5v-2Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="M13 16.024h-1L1 11v2l11 5 1-1v-.976ZM23 11 12 6v2l11 5v-2Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#7f85db")}
                d="M17.507 15.497 17.5 13.5 12 16v2l5.507-2.503Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#33307c")}
                d="m12 3 11 5V6L12 1v2Z"
            />
        </svg>
    `});const $f=w({name:"BrandInstagram24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill=${H["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_a)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("url(#brand_instagram_32_icon_b)")}
                fill-rule="nonzero"
                d="M12 1.002c-4.592 0-5.933 0-6.188.027a5.448 5.448 0 0 0-2.172.55 4.727 4.727 0 0 0-2.544 3.603C1.027 5.69 1.007 5.8 1 8.42v3.582c0 4.592 0 5.933.027 6.194.076.921.22 1.499.523 2.131a4.638 4.638 0 0 0 3.004 2.448c.454.117.956.185 1.602.213.275.014 3.046.02 5.823.02 2.778 0 5.555 0 5.824-.013.742-.042 1.175-.097 1.649-.22a4.61 4.61 0 0 0 3.012-2.462c.295-.618.447-1.21.515-2.083.014-.185.021-3.21.021-6.228 0-3.025-.007-6.037-.021-6.222a5.352 5.352 0 0 0-.529-2.111 4.746 4.746 0 0 0-3.623-2.571c-.509-.069-.619-.09-3.245-.096H12Z"
            />
            <path
                fill="#fff"
                d="M12 3.875c-2.207 0-2.482.014-3.348.055a5.964 5.964 0 0 0-1.973.372 3.97 3.97 0 0 0-1.444.941A3.998 3.998 0 0 0 4.3 6.687c-.199.509-.337 1.1-.371 1.966a57.542 57.542 0 0 0-.062 3.349c0 2.206.014 2.481.055 3.348.034.866.172 1.457.371 1.973.206.536.481.99.942 1.444.405.412.896.731 1.437.935.515.199 1.1.336 1.973.378.866.034 1.141.048 3.348.048 2.2 0 2.475-.014 3.348-.048a5.976 5.976 0 0 0 1.966-.378 3.889 3.889 0 0 0 1.444-.942c.412-.406.731-.896.935-1.437.2-.516.337-1.107.378-1.973.042-.867.049-1.142.049-3.348.016-1.117 0-2.233-.049-3.349a5.996 5.996 0 0 0-.378-1.973 3.986 3.986 0 0 0-.935-1.443 3.955 3.955 0 0 0-1.444-.935 5.99 5.99 0 0 0-1.973-.372A58.817 58.817 0 0 0 12 3.875Zm-.743 1.465H12c2.166 0 2.427.013 3.279.048.791.034 1.224.172 1.513.275a2.5 2.5 0 0 1 .928.619c.289.275.461.55.612.928.11.288.241.715.275 1.512.041.853.048 1.114.048 3.28 0 2.165-.007 2.426-.048 3.279a4.483 4.483 0 0 1-.275 1.512 2.478 2.478 0 0 1-.612.929c-.282.288-.55.46-.935.611-.282.11-.715.241-1.506.275-.852.042-1.113.049-3.279.049-2.173 0-2.427-.007-3.286-.049a4.453 4.453 0 0 1-1.506-.275 2.522 2.522 0 0 1-.935-.611 2.438 2.438 0 0 1-.605-.935 4.503 4.503 0 0 1-.275-1.506 57.83 57.83 0 0 1-.062-3.279c0-2.173.014-2.427.048-3.287.035-.79.172-1.223.275-1.512a2.57 2.57 0 0 1 .619-.928c.275-.282.55-.461.928-.605.484-.18.996-.276 1.513-.282.742-.035 1.031-.048 2.543-.048Zm4.112 2.33c0-.536.433-.969.969-.969h.007a.98.98 0 0 1 .976.976.98.98 0 0 1-.976.976.98.98 0 0 1-.976-.976V7.67ZM12 7.835c-2.289 0-4.173 1.884-4.173 4.173 0 2.29 1.884 4.174 4.173 4.174s4.173-1.884 4.173-4.174c0-2.289-1.884-4.173-4.173-4.173Zm2.716 4.167a2.722 2.722 0 0 0-2.709-2.709 2.722 2.722 0 0 0-2.709 2.709 2.721 2.721 0 0 0 2.709 2.708 2.721 2.721 0 0 0 2.709-2.708Z"
            />
            <defs>
                <radialGradient
                    id="brand_instagram_32_icon_a"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(0 -21.8036 21.8037 0 6.844 24.693)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#fd5" />
                    <stop offset=".1" stop-color="#fd5" />
                    <stop offset=".5" stop-color="#ff543e" />
                    <stop offset="1" stop-color="#c837ab" />
                </radialGradient>
                <radialGradient
                    id="brand_instagram_32_icon_b"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="scale(9.74631) rotate(78.68 -.3 -.036)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#3771c8" />
                    <stop offset=".13" stop-color="#3771c8" />
                    <stop offset="1" stop-color="#60f" stop-opacity=".01" />
                </radialGradient>
            </defs>
        </svg>
    `});w({name:"BrandInstagramFlat24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M16.813 1H7.188A6.194 6.194 0 0 0 1 7.188v9.625A6.194 6.194 0 0 0 7.188 23h9.625A6.194 6.194 0 0 0 23 16.812V7.187A6.194 6.194 0 0 0 16.812 1Zm-4.812 16.5a5.505 5.505 0 0 1-5.5-5.5c0-3.034 2.467-5.5 5.5-5.5s5.5 2.466 5.5 5.5-2.467 5.5-5.5 5.5Zm2.917-8.417a4.131 4.131 0 0 1 1.246 2.955c0 2.263-1.862 4.125-4.125 4.125a4.131 4.131 0 0 1-2.955-1.246 4.128 4.128 0 0 1-1.17-2.879c0-2.263 1.862-4.125 4.125-4.125 1.075 0 2.109.42 2.879 1.17Zm3.484-5.211a1.737 1.737 0 1 1-.002 3.474 1.737 1.737 0 0 1 .002-3.474Z"
            />
        </svg>
    `});const xf=w({name:"BrandMedium24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M13.4 12a6.23 6.23 0 0 1-6.2 6.25C3.79 18.25 1 15.45 1 12a6.23 6.23 0 0 1 6.2-6.25c3.43 0 6.2 2.8 6.2 6.25m6.82 0c0 3.25-1.4 5.88-3.1 5.88-1.72 0-3.1-2.63-3.1-5.88s1.38-5.88 3.1-5.88c1.7 0 3.1 2.63 3.1 5.88M23 12c0 2.91-.49 5.27-1.1 5.27-.6 0-1.08-2.36-1.08-5.27 0-2.9.49-5.27 1.09-5.27C22.5 6.73 23 9.1 23 12"
                style="fill-rule:nonzero"
            />
        </svg>
    `});w({name:"BrandNftgeek24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill=${H["toniq-icon-fill-color"]("#000")}
        >
            <path
                d="M9.75 17.23h3.77v-4.02H10.4v2.03H4.75v-5.7h5.64v2.32h3.13V9.55h5.65v5.7h-4.3v3.33H9.74v-1.35ZM6.1 21.65h11.76v-5.07h1.34V23H4.75v-6.42h1.34v5.07Zm9.74-13.56-.01-.14-.13-3.39v-.15l-.02-.2-.08-1.66-.71 1.32-.05.09-.55 1.02-.12.23-1.48 2.73-.07.15-.01.01H11.49l-.02-.01-.02-.01-.02-.19-.29-3.22-.16.3-1.6 2.97-.08.15H8.15l-.05-.16-.82-2.37-1.29 2.4-.07.13H4.78l.65-1.2L6.7 4.54h1.3l.8 2.35.37-.68 1.6-2.98h1.26l.24 2.62.06.65 1.42-2.63L15.28 1h1.23l.12 2.5.06 1.06.01.31v.03l.06 1.49 1.35-2.5h1.14l-.02.04-.58 1.06-1.6 2.98-.06.12h-1.16Z"
            />
        </svg>
    `});const Tf=w({name:"BrandTelegram24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${H["toniq-icon-fill-color"]("#2AABEE")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M21.134 3.16a7646.977 7646.977 0 0 1-18.785 7.762c-2.306.9-.956 1.744-.956 1.744s1.968.675 3.656 1.181c1.687.506 2.587-.057 2.587-.057l7.93-5.342c2.813-1.913 2.137-.338 1.462.337-1.462 1.463-3.881 3.768-5.905 5.624-.9.788-.45 1.462-.056 1.8 1.462 1.238 5.456 3.769 5.68 3.937 1.189.842 3.526 2.052 3.881-.506l1.406-8.83c.45-2.981.9-5.737.956-6.524.169-1.912-1.856-1.126-1.856-1.126Z"
            />
        </svg>
    `}),Sf=w({name:"BrandTiktok24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            ss
        >
            <path
                fill=${H["toniq-icon-fill-color"]("#ee1d52")}
                d="M16.952 4.348a5.061 5.061 0 0 1-1.196-2.479h.99s-.198 1.694 1.247 3.374l.022.015a5.774 5.774 0 0 1-1.063-.91Zm-9.544 8.509a3.122 3.122 0 0 0-1.357 2.34 3.152 3.152 0 0 0 1.636 2.934 3.416 3.416 0 0 1-.587-2.054c.118-1.093.55-1.701 1.35-2.332 1.144-.851 2.582-.367 2.582-.367V9.696a5.44 5.44 0 0 0-1.042-.059v2.853s-1.437-.484-2.582.367Zm-4.181 6.961.088.198a4.404 4.404 0 0 1-.088-.198Zm18.507-9.279V6.937c-.234.022-.608-.007-1.041-.11v2.825s-1.269-.052-2.201-.309a8.322 8.322 0 0 1-2.156-.887l-.631-.411v7.431c0 .418-.103 1.452-.433 2.318a6.914 6.914 0 0 1-1.166 1.958l-.044.059s-.807 1.005-2.223 1.68c-1.174.557-2.208.587-2.633.601H9.11s-1.944.103-3.682-1.093l-.015-.007c.323.33.675.624 1.056.888 1.746 1.195 3.683 1.115 3.683 1.115h.095a6.499 6.499 0 0 0 2.641-.609 6.848 6.848 0 0 0 2.215-1.673l.044-.051a6.975 6.975 0 0 0 1.174-1.973c.323-.858.433-1.893.433-2.311V8.933l.623.41s.844.543 2.157.895c.939.25 2.2.301 2.2.301Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#252525")}
                d="M20.707 6.842v2.824s-1.269-.051-2.2-.301c-1.321-.352-2.157-.894-2.157-.894l-.631-.411v7.438c0 .418-.11 1.452-.44 2.311-.425 1.129-1.085 1.87-1.203 2.024 0 0-.807.998-2.222 1.673-1.277.608-2.399.594-2.737.608 0 0-1.936.081-3.682-1.115a6.773 6.773 0 0 1-1.511-2.406 6.655 6.655 0 0 1-.406-2.291c0-3.585 2.895-6.561 6.48-6.658v2.861s-1.431-.484-2.582.367a3.118 3.118 0 0 0-1.35 2.34 3.151 3.151 0 0 0 1.628 2.927c.191.256.419.484.675.66.879.666 2.063.78 3.052.293a2.892 2.892 0 0 0 1.57-1.746c.161-.469.161-.953.161-1.437V1.876h2.611a5.066 5.066 0 0 0 2.26 3.389c.117.125.704.741 1.459 1.122a5.76 5.76 0 0 0 1.225.455Z"
            />
            <path
                fill=${H["toniq-icon-fill-color"]("#69c9d0")}
                d="M7.716 10.128a6.46 6.46 0 0 0-3.381 3.015 6.657 6.657 0 0 0-.411 5.458c.088.242.433 1.093.983 1.812.161.205.337.403.521.586a7.256 7.256 0 0 1-1.563-1.467 7.156 7.156 0 0 1-.975-1.804 6.654 6.654 0 0 1-.402-2.278c0-3.654 3.007-6.661 6.661-6.661.286 0 .572.019.856.056v.807a6.11 6.11 0 0 0-2.289.484v-.008Zm5.436-8.245h2.611c-.088-.535-.044-.887-.044-.887h-3.616v14.047c0 .484 0 .954-.161 1.423a2.9 2.9 0 0 1-1.57 1.746c-.99.403-1.79.411-2.685-.073.191.256.418.484.675.66a2.917 2.917 0 0 0 3.051.293 2.897 2.897 0 0 0 1.57-1.746c.162-.469.162-.953.162-1.437V1.876l.007.007Zm7.555 4.966v-.792a4.653 4.653 0 0 1-2.684-.792c.117.125.704.741 1.467 1.122a5.41 5.41 0 0 0 1.217.455v.007Z"
            />
        </svg>
    `});w({name:"BrandTiktokFlat24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#000")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M15.839 2.017c0 .305.09 4.714 4.73 4.989l.002 3.407c-.35.02-3.055-.175-4.737-1.673l-.006 6.633c.063 4.603-3.334 7.405-7.775 6.436C.395 19.526 2.94 8.201 10.629 9.414c0 3.655.002-.002.002 3.655-3.177-.466-4.24 2.169-3.394 4.055.767 1.718 3.93 2.09 5.033-.333.132-.53.195-1.075.188-1.622V2l3.381.017Z"
            />
        </svg>
    `});const Ef=w({name:"BrandTwitch24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#9146FF")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m2 5 4-4h15v11l-7 7h-3l-4 4v-4H2V4.919 5Zm14.248 9.358 3.166-3.142V2.574H6.752v11.784h3.56v2.75l2.771-2.75h3.165Z"
            />
            <path d="M15.459 5.324h1.586v4.717h-1.586V5.324Zm-4.357 0h1.586v4.717h-1.586V5.324Z" />
        </svg>
    `}),Af=w({name:"BrandTwitter24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"]("#41ABE1")}
            viewBox="0 0 24 24"
            height="24"
            width="24"
        >
            <path
                d="M24 5.417c-.885.375-1.83.637-2.828.75a4.821 4.821 0 0 0 2.16-2.648c-.97.56-2.027.953-3.127 1.163a4.977 4.977 0 0 0-3.593-1.515l-.06-.001c-2.643 0-4.827 2.157-4.86 4.801 0 .375.038.742.128 1.087a14.11 14.11 0 0 1-10.148-5.01C.393 6.23 1.069 9.073 3.195 10.449a5.007 5.007 0 0 1-2.228-.6v.053c0 2.325 1.695 4.267 3.945 4.71a5.118 5.118 0 0 1-2.22.075 4.921 4.921 0 0 0 4.598 3.337A10.048 10.048 0 0 1 0 20.012a14.193 14.193 0 0 0 7.545 2.152c.094.002.187.003.281.003 7.529 0 13.725-6.196 13.725-13.725 0-.183-.004-.367-.011-.55A9.84 9.84 0 0 0 24 5.417Z"
            />
        </svg>
    `}),Cf=w({name:"BioniqRobot100Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${H["toniq-icon-stroke-color"]("#8A2BE2")}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="100"
            height="100"
            viewBox="0 0 100 100"
        >
            <path
                fill=${d["toniq-icon-fill-color"].value}
                stroke-width="calc(${d["toniq-icon-stroke-width"].value} * 2)"
                d="m50 89-38.5-3L26 22h48l14.5 64L50 89M23 35.6l-8.5-2.1-6 23 9.2 2.3m59.6-23.2 8.4-2.1 6 23-9.2 2.3"
            />
            <path
                stroke-width="calc(${d["toniq-icon-stroke-width"].value} * 2)"
                d="M39 9.5 42.1 22M61 9.5 57.9 22M28.5 55h43L76 79H24l4.5-24ZM67 55v24m-8-24v24m-9-24v24M33 55v24m8-24v24m4.5-43.5-1-1.5h-13l-1 1.5 7 10h2l6-10Zm9 0 1-1.5h13l1 1.5-7 10h-2l-6-10Z"
            />
        </svg>
    `});w({name:"EntrepotLogo144Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"](String(k.brandPrimary.foregroundColor))}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="134"
            height="144"
            viewBox="0 0 134 144"
        >
            <path
                stroke-width=${d["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `});const If=Be({discord:Ce(void 0,""),distrikt:Ce(void 0,""),dscvr:Ce(void 0,""),instagram:Ce(void 0,""),medium:Ce(void 0,""),telegram:Ce(void 0,""),tikTok:Ce(void 0,""),twitch:Ce(void 0,""),twitter:Ce(void 0,""),website:Ce(void 0,"")});If.defaultValue;const Mf={discord:yf,instagram:$f,telegram:Tf,tikTok:Sf,distrikt:bf,twitch:Ef,dscvr:kf,medium:xf,twitter:Af,website:wf},pa="toniq-",{defineElement:B,defineElementNoInputs:di}=vl({assertInputs:e=>{if(!e.tagName.startsWith(pa))throw new Error(`Tag name should start with '${pa}' but got '${e.tagName}'`)}}),Lr=B()({tagName:"toniq-bold-space",styles:v`
        :host {
            display: inline-flex;
            position: relative;
        }

        .text {
            display: inline-block;
            max-width: 100%;
            white-space: inherit;
            text-overflow: inherit;
            overflow: inherit;
        }

        .text.bold {
            /* so that the element still takes up space but it's not visible */
            visibility: hidden;
            ${U.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?h`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),N=B()({tagName:"toniq-icon",styles:v`
        :host {
            display: inline-flex;
            ${M["vira-icon-fill-color"].name}: ${d["toniq-icon-fill-color"].value}
            ${M["vira-icon-stroke-color"].name}: ${d["toniq-icon-stroke-color"].value}
            ${M["vira-icon-stroke-width"].name}: ${d["toniq-icon-stroke-width"].value}
        }

        ${ae} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return h`
            <${ae.assign(e)}></${ae}>
        `}}),go=v`8px`;var le;(function(e){e.Default="default",e.Outline="outline",e.Secondary="secondary"})(le||(le={}));const R=B()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant===le.Secondary,"toniq-button-outline":({inputs:e})=>e.variant===le.Outline,"toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${fe};
        }

        :host(:hover) button {
            ${F(k.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F(k.accentPrimaryActive)};
        }

        button {
            ${Q};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${go};
            ${F(k.accentPrimary)};
            padding: 10px;
            transition:
                color ${j.interaction},
                background-color ${j.interaction},
                border-color ${j.interaction};
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F(k.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F(k.pagePrimary)};
            border-color: ${k.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${wt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${k.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${k.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${N.assign({icon:e.icon})}
                      class="icon-template"
                  ></${N}>
              `:"",n=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${n}</slot>
            </button>
        `}});function Lf(e,t,n={behavior:"smooth"}){let r=2;const o=t==="up"||t==="down"?"y":"x",i=t==="right"||t==="down"?"+":"-",a=o==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=fi(e)[o];i==="-"&&(r*=-1);const l=e[o==="x"?"scrollLeft":"scrollTop"]+r,c=s.filter(f=>i==="+"?f>l:f<l).sort((f,m)=>i==="+"?f-m:m-f);let u;return c.length>0?u=c[0]:i==="+"?u=a:u=0,e.scrollTo({...n,[o==="x"?"left":"top"]:u})}function Nf(e){const t=window.getComputedStyle(e),n=e.getBoundingClientRect();let r=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,p){let g=parseFloat(m);return/%/.test(m)&&(g/=100,g*=p),g}let l=s(r,n.width),c=s(o,n.height),u=s(i,n.width),f=s(a,n.height);return{x:{before:l,after:u},y:{before:c,after:f}}}function Of(e,t,n="both"){return n==="x"&&e.right>=t.left&&e.left<=t.right||n==="y"&&e.bottom>=t.top&&e.top<=t.bottom||n==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function Ll(e){let t=[];for(const n of e.children)t=t.concat(n,Ll(n));return t}function Pf(e,t=!0){const n=e.getBoundingClientRect(),r={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},o=Ll(e);for(const i of["x","y"]){const a=i==="x"?"y":"x",s=i==="x"?"left":"top",l=i==="x"?"width":"height",c=i==="x"?"scrollLeft":"scrollTop";for(const u of o){const f=u.getBoundingClientRect();if(t&&!Of(n,f,a))continue;const m=window.getComputedStyle(u);let[p,g]=m.getPropertyValue("scroll-snap-align").split(" ");typeof g>"u"&&(g=p);const y=i==="x"?g:p,x=f[s]-n[s]+e[c];switch(y){case"none":break;case"start":r[i].start.push(x);break;case"center":r[i].center.push(x+f[l]/2);break;case"end":r[i].end.push(x+f[l]);break}}}return r}function fi(e){const t=e.getBoundingClientRect(),n=Nf(e),r=Pf(e),o={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},i=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:ga([...r.x.start.map(a=>a-n.x.before),...r.x.center.map(a=>a-t.width/2),...r.x.end.map(a=>a-t.width+n.x.after)].map(i(0,o.x))),y:ga([...r.y.start.map(a=>a-n.y.before),...r.y.center.map(a=>a-t.height/2),...r.y.end.map(a=>a-t.height+n.y.after)].map(i(0,o.y)))}}function ga(e){return Array.from(new Set(e))}const zn="templates-container",qf=4e3;var vo;(function(e){e.Default="default",e.Banner="banner"})(vo||(vo={}));B()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant===vo.Banner},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>v`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${Xd(`.${zn}`)}

        .${S(zn)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;
        }

        .template-wrapper {
            scroll-snap-align: center;
            /*
                Sometimes the edges clip just by a couple pixels, so account for that with the calc.
            */
            max-width: calc(100% - 2px);
        }

        .arrow {
            --background-degrees: 90deg;
            position: absolute;
            max-width: 20%;
            opacity: 1;
            transition: ${j.pretty};
            top: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                white 0%,
                rgba(255, 255, 255, 0) 100%
            );
            will-change: visibility;
        }

        ${e["toniq-carousel-banner-variant"].selector} .arrow {
            background: none;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${N} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${j.interaction};
            border: 1px solid transparent;
            ${F(k.pagePrimary)};
        }

        .arrow ${N}:hover {
            border-color: ${k.pageInteractionHover.foregroundColor};
            ${F(k.pageInteractionHover)};
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            /*visibility: hidden;*/
            /*
                I'm giving opacity a shot since we've moved the arrows to being absolutely
                positioned. Maybe that will help? If the carousel starts resetting its scroll
                position randomly for no apparent reason, try going back to using visibility. Note
                that transitions won't work anymore, so remove the transition duration that was
                added above in this same commit.
            */
            opacity: 0;
            pointer-events: none;
        }
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:n,host:r}){e.enableAutomaticCycling&&t.rotationIntervalId==null?n({rotationIntervalId:window.setInterval(()=>{Nr({host:r,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||qf)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),n({rotationIntervalId:void 0}));const o=va(t.scrollSnapPositions,0),i=va(t.scrollSnapPositions,-1);return h`
            <div>
                <div
                    class="arrow left ${se({hidden:o==null?!0:t.currentScrollPosition.left<=o})}"
                >
                    <${N.assign({icon:xl})}
                        ${T("click",()=>{Nr({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:r})})}
                    ></${N}>
                </div>
                <div
                    ${vn(()=>{n({scrollSnapPositions:fi(wo(r)).x})})}
                    class=${zn}
                    ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};n({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>h`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${se({hidden:i==null?!0:t.currentScrollPosition.left>=i})}"
                >
                    <${N.assign({icon:Tl})}
                        ${T("click",()=>{Nr({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:r})})}
                    ></${N}>
                </div>
            </div>
        `}});function va(e,t){const n=t>=0?1:-1,r=t<0?e.length+t:t,o=r+n,i=e[r],a=e[o];if(!(i==null||a==null))return(i+a)/2+n*20}function wo(e){const t=e.shadowRoot.querySelector(`.${zn}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function Nr({host:e,direction:t,allowWrapping:n,blockIfHovering:r}){if(r&&e.matches(":hover"))return;const o=wo(e),i=o.clientWidth,a=fi(wo(e)).x,s=a[0]??0,l=a.slice(-1).pop()??i,c=o.scrollLeft>=l-10,u=o.scrollLeft<=s+10;if(t==="right"&&c)n&&o.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&u)n&&o.scrollTo({behavior:"smooth",left:l});else{const f=Df(e,t),m=wa(o.scrollLeft,a,!1),p=t==="right"?1:-1,g=(o.clientWidth-f*3)*p,y=wa((m||0)+g,a,!0);t==="right"&&y>m?o.scrollTo({behavior:"smooth",left:y}):t==="left"&&y<m?o.scrollTo({behavior:"smooth",left:y}):Lf(o,t)}}function Df(e,t){const n=`.arrow.${t}`,r=e.shadowRoot.querySelector(n);if(!r)throw new Error("Failed to find arrow element for calculating its size.");return r.clientWidth}function wa(e,t,n){return t.reduce((o,i)=>{const a=Math.abs(e-i),s=Math.abs(e-o);return a<s&&(!n||i<=e)?i:o},1/0)}B()({tagName:"toniq-checkbox",events:{checkedChange:q()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Se("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Se("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Se("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Se("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Se("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${j.interaction},
                background-color ${j.interaction},
                opacity ${j.interaction};
            border-radius: 8px;
        }

        button {
            ${Q};
            cursor: pointer;
            border-radius: 8px;
        }

        .wrapper {
            transition: inherit;
            display: inline-flex;
            flex-grow: 1;
            align-items: start;
            position: relative;
            outline: none;
        }

        .label {
            font: inherit;
            color: inherit;
            ${fe};
            transition: inherit;
            text-align: start;
            color: ${e["toniq-checkbox-unchecked-label-color"].value};
        }

        .checkbox.checked {
            background-color: ${e["toniq-checkbox-checked-checkbox-color"].value};
            color: ${e["toniq-checkbox-checked-check-color"].value};
        }

        .label.checked {
            color: ${e["toniq-checkbox-checked-label-color"].value};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${e["toniq-checkbox-unchecked-checkbox-color"].value};
            height: 24px;
            width: 24px;
            border-radius: 8px;
            margin-right: 16px;
        }

        ${et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${wt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=h`
            <span class="checkbox ${e.checked?"checked":""}">
                <${N.assign({icon:df})}
                    class="check-mark ${se({hidden:!e.checked})}"
                ></${N}>
            </span>
        `,o=h`
            <slot
                class=${se({label:!0,checked:e.checked})}
            >
                <span
                    class=${se({label:!0,checked:e.checked})}
                >
                    ${e.text}
                </span>
            </slot>
        `;return h`
            <button
                ?disabled=${e.disabled}
                class="wrapper ${e.checked?"checked":""}"
                ${T("click",()=>{const i=!e.checked;t(new n.checkedChange(i))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${r} ${o}
            </button>
        `}});var yo;(function(e){e.Default="default",e.Secondary="secondary"})(yo||(yo={}));B()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant===yo.Secondary},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${U.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F(k.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F(k.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${N.assign({icon:e.icon})}></${N}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}});class Tt extends Error{}class Bf extends Tt{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class _f extends Tt{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Hf extends Tt{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Lt extends Tt{}class Nl extends Tt{constructor(t){super(`Invalid unit ${t}`)}}class oe extends Tt{}class We extends Tt{constructor(){super("Zone is an abstract class")}}const b="numeric",Ae="short",ce="long",tr={year:b,month:b,day:b},Ol={year:b,month:Ae,day:b},Rf={year:b,month:Ae,day:b,weekday:Ae},Pl={year:b,month:ce,day:b},ql={year:b,month:ce,day:b,weekday:ce},Dl={hour:b,minute:b},Bl={hour:b,minute:b,second:b},_l={hour:b,minute:b,second:b,timeZoneName:Ae},Hl={hour:b,minute:b,second:b,timeZoneName:ce},Rl={hour:b,minute:b,hourCycle:"h23"},Fl={hour:b,minute:b,second:b,hourCycle:"h23"},Vl={hour:b,minute:b,second:b,hourCycle:"h23",timeZoneName:Ae},Wl={hour:b,minute:b,second:b,hourCycle:"h23",timeZoneName:ce},zl={year:b,month:b,day:b,hour:b,minute:b},Zl={year:b,month:b,day:b,hour:b,minute:b,second:b},jl={year:b,month:Ae,day:b,hour:b,minute:b},Ul={year:b,month:Ae,day:b,hour:b,minute:b,second:b},Ff={year:b,month:Ae,day:b,weekday:Ae,hour:b,minute:b},Gl={year:b,month:ce,day:b,hour:b,minute:b,timeZoneName:Ae},Yl={year:b,month:ce,day:b,hour:b,minute:b,second:b,timeZoneName:Ae},Jl={year:b,month:ce,day:b,weekday:ce,hour:b,minute:b,timeZoneName:ce},Kl={year:b,month:ce,day:b,weekday:ce,hour:b,minute:b,second:b,timeZoneName:ce};class Tn{get type(){throw new We}get name(){throw new We}get ianaName(){return this.name}get isUniversal(){throw new We}offsetName(t,n){throw new We}formatOffset(t,n){throw new We}offset(t){throw new We}equals(t){throw new We}get isValid(){throw new We}}let Or=null;class fr extends Tn{static get instance(){return Or===null&&(Or=new fr),Or}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return ac(t,n,r)}formatOffset(t,n){return ln(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Zn={};function Vf(e){return Zn[e]||(Zn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Zn[e]}const Wf={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function zf(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,o,i,a,s,l,c,u]=r;return[a,o,i,s,l,c,u]}function Zf(e,t){const n=e.formatToParts(t),r=[];for(let o=0;o<n.length;o++){const{type:i,value:a}=n[o],s=Wf[i];i==="era"?r[s]=a:I(s)||(r[s]=parseInt(a,10))}return r}let Mn={};class De extends Tn{static create(t){return Mn[t]||(Mn[t]=new De(t)),Mn[t]}static resetCache(){Mn={},Zn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=De.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return ac(t,n,r,this.name)}formatOffset(t,n){return ln(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Vf(this.name);let[o,i,a,s,l,c,u]=r.formatToParts?Zf(r,n):zf(r,n);s==="BC"&&(o=-Math.abs(o)+1);const m=mr({year:o,month:i,day:a,hour:l===24?0:l,minute:c,second:u,millisecond:0});let p=+n;const g=p%1e3;return p-=g>=0?g:1e3+g,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let ya={};function jf(e,t={}){const n=JSON.stringify([e,t]);let r=ya[n];return r||(r=new Intl.ListFormat(e,t),ya[n]=r),r}let bo={};function ko(e,t={}){const n=JSON.stringify([e,t]);let r=bo[n];return r||(r=new Intl.DateTimeFormat(e,t),bo[n]=r),r}let $o={};function Uf(e,t={}){const n=JSON.stringify([e,t]);let r=$o[n];return r||(r=new Intl.NumberFormat(e,t),$o[n]=r),r}let xo={};function Gf(e,t={}){const{base:n,...r}=t,o=JSON.stringify([e,r]);let i=xo[o];return i||(i=new Intl.RelativeTimeFormat(e,t),xo[o]=i),i}let tn=null;function Yf(){return tn||(tn=new Intl.DateTimeFormat().resolvedOptions().locale,tn)}let ba={};function Jf(e){let t=ba[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,ba[e]=t}return t}function Kf(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,o;try{r=ko(e).resolvedOptions(),o=e}catch{const l=e.substring(0,n);r=ko(l).resolvedOptions(),o=l}const{numberingSystem:i,calendar:a}=r;return[o,i,a]}}function Qf(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Xf(e){const t=[];for(let n=1;n<=12;n++){const r=A.utc(2009,n,1);t.push(e(r))}return t}function eh(e){const t=[];for(let n=1;n<=7;n++){const r=A.utc(2016,11,13+n);t.push(e(r))}return t}function Ln(e,t,n,r){const o=e.listingMode();return o==="error"?null:o==="en"?n(t):r(t)}function th(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class nh{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:o,floor:i,...a}=r;if(!n||Object.keys(a).length>0){const s={useGrouping:!1,...r};r.padTo>0&&(s.minimumIntegerDigits=r.padTo),this.inf=Uf(t,s)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):gi(t,3);return J(n,this.padTo)}}}class rh{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let o;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&De.create(s).valid?(o=s,this.dt=t):(o="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,o=t.zone.name):(o="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const i={...this.opts};i.timeZone=i.timeZone||o,this.dtf=ko(n,i)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class oh{constructor(t,n,r){this.opts={style:"long",...r},!n&&oc()&&(this.rtf=Gf(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Th(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const ih={firstDay:1,minimalDays:4,weekend:[6,7]};class V{static fromOpts(t){return V.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,o,i=!1){const a=t||G.defaultLocale,s=a||(i?"en-US":Yf()),l=n||G.defaultNumberingSystem,c=r||G.defaultOutputCalendar,u=To(o)||G.defaultWeekSettings;return new V(s,l,c,u,a)}static resetCache(){tn=null,bo={},$o={},xo={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:o}={}){return V.create(t,n,r,o)}constructor(t,n,r,o,i){const[a,s,l]=Kf(t);this.locale=a,this.numberingSystem=n||s||null,this.outputCalendar=r||l||null,this.weekSettings=o,this.intl=Qf(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=th(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:V.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,To(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return Ln(this,t,cc,()=>{const r=n?{month:t,day:"numeric"}:{month:t},o=n?"format":"standalone";return this.monthsCache[o][t]||(this.monthsCache[o][t]=Xf(i=>this.extract(i,r,"month"))),this.monthsCache[o][t]})}weekdays(t,n=!1){return Ln(this,t,fc,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},o=n?"format":"standalone";return this.weekdaysCache[o][t]||(this.weekdaysCache[o][t]=eh(i=>this.extract(i,r,"weekday"))),this.weekdaysCache[o][t]})}meridiems(){return Ln(this,void 0,()=>hc,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[A.utc(2016,11,13,9),A.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return Ln(this,t,mc,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[A.utc(-40,1,1),A.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const o=this.dtFormatter(t,n),i=o.formatToParts(),a=i.find(s=>s.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new nh(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new rh(t,this.intl,n)}relFormatter(t={}){return new oh(this.intl,this.isEnglish(),t)}listFormatter(t={}){return jf(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ic()?Jf(this.locale):ih}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Pr=null;class re extends Tn{static get utcInstance(){return Pr===null&&(Pr=new re(0)),Pr}static instance(t){return t===0?re.utcInstance:new re(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new re(pr(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${ln(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${ln(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return ln(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class ah extends Tn{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Ge(e,t){if(I(e)||e===null)return t;if(e instanceof Tn)return e;if(ch(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?fr.instance:n==="utc"||n==="gmt"?re.utcInstance:re.parseSpecifier(n)||De.create(e)}else return mt(e)?re.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new ah(e)}let ka=()=>Date.now(),$a="system",xa=null,Ta=null,Sa=null,Ea=60,Aa,Ca=null;class G{static get now(){return ka}static set now(t){ka=t}static set defaultZone(t){$a=t}static get defaultZone(){return Ge($a,fr.instance)}static get defaultLocale(){return xa}static set defaultLocale(t){xa=t}static get defaultNumberingSystem(){return Ta}static set defaultNumberingSystem(t){Ta=t}static get defaultOutputCalendar(){return Sa}static set defaultOutputCalendar(t){Sa=t}static get defaultWeekSettings(){return Ca}static set defaultWeekSettings(t){Ca=To(t)}static get twoDigitCutoffYear(){return Ea}static set twoDigitCutoffYear(t){Ea=t%100}static get throwOnInvalid(){return Aa}static set throwOnInvalid(t){Aa=t}static resetCaches(){V.resetCache(),De.resetCache()}}class Ee{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Ql=[0,31,59,90,120,151,181,212,243,273,304,334],Xl=[0,31,60,91,121,152,182,213,244,274,305,335];function ve(e,t){return new Ee("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function hi(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const o=r.getUTCDay();return o===0?7:o}function ec(e,t,n){return n+(Sn(e)?Xl:Ql)[t-1]}function tc(e,t){const n=Sn(e)?Xl:Ql,r=n.findIndex(i=>i<t),o=t-n[r];return{month:r+1,day:o}}function mi(e,t){return(e-t+7)%7+1}function nr(e,t=4,n=1){const{year:r,month:o,day:i}=e,a=ec(r,o,i),s=mi(hi(r,o,i),n);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=r-1,l=wn(c,t,n)):l>wn(r,t,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:s,...gr(e)}}function Ia(e,t=4,n=1){const{weekYear:r,weekNumber:o,weekday:i}=e,a=mi(hi(r,1,t),n),s=Nt(r);let l=o*7+i-a-7+t,c;l<1?(c=r-1,l+=Nt(c)):l>s?(c=r+1,l-=Nt(r)):c=r;const{month:u,day:f}=tc(c,l);return{year:c,month:u,day:f,...gr(e)}}function qr(e){const{year:t,month:n,day:r}=e,o=ec(t,n,r);return{year:t,ordinal:o,...gr(e)}}function Ma(e){const{year:t,ordinal:n}=e,{month:r,day:o}=tc(t,n);return{year:t,month:r,day:o,...gr(e)}}function La(e,t){if(!I(e.localWeekday)||!I(e.localWeekNumber)||!I(e.localWeekYear)){if(!I(e.weekday)||!I(e.weekNumber)||!I(e.weekYear))throw new Lt("Cannot mix locale-based week fields with ISO-based week fields");return I(e.localWeekday)||(e.weekday=e.localWeekday),I(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),I(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function sh(e,t=4,n=1){const r=hr(e.weekYear),o=we(e.weekNumber,1,wn(e.weekYear,t,n)),i=we(e.weekday,1,7);return r?o?i?!1:ve("weekday",e.weekday):ve("week",e.weekNumber):ve("weekYear",e.weekYear)}function lh(e){const t=hr(e.year),n=we(e.ordinal,1,Nt(e.year));return t?n?!1:ve("ordinal",e.ordinal):ve("year",e.year)}function nc(e){const t=hr(e.year),n=we(e.month,1,12),r=we(e.day,1,rr(e.year,e.month));return t?n?r?!1:ve("day",e.day):ve("month",e.month):ve("year",e.year)}function rc(e){const{hour:t,minute:n,second:r,millisecond:o}=e,i=we(t,0,23)||t===24&&n===0&&r===0&&o===0,a=we(n,0,59),s=we(r,0,59),l=we(o,0,999);return i?a?s?l?!1:ve("millisecond",o):ve("second",r):ve("minute",n):ve("hour",t)}function I(e){return typeof e>"u"}function mt(e){return typeof e=="number"}function hr(e){return typeof e=="number"&&e%1===0}function ch(e){return typeof e=="string"}function uh(e){return Object.prototype.toString.call(e)==="[object Date]"}function oc(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ic(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function dh(e){return Array.isArray(e)?e:[e]}function Na(e,t,n){if(e.length!==0)return e.reduce((r,o)=>{const i=[t(o),o];return r&&n(r[0],i[0])===r[0]?r:i},null)[1]}function fh(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function _t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function To(e){if(e==null)return null;if(typeof e!="object")throw new oe("Week settings must be an object");if(!we(e.firstDay,1,7)||!we(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!we(t,1,7)))throw new oe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function we(e,t,n){return hr(e)&&e>=t&&e<=n}function hh(e,t){return e-t*Math.floor(e/t)}function J(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function je(e){if(!(I(e)||e===null||e===""))return parseInt(e,10)}function at(e){if(!(I(e)||e===null||e===""))return parseFloat(e)}function pi(e){if(!(I(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function gi(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Sn(e){return e%4===0&&(e%100!==0||e%400===0)}function Nt(e){return Sn(e)?366:365}function rr(e,t){const n=hh(t-1,12)+1,r=e+(t-n)/12;return n===2?Sn(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function mr(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Oa(e,t,n){return-mi(hi(e,1,t),n)+t-1}function wn(e,t=4,n=1){const r=Oa(e,t,n),o=Oa(e+1,t,n);return(Nt(e)-r+o)/7}function So(e){return e>99?e:e>G.twoDigitCutoffYear?1900+e:2e3+e}function ac(e,t,n,r=null){const o=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(i.timeZone=r);const a={timeZoneName:t,...i},s=new Intl.DateTimeFormat(n,a).formatToParts(o).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function pr(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,o=n<0||Object.is(n,-0)?-r:r;return n*60+o}function sc(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new oe(`Invalid unit value ${e}`);return t}function or(e,t){const n={};for(const r in e)if(_t(e,r)){const o=e[r];if(o==null)continue;n[t(r)]=sc(o)}return n}function ln(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),o=e>=0?"+":"-";switch(t){case"short":return`${o}${J(n,2)}:${J(r,2)}`;case"narrow":return`${o}${n}${r>0?`:${r}`:""}`;case"techie":return`${o}${J(n,2)}${J(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function gr(e){return fh(e,["hour","minute","second","millisecond"])}const mh=["January","February","March","April","May","June","July","August","September","October","November","December"],lc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ph=["J","F","M","A","M","J","J","A","S","O","N","D"];function cc(e){switch(e){case"narrow":return[...ph];case"short":return[...lc];case"long":return[...mh];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const uc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dc=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],gh=["M","T","W","T","F","S","S"];function fc(e){switch(e){case"narrow":return[...gh];case"short":return[...dc];case"long":return[...uc];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const hc=["AM","PM"],vh=["Before Christ","Anno Domini"],wh=["BC","AD"],yh=["B","A"];function mc(e){switch(e){case"narrow":return[...yh];case"short":return[...wh];case"long":return[...vh];default:return null}}function bh(e){return hc[e.hour<12?0:1]}function kh(e,t){return fc(t)[e.weekday-1]}function $h(e,t){return cc(t)[e.month-1]}function xh(e,t){return mc(t)[e.year<0?0:1]}function Th(e,t,n="always",r=!1){const o={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&i){const f=e==="days";switch(t){case 1:return f?"tomorrow":`next ${o[e][0]}`;case-1:return f?"yesterday":`last ${o[e][0]}`;case 0:return f?"today":`this ${o[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=o[e],u=r?l?c[1]:c[2]||c[1]:l?o[e][0]:e;return a?`${s} ${u} ago`:`in ${s} ${u}`}function Pa(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Sh={D:tr,DD:Ol,DDD:Pl,DDDD:ql,t:Dl,tt:Bl,ttt:_l,tttt:Hl,T:Rl,TT:Fl,TTT:Vl,TTTT:Wl,f:zl,ff:jl,fff:Gl,ffff:Jl,F:Zl,FF:Ul,FFF:Yl,FFFF:Kl};class te{static create(t,n={}){return new te(t,n)}static parseFormat(t){let n=null,r="",o=!1;const i=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),n=null,r="",o=!o):o||s===n?r+=s:(r.length>0&&i.push({literal:/^\s+$/.test(r),val:r}),r=s,n=s)}return r.length>0&&i.push({literal:o||/^\s+$/.test(r),val:r}),i}static macroTokenToFormatOpts(t){return Sh[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return J(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",o=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(p,g)=>this.loc.extract(t,p,g),a=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",s=()=>r?bh(t):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(p,g)=>r?$h(t,p):i(g?{month:p}:{month:p,day:"numeric"},"month"),c=(p,g)=>r?kh(t,p):i(g?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),u=p=>{const g=te.macroTokenToFormatOpts(p);return g?this.formatWithSystemDefault(t,g):p},f=p=>r?xh(t,p):i({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return o?i({day:"numeric"},"day"):this.num(t.day);case"dd":return o?i({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return o?i({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return o?i({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return o?i({month:"numeric"},"month"):this.num(t.month);case"MM":return o?i({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return o?i({year:"numeric"},"year"):this.num(t.year);case"yy":return o?i({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return o?i({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return o?i({year:"numeric"},"year"):this.num(t.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return u(p)}};return Pa(te.parseFormat(n),m)}formatDurationFromString(t,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},o=l=>c=>{const u=r(c);return u?this.num(l.get(u),c.length):c},i=te.parseFormat(n),a=i.reduce((l,{literal:c,val:u})=>c?l:l.concat(u),[]),s=t.shiftTo(...a.map(r).filter(l=>l));return Pa(i,o(s))}}const pc=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Vt(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Wt(...e){return t=>e.reduce(([n,r,o],i)=>{const[a,s,l]=i(t,o);return[{...n,...a},s||r,l]},[{},null,1]).slice(0,2)}function zt(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const o=n.exec(e);if(o)return r(o)}return[null,null]}function gc(...e){return(t,n)=>{const r={};let o;for(o=0;o<e.length;o++)r[e[o]]=je(t[n+o]);return[r,null,n+o]}}const vc=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Eh=`(?:${vc.source}?(?:\\[(${pc.source})\\])?)?`,vi=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,wc=RegExp(`${vi.source}${Eh}`),wi=RegExp(`(?:T${wc.source})?`),Ah=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Ch=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Ih=/(\d{4})-?(\d{3})/,Mh=gc("weekYear","weekNumber","weekDay"),Lh=gc("year","ordinal"),Nh=/(\d{4})-(\d\d)-(\d\d)/,yc=RegExp(`${vi.source} ?(?:${vc.source}|(${pc.source}))?`),Oh=RegExp(`(?: ${yc.source})?`);function Ot(e,t,n){const r=e[t];return I(r)?n:je(r)}function Ph(e,t){return[{year:Ot(e,t),month:Ot(e,t+1,1),day:Ot(e,t+2,1)},null,t+3]}function Zt(e,t){return[{hours:Ot(e,t,0),minutes:Ot(e,t+1,0),seconds:Ot(e,t+2,0),milliseconds:pi(e[t+3])},null,t+4]}function En(e,t){const n=!e[t]&&!e[t+1],r=pr(e[t+1],e[t+2]),o=n?null:re.instance(r);return[{},o,t+3]}function An(e,t){const n=e[t]?De.create(e[t]):null;return[{},n,t+1]}const qh=RegExp(`^T?${vi.source}$`),Dh=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Bh(e){const[t,n,r,o,i,a,s,l,c]=e,u=t[0]==="-",f=l&&l[0]==="-",m=(p,g=!1)=>p!==void 0&&(g||p&&u)?-p:p;return[{years:m(at(n)),months:m(at(r)),weeks:m(at(o)),days:m(at(i)),hours:m(at(a)),minutes:m(at(s)),seconds:m(at(l),l==="-0"),milliseconds:m(pi(c),f)}]}const _h={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function yi(e,t,n,r,o,i,a){const s={year:t.length===2?So(je(t)):je(t),month:lc.indexOf(n)+1,day:je(r),hour:je(o),minute:je(i)};return a&&(s.second=je(a)),e&&(s.weekday=e.length>3?uc.indexOf(e)+1:dc.indexOf(e)+1),s}const Hh=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Rh(e){const[,t,n,r,o,i,a,s,l,c,u,f]=e,m=yi(t,o,r,n,i,a,s);let p;return l?p=_h[l]:c?p=0:p=pr(u,f),[m,new re(p)]}function Fh(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Vh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Wh=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,zh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function qa(e){const[,t,n,r,o,i,a,s]=e;return[yi(t,o,r,n,i,a,s),re.utcInstance]}function Zh(e){const[,t,n,r,o,i,a,s]=e;return[yi(t,s,n,r,o,i,a),re.utcInstance]}const jh=Vt(Ah,wi),Uh=Vt(Ch,wi),Gh=Vt(Ih,wi),Yh=Vt(wc),bc=Wt(Ph,Zt,En,An),Jh=Wt(Mh,Zt,En,An),Kh=Wt(Lh,Zt,En,An),Qh=Wt(Zt,En,An);function Xh(e){return zt(e,[jh,bc],[Uh,Jh],[Gh,Kh],[Yh,Qh])}function em(e){return zt(Fh(e),[Hh,Rh])}function tm(e){return zt(e,[Vh,qa],[Wh,qa],[zh,Zh])}function nm(e){return zt(e,[Dh,Bh])}const rm=Wt(Zt);function om(e){return zt(e,[qh,rm])}const im=Vt(Nh,Oh),am=Vt(yc),sm=Wt(Zt,En,An);function lm(e){return zt(e,[im,bc],[am,sm])}const Da="Invalid Duration",kc={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},cm={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...kc},he=146097/400,St=146097/4800,um={years:{quarters:4,months:12,weeks:he/7,days:he,hours:he*24,minutes:he*24*60,seconds:he*24*60*60,milliseconds:he*24*60*60*1e3},quarters:{months:3,weeks:he/28,days:he/4,hours:he*24/4,minutes:he*24*60/4,seconds:he*24*60*60/4,milliseconds:he*24*60*60*1e3/4},months:{weeks:St/7,days:St,hours:St*24,minutes:St*24*60,seconds:St*24*60*60,milliseconds:St*24*60*60*1e3},...kc},dt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],dm=dt.slice(0).reverse();function ze(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new P(r)}function $c(e,t){let n=t.milliseconds??0;for(const r of dm.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Ba(e,t){const n=$c(e,t)<0?-1:1;dt.reduceRight((r,o)=>{if(I(t[o]))return r;if(r){const i=t[r]*n,a=e[o][r],s=Math.floor(i/a);t[o]+=s*n,t[r]-=s*a*n}return o},null),dt.reduce((r,o)=>{if(I(t[o]))return r;if(r){const i=t[r]%1;t[r]-=i,t[o]+=i*e[r][o]}return o},null)}function fm(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class P{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?um:cm;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||V.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return P.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new oe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new P({values:or(t,P.normalizeUnit),loc:V.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(mt(t))return P.fromMillis(t);if(P.isDuration(t))return t;if(typeof t=="object")return P.fromObject(t);throw new oe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=nm(t);return r?P.fromObject(r,n):P.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=om(t);return r?P.fromObject(r,n):P.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the Duration is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(G.throwOnInvalid)throw new Hf(r);return new P({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Nl(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?te.create(this.loc,r).formatDurationFromString(this,t):Da}toHuman(t={}){if(!this.isValid)return Da;const n=dt.map(r=>{const o=this.values[r];return I(o)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(o)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=gi(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},A.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?$c(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=P.fromDurationLike(t),r={};for(const o of dt)(_t(n.values,o)||_t(this.values,o))&&(r[o]=n.get(o)+this.get(o));return ze(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=P.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=sc(t(this.values[r],r));return ze(this,{values:n},!0)}get(t){return this[P.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...or(t,P.normalizeUnit)};return ze(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:o}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:o,conversionAccuracy:r};return ze(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Ba(this.matrix,t),ze(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=fm(this.normalize().shiftToAll().toObject());return ze(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>P.normalizeUnit(a));const n={},r={},o=this.toObject();let i;for(const a of dt)if(t.indexOf(a)>=0){i=a;let s=0;for(const c in r)s+=this.matrix[c][a]*r[c],r[c]=0;mt(o[a])&&(s+=o[a]);const l=Math.trunc(s);n[a]=l,r[a]=(s*1e3-l*1e3)/1e3}else mt(o[a])&&(r[a]=o[a]);for(const a in r)r[a]!==0&&(n[i]+=a===i?r[a]:r[a]/this.matrix[i][a]);return Ba(this.matrix,n),ze(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return ze(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,o){return r===void 0||r===0?o===void 0||o===0:r===o}for(const r of dt)if(!n(this.values[r],t.values[r]))return!1;return!0}}const Et="Invalid Interval";function hm(e,t){return!e||!e.isValid?Y.invalid("missing or invalid start"):!t||!t.isValid?Y.invalid("missing or invalid end"):t<e?Y.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class Y{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the Interval is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(G.throwOnInvalid)throw new _f(r);return new Y({invalid:r})}static fromDateTimes(t,n){const r=Qt(t),o=Qt(n),i=hm(r,o);return i??new Y({start:r,end:o})}static after(t,n){const r=P.fromDurationLike(n),o=Qt(t);return Y.fromDateTimes(o,o.plus(r))}static before(t,n){const r=P.fromDurationLike(n),o=Qt(t);return Y.fromDateTimes(o.minus(r),o)}static fromISO(t,n){const[r,o]=(t||"").split("/",2);if(r&&o){let i,a;try{i=A.fromISO(r,n),a=i.isValid}catch{a=!1}let s,l;try{s=A.fromISO(o,n),l=s.isValid}catch{l=!1}if(a&&l)return Y.fromDateTimes(i,s);if(a){const c=P.fromISO(o,n);if(c.isValid)return Y.after(i,c)}else if(l){const c=P.fromISO(r,n);if(c.isValid)return Y.before(s,c)}}return Y.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let o;return n!=null&&n.useLocaleWeeks?o=this.end.reconfigure({locale:r.locale}):o=this.end,o=o.startOf(t,n),Math.floor(o.diff(r,t).get(t))+(o.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?Y.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Qt).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),r=[];let{s:o}=this,i=0;for(;o<this.e;){const a=n[i]||this.e,s=+a>+this.e?this.e:a;r.push(Y.fromDateTimes(o,s)),o=s,i+=1}return r}splitBy(t){const n=P.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,o=1,i;const a=[];for(;r<this.e;){const s=this.start.plus(n.mapUnits(l=>l*o));i=+s>+this.e?this.e:s,a.push(Y.fromDateTimes(r,i)),r=i,o+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:Y.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return Y.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((o,i)=>o.s-i.s).reduce(([o,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[o,i.union(a)]:[o.concat([i]),a]:[o,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const o=[],i=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),s=a.sort((l,c)=>l.time-c.time);for(const l of s)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&o.push(Y.fromDateTimes(n,l.time)),n=null);return Y.merge(o)}difference(...t){return Y.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Et}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=tr,n={}){return this.isValid?te.create(this.s.loc.clone(n),t).formatInterval(this):Et}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Et}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Et}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Et}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:Et}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):P.invalid(this.invalidReason)}mapEndpoints(t){return Y.fromDateTimes(t(this.s),t(this.e))}}class nn{static hasDST(t=G.defaultZone){const n=A.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return De.isValidZone(t)}static normalizeZone(t){return Ge(t,G.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||V.create(n,r,i)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null,outputCalendar:i="gregory"}={}){return(o||V.create(n,r,i)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||V.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:o=null}={}){return(o||V.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return V.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return V.create(n,null,"gregory").eras(t)}static features(){return{relative:oc(),localeWeek:ic()}}}function _a(e,t){const n=o=>o.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(P.fromMillis(r).as("days"))}function mm(e,t,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const u=_a(l,c);return(u-u%7)/7}],["days",_a]],o={},i=e;let a,s;for(const[l,c]of r)n.indexOf(l)>=0&&(a=l,o[l]=c(e,t),s=i.plus(o),s>t?(o[l]--,e=i.plus(o),e>t&&(s=e,o[l]--,e=i.plus(o))):e=s);return[e,o,s,a]}function pm(e,t,n,r){let[o,i,a,s]=mm(e,t,n);const l=t-o,c=n.filter(f=>["hours","minutes","seconds","milliseconds"].indexOf(f)>=0);c.length===0&&(a<t&&(a=o.plus({[s]:1})),a!==o&&(i[s]=(i[s]||0)+l/(a-o)));const u=P.fromObject(i,r);return c.length>0?P.fromMillis(l,r).shiftTo(...c).plus(u):u}const bi={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ha={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},gm=bi.hanidec.replace(/[\[|\]]/g,"").split("");function vm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(bi.hanidec)!==-1)t+=gm.indexOf(e[n]);else for(const o in Ha){const[i,a]=Ha[o];r>=i&&r<=a&&(t+=r-i)}}return parseInt(t,10)}else return t}function $e({numberingSystem:e},t=""){return new RegExp(`${bi[e||"latn"]}${t}`)}const wm="missing Intl.DateTimeFormat.formatToParts support";function _(e,t=n=>n){return{regex:e,deser:([n])=>t(vm(n))}}const ym=String.fromCharCode(160),xc=`[ ${ym}]`,Tc=new RegExp(xc,"g");function bm(e){return e.replace(/\./g,"\\.?").replace(Tc,xc)}function Ra(e){return e.replace(/\./g,"").replace(Tc," ").toLowerCase()}function xe(e,t){return e===null?null:{regex:RegExp(e.map(bm).join("|")),deser:([n])=>e.findIndex(r=>Ra(n)===Ra(r))+t}}function Fa(e,t){return{regex:e,deser:([,n,r])=>pr(n,r),groups:t}}function Nn(e){return{regex:e,deser:([t])=>t}}function km(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function $m(e,t){const n=$e(t),r=$e(t,"{2}"),o=$e(t,"{3}"),i=$e(t,"{4}"),a=$e(t,"{6}"),s=$e(t,"{1,2}"),l=$e(t,"{1,3}"),c=$e(t,"{1,6}"),u=$e(t,"{1,9}"),f=$e(t,"{2,4}"),m=$e(t,"{4,6}"),p=x=>({regex:RegExp(km(x.val)),deser:([$])=>$,literal:!0}),y=(x=>{if(e.literal)return p(x);switch(x.val){case"G":return xe(t.eras("short"),0);case"GG":return xe(t.eras("long"),0);case"y":return _(c);case"yy":return _(f,So);case"yyyy":return _(i);case"yyyyy":return _(m);case"yyyyyy":return _(a);case"M":return _(s);case"MM":return _(r);case"MMM":return xe(t.months("short",!0),1);case"MMMM":return xe(t.months("long",!0),1);case"L":return _(s);case"LL":return _(r);case"LLL":return xe(t.months("short",!1),1);case"LLLL":return xe(t.months("long",!1),1);case"d":return _(s);case"dd":return _(r);case"o":return _(l);case"ooo":return _(o);case"HH":return _(r);case"H":return _(s);case"hh":return _(r);case"h":return _(s);case"mm":return _(r);case"m":return _(s);case"q":return _(s);case"qq":return _(r);case"s":return _(s);case"ss":return _(r);case"S":return _(l);case"SSS":return _(o);case"u":return Nn(u);case"uu":return Nn(s);case"uuu":return _(n);case"a":return xe(t.meridiems(),0);case"kkkk":return _(i);case"kk":return _(f,So);case"W":return _(s);case"WW":return _(r);case"E":case"c":return _(n);case"EEE":return xe(t.weekdays("short",!1),1);case"EEEE":return xe(t.weekdays("long",!1),1);case"ccc":return xe(t.weekdays("short",!0),1);case"cccc":return xe(t.weekdays("long",!0),1);case"Z":case"ZZ":return Fa(new RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return Fa(new RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return Nn(/[a-z_+-/]{1,256}?/i);case" ":return Nn(/[^\S\n\r]/);default:return p(x)}})(e)||{invalidReason:wm};return y.token=e,y}const xm={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Tm(e,t,n){const{type:r,value:o}=e;if(r==="literal"){const l=/^\s+$/.test(o);return{literal:!l,val:l?" ":o}}const i=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let s=xm[a];if(typeof s=="object"&&(s=s[i]),s)return{literal:!1,val:s}}function Sm(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function Em(e,t,n){const r=e.match(t);if(r){const o={};let i=1;for(const a in n)if(_t(n,a)){const s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(o[s.token.val[0]]=s.deser(r.slice(i,i+l))),i+=l}return[r,o]}else return[r,{}]}function Am(e){const t=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return I(e.z)||(n=De.create(e.z)),I(e.Z)||(n||(n=new re(e.Z)),r=e.Z),I(e.q)||(e.M=(e.q-1)*3+1),I(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),I(e.u)||(e.S=pi(e.u)),[Object.keys(e).reduce((i,a)=>{const s=t(a);return s&&(i[s]=e[a]),i},{}),n,r]}let Dr=null;function Cm(){return Dr||(Dr=A.fromMillis(1555555555555)),Dr}function Im(e,t){if(e.literal)return e;const n=te.macroTokenToFormatOpts(e.val),r=Ac(n,t);return r==null||r.includes(void 0)?e:r}function Sc(e,t){return Array.prototype.concat(...e.map(n=>Im(n,t)))}function Ec(e,t,n){const r=Sc(te.parseFormat(n),e),o=r.map(a=>$m(a,e)),i=o.find(a=>a.invalidReason);if(i)return{input:t,tokens:r,invalidReason:i.invalidReason};{const[a,s]=Sm(o),l=RegExp(a,"i"),[c,u]=Em(t,l,s),[f,m,p]=u?Am(u):[null,null,void 0];if(_t(u,"a")&&_t(u,"H"))throw new Lt("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:c,matches:u,result:f,zone:m,specificOffset:p}}}function Mm(e,t,n){const{result:r,zone:o,specificOffset:i,invalidReason:a}=Ec(e,t,n);return[r,o,i,a]}function Ac(e,t){if(!e)return null;const r=te.create(t,e).dtFormatter(Cm()),o=r.formatToParts(),i=r.resolvedOptions();return o.map(a=>Tm(a,e,i))}const Br="Invalid DateTime",Va=864e13;function On(e){return new Ee("unsupported zone",`the zone "${e.name}" is not supported`)}function _r(e){return e.weekData===null&&(e.weekData=nr(e.c)),e.weekData}function Hr(e){return e.localWeekData===null&&(e.localWeekData=nr(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function st(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new A({...n,...t,old:n})}function Cc(e,t,n){let r=e-t*60*1e3;const o=n.offset(r);if(t===o)return[r,t];r-=(o-t)*60*1e3;const i=n.offset(r);return o===i?[r,o]:[e-Math.min(o,i)*60*1e3,Math.max(o,i)]}function Pn(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function jn(e,t,n){return Cc(mr(e),t,n)}function Wa(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),o=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,i={...e.c,year:r,month:o,day:Math.min(e.c.day,rr(r,o))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=P.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=mr(i);let[l,c]=Cc(s,n,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Kt(e,t,n,r,o,i){const{setZone:a,zone:s}=n;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=A.fromObject(e,{...n,zone:l,specificOffset:i});return a?c:c.setZone(s)}else return A.invalid(new Ee("unparsable",`the input "${o}" can't be parsed as ${r}`))}function qn(e,t,n=!0){return e.isValid?te.create(V.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Rr(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=J(e.c.year,n?6:4),t?(r+="-",r+=J(e.c.month),r+="-",r+=J(e.c.day)):(r+=J(e.c.month),r+=J(e.c.day)),r}function za(e,t,n,r,o,i){let a=J(e.c.hour);return t?(a+=":",a+=J(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=J(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=J(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=J(e.c.millisecond,3))),o&&(e.isOffsetFixed&&e.offset===0&&!i?a+="Z":e.o<0?(a+="-",a+=J(Math.trunc(-e.o/60)),a+=":",a+=J(Math.trunc(-e.o%60))):(a+="+",a+=J(Math.trunc(e.o/60)),a+=":",a+=J(Math.trunc(e.o%60)))),i&&(a+="["+e.zone.ianaName+"]"),a}const Ic={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Lm={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Nm={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Mc=["year","month","day","hour","minute","second","millisecond"],Om=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Pm=["year","ordinal","hour","minute","second","millisecond"];function qm(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Nl(e);return t}function Za(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return qm(e)}}function ja(e,t){const n=Ge(t.zone,G.defaultZone),r=V.fromObject(t),o=G.now();let i,a;if(I(e.year))i=o;else{for(const c of Mc)I(e[c])&&(e[c]=Ic[c]);const s=nc(e)||rc(e);if(s)return A.invalid(s);const l=n.offset(o);[i,a]=jn(e,l,n)}return new A({ts:i,zone:n,loc:r,o:a})}function Ua(e,t,n){const r=I(n.round)?!0:n.round,o=(a,s)=>(a=gi(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,s)),i=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return o(i(n.unit),n.unit);for(const a of n.units){const s=i(a);if(Math.abs(s)>=1)return o(s,a)}return o(e>t?-0:0,n.units[n.units.length-1])}function Ga(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class A{constructor(t){const n=t.zone||G.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Ee("invalid input"):null)||(n.isValid?null:On(n));this.ts=I(t.ts)?G.now():t.ts;let o=null,i=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[o,i]=[t.old.c,t.old.o];else{const s=n.offset(this.ts);o=Pn(this.ts,s),r=Number.isNaN(o.year)?new Ee("invalid input"):null,o=r?null:o,i=r?null:s}this._zone=n,this.loc=t.loc||V.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=o,this.o=i,this.isLuxonDateTime=!0}static now(){return new A({})}static local(){const[t,n]=Ga(arguments),[r,o,i,a,s,l,c]=n;return ja({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,n]=Ga(arguments),[r,o,i,a,s,l,c]=n;return t.zone=re.utcInstance,ja({year:r,month:o,day:i,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,n={}){const r=uh(t)?t.valueOf():NaN;if(Number.isNaN(r))return A.invalid("invalid input");const o=Ge(n.zone,G.defaultZone);return o.isValid?new A({ts:r,zone:o,loc:V.fromObject(n)}):A.invalid(On(o))}static fromMillis(t,n={}){if(mt(t))return t<-Va||t>Va?A.invalid("Timestamp out of range"):new A({ts:t,zone:Ge(n.zone,G.defaultZone),loc:V.fromObject(n)});throw new oe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(mt(t))return new A({ts:t*1e3,zone:Ge(n.zone,G.defaultZone),loc:V.fromObject(n)});throw new oe("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Ge(n.zone,G.defaultZone);if(!r.isValid)return A.invalid(On(r));const o=V.fromObject(n),i=or(t,Za),{minDaysInFirstWeek:a,startOfWeek:s}=La(i,o),l=G.now(),c=I(n.specificOffset)?r.offset(l):n.specificOffset,u=!I(i.ordinal),f=!I(i.year),m=!I(i.month)||!I(i.day),p=f||m,g=i.weekYear||i.weekNumber;if((p||u)&&g)throw new Lt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&u)throw new Lt("Can't mix ordinal dates with month/day");const y=g||i.weekday&&!p;let x,$,C=Pn(l,c);y?(x=Om,$=Lm,C=nr(C,a,s)):u?(x=Pm,$=Nm,C=qr(C)):(x=Mc,$=Ic);let z=!1;for(const rt of x){const Ve=i[rt];I(Ve)?z?i[rt]=$[rt]:i[rt]=C[rt]:z=!0}const X=y?sh(i,a,s):u?lh(i):nc(i),be=X||rc(i);if(be)return A.invalid(be);const nt=y?Ia(i,a,s):u?Ma(i):i,[jt,Ut]=jn(nt,c,r),Gt=new A({ts:jt,zone:r,o:Ut,loc:o});return i.weekday&&p&&t.weekday!==Gt.weekday?A.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${Gt.toISO()}`):Gt}static fromISO(t,n={}){const[r,o]=Xh(t);return Kt(r,o,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,o]=em(t);return Kt(r,o,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,o]=tm(t);return Kt(r,o,n,"HTTP",n)}static fromFormat(t,n,r={}){if(I(t)||I(n))throw new oe("fromFormat requires an input string and a format");const{locale:o=null,numberingSystem:i=null}=r,a=V.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0}),[s,l,c,u]=Mm(a,t,n);return u?A.invalid(u):Kt(s,l,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return A.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,o]=lm(t);return Kt(r,o,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the DateTime is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(G.throwOnInvalid)throw new Bf(r);return new A({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Ac(t,V.fromObject(n));return r?r.map(o=>o?o.val:null).join(""):null}static expandFormat(t,n={}){return Sc(te.parseFormat(t),V.fromObject(n)).map(o=>o.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?_r(this).weekYear:NaN}get weekNumber(){return this.isValid?_r(this).weekNumber:NaN}get weekday(){return this.isValid?_r(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Hr(this).weekday:NaN}get localWeekNumber(){return this.isValid?Hr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Hr(this).weekYear:NaN}get ordinal(){return this.isValid?qr(this.c).ordinal:NaN}get monthShort(){return this.isValid?nn.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?nn.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?nn.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?nn.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=mr(this.c),o=this.zone.offset(r-t),i=this.zone.offset(r+t),a=this.zone.offset(r-o*n),s=this.zone.offset(r-i*n);if(a===s)return[this];const l=r-a*n,c=r-s*n,u=Pn(l,a),f=Pn(c,s);return u.hour===f.hour&&u.minute===f.minute&&u.second===f.second&&u.millisecond===f.millisecond?[st(this,{ts:l}),st(this,{ts:c})]:[this]}get isInLeapYear(){return Sn(this.year)}get daysInMonth(){return rr(this.year,this.month)}get daysInYear(){return this.isValid?Nt(this.year):NaN}get weeksInWeekYear(){return this.isValid?wn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:o}=te.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:o}}toUTC(t=0,n={}){return this.setZone(re.instance(t),n)}toLocal(){return this.setZone(G.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Ge(t,G.defaultZone),t.equals(this.zone))return this;if(t.isValid){let o=this.ts;if(n||r){const i=t.offset(this.ts),a=this.toObject();[o]=jn(a,i,t)}return st(this,{ts:o,zone:t})}else return A.invalid(On(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const o=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return st(this,{loc:o})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=or(t,Za),{minDaysInFirstWeek:r,startOfWeek:o}=La(n,this.loc),i=!I(n.weekYear)||!I(n.weekNumber)||!I(n.weekday),a=!I(n.ordinal),s=!I(n.year),l=!I(n.month)||!I(n.day),c=s||l,u=n.weekYear||n.weekNumber;if((c||a)&&u)throw new Lt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Lt("Can't mix ordinal dates with month/day");let f;i?f=Ia({...nr(this.c,r,o),...n},r,o):I(n.ordinal)?(f={...this.toObject(),...n},I(n.day)&&(f.day=Math.min(rr(f.year,f.month),f.day))):f=Ma({...qr(this.c),...n});const[m,p]=jn(f,this.o,this.zone);return st(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const n=P.fromDurationLike(t);return st(this,Wa(this,n))}minus(t){if(!this.isValid)return this;const n=P.fromDurationLike(t).negate();return st(this,Wa(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},o=P.normalizeUnit(t);switch(o){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(o==="weeks")if(n){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(r.weekNumber=this.weekNumber-1),r.weekday=i}else r.weekday=1;if(o==="quarters"){const i=Math.ceil(this.month/3);r.month=(i-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?te.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):Br}toLocaleString(t=tr,n={}){return this.isValid?te.create(this.loc.clone(n),t).formatDateTime(this):Br}toLocaleParts(t={}){return this.isValid?te.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:o=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Rr(this,a);return s+="T",s+=za(this,a,n,r,o,i),s}toISODate({format:t="extended"}={}){return this.isValid?Rr(this,t==="extended"):null}toISOWeekDate(){return qn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:o=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(o?"T":"")+za(this,a==="extended",n,t,r,i):null}toRFC2822(){return qn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return qn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Rr(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let o="HH:mm:ss.SSS";return(n||t)&&(r&&(o+=" "),n?o+="z":t&&(o+="ZZ")),qn(this,o,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Br}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return P.invalid("created by diffing an invalid DateTime");const o={locale:this.locale,numberingSystem:this.numberingSystem,...r},i=dh(n).map(P.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=pm(s,l,i,o);return a?c.negate():c}diffNow(t="milliseconds",n={}){return this.diff(A.now(),t,n)}until(t){return this.isValid?Y.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const o=t.valueOf(),i=this.setZone(t.zone,{keepLocalTime:!0});return i.startOf(n,r)<=o&&o<=i.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||A.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let o=["years","months","days","hours","minutes","seconds"],i=t.unit;return Array.isArray(t.unit)&&(o=t.unit,i=void 0),Ua(n,this.plus(r),{...t,numeric:"always",units:o,unit:i})}toRelativeCalendar(t={}){return this.isValid?Ua(t.base||A.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(A.isDateTime))throw new oe("min requires all arguments be DateTimes");return Na(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(A.isDateTime))throw new oe("max requires all arguments be DateTimes");return Na(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:o=null,numberingSystem:i=null}=r,a=V.fromOpts({locale:o,numberingSystem:i,defaultToEN:!0});return Ec(a,t,n)}static fromStringExplain(t,n,r={}){return A.fromFormatExplain(t,n,r)}static get DATE_SHORT(){return tr}static get DATE_MED(){return Ol}static get DATE_MED_WITH_WEEKDAY(){return Rf}static get DATE_FULL(){return Pl}static get DATE_HUGE(){return ql}static get TIME_SIMPLE(){return Dl}static get TIME_WITH_SECONDS(){return Bl}static get TIME_WITH_SHORT_OFFSET(){return _l}static get TIME_WITH_LONG_OFFSET(){return Hl}static get TIME_24_SIMPLE(){return Rl}static get TIME_24_WITH_SECONDS(){return Fl}static get TIME_24_WITH_SHORT_OFFSET(){return Vl}static get TIME_24_WITH_LONG_OFFSET(){return Wl}static get DATETIME_SHORT(){return zl}static get DATETIME_SHORT_WITH_SECONDS(){return Zl}static get DATETIME_MED(){return jl}static get DATETIME_MED_WITH_SECONDS(){return Ul}static get DATETIME_MED_WITH_WEEKDAY(){return Ff}static get DATETIME_FULL(){return Gl}static get DATETIME_FULL_WITH_SECONDS(){return Yl}static get DATETIME_HUGE(){return Jl}static get DATETIME_HUGE_WITH_SECONDS(){return Kl}}function Qt(e){if(A.isDateTime(e))return e;if(e&&e.valueOf&&mt(e.valueOf()))return A.fromJSDate(e);if(e&&typeof e=="object")return A.fromObject(e);throw new oe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function yn(e){const t=A.fromObject(Lu(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function Dm(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const Bm=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],_m=Bm.reduce((e,t)=>(e[t]=t,e),{}),Hm=G.defaultZone.name,ki=_m.UTC;var Ya;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Ya||(Ya={}));const Rm=["hour","minute","second","millisecond"],Fm=Be({hour:14,minute:19,second:7,millisecond:877,timezone:ki}),Vm=Be({year:2023,month:6,day:5,timezone:ki}),Wm=Be(zu(Vm,Fm));var L;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(L||(L={}));const zm={[L.Milliseconds]:"millisecond",[L.Seconds]:"second",[L.Minutes]:"minute",[L.Hours]:"hour",[L.Days]:"day",[L.Weeks]:"week",[L.Months]:"month",[L.Quarters]:"quarter",[L.Years]:"year"},Ja=[L.Milliseconds,L.Seconds,L.Minutes,L.Hours,L.Days,L.Weeks,L.Months,L.Quarters,L.Years];function Ka(e,t){return ue(e,(n,r)=>t==null||!ie(r,"number")?r:ro({number:r,digits:t}))}const Qa={longterm:1,casual:0},Lc={[L.Years]:"longterm",[L.Quarters]:"longterm",[L.Months]:"longterm",[L.Weeks]:"casual",[L.Days]:"casual",[L.Hours]:"casual",[L.Minutes]:"casual",[L.Seconds]:"casual",[L.Milliseconds]:"casual"};function Zm(e){return e.map(r=>Lc[r]).reduce((r,o)=>Qa[o]>Qa[r]?o:r)}var Pt;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(Pt||(Pt={}));function jm({start:e,end:t,units:n,unit:r,diffType:o,decimalCount:i}){const a=yn(e),s=yn(t),l=n??[r],c=l.length===1?Pt.EquivalentUnits:o;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===Pt.AdditiveUnits){const u=Zm(l),f=s.diff(a,l,{conversionAccuracy:u}).toObject();return Ka(f,i)}else if(c===Pt.EquivalentUnits){const u=l.map(m=>{const g=s.diff(a,m,{conversionAccuracy:Lc[m]}).toObject()[m];if(g==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,g]}),f=fu(u);return Ka(f,i)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function Um(e){if(!nn.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function Gm(e){ei(e,Wm),Um(e.timezone),yn(e)}function Ym(e){try{return Gm(e),!0}catch{return!1}}function Jm(e,t){const n=Km(e,t);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${e}'`);return Dm(n,t)}function Xa(e){const t=A.fromJSDate(new Date(e));if(t.isValid)return t}function Km(e,t){if(Ym(e)&&(e=yn(e).toMillis()),A.isDateTime(e))return e.setZone(t);if(ie(e,"number"))return A.fromMillis(e,{zone:ki}).setZone(t);if(ie(e,"string")){const n=A.fromISO(e,{zone:t});return n.isValid?n:Xa(e)}else if(e instanceof Date)return A.fromJSDate(e).setZone(t);return Xa(e)}function Qm(e){return Jm(Date.now(),e)}function Xm(){return Qm(Hm)}const e0={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Ps(e0,Rm);const t0=G.defaultLocale;function n0(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function es(e,t){const n=yn(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??t0});return n0(n)}function r0(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function o0(e,t){const n=qe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter(yt).join(":")}function i0(e,t){return{date:r0(e),time:o0(e,t.includeSeconds),timezone:e.timezone}}function a0(e,t){const n=i0(e,t);return[n.date,n.time,t.includeTimezone&&`(${n.timezone})`].filter(yt).join(" ")}const s0={[L.Milliseconds]:1e3,[L.Seconds]:60,[L.Minutes]:60,[L.Hours]:24,[L.Days]:30,[L.Weeks]:4,[L.Months]:12,[L.Quarters]:4,[L.Years]:1/0};function l0({fullDate:e,relativeTo:t,options:n={}}){const r=n.decimalDigitCount||0,o=jm({start:e,end:t,units:Ja,diffType:Pt.EquivalentUnits}),i=ue(o,(p,g)=>{const y=Math.floor(Math.abs(ro({digits:1,number:g}))),x=y>0,$=n.limitUnitMax?y<s0[p]:!0;return x&&$}),a=Ja.reduce((p,g)=>{var x;return!((x=n.blockedRelativeUnits)!=null&&x.includes(g))&&i[g]?g:p},void 0);if(n.blockJustNow?!1:Fo(e,t)||a===L.Minutes&&o.minutes<2||a===L.Seconds&&o.seconds<11||a===L.Milliseconds&&o.milliseconds<710)return"just now";if(a==null)return;const l=o[a],c=Math.abs(ro({digits:r,number:l})),u=c===1,f=[zm[a],u?"":"s"].join(""),m=u?"a":c;return l<0?`in ${m} ${f}`:`${m} ${f} ago`}function c0(e){return{date:es(e,{dateStyle:"medium"}).replace(/\s/g," "),time:es(e,{timeStyle:"short"}).replace(/\s/g," ")}}const u0={blockedRelativeUnits:[L.Years,L.Quarters],limitUnitMax:!0};function d0(e){var i,a,s;const t=c0(e.fullDate),n=[((i=e.parts)==null?void 0:i.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter(yt).join(" "),r=a0(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),o=(s=e.relativeOptions)!=null&&s.tryRelative?l0({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||Xm(),options:{...u0,...e.relativeOptions}}):void 0;return{everythingString:r,displayString:o||n}}B()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:n}=d0(e);return h`
            <span title=${n}>${t}</span>
        `}});const f0="data-test-id",It=Xe(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=h0(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(f0,e),de}});function h0(e,t,n){m0(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function m0(e,t){if(e.type!==xn.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Eo;(function(e){e.Up="up",e.Down="down"})(Eo||(Eo={}));B()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:q(),openChange:q()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${U.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${Q};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${et({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${j.interaction} linear transform;
        }

        .trigger-icon {
            align-self: flex-start;
        }

        .dropdown.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: flex;
            flex-direction: column;
        }

        .dropdown.open:not(.reverse-direction),
        .dropdown.open:not(.reverse-direction) .select {
            border-radius: 8px 8px 0 0;
        }

        .dropdown.open.reverse-direction,
        .dropdown.open.reverse-direction .select {
            border-radius: 0 0 8px 8px;
        }

        .dropdown-trigger.dropdown-trigger {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        .select {
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px;
            padding-left: 16px;
            ${fe};
            ${F(k.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${F(k.pagePrimary)}
            ${er.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${er.popupShadowReversed};
        }

        .selected-label-prefix {
            ${U.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${fe};
        }

        .select-options .option.selected {
            ${F(k.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${k.accentTertiary.backgroundColor};
        }

        .dropdown:not(.reverse-direction) .select-options .option:last-of-type {
            border-radius: 0 0 8px 8px;
        }

        .dropdown.reverse-direction .select-options .option:first-of-type {
            border-radius: 8px 8px 0 0;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        ${e["toniq-dropdown-disabled"].selector} {
            ${wt};
        }
    `,initCallback:({state:e,host:t,updateState:n})=>{function r(o){var s;const i=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!o.composedPath().includes(i)&&e.dropdownOpen&&n({dropdownOpen:!1})}window.addEventListener("click",r)},renderCallback({dispatch:e,events:t,state:n,inputs:r,updateState:o}){r._forceOpenState!=null&&o({dropdownOpen:r._forceOpenState}),r.disabled&&o({dropdownOpen:!1});const i=r.value?r.options.find(l=>{var c;return l.value===((c=r.value)==null?void 0:c.value)})??r.options[0]:r.options[0],a=r.icon?h`
                  <${N.assign({icon:r.icon})}
                      ${It("rendered-input-icon")}
                  ></${N}>
              `:"",s=r.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${r.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                ?disabled=${!!r.disabled}
                class=${se({dropdown:!0,open:n.dropdownOpen,"reverse-direction":r.direction===Eo.Up})}
                @click=${()=>{const l=!n.dropdownOpen;e(new t.openChange(l)),o({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${n.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${i==null?void 0:i.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${N.assign({icon:ff})}
                            class="trigger-icon"
                        ></${N}>
                    </span>
                </div>
                <div class="select-options">
                    ${r.options.map(l=>h`
                            <span
                                class="option ${l.value===(i==null?void 0:i.value)?"selected":""}"
                                @click=${c=>{c.preventDefault(),c.stopPropagation(),o({dropdownOpen:!1}),e(new t.openChange(!1)),e(new t.selectChange(l))}}
                                role="option"
                            >
                                ${l.label}
                            </span>
                        `)}
                </div>
            </button>
        `}});var Pe;(function(e){e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled"})(Pe||(Pe={}));const Ue=B()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType===Pe.Disabled},styles:({hostClasses:e})=>v`
        :host {
            display: inline;
            text-decoration: underline;
            cursor: pointer;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            cursor: inherit;
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:hover a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:hover {
            color: ${k.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${k.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} {
            cursor: default;
        }
    `,renderCallback({inputs:e}){function t(r){if(e.linkType===Pe.Disabled){r.preventDefault();return}e.linkType===Pe.RouteLink&&ci(r)&&(r.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const n=e.linkType===Pe.NewTab;return h`
            <a
                href=${e.url.toString()}
                ${T("click",t)}
                target=${Qi(n?"_blank":void 0)}
                rel=${Qi(n?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Ao=360,Nc=8;function Oc(e){return(e-Nc)/2}const Ie=He({"main-image-size":Ao,"secondary-image-size":Oc(Ao)}),Le=B()({tagName:"toniq-featured-flip-card-footer",styles:v`
        :host {
            display: inline-flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            align-items: center;
            flex-shrink: 0;
            max-height: 48px;
            overflow: hidden;
            justify-content: space-between;
            gap: 16px;
        }

        .social-urls {
            display: flex;
            flex-wrap: wrap;
            flex-basis: 24px;
            align-items: center;
            max-height: 24px;
            overflow: hidden;
            gap: 16px;
            flex-grow: 1;
        }

        .buttons {
            display: flex;
            gap: 8px;
            flex-grow: 1;
            justify-content: flex-end;
        }

        ${R} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Ie["secondary-image-size"].value} * 2);
        }

        ${Ue} ${R} {
            width: 100%;
        }

        ${Ue} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Ie["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:q(),flipCardButtonClick:q()},renderCallback({inputs:e,dispatch:t,events:n}){const r=e.socialUrls,o=r?ne(r).map(i=>{const a=r[i];if(!a)return;const s=Mf[i];return h`
                          <${Ue.assign({linkType:Pe.NewTab,url:a})}>
                              <${N.assign({icon:s})}></${N}>
                          </${Ue}>
                      `}).filter(yt):"";return h`
            <div class="buttons">
                <${Ue.assign({url:e.viewMoreButtonUrl,linkType:Pe.RouteLink,scrollToTop:!0})}
                    ${T("click",()=>{t(new n.viewMoreButtonClick)})}
                >
                    <${R.assign({text:e.viewMoreButtonText,variant:le.Outline})}></${R}>
                </${Ue}>
                ${e.flipCardButtonText?h`
                          <${R.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new n.flipCardButtonClick)})}
                          ></${R}>
                      `:""}
            </div>
            <div class="social-urls">${o}</div>
        `}}),Fr=B()({tagName:"toniq-flip-card",events:{flippedChange:q()},styles:v`
        :host {
            max-width: 100%;
            display: inline-flex;
            perspective: 1200px;
            position: relative;
            border-radius: 16px;
            box-sizing: border-box;
            min-height: 200px;
        }

        * {
            border-radius: inherit;
            box-sizing: border-box;
        }

        .flip-wrapper {
            width: 100%;
            flex-grow: 1;
            position: relative;
            transition: transform 600ms;
            transform-style: preserve-3d;
            will-change: transform;
        }

        .flip-wrapper.flipped {
            transform: rotateY(180deg);
        }

        .flip-wrapper.flipped .card-face.front {
            pointer-events: none;
        }

        .flip-wrapper.flipped .card-face.back {
            pointer-events: auto;
        }

        ${vf(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${k.pagePrimary.backgroundColor};
        }

        .card-face.back {
            position: absolute;
            transform: rotateY(180deg);
            pointer-events: none;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return h`
            <div
                class="flip-wrapper ${se({flipped:e.flipped})}"
                ${T("click",()=>{t(new n.flippedChange(!e.flipped))})}
            >
                <div class="card-face front"><slot name="front"></slot></div>
                <div class="card-face back"><slot name="back"></slot></div>
            </div>
        `}});B()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:q()},styles:v`
        :host {
            max-width: 100%;
            display: inline-flex;
            position: relative;
            flex-direction: column;
        }

        /* so that the card flip always happens in front of other elements */
        :host(:hover) {
            z-index: 10;
        }

        h3 {
            ${U.h3Font};
            ${U.extraBoldFont};
            margin: 0;
        }

        .card-face {
            display: flex;
            flex-direction: column;
            padding: 32px;
            height: 100%;
            box-sizing: border-box;
        }

        .all-images {
            display: flex;
            flex-grow: 1;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
            max-height: ${Ie["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Ie["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Nc}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Fr} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${Ie["main-image-size"].value};
            height: ${Ie["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${Ie["secondary-image-size"].value};
            height: ${Ie["secondary-image-size"].value};
        }

        .slot-wrapper {
            height: 100%;
            width: 100%;
        }

        .main-image-wrapper > *,
        .secondary-image-wrapper > * {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper,
        .secondary-image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .card-face.front ${Le} {
            margin-top: 24px;
        }

        .card-face.back ${Le} {
            margin-top: 4px;
        }

        .card-face.front h3 {
            margin-bottom: 20px;
        }

        .card-face.back h3 {
            margin-bottom: 4px;
        }

        .card-face.back {
            width: 100%;
            height: 100%;
            max-height: 100%;
            max-width: 100%;
            box-sizing: border-box;
        }

        .paragraphs {
            padding: 4px 0;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 4px;
            ${U.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:n,host:r,dispatch:o,events:i}){var m,p,g,y;const a=e.mainImageSize||Ao,s=Oc(a);co({onElement:r,forCssVar:Ie["main-image-size"],toValue:`${a}px`}),co({onElement:r,forCssVar:Ie["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter(yt).join(" "),c=h`
            <h3>${e.cardTitle}</h3>
        `,u=e.imageUrls[0],f=u?h`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,u))||h`
                          <${In.assign({imageUrl:u})}></${In}>
                      `}
                  </div>
              `:"";return h`
            <${Fr.assign({flipped:t.flipped})}
                ${T(Le.events.viewMoreButtonClick,()=>{o(new i.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${f}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(x=>{var $;return h`
                                    <div class="secondary-image-wrapper">
                                        ${(($=e.customTemplateCallback)==null?void 0:$.call(e,x))||h`
                                            <${In.assign({imageUrl:x})}></${In}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${Le.assign({viewMoreButtonText:l,flipCardButtonText:(p=e.infoParagraphs)!=null&&p.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Le.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${Le}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(g=e.infoParagraphs)==null?void 0:g.map(x=>h`
                                <p>${x}</p>
                            `)}
                    </div>
                    <${Le.assign({viewMoreButtonText:l,flipCardButtonText:(y=e.infoParagraphs)!=null&&y.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Le.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${Le}>
                </div>
            </${Fr}>
        `}});var ee;(function(e){e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4"})(ee||(ee={}));const K=B()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level===ee.H1,"toniq-heading-h2":({inputs:e})=>e.level===ee.H2,"toniq-heading-h3":({inputs:e})=>e.level===ee.H3,"toniq-heading-h4":({inputs:e})=>e.level===ee.H4},styles:({hostClasses:e})=>v`
        ${e["toniq-heading-h1"].selector} {
            ${U.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${U.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${U.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${U.h4Font};
        }

        h1,
        h2,
        h3,
        h4 {
            ${xt};
            font: inherit;
            overflow: inherit;
            text-overflow: inherit;
        }
    `,renderCallback({inputs:e}){return e.level===ee.H1?h`
                <h1><slot></slot></h1>
            `:e.level===ee.H2?h`
                <h2><slot></slot></h2>
            `:e.level===ee.H3?h`
                <h3><slot></slot></h3>
            `:e.level===ee.H4?h`
                <h4><slot></slot></h4>
            `:h`
                <slot></slot>
            `}});function Co({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Co({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Pc({value:e,allowed:t,blocked:n}){const r=t?Co({input:e,matcher:t}):!0,o=n?Co({input:e,matcher:n}):!1;return r&&!o}function ts(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,o)=>(Pc({...e,value:o})?r.filtered.push(o):r.blocked.push(o),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}var Io;(function(e){e.Default="default",e.Outline="outline"})(Io||(Io={}));const Dn=B()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant===Io.Outline,"toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:q(),inputBlock:q()},styles:({hostClasses:e})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
            }

            .focus-border {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${go};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${k.pagePrimary.backgroundColor};
                border-color: ${k.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${N} {
                color: ${k.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${N} {
                color: ${k.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${k.pageSecondary.foregroundColor};
            }

            label {
                max-width: 100%;
                flex-grow: 1;
                cursor: pointer;
                display: inline-flex;
                box-sizing: border-box;
                border: 1px solid transparent;
                align-items: center;
                position: relative;
                padding: 11px 16px;
                border-radius: ${go};
                background-color: ${k.accentTertiary.backgroundColor};
                font: ${U.paragraphFont};
                gap: 4px;
            }

            ${et({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${N} {
                margin-right: 10px;
            }

            input {
                ${Q};
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${k.accentTertiary.foregroundColor};
            }

            .suffix {
                ${U.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${wt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${fe};
            }
        `,renderCallback({inputs:e,dispatch:t,events:n}){const{filtered:r}=ts({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?h`
                  <${N.assign({icon:e.icon})}></${N}>
              `:"";return h`
            <label>
                ${o}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${r}
                    ${T("input",i=>{if(!(i instanceof InputEvent))throw new Error(`Input event type mismatch: "${i.constructor.name}"`);const a=i.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=i.data,l=r;let c=a.value??"";if(s)if(s.length===1)Pc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new n.inputBlock(s)));else{const{filtered:u,blocked:f}=ts({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=u,t(new n.inputBlock(f))}a.value!==c&&(a.value=c),l!==c&&t(new n.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Qe(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var pt;(function(e){e.Small="small",e.Large="large",e.WholePage="whole-page"})(pt||(pt={}));const ir=B()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size===pt.Large,"toniq-loading-whole-page":({inputs:e})=>e.size===pt.WholePage},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
        }

        ${e["toniq-loading-large"].selector} {
            width: 36px;
            height: 36px;
        }
        ${e["toniq-loading-whole-page"].selector} {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 100%;
            height: 500px;
        }

        ${e["toniq-loading-whole-page"].selector} ${N} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${N} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>h`
            <${N.assign({icon:mf,fitContainer:e.size!==pt.Small})}></${N}>
        `});async function p0(e){return navigator.clipboard.writeText(e)}const g0="…";function v0(e,t){const n=e.slice(0,t).trim(),r=e.slice(-1*t).trim();return`${n}${g0}${r}`}function w0(e){return!(e%1)}function y0(e){return e.letterCount==null?4:w0(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}B()({tagName:"toniq-middle-ellipsis",events:{copy:q()},cssVars:{"toniq-middle-ellipsis-text-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":k.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":k.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":k.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            /* 5 frames at 60 fps */
            transition: ${j.interaction};
            ${U.paragraphFont};
            color: ${t["toniq-middle-ellipsis-text-color"].value};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) {
            color: ${t["toniq-middle-ellipsis-text-hover-color"].value};
        }

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${N} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${N} {
            margin-left: 4px;
            color: ${t["toniq-middle-ellipsis-icon-color"].value};
        }

        .copyable {
            cursor: pointer;
        }

        a {
            color: inherit;
            text-decoration: none;
            border-radius: 8px;
            position: relative;
            outline: none;
        }
        a:visited {
            color: inherit;
        }

        button {
            ${Q};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${k.pagePrimary.backgroundColor};
            background-color: ${k.pagePrimary.backgroundColor};
            display: flex;
            position: absolute;
            height: 100%;
            right: 0;
            max-width: 100%;
            pointer-events: none;
            transition: opacity ${j.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:n,state:r,updateState:o}){if(!e.text)return h``;const i=e.text,a=y0(e),s=!!e.externalLink,l=!!e.copyOnClick,c=i.length>a*2+2,u=c?v0(i,a):i,f=c?i:"",m=s?hf:l?Sl:void 0,p=m?h`
                  <${N.assign({icon:m})}></${N}>
              `:"",g=h`
            <span title=${f} class="text-content">
                ${Qe(!!e.copyOnClick,h`
                        <span
                            class=${se({"copied-text":!0,"show-copied-text":r.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${u}
            </span>
        `;return u?s?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${T("click",y=>{var $,C;const x=(C=($=y.currentTarget)==null?void 0:$.querySelector)==null?void 0:C.call($,"a");if(!x)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");x.click()})}
                        class="link-wrapper"
                    >
                        <!--
                            This <a> element has no tabindex because the button above should be
                            focused in stead. This is a workaround for the fact that Safari does not
                            support tab-focus for <a> elements.
                        -->
                        <a
                            tabindex="-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-wrapper"
                            href=${e.externalLink}
                            title=${f}
                        >
                            ${g} ${p}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${T("click",async()=>{await p0(i),t(new n.copy),r.showCopiedTextTimeoutId!=null&&window.clearTimeout(r.showCopiedTextTimeoutId),o({showCopiedTextTimeoutId:window.setTimeout(()=>{o({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${g} ${p}
                    </button>
                `:h`
                    ${g}
                `:h``}});const ns="...";function b0(e,t,n=7,r=5){let o;e=ft({value:e,min:1,max:t}),n=ft({value:n,min:r,max:t});const i=n-5,a=n-3;t<=n?o=n:o=e<a||e>t-a?a:i;const s={start:Math.round(e-o/2),end:Math.round(e+o/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>n?Vr(t-o,t):e>o?Vr(Math.min(s.start,t-o),Math.min(s.end,t)):Vr(1,Math.min(t,o+1));function c(f,m){return l.length+1!==t?m:[f]}const u=l[l.length-1];if(u&&u<t){const f=c(t,[ns,t]);return[...l,...f]}else return l[0]!==1?c(1,[1,ns]).concat(l):l}function Vr(e,t){const n=t-e+1;return Array.from({length:n},(r,o)=>e+o)}B()({tagName:"toniq-pagination",styles:v`
        :host {
            display: flex;
        }

        button {
            ${Q};
            cursor: pointer;
        }

        button,
        .page {
            display: flex;
            align-items: center;
            ${fe};
            justify-content: center;
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${F(k.accentSecondary)};
        }

        .control:hover {
            ${F(k.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${F(k.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${U.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${F(k.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${F(k.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:q()},renderCallback({inputs:e,events:t,dispatch:n}){return e.pageCount<=1?h``:h`
                <button
                    ${T("click",()=>{e.currentPage>1&&n(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${N.assign({icon:xl})}></${N}>
                </button>
                ${b0(e.currentPage,e.pageCount,e.pagesShown).map(r=>typeof r=="string"?h`
                                <div class="page" disabled>${r}</div>
                            `:h`
                                <button
                                    class=${se({page:!0,selected:e.currentPage===r})}
                                    ?disabled=${e.currentPage===r}
                                    ${T("click",()=>{n(new t.pageChange(r))})}
                                >
                                    ${r}
                                </button>
                            `)}
                <button
                    ${T("click",()=>{e.currentPage<e.pageCount&&n(new t.pageChange(e.currentPage+1))})}
                    class="control"
                    ?disabled=${e.currentPage>=e.pageCount}
                >
                    <${N.assign({icon:Tl})}></${N}>
                </button>
            `}});B()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>v`
        :host {
            position: relative;
            width: 100%;
            display: inline-block;
            background: ${k.accentSecondary.backgroundColor};
            height: 8px;
            border-radius: 16px;
            overflow: hidden;
        }
        .progress {
            position: absolute;
            height: inherit;
            border-radius: inherit;
            left: 0;
            top: 0;
            width: ${e["toniq-progress-width"].value};
            background: ${k.pageInteraction.foregroundColor};
        }
    `,renderCallback({inputs:e,cssVars:t,host:n}){const r=ft({value:e.percent,max:100,min:0}),o=`${r}%`;return co({forCssVar:t["toniq-progress-width"],onElement:n,toValue:o}),n.setAttribute("title",`${o} finished`),r?h`
                <div class="progress"></div>
            `:Z}});const k0=B()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:q()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Se("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Se("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Se("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Se("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>v`
        :host {
            ${U.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${j.interaction},
                background-color ${j.interaction},
                opacity ${j.interaction};
            flex-direction: column;
            gap: 24px;
            text-align: left;
        }

        .wrapper,
        input {
            cursor: pointer;
        }

        .label {
            text-align: inherit;
        }

        .wrapper {
            color: ${e["toniq-radio-group-unchecked-label-color"].value};
            display: flex;
            align-items: center;
            position: relative;
            border-color: ${e["toniq-radio-group-checked-radio-color"].value};
            outline: none;
            text-align: inherit;
        }

        button {
            ${Q};
            cursor: pointer;
        }

        input {
            visibility: hidden;
            position: absolute;
        }

        .wrapper::before {
            flex-shrink: 0;
            display: inline-block;
            position: relative;
            content: '';
            height: 18px;
            width: 18px;
            box-sizing: border-box;
            padding: 3px;
            margin-right: 8px;
            border: 2px solid ${e["toniq-radio-group-unchecked-radio-color"].value};
            border-radius: 50%;
            transition: ${j.interaction};
            --color-stop: -10%;
            background-image: radial-gradient(
                ${e["toniq-radio-group-checked-radio-color"].value} var(--color-stop),
                rgba(255, 255, 255, 0) calc(var(--color-stop) + 15%)
            );
        }

        .wrapper:not(.disabled):hover::before {
            border-color: inherit;
            opacity: 0.5;
        }

        .wrapper:not(.disabled):active::before {
            border-color: inherit;
            opacity: 1;
        }

        .wrapper:not(.disabled).checked::before {
            --color-stop: 35%;
            border-color: inherit;
        }

        ${et({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${wt};
        }

        .wrapper.disabled::before {
            ${wt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:Vo()})},renderCallback({inputs:e,dispatch:t,events:n,state:r}){return $0(e.entries).map(i=>x0(e.groupName||r.randomGroupName,e.value,i,()=>{t(new n.valueChange(i.value))}))}});function $0(e){const t=Object.fromEntries(e.map(r=>[r.value,r]));return Object.values(t).length!==e.length&&console.error(`${k0.tagName} was given duplicate entry values.`),Object.values(t)}function x0(e,t,n,r){const o=t===n.value,i=h`
        <slot name=${n.value} class="label">
            <span class="label">${n.label||n.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${n.disabled}
            tabindex="0"
            class=${se({disabled:!!n.disabled,checked:o&&!n.disabled,wrapper:!0})}
            ${T("click",()=>{r()})}
        >
            <input
                ${T("input",()=>{r()})}
                type="radio"
                name=${e}
                ?checked=${o}
            />
            ${i}
        </button>
    `}function Wr(e,t){const n=e[0],r=e[e.length-1];if(n==null||r==null)return 0;if(t<n)return n;if(t>r)return r;const o=e.findIndex((c,u)=>{const f=e[u+1];return f==null?!0:c<=t&&f>=t});if(o<0)return n;const i=e[o];if(i==null)return n;const a=e[o+1];if(a==null)return i;const s=t-i,l=a-t;return s<l?o:o+1}function T0(e,t,n=100){e>t&&([e,t]=[t,e]),n<2&&(n=2);let r=S0(e);const o=[e];for(;r<t;){const i=Math.pow(10,String(r).length-1),a=r+i;a<t&&o.push(a),r=a}return o.push(t),o.length>n&&(rs(o,n),o.length>n&&rs(o,n)),o}function rs(e,t){const n=e.length-t,r=(e.length-2)/n;for(let o=e.length-2;o>=1;o-=r)e.splice(Math.floor(o),1)}function S0(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const n=e.toFixed(0),r=Math.pow(10,n.length-1),o=Number(n[0]||1);return r*o*t}const O={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},Xt={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function E0(e){var r,o;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${O.lowerLabelWrapper} .${O.labelPercentMarginWrapper}`),n=(o=e.shadowRoot)==null?void 0:o.querySelector(`.${O.upperLabelWrapper} .${O.labelPercentMarginWrapper}`);if(n instanceof HTMLElement&&t instanceof HTMLElement){const i=t.getBoundingClientRect(),a=n.getBoundingClientRect();return{lower:i,upper:a}}else return}function A0(e,t=8){const n=E0(e);if(!n)return 0;const r=n.lower.right-n.upper.left+t;return Math.max(0,r)}function zr({value:e,limits:t,flip:n}){const o=(t.max-e)/(t.max-t.min)*100;return-(n?100-o:o)}function bn(e){return Me(e)&&e.min!==void 0&&e.max!==void 0}function Mo(e){var n;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${O.range}`);return(t==null?void 0:t.clientWidth)??0}function Zr(e,t,n){return`${n?Fu(e):e} ${t}`}function C0({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function I0({value:e,double:t,min:n,max:r}){return t?bn(e)?{min:ft({value:e.min,min:n,max:Math.min(e.max,r)}),max:ft({value:e.max,min:Math.max(e.min,n),max:r})}:{min:n,max:r}:bn(e)?n:ft({value:e,min:n,max:r})}function M0({actualValue:e,actualLimits:t,logScale:n,logRange:r}){return n?{elementValue:bn(e)?{min:Wr(r,e.min),max:Wr(r,e.max)}:Wr(r,e),elementLimits:{min:0,max:r.length-1}}:{elementValue:e,elementLimits:t}}function jr(e,t,n){return n?t[e]||0:e}function L0(e){return{actualLimits:C0(e),actualValue:I0(e)}}function N0(e,t){var r,o,i;let n=!1;if(bn(e)){const a=(r=t.shadowRoot)==null?void 0:r.querySelector(`.${O.lowerSlider}`),s=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${O.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),n=!0),Number(s.value)!==e.max&&(s.value=String(e.max),n=!0))}else{const a=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${O.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),n=!0)}return n}function qc(e,t){const{actualValue:n,actualLimits:r}=L0({...e}),o=T0(r.min,r.max),i=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=M0({actualValue:n,actualLimits:r,logScale:i,logRange:o}),c=Mo(t);return{actualValue:n,elementLimits:l,elementValue:s,isLogScale:i,logRange:o,rangeWidth:c,suffix:a}}const ct=16,os=v`
    ${ct}px
`,is=v`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${os};
    width: ${os};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${j.interaction};
    ${F(k.accentPrimary)};
`,as=v`
    transform: scale(1.2);
`;function rn(e){requestAnimationFrame(()=>{const t=qc(e.instanceInputs,e).elementValue;N0(t,e)&&(e.setAttribute("disabled","true"),rn(e))})}B()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:q()},styles:v`
        :host {
            display: block;
        }

        .${S(O.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${F(k.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${F(k.accentPrimary)};
        }

        .${S(O.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${U.boldParagraphFont};
            ${fe};
        }

        .${S(O.labelPixelMarginWrapper)},
            .${S(O.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${S(O.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${S(O.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${et({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${S(O.lowerSlider)},
        .${S(O.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${S(O.slider)}::-moz-range-thumb {
            ${is}
        }

        /* these selectors fail if combined with a comma */
        .${S(O.slider)}::-webkit-slider-thumb {
            ${is}
        }

        /* these selectors fail if combined with a comma */
        .${S(O.slider)}::-webkit-slider-thumb:hover {
            ${as}
        }

        /* these selectors fail if combined with a comma */
        .${S(O.slider)}::-moz-range-thumb:hover {
            ${as}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{rn(e)}),e.addEventListener("keydown",()=>{rn(e)}),e.addEventListener("keyup",()=>{rn(e)})},renderCallback({inputs:e,host:t,events:n,dispatch:r,state:o,updateState:i}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:u,elementLimits:f,rangeWidth:m}=qc({...e},t);if(rn(t),bn(u))return p(a,u,f);return y(a,u,f);function p(x,$,C){const z={left:Te((m-ct)*($.min-C.min)/(C.max-C.min)+ct/2),right:Te((m-ct)*(C.max-$.max)/(C.max-C.min)+ct/2)},X=Zr(x.min,c,l),be=Zr(x.max,c,l);requestAnimationFrame(()=>{const Ve=A0(t);Ve!==o.labelOverlap&&i({labelOverlap:Ve})});const nt=(C.max-$.max)/(C.max-C.min)>.5,jt=zr({value:$.min,limits:{min:C.min,max:$.max},flip:!0}),Ut=zr({value:$.max,limits:{min:$.min,max:C.max},flip:!1}),Gt=o.labelOverlap&&nt?o.labelOverlap:0,rt=o.labelOverlap&&!nt?o.labelOverlap:0;return h`
                <div
                    class="range"
                    ${vn(()=>{i({rangeWidth:Mo(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${z.left}; right:${z.right}"
                    ></div>
                    <span
                        class="${O.labelOuterWrapper} ${O.lowerLabelWrapper}"
                        style="left: ${z.left}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-left: ${kr(jt)}"
                        >
                            <span
                                class="${O.labelPixelMarginWrapper}"
                                style="margin-right: ${Te(rt)}"
                                ${It(Xt.lowerLabel)}
                            >
                                ${X}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${O.labelOuterWrapper} ${O.upperLabelWrapper} ${O.rightAlignedLabelWrapper}"
                        style="right: ${z.right}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-right: ${kr(Ut)}"
                        >
                            <span
                                class="${O.labelPixelMarginWrapper}"
                                style="margin-left: ${Te(Gt)}"
                                ${It(Xt.upperLabel)}
                            >
                                ${be}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            step=${e.step}
                            class="${O.lowerSlider} ${O.slider}"
                            .min=${C.min}
                            .max=${C.max}
                            .value=${$.min}
                            ${T("input",Ve=>{const yr=Ve.target,br={...x,min:jr(Number(yr.value),s,l)};g(br)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${O.upperSlider} ${O.slider}"
                            step=${e.step}
                            .min=${C.min}
                            .max=${C.max}
                            .value=${$.max}
                            ${It(Xt.slider)}
                            ${T("input",Ve=>{const yr=Ve.target,br={...x,max:jr(Number(yr.value),s,l)};g(br)})}
                        />
                    </div>
                </div>
            `}function g(x){i({internalValue:x}),e.disabled||r(new n.valueChange(x))}function y(x,$,C){const z=Te((m-ct)*(C.max-$)/(C.max-C.min)+ct/2),X=Zr(x,c,l),be=zr({value:$,limits:C,flip:!1});return h`
                <div
                    class="range"
                    ${vn(()=>{i({rangeWidth:Mo(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${z}"></div>
                    <span
                        class="${O.labelOuterWrapper} ${O.rightAlignedLabelWrapper}"
                        style="right: ${z}"
                    >
                        <span
                            class="${O.labelPercentMarginWrapper}"
                            style="margin-right: ${kr(be)}"
                            ${It(Xt.label)}
                        >
                            ${X}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${O.slider}"
                        step=${e.step}
                        .min=${C.min}
                        .max=${C.max}
                        .value=${$}
                        ${It(Xt.slider)}
                        ${T("input",nt=>{const jt=nt.target,Ut=jr(Number(jt.value),s,l);g(Ut)})}
                    />
                </div>
            `}}});var Lo;(function(e){e.Default="default",e.TextOnly="text-only"})(Lo||(Lo={}));B()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant===Lo.TextOnly,"toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${U.boldParagraphFont};
            ${fe};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${Q};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${F(k.accentSecondary)};
            transition:
                color ${j.interaction},
                background-color ${j.interaction};
        }

        ${et({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${F(k.accentPrimary)};
        }

        :host(:hover) button {
            ${F(k.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${F(k.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${F(k.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${F(k.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${F(k.pageInteraction)};
            border-color: ${k.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${F(k.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${k.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${F(k.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${wt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${N.assign({icon:e.icon})}
                      class="icon-template"
                  ></${N}>
              `:"",n=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button
                class="${e.toggled?"toggled":""}"
                role="checkbox"
                ?disabled=${e.disabled}
                aria-checked=${e.toggled}
            >
                ${t} ${n}
            </button>
        `}});const ss=di({tagName:"toniq-tooltip",styles:v`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${k.accentPrimary.backgroundColor};
            ${er.menuShadow};
            background-color: ${k.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}});B()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${j.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${j.pretty} ${j.pretty},
                opacity ${j.pretty};
            pointer-events: none;
            visibility: hidden;
            opacity: 0;

            padding: 8px;
            display: block;
            position: absolute;
            width: max-content;
            max-width: 200px;
            top: calc(100% - 8px);
            left: -8px;
        }
    `,stateInitStatic:{clickToggled:!1},renderCallback({inputs:e,state:t,updateState:n}){return h`
            <div
                class="slot-wrapper"
                ${T("click",()=>{n({clickToggled:!t.clickToggled}),t.clickToggled&&setTimeout(()=>{n({clickToggled:!1})},3e3)})}
            >
                <slot></slot>
            </div>
            <div class="tooltip-wrapper">
                <${ss}>${e.tooltipContent}</${ss}>
            </div>
        `}});B()({tagName:"toniq-top-tabs",events:{routeChange:q(),valueChange:q()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>v`
        :host {
            display: block;
        }

        ul {
            ${Q};
            display: flex;
            width: 100%;
        }

        li {
            display: flex;
            align-items: center;
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${k.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${j.interaction},
                border-color ${j.interaction},
                padding-bottom ${j.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${Q};
            ${xt};
            cursor: pointer;
            display: inline-block;
            ${U.paragraphFont};
            max-width: 300px;
        }

        .tab-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .disabled-tab {
            pointer-events: none;
        }

        ${Lr} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${U.boldFont};
            cursor: default;
        }

        li.selected {
            border-color: ${k.pageInteraction.foregroundColor};
            border-bottom-width: ${e["toniq-top-tabs-selected-border-width"].value};
            padding-bottom: calc(
                calc(
                        ${e["toniq-top-tabs-tab-vertical-padding"].value} -
                            ${e["toniq-top-tabs-selected-border-width"].value}
                    ) + 1px
            );
        }

        li:last-child {
            flex-grow: 1;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=e.tabs.map(o=>{var l;const i=o.value===e.value,a=o.icon?h`
                      <${N.assign({icon:o.icon})}></${N}>
                  `:"",s=o.label?h`
                      <${Lr.assign({text:o.label})}></${Lr}>
                  `:"";return h`
                <li
                    ${Ud("tab")}
                    role="presentation"
                    class=${se({selected:i})}
                >
                    <${Ue.assign({url:((l=o.link)==null?void 0:l.url)||"",linkType:Pe.RouteLink})}
                        class="tab ${se({"disabled-tab":!!o.disabled})}"
                        role="tab"
                        title=${o.label}
                        aria-selected=${i?"true":"false"}
                        ${T("click",c=>{var u;i||ci(c)&&((u=o.link)!=null&&u.route&&t(new n.routeChange(o.link.route)),t(new n.valueChange(o.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Ue}>
                </li>
            `});return h`
            <ul role="tablist">
                ${r}
                <li></li>
            </ul>
        `}});const O0="modulepreload",P0=function(e){return"/bitgen/"+e},ls={},q0=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=P0(i),i in ls)return;ls[i]=!0;const a=i.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":O0,a||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),a)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})};var cs;(function(e){e.Upper="upper",e.Lower="lower"})(cs||(cs={}));var us;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(us||(us={}));const D0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function B0(e,t){return e?D0.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function _0(e){return!!e&&typeof e=="object"}function ds(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function H0(e,t){let n=!1;const r=ds(e).reduce((o,i)=>{const a=t(i,e[i],e);return a instanceof Promise&&(n=!0),{...o,[i]:a}},{});return n?new Promise(async(o,i)=>{try{await Promise.all(ds(r).map(async a=>{const s=await r[a];r[a]=s})),o(r)}catch(a){i(a)}}):r}function R0(e){return _0(e)&&B0(e,"liveClient")&&ie(e.liveClient,"function")}function Q1(e){return{liveClient(){return typeof e=="function"?e():e}}}function F0(e,t){return e.includes(t)}var fs;(function(e){e.Upper="upper",e.Lower="lower"})(fs||(fs={}));var hs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(hs||(hs={}));const V0=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function W0(e,t){return e?V0.some(n=>{try{return n(e,t)}catch{return!1}}):!1}const z0=Symbol("set-mock-return-value"),Ur=Symbol("get-last-called-args"),Z0=["then","catch","finally"];function Dc(){const e={},t=()=>{};function n(r){return r in e||(e[r]=Dc()),e[r]}return new Proxy(t,{get:(r,o)=>o===Ur?e[Ur]:F0(Z0,o)&&!W0(e,o)?void 0:n(o),apply:(r,o,i)=>(e[Ur]=i,n(z0)),set:(r,o,i)=>(e[o]=i,!0),has(r,o){return o in e}})}async function j0(e,t){const n=await e(),r=Object.values(n).find(R0);if(!r)throw new Error(`Failed to find any client definitions exported for client '${t}'`);return await r.liveClient()}function U0({clientImports:e,isTestEnv:t,mockClients:n}){const r={};let o;return Object.entries(e).forEach(([i,a])=>{Object.defineProperty(r,i,{async get(){if(t){if(n&&(o||(o=typeof n=="function"?await n():n),o&&i in o)){const s=o[i];if(!s)throw new Error(`Mock client for '${i}' is not defined.`);return await s}return Dc()}else return await j0(a,i)}})}),r}async function G0(e){return H0(e,async(n,r)=>{try{return await r}catch(o){console.error(`Failed to await client '${String(n)}':`,o);return}})}const Y0=U0({clientImports:{collectionStorage:()=>q0(()=>import("./collection-storage.client-4f7e82b4.js"),[])},isTestEnv:!1});async function J0(){return G0(Y0)}const Ye=di({tagName:"toniq-error",styles:v`
        :host {
            ${U.boldParagraphFont};
            color: red;
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}}),Bc=Be({name:"",inscriptionId:""}),_c=Be({type:"",traits:[Bc]}),Hc=Be({editId:"",ids:{collectionImageInscriptionId:"",collectionJsonInscriptionId:"",rendererJavascriptInscriptionId:"",bitcoinAddress:""},collection:{name:"",description:"",creator:""},layers:[_c]});function K0(){return{...Hc.defaultValue,editId:Vo(16)}}const ms=Be([Hc]),ps=k.pageInteraction.foregroundColor,gs=k.accentSecondary.backgroundColor,vr=v`
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: ${ps} ${gs};
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: ${gs};
        border-radius: 8px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${ps};
        border-radius: 8px;
    }
`;function Q0(e){return[{title:"Inscription HTML",subtitle:"Example that has all layers set to trait 0.",code:X0(e)},{title:"Collection JSON",code:JSON.stringify({collection:{...e.collection,collectionImageInscriptionId:e.ids.collectionImageInscriptionId},layers:e.layers},null,4)},{title:"Collection JS",code:ep(e)},{title:"Provenance JSON",code:JSON.stringify({bitcoinAddress:e.ids.bitcoinAddress||"BITCOIN-ADDRESS-HERE",collectionJsonInscriptionId:e.ids.collectionJsonInscriptionId||"COLLECTION-JSON-INSCRIPTION-ID-HERE",excludeInscriptions:["EXCLUDE-INSCRIPTIONS-HERE"]},null,4)},{title:"Renderer JS",subtitle:"This will never change. You can inscribe this once for all BitGen collections you ever make or use an already-inscribed copy (at your own risk).",code:tp()}]}function X0(e){return`<script t="${e.layers.map(()=>0).join(",")}" src="/content/{collection-js-inscription-id-here}"><\/script>`}function ep(e){const t=e.ids.collectionJsonInscriptionId||"COLLECTION-JSON-INSCRIPTION-ID-HERE",n=e.ids.rendererJavascriptInscriptionId||"RENDERER-JS-INSCRIPTION-ID-HERE";return`// edit these values
const myValues = {
    collectionJsonInscriptionId: '${t}',
    rendererJsInscriptionId: '${n}',
    renderSize: {width: 150, height: 150},
};

async function createInscriptionHtml() {
    const collectionMetadataPromise = fetch(
        \`/content/\${myValues.collectionJsonInscriptionId}\`,
    ).then((response) => response.json());

    const inscriptionTraitsList = document.querySelector('script[t]').getAttribute('t').split(',');

    const rendererScript = document.createElement('script');
    rendererScript.setAttribute('async', '');
    rendererScript.src = \`/content/\${myValues.rendererJsInscriptionId}\`;

    const renderPromise = new Promise((resolve, reject) => {
        rendererScript.addEventListener('load', async () => {
            try {
                const traitInscriptionIds = inscriptionTraitsList.map(
                    (traitIndex, layerIndex) =>
                        (await collectionMetadataPromise).layers[layerIndex].traits[traitIndex]?.inscriptionId,
                );

                resolve(await render(myValues.renderSize, ...traitInscriptionIds.filter(id => id)));
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    });
    document.head.appendChild(rendererScript);

    return await renderPromise;
}

createInscriptionHtml().then((result) => (document.body.innerHTML = result));
`}function tp(){return`async function render(size, ...inscriptionIds) {
    try {
        const base64Images = await Promise.all(inscriptionIds.map(async (id) => await getBase64(await (await fetch(\`/content/\${id}\`)).blob())));
        const finalImageUrl = generateCombinedImageUrl(size, base64Images, false);
        const resizeArtifactFix = \`<img class="full-size" onload="this.remove()" src="\${generateCombinedImageUrl(size, base64Images, true)}" />\`;
        return \`<style>body, html {margin: 0; padding: 0; overflow: hidden;} .full-size {position: absolute; opacity: 1; top: calc(100% - 1px); left: calc(100% - 1px);} img {display: block; width:100%;}</style>\${resizeArtifactFix}<img src="\${finalImageUrl}" />\`;
    } catch (error) {
        return \`<p style="color: red;">\${error?.message || String(error)}</p>\`;
    }
}
function generateCombinedImageUrl(size, base64Images, fullSize) {
    const innerImages = base64Images.map((base64Image) => \`<foreignObject x="0" y="0" width="100%" height="100%"><svg \${fullSize ? 'class="full-size"' : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${size.width} \${size.height}" width="\${size.width}" height="\${size.height}" style="image-rendering: pixelated; background: url(\${base64Image}) no-repeat \${fullSize ? '' : 'center/contain'};"></svg></foreignObject>\`);

    return URL.createObjectURL(new Blob([\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 \${size.width} \${size.height}" width="\${size.width}" height="\${size.height}">\${innerImages.join('')}</svg>\`], {type: 'image/svg+xml'}));
}
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}
`}const vs=B()({tagName:"toniq-bitgen-collection-code",styles:v`
        ${vr}

        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        pre {
            border-radius: 8px;
            padding: 8px 16px;
            overflow-x: auto;
            background-color: #eee;
        }

        .code-wrapper {
            position: relative;
        }

        ${R} {
            position: absolute;
            top: 4px;
            right: 4px;
            width: 32px;
            height: 32px;
        }

        p {
            ${xt};
        }

        .subtitle {
            color: ${k.pageSecondary.foregroundColor};
        }
    `,renderCallback({inputs:e}){const n=Q0(e.bitgenCollection).map(r=>{const o=r.subtitle?h`
                      <p class="subtitle">${r.subtitle}</p>
                  `:Z;return h`
                <div class="code-block">
                    <${K.assign({level:ee.H4})}>
                        ${r.title}
                    </${K}>
                    ${o}
                    <div class="code-wrapper">
                        <${R.assign({icon:Sl,variant:le.Secondary})}
                            ${T("click",async()=>{await navigator.clipboard.writeText(r.code)})}
                        ></${R}>
                        <pre>${r.code}</pre>
                    </div>
                </div>
            `});return h`
            <${K.assign({level:ee.H3})}>
                Code
            </${K}>
            ${n}
        `}}),ws=dr({tagName:"toniq-bioniq-frame-error",styles:v`
        :host {
            display: flex;
            background-color: #f9f6fe;
            color: #8a2be2;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            font-family: 'Inconsolata', monospace;
            /**
             * The size at which the image should suddenly take up the full container
             */
            --switch-at: 200px;
        }

        .icon-wrapper {
            aspect-ratio: 1 / 1;
            height: 100%;
            max-width: 100%;
        }

        .wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            width: 100%;
            height: max(min(100%, var(--switch-at)), calc(100% - var(--switch-at)));
        }

        .description {
            margin: 0;
            position: absolute;
            top: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 0 32px;
        }

        ${N} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return h`
            <div class="wrapper">
                <div class="icon-wrapper">
                    <${N.assign({icon:Cf,fitContainer:!0})}></${N}>
                </div>
                <p class="description">This image shows no signs of life.</p>
            </div>
        `}});var D;(function(e){e.Html="html",e.Json="json",e.Svg="svg",e.Text="text",e.Audio="audio",e.Image="image",e.Pdf="pdf",e.Video="video"})(D||(D={}));D.Html,D.Json,D.Svg,D.Text;const cn=84,ys=1,un={min:0,max:8},np=v`
    @import url('./index.css');

    html.nft-type-${S(D.Audio)} body {
        background: rgba(138, 43, 226, 0.04);
    }

    html.nft-type-${S(D.Audio)} body audio {
        visibility: hidden;
        z-index: -1;
    }

    html.nft-type-${S(D.Audio)} body .audio-overlay-wrapper {
        display: block;
    }

    .audio-overlay-wrapper {
        display: none;
    }

    .audio-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .audio-overlay.playing .play-toggle-button .play-toggle-icon {
        height: 80px;
        width: 80px;
    }

    .audio-overlay .play-toggle-button .play-toggle-icon {
        height: 100px;
        width: 100px;
    }

    .play-toggle-button {
        max-height: 100px;
        max-width: 100px;
        ${Q}
        ${fe}
        cursor: pointer;
    }

    .play-toggle-button:hover .play-toggle-icon {
        opacity: 0.9;
    }

    .play-toggle-icon {
        height: 50%;
        width: 50%;
        pointer-events: none;
    }

    .audio-overlay.playing .seek-bar {
        width: 100%;
    }

    .audio-overlay.playing .seek-bar-wrapper {
        opacity: 1;
    }

    .audio-overlay.playing .input-range {
        opacity: 1;
    }

    .audio-overlay.playing .volume-control {
        width: 30px;
        visibility: visible;
        opacity: 1;
    }

    .audio-overlay.playing .media-control-divider {
        display: block;
    }

    .control-bar {
        width: calc(100% - 64px);
        height: 30px;
        position: absolute;
        bottom: 8px;
        display: flex;
        gap: 14px;
        justify-content: center;
        align-items: center;
    }

    .media-control-divider {
        flex-shrink: 0;
        display: none;
        width: 1px;
        height: 16px;
        opacity: 0.16;
        background: #8a2be2;
    }

    .volume-control {
        flex-shrink: 0;
        visibility: hidden;
        opacity: 0;
        width: 0px;
        transition: opacity 0.5s ease 0.2s;
    }

    .volume-toggle-button {
        width: 30px;
        height: 30px;
        ${Q}
        cursor: pointer;
    }

    .volume-toggle-button:hover + .volume-bar-overlay,
    .volume-bar-overlay:hover {
        opacity: 1;
        visibility: visible;
    }

    .volume-toggle-icon {
        height: 30px;
        width: 30px;
    }

    .timestamp {
        color: #8a2be2;
        font-family: 'Inconsolata', monospace;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        flex-shrink: 0;
    }

    .volume-bar-overlay {
        width: 30px;
        height: 150px;

        position: absolute;
        bottom: 30px;
        right: 0;

        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
    }
    .volume-bar-overlay-content {
        width: 30px;
        height: 140px;
        background: #8a2be2;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .volume-bar {
        width: 8px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
    }

    .audio-overlay.playing .play-animation .sound-wave {
        opacity: 1;
    }

    .audio-overlay.playing .play-animation {
        height: 156px;
    }

    .play-animation {
        position: absolute;
        height: 140px;
        transform: rotate(90deg);
        transition: height 0.5s ease-in-out;
    }

    .sound-wave-wrapper {
        transform: rotate(calc(${360/cn}deg * var(--wave-index, 1)));
    }

    .play-animation .sound-wave-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .play-animation .sound-wave {
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 10px;
        padding-bottom: 100%;
        background: #8a2be2;
        opacity: 0.2;
        transition:
            transform 0.5s,
            opacity 1s;
    }

    .audio-overlay.static {
        display: none;
    }

    .seek-bar {
        width: 0px;
        height: 8px;
        border-radius: 20px;
        background: #f1e2ff;
        transition: width 0.25s;
    }

    .seek-bar-wrapper {
        position: relative;
        display: flex;
        width: 100%;
        height: 8px;
        opacity: 0;
        transition: opacity 0.2s ease 0.3s;
    }

    .volume-bar-wrapper {
        position: relative;
        display: flex;
        width: 8px;
        height: 124px;
        justify-content: center;
        align-items: center;
        margin: 8px auto;
        border-radius: 20px;
        background: rgba(241, 226, 255, 0.42);
    }

    .play-progress-bar {
        height: 8px;
        position: absolute;
        left: 0;
        z-index: 1;
        pointer-events: none;
        border-radius: 4px;
    }

    .play-progress-bar {
        background: #8a2be2;
    }

    .volume-progress-bar {
        width: 8px;
        position: absolute;
        bottom: 0;
        z-index: 1;
        pointer-events: none;
        border-radius: 4px;
        background: #ffffff;
    }

    input[type='range'] {
        appearance: none;
        height: 8px;
        width: 100%;
        background-color: transparent;
        margin: 0;
        position: relative;
        outline: none;
        opacity: 0;
        transition: opacity 0.2s;
    }

    input[type='range']::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        position: relative;
        border: none;
        height: 16px;
        width: 16px;
        z-index: 10;
        cursor: pointer;
        pointer-events: all;
        border-radius: 10px;
        transition: 84ms;
        background: #8a2be2;
    }

    input[type='range'].volume-range::-moz-range-thumb {
        background: #ffffff;
    }

    input[type='range'].volume-range {
        appearance: none;
        width: 124px;
        height: 8px;
        background-color: transparent;
        margin: 0;
        position: relative;
        outline: none;
        opacity: 1;
        transform: rotate(270deg);
    }

    input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        position: relative;
        border: none;
        height: 16px;
        width: 16px;
        z-index: 10;
        cursor: pointer;
        pointer-events: all;
        border-radius: 10px;
        transition: 84ms;
        background: #8a2be2;
    }

    input[type='range'].volume-range::-webkit-slider-thumb {
        background: #ffffff;
    }

    input[type='range']::-webkit-slider-thumb:hover {
        transform: scale(1.2);
    }

    input[type='range']::-moz-range-thumb:hover {
        transform: scale(1.2);
    }

    @media (max-width: 156px) {
        .audio-overlay.static {
            display: flex;
        }

        .audio-overlay {
            display: none;
        }
    }
`;function rp(e){return e<=0?h``:Array(e).fill(0).map((t,n)=>h`
                <div
                    class="sound-wave-wrapper"
                    style=${v`
                        --wave-index: ${n};
                    `}
                >
                    <div class="sound-wave"></div>
                </div>
            `)}function op(){const t=(un.max-un.min)/(cn-1);let n=un.min;return new Array(cn).fill(0).map((r,o)=>(o+1<cn/2?n+=t:n-=t,n.toFixed(1)))}const ip=h`
    <style>
        ${np}
    </style>
    <div class="audio-overlay-wrapper">
        <div class="audio-overlay">
            <button class="play-toggle-button">
                <img class="play-toggle-icon" src="./images/audio/bioniq-play.svg" />
            </button>
            <div class="play-animation">${rp(cn)}</div>
            <div class="control-bar">
                <div class="seek-bar">
                    <div class="seek-bar-wrapper">
                        <div class="play-progress-bar"></div>
                        <input type="range" min="0" max="100" value="0" class="input-range" />
                    </div>
                </div>
                <span class="timestamp"></span>
                <div class="media-control-divider"></div>
                <div class="volume-control">
                    <button class="volume-toggle-button">
                        <img class="volume-toggle-icon" src="./images/audio/bioniq-volume.svg" />
                    </button>
                    <div class="volume-bar-overlay">
                        <div class="volume-bar-overlay-content">
                            <div class="volume-bar">
                                <div class="volume-bar-wrapper">
                                    <div class="volume-progress-bar"></div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value="100"
                                        class="volume-range"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="static audio-overlay">
            <img class="play-toggle-icon" src="./images/audio/bioniq-play.svg" />
        </div>
    </div>
`,ap=Jn(ip).replace(/\n+/g," ").replace(/'/g,"\\'");var Is;const sp=h(Is||(Is=Mi([`
    <script>
        let setupAttemptStart = Date.now();

        function checkIfAudioNft() {
            try {
                const htmlElement = document.querySelector('html');
                if (!htmlElement) {
                    throw new Error('failed to find html element');
                }

                const htmlElementClassList = Array.from(htmlElement.classList);

                const nftTypeClassName = htmlElementClassList.find((className) =>
                    className.startsWith('nft-type-'),
                );

                if (!nftTypeClassName) {
                    throw new Error('Found not html nft-type class.');
                }

                if (nftTypeClassName === 'nft-type-`,`') {
                    setupAudioNft();
                }
            } catch (error) {
                if (Date.now() - setupAttemptStart < 10_000) {
                    const delay = Date.now() - setupAttemptStart > 1000 ? 1000 : 200;
                    setTimeout(checkIfAudioNft, delay);
                }
            }
        }

        function setupAudioNft() {
            const body = document.querySelector('body');
            body.innerHTML = body.innerHTML + '`,`';

            let soundWaveInterval;
            let retryCount = 0;
            let volume = 100;
            const locationBasedSoundWaveMaximums = [
                `,`,
            ];

            tryToAttachListeners();

            function updateSeekProgress(
                audioElement,
                seekBarElement,
                seekBarRangeElement,
                playProgressBarElement,
            ) {
                const rangeWidth = seekBarElement?.clientWidth ?? 0;

                if (rangeWidth) {
                    const progressBarRightPosition =
                        ((rangeWidth - 16) *
                            (seekBarRangeElement.max - seekBarRangeElement.value)) /
                            (seekBarRangeElement.max - seekBarRangeElement.min) +
                        8 +
                        'px';

                    playProgressBarElement.style.right = progressBarRightPosition;
                    seekBarRangeElement.max = getDuration(audioElement);
                }
            }

            function updateVolumeProgress(
                volumeBarWrapperElement,
                volumeBarRangeElement,
                volumeProgressBarElement,
            ) {
                const rangeHeight = volumeBarWrapperElement?.clientHeight ?? 0;

                if (rangeHeight) {
                    const progressBarTopPosition =
                        ((rangeHeight - 16) *
                            (volumeBarRangeElement.max - volumeBarRangeElement.value)) /
                            (volumeBarRangeElement.max - volumeBarRangeElement.min) +
                        8 +
                        'px';

                    volumeProgressBarElement.style.top = progressBarTopPosition;
                }
            }

            function onSeekBarInput(
                event,
                audioElement,
                seekBarElement,
                seekBarRangeElement,
                playProgressBarElement,
            ) {
                event = event || window.event;
                audioElement.currentTime = event.target.value;
                updateSeekProgress(
                    audioElement,
                    seekBarElement,
                    seekBarRangeElement,
                    playProgressBarElement,
                );
            }

            function onVolumeBarInput(
                event,
                audioElement,
                volumeBarWrapperElement,
                volumeBarRangeElement,
                volumeProgressBarElement,
            ) {
                event = event || window.event;
                volume = Number(event.target.value);
                /** AudioElement volume accepts values 0.0 (silent) to 1.0 (loudest) */
                audioElement.volume = volume / 100;
                audioElement.muted = audioElement.volume === 0;
                updateVolumeProgress(
                    volumeBarWrapperElement,
                    volumeBarRangeElement,
                    volumeProgressBarElement,
                );
            }

            function animateSoundWave(soundWaveElements, scale) {
                const min = `,`;
                const max = `,`;

                soundWaveElements.forEach((soundWaveElement, index) => {
                    const locationMax = locationBasedSoundWaveMaximums[index];

                    const randomScale = Math.random() * (locationMax - min) + min;
                    const scaleY = scale || randomScale;
                    soundWaveElement.style.transform = 'scaleY(' + scaleY + ')';
                });
            }

            function updatePlayButton(
                audioElement,
                audioControlIconElement,
                audioOverlayElement,
                isPaused,
            ) {
                if (isPaused) {
                    audioControlIconElement.src = './images/audio/bioniq-play.svg';
                    audioOverlayElement.classList.remove('playing');
                } else {
                    audioControlIconElement.src = './images/audio/bioniq-pause.svg';
                    audioOverlayElement.classList.add('playing');
                }
            }

            function updateVolume(
                audioElement,
                audioVolumeIconElement,
                volumeBarWrapperElement,
                volumeBarRangeElement,
                volumeProgressBarElement,
            ) {
                if (audioElement.muted) {
                    audioVolumeIconElement.src = './images/audio/bioniq-volume-muted.svg';
                    audioElement.volume = 0;
                    volumeBarRangeElement.value = 0;
                } else {
                    audioVolumeIconElement.src =
                        volumeBarRangeElement.value > 50
                            ? './images/audio/bioniq-volume.svg'
                            : './images/audio/bioniq-volume-half.svg';
                    if (audioElement.volume === 0) {
                        audioElement.volume = 1;
                        volumeBarRangeElement.value = volume ? volume : 100;
                    }
                }
                updateVolumeProgress(
                    volumeBarWrapperElement,
                    volumeBarRangeElement,
                    volumeProgressBarElement,
                );
            }

            function formattedTime(time) {
                const hours = Math.floor(time / 3600);
                const minutes = Math.floor(time / 60)
                    .toString()
                    .padStart(2, '0');
                const seconds = Math.floor(time - Number(minutes) * 60)
                    .toString()
                    .padStart(2, '0');

                return {
                    hours,
                    minutes,
                    seconds,
                };
            }

            function isReady(audioElement) {
                return audioElement.readyState >= 1;
            }

            function onPlay(audioElement, audioControlIconElement, audioOverlayElement) {
                if (audioElement.paused) {
                    audioElement.play();
                    updatePlayButton(
                        audioElement,
                        audioControlIconElement,
                        audioOverlayElement,
                        false,
                    );
                } else {
                    audioElement.pause();
                    updatePlayButton(
                        audioElement,
                        audioControlIconElement,
                        audioOverlayElement,
                        true,
                    );
                }
            }

            function onVolume(
                audioElement,
                audioVolumeIconElement,
                volumeBarWrapperElement,
                volumeBarRangeElement,
                volumeProgressBarElement,
            ) {
                audioElement.muted = !audioElement.muted;
                updateVolume(
                    audioElement,
                    audioVolumeIconElement,
                    volumeBarWrapperElement,
                    volumeBarRangeElement,
                    volumeProgressBarElement,
                );
            }

            function updateTimeline(time, audioTimestampElement) {
                if (time != undefined) {
                    const hours = formattedTime(time).hours;
                    const minutes = formattedTime(time).minutes;
                    const seconds = formattedTime(time).seconds;

                    if (audioTimestampElement) {
                        audioTimestampElement.innerText = hours
                            ? hours + ':' + minutes + ':' + seconds
                            : minutes + ':' + seconds;
                    }
                }
            }

            function updateSeekBar(
                audioElement,
                seekBarElement,
                seekBarRangeElement,
                playProgressBarElement,
            ) {
                seekBarRangeElement.value = getCurrentTime(audioElement);
                updateSeekProgress(
                    audioElement,
                    seekBarElement,
                    seekBarRangeElement,
                    playProgressBarElement,
                );
            }

            function getRemainingTime(audioElement) {
                const duration = getDuration(audioElement);
                const currentTime = getCurrentTime(audioElement);

                if (duration == undefined || currentTime == undefined) {
                    return undefined;
                }

                return duration - currentTime;
            }

            function getDuration(audioElement) {
                return audioElement.duration;
            }

            function getCurrentTime(audioElement) {
                return audioElement.currentTime;
            }

            function tryToAttachListeners() {
                const audioElement = document.querySelector('audio');

                if (audioElement && isReady(audioElement)) {
                    const seekBarElement = document.querySelector('.seek-bar');
                    const seekBarInputElement = document.querySelector('.seek-bar input');
                    const audioOverlayElement = document.querySelector('.audio-overlay');
                    const audioTimestampElement = document.querySelector('.timestamp');
                    const soundWaveElements = Array.from(document.querySelectorAll('.sound-wave'));
                    const audioControlIconElement = document.querySelector('.play-toggle-icon');
                    const audioVolumeIconElement = document.querySelector('.volume-toggle-icon');
                    const seekBarRangeElement = document.querySelector('.input-range');
                    const volumeBarRangeElement = document.querySelector('.volume-range');
                    const playToggleElement = document.querySelector('.play-toggle-button');
                    const volumeBarElement = document.querySelector('.volume-bar');
                    const playProgressBarElement = document.querySelector('.play-progress-bar');
                    const volumeProgressBarElement = document.querySelector('.volume-progress-bar');
                    const volumeOverlayBarElement = document.querySelector('.volume-bar-overlay');
                    const volumeBarWrapperElement = document.querySelector('.volume-bar-wrapper');
                    const volumeBarInputElement = document.querySelector('.volume-bar input');
                    const volumeToggleButton = document.querySelector('.volume-toggle-button');

                    updateTimeline(getRemainingTime(audioElement), audioTimestampElement);

                    seekBarInputElement.addEventListener('input', (event) => {
                        onSeekBarInput(
                            event,
                            audioElement,
                            seekBarElement,
                            seekBarRangeElement,
                            playProgressBarElement,
                        );
                    });

                    volumeToggleButton.addEventListener('click', () => {
                        onVolume(
                            audioElement,
                            audioVolumeIconElement,
                            volumeBarWrapperElement,
                            volumeBarRangeElement,
                            volumeProgressBarElement,
                        );
                    });

                    volumeBarInputElement.addEventListener('input', (event) => {
                        onVolumeBarInput(
                            event,
                            audioElement,
                            volumeBarWrapperElement,
                            volumeBarRangeElement,
                            volumeProgressBarElement,
                        );
                    });

                    seekBarElement.addEventListener('transitionstart', () => {
                        updateSeekProgress(
                            audioElement,
                            seekBarElement,
                            seekBarRangeElement,
                            playProgressBarElement,
                        );
                    });

                    volumeOverlayBarElement.addEventListener('transitionstart', () => {
                        updateVolumeProgress(
                            volumeBarWrapperElement,
                            volumeBarRangeElement,
                            volumeProgressBarElement,
                        );
                    });

                    playToggleElement.addEventListener('click', () => {
                        onPlay(audioElement, audioControlIconElement, audioOverlayElement);
                    });

                    audioElement.addEventListener('timeupdate', () => {
                        updateTimeline(getRemainingTime(audioElement), audioTimestampElement);
                        updateSeekBar(
                            audioElement,
                            seekBarElement,
                            seekBarRangeElement,
                            playProgressBarElement,
                        );
                    });

                    audioElement.addEventListener('play', () => {
                        if (soundWaveInterval) {
                            clearInterval(soundWaveInterval);
                        }
                        soundWaveInterval = setInterval(() => {
                            animateSoundWave(soundWaveElements);
                        }, 200);
                    });

                    audioElement.addEventListener('pause', () => {
                        clearInterval(soundWaveInterval);
                        animateSoundWave(soundWaveElements, `,`);
                    });

                    audioElement.addEventListener('ended', () => {
                        updatePlayButton(
                            audioElement,
                            audioControlIconElement,
                            audioOverlayElement,
                            true,
                        );
                        clearInterval(soundWaveInterval);
                        animateSoundWave(soundWaveElements, `,`);
                        updateTimeline(getDuration(audioElement), audioTimestampElement);
                    });

                    audioElement.addEventListener('volumechange', () => {
                        if (Math.round(volumeBarRangeElement.value / 100 === 0)) {
                            audioElement.muted = true;
                        }
                        updateVolume(
                            audioElement,
                            audioVolumeIconElement,
                            volumeBarWrapperElement,
                            volumeBarRangeElement,
                            volumeProgressBarElement,
                        );
                    });
                } else if (retryCount < 50) {
                    retryCount++;
                    setTimeout(tryToAttachListeners, 200);
                }
            }
        }

        checkIfAudioNft();
    <\/script>
`])),D.Audio,ap,op().join(", "),un.min,un.max,ys,ys),Ze=He({"nft-text-color":"black","nft-background-color":"white"}),lp=h`
    <div class="text-overflow-overlay"></div>
    <style>
        ${v`
            html.nft-type-${S(D.Text)} {
                ${Ze["nft-text-color"].name}: black;
                ${Ze["nft-background-color"].name}: #fffef4;
            }
            html.nft-type-${S(D.Json)} {
                ${Ze["nft-text-color"].name}: #c475fa;
                ${Ze["nft-background-color"].name}: black;
            }

            html.nft-type-${S(D.Text)} body,
            html.nft-type-${S(D.Json)} body {
                font-family: 'Inconsolata', monospace;
                font-size: 1.2em;
            }

            html.nft-type-${S(D.Text)} .text,
            html.nft-type-${S(D.Json)} .text {
                padding: 20px;
                padding-bottom: 30px;
            }

            html.nft-type-${S(D.Text)},
                html.nft-type-${S(D.Json)} {
                background-color: ${Ze["nft-background-color"].value};
                color: ${Ze["nft-text-color"].value};
            }

            .text-overflow-overlay {
                display: none;
            }

            html.nft-type-${S(D.Text)} .text-overflow-overlay {
                display: block;
                position: fixed;
                bottom: 0;
                z-index: 99999;
                height: 40px;
                width: 100%;
                background: linear-gradient(
                    0deg,
                    rgba(255, 254, 244, 1) 0%,
                    rgba(255, 254, 244, 0.8) 40%,
                    rgba(255, 254, 244, 0) 100%
                );
            }

            html.nft-type-${S(D.Json)} .text-overflow-overlay {
                display: block;
                position: fixed;
                bottom: 0;
                z-index: 99999;
                height: 40px;
                width: 100%;
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0.8) 40%,
                    rgba(0, 0, 0, 0) 100%
                );
            }

            /*
                Scrollbar styles
            */
            /* Firefox */
            * {
                scrollbar-width: auto;
                scrollbar-color: #8a2be2 ${Ze["nft-background-color"].value};
            }

            /* Chrome, Edge, and Safari */
            *::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }

            *::-webkit-scrollbar-track {
                background: ${Ze["nft-background-color"].value};
                border-radius: 8px;
            }

            *::-webkit-scrollbar-thumb {
                background-color: #8a2be2;
                border-radius: 8px;
            }
        `}
    </style>
`,cp={bioniq:Jn(h`
        ${lp} ${sp}
    `)};function up(e){const t=e.trim().toLowerCase();return!!t.match(/\<\w+/)||t.startsWith("<!doctype html>")}function dp(e){return e.trim().toLowerCase().startsWith("<svg")}function fp(e){try{return JSON.parse(e),!0}catch{return!1}}D.Svg,D.Html,D.Json;function hp(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Ht=hp();function mp(){try{if(!Ht||!Ht.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function $i(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(i){if(i.name!=="TypeError")throw i;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,o=0;o<e.length;o+=1)r.append(e[o]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const E=Promise;function W(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function Mt(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function Re(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function xi(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const No="local-forage-detect-blob-support";let Bn;const ye={},pp=Object.prototype.toString,Cn="readonly",wr="readwrite";function gp(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}function vp(e){return new E(function(t){var n=e.transaction(No,wr),r=$i([""]);n.objectStore(No).put(r,"key"),n.onabort=function(o){o.preventDefault(),o.stopPropagation(),t(!1)},n.oncomplete=function(){var o=navigator.userAgent.match(/Chrome\/(\d+)/),i=navigator.userAgent.match(/Edge\//);t(i||!o||parseInt(o[1],10)>=43)}}).catch(function(){return!1})}function wp(e){return typeof Bn=="boolean"?E.resolve(Bn):vp(e).then(function(t){return Bn=t,Bn})}function ar(e){var t=ye[e.name],n={};n.promise=new E(function(r,o){n.resolve=r,n.reject=o}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function Oo(e){var t=ye[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function Po(e,t){var n=ye[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function Rc(e,t){return new E(function(n,r){if(ye[e.name]=ye[e.name]||zc(),e.db)if(t)ar(e),e.db.close();else return n(e.db);var o=[e.name];t&&o.push(e.version);var i=Ht.open.apply(Ht,o);t&&(i.onupgradeneeded=function(a){var s=i.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(No)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),i.onerror=function(a){a.preventDefault(),r(i.error)},i.onsuccess=function(){var a=i.result;a.onversionchange=function(s){s.target.close()},n(a),Oo(e)}})}function Ti(e){return Rc(e,!1)}function Si(e){return Rc(e,!0)}function Fc(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function yp(e){return new E(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(o){var i=btoa(o.target.result||"");t({__local_forage_encoded_blob:!0,data:i,type:e.type})},r.readAsBinaryString(e)})}function Vc(e){var t=gp(atob(e.data));return $i([t],{type:e.type})}function Wc(e){return e&&e.__local_forage_encoded_blob}function bp(e){var t=this,n=t._initReady().then(function(){var r=ye[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return Mt(n,e,e),n}function kp(e){ar(e);for(var t=ye[e.name],n=t.forages,r=0;r<n.length;r++){const o=n[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,Ti(e).then(o=>(e.db=o,Fc(e)?Si(e):o)).then(o=>{e.db=t.db=o;for(var i=0;i<n.length;i++)n[i]._dbInfo.db=o}).catch(o=>{throw Po(e,o),o})}function Fe(e,t,n,r){r===void 0&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(i){if(r>0&&(!e.db||i.name==="InvalidStateError"||i.name==="NotFoundError"))return E.resolve().then(()=>{if(!e.db||i.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Si(e)}).then(()=>kp(e).then(function(){Fe(e,t,n,r-1)})).catch(n);n(i)}}function zc(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function $p(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=ye[n.name];o||(o=zc(),ye[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=bp);var i=[];function a(){return E.resolve()}for(var s=0;s<o.forages.length;s++){var l=o.forages[s];l!==t&&i.push(l._initReady().catch(a))}var c=o.forages.slice(0);return E.all(i).then(function(){return n.db=o.db,Ti(n)}).then(function(u){return n.db=u,Fc(n,t._defaultConfig.version)?Si(n):u}).then(function(u){n.db=o.db=u,t._dbInfo=n;for(var f=0;f<c.length;f++){var m=c[f];m!==t&&(m._dbInfo.db=n.db,m._dbInfo.version=n.version)}})}function xp(e,t){var n=this;e=Re(e);var r=new E(function(o,i){n.ready().then(function(){Fe(n._dbInfo,Cn,function(a,s){if(a)return i(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var u=c.result;u===void 0&&(u=null),Wc(u)&&(u=Vc(u)),o(u)},c.onerror=function(){i(c.error)}}catch(u){i(u)}})}).catch(i)});return W(r,t),r}function Tp(e,t){var n=this,r=new E(function(o,i){n.ready().then(function(){Fe(n._dbInfo,Cn,function(a,s){if(a)return i(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.openCursor(),u=1;c.onsuccess=function(){var f=c.result;if(f){var m=f.value;Wc(m)&&(m=Vc(m));var p=e(m,f.key,u++);p!==void 0?o(p):f.continue()}else o()},c.onerror=function(){i(c.error)}}catch(f){i(f)}})}).catch(i)});return W(r,t),r}function Sp(e,t,n){var r=this;e=Re(e);var o=new E(function(i,a){var s;r.ready().then(function(){return s=r._dbInfo,pp.call(t)==="[object Blob]"?wp(s.db).then(function(l){return l?t:yp(t)}):t}).then(function(l){Fe(r._dbInfo,wr,function(c,u){if(c)return a(c);try{var f=u.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var m=f.put(l,e);u.oncomplete=function(){l===void 0&&(l=null),i(l)},u.onabort=u.onerror=function(){var p=m.error?m.error:m.transaction.error;a(p)}}catch(p){a(p)}})}).catch(a)});return W(o,n),o}function Ep(e,t){var n=this;e=Re(e);var r=new E(function(o,i){n.ready().then(function(){Fe(n._dbInfo,wr,function(a,s){if(a)return i(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){o()},s.onerror=function(){i(c.error)},s.onabort=function(){var u=c.error?c.error:c.transaction.error;i(u)}}catch(u){i(u)}})}).catch(i)});return W(r,t),r}function Ap(e){var t=this,n=new E(function(r,o){t.ready().then(function(){Fe(t._dbInfo,wr,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){r()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;o(c)}}catch(c){o(c)}})}).catch(o)});return W(n,e),n}function Cp(e){var t=this,n=new E(function(r,o){t.ready().then(function(){Fe(t._dbInfo,Cn,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){o(l.error)}}catch(c){o(c)}})}).catch(o)});return W(n,e),n}function Ip(e,t){var n=this,r=new E(function(o,i){if(e<0){o(null);return}n.ready().then(function(){Fe(n._dbInfo,Cn,function(a,s){if(a)return i(a);try{var l=s.objectStore(n._dbInfo.storeName),c=!1,u=l.openKeyCursor();u.onsuccess=function(){var f=u.result;if(!f){o(null);return}e===0||c?o(f.key):(c=!0,f.advance(e))},u.onerror=function(){i(u.error)}}catch(f){i(f)}})}).catch(i)});return W(r,t),r}function Mp(e){var t=this,n=new E(function(r,o){t.ready().then(function(){Fe(t._dbInfo,Cn,function(i,a){if(i)return o(i);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var u=l.result;if(!u){r(c);return}c.push(u.key),u.continue()},l.onerror=function(){o(l.error)}}catch(u){o(u)}})}).catch(o)});return W(n,e),n}function Lp(e,t){t=xi.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,o;if(!e.name)o=E.reject("Invalid arguments");else{const a=e.name===n.name&&r._dbInfo.db?E.resolve(r._dbInfo.db):Ti(e).then(s=>{const l=ye[e.name],c=l.forages;l.db=s;for(var u=0;u<c.length;u++)c[u]._dbInfo.db=s;return s});e.storeName?o=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;ar(e);const c=ye[e.name],u=c.forages;s.close();for(let m=0;m<u.length;m++){const p=u[m];p._dbInfo.db=null,p._dbInfo.version=l}return new E((m,p)=>{const g=Ht.open(e.name,l);g.onerror=y=>{g.result.close(),p(y)},g.onupgradeneeded=()=>{var y=g.result;y.deleteObjectStore(e.storeName)},g.onsuccess=()=>{const y=g.result;y.close(),m(y)}}).then(m=>{c.db=m;for(let p=0;p<u.length;p++){const g=u[p];g._dbInfo.db=m,Oo(g._dbInfo)}}).catch(m=>{throw(Po(e,m)||E.resolve()).catch(()=>{}),m})}):o=a.then(s=>{ar(e);const l=ye[e.name],c=l.forages;s.close();for(var u=0;u<c.length;u++){const m=c[u];m._dbInfo.db=null}return new E((m,p)=>{var g=Ht.deleteDatabase(e.name);g.onerror=()=>{const y=g.result;y&&y.close(),p(g.error)},g.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},g.onsuccess=()=>{const y=g.result;y&&y.close(),m(y)}}).then(m=>{l.db=m;for(var p=0;p<c.length;p++){const g=c[p];Oo(g._dbInfo)}}).catch(m=>{throw(Po(e,m)||E.resolve()).catch(()=>{}),m})})}return W(o,t),o}var Np={_driver:"asyncStorage",_initStorage:$p,_support:mp(),iterate:Tp,getItem:xp,setItem:Sp,removeItem:Ep,clear:Ap,length:Cp,key:Ip,keys:Mp,dropInstance:Lp};function Op(){return typeof openDatabase=="function"}var Je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Pp="~~local_forage_type~",bs=/^~~local_forage_type~([^~]+)~/,sr="__lfsc__:",qo=sr.length,Ei="arbf",Do="blob",Zc="si08",jc="ui08",Uc="uic8",Gc="si16",Yc="si32",Jc="ur16",Kc="ui32",Qc="fl32",Xc="fl64",ks=qo+Ei.length,$s=Object.prototype.toString;function eu(e){var t=e.length*.75,n=e.length,r,o=0,i,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),u=new Uint8Array(c);for(r=0;r<n;r+=4)i=Je.indexOf(e[r]),a=Je.indexOf(e[r+1]),s=Je.indexOf(e[r+2]),l=Je.indexOf(e[r+3]),u[o++]=i<<2|a>>4,u[o++]=(a&15)<<4|s>>2,u[o++]=(s&3)<<6|l&63;return c}function Bo(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=Je[t[r]>>2],n+=Je[(t[r]&3)<<4|t[r+1]>>4],n+=Je[(t[r+1]&15)<<2|t[r+2]>>6],n+=Je[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function qp(e,t){var n="";if(e&&(n=$s.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&$s.call(e.buffer)==="[object ArrayBuffer]")){var r,o=sr;e instanceof ArrayBuffer?(r=e,o+=Ei):(r=e.buffer,n==="[object Int8Array]"?o+=Zc:n==="[object Uint8Array]"?o+=jc:n==="[object Uint8ClampedArray]"?o+=Uc:n==="[object Int16Array]"?o+=Gc:n==="[object Uint16Array]"?o+=Jc:n==="[object Int32Array]"?o+=Yc:n==="[object Uint32Array]"?o+=Kc:n==="[object Float32Array]"?o+=Qc:n==="[object Float64Array]"?o+=Xc:t(new Error("Failed to get type for BinaryArray"))),t(o+Bo(r))}else if(n==="[object Blob]"){var i=new FileReader;i.onload=function(){var a=Pp+e.type+"~"+Bo(this.result);t(sr+Do+a)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function Dp(e){if(e.substring(0,qo)!==sr)return JSON.parse(e);var t=e.substring(ks),n=e.substring(qo,ks),r;if(n===Do&&bs.test(t)){var o=t.match(bs);r=o[1],t=t.substring(o[0].length)}var i=eu(t);switch(n){case Ei:return i;case Do:return $i([i],{type:r});case Zc:return new Int8Array(i);case jc:return new Uint8Array(i);case Uc:return new Uint8ClampedArray(i);case Gc:return new Int16Array(i);case Jc:return new Uint16Array(i);case Yc:return new Int32Array(i);case Kc:return new Uint32Array(i);case Qc:return new Float32Array(i);case Xc:return new Float64Array(i);default:throw new Error("Unkown type: "+n)}}var Ai={serialize:qp,deserialize:Dp,stringToBuffer:eu,bufferToString:Bo};function tu(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function Bp(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var o=new E(function(i,a){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(s){return a(s)}n.db.transaction(function(s){tu(s,n,function(){t._dbInfo=n,i()},function(l,c){a(c)})},a)});return n.serializer=Ai,o}function tt(e,t,n,r,o,i){e.executeSql(n,r,o,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?i(l,s):tu(l,t,function(){l.executeSql(n,r,o,i)},i)},i):i(a,s)},i)}function _p(e,t){var n=this;e=Re(e);var r=new E(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){tt(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var u=c.rows.length?c.rows.item(0).value:null;u&&(u=a.serializer.deserialize(u)),o(u)},function(l,c){i(c)})})}).catch(i)});return W(r,t),r}function Hp(e,t){var n=this,r=new E(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){tt(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var u=c.rows,f=u.length,m=0;m<f;m++){var p=u.item(m),g=p.value;if(g&&(g=a.serializer.deserialize(g)),g=e(g,p.key,m+1),g!==void 0){o(g);return}}o()},function(l,c){i(c)})})}).catch(i)});return W(r,t),r}function nu(e,t,n,r){var o=this;e=Re(e);var i=new E(function(a,s){o.ready().then(function(){t===void 0&&(t=null);var l=t,c=o._dbInfo;c.serializer.serialize(t,function(u,f){f?s(f):c.db.transaction(function(m){tt(m,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,u],function(){a(l)},function(p,g){s(g)})},function(m){if(m.code===m.QUOTA_ERR){if(r>0){a(nu.apply(o,[e,l,n,r-1]));return}s(m)}})})}).catch(s)});return W(i,n),i}function Rp(e,t,n){return nu.apply(this,[e,t,n,1])}function Fp(e,t){var n=this;e=Re(e);var r=new E(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){tt(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){o()},function(l,c){i(c)})})}).catch(i)});return W(r,t),r}function Vp(e){var t=this,n=new E(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){tt(a,i,`DELETE FROM ${i.storeName}`,[],function(){r()},function(s,l){o(l)})})}).catch(o)});return W(n,e),n}function Wp(e){var t=this,n=new E(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){tt(a,i,`SELECT COUNT(key) as c FROM ${i.storeName}`,[],function(s,l){var c=l.rows.item(0).c;r(c)},function(s,l){o(l)})})}).catch(o)});return W(n,e),n}function zp(e,t){var n=this,r=new E(function(o,i){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){tt(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var u=c.rows.length?c.rows.item(0).key:null;o(u)},function(l,c){i(c)})})}).catch(i)});return W(r,t),r}function Zp(e){var t=this,n=new E(function(r,o){t.ready().then(function(){var i=t._dbInfo;i.db.transaction(function(a){tt(a,i,`SELECT key FROM ${i.storeName}`,[],function(s,l){for(var c=[],u=0;u<l.rows.length;u++)c.push(l.rows.item(u).key);r(c)},function(s,l){o(l)})})}).catch(o)});return W(n,e),n}function jp(e){return new E(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(o,i){for(var a=[],s=0;s<i.rows.length;s++)a.push(i.rows.item(s).name);t({db:e,storeNames:a})},function(o,i){n(i)})},function(r){n(r)})})}function Up(e,t){t=xi.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,o;return e.name?o=new E(function(i){var a;e.name===n.name?a=r._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?i({db:a,storeNames:[e.storeName]}):i(jp(a))}).then(function(i){return new E(function(a,s){i.db.transaction(function(l){function c(p){return new E(function(g,y){l.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){g()},function(x,$){y($)})})}for(var u=[],f=0,m=i.storeNames.length;f<m;f++)u.push(c(i.storeNames[f]));E.all(u).then(function(){a()}).catch(function(p){s(p)})},function(l){s(l)})})}):o=E.reject("Invalid arguments"),W(o,t),o}var Gp={_driver:"webSQLStorage",_initStorage:Bp,_support:Op(),iterate:Hp,getItem:_p,setItem:Rp,removeItem:Fp,clear:Vp,length:Wp,key:zp,keys:Zp,dropInstance:Up};function Yp(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function ru(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Jp(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Kp(){return!Jp()||localStorage.length>0}function Qp(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=ru(e,t._defaultConfig),Kp()?(t._dbInfo=n,n.serializer=Ai,E.resolve()):E.reject()}function Xp(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,o=localStorage.length-1;o>=0;o--){var i=localStorage.key(o);i.indexOf(r)===0&&localStorage.removeItem(i)}});return W(n,e),n}function e1(e,t){var n=this;e=Re(e);var r=n.ready().then(function(){var o=n._dbInfo,i=localStorage.getItem(o.keyPrefix+e);return i&&(i=o.serializer.deserialize(i)),i});return W(r,t),r}function t1(e,t){var n=this,r=n.ready().then(function(){for(var o=n._dbInfo,i=o.keyPrefix,a=i.length,s=localStorage.length,l=1,c=0;c<s;c++){var u=localStorage.key(c);if(u.indexOf(i)===0){var f=localStorage.getItem(u);if(f&&(f=o.serializer.deserialize(f)),f=e(f,u.substring(a),l++),f!==void 0)return f}}});return W(r,t),r}function n1(e,t){var n=this,r=n.ready().then(function(){var o=n._dbInfo,i;try{i=localStorage.key(e)}catch{i=null}return i&&(i=i.substring(o.keyPrefix.length)),i});return W(r,t),r}function r1(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,o=localStorage.length,i=[],a=0;a<o;a++){var s=localStorage.key(a);s.indexOf(r.keyPrefix)===0&&i.push(s.substring(r.keyPrefix.length))}return i});return W(n,e),n}function o1(e){var t=this,n=t.keys().then(function(r){return r.length});return W(n,e),n}function i1(e,t){var n=this;e=Re(e);var r=n.ready().then(function(){var o=n._dbInfo;localStorage.removeItem(o.keyPrefix+e)});return W(r,t),r}function a1(e,t,n){var r=this;e=Re(e);var o=r.ready().then(function(){t===void 0&&(t=null);var i=t;return new E(function(a,s){var l=r._dbInfo;l.serializer.serialize(t,function(c,u){if(u)s(u);else try{localStorage.setItem(l.keyPrefix+e,c),a(i)}catch(f){(f.name==="QuotaExceededError"||f.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(f),s(f)}})})});return W(o,n),o}function s1(e,t){if(t=xi.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,o;return e.name?o=new E(function(i){e.storeName?i(ru(e,r._defaultConfig)):i(`${e.name}/`)}).then(function(i){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(i)===0&&localStorage.removeItem(s)}}):o=E.reject("Invalid arguments"),W(o,t),o}var l1={_driver:"localStorageWrapper",_initStorage:Qp,_support:Yp(),iterate:t1,getItem:e1,setItem:a1,removeItem:i1,clear:Xp,length:o1,key:n1,keys:r1,dropInstance:s1};const c1=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),u1=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(c1(e[r],t))return!0;r++}return!1},ou=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},en={},xs={},qt={INDEXEDDB:Np,WEBSQL:Gp,LOCALSTORAGE:l1},d1=[qt.INDEXEDDB._driver,qt.WEBSQL._driver,qt.LOCALSTORAGE._driver],Un=["dropInstance"],Gr=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Un),f1={description:"",driver:d1.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function h1(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function Yr(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(ou(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Ci{constructor(t){for(let n in qt)if(qt.hasOwnProperty(n)){const r=qt[n],o=r._driver;this[n]=o,en[o]||this.defineDriver(r)}this._defaultConfig=Yr({},f1),this._config=Yr({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const o=new E(function(i,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=Gr.concat("_initStorage");for(let m=0,p=c.length;m<p;m++){const g=c[m];if((!u1(Un,g)||t[g])&&typeof t[g]!="function"){a(l);return}}(function(){const m=function(p){return function(){const g=new Error(`Method ${p} is not implemented by the current driver`),y=E.reject(g);return W(y,arguments[arguments.length-1]),y}};for(let p=0,g=Un.length;p<g;p++){const y=Un[p];t[y]||(t[y]=m(y))}})();const f=function(m){en[s]&&console.info(`Redefining LocalForage driver: ${s}`),en[s]=t,xs[s]=m,i()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(f,a):f(!!t._support):f(!0)}catch(s){a(s)}});return Mt(o,n,r),o}driver(){return this._driver||null}getDriver(t,n,r){const o=en[t]?E.resolve(en[t]):E.reject(new Error("Driver not found."));return Mt(o,n,r),o}getSerializer(t){const n=E.resolve(Ai);return Mt(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return Mt(r,t,t),r}setDriver(t,n,r){const o=this;ou(t)||(t=[t]);const i=this._getSupportedDrivers(t);function a(){o._config.driver=o.driver()}function s(u){return o._extend(u),a(),o._ready=o._initStorage(o._config),o._ready}function l(u){return function(){let f=0;function m(){for(;f<u.length;){let g=u[f];return f++,o._dbInfo=null,o._ready=null,o.getDriver(g).then(s).catch(m)}a();const p=new Error("No available storage method found.");return o._driverSet=E.reject(p),o._driverSet}return m()}}const c=this._driverSet!==null?this._driverSet.catch(()=>E.resolve()):E.resolve();return this._driverSet=c.then(()=>{const u=i[0];return o._dbInfo=null,o._ready=null,o.getDriver(u).then(f=>{o._driver=f._driver,a(),o._wrapLibraryMethodsWithReady(),o._initDriver=l(i)})}).catch(()=>{a();const u=new Error("No available storage method found.");return o._driverSet=E.reject(u),o._driverSet}),Mt(this._driverSet,n,r),this._driverSet}supports(t){return!!xs[t]}_extend(t){Yr(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,o=t.length;r<o;r++){const i=t[r];this.supports(i)&&n.push(i)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=Gr.length;t<n;t++)h1(this,Gr[t])}createInstance(t){return new Ci(t)}}const m1=new Ci,p1=m1,iu="toniq-nft-frame";p1.createInstance({name:iu});const g1=[D.Html,D.Svg];function v1(e){return g1.includes(e)}const au={nftUrl:"",childFrameUrl:"",max:void 0,min:void 0,loadWaitDuration:{milliseconds:500},forcedFinalNftSize:void 0,forcedOriginalNftSize:void 0,extraHtml:cp.bioniq,htmlSizeQuerySelector:void 0,blockAutoPlay:void 0,blockInteraction:void 0,allowScrolling:void 0,eagerLoading:void 0,timeoutDuration:{milliseconds:1e4},blockPersistentCache:void 0,allowConsoleLogs:void 0,hideError:void 0};function w1(e){return Ps(e,ne(au).filter(t=>t!=="childFrameUrl"))}function y1(e,t){return e<t}function b1(e,t){return e>t}const Ts={width:250,height:250};function k1({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?b1:y1)(t.width/t.height,e.width/e.height)?"width":"height"}function Jr({box:e,constraint:t,constraintType:n}){const r=k1({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function su({box:e,ratio:t}){return ue(e,(n,r)=>r*t)}function Ss({box:e,min:t,max:n}){return ue(e,(r,o)=>ft({value:o,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function $1({min:e,max:t,box:n}){const r=x1({min:e,max:t,box:n}),o=su({box:n,ratio:r});return{height:Math.floor(o.height||(e==null?void 0:e.height)||Ts.height),width:Math.floor(o.width||(e==null?void 0:e.width)||Ts.width)}}function x1({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?Jr({box:n,constraint:e,constraintType:"min"}):1,o=t?Jr({box:n,constraint:t,constraintType:"max"}):1,i=r>1?r:o<1?o:1,a=su({ratio:i,box:n});return(e?Jr({box:a,constraint:e,constraintType:"min"}):1)>1?r:i}var me;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(me||(me={}));const T1=[D.Html,D.Video,D.Audio,D.Pdf],S1=[D.Html,D.Text,D.Json];function E1(e,t){return!!e&&S1.includes(t)}function A1({blockInteraction:e,nftType:t,allowScrolling:n}){return typeof e=="boolean"?!e:t==null?!1:T1.includes(t)?!0:!!E1(n,t)}class C1 extends Error{constructor(){super("Iframe is no longer attached to the DOM."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IframeDisconnectedError"})}}let I1=!1;function M1(){return I1}function lu(e,t,n){return Ns({callback(){return L1(e,t,n),!0},fallbackValue:!1})}function L1(e,t,n){if(e==="*")n||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var kn;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(kn||(kn={}));const Es={timeout:{milliseconds:1e4}};function N1(e,t,n){return n.type===e&&n.direction===t}function O1(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function P1({data:e,type:t,verifyChildData:n,iframeElement:r},o,i,a,s){if(!r)throw new Error("No iframe element was provided.");let l=0,c=!1,u,f,m,p=!1;const g={data:e,type:t},y={...g,direction:kn.FromParent,messageId:Vo(32)},x=g.type;function $(z){try{if(!lu(o,z,!1))return;const X=z.data;if(X.type==="error")throw new Error(`Child threw an error: ${X.data}`);if(M1(),X&&p&&N1(x,kn.FromChild,X)&&X.messageId===y.messageId){let be=!1;try{be=n?n(X.data):!0}catch{}if(!be)return;c=!0,f=z,u=X}}catch(X){m=kt(X)}}s.addEventListener("message",$);const C=Date.now();for(;!c&&Date.now()-C<i.milliseconds&&!m;){if(!r.isConnected)throw new C1;const z=r.contentWindow;z&&(p=!0,z.postMessage(y,{targetOrigin:o})),await io((a==null?void 0:a.milliseconds)||O1(l)),l++}if(s.removeEventListener("message",$),m)throw m;if(!c)throw new Error(`Failed to receive response from the iframe for message '${g.type}' after '${Math.ceil(i.milliseconds/1e3)}' seconds).`);if(!f)throw new Error("Never got message event from child but received a valid response");return{data:u==null?void 0:u.data,event:f}}function q1({timeout:e=Es.timeout}=Es){return{async sendMessageToChild(t){if(t.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await P1(t,t.childOrigin,t.timeout||e,t.interval,t.globalObject??globalThis)},listenForParentMessages(t){const n=t.globalObject??globalThis;async function r(o){var l;if(!lu(t.parentOrigin,o,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const i=o.data,a=await t.listener({...i,originalEvent:o},()=>{n.removeEventListener("message",r)}),s={type:i.type,direction:kn.FromChild,data:a,messageId:i.messageId};n.parent.postMessage(s,{targetOrigin:t.parentOrigin})}n.addEventListener("message",r)}}}var _o;(function(e){e.LoadNft="load-nft"})(_o||(_o={}));const D1=q1({});function B1(e){return new URL(e).origin}async function _1(e){const t=fn();e.onload=()=>{t.resolve()},await t.promise}const H1={iframeElement:void 0,latestChildIframeData:void 0,clearIframe:!1,childIframeLoading:si({async updateCallback(e,t){if(!e.nftUrl||!e.childFrameUrl)return new Promise(()=>{});try{if(!e.isIframeReady||!t.iframeElement)return new Promise(()=>{});const n=B1(e.childFrameUrl),r=_1(t.iframeElement);t.initIframe(t.iframeElement),await r,await Eu(e.timeoutDuration.milliseconds,R1(e,{...t,iframeElement:t.iframeElement},n,e.timeoutDuration))}catch(n){throw t.onError(kt(n)),n}}})};async function R1(e,t,n,r){const o=w1(e);let i;async function a(){try{const s=(await D1.sendMessageToChild({childOrigin:n,iframeElement:t.iframeElement,type:_o.LoadNft,data:o,verifyChildData(l){return!!(l&&l.dimensions.width&&l.dimensions.height&&l.nftType&&l.nftUrl)},timeout:r})).data;if(i instanceof Error||((s.dimensions.height!==(i==null?void 0:i.dimensions.height)||s.dimensions.width!==(i==null?void 0:i.dimensions.width))&&(i=s,t.onNftLoaded(i)),!v1(i.nftType)))return}catch(s){throw i=kt(s),s}}await a()}var lr;(function(e){e.Error="error",e.Loading="loading"})(lr||(lr={}));const Kr=pl()({tagName:iu,stateInitStatic:H1,events:{settle:q(),nftDataLoad:q(),error:q()},styles:v`
        :host {
            position: relative;
            box-sizing: content-box;
            display: flex;
            justify-content: center;
            background-color: white;
            overflow: hidden;
        }

        :host(.${S(me.VerticallyCenter)}) {
            align-items: center;
        }

        .click-cover {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 100;
        }

        * {
            flex-shrink: 0;
        }

        .frame-constraint {
            /*
                Make the frame constraint initially fit to the .min-size wrapper.
            */
            width: 100%;
            height: 100%;

            position: relative;
            z-index: 100;
        }

        .error-wrapper,
        .loading-wrapper {
            min-width: calc(100% + 2px);
            min-height: calc(100% + 2px);
            max-width: calc(100% + 2px);
            max-height: calc(100% + 2px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            word-break: break-word;
        }

        .loading-wrapper {
            position: absolute;
            z-index: 200;
            background-color: inherit;
            opacity: 1;
            pointer-events: none;
        }

        :host(.${S(me.HideLoading)}) .loading-wrapper,
        :host(.${S(me.HideLoading)}) iframe {
            /**
             * Only place the transition on the hide class so that when the loading wrapper should
             * show up, it shows up instantly.
             */
            transition:
                opacity 100ms,
                visibility 0s 200ms;
        }

        :host(.${S(me.HideLoading)}) .loading-wrapper {
            /**
             * Hide the loading wrapper.
             */
            opacity: 0;
            visibility: hidden;
        }

        :host(.${S(me.HideLoading)}) iframe {
            /**
             * Once loading is done, display the iframe (which contains the loaded NFT).
             */
            opacity: 1;
        }

        iframe {
            opacity: 0;
            display: block;
            border: none;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
        }

        .min-size {
            display: flex;
            justify-content: center;
        }
    `,cleanupCallback({updateState:e}){e({clearIframe:!0,iframeElement:void 0})},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:o,events:i}){var x;const a={...au,...t};if(e.childIframeLoading.updateTrigger({...a,isIframeReady:!!e.iframeElement},{initIframe($){o(new i.settle(!1)),r.classList.remove(me.HideLoading),r.classList.remove(me.VerticallyCenter),a.childFrameUrl&&($.src=a.childFrameUrl)},iframeElement:e.iframeElement,onNftLoaded($){const C=r.shadowRoot.querySelector(".frame-constraint");if(!(C instanceof HTMLElement))throw new Error("Could not find frame constraint div.");C.style.width=Te(Math.floor($.dimensions.width)),C.style.height=Te(Math.floor($.dimensions.height));const z=Ss({min:a.min,max:a.max,box:$.dimensions});$.dimensions.height<z.height?r.classList.add(me.VerticallyCenter):r.classList.remove(me.VerticallyCenter),r.style.width=Te(z.width),r.style.height=Te(z.height),o(new i.settle(!0)),o(new i.nftDataLoad($)),r.classList.add(me.HideLoading),n({latestChildIframeData:$}),r.debugData=$},onError($){console.error($),o(new i.error($))},hostElement:r}),e.clearIframe)return requestAnimationFrame(()=>{n({clearIframe:!1})}),h``;const s=a.min&&a.max?Ss({box:a.min,max:a.max}):a.min,l=a.max,c=a.forcedOriginalNftSize?$1({min:s,max:l,box:a.forcedOriginalNftSize}):void 0,u=A1({allowScrolling:a.allowScrolling,blockInteraction:a.blockInteraction,nftType:(x=e.latestChildIframeData)==null?void 0:x.nftType}),f=!a.hideError&&e.childIframeLoading.value instanceof Error?e.childIframeLoading.value:void 0,m=u||f?"":F1,p=f?v`
                  max-width: 100%;
                  max-height: 100%;
              `:c?v`
                    width: ${c.width}px;
                    height: ${c.height}px;
                `:"",g=v`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,y=h`
            <div class="frame-constraint" style=${p}>
                <iframe
                    ${jd($=>{if(!($ instanceof HTMLIFrameElement))throw new Error("iframe was created but did not give us back an iframe element");e.iframeElement||(window.lastFrame=$,n({iframeElement:$}))})}
                    loading=${a.eagerLoading?"eager":"lazy"}
                ></iframe>
            </div>
        `;return h`
            ${Qe(!f,h`
                    <div class="loading-wrapper">
                        <slot name=${lr.Loading}>Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${g}>
                ${Qe(!!f,h`
                        <div class="error-wrapper">
                            <slot name=${lr.Error}>
                                <${ws}></${ws}>
                            </slot>
                        </div>
                    `,y)}
            </div>
            ${m}
        `}}),F1=h`
    <div class="click-cover"></div>
`,As=B()({tagName:"toniq-bitgen-collection-info-display",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        ${Kr} {
            border: 1px solid #eee;
            border-radius: 16px;
        }

        p {
            ${xt};
        }
    `,renderCallback({inputs:e}){const t=e.bitgenCollection.collection.creator?h`
                  <p>${e.bitgenCollection.collection.creator}</p>
              `:Z,n=e.bitgenCollection.collection.description?h`
                  <p>${e.bitgenCollection.collection.description}</p>
              `:Z;return h`
            <${K.assign({level:ee.H2})}>
                ${e.bitgenCollection.collection.name||"(empty name)"}
            </${K}>
            ${t}
            <${Kr.assign({childFrameUrl:"https://cdn-bitcoin.bioniq.io/view",nftUrl:`https://cdn-bitcoin.bioniq.io/content/${e.bitgenCollection.ids.collectionImageInscriptionId}`,blockAutoPlay:!0,eagerLoading:!0,max:{width:350,height:350},min:{width:300,height:300}})}></${Kr}>
            ${n}
        `}}),Qr=B()({tagName:"toniq-bitgen-collection-display",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            gap: 64px;
            box-sizing: border-box;
            padding: 0 32px 32px;
        }
    `,renderCallback({inputs:e}){return h`
            <${As.assign({bitgenCollection:e.bitgenCollection})}></${As}>
            <${vs.assign({bitgenCollection:e.bitgenCollection})}></${vs}>
        `}}),ge=B()({tagName:"toniq-labelled-input",events:{valueChange:q()},styles:v`
        label {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        ${Dn} {
            width: 100%;
        }

        p {
            ${xt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return h`
            <label>
                <p class="label-label">${e.label}</p>
                <${Dn.assign({...e})}
                    ${T(Dn.events.valueChange,r=>{t(new n.valueChange(r.detail))})}
                ></${Dn}>
            </label>
        `}}),_n=B()({tagName:"toniq-layer-edit",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            border: 1px solid #ddd;
            padding: 16px;
            border-radius: 16px;
            gap: 8px;
            position: relative;
        }

        .traits-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
        }

        ${R} {
            height: 32px;
            width: 32px;
        }

        .trait-edit {
            display: flex;
            flex-direction: column;
            border: 1px solid #ddd;
            padding: 16px;
            border-radius: 8px;
            gap: 8px;
            position: relative;
        }

        :host(:hover) .delete-layer,
        .trait-edit:hover .delete-trait {
            visibility: visible;
        }

        .delete-layer,
        .delete-trait {
            visibility: hidden;
            position: absolute;
            top: 4px;
            right: 4px;
        }
    `,events:{layerChange:q(),layerDelete:q()},renderCallback({inputs:e,dispatch:t,events:n}){function r(i){const a=Ro(e.bitgenLayer),s=i(a)||a;t(new n.layerChange(s))}const o=e.bitgenLayer.traits.map((i,a)=>{const s=to(i).map(([l,c])=>h`
                        <${ge.assign({label:V1[l],value:c})}
                            ${T(ge.events.valueChange,u=>{r(f=>{const m=f.traits[a];Mu(m),m[l]=u.detail})})}
                        ></${ge}>
                    `);return h`
                <div class="trait-edit">
                    <${R.assign({icon:po,variant:le.Secondary})}
                        class="delete-trait"
                        ${T("click",()=>{r(l=>{l.traits=Ho(l.traits,[a])})})}
                    ></${R}>
                    ${s}
                </div>
            `});return h`
            <${R.assign({icon:po,variant:le.Secondary})}
                class="delete-layer"
                ${T("click",()=>{t(new n.layerDelete)})}
            ></${R}>
            <${ge.assign({label:"Layer Name (type)",value:e.bitgenLayer.type})}
                ${T(ge.events.valueChange,i=>{r(a=>{a.type=i.detail})})}
            ></${ge}>
            <div class="traits-header">
                <${K.assign({level:ee.H4})}>Traits</${K}>
                <${R.assign({icon:ui,variant:le.Secondary})}
                    ${T("click",()=>{r(i=>{i.traits=[Bc.defaultValue,...i.traits]})})}
                ></${R}>
            </div>
            ${o}
        `}}),V1={inscriptionId:"Inscription Id",name:"Name"},Xr=B()({tagName:"toniq-bitgen-collection-edit",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 0 32px 32px;
            width: 400px;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            position: sticky;
            top: 0;
            background-color: ${k.pagePrimary.backgroundColor};
            z-index: 200;
        }

        ${R} {
            height: 32px;
            width: 32px;
        }

        .collection-properties {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .layers {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
    `,events:{collectionChange:q()},renderCallback({inputs:e,dispatch:t,events:n}){function r(l){const c=Ro(e.bitgenCollection),u=l(c)||c;t(new n.collectionChange(u))}const o=to(e.bitgenCollection.collection).map(([l,c])=>h`
                    <${ge.assign({label:W1[l],value:c})}
                        ${T(ge.events.valueChange,u=>{r(f=>{f.collection[l]=u.detail})})}
                    ></${ge}>
                `),i=to(e.bitgenCollection.ids).map(([l,c])=>h`
                    <${ge.assign({label:z1[l],value:c})}
                        ${T(ge.events.valueChange,u=>{r(f=>{f.ids[l]=u.detail})})}
                    ></${ge}>
                `),a=e.bitgenCollection.layers.map((l,c)=>h`
                    <${_n.assign({bitgenLayer:l})}
                        ${T(_n.events.layerChange,u=>{r(f=>{f.layers[c]=u.detail})})}
                        ${T(_n.events.layerDelete,()=>{r(u=>{u.layers=Ho(u.layers,[c])})})}
                    ></${_n}>
                `),s=a.length?a:h`
                  <p>No layers yet.</p>
              `;return h`
            <section>
                <${K.assign({level:ee.H3})}
                    class="section-header"
                >
                    Collection Info
                </${K}>
                <div class="collection-properties">${o}</div>
            </section>
            <section>
                <${K.assign({level:ee.H3})}
                    class="section-header"
                >
                    Ids
                </${K}>
                <div class="collection-properties">${i}</div>
            </section>
            <section>
                <div class="section-header">
                    <${K.assign({level:ee.H3})}>
                        Layers
                    </${K}>
                    <${R.assign({icon:ui,variant:le.Secondary})}
                        ${T("click",()=>{r(l=>{l.layers=[_c.defaultValue,...l.layers]})})}
                    ></${R}>
                </div>

                <div class="layers">${s}</div>
            </section>
        `}}),W1={creator:"Creator",description:"Description",name:"Name"},z1={bitcoinAddress:"Bitcoin Receiving Address",collectionImageInscriptionId:"Image Inscription Id",collectionJsonInscriptionId:"Collection JSON Inscription Id",rendererJavascriptInscriptionId:"Renderer JS Inscription Id"},lt=B()({tagName:"toniq-bitgen-collection-nav",styles:v`
        ${vr}

        :host {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        ${K} {
            padding: 0 16px;
        }

        .nav-header {
            display: flex;
            gap: 24px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 16px;
        }

        .nav-header ${R}, .delete-collection ${R} {
            height: 32px;
            width: 32px;
        }

        .nav-footer {
            padding: 8px;
            background-color: ${k.pagePrimary.backgroundColor};
            display: flex;
            justify-content: center;
        }

        .nav-footer ${R} {
            height: 32px;
            flex-grow: 1;
        }

        nav {
            overflow-y: auto;
            flex-grow: 1;
        }

        ol,
        li {
            ${xt};
            list-style: none;
        }

        li {
            display: flex;
            position: relative;
        }

        .collection-name button {
            ${Q};
            cursor: pointer;
            min-width: 100%;
            width: 200px;
            max-width: 400px;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 8px 16px;
        }

        .collection-name {
            background-color: white;
            transition: background-color ${j.interaction};
        }

        li + li {
            border-top: 1px solid #eee;
        }

        .collection-name:hover {
            background-color: #dbfff5;
        }

        .collection-name:hover .delete-collection {
            visibility: visible;
            pointer-events: unset;
        }

        .collection-name.selected-collection {
            background-color: #eee;
        }

        .collection-name.selected-collection button {
            pointer-events: none;
            cursor: auto;
        }

        .delete-collection {
            position: absolute;
            left: 4px;
            top: 0;
            visibility: hidden;
            pointer-events: none;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }
    `,events:{selectionChange:q(),collectionCreate:q(),collectionDelete:q(),editRawTrigger:q()},renderCallback({inputs:e,dispatch:t,events:n}){const r=pd(e.bitgenCollections,o=>o.editId,(o,i)=>h`
                    <li
                        class="collection-name ${se({"selected-collection":e.selectedBitgenCollectionIndex===i})}"
                    >
                        <div class="delete-collection">
                            <${R.assign({icon:po,variant:le.Secondary})}
                                ${T("click",()=>{t(new n.collectionDelete(i))})}
                            ></${R}>
                        </div>
                        <button
                            ${T("click",()=>{t(new n.selectionChange(i))})}
                        >
                            ${o.collection.name||"(empty name)"}
                        </button>
                    </li>
                `);return h`
            <div class="nav-header">
                <${K.assign({level:ee.H4})}>Collections</${K}>
                <${R.assign({icon:ui,variant:le.Secondary})}
                    ${T("click",()=>{t(new n.collectionCreate)})}
                ></${R}>
            </div>
            <nav>
                <ol>
                    ${r}
                </ol>
            </nav>
            <div class="nav-footer">
                <${R.assign({text:"Edit Raw",variant:le.Secondary})}
                    ${T("click",()=>{t(new n.editRawTrigger)})}
                ></${R}>
            </div>
        `}}),Hn=B()({tagName:"toniq-raw-edit",styles:v`
        ${vr}

        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        textarea {
            ${U.monospaceFont};
            font-size: 1.5em;
            flex-grow: 1;
            resize: none;
        }

        footer {
            display: flex;
            gap: 32px;
            align-items: center;
        }
    `,events:{codeChange:q()},stateInitStatic:{currentCode:void 0,error:void 0},renderCallback({state:e,updateState:t,inputs:n,dispatch:r,events:o}){return e.currentCode==null&&t({currentCode:n.code,error:n.verifyCode(n.code)}),h`
            <textarea
                .value=${e.currentCode}
                ${T("input",i=>{const s=bl(i,HTMLTextAreaElement).value,l=n.verifyCode(s);t({currentCode:s,error:l})})}
            ></textarea>
            <footer>
                <${R.assign({disabled:!!e.error,text:"Save"})}
                    ${T("click",()=>{e.currentCode&&!n.verifyCode(e.currentCode)&&r(new o.codeChange(e.currentCode))})}
                ></${R}>
                <${Ye}>${bt(e.error)}</${Ye}>
            </footer>
        `}}),eo=B()({tagName:"toniq-bitgen-collections",styles:v`
        ${vr}

        :host {
            display: flex;
            overflow: hidden;
            align-items: stretch;
        }

        section {
            flex-shrink: 0;
        }

        .edit-section,
        .display-section {
            overflow-y: auto;
        }

        .display-section {
            flex-grow: 1;
            flex-shrink: 1;
        }

        ${Qr}, ${lt} {
            height: 100%;
        }

        .failure-edit {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
        }

        .failure-edit ${Hn} {
            flex-grow: 1;
        }
    `,stateInitStatic:{currentBitgenCollections:si(),selectedBitgenCollectionIndex:0,editRaw:!1},initCallback({inputs:e,state:t}){t.currentBitgenCollections.setNewPromise(e.webClientInterface.collectionStorage.loadStoredBitgenCollections())},renderCallback({state:e,inputs:t,updateState:n}){if(gl(e.currentBitgenCollections.value)){if(uo(e.currentBitgenCollections.value)||e.editRaw||!zs(e.currentBitgenCollections.value,ms)){const a=uo(e.currentBitgenCollections.value)?h`
                      <${Ye}>
                          ${bt(e.currentBitgenCollections.value)}
                      </${Ye}>
                  `:Z;return h`
                <div class="failure-edit">
                    ${a}
                    <${Hn.assign({code:JSON.stringify(e.currentBitgenCollections.value,null,4),verifyCode(s){return Ns({callback(){ei(JSON.parse(s),ms)},catchCallback(l){return kt(l)}})}})}
                        ${T(Hn.events.codeChange,async s=>{const l=JSON.parse(s.detail);await t.webClientInterface.collectionStorage.storeBitgenCollections(l),e.currentBitgenCollections.setResolvedValue(l),n({editRaw:!1})})}
                    ></${Hn}>
                </div>
            `}}else return h`
                <${ir.assign({size:pt.WholePage})}></${ir}>
            `;const r=e.currentBitgenCollections.value;if(!qs(r,1))return h`
                <${Ye}>No collections to edit.</${Ye}>
            `;const o=r[e.selectedBitgenCollectionIndex]||r[0];function i(a){const s=Ro(r),l=a(s)||s;t.webClientInterface.collectionStorage.storeBitgenCollections(l),e.currentBitgenCollections.setResolvedValue(l)}return h`
            <section>
                <${lt.assign({bitgenCollections:r,selectedBitgenCollectionIndex:e.selectedBitgenCollectionIndex})}
                    ${T(lt.events.selectionChange,a=>{n({selectedBitgenCollectionIndex:a.detail})})}
                    ${T(lt.events.collectionCreate,()=>{i(a=>{a.splice(0,0,K0())}),n({selectedBitgenCollectionIndex:0})})}
                    ${T(lt.events.editRawTrigger,()=>{n({editRaw:!0})})}
                    ${T(lt.events.collectionDelete,a=>{i(s=>Ho(s,[a.detail]))})}
                ></${lt}>
            </section>
            <section class="edit-section">
                <${Xr.assign({bitgenCollection:o})}
                    ${T(Xr.events.collectionChange,a=>{i(s=>{s[e.selectedBitgenCollectionIndex]=a.detail})})}
                ></${Xr}>
            </section>
            <section class="display-section">
                <${Qr.assign({bitgenCollection:o})}></${Qr}>
            </section>
        `}});di({tagName:"toniq-app",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            ${U.paragraphFont};
            overflow: hidden;
            max-height: 100%;
            min-height: 100%;
        }

        ${eo} {
            flex-grow: 1;
        }

        ${K} {
            margin: 0 0 16px 16px;
        }
    `,stateInitStatic:{webClientInterface:si({defaultValue:J0()})},renderCallback({state:e}){const t=e.webClientInterface.value;if(gl(t)){if(uo(t))return h`
                <${Ye}>${bt(t)}</${Ye}>
            `}else return h`
                <${ir.assign({size:pt.WholePage})}></${ir}>
            `;return h`
            <${K.assign({level:ee.H1})}>
                BitGen
            </${K}>
            <${eo.assign({webClientInterface:t})}></${eo}>
        `}});export{ei as a,ms as b,K0 as c,Q1 as d,p1 as l};
