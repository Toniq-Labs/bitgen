var _o=Object.freeze,Od=Object.defineProperty;var Ro=(e,t)=>_o(Od(e,"raw",{value:_o(t||e.slice())}));(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const Nd=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function qe(e,t){return e?Nd.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function ne(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Ws(e){return ne(e).map(t=>e[t])}function Pd(e){return ne(e).map(t=>[t,e[t]])}function qd(e){return Object.fromEntries(e)}function Wi(e,t){return e.filter((n,r)=>!t.includes(r))}function Dd(e,t){return e.includes(t)}function Bd(e,t,n){return e.reduce((r,i,o,a)=>{const s=t(i,o,a);return n(s,i,o,a)&&r.push(s),r},[])}function $t(e){return!!e}function js(e,t){return e.match(t)??[]}function _d(e){return e.replace(/,/g,"")}function Rd(e,{keepNewLines:t}={}){return(t?e.replace(/[\s\n]*\n+[\s\n]*/g,`
`):e.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Hd={capitalizeFirstLetter:!1};function Fd(e){return e.length?e[0].toUpperCase()+e.slice(1):""}function Vd(e,t){return t.capitalizeFirstLetter?Fd(e):e}function zd(e,t=Hd){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const o=i[1];return o?o.toUpperCase():""});return Vd(r,t)}var Bt;(function(e){e.Upper="upper",e.Lower="lower"})(Bt||(Bt={}));function Wd(e){return e.toLowerCase()!==e.toUpperCase()}function Ho(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const i=e[r]||"";if(!Wd(i)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===Bt.Upper&&i!==i.toUpperCase())return!1;if(t===Bt.Lower&&i!==i.toLowerCase())return!1}return!0}function li(e){return e.split("").reduce((n,r,i,o)=>{const a=i>0&&o[i-1]||"",s=i<o.length-1&&o[i+1]||"",l=Ho(a,Bt.Lower,{blockNoCaseCharacters:!0})||Ho(s,Bt.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function mn(e,t){return e.split(t)}const jd=String(NaN);function Us(e){if(typeof e=="string"&&isNaN(Number(e)))return jd;const t=Number(e),n=t<0,r=String(Math.abs(t)),[i,o]=r.split("."),a=o?`.${o}`:"",l=js(i.split("").reverse().join(""),/.{1,3}/g).reverse().map(d=>d.split("").reverse().join("")).join(",");return[n?"-":"",l,a].join("")}function Ud(e){return typeof e=="number"?e:Number(typeof e=="string"?_d(e):e)}function Zd(e){return String(e).includes("e")}function Gd({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function ci(e){const t=Math.pow(10,e.digits),n=e.number*t;return Number((Math.round(n)/t).toFixed(e.digits))}function mt({value:e,min:t,max:n}){return Math.min(Math.max(e,t),n)}var Fo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Fo||(Fo={}));function Jd(e){return!!(qe(e,"then")&&typeof e.then=="function")}class Yd extends Error{constructor(t,n=`Promised timed out after ${t} ms.`){super(n),Object.defineProperty(this,"durationMs",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"message",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PromiseTimeoutError"})}}function Kd(e,t){return new Promise(async(n,r)=>{const i=e===1/0?void 0:setTimeout(()=>{r(new Yd(e))},e);try{const o=await t;n(o)}catch(o){r(o)}finally{clearTimeout(i)}})}function Qd(e){return e?e.map(kt).filter($t).join(`
`):""}function kt(e){return e?e instanceof Error?e.message:qe(e,"message")?String(e.message):String(e):""}function xt(e){return e instanceof Error?e:new Error(kt(e))}function Xd(e,t){const n=xt(e);return n.message=`${t}: ${n.message}`,n}function Zs(e){try{const t=e.callback();return t instanceof Promise?t.catch(n=>e.catchCallback?e.catchCallback(n):e.fallbackValue):t}catch(t){return e.catchCallback?e.catchCallback(t):e.fallbackValue}}var Vo;(function(e){e.Upper="upper",e.Lower="lower"})(Vo||(Vo={}));var zo;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(zo||(zo={}));class eu extends Error{constructor(){super(...arguments),this.name="AssertionError"}}function Wo(e){return e instanceof Promise}function di(e){return Array.isArray(e)?"array":typeof e}function te(e,t){return di(e)===t}function tu(e,t){if(e==null)throw new eu(t||"defined assertion failed")}function Ce(e){return!!e&&typeof e=="object"}function ur(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}function jo({source:e,whitespace:t,errorHandler:n}){try{return JSON.stringify(e,void 0,t)}catch(r){if(n)return n(r);throw r}}const Uo="Failed to compare objects using JSON.stringify";function Zo(e,t,n){return jo({source:e,errorHandler(r){if(n)return"";throw r}})===jo({source:t,errorHandler(r){if(n)return"";throw r}})}function ji(e,t,n={}){try{return e===t?!0:Ce(e)&&Ce(t)?Zo(Object.keys(e).sort(),Object.keys(t).sort(),!!(n!=null&&n.ignoreNonSerializableProperties))?Object.keys(e).every(i=>ji(e[i],t[i])):!1:Zo(e,t,!!(n!=null&&n.ignoreNonSerializableProperties))}catch(r){const i=xt(r);throw i.message.startsWith(Uo)||(i.message=`${Uo}: ${i.message}`),i}}function Gs(e,t){return ne(e).filter(r=>{const i=e[r];return t(r,i,e)}).reduce((r,i)=>(r[i]=e[i],r),{})}function nu(e,t){return Gs(e,n=>!t.includes(n))}function Js(e,t){return Gs(e,n=>t.includes(n))}function ce(e,t){let n=!1;const r=ne(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(n=!0),{...i,[o]:a}},{});return n?new Promise(async(i,o)=>{try{await Promise.all(ne(r).map(async a=>{const s=await r[a];r[a]=s})),i(r)}catch(a){o(a)}}):r}function Ui(e,t){try{return ru(e,t),!0}catch{return!1}}function ru(e,t,n){if(e.length<t)throw new Error(n?`'${n}' is not at least '${t}' in length.`:`Array is not at least '${t}' in length.`)}function Ys(...e){if(!Ui(e,1))return{};if(e.length===1)return e[0];let t;const n={};return e.forEach(r=>{if(te(r,"object"))te(t,"object")||(t={...r});else{t=r;return}Object.entries(r).forEach(([i,o])=>{n[i]||(n[i]=[]),n[i].push(o)})}),te(t,"object")&&Object.entries(n).forEach(([r,i])=>{const o=Ys(...i);o===void 0&&r in t?delete t[r]:o!==void 0&&(t[r]=o)}),t}function pn(){let e,t,n=!1;const r=new Promise((i,o)=>{e=a=>(n=!0,i(a)),t=a=>{n=!0,o(a)}});if(!e||!t)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${pn.name}.`);return{promise:r,resolve:e,reject:t,isSettled(){return n}}}function ui(e){const t=pn();return e!==1/0&&setTimeout(()=>{t.resolve()},e<=0?0:e),t.promise}function iu(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Ks=iu();function ou({min:e,max:t}){const{min:n,max:r}=Gd({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,o=Math.ceil(Math.log2(i)/8),a=Math.floor(256**o/i)*i,s=new Uint8Array(o);let l;do Ks.getRandomValues(s),l=s.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return n+l%i}function fr(e=16){const t=Math.ceil(e/2),n=new Uint8Array(t);return Ks.getRandomValues(n),Array.from(n).map(r=>r.toString(16).padStart(2,"0")).join("").substring(0,e)}const au="%",su="px";function Te(e){return Qs({value:e,suffix:su})}function Er(e){return Qs({value:e,suffix:au})}function Qs({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}const Ir="://";function lu(...e){const t=e.join("/"),[n,r=""]=t.includes(Ir)?t.split(Ir):["",t];let i=!1,o=!1;const a=r.replace(/\/{2,}/g,"/").split("/").map(s=>((s.includes("?")||i)&&(i=!0),s)).reduce((s,l,c,d)=>{if(o)return s;const u=d[c+1];let m=l;const p=!l.includes("?")&&(u==null?void 0:u.startsWith("?"));if(u!=null&&u.startsWith("?")||p){o=!0;let g=!1;const b=d.slice(p?c+2:c+1).reduce((x,k)=>(k.includes("#")&&(g=!0),g?x.concat(k):[x,k].join("&")),"");m=[l,u,b].join("")}return s.concat(m)},[]);return[n,n?Ir:"",a.join("/")].join("")}const cu=["k","M","B","T","P","E","Z","Y"];function Zi({beforeDot:e,afterDot:t="",maxLength:n}){if(t.length){const r=n-e.length-1;if(r>0){const i=t.slice(0,r);return Number(i)?[e,i].join("."):e}}return e}function du(e,t,n){const[r,i]=mn(e,"."),o=Us(r),a=js(o,/,/g).length,s=t[a-1],[l,c]=mn(o,","),d=[c,i].join("");return l.length+1>n?["0.",l[0],t[a]].join(""):[Zi({beforeDot:l,afterDot:d,maxLength:n-1}),s].join("")}const Go=3;function uu({input:e,maxLength:t}){const n=String(e),[r,i]=mn(n,"e"),o=i.replace(/^[\-\+]/,""),a=i[0],s=["e",a,o].join(""),[l,c]=mn(r,"."),d=o.length+Go;return d===t?[l,s].join(""):d>t?a==="-"?"0":String(1/0):[Zi({afterDot:c,beforeDot:l,maxLength:t-o.length+Go}),s].join("")}function fu(e,t){const[n,r]=mn(Us(e),".");if(n.length<=t)return Zi({beforeDot:n,afterDot:r,maxLength:t})}function hu(e,{customSuffixes:t=cu,maxLength:n=6}={}){const r=Ud(e);if(isNaN(r)||r===1/0)return String(r);if(Zd(r))return uu({input:r,maxLength:n});const i=String(r),o=fu(i,n);return o??du(i,t,n)}function mu(e,t){const n=(e==null?void 0:e.constructor)===(t==null?void 0:t.constructor);return di(e)===di(t)&&n}const Xs="__vir__shape__definition__key__do__not__use__in__actual__objects";function el(e){return qe(e,Xs)}const Gi=Symbol("and"),tl=Symbol("instance"),Ji=Symbol("enum"),nl=Symbol("exact"),rl=Symbol("indexed-keys"),Yi=Symbol("or"),Ki=Symbol("unknown"),pu=[Gi,Ji,nl,rl,tl,Yi,Ki],il="__vir__shape__specifier__key__do__not__use__in__actual__objects";function gu(...e){return mr(e,Gi)}function vu(...e){return mr(e,Ji)}function xe(...e){return mr(e,Yi)}function wu(e){return mr([e],Ki)}function Qi(e){return Tt(e,Gi)}function Xi(e){return Tt(e,tl)}function eo(e){return Tt(e,Ji)}function to(e){return Tt(e,nl)}function no(e){return Tt(e,rl)}function hr(e){return Tt(e,Yi)}function ro(e){return Tt(e,Ki)}function Tt(e,t){const n=pr(e);return!!n&&n.specifierType===t}function mr(e,t){return{[il]:!0,specifierType:t,parts:e}}function At(e,t,n){const r=pr(t);if(r){if(Xi(r))return e instanceof r.parts[0];if(Qi(r))return r.parts.every(i=>At(e,i));if(hr(r))return r.parts.some(i=>At(e,i));if(to(r))return Ce(e)?At(e,r.parts[0]):e===r.parts[0];if(eo(r))return Object.values(r.parts[0]).some(i=>i===e);if(no(r))return Ce(e)?(n?!0:ne(e).every(o=>At(o,r.parts[0].keys)))&&Ws(e).every(o=>At(o,r.parts[0].values)):!1;if(ro(r))return!0}return mu(e,t)}function pr(e){if(Ce(e)&&qe(e,il)){if(!qe(e,"parts")||!te(e.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!qe(e,"specifierType")||!Dd(pu,e.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Jo extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function fi(e,t=!1){return zn(e)}function zn(e){const t=pr(e);if(t)if(Xi(t)){const n=t.parts[0];try{return new n}catch(r){throw new Jo(`Failed to create default value for classShape for class '${n.name}': ${kt(r)}`)}}else{if(hr(t)||to(t))return zn(t.parts[0]);if(Qi(t))return t.parts.reduce((n,r)=>Object.assign(n,zn(r)),{});if(eo(t))return Object.values(t.parts[0])[0];if(no(t))return{};if(ro(t))return t.parts[0]??{};throw new Jo(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}return el(e)?fi(e.shape):e instanceof RegExp?e:te(e,"array")?e.map(zn):Ce(e)?ce(e,(n,r)=>fi(r)):e}function Be(e,t=!1){return{shape:e,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:t,get defaultValue(){return fi(e)},[Xs]:!0}}class pe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function ol(e,t,n={}){try{return io(e,t,n),!0}catch{return!1}}function io(e,t,n={}){Le({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}function hi(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function Le({subject:e,shape:t,keys:n,options:r}){if(ro(t))return!0;if(el(t))return Le({subject:e,shape:t.shape,keys:n,options:r});const i=hi(n);if(pr(e))throw new pe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!At(e,t,!r.ignoreExtraKeys))throw new pe(`Subject does not match shape definition at key ${i}`);if(te(t,"function"))return te(e,"function");if(Xi(t))return e instanceof t.parts[0];if(Ce(e)){const a=e,s=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if(hr(t)){const d=[];c=t.parts.some(u=>{try{const m=Le({subject:e,shape:u,keys:n,options:{...r}});return Object.assign(s,m),!0}catch(m){if(m instanceof pe)return d.push(m),!1;throw m}}),!c&&Ui(d,1)&&l.push(d[0])}else if(Qi(t))c=t.parts.every(d=>{try{const u=Le({subject:e,shape:d,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(s,u),!0}catch(u){if(u instanceof pe)return l.push(u),!1;throw u}});else if(to(t)){const d=Le({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(s,d),c=!0}else{if(eo(t))throw new pe(`Cannot compare an enum specifier to an object at ${i}`);if(te(t,"array")&&te(a,"array"))c=a.every((d,u)=>{const m=t.some(p=>{try{return Le({subject:d,shape:p,keys:[...n,u],options:r}),!0}catch(g){if(g instanceof pe)return l.push(g),!1;throw g}});return s[u]=m,m});else if(no(t)){const d=ce(e,(u,m)=>(r.ignoreExtraKeys||Le({shape:t.parts[0].keys,subject:u,keys:[...n,u],options:r}),Le({shape:t.parts[0].values,subject:m,keys:[...n,u],options:r}),!0));Object.assign(s,d),c=!0}else{const d=bu({keys:n,options:r,shape:t,subject:e});Object.assign(s,d),c=!0}}if(l.length)throw new pe(Qd(l));if(!c){const u=`Failed on key(s): ${Object.keys(s).filter(m=>!s[m]).map(m=>hi([...n,m])).join(",")}`;throw new pe(u)}return r.ignoreExtraKeys||Object.entries(s).forEach(([d,u])=>{if(!u)throw new pe(`subject as extra key '${d}' in ${i}.`)}),s}else if(r.exactValues)return e===t;return!0}function bu({keys:e,options:t,shape:n,subject:r}){const i=hi(e),o={};if(Ce(n)){const a=new Set(ne(r)),s=new Set(ne(n));t.ignoreExtraKeys||a.forEach(l=>{if(!s.has(l))throw new pe(`Subject has extra key '${String(l)}' in ${i}`)}),s.forEach(l=>{var m;const c=n[l],d=hr(c)?c.parts.includes(void 0):!1,u=((m=c==null?void 0:c.includes)==null?void 0:m.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!u)throw new pe(`Subject missing key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=r[l];if(t.ignoreExtraKeys&&!s.has(l))return;const d=n[l];Le({subject:c,shape:d,keys:[...e,l],options:t}),o[l]=!0})}else throw new pe(`shape definition at ${i} was not an object.`);return o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wn=globalThis,oo=Wn.ShadowRoot&&(Wn.ShadyCSS===void 0||Wn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ao=Symbol(),Yo=new WeakMap;let al=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(oo&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Yo.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Yo.set(n,t))}return t}toString(){return this.cssText}};const S=e=>new al(typeof e=="string"?e:e+"",void 0,ao),jn=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new al(n,e,ao)},yu=(e,t)=>{if(oo)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Wn.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},Ko=oo?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return S(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$u,defineProperty:ku,getOwnPropertyDescriptor:xu,getOwnPropertyNames:Tu,getOwnPropertySymbols:Su,getPrototypeOf:Eu}=Object,Qe=globalThis,Qo=Qe.trustedTypes,Iu=Qo?Qo.emptyScript:"",Ar=Qe.reactiveElementPolyfillSupport,ln=(e,t)=>e,Kn={toAttribute(e,t){switch(t){case Boolean:e=e?Iu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},so=(e,t)=>!$u(e,t),Xo={attribute:!0,type:String,converter:Kn,reflect:!1,hasChanged:so};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Qe.litPropertyMetadata??(Qe.litPropertyMetadata=new WeakMap);let Ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Xo){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&ku(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=xu(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const s=i==null?void 0:i.call(this);o.call(this,a),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xo}static _$Ei(){if(this.hasOwnProperty(ln("elementProperties")))return;const t=Eu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ln("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ln("properties"))){const n=this.properties,r=[...Tu(n),...Su(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(Ko(i))}else t!==void 0&&n.push(Ko(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const a=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Kn).toAttribute(n,r.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),s=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:Kn;this._$Em=i,this[i]=s.fromAttribute(n,a.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??so)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i)a.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],a)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[ln("elementProperties")]=new Map,Ct[ln("finalized")]=new Map,Ar==null||Ar({ReactiveElement:Ct}),(Qe.reactiveElementVersions??(Qe.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=globalThis,Qn=cn.trustedTypes,ea=Qn?Qn.createPolicy("lit-html",{createHTML:e=>e}):void 0,lo="$lit$",Ne=`lit$${(Math.random()+"").slice(9)}$`,co="?"+Ne,Au=`<${co}>`,wt=document,gn=()=>wt.createComment(""),vn=e=>e===null||typeof e!="object"&&typeof e!="function",sl=Array.isArray,ll=e=>sl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Cr=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ta=/-->/g,na=/>/g,ot=RegExp(`>|${Cr}(?:([^\\s"'>=/]+)(${Cr}*=${Cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ra=/'/g,ia=/"/g,cl=/^(?:script|style|textarea|title)$/i,dl=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Cu=dl(1),Mu=dl(2),ue=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),oa=new WeakMap,ut=wt.createTreeWalker(wt,129);function ul(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ea!==void 0?ea.createHTML(t):t}const fl=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",a=Yt;for(let s=0;s<n;s++){const l=e[s];let c,d,u=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===Yt?d[1]==="!--"?a=ta:d[1]!==void 0?a=na:d[2]!==void 0?(cl.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=ot):d[3]!==void 0&&(a=ot):a===ot?d[0]===">"?(a=i??Yt,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?ot:d[3]==='"'?ia:ra):a===ia||a===ra?a=ot:a===ta||a===na?a=Yt:(a=ot,i=void 0);const p=a===ot&&e[s+1].startsWith("/>")?" ":"";o+=a===Yt?l+Au:u>=0?(r.push(c),l.slice(0,u)+lo+l.slice(u)+Ne+p):l+Ne+(u===-2?s:p)}return[ul(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class wn{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,a=0;const s=t.length-1,l=this.parts,[c,d]=fl(t,n);if(this.el=wn.createElement(c,r),ut.currentNode=this.el.content,n===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=ut.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(lo)){const m=d[a++],p=i.getAttribute(u).split(Ne),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?ml:g[1]==="?"?pl:g[1]==="@"?gl:En}),i.removeAttribute(u)}else u.startsWith(Ne)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(cl.test(i.tagName)){const u=i.textContent.split(Ne),m=u.length-1;if(m>0){i.textContent=Qn?Qn.emptyScript:"";for(let p=0;p<m;p++)i.append(u[p],gn()),ut.nextNode(),l.push({type:2,index:++o});i.append(u[m],gn())}}}else if(i.nodeType===8)if(i.data===co)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(Ne,u+1))!==-1;)l.push({type:7,index:o}),u+=Ne.length-1}o++}}static createElement(t,n){const r=wt.createElement("template");return r.innerHTML=t,r}}function bt(e,t,n=e,r){var a,s;if(t===ue)return t;let i=r!==void 0?(a=n._$Co)==null?void 0:a[r]:n._$Cl;const o=vn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((s=i==null?void 0:i._$AO)==null||s.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=bt(e,i._$AS(e,t.values),i,r)),t}class hl{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??wt).importNode(n,!0);ut.currentNode=i;let o=ut.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ft(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new vl(o,this,t)),this._$AV.push(c),l=r[++s]}a!==(l==null?void 0:l.index)&&(o=ut.nextNode(),a++)}return ut.currentNode=wt,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Ft{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=bt(this,t,n),vn(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ll(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==j&&vn(this._$AH)?this._$AA.nextSibling.data=t:this.T(wt.createTextNode(t)),this._$AH=t}$(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=wn.createElement(ul(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const a=new hl(i,this),s=a.u(this.options);a.p(n),this.T(s),this._$AH=a}}_$AC(t){let n=oa.get(t.strings);return n===void 0&&oa.set(t.strings,n=new wn(t)),n}k(t){sl(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new Ft(this.S(gn()),this.S(gn()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}}class En{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}_$AI(t,n=this,r,i){const o=this.strings;let a=!1;if(o===void 0)t=bt(this,t,n,0),a=!vn(t)||t!==this._$AH&&t!==ue,a&&(this._$AH=t);else{const s=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=bt(this,s[r+l],n,l),c===ue&&(c=this._$AH[l]),a||(a=!vn(c)||c!==this._$AH[l]),c===j?t=j:t!==j&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}a&&!i&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ml extends En{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class pl extends En{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class gl extends En{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=bt(this,t,n,0)??j)===ue)return;const r=this._$AH,i=t===j&&r!==j||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==j&&(r===j||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}class vl{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){bt(this,t)}}const Lu={P:lo,A:Ne,C:co,M:1,L:fl,R:hl,D:ll,V:bt,I:Ft,H:En,N:pl,U:gl,B:ml,F:vl},Mr=cn.litHtmlPolyfillSupport;Mr==null||Mr(wn,Ft),(cn.litHtmlVersions??(cn.litHtmlVersions=[])).push("3.1.2");const Ou=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Ft(t.insertBefore(gn(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let dn=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ou(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ue}};var Vs;dn._$litElement$=!0,dn.finalized=!0,(Vs=globalThis.litElementHydrateSupport)==null||Vs.call(globalThis,{LitElement:dn});const Lr=globalThis.litElementPolyfillSupport;Lr==null||Lr({LitElement:dn});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Nu}=Lu,aa=()=>document.createComment(""),Kt=(e,t,n)=>{var o;const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const a=r.insertBefore(aa(),i),s=r.insertBefore(aa(),i);n=new Nu(a,s,e,e.options)}else{const a=n._$AB.nextSibling,s=n._$AM,l=s!==e;if(l){let c;(o=n._$AQ)==null||o.call(n,e),n._$AM=e,n._$AP!==void 0&&(c=e._$AU)!==s._$AU&&n._$AP(c)}if(a!==i||l){let c=n._$AA;for(;c!==a;){const d=c.nextSibling;r.insertBefore(c,i),c=d}}}return n},at=(e,t,n=e)=>(e._$AI(t,n),e),Pu={},qu=(e,t=Pu)=>e._$AH=t,Du=e=>e._$AH,Or=e=>{var r;(r=e._$AP)==null||r.call(e,!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const i=t.nextSibling;t.remove(),t=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const In={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},et=e=>(...t)=>({_$litDirective$:e,values:t});class _e{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bu={attribute:!0,type:String,converter:Kn,reflect:!1,hasChanged:so},_u=(e=Bu,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:a}=n;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(r==="setter"){const{name:a}=n;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+r)};function Ru(e){return(t,n)=>typeof n=="object"?_u(e,t,n):((r,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=et(class extends _e{constructor(e){var t;if(super(e),e.type!==In.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.nt)!=null&&r.has(o))&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||(i=this.nt)!=null&&i.has(o)||(a?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return ue}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sa=e=>e??j;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mi extends _e{constructor(t){if(super(t),this.it=j,t.type!==In.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===j||t==null)return this._t=void 0,this.it=t;if(t===ue)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}mi.directiveName="unsafeHTML",mi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class la extends mi{}la.directiveName="unsafeSVG",la.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hu(e,t,n){return e?t(e):n==null?void 0:n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ca=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Fu=et(class extends _e{constructor(e){if(super(e),e.type!==In.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],o=[];let a=0;for(const s of e)i[a]=r?r(s,a):a,o[a]=n(s,a),a++;return{values:o,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=Du(e),{values:o,keys:a}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=a,o;const s=this.ut??(this.ut=[]),l=[];let c,d,u=0,m=i.length-1,p=0,g=o.length-1;for(;u<=m&&p<=g;)if(i[u]===null)u++;else if(i[m]===null)m--;else if(s[u]===a[p])l[p]=at(i[u],o[p]),u++,p++;else if(s[m]===a[g])l[g]=at(i[m],o[g]),m--,g--;else if(s[u]===a[g])l[g]=at(i[u],o[g]),Kt(e,l[g+1],i[u]),u++,g--;else if(s[m]===a[p])l[p]=at(i[m],o[p]),Kt(e,i[u],i[m]),m--,p++;else if(c===void 0&&(c=ca(a,p,g),d=ca(s,u,m)),c.has(s[u]))if(c.has(s[m])){const b=d.get(a[p]),x=b!==void 0?i[b]:null;if(x===null){const k=Kt(e,i[u]);at(k,o[p]),l[p]=k}else l[p]=at(x,o[p]),Kt(e,i[u],x),i[b]=null;p++}else Or(i[m]),m--;else Or(i[u]),u++;for(;p<=g;){const b=Kt(e,l[g+1]);at(b,o[p]),l[p++]=b}for(;u<=m;){const b=i[u++];b!==null&&Or(b)}return this.ut=a,qu(e,l),ue}}),Vu=Fu;class wl extends dn{}var _t;(function(e){e.Upper="upper",e.Lower="lower"})(_t||(_t={}));function zu(e){return e.toLowerCase()!==e.toUpperCase()}function da(e,t,n){if(!e&&(n!=null&&n.blockNoCaseCharacters))return!1;for(let r=0;r<e.length;r++){const i=e[r]||"";if(!zu(i)){if(n!=null&&n.blockNoCaseCharacters)return!1;continue}if(t===_t.Upper&&i!==i.toUpperCase())return!1;if(t===_t.Lower&&i!==i.toLowerCase())return!1}return!0}function Wu(e){return e.split("").reduce((n,r,i,o)=>{const a=i>0&&o[i-1]||"",s=i<o.length-1&&o[i+1]||"",l=da(a,_t.Lower,{blockNoCaseCharacters:!0})||da(s,_t.Lower,{blockNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!l?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}var ua;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ua||(ua={}));function ju(e){return!!e&&typeof e=="object"}function fa(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Uu(e,t){let n=!1;const r=fa(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(n=!0),{...i,[o]:a}},{});return n?new Promise(async(i,o)=>{try{await Promise.all(fa(r).map(async a=>{const s=await r[a];r[a]=s})),i(r)}catch(a){o(a)}}):r}function Re(e){if(ju(e))return Uu(e,(n,r)=>{if(!te(n,"string"))throw new Error(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Wu(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const o=r,a=n.startsWith("--")?S(n):n.startsWith("-")?jn`-${S(n)}`:jn`--${S(n)}`;return{name:a,value:jn`var(${a}, ${S(o)})`,default:String(o)}});throw new Error(`Invalid setup input for '${Re.name}' function.`)}function pi({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}function Zu(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(s=>!!s.index).length;if(r||i)return[...e];const o=e.map(s=>[s]);return o.length||(o[0]=[]),n.forEach(s=>{s>=0&&s<e.length&&(o[s]=[])}),t.forEach(s=>{const l=o[s.index];l&&l.splice(0,0,...s.values)}),o.flat()}function Un(e){return qe(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function uo(e){return qe(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"&&e.tagName.includes("-")}function bl(e){return e.map(t=>Un(t)?t.definition:t).filter(t=>uo(t))}const yl=new WeakMap;function Gu(e,t){var i;const n=bl(t);return(i=$l(yl,[e,...n]).value)==null?void 0:i.template}function Ju(e,t,n){const r=bl(t);return xl(yl,[e,...r],n)}function $l(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=kl(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?$l(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function kl(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function xl(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:o,reason:a}=kl(e,t,r);if(!o)return{result:!1,reason:a};const s=i??{nested:void 0,template:void 0};if(i||e.set(o,s),r===t.length-1)return s.template=n,{result:!0,reason:"set value at end of keys array"};const l=s.nested??new WeakMap;return s.nested||(s.nested=l),xl(l,t,n,r+1)}const Yu=new WeakMap;function Tl(e,t,n){const r=Gu(e,t),i=r??n();if(!r){const s=Ju(e,t,i);if(s.result)Yu.set(e,i);else throw new Error(`Failed to set template transform: ${s.reason}`)}const o=i.valuesTransform(t),a=Zu(t,o.valueInsertions,o.valueIndexDeletions);return{strings:i.templateStrings,values:a}}function Sl(e,t,n,r){const i=[],o=[],a=[],s=[];return e.forEach((c,d)=>{const u=i.length-1,m=i[u],p=d-1,g=t[p];r&&r(c);let b,x=[];if(typeof m=="string"&&(b=n(m,c,g),b)){i[u]=m+b.replacement,a.push(p);const A=b.getExtraValues;x=A?A(g):[],x.length&&A?(i[u]+=" ",x.forEach((U,ee)=>{ee&&i.push(" ")}),s.push(U=>{const ee=U[p],be=A(ee);return{index:p,values:be}}),i.push(c)):i[u]+=c}b||i.push(c);const k=e.raw[d];b?(o[u]=o[u]+b.replacement+k,x.length&&x.forEach(()=>{o.push("")})):o.push(k)}),{templateStrings:Object.assign([],i,{raw:o}),valuesTransform(c){const d=s.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function Ku(...[e,t,n]){if(uo(n))return{replacement:n.tagName,getExtraValues:void 0}}function Qu(e,t){return Sl(e,t,Ku)}function v(e,...t){const n=Tl(e,t,()=>Qu(e,t));return jn(n.strings,...n.values)}const Xu={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function El(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof wl?!0:El(n)}function Il(e,t){const n=e.instanceState;ne(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${r}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&ne(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),ef(e)}function ef(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function ha(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class tf extends CustomEvent{get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function fo(){return e=>{var t;return t=class extends tf{constructor(n){super(e,n),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:e})}},Object.defineProperty(t,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),t}}function q(){return fo()}function nf(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new Error(`Expected event key of type string but got type "${typeof n}" for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=fo()([e,r].join("-"));return n[r]=i,n},{}):{}}const rf="_elementVirStateSetup";function of(e){return Ce(e)?rf in e:!1}const af=Be({addListener(){return()=>!1},removeListener(){return!1},destroy(){},value:wu()});function Nr(e){return ol(e,af,{allowExtraKeys:!0})}function Al(e,t){t in e||Ru()(e,t)}function sf(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new Error(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function ma(e,t){const n=e;function r(a){t?sf(a,e,e.tagName):Al(e,a)}function i(a,s){return r(s),n[s]}return new Proxy({},{get:i,set(a,s,l){const c=of(l)?l._elementVirStateSetup():l;r(s);const d=n[s];function u(p){a[s]=p,n[s]=p}const m=e.observablePropertyListenerMap[s];if(d!==c&&Nr(d)&&(m!=null&&m.length)&&d.removeListener(m),Nr(c))if(m)c.addListener(m);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[s]=p,c.addListener(p)}else Nr(d)&&(e.observablePropertyListenerMap[s]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,s){if(s in a)return{get value(){return i(a,s)},configurable:!0,enumerable:!0}},has(a,s){return Reflect.has(a,s)}})}function lf(e){return e?ce(e,t=>t):{}}function cf({hostClassNames:e,cssVars:t}){return{hostClasses:ce(e,(n,r)=>({name:S(r),selector:S(`:host(.${r})`)})),cssVars:t}}function df({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&ne(t).forEach(o=>{const a=t[o],s=n[o];typeof a=="function"&&(a({state:r,inputs:i})?e.classList.add(s):e.classList.remove(s))})}function uf({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(a){ne(a).forEach(s=>{const l=a[s];e.instanceState[s]=l})}return{cssVars:n,slotNames:r,dispatch:a=>e.dispatchEvent(a),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function ff(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}var hf=globalThis&&globalThis.__setFunctionName||function(e,t,n){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})};function gr(e){var t;const n=e;if(!te(n,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!te(n.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!n.renderCallback||typeof n.renderCallback=="string")throw new Error(`Failed to define element '${n.tagName}': renderCallback is not a function`);const r={...Xu,...n.options},i=nf(n.tagName,n.events),o=lf(n.hostClasses);n.hostClasses&&ha(n.tagName,n.hostClasses),n.cssVars&&ha(n.tagName,n.cssVars);const a=n.cssVars?Re(n.cssVars):{},s=ff(n.slotNames),l=typeof n.styles=="function"?n.styles(cf({hostClassNames:o,cssVars:a})):n.styles||v``,c=n.renderCallback;function d(...[m]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:m}}const u=(t=class extends wl{createRenderParams(){return uf({element:this,eventsMap:i,cssVars:a,slotNamesMap:s})}get instanceType(){throw new Error(`"instanceType" was called on ${n.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${n.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${n.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{El(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${n.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${gr.name}' to define ${n.tagName}.`),this._hasRendered=!0;const m=this.createRenderParams();if(!this._initCalled&&n.initCallback&&(this._initCalled=!0,n.initCallback(m)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const p=c(m);if(p instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return df({host:m.host,hostClassesInit:n.hostClasses,hostClassNames:o,state:m.state,inputs:m.inputs}),this._lastRenderedProps={inputs:{...m.inputs},state:{...m.state}},p}catch(m){const p=Xd(m,`Failed to render ${n.tagName}`);return console.error(p),this._lastRenderError=p,kt(p)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&n.initCallback){this._initCalled=!0;const m=this.createRenderParams();if(n.initCallback(m)instanceof Promise)throw new Error(`initCallback in '${n.tagName}' cannot be asynchronous`)}}disconnectedCallback(){if(super.disconnectedCallback(),n.cleanupCallback){const m=this.createRenderParams();if(n.cleanupCallback(m)instanceof Promise)throw new Error(`cleanupCallback in '${n.tagName}' cannot be asynchronous`)}this._initCalled=!1}assignInputs(m){Il(this,m)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:ma(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:ma(this,!r.allowPolymorphicState)});const m=n.stateInitStatic||{};ne(m).forEach(p=>{Al(this,p),this.instanceState[p]=m[p]}),this.definition=u}},hf(t,"anonymousClass"),Object.defineProperty(t,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(t,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:n.tagName}),Object.defineProperty(t,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(t,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(t,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(t,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(t,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(t,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(t,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(t,"init",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(t,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(t,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:n.stateInitStatic}),t);return Object.defineProperties(u,{name:{value:zd(n.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:m=>m instanceof u,writable:!1}}),window.customElements.get(n.tagName)?console.warn(`Tried to define custom element '${n.tagName}' but it is already defined.`):window.customElements.define(n.tagName,u),u}function Cl(){return e=>{const t=e;if(!te(t,"object"))throw new Error("Cannot define element with non-object init: ${init}");return gr({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}function mf(e,t){return e===t}function pf(e,t=mf){const n=new Set;function r(){n.forEach(a=>a(o.value))}function i(a){return n.delete(a)}const o={value:e,setValue(a){t(o.value,a)||(o.value=a,r())},addListener(a){return!n.has(a)&&n.add(a),()=>i(a)},removeListener:i,destroy(){n.clear()}};return o}const Pr=Symbol("not set");function gf(e){let t=Pr,n;const r=e&&"updateCallback"in e?e.updateCallback:void 0;let i=pn();const o=pf(i.promise);function a(){i=pn(),o.setValue(i.promise)}function s(b){i.resolve(b),o.setValue(b),p.latestResolvedValue=b}function l(b){i.reject(b),o.setValue(b)}function c(b){b!==n&&(n=b,i.isSettled()&&a(),b.then(x=>{n===b&&s(x)}).catch(x=>{if(n===b){i.promise.catch(()=>{});const k=xt(x);console.error(k),l(k)}}))}function d(b,x){if(!r)throw console.error(e),new Error("Trigger was updated for asyncProp but no updateCallback has been defined.");const k={...b},A={...x};if(t===Pr||!ji(k,t,{ignoreNonSerializableProperties:!0})){t=k;const U=r(t,A);c(U)}}function u(b,x){t=Pr,d(b,x)}const m={latestResolvedValue:e&&"defaultValue"in e&&!Wo(e.defaultValue)?e.defaultValue:void 0,setNewPromise(b){c(b)},setResolvedValue(b){b!==o.value&&(i.isSettled()&&a(),i.resolve(b),s(b))},updateTrigger:r?d:()=>{throw new Error("Cannot run updateTrigger when updateCallback was not set on the asyncProp.")},forceUpdate:r?u:()=>{throw new Error("Cannot run forceUpdate when updateCallback was not set on the asyncProp.")}},p=Object.assign(o,m),g=e&&"defaultValue"in e?e.defaultValue:new Promise(()=>{});return g instanceof Promise?c(g):s(g),Wo(g)?c(g):s(g),p}function ho(...e){return{_elementVirStateSetup(){return gf(...e)}}}function mo(e,t){return bn(e,t),e.element}function vf(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function bn(e,t){const n=vf(e),r=n?`: in ${n}`:"";if(e.type!==In.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function wf(e){const t=et(class extends _e{constructor(n){super(n),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mo(n,e)}render(n){return this.element.setAttribute(e,n),ue}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function Ml(e){return!Jd(e)}function gi(e){return e instanceof Error}function T(e,t){return bf(e,t)}const bf=et(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mo(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>{var r;return(r=this.lastListenerMetaData)==null?void 0:r.callback(n)}}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ue}}),pa="onDomCreated",yf=et(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),bn(e,pa)}update(e,[t]){bn(e,pa);const n=e.element;return n!==this.element&&(requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),qr="onResize",yn=et(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(t=>this.fireCallback(t))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),bn(e,qr)}fireCallback(e){var n;const t=e[0];if(!t)throw console.error(e),new Error(`${qr} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){bn(e,qr),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function Xe(e,t,n){return Hu(e,()=>t,()=>n)}const{attributeDirective:$f,attributeSelector:Tg,attributeName:Sg}=wf("data-test-id");function Ll(e){const{assertInputs:t,transformInputs:n}={assertInputs:(e==null?void 0:e.assertInputs)??(()=>{}),transformInputs:(e==null?void 0:e.transformInputs)??(r=>r)};return{defineElement:()=>r=>(t(r),Cl()(n(r))),defineElementNoInputs:r=>(t(r),gr(n(r)))}}function kf(e,t){return t?ga(e,t):ga(void 0,e)}const ga=et(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mo(e,"assign")}render(e,t){return Il(this.element,t),ue}});function xf(...[e,t,n]){const r=Un(n)?n.definition:n,i=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/),o=(e==null?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),a=i||o,s=uo(r);if(a&&!s)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r.prototype.constructor.name}'`);if(!a||!s)return;if(i&&!r.elementOptions.ignoreUnsetInputs&&!Un(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(c){const d=Un(c)?c.inputs:void 0;return[i&&d?kf(d):void 0].filter($t)}}}function Tf(e){}function Sf(e){return Sl(e.strings,e.values,xf,Tf)}function h(e,...t){const n=Cu(e,...t),r=Tl(e,t,()=>Sf(n));return{...n,strings:r.strings,values:r.values}}function $n(e){if("templateString"in e)return e.templateString;const{strings:t,values:n}=e;if((!t||!(t!=null&&t.length))&&(!n||!n.length))return"";const r=[...n||[],""],o=(t??[""]).map((a,s)=>{const l=Ef(a,r[s]);return`${a}${l}`});return Rd(o.join(""))}function Ef(e,t){return t._$litType$!=null||t._$litDirective$!=null?$n(t):Array.isArray(t)?t.map(r=>$n(r)).join(""):e.endsWith("=")?`"${t}"`:t}const va="vira-",{defineElement:Vt,defineElementNoInputs:Eg}=Ll({assertInputs:e=>{if(!e.tagName.startsWith(va))throw new Error(`Tag name should start with '${va}' but got '${e.tagName}'`)}}),Ol=v`
    pointer-events: none;
    opacity: 0.3;
`,pt=Re({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Xn=Re({"vira-form-input-border-radius":"8px"}),er=Re({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":v`calc(${Xn["vira-form-input-border-radius"].value} + 4px)`});function Nl({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const i=S(Te(r+n+t));return v`
        ${S(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${er["vira-focus-outline-color"].value};
            border-radius: ${er["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const He=v`
    padding: 0;
    margin: 0;
`,X=v`
    ${He};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;function If(e){return v`
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
`,ae=Vt()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>v`
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
    `,renderCallback({inputs:e}){return e.icon?e.icon.svgTemplate:""}});var vi;(function(e){e.Default="vira-button-default",e.Outline="vira-button-outline"})(vi||(vi={}));Vt()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle===vi.Outline,"vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>v`
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
            ${er["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
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
            ${Ol};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${X};
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
            border-radius: ${Xn["vira-form-input-border-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${pt["vira-interaction-animation-duration"].value},
                background-color
                    ${pt["vira-interaction-animation-duration"].value},
                border-color ${pt["vira-interaction-animation-duration"].value};
        }

        ${Nl({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${ae} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:e})=>{const t=e.icon?h`
                  <${ae.assign({icon:e.icon})}></${ae}>
              `:"",n=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}});var wi;(function(e){e.Header="header"})(wi||(wi={}));Vt()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},styles:({hostClasses:e})=>v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${X};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${pt["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:q()},stateInitStatic:{contentHeight:0},renderCallback({state:e,updateState:t,dispatch:n,events:r,inputs:i}){const o=i.expanded?v`
                  height: ${e.contentHeight}px;
              `:v`
                  height: 0;
              `;return h`
            <button
                class="header-wrapper"
                ${T("click",()=>{n(new r.expandChange(!i.expanded))})}
            >
                <slot name=${wi.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${yn(({contentRect:a})=>{t({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});const M=Re({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function w({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}const Af=w({name:"CloseX24Icon",svgTemplate:h`
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
    `});const Cf=w({name:"Loader24Icon",svgTemplate:h`
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
    `}),Mf=v`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${pt["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Lf=w({name:"LoaderAnimated24Icon",svgTemplate:h`
        <style>
            ${Mf}
        </style>
        ${Cf.svgTemplate}
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
    `});const Of=w({name:"StatusFailure24Icon",svgTemplate:h`
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
    `});var tr;(function(e){e.Loading="loading",e.Error="error"})(tr||(tr={}));const Nn=Vt()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},events:{imageLoad:q(),imageError:q()},styles:({hostClasses:e})=>v`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:i}){const o=e.imageUrl,a=t.erroredUrls[o]?h`
                  <slot class="status-wrapper" name=${tr.Error}>
                      <${ae.assign({icon:Of})} class="error"></${ae}>
                  </slot>
              `:t.loadedUrls[o]?void 0:h`
                    <slot class="status-wrapper" name=${tr.Loading}>
                        <${ae.assign({icon:Lf})}></${ae}>
                    </slot>
                `;return h`
            ${Xe(!!a,a)}
            <img
                class=${se({hidden:!!a})}
                ${T("load",async()=>{e._debugLoadDelay&&await ui(e._debugLoadDelay.milliseconds),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${T("error",async s=>{e._debugLoadDelay&&await ui(e._debugLoadDelay.milliseconds),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(s.error))})}
                src=${o}
            />
        `}});var wa;(function(e){e.Upper="upper",e.Lower="lower"})(wa||(wa={}));var ba;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ba||(ba={}));const Nf={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Pf=Object.keys(Nf),qf=["a","animate","animateMotion","animateTransform","audio","canvas","circle","clipPath","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","iframe","image","line","linearGradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tspan","unknown","use","video","view"];[...Pf,...qf];function Pl(e,t){const n=e.currentTarget;if(!(n instanceof t))throw new Error(`Target from event '${e.type}' was not of type '${t.constructor.name}'. Got '${n==null?void 0:n.constructor.name}'.`);return n}function bi({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>bi({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function ql({value:e,allowed:t,blocked:n}){const r=t?bi({input:e,matcher:t}):!0,i=n?bi({input:e,matcher:n}):!1;return r&&!i}function Dl(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(ql({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function Df({inputs:e,filteredValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const o=Pl(n,HTMLInputElement),a=n.data,s=t;let l=o.value??"";if(a)if(a.length===1)ql({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs})||(l=s,r(a));else{const{filtered:c,blocked:d}=Dl({value:a,allowed:e.allowedInputs,blocked:e.blockedInputs});l=c,r(d)}o.value!==l&&(o.value=l),s!==l&&i(l)}Vt()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-clear-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:q(),inputBlocked:q()},styles:({hostClasses:e,cssVars:t})=>v`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${er["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Ol};
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
                ${X};
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
                ${X};
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
                border-radius: ${Xn["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${pt["vira-interaction-animation-duration"].value};
            }

            label {
                ${X};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${Xn["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Nl({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${X};
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
                ${X};
                color: ${t["vira-input-clear-button-color"].value};
                cursor: pointer;
                display: flex;
                transition: ${pt["vira-interaction-animation-duration"].value};
            }

            .close-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .close-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0},renderCallback:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:o}=Dl({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),a=e.icon?h`
                  <${ae.assign({icon:e.icon})} class="left-side-icon"></${ae}>
              `:"",s=e.fitText?v`
                  width: ${n.forcedInputWidth}px;
              `:"";return h`
            <label>
                ${a}
                ${Xe(!!e.fitText,h`
                        <span
                            class="size-span"
                            ${yn(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${o||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    style=${s}
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${o}
                    ${T("input",l=>{Df({inputs:e,filteredValue:o,event:l,inputBlockedCallback(c){t(new i.inputBlocked(c))},newValueCallback(c){t(new i.valueChange(c))}})})}
                    placeholder=${e.placeholder}
                />
                ${Xe(!!(e.showClearButton&&e.value),h`
                        <button
                            class="close-x-button"
                            title="clear input"
                            ${T("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${ae.assign({icon:Af})}></${ae}>
                        </button>
                    `)}
                ${Xe(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});const Bf=0;function po(e){return!(e.type!=="click"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Bf)}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;var ya;(function(e){e.Upper="upper",e.Lower="lower"})(ya||(ya={}));var $a;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})($a||($a={}));Vt()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>v`
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
    `,events:{routeChange:q()},renderCallback({inputs:e,dispatch:t,events:n}){var i,o;function r(a){e.route&&po(a)&&(a.preventDefault(),e.route.scrollToTop&&window.scrollTo(0,0),t(new n.routeChange(e.route.route)))}if((i=e.link)!=null&&i.newTab)return h`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const a=e.link?e.link.url:(o=e.route)==null?void 0:o.router.createRoutesUrl(e.route.route);return h`
                <a href=${a} rel="noopener noreferrer" ${T("click",r)}>
                    <slot></slot>
                </a>
            `}}});const f=Re({"toniq-icon-fill-color":M["vira-icon-fill-color"].default,"toniq-icon-stroke-color":M["vira-icon-stroke-color"].default,"toniq-icon-stroke-width":"2px"}),H=ce(f,(e,t)=>n=>S(`var(${t.name}, ${n})`));w({name:"Copy16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${f["toniq-icon-fill-color"].value}
            stroke=${f["toniq-icon-stroke-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 6V4.3c0-.7-.6-1.3-1.3-1.3H4.3C3.6 3 3 3.6 3 4.3v5.4c0 .7.6 1.3 1.3 1.3H6"
            ></path>
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M14 7.3c0-.7-.6-1.3-1.3-1.3H7.3C6.6 6 6 6.6 6 7.3v5.4c0 .7.6 1.3 1.3 1.3h5.4c.7 0 1.3-.6 1.3-1.3V7.3Z"
            ></path>
        </svg>
    `});w({name:"ExternalLink16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M7 4H4.3C3.6 4 3 4.6 3 5.3v6.4c0 .7.6 1.3 1.3 1.3h6.4c.7 0 1.3-.6 1.3-1.3V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `});w({name:"InfoCircle16Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1"
            />
        </svg>
    `});w({name:"ArrowBarUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 14V4L8 8m4-4 4 4"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M4 20h16" />
        </svg>
    `});w({name:"ArrowForwardUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4"
            />
        </svg>
    `});const Bl=w({name:"ArrowLeft24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 12h14M5 12l6 6m-6-6 6-6"
            />
        </svg>
    `});w({name:"ArrowLoopLeft24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3"
            />
        </svg>
    `});w({name:"ArrowLoopRight24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3"
            />
        </svg>
    `});const _l=w({name:"ArrowRight24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 12h14m-6 6 6-6m-6-6 6 6"
            />
        </svg>
    `});w({name:"ArrowsSort24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4"
            />
        </svg>
    `});w({name:"ArrowsSortAscending24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 19 19 5m0 6V5h-6"
            />
        </svg>
    `});w({name:"ArrowsSortDescending24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m5 5 14 14m0-6v6h-6"
            />
        </svg>
    `});w({name:"Bell24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 18h16m-2 0v-7.5C18 6.9 15.3 4 12 4s-6 3-6 6.5V18m7.9-13.7a2 2 0 0 0-3.8 0M10 18v1a2 2 0 1 0 4 0v-1"
            />
        </svg>
    `});w({name:"Bucket24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M7 9a5 5 0 0 1 5-5 5 5 0 0 1 5 5"
                fill="none"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m19 9-2 9c-.2 1.2-1 2-2 2H9c-1 0-1.8-.8-2-2L5 9h14Z"
            />
        </svg>
    `});w({name:"BuildingStore24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 10.827c.313.112.65.173 1 .173 1.646 0 3-1.354 3-3 0 1.646 1.354 3 3 3s3-1.354 3-3c0 1.646 1.354 3 3 3 .35 0 .687-.061 1-.173V21H5V10.827Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 21v-4c0-1.1.9-2 2-2h2c1.097 0 2 .903 2 2v4"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M3 21h18" />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M21 7v1c0 1.646-1.354 3-3 3s-3-1.354-3-3c0 1.646-1.354 3-3 3S9 9.646 9 8c0 1.646-1.354 3-3 3S3 9.646 3 8V7"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m3 7 2-4h14l2 4H3Z"
            />
        </svg>
    `});w({name:"CalendarEvent24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `});w({name:"Cash24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `});w({name:"Chain24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m11.181 12.944 1.356 1.138c.74.621 1.845.525 2.466-.215l4.178-4.98a1.75 1.75 0 0 0-.216-2.465l-2.681-2.25a1.751 1.751 0 0 0-2.466.216l-2.089 2.49"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m12.819 11.056-1.356-1.138a1.751 1.751 0 0 0-2.466.215l-4.178 4.98a1.75 1.75 0 0 0 .216 2.465l2.681 2.25c.74.621 1.845.524 2.466-.216l2.089-2.49"
            />
        </svg>
    `});const _f=w({name:"CheckMark24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `}),Rf=w({name:"ChevronDown24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 9 6 6 6-6"
            />
        </svg>
    `});w({name:"ChevronUp24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 15 6-6 6 6"
            />
        </svg>
    `});w({name:"Circle24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                r="9"
                cx="12"
                cy="12"
            />
        </svg>
    `});w({name:"CircleDot24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                cx="12"
                cy="12"
                r="4"
            />
        </svg>
    `});const go=w({name:"CirclePlus24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6"
            />
        </svg>
    `});w({name:"CircleWavyCheck24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5.64 18.36a2.6 2.6 0 0 0 1.7.68c.57.03 1.22-.07 1.69.12.47.2.86.73 1.3 1.11.52.45 1.08.73 1.67.73.58 0 1.15-.29 1.67-.73.45-.38.85-.92 1.3-1.1.45-.2 1.1-.09 1.67-.13a2.64 2.64 0 0 0 1.71-.68 2.6 2.6 0 0 0 .69-1.7c.03-.57-.07-1.22.12-1.69.2-.47.73-.86 1.11-1.3.45-.52.73-1.09.73-1.67 0-.58-.29-1.15-.73-1.67-.38-.45-.92-.85-1.1-1.3-.2-.45-.09-1.1-.13-1.67a2.64 2.64 0 0 0-.68-1.71 2.61 2.61 0 0 0-1.7-.69c-.57-.03-1.22.07-1.69-.12-.47-.2-.86-.73-1.3-1.11A2.61 2.61 0 0 0 12 3c-.58 0-1.15.29-1.67.73-.45.38-.85.92-1.3 1.1-.45.2-1.1.09-1.67.13a2.6 2.6 0 0 0-1.71.68 2.61 2.61 0 0 0-.69 1.7c-.03.57.07 1.22-.12 1.69-.2.47-.73.86-1.11 1.3A2.57 2.57 0 0 0 3 12c0 .58.29 1.15.73 1.67.38.45.92.85 1.1 1.3.2.45.09 1.1.13 1.67.06.69.25 1.3.68 1.71v.01Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m9 12 2 2 4-4"
            />
        </svg>
    `});w({name:"Clock24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 7v5l3 3"
                fill="none"
            />
        </svg>
    `});w({name:"Code24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                stroke-width=${f["toniq-icon-stroke-width"].value}
            />
        </svg>
    `});const Rl=w({name:"Copy24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `});w({name:"CreateFile24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 15V7m-4 4h8m4-6.4c0-.9-.7-1.6-1.6-1.6H4.6C3.7 3 3 3.7 3 4.6v12.8c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V4.6ZM6 19v1.4c0 .9.7 1.6 1.6 1.6h12.8c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H19"
            />
        </svg>
    `});w({name:"DotsVertical24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Download24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6M12 4v11l-4-4m8 0-4 4"
            />
        </svg>
    `});w({name:"Edit24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `});w({name:"Envelope24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4.8 19c-.5 0-1-.2-1.3-.5-.4-.3-.5-.7-.5-1.2V6.8c0-.5.1-1 .5-1.3.4-.3.8-.5 1.3-.5h14.4c.5 0 1 .2 1.3.5.4.3.5.8.5 1.3v10.5c0 .5-.1.9-.5 1.2-.4.3-.8.5-1.3.5H4.8ZM20.5 5.5 12 13 3.5 5.5"
            />
        </svg>
    `});const Hf=w({name:"ExternalLink24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 14 20 4m-5 0h5v5"
            />
        </svg>
    `});w({name:"Filter24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `});w({name:"Gear24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5.74 10.25c.3-1.07.86-2.03 1.62-2.8L6.2 4.95l2.6-1.5 1.58 2.25a6.53 6.53 0 0 1 3.24 0l1.58-2.24 2.6 1.5-1.16 2.5a6.49 6.49 0 0 1 1.62 2.8l2.74.24v3l-2.74.25a6.49 6.49 0 0 1-1.62 2.8l1.16 2.5-2.6 1.5-1.58-2.25a6.53 6.53 0 0 1-3.24 0L8.8 20.54l-2.6-1.5 1.16-2.5a6.49 6.49 0 0 1-1.62-2.8L3 13.5v-3l2.74-.25ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            />
        </svg>
    `});w({name:"Geometry24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `});w({name:"GridDots24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Heart24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `});w({name:"Infinity24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `});w({name:"Info24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                fill="none"
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 7.8l0 0"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 11.5v5"
            />
        </svg>
    `});w({name:"LayersLinked24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `});w({name:"LayoutGrid24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `});w({name:"Lifebuoy24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 5a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m14.8 14.8 3.5 3.5m-9.1-3.5-3.5 3.5m0-12.6 3.5 3.5m9.2-3.5-3.6 3.5"
                fill="none"
            />
        </svg>
    `});w({name:"List24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"
            />
        </svg>
    `});w({name:"ListDetails24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 5c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1V5Zm0 10c0-.5-.5-1-1-1H4a1 1 0 0 0-1 1v4c0 .5.5 1 1 1h4c.5 0 1-.5 1-1v-4Z"
            />
        </svg>
    `});w({name:"Loader24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `});const Ff=w({name:"LoaderAnimated24Icon",svgTemplate:h`
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
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `});w({name:"Lock24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V7a4 4 0 0 1 4-4 4 4 0 0 1 4 4v4"
            />
        </svg>
    `});w({name:"LockOpen24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Z"
            />
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-stroke-color"].value}
                r="1"
                cx="12"
                cy="16"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M8 11V6a4 4 0 0 1 4-4 4 4 0 0 1 3.8 2.8"
            />
        </svg>
    `});w({name:"Menu24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    `});w({name:"Paper24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 8h3m-3 4h6m-6 4h6m4-11.552C19 3.649 18.351 3 17.552 3H6.448C5.649 3 5 3.649 5 4.448v15.104C5 20.351 5.649 21 6.448 21h11.104c.799 0 1.448-.649 1.448-1.448V4.448Z"
            />
        </svg>
    `});w({name:"People24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `});w({name:"Person24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <circle
                stroke-width=${f["toniq-icon-stroke-width"].value}
                cx="12"
                cy="12"
                r="9"
            />
            <path
                stroke="none"
                fill=${f["toniq-icon-stroke-color"].value}
                d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            />
            <path
                stroke="none"
                fill=${f["toniq-icon-stroke-color"].value}
                d="M5.6 18.3A7.2 7.2 0 0 1 12 14c2.8 0 5.2 1.8 6.4 4.3a9 9 0 0 1-12.8 0Z"
            />
        </svg>
    `});w({name:"Photo24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M15 8h0"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="m4 15 4-4c1-.9 2-.9 3 0l5 5m-2-2 1-1c1-.9 2-.9 3 0l2 2"
            />
        </svg>
    `});w({name:"Refresh24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18.3 15a7 7 0 1 1 .4-5"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 5v5h-5"
            />
        </svg>
    `});w({name:"Rocket24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `});w({name:"Search24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6"
            />
        </svg>
    `});w({name:"Send24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `});w({name:"ShoppingCart24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M6 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M17 17a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.1.9-2 2-2Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 5 14 1-1 7H6"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M17 17H6V3H4"
            />
        </svg>
    `});w({name:"Social24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `});w({name:"Square24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${f["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
        </svg>
    `});const ka={interactionDuration:v`--toniq-interaction-transition-duration`,prettyDuration:v`--toniq-pretty-transition-duration`},Z={interaction:v`var(${ka.interactionDuration}, 84ms)`,pretty:v`var(${ka.prettyDuration}, 300ms)`};function Dr(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const Vf=(()=>{const e={backgroundColor:v`#ffffff`,foregroundColor:v`#000000`},t={...e,foregroundColor:v`#00D093`},n={...e,foregroundColor:v`#ACADAD`},r={...e,foregroundColor:v`#D6D6D6`},i={...t},o={...t,foregroundColor:v`#00A876`},a={...t,foregroundColor:v`#1D6852`},s={...r},l={...e,foregroundColor:v`#EAFBF7`},c={...e,backgroundColor:v`#D2EEFA`},d=Dr(i),u=Dr(o),m=Dr(a),p=m,g={backgroundColor:v`#F1F3F6`,foregroundColor:e.foregroundColor},b={...g,foregroundColor:v`#9A9A9D`};return{brandPrimary:t,pagePrimary:e,pageSecondary:n,pageTertiary:r,pageInteraction:i,pageInteractionHover:o,pageInteractionActive:a,divider:s,dividerFaint:l,dropShadow:c,pageDarkPrimary:p,accentPrimary:d,accentPrimaryHover:u,accentPrimaryActive:m,accentSecondary:g,accentTertiary:b}})(),Hl=Vf;function xa(e,t){return S(`--toniq-${li(e)}-${li(t)}`)}const Fl=ce(Hl,e=>({backgroundColor:xa(e,"backgroundColor"),foregroundColor:xa(e,"foregroundColor")}));function Se(e,t){const n=Hl[e][t],r=Fl[e][t];return v`var(${r}, ${n})`}const $=ce(Fl,e=>({foregroundColor:Se(e,"foregroundColor"),backgroundColor:Se(e,"backgroundColor")}));function F(e){return v`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}const yt=v`
    pointer-events: none;
    opacity: 0.3;
    ${fe};
`;function tt({mainSelector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=3}){const i=S(Te(r+n+t));return v`
        ${S(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${$.brandPrimary.foregroundColor};
            border-radius: 12px;
            z-index: 100;
        }
    `}const Vl={toniqFont:{"font-family":v`'Lexend', sans-serif`},normalWeightFont:{"font-weight":v`400`},boldFont:{"font-weight":v`600`},extraBoldFont:{"font-weight":v`900`},paragraphFont:{"line-height":v`24px`,"font-size":v`16px`},boldParagraphFont:{},labelFont:{"line-height":v`16px`,"font-size":v`12px`},boldLabelFont:{},h1Font:{"line-height":v`96px`,"font-size":v`64px`},h2Font:{"line-height":v`64px`,"font-size":v`48px`},h3Font:{"line-height":v`48px`,"font-size":v`32px`},h4Font:{"line-height":v`32px`,"font-size":v`24px`},monospaceFont:{"font-family":v`'Inconsolata', monospace`,"line-height":v`1.125em`}},zf=ce(Vl,(e,t)=>{const n=S(li(e.replace(/Font$/,"")));return ce(t,i=>{const o=S(i);return v`--toniq-font-${n}-${o}`})});function ye(e){const t=zf[e],n=Vl[e],r=ne(t).map(i=>{const o=n[i],a=t[i];return v`
            ${S(i)}: var(${a}, ${o});
        `});return S(r.join(`
`))}const G=(()=>{const e=v`
        font-style: normal;
        color: ${$.pagePrimary.foregroundColor};
        ${ye("toniqFont")};
    `,t=v`
        ${e};
        ${ye("normalWeightFont")};
    `,n=v`
        ${e};
        ${ye("boldFont")};
    `,r=v`
        ${e};
        ${ye("extraBoldFont")};
    `,i=v`
        ${e};
        ${ye("paragraphFont")};
        ${t};
    `,o=v`
        ${e};
        ${i};
        ${n};
    `,a=v`
        ${e};
        ${ye("labelFont")};
        ${t};
    `,s=v`
        ${a};
        ${n};
    `,l=v`
        ${ye("h1Font")};
        ${r};
    `,c=v`
        ${ye("h2Font")};
        ${r};
    `,d=v`
        ${ye("h3Font")};
        ${n};
    `,u=v`
        ${ye("h4Font")};
        ${n};
    `,m=v`
        ${ye("monospaceFont")}
    `;return{toniqFont:e,normalWeightFont:t,boldFont:n,extraBoldFont:r,paragraphFont:i,boldParagraphFont:o,labelFont:a,boldLabelFont:s,h1Font:l,h2Font:c,h3Font:d,h4Font:u,monospaceFont:m}})(),nr={popupShadow:v`
        filter: drop-shadow(0px 12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,popupShadowReversed:v`
        filter: drop-shadow(0px -12px 8px ${$.dropShadow.backgroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `,menuShadow:v`
        filter: drop-shadow(0px 12px 8px ${$.divider.foregroundColor});
        /*
            This helps force the drop shadow to re-render when the element moves or the page changes.
        */
        will-change: filter;
    `};function Wf(e,t=!0){const n=S(e),r=e===":host"?v`
                  :host(:hover);
              `:v`
                  ${n}:hover
              `,i=t?v`
              ${n} {
                  cursor: pointer;
              }
              ${r} {
                  border-color: ${$.pageInteraction.foregroundColor};
              }
          `:v``;return v`
        ${n} {
            border-radius: 16px;
            background-color: ${$.pagePrimary.backgroundColor};
            border: 1px solid transparent;
            padding: 16px;
            cursor: auto;
            ${nr.popupShadow};
        }

        ${i}
    `}w({name:"SquareCheck24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                stroke-width=${f["toniq-icon-stroke-width"].value}
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="m17 8-6.5 8L7 12.5"
            />
        </svg>
    `});const yi=w({name:"Trash24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M9 7V4c0-.5.5-1 1-1h4c.5 0 1 .5 1 1v3"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 7h16M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M10 11v6"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill="none"
                d="M14 11v6"
            />
        </svg>
    `});w({name:"Upload24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 14v6h16v-6m-8 1V4L8 8m8 0-4-4"
            />
        </svg>
    `});w({name:"Wallet24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M4 8V6c0-2 2-2 2-2h10c.6 0 1 .4 1 1v3"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19 12V9c0-.6-.4-1-1-1H6S4 8 4 6v12c0 1 1 2 2 2h12c.6 0 1-.4 1-1v-2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20 12v4h-4a2 2 0 0 1-2-2c0-1.1.9-2 2-2h4"
            />
        </svg>
    `});const jf=w({name:"World24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 0c2 0 4 4 4 9s-2 9-4 9-4-4-4-9 2-9 4-9ZM4 9h16M4 15h16"
            />
        </svg>
    `});w({name:"WorldUpload24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-fill-color"].value}
                d="M12 21c-2 0-4-4-4-9s2-9 4-9 4 4 4 9M4 9h16M4 15h8m0 6s0 0 0 0a9 9 0 1 1 9-9"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 21v-7l3 3m-3-3-3 3"
            />
        </svg>
    `});w({name:"X24Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M18 6 6 18M6 6l12 12"
            />
        </svg>
    `});w({name:"Folder48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M38 38c2 0 4-2 4-4V18c0-2-2-4-4-4H24l-6-6h-8c-2 0-4 2-4 4v22c0 2 2 4 4 4h28Z"
            />
        </svg>
    `});w({name:"FolderOff48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M13.9 8H18l6 6h14a4 4 0 0 1 4 4v16a4 4 0 0 1-.4 1.7M32.1 38H10a4 4 0 0 1-4-4V11.9"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m6 6 36 36"
            />
        </svg>
    `});w({name:"Kyc48Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="48"
            height="48"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M42 34.35c0 2-1.58 3.65-3.5 3.65h-29A3.6 3.6 0 0 1 6 34.35v-19.7c0-2 1.58-3.65 3.5-3.65h29a3.6 3.6 0 0 1 3.5 3.64v19.71Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24h-2.6a4.86 4.86 0 0 0-2.49 2.21 7.26 7.26 0 0 0-.9 3.7v.4c0 .7.21 1.4.6 1.9.4.5.94.79 1.5.79h7.79c.56 0 1.1-.28 1.49-.79.39-.5.6-1.2.6-1.9v-.4a7.23 7.23 0 0 0-.9-3.7A4.86 4.86 0 0 0 19.6 24H17Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M17 24.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
            />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M28 32h10" />
            <path stroke-width=${f["toniq-icon-stroke-width"].value} d="M28 28h5" />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${H["toniq-icon-fill-color"]("#00d093")}
                d="M44.83 7.14a.73.73 0 0 0-.67-.65 14.75 14.75 0 0 1-4.02-1.1 14.32 14.32 0 0 1-3.66-2.2.74.74 0 0 0-.98 0c-1.1.9-2.33 1.65-3.66 2.2-1.27.55-2.62.92-4 1.1a.73.73 0 0 0-.67.65c-.03.3-.76 7.5 1.04 11.06 2.15 4.25 7.28 6.63 7.5 6.73.19.1.41.1.6 0 .22-.1 5.34-2.48 7.5-6.73 1.78-3.56 1.05-10.76 1.01-11.06Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="m40 10.8-5.2 6.4-2.8-2.8"
            />
        </svg>
    `});w({name:"Api64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                fill=${f["toniq-icon-fill-color"].value}
                d="m32 3 26 12.5v31L32 61 6 46.5v-31L32 3Z"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M20.6 25.1a6 6 0 0 1 8.4 2l-10.4 6.4a6 6 0 0 1 2-8.4Zm15.7 16a4.5 4.5 0 0 1-6.3 0l6.3-6.3a4.5 4.5 0 0 1 0 6.3ZM58 15.5l-18.2 8.7M6 15.5l4 1.5c5 1.9 8.4 5.7 10.3 8.3M32 61V50.3M58 29a14 14 0 0 1-21.5 11.9m-8.3-4.4 3.2 3.2m.4-6.7 3.1 3.2"
            />
        </svg>
    `});w({name:"CircleDashes64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M19.1 33.8A13 13 0 0 1 32 19c2 0 3.8.4 5.4 1.2m7.5 10A13 13 0 0 1 32 45c-2 0-3.8-.4-5.4-1.2"
            />
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M6 31.3A26 26 0 0 1 33.7 6m12 3.7a26 26 0 0 1 8 36.6M44.3 55A25.9 25.9 0 0 1 8.7 43.5"
            />
        </svg>
    `});w({name:"Rocket64Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${f["toniq-icon-stroke-color"].value}
            fill=${f["toniq-icon-fill-color"].value}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="64"
            height="64"
            viewBox="0 0 64 64"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
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
    `});const zl="0 0 58 58",Wl=Mu`
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
            viewBox="${zl}"
        >
            ${Wl}
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
            viewBox="${zl}"
        >
            ${Wl}
        </svg>
    `});const Uf=w({name:"BrandDiscord24Icon",svgTemplate:h`
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
    `}),Zf=w({name:"BrandDistrikt24Icon",svgTemplate:h`
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
    `}),Gf=w({name:"BrandDscvr24Icon",svgTemplate:h`
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
    `});const Jf=w({name:"BrandInstagram24Icon",svgTemplate:h`
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
    `});const Yf=w({name:"BrandMedium24Icon",svgTemplate:h`
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
    `});const Kf=w({name:"BrandTelegram24Icon",svgTemplate:h`
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
    `}),Qf=w({name:"BrandTiktok24Icon",svgTemplate:h`
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
    `});const Xf=w({name:"BrandTwitch24Icon",svgTemplate:h`
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
    `}),eh=w({name:"BrandTwitter24Icon",svgTemplate:h`
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
    `}),th=w({name:"BioniqRobot100Icon",svgTemplate:h`
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
                fill=${f["toniq-icon-fill-color"].value}
                stroke-width="calc(${f["toniq-icon-stroke-width"].value} * 2)"
                d="m50 89-38.5-3L26 22h48l14.5 64L50 89M23 35.6l-8.5-2.1-6 23 9.2 2.3m59.6-23.2 8.4-2.1 6 23-9.2 2.3"
            />
            <path
                stroke-width="calc(${f["toniq-icon-stroke-width"].value} * 2)"
                d="M39 9.5 42.1 22M61 9.5 57.9 22M28.5 55h43L76 79H24l4.5-24ZM67 55v24m-8-24v24m-9-24v24M33 55v24m8-24v24m4.5-43.5-1-1.5h-13l-1 1.5 7 10h2l6-10Zm9 0 1-1.5h13l1 1.5-7 10h-2l-6-10Z"
            />
        </svg>
    `});w({name:"EntrepotLogo144Icon",svgTemplate:h`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill=${H["toniq-icon-fill-color"](String($.brandPrimary.foregroundColor))}
            stroke-linecap="round"
            stroke-linejoin="round"
            width="134"
            height="144"
            viewBox="0 0 134 144"
        >
            <path
                stroke-width=${f["toniq-icon-stroke-width"].value}
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `});const nh=Be({discord:xe(void 0,""),distrikt:xe(void 0,""),dscvr:xe(void 0,""),instagram:xe(void 0,""),medium:xe(void 0,""),telegram:xe(void 0,""),tikTok:xe(void 0,""),twitch:xe(void 0,""),twitter:xe(void 0,""),website:xe(void 0,"")});nh.defaultValue;const rh={discord:Uf,instagram:Jf,telegram:Kf,tikTok:Qf,distrikt:Zf,twitch:Xf,dscvr:Gf,medium:Yf,twitter:eh,website:jf},Ta="toniq-",{defineElement:P,defineElementNoInputs:vo}=Ll({assertInputs:e=>{if(!e.tagName.startsWith(Ta))throw new Error(`Tag name should start with '${Ta}' but got '${e.tagName}'`)}}),Br=P()({tagName:"toniq-bold-space",styles:v`
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
            ${G.boldFont};
        }

        .text.visible {
            position: absolute;
            top: 0;
            left: 0;
        }
    `,renderCallback({inputs:e}){return e.text?h`
            <span hidden aria-hidden="true" class="text bold">${e.text}</span>
            <span class="text visible">${e.text}</span>
        `:""}}),O=P()({tagName:"toniq-icon",styles:v`
        :host {
            display: inline-flex;
            ${M["vira-icon-fill-color"].name}: ${f["toniq-icon-fill-color"].value}
            ${M["vira-icon-stroke-color"].name}: ${f["toniq-icon-stroke-color"].value}
            ${M["vira-icon-stroke-width"].name}: ${f["toniq-icon-stroke-width"].value}
        }

        ${ae} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:e}){return h`
            <${ae.assign(e)}></${ae}>
        `}}),$i=v`8px`;var le;(function(e){e.Default="default",e.Outline="outline",e.Secondary="secondary"})(le||(le={}));const _=P()({tagName:"toniq-button",hostClasses:{"toniq-button-secondary":({inputs:e})=>e.variant===le.Secondary,"toniq-button-outline":({inputs:e})=>e.variant===le.Outline,"toniq-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${G.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${fe};
        }

        :host(:hover) button {
            ${F($.accentPrimaryHover)};
        }

        :host(:active) button {
            ${F($.accentPrimaryActive)};
        }

        button {
            ${X};
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
            border-radius: ${$i};
            ${F($.accentPrimary)};
            padding: 10px;
            transition:
                color ${Z.interaction},
                background-color ${Z.interaction},
                border-color ${Z.interaction};
        }

        ${tt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:2})}

        ${e["toniq-button-secondary"].selector} button {
            ${F($.accentSecondary)};
        }

        ${e["toniq-button-outline"].selector} button {
            ${F($.pagePrimary)};
            border-color: ${$.accentPrimary.backgroundColor};
        }

        ${e["toniq-button-disabled"].selector} {
            ${yt};
        }

        :host(.${e["toniq-button-secondary"].name}:hover) button,
        :host(.${e["toniq-button-outline"].name}:hover) button {
            border-color: ${$.accentPrimaryHover.backgroundColor};
        }

        :host(.${e["toniq-button-secondary"].name}:active) button,
        :host(.${e["toniq-button-outline"].name}:active) button {
            border-color: ${$.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${O.assign({icon:e.icon})}
                      class="icon-template"
                  ></${O}>
              `:"",n=e.text?h`
                  <span class="text-template">${e.text}</span>
              `:"";return h`
            <button ?disabled=${e.disabled}>
                <slot>${t} ${n}</slot>
            </button>
        `}});function ih(e,t,n={behavior:"smooth"}){let r=2;const i=t==="up"||t==="down"?"y":"x",o=t==="right"||t==="down"?"+":"-",a=i==="x"?e.scrollWidth-e.offsetWidth:e.scrollHeight-e.offsetHeight,s=wo(e)[i];o==="-"&&(r*=-1);const l=e[i==="x"?"scrollLeft":"scrollTop"]+r,c=s.filter(u=>o==="+"?u>l:u<l).sort((u,m)=>o==="+"?u-m:m-u);let d;return c.length>0?d=c[0]:o==="+"?d=a:d=0,e.scrollTo({...n,[i==="x"?"left":"top"]:d})}function oh(e){const t=window.getComputedStyle(e),n=e.getBoundingClientRect();let r=t.getPropertyValue("scroll-padding-left").replace("auto","0px"),i=t.getPropertyValue("scroll-padding-top").replace("auto","0px"),o=t.getPropertyValue("scroll-padding-right").replace("auto","0px"),a=t.getPropertyValue("scroll-padding-bottom").replace("auto","0px");function s(m,p){let g=parseFloat(m);return/%/.test(m)&&(g/=100,g*=p),g}let l=s(r,n.width),c=s(i,n.height),d=s(o,n.width),u=s(a,n.height);return{x:{before:l,after:d},y:{before:c,after:u}}}function ah(e,t,n="both"){return n==="x"&&e.right>=t.left&&e.left<=t.right||n==="y"&&e.bottom>=t.top&&e.top<=t.bottom||n==="both"&&e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom}function jl(e){let t=[];for(const n of e.children)t=t.concat(n,jl(n));return t}function sh(e,t=!0){const n=e.getBoundingClientRect(),r={x:{start:[],center:[],end:[]},y:{start:[],center:[],end:[]}},i=jl(e);for(const o of["x","y"]){const a=o==="x"?"y":"x",s=o==="x"?"left":"top",l=o==="x"?"width":"height",c=o==="x"?"scrollLeft":"scrollTop";for(const d of i){const u=d.getBoundingClientRect();if(t&&!ah(n,u,a))continue;const m=window.getComputedStyle(d);let[p,g]=m.getPropertyValue("scroll-snap-align").split(" ");typeof g>"u"&&(g=p);const b=o==="x"?g:p,x=u[s]-n[s]+e[c];switch(b){case"none":break;case"start":r[o].start.push(x);break;case"center":r[o].center.push(x+u[l]/2);break;case"end":r[o].end.push(x+u[l]);break}}}return r}function wo(e){const t=e.getBoundingClientRect(),n=oh(e),r=sh(e),i={x:e.scrollWidth-e.offsetWidth,y:e.scrollHeight-e.offsetHeight},o=(a,s)=>l=>Math.max(a,Math.min(s,l));return{x:Sa([...r.x.start.map(a=>a-n.x.before),...r.x.center.map(a=>a-t.width/2),...r.x.end.map(a=>a-t.width+n.x.after)].map(o(0,i.x))),y:Sa([...r.y.start.map(a=>a-n.y.before),...r.y.center.map(a=>a-t.height/2),...r.y.end.map(a=>a-t.height+n.y.after)].map(o(0,i.y)))}}function Sa(e){return Array.from(new Set(e))}const Zn="templates-container",lh=4e3;var ki;(function(e){e.Default="default",e.Banner="banner"})(ki||(ki={}));P()({tagName:"toniq-carousel",hostClasses:{"toniq-carousel-banner-variant":({inputs:e})=>e.variant===ki.Banner},stateInitStatic:{currentScrollPosition:{left:0,right:1/0},scrollSnapPositions:[],rotationIntervalId:void 0,enableRotation:!0},styles:({hostClasses:e})=>v`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${If(`.${Zn}`)}

        .${S(Zn)} {
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
            transition: ${Z.pretty};
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

        .arrow ${O} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 12px;
            box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            transition: ${Z.interaction};
            border: 1px solid transparent;
            ${F($.pagePrimary)};
        }

        .arrow ${O}:hover {
            border-color: ${$.pageInteractionHover.foregroundColor};
            ${F($.pageInteractionHover)};
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
    `,cleanupCallback:({state:e})=>{window.clearInterval(e.rotationIntervalId)},renderCallback({inputs:e,state:t,updateState:n,host:r}){e.enableAutomaticCycling&&t.rotationIntervalId==null?n({rotationIntervalId:window.setInterval(()=>{_r({host:r,direction:"right",allowWrapping:!0,blockIfHovering:!0})},e.cycleIntervalMs||lh)}):!e.enableAutomaticCycling&&t.rotationIntervalId!=null&&(window.clearInterval(t.rotationIntervalId),n({rotationIntervalId:void 0}));const i=Ea(t.scrollSnapPositions,0),o=Ea(t.scrollSnapPositions,-1);return h`
            <div>
                <div
                    class="arrow left ${se({hidden:i==null?!0:t.currentScrollPosition.left<=i})}"
                >
                    <${O.assign({icon:Bl})}
                        ${T("click",()=>{_r({allowWrapping:!1,blockIfHovering:!1,direction:"left",host:r})})}
                    ></${O}>
                </div>
                <div
                    ${yn(()=>{n({scrollSnapPositions:wo(xi(r)).x})})}
                    class=${Zn}
                    ${T("scroll",async a=>{const s=a.target;if(!(s instanceof HTMLElement))throw new Error("scroll event had no target");const l={left:s.scrollLeft,right:s.scrollWidth-s.scrollLeft-s.clientWidth};n({currentScrollPosition:l})})}
                >
                    ${e.templates.map(a=>h`
                            <div class="template-wrapper">${a}</div>
                        `)}
                </div>
                <div
                    class="arrow right ${se({hidden:o==null?!0:t.currentScrollPosition.left>=o})}"
                >
                    <${O.assign({icon:_l})}
                        ${T("click",()=>{_r({allowWrapping:!1,blockIfHovering:!1,direction:"right",host:r})})}
                    ></${O}>
                </div>
            </div>
        `}});function Ea(e,t){const n=t>=0?1:-1,r=t<0?e.length+t:t,i=r+n,o=e[r],a=e[i];if(!(o==null||a==null))return(o+a)/2+n*20}function xi(e){const t=e.shadowRoot.querySelector(`.${Zn}`);if(!(t instanceof HTMLElement))throw new Error("Failed to find scroll container.");return t}function _r({host:e,direction:t,allowWrapping:n,blockIfHovering:r}){if(r&&e.matches(":hover"))return;const i=xi(e),o=i.clientWidth,a=wo(xi(e)).x,s=a[0]??0,l=a.slice(-1).pop()??o,c=i.scrollLeft>=l-10,d=i.scrollLeft<=s+10;if(t==="right"&&c)n&&i.scrollTo({behavior:"smooth",left:s});else if(t==="left"&&d)n&&i.scrollTo({behavior:"smooth",left:l});else{const u=ch(e,t),m=Ia(i.scrollLeft,a,!1),p=t==="right"?1:-1,g=(i.clientWidth-u*3)*p,b=Ia((m||0)+g,a,!0);t==="right"&&b>m?i.scrollTo({behavior:"smooth",left:b}):t==="left"&&b<m?i.scrollTo({behavior:"smooth",left:b}):ih(i,t)}}function ch(e,t){const n=`.arrow.${t}`,r=e.shadowRoot.querySelector(n);if(!r)throw new Error("Failed to find arrow element for calculating its size.");return r.clientWidth}function Ia(e,t,n){return t.reduce((i,o)=>{const a=Math.abs(e-o),s=Math.abs(e-i);return a<s&&(!n||o<=e)?o:i},1/0)}P()({tagName:"toniq-checkbox",events:{checkedChange:q()},hostClasses:{"toniq-checkbox-disabled":({inputs:e})=>!!e.disabled},cssVars:{"toniq-checkbox-unchecked-checkbox-color":String(Se("accentSecondary","backgroundColor")),"toniq-checkbox-unchecked-label-color":String(Se("pagePrimary","foregroundColor")),"toniq-checkbox-checked-checkbox-color":String(Se("accentPrimary","backgroundColor")),"toniq-checkbox-checked-check-color":String(Se("accentPrimary","foregroundColor")),"toniq-checkbox-checked-label-color":String(Se("pageInteraction","foregroundColor"))},styles:({cssVars:e,hostClasses:t})=>v`
        :host {
            ${G.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${Z.interaction},
                background-color ${Z.interaction},
                opacity ${Z.interaction};
            border-radius: 8px;
        }

        button {
            ${X};
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

        ${tt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .check-mark {
            color: ${e["toniq-checkbox-checked-check-color"].value};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }

        ${t["toniq-checkbox-disabled"].selector} {
            ${yt};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=h`
            <span class="checkbox ${e.checked?"checked":""}">
                <${O.assign({icon:_f})}
                    class="check-mark ${se({hidden:!e.checked})}"
                ></${O}>
            </span>
        `,i=h`
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
                ${T("click",()=>{const o=!e.checked;t(new n.checkedChange(o))})}
                role="checkbox"
                aria-checked=${e.checked}
                class="wrapper"
            >
                ${r} ${i}
            </button>
        `}});var Ti;(function(e){e.Default="default",e.Secondary="secondary"})(Ti||(Ti={}));P()({tagName:"toniq-chip",hostClasses:{"toniq-chip-secondary":({inputs:e})=>e.variant===Ti.Secondary},options:{ignoreUnsetInputs:!0},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${G.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${F($.accentPrimary)};
        }

        ${e["toniq-chip-secondary"].selector} {
            ${F($.accentSecondary)};
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${O.assign({icon:e.icon})}></${O}>
              `:"";return h`
            ${t}
            <slot>${e.text}</slot>
        `}});class St extends Error{}class dh extends St{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class uh extends St{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class fh extends St{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class Ot extends St{}class Ul extends St{constructor(t){super(`Invalid unit ${t}`)}}class oe extends St{}class We extends St{constructor(){super("Zone is an abstract class")}}const y="numeric",Ie="short",de="long",rr={year:y,month:y,day:y},Zl={year:y,month:Ie,day:y},hh={year:y,month:Ie,day:y,weekday:Ie},Gl={year:y,month:de,day:y},Jl={year:y,month:de,day:y,weekday:de},Yl={hour:y,minute:y},Kl={hour:y,minute:y,second:y},Ql={hour:y,minute:y,second:y,timeZoneName:Ie},Xl={hour:y,minute:y,second:y,timeZoneName:de},ec={hour:y,minute:y,hourCycle:"h23"},tc={hour:y,minute:y,second:y,hourCycle:"h23"},nc={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Ie},rc={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:de},ic={year:y,month:y,day:y,hour:y,minute:y},oc={year:y,month:y,day:y,hour:y,minute:y,second:y},ac={year:y,month:Ie,day:y,hour:y,minute:y},sc={year:y,month:Ie,day:y,hour:y,minute:y,second:y},mh={year:y,month:Ie,day:y,weekday:Ie,hour:y,minute:y},lc={year:y,month:de,day:y,hour:y,minute:y,timeZoneName:Ie},cc={year:y,month:de,day:y,hour:y,minute:y,second:y,timeZoneName:Ie},dc={year:y,month:de,day:y,weekday:de,hour:y,minute:y,timeZoneName:de},uc={year:y,month:de,day:y,weekday:de,hour:y,minute:y,second:y,timeZoneName:de};class An{get type(){throw new We}get name(){throw new We}get ianaName(){return this.name}get isUniversal(){throw new We}offsetName(t,n){throw new We}formatOffset(t,n){throw new We}offset(t){throw new We}equals(t){throw new We}get isValid(){throw new We}}let Rr=null;class vr extends An{static get instance(){return Rr===null&&(Rr=new vr),Rr}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return yc(t,n,r)}formatOffset(t,n){return un(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Gn={};function ph(e){return Gn[e]||(Gn[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Gn[e]}const gh={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function vh(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,o,a,s,l,c,d]=r;return[a,i,o,s,l,c,d]}function wh(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:o,value:a}=n[i],s=gh[o];o==="era"?r[s]=a:C(s)||(r[s]=parseInt(a,10))}return r}let Pn={};class De extends An{static create(t){return Pn[t]||(Pn[t]=new De(t)),Pn[t]}static resetCache(){Pn={},Gn={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=De.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return yc(t,n,r,this.name)}formatOffset(t,n){return un(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=ph(this.name);let[i,o,a,s,l,c,d]=r.formatToParts?wh(r,n):vh(r,n);s==="BC"&&(i=-Math.abs(i)+1);const m=br({year:i,month:o,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let p=+n;const g=p%1e3;return p-=g>=0?g:1e3+g,(m-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Aa={};function bh(e,t={}){const n=JSON.stringify([e,t]);let r=Aa[n];return r||(r=new Intl.ListFormat(e,t),Aa[n]=r),r}let Si={};function Ei(e,t={}){const n=JSON.stringify([e,t]);let r=Si[n];return r||(r=new Intl.DateTimeFormat(e,t),Si[n]=r),r}let Ii={};function yh(e,t={}){const n=JSON.stringify([e,t]);let r=Ii[n];return r||(r=new Intl.NumberFormat(e,t),Ii[n]=r),r}let Ai={};function $h(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let o=Ai[i];return o||(o=new Intl.RelativeTimeFormat(e,t),Ai[i]=o),o}let on=null;function kh(){return on||(on=new Intl.DateTimeFormat().resolvedOptions().locale,on)}let Ca={};function xh(e){let t=Ca[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,Ca[e]=t}return t}function Th(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=Ei(e).resolvedOptions(),i=e}catch{const l=e.substring(0,n);r=Ei(l).resolvedOptions(),i=l}const{numberingSystem:o,calendar:a}=r;return[i,o,a]}}function Sh(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Eh(e){const t=[];for(let n=1;n<=12;n++){const r=I.utc(2009,n,1);t.push(e(r))}return t}function Ih(e){const t=[];for(let n=1;n<=7;n++){const r=I.utc(2016,11,13+n);t.push(e(r))}return t}function qn(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function Ah(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class Ch{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:o,...a}=r;if(!n||Object.keys(a).length>0){const s={useGrouping:!1,...r};r.padTo>0&&(s.minimumIntegerDigits=r.padTo),this.inf=yh(t,s)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):ko(t,3);return Q(n,this.padTo)}}}class Mh{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const a=-1*(t.offset/60),s=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;t.offset!==0&&De.create(s).valid?(i=s,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const o={...this.opts};o.timeZone=o.timeZone||i,this.dtf=Ei(n,o)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Lh{constructor(t,n,r){this.opts={style:"long",...r},!n&&wc()&&(this.rtf=$h(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):Kh(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Oh={firstDay:1,minimalDays:4,weekend:[6,7]};class V{static fromOpts(t){return V.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,o=!1){const a=t||J.defaultLocale,s=a||(o?"en-US":kh()),l=n||J.defaultNumberingSystem,c=r||J.defaultOutputCalendar,d=Ci(i)||J.defaultWeekSettings;return new V(s,l,c,d,a)}static resetCache(){on=null,Si={},Ii={},Ai={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return V.create(t,n,r,i)}constructor(t,n,r,i,o){const[a,s,l]=Th(t);this.locale=a,this.numberingSystem=n||s||null,this.outputCalendar=r||l||null,this.weekSettings=i,this.intl=Sh(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=o,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Ah(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:V.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Ci(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return qn(this,t,xc,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Eh(o=>this.extract(o,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return qn(this,t,Ec,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=Ih(o=>this.extract(o,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return qn(this,void 0,()=>Ic,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[I.utc(2016,11,13,9),I.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return qn(this,t,Ac,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[I.utc(-40,1,1),I.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),o=i.formatToParts(),a=o.find(s=>s.type.toLowerCase()===r);return a?a.value:null}numberFormatter(t={}){return new Ch(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Mh(t,this.intl,n)}relFormatter(t={}){return new Lh(this.intl,this.isEnglish(),t)}listFormatter(t={}){return bh(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:bc()?xh(this.locale):Oh}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}let Hr=null;class ie extends An{static get utcInstance(){return Hr===null&&(Hr=new ie(0)),Hr}static instance(t){return t===0?ie.utcInstance:new ie(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new ie(yr(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${un(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${un(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return un(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Nh extends An{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Je(e,t){if(C(e)||e===null)return t;if(e instanceof An)return e;if(Dh(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?vr.instance:n==="utc"||n==="gmt"?ie.utcInstance:ie.parseSpecifier(n)||De.create(e)}else return gt(e)?ie.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Nh(e)}let Ma=()=>Date.now(),La="system",Oa=null,Na=null,Pa=null,qa=60,Da,Ba=null;class J{static get now(){return Ma}static set now(t){Ma=t}static set defaultZone(t){La=t}static get defaultZone(){return Je(La,vr.instance)}static get defaultLocale(){return Oa}static set defaultLocale(t){Oa=t}static get defaultNumberingSystem(){return Na}static set defaultNumberingSystem(t){Na=t}static get defaultOutputCalendar(){return Pa}static set defaultOutputCalendar(t){Pa=t}static get defaultWeekSettings(){return Ba}static set defaultWeekSettings(t){Ba=Ci(t)}static get twoDigitCutoffYear(){return qa}static set twoDigitCutoffYear(t){qa=t%100}static get throwOnInvalid(){return Da}static set throwOnInvalid(t){Da=t}static resetCaches(){V.resetCache(),De.resetCache()}}class Ee{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const fc=[0,31,59,90,120,151,181,212,243,273,304,334],hc=[0,31,60,91,121,152,182,213,244,274,305,335];function ge(e,t){return new Ee("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function bo(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function mc(e,t,n){return n+(Cn(e)?hc:fc)[t-1]}function pc(e,t){const n=Cn(e)?hc:fc,r=n.findIndex(o=>o<t),i=t-n[r];return{month:r+1,day:i}}function yo(e,t){return(e-t+7)%7+1}function ir(e,t=4,n=1){const{year:r,month:i,day:o}=e,a=mc(r,i,o),s=yo(bo(r,i,o),n);let l=Math.floor((a-s+14-t)/7),c;return l<1?(c=r-1,l=kn(c,t,n)):l>kn(r,t,n)?(c=r+1,l=1):c=r,{weekYear:c,weekNumber:l,weekday:s,...$r(e)}}function _a(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:o}=e,a=yo(bo(r,1,t),n),s=Nt(r);let l=i*7+o-a-7+t,c;l<1?(c=r-1,l+=Nt(c)):l>s?(c=r+1,l-=Nt(r)):c=r;const{month:d,day:u}=pc(c,l);return{year:c,month:d,day:u,...$r(e)}}function Fr(e){const{year:t,month:n,day:r}=e,i=mc(t,n,r);return{year:t,ordinal:i,...$r(e)}}function Ra(e){const{year:t,ordinal:n}=e,{month:r,day:i}=pc(t,n);return{year:t,month:r,day:i,...$r(e)}}function Ha(e,t){if(!C(e.localWeekday)||!C(e.localWeekNumber)||!C(e.localWeekYear)){if(!C(e.weekday)||!C(e.weekNumber)||!C(e.weekYear))throw new Ot("Cannot mix locale-based week fields with ISO-based week fields");return C(e.localWeekday)||(e.weekday=e.localWeekday),C(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),C(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Ph(e,t=4,n=1){const r=wr(e.weekYear),i=ve(e.weekNumber,1,kn(e.weekYear,t,n)),o=ve(e.weekday,1,7);return r?i?o?!1:ge("weekday",e.weekday):ge("week",e.weekNumber):ge("weekYear",e.weekYear)}function qh(e){const t=wr(e.year),n=ve(e.ordinal,1,Nt(e.year));return t?n?!1:ge("ordinal",e.ordinal):ge("year",e.year)}function gc(e){const t=wr(e.year),n=ve(e.month,1,12),r=ve(e.day,1,or(e.year,e.month));return t?n?r?!1:ge("day",e.day):ge("month",e.month):ge("year",e.year)}function vc(e){const{hour:t,minute:n,second:r,millisecond:i}=e,o=ve(t,0,23)||t===24&&n===0&&r===0&&i===0,a=ve(n,0,59),s=ve(r,0,59),l=ve(i,0,999);return o?a?s?l?!1:ge("millisecond",i):ge("second",r):ge("minute",n):ge("hour",t)}function C(e){return typeof e>"u"}function gt(e){return typeof e=="number"}function wr(e){return typeof e=="number"&&e%1===0}function Dh(e){return typeof e=="string"}function Bh(e){return Object.prototype.toString.call(e)==="[object Date]"}function wc(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function bc(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function _h(e){return Array.isArray(e)?e:[e]}function Fa(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const o=[t(i),i];return r&&n(r[0],o[0])===r[0]?r:o},null)[1]}function Rh(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function Rt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ci(e){if(e==null)return null;if(typeof e!="object")throw new oe("Week settings must be an object");if(!ve(e.firstDay,1,7)||!ve(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!ve(t,1,7)))throw new oe("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function ve(e,t,n){return wr(e)&&e>=t&&e<=n}function Hh(e,t){return e-t*Math.floor(e/t)}function Q(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function Ze(e){if(!(C(e)||e===null||e===""))return parseInt(e,10)}function st(e){if(!(C(e)||e===null||e===""))return parseFloat(e)}function $o(e){if(!(C(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function ko(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Cn(e){return e%4===0&&(e%100!==0||e%400===0)}function Nt(e){return Cn(e)?366:365}function or(e,t){const n=Hh(t-1,12)+1,r=e+(t-n)/12;return n===2?Cn(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function br(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Va(e,t,n){return-yo(bo(e,1,t),n)+t-1}function kn(e,t=4,n=1){const r=Va(e,t,n),i=Va(e+1,t,n);return(Nt(e)-r+i)/7}function Mi(e){return e>99?e:e>J.twoDigitCutoffYear?1900+e:2e3+e}function yc(e,t,n,r=null){const i=new Date(e),o={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(o.timeZone=r);const a={timeZoneName:t,...o},s=new Intl.DateTimeFormat(n,a).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return s?s.value:null}function yr(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function $c(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new oe(`Invalid unit value ${e}`);return t}function ar(e,t){const n={};for(const r in e)if(Rt(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=$c(i)}return n}function un(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${Q(n,2)}:${Q(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${Q(n,2)}${Q(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function $r(e){return Rh(e,["hour","minute","second","millisecond"])}const Fh=["January","February","March","April","May","June","July","August","September","October","November","December"],kc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vh=["J","F","M","A","M","J","J","A","S","O","N","D"];function xc(e){switch(e){case"narrow":return[...Vh];case"short":return[...kc];case"long":return[...Fh];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Tc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Sc=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],zh=["M","T","W","T","F","S","S"];function Ec(e){switch(e){case"narrow":return[...zh];case"short":return[...Sc];case"long":return[...Tc];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Ic=["AM","PM"],Wh=["Before Christ","Anno Domini"],jh=["BC","AD"],Uh=["B","A"];function Ac(e){switch(e){case"narrow":return[...Uh];case"short":return[...jh];case"long":return[...Wh];default:return null}}function Zh(e){return Ic[e.hour<12?0:1]}function Gh(e,t){return Ec(t)[e.weekday-1]}function Jh(e,t){return xc(t)[e.month-1]}function Yh(e,t){return Ac(t)[e.year<0?0:1]}function Kh(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},o=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&o){const u=e==="days";switch(t){case 1:return u?"tomorrow":`next ${i[e][0]}`;case-1:return u?"yesterday":`last ${i[e][0]}`;case 0:return u?"today":`this ${i[e][0]}`}}const a=Object.is(t,-0)||t<0,s=Math.abs(t),l=s===1,c=i[e],d=r?l?c[1]:c[2]||c[1]:l?i[e][0]:e;return a?`${s} ${d} ago`:`in ${s} ${d}`}function za(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const Qh={D:rr,DD:Zl,DDD:Gl,DDDD:Jl,t:Yl,tt:Kl,ttt:Ql,tttt:Xl,T:ec,TT:tc,TTT:nc,TTTT:rc,f:ic,ff:ac,fff:lc,ffff:dc,F:oc,FF:sc,FFF:cc,FFFF:uc};class re{static create(t,n={}){return new re(t,n)}static parseFormat(t){let n=null,r="",i=!1;const o=[];for(let a=0;a<t.length;a++){const s=t.charAt(a);s==="'"?(r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||s===n?r+=s:(r.length>0&&o.push({literal:/^\s+$/.test(r),val:r}),r=s,n=s)}return r.length>0&&o.push({literal:i||/^\s+$/.test(r),val:r}),o}static macroTokenToFormatOpts(t){return Qh[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return Q(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",o=(p,g)=>this.loc.extract(t,p,g),a=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",s=()=>r?Zh(t):o({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(p,g)=>r?Jh(t,p):o(g?{month:p}:{month:p,day:"numeric"},"month"),c=(p,g)=>r?Gh(t,p):o(g?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),d=p=>{const g=re.macroTokenToFormatOpts(p);return g?this.formatWithSystemDefault(t,g):p},u=p=>r?Yh(t,p):o({era:p},"era"),m=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return s();case"d":return i?o({day:"numeric"},"day"):this.num(t.day);case"dd":return i?o({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?o({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?o({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?o({month:"numeric"},"month"):this.num(t.month);case"MM":return i?o({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?o({year:"numeric"},"year"):this.num(t.year);case"yy":return i?o({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?o({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?o({year:"numeric"},"year"):this.num(t.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return d(p)}};return za(re.parseFormat(n),m)}formatDurationFromString(t,n){const r=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const d=r(c);return d?this.num(l.get(d),c.length):c},o=re.parseFormat(n),a=o.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),s=t.shiftTo(...a.map(r).filter(l=>l));return za(o,i(s))}}const Cc=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function zt(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function Wt(...e){return t=>e.reduce(([n,r,i],o)=>{const[a,s,l]=o(t,i);return[{...n,...a},s||r,l]},[{},null,1]).slice(0,2)}function jt(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function Mc(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=Ze(t[n+i]);return[r,null,n+i]}}const Lc=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xh=`(?:${Lc.source}?(?:\\[(${Cc.source})\\])?)?`,xo=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Oc=RegExp(`${xo.source}${Xh}`),To=RegExp(`(?:T${Oc.source})?`),em=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tm=/(\d{4})-?W(\d\d)(?:-?(\d))?/,nm=/(\d{4})-?(\d{3})/,rm=Mc("weekYear","weekNumber","weekDay"),im=Mc("year","ordinal"),om=/(\d{4})-(\d\d)-(\d\d)/,Nc=RegExp(`${xo.source} ?(?:${Lc.source}|(${Cc.source}))?`),am=RegExp(`(?: ${Nc.source})?`);function Pt(e,t,n){const r=e[t];return C(r)?n:Ze(r)}function sm(e,t){return[{year:Pt(e,t),month:Pt(e,t+1,1),day:Pt(e,t+2,1)},null,t+3]}function Ut(e,t){return[{hours:Pt(e,t,0),minutes:Pt(e,t+1,0),seconds:Pt(e,t+2,0),milliseconds:$o(e[t+3])},null,t+4]}function Mn(e,t){const n=!e[t]&&!e[t+1],r=yr(e[t+1],e[t+2]),i=n?null:ie.instance(r);return[{},i,t+3]}function Ln(e,t){const n=e[t]?De.create(e[t]):null;return[{},n,t+1]}const lm=RegExp(`^T?${xo.source}$`),cm=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function dm(e){const[t,n,r,i,o,a,s,l,c]=e,d=t[0]==="-",u=l&&l[0]==="-",m=(p,g=!1)=>p!==void 0&&(g||p&&d)?-p:p;return[{years:m(st(n)),months:m(st(r)),weeks:m(st(i)),days:m(st(o)),hours:m(st(a)),minutes:m(st(s)),seconds:m(st(l),l==="-0"),milliseconds:m($o(c),u)}]}const um={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function So(e,t,n,r,i,o,a){const s={year:t.length===2?Mi(Ze(t)):Ze(t),month:kc.indexOf(n)+1,day:Ze(r),hour:Ze(i),minute:Ze(o)};return a&&(s.second=Ze(a)),e&&(s.weekday=e.length>3?Tc.indexOf(e)+1:Sc.indexOf(e)+1),s}const fm=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function hm(e){const[,t,n,r,i,o,a,s,l,c,d,u]=e,m=So(t,i,r,n,o,a,s);let p;return l?p=um[l]:c?p=0:p=yr(d,u),[m,new ie(p)]}function mm(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const pm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,gm=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,vm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Wa(e){const[,t,n,r,i,o,a,s]=e;return[So(t,i,r,n,o,a,s),ie.utcInstance]}function wm(e){const[,t,n,r,i,o,a,s]=e;return[So(t,s,n,r,i,o,a),ie.utcInstance]}const bm=zt(em,To),ym=zt(tm,To),$m=zt(nm,To),km=zt(Oc),Pc=Wt(sm,Ut,Mn,Ln),xm=Wt(rm,Ut,Mn,Ln),Tm=Wt(im,Ut,Mn,Ln),Sm=Wt(Ut,Mn,Ln);function Em(e){return jt(e,[bm,Pc],[ym,xm],[$m,Tm],[km,Sm])}function Im(e){return jt(mm(e),[fm,hm])}function Am(e){return jt(e,[pm,Wa],[gm,Wa],[vm,wm])}function Cm(e){return jt(e,[cm,dm])}const Mm=Wt(Ut);function Lm(e){return jt(e,[lm,Mm])}const Om=zt(om,am),Nm=zt(Nc),Pm=Wt(Ut,Mn,Ln);function qm(e){return jt(e,[Om,Pc],[Nm,Pm])}const ja="Invalid Duration",qc={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Dm={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...qc},he=146097/400,Et=146097/4800,Bm={years:{quarters:4,months:12,weeks:he/7,days:he,hours:he*24,minutes:he*24*60,seconds:he*24*60*60,milliseconds:he*24*60*60*1e3},quarters:{months:3,weeks:he/28,days:he/4,hours:he*24/4,minutes:he*24*60/4,seconds:he*24*60*60/4,milliseconds:he*24*60*60*1e3/4},months:{weeks:Et/7,days:Et,hours:Et*24,minutes:Et*24*60,seconds:Et*24*60*60,milliseconds:Et*24*60*60*1e3},...qc},ft=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],_m=ft.slice(0).reverse();function je(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new D(r)}function Dc(e,t){let n=t.milliseconds??0;for(const r of _m.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function Ua(e,t){const n=Dc(e,t)<0?-1:1;ft.reduceRight((r,i)=>{if(C(t[i]))return r;if(r){const o=t[r]*n,a=e[i][r],s=Math.floor(o/a);t[i]+=s*n,t[r]-=s*a*n}return i},null),ft.reduce((r,i)=>{if(C(t[i]))return r;if(r){const o=t[r]%1;t[r]-=o,t[i]+=o*e[r][i]}return i},null)}function Rm(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class D{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?Bm:Dm;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||V.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return D.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new oe(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new D({values:ar(t,D.normalizeUnit),loc:V.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(gt(t))return D.fromMillis(t);if(D.isDuration(t))return t;if(typeof t=="object")return D.fromObject(t);throw new oe(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Cm(t);return r?D.fromObject(r,n):D.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Lm(t);return r?D.fromObject(r,n):D.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the Duration is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(J.throwOnInvalid)throw new fh(r);return new D({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new Ul(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?re.create(this.loc,r).formatDurationFromString(this,t):ja}toHuman(t={}){if(!this.isValid)return ja;const n=ft.map(r=>{const i=this.values[r];return C(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=ko(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},I.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Dc(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=D.fromDurationLike(t),r={};for(const i of ft)(Rt(n.values,i)||Rt(this.values,i))&&(r[i]=n.get(i)+this.get(i));return je(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=D.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=$c(t(this.values[r],r));return je(this,{values:n},!0)}get(t){return this[D.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...ar(t,D.normalizeUnit)};return je(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const a={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return je(this,a)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return Ua(this.matrix,t),je(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=Rm(this.normalize().shiftToAll().toObject());return je(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(a=>D.normalizeUnit(a));const n={},r={},i=this.toObject();let o;for(const a of ft)if(t.indexOf(a)>=0){o=a;let s=0;for(const c in r)s+=this.matrix[c][a]*r[c],r[c]=0;gt(i[a])&&(s+=i[a]);const l=Math.trunc(s);n[a]=l,r[a]=(s*1e3-l*1e3)/1e3}else gt(i[a])&&(r[a]=i[a]);for(const a in r)r[a]!==0&&(n[o]+=a===o?r[a]:r[a]/this.matrix[o][a]);return Ua(this.matrix,n),je(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return je(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of ft)if(!n(this.values[r],t.values[r]))return!1;return!0}}const It="Invalid Interval";function Hm(e,t){return!e||!e.isValid?K.invalid("missing or invalid start"):!t||!t.isValid?K.invalid("missing or invalid end"):t<e?K.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class K{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the Interval is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(J.throwOnInvalid)throw new uh(r);return new K({invalid:r})}static fromDateTimes(t,n){const r=Xt(t),i=Xt(n),o=Hm(r,i);return o??new K({start:r,end:i})}static after(t,n){const r=D.fromDurationLike(n),i=Xt(t);return K.fromDateTimes(i,i.plus(r))}static before(t,n){const r=D.fromDurationLike(n),i=Xt(t);return K.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let o,a;try{o=I.fromISO(r,n),a=o.isValid}catch{a=!1}let s,l;try{s=I.fromISO(i,n),l=s.isValid}catch{l=!1}if(a&&l)return K.fromDateTimes(o,s);if(a){const c=D.fromISO(i,n);if(c.isValid)return K.after(o,c)}else if(l){const c=D.fromISO(r,n);if(c.isValid)return K.before(s,c)}}return K.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n!=null&&n.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?K.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(Xt).filter(a=>this.contains(a)).sort((a,s)=>a.toMillis()-s.toMillis()),r=[];let{s:i}=this,o=0;for(;i<this.e;){const a=n[o]||this.e,s=+a>+this.e?this.e:a;r.push(K.fromDateTimes(i,s)),i=s,o+=1}return r}splitBy(t){const n=D.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,o;const a=[];for(;r<this.e;){const s=this.start.plus(n.mapUnits(l=>l*i));o=+s>+this.e?this.e:s,a.push(K.fromDateTimes(r,o)),r=o,i+=1}return a}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:K.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return K.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,o)=>i.s-o.s).reduce(([i,o],a)=>o?o.overlaps(a)||o.abutsStart(a)?[i,o.union(a)]:[i.concat([o]),a]:[i,a],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],o=t.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...o),s=a.sort((l,c)=>l.time-c.time);for(const l of s)r+=l.type==="s"?1:-1,r===1?n=l.time:(n&&+n!=+l.time&&i.push(K.fromDateTimes(n,l.time)),n=null);return K.merge(i)}difference(...t){return K.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:It}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=rr,n={}){return this.isValid?re.create(this.s.loc.clone(n),t).formatInterval(this):It}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:It}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:It}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:It}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:It}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):D.invalid(this.invalidReason)}mapEndpoints(t){return K.fromDateTimes(t(this.s),t(this.e))}}class an{static hasDST(t=J.defaultZone){const n=I.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return De.isValidZone(t)}static normalizeZone(t){return Je(t,J.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||V.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||V.create(n,r,o)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:o="gregory"}={}){return(i||V.create(n,r,o)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||V.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||V.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return V.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return V.create(n,null,"gregory").eras(t)}static features(){return{relative:wc(),localeWeek:bc()}}}function Za(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(D.fromMillis(r).as("days"))}function Fm(e,t,n){const r=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Za(l,c);return(d-d%7)/7}],["days",Za]],i={},o=e;let a,s;for(const[l,c]of r)n.indexOf(l)>=0&&(a=l,i[l]=c(e,t),s=o.plus(i),s>t?(i[l]--,e=o.plus(i),e>t&&(s=e,i[l]--,e=o.plus(i))):e=s);return[e,i,s,a]}function Vm(e,t,n,r){let[i,o,a,s]=Fm(e,t,n);const l=t-i,c=n.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(a<t&&(a=i.plus({[s]:1})),a!==i&&(o[s]=(o[s]||0)+l/(a-i)));const d=D.fromObject(o,r);return c.length>0?D.fromMillis(l,r).shiftTo(...c).plus(d):d}const Eo={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ga={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},zm=Eo.hanidec.replace(/[\[|\]]/g,"").split("");function Wm(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(Eo.hanidec)!==-1)t+=zm.indexOf(e[n]);else for(const i in Ga){const[o,a]=Ga[i];r>=o&&r<=a&&(t+=r-o)}}return parseInt(t,10)}else return t}function $e({numberingSystem:e},t=""){return new RegExp(`${Eo[e||"latn"]}${t}`)}const jm="missing Intl.DateTimeFormat.formatToParts support";function R(e,t=n=>n){return{regex:e,deser:([n])=>t(Wm(n))}}const Um=String.fromCharCode(160),Bc=`[ ${Um}]`,_c=new RegExp(Bc,"g");function Zm(e){return e.replace(/\./g,"\\.?").replace(_c,Bc)}function Ja(e){return e.replace(/\./g,"").replace(_c," ").toLowerCase()}function ke(e,t){return e===null?null:{regex:RegExp(e.map(Zm).join("|")),deser:([n])=>e.findIndex(r=>Ja(n)===Ja(r))+t}}function Ya(e,t){return{regex:e,deser:([,n,r])=>yr(n,r),groups:t}}function Dn(e){return{regex:e,deser:([t])=>t}}function Gm(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Jm(e,t){const n=$e(t),r=$e(t,"{2}"),i=$e(t,"{3}"),o=$e(t,"{4}"),a=$e(t,"{6}"),s=$e(t,"{1,2}"),l=$e(t,"{1,3}"),c=$e(t,"{1,6}"),d=$e(t,"{1,9}"),u=$e(t,"{2,4}"),m=$e(t,"{4,6}"),p=x=>({regex:RegExp(Gm(x.val)),deser:([k])=>k,literal:!0}),b=(x=>{if(e.literal)return p(x);switch(x.val){case"G":return ke(t.eras("short"),0);case"GG":return ke(t.eras("long"),0);case"y":return R(c);case"yy":return R(u,Mi);case"yyyy":return R(o);case"yyyyy":return R(m);case"yyyyyy":return R(a);case"M":return R(s);case"MM":return R(r);case"MMM":return ke(t.months("short",!0),1);case"MMMM":return ke(t.months("long",!0),1);case"L":return R(s);case"LL":return R(r);case"LLL":return ke(t.months("short",!1),1);case"LLLL":return ke(t.months("long",!1),1);case"d":return R(s);case"dd":return R(r);case"o":return R(l);case"ooo":return R(i);case"HH":return R(r);case"H":return R(s);case"hh":return R(r);case"h":return R(s);case"mm":return R(r);case"m":return R(s);case"q":return R(s);case"qq":return R(r);case"s":return R(s);case"ss":return R(r);case"S":return R(l);case"SSS":return R(i);case"u":return Dn(d);case"uu":return Dn(s);case"uuu":return R(n);case"a":return ke(t.meridiems(),0);case"kkkk":return R(o);case"kk":return R(u,Mi);case"W":return R(s);case"WW":return R(r);case"E":case"c":return R(n);case"EEE":return ke(t.weekdays("short",!1),1);case"EEEE":return ke(t.weekdays("long",!1),1);case"ccc":return ke(t.weekdays("short",!0),1);case"cccc":return ke(t.weekdays("long",!0),1);case"Z":case"ZZ":return Ya(new RegExp(`([+-]${s.source})(?::(${r.source}))?`),2);case"ZZZ":return Ya(new RegExp(`([+-]${s.source})(${r.source})?`),2);case"z":return Dn(/[a-z_+-/]{1,256}?/i);case" ":return Dn(/[^\S\n\r]/);default:return p(x)}})(e)||{invalidReason:jm};return b.token=e,b}const Ym={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Km(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const o=t[r];let a=r;r==="hour"&&(t.hour12!=null?a=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?a="hour12":a="hour24":a=n.hour12?"hour12":"hour24");let s=Ym[a];if(typeof s=="object"&&(s=s[o]),s)return{literal:!1,val:s}}function Qm(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function Xm(e,t,n){const r=e.match(t);if(r){const i={};let o=1;for(const a in n)if(Rt(n,a)){const s=n[a],l=s.groups?s.groups+1:1;!s.literal&&s.token&&(i[s.token.val[0]]=s.deser(r.slice(o,o+l))),o+=l}return[r,i]}else return[r,{}]}function e0(e){const t=o=>{switch(o){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return C(e.z)||(n=De.create(e.z)),C(e.Z)||(n||(n=new ie(e.Z)),r=e.Z),C(e.q)||(e.M=(e.q-1)*3+1),C(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),C(e.u)||(e.S=$o(e.u)),[Object.keys(e).reduce((o,a)=>{const s=t(a);return s&&(o[s]=e[a]),o},{}),n,r]}let Vr=null;function t0(){return Vr||(Vr=I.fromMillis(1555555555555)),Vr}function n0(e,t){if(e.literal)return e;const n=re.macroTokenToFormatOpts(e.val),r=Fc(n,t);return r==null||r.includes(void 0)?e:r}function Rc(e,t){return Array.prototype.concat(...e.map(n=>n0(n,t)))}function Hc(e,t,n){const r=Rc(re.parseFormat(n),e),i=r.map(a=>Jm(a,e)),o=i.find(a=>a.invalidReason);if(o)return{input:t,tokens:r,invalidReason:o.invalidReason};{const[a,s]=Qm(i),l=RegExp(a,"i"),[c,d]=Xm(t,l,s),[u,m,p]=d?e0(d):[null,null,void 0];if(Rt(d,"a")&&Rt(d,"H"))throw new Ot("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:r,regex:l,rawMatches:c,matches:d,result:u,zone:m,specificOffset:p}}}function r0(e,t,n){const{result:r,zone:i,specificOffset:o,invalidReason:a}=Hc(e,t,n);return[r,i,o,a]}function Fc(e,t){if(!e)return null;const r=re.create(t,e).dtFormatter(t0()),i=r.formatToParts(),o=r.resolvedOptions();return i.map(a=>Km(a,e,o))}const zr="Invalid DateTime",Ka=864e13;function Bn(e){return new Ee("unsupported zone",`the zone "${e.name}" is not supported`)}function Wr(e){return e.weekData===null&&(e.weekData=ir(e.c)),e.weekData}function jr(e){return e.localWeekData===null&&(e.localWeekData=ir(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function lt(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new I({...n,...t,old:n})}function Vc(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const o=n.offset(r);return i===o?[r,i]:[e-Math.min(i,o)*60*1e3,Math.max(i,o)]}function _n(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Jn(e,t,n){return Vc(br(e),t,n)}function Qa(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,o={...e.c,year:r,month:i,day:Math.min(e.c.day,or(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},a=D.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),s=br(o);let[l,c]=Vc(s,n,e.zone);return a!==0&&(l+=a,c=e.zone.offset(l)),{ts:l,o:c}}function Qt(e,t,n,r,i,o){const{setZone:a,zone:s}=n;if(e&&Object.keys(e).length!==0||t){const l=t||s,c=I.fromObject(e,{...n,zone:l,specificOffset:o});return a?c:c.setZone(s)}else return I.invalid(new Ee("unparsable",`the input "${i}" can't be parsed as ${r}`))}function Rn(e,t,n=!0){return e.isValid?re.create(V.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Ur(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=Q(e.c.year,n?6:4),t?(r+="-",r+=Q(e.c.month),r+="-",r+=Q(e.c.day)):(r+=Q(e.c.month),r+=Q(e.c.day)),r}function Xa(e,t,n,r,i,o){let a=Q(e.c.hour);return t?(a+=":",a+=Q(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=":")):a+=Q(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(a+=Q(e.c.second),(e.c.millisecond!==0||!r)&&(a+=".",a+=Q(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!o?a+="Z":e.o<0?(a+="-",a+=Q(Math.trunc(-e.o/60)),a+=":",a+=Q(Math.trunc(-e.o%60))):(a+="+",a+=Q(Math.trunc(e.o/60)),a+=":",a+=Q(Math.trunc(e.o%60)))),o&&(a+="["+e.zone.ianaName+"]"),a}const zc={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},i0={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},o0={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Wc=["year","month","day","hour","minute","second","millisecond"],a0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],s0=["year","ordinal","hour","minute","second","millisecond"];function l0(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new Ul(e);return t}function es(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return l0(e)}}function ts(e,t){const n=Je(t.zone,J.defaultZone),r=V.fromObject(t),i=J.now();let o,a;if(C(e.year))o=i;else{for(const c of Wc)C(e[c])&&(e[c]=zc[c]);const s=gc(e)||vc(e);if(s)return I.invalid(s);const l=n.offset(i);[o,a]=Jn(e,l,n)}return new I({ts:o,zone:n,loc:r,o:a})}function ns(e,t,n){const r=C(n.round)?!0:n.round,i=(a,s)=>(a=ko(a,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(a,s)),o=a=>n.calendary?t.hasSame(e,a)?0:t.startOf(a).diff(e.startOf(a),a).get(a):t.diff(e,a).get(a);if(n.unit)return i(o(n.unit),n.unit);for(const a of n.units){const s=o(a);if(Math.abs(s)>=1)return i(s,a)}return i(e>t?-0:0,n.units[n.units.length-1])}function rs(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}class I{constructor(t){const n=t.zone||J.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new Ee("invalid input"):null)||(n.isValid?null:Bn(n));this.ts=C(t.ts)?J.now():t.ts;let i=null,o=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,o]=[t.old.c,t.old.o];else{const s=n.offset(this.ts);i=_n(this.ts,s),r=Number.isNaN(i.year)?new Ee("invalid input"):null,i=r?null:i,o=r?null:s}this._zone=n,this.loc=t.loc||V.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}static now(){return new I({})}static local(){const[t,n]=rs(arguments),[r,i,o,a,s,l,c]=n;return ts({year:r,month:i,day:o,hour:a,minute:s,second:l,millisecond:c},t)}static utc(){const[t,n]=rs(arguments),[r,i,o,a,s,l,c]=n;return t.zone=ie.utcInstance,ts({year:r,month:i,day:o,hour:a,minute:s,second:l,millisecond:c},t)}static fromJSDate(t,n={}){const r=Bh(t)?t.valueOf():NaN;if(Number.isNaN(r))return I.invalid("invalid input");const i=Je(n.zone,J.defaultZone);return i.isValid?new I({ts:r,zone:i,loc:V.fromObject(n)}):I.invalid(Bn(i))}static fromMillis(t,n={}){if(gt(t))return t<-Ka||t>Ka?I.invalid("Timestamp out of range"):new I({ts:t,zone:Je(n.zone,J.defaultZone),loc:V.fromObject(n)});throw new oe(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(gt(t))return new I({ts:t*1e3,zone:Je(n.zone,J.defaultZone),loc:V.fromObject(n)});throw new oe("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=Je(n.zone,J.defaultZone);if(!r.isValid)return I.invalid(Bn(r));const i=V.fromObject(n),o=ar(t,es),{minDaysInFirstWeek:a,startOfWeek:s}=Ha(o,i),l=J.now(),c=C(n.specificOffset)?r.offset(l):n.specificOffset,d=!C(o.ordinal),u=!C(o.year),m=!C(o.month)||!C(o.day),p=u||m,g=o.weekYear||o.weekNumber;if((p||d)&&g)throw new Ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&d)throw new Ot("Can't mix ordinal dates with month/day");const b=g||o.weekday&&!p;let x,k,A=_n(l,c);b?(x=a0,k=i0,A=ir(A,a,s)):d?(x=s0,k=o0,A=Fr(A)):(x=Wc,k=zc);let U=!1;for(const it of x){const ze=o[it];C(ze)?U?o[it]=k[it]:o[it]=A[it]:U=!0}const ee=b?Ph(o,a,s):d?qh(o):gc(o),be=ee||vc(o);if(be)return I.invalid(be);const rt=b?_a(o,a,s):d?Ra(o):o,[Zt,Gt]=Jn(rt,c,r),Jt=new I({ts:Zt,zone:r,o:Gt,loc:i});return o.weekday&&p&&t.weekday!==Jt.weekday?I.invalid("mismatched weekday",`you can't specify both a weekday of ${o.weekday} and a date of ${Jt.toISO()}`):Jt}static fromISO(t,n={}){const[r,i]=Em(t);return Qt(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Im(t);return Qt(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Am(t);return Qt(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(C(t)||C(n))throw new oe("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:o=null}=r,a=V.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0}),[s,l,c,d]=r0(a,t,n);return d?I.invalid(d):Qt(s,l,r,`format ${n}`,t,c)}static fromString(t,n,r={}){return I.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=qm(t);return Qt(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new oe("need to specify a reason the DateTime is invalid");const r=t instanceof Ee?t:new Ee(t,n);if(J.throwOnInvalid)throw new dh(r);return new I({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Fc(t,V.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return Rc(re.parseFormat(t),V.fromObject(n)).map(i=>i.val).join("")}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Wr(this).weekYear:NaN}get weekNumber(){return this.isValid?Wr(this).weekNumber:NaN}get weekday(){return this.isValid?Wr(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?jr(this).weekday:NaN}get localWeekNumber(){return this.isValid?jr(this).weekNumber:NaN}get localWeekYear(){return this.isValid?jr(this).weekYear:NaN}get ordinal(){return this.isValid?Fr(this.c).ordinal:NaN}get monthShort(){return this.isValid?an.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?an.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?an.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?an.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=br(this.c),i=this.zone.offset(r-t),o=this.zone.offset(r+t),a=this.zone.offset(r-i*n),s=this.zone.offset(r-o*n);if(a===s)return[this];const l=r-a*n,c=r-s*n,d=_n(l,a),u=_n(c,s);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[lt(this,{ts:l}),lt(this,{ts:c})]:[this]}get isInLeapYear(){return Cn(this.year)}get daysInMonth(){return or(this.year,this.month)}get daysInYear(){return this.isValid?Nt(this.year):NaN}get weeksInWeekYear(){return this.isValid?kn(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?kn(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=re.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone(ie.instance(t),n)}toLocal(){return this.setZone(J.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=Je(t,J.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const o=t.offset(this.ts),a=this.toObject();[i]=Jn(a,o,t)}return lt(this,{ts:i,zone:t})}else return I.invalid(Bn(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return lt(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=ar(t,es),{minDaysInFirstWeek:r,startOfWeek:i}=Ha(n,this.loc),o=!C(n.weekYear)||!C(n.weekNumber)||!C(n.weekday),a=!C(n.ordinal),s=!C(n.year),l=!C(n.month)||!C(n.day),c=s||l,d=n.weekYear||n.weekNumber;if((c||a)&&d)throw new Ot("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Ot("Can't mix ordinal dates with month/day");let u;o?u=_a({...ir(this.c,r,i),...n},r,i):C(n.ordinal)?(u={...this.toObject(),...n},C(n.day)&&(u.day=Math.min(or(u.year,u.month),u.day))):u=Ra({...Fr(this.c),...n});const[m,p]=Jn(u,this.o,this.zone);return lt(this,{ts:m,o:p})}plus(t){if(!this.isValid)return this;const n=D.fromDurationLike(t);return lt(this,Qa(this,n))}minus(t){if(!this.isValid)return this;const n=D.fromDurationLike(t).negate();return lt(this,Qa(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=D.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const o=this.loc.getStartOfWeek(),{weekday:a}=this;a<o&&(r.weekNumber=this.weekNumber-1),r.weekday=o}else r.weekday=1;if(i==="quarters"){const o=Math.ceil(this.month/3);r.month=(o-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?re.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):zr}toLocaleString(t=rr,n={}){return this.isValid?re.create(this.loc.clone(n),t).formatDateTime(this):zr}toLocaleParts(t={}){return this.isValid?re.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:o=!1}={}){if(!this.isValid)return null;const a=t==="extended";let s=Ur(this,a);return s+="T",s+=Xa(this,a,n,r,i,o),s}toISODate({format:t="extended"}={}){return this.isValid?Ur(this,t==="extended"):null}toISOWeekDate(){return Rn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:o=!1,format:a="extended"}={}){return this.isValid?(i?"T":"")+Xa(this,a==="extended",n,t,r,o):null}toRFC2822(){return Rn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Rn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ur(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),Rn(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():zr}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return D.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},o=_h(n).map(D.normalizeUnit),a=t.valueOf()>this.valueOf(),s=a?this:t,l=a?t:this,c=Vm(s,l,o,i);return a?c.negate():c}diffNow(t="milliseconds",n={}){return this.diff(I.now(),t,n)}until(t){return this.isValid?K.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),o=this.setZone(t.zone,{keepLocalTime:!0});return o.startOf(n,r)<=i&&i<=o.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||I.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],o=t.unit;return Array.isArray(t.unit)&&(i=t.unit,o=void 0),ns(n,this.plus(r),{...t,numeric:"always",units:i,unit:o})}toRelativeCalendar(t={}){return this.isValid?ns(t.base||I.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(I.isDateTime))throw new oe("min requires all arguments be DateTimes");return Fa(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(I.isDateTime))throw new oe("max requires all arguments be DateTimes");return Fa(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:o=null}=r,a=V.fromOpts({locale:i,numberingSystem:o,defaultToEN:!0});return Hc(a,t,n)}static fromStringExplain(t,n,r={}){return I.fromFormatExplain(t,n,r)}static get DATE_SHORT(){return rr}static get DATE_MED(){return Zl}static get DATE_MED_WITH_WEEKDAY(){return hh}static get DATE_FULL(){return Gl}static get DATE_HUGE(){return Jl}static get TIME_SIMPLE(){return Yl}static get TIME_WITH_SECONDS(){return Kl}static get TIME_WITH_SHORT_OFFSET(){return Ql}static get TIME_WITH_LONG_OFFSET(){return Xl}static get TIME_24_SIMPLE(){return ec}static get TIME_24_WITH_SECONDS(){return tc}static get TIME_24_WITH_SHORT_OFFSET(){return nc}static get TIME_24_WITH_LONG_OFFSET(){return rc}static get DATETIME_SHORT(){return ic}static get DATETIME_SHORT_WITH_SECONDS(){return oc}static get DATETIME_MED(){return ac}static get DATETIME_MED_WITH_SECONDS(){return sc}static get DATETIME_MED_WITH_WEEKDAY(){return mh}static get DATETIME_FULL(){return lc}static get DATETIME_FULL_WITH_SECONDS(){return cc}static get DATETIME_HUGE(){return dc}static get DATETIME_HUGE_WITH_SECONDS(){return uc}}function Xt(e){if(I.isDateTime(e))return e;if(e&&e.valueOf&&gt(e.valueOf()))return I.fromJSDate(e);if(e&&typeof e=="object")return I.fromObject(e);throw new oe(`Unknown datetime argument: ${e}, of type ${typeof e}`)}function xn(e){const t=I.fromObject(nu(e,["timezone"]),{zone:e.timezone});if(!t.isValid)throw new Error(t.invalidExplanation??void 0);return t}function c0(e,t){if(!e.isValid)throw new Error(`Invalid input: '${e.toISO()}'`);return{day:e.day,month:e.month,year:e.year,hour:e.hour,minute:e.minute,second:e.second,millisecond:e.millisecond,timezone:t??e.zoneName}}const d0=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],u0=d0.reduce((e,t)=>(e[t]=t,e),{}),f0=J.defaultZone.name,Io=u0.UTC;var is;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(is||(is={}));const h0=["hour","minute","second","millisecond"],m0=Be({hour:14,minute:19,second:7,millisecond:877,timezone:Io}),p0=Be({year:2023,month:6,day:5,timezone:Io}),g0=Be(gu(p0,m0));var L;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(L||(L={}));const v0={[L.Milliseconds]:"millisecond",[L.Seconds]:"second",[L.Minutes]:"minute",[L.Hours]:"hour",[L.Days]:"day",[L.Weeks]:"week",[L.Months]:"month",[L.Quarters]:"quarter",[L.Years]:"year"},os=[L.Milliseconds,L.Seconds,L.Minutes,L.Hours,L.Days,L.Weeks,L.Months,L.Quarters,L.Years];function as(e,t){return ce(e,(n,r)=>t==null||!te(r,"number")?r:ci({number:r,digits:t}))}const ss={longterm:1,casual:0},jc={[L.Years]:"longterm",[L.Quarters]:"longterm",[L.Months]:"longterm",[L.Weeks]:"casual",[L.Days]:"casual",[L.Hours]:"casual",[L.Minutes]:"casual",[L.Seconds]:"casual",[L.Milliseconds]:"casual"};function w0(e){return e.map(r=>jc[r]).reduce((r,i)=>ss[i]>ss[r]?i:r)}var qt;(function(e){e.AdditiveUnits="additive-units",e.EquivalentUnits="equivalent-units"})(qt||(qt={}));function b0({start:e,end:t,units:n,unit:r,diffType:i,decimalCount:o}){const a=xn(e),s=xn(t),l=n??[r],c=l.length===1?qt.EquivalentUnits:i;if(!c)throw new Error("Failed to diff dates: no diffType was provided.");if(c===qt.AdditiveUnits){const d=w0(l),u=s.diff(a,l,{conversionAccuracy:d}).toObject();return as(u,o)}else if(c===qt.EquivalentUnits){const d=l.map(m=>{const g=s.diff(a,m,{conversionAccuracy:jc[m]}).toObject()[m];if(g==null)throw new Error(`Internal date-vir error: failed to find duration for '${m}'`);return[m,g]}),u=qd(d);return as(u,o)}else throw new Error(`Failed to diff dates: provided diffType is invalid: '${c}'`)}function y0(e){if(!an.isValidIANAZone(e))throw new Error(`'${e}' is not a valid time zone`)}function $0(e){io(e,g0),y0(e.timezone),xn(e)}function k0(e){try{return $0(e),!0}catch{return!1}}function x0(e,t){const n=T0(e,t);if(!n||!n.isValid)throw new Error(`Failed to parse date input '${e}'`);return c0(n,t)}function ls(e){const t=I.fromJSDate(new Date(e));if(t.isValid)return t}function T0(e,t){if(k0(e)&&(e=xn(e).toMillis()),I.isDateTime(e))return e.setZone(t);if(te(e,"number"))return I.fromMillis(e,{zone:Io}).setZone(t);if(te(e,"string")){const n=I.fromISO(e,{zone:t});return n.isValid?n:ls(e)}else if(e instanceof Date)return I.fromJSDate(e).setZone(t);return ls(e)}function S0(e){return x0(Date.now(),e)}function E0(){return S0(f0)}const I0={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Js(I0,h0);const A0=J.defaultLocale;function C0(e){return e.replace(new RegExp(String.fromCharCode(8239),"g")," ")}function cs(e,t){const n=xn(e).toLocaleString({...t},{locale:(t==null?void 0:t.locale)??A0});return C0(n)}function M0(e){return[String(Math.abs(e.year)).padStart(4,"0"),String(Math.abs(e.month)).padStart(2,"0"),String(Math.abs(e.day)).padStart(2,"0")].join("-")}function L0(e,t){const n=qe(e,"second")&&t?String(Math.abs(e.second)).padStart(2,"0"):void 0;return[String(Math.abs(e.hour)).padStart(2,"0"),String(Math.abs(e.minute)).padStart(2,"0"),n].filter($t).join(":")}function O0(e,t){return{date:M0(e),time:L0(e,t.includeSeconds),timezone:e.timezone}}function N0(e,t){const n=O0(e,t);return[n.date,n.time,t.includeTimezone&&`(${n.timezone})`].filter($t).join(" ")}const P0={[L.Milliseconds]:1e3,[L.Seconds]:60,[L.Minutes]:60,[L.Hours]:24,[L.Days]:30,[L.Weeks]:4,[L.Months]:12,[L.Quarters]:4,[L.Years]:1/0};function q0({fullDate:e,relativeTo:t,options:n={}}){const r=n.decimalDigitCount||0,i=b0({start:e,end:t,units:os,diffType:qt.EquivalentUnits}),o=ce(i,(p,g)=>{const b=Math.floor(Math.abs(ci({digits:1,number:g}))),x=b>0,k=n.limitUnitMax?b<P0[p]:!0;return x&&k}),a=os.reduce((p,g)=>{var x;return!((x=n.blockedRelativeUnits)!=null&&x.includes(g))&&o[g]?g:p},void 0);if(n.blockJustNow?!1:ji(e,t)||a===L.Minutes&&i.minutes<2||a===L.Seconds&&i.seconds<11||a===L.Milliseconds&&i.milliseconds<710)return"just now";if(a==null)return;const l=i[a],c=Math.abs(ci({digits:r,number:l})),d=c===1,u=[v0[a],d?"":"s"].join(""),m=d?"a":c;return l<0?`in ${m} ${u}`:`${m} ${u} ago`}function D0(e){return{date:cs(e,{dateStyle:"medium"}).replace(/\s/g," "),time:cs(e,{timeStyle:"short"}).replace(/\s/g," ")}}const B0={blockedRelativeUnits:[L.Years,L.Quarters],limitUnitMax:!0};function _0(e){var o,a,s;const t=D0(e.fullDate),n=[((o=e.parts)==null?void 0:o.date)&&t.date,((a=e.parts)==null?void 0:a.time)&&t.time].filter($t).join(" "),r=N0(e.fullDate,{includeSeconds:!0,includeTimezone:!0}),i=(s=e.relativeOptions)!=null&&s.tryRelative?q0({fullDate:e.fullDate,relativeTo:e.relativeOptions.relativeTo||E0(),options:{...B0,...e.relativeOptions}}):void 0;return{everythingString:r,displayString:i||n}}P()({tagName:"toniq-date-time",renderCallback({inputs:e}){const{displayString:t,everythingString:n}=_0(e);return h`
            <span title=${n}>${t}</span>
        `}});const R0="data-test-id",Mt=et(class extends _e{constructor(e){super(e),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=H0(e,"testId",HTMLElement)}render(e){return this.element.setAttribute(R0,e),ue}});function H0(e,t,n){F0(e,t);const r=e.element;if(!(r instanceof n))throw new Error(`${t} attached to non ${n.name} element.`);return r}function F0(e,t){if(e.type!==In.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}var Li;(function(e){e.Up="up",e.Down="down"})(Li||(Li={}));const ht=P()({tagName:"toniq-dropdown",stateInitStatic:{dropdownOpen:!1},events:{selectChange:q(),openChange:q()},hostClasses:{"toniq-dropdown-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${G.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${X};
            cursor: pointer;
            border-radius: 8px;
            outline: none;
        }

        ${tt({mainSelector:".dropdown:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .trigger-icon {
            transform: rotate(0);
            transition: ${Z.interaction} linear transform;
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
            ${F($.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 0 0 8px 8px;
            ${F($.pagePrimary)}
            ${nr.popupShadow};
        }

        .reverse-direction .select-options {
            top: unset;
            bottom: 100%;
            border-radius: 8px 8px 0 0;
            ${nr.popupShadowReversed};
        }

        .selected-label-prefix {
            ${G.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${fe};
        }

        .select-options .option.selected {
            ${F($.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${$.accentTertiary.backgroundColor};
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
            ${yt};
        }
    `,initCallback:({state:e,host:t,updateState:n})=>{function r(i){var s;const o=(s=t.shadowRoot)==null?void 0:s.querySelector("button.dropdown");!i.composedPath().includes(o)&&e.dropdownOpen&&n({dropdownOpen:!1})}window.addEventListener("click",r)},renderCallback({dispatch:e,events:t,state:n,inputs:r,updateState:i}){r._forceOpenState!=null&&i({dropdownOpen:r._forceOpenState}),r.disabled&&i({dropdownOpen:!1});const o=r.value?r.options.find(l=>{var c;return l.value===((c=r.value)==null?void 0:c.value)})??r.options[0]:r.options[0],a=r.icon?h`
                  <${O.assign({icon:r.icon})}
                      ${Mt("rendered-input-icon")}
                  ></${O}>
              `:"",s=r.selectedLabelPrefix?h`
                  <span class="selected-label-prefix">${r.selectedLabelPrefix}</span>
              `:"";return h`
            <button
                ?disabled=${!!r.disabled}
                class=${se({dropdown:!0,open:n.dropdownOpen,"reverse-direction":r.direction===Li.Up})}
                @click=${()=>{const l=!n.dropdownOpen;e(new t.openChange(l)),i({dropdownOpen:l})}}
                role="listbox"
                aria-expanded=${n.dropdownOpen}
            >
                <div class="select dropdown-trigger">
                    ${a}
                    <span class="select-selected">${s} ${o==null?void 0:o.label}</span>
                    <span class="trigger-icon-wrapper">
                        <${O.assign({icon:Rf})}
                            class="trigger-icon"
                        ></${O}>
                    </span>
                </div>
                <div class="select-options">
                    ${r.options.map(l=>h`
                            <span
                                class="option ${l.value===(o==null?void 0:o.value)?"selected":""}"
                                @click=${c=>{c.preventDefault(),c.stopPropagation(),i({dropdownOpen:!1}),e(new t.openChange(!1)),e(new t.selectChange(l))}}
                                role="option"
                            >
                                ${l.label}
                            </span>
                        `)}
                </div>
            </button>
        `}});var Pe;(function(e){e.ReplacePage="replace-page",e.NewTab="new-tab",e.RouteLink="route-link",e.Disabled="disabled"})(Pe||(Pe={}));const Ge=P()({tagName:"toniq-hyperlink",hostClasses:{"toniq-hyperlink-with-hover-styles":({inputs:e})=>!!e.withHoverStyles,"toniq-hyperlink-link-disabled":({inputs:e})=>e.linkType===Pe.Disabled},styles:({hostClasses:e})=>v`
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
            color: ${$.pageInteraction.foregroundColor};
        }

        ${e["toniq-hyperlink-with-hover-styles"].selector}:active a, ${e["toniq-hyperlink-with-hover-styles"].selector} a:active {
            color: ${$.pageInteractionActive.foregroundColor};
        }

        ${e["toniq-hyperlink-link-disabled"].selector} {
            cursor: default;
        }
    `,renderCallback({inputs:e}){function t(r){if(e.linkType===Pe.Disabled){r.preventDefault();return}e.linkType===Pe.RouteLink&&po(r)&&(r.preventDefault(),e.scrollToTop&&window.scrollTo(0,0))}const n=e.linkType===Pe.NewTab;return h`
            <a
                href=${e.url.toString()}
                ${T("click",t)}
                target=${sa(n?"_blank":void 0)}
                rel=${sa(n?"noopener noreferrer":void 0)}
            >
                <slot></slot>
            </a>
        `}}),Oi=360,Uc=8;function Zc(e){return(e-Uc)/2}const Ae=Re({"main-image-size":Oi,"secondary-image-size":Zc(Oi)}),Me=P()({tagName:"toniq-featured-flip-card-footer",styles:v`
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

        ${_} {
            flex-grow: 2;
            white-space: nowrap;
            max-width: calc(${Ae["secondary-image-size"].value} * 2);
        }

        ${Ge} ${_} {
            width: 100%;
        }

        ${Ge} {
            text-decoration: none;
        }

        .more-info-button {
            flex-grow: 1;
            max-width: ${Ae["secondary-image-size"].value};
        }
    `,events:{viewMoreButtonClick:q(),flipCardButtonClick:q()},renderCallback({inputs:e,dispatch:t,events:n}){const r=e.socialUrls,i=r?ne(r).map(o=>{const a=r[o];if(!a)return;const s=rh[o];return h`
                          <${Ge.assign({linkType:Pe.NewTab,url:a})}>
                              <${O.assign({icon:s})}></${O}>
                          </${Ge}>
                      `}).filter($t):"";return h`
            <div class="buttons">
                <${Ge.assign({url:e.viewMoreButtonUrl,linkType:Pe.RouteLink,scrollToTop:!0})}
                    ${T("click",()=>{t(new n.viewMoreButtonClick)})}
                >
                    <${_.assign({text:e.viewMoreButtonText,variant:le.Outline})}></${_}>
                </${Ge}>
                ${e.flipCardButtonText?h`
                          <${_.assign({text:e.flipCardButtonText})}
                              class="more-info-button"
                              ${T("click",()=>{t(new n.flipCardButtonClick)})}
                          ></${_}>
                      `:""}
            </div>
            <div class="social-urls">${i}</div>
        `}}),Zr=P()({tagName:"toniq-flip-card",events:{flippedChange:q()},styles:v`
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

        ${Wf(".card-face",!1)}

        .card-face {
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            padding: 0;
            overflow: hidden;
            backface-visibility: hidden;
            background-color: ${$.pagePrimary.backgroundColor};
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
        `}});P()({tagName:"toniq-featured-flip-card",stateInitStatic:{flipped:!1},events:{viewMoreButtonClick:q()},styles:v`
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
            ${G.h3Font};
            ${G.extraBoldFont};
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
            max-height: ${Ae["main-image-size"].value};
            justify-content: space-evenly;
            gap: 2px;
        }

        .secondary-images {
            flex-basis: ${Ae["secondary-image-size"].value};
            justify-content: space-evenly;
            row-gap: ${Uc}px;
            column-gap: 2px;
            flex-grow: 1;
            max-height: 100%;
            display: flex;
            flex-wrap: wrap;
        }

        ${Zr} {
            width: 100%;
            height: 100%;
        }

        .main-image-wrapper {
            max-width: 100%;
            flex-shrink: 0;
        }

        .main-image-wrapper {
            width: ${Ae["main-image-size"].value};
            height: ${Ae["main-image-size"].value};
        }

        .secondary-image-wrapper {
            width: ${Ae["secondary-image-size"].value};
            height: ${Ae["secondary-image-size"].value};
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

        .card-face.front ${Me} {
            margin-top: 24px;
        }

        .card-face.back ${Me} {
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
            ${G.paragraphFont};
            overflow-y: auto;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:e,state:t,updateState:n,host:r,dispatch:i,events:o}){var m,p,g,b;const a=e.mainImageSize||Oi,s=Zc(a);pi({onElement:r,forCssVar:Ae["main-image-size"],toValue:`${a}px`}),pi({onElement:r,forCssVar:Ae["secondary-image-size"],toValue:`${s}px`});const l=["View",e.viewButtonTitle].filter($t).join(" "),c=h`
            <h3>${e.cardTitle}</h3>
        `,d=e.imageUrls[0],u=d?h`
                  <div class="main-image-wrapper">
                      ${((m=e.customTemplateCallback)==null?void 0:m.call(e,d))||h`
                          <${Nn.assign({imageUrl:d})}></${Nn}>
                      `}
                  </div>
              `:"";return h`
            <${Zr.assign({flipped:t.flipped})}
                ${T(Me.events.viewMoreButtonClick,()=>{i(new o.viewMoreButtonClick)})}
            >
                <div class="card-face front" slot="front">
                    ${c}
                    <div class="all-images">
                        ${u}
                        <div class="secondary-images">
                            ${e.imageUrls.slice(1).map(x=>{var k;return h`
                                    <div class="secondary-image-wrapper">
                                        ${((k=e.customTemplateCallback)==null?void 0:k.call(e,x))||h`
                                            <${Nn.assign({imageUrl:x})}></${Nn}>
                                        `}
                                    </div>
                                `})}
                        </div>
                    </div>
                    <${Me.assign({viewMoreButtonText:l,flipCardButtonText:(p=e.infoParagraphs)!=null&&p.length?e.flipCardButtonTitle||"More Info":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Me.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${Me}>
                </div>
                <div class="card-face back" slot="back">
                    ${c}
                    <div class="paragraphs">
                        ${(g=e.infoParagraphs)==null?void 0:g.map(x=>h`
                                <p>${x}</p>
                            `)}
                    </div>
                    <${Me.assign({viewMoreButtonText:l,flipCardButtonText:(b=e.infoParagraphs)!=null&&b.length?"Back":"",viewMoreButtonUrl:e.viewMoreUrl||"",socialUrls:e.socialUrls})}
                        ${T(Me.events.flipCardButtonClick,()=>{n({flipped:!t.flipped})})}
                    ></${Me}>
                </div>
            </${Zr}>
        `}});var Y;(function(e){e.H1="h1",e.H2="h2",e.H3="h3",e.H4="h4"})(Y||(Y={}));const z=P()({tagName:"toniq-heading",hostClasses:{"toniq-heading-h1":({inputs:e})=>e.level===Y.H1,"toniq-heading-h2":({inputs:e})=>e.level===Y.H2,"toniq-heading-h3":({inputs:e})=>e.level===Y.H3,"toniq-heading-h4":({inputs:e})=>e.level===Y.H4},styles:({hostClasses:e})=>v`
        ${e["toniq-heading-h1"].selector} {
            ${G.h1Font};
        }
        ${e["toniq-heading-h2"].selector} {
            ${G.h2Font};
        }
        ${e["toniq-heading-h3"].selector} {
            ${G.h3Font};
        }
        ${e["toniq-heading-h4"].selector} {
            ${G.h4Font};
        }

        h1,
        h2,
        h3,
        h4 {
            ${He};
            font: inherit;
            overflow: inherit;
            text-overflow: inherit;
        }
    `,renderCallback({inputs:e}){return e.level===Y.H1?h`
                <h1><slot></slot></h1>
            `:e.level===Y.H2?h`
                <h2><slot></slot></h2>
            `:e.level===Y.H3?h`
                <h3><slot></slot></h3>
            `:e.level===Y.H4?h`
                <h4><slot></slot></h4>
            `:h`
                <slot></slot>
            `}});function Ni({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>Ni({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function Gc({value:e,allowed:t,blocked:n}){const r=t?Ni({input:e,matcher:t}):!0,i=n?Ni({input:e,matcher:n}):!1;return r&&!i}function ds(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(Gc({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}var Pi;(function(e){e.Default="default",e.Outline="outline"})(Pi||(Pi={}));const Hn=P()({tagName:"toniq-input",hostClasses:{"toniq-input-outline":({inputs:e})=>e.variant===Pi.Outline,"toniq-input-has-a-value":({inputs:e})=>!!e.value,"toniq-input-disabled":({inputs:e})=>!!e.disabled},events:{valueChange:q(),inputBlock:q()},styles:({hostClasses:e})=>v`
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
                border-radius: ${$i};
                z-index: 0;
                pointer-events: none;
            }

            ${e["toniq-input-outline"].selector} label {
                background-color: ${$.pagePrimary.backgroundColor};
                border-color: ${$.pageTertiary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} ${O} {
                color: ${$.pageSecondary.foregroundColor};
            }

            :host(
                    .${e["toniq-input-has-a-value"].name}.${e["toniq-input-outline"].name}
                )
                ${O} {
                color: ${$.pagePrimary.foregroundColor};
            }

            ${e["toniq-input-outline"].selector} input::placeholder {
                color: ${$.pageSecondary.foregroundColor};
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
                border-radius: ${$i};
                background-color: ${$.accentTertiary.backgroundColor};
                font: ${G.paragraphFont};
                gap: 4px;
            }

            ${tt({mainSelector:"input:focus:focus-visible:not(:active) ~ .focus-border",elementBorderSize:0})}

            ${O} {
                margin-right: 10px;
            }

            input {
                ${X};
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
                color: ${$.accentTertiary.foregroundColor};
            }

            .suffix {
                ${G.boldFont};
            }

            ${e["toniq-input-disabled"].selector} {
                ${yt};
            }
            ${e["toniq-input-disabled"].selector} * {
                ${fe};
            }
        `,renderCallback({inputs:e,dispatch:t,events:n}){const{filtered:r}=ds({value:e.value??"",allowed:e.allowedInputs,blocked:e.blockedInputs}),i=e.icon?h`
                  <${O.assign({icon:e.icon})}></${O}>
              `:"";return h`
            <label>
                ${i}
                <input
                    autocomplete=${e.disableBrowserHelps?"off":""}
                    autocorrect=${e.disableBrowserHelps?"off":""}
                    autocapitalize=${e.disableBrowserHelps?"off":""}
                    spellcheck=${e.disableBrowserHelps?"false":""}
                    ?disabled=${e.disabled}
                    .value=${r}
                    ${T("input",o=>{if(!(o instanceof InputEvent))throw new Error(`Input event type mismatch: "${o.constructor.name}"`);const a=o.target;if(!(a instanceof HTMLInputElement))throw new Error("Failed to find input element target from input event.");const s=o.data,l=r;let c=a.value??"";if(s)if(s.length===1)Gc({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs})||(c=l,t(new n.inputBlock(s)));else{const{filtered:d,blocked:u}=ds({value:s,allowed:e.allowedInputs,blocked:e.blockedInputs});c=d,t(new n.inputBlock(u))}a.value!==c&&(a.value=c),l!==c&&t(new n.valueChange(c))})}
                    placeholder=${e.placeholder}
                />
                ${Xe(!!e.suffix,h`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <div class="focus-border"></div>
            </label>
        `}});var vt;(function(e){e.Small="small",e.Large="large",e.WholePage="whole-page"})(vt||(vt={}));const sr=P()({tagName:"toniq-loading",hostClasses:{"toniq-loading-large":({inputs:e})=>e.size===vt.Large,"toniq-loading-whole-page":({inputs:e})=>e.size===vt.WholePage},styles:({hostClasses:e})=>v`
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

        ${e["toniq-loading-whole-page"].selector} ${O} {
            width: 48px;
            height: 48px;
        }

        ${e["toniq-loading-large"].selector} ${O} {
            width: inherit;
            height: inherit;
        }
    `,renderCallback:({inputs:e})=>h`
            <${O.assign({icon:Ff,fitContainer:e.size!==vt.Small})}></${O}>
        `});async function V0(e){return navigator.clipboard.writeText(e)}const z0="…";function W0(e,t){const n=e.slice(0,t).trim(),r=e.slice(-1*t).trim();return`${n}${z0}${r}`}function j0(e){return!(e%1)}function U0(e){return e.letterCount==null?4:j0(e.letterCount)?e.letterCount<1?1:e.letterCount:Math.floor(e.letterCount)}P()({tagName:"toniq-middle-ellipsis",events:{copy:q()},cssVars:{"toniq-middle-ellipsis-text-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-icon-color":$.pagePrimary.foregroundColor,"toniq-middle-ellipsis-text-hover-color":$.pageInteraction.foregroundColor,"toniq-middle-ellipsis-icon-hover-color":$.pageInteraction.foregroundColor},styles:({hostClasses:e,cssVars:t})=>v`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Z.interaction};
            ${G.paragraphFont};
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

        :host(.${e["toniq-middle-ellipsis-clickable"].name}:hover) ${O} {
            color: ${t["toniq-middle-ellipsis-icon-hover-color"].value};
        }

        ${O} {
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
            ${X};
            cursor: pointer;
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${tt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .text-content {
            position: relative;
            overflow: hidden;
        }

        .copied-text {
            box-shadow: 0 0 20px 100px ${$.pagePrimary.backgroundColor};
            background-color: ${$.pagePrimary.backgroundColor};
            display: flex;
            position: absolute;
            height: 100%;
            right: 0;
            max-width: 100%;
            pointer-events: none;
            transition: opacity ${Z.interaction};
            opacity: 0;
        }

        .show-copied-text {
            opacity: 1;
        }
    `,hostClasses:{"toniq-middle-ellipsis-clickable":({inputs:e})=>!!e.externalLink||!!e.copyOnClick},stateInitStatic:{showCopiedTextTimeoutId:void 0},renderCallback({inputs:e,dispatch:t,events:n,state:r,updateState:i}){if(!e.text)return h``;const o=e.text,a=U0(e),s=!!e.externalLink,l=!!e.copyOnClick,c=o.length>a*2+2,d=c?W0(o,a):o,u=c?o:"",m=s?Hf:l?Rl:void 0,p=m?h`
                  <${O.assign({icon:m})}></${O}>
              `:"",g=h`
            <span title=${u} class="text-content">
                ${Xe(!!e.copyOnClick,h`
                        <span
                            class=${se({"copied-text":!0,"show-copied-text":r.showCopiedTextTimeoutId!=null})}
                        >
                            Copied!
                        </span>
                    `)}
                ${d}
            </span>
        `;return d?s?h`
                    <button
                        tabindex="0"
                        role="link"
                        ${T("click",b=>{var k,A;const x=(A=(k=b.currentTarget)==null?void 0:k.querySelector)==null?void 0:A.call(k,"a");if(!x)throw new Error("Failed to find link anchor tag for middle ellipsis element link.");x.click()})}
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
                            title=${u}
                        >
                            ${g} ${p}
                        </a>
                    </button>
                `:l?h`
                    <button
                        class="text-wrapper copyable"
                        ${T("click",async()=>{await V0(o),t(new n.copy),r.showCopiedTextTimeoutId!=null&&window.clearTimeout(r.showCopiedTextTimeoutId),i({showCopiedTextTimeoutId:window.setTimeout(()=>{i({showCopiedTextTimeoutId:void 0})},5e3)})})}
                    >
                        ${g} ${p}
                    </button>
                `:h`
                    ${g}
                `:h``}});const us="...";function Z0(e,t,n=7,r=5){let i;e=mt({value:e,min:1,max:t}),n=mt({value:n,min:r,max:t});const o=n-5,a=n-3;t<=n?i=n:i=e<a||e>t-a?a:o;const s={start:Math.round(e-i/2),end:Math.round(e+i/2)};(s.start-1===1||s.end+1===t)&&(s.start+=1,s.end+=1);const l=e>t-a&&t>n?Gr(t-i,t):e>i?Gr(Math.min(s.start,t-i),Math.min(s.end,t)):Gr(1,Math.min(t,i+1));function c(u,m){return l.length+1!==t?m:[u]}const d=l[l.length-1];if(d&&d<t){const u=c(t,[us,t]);return[...l,...u]}else return l[0]!==1?c(1,[1,us]).concat(l):l}function Gr(e,t){const n=t-e+1;return Array.from({length:n},(r,i)=>e+i)}P()({tagName:"toniq-pagination",styles:v`
        :host {
            display: flex;
        }

        button {
            ${X};
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
            ${F($.accentSecondary)};
        }

        .control:hover {
            ${F($.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${F($.accentTertiary)};
        }

        .page {
            position: relative;
            width: 32px;
            height: 32px;
            ${G.labelFont}
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${F($.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${F($.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{pageChange:q()},renderCallback({inputs:e,events:t,dispatch:n}){return e.pageCount<=1?h``:h`
                <button
                    ${T("click",()=>{e.currentPage>1&&n(new t.pageChange(e.currentPage-1))})}
                    class="control"
                    ?disabled=${e.currentPage<=1}
                >
                    <${O.assign({icon:Bl})}></${O}>
                </button>
                ${Z0(e.currentPage,e.pageCount,e.pagesShown).map(r=>typeof r=="string"?h`
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
                    <${O.assign({icon:_l})}></${O}>
                </button>
            `}});P()({tagName:"toniq-progress",cssVars:{"toniq-progress-width":"0%"},styles:({cssVars:e})=>v`
        :host {
            position: relative;
            width: 100%;
            display: inline-block;
            background: ${$.accentSecondary.backgroundColor};
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
            background: ${$.pageInteraction.foregroundColor};
        }
    `,renderCallback({inputs:e,cssVars:t,host:n}){const r=mt({value:e.percent,max:100,min:0}),i=`${r}%`;return pi({forCssVar:t["toniq-progress-width"],onElement:n,toValue:i}),n.setAttribute("title",`${i} finished`),r?h`
                <div class="progress"></div>
            `:j}});const G0=P()({tagName:"toniq-radio-group",stateInitStatic:{randomGroupName:""},events:{valueChange:q()},cssVars:{"toniq-radio-group-unchecked-radio-color":String(Se("pagePrimary","foregroundColor")),"toniq-radio-group-unchecked-label-color":String(Se("pagePrimary","foregroundColor")),"toniq-radio-group-checked-radio-color":String(Se("accentPrimary","backgroundColor")),"toniq-radio-group-checked-label-color":String(Se("pageInteraction","foregroundColor"))},styles:({cssVars:e})=>v`
        :host {
            ${G.boldParagraphFont};
            display: inline-flex;
            transition:
                color ${Z.interaction},
                background-color ${Z.interaction},
                opacity ${Z.interaction};
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
            ${X};
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
            transition: ${Z.interaction};
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

        ${tt({mainSelector:".wrapper:focus:focus-visible:not(:active)",elementBorderSize:0})}

        .wrapper.checked {
            color: ${e["toniq-radio-group-checked-label-color"].value};
        }

        .wrapper.disabled {
            ${yt};
        }

        .wrapper.disabled::before {
            ${yt}
        }
    `,initCallback:({updateState:e})=>{e({randomGroupName:fr()})},renderCallback({inputs:e,dispatch:t,events:n,state:r}){return J0(e.entries).map(o=>Y0(e.groupName||r.randomGroupName,e.value,o,()=>{t(new n.valueChange(o.value))}))}});function J0(e){const t=Object.fromEntries(e.map(r=>[r.value,r]));return Object.values(t).length!==e.length&&console.error(`${G0.tagName} was given duplicate entry values.`),Object.values(t)}function Y0(e,t,n,r){const i=t===n.value,o=h`
        <slot name=${n.value} class="label">
            <span class="label">${n.label||n.value}</span>
        </slot>
    `;return h`
        <button
            ?disabled=${n.disabled}
            tabindex="0"
            class=${se({disabled:!!n.disabled,checked:i&&!n.disabled,wrapper:!0})}
            ${T("click",()=>{r()})}
        >
            <input
                ${T("input",()=>{r()})}
                type="radio"
                name=${e}
                ?checked=${i}
            />
            ${o}
        </button>
    `}function Jr(e,t){const n=e[0],r=e[e.length-1];if(n==null||r==null)return 0;if(t<n)return n;if(t>r)return r;const i=e.findIndex((c,d)=>{const u=e[d+1];return u==null?!0:c<=t&&u>=t});if(i<0)return n;const o=e[i];if(o==null)return n;const a=e[i+1];if(a==null)return o;const s=t-o,l=a-t;return s<l?i:i+1}function K0(e,t,n=100){e>t&&([e,t]=[t,e]),n<2&&(n=2);let r=Q0(e);const i=[e];for(;r<t;){const o=Math.pow(10,String(r).length-1),a=r+o;a<t&&i.push(a),r=a}return i.push(t),i.length>n&&(fs(i,n),i.length>n&&fs(i,n)),i}function fs(e,t){const n=e.length-t,r=(e.length-2)/n;for(let i=e.length-2;i>=1;i-=r)e.splice(Math.floor(i),1)}function Q0(e){let t=1;if(!e)return e;e<0&&(t=-1,e=e*-1);const n=e.toFixed(0),r=Math.pow(10,n.length-1),i=Number(n[0]||1);return r*i*t}const N={lowerLabelWrapper:"lower-label-wrapper",upperLabelWrapper:"upper-label-wrapper",labelPercentMarginWrapper:"label-percent-wrapper",labelPixelMarginWrapper:"label-pixel-wrapper",labelOuterWrapper:"label-outer-wrapper",rightAlignedLabelWrapper:"label-right-wrapper",range:"range",lowerSlider:"lower-slider",upperSlider:"upper-slider",slider:"slider"},en={label:"label",upperLabel:"upper-label",lowerLabel:"upper-label",slider:"slider"};function X0(e){var r,i;const t=(r=e.shadowRoot)==null?void 0:r.querySelector(`.${N.lowerLabelWrapper} .${N.labelPercentMarginWrapper}`),n=(i=e.shadowRoot)==null?void 0:i.querySelector(`.${N.upperLabelWrapper} .${N.labelPercentMarginWrapper}`);if(n instanceof HTMLElement&&t instanceof HTMLElement){const o=t.getBoundingClientRect(),a=n.getBoundingClientRect();return{lower:o,upper:a}}else return}function e1(e,t=8){const n=X0(e);if(!n)return 0;const r=n.lower.right-n.upper.left+t;return Math.max(0,r)}function Yr({value:e,limits:t,flip:n}){const i=(t.max-e)/(t.max-t.min)*100;return-(n?100-i:i)}function Tn(e){return Ce(e)&&e.min!==void 0&&e.max!==void 0}function qi(e){var n;const t=(n=e.shadowRoot)==null?void 0:n.querySelector(`.${N.range}`);return(t==null?void 0:t.clientWidth)??0}function Kr(e,t,n){return`${n?hu(e):e} ${t}`}function t1({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}function n1({value:e,double:t,min:n,max:r}){return t?Tn(e)?{min:mt({value:e.min,min:n,max:Math.min(e.max,r)}),max:mt({value:e.max,min:Math.max(e.min,n),max:r})}:{min:n,max:r}:Tn(e)?n:mt({value:e,min:n,max:r})}function r1({actualValue:e,actualLimits:t,logScale:n,logRange:r}){return n?{elementValue:Tn(e)?{min:Jr(r,e.min),max:Jr(r,e.max)}:Jr(r,e),elementLimits:{min:0,max:r.length-1}}:{elementValue:e,elementLimits:t}}function Qr(e,t,n){return n?t[e]||0:e}function i1(e){return{actualLimits:t1(e),actualValue:n1(e)}}function o1(e,t){var r,i,o;let n=!1;if(Tn(e)){const a=(r=t.shadowRoot)==null?void 0:r.querySelector(`.${N.lowerSlider}`),s=(i=t.shadowRoot)==null?void 0:i.querySelector(`.${N.upperSlider}`);a instanceof HTMLInputElement&&s instanceof HTMLInputElement&&(Number(a.value)!==e.min&&(a.value=String(e.min),n=!0),Number(s.value)!==e.max&&(s.value=String(e.max),n=!0))}else{const a=(o=t.shadowRoot)==null?void 0:o.querySelector(`.${N.slider}`);a instanceof HTMLInputElement&&Number(a.value)!==e&&(a.value=String(e),n=!0)}return n}function Jc(e,t){const{actualValue:n,actualLimits:r}=i1({...e}),i=K0(r.min,r.max),o=e.logScale??!1,a=e.suffix??"",{elementValue:s,elementLimits:l}=r1({actualValue:n,actualLimits:r,logScale:o,logRange:i}),c=qi(t);return{actualValue:n,elementLimits:l,elementValue:s,isLogScale:o,logRange:i,rangeWidth:c,suffix:a}}const dt=16,hs=v`
    ${dt}px
`,ms=v`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${hs};
    width: ${hs};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Z.interaction};
    ${F($.accentPrimary)};
`,ps=v`
    transform: scale(1.2);
`;function sn(e){requestAnimationFrame(()=>{const t=Jc(e.instanceInputs,e).elementValue;o1(t,e)&&(e.setAttribute("disabled","true"),sn(e))})}P()({tagName:"toniq-slider",stateInitStatic:{rangeWidth:0,labelOverlap:0,internalValue:-1},events:{valueChange:q()},styles:v`
        :host {
            display: block;
        }

        .${S(N.range)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${F($.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${F($.accentPrimary)};
        }

        .${S(N.labelOuterWrapper)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${G.boldParagraphFont};
            ${fe};
        }

        .${S(N.labelPixelMarginWrapper)},
            .${S(N.labelPercentMarginWrapper)} {
            position: relative;
            flex-shrink: 0;
        }

        .${S(N.rightAlignedLabelWrapper)} {
            justify-content: flex-end;
        }

        .${S(N.slider)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${tt({mainSelector:".slider:focus:focus-visible:not(:active)",elementBorderSize:0,outlineGap:6})}

        .${S(N.lowerSlider)},
        .${S(N.upperSlider)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${S(N.slider)}::-moz-range-thumb {
            ${ms}
        }

        /* these selectors fail if combined with a comma */
        .${S(N.slider)}::-webkit-slider-thumb {
            ${ms}
        }

        /* these selectors fail if combined with a comma */
        .${S(N.slider)}::-webkit-slider-thumb:hover {
            ${ps}
        }

        /* these selectors fail if combined with a comma */
        .${S(N.slider)}::-moz-range-thumb:hover {
            ${ps}
        }
    `,initCallback:({host:e})=>{e.addEventListener("mousemove",()=>{sn(e)}),e.addEventListener("keydown",()=>{sn(e)}),e.addEventListener("keyup",()=>{sn(e)})},renderCallback({inputs:e,host:t,events:n,dispatch:r,state:i,updateState:o}){const{actualValue:a,logRange:s,isLogScale:l,suffix:c,elementValue:d,elementLimits:u,rangeWidth:m}=Jc({...e},t);if(sn(t),Tn(d))return p(a,d,u);return b(a,d,u);function p(x,k,A){const U={left:Te((m-dt)*(k.min-A.min)/(A.max-A.min)+dt/2),right:Te((m-dt)*(A.max-k.max)/(A.max-A.min)+dt/2)},ee=Kr(x.min,c,l),be=Kr(x.max,c,l);requestAnimationFrame(()=>{const ze=e1(t);ze!==i.labelOverlap&&o({labelOverlap:ze})});const rt=(A.max-k.max)/(A.max-A.min)>.5,Zt=Yr({value:k.min,limits:{min:A.min,max:k.max},flip:!0}),Gt=Yr({value:k.max,limits:{min:k.min,max:A.max},flip:!1}),Jt=i.labelOverlap&&rt?i.labelOverlap:0,it=i.labelOverlap&&!rt?i.labelOverlap:0;return h`
                <div
                    class="range"
                    ${yn(()=>{o({rangeWidth:qi(t)})})}
                >
                    <div
                        class="progress"
                        style="left: ${U.left}; right:${U.right}"
                    ></div>
                    <span
                        class="${N.labelOuterWrapper} ${N.lowerLabelWrapper}"
                        style="left: ${U.left}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-left: ${Er(Zt)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-right: ${Te(it)}"
                                ${Mt(en.lowerLabel)}
                            >
                                ${ee}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${N.labelOuterWrapper} ${N.upperLabelWrapper} ${N.rightAlignedLabelWrapper}"
                        style="right: ${U.right}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-right: ${Er(Gt)}"
                        >
                            <span
                                class="${N.labelPixelMarginWrapper}"
                                style="margin-left: ${Te(Jt)}"
                                ${Mt(en.upperLabel)}
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
                            class="${N.lowerSlider} ${N.slider}"
                            .min=${A.min}
                            .max=${A.max}
                            .value=${k.min}
                            ${T("input",ze=>{const Tr=ze.target,Sr={...x,min:Qr(Number(Tr.value),s,l)};g(Sr)})}
                        />
                        <input
                            ?disabled=${e.disabled??!1}
                            type="range"
                            class="${N.upperSlider} ${N.slider}"
                            step=${e.step}
                            .min=${A.min}
                            .max=${A.max}
                            .value=${k.max}
                            ${Mt(en.slider)}
                            ${T("input",ze=>{const Tr=ze.target,Sr={...x,max:Qr(Number(Tr.value),s,l)};g(Sr)})}
                        />
                    </div>
                </div>
            `}function g(x){o({internalValue:x}),e.disabled||r(new n.valueChange(x))}function b(x,k,A){const U=Te((m-dt)*(A.max-k)/(A.max-A.min)+dt/2),ee=Kr(x,c,l),be=Yr({value:k,limits:A,flip:!1});return h`
                <div
                    class="range"
                    ${yn(()=>{o({rangeWidth:qi(t)})})}
                >
                    <div class="progress" style="left: 0px; right: ${U}"></div>
                    <span
                        class="${N.labelOuterWrapper} ${N.rightAlignedLabelWrapper}"
                        style="right: ${U}"
                    >
                        <span
                            class="${N.labelPercentMarginWrapper}"
                            style="margin-right: ${Er(be)}"
                            ${Mt(en.label)}
                        >
                            ${ee}
                        </span>
                    </span>
                    <input
                        ?disabled=${e.disabled??!1}
                        type="range"
                        class="${N.slider}"
                        step=${e.step}
                        .min=${A.min}
                        .max=${A.max}
                        .value=${k}
                        ${Mt(en.slider)}
                        ${T("input",rt=>{const Zt=rt.target,Gt=Qr(Number(Zt.value),s,l);g(Gt)})}
                    />
                </div>
            `}}});var Di;(function(e){e.Default="default",e.TextOnly="text-only"})(Di||(Di={}));P()({tagName:"toniq-toggle-button",hostClasses:{"toniq-toggle-button-text-only":({inputs:e})=>e.variant===Di.TextOnly,"toniq-toggle-button-disabled":({inputs:e})=>!!e.disabled},styles:({hostClasses:e})=>v`
        :host {
            ${G.boldParagraphFont};
            ${fe};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${X};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${F($.accentSecondary)};
            transition:
                color ${Z.interaction},
                background-color ${Z.interaction};
        }

        ${tt({mainSelector:"button:focus:focus-visible:not(:active)",elementBorderSize:0})}

        button.toggled {
            ${F($.accentPrimary)};
        }

        :host(:hover) button {
            ${F($.accentPrimary)};
        }

        :host(:hover) button.toggled {
            ${F($.accentPrimaryHover)};
        }

        :host(:active) button.toggled {
            ${F($.accentPrimaryActive)};
        }

        ${e["toniq-toggle-button-text-only"].selector} button {
            ${F($.pagePrimary)};
            border: 1px solid transparent;
            background: none;
        }
        ${e["toniq-toggle-button-text-only"].selector} button.toggled {
            ${F($.pageInteraction)};
            border-color: ${$.pageInteraction.foregroundColor};
            background: none;
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button.toggled {
            ${F($.pageInteractionHover)};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:hover) button {
            color: ${$.pageInteraction.foregroundColor};
        }
        :host(.${e["toniq-toggle-button-text-only"].name}:active) button.toggled {
            ${F($.pageInteractionActive)};
        }
        ${e["toniq-toggle-button-text-only"].selector} button {
            padding: 0 8px;
        }

        ${e["toniq-toggle-button-disabled"].selector} {
            ${yt};
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback({inputs:e}){const t=e.icon?h`
                  <${O.assign({icon:e.icon})}
                      class="icon-template"
                  ></${O}>
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
        `}});const gs=vo({tagName:"toniq-tooltip",styles:v`
        :host {
            display: block;
            padding: 4px 8px;
            border-radius: 8px;
            border: 2px solid ${$.accentPrimary.backgroundColor};
            ${nr.menuShadow};
            background-color: ${$.pagePrimary.backgroundColor};
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}});P()({tagName:"toniq-with-tooltip",hostClasses:{"toniq-with-tooltip-force-tooltip":({inputs:e,state:t})=>!!e.forceShow||t.clickToggled},styles:({hostClasses:e})=>v`
        :host {
            display: inline-block;
            position: relative;
        }

        :host(:hover) .tooltip-wrapper,
        ${e["toniq-with-tooltip-force-tooltip"].selector} .tooltip-wrapper {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
            transition: opacity ${Z.pretty};
        }

        .tooltip-wrapper {
            transition:
                visibility ${Z.pretty} ${Z.pretty},
                opacity ${Z.pretty};
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
                <${gs}>${e.tooltipContent}</${gs}>
            </div>
        `}});P()({tagName:"toniq-top-tabs",events:{routeChange:q(),valueChange:q()},cssVars:{"toniq-top-tabs-selected-border-width":"4px","toniq-top-tabs-tab-vertical-padding":"8px"},styles:({cssVars:e})=>v`
        :host {
            display: block;
        }

        ul {
            ${X};
            display: flex;
            width: 100%;
        }

        li {
            display: flex;
            align-items: center;
            list-style: none;
            position: relative;
            border-bottom: 1px solid ${$.pageTertiary.foregroundColor};
            transition:
                border-bottom-width ${Z.interaction},
                border-color ${Z.interaction},
                padding-bottom ${Z.interaction};
            padding: ${e["toniq-top-tabs-tab-vertical-padding"].value} 8px;
        }

        .tab {
            ${X};
            ${He};
            cursor: pointer;
            display: inline-block;
            ${G.paragraphFont};
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

        ${Br} {
            max-width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        li.selected .tab {
            ${G.boldFont};
            cursor: default;
        }

        li.selected {
            border-color: ${$.pageInteraction.foregroundColor};
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
    `,renderCallback({inputs:e,dispatch:t,events:n}){const r=e.tabs.map(i=>{var l;const o=i.value===e.value,a=i.icon?h`
                      <${O.assign({icon:i.icon})}></${O}>
                  `:"",s=i.label?h`
                      <${Br.assign({text:i.label})}></${Br}>
                  `:"";return h`
                <li
                    ${$f("tab")}
                    role="presentation"
                    class=${se({selected:o})}
                >
                    <${Ge.assign({url:((l=i.link)==null?void 0:l.url)||"",linkType:Pe.RouteLink})}
                        class="tab ${se({"disabled-tab":!!i.disabled})}"
                        role="tab"
                        title=${i.label}
                        aria-selected=${o?"true":"false"}
                        ${T("click",c=>{var d;o||po(c)&&((d=i.link)!=null&&d.route&&t(new n.routeChange(i.link.route)),t(new n.valueChange(i.value)))})}
                    >
                        <div class="tab-content">${a} ${s}</div>
                    </${Ge}>
                </li>
            `});return h`
            <ul role="tablist">
                ${r}
                <li></li>
            </ul>
        `}});const a1="modulepreload",s1=function(e){return"/bitgen/"+e},vs={},l1=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=s1(o),o in vs)return;vs[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let d=i.length-1;d>=0;d--){const u=i[d];if(u.href===o&&(!a||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":a1,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((d,u)=>{c.addEventListener("load",d),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})};var ws;(function(e){e.Upper="upper",e.Lower="lower"})(ws||(ws={}));var bs;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(bs||(bs={}));const c1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function d1(e,t){return e?c1.some(n=>{try{return n(e,t)}catch{return!1}}):!1}function u1(e){return!!e&&typeof e=="object"}function ys(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function f1(e,t){let n=!1;const r=ys(e).reduce((i,o)=>{const a=t(o,e[o],e);return a instanceof Promise&&(n=!0),{...i,[o]:a}},{});return n?new Promise(async(i,o)=>{try{await Promise.all(ys(r).map(async a=>{const s=await r[a];r[a]=s})),i(r)}catch(a){o(a)}}):r}function h1(e){return u1(e)&&d1(e,"liveClient")&&te(e.liveClient,"function")}function Ig(e){return{liveClient(){return typeof e=="function"?e():e}}}function m1(e,t){return e.includes(t)}var $s;(function(e){e.Upper="upper",e.Lower="lower"})($s||($s={}));var ks;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(ks||(ks={}));const p1=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function g1(e,t){return e?p1.some(n=>{try{return n(e,t)}catch{return!1}}):!1}const v1=Symbol("set-mock-return-value"),Xr=Symbol("get-last-called-args"),w1=["then","catch","finally"];function Yc(){const e={},t=()=>{};function n(r){return r in e||(e[r]=Yc()),e[r]}return new Proxy(t,{get:(r,i)=>i===Xr?e[Xr]:m1(w1,i)&&!g1(e,i)?void 0:n(i),apply:(r,i,o)=>(e[Xr]=o,n(v1)),set:(r,i,o)=>(e[i]=o,!0),has(r,i){return i in e}})}async function b1(e,t){const n=await e(),r=Object.values(n).find(h1);if(!r)throw new Error(`Failed to find any client definitions exported for client '${t}'`);return await r.liveClient()}function y1({clientImports:e,isTestEnv:t,mockClients:n}){const r={};let i;return Object.entries(e).forEach(([o,a])=>{Object.defineProperty(r,o,{async get(){if(t){if(n&&(i||(i=typeof n=="function"?await n():n),i&&o in i)){const s=i[o];if(!s)throw new Error(`Mock client for '${o}' is not defined.`);return await s}return Yc()}else return await b1(a,o)}})}),r}async function $1(e){return f1(e,async(n,r)=>{try{return await r}catch(i){console.error(`Failed to await client '${String(n)}':`,i);return}})}const k1=y1({clientImports:{collectionStorage:()=>l1(()=>import("./collection-storage.client-5a4d9925.js"),[])},isTestEnv:!1});async function x1(){return $1(k1)}const Ye=vo({tagName:"toniq-error",styles:v`
        :host {
            ${G.boldParagraphFont};
            color: red;
        }
    `,renderCallback(){return h`
            <slot></slot>
        `}});function Kc(e){return Ao[e||Xc].code}const Ao={0:{description:"Starting point; was developed before a live blockchain test.",code:`async function render(size, ...inscriptionIds) {
    try {
        const base64Images = await Promise.all(inscriptionIds.map(async (id) => await getBase64(await (await fetch(\`/content/\${id}\`)).blob())));
        const finalImageUrl = generateCombinedImageUrl(size, base64Images, false);
        const resizeArtifactFix = \`<img class="full-size" onload="this.remove()" src="\${generateCombinedImageUrl(size, base64Images, true)}" />\`;
        return \`<style>body, html {margin: 0; padding: 0; overflow: hidden;} .full-size {position: absolute; opacity: 1; top: calc(100% - 1px); left: calc(100% - 1px);} img {display: block;}</style>\${resizeArtifactFix}<img src="\${finalImageUrl}" />\`;
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
`},1:{description:"First upgrade after blockchain testing. Fixes the rendered image so it fits its container's width.",code:`async function render(size, ...inscriptionIds) {
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
`},2:{description:"Fixes the rendered image so that it fills its containers width but does not grow too tall.",code:`async function render(size, ...inscriptionIds) {
    try {
        const base64Images = await Promise.all(inscriptionIds.map(async (id) => await getBase64(await (await fetch(\`/content/\${id}\`)).blob())));
        const finalImageUrl = generateCombinedImageUrl(size, base64Images, false);
        const resizeArtifactFix = \`<img class="full-size" onload="this.remove()" src="\${generateCombinedImageUrl(size, base64Images, true)}" />\`;
        return \`<style>body, html {margin:0;padding:0;overflow:hidden;display:flex;flex-direction:column;height:100vh;justify-content:center;} .full-size {position: absolute; opacity: 1; top: calc(100% - 1px); left: calc(100% - 1px);} img {display: block;}</style>\${resizeArtifactFix}<img src="\${finalImageUrl}" />\`;
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
`}},Qc=ce(Ao,e=>e),Xc=ne(Ao).slice(-1)[0],ed=Be({name:"",inscriptionId:""}),td=Be({type:"",traits:[ed]}),nd=Be({editId:"",ids:{collectionImageInscriptionId:"",collectionJsonInscriptionId:"",rendererJavascriptInscriptionId:"",collectionJavascriptInscriptionId:"",bitcoinAddress:""},selectedRenderer:vu(Qc),size:{width:200,height:200},selectedTraits:[xe(void 0,null,0)],collection:{name:"",description:"",creator:""},layers:[td]});function rd(){return{...nd.defaultValue,editId:fr(16)}}const xs=Be([nd]);function Co(e){return Bd(e.layers,t=>({...t,traits:t.traits.filter(n=>!!n.inscriptionId)}),t=>t.traits.some(n=>!!n.inscriptionId))}function T1(){return[{editId:fr(16),ids:{collectionJsonInscriptionId:"4224aa2c2d1b2996b5fdd7b59607eb502059ecf2a5ef68f84ade795c4fb53ef5i0",rendererJavascriptInscriptionId:"0e10e346ae3f39b5184b833489feb7d1ffc305f676eeb132c2510d033d636350i0",collectionImageInscriptionId:"143ee69b6e790e06c666c7d0104d46ee014197395662e70c55039a7b150075a1i0",collectionJavascriptInscriptionId:"dd3716ea72d4ea97f7c7439a9acf81441fd4714936afdc9cb7d81a1e6675ce2ai0",bitcoinAddress:""},selectedRenderer:Xc,selectedTraits:[0,0,0,0,0,0,0,0,-1],size:{width:150,height:150},collection:{name:"Goated Gamer",description:"Goated Gamer is a gaming community with plenty of opportunities to participate in leagues and tournaments. The collection also doubles as art that can forever be inscribed to Bitcoin. First collection to use the BitGen standard, and the first big collection size of Goats on Ordinals.",creator:"Goated Gamer"},layers:[{type:"Background",traits:[{name:"Yellow",inscriptionId:"a939213b63893b6896e32d1825b257358a449daf4fb56d2e5575823cea905995i0"},{name:"Red",inscriptionId:"3c8b0fcf6d827e41a55cd273e818e897d72747d4970f14ff9c6c1f6bc0abb694i0"},{name:"Rainbow Dark",inscriptionId:"b801217e1fc743e2b1089a4ab5e7b857a871543c71f2f4916d691493b7cc9778i0"},{name:"Purple",inscriptionId:"7df2847192844004c900dcf24e06138f0063bb38c1740b2eaef4b12275b6a2b9i0"},{name:"Orange",inscriptionId:"a9b13b78aae2e662f3a73aa1a3492019c6c95ddf882df5859b411e92502140afi0"},{name:"Light Blue",inscriptionId:"f69b2524582545d7438c65816c5eb16606ae9f870514155c4a4138626f3a8a9fi0"},{name:"Green",inscriptionId:"b9f3a2b96e566eb983d5604ed7a4f81a015b1e1e0aa4bbee858c18697a39448bi0"},{name:"Gold",inscriptionId:"5f62a2b6ab4f5cca2fe92491c24f95ce1322da9910768635ffe52dce9293d332i0"},{name:"BTC Orange",inscriptionId:"8ba759876fc63e156c3f1de1b2a9cc38d0009c222d2b700f8d63126b87cd9084i0"},{name:"Blue",inscriptionId:"206b7b809f781a19fe0ebac10b862d608f7420499110123b11ef70e76595408ei0"},{name:"Black",inscriptionId:"aa80a321d8c120184eaa8fbcb8db80b9131db31df680a37148250fca6a3c080ai0"}]},{type:"Back",traits:[{name:"Sword",inscriptionId:"dc93dd4c27ab7785a22b7b0c864a7fb330824803d465c16d26362dfadcbbdb62i0"},{name:"None",inscriptionId:"d631b53bbded9d73f25abf46328bc92661d2e661df390ce76e841f3814592e62i0"},{name:"Golden Sword",inscriptionId:"339d6aa8c2717b0c8458e2f513ac10b63d463f4867a388d588f108825e32a25ci0"}]},{type:"Skin",traits:[{name:"Regular",inscriptionId:"92b79ad4dbb968fef619200f1e40fe093f3bf72e156b297782205824d65b0f6bi0"},{name:"Purple",inscriptionId:"459ed35677c1cb80d2aaf0d3f7e7bd249aa01336b6665cfabee675dd43d06453i0"},{name:"Robot",inscriptionId:"7a5b17c4e839d05f8c7e2538d47e439d47a3578017a9f94963f3d9e618bbb431i0"},{name:"Light",inscriptionId:"4cbd41c7965debdbf3ba1a6baa077054a454e3961c587d4512811d48fb62f799i0"},{name:"Green",inscriptionId:"32344a7730311196d6ef7a5f58317859fb9c0772af78f92dcfda620076946f36i0"},{name:"Gold",inscriptionId:"6d124041178fe34a0870fe1f66b26829d2a6536b775fd53e9c6423f79109f840i0"},{name:"Dark",inscriptionId:"2cffd4eea334e0fca466a208614783c131679a5efff463887b155c045c2509d3i0"},{name:"Dark Brown",inscriptionId:"5a6d1c54ec328daa59ba26e6b4359de9f8067ad1aac4c5b02bd8cc231dc114a3i0"},{name:"Cyber",inscriptionId:"c1983eb050224b0272c114479aba00764b4c4e4afe21f3e752b359d2a3411503i0"},{name:"Brown",inscriptionId:"75b5d19d270f56a82355de299f188288c201eef228ccf1e8dfe1fa5fcfafea70i0"},{name:"Blue",inscriptionId:"2bfc28621460b0712bfc0459a45fe409119b5f0896f1b7e29d33a0101105e8c9i0"},{name:"Black",inscriptionId:"c2465639d62431df13d40f58a8d7b8cc9c54df59612e8d9e6e334ee99d9897edi0"}]},{type:"Clothing",traits:[{name:"Wizard Robes",inscriptionId:"061209dcca5f4ad1fa93ca96a21e8c2f3d7675a0345f85d82c36ddab37ef915ci0"},{name:"TB Jersey",inscriptionId:"be2b7a841244593fc2d39fb28fdd26d11ac745a9ef0552e8bdb6df77fbf44312i0"},{name:"Silver Chain",inscriptionId:"cb4f718cb61262745fc7cdd7cb9e0cc78cb83d91733f1213f3b3574540897bbbi0"},{name:"Oversized Sweater",inscriptionId:"fc077ffca0b2199b5b750173f871a8a2388470f8dabe100aa26367b4c96caadci0"},{name:"None",inscriptionId:"6ca5ae60918215e502f7f8d9c634cb1fb1dcc6b58e5dd2dc3086704b51462f28i0"},{name:"MJ Jersey",inscriptionId:"5403119bcaeec24262e0079253b4dd791f4135b6aee32d682e71df06e89d7de4i0"},{name:"M Jersey",inscriptionId:"4705badf4afa9ed969db488512a7f4ec09a059006016e72751132f39afdc576di0"},{name:"Infinity",inscriptionId:"fae7db6637690c48d9f5e5ff8b9b7aae0ec92a0bdb39e96a84acdc1ce56ad729i0"},{name:"Gold Chain",inscriptionId:"1b1a4db1a0a6239e210061f68c6b9fe6f80a9dd6ebccd4b1ac7c5b001b9bedd6i0"},{name:"Gamer Shirt",inscriptionId:"4cce77d1f67fab7a46f60ba2b8962bb9e7749b5c9ddc7cc3100a7e9d02b8b3e0i0"},{name:"G Jacket",inscriptionId:"ba456b9bf33ad041625d2758e257a052f57bda462a4b67eb7fbc217a9bbcbbf5i0"},{name:"G Chain",inscriptionId:"383ef96ed2987bae7e2b358a6cf82f63b06054c69c6b05a2fbd973a6fc519cc9i0"},{name:"Demon Slayer",inscriptionId:"ba3a6061a8230039d780aae07414511ac1aacd90f5302726f7cac6e435e524f8i0"},{name:"BTC Shirt",inscriptionId:"1b965c467fe36cf36a53241eb69b1010889ed5364ce69cee2f273a49f5595704i0"},{name:"BTC Jersey",inscriptionId:"9f0aa2de3ab418d9eb09dc8fc84598a9460268956a99fb057c64ee9ab3b1d917i0"}]},{type:"Accessory",traits:[{name:"White Beard",inscriptionId:"7c5385db5f6fb325e5cd54fbc9b43bba229828bba318a4e6b9690b8f3f005bf8i0"},{name:"Tongue",inscriptionId:"c7ad038d305adb1b206665a9f6b3aceca2e33fedda86b68d561dc9f41b1ceaf2i0"},{name:"Smile",inscriptionId:"d034a3acd983735f448ed41ffff8a78565f760a497dbe1df57547f0249ba3fa5i0"},{name:"Pizza",inscriptionId:"736fa08a37a02efd51c107038e3da7f9969b451670d6ca32621c80aea4cee46ai0"},{name:"None",inscriptionId:"407ee0f34c5c78bb5675d0650f8f4afc62bb4768cb5d6b6fa09ee006836d4b5di0"},{name:"Laptop",inscriptionId:"7a5592276b52e08130a01a41b4202c03de375dedccffa1204bd7919d098781d2i0"},{name:"Joint",inscriptionId:"78b5659a3bfeb88c04f21daf6b9558ca4864566d9e3e461d73dc587bef85323ei0"},{name:"Hay",inscriptionId:"c033aa4943949bbb33ce711bc0b535fb86b05fcd969b1c1fdd28e6ed394b6dc7i0"},{name:"Gamer Laptop",inscriptionId:"6fd2e8c7d11e9492f4959bf279f8bb9caa3c03707d3d16480e0d73c369ae9a46i0"},{name:"Frown",inscriptionId:"2706e2bfd663f727ec32b727c9ef1c939f624804c58f1abc146f6076677c6e4ci0"},{name:"Cigarette",inscriptionId:"576f4c43764803e433e032a5cbeab269975c4f8abfc6d0cb059ba8d2fcc5630ai0"},{name:"Banana",inscriptionId:"099f4c0870e802249299a54a7bb003e8d4fc6fd7d1bc926dcfa33530c9b1e0a6i0"}]},{type:"Eyes",traits:[{name:"VR",inscriptionId:"3efbd427db22d5b8a31bc93c95ad2faf10de09dd1fa47c84b5cec64446e258bbi0"},{name:"Shutter Shades",inscriptionId:"18f4c5eb99e7c7c1bab13cc39385ab481af46f8334bc200011a5a3d99a3ca8e2i0"},{name:"Shocked",inscriptionId:"28d79f52dcf29f8925c180db79c53515ee7b6e9ff4dc755907bb59f00aa56bfdi0"},{name:"Shades",inscriptionId:"efc16d24604a222403a9a4a982d594ad40ad6ac04798c337593dcbbb0f27dda5i0"},{name:"Scout Eye",inscriptionId:"185c2496a70f57813c192939de9c01107e4b2d8fe37a4ec576caad6c271cfc99i0"},{name:"Pit Vipers",inscriptionId:"7ac97a794a47d27f3948da502e27dfda3d9c8f13fb528ea57ba35db1761f9e0ei0"},{name:"None",inscriptionId:"428d1b98f26f039bc48357d4e40bfda78bfd0a5ba9e70e2f29fd31506e9b5843i0"},{name:"Hyper Specs",inscriptionId:"00ea4adfa89596d49243cfd5ddc5f9016e96486579de823d3093ac6ffc422342i0"},{name:"Golden Shades",inscriptionId:"6123afe52757c95db30b4ef6478e735182ad29b561e4bb81fd9fb6a8d04a4b0bi0"},{name:"Gamer Glasses",inscriptionId:"0897d557f2d2d8d6102eb689aac7eea420bc22a24b9a5e56c644e74e36bce6f9i0"},{name:"Eyepatch",inscriptionId:"d04a2894e23aefe6fbb9b49207508ad80cb937946dfecb3fddb6c72aea7b9b09i0"},{name:"Cyber Visor",inscriptionId:"431ad1097621f1a84e84481d39e33cf51ee00c80a0ced36b2cf3666bc1ea267ai0"},{name:"Crying",inscriptionId:"e6925c5edb968f5af1d60ab7b8960509e6fdb30522db81b53bc01c3435ccc9a9i0"}]},{type:"Ear",traits:[{name:"Silver Hoops",inscriptionId:"5a025762b2ba51368c47854b364a6ad8f100c5295d23f3f7ce82fe9cfb85cc94i0"},{name:"None",inscriptionId:"557c28f876804877fbc9990c5795934ba5bf20a705a287257c17cd60a82826c7i0"},{name:"Gold Hoop",inscriptionId:"134f9c175740511a95dfae4a6d992cb9ab27d6b9368939a8fbe9b017d62e5966i0"},{name:"G Earring",inscriptionId:"bb076ef516a9d8fc9d13c0212a12ac627517fc52b4a741d098bbc627c32f5d61i0"},{name:"Controller",inscriptionId:"fec513b363cfcc02833077ab135e4211d8cb5331075821bf7004be74370ad839i0"}]},{type:"Head",traits:[{name:"Wizard Hat",inscriptionId:"44025439ed3ce7e6c7d118b4fbead08205d00688e046ef3f5fa4a45c17ee77c9i0"},{name:"Sweatband",inscriptionId:"280d4ca3bd91db02b115df76f4e7b2cad1b830ec0673e8d9f81f9e902a1f0c30i0"},{name:"None",inscriptionId:"307f1cbd5b91463ad884b23d5ee6dde97ee810c2bb5574191c9aa1968f3a6938i0"},{name:"Mohawk",inscriptionId:"20dd15043aa5f92137ff04ec88c954c6201d9407bc220562258fde750aeb1c5bi0"},{name:"Headset",inscriptionId:"d0d28254cb8f4241a785cad71f299ace5e15a0b63727c4d3856e39b7bed894a1i0"},{name:"Headphones",inscriptionId:"01f0041882cf9f7fb1e3402c2f49cf96d32cd3071a1f21c77a1f56ea45eda34di0"},{name:"Halo",inscriptionId:"768d1fee2af8ef0c36b9619e1f37765c8a98fdbf33386c65e17b66646819bf16i0"},{name:"Hair Sweatband",inscriptionId:"9770e8243bb77ff911849cc5ac803e74af2198c2785fbaab210616ddb41453dbi0"},{name:"Golden Horns",inscriptionId:"fa83bf1b26a45a554a59f9a861c8ef4f9411e09196a9d224d9f45b49e7ede05fi0"},{name:"G Cap",inscriptionId:"b50d394e4733d60e8853c1d3884e5648cebeab82d16471111819eddacb70c200i0"},{name:"Floating Diamond",inscriptionId:"71a7671c5a80dae0201c273c0b2b926433f0a9ba7e2a6c8b83600f77c6814351i0"},{name:"Durag",inscriptionId:"9062f18627624ca00bc80de8c5ae5c91631bc1df1ad3a83ce3928967a3fb2797i0"},{name:"Devil",inscriptionId:"9002c4f5aedadc052cbbc53db184050d4e8fb32ae1909766f2721e1bb521a956i0"},{name:"Crown",inscriptionId:"8118c913818608bf034fc769a019b146a8e22fc1ef2f26b9e6f8695c9aea56aci0"},{name:"Chef",inscriptionId:"44be7379154a9b2b70d55fd83f85ccd843f450e224671572f3e7119e32ebb2fci0"},{name:"Bucket Hat",inscriptionId:"b2cadd4e3758122b45b108da7577540aa169f7e093af73b49b39babb851207bai0"}]},{type:"1 of 1s",traits:[{name:"1-of-1",inscriptionId:"288fdae86d56ad4167f1c4915e1f0ab0b0772c1f11a14d56f1b83bd3ae93bae6i0"},{name:"1-of-1",inscriptionId:"143ee69b6e790e06c666c7d0104d46ee014197395662e70c55039a7b150075a1i0"},{name:"1-of-1",inscriptionId:"62d1d4846d23501977e5d2a8623c2b450b73bf6d3814c1c307a279f2e5a7bf74i0"},{name:"1-of-1",inscriptionId:"8bd97d0798c69058add71a96720d9a41091d1a4d12e1fcfd8269716ee93d326fi0"},{name:"1-of-1",inscriptionId:"c7459f48bf9574ba0d95d8228e42f6ce19682e68f5a5758e55fb29faf3d9526ei0"},{name:"1-of-1",inscriptionId:"4d1e307da566200560989a801973d75376247d323c52b1e435ec4957bb579846i0"},{name:"1-of-1",inscriptionId:"c89f4117cf99250b528fe3e28a6a08fa4835524f928ea23751f27bdd4e479f42i0"},{name:"1-of-1",inscriptionId:"2999493856ebb32d539966aeaf7dff9f6872891c8d6a8df25fdf277add59941ai0"}]}]},rd()]}const Mo=fo()("bitgen-collection-change"),Ts=$.pageInteraction.foregroundColor,Ss=$.accentSecondary.backgroundColor,kr=v`
    /* Firefox */
    * {
        scrollbar-width: auto;
        scrollbar-color: ${Ts} ${Ss};
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: ${Ss};
        border-radius: 8px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${Ts};
        border-radius: 8px;
    }
`;function id(e){return{collection:{...e.collection,collectionImageInscriptionId:e.ids.collectionImageInscriptionId},layers:Co(e)}}function S1(e){const t=e.selectedRenderer;return[{title:"Inscription HTML",subtitle:"Example inscription with current trait selection.",code:ad(e)},{title:"Collection JSON",code:JSON.stringify(id(e),null,4)},{title:"Collection JS",code:sd(e)},{title:"Provenance JSON",code:JSON.stringify({bitcoinAddress:e.ids.bitcoinAddress||"BITCOIN-ADDRESS-HERE",collectionJsonInscriptionId:e.ids.collectionJsonInscriptionId||"COLLECTION-JSON-INSCRIPTION-ID-HERE",excludeInscriptions:["EXCLUDE-INSCRIPTIONS-HERE"]},null,4)},{title:`Renderer JS (v${t})`,subtitle:"This will never change (unless you select a different renderer version). You can inscribe this once for all BitGen collections you ever make or use an already-inscribed copy (at your own risk).",code:Kc(t)}]}function od(e,t){return e.layers.map((n,r)=>{const i=e.selectedTraits[r]??0;return i<0?t?" ":"":String(i)}).join(",")}function ad(e){const t=od(e,!1),n=e.ids.collectionJavascriptInscriptionId||"COLLECTION-JS-INSCRIPTION-ID-HERE";return`<script t="${t}" src="/content/${n}"><\/script>`}function sd(e){const t=e.ids.collectionJsonInscriptionId||"COLLECTION-JSON-INSCRIPTION-ID-HERE",n=e.ids.rendererJavascriptInscriptionId||"RENDERER-JS-INSCRIPTION-ID-HERE";return`const myValues = {
    collectionJsonInscriptionId: '${t}',
    rendererJsInscriptionId: '${n}',
    renderSize: {width: ${e.size.width}, height: ${e.size.height}},
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
                const collectionMetadata = await collectionMetadataPromise;
                
                const traitInscriptionIds = inscriptionTraitsList.map(
                    (traitIndex, layerIndex) =>
                        collectionMetadata.layers[layerIndex]?.traits[traitIndex]?.inscriptionId,
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

createInscriptionHtml().then((result) => {document.body.innerHTML = result});
`}const Es=P()({tagName:"toniq-bitgen-collection-code",styles:v`
        ${kr}

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

        ${_} {
            position: absolute;
            top: 4px;
            right: 4px;
            width: 32px;
            height: 32px;
        }

        p {
            ${He};
        }

        .subtitle {
            color: ${$.pageSecondary.foregroundColor};
        }
    `,renderCallback({inputs:e}){const n=S1(e.bitgenCollection).map(r=>{const i=r.subtitle?h`
                      <p class="subtitle">${r.subtitle}</p>
                  `:j;return h`
                <div class="code-block">
                    <${z.assign({level:Y.H4})}>
                        ${r.title}
                    </${z}>
                    ${i}
                    <div class="code-wrapper">
                        <${_.assign({icon:Rl,variant:le.Secondary})}
                            ${T("click",async()=>{await navigator.clipboard.writeText(r.code)})}
                        ></${_}>
                        <pre>${r.code}</pre>
                    </div>
                </div>
            `});return h`
            <${z.assign({level:Y.H3})}>
                Code
            </${z}>
            ${n}
        `}}),E1="https://cdn-bitcoin.bioniq.io/view",ld="https://cdn-bitcoin.bioniq.io/content";var Is=Object.freeze,I1=Object.defineProperty,A1=(e,t)=>Is(I1(e,"raw",{value:Is(t||e.slice())})),As;const tn=P()({tagName:"toniq-bitgen-frame",styles:v`
        :host {
            display: flex;
        }

        iframe {
            border: none;
        }
    `,renderCallback({inputs:e}){const t=C1(e.bitgenCollection),n=v`
            width: ${e.size.width}px;
            height: ${e.size.height}px;
        `;return h`
            <iframe style=${n} srcdoc=${t}></iframe>
        `}});function C1(e){const t=ad(e).replaceAll("<","\\<").replaceAll(">","\\>"),n=JSON.stringify(id(e)),r=sd(e).replace(/rendererScript\.src = [^;]+;/,`rendererScript.innerHTML = '${Kc(e.selectedRenderer).replaceAll("'","\\'")}';`).replace("return await renderPromise;","setTimeout(() => rendererScript.dispatchEvent(new Event('load'))); return await renderPromise;"),i=h(As||(As=A1([`
        <script>
            const originalFetch = window.fetch;
            window.fetch = (url) => {
                if (url.includes('COLLECTION-JSON')) {
                    return {
                        then(callback) {
                            return JSON.parse('`,`');
                        },
                    };
                }
                const fixedUrl = url.replace('/content', '`,`');
                return originalFetch(fixedUrl);
            };
            const inscriptionScriptElement = document.createElement('script');
            document.head.appendChild(inscriptionScriptElement);
            inscriptionScriptElement.outerHTML = '`,`';

            /* prettier-ignore */
            `,`
        <\/script>
    `])),n,ld,t,r);return $n(i)}const ei=P()({tagName:"toniq-bitgen-trait-selector",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            min-width: 200px;
        }

        p {
            ${He};
        }
    `,events:{valueChange:q()},stateInitStatic:{error:void 0},renderCallback({inputs:e,state:t,updateState:n,dispatch:r,events:i}){const o=[{label:"Omit",value:-1}].concat(e.layer.traits.map((s,l)=>({label:[l,s.name].join(": "),value:l}))),a=o.find(s=>s.value===e.selectedTraitIndex);return h`
            <label>
                <p>${e.layer.type}</p>
                <${ht.assign({options:o,value:a})}
                    ${T(ht.events.selectChange,s=>{r(new i.valueChange(s.detail.value))})}
                ></${ht}>
            </label>
        `}}),Cs=P()({tagName:"toniq-bitgen-traits-selection",styles:v`
        :host {
            display: flex;
            flex-direction: column;
        }

        .traits {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
    `,renderCallback({inputs:e,dispatch:t}){const r=Co(e.bitgenCollection).map((i,o)=>{const a=e.bitgenCollection.selectedTraits[o]??0;return h`
                <${ei.assign({selectedTraitIndex:a,layer:i})}
                    ${T(ei.events.valueChange,s=>{const l=ur(e.bitgenCollection);l.selectedTraits[o]=s.detail,t(new Mo(l))})}
                ></${ei}>
            `});return h`
            <section class="traits">${r}</section>
        `}}),Ms=P()({tagName:"toniq-bitgen-collection-examples-display",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .examples {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        .example {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        ${tn} {
            border: 2px solid #ccc;
        }

        p {
            ${He};
        }
    `,stateInitStatic:{randomizedTraits:[],cleanup:()=>{}},initCallback({updateState:e,inputs:t}){function n(){const i=Co(t.bitgenCollection),o=Array(t.randomFrameCount).fill(0).map(()=>i.map(a=>ou({min:-1,max:a.traits.length-1})));e({randomizedTraits:o})}n();const r=globalThis.setInterval(n,1e3);e({cleanup:()=>{globalThis.clearInterval(r)}})},cleanupCallback({state:e}){e.cleanup()},renderCallback({inputs:e,state:t}){const r=M1(e.bitgenCollection).map(o=>h`
                <div class="example">
                    <${z.assign({level:Y.H4})}>
                        ${o.title}
                    </${z}>
                    <${tn.assign({bitgenCollection:e.bitgenCollection,size:o.size})}></${tn}>
                </div>
            `),i=t.randomizedTraits.map(o=>{const a={...e.bitgenCollection,selectedTraits:o};return h`
                <div class="example">
                    <p>${od(a,!0)}</p>
                    <${tn.assign({bitgenCollection:a,size:e.bitgenCollection.size})}></${tn}>
                </div>
            `});return h`
            <${z.assign({level:Y.H3})}>
                Examples
            </${z}>
            <${Cs.assign({bitgenCollection:e.bitgenCollection})}></${Cs}>
            <section class="examples">${r}</section>
            <${z.assign({level:Y.H4})}>
                Randomized
            </${z}>
            <section class="examples">${i}</section>
        `}});function M1(e){return[{title:"Exact Size",size:e.size},{title:"1:1",size:{width:300,height:300}},{title:"2:1",size:{width:400,height:200}},{title:"1:2",size:{width:200,height:400}}]}const Ls=gr({tagName:"toniq-bioniq-frame-error",styles:v`
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

        ${O} {
            height: 100%;
            width: 100%;
        }
    `,renderCallback(){return h`
            <div class="wrapper">
                <div class="icon-wrapper">
                    <${O.assign({icon:th,fitContainer:!0})}></${O}>
                </div>
                <p class="description">This image shows no signs of life.</p>
            </div>
        `}});var B;(function(e){e.Html="html",e.Json="json",e.Svg="svg",e.Text="text",e.Audio="audio",e.Image="image",e.Pdf="pdf",e.Video="video"})(B||(B={}));B.Html,B.Json,B.Svg,B.Text;const fn=84,Os=1,hn={min:0,max:8},L1=v`
    @import url('./index.css');

    html.nft-type-${S(B.Audio)} body {
        background: rgba(138, 43, 226, 0.04);
    }

    html.nft-type-${S(B.Audio)} body audio {
        visibility: hidden;
        z-index: -1;
    }

    html.nft-type-${S(B.Audio)} body .audio-overlay-wrapper {
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
        ${X}
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
        ${X}
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
        transform: rotate(calc(${360/fn}deg * var(--wave-index, 1)));
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
`;function O1(e){return e<=0?h``:Array(e).fill(0).map((t,n)=>h`
                <div
                    class="sound-wave-wrapper"
                    style=${v`
                        --wave-index: ${n};
                    `}
                >
                    <div class="sound-wave"></div>
                </div>
            `)}function N1(){const t=(hn.max-hn.min)/(fn-1);let n=hn.min;return new Array(fn).fill(0).map((r,i)=>(i+1<fn/2?n+=t:n-=t,n.toFixed(1)))}const P1=h`
    <style>
        ${L1}
    </style>
    <div class="audio-overlay-wrapper">
        <div class="audio-overlay">
            <button class="play-toggle-button">
                <img class="play-toggle-icon" src="./images/audio/bioniq-play.svg" />
            </button>
            <div class="play-animation">${O1(fn)}</div>
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
`,q1=$n(P1).replace(/\n+/g," ").replace(/'/g,"\\'");var zs;const D1=h(zs||(zs=Ro([`
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
`])),B.Audio,q1,N1().join(", "),hn.min,hn.max,Os,Os),Ue=Re({"nft-text-color":"black","nft-background-color":"white"}),B1=h`
    <div class="text-overflow-overlay"></div>
    <style>
        ${v`
            html.nft-type-${S(B.Text)} {
                ${Ue["nft-text-color"].name}: black;
                ${Ue["nft-background-color"].name}: #fffef4;
            }
            html.nft-type-${S(B.Json)} {
                ${Ue["nft-text-color"].name}: #c475fa;
                ${Ue["nft-background-color"].name}: black;
            }

            html.nft-type-${S(B.Text)} body,
            html.nft-type-${S(B.Json)} body {
                font-family: 'Inconsolata', monospace;
                font-size: 1.2em;
            }

            html.nft-type-${S(B.Text)} .text,
            html.nft-type-${S(B.Json)} .text {
                padding: 20px;
                padding-bottom: 30px;
            }

            html.nft-type-${S(B.Text)},
                html.nft-type-${S(B.Json)} {
                background-color: ${Ue["nft-background-color"].value};
                color: ${Ue["nft-text-color"].value};
            }

            .text-overflow-overlay {
                display: none;
            }

            html.nft-type-${S(B.Text)} .text-overflow-overlay {
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

            html.nft-type-${S(B.Json)} .text-overflow-overlay {
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
                scrollbar-color: #8a2be2 ${Ue["nft-background-color"].value};
            }

            /* Chrome, Edge, and Safari */
            *::-webkit-scrollbar {
                width: 8px;
                height: 8px;
            }

            *::-webkit-scrollbar-track {
                background: ${Ue["nft-background-color"].value};
                border-radius: 8px;
            }

            *::-webkit-scrollbar-thumb {
                background-color: #8a2be2;
                border-radius: 8px;
            }
        `}
    </style>
`,_1={bioniq:$n(h`
        ${B1} ${D1}
    `)};function R1(e){const t=e.trim().toLowerCase();return!!t.match(/\<\w+/)||t.startsWith("<!doctype html>")}function H1(e){return e.trim().toLowerCase().startsWith("<svg")}function F1(e){try{return JSON.parse(e),!0}catch{return!1}}B.Svg,B.Html,B.Json;function V1(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch{return}}var Ht=V1();function z1(){try{if(!Ht||!Ht.open)return!1;var e=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!e||t)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch{return!1}}function Lo(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if(o.name!=="TypeError")throw o;for(var n=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,r=new n,i=0;i<e.length;i+=1)r.append(e[i]);return r.getBlob(t.type)}}typeof Promise>"u"&&require("lie/polyfill");const E=Promise;function W(e,t){t&&e.then(function(n){t(null,n)},function(n){t(n)})}function Lt(e,t,n){typeof t=="function"&&e.then(t),typeof n=="function"&&e.catch(n)}function Fe(e){return typeof e!="string"&&(console.warn(`${e} used as a key, but it is not a string.`),e=String(e)),e}function Oo(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}const Bi="local-forage-detect-blob-support";let Fn;const we={},W1=Object.prototype.toString,On="readonly",xr="readwrite";function j1(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function U1(e){return new E(function(t){var n=e.transaction(Bi,xr),r=Lo([""]);n.objectStore(Bi).put(r,"key"),n.onabort=function(i){i.preventDefault(),i.stopPropagation(),t(!1)},n.oncomplete=function(){var i=navigator.userAgent.match(/Chrome\/(\d+)/),o=navigator.userAgent.match(/Edge\//);t(o||!i||parseInt(i[1],10)>=43)}}).catch(function(){return!1})}function Z1(e){return typeof Fn=="boolean"?E.resolve(Fn):U1(e).then(function(t){return Fn=t,Fn})}function lr(e){var t=we[e.name],n={};n.promise=new E(function(r,i){n.resolve=r,n.reject=i}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function _i(e){var t=we[e.name],n=t.deferredOperations.pop();if(n)return n.resolve(),n.promise}function Ri(e,t){var n=we[e.name],r=n.deferredOperations.pop();if(r)return r.reject(t),r.promise}function cd(e,t){return new E(function(n,r){if(we[e.name]=we[e.name]||hd(),e.db)if(t)lr(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var o=Ht.open.apply(Ht,i);t&&(o.onupgradeneeded=function(a){var s=o.result;try{s.createObjectStore(e.storeName),a.oldVersion<=1&&s.createObjectStore(Bi)}catch(l){if(l.name==="ConstraintError")console.warn('The database "'+e.name+'" has been upgraded from version '+a.oldVersion+" to version "+a.newVersion+', but the storage "'+e.storeName+'" already exists.');else throw l}}),o.onerror=function(a){a.preventDefault(),r(o.error)},o.onsuccess=function(){var a=o.result;a.onversionchange=function(s){s.target.close()},n(a),_i(e)}})}function No(e){return cd(e,!1)}function Po(e){return cd(e,!0)}function dd(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+`" can't be downgraded from version `+e.db.version+" to version "+e.version+"."),e.version=e.db.version),i||n){if(n){var o=e.db.version+1;o>e.version&&(e.version=o)}return!0}return!1}function G1(e){return new E(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(i){var o=btoa(i.target.result||"");t({__local_forage_encoded_blob:!0,data:o,type:e.type})},r.readAsBinaryString(e)})}function ud(e){var t=j1(atob(e.data));return Lo([t],{type:e.type})}function fd(e){return e&&e.__local_forage_encoded_blob}function J1(e){var t=this,n=t._initReady().then(function(){var r=we[t._dbInfo.name];if(r&&r.dbReady)return r.dbReady});return Lt(n,e,e),n}function Y1(e){lr(e);for(var t=we[e.name],n=t.forages,r=0;r<n.length;r++){const i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,No(e).then(i=>(e.db=i,dd(e)?Po(e):i)).then(i=>{e.db=t.db=i;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=i}).catch(i=>{throw Ri(e,i),i})}function Ve(e,t,n,r){r===void 0&&(r=1);try{var i=e.db.transaction(e.storeName,t);n(null,i)}catch(o){if(r>0&&(!e.db||o.name==="InvalidStateError"||o.name==="NotFoundError"))return E.resolve().then(()=>{if(!e.db||o.name==="NotFoundError"&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Po(e)}).then(()=>Y1(e).then(function(){Ve(e,t,n,r-1)})).catch(n);n(o)}}function hd(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function K1(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=we[n.name];i||(i=hd(),we[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=J1);var o=[];function a(){return E.resolve()}for(var s=0;s<i.forages.length;s++){var l=i.forages[s];l!==t&&o.push(l._initReady().catch(a))}var c=i.forages.slice(0);return E.all(o).then(function(){return n.db=i.db,No(n)}).then(function(d){return n.db=d,dd(n,t._defaultConfig.version)?Po(n):d}).then(function(d){n.db=i.db=d,t._dbInfo=n;for(var u=0;u<c.length;u++){var m=c[u];m!==t&&(m._dbInfo.db=n.db,m._dbInfo.version=n.version)}})}function Q1(e,t){var n=this;e=Fe(e);var r=new E(function(i,o){n.ready().then(function(){Ve(n._dbInfo,On,function(a,s){if(a)return o(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.get(e);c.onsuccess=function(){var d=c.result;d===void 0&&(d=null),fd(d)&&(d=ud(d)),i(d)},c.onerror=function(){o(c.error)}}catch(d){o(d)}})}).catch(o)});return W(r,t),r}function X1(e,t){var n=this,r=new E(function(i,o){n.ready().then(function(){Ve(n._dbInfo,On,function(a,s){if(a)return o(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.openCursor(),d=1;c.onsuccess=function(){var u=c.result;if(u){var m=u.value;fd(m)&&(m=ud(m));var p=e(m,u.key,d++);p!==void 0?i(p):u.continue()}else i()},c.onerror=function(){o(c.error)}}catch(u){o(u)}})}).catch(o)});return W(r,t),r}function ep(e,t,n){var r=this;e=Fe(e);var i=new E(function(o,a){var s;r.ready().then(function(){return s=r._dbInfo,W1.call(t)==="[object Blob]"?Z1(s.db).then(function(l){return l?t:G1(t)}):t}).then(function(l){Ve(r._dbInfo,xr,function(c,d){if(c)return a(c);try{var u=d.objectStore(r._dbInfo.storeName);l===null&&(l=void 0);var m=u.put(l,e);d.oncomplete=function(){l===void 0&&(l=null),o(l)},d.onabort=d.onerror=function(){var p=m.error?m.error:m.transaction.error;a(p)}}catch(p){a(p)}})}).catch(a)});return W(i,n),i}function tp(e,t){var n=this;e=Fe(e);var r=new E(function(i,o){n.ready().then(function(){Ve(n._dbInfo,xr,function(a,s){if(a)return o(a);try{var l=s.objectStore(n._dbInfo.storeName),c=l.delete(e);s.oncomplete=function(){i()},s.onerror=function(){o(c.error)},s.onabort=function(){var d=c.error?c.error:c.transaction.error;o(d)}}catch(d){o(d)}})}).catch(o)});return W(r,t),r}function np(e){var t=this,n=new E(function(r,i){t.ready().then(function(){Ve(t._dbInfo,xr,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.clear();a.oncomplete=function(){r()},a.onabort=a.onerror=function(){var c=l.error?l.error:l.transaction.error;i(c)}}catch(c){i(c)}})}).catch(i)});return W(n,e),n}function rp(e){var t=this,n=new E(function(r,i){t.ready().then(function(){Ve(t._dbInfo,On,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.count();l.onsuccess=function(){r(l.result)},l.onerror=function(){i(l.error)}}catch(c){i(c)}})}).catch(i)});return W(n,e),n}function ip(e,t){var n=this,r=new E(function(i,o){if(e<0){i(null);return}n.ready().then(function(){Ve(n._dbInfo,On,function(a,s){if(a)return o(a);try{var l=s.objectStore(n._dbInfo.storeName),c=!1,d=l.openKeyCursor();d.onsuccess=function(){var u=d.result;if(!u){i(null);return}e===0||c?i(u.key):(c=!0,u.advance(e))},d.onerror=function(){o(d.error)}}catch(u){o(u)}})}).catch(o)});return W(r,t),r}function op(e){var t=this,n=new E(function(r,i){t.ready().then(function(){Ve(t._dbInfo,On,function(o,a){if(o)return i(o);try{var s=a.objectStore(t._dbInfo.storeName),l=s.openKeyCursor(),c=[];l.onsuccess=function(){var d=l.result;if(!d){r(c);return}c.push(d.key),d.continue()},l.onerror=function(){i(l.error)}}catch(d){i(d)}})}).catch(i)});return W(n,e),n}function ap(e,t){t=Oo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=E.reject("Invalid arguments");else{const a=e.name===n.name&&r._dbInfo.db?E.resolve(r._dbInfo.db):No(e).then(s=>{const l=we[e.name],c=l.forages;l.db=s;for(var d=0;d<c.length;d++)c[d]._dbInfo.db=s;return s});e.storeName?i=a.then(s=>{if(!s.objectStoreNames.contains(e.storeName))return;const l=s.version+1;lr(e);const c=we[e.name],d=c.forages;s.close();for(let m=0;m<d.length;m++){const p=d[m];p._dbInfo.db=null,p._dbInfo.version=l}return new E((m,p)=>{const g=Ht.open(e.name,l);g.onerror=b=>{g.result.close(),p(b)},g.onupgradeneeded=()=>{var b=g.result;b.deleteObjectStore(e.storeName)},g.onsuccess=()=>{const b=g.result;b.close(),m(b)}}).then(m=>{c.db=m;for(let p=0;p<d.length;p++){const g=d[p];g._dbInfo.db=m,_i(g._dbInfo)}}).catch(m=>{throw(Ri(e,m)||E.resolve()).catch(()=>{}),m})}):i=a.then(s=>{lr(e);const l=we[e.name],c=l.forages;s.close();for(var d=0;d<c.length;d++){const m=c[d];m._dbInfo.db=null}return new E((m,p)=>{var g=Ht.deleteDatabase(e.name);g.onerror=()=>{const b=g.result;b&&b.close(),p(g.error)},g.onblocked=()=>{console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},g.onsuccess=()=>{const b=g.result;b&&b.close(),m(b)}}).then(m=>{l.db=m;for(var p=0;p<c.length;p++){const g=c[p];_i(g._dbInfo)}}).catch(m=>{throw(Ri(e,m)||E.resolve()).catch(()=>{}),m})})}return W(i,t),i}var sp={_driver:"asyncStorage",_initStorage:K1,_support:z1(),iterate:X1,getItem:Q1,setItem:ep,removeItem:tp,clear:np,length:rp,key:ip,keys:op,dropInstance:ap};function lp(){return typeof openDatabase=="function"}var Ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",cp="~~local_forage_type~",Ns=/^~~local_forage_type~([^~]+)~/,cr="__lfsc__:",Hi=cr.length,qo="arbf",Fi="blob",md="si08",pd="ui08",gd="uic8",vd="si16",wd="si32",bd="ur16",yd="ui32",$d="fl32",kd="fl64",Ps=Hi+qo.length,qs=Object.prototype.toString;function xd(e){var t=e.length*.75,n=e.length,r,i=0,o,a,s,l;e[e.length-1]==="="&&(t--,e[e.length-2]==="="&&t--);var c=new ArrayBuffer(t),d=new Uint8Array(c);for(r=0;r<n;r+=4)o=Ke.indexOf(e[r]),a=Ke.indexOf(e[r+1]),s=Ke.indexOf(e[r+2]),l=Ke.indexOf(e[r+3]),d[i++]=o<<2|a>>4,d[i++]=(a&15)<<4|s>>2,d[i++]=(s&3)<<6|l&63;return c}function Vi(e){var t=new Uint8Array(e),n="",r;for(r=0;r<t.length;r+=3)n+=Ke[t[r]>>2],n+=Ke[(t[r]&3)<<4|t[r+1]>>4],n+=Ke[(t[r+1]&15)<<2|t[r+2]>>6],n+=Ke[t[r+2]&63];return t.length%3===2?n=n.substring(0,n.length-1)+"=":t.length%3===1&&(n=n.substring(0,n.length-2)+"=="),n}function dp(e,t){var n="";if(e&&(n=qs.call(e)),e&&(n==="[object ArrayBuffer]"||e.buffer&&qs.call(e.buffer)==="[object ArrayBuffer]")){var r,i=cr;e instanceof ArrayBuffer?(r=e,i+=qo):(r=e.buffer,n==="[object Int8Array]"?i+=md:n==="[object Uint8Array]"?i+=pd:n==="[object Uint8ClampedArray]"?i+=gd:n==="[object Int16Array]"?i+=vd:n==="[object Uint16Array]"?i+=bd:n==="[object Int32Array]"?i+=wd:n==="[object Uint32Array]"?i+=yd:n==="[object Float32Array]"?i+=$d:n==="[object Float64Array]"?i+=kd:t(new Error("Failed to get type for BinaryArray"))),t(i+Vi(r))}else if(n==="[object Blob]"){var o=new FileReader;o.onload=function(){var a=cp+e.type+"~"+Vi(this.result);t(cr+Fi+a)},o.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),t(null,a)}}function up(e){if(e.substring(0,Hi)!==cr)return JSON.parse(e);var t=e.substring(Ps),n=e.substring(Hi,Ps),r;if(n===Fi&&Ns.test(t)){var i=t.match(Ns);r=i[1],t=t.substring(i[0].length)}var o=xd(t);switch(n){case qo:return o;case Fi:return Lo([o],{type:r});case md:return new Int8Array(o);case pd:return new Uint8Array(o);case gd:return new Uint8ClampedArray(o);case vd:return new Int16Array(o);case bd:return new Uint16Array(o);case wd:return new Int32Array(o);case yd:return new Uint32Array(o);case $d:return new Float32Array(o);case kd:return new Float64Array(o);default:throw new Error("Unkown type: "+n)}}var Do={serialize:dp,deserialize:up,stringToBuffer:xd,bufferToString:Vi};function Td(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function fp(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]!="string"?e[r].toString():e[r];var i=new E(function(o,a){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(s){return a(s)}n.db.transaction(function(s){Td(s,n,function(){t._dbInfo=n,o()},function(l,c){a(c)})},a)});return n.serializer=Do,i}function nt(e,t,n,r,i,o){e.executeSql(n,r,i,function(a,s){s.code===s.SYNTAX_ERR?a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],function(l,c){c.rows.length?o(l,s):Td(l,t,function(){l.executeSql(n,r,i,o)},o)},o):o(a,s)},o)}function hp(e,t){var n=this;e=Fe(e);var r=new E(function(i,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){nt(s,a,`SELECT * FROM ${a.storeName} WHERE key = ? LIMIT 1`,[e],function(l,c){var d=c.rows.length?c.rows.item(0).value:null;d&&(d=a.serializer.deserialize(d)),i(d)},function(l,c){o(c)})})}).catch(o)});return W(r,t),r}function mp(e,t){var n=this,r=new E(function(i,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){nt(s,a,`SELECT * FROM ${a.storeName}`,[],function(l,c){for(var d=c.rows,u=d.length,m=0;m<u;m++){var p=d.item(m),g=p.value;if(g&&(g=a.serializer.deserialize(g)),g=e(g,p.key,m+1),g!==void 0){i(g);return}}i()},function(l,c){o(c)})})}).catch(o)});return W(r,t),r}function Sd(e,t,n,r){var i=this;e=Fe(e);var o=new E(function(a,s){i.ready().then(function(){t===void 0&&(t=null);var l=t,c=i._dbInfo;c.serializer.serialize(t,function(d,u){u?s(u):c.db.transaction(function(m){nt(m,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,d],function(){a(l)},function(p,g){s(g)})},function(m){if(m.code===m.QUOTA_ERR){if(r>0){a(Sd.apply(i,[e,l,n,r-1]));return}s(m)}})})}).catch(s)});return W(o,n),o}function pp(e,t,n){return Sd.apply(this,[e,t,n,1])}function gp(e,t){var n=this;e=Fe(e);var r=new E(function(i,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){nt(s,a,`DELETE FROM ${a.storeName} WHERE key = ?`,[e],function(){i()},function(l,c){o(c)})})}).catch(o)});return W(r,t),r}function vp(e){var t=this,n=new E(function(r,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){nt(a,o,`DELETE FROM ${o.storeName}`,[],function(){r()},function(s,l){i(l)})})}).catch(i)});return W(n,e),n}function wp(e){var t=this,n=new E(function(r,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){nt(a,o,`SELECT COUNT(key) as c FROM ${o.storeName}`,[],function(s,l){var c=l.rows.item(0).c;r(c)},function(s,l){i(l)})})}).catch(i)});return W(n,e),n}function bp(e,t){var n=this,r=new E(function(i,o){n.ready().then(function(){var a=n._dbInfo;a.db.transaction(function(s){nt(s,a,`SELECT key FROM ${a.storeName} WHERE id = ? LIMIT 1`,[e+1],function(l,c){var d=c.rows.length?c.rows.item(0).key:null;i(d)},function(l,c){o(c)})})}).catch(o)});return W(r,t),r}function yp(e){var t=this,n=new E(function(r,i){t.ready().then(function(){var o=t._dbInfo;o.db.transaction(function(a){nt(a,o,`SELECT key FROM ${o.storeName}`,[],function(s,l){for(var c=[],d=0;d<l.rows.length;d++)c.push(l.rows.item(d).key);r(c)},function(s,l){i(l)})})}).catch(i)});return W(n,e),n}function $p(e){return new E(function(t,n){e.transaction(function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(i,o){for(var a=[],s=0;s<o.rows.length;s++)a.push(o.rows.item(s).name);t({db:e,storeNames:a})},function(i,o){n(o)})},function(r){n(r)})})}function kp(e,t){t=Oo.apply(this,arguments);var n=this.config();e=typeof e!="function"&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;return e.name?i=new E(function(o){var a;e.name===n.name?a=r._dbInfo.db:a=openDatabase(e.name,"","",0),e.storeName?o({db:a,storeNames:[e.storeName]}):o($p(a))}).then(function(o){return new E(function(a,s){o.db.transaction(function(l){function c(p){return new E(function(g,b){l.executeSql(`DROP TABLE IF EXISTS ${p}`,[],function(){g()},function(x,k){b(k)})})}for(var d=[],u=0,m=o.storeNames.length;u<m;u++)d.push(c(o.storeNames[u]));E.all(d).then(function(){a()}).catch(function(p){s(p)})},function(l){s(l)})})}):i=E.reject("Invalid arguments"),W(i,t),i}var xp={_driver:"webSQLStorage",_initStorage:fp,_support:lp(),iterate:mp,getItem:hp,setItem:pp,removeItem:gp,clear:vp,length:wp,key:bp,keys:yp,dropInstance:kp};function Tp(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch{return!1}}function Ed(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function Sp(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Ep(){return!Sp()||localStorage.length>0}function Ip(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Ed(e,t._defaultConfig),Ep()?(t._dbInfo=n,n.serializer=Do,E.resolve()):E.reject()}function Ap(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo.keyPrefix,i=localStorage.length-1;i>=0;i--){var o=localStorage.key(i);o.indexOf(r)===0&&localStorage.removeItem(o)}});return W(n,e),n}function Cp(e,t){var n=this;e=Fe(e);var r=n.ready().then(function(){var i=n._dbInfo,o=localStorage.getItem(i.keyPrefix+e);return o&&(o=i.serializer.deserialize(o)),o});return W(r,t),r}function Mp(e,t){var n=this,r=n.ready().then(function(){for(var i=n._dbInfo,o=i.keyPrefix,a=o.length,s=localStorage.length,l=1,c=0;c<s;c++){var d=localStorage.key(c);if(d.indexOf(o)===0){var u=localStorage.getItem(d);if(u&&(u=i.serializer.deserialize(u)),u=e(u,d.substring(a),l++),u!==void 0)return u}}});return W(r,t),r}function Lp(e,t){var n=this,r=n.ready().then(function(){var i=n._dbInfo,o;try{o=localStorage.key(e)}catch{o=null}return o&&(o=o.substring(i.keyPrefix.length)),o});return W(r,t),r}function Op(e){var t=this,n=t.ready().then(function(){for(var r=t._dbInfo,i=localStorage.length,o=[],a=0;a<i;a++){var s=localStorage.key(a);s.indexOf(r.keyPrefix)===0&&o.push(s.substring(r.keyPrefix.length))}return o});return W(n,e),n}function Np(e){var t=this,n=t.keys().then(function(r){return r.length});return W(n,e),n}function Pp(e,t){var n=this;e=Fe(e);var r=n.ready().then(function(){var i=n._dbInfo;localStorage.removeItem(i.keyPrefix+e)});return W(r,t),r}function qp(e,t,n){var r=this;e=Fe(e);var i=r.ready().then(function(){t===void 0&&(t=null);var o=t;return new E(function(a,s){var l=r._dbInfo;l.serializer.serialize(t,function(c,d){if(d)s(d);else try{localStorage.setItem(l.keyPrefix+e,c),a(o)}catch(u){(u.name==="QuotaExceededError"||u.name==="NS_ERROR_DOM_QUOTA_REACHED")&&s(u),s(u)}})})});return W(i,n),i}function Dp(e,t){if(t=Oo.apply(this,arguments),e=typeof e!="function"&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i;return e.name?i=new E(function(o){e.storeName?o(Ed(e,r._defaultConfig)):o(`${e.name}/`)}).then(function(o){for(var a=localStorage.length-1;a>=0;a--){var s=localStorage.key(a);s.indexOf(o)===0&&localStorage.removeItem(s)}}):i=E.reject("Invalid arguments"),W(i,t),i}var Bp={_driver:"localStorageWrapper",_initStorage:Ip,_support:Tp(),iterate:Mp,getItem:Cp,setItem:qp,removeItem:Pp,clear:Ap,length:Np,key:Lp,keys:Op,dropInstance:Dp};const _p=(e,t)=>e===t||typeof e=="number"&&typeof t=="number"&&isNaN(e)&&isNaN(t),Rp=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if(_p(e[r],t))return!0;r++}return!1},Id=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"},nn={},Ds={},Dt={INDEXEDDB:sp,WEBSQL:xp,LOCALSTORAGE:Bp},Hp=[Dt.INDEXEDDB._driver,Dt.WEBSQL._driver,Dt.LOCALSTORAGE._driver],Yn=["dropInstance"],ti=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Yn),Fp={description:"",driver:Hp.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function Vp(e,t){e[t]=function(){const n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function ni(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let n in t)t.hasOwnProperty(n)&&(Id(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}class Bo{constructor(t){for(let n in Dt)if(Dt.hasOwnProperty(n)){const r=Dt[n],i=r._driver;this[n]=i,nn[i]||this.defineDriver(r)}this._defaultConfig=ni({},Fp),this._config=ni({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(t){if(typeof t=="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let n in t){if(n==="storeName"&&(t[n]=t[n].replace(/\W/g,"_")),n==="version"&&typeof t[n]!="number")return new Error("Database version must be a number.");this._config[n]=t[n]}return"driver"in t&&t.driver?this.setDriver(this._config.driver):!0}else return typeof t=="string"?this._config[t]:this._config}defineDriver(t,n,r){const i=new E(function(o,a){try{const s=t._driver,l=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!t._driver){a(l);return}const c=ti.concat("_initStorage");for(let m=0,p=c.length;m<p;m++){const g=c[m];if((!Rp(Yn,g)||t[g])&&typeof t[g]!="function"){a(l);return}}(function(){const m=function(p){return function(){const g=new Error(`Method ${p} is not implemented by the current driver`),b=E.reject(g);return W(b,arguments[arguments.length-1]),b}};for(let p=0,g=Yn.length;p<g;p++){const b=Yn[p];t[b]||(t[b]=m(b))}})();const u=function(m){nn[s]&&console.info(`Redefining LocalForage driver: ${s}`),nn[s]=t,Ds[s]=m,o()};"_support"in t?t._support&&typeof t._support=="function"?t._support().then(u,a):u(!!t._support):u(!0)}catch(s){a(s)}});return Lt(i,n,r),i}driver(){return this._driver||null}getDriver(t,n,r){const i=nn[t]?E.resolve(nn[t]):E.reject(new Error("Driver not found."));return Lt(i,n,r),i}getSerializer(t){const n=E.resolve(Do);return Lt(n,t),n}ready(t){const n=this,r=n._driverSet.then(()=>(n._ready===null&&(n._ready=n._initDriver()),n._ready));return Lt(r,t,t),r}setDriver(t,n,r){const i=this;Id(t)||(t=[t]);const o=this._getSupportedDrivers(t);function a(){i._config.driver=i.driver()}function s(d){return i._extend(d),a(),i._ready=i._initStorage(i._config),i._ready}function l(d){return function(){let u=0;function m(){for(;u<d.length;){let g=d[u];return u++,i._dbInfo=null,i._ready=null,i.getDriver(g).then(s).catch(m)}a();const p=new Error("No available storage method found.");return i._driverSet=E.reject(p),i._driverSet}return m()}}const c=this._driverSet!==null?this._driverSet.catch(()=>E.resolve()):E.resolve();return this._driverSet=c.then(()=>{const d=o[0];return i._dbInfo=null,i._ready=null,i.getDriver(d).then(u=>{i._driver=u._driver,a(),i._wrapLibraryMethodsWithReady(),i._initDriver=l(o)})}).catch(()=>{a();const d=new Error("No available storage method found.");return i._driverSet=E.reject(d),i._driverSet}),Lt(this._driverSet,n,r),this._driverSet}supports(t){return!!Ds[t]}_extend(t){ni(this,t)}_getSupportedDrivers(t){const n=[];for(let r=0,i=t.length;r<i;r++){const o=t[r];this.supports(o)&&n.push(o)}return n}_wrapLibraryMethodsWithReady(){for(let t=0,n=ti.length;t<n;t++)Vp(this,ti[t])}createInstance(t){return new Bo(t)}}const zp=new Bo,Wp=zp,Ad="toniq-nft-frame";Wp.createInstance({name:Ad});const jp=[B.Html,B.Svg];function Up(e){return jp.includes(e)}const Cd={nftUrl:"",childFrameUrl:"",max:void 0,min:void 0,loadWaitDuration:{milliseconds:500},forcedFinalNftSize:void 0,forcedOriginalNftSize:void 0,extraHtml:_1.bioniq,htmlSizeQuerySelector:void 0,blockAutoPlay:void 0,blockInteraction:void 0,allowScrolling:void 0,eagerLoading:void 0,timeoutDuration:{milliseconds:1e4},blockPersistentCache:void 0,allowConsoleLogs:void 0,hideError:void 0};function Zp(e){return Js(e,ne(Cd).filter(t=>t!=="childFrameUrl"))}function Gp(e,t){return e<t}function Jp(e,t){return e>t}const Bs={width:250,height:250};function Yp({constraint:e,box:t,constraintType:n="max"}){return(n==="max"?Jp:Gp)(t.width/t.height,e.width/e.height)?"width":"height"}function ri({box:e,constraint:t,constraintType:n}){const r=Yp({box:e,constraint:t,constraintType:n});return t[r]/e[r]}function Md({box:e,ratio:t}){return ce(e,(n,r)=>r*t)}function _s({box:e,min:t,max:n}){return ce(e,(r,i)=>mt({value:i,min:(t==null?void 0:t[r])??0,max:(n==null?void 0:n[r])??1/0}))}function Kp({min:e,max:t,box:n}){const r=Qp({min:e,max:t,box:n}),i=Md({box:n,ratio:r});return{height:Math.floor(i.height||(e==null?void 0:e.height)||Bs.height),width:Math.floor(i.width||(e==null?void 0:e.width)||Bs.width)}}function Qp({min:e,max:t,box:n}){if(!e&&!t)return 1;const r=e?ri({box:n,constraint:e,constraintType:"min"}):1,i=t?ri({box:n,constraint:t,constraintType:"max"}):1,o=r>1?r:i<1?i:1,a=Md({ratio:o,box:n});return(e?ri({box:a,constraint:e,constraintType:"min"}):1)>1?r:o}var me;(function(e){e.VerticallyCenter="vertically-center",e.HideLoading="hide-loading"})(me||(me={}));const Xp=[B.Html,B.Video,B.Audio,B.Pdf],eg=[B.Html,B.Text,B.Json];function tg(e,t){return!!e&&eg.includes(t)}function ng({blockInteraction:e,nftType:t,allowScrolling:n}){return typeof e=="boolean"?!e:t==null?!1:Xp.includes(t)?!0:!!tg(n,t)}class rg extends Error{constructor(){super("Iframe is no longer attached to the DOM."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IframeDisconnectedError"})}}let ig=!1;function og(){return ig}function Ld(e,t,n){return Zs({callback(){return ag(e,t,n),!0},fallbackValue:!1})}function ag(e,t,n){if(e==="*")n||console.warn("Security warning: iFrame messenger is allowing messages from any origin with '*'");else if(!e||t.origin!==e)throw new Error(`Received message from invalid origin: ${t.origin}. Expected '${e}'`)}var Sn;(function(e){e.FromParent="from-parent",e.FromChild="from-child"})(Sn||(Sn={}));const Rs={timeout:{milliseconds:1e4}};function sg(e,t,n){return n.type===e&&n.direction===t}function lg(e){return e<2?10:e<5?100:e<10?1e3:5e3}async function cg({data:e,type:t,verifyChildData:n,iframeElement:r},i,o,a,s){if(!r)throw new Error("No iframe element was provided.");let l=0,c=!1,d,u,m,p=!1;const g={data:e,type:t},b={...g,direction:Sn.FromParent,messageId:fr(32)},x=g.type;function k(U){try{if(!Ld(i,U,!1))return;const ee=U.data;if(ee.type==="error")throw new Error(`Child threw an error: ${ee.data}`);if(og(),ee&&p&&sg(x,Sn.FromChild,ee)&&ee.messageId===b.messageId){let be=!1;try{be=n?n(ee.data):!0}catch{}if(!be)return;c=!0,u=U,d=ee}}catch(ee){m=xt(ee)}}s.addEventListener("message",k);const A=Date.now();for(;!c&&Date.now()-A<o.milliseconds&&!m;){if(!r.isConnected)throw new rg;const U=r.contentWindow;U&&(p=!0,U.postMessage(b,{targetOrigin:i})),await ui((a==null?void 0:a.milliseconds)||lg(l)),l++}if(s.removeEventListener("message",k),m)throw m;if(!c)throw new Error(`Failed to receive response from the iframe for message '${g.type}' after '${Math.ceil(o.milliseconds/1e3)}' seconds).`);if(!u)throw new Error("Never got message event from child but received a valid response");return{data:d==null?void 0:d.data,event:u}}function dg({timeout:e=Rs.timeout}=Rs){return{async sendMessageToChild(t){if(t.type==="error")throw new Error("Cannot send message to child with type 'error'. 'error' is reserved for internal error messaging.");return await cg(t,t.childOrigin,t.timeout||e,t.interval,t.globalObject??globalThis)},listenForParentMessages(t){const n=t.globalObject??globalThis;async function r(i){var l;if(!Ld(t.parentOrigin,i,!!((l=t._options)!=null&&l._DANGER_ignoreAnyOriginWarning)))return;const o=i.data,a=await t.listener({...o,originalEvent:i},()=>{n.removeEventListener("message",r)}),s={type:o.type,direction:Sn.FromChild,data:a,messageId:o.messageId};n.parent.postMessage(s,{targetOrigin:t.parentOrigin})}n.addEventListener("message",r)}}}var zi;(function(e){e.LoadNft="load-nft"})(zi||(zi={}));const ug=dg({});function fg(e){return new URL(e).origin}async function hg(e){const t=pn();e.onload=()=>{t.resolve()},await t.promise}const mg={iframeElement:void 0,latestChildIframeData:void 0,clearIframe:!1,childIframeLoading:ho({async updateCallback(e,t){if(!e.nftUrl||!e.childFrameUrl)return new Promise(()=>{});try{if(!e.isIframeReady||!t.iframeElement)return new Promise(()=>{});const n=fg(e.childFrameUrl),r=hg(t.iframeElement);t.initIframe(t.iframeElement),await r,await Kd(e.timeoutDuration.milliseconds,pg(e,{...t,iframeElement:t.iframeElement},n,e.timeoutDuration))}catch(n){throw t.onError(xt(n)),n}}})};async function pg(e,t,n,r){const i=Zp(e);let o;async function a(){try{const s=(await ug.sendMessageToChild({childOrigin:n,iframeElement:t.iframeElement,type:zi.LoadNft,data:i,verifyChildData(l){return!!(l&&l.dimensions.width&&l.dimensions.height&&l.nftType&&l.nftUrl)},timeout:r})).data;if(o instanceof Error||((s.dimensions.height!==(o==null?void 0:o.dimensions.height)||s.dimensions.width!==(o==null?void 0:o.dimensions.width))&&(o=s,t.onNftLoaded(o)),!Up(o.nftType)))return}catch(s){throw o=xt(s),s}}await a()}var dr;(function(e){e.Error="error",e.Loading="loading"})(dr||(dr={}));const ii=Cl()({tagName:Ad,stateInitStatic:mg,events:{settle:q(),nftDataLoad:q(),error:q()},styles:v`
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
    `,cleanupCallback({updateState:e}){e({clearIframe:!0,iframeElement:void 0})},renderCallback({state:e,inputs:t,updateState:n,host:r,dispatch:i,events:o}){var x;const a={...Cd,...t};if(e.childIframeLoading.updateTrigger({...a,isIframeReady:!!e.iframeElement},{initIframe(k){i(new o.settle(!1)),r.classList.remove(me.HideLoading),r.classList.remove(me.VerticallyCenter),a.childFrameUrl&&(k.src=a.childFrameUrl)},iframeElement:e.iframeElement,onNftLoaded(k){const A=r.shadowRoot.querySelector(".frame-constraint");if(!(A instanceof HTMLElement))throw new Error("Could not find frame constraint div.");A.style.width=Te(Math.floor(k.dimensions.width)),A.style.height=Te(Math.floor(k.dimensions.height));const U=_s({min:a.min,max:a.max,box:k.dimensions});k.dimensions.height<U.height?r.classList.add(me.VerticallyCenter):r.classList.remove(me.VerticallyCenter),r.style.width=Te(U.width),r.style.height=Te(U.height),i(new o.settle(!0)),i(new o.nftDataLoad(k)),r.classList.add(me.HideLoading),n({latestChildIframeData:k}),r.debugData=k},onError(k){console.error(k),i(new o.error(k))},hostElement:r}),e.clearIframe)return requestAnimationFrame(()=>{n({clearIframe:!1})}),h``;const s=a.min&&a.max?_s({box:a.min,max:a.max}):a.min,l=a.max,c=a.forcedOriginalNftSize?Kp({min:s,max:l,box:a.forcedOriginalNftSize}):void 0,d=ng({allowScrolling:a.allowScrolling,blockInteraction:a.blockInteraction,nftType:(x=e.latestChildIframeData)==null?void 0:x.nftType}),u=!a.hideError&&e.childIframeLoading.value instanceof Error?e.childIframeLoading.value:void 0,m=d||u?"":gg,p=u?v`
                  max-width: 100%;
                  max-height: 100%;
              `:c?v`
                    width: ${c.width}px;
                    height: ${c.height}px;
                `:"",g=v`
            width: ${(s==null?void 0:s.width)??250}px;
            height: ${(s==null?void 0:s.height)??250}px;
        `,b=h`
            <div class="frame-constraint" style=${p}>
                <iframe
                    ${yf(k=>{if(!(k instanceof HTMLIFrameElement))throw new Error("iframe was created but did not give us back an iframe element");e.iframeElement||(window.lastFrame=k,n({iframeElement:k}))})}
                    loading=${a.eagerLoading?"eager":"lazy"}
                ></iframe>
            </div>
        `;return h`
            ${Xe(!u,h`
                    <div class="loading-wrapper">
                        <slot name=${dr.Loading}>Loading...</slot>
                    </div>
                `)}
            <div class="min-size" style=${g}>
                ${Xe(!!u,h`
                        <div class="error-wrapper">
                            <slot name=${dr.Error}>
                                <${Ls}></${Ls}>
                            </slot>
                        </div>
                    `,b)}
            </div>
            ${m}
        `}}),gg=h`
    <div class="click-cover"></div>
`,Hs=P()({tagName:"toniq-bitgen-collection-info-display",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
        }

        ${ii} {
            border: 1px solid #eee;
            border-radius: 16px;
        }

        p {
            ${He};
        }
    `,renderCallback({inputs:e}){const t=e.bitgenCollection.collection.creator?h`
                  <p>${e.bitgenCollection.collection.creator}</p>
              `:j,n=e.bitgenCollection.collection.description?h`
                  <p>${e.bitgenCollection.collection.description}</p>
              `:j;return h`
            <${z.assign({level:Y.H2})}>
                ${e.bitgenCollection.collection.name||"(empty name)"}
            </${z}>
            ${t}
            <${ii.assign({childFrameUrl:E1,nftUrl:lu(ld,e.bitgenCollection.ids.collectionImageInscriptionId),blockAutoPlay:!0,eagerLoading:!0,max:{width:350,height:350},min:{width:300,height:300}})}></${ii}>
            ${n}
        `}}),oi=P()({tagName:"toniq-bitgen-collection-display",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            gap: 64px;
            box-sizing: border-box;
            padding: 0 32px 32px;
        }
    `,renderCallback({inputs:e}){return h`
            <${Hs.assign({bitgenCollection:e.bitgenCollection})}></${Hs}>
            <${Ms.assign({bitgenCollection:e.bitgenCollection,randomFrameCount:5})}></${Ms}>
            <${Es.assign({bitgenCollection:e.bitgenCollection})}></${Es}>
        `}}),Oe=P()({tagName:"toniq-labelled-input",events:{valueChange:q()},styles:v`
        label {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        ${Hn} {
            width: 100%;
        }

        p {
            ${He};
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){return h`
            <label>
                <p class="label-label">${e.label}</p>
                <${Hn.assign({...e})}
                    ${T(Hn.events.valueChange,r=>{t(new n.valueChange(r.detail))})}
                ></${Hn}>
            </label>
        `}}),Vn=P()({tagName:"toniq-layer-edit",styles:v`
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

        ${_} {
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
    `,events:{layerChange:q(),layerDelete:q()},renderCallback({inputs:e,dispatch:t,events:n}){function r(o){const a=ur(e.bitgenLayer),s=o(a)||a;t(new n.layerChange(s))}const i=e.bitgenLayer.traits.map((o,a)=>{const s=Pd(o).map(([l,c])=>h`
                        <${Oe.assign({label:vg[l],value:c})}
                            ${T(Oe.events.valueChange,d=>{r(u=>{const m=u.traits[a];tu(m),m[l]=d.detail})})}
                        ></${Oe}>
                    `);return h`
                <div class="trait-edit">
                    <${_.assign({icon:yi,variant:le.Secondary})}
                        class="delete-trait"
                        ${T("click",()=>{r(l=>{l.traits=Wi(l.traits,[a])})})}
                    ></${_}>
                    ${s}
                </div>
            `});return h`
            <${_.assign({icon:yi,variant:le.Secondary})}
                class="delete-layer"
                ${T("click",()=>{t(new n.layerDelete)})}
            ></${_}>
            <${Oe.assign({label:"Layer Name (type)",value:e.bitgenLayer.type})}
                ${T(Oe.events.valueChange,o=>{r(a=>{a.type=o.detail})})}
            ></${Oe}>
            <div class="traits-header">
                <${z.assign({level:Y.H4})}>Traits</${z}>
                <${_.assign({icon:go,variant:le.Secondary})}
                    ${T("click",()=>{r(o=>{o.traits=[ed.defaultValue,...o.traits]})})}
                ></${_}>
            </div>
            ${i}
        `}}),vg={inscriptionId:"Inscription Id",name:"Name"},Fs=P()({tagName:"toniq-bitgen-collection-edit",styles:v`
        :host {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 0 32px 32px;
            width: 500px;
        }

        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            position: sticky;
            top: 0;
            background-color: ${$.pagePrimary.backgroundColor};
            z-index: 200;
        }

        ${_} {
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

        ${ht} {
            position: relative;
            z-index: 1000;
        }
    `,renderCallback({inputs:e,dispatch:t,events:n}){function r(u){const m=ur(e.bitgenCollection),p=u(m)||m;t(new Mo(p))}const i=ai("Collection Info",e.bitgenCollection.collection,({key:u,value:m})=>{r(p=>{p.collection[u]=m})},wg),o=ai("Size",e.bitgenCollection.size,({key:u,value:m})=>{r(p=>{const g=Number(m);isNaN(g)||(p.size[u]=g)})},{height:"Height",width:"Width"}),a=ai("Ids",e.bitgenCollection.ids,({key:u,value:m})=>{r(p=>{p.ids[u]=m})},bg),s=e.bitgenCollection.layers.map((u,m)=>h`
                    <${Vn.assign({bitgenLayer:u})}
                        ${T(Vn.events.layerChange,p=>{r(g=>{g.layers[m]=p.detail})})}
                        ${T(Vn.events.layerDelete,()=>{r(p=>{p.layers=Wi(p.layers,[m])})})}
                    ></${Vn}>
                `),l=s.length?s:h`
                  <p>No layers yet.</p>
              `,c=Ws(Qc).map(u=>({label:u,value:u})).sort((u,m)=>m.value.localeCompare(u.value)),d=c.find(u=>u.value===e.bitgenCollection.selectedRenderer);return h`
            ${[i,o,a]}
            <section>
                <div class="section-header">
                    <${z.assign({level:Y.H3})}>
                        Renderer
                    </${z}>
                </div>

                <${ht.assign({options:c,value:d})}
                    ${T(ht.events.selectChange,u=>{r(m=>{m.selectedRenderer=u.detail.value})})}
                ></${ht}>
            </section>
            <section>
                <div class="section-header">
                    <${z.assign({level:Y.H3})}>
                        Layers
                    </${z}>
                    <${_.assign({icon:go,variant:le.Secondary})}
                        ${T("click",()=>{r(u=>{u.layers=[td.defaultValue,...u.layers]})})}
                    ></${_}>
                </div>

                <div class="layers">${l}</div>
            </section>
        `}});function ai(e,t,n,r){const i=Object.entries(t).map(([o,a])=>h`
                <${Oe.assign({label:(r==null?void 0:r[o])||o,value:String(a)})}
                    ${T(Oe.events.valueChange,s=>{n({key:o,value:s.detail})})}
                ></${Oe}>
            `);return h`
        <section>
            <${z.assign({level:Y.H3})}
                class="section-header"
            >
                ${e}
            </${z}>
            <div class="collection-properties">${i}</div>
        </section>
    `}const wg={creator:"Creator",description:"Description",name:"Name"},bg={bitcoinAddress:"Bitcoin Receiving Address",collectionImageInscriptionId:"Image Inscription Id",collectionJavascriptInscriptionId:"Collection JS Inscription Id",collectionJsonInscriptionId:"Collection JSON Inscription Id",rendererJavascriptInscriptionId:"Renderer JS Inscription Id"},ct=P()({tagName:"toniq-bitgen-collection-nav",styles:v`
        ${kr}

        :host {
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        ${z} {
            padding: 0 16px;
        }

        .nav-header {
            display: flex;
            gap: 24px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 16px;
        }

        .nav-header ${_}, .delete-collection ${_} {
            height: 32px;
            width: 32px;
        }

        .nav-footer {
            padding: 8px;
            background-color: ${$.pagePrimary.backgroundColor};
            display: flex;
            justify-content: center;
        }

        .nav-footer ${_} {
            height: 32px;
            flex-grow: 1;
        }

        nav {
            overflow-y: auto;
            flex-grow: 1;
        }

        ol,
        li {
            ${He};
            list-style: none;
        }

        li {
            display: flex;
            position: relative;
        }

        .collection-name button {
            ${X};
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
            transition: background-color ${Z.interaction};
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
    `,events:{selectionChange:q(),collectionCreate:q(),collectionDelete:q(),editRawTrigger:q()},renderCallback({inputs:e,dispatch:t,events:n}){const r=Vu(e.bitgenCollections,i=>i.editId,(i,o)=>h`
                    <li
                        class="collection-name ${se({"selected-collection":e.selectedBitgenCollectionIndex===o})}"
                    >
                        <div class="delete-collection">
                            <${_.assign({icon:yi,variant:le.Secondary})}
                                ${T("click",()=>{t(new n.collectionDelete(o))})}
                            ></${_}>
                        </div>
                        <button
                            ${T("click",()=>{t(new n.selectionChange(o))})}
                        >
                            ${i.collection.name||"(empty name)"}
                        </button>
                    </li>
                `);return h`
            <div class="nav-header">
                <${z.assign({level:Y.H4})}>Collections</${z}>
                <${_.assign({icon:go,variant:le.Secondary})}
                    ${T("click",()=>{t(new n.collectionCreate)})}
                ></${_}>
            </div>
            <nav>
                <ol>
                    ${r}
                </ol>
            </nav>
            <div class="nav-footer">
                <${_.assign({text:"Edit Raw",variant:le.Secondary})}
                    ${T("click",()=>{t(new n.editRawTrigger)})}
                ></${_}>
            </div>
        `}}),rn=P()({tagName:"toniq-raw-edit",styles:v`
        ${kr}

        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        textarea {
            ${G.monospaceFont};
            font-size: 1.5em;
            flex-grow: 1;
            resize: none;
        }

        footer {
            display: flex;
            gap: 32px;
            align-items: center;
        }
    `,events:{codeChange:q(),resetAllData:q()},stateInitStatic:{currentCode:void 0,error:void 0},renderCallback({state:e,updateState:t,inputs:n,dispatch:r,events:i}){e.currentCode==null&&t({currentCode:n.code,error:n.verifyCode(n.code)});const o=n.showErrorPrompt?h`
                  <${z.assign({level:Y.H4})}>
                      Saved data is invalid. Either fix it and save your fixes or reset all data to
                      the defaults.
                  </${z}>
              `:j;return h`
            ${o}
            <textarea
                .value=${e.currentCode}
                ${T("input",a=>{const l=Pl(a,HTMLTextAreaElement).value,c=n.verifyCode(l);t({currentCode:l,error:c})})}
            ></textarea>
            <footer>
                <${_.assign({disabled:!!e.error,text:"Save"})}
                    ${T("click",()=>{e.currentCode&&!n.verifyCode(e.currentCode)&&r(new i.codeChange(e.currentCode))})}
                ></${_}>
                <${_.assign({text:"Reset to defaults",variant:le.Outline})}
                    ${T("click",()=>{r(new i.resetAllData)})}
                ></${_}>
                <${Ye}>${kt(e.error)}</${Ye}>
            </footer>
        `}}),si=P()({tagName:"toniq-bitgen-collections",styles:v`
        ${kr}

        :host {
            display: flex;
            overflow: hidden;
        }

        main {
            display: flex;
            overflow: hidden;
            align-items: stretch;
        }

        section {
            flex-shrink: 0;
            overflow-x: hidden;
        }

        .edit-section,
        .display-section {
            overflow-y: auto;
        }

        .display-section {
            flex-grow: 1;
            flex-shrink: 1;
        }

        ${oi}, ${ct} {
            height: 100%;
        }

        .failure-edit {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 16px;
        }

        .failure-edit ${rn} {
            flex-grow: 1;
        }
    `,stateInitStatic:{currentBitgenCollections:ho(),selectedBitgenCollectionIndex:0,editRaw:!1},initCallback({inputs:e,state:t}){t.currentBitgenCollections.setNewPromise(e.webClientInterface.collectionStorage.loadStoredBitgenCollections())},renderCallback({state:e,inputs:t,updateState:n}){async function r(s){await t.webClientInterface.collectionStorage.storeBitgenCollections(s),e.currentBitgenCollections.setResolvedValue(s)}if(Ml(e.currentBitgenCollections.value)){if(gi(e.currentBitgenCollections.value)||e.editRaw||!ol(e.currentBitgenCollections.value,xs)){const s=gi(e.currentBitgenCollections.value)?h`
                      <${Ye}>
                          ${kt(e.currentBitgenCollections.value)}
                      </${Ye}>
                  `:j;return h`
                <div class="failure-edit">
                    ${s}
                    <${rn.assign({showErrorPrompt:!e.editRaw,code:JSON.stringify(e.currentBitgenCollections.value,null,4),verifyCode(l){return Zs({callback(){io(JSON.parse(l),xs)},catchCallback(c){return xt(c)}})}})}
                        ${T(rn.events.codeChange,async l=>{await r(JSON.parse(l.detail)),n({editRaw:!1})})}
                        ${T(rn.events.resetAllData,async()=>{await r(T1()),n({editRaw:!1})})}
                    ></${rn}>
                </div>
            `}}else return h`
                <${sr.assign({size:vt.WholePage})}></${sr}>
            `;const i=e.currentBitgenCollections.value;if(!Ui(i,1))return h`
                <${Ye}>No collections to edit.</${Ye}>
            `;const o=i[e.selectedBitgenCollectionIndex]||i[0];async function a(s){const l=ur(i),c=s(l)||l;await r(c)}return h`
            <main
                ${T(Mo,async s=>{await a(l=>{const c=Ys(o,s.detail);l[e.selectedBitgenCollectionIndex]=c})})}
            >
                <section>
                    <${ct.assign({bitgenCollections:i,selectedBitgenCollectionIndex:e.selectedBitgenCollectionIndex})}
                        ${T(ct.events.selectionChange,s=>{n({selectedBitgenCollectionIndex:s.detail})})}
                        ${T(ct.events.collectionCreate,async()=>{await a(s=>{s.splice(0,0,rd())}),n({selectedBitgenCollectionIndex:0})})}
                        ${T(ct.events.editRawTrigger,()=>{n({editRaw:!0})})}
                        ${T(ct.events.collectionDelete,async s=>{await a(l=>Wi(l,[s.detail]))})}
                    ></${ct}>
                </section>
                <section class="edit-section">
                    <${Fs.assign({bitgenCollection:o})}></${Fs}>
                </section>
                <section class="display-section">
                    <${oi.assign({bitgenCollection:o})}></${oi}>
                </section>
            </main>
        `}});vo({tagName:"toniq-app",styles:v`
        :host {
            display: flex;
            flex-direction: column;
            ${G.paragraphFont};
            overflow: hidden;
            max-height: 100%;
            min-height: 100%;
        }

        ${si} {
            flex-grow: 1;
        }

        ${z} {
            margin: 0 0 16px 16px;
        }
    `,stateInitStatic:{webClientInterface:ho({defaultValue:x1()})},renderCallback({state:e}){const t=e.webClientInterface.value;if(Ml(t)){if(gi(t))return h`
                <${Ye}>${kt(t)}</${Ye}>
            `}else return h`
                <${sr.assign({size:vt.WholePage})}></${sr}>
            `;return h`
            <${z.assign({level:Y.H1})}>
                BitGen
            </${z}>
            <${si.assign({webClientInterface:t})}></${si}>
        `}});export{io as a,xs as b,rd as c,Ig as d,Wp as l};
